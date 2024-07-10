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

export const Form = styled.form`
  width: 100%;
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

export const ProductFileGroup = styled.div`
  width: 100%;

  border-radius: 0.5rem;
  transition: .3s ease;
  cursor: pointer;

  background: ${props => props.theme['blue8']};

  &:hover { background: ${props => props.theme['blue9']}; }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    cursor: pointer;
    padding: 0.45rem 0;

    font-size: 0.9rem;
    font-weight: 400;

    color: ${props => props.theme['white9']};

    img { width: 100% }
  }

  input { display: none; }
`

export const ButtonsBox = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;
`