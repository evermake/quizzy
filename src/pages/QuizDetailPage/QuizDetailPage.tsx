import React from 'react'
import { useParams } from 'react-router-dom'
import QuestionInfo from './components/QuestionInfo'
import QuizDetails from './components/QuizDetails'
import QuestionPagination from './components/QuestionPagination'
import Timer from './components/Timer'
import Review from './components/Review'
import Results from './components/Results'
import { useGetQuizByIdQuery } from '@/store/services/quizService'
import { useAppDispatch, useAppSelector } from '@/store'
import { startQuiz, updateStatus, updateTime } from '@/store/reducer/quizSlice'
import { QuizStatus } from '@/types/state/quiz'

export const QuizDetailPage: React.FC = () => {
  const { slug } = useParams()

  const { data: quiz, error, isLoading } = useGetQuizByIdQuery(slug)

  const dispatch = useAppDispatch()

  const { status, questionId, quizId, time } = useAppSelector(state => state.quizState)

  const handleStartClickBtn = () => {
    dispatch(startQuiz({
      quizId: quiz.id,
      duration: quiz.duration,
      questionIds: quiz.questionIds,
    }))
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
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
      <QuizDetails quiz={quiz} handleStartClickBtn={handleStartClickBtn} />
    )
  }

  if (status === QuizStatus.IN_PROGRESS && questionId) {
    return (
      <div>
        <Timer
          time={time}
          finishQuiz={() =>
            dispatch(updateStatus(QuizStatus.FINISHED))}
          updateTimer={() => {
            dispatch(updateTime(time - 1))
          }}
        />
        <QuestionInfo />
        <QuestionPagination quiz={quiz} />
        <button onClick={() => dispatch(updateStatus(QuizStatus.REVIEW))}>Finish attempt</button>
      </div>
    )
  }

  if (status === QuizStatus.REVIEW) {
    return (
      <>
        <Timer
          time={time}
          finishQuiz={() =>
            dispatch(updateStatus(QuizStatus.FINISHED))}
          updateTimer={() => {
            dispatch(updateTime(time - 1))
          }}
        />
        <Review questionIds={quiz.questionIds} />
      </>
    )
  }

  if (status === QuizStatus.FINISHED) {
    return <Results questionIds={quiz.questionIds} />
  }
}
