import { QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'

import { AppRoutes } from '~/main/routes'
import { client } from '~/main/config'

import { GlobalStyles } from '~/presentation/themes'

export function App() {
  return (
    <QueryClientProvider client={client}>
      <AppRoutes />
      <GlobalStyles />

      <Toaster position='bottom-right' />
    </QueryClientProvider>
  )
}