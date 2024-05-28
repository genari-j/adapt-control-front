import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { paths } from '~/main/config'
import { PrivateRoutes } from '~/main/routes'

import { BaseLayout } from '~/presentation/templates'

import {
  Home,
  CreatingProducts,
  ListingProducts,
  ProductDetails,
  EditingProducts,
  SignUp,
  SignIn,
  NotFound,
  Profile,
  Graphics,
  ListingCategories,
  ListingUsers,
} from '~/presentation/pages'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${paths.frontend.signIn}`} element={<SignIn />} />
        <Route path={`${paths.frontend.notFound}`} element={<NotFound />} />

        <Route element={<PrivateRoutes />}>
          <Route element={<BaseLayout />}>
            <Route path={`${paths.frontend.signUp}/cadastrar`} element={<SignUp />} />
            <Route path={`${paths.frontend.home}`} element={<Home />} />
            <Route path={`${paths.frontend.categories}`} element={<ListingCategories />} />
            <Route path={`${paths.frontend.products}/cadastrar`} element={<CreatingProducts />} />
            <Route path={`${paths.frontend.products}`} element={<ListingProducts />} />
            <Route path={`${paths.frontend.products}/:id`} element={<ProductDetails />} />
            <Route path={`${paths.frontend.products}/:id/editar`} element={<EditingProducts />} />
            <Route path={`${paths.frontend.dashboard}`} element={<Graphics />} />
            <Route path={`${paths.frontend.profile}/:sub`} element={<Profile />} />
            <Route path={`${paths.frontend.users}`} element={<ListingUsers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}