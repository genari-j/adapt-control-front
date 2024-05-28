import { jwtDecode } from 'jwt-decode'

type profiles = {
  id: number
  name: string
}

interface UserProps {
  sub: number
  name: string | null
  user_code: string
  email: string
  department_id: number
  profiles: profiles[]
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