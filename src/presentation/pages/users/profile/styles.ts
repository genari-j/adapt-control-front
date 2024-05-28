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
  gap: 3rem;
`

export const UserInfos = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`