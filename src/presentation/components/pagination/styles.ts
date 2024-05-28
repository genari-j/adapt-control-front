import { styled } from 'styled-components'
import { white6, white7, white9 } from '~/presentation/themes'

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    transition: .3s ease;

    font-size: 1.2rem;
    padding: 0.3rem;
    border-radius: 50%;

    border: 2px solid ${white6};
    color: ${white9};
    background: transparent;

    &:hover { background: ${white7}; }
  }

  p { margin: 0 0.5rem; }
`