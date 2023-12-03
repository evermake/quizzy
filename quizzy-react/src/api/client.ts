import type { AppRouter } from 'quizzy/dist/router'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'

// @todo: Wrap this API into a hook inside `src/hooks/useApi.ts`,
//        which will dynamically generate auth token getter (from state)
//        and use this getter in `header` option when creating `httpBatchLink`.
export const api = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:8000/trpc',
      // headers: { Authorization: `Bearer TODO` },
    }),
  ],
})
