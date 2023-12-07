import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {User} from "~/types/models/user";
import {BASE_URL} from "~/constants";

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
