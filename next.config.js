// next.config.js
const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
	// optional
	modifyVars: {"@primary-color": "#000", "@layout-body-background": "#fff"},
	// optional
	lessVarsFilePath: "./src/styles/variables.less",
	// optional
	lessVarsFilePathAppendToEndOfContent: false,
	// optional https://github.com/webpack-contrib/css-loader#object
	cssLoaderOptions: {},

	// Other Config Here...
	images: {
		domains: ["storage.googleapis.com"],
	},

	webpack(config) {
		return config;
	},
});
