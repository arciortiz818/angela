import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import DatetimePicker from 'vuetify-datetime-picker';
Vue.use(require("moment"));

Vue.use(VueAxios, Axios);
Vue.use(DatetimePicker);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
