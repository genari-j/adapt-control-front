import { styled } from 'styled-components'

export const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  padding: 3rem 0;

  @media (max-width: 955px) { padding: 1.5rem 1rem; }
`

export const Form = styled.form`
  width: 100%;
  max-width: 920px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 { &:first-child { margin-bottom: 1rem; } }
`

export const FormContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TextFieldGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

export const TextFieldGroup = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  button {
    width: 100%;
    max-width: 450px;
  }
`