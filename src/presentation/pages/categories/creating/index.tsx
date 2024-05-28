import { RiCloseCircleLine } from 'react-icons/ri'

import { useCategoryCreating } from '~/data/usecases/hooks'

import { Label, TextField, Button, Bounce, Title, Textarea } from '~/presentation/components'
import { red9, white6, white8, white9 } from '~/presentation/themes'

import {
  Container,
  Content,
  CloseBtn,
  Form,
  TextFieldGroup,
  ButtonsBox
} from './styles'

interface PaginationProps {
  handleChangeModalVisibility: () => void
}

export const Modal = ({ handleChangeModalVisibility }: PaginationProps) => {
  const { creatingCategory, onSubmit, handleSubmit, register, formState: { errors } } = useCategoryCreating()

  return (
    <Container>
      <Content>
        <CloseBtn onClick={handleChangeModalVisibility}>
          <RiCloseCircleLine />
        </CloseBtn>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title text='Nova categoria' $weight='600' />

          <TextFieldGroup>
            <Label htmlFor='name' text='Categoria:' />
            <TextField
              type='text'
              label='Categoria'
              placeholder='Categoria'
              register={register('name')}
              id='name'
              error={(errors.name != null)}
            />
            {(errors.name != null) && <Title color={red9} text={`${errors.name.message}`} size='0.9rem' />}
          </TextFieldGroup>

          <TextFieldGroup>
            <Label htmlFor='description' text='Descrição:' />
            <Textarea
              label='Descrição da categoria'
              placeholder='Descrição da categoria'
              rows={5}
              register={register('description')}
              id='description'
              error={(errors.description != null)}
            />
            {(errors.description != null) && <Title color={red9} text={`${errors.description.message}`} size='0.9rem' />}
          </TextFieldGroup>

          <ButtonsBox>
            <Button
              type='submit'
              size='1.1rem'
              disabled={creatingCategory.isLoading}
              text={creatingCategory.isLoading ? <Bounce bgColor={white9} /> : 'Cadastrar'}
            />

            <Button
              type='submit'
              size='1.1rem'
              text='Cancelar'
              onClick={handleChangeModalVisibility}
              backgcolor={white8}
              hoverEffect={white6}
            />
          </ButtonsBox>
        </Form>
      </Content>
    </Container>
  )
}