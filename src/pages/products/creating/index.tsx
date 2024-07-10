import { useGetCategories } from '~/api/cache/queries'
import { useProductCreating } from '~/hooks'

import { pageTitle } from '~/utils'

import { Title, Label, TextField, FormHelper, Select, Textarea, Button, Bounce } from '~/components'

import {
  Container,
  Form,
  FormContent,
  TextFieldGrid,
  TextFieldGroup,
  ButtonBox
} from './styles'

export const CreatingProducts = () => {
  pageTitle('Criação de Produtos')
  const { creatingProduct, onSubmit, handleSubmit, register, formState: { errors } } = useProductCreating()

  const categories = useGetCategories()

  return (
    <Container>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title content='Criação de Produtos' />

        <FormContent>
          <TextFieldGrid>
            <TextFieldGroup>
              <Label htmlFor='name' content='Produto:' />
              <TextField
                type='text'
                placeholder='Produto'
                register={register('name')}
                id='name'
                error={(errors.name != null)}
              />
              {(errors.name != null) && <FormHelper content={`${errors.name.message}`} />}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='price' content='Valor:' />
              <TextField
                type='number'
                placeholder='Valor'
                register={register('price')}
                id='price'
                {...(errors.price != null && { error: true })}
              />
              {(errors.price != null) && <FormHelper content={`${errors.price.message}`} />}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='quantity' content='Quantidade:' />
              <TextField
                type='number'
                placeholder='Quantidade'
                register={register('quantity')}
                id='quantity'
                error={(errors.quantity != null)}
              />
              {(errors.quantity != null) && <FormHelper content={`${errors.quantity.message}`} />}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='category' content='Categoria:' />
              <Select
                data={!categories.isLoading && categories.isSuccess ? categories.data?.data.data : []}
                register={register('category_id', { valueAsNumber: true })}
                id='category'
                {...(errors.category_id != null && { error: true })}
              />
              {(errors.category_id != null) && <FormHelper content={`${errors.category_id.message}`} />}
            </TextFieldGroup>
          </TextFieldGrid>

          <TextFieldGroup>
            <Label htmlFor='description' content='Descrição:' />
            <Textarea
              placeholder='Descrição do produto'
              rows={5}
              register={register('description')}
              id='description'
              error={(errors.description != null)}
            />
            {(errors.description != null) && <FormHelper content={`${errors.description.message}`} />}
          </TextFieldGroup>
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