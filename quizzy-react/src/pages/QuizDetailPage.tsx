import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {useGetQuizByIdQuery} from "~/services/quizService";
import Question from "~/components/Question";
import QuizDetails from "~/components/QuizDetails";
import QuestionPagination from "~/components/QuestionPagination";
import Timer from "~/components/Timer";
import {useAppDispatch, useAppSelector} from "~/store";
import {updateStatus} from "~/store/reducer/quizSlice";
import {QuizStatus} from "~/types/state/quiz";
import Results from "~/components/Results";

export const QuizDetailPage: React.FC = () => {

    const {slug} = useParams()

    const [questionId, setQuestionId] = useState();

    const {data: quiz, error, isLoading} = useGetQuizByIdQuery(slug, questionId)

    const [showStartInfo, setShowStartInfo] = useState(true)
    const [showQuestions, setShowQuestions] = useState(false)
    const [showResults, setShowResults] = useState(false)

    const [userAnswers, setUserAnswers] = useState({});
    const dispatch = useAppDispatch();

    const { status, time } = useAppSelector((state) => state.quizState);

    useEffect(() => {
        if (time < 0) {
            dispatch(updateStatus(QuizStatus.FINISHED))
        }
    }, [time]);


    const handleStartClickBtn = () => {
        setQuestionId(quiz.questionIds[0])
        dispatch(updateStatus(QuizStatus.IN_PROGRESS))
    }

    const handleFinishClickBtn = () => {
        dispatch(updateStatus(QuizStatus.FINISHED))
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

    if (!questionId) {
        return <>No such question!</>
    }

    if (status === QuizStatus.IN_PROGRESS && questionId) {

        return <div>
            <Timer/>
            <Question id={questionId} submitAnswer={submitAnswer}/>
            <QuestionPagination quiz={quiz} setQuestionId={setQuestionId}/>
            <button onClick={handleFinishClickBtn}>Finish attempt</button>
        </div>
    }

    if (status === QuizStatus.FINISHED) {
        return <Results userAnswers={userAnswers}/>
    }
}
