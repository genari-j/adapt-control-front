export interface CategoryProps {
  name: string
  description: string
}

export interface Category {
  id: number
  name: string
  description: string
  active: number
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export interface CategoriesProps  {
  data: Category[]
  error: Boolean
  limit: number
  currentPage: number
  pages: number
  total: number
}