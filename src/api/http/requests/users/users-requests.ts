import { api } from '~/api/config'
import { type SignInProps, type SignUpProps } from '~/@types'

export const getAllUsers = {
  listAll: async (page = 1) => {
    let queryParams

    queryParams = new URLSearchParams({
      page: String(page)
    })

    const url = `/users?${queryParams}`
    return await api.get(url)
  }
}

export const auth = {
  login: async (data: SignInProps) => await api.post('/signin', {
    ...data
  })
}

export const createNewUser = {
  create: async (data: SignUpProps) => await api.post('/signup', {
    ...data
  })
}
