import type { Meta } from './meta'
import type { Context } from './context'
import { TRPCError, initTRPC } from '@trpc/server'

const t = initTRPC
  .meta<Meta>()
  .context<Context>()
  .create()

export const router = t.router
export const middleware = t.middleware

export const publicProcedure = t.procedure
  .meta({ isProtected: false })

export const protectedProcedure = t.procedure
  .meta({ isProtected: true })
  .use((opts) => {
    const { ctx } = opts

    if (!ctx.user) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'not authorized',
      })
    }

    return opts.next({
      ctx: {
        ...ctx,
        user: ctx.user,
      },
    })
  })
