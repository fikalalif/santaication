import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  session: {strategy:"jwt"},
  pages:{
    signIn: "/signin"
  },
  callbacks: {
    jwt({token, user}){
      if (user) token.role = user.role;
      return token
    },
    session({session,token}){
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    },
  },
})