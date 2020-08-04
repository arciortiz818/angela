<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <v-btn class="btn-opcion" color="primary" @click="sendMessageReset()">Salir</v-btn>
      </v-col>
      <v-col>
        <v-btn
          class="btn-opcion"
          color="primary"
          @click="sendMessageUser('Opciones')"
        >Opciones Principales</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Salir",
  methods: {
    ...mapActions(["sendMessageUser", "sendMessageReset"]),
  },
};
</script>

<style>
.btn-opcion {
  margin-bottom: 10px;
}
</style>