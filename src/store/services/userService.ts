import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '@/constants'
import type { User } from '@/types/models/user'

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
