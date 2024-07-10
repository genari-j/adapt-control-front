import { api } from '~/api/config'
import { ProductProps, UpdateProductProps } from '~/@types'

export const getAllProducts = {
  listAll: async (page = 1) => {
    let queryParams

    queryParams = new URLSearchParams({
      page: String(page)
    })

    const url = `/products?${queryParams}`
    return await api.get(url)
  }
}

export const getProductById = {
  getById: async (id: number) => await api.get(`/products/${id}`)
}

export const updateProductById = {
  updateById: async (id: number, data: UpdateProductProps) =>
    await api.put(`/products/${id}`, {
      ...data
    })
}

export const createProduct = {
  create: async (data: ProductProps) => await api.post('/products', {
    ...data
  })
}