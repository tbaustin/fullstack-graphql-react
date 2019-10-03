import { makeExecutableSchema } from 'apollo-server'
import { mergeTypeDefs, mergeResolvers } from 'graphql-toolkit';


export const schema = makeExecutableSchema({
	typeDefs: mergeTypeDefs(types),
	resolvers: mergeResolvers(resolvers)
})

	`${__dirname}/modules/**/resolvers/*.js`