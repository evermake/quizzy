import React from 'react';
import {useGetQuizzesQuery} from "~/services/quizService";
import {Link} from "react-router-dom";
import {AppRoute} from "~/constants";

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
                <Link key={quiz.id} to={AppRoute.QUIZZES + '/' + quiz.id}>
                    <div>
                        {quiz.title}
                    </div>
                </Link>
            )}
        </div>
    );
};

export default QuizList;
