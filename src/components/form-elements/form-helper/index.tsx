import { ComponentProps } from 'react'

import { CustomSpan } from './styles'

interface FormHelperProps extends ComponentProps<'span'> {
  message?: string | undefined
}

export const FormHelper = ({ message }: FormHelperProps) => {
  return (
    <CustomSpan>
      {message}
    </CustomSpan>
  )
}