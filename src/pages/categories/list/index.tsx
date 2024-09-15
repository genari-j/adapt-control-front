import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useGeneralStates } from '~/hooks'
import { useGetCategories } from '~/api/cache/queries'
import { pageTitle, dateFormatter, reduceString, categoriesHeadTB } from '~/utils'

import { Title, Table, Bounce, Pagination } from '~/components'

import { CategoryCreate } from '~/pages'

import {
  Container,
  Content,
  NewCategoryBox,
  TableBox,
  LoadingBox
} from './styles'

export const CategoryList = () => {
  pageTitle('Categorias')
  const { showModal, handleChangeModalVisibility } = useGeneralStates()

  const [page, setPage] = useState(1)
  const categories = useGetCategories(page)

  return (
    <Container>

      <Content>
        <Title content='Categorias' />

        <NewCategoryBox>
          <Link to='' onClick={handleChangeModalVisibility}>+ Nova</Link>
        </NewCategoryBox>

        {showModal && <CategoryCreate handleChangeModalVisibility={handleChangeModalVisibility} />}

        <TableBox>
          {categories.isLoading
            ? <LoadingBox> <Bounce bgColor='white' /> </LoadingBox>
            : <Table.Table>
                <Table.THead>
                  <Table.TRHead>
                    {categoriesHeadTB.map(head => <Table.TH key={head}>{head}</Table.TH>)}
                  </Table.TRHead>
                </Table.THead>
                <Table.TBody>
                  {categories.data?.data.data.map((category) => {
                    return (
                      <Table.TRBody key={category.id}>
                        <Table.TD>{category.id}</Table.TD>
                        <Table.TD>{category.name}</Table.TD>
                        <Table.TD>{reduceString(category?.description, 40)}</Table.TD>
                        <Table.TD>{dateFormatter.format(new Date(category?.created_at))}</Table.TD>
                      </Table.TRBody>
                    )
                  })}
                </Table.TBody>
              </Table.Table>
          }
        </TableBox>

        <Pagination
          totalCount={Number(categories.data?.data.total)}
          totalCountPage={Number(categories.data?.data.pages)}
          page={page}
          setPage={setPage}
        />
      </Content>

    </Container>
  )
}