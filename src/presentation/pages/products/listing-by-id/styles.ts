import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 920px;

  border: 1px solid red;
`

export const ProductsGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
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