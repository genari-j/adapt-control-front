import { ComponentProps } from 'react'

import { CustomLabel } from './styles'

interface CustomLabelProps extends ComponentProps<'label'> {
  content: string
  color?: string
}

export const Label = ({ content, color, ...rest }: CustomLabelProps) => {
  return (
    <CustomLabel
      color={color}
      {...rest}
    >
      {content}
    </CustomLabel>
  )
}