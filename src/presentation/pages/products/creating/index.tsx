import { useGetCategories } from '~/infra/cache/queries'
import { useProductCreating } from '~/data/usecases/hooks'

import { changePageTitle } from '~/main/util'

import { Title, Label, TextField, Select, Textarea, Button, Bounce } from '~/presentation/components'
import { red9, white9 } from '~/presentation/themes'

import {
  Container,
  Form,
  FormContent,
  TextFieldGrid,
  TextFieldGroup,
  ButtonBox
} from './styles'

export const CreatingProducts = () => {
  changePageTitle('Criação de Produtos')
  const { creatingProduct, onSubmit, handleSubmit, register, formState: { errors } } = useProductCreating()

  const categories = useGetCategories()

  return (
    <Container>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title text='Criação de Produtos' />

        <FormContent>
          <TextFieldGrid>
            <TextFieldGroup>
              <Label htmlFor='name' text='Produto:' />
              <TextField
                type='text'
                label='Produto'
                placeholder='Produto'
                register={register('name')}
                id='name'
                error={(errors.name != null)}
              />
              {(errors.name != null) && <Title color={red9} text={`${errors.name.message}`} size='0.9rem' />}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='price' text='Valor:' />
              <TextField
                type='number'
                label='Valor'
                placeholder='Valor'
                register={register('price')}
                id='price'
                {...(errors.price != null && { error: true })}
              />
              {(errors.price != null) && <Title color={red9} text={`${errors.price.message}`} size='0.9rem' />}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='quantity' text='Quantidade:' />
              <TextField
                type='number'
                label='Quantidade'
                placeholder='Quantidade'
                register={register('quantity')}
                id='quantity'
                error={(errors.quantity != null)}
              />
              {(errors.quantity != null) && <Title color={red9} text={`${errors.quantity.message}`} size='0.9rem' />}
            </TextFieldGroup>

            <TextFieldGroup>
              <Label htmlFor='category' text='Categoria:' />
              <Select
                label='Categoria'
                placeholder='Categoria'
                data={!categories.isLoading && categories.isSuccess ? categories.data?.data.data : []}
                register={register('category_id', { valueAsNumber: true })}
                id='category'
                {...(errors.category_id != null && { error: true })}
              />
              {(errors.category_id != null) && <Title color={red9} text={`${errors.category_id.message}`} size='0.9rem' />}
            </TextFieldGroup>
          </TextFieldGrid>

          <TextFieldGroup>
            <Label htmlFor='description' text='Descrição:' />
            <Textarea
              label='Descrição do produto'
              placeholder='Descrição do produto'
              rows={5}
              register={register('description')}
              id='description'
              error={(errors.description != null)}
            />
            {(errors.description != null) && <Title color={red9} text={`${errors.description.message}`} size='0.9rem' />}
          </TextFieldGroup>
        </FormContent>

        <ButtonBox>
          <Button
            type='submit'
            color='white9'
            size='1.1rem'
            disabled={creatingProduct.isLoading}
            text={creatingProduct.isLoading ? <Bounce bgColor={white9} /> : 'Cadastrar'}
          />
        </ButtonBox>
      </Form>

    </Container>
  )
}