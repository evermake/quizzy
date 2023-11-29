import React from 'react';
import {useGetQuizzesQuery} from "~/services/quizService";

const QuizList = () => {

    const {data: quizList, error, isLoading} = useGetQuizzesQuery()

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>error: {error}</div>
    }

    return (
        <div>
            {quizList.map(quiz =>
                <div key={quiz.id}>
                    {quiz.title} |
                    {quiz.opensAt} |
                    {quiz.closesAt}
                </div>
            )}
        </div>
    );
};

export default QuizList;
