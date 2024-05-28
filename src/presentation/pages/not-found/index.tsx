import { useChangeNavigation } from '~/data/usecases/hooks'

import { changePageTitle } from '~/main/util'
import TopStockImg from '~/main/assets/images/stock.png'
import BottomStockImg from '~/main/assets/images/people-stock.png'

import { Button } from '~/presentation/components'
import { white9 } from '~/presentation/themes'

import {
  Container,
  Content,
  TopStockBox,
  NotFoundMessage,
  BottomStockBox,
  PrecisionAndEfficiency
} from './styles'

export const NotFound = () => {
  changePageTitle('Página não encontrada')
  const { handleGoToHome } = useChangeNavigation()

  return (
    <Container>

      <Content>
        <TopStockBox>
          <img
            src={TopStockImg}
            alt='Company Stock'
            title='Company Stock'
          />
        </TopStockBox>

        <NotFoundMessage>
          <p>Ops, a página não foi encontrada! 💬</p>
          <Button
            text='Voltar'
            type='button'
            color={white9}
            size='1.2rem'
            onClick={handleGoToHome}
          />
        </NotFoundMessage>

        <BottomStockBox>
          <img
            src={BottomStockImg}
            alt='Company Stock'
            title='Company Stock'
          />

          <PrecisionAndEfficiency>
            <p>Precisão & eficiência Operacional</p>
            <p>Company <span>Stock</span> - {new Date().getFullYear()}</p>
          </PrecisionAndEfficiency>
        </BottomStockBox>
      </Content>
      
    </Container>
  )
}
