import type { CreateExpressContextOptions } from '@trpc/server/adapters/express'

export function createContext(_: CreateExpressContextOptions) {
  return {}
}

export type Context = Awaited<ReturnType<typeof createContext>>
