import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'
import {userService} from "~/services/userService";
import {quizService} from "~/services/quizService";
import {questionService} from "~/services/questionService";

export const store = configureStore({
    reducer: {
        [userService.reducerPath]: userService.reducer,
        [quizService.reducerPath]: quizService.reducer,
        [questionService.reducerPath]: questionService.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            userService.middleware,
            quizService.middleware,
            questionService.middleware,
        )
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
