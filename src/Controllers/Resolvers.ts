
import { UserQueries, UserResolvers } from "./Features/User";



export const Resolvers = `
type Query {
    ${UserQueries} 
}
`

export const Query = {
    UserResolvers,
};