import { useRouting, useProductById, useProductUpdating } from '~/hooks'
import { useGetCategories } from '~/api/cache/queries'

import { pageTitle } from '~/utils'
import { Title, Label, Bounce, Button, TextField, FormHelper, Textarea, Select } from '~/components'

import {
  Container,
  Content,
  Form,
  ProductsGrid,
  ProductGroup,
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
              <ProductGroup>
                <Label htmlFor='name' content='Nome:' />
                <TextField
                  type='text'
                  placeholder='Nome'
                  defaultValue={productById.data?.data.data.name}
                  register={register('name')}
                  id='name'
                  error={(errors.name != null)}
                />
                {(errors.name != null) && <FormHelper content={`${errors.name.message}`} />}
              </ProductGroup>

              <ProductGroup>
                <Label htmlFor='price' content='Valor:' />
                <TextField
                  type='number'
                  placeholder='Valor'
                  defaultValue={productById.data?.data.data.price}
                  register={register('price')}
                  id='price'
                  error={(errors.price != null)}
                />
                {(errors.price != null) && <FormHelper content={`${errors.price.message}`} />}
              </ProductGroup>

              <ProductGroup>
                <Label htmlFor='quantity' content='Quantidade:' />
                <TextField
                  type='number'
                  placeholder='Quantidade'
                  defaultValue={productById.data?.data.data.quantity}
                  register={register('quantity')}
                  id='quantity'
                  error={(errors.quantity != null)}
                />
                {(errors.quantity != null) && <FormHelper content={`${errors.quantity.message}`} />}
              </ProductGroup>

              <ProductGroup>
                <Label htmlFor='category' content='Categoria:' />

                <Select
                  defaults={productById.data?.data.data.category}
                  data={!categories.isLoading && categories.isSuccess ? categories.data?.data.data : []}
                  register={register('category_id', { valueAsNumber: true })}
                  id='category'
                  {...(errors.category_id != null && { error: true })}
                />
                {(errors.category_id != null) && <FormHelper content={`${errors.category_id.message}`} />}
              </ProductGroup>
            </ProductsGrid>

            <ProductGroup>
              <Label htmlFor='description' content='Descrição:' />
              <Textarea
                placeholder='Descrição do produto'
                defaultValue={productById.data?.data.data.description}
                rows={5}
                register={register('description')}
                id='description'
                error={(errors.description != null)}
              />
              {(errors.description != null) && <FormHelper content={`${errors.description.message}`} />}
            </ProductGroup>

            <ProductFileGroup>
              <Label htmlFor='avatar' content='Escolher arquivo' />
              <TextField
                type='file'
                placeholder='Avatar'
                defaultValue={productById.data?.data.data.avatar ? productById.data?.data.data.avatar : ''}
                register={register('avatar')}
                id='avatar'
                error={(errors.avatar != null)}
              />
              {(errors.avatar != null) && <FormHelper content={`${errors.avatar.message}`} />}
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