import { type ReactNode, ComponentProps } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { Container, CustomTextfield, Icon } from './styles'

interface TextFieldProps extends ComponentProps<'input'> {
  register?: UseFormRegisterReturn
  error?: boolean
  children?: ReactNode
}

export const TextField = ({ register, error, children, ...rest }: TextFieldProps) => (
  <Container>
    <CustomTextfield
      name={register?.name}
      ref={register?.ref}
      onChange={register?.onChange}
      className={error && error === true ? 'with-error' : '' || children ? 'with-icon' : ''}
      {...(error && { error: 'true' } )}
      {...rest}
    />
    {children ? <Icon>{children}</Icon> : null}
  </Container>
)
