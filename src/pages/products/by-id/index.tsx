import { useProductById, useRouting } from '~/hooks'
import { pageTitle, priceFormatter } from '~/utils'

import { Title, Bounce, Button } from '~/components'

import {
  Container,
  Content,
  ItemsContent,
  ItemAvatar,
  ItemDescriptions,
  ButtonsBox
} from './styles'

export const ProductById = () => {
  pageTitle('Detalhamento Produto')
  const { handleGoToProducts, handleGoToEditProduct } = useRouting()

  const { productById } = useProductById()
  const { isLoading, isError, isSuccess, data } = productById

  if (isLoading) { return (<Container> <Bounce /> </Container>) }

  if (isError) { return (<Container> <h2>Deu erro no trem!</h2> </Container>) }

  if (isSuccess && !isLoading) {
    return (
      <Container>

        <Content>
          <ItemsContent>
            <ItemAvatar>
              <img
                src={String(data?.data.data.avatar)}
                alt={String(data?.data.data.name)}
                title={String(data?.data.data.name)}
              />
            </ItemAvatar>

            <ItemDescriptions>
              <h2>{data?.data.data.name}</h2>
              <span>{priceFormatter.format(data?.data.data.offer_price)}</span>
              <span>{priceFormatter.format(data?.data.data.price)}</span>
              <span>{data?.data.data.quantity}</span>
              <span>{data?.data.data.category.name}</span>
              <span>{data?.data.data.category.description}</span>
              <p>{data?.data.data.description}</p>
            </ItemDescriptions>
          </ItemsContent>

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