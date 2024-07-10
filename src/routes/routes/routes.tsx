// createBrowserRouter
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PrivateRoutes } from '~/routes'
import { PublicLayout, AuthenticatedLayout } from '~/templates'

import * as Pages from '~/pages'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Pages.NotFound />} />

        <Route element={<PublicLayout />}>
          <Route path='/entrar' element={<Pages.SignIn />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route element={<AuthenticatedLayout />}>
            <Route path='/usuarios/cadastrar' element={<Pages.SignUp />} />
            <Route path='/' element={<Pages.Home />} />
            <Route path='/categorias' element={<Pages.ListingCategories />} />
            <Route path='/produtos/cadastrar' element={<Pages.CreatingProducts />} />
            <Route path='/produtos' element={<Pages.ListingProducts />} />
            <Route path='/produtos/:id' element={<Pages.ProductDetails />} />
            <Route path='/produtos/:id/editar' element={<Pages.EditingProducts />} />
            <Route path='/graficos' element={<Pages.Graphics />} />
            <Route path='perfil/:sub' element={<Pages.Profile />} />
            <Route path='/usuarios' element={<Pages.ListingUsers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}