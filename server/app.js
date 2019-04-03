import { ApolloServer } from 'apollo-server'
import { schema } from './modules'

const server = new ApolloServer({
	schema
})

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`)
})

if (module) {
	if (module.hot) {
		module.hot.accept()
		module.hot.dispose(() => server.stop())
	}
}
