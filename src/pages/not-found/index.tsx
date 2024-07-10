import { useRouting } from '~/hooks'

import { pageTitle } from '~/utils'

import { StockImg, PeopleStock } from '~/assets'

import { Button } from '~/components'

import {
  Container,
  Content,
  TopStockBox,
  NotFoundMessage,
  BottomStockBox,
  PrecisionAndEfficiency
} from './styles'

export const NotFound = () => {
  pageTitle('Página não encontrada')
  const { handleGoToHome } = useRouting()

  return (
    <Container>

      <Content>
        <TopStockBox>
          <img
            src={StockImg}
            alt='Adapt Control'
            title='Adapt Control'
          />
        </TopStockBox>

        <NotFoundMessage>
          <p>Ops, a página não foi encontrada! 💬</p>
          <Button
            type='button'
            buttonContent='Voltar'
            onClick={handleGoToHome}
          />
        </NotFoundMessage>

        <BottomStockBox>
          <img
            src={PeopleStock}
            alt='Adapt Control'
            title='Adapt Control'
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
