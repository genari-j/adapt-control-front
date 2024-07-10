import { Container, Content } from './styles'

export const AuthenticatedFooter = () => {
  return (
    <Container>
      <Content>
        <span>Adapt Control, {new Date().getFullYear()}</span>
        <p>Todos os direitos reservados.</p>
      </Content>
    </Container>
  )
}