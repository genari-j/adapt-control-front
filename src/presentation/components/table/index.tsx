import { ComponentProps } from 'react'

import { Container } from './styles'

interface TableProps extends ComponentProps<'table'> {
  titles: string[]
  data?: (string | number | Date)[][]
  handleSelectedItem?: (field: string | number | Date) => void
  hoverEffect?: boolean
}

export const Table = ({ titles, data, handleSelectedItem, hoverEffect }: TableProps) => {
  return (
    <Container>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data?.map((line, rowIndex) => (
          <tr
            key={rowIndex}
            role='button'
            className={hoverEffect && hoverEffect === true ? 'hover-effect' : ''}
            onClick={() => { handleSelectedItem && handleSelectedItem(line[0]) }}
          >
            {line.map((value, columnIndex) => (
              <td key={columnIndex}>{String(value)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Container>
  )
}