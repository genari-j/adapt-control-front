import { Dispatch, SetStateAction } from 'react'
import { UseQueryResult } from 'react-query'
import { AxiosResponse } from 'axios'

import { Title } from '~/presentation/components'
import { white9 } from '~/presentation/themes'

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight
} from 'react-icons/md'

interface PaginationProps {
  data: UseQueryResult<AxiosResponse<any>>
  page: number
  setPage: Dispatch<SetStateAction<number>>
  dataName: string
}

import { Container, ButtonsBox } from './styles'

export const Pagination = ({ data, page, setPage, dataName }: PaginationProps) => {
  const totalCountPage = data.data?.data.pages
  const totalCount = data.data?.data.total

  const handleNextPage = () => { if (totalCountPage > page) { setPage(page + 1) } }
  const handlePreviousPage = () => { if (page > 1) { setPage(page - 1) } }
  const handleLastPage = () => setPage(totalCountPage)
  const handleFirstPage = () => setPage(1)

  return (
    <Container>
      <Title
        text={`Total de ${dataName}: ${totalCount}`}
        size='1.1rem'
        color={white9}
      />

      <ButtonsBox>
        <button onClick={handleFirstPage}> <MdKeyboardDoubleArrowLeft /> </button>
        <button onClick={handlePreviousPage}> <MdKeyboardArrowLeft /> </button>

        <p>{page} de {totalCountPage}</p>

        <button onClick={handleNextPage}> <MdKeyboardArrowRight /> </button>
        <button onClick={handleLastPage}> <MdKeyboardDoubleArrowRight /> </button>
      </ButtonsBox>
    </Container>
  )
}
