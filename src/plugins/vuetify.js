import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import es from 'vuetify/es5/locale/es';
// import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		options: {
			customProperties: true,
		},
		themes: {
			light: {
				primary: '#0B65B2',
				secondary: '#424242',
				accent: '#82B1FF',
				error: '#FF5252',
				info: '#2196F3',
				success: '#4CAF50',
				warning: '#FFC107',
			},
			// light: {
			//   primary: '#ee44aa',
			//   secondary: '#424242',
			//   accent: '#82B1FF',
			//   error: '#FF5252',
			//   info: '#2196F3',
			//   success: '#4CAF50',
			//   warning: '#FFC107'
			// },
		},
	},
	lang: {
		locales: { es },
		current: 'es',
	},
});
