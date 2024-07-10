import { type ReactNode } from 'react'

import {
  CustomTable,
  CustomTHead,
  CustomTRHead,
  CustomTH,
  CustomTBody,
  CustomTRBody,
  CustomTD
} from './styles'

interface TableProps {
  children: ReactNode
  handleGoToDetail?: () => void
  isRowClickable?: boolean
  itemId?: number
}

export const Table = ({ children }: TableProps) => {
  return (
    <CustomTable>
      {children}
    </CustomTable>
  )
}

export const THead = ({ children }: TableProps) => {
  return (
    <CustomTHead>
      {children}
    </CustomTHead>
  )
}

export const TRHead = ({ children }: TableProps) => {
  return (
    <CustomTRHead>
      {children}
    </CustomTRHead>
  )
}

export const TH = ({ children }: TableProps) => {
  return (
    <CustomTH>
      {children}
    </CustomTH>
  )
}

export const TBody = ({ children }: TableProps) => {
  return (
    <CustomTBody>
      {children}
    </CustomTBody>
  )
}

export const TRBody = ({ children, handleGoToDetail, isRowClickable = false }: TableProps) => {
  return (
    <CustomTRBody
      role='button'
      onClick={handleGoToDetail}
      className={isRowClickable ? 'with-hover' : ''}
    >
      {children}
    </CustomTRBody>
  )
}

export const TD = ({ children }: TableProps) => {
  return (
    <CustomTD>
      {children}
    </CustomTD>
  )
}