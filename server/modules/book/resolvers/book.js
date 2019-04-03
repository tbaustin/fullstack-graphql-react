export default {
	Query: {
		book: (parent, args, context, info) => {
			console.log(args)
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
	}
}
