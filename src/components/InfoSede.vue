<template>
  <v-container>
    <div class="container">
      <p class="chatbot-text">
        <span class="ml-1">
          <b>
            Sede:
            {{info.nombre}}
          </b>
        </span>
        <br />
        <span class="ml-2">
          <b>Dirección:</b>
          {{info.direccion}}
        </span>
        <br />
        <span class="ml-2">
          <b>Servicios:</b>
          <div class="ml-4" v-for="(servicio,j) in info.servicios" :key="j">
            <ul>
              <li>
                <b>{{servicio.nombre}}</b>
              </li>
              <v-row class="ml-2" v-for="(horario,k) in servicio.horarios" :key="k">{{horario}}</v-row>
            </ul>
          </div>
        </span>
      </p>
    </div>

    <v-container class="text-center">
      <v-row>
        <v-col>
          <v-btn
            class="chatbot-btn-opcion"
            color="primary"
            @click="sendMessageUser('ir_a_otra_sede')"
            small
          >Ver Otra Sede</v-btn>
          <v-btn
            class="chatbot-btn-opcion"
            color="primary"
            @click="sendMessageUser('ir_a_opciones_principales')"
            small
          >Ir a Opciones Principales</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["dataSede"],
  data() {
    return {
      headers: [
        { text: "Dirección" },
        { text: "Servicios" },
        { text: "Horarios" },
      ],
    };
  },
  mounted() {
    // console.log("infosede", this.info);
  },
  computed: {
    info() {
      return this.dataSede;
    },
  },
  methods: {
    ...mapActions(["sendMessageUser", "showDataSede"]),
  },
};
</script>

<style>
.chatbot-text {
  padding: 10px 20px 10px 20px;
  background-color: rgba(0, 0, 0, 0.07);
  border-top-left-radius: 0px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 40px;
}
</style>