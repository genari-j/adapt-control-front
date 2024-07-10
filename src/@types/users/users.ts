export interface User {
  id: number
  name: string
  user_code: string
  email: string
  profile: {
    id: number
    name: string
    description: string
    active: true
    created_at: string
    updated_at: string
  },
  department: {
    id: number
    name: string
    active: boolean
    created_at: string
    updated_at: string
  },
  active: number
  avatar: string | null
  created_at: string
  updated_at: string
  deleted_at: string | null
}

export interface UsersProps  {
  data: User[]
  error: Boolean
  limit: number
  currentPage: number
  pages: number
  total: number
}