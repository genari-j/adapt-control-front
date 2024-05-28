import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  img {
    width: 100%;
    max-width: 50;

    filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2))
  };

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    line-height: 1rem;

    span {
      font-weight: 500;
      text-shadow: 2px 3px 3px #D1D1D1;
    }
  }
`
