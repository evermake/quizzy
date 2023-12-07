import React from 'react';
import {useAppDispatch} from "@/store";
import {updatePaginationId, updateQuestionId} from "@/store/reducer/quizSlice";

const QuestionPagination = ({quiz}) => {
    const dispatch = useAppDispatch();

    return (
        <div>
            {quiz.questionIds.map((questionId, id) => {
                    return <button
                        key={questionId}
                        onClick={() =>{
                            dispatch(updatePaginationId(id))
                            dispatch(updateQuestionId(questionId))}}>
                        {id + 1}
                    </button>
                }
            )}

        </div>
    );
};

export default QuestionPagination;
