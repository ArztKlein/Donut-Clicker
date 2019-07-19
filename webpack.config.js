var path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/DonutClicker.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'dc.min.js'
	}
};
