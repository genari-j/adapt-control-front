import { ComponentProps } from 'react'
import { type UseFormRegisterReturn } from 'react-hook-form'

import { Label, FormHelper } from '~/components'

import { Container, CustomSelect } from './styles'

interface SelectProps extends ComponentProps<'select'> {
  register?: UseFormRegisterReturn
  label?: string
  htmlFor?: string
  error?: boolean
  defaults?: { id: number, name: string }
  data: Array<{ id: number, name: string }>
  message?: string | undefined
}

export const Select = ({ register, label, htmlFor, error, defaults, data, message, ...rest }: SelectProps) => (
  <Container>
    <Label htmlFor={htmlFor} label={label} />
    <CustomSelect
      name={register?.name}
      ref={register?.ref}
      onChange={register?.onChange}
      className={error && error === true ? 'with-error' : ''}
      {...(error && { error: 'true' })}
      {...rest}
    >
      <option value={defaults ? defaults.id : 0} hidden>{defaults ? defaults.name : 'Selecione uma opção'}</option>
      {data.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </CustomSelect>
    <FormHelper message={message} />
  </Container>
)
