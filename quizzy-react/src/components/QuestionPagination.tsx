import React from 'react';

const QuestionPagination = ({quiz, setQuestionId}) => {
    return (
        <div>
            {quiz.questionIds.map((questionId, id) => {
                    return <button
                        key={questionId}
                        onClick={() => setQuestionId(questionId)}>
                        {id + 1}
                    </button>
                }
            )}

        </div>
    );
};

export default QuestionPagination;
