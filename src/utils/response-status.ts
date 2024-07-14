import { AxiosError } from 'axios'
import { toast } from 'react-hot-toast'

export const responseStatus = (error: AxiosError) => {
  switch (error?.response?.status) {
    case 500:
      toast.error('Ops, houve um erro ao tentar conexão com o servidor.')
      break
    case 400:
      toast.error('Ocorreu algum erro com a solicitação.')
      break
    case 401:
      toast.error('Não autorizado.')
      break
    default:
      console.log(`Erro: ${error?.response?.status}`)
      break;
  }
}