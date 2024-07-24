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
        children: [
          { path: '/entrar', element: <Pages.SignIn /> },
          { path: '/recuperacao-de-senha', element: <Pages.PasswordRecovery /> },
          { path: '/definir-nova-senha', element: <Pages.SetNewPassword /> }
        ]
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            element: <AuthenticatedLayout />,
            children: [
              { path: '/usuarios/cadastrar', element: <Pages.SignUp /> },
              { path: '/', element: <Pages.Home /> },
              { path: '/categorias', element: <Pages.CategoryList /> },
              { path: '/produtos/cadastrar', element: <Pages.ProductCreate /> },
              { path: '/produtos', element: <Pages.ProductList /> },
              { path: '/produtos/:id', element: <Pages.ProductById /> },
              { path: '/produtos/:id/editar', element: <Pages.ProductUpdate /> },
              { path: '/graficos', element: <Pages.Graphics /> },
              { path: '/perfil/:sub', element: <Pages.Profile /> },
              { path: '/usuarios', element: <Pages.UserList /> }
            ],
          }
        ]
      }
    ]
  }
])