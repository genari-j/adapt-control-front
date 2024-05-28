import { styled } from 'styled-components'
import { black6, black9, white9 } from '~/presentation/themes'

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 3rem 0;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

export const CardsBox = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`

export const Card = styled.div`
  width: 100%;
  max-width: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  transition: .3s ease;

  padding: 0.5rem 2rem;
  border-radius: 0.5rem;

  background: ${white9};

  img {
    width: 100%;

    filter: drop-shadow(2px 3px 3px ${black6});
  }

  span {
    font-size: 1.3rem;
    font-weight: 500;

    color: ${black9}
  }

  &:hover {
    transform: translateY(-5px);
  }
`