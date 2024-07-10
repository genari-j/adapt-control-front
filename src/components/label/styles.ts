import { styled } from 'styled-components'

interface CustomLabelProps {
  color?: string
}

export const CustomLabel = styled.label<CustomLabelProps>`
  width: 100%;

  margin-bottom: 0.125rem;

  color: ${props => props.color ? props.color : props.theme['white9']};
  &:hover { cursor: text; }
`