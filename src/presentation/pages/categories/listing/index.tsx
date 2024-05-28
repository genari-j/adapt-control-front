import { useState } from 'react'

// import { useChangeNavigation } from '~/data/usecases/hooks'
import { useModalVisibility } from '~/data/usecases/hooks'
import { useGetCategories } from '~/infra/cache/queries'
import { categoriesTable } from '~/main/config'
import { changePageTitle, dateConvert, reduceString } from '~/main/util'

import { Title, Table, Bounce, Pagination, Button } from '~/presentation/components'
import { Modal } from '~/presentation/pages'
import { white9 } from '~/presentation/themes'

import { Container, Content, TableBox, LoadingBox, NewCategoryBox } from './styles'

export const ListingCategories = () => {
  changePageTitle('Categorias')
  const { showModal, handleChangeModalVisibility } = useModalVisibility()

  const [page, setPage] = useState(1)
  const categories = useGetCategories(page)
  // const { handleGoToProductDetail } = useChangeNavigation()

  const mappedCategories = categories.data?.data.data.map(category => [
    category?.id,
    category?.name,
    reduceString(category?.description, 40),
    dateConvert(new Date(category?.created_at)),
  ])

  return (
    <Container>

      <Content>
        <Title text='Categorias' />

        <NewCategoryBox>
          <Button
            text='+ Nova'
            size='1rem'
            onClick={handleChangeModalVisibility}
          />
        </NewCategoryBox>

        {showModal && <Modal handleChangeModalVisibility={handleChangeModalVisibility} />}

        <TableBox>
          {categories.isLoading
            ? <LoadingBox> <Bounce bgColor={white9} /> </LoadingBox>
            : <Table
                titles={categoriesTable}
                data={mappedCategories}
                hoverEffect={true}
                // handleSelectedItem={handleGoToProductDetail}
              />
          }
        </TableBox>

        <Pagination
          dataName='Categorias'
          data={categories}
          page={page}
          setPage={setPage}
        />
      </Content>

    </Container>
  )
}