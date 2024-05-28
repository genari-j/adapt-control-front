import { api } from '~/infra/http'
import { paths } from '~/main/config'
import { type SignInProps } from '~/domain/models'
import { type SignUpProps } from '~/domain/models'

export const getAllUsers = {
  listAll: async (page = 1) => {
    let queryParams

    queryParams = new URLSearchParams({
      page: String(page)
    })

    const url = `${paths.backend.users}?${queryParams}`
    return await api.get(url)
  }
}

export const auth = {
  login: async (data: SignInProps) => await api.post(paths.backend.signIn, {
    ...data
  })
}

export const createNewUser = {
  create: async (data: SignUpProps) => await api.post(paths.backend.signUp, {
    ...data
  })
}
