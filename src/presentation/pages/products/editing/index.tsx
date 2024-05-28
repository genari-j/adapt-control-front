import { useChangeNavigation, useProductDetails, useProductEditing } from '~/data/usecases/hooks'
import { useGetCategories } from '~/infra/cache/queries'

import { changePageTitle } from '~/main/util'
import { Title, Label, Bounce, Button, TextField, Textarea, Select } from '~/presentation/components'
import { red9, white9 } from '~/presentation/themes'

import {
  Container,
  Content,
  Form,
  ProductsGrid,
  ProductGroup,
  ProductFileGroup,
  ButtonsBox
} from './styles'

export const EditingProducts = () => {
  changePageTitle('Edição Produto')
  const { handleGoToProductDetail } = useChangeNavigation()

  const { productEditing, onSubmit, register, handleSubmit, formState: { errors } } = useProductEditing()
  const { productDetails } = useProductDetails()
  const categories = useGetCategories()

  if (productDetails.isLoading) { return (<Container> <Bounce /> </Container>) }

  // Criar componente de ERRO
  if (productDetails.isError) { return (<Container> <h2>Deu erro no trem!</h2> </Container>) }

  if (productDetails.isSuccess && !productDetails.isLoading) {
    return (
      <Container>

        <Content>
          <Title text='Edição Produto' />

          <Form onSubmit={handleSubmit(onSubmit)}>
            <ProductsGrid>
              <ProductGroup>
                <Label htmlFor='name' text='Nome:' />
                <TextField
                  type='text'
                  label='Nome'
                  placeholder='Nome'
                  defaultValue={productDetails.data?.data.data.product.name}
                  register={register('name')}
                  id='name'
                  error={(errors.name != null)}
                />
                {(errors.name != null) && <Title color={red9} text={`${errors.name.message}`} size='0.9rem' />}
              </ProductGroup>

              <ProductGroup>
                <Label htmlFor='price' text='Valor:' />
                <TextField
                  type='number'
                  label='Valor'
                  placeholder='Valor'
                  defaultValue={productDetails.data?.data.data.product.price}
                  register={register('price')}
                  id='price'
                  error={(errors.price != null)}
                />
                {(errors.price != null) && <Title color={red9} text={`${errors.price.message}`} size='0.9rem' />}
              </ProductGroup>

              <ProductGroup>
                <Label htmlFor='quantity' text='Quantidade:' />
                <TextField
                  type='text'
                  label='Quantidade'
                  placeholder='Quantidade'
                  defaultValue={productDetails.data?.data.data.product.quantity}
                  register={register('quantity')}
                  id='quantity'
                  error={(errors.quantity != null)}
                />
                {(errors.quantity != null) && <Title color={red9} text={`${errors.quantity.message}`} size='0.9rem' />}
              </ProductGroup>

              <ProductGroup>
                <Label htmlFor='category' text='Categoria:' />
                <Select
                  label='Categoria'
                  placeholder='Categoria'
                  defaultValue={productDetails.data?.data.data.product.category.id}
                  data={!categories.isLoading && categories.isSuccess ? categories.data?.data.data : []}
                  register={register('category_id', { valueAsNumber: true })}
                  id='category'
                  {...(errors.category_id != null && { error: true })}
                />
                {(errors.category_id != null) && <Title color={red9} text={`${errors.category_id.message}`} size='0.9rem' />}
              </ProductGroup>
            </ProductsGrid>

            <ProductGroup>
              <Label htmlFor='description' text='Descrição:' />
              <Textarea
                label='Descrição do produto'
                placeholder='Descrição do produto'
                defaultValue={productDetails.data?.data.data.product.description}
                rows={5}
                register={register('description')}
                id='description'
                error={(errors.description != null)}
              />
              {(errors.description != null) && <Title color={red9} text={`${errors.description.message}`} size='0.9rem' />}
            </ProductGroup>

            <ProductFileGroup>
              <Label htmlFor='avatar' text='Upload' />
              <TextField
                type='file'
                label='Avatar'
                placeholder='Avatar'
                defaultValue={productDetails.data?.data.data.product.avatar}
                register={register('avatar')}
                id='avatar'
                error={(errors.avatar != null)}
              />
              {(errors.avatar != null) && <Title color={red9} text={`${errors.avatar.message}`} size='0.9rem' />}
            </ProductFileGroup>

            <ButtonsBox>
              <Button
                type='submit'
                size='1.1rem'
                disabled={productEditing.isLoading}
                text={productEditing.isLoading ? <Bounce bgColor={white9} /> : 'Salvar Alterações'}
              />

              <Button
                text='VOLTAR'
                size='1.1rem'
                onClick={() => handleGoToProductDetail(Number(productDetails.data?.data.data.product.id))}
              />
            </ButtonsBox>
          </Form>
        </Content>

      </Container>
    )
  }

  // Criar componente de ERRO
  return ( <Title text='Algo não ocorreu como esperado. Contate o Administrador!' /> )
}