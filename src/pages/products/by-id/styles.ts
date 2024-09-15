import { styled } from 'styled-components'

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
  gap: 1rem;

  border: 1px solid red;
`

export const ItemsContent = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`

export const ItemAvatar = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;

  img {
    width: 100%;

    border-radius: 0.5rem;
  }
`

export const ItemDescriptions = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonsBox = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;
`