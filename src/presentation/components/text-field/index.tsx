import { type ReactNode, ComponentProps } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { Container, InputModel, Icon } from './styles'

interface TextFieldProps extends ComponentProps<'input'> {
  register?: UseFormRegisterReturn
  label: string
  placeholder?: string
  error?: boolean
  type: string
  children?: ReactNode
}

export const TextField = ({ type, register, label, placeholder, error, children, ...rest }: TextFieldProps) => (
  <Container>
    <InputModel
      type={type}
      aria-label={label}
      name={register?.name}
      ref={register?.ref}
      onChange={register?.onChange}
      placeholder={placeholder}
      className={error && error === true ? 'with-error' : '' || children ? 'with-icon' : ''}
      {...(error && { error: 'true' } )}
      {...rest}
    />
    {children ? <Icon>{children}</Icon> : null}
  </Container>
)
