import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useRouting } from '~/hooks'
import { useGetProducts } from '~/api/cache/queries'
import { pageTitle, priceFormatter, reduceString, productsHeadTB } from '~/utils'

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
            : <Table>
                <THead>
                  <TRHead>
                    {productsHeadTB.map(head => <TH key={head}>{head}</TH>)}
                  </TRHead>
                </THead>
                <TBody>
                  {products.data?.data.data.map((product) => {
                    return (
                      <TRBody
                        key={product.id}
                        handleGoToDetail={() => handleGoToProductDetail(product.id)}
                        isRowClickable={true}
                      >
                        <TD>{product.id}</TD>
                        <TD>{reduceString(product?.name, 20)}</TD>
                        <TD>{reduceString(product?.description, 30)}</TD>
                        <TD>{priceFormatter.format(Number(product?.price))}</TD>
                        <TD>{product.id}</TD>
                      </TRBody>
                    )
                  })}
                </TBody>
              </Table>
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