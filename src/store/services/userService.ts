import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User } from '@/types/models/user'
import { getConfigValue } from "@ijl/cli";

export const userService = createApi({
  reducerPath: 'userService',
  baseQuery: fetchBaseQuery({
    baseUrl: getConfigValue('quizzy.api.base.url')
  }),
  endpoints: build => ({
    getUser: build.query<User, void>({
      query: () => '/user',
    }),
  }),
})

export const { useGetUserQuery } = userService
