import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useChangeNavigation } from '~/data/usecases/hooks'
import { useGetProducts } from '~/infra/cache/queries'
import { paths, productsTable } from '~/main/config'
import { changePageTitle, currencyConvert, reduceString } from '~/main/util'

import { Title, Table, Bounce, Pagination } from '~/presentation/components'
import { white9 } from '~/presentation/themes'

import { Container, Content, NewProductBox, TableBox, LoadingBox } from './styles'

export const ListingProducts = () => {
  changePageTitle('Produtos')

  const [page, setPage] = useState(1)
  const currencyFormatter = currencyConvert('pt-BR', 'BRL')

  const products = useGetProducts(page)
  const { handleGoToProductDetail } = useChangeNavigation()

  const mappedProducts = products.data?.data.data.map(product => [
    product?.id,
    reduceString(product?.name, 20),
    reduceString(product?.description, 30),
    currencyFormatter.format(Number(product?.price)),
    product?.quantity
  ])

  return (
    <Container>

      <Content>
        <Title text='Produtos' />

        <NewProductBox>
          <Link to={`${paths.frontend.products}/cadastrar`}>+ Novo</Link>
        </NewProductBox>

        <TableBox>
          {products.isLoading
            ? <LoadingBox> <Bounce bgColor={white9} /> </LoadingBox>
            : <Table
                titles={productsTable}
                data={mappedProducts}
                hoverEffect={true}
                handleSelectedItem={handleGoToProductDetail}
              />
          }
        </TableBox>

        <Pagination
          dataName='Produtos'
          data={products}
          page={page}
          setPage={setPage}
        />
      </Content>

    </Container>
  )
}