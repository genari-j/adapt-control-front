import { useRouting, useProductById, useProductUpdating } from '~/hooks'
import { useGetCategories } from '~/api/cache/queries'

import { pageTitle } from '~/utils'
import { Title, Bounce, Button, TextField, Textarea, Select } from '~/components'

import {
  Container,
  Content,
  Form,
  ProductsGrid,
  ProductsGroup,
  ProductFileGroup,
  ButtonsBox
} from './styles'

export const ProductUpdate = () => {
  pageTitle('Edição Produto')
  const { handleGoToProductDetail } = useRouting()

  const { productUpdating, onSubmit, register, handleSubmit, formState: { errors } } = useProductUpdating()
  const { productById } = useProductById()
  const categories = useGetCategories(1, Number(5000))

  if (productById.isLoading) {
    return (<Container> <Bounce /> </Container>)
  }

  // Criar componente de ERRO
  if (productById.isError) {
    return (<Container> <h2>Deu erro no trem!</h2> </Container>)
  }

  if (productById.isSuccess && !productById.isLoading) {
    return (
      <Container>

        <Content>
          <Title content='Edição Produto' />

          <Form onSubmit={handleSubmit(onSubmit)}>
            <ProductsGrid>
              <ProductsGroup>
                <TextField
                  id='name'
                  type='text'
                  label='Nome:'
                  htmlFor='name'
                  placeholder='Nome'
                  defaultValue={productById.data?.data.data.name}
                  register={register('name')}
                  error={(errors.name != null)}
                  message={errors?.name?.message}
                />

                <TextField
                  id='offer_price'
                  type='number'
                  label='Oferta:'
                  htmlFor='offer_price'
                  placeholder='Oferta'
                  defaultValue={productById.data?.data.data.offer_price}
                  register={register('offer_price')}
                  {...(errors.offer_price != null && { error: true })}
                />

                <TextField
                  id='price'
                  type='number'
                  label='Valor:'
                  htmlFor='price'
                  placeholder='Valor'
                  defaultValue={productById.data?.data.data.price}
                  register={register('price')}
                  error={(errors.price != null)}
                  message={errors?.price?.message}
                />
              </ProductsGroup>

              <ProductsGroup>
                <TextField
                  id='quantity'
                  type='number'
                  label='Quantidade:'
                  htmlFor='quantity'
                  placeholder='Quantidade'
                  defaultValue={productById.data?.data.data.quantity}
                  register={register('quantity')}
                  error={(errors.quantity != null)}
                  message={errors?.quantity?.message}
                />

                <Select
                  id='category'
                  label='Categoria:'
                  htmlFor='category'
                  defaults={productById.data?.data.data.category}
                  data={!categories.isLoading && categories.isSuccess ? categories.data?.data.data : []}
                  register={register('category_id', { valueAsNumber: true })}
                  {...(errors.category_id != null && { error: true })}
                  message={errors?.category_id?.message}
                />
              </ProductsGroup>
            </ProductsGrid>

            <Textarea
              id='description'
              htmlFor='description' content='Descrição:'
              placeholder='Descrição do produto'
              defaultValue={productById.data?.data.data.description}
              rows={5}
              register={register('description')}
              error={(errors.description != null)}
              message={errors?.description?.message}
            />

            <ProductFileGroup>
              <TextField
                id='avatar'
                type='file'
                label='Escolher arquivo'
                htmlFor='avatar'
                placeholder='Avatar'
                register={register('avatar')}
                error={(errors.avatar != null)}
                message={errors?.avatar?.message}
              />
            </ProductFileGroup>

            <ButtonsBox>
              <Button
                type='submit'
                disabled={productUpdating.isLoading}
                buttonContent={productUpdating.isLoading ? <Bounce bgColor='white' /> : 'Salvar Alterações'}
              />

              <Button
                buttonContent='VOLTAR'
                onClick={() => handleGoToProductDetail(Number(productById.data?.data.data.id))}
              />
            </ButtonsBox>
          </Form>
        </Content>

      </Container>
    )
  }

  // Criar componente de ERRO
  return ( <Title content='Algo não ocorreu como esperado. Contate o Administrador!' /> )
}