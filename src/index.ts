
import { createServer } from '@graphql-yoga/node'
import { useDisableIntrospection } from '@envelop/disable-introspection'

import { schema } from "./Controllers/schema";
//console.log(schema)
const server = createServer({
    //graphiql: false ,
    cors: false,
  endpoint: "/api",
  logging: true, 
    plugins: [useDisableIntrospection()],
    maskedErrors: {
        handleParseErrors: true,
        handleValidationErrors: true
    },
    schema: schema
})

 server.start()
 