import { Dispatch, SetStateAction } from 'react'

import { Title } from '~/components'

import {
  ArrowDLeft,
  ArrowDRight,
  ArrowLeft,
  ArrowRight
} from '~/assets'

interface PaginationProps {
  totalCountPage: number
  totalCount: number
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

import { Container, ButtonsBox } from './styles'

export const Pagination = ({ totalCountPage, totalCount, page, setPage }: PaginationProps) => {
  const handleNextPage = () => { if (totalCountPage! > page) { setPage(page + 1) } }
  const handlePreviousPage = () => { if (page > 1) { setPage(page - 1) } }
  const handleLastPage = () => setPage(totalCountPage!)
  const handleFirstPage = () => setPage(1)

  return (
    <Container>
      <Title
        content={`Total de registros: ${totalCount < 10 ? '0' + totalCount : totalCount}`} size='1.1rem'
      />

      <ButtonsBox>
        <button onClick={handleFirstPage} disabled={page <= 1}> <ArrowDLeft /> </button>
        <button onClick={handlePreviousPage} disabled={page <= 1}> <ArrowLeft /> </button>

        <p>{page} de {totalCountPage}</p>

        <button onClick={handleNextPage} disabled={totalCountPage === page}> <ArrowRight /> </button>
        <button onClick={handleLastPage} disabled={totalCountPage === page}> <ArrowDRight /> </button>
      </ButtonsBox>
    </Container>
  )
}