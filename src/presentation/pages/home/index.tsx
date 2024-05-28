import { useHomeBTNS } from '~/data/usecases/hooks'
import { changePageTitle } from '~/main/util'

import { Title } from '~/presentation/components'

import { Container, Content, CardsBox, Card } from './styles'

export const Home = () => {
  changePageTitle('Seja bem-vindo(a)')
  const { homeBTNS } = useHomeBTNS()

  return (
    <Container>

      <Content>
        <Title text='Seja bem-vindo(a)' />

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