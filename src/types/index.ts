import { z } from 'zod'

//AUTH Y USERS
export const authSchema = z.object({
  name: z.string(),
  email: z
    .string()
    .min(1, { message: 'El email es requerido' })
    .email({ message: 'Email no válido' }),
  password: z
    .string()
    .min(1, {
      message: 'La contraseña es requerida',
    })
    .min(7, {
      message: 'La contraseña debe tener al menos 7 caracteres de longitud.',
    }),
})

 type Auth = z.infer<typeof authSchema>

export type UserLoginForm = Pick<Auth, 'email' | 'password'>

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  username: z.string(),
  birthdate: z.string().optional(), // Opcional por si acaso
  created_at: z.string(),
  email_verified_at: z.string().nullable(),
  role: z.string(),
  status: z.string(),
  updated_at: z.string()
})