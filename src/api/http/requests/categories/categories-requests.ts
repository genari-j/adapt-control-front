import { api } from '~/api/config'
import { type CategoryProps } from '~/@types'

export const getAllCategories = {
  listAll: async (page = 1, limit?: number) => {
    // let queryParams

    const queryParams = new URLSearchParams({
      page: String(page),
      limit: String(limit)
    })

    const url = `/categories?${queryParams}`
    return await api.get(url)
  }
}

export const createCategory = {
  create: async (data: CategoryProps) => await api.post('/categories', {
    ...data
  })
}
