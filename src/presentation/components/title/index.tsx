import { ComponentProps } from 'react'

import { Container } from './styles'

interface TitleProps extends ComponentProps<'h2'> {
  text: string
  $weight?: string
  size?: string
  color?: string
}

export const Title = ({ text, size, $weight, color }: TitleProps) => {
  return (
    <Container
      size={size}
      $weight={$weight}
      color={color}
    >
      {text}
    </Container>
  )
}