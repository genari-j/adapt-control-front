import { ComponentProps } from 'react'

import { Container } from './styles'

interface LabelProps extends ComponentProps<'label'> {
  text: string
}

export const Label = ({ text, ...rest }: LabelProps) => {
  return (
    <Container {...rest}>
      {text}
    </Container>
  )
}
