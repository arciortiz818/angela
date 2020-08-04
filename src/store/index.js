import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		messages: [],
		name_bot: 'Angela',
		writing: false,
		urlBot:
			'https://account.snatchbot.me/channels/api/api/id124889/appchatbot_angela/apschatbot_angela?user_id=chatbot_angela',
		imageAgent: "require('@/assets/images/img-angela.jpeg')",
		imageUser: "require('@/assets/images/img-user.jpg')",
		urlServiceMailer: 'https://us-central1-mailer-bbdb3.cloudfunctions.net/mailer',
		emailTo: 'direcciontecnologia@alianzadiagnostica.com', //'javiarco85@gmail.com',
	},
	mutations: {
		// Agrega mensaje del usuario al historial del chat
		ADD_MESSAGE_USER(state, message) {
			state.messages.push({
				text: message,
				type: 'user',
			});
		},
		// Agrega mensaje del agente al historial del chat
		ADD_MESSAGE_AGENT(state, data) {
			data.forEach((element) => {
				state.messages.push({
					text: element.message,
					type: 'agent',
				});
			});
		},
		// Agrega las opciones principales al chat
		ADD_MESSAGE_OPT_PRINCIPALES(state) {
			state.messages.push({
				text: '',
				type: 'opciones',
			});
		},
		// Agrega el formulario de toma de muestras a domicilio
		ADD_MESSAGE_FORM_MUESTRAS(state) {
			state.messages.push({
				text: '',
				type: 'muestras',
			});
		},
		// Agrega el formulario de resultados a domicilio
		ADD_MESSAGE_FORM_RESULTADOS(state) {
			state.messages.push({
				text: '',
				type: 'resultados',
			});
		},
		// Agrega el formulario de solicitud de citas
		ADD_MESSAGE_FORM_CITAS(state) {
			state.messages.push({
				text: '',
				type: 'citas',
			});
		},
		// Agrega la opción de Salir o volver al menú
		ADD_MESSAGE_SALIR(state) {
			state.messages.push({
				text: '',
				type: 'salir',
			});
		},
	},
	actions: {
		// Envia un mensaje para reiniciar la conversación
		sendMessageReset({ state, commit }) {
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
		// Envía el mensaje escrito por el usuario
		sendMessageUser({ state, commit }, message) {
			// Hacemos estas condiciones para no mostrar en el historial estos mensajes internos
			if (
				message !== 'Muestras' &&
				message !== 'Resultados' &&
				message !== 'Citas' &&
				message !== 'enviado' &&
				message !== 'hola angela' &&
				message !== 'Opciones'
			) {
				commit('ADD_MESSAGE_USER', message);
			}
			state.writing = true;
			axios
				.post(state.urlBot, {
					message: message,
				})
				.then((res) => {
					// Agregamos al chat el mensaje recibido del bot
					commit('ADD_MESSAGE_AGENT', res.data.messages);
					state.writing = false;
					// Si la respuesta trae opciones aparte del mensaje
					if (res.data.cards.length > 0) {
						if (res.data.cards[0].value == 'opciones_principales') {
							commit('ADD_MESSAGE_OPT_PRINCIPALES');
						}
						if (res.data.cards[0].value == 'salir') {
							commit('ADD_MESSAGE_SALIR');
						}
					}
					// Si se eligió la opcion de Muestras a domicilio
					if (message == 'Muestras') {
						commit('ADD_MESSAGE_FORM_MUESTRAS');
						return;
					}
					// Si se eligió REsultados a domicilio
					if (message == 'Resultados') {
						commit('ADD_MESSAGE_FORM_RESULTADOS');
						return;
					}
					// Si se eligió solicitud de citas
					if (message == 'Citas') {
						commit('ADD_MESSAGE_FORM_CITAS');
						return;
					}
				});
		},
		// Envia email con los datos recolectados
		sendEmail({ state, commit, dispatch }, data) {
			axios.post(state.urlServiceMailer, data).then((res) => {
				dispatch('sendMessageUser', 'enviado');
			});
		},
	},
	modules: {},
});
