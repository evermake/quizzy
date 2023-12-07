import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getConfigValue } from '@ijl/cli'
import type { User } from '@/types/models/user'

export const userService = createApi({
  reducerPath: 'userService',
  baseQuery: fetchBaseQuery({
    baseUrl: getConfigValue('quizzy.api.base.url'),
  }),
  endpoints: build => ({
    getUser: build.query<User, void>({
      query: () => '/user',
    }),
  }),
})

export const { useGetUserQuery } = userService
