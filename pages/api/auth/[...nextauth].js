import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: "Iv1.c6f79b19a0cfd7f4",
      clientSecret: "a88b82046c7071196be44fccd1dbb4c4eed9d543",
    }),
    // ...add more providers here
  ],
});
