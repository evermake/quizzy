import { z } from 'zod'
import { TRPCError } from '@trpc/server'
import { protectedProcedure, publicProcedure, router } from './trpc'
import { Attempt, QuestionAnswer, Quiz, User } from './schemas'
import { checkPassword, issueJwt } from './utils/crypto'

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
    .mutation(async ({ ctx, input }) => {
      if (ctx.user) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'already logged in',
        })
      }

      const userDb = await ctx.db.user.findUnique({
        where: { username: input.username },
        select: {
          id: true,
          username: true,
          passwordSalt: true,
          passwordHash: true,
        },
      })

      const unauthorizedError = new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'invalid username or password',
      })

      if (!userDb) {
        throw unauthorizedError
      }

      const passwordMatch = await checkPassword(
        input.password,
        userDb.passwordSalt,
        userDb.passwordHash,
      )

      if (!passwordMatch) {
        throw unauthorizedError
      }

      const accessToken = await issueJwt({
        payload: { sub: userDb.id },
        secret: ctx.config.jwtSecret,
        expiresAt: new Date(Date.now() + ctx.config.jwtAgeSeconds),
      })

      return {
        user: {
          id: userDb.id,
          username: userDb.username,
        },
        accessToken,
      }
    }),
  getMe: protectedProcedure
    .output(User)
    .query(({ ctx }) => {
      return ctx.user
    }),
  getQuizzes: protectedProcedure
    .output(z.array(Quiz))
    .query(async ({ ctx }) => {
      const quizzesDb = await ctx.db.quiz.findMany({
        where: {
          status: 'PUBLISHED',
        },
        select: {
          id: true,
          slug: true,
          title: true,
          description: true,
          opensAt: true,
          closesAt: true,
          attemptDuration: true,
        },
      })

      return quizzesDb.map(quiz => ({
        id: quiz.id,
        slug: quiz.slug,
        title: quiz.title,
        description: quiz.description,
      }))
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
