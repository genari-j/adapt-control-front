import { Fragment } from 'react'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

import { client } from '~/api/config'

import { router } from '~/routes'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles, defaultTheme } from '~/themes'

export const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Toaster position='bottom-right' />

        <QueryClientProvider client={client}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </Fragment>
  )
}