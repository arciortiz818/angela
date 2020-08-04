<template>
	<v-container>
		<!-- Chat -->
		<v-card v-show="expand" id="box-chat">
			<!-- Barra de Título -->
			<v-toolbar color="primary" dark>
				<v-toolbar-title>
					<h3>{{ name_bot }}</h3>
					<div id="state" class="d-flex">
						<div class="icon-state"></div>
						<div class="icon-sep"></div>
						<div class="text-state">En línea</div>
					</div>
				</v-toolbar-title>

				<v-spacer></v-spacer>
				<v-btn icon @click="toggleChat()">
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<br />
			</v-toolbar>
			<!-- Fin Barra de Título -->

			<!-- Caja de Historial de Mensajes -->
			<v-card-text id="box-messages" class="pt-5">
				<v-row v-for="(item, i) in messages" :key="i">
					<message-agent v-if="item.type === 'agent'" :text="item.text"></message-agent>
					<message-user v-if="item.type === 'user'" :text="item.text"></message-user>
					<message-options v-if="item.type === 'opciones'"></message-options>
					<message-form-muestras v-if="item.type === 'muestras'"></message-form-muestras>
					<message-form-resultados v-if="item.type === 'resultados'"></message-form-resultados>
					<message-form-citas v-if="item.type === 'citas'"></message-form-citas>
					<message-salir v-if="item.type === 'salir'"></message-salir>
				</v-row>
				<v-container v-if="writing">
					<v-row>
						<v-col>
							<b>{{ name_bot }}</b> escribiendo...
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>
			<!-- Fin Caja de Historial de Mensajes -->
		</v-card>
		<!-- Fin Chat -->

		<!-- Caja de Texto para mensaje del usuario -->
		<div v-show="expand" id="box-message-user">
			<v-container class="text-center">
				<v-text-field
					append-icon="mdi-send"
					type="text"
					placeholder="Enviar un mensaje"
					dense
					outlined
					v-model="userMessage"
					@keyup.enter="send()"
					@click:append="send()"
					rounded
				></v-text-field>
			</v-container>
		</div>
		<!-- Fin Caja de Texto para mensaje del usuario -->

		<!-- Este boton se debe desarrollar en la pagina donde se va a montar el chat -->
		<v-btn v-show="!expand" id="btn-toggle-chat" fab bottom right @click="toggleChat()">
			<v-img class="rounded-circle" :src="imageAgent" height="100px" width="100px"></v-img>
		</v-btn>
		<!-- Fin del boton -->
	</v-container>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
	import MessageAgent from '../components/MessageAgent';
	import MessageUser from '../components/MessageUser';
	import Options from '../components/Options';
	import FormMuestras from '../components/FormMuestras';
	import FormResultados from '../components/FormResultados';
	import FormCitas from '../components/FormCitas';
	import Salir from '../components/Salir';

	export default {
		components: {
			'message-agent': MessageAgent,
			'message-user': MessageUser,
			'message-options': Options,
			'message-form-muestras': FormMuestras,
			'message-form-resultados': FormResultados,
			'message-form-citas': FormCitas,
			'message-salir': Salir,
		},
		data: () => ({
			userMessage: '',
			expand: false,
		}),
		computed: {
			...mapState(['imageAgent', 'messages', 'name_bot', 'writing']),
		},
		mounted() {
			this.sendMessageReset();
		},
		updated() {
			if (document.getElementById('box-messages')) {
				const scroll = document.getElementById('box-messages').scrollTop;
				document.getElementById('box-messages').scrollTop = scroll + 1000000;
			}
		},
		methods: {
			...mapActions(['sendMessageReset', 'sendMessageUser']),
			send() {
				this.sendMessageUser(this.userMessage);
				this.userMessage = '';
			},
			toggleChat() {
				this.expand = !this.expand;
			},
		},
	};
</script>

<style>
	body {
		overflow: hidden;
	}

	/* Boton Abrir Chat */
	#btn-toggle-chat {
		position: fixed;
		right: 50px;
		bottom: 50px;
	}

	/* Cotenedor del chat */
	#box-chat {
		right: 0px;
		bottom: 0px;
		position: fixed;
		height: 100%;
		width: 100%;
		min-height: 300px;
	}

	/* Caja de Mensajes */
	#box-messages {
		overflow-y: auto;
		padding-bottom: 50px;
		height: calc(100% - 120px);
		width: 100%;
	}

	/* Caja mensaje del usuario */
	#box-message-user {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
		margin-bottom: 0;
		background-color: white;
		height: 65px;
	}

	/* Indicador de estado */
	#state {
		margin-bottom: 0px;
	}
	.icon-state {
		background-color: rgb(0, 255, 0);
		border-radius: 100%;
		height: 10px;
		width: 10px;
		margin-top: 2px;
	}
	.text-state {
		font-size: 12px;
		/* margin-top: 6px; */
	}
	.icon-sep {
		width: 5px;
	}
</style>
