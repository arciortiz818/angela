const path = require('path');

module.exports = {
	transpileDependencies: ['vuetify'],
	publicPath: process.env.NODE_ENV === 'production' ? '/chatbot/' : '/',
	outputDir: path.resolve(__dirname, 'docs'),
	chainWebpack: (config) => {
		config.module
			.rule('images')
			.use('url-loader')
			.loader('url-loader')
			.tap((options) => Object.assign(options, { limit: 10240 }));
	},
};
