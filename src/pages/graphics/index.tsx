// import { useGetProducts } from '~/infra/cache/queries'
import { pageTitle } from '~/utils'

import { Title } from '~/components'
import { BarGraphic, BarLineGraphic, BarOneColGraphic, PizzaGraphic } from './components'

import { Container, Content } from './styles'

export const Graphics = () => {
  pageTitle('Dashboard')
  // const { data } = useGetProducts()

  return (
    <Container>
      <Content>
        <Title content='Dashboard' />

        <BarGraphic />
        <BarLineGraphic />
        <BarOneColGraphic />
        <PizzaGraphic />
      </Content>
    </Container>
  )
}