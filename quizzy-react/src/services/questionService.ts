import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {User} from "~/models/user";
import {Quiz} from "~/models/quiz";

const BASE_URL = 'http://localhost:3000'

export const questionService = createApi({
    reducerPath: 'questionService',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: build => ({
        getQuestions: build.query<Quiz[], void>({
            query: () => '/questions',
        }),
        getQuestionById: build.query<Quiz, string>({
            query: (id) => `/questions/${id}`,
        }),
    }),
})

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionService
