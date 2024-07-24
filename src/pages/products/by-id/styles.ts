import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 3rem 0;
`

export const Content = styled.div`
  width: 100%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ProductsGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const ProductGroup = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const ButtonsBox = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;
`