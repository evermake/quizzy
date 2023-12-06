import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useGetQuizByIdQuery} from "~/store/services/quizService";
import Question from "./components/Question";
import QuizDetails from "./components/QuizDetails";
import QuestionPagination from "./components/QuestionPagination";
import Timer from "./components/Timer";
import {useAppDispatch, useAppSelector} from "~/store";
import {updatePaginationId, updateQuestionId, updateStatus, updateTime} from "~/store/reducer/quizSlice";
import {QuizStatus} from "~/types/state/quiz";
import Review from "./components/Review";
import Results from "./components/Results";

export const QuizDetailPage: React.FC = () => {

    const {slug} = useParams()

    const {data: quiz, error, isLoading} = useGetQuizByIdQuery(slug)

    const [userAnswers, setUserAnswers] = useState({});
    const dispatch = useAppDispatch();

    const {status, questionId} = useAppSelector((state) => state.quizState);

    const handleStartClickBtn = () => {
        dispatch(updateQuestionId(quiz.questionIds[0]))
        dispatch(updateTime(quiz.duration || 600))
        dispatch(updateStatus(QuizStatus.IN_PROGRESS))
    }

    const submitAnswer = (answer) => {
        userAnswers[questionId] = answer;
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    if (status === QuizStatus.NOT_STARTED) {
        return (
            <QuizDetails quiz={quiz} handleStartClickBtn={handleStartClickBtn}/>
        )
    }

    if (status === QuizStatus.IN_PROGRESS && questionId) {
        return (<div>
            <Timer/>
            <Question/>
            <QuestionPagination quiz={quiz}/>
            <button onClick={() => dispatch(updateStatus(QuizStatus.REVIEW))}>Finish attempt</button>
        </div>)
    }

    if (status === QuizStatus.REVIEW) {
        return <>
            <Review questionIds={quiz.questionIds}/>
        </>
    }

    if (status === QuizStatus.FINISHED) {
        return <Results/>
    }
}
