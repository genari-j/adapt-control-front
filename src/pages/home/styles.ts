import { styled } from 'styled-components'

export const Container = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;

  padding-top: 3rem;
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

  background: ${props => props.theme['white9']};

  img {
    width: 100%;

    filter: drop-shadow(2px 3px 3px ${props => props.theme['black6']});
  }

  span {
    font-size: 1.3rem;
    font-weight: 500;

    color: ${props => props.theme['black9']}
  }

  &:hover {
    transform: translateY(-5px);
  }
`