<template>
  <div class="chatbot-box-user">
    <div class="container">
      <p class="chatbot-text-user text-right elevation-4">{{ text }}</p>
    </div>
    <v-img :src="imageUser" class="rounded-circle" height="60px" width="60px" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MessageUser",
  props: ["text"],
  computed: {
    ...mapState(["imageUser"]),
  },
};
</script>

<style>
.chatbot-box-user {
  display: flex;
  margin-left: auto;
}

.chatbot-text-user {
  padding: 10px 20px 10px 20px;
  background-color: rgb(67, 98, 236);
  border-top-left-radius: 40px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 20px;
  color: white;
}
</style>