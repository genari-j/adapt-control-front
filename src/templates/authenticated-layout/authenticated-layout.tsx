import { Outlet } from 'react-router-dom'

// AuthenticatedHeader
import { AuthenticatedFooter, Sidebar } from '~/components'

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