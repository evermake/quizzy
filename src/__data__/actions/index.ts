import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { getConfigValue } from '@ijl/cli'

import type { QuizListRequest } from '../model/interfaces'
import {
  MAIN_DATA_FETCH,
  MAIN_DATA_FETCH_FAIL,
  MAIN_DATA_FETCH_SUCCESS,
} from '../constants/actions-types'

function getFetchAction() {
  return {
    type: MAIN_DATA_FETCH,
  }
}

function getSuccessAction(data) {
  return {
    type: MAIN_DATA_FETCH_SUCCESS,
    data,
  }
}

function getErrorAction() {
  return {
    type: MAIN_DATA_FETCH_FAIL,
  }
}

export default () => async (dispatch: any) => {
  dispatch(getFetchAction())

  const requestProps: AxiosRequestConfig = {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const mainApiBaseUrl = getConfigValue('quizzy.api.base.url')
  try {
    const answer: AxiosResponse<QuizListRequest> = await axios(`${mainApiBaseUrl}/getQuizzesList`, requestProps)

    if (answer.status >= 200 && answer.status < 300) {
      dispatch(getSuccessAction(answer.data))
    } else {
      dispatch(getErrorAction())
    }
  } catch (error) {
    dispatch(getErrorAction())
  }
}
