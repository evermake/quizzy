import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {useGetQuizByIdQuery} from "~/services/quizService";
import Question from "~/components/Question";
import QuizDetails from "~/components/QuizDetails";
import QuestionPagination from "~/components/QuestionPagination";

export const QuizDetailPage: React.FC = () => {

    const {slug} = useParams()

    const [questionId, setQuestionId] = useState();

    const {data: quiz, error, isLoading} = useGetQuizByIdQuery(slug, questionId)

    const [showStartInfo, setShowStartInfo] = useState(true)
    const [showQuestions, setShowQuestions] = useState(false)
    const [showResults, setShowResults] = useState(false)

    const [userAnswers, setUserAnswers] = useState({});

    const handleStartClickBtn = () => {
        setShowStartInfo(false);
        setQuestionId(quiz.questionIds[0])
        setShowQuestions(true);
    }

    const handleFinishClickBtn = () => {
        setShowQuestions(false);
        setShowResults(true);
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

    if (showStartInfo) {
        return (
            <QuizDetails quiz={quiz} handleStartClickBtn={handleStartClickBtn}/>
        )
    }

    if (!questionId) {
        return <>No such question!</>
    }

    if (showQuestions && questionId) {
        return <div>
            <Question id={questionId} submitAnswer={submitAnswer}/>
            <QuestionPagination quiz={quiz} setQuestionId={setQuestionId}/>
            <button onClick={handleFinishClickBtn}>Finish attempt</button>
        </div>
    }

    if (showResults) {
        return <div>
            <h2>Results</h2>
            {Object.values(userAnswers).map((answer, idx)=>
                <div>#{idx + 1}: {answer}</div>)}
        </div>
    }
}
