import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {User} from "~/models/user";

const BASE_URL = 'http://localhost:3000'

export const userService = createApi({
    reducerPath: 'userService',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: build => ({
        getUser: build.query<User, void>({
            query: () => '/user',
        }),
    }),
})

export const { useGetUserQuery } = userService
