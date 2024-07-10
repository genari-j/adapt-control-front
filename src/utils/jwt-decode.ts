import { jwtDecode } from 'jwt-decode'

interface UserProps {
  sub: number
  name: string | null
  user_code: string
  email: string
  departments: {
    id: number
    name: string
    active: boolean
    created_at: string
    updated_at: string
    deleted_at: string | null
  }
  profiles: {
    id: number
    name: string
    description: string
    active: boolean
    created_at: string
    updated_at: string
    deleted_at: string | null
  }
  active: number
  avatar: string | null
  created_at: string
  updated_at: string
}

export const decodeAccessToken = (token: string): UserProps | undefined => {
  try {
    return jwtDecode(token)
  } catch (error) {
    console.log('Autenticação não identificada:', error)
  }
}