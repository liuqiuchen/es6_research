const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'build': './src/index.js'
	},
	output: {
		path: './build/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	devServer: {
		hot: true,
		inline: true
	},
	plugins: [
        // 自动在build里面生成index.html
        // 名字默认是index.html
        new htmlWebpackPlugin({
            title: '欢迎',
            chunks: ['build']
        })
    ]
};