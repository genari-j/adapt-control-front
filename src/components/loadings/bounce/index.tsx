import { Container } from './styles'

interface BounceProps {
  bgColor?: string
}

export const Bounce = ({ bgColor } : BounceProps) => {
  return (
    <Container>
      <span style={{ background: bgColor ? bgColor : 'black' }} ></span>
      <span style={{ background: bgColor ? bgColor : 'black' }} ></span>
      <span style={{ background: bgColor ? bgColor : 'black' }} ></span>
    </Container>
  )
}
