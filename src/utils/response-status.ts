import type { AxiosError } from 'axios'

import { toast } from 'react-hot-toast'

import type { ApiResponse } from '~/@types'

type ResponseType = {
	[key: number]: string
}

export const responseStatus = (error: AxiosError) => {
	const errorMessages: ResponseType = {
		400: 'Solicitação inválida.',
		401: 'Não autorizado.',
		404: 'Solicitação não encontrada.',
		500: 'Ops, houve um erro ao tentar conectar ao servidor.',
	}

	if (!error.response) {
		toast.error('Ocorreu um erro. Não foi possível estabelecer uma conexão com o servidor.')
	} else {
		const statusCode = error.response.status
		const apiMessage = (error.response.data as ApiResponse).message

		const message = apiMessage || errorMessages[statusCode] || 'Ocorreu um erro inesperado.'

		toast.error(message)
	}
}