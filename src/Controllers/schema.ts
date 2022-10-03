
import { Query, Resolvers } from './Resolvers'
import { inputs } from './Inputs'
import { makeExecutableSchema } from '@graphql-tools/schema'  

 
const typeDefinitions = /* GraphQL */ ` 

    ${Resolvers}  
    ${inputs}  
    scalar DateTime
` 
const resolvers = {
    Query: {
        ...Query.UserResolvers, 
    },
  
   
    //DateTime: DateTimeResolver, 
}


export const schema = {
    typeDefs: typeDefinitions,
    resolvers: resolvers
}





