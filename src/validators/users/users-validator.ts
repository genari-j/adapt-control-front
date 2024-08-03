import { z } from 'zod'

export const validateSignInSchema = z.object({
  user_code:
    z.string()
    .min(1, 'Matrícula inválida')
    .transform(code => Number(code)),
  password:
    z.string()
    .min(1, 'Senha inválida')
    .min(6, 'A senha deve conter no mínimo 6 caracteres'),
})

export const validateSignUpSchema = z.object({
  name:
    z.string()
    .min(1, 'Nome inválido'),
  user_code:
    z.string()
    .min(1, 'Matrícula inválida')
    .transform(code => Number(code)),
  email:
    z.string()
    .min(1, 'E-mail inválido')
    .email('O e-mail deve conter um domínio @hotmail.com')
    .refine((value) => value.endsWith('@hotmail.com'), {
      message: 'O e-mail deve conter um domínio @hotmail.com'
    }),
  password:
    z.string()
    .min(1, 'Senha inválida')
    .min(6, 'A senha deve conter no mínimo 6 caracteres'),
  department_id:
    z.number()
    .min(1, 'Departamento inválido'),
  profile_id:
    z.number()
    .min(1, 'Perfil inválido')
})

export const validateSolicitationResetSchema = z.object({
  email: z.string()
    .min(1, 'Informe um e-mail válido para solicitar o Reset de Senha')
    .email('O e-mail deve conter um domínio @hotmail.com')
    .refine((value) => value.endsWith('@hotmail.com'), {
      message: 'O e-mail deve conter um domínio @hotmail.com'
    })
})

export const validateConfirmPasswordSchema = z.object({
  password:
    z.string()
    .min(1, 'A senha deve conter no mínimo 6 caracteres'),
  confirmPassword:
    z.string()
    .min(1, 'A senha deve conter no mínimo 6 caracteres'),
})
.refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não conferem',
  path: ['confirmPassword']
})