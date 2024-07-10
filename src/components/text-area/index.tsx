import { ComponentProps } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { CustomTextarea } from './styles'

interface TextareaProps extends ComponentProps<'textarea'> {
  register?: UseFormRegisterReturn
  error?: boolean
}

export const Textarea = ({ register, error, ...rest }: TextareaProps) => (
  <CustomTextarea
    name={register?.name}
    ref={register?.ref}
    onChange={register?.onChange}
    className={error && error === true ? 'with-error' : ''}
    {...(error && { error: 'true' })}
    {...rest}
  />
)
