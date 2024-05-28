import { api } from '~/infra/http'
import { paths } from '~/main/config'
import { type CategoryProps } from '~/domain/models'

export const getAllCategories = {
  listAll: async (page = 1) => {
    let queryParams

    queryParams = new URLSearchParams({
      page: String(page)
    })

    const url = `${paths.backend.categories}?${queryParams}`
    return await api.get(url)
  }
}

export const createCategory = {
  create: async (data: CategoryProps) => await api.post(paths.backend.categories, {
    ...data
  })
}
