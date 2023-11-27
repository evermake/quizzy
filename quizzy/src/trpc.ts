import { initTRPC } from '@trpc/server'
import type { Context } from './context'

export interface Meta {
  protection: 'none' | 'user' | 'admin'
}

const t = initTRPC
  .context<Context>()
  .meta<Meta>()
  .create({
    defaultMeta: { protection: 'none' },
  })

export const middleware = t.middleware
export const router = t.router
export const publicProcedure = t.procedure
