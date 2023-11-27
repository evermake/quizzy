import express from 'express'
import cors from 'cors'
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import { appRouter } from './router'
import { createContext } from './context'

const app = express()

app.use(cors())
app.use(
  '/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
)

app.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('🚀 Server is listening at: http://localhost:8000/trpc')
})
