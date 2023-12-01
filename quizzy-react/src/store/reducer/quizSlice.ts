import {QuizState, QuizStatus} from "~/types/state/quiz";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: QuizState = {
    status: QuizStatus.NOT_STARTED,
    time: 10
};

const quizSlice = createSlice({
    name: 'quizSlice',
    initialState,
    reducers: {
        updateStatus: (state, action: PayloadAction<QuizStatus>) => {
            state.status = action.payload;
        },
        updateTime: (state, action: PayloadAction<number>) => {
            state.time = action.payload;
        },
    },
});

export const {
    updateTime,
    updateStatus
} = quizSlice.actions;

export default quizSlice.reducer;

