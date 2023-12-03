import express from 'express'
import cors from 'cors'
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import { appRouter as router } from './router'
import { createContext } from './context'

const PORT = 8000

const app = express()

app.use(cors())
app.use(
  '/trpc',
  createExpressMiddleware({
    router,
    createContext,
  }),
)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server is listening at: http://localhost:${PORT}/trpc`)
})
