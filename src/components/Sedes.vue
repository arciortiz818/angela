<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <v-btn
          v-for="(boton,z) in botones"
          :key="z"
          class="chatbot-btn-opcion"
          color="primary"
          @click="showDataSede(boton.nombre)"
          small
        >{{boton.nombre}}</v-btn>
        <v-btn
          class="chatbot-btn-opcion"
          color="primary"
          @click="sendMessageUser('ir_a_opciones_principales')"
          small
        >Ir a Opciones Principales</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      botones: [],
    };
  },
  mounted() {
    this.botones = this.listSedes();
  },
  methods: {
    ...mapActions(["sendMessageUser", "showDataSede"]),
    ...mapGetters(["listSedes"]),
  },
};
</script>

<style>
.chatbot-btn-opcion {
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>
