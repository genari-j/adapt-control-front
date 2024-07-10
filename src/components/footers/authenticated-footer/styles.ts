import { styled } from 'styled-components'

export const Container = styled.footer`
  width: 100%;

  display: flex;
  justify-content: center;

  margin-top: auto;
  padding-bottom: 2rem;
`

export const Content = styled.div`
  width: 100%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 0.9rem;
    font-weight: 500;
  }
  p { font-size: 0.9rem; }
`