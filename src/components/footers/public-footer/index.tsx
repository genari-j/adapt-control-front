import { PeopleStock } from '~/assets'

import { Container } from './styles'

export const PublicFooter = () => {
  return (
    <Container>
      <img src={PeopleStock} alt='Adapt Control' title='Adapt Control' />

      <div>
        <p>Precisão & eficiência Operacional</p>
        <p>Adapt <span>Control</span> - {new Date().getFullYear()}</p>
      </div>
    </Container>
  )
}