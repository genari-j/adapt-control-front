import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  background: ${props => props.theme['black6']}DD;
`

export const Content = styled.div`
  width: 100%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: relative;

  padding: 1rem;
  border-radius: 0.5rem;

  background: ${props => props.theme['black7']};
`

export const CloseBtn = styled.button`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: .3s ease;

  position: absolute;
  top: 1rem;
  right: 1rem;

  font-size: 2rem;
  border-radius: 50%;

  color: ${props => props.theme['white9']};
  background: transparent;

  &:hover {
    color: ${props => props.theme['black9']};
  }
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ButtonsBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 1rem;
`