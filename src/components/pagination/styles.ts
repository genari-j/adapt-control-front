import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1rem;
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

    border: 2px solid ${props => props.theme['black6']};
    background: transparent;

    &:hover { background: ${props => props.theme['black8']}; }
    &:disabled {
      opacity: 0.6;
      pointer-events: none;

      color: ${props => props.theme['white7']}
    }
  }

  p {
    font-weight: 500;
    margin: 0 0.5rem;
  }
`