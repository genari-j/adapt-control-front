import { Fragment } from 'react'
import { Toaster } from 'react-hot-toast'

import { client } from '~/api/config'
import { QueryClientProvider } from 'react-query'

import { AppRoutes } from '~/routes'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles, defaultTheme } from '~/themes'

export const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Toaster position='bottom-right' />

        <QueryClientProvider client={client}>
          <AppRoutes />
        </QueryClientProvider>
      </ThemeProvider>
    </Fragment>
  )
}