import type { AnyAction } from 'redux'
import type { AsyncDataState, Data, QuizListRequest } from '../model/interfaces'
import { MAIN_DATA_FETCH, MAIN_DATA_FETCH_FAIL, MAIN_DATA_FETCH_SUCCESS } from '@/__data__/constants/actions-types'

type MainDataState = Partial<QuizListRequest> & AsyncDataState<Data>

const initialState: MainDataState = {
  data: null,
  loading: false,
  error: null,
}

function fetchHandler(state: MainDataState, _action: AnyAction): MainDataState {
  return {
    ...state,
    loading: true,
  }
}

function fetchSuccessHandler(state: MainDataState, action: AnyAction): MainDataState {
  return {
    ...state,
    data: action.data,
    loading: false,
  }
}

function fetchErrorHandler(state: MainDataState, action: AnyAction): MainDataState {
  return {
    ...state,
    data: null,
    loading: false,
    error: action.error || true,
  }
}

const handlers = {
  [MAIN_DATA_FETCH]: fetchHandler,
  [MAIN_DATA_FETCH_SUCCESS]: fetchSuccessHandler,
  [MAIN_DATA_FETCH_FAIL]: fetchErrorHandler,
}

export function quizzesList(state: MainDataState = initialState, action: AnyAction) {
  return Object.prototype.hasOwnProperty.call(handlers, action.type) ? handlers[action.type](state, action) : state
}
