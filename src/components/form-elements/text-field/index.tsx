import { type ReactNode, ComponentProps } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { Label, FormHelper } from '~/components'

import {
  Container,
  TextFieldBox,
  CustomTextfield,
  Icon,
} from './styles'

interface TextFieldProps extends ComponentProps<'input'> {
  register?: UseFormRegisterReturn
  label?: string
  htmlFor?: string
  error?: boolean
  message?: string
  children?: ReactNode
}

export const TextField = ({ register, htmlFor, label, error, children, message, ...rest }: TextFieldProps) => (
  <Container>
    <Label htmlFor={htmlFor} label={label} />
    <TextFieldBox>
      <CustomTextfield
        name={register?.name}
        ref={register?.ref}
        onChange={register?.onChange}
        className={error && error === true ? 'with-error' : '' || children ? 'with-icon' : ''}
        {...(error && { error: 'true' } )}
        {...rest}
      />
      {children ? <Icon>{children}</Icon> : null}
    </TextFieldBox>
    <FormHelper message={message} />
  </Container>
)
