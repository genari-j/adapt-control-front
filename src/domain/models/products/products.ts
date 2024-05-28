export interface Product {
  id: number
  name: string
  description: string
  quantity: string
  price: string
  active: number
  avatar: string | null
  category: {
    id: number
    name: string
    description: string
    active: Boolean
    created_at: string
    updated_at: string
    deleted_at: string | null
  }
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export interface ProductsProps  {
  data: Product[]
  error: Boolean
  limit: number
  currentPage: number
  pages: number
  total: number
}