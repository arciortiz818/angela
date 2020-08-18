<template>
  <div class="chatbot-box-agent">
    <v-img :src="imageAgent" class="rounded-circle" height="60px" width="60px" />
    <div class="container">
      <p class="chatbot-text-agent elevation-4">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MessageAgent",
  props: ["text"],
  computed: {
    ...mapState(["imageAgent"]),
  },
};
</script>

<style>
.chatbot-box-agent {
  display: flex;
}

.chatbot-text-agent {
  padding: 10px 20px 10px 20px;
  background-color: rgba(0, 0, 0, 0.07);
  border-top-left-radius: 0px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 40px;
}
</style>