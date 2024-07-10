import { styled } from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: center;

  padding: 1.5rem 0;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 160px;

    filter: drop-shadow(5px 5px 3px ${props => props.theme['black8']});
  }
`