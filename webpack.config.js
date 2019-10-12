const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');
var path = require('path');

module.exports = function(env) {
	const base = {
		entry: './src/index.tsx',

		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: ['babel-loader', 'ts-loader']
				},
				{
					test: /\.(s(a|c)ss)$/,
					use: [
						require.resolve('style-loader'),
						{
							loader: require.resolve('css-loader'),
							options: {
								modules: true
							}
						},
						{
							loader: require.resolve('sass-loader')
						}
					],
					exclude: /node_modules/
				}
			]
		},

		resolve: {
			extensions: ['.js', 'jsx', '.ts', '.tsx'],
			plugins: [new TsconfigPathsPlugin()],
			modules: [path.join(__dirname, 'src'), 'node_modules']
		}
	};

	const config = require(`./webpack.${env}.js`);
	Object.assign(config, base);

	config.plugins.push(new Dotenv());

	return config;
};
