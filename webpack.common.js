const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: [`webpack/hot/poll?100`, path.resolve(__dirname, 'server/app.js')],
	output: {
		filename: `server.js`,
		path: path.resolve(__dirname, `dist`)
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.(graphql|gql)$/,
				exclude: /node_modules/,
				use: 'graphql-tag/loader'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.graphql', '.gql']
	},
	plugins: [new CleanWebpackPlugin()],
	target: `node`,
	externals: [
		nodeExternals({
			whitelist: ['webpack/hot/poll?100']
		})
	]
}
