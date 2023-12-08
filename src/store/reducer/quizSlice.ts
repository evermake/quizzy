import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { QuizState } from '@/types/state/quiz'
import { QuizStatus } from '@/types/state/quiz'

const initialState: QuizState = {
  status: QuizStatus.NOT_STARTED,
  userAnswers: [],
  paginationId: 0,
}

const quizSlice = createSlice({
  name: 'quizSlice',
  initialState,
  reducers: {
    updateStatus: (state, action: PayloadAction<QuizStatus>) => {
      state.status = action.payload
    },
    updateQuizId: (state, action: PayloadAction<QuizStatus>) => {
      state.quizId = action.payload
    },
    updateTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload
    },
    updateQuestionId: (state, action: PayloadAction<number>) => {
      state.questionId = action.payload
    },
    updatePaginationId: (state, action: PayloadAction<number>) => {
      state.paginationId = action.payload
    },
    updateUserAnswer: (state, action: PayloadAction<{ answer, isCorrect }>) => {
      state.userAnswers[state.paginationId] = action.payload
    },
    startQuiz: (state, action: PayloadAction<{ quizId, duration, questionIds }>) => {
      state.status = (QuizStatus.IN_PROGRESS)
      state.paginationId = 0
      state.questionId = action.payload.questionIds[0]
      state.quizId = action.payload.quizId
      state.time = action.payload.duration || 600
    },
    resetQuiz: (state, _: PayloadAction<null>) => {
      state.status = (QuizStatus.NOT_STARTED)
      state.questionIds = null
      state.quizId = null
      state.userAnswers = {}
      state.questionId = null
      state.paginationId = null
    },
  },
})

export const {
  updateTime,
  updateStatus,
  updateQuestionId,
  updatePaginationId,
  updateUserAnswer,
  updateQuizId,
  startQuiz,
  resetQuiz,
} = quizSlice.actions

export default quizSlice.reducer
