<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <v-btn
          class="chatbot-btn-opcion"
          color="primary"
          @click="sendMessageUser('ir_a_salir')"
          small
        >Salir</v-btn>
      </v-col>
      <v-col>
        <v-btn
          class="chatbot-btn-opcion"
          color="primary"
          @click="sendMessageUser('ir_a_opciones_principales')"
          small
        >Opciones Principales</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["sendMessageUser", "sendMessageReset"]),
  },
};
</script>

<style>
.chatbot-btn-opcion {
  margin-bottom: 10px;
}
</style>