import { ComponentProps } from 'react'

import { CustomFormHelper } from './styles'

interface FormHelperProps extends ComponentProps<'span'> {
  content: string
  color?: string
  size?: string
}

export const FormHelper = ({ content, color, size }: FormHelperProps) => {
  return (
    <CustomFormHelper
      color={color}
      size={size}
    >
      {content}
    </CustomFormHelper>
  )
}