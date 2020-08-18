<template>
  <v-container>
    <v-card elevation="5">
      <v-card-text class="text-center">
        <h3>Formulario Solicitud Toma Muestras a Domicilio</h3>
      </v-card-text>
      <v-card-text class="text-center">
        <v-form ref="form" v-model="valid">
          <v-text-field
            dense
            outlined
            v-model="datos.nombre"
            label="Nombre Completo"
            :rules="[(v) => !!v || 'Debe indicar el nombre']"
          ></v-text-field>
          <v-text-field
            dense
            outlined
            v-model="datos.documento"
            label="Documento de Identidad"
            :rules="[(v) => !!v || 'Debe indicar documento de identidad']"
            type="number"
          ></v-text-field>
          <v-text-field
            dense
            outlined
            v-model="datos.telefono"
            label="Teléfono de Contacto"
            :rules="[(v) => !!v || 'Debe indicar un teléfono de contacto']"
            type="number"
          ></v-text-field>
          <v-text-field
            dense
            outlined
            v-model="datos.direccion"
            label="Dirección"
            :rules="[(v) => !!v || 'La dirección es requerida']"
          ></v-text-field>
          <v-text-field
            dense
            outlined
            v-model="datos.entidad_salud"
            label="Entidad de Salud que lo remite"
            :rules="[(v) => !!v || 'Debe indicar la entidad de salud que lo remite']"
          ></v-text-field>
          <v-text-field
            dense
            outlined
            v-model="datos.examenes_realizar"
            label="Exámen(es) a realizar"
            :rules="[(v) => !!v || 'Debe indicar los exámenes a realizar']"
          ></v-text-field>
          <v-btn color="primary" @click="solicitarTomaMuestras()" small>Solicitar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      valid: false,
      datos: {
        nombre: "",
        documento: "",
        telefono: "",
        direccion: "",
        entidad_salud: "",
        examenes_realizar: "",
      },
    };
  },
  computed: {
    ...mapState(["imageAgent", "emailToMuestras"]),
  },
  methods: {
    ...mapActions(["sendMessageUser", "sendEmail"]),
    solicitarTomaMuestras() {
      if (!this.$refs.form.validate()) {
        console.log("no valido");
        return;
      }
      const datosEmail = `
        <div>
          <table>
            <tbody>
              <tr>
                <td><b>Nombre Completo</b></td>
                <td>${this.datos.nombre}</td>
              </tr>
              <tr>
                <td><b>Documento de Identificación</b></td>
                <td>${this.datos.documento}</td>
              </tr>
              <tr>
                <td><b>Teléfono</b></td>
                <td>${this.datos.telefono}</td>
              </tr>
              <tr>
                <td><b>Dirección</b></td>
                <td>${this.datos.direccion}</td>
              </tr>
              <tr>
                <td><b>Entidad de Salud que lo remite</b></td>
                <td>${this.datos.entidad_salud}</td>
              </tr>
              <tr>
                <td><b>Exámenes a realizar</b></td>
                <td>${this.datos.examenes_realizar}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
      this.sendEmail({
        to: this.emailToMuestras,
        message: datosEmail,
        subject: "Solicitud Toma de Muestras a Domicilio - Angela",
      });
    },
  },
};
</script>

<style>
/* Alto de los inputs */
.v-input__control {
  height: 70px;
}
</style>