import { styled } from 'styled-components'

interface CustomTitleProps {
  size?: string
  color?: string
}

export const CustomTitle = styled.h2<CustomTitleProps>`
  text-align: center;
  font-size: ${props => props.size ? props.size : '1.5rem'};
  font-weight: 500;

  color: ${props => props.color ? props.theme[`${props.color}`] : props.theme['white9']};
`