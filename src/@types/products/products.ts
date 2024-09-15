export interface Product {
  id: number
  name: string
  description: string
  quantity: string
  offer_price: string
  price: string
  active: number
  avatar: string | null
  category: {
    id: number
    name: string
    description: string
    active: boolean
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
  error: boolean
  limit: number
  currentPage: number
  pages: number
  total: number
}