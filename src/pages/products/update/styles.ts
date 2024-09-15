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
  gap: 3rem;
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ProductsGrid = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ProductsGroup = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;
`

export const ProductFileGroup = styled.div`
  width: 100%;

  border-radius: 0.5rem;
  transition: .3s ease;
  cursor: pointer;

  background: ${props => props.theme['blue8']};

  &:hover {
    background: ${props => props.theme['blue9']};
  }

  label {
    display: flex;
    justify-content: center;
    cursor: pointer;

    font-size: 0.9rem;
    font-weight: 400;
    padding: 0.6rem 0 0.4rem 0;
    border-radius: 0.5rem;

    color: ${props => props.theme['white9']};
  }

  input {
    display: none;
  }
`

export const ButtonsBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    width: 100%;
  }
`