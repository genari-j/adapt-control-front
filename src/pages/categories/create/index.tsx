import { RiCloseCircleLine } from 'react-icons/ri'

import { useCategoryCreating } from '~/hooks'

import { TextField, Button, Bounce, Title, Textarea } from '~/components'

import {
  Container,
  Content,
  CloseBtn,
  Form,
  ButtonsBox
} from './styles'

interface CategoryCreateProps {
  handleChangeModalVisibility: () => void
}

export const CategoryCreate = ({ handleChangeModalVisibility }: CategoryCreateProps) => {
  const { creatingCategory, onSubmit, handleSubmit, register, formState: { errors } } = useCategoryCreating()

  return (
    <Container>
      <Content>
        <CloseBtn onClick={handleChangeModalVisibility}>
          <RiCloseCircleLine />
        </CloseBtn>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title content='Nova categoria' />

          <TextField
            id='name'
            type='text'
            label='Categoria:'
            htmlFor='name'
            placeholder='Categoria'
            register={register('name')}
            error={(errors.name != null)}
            message={errors?.name?.message}
          />

          <Textarea
            id='description'
            label='Descrição:'
            htmlFor='description'
            placeholder='Descrição da categoria'
            rows={5}
            register={register('description')}
            error={(errors.description != null)}
            message={errors?.description?.message}
          />

          <ButtonsBox>
            <Button
              type='submit'
              disabled={creatingCategory.isLoading}
              buttonContent={creatingCategory.isLoading ? <Bounce bgColor='white' /> : 'Cadastrar'}
            />

            <Button
              buttonContent='Cancelar'
              background='red8'
              onClick={handleChangeModalVisibility}
            />
          </ButtonsBox>
        </Form>
      </Content>
    </Container>
  )
}