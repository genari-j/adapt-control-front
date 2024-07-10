import { RiCloseCircleLine } from 'react-icons/ri'

import { useCategoryCreating } from '~/hooks'

import { Label, TextField, FormHelper, Button, Bounce, Title, Textarea } from '~/components'

import {
  Container,
  Content,
  CloseBtn,
  Form,
  TextFieldGroup,
  ButtonsBox
} from './styles'

interface ModalProps {
  handleChangeModalVisibility: () => void
}

export const Modal = ({ handleChangeModalVisibility }: ModalProps) => {
  const { creatingCategory, onSubmit, handleSubmit, register, formState: { errors } } = useCategoryCreating()

  return (
    <Container>
      <Content>
        <CloseBtn onClick={handleChangeModalVisibility}>
          <RiCloseCircleLine />
        </CloseBtn>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title content='Nova categoria' />

          <TextFieldGroup>
            <Label htmlFor='name' content='Categoria:' />
            <TextField
              type='text'
              placeholder='Categoria'
              register={register('name')}
              id='name'
              error={(errors.name != null)}
            />
            {(errors.name != null) && <FormHelper content={`${errors.name.message}`} />}
          </TextFieldGroup>

          <TextFieldGroup>
            <Label htmlFor='description' content='Descrição:' />
            <Textarea
              placeholder='Descrição da categoria'
              rows={5}
              register={register('description')}
              id='description'
              error={(errors.description != null)}
            />
            {(errors.description != null) && <FormHelper content={`${errors.description.message}`} />}
          </TextFieldGroup>

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