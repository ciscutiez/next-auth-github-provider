import type { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    //credentials provider
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'Your Password',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Your Username',
        },
      },
      async authorize(credentials) {
        // this is where you need to retrieve user data
        // to verify with credentials
        //docs : https://next-auth.js.org/configuration/providers/credentials
        const user = { id: '42', name: 'Francis', password: 'francispogi' };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
