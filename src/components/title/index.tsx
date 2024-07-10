import { ComponentProps } from 'react'

import { CustomTitle } from './styles'

interface CustomTitleProps extends ComponentProps<'h2'> {
  content: string
  size?: string
  color?: string
}

export const Title = ({ content, size, color, ...rest }: CustomTitleProps) => {
  return (
    <CustomTitle
      color={color}
      size={size}
      {...rest}
    >
      {content}
    </CustomTitle>
  )
}