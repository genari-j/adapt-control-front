import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 3rem 0;
`

export const Content = styled.div`
  width: 100%;
  max-width: 920px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const NewCategoryBox = styled.div`
  width: 100px;

  button {
    font-weight: 400;
    border-radius: 0.3rem;
    padding: 0.5rem;
  }
`

export const TableBox = styled.div`
  width: 100%;
  height: 385px;
`

export const LoadingBox = styled.div`
  width: 100%;
  height: 385px;

  display: flex;
  justify-content: center;
  align-items: center;
`