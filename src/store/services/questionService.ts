import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getConfigValue } from '@ijl/cli'
import type { Quiz } from '@/types/models/quiz'

export const questionService = createApi({
  reducerPath: 'questionService',
  baseQuery: fetchBaseQuery({
    baseUrl: getConfigValue('quizzy.api.base.url'),
  }),
  endpoints: build => ({
    getQuestions: build.query<Quiz[], void>({
      query: () => '/questions',
    }),
    getQuestionById: build.query<Quiz, string>({
      query: id => `/questions/${id}`,
    }),
  }),
})

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionService
