import NextAuth from 'next-auth'
import { z } from 'zod'
import { authConfig } from './auth.config'
import credentials from 'next-auth/providers/credentials'
import { compare } from 'bcryptjs'
import { getUser } from './lib/actions/user.actions'

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await getUser(email)
          if (!user) return null
          const passwordsMatch = await compare(password, user.password)
          if (passwordsMatch) return user
        }
        console.log('Invalid credentials')
        return null
      },
    }),
  ],
})
