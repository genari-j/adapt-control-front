import { ComponentProps } from 'react'
import { type UseFormRegisterReturn } from 'react-hook-form'

import { Container } from './styles'

interface SelectProps extends ComponentProps<'select'> {
  register?: UseFormRegisterReturn
  defaultValue?: number
  placeholder?: string
  error?: boolean | string
  label?: string
  data: Array<{ id: number, name: string }>
}

export const Select = ({ register, defaultValue = 0, placeholder, error, label, data, ...rest }: SelectProps) => (
  <Container
    aria-label={label}
    defaultValue={defaultValue}
    name={register?.name}
    ref={register?.ref}
    onChange={register?.onChange}
    className={error && error === true ? 'with-error' : ''}
    {...(error && { error: 'true' })}
    {...rest}
  >
    <option value={0} disabled hidden>{placeholder ?? 'Selecione uma opção'}</option>
    {data.map((option) => (
      <option key={option.id} value={option.id}>
        {option.name}
      </option>
    ))}
  </Container>
)
