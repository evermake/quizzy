import process from 'node:process'
import 'dotenv/config'
import { z } from 'zod'
import { zBytes } from './utils/zod'

export const Config = z.object({
  databaseUrl: z.string(),
  jwtSecret: zBytes,
  jwtAgeSeconds: z.coerce.number().int(),
})
export type Config = z.infer<typeof Config>

const envConfigNameMap: Record<keyof Config, string> = {
  databaseUrl: 'DATABASE_URL',
  jwtSecret: 'JWT_SECRET',
  jwtAgeSeconds: 'JWT_AGE_SECONDS',
}

function loadConfig(): Config {
  return Config.parse(
    Object.fromEntries(
      Object.entries(envConfigNameMap).map(([key, envName]) => {
        const value = process.env[envName]
        if (value === undefined) {
          throw new Error(`environment variable "${envName}" is not set`)
        }
        return [key, value]
      }),
    ),
  )
}

export const config = loadConfig()
