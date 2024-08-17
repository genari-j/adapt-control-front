import type { ComponentProps } from 'react'

import { CustomLabel } from './styles'

interface LabelProps extends ComponentProps<'label'> {
  htmlFor?: string
  label?: string
}

export const Label = ({ htmlFor, label }: LabelProps) => {
  return (
    <CustomLabel htmlFor={htmlFor}>
      {label}
    </CustomLabel>
  )
}