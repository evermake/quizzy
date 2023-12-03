import {QuizState, QuizStatus} from "~/types/state/quiz";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: QuizState = {
    status: QuizStatus.NOT_STARTED,
    userAnswers: [],
    paginationId: 0
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
        updateQuestionId: (state, action: PayloadAction<number>) => {
            state.questionId = action.payload;
        },
        updatePaginationId: (state, action: PayloadAction<number>) => {
            state.paginationId = action.payload;
        },
        updateUserAnswer: (state, action: PayloadAction<number>) => {
            state.userAnswers[state.paginationId] = action.payload;
        },
    },
});

export const {
    updateTime,
    updateStatus,
    updateQuestionId,
    updatePaginationId,
    updateUserAnswer,
} = quizSlice.actions;

export default quizSlice.reducer;

