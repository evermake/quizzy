import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {BASE_URL} from "@/constants";
import {Quiz} from "@/types/models/quiz";

export const quizService = createApi({
    reducerPath: 'quizService',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: build => ({
        getQuizzes: build.query<Quiz[], void>({
            query: () => '/quizzes',
        }),
        getQuizById: build.query<Quiz, string>({
            query: (slug) => `/quizzes/${slug}`,
        }),
    }),
})

export const { useGetQuizzesQuery, useGetQuizByIdQuery } = quizService
