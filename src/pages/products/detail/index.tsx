import { useProductDetails } from '~/hooks'

import { useRouting } from '~/hooks'
import { Title, Label, Bounce, Button } from '~/components'

import { Container, Content, ProductsGrid, ProductGroup, ButtonsBox } from './styles'
import { pageTitle } from '~/utils'

export const ProductDetail = () => {
  pageTitle('Detalhamento Produto')
  const { handleGoToProducts, handleGoToEditProduct } = useRouting()

  const { productDetails } = useProductDetails()
  const { isLoading, isError, isSuccess, data } = productDetails

  if (isLoading) { return (<Container> <Bounce /> </Container>) }

  if (isError) { return (<Container> <h2>Deu erro no trem!</h2> </Container>) }

  if (isSuccess && !isLoading) {
    return (
      <Container>

        <Content>
          <Title content='Detalhe Produto' />

          <ProductsGrid>
            <ProductGroup>
              <Label content='Nome:' />
              <span>{data?.data.data.name}</span>
            </ProductGroup>

            <ProductGroup>
              <Label content='Valor:' />
              <span>{data?.data.data.price}</span>
            </ProductGroup>

            <ProductGroup>
              <Label content='Quantidade:' />
              <span>{data?.data.data.quantity}</span>
            </ProductGroup>

            <ProductGroup>
              <Label content='Categoria:' />
              <span>{data?.data.data.category.name}</span>
            </ProductGroup>
          </ProductsGrid>

          <ProductGroup>
            <Label content='Descrição:' />
            <span>{data?.data.data.description}</span>
          </ProductGroup>

          <ProductGroup>
            <Label content='Avatar:' />
            <span>{data?.data.data.avatar ? data?.data.data.avatar : 'Não há foto'}</span>
          </ProductGroup>

          <ButtonsBox>
            <Button
              buttonContent='EDITAR'
              onClick={() => handleGoToEditProduct(Number(data?.data.data.id))}
            />

            <Button
              buttonContent='VOLTAR'
              onClick={handleGoToProducts}
            />
          </ButtonsBox>
        </Content>

      </Container>
    )
  }

  // Criar componente de ERRO
  return ( <Title content='Algo não ocorreu como esperado. Contate o Administrador!' /> )
}