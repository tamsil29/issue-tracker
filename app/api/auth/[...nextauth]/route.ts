import NextAuth from "next-auth";
// import { authOptions } from "../authOptions";

const handler = NextAuth({
    providers: []
});

export { handler as GET, handler as POST };