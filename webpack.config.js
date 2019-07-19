var path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/DonutClicker.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'dc.min.js'
	},
	module: {
		rules: [
			{
				test: /\.(png|jp(e*)g|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8000, // Convert images < 8kb to base64 strings
							name: 'i/[hash].[ext]'
						}
					}
				]
			}
		]
	}
};
