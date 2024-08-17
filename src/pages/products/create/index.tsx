import { useGetCategories } from '~/api/cache/queries'
import { useProductCreating } from '~/hooks'

import { pageTitle } from '~/utils'

import { Title, TextField, Select, Textarea, Button, Bounce } from '~/components'

import {
  Container,
  Form,
  FormContent,
  TextFieldGrid,
  ButtonBox
} from './styles'

export const ProductCreate = () => {
  pageTitle('Criação de Produtos')
  const { creatingProduct, onSubmit, handleSubmit, register, formState: { errors } } = useProductCreating()

  const categories = useGetCategories()

  return (
    <Container>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title content='Criação de Produtos' />

        <FormContent>
          <TextFieldGrid>
            <TextField
              id='name'
              type='text'
              label='Produto:'
              htmlFor='name'
              placeholder='Produto'
              register={register('name')}
              error={(errors.name != null)}
              message={errors?.name?.message}
            />

            <TextField
              id='price'
              type='number'
              label='Valor:'
              htmlFor='price'
              placeholder='Valor'
              register={register('price')}
              {...(errors.price != null && { error: true })}
              message={errors?.price?.message}
            />

            <TextField
              id='quantity'
              type='number'
              label='Quantidade:'
              htmlFor='quantity'
              placeholder='Quantidade'
              register={register('quantity')}
              error={(errors.quantity != null)}
              message={errors?.quantity?.message}
            />

            <Select
              id='category'
              label='Categoria:'
              htmlFor='category'
              data={!categories.isLoading && categories.isSuccess ? categories.data?.data.data : []}
              register={register('category_id', { valueAsNumber: true })}
              {...(errors.category_id != null && { error: true })}
              message={errors?.category_id?.message}
            />
          </TextFieldGrid>

          <Textarea
            id='description'
            label='Descrição:'
            htmlFor='description'
            placeholder='Descrição do produto'
            rows={5}
            register={register('description')}
            error={(errors.description != null)}
            message={errors?.description?.message}
          />
        </FormContent>

        <ButtonBox>
          <Button
            type='submit'
            disabled={creatingProduct.isLoading}
            buttonContent={creatingProduct.isLoading ? <Bounce bgColor='white' /> : 'Cadastrar'}
          />
        </ButtonBox>
      </Form>

    </Container>
  )
}