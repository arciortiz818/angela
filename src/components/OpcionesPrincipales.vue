<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <v-btn
          class="chatbot-btn-opcion"
          color="primary"
          @click="sendMessageUser('ir_a_muestras')"
          small
          height="35"
        >
          Toma de Muestras
          <br />a Domicilio
        </v-btn>
        <v-btn
          class="chatbot-btn-opcion"
          color="primary"
          @click="sendMessageUser('ir_a_resultados')"
          small
          height="35"
        >
          Entrega de Resultados
          <br />a Domicilio
        </v-btn>
        <v-btn
          class="chatbot-btn-opcion"
          color="primary"
          @click="sendMessageUser('ir_a_citas')"
          small
          height="35"
        >Programación de Citas</v-btn>
        <v-btn
          class="chatbot-btn-opcion"
          color="primary"
          @click="sendMessageUser('ir_a_sedes')"
          small
          height="35"
        >Información de Sedes</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["sendMessageUser"]),
  },
};
</script>

<style>
.chatbot-btn-opcion {
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>
