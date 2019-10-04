const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = function(env) {
	const base = {
		entry: "./src/index.tsx",

		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: ["babel-loader", "ts-loader"]
				}
			]
		},

		resolve: {
			extensions: [".js", "jsx", ".ts", ".tsx"],
			plugins: [new TsconfigPathsPlugin()]
		}
	};

	const config = require(`./webpack.${env}.js`);
	Object.assign(config, base);

	config.plugins.push(new Dotenv());

	return config;
};
