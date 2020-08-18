<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <v-btn class="chatbot-btn-opcion" color="primary" @click="sendMessageUser('Si')" small>Si</v-btn>
        <v-btn class="chatbot-btn-opcion" color="primary" @click="sendMessageUser('No')" small>No</v-btn>
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
