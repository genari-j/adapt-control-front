import { styled } from 'styled-components'

interface CustomButtonProps {
  background?: string
}

export const CustomButton = styled.button<CustomButtonProps>`
  transition: .3s ease;

  padding: 0.5rem 2rem;
  border-radius: 0.5rem;

  color: ${props => props.theme['white9']};
  background: ${props => props.background ? props.theme[props.background] : props.theme['blue8']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover { opacity: 0.7; }
`