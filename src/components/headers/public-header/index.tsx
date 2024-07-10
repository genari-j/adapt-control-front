import { StockImg } from '~/assets'

import { Container, Content } from './styles'

export const PublicHeader = () => {
  return (
    <Container>
      <Content>
        <img src={StockImg} alt='Adapt Control' title='Adapt Control' />
      </Content>
    </Container>
  )
}