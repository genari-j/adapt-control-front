import {
  HomeIcon,
  Users,
  Products,
  Categories,
  Sales,
  LineChart
} from '~/assets'

export const config = {
  LOCAL_STORAGE_TOKEN: '@AdaptControl:token'
}

export const sidebarElements = [
  { id: 1, img: HomeIcon, url: '/', title: 'Início' },
  { id: 2, img: Users, url: '/usuarios', title: 'Usuários' },
  { id: 3, img: Products, url: '/produtos', title: 'Produtos' },
  { id: 4, img: Categories, url: '/categorias', title: 'Categorias' },
  { id: 5, img: Sales, url: '/vendas', title: 'Vendas' },
  { id: 6, img: LineChart, url: '/graficos', title: 'Dashboard' }
]

export const productsHeadTB = [
  'Código:',
  'Nome:',
  'Descrição:',
  'Valor:',
  'Quantidade:'
]

export const usersHeadTB = [
  'Código:',
  'Nome:',
  'Departamento:',
  'Perfil:'
]

export const categoriesHeadTB = [
  'Código:',
  'Nome:',
  'Descrição:',
  'Criação:'
]
