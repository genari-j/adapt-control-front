import { useHomeBTNS } from '~/hooks'
import { pageTitle } from '~/utils'

import { Title } from '~/components'

import { Container, Content, CardsBox, Card } from './styles'

export const Home = () => {
  pageTitle('Seja bem-vindo(a)')
  const { homeBTNS } = useHomeBTNS()

  return (
    <Container>

      <Content>
        <Title content='Seja bem-vindo(a)' />

        <CardsBox>
          {homeBTNS.map((btn) => (
            <Card
              key={btn.id}
              role='button'
              onClick={btn.onClick}
            >
              <img
                src={btn.img}
                alt={btn.name}
                title={btn.name}
              />
              <span>{btn.name}</span>
            </Card>
          ))}
        </CardsBox>
      </Content>

    </Container>
  )
}