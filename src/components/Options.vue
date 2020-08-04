<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <v-btn
          class="btn-opcion"
          color="primary"
          @click="sendMessageUser('Muestras')"
        >Toma de Muestras a Domicilio</v-btn>
        <v-btn
          class="btn-opcion"
          color="primary"
          @click="sendMessageUser('Resultados')"
        >Entrega de Resultados a Domicilio</v-btn>
        <v-btn
          class="btn-opcion"
          color="primary"
          @click="sendMessageUser('Citas')"
        >Programación de Citas</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Options",
  methods: {
    ...mapActions(["sendMessageUser"]),
  },
};
</script>

<style>
.btn-opcion {
  margin-bottom: 10px;
}
</style>