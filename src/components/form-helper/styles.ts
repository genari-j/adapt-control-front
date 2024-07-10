import { styled } from 'styled-components'

interface FormHelperProps {
  color?: string
  size?: string
}

export const CustomFormHelper = styled.span<FormHelperProps>`
  text-align: center;
  font-size: ${props => props.size ? props.theme[props.size] : '0.9rem'};

  color: ${props => props.color ? props.theme[props.color] : props.theme['red9']};
`