import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getConfigValue } from '@ijl/cli'
import type { Quiz } from '@/types/models/quiz'

export const quizService = createApi({
  reducerPath: 'quizService',
  baseQuery: fetchBaseQuery({
    baseUrl: getConfigValue('quizzy.api.base.url'),
  }),
  endpoints: build => ({
    getQuizzes: build.query<Quiz[], void>({
      query: () => '/quizzes',
    }),
    getQuizById: build.query<Quiz, string>({
      query: slug => `/quizzes/${slug}`,
    }),
  }),
})

export const { useGetQuizzesQuery, useGetQuizByIdQuery } = quizService
