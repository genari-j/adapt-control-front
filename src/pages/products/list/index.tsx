import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useRouting } from '~/hooks'
import { useGetProducts } from '~/api/cache/queries'
import { pageTitle, priceFormatter, reduceString, productsHeadTB } from '~/utils'

import { Title, Table, Bounce, Pagination } from '~/components'

import { Container, Content, NewProductBox, TableBox, LoadingBox } from './styles'

export const ProductList = () => {
  pageTitle('Produtos')

  const [page, setPage] = useState(1)
  const products = useGetProducts(page)

  const { handleGoToProductDetail } = useRouting()

  return (
    <Container>

      <Content>
        <Title content='Produtos' />

        <NewProductBox>
          <Link to='/produtos/cadastrar'>+ Novo</Link>
        </NewProductBox>

        <TableBox>
          {products.isLoading
            ? <LoadingBox> <Bounce bgColor='white' /> </LoadingBox>
            : <Table.Table>
                <Table.THead>
                  <Table.TRHead>
                    {productsHeadTB.map(head => <Table.TH key={head}>{head}</Table.TH>)}
                  </Table.TRHead>
                </Table.THead>
                <Table.TBody>
                  {products.data?.data.data.map((product) => {
                    return (
                      <Table.TRBody
                        key={product.id}
                        handleGoToDetail={() => handleGoToProductDetail(product.id)}
                        isRowClickable={true}
                      >
                        <Table.TD>{product.id}</Table.TD>
                        <Table.TD>{reduceString(product?.name, 20)}</Table.TD>
                        <Table.TD>{reduceString(product?.description, 30)}</Table.TD>
                        <Table.TD>{priceFormatter.format(Number(product?.offer_price))}</Table.TD>
                        <Table.TD>{priceFormatter.format(Number(product?.price))}</Table.TD>
                        <Table.TD>{product.quantity}</Table.TD>
                      </Table.TRBody>
                    )
                  })}
                </Table.TBody>
              </Table.Table>
          }
        </TableBox>

        <Pagination
          totalCount={Number(products.data?.data.total)}
          totalCountPage={Number(products.data?.data.pages)}
          page={page}
          setPage={setPage}
        />
      </Content>

    </Container>
  )
}