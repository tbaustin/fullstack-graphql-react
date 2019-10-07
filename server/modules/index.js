import { makeExecutableSchema } from 'apollo-server'
import { mergeTypeDefs, mergeResolvers } from 'graphql-toolkit';

const resolversPath = `${__dirname}/modules/**/resolvers/*.js`
const typeDefsPaths = `${__dirname}/modules/**/typeDefs/*.gql`

export const schema = makeExecutableSchema({
	typeDefs: mergeTypeDefs(types),
	resolvers: mergeResolvers(resolvers)
})

