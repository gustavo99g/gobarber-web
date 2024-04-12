import { setupServer } from 'msw/node'


import { handlers } from './handlers'

export const worker = setupServer(...handlers)

worker.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.method, request.url)
})

