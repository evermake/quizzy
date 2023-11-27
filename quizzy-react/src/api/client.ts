import type { AppRouter } from 'quizzy/src/router'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'

export const api = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:8000/trpc',
    }),
  ],
})
