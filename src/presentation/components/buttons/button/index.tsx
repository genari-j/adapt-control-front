import { ComponentProps } from 'react'
import { ButtonModel } from './styles'

interface ButtonProps extends ComponentProps<'button'> {
  text: string | JSX.Element
  $weight?: string
  size?: string
  backgcolor?: string
  textcolor?: string
  hoverEffect?: string
}

export const Button = ({ text, $weight, size, backgcolor, textcolor, hoverEffect, ...rest }: ButtonProps) => (
  <ButtonModel
    $weight={$weight}
    size={size}
    backgcolor={backgcolor}
    textcolor={textcolor}
    hoverEffect={hoverEffect}
    {...rest}
  >
    {text}
  </ButtonModel>
)
