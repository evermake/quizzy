import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getConfig } from '@ijl/cli';

import { QuizListRequest } from '../model/interfaces';
import {
    MAIN_DATA_FETCH,
    MAIN_DATA_FETCH_SUCCESS,
    MAIN_DATA_FETCH_FAIL
} from '../constants/actions-types';

const getFetchAction = () => ({
    type: MAIN_DATA_FETCH,
});

const getSuccessAction = (data) => ({
    type: MAIN_DATA_FETCH_SUCCESS,
    data
});

const getErrorAction = () => ({
    type: MAIN_DATA_FETCH_FAIL,
});

export default () => async (dispatch: any) => {
    dispatch(getFetchAction());

    const requestProps: AxiosRequestConfig = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const mainApiBaseUrl = getConfig()['quizzy.api.base.url'];
    try {
        const answer: AxiosResponse<QuizListRequest> = await axios(`${mainApiBaseUrl}/getQuizzesList`, requestProps);

        if (answer.data?.status?.code === 0) {
            dispatch(getSuccessAction(answer.data));
        } else {
            dispatch(getErrorAction());
        }

    } catch (error) {
        dispatch(getErrorAction());
    }
};
