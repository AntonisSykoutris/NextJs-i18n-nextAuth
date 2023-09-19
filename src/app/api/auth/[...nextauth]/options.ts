import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email:',
          type: 'email',
          placeholder: 'email',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = {
          id: '42',
          email: 'lmc@softone.gr',
          password: '123',
          role: 47, // [admink,manger,...] 47 01001001101
        };
        if (credentials?.email === user.email && credentials?.password === user.password) {
          return user;
        } else if (credentials?.email !== user.email || credentials?.password !== user.password) {
          throw new Error('wrongCredentials');
        }
        {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      console.log('jwt callback:', { token, user, session });
      if (user) {
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log('session callback:', { token, user, session });

      if (session?.user) {
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
  },
  jwt: {
    maxAge: 60 * 60 * 24 * 15, // Set the maxAge to 15 days (in seconds)
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24 * 15, // Set the maxAge to 15 days (in seconds)
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: '/signin',
  },
};
