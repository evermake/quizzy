import type { Meta } from './meta'
import type { Context } from './context'
import { initTRPC } from '@trpc/server'

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
