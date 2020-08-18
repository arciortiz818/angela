<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <v-btn
          class="chatbot-btn-opcion"
          color="primary"
          @click="sendMessageReset()"
          small
        >Volver a empezar</v-btn>
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
  margin-right: 10px;
}
</style>
