import { type FC } from 'react'
import { Navigate, Outlet, type RouteProps } from 'react-router-dom'
import { useSession } from '~/hooks'

export const PrivateRoutes: FC<RouteProps> = () => {
  const { isSignedIn } = useSession()
  return isSignedIn() ? <Outlet /> : <Navigate replace to='/entrar' />
}

export const AdminScreens: FC<RouteProps> = () => {
  const { adminPermission } = useSession()
  return adminPermission ? <Outlet /> : <Navigate replace to='/' />
}

export const ManagerScreens: FC<RouteProps> = () => {
  const { adminPermission, managerPermission } = useSession()
  return adminPermission || managerPermission ? <Outlet /> : <Navigate replace to='/' />
}