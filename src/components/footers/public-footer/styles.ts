import { styled } from 'styled-components'

export const Container = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding-bottom: 2rem;

  img {
    width: 100%;
    max-width: 150px;

    filter: drop-shadow(5px 5px 3px ${props => props.theme['black8']});
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      span {
        font-weight: 600;
        color: ${props => props.theme['blue8']};
      }
    }
  }
`