import type { CreateExpressContextOptions } from '@trpc/server/adapters/express'
import type { PrismaClient } from '@prisma/client'
import type { User } from './schemas'
import { type Config, config } from './config'
import prisma from './prisma'
import { verifyJwt } from './utils/crypto'

export interface Context {
  db: PrismaClient
  config: Config
  user: User | null
}

export async function createContext({
  req,
}: CreateExpressContextOptions): Promise<Context> {
  let userId: string | null = null
  let user: User | null = null
  const auth = req.header('Authorization')
  if (auth) {
    const match = auth.match(/^Bearer\s+(\S+)\s*$/i)
    if (match) {
      const token = match[1]
      try {
        const payload = await verifyJwt({
          token,
          secret: config.jwtSecret,
          maxAgeSeconds: config.jwtAgeSeconds,
        })
        userId = payload.sub || null
      } catch (_) {}
    }
  }
  if (userId) {
    try {
      const userDb = await prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: {
          id: true,
          username: true,
        },
      })
      user = {
        id: userDb.id,
        username: userDb.username,
      }
    } catch (_) {}
  }

  return {
    db: prisma,
    config,
    user,
  }
}
