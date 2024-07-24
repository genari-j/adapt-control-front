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

export const createProduct = {
  create: async (data: ProductProps) => await api.post('/products', {
    ...data
  })
}

export const updateProductById = {
  updateById: async (id: number, data: UpdateProductProps) => {
    const path = `/products/${id}`
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('quantity', String(data.quantity))
    formData.append('price', String(data.price))
    formData.append('category_id', String(data.category_id))
    if (data.avatar && data.avatar[0] instanceof File) {
      formData.append('avatar', data.avatar[0])
    }

    await api.put(path, formData)
  }
}