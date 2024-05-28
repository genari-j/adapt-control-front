import { Title } from '~/presentation/components'

import { Container, Content } from './styles'
import { white9 } from '~/presentation/themes'

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Title
          text={`Adapt Control, ${new Date().getFullYear()}`}
          color={white9}
          size='0.9rem'
          $weight='400'
        />

        <Title
          text='Todos os direitos reservados.'
          color={white9}
          size='0.9rem'
          $weight='400'
        />
      </Content>
    </Container>
  )
}