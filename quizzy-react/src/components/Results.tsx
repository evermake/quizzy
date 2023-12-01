import React from 'react';
import {useAppSelector} from "~/store";

const Results = ({questionIds}) => {

    const {userAnswers} = useAppSelector((state) => state.quizState);

    const emptyArr = Array.from({length: questionIds.length}, () => "No answer");

    const keys = Object.keys(userAnswers)

    const answers = emptyArr.map((answer, id) => {
        if (keys.includes(String(id))) {
            return userAnswers[id]
        }
        return emptyArr[id]
    })

    return (
        <div>
            <h2>Results</h2>
            {answers.map((answer, id) =>
                <div>#{id + 1}: {answer}</div>)}
        </div>
    );
};

export default Results;
