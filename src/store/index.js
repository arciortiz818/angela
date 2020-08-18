import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import sedesJson from '../db/sedes.json';
import config from '../../config.json';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		messages: [],
		sedes: [],
		name_bot: process.env.VUE_APP_NAME_BOT, //|| config.nameBot,
		writing: false,
		imageAgent: process.env.BASE_URL ? process.env.BASE_URL + 'images/img-angela.jpeg' : config.imgAgent,
		imageUser: process.env.BASE_URL ? process.env.BASE_URL + 'images/img-user.jpg' : config.imgUser,
		urlBot: config.urlApiBot, //|| process.env.VUE_APP_URL_API_BOT,
		urlServiceMailer: config.urlServiceMailer, //|| process.env.VUE_APP_URL_MAILER_SERVICE,
		emailToCitas: config.emailNotificationCitas, //|| process.env.VUE_APP_EMAIL_DESTINO,
		emailToMuestras: config.emailNotificationMuestras,
		emailToResultados: config.emailNotificationResultados,
	},
	mutations: {
		// Agrega mensaje del usuario al historial del chat
		ADD_MESSAGE_USER(state, message) {
			state.messages.push({
				text: message,
				type: 'user',
			});
			state.writing = false;
		},
		// Agrega mensaje del agente al historial del chat
		ADD_MESSAGE_AGENT(state, data) {
			data.forEach((element) => {
				state.messages.push({
					text: element.message,
					type: 'agent',
				});
			});
			state.writing = false;
		},
		// Agrega las opciones principales al chat
		ADD_MESSAGE_OPT_AUT_DATOS(state) {
			state.messages.push({
				text: '',
				type: 'autorizacion_datos',
			});
			state.writing = false;
		},
		// Agrega las opciones principales al chat
		ADD_MESSAGE_OPT_RECHAZA_DATOS(state) {
			state.messages.push({
				text: '',
				type: 'rechaza_datos',
			});
			state.writing = false;
		},
		// Agrega las opciones principales al chat
		ADD_MESSAGE_OPT_PRINCIPALES(state) {
			state.messages.push({
				text: '',
				type: 'opciones_principales',
			});
			state.writing = false;
		},
		// Agrega el formulario de toma de muestras a domicilio
		ADD_MESSAGE_FORM_MUESTRAS(state) {
			state.messages.push({
				text: '',
				type: 'form_muestras',
			});
			state.writing = false;
		},
		// Agrega el formulario de resultados a domicilio
		ADD_MESSAGE_FORM_RESULTADOS(state) {
			state.messages.push({
				text: '',
				type: 'form_resultados',
			});
			state.writing = false;
		},
		// Agrega el formulario de solicitud de citas
		ADD_MESSAGE_FORM_CITAS(state) {
			state.messages.push({
				text: '',
				type: 'form_citas',
			});
			state.writing = false;
		},
		// Agrega la opción de Salir o volver al menú
		ADD_MESSAGE_SALIR(state) {
			state.messages.push({
				text: '',
				type: 'opcion_salir',
			});
			state.writing = false;
		},
		// Agrega la opción de Información de Sedes
		ADD_MESSAGE_SEDES(state) {
			state.messages.push({
				text: '',
				type: 'opcion_sedes',
			});
			state.writing = false;
		},
		// Agrega la opción de Información de Sedes
		ADD_MESSAGE_INFO_SEDE(state, dataOffice) {
			state.messages.push({
				text: '',
				type: 'opcion_info_sede',
				infoSede: dataOffice,
			});
			state.writing = false;
		},
	},
	getters: {
		listSedes: () => {
			const indexed = sedesJson.reduce(
				(acc, el) => ({
					...acc,
					[el.nombre]: el,
				}),
				{}
			);
			return indexed;
		},
		numScroll: (isForm) => {
			if(isForm == 'true'){
				return 100;
			}
			return 10000
		}
	},
	actions: {
		// Envia un mensaje para reiniciar la conversación
		sendMessageReset({ state, commit }) {
			// console.log(process.env);
			state.messages = [];
			state.writing = true;
			axios
				.post(state.urlBot, {
					message: 'reiniciar',
				})
				.then((res) => {
					commit('ADD_MESSAGE_AGENT', res.data.messages);
				})
				.then(() => {
					axios
						.post(state.urlBot, {
							message: 'hola angela',
						})
						.then((res) => {
							commit('ADD_MESSAGE_AGENT', res.data.messages);
							state.writing = false;
						});
				});
		},
		addShowOption({ state, commit }, showOption) {
			if (showOption == 'mostrar_volver_empezar') {
				commit('ADD_MESSAGE_OPT_RECHAZA_DATOS');
			}
			if (showOption == 'mostrar_autorizacion_datos') {
				commit('ADD_MESSAGE_OPT_AUT_DATOS');
			}
			if (showOption == 'mostrar_rechaza_datos') {
				commit('ADD_MESSAGE_OPT_RECHAZA_DATOS');
			}
			if (showOption == 'mostrar_opciones_principales') {
				commit('ADD_MESSAGE_OPT_PRINCIPALES');
			}
			if (showOption == 'mostrar_formulario_muestras') {
				setTimeout(() => {
					// state.writing = false;
					commit('ADD_MESSAGE_FORM_MUESTRAS');
				}, 2000);
			}
			if (showOption == 'mostrar_formulario_resultados') {
				setTimeout(() => {
					// state.writing = false;
					commit('ADD_MESSAGE_FORM_RESULTADOS');
				}, 2000);
			}
			if (showOption == 'mostrar_formulario_citas') {
				state.writing = true;
				setTimeout(() => {
					// state.writing = false;
					commit('ADD_MESSAGE_FORM_CITAS');
				}, 2000);
			}
			if (showOption == 'mostrar_opcion_sedes') {
				commit('ADD_MESSAGE_SEDES');
			}
			if (showOption == 'mostrar_opcion_salir') {
				commit('ADD_MESSAGE_SALIR');
			}

		},
		// Envía el mensaje escrito por el usuario
		sendMessageUser({ state, commit, dispatch }, message) {
			if (message.indexOf('_') == -1) {
				commit('ADD_MESSAGE_USER', message);
			}
			state.writing = true;
			axios
				.post(state.urlBot, {
					message: message,
				})
				.then((res) => {
					// console.log(res.data);
					const optionsAgent = res.data.cards;
					const messagesAgent = res.data.messages;
					// Agregamos al chat el mensaje recibido del bot
					commit('ADD_MESSAGE_AGENT', messagesAgent);
					if (optionsAgent.length > 0) {
						dispatch('addShowOption', optionsAgent[0].value);
					}
					//state.writing = false;
				});
		},
		// Envia email con los datos recolectados
		sendEmail({ state, commit, dispatch }, data) {
			commit('ADD_MESSAGE_AGENT', [{ message: 'Estamos procesando sus datos.' }]);
			axios.post(state.urlServiceMailer, data).then((res) => {
				dispatch('sendMessageUser', 'email_enviado');
			});
		},
		// Mostrar la información de la sede
		showDataSede({ commit }, sedeConsultar) {
			const indexed = sedesJson.reduce(
				(acc, el) => ({
					...acc,
					[el.nombre]: el,
				}),
				{}
			);
			const match = indexed[sedeConsultar];
			commit('ADD_MESSAGE_INFO_SEDE', match);
			// commit('ADD_MESSAGE_SEDES');
		},
	},
	modules: {},
});
