import { z } from 'zod'

export const validateSignInSchema = z.object({
  user_code:
    z.string()
    .min(1, 'Matrícula inválida')
    .refine((val) => !Number.isNaN(parseInt(val))),
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
    .refine((val) => !Number.isNaN(parseInt(val))),
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
