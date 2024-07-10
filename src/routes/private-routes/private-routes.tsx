import { type FC } from 'react'
import { Navigate, Outlet, type RouteProps } from 'react-router-dom'
import { useSession } from '~/hooks'

export const PrivateRoutes: FC<RouteProps> = () => {
  const { isSignedIn } = useSession()
  return isSignedIn() ? <Outlet /> : <Navigate replace to='/entrar' />
}