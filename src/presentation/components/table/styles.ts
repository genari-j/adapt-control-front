import { styled } from 'styled-components'
import { black6, black8, white9 } from '~/presentation/themes'

export const Container = styled.table`
  width: 100%;

  border-collapse: collapse;

  thead {
    tr {
      background: ${black8};
      margin: 1rem;

      th {
        font-weight: 600;
        text-align: left;
        padding: 1rem 0 1rem 1rem;

        color: ${white9};

        &:first-child { border-radius: 0.5rem 0 0 0 };
        &:last-child { border-radius: 0 0.5rem 0 0 };
      }
    }
  }

  tbody {
    tr {
      &.hover-effect {
        cursor: pointer;
        transition: .3s ease;

        &:hover { background: ${black8}; }
      }
      &:nth-child(even) { background: ${black6}; }

      td {
        text-align: center;
        text-align: left;
        padding: 0.5rem 0 0.5rem 1rem;
      }
    }
  }
`