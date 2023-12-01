import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'
import {userService} from "~/services/userService";
import {quizService} from "~/services/quizService";
import {questionService} from "~/services/questionService";
import quizSlice from "~/store/reducer/quizSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        [userService.reducerPath]: userService.reducer,
        [quizService.reducerPath]: quizService.reducer,
        [questionService.reducerPath]: questionService.reducer,
        quizState: quizSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            userService.middleware,
            quizService.middleware,
            questionService.middleware
        )
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
