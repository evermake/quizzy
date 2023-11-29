import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {User} from "~/models/user";

const BASE_URL = 'http://localhost:3000'

export const quizService = createApi({
    reducerPath: 'quizService',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: build => ({
        getQuizzes: build.query<User, void>({
            query: () => '/quizzes',
        }),
    }),
})

export const { useGetQuizzesQuery } = quizService
