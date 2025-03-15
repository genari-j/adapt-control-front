import { api } from '~/api/config'
import { type CategoryProps } from '~/@types'

export const getAllCategories = {
  listAll: (params: Record<string, string> = {}) => {
		const queryParams = new URLSearchParams(params)

		const url = `/categories?${queryParams.toString()}`
		return api.get(url)
	},
}

export const createCategory = {
  create: async (data: CategoryProps) => await api.post('/categories', {
    ...data
  })
}
