import { styled } from 'styled-components'

// TABLE
export const CustomTable = styled.table`
  width: 100%;

  overflow: hidden;
  border-collapse: collapse;
  border-radius: 0.5rem;

  box-shadow: 0 0 0.5rem 0 ${props => props.theme['black8']};
`

// HEAD
export const CustomTHead = styled.thead`
  width: 100%;
`

export const CustomTRHead = styled.tr`
  margin: 1rem;
  background: ${props => props.theme['black8']};
`

export const CustomTH = styled.th`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem 0 1rem 1rem;

  &:first-child { border-radius: 0.5rem 0 0 0 };
  &:last-child { border-radius: 0 0.5rem 0 0 };

  color: ${props => props.theme['white9']};
`

// BODY
export const CustomTBody = styled.tbody`
  width: 100%;
`

export const CustomTRBody = styled.tr`
  transition: .3s ease;
  &:nth-child(even) { background: ${props => props.theme['black6']}; }

  &.with-hover {
    cursor: pointer;
    &:hover { background: ${props => props.theme['black8']}; }
  }
`

export const CustomTD = styled.td`
  padding: 0.8rem 0 0.8rem 1rem;
`