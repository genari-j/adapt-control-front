import { ComponentProps } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { Container } from './styles'

interface TextareaProps extends ComponentProps<'textarea'> {
  register?: UseFormRegisterReturn
  label: string
  placeholder?: string
  error?: boolean
}

export const Textarea = ({ register, label, placeholder, error, ...rest }: TextareaProps) => (
  <Container
    aria-label={label}
    name={register?.name}
    ref={register?.ref}
    onChange={register?.onChange}
    placeholder={placeholder}
    className={error && error === true ? 'with-error' : ''}
    {...(error && { error: 'true' })}
    {...rest}
  />
)
