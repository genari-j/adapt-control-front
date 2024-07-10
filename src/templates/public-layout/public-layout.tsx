import { Outlet } from 'react-router-dom'

import { PublicHeader, PublicFooter } from '~/components'

import { Container } from './styles'

export const PublicLayout = () => {
  return (
    <Container>
      <PublicHeader />
      <Outlet />
      <PublicFooter />
    </Container>
  )
}