import { styled } from 'styled-components'
import { blue8, blue9, white9 } from '~/presentation/themes'

interface TitleProps {
  $weight?: string
  size?: string
  backgcolor?: string
  textcolor?: string
  hoverEffect?: string
}

export const ButtonModel = styled.button<TitleProps>`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: .3s;

  font-size: ${({ size }) => size || '1.5rem'};
  font-weight: ${({ $weight }) => $weight || '500'};
  padding: 0.7rem 0;
  border-radius: 0.5rem;

  color: ${({ textcolor }) => textcolor || white9};
  background: ${({ backgcolor }) => backgcolor || blue8};

  &:hover { background: ${({ hoverEffect }) => hoverEffect || blue9}; }
`
