const books = [
	{ name: 'Name of the Wind', genre: 'Fantasy', id: 1 },
	{ name: 'The Final Empire', genre: 'Fantasy', id: 2 },
	{ name: 'The Long Earth', genre: 'Sci-Fi', id: 3 }
]

export default {
	Query: {
		book: (parent, args, context, info) => {
			console.log(typeof args.id)
			return {
				id: args.id,
				name: `name`,
				genre: `scary`
			}
		},
		bookList: (parent, args, context, info) => {
			console.log(args)
			return [
				{ id: 1, name: `name`, genre: `scary` },
				{ id: 2, name: `name`, genre: `scary` }
			]
		}
	},
	Mutation: {
		deleteBook: (parent, args, context, info) => {
			console.log(args.id)
			return true
		}
	}
}
