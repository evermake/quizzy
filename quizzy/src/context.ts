import type { CreateExpressContextOptions } from '@trpc/server/adapters/express'
import type { User } from './schemas'
import { PrismaClient } from '@prisma/client'

export interface Context {
  db: PrismaClient
  user: User
}

let prismaGlobal: PrismaClient | null = null

export async function createContext(_: CreateExpressContextOptions): Context {
  if (!prismaGlobal) {
    prismaGlobal = new PrismaClient()
  }

  // @todo [#4] We need to add user to the context, if there is a valid JWT
  // in the request. We also need to create different contexts for different
  // procedures: public procedures MAY NOT have a user, while protected ones
  // MUST have.
  const user = { username: 'alice' }

  return {
    user,
    db: prismaGlobal,
  }
}
