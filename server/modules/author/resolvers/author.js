const authors = [
	{ name: 'Patrick Rothfuss', age: 44, id: 1 },
	{ name: 'Brandon Sanderson', age: 42, id: 2 },
	{ name: 'Terry Pratchett', age: 66, id: 3 }
]

export default {
	Query: {
		author: (parent, args, context, info) => {
			console.log(typeof args.id)
			return {
				id: args.id,
				name: `name`,
				age: 44
			}
		},
		authorList: (parent, args, context, info) => {
			console.log(args)
			return [
				{ id: 1, name: `name`, age: 22 },
				{ id: 2, name: `name`, age: 23 }
			]
		}
	}
}
