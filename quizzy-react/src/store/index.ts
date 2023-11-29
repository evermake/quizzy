import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'
import {userService} from "~/services/userService";
import {quizService} from "~/services/quizService";

export const store = configureStore({
    reducer: {
        [userService.reducerPath]: userService.reducer,
        [quizService.reducerPath]: quizService.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            userService.middleware,
            quizService.middleware,
        )
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
