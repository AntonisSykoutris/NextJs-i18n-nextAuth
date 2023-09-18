// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT, DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      email: string;
      id: string;
      role: number;
    } & DefaultSession['user'];
  }

  interface User extends DefaultUser {
    role: number;
    email: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    role: number;
    email: string;
  }
}
