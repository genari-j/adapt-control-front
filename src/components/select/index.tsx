import { ComponentProps } from 'react'
import { type UseFormRegisterReturn } from 'react-hook-form'

import { CustomSelect } from './styles'

interface SelectProps extends ComponentProps<'select'> {
  register?: UseFormRegisterReturn
  error?: boolean
  defaults?: { id: number, name: string }
  data: Array<{ id: number, name: string }>
}

export const Select = ({ register, error, defaults, data, ...rest }: SelectProps) => (
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
)
