
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET
})


