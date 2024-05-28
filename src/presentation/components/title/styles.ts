import { styled } from 'styled-components'
import { white9 } from '~/presentation/themes'

interface TitleProps {
  $weight?: string
  size?: string
  color?: string
}

export const Container = styled.h2<TitleProps>`
  font-size: ${({ size }) => size || '1.5rem'};
  font-weight: ${({ $weight }) => $weight || '500'};

  color: ${({ color }) => color || `${white9}`};
`