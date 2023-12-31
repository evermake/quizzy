import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Button_,
  Container,
  LoadingContainer,
} from '../Pages.styled'
import QuizDetails from './components/QuizDetails'
import QuestionPagination from './components/QuestionPagination'
import Timer from './components/Timer'
import Review from './components/Review'
import Results from './components/Results'
import { useGetQuizByIdQuery } from '@/store/services/quizService'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  resetQuiz,
  startQuiz,
  updatePaginationId,
  updateQuestionId,
  updateStatus,
  updateTime,
  updateUserAnswer,
} from '@/store/reducer/quizSlice'
import { QuizStatus } from '@/types/state/quiz'
import { AppRoute } from '@/constants'
import QuestionContainer from '@/pages/QuizDetailPage/QuestionContainer/QuestionContainer'

export const QuizDetailPage: React.FC = () => {
  const { slug } = useParams()

  const { data: quiz, error, isLoading } = useGetQuizByIdQuery(slug)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { status, questionId, quizId, time, userAnswers, paginationId } = useAppSelector(state => state.quizState)

  if (isLoading) {
    return <LoadingContainer>Loading...</LoadingContainer>
  }

  if (error) {
    return (
      <div>
        Error: {error}
      </div>
    )
  }
  if (quizId && quiz.id !== quizId) {
    return (
      <h2>You have another active quiz now</h2>
    )
  }

  if (status === QuizStatus.NOT_STARTED) {
    return (
      <Container>
        <QuizDetails
          quiz={quiz}
          handleStartBtn={() => {
            dispatch(startQuiz({
              quizId: quiz.id,
              duration: quiz.duration,
              questionIds: quiz.questionIds,
            }))
          }}
        />
      </Container>
    )
  }

  if (status === QuizStatus.IN_PROGRESS && questionId) {
    return (
      <div>
        <Container>
          <Timer
            time={time}
            finishQuiz={() =>
              dispatch(updateStatus(QuizStatus.FINISHED))}
            updateTimer={() => {
              dispatch(updateTime(time - 1))
            }}
          />
          <QuestionContainer
            questionId={questionId}
            userAnswers={userAnswers}
            handleChangeAnswer={(answer, isCorrect) => dispatch(updateUserAnswer({
              answer,
              isCorrect,
            }))}
            paginationId={paginationId}
          />
          <QuestionPagination
            questionIds={quiz.questionIds}
            handlePaginateBtn={(questionId, id) => {
              dispatch(updatePaginationId(id))
              dispatch(updateQuestionId(questionId))
            }}
          />
          <Button_ onClick={() => dispatch(updateStatus(QuizStatus.REVIEW))}>
            Finish attempt
          </Button_>
        </Container>
      </div>
    )
  }

  if (status === QuizStatus.REVIEW) {
    return (
      <>
        <Container>
          <Timer
            time={time}
            finishQuiz={() =>
              dispatch(updateStatus(QuizStatus.FINISHED))}
            updateTimer={() => {
              dispatch(updateTime(time - 1))
            }}
          />
          <Review
            questionIds={quiz.questionIds}
            userAnswers={userAnswers}
            handleReturnBtn={() => dispatch(updateStatus(QuizStatus.IN_PROGRESS))}
            handleFinishBtn={() => dispatch(updateStatus(QuizStatus.FINISHED))}

          />
        </Container>
      </>

    )
  }

  if (status === QuizStatus.FINISHED) {
    return (
      <Container>
        <Results
          questionIds={quiz.questionIds}
          userAnswers={userAnswers}
          handleResetQuizBtn={() => {
            dispatch(resetQuiz())
            navigate(AppRoute.HOME)
          }}
        />
      </Container>
    )
  }
}
