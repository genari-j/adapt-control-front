// import { useInfiniteQuery } from 'react-query'

import { useRouting, useProductDetails, useProductEditing } from '~/hooks'
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
// import { getAllCategories } from '~/api/http/requests'

export const EditingProducts = () => {
  pageTitle('Edição Produto')
  const { handleGoToProductDetail } = useRouting()

  const { productEditing, onSubmit, register, handleSubmit, formState: { errors } } = useProductEditing()
  const { productDetails } = useProductDetails()
  const categories = useGetCategories(1, Number(5000))

  if (productDetails.isLoading) {
    return (<Container> <Bounce /> </Container>)
  }

  // Criar componente de ERRO
  if (productDetails.isError) {
    return (<Container> <h2>Deu erro no trem!</h2> </Container>)
  }

  if (productDetails.isSuccess && !productDetails.isLoading) {
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
                  defaultValue={productDetails.data?.data.data.name}
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
                  defaultValue={productDetails.data?.data.data.price}
                  register={register('price')}
                  id='price'
                  error={(errors.price != null)}
                />
                {(errors.price != null) && <FormHelper content={`${errors.price.message}`} />}
              </ProductGroup>

              <ProductGroup>
                <Label htmlFor='quantity' content='Quantidade:' />
                <TextField
                  type='text'
                  placeholder='Quantidade'
                  defaultValue={productDetails.data?.data.data.quantity}
                  register={register('quantity')}
                  id='quantity'
                  error={(errors.quantity != null)}
                />
                {(errors.quantity != null) && <FormHelper content={`${errors.quantity.message}`} />}
              </ProductGroup>

              <ProductGroup>
                <Label htmlFor='category' content='Categoria:' />

                <Select
                  defaults={productDetails.data?.data.data.category}
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
                defaultValue={productDetails.data?.data.data.description}
                rows={5}
                register={register('description')}
                id='description'
                error={(errors.description != null)}
              />
              {(errors.description != null) && <FormHelper content={`${errors.description.message}`} />}
            </ProductGroup>

            <ProductFileGroup>
              <Label htmlFor='avatar' content='Upload' />
              <TextField
                type='file'
                placeholder='Avatar'
                defaultValue={productDetails.data?.data.data.avatar ? productDetails.data?.data.data.avatar : ''}
                register={register('avatar')}
                id='avatar'
                error={(errors.avatar != null)}
              />
              {(errors.avatar != null) && <FormHelper content={`${errors.avatar.message}`} />}
            </ProductFileGroup>

            <ButtonsBox>
              <Button
                type='submit'
                disabled={productEditing.isLoading}
                buttonContent={productEditing.isLoading ? <Bounce bgColor='white' /> : 'Salvar Alterações'}
              />

              <Button
                buttonContent='VOLTAR'
                onClick={() => handleGoToProductDetail(Number(productDetails.data?.data.data.id))}
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