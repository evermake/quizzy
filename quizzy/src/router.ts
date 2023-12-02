import { z } from 'zod'
import { TRPCError } from '@trpc/server'
import { protectedProcedure, publicProcedure, router } from '~/trpc'
import { Attempt, QuestionAnswer, Quiz, User } from './schemas'

export const appRouter = router({
  login: publicProcedure
    .input(z.object({
      username: z.string(),
      password: z.string(),
    }))
    .output(z.object({
      user: User,
      accessToken: z.string(),
    }))
    .mutation(async ({ ctx }) => {
      if (ctx.user) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'already logged in',
        })
      }

      throw new TRPCError({
        code: 'NOT_IMPLEMENTED',
        message: 'not implemented',
      })
    }),
  getMe: protectedProcedure
    .output(User)
    .query(async ({ ctx }) => {
      return ctx.user
    }),
  getQuizzes: protectedProcedure
    .input(z.object({}))
    .output(z.array(Quiz))
    .query(async () => {
      throw new TRPCError({
        code: 'NOT_IMPLEMENTED',
        message: 'not implemented',
      })
    }),
  startAttempt: protectedProcedure
    .input(z.object({
      quizId: z.string(),
    }))
    .output(Attempt)
    .mutation(async () => {
      throw new TRPCError({
        code: 'NOT_IMPLEMENTED',
        message: 'not implemented',
      })
    }),
  submitAnswer: protectedProcedure
    .input(z.object({
      attemptId: z.string(),
      questionNo: z.number().int(),
      answer: QuestionAnswer,
    }))
    .output(z.object({}))
    .mutation(async () => {
      throw new TRPCError({
        code: 'NOT_IMPLEMENTED',
        message: 'not implemented',
      })
    }),
  finishAttempt: protectedProcedure
    .input(z.object({
      attemptId: z.string(),
    }))
    .output(z.object({}))
    .mutation(async () => {
      throw new TRPCError({
        code: 'NOT_IMPLEMENTED',
        message: 'not implemented',
      })
    }),
})

export type AppRouter = typeof appRouter
