import { makeExecutableSchema } from 'graphql-tools'

import bookTypes from './book/schema/book.gql'
import bookResolver from './book/resolvers/book'

export const schema = makeExecutableSchema({
	typeDefs: [bookTypes],
	resolvers: [bookResolver]
})
