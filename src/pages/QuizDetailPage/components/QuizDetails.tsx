import React from 'react';

const QuizDetails = ({quiz, handleStartClickBtn}) => {
    return (
        <div>
            <div>
                {quiz.title}
            </div>
            <div>
                description: {quiz.descr}
            </div>
            <div>
                Starts at: {quiz.opensAt}
            </div>
            <div>
                Finishes at: {quiz.closesAt}
            </div>
            <button onClick={handleStartClickBtn}>
                Start Quiz
            </button>
        </div>
    );
};

export default QuizDetails;
