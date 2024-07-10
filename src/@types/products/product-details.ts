export interface ProductProps {
  name: string
  description: string
  quantity: number
  price: number
  category_id: number
}

type Category = {
  id: number
  name: string
  description: string
  active: boolean
  created_at: string
  updated_at: string
}

export interface ProductByIdProps {
  data: {
    id: number
    name: string
    description: string
    quantity: number
    price: number
    category: Category
    avatar: null
    active: boolean
    created_at: string
    updated_at: string
    deleted_at: string | null
  }
}