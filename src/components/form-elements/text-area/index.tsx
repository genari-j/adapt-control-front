import { ComponentProps } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { Label, FormHelper } from '~/components'

import { Container, CustomTextarea } from './styles'

interface TextareaProps extends ComponentProps<'textarea'> {
  register?: UseFormRegisterReturn
  htmlFor?: string
  label?: string
  error?: boolean
  message?: string
}

export const Textarea = ({ register, htmlFor, label, error, message, ...rest }: TextareaProps) => (
  <Container>
    <Label htmlFor={htmlFor} label={label} />
    <CustomTextarea
      name={register?.name}
      ref={register?.ref}
      onChange={register?.onChange}
      className={error && error === true ? 'with-error' : ''}
      {...(error && { error: 'true' })}
      {...rest}
    />
    <FormHelper message={message} />
  </Container>
)
