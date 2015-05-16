var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:' + (process.env.port || 3000),
		'webpack/hot/only-dev-server',
		path.join(__dirname, 'index.js')
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.bundle.js'
	},
	devtool: 'eval',
	resolve: {
		root: [
			path.join(__dirname, 'node_modules')
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel?stage=0']
			}
		]
	}
}
