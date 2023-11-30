import React, {useState} from 'react';
import {useGetQuestionByIdQuery} from "~/services/questionService";

const Question = ({id, submitAnswer}) => {

    const {data: question, error, isLoading} = useGetQuestionByIdQuery(id)
    const [userAnswer, setAnswer] = useState<string>("");

    const proceedAnswer = () => {
        if (question.answers.includes(userAnswer)) {
            submitAnswer(userAnswer)
        }
    }

    if (isLoading) {
        return <>Loading...</>
    }

    if (error) {
        return <>Error {error}</>
    }

    if (!question) {
        return <>No data for question!</>
    }

    if (question.type === "option") {
        return <>
            <>{question.content}</>
            <ul>
                {question.answers.map(answer =>
                    <li key={answer} onClick={() => setAnswer(answer)}>{answer}</li>
                )}
            </ul>
            <div>Current answer: {userAnswer}</div>
            <button onClick={proceedAnswer}>Submit answer</button>
        </>
    }

    if (question.type === 'short') {
        return <div>
            <div>{question.content}</div>
            <div>
                Current answer: <input onChange={(event) => setAnswer(event.target.value)}></input>
            </div>
            <button onClick={proceedAnswer}>Submit answer</button>
        </div>
    }
};

export default Question;
