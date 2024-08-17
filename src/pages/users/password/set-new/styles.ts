import { styled } from 'styled-components'

export const Container = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 1.5rem 0;

  @media (max-width: 500px) {
    padding: 1.5rem 1rem;
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > h2 {
    margin-bottom: 2rem;
  }

  > button {
    width: 100%;
  }
`

export const ShowPasswordBtn = styled.button`
  display: flex;
  
  font-size: 1.5rem;

  color: ${props => props.theme['white9']};
  background: none;
`