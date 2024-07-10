import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  position: relative;

  border-radius: 0.3rem;

  background: ${props => props.theme['black6']};
`

export const CustomTextfield = styled.input`
  width: 100%;

  transition: .3s;

  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  letter-spacing: 0.03rem;

  border: 2px solid transparent;
  background: transparent;

  &::placeholder { color: ${props => props.theme['white8']}; }
  &:focus { border: 2px solid ${props => props.theme['blue8']}; }
  &.with-icon { padding: 0.5rem 2.8rem 0.5rem 1rem}
  &.with-error { border: 2px solid ${props => props.theme['red9']}; }
`

export const Icon = styled.i`
  display: flex;

  position: absolute;
  right: 0.5rem;

  font-size: 1.5rem;
  padding: 0 0.3rem;

  color: ${props => props.theme['white9']};
  background: transparent;
`