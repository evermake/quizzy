import React from 'react'
import QuizzesList from '@/components/QuizzesList'
import {PageLoader} from '@ijl/uds-ui';
import {createStructuredSelector} from "reselect";
import {getError, getLoading, getQuizzes} from "@/__data__/selectors/quizzesList";
import getMainDataAction from "@/__data__/actions/index";
import { connect } from 'react-redux';

const Homepage: React.FC = ({getMainData, quizzes, isLoading, error}) => {
    React.useEffect(() => {
        getMainData();
    }, []);

    if (error) {
        // return <Error link={getNavigationsValue('main')} />;
        return <h3>Something went wrong</h3>
    }

    if (isLoading) {
        return <PageLoader/>;
    }

    if (quizzes) {
        return (
            <>
                <h1>Quizzes</h1>
                <React.Suspense fallback={<PageLoader/>}>
                    <QuizzesList quizzes={quizzes}/>
                </React.Suspense>
            </>
        )
    }
}


const mapStateToProps = () => createStructuredSelector({
    quizzes: getQuizzes,
    isLoading: getLoading,
    error: getError,
});

export default connect(mapStateToProps, { getMainData: getMainDataAction })(Homepage);
