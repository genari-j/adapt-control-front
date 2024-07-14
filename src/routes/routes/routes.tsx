import { createBrowserRouter } from 'react-router-dom'

import { PrivateRoutes } from '~/routes'
import { PublicLayout, AuthenticatedLayout } from '~/templates'

import * as Pages from '~/pages'

export const router = createBrowserRouter([
  {
    errorElement: <Pages.NotFound />,
    children: [
      {
        element: <PublicLayout />,
        children: [{
          path: '/entrar', element: <Pages.SignIn /> 
        }]
      },
      {
        element: <PrivateRoutes />,
        children: [{
          element: <AuthenticatedLayout />,
          children: [
            { path: '/usuarios/cadastrar', element: <Pages.SignUp /> },
            { path: '/', element: <Pages.Home /> },
            { path: '/categorias', element: <Pages.ListingCategories /> },
            { path: '/produtos/cadastrar', element: <Pages.CreatingProducts /> },
            { path: '/produtos', element: <Pages.ListingProducts /> },
            { path: '/produtos/:id', element: <Pages.ProductDetails /> },
            { path: '/produtos/:id/editar', element: <Pages.EditingProducts /> },
            { path: '/graficos', element: <Pages.Graphics /> },
            { path: '/perfil/:sub', element: <Pages.Profile /> },
            { path: '/usuarios', element: <Pages.ListingUsers /> }
          ],
        }]
      }
    ]
  }
])