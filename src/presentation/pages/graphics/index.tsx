// import { useGetProducts } from '~/infra/cache/queries'
import { changePageTitle } from '~/main/util'

import { Title } from '~/presentation/components'
import { BarGraphic, BarLineGraphic, BarOneColGraphic, PizzaGraphic } from './components'

import { Container, Content } from './styles'

export const Graphics = () => {
  changePageTitle('Dashboard')
  // const { data } = useGetProducts()

  return (
    <Container>
      <Content>
        <Title text='Dashboard' />

        <BarGraphic />
        <BarLineGraphic />
        <BarOneColGraphic />
        <PizzaGraphic />
      </Content>
    </Container>
  )
}