import { Outlet } from 'react-router-dom'

// AuthenticatedHeader
import { Sidebar, AuthenticatedFooter } from '~/components'

import { Container } from './styles'

export const AuthenticatedLayout = () => {
  return (
    <Container>
      {/* <AuthenticatedHeader /> */}
      <Sidebar />
      <Outlet />
      <AuthenticatedFooter />
    </Container>
  )
}