import { ComponentProps } from 'react'
import { CustomButton } from './styles'

interface CustomButtonProps extends ComponentProps<'button'> {
  buttonContent: string | JSX.Element
  background?: string
}

export const Button = ({ buttonContent, background, ...rest }: CustomButtonProps) => {
  return (
    <CustomButton
      background={background}
      {...rest}
    >
      {buttonContent}
    </CustomButton>
  )
}
