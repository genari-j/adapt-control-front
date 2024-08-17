import { AxiosError } from 'axios'
import { toast } from 'react-hot-toast'

export const responseStatus = (error: AxiosError) => {
  const message: Record<number, string> = {
    400: 'Ocorreu algum erro com a solicitação.',
    401: 'Não autorizado.',
    404: 'Solicitação não encontrada.',
    500: 'Ops, houve um erro ao tentar conexão com o servidor.'
  }

  if (!error.response) {
    toast.error('Algo inesperado ocorreu.')
  } else {
    toast.error(message[error.response.status])
  }
}

// export const responseStatus = (error: AxiosError) => {
//   switch (error?.response?.status) {
//     case 500:
//       toast.error('Ops, houve um erro ao tentar conexão com o servidor.')
//       break
//     case 404:
//       toast.error('Solicitação não encontrada.')
//       break
//     case 400:
//       toast.error('Ocorreu algum erro com a solicitação.')
//       break
//     case 401:
//       toast.error('Não autorizado.')
//       break
//     default:
//       console.log(`Erro: ${error?.response?.status}`)
//       break;
//   }
// }