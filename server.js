var webpack = require('webpack');
var Server = require('webpack-dev-server');
var config = require('./webpack.config');
var port = process.env.PORT || 3000;

new Server(webpack(config), {
	hot: true,
	historyApiFallback: true
}).listen(port, '0.0.0.0', function(err, res) {
	if (err) throw err;
	console.log('Server listening on port '+ port);
});
