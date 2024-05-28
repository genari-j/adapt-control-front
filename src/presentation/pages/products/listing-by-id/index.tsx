import { useProductDetails } from '~/data/usecases/hooks'

import { useChangeNavigation } from '~/data/usecases/hooks'
import { Title, Label, Bounce, Button } from '~/presentation/components'

import { Container, Content, ProductsGrid, ProductGroup, ButtonsBox } from './styles'
import { changePageTitle } from '~/main/util'

export const ProductDetails = () => {
  changePageTitle('Detalhamento Produto')
  const { handleGoToProducts, handleGoToEditProduct } = useChangeNavigation()

  const { productDetails } = useProductDetails()
  const { isLoading, isError, isSuccess, data } = productDetails

  if (isLoading) { return (<Container> <Bounce /> </Container>) }

  if (isError) { return (<Container> <h2>Deu erro no trem!</h2> </Container>) }

  if (isSuccess && !isLoading) {
    return (
      <Container>

        <Content>
          <Title text='Detalhe Produto' />

          <ProductsGrid>
            <ProductGroup>
              <Label text='Nome:' />
              <Title text={data?.data.data.product.name} />
            </ProductGroup>

            <ProductGroup>
              <Label text='Valor:' />
              <Title text={String(data?.data.data.product.price)} />
            </ProductGroup>

            <ProductGroup>
              <Label text='Quantidade:' />
              <Title text={String(data?.data.data.product.quantity)} />
            </ProductGroup>

            <ProductGroup>
              <Label text='Categoria:' />
              <Title text={data?.data.data.product.category.name} />
            </ProductGroup>
          </ProductsGrid>

          <ProductGroup>
            <Label text='Descrição:' />
            <Title text={data?.data.data.product.description} />
          </ProductGroup>

          <ProductGroup>
            <Label text='Avatar:' />
            <Title text={data?.data.data.product.avatar ? data?.data.data.product.avatar : 'Não há foto'} />
          </ProductGroup>

          <ButtonsBox>
            <Button
              text='EDITAR'
              size='1.1rem'
              onClick={() => handleGoToEditProduct(Number(data?.data.data.product.id))}
            />

            <Button
              text='VOLTAR'
              size='1.1rem'
              onClick={handleGoToProducts}
            />
          </ButtonsBox>
        </Content>

      </Container>
    )
  }

  // Criar componente de ERRO
  return ( <Title text='Algo não ocorreu como esperado. Contate o Administrador!' /> )
}