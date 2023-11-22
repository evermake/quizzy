import { MAIN_DATA_FETCH_SUCCESS, MAIN_DATA_FETCH, MAIN_DATA_FETCH_FAIL } from '@/__data__/constants/actions-types';
import { AsyncDataState, QuizListRequest, Data } from '../model/interfaces';
import { AnyAction } from 'redux';

type MainDataState = Partial<QuizListRequest> & AsyncDataState<Data>;

const initialState: MainDataState = {
    data: null,
    loading: false,
    error: null
};

const fetchHandler = (state: MainDataState, action: AnyAction): MainDataState => ({
    ...state,
    loading: true,
});

const fetchSuccessHandler = (state: MainDataState, action: AnyAction): MainDataState => ({
    ...state,
    data: action.data!.data,
    loading: false,
});

const fetchErrorHandler = (state: MainDataState, action: AnyAction): MainDataState => ({
    ...state,
    data: null,
    loading: false,
    error: action.error || true
});

const handlers = {
    [MAIN_DATA_FETCH]: fetchHandler,
    [MAIN_DATA_FETCH_SUCCESS]: fetchSuccessHandler,
    [MAIN_DATA_FETCH_FAIL]: fetchErrorHandler
};

export const quizzesList = (state: MainDataState = initialState, action: AnyAction) =>
    Object.prototype.hasOwnProperty.call(handlers, action.type) ? handlers[action.type](state, action) : state;
