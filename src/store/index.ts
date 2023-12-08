import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { quizService } from '@/store/services/quizService'
import { questionService } from '@/store/services/questionService'
import quizSlice from '@/store/reducer/quizSlice'

export const store = configureStore({
  reducer: {
    [quizService.reducerPath]: quizService.reducer,
    [questionService.reducerPath]: questionService.reducer,
    quizState: quizSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      quizService.middleware,
      questionService.middleware,
    ),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
