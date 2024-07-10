import { styled } from 'styled-components'

export const CustomSelect = styled.select`
  width: 100%;

  transition: .3s;

  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  letter-spacing: 0.03rem;

  border: 2px solid transparent;
  background: ${props => props.theme['black6']};

  &::placeholder { color: ${props => props.theme['white8']}; }
  &:focus { border: 2px solid ${props => props.theme['blue8']}; }
  &.with-error { border: 2px solid ${props => props.theme['red9']}; }

  &:invalid,
  & > option[disabled] {
    color: #999999;
  }
`
