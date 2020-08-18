<template>
  <v-container>
    <!-- Chat -->
    <v-row>
      <v-card v-show="expand" id="box-chat">
        <!-- Caja de Historial de Mensajes -->
        <v-card-text id="box-messages" class="pt-1">
          <v-row v-for="(item, i) in messages" :key="i">
            <msg-agent v-if="item.type === 'agent'" :text="item.text"></msg-agent>
            <msg-user v-if="item.type === 'user'" :text="item.text"></msg-user>
            <msg-opciones-principales v-if="item.type === 'opciones_principales'"></msg-opciones-principales>
            <msg-form-muestras v-if="item.type === 'form_muestras'"></msg-form-muestras>
            <msg-form-resultados v-if="item.type === 'form_resultados'"></msg-form-resultados>
            <msg-form-citas v-if="item.type === 'form_citas'"></msg-form-citas>
            <msg-manejo-datos v-if="item.type === 'autorizacion_datos'"></msg-manejo-datos>
            <msg-rechaza-datos v-if="item.type === 'rechaza_datos'"></msg-rechaza-datos>
            <msg-salir v-if="item.type === 'opcion_salir'"></msg-salir>
            <msg-sedes v-if="item.type === 'opcion_sedes'"></msg-sedes>
            <msg-info-sede v-if="item.type === 'opcion_info_sede'" :dataSede="item.infoSede"></msg-info-sede>
            <!-- <msg-chat :info="item">
            <template v-slot:[item.type]></template>
            </msg-chat>-->
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
    </v-row>
    <!-- Fin Chat -->

    <!-- Caja de Texto para mensaje del usuario -->
    <v-row>
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
    </v-row>
    <!-- Fin Caja de Texto para mensaje del usuario -->

    <!-- Este boton se debe desarrollar en la pagina donde se va a montar el chat -->
    <!-- <v-btn v-show="!expand" id="btn-toggle-chat" fab bottom right @click="toggleChat()">
			<v-img class="rounded-circle" :src="imageAgent" height="100px" width="100px"></v-img>
    </v-btn>-->
    <!-- Fin del boton -->
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import MessageAgent from "../components/MessageAgent";
import MessageUser from "../components/MessageUser";
import OpcionesPrincipales from "../components/OpcionesPrincipales";
import FormMuestras from "../components/FormMuestras";
import FormResultados from "../components/FormResultados";
import FormCitas from "../components/FormCitas";
import Salir from "../components/Salir";
import ManejoDatos from "../components/ManejoDatos";
import RechazaDatos from "../components/RechazaDatos";
import Sedes from "../components/Sedes";
import InfoSede from "../components/InfoSede";
// import Message from "../components/Message";

export default {
  components: {
    "msg-agent": MessageAgent,
    "msg-user": MessageUser,
    "msg-opciones-principales": OpcionesPrincipales,
    "msg-form-muestras": FormMuestras,
    "msg-form-resultados": FormResultados,
    "msg-form-citas": FormCitas,
    "msg-salir": Salir,
    "msg-manejo-datos": ManejoDatos,
    "msg-rechaza-datos": RechazaDatos,
    "msg-sedes": Sedes,
    "msg-info-sede": InfoSede,
    // "msg-chat": Message,
  },
  data: () => ({
    userMessage: "",
    expand: false,
  }),
  computed: {
    ...mapState(["imageAgent", "messages", "name_bot", "writing"]),
  },
  mounted() {
    this.toggleChat();
    this.sendMessageReset();
  },
  updated() {
    if (document.getElementById("box-messages")) {
      const scroll = document.getElementById("box-messages").scrollTop;
      document.getElementById("box-messages").scrollTop = scroll + 300;
    }
  },
  methods: {
    ...mapActions(["sendMessageReset", "sendMessageUser"]),
    send() {
      //Le enviamos true en el segundo parametro para indicarle que muestre
      //en la conversación lo que escribió el usuario
      this.sendMessageUser(this.userMessage.toUpperCase());
      this.userMessage = "";
    },
    toggleChat() {
      this.expand = !this.expand;
    },
  },
};
</script>

<style>
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
  height: calc(100% - 70px);
  width: 100%;
  padding-left: 25px;
  font-size: smaller;
  border-color: none;
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
</style>
