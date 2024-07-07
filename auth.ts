import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
import credentials from 'next-auth/providers/credentials'
import { compare } from 'bcryptjs'
import { users } from './lib/placeholder-data'

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    credentials({
      async authorize(credentials) {
        const user = users.find((x) => x.email === credentials.email)
        if (!user) return null
        const passwordsMatch = await compare(
          credentials.password as string,
          user.password
        )
        if (passwordsMatch) return user

        console.log('Invalid credentials')
        return null
      },
    }),
  ],
})
