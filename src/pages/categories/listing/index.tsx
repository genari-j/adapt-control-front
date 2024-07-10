import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useModalControl } from '~/hooks'

import { useGetCategories } from '~/api/cache/queries'

import { pageTitle, dateFormatter, reduceString, categoriesHeadTB } from '~/utils'

import {
  Title,
  Table,
  THead,
  TRHead,
  TH,
  TBody,
  TRBody,
  TD,
  Bounce,
  Pagination
} from '~/components'

import { Modal } from '~/pages'

import {
  Container,
  Content,
  NewCategoryBox,
  TableBox,
  LoadingBox
} from './styles'

export const ListingCategories = () => {
  pageTitle('Categorias')
  const { showModal, handleChangeModalVisibility } = useModalControl()

  const [page, setPage] = useState(1)
  const categories = useGetCategories(page)

  return (
    <Container>

      <Content>
        <Title content='Categorias' />

        <NewCategoryBox>
          <Link to='' onClick={handleChangeModalVisibility}>+ Nova</Link>
        </NewCategoryBox>

        {showModal && <Modal handleChangeModalVisibility={handleChangeModalVisibility} />}

        <TableBox>
          {categories.isLoading
            ? <LoadingBox> <Bounce bgColor='white' /> </LoadingBox>
            : <Table>
                <THead>
                  <TRHead>
                    {categoriesHeadTB.map(head => <TH key={head}>{head}</TH>)}
                  </TRHead>
                </THead>
                <TBody>
                  {categories.data?.data.data.map((category) => {
                    return (
                      <TRBody key={category.id}>
                        <TD>{category.id}</TD>
                        <TD>{category.name}</TD>
                        <TD>{reduceString(category?.description, 40)}</TD>
                        <TD>{dateFormatter.format(new Date(category?.created_at))}</TD>
                      </TRBody>
                    )
                  })}
                </TBody>
              </Table>
          }
        </TableBox>

        <Pagination
          dataName='Categorias'
          totalCount={Number(categories.data?.data.total)}
          totalCountPage={Number(categories.data?.data.pages)}
          page={page}
          setPage={setPage}
        />
      </Content>

    </Container>
  )
}