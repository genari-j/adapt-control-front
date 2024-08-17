import { styled } from 'styled-components'

export const CustomSpan = styled.span`
  display: flex;
  justify-content: center;

  font-size: 0.9rem;

  color: ${props => props.theme['red9']};
`