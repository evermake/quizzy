import React from 'react';
import {useAppDispatch, useAppSelector} from "~/store";
import {updateStatus} from "~/store/reducer/quizSlice";
import {QuizStatus} from "~/types/state/quiz";

const Review = ({questionIds}) => {

    const {userAnswers} = useAppSelector((state) => state.quizState);

    const emptyArr = Array.from({length: questionIds.length}, () => "No answer");
    const dispatch = useAppDispatch();

    const keys = Object.keys(userAnswers)

    const answers = emptyArr.map((answer, id) => {
        if (keys.includes(String(id))) {
            return userAnswers[id]
        }
        return emptyArr[id]
    })

    return (
        <div>
            <h2>Review quiz</h2>
            {answers.map((answer, id) =>
                <div>#{id + 1}: {answer}</div>)}
            <button onClick={()=>dispatch(updateStatus(QuizStatus.IN_PROGRESS))}>Return to quiz</button>
            <button onClick={()=>dispatch(updateStatus(QuizStatus.FINISHED))}>Finish</button>
        </div>
    );
};

export default Review;
