import { Container } from './styles'
import { black9 } from '~/presentation/themes'

interface BounceProps {
  bgColor?: string
}

export const Bounce = ({ bgColor } : BounceProps) => {
  return (
    <Container>
      <span style={{ background: bgColor ? bgColor : black9 }} ></span>
      <span style={{ background: bgColor ? bgColor : black9 }} ></span>
      <span style={{ background: bgColor ? bgColor : black9 }} ></span>
    </Container>
  )
}
