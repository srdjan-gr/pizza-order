import { User } from "@/app/models/User";
import bcrypt from "bcrypt"
import * as mongoose from "mongoose";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({

  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
   
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@mail.com" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {
      

        const email = credentials?.email;
        const password = credentials?.password

        // connect to db, find user by email, compare pass with bcrypt
        mongoose.connect(process.env.MONGO_URL);
        const user = await User.findOne({email});
        const passwordOk = user && bcrypt.compareSync(password, user.password);

        if(passwordOk) {
          return user
        }

        return null
      },

    })
  ],
})

export { handler as GET, handler as POST }