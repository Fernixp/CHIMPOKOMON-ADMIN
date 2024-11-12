import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  birthdate: z.string(),
  email_verified_at: z.string(),
  role: z.string(),
  status: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
})

export type User = z.infer<typeof userSchema>
