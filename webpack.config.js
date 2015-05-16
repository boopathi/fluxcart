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
		filename: 'app.js',
		sourceMapFilename: 'app.map'
	},
	devtool: process.env.NODE_ENV==='production'
		? '#source-map'
		: '#eval',
	resolve: {
		root: [
			path.join(__dirname, 'node_modules')
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		})
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
};

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true
			}
		})
	);
}
