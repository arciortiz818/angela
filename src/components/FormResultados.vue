<template>
	<v-container>
		<v-card elevation="5">
			<v-card-text class="text-center">
				<h3>Formulario Solicitud Entrega Resultados a Domicilio</h3>
			</v-card-text>
			<v-card-text class="text-center">
				<v-form ref="form" v-model="valid" lazy-validation>
					<v-text-field
						dense
						outlined
						v-model="datos.nombre"
						label="Nombre Completo"
						:rules="[(v) => !!v || 'El nombre es requerido']"
					></v-text-field>
					<v-text-field
						dense
						outlined
						v-model="datos.documento"
						label="Documento de Identidad"
						:rules="[(v) => !!v || 'El Documento es requerido']"
					></v-text-field>
					<v-text-field
						dense
						outlined
						v-model="datos.telefono"
						label="Teléfono de Contacto"
						:rules="[(v) => !!v || 'El teléfono es requerido']"
					></v-text-field>
					<v-text-field
						dense
						outlined
						v-model="datos.email"
						label="Email"
						:rules="[(v) => !!v || 'El email es requerido']"
					></v-text-field>
					<v-menu
						v-model="showPicker1"
						:close-on-content-click="false"
						transition="scale-transition"
						offset-y
						full-width
						max-width="290px"
						min-width="290px"
						header-color="primary"
					>
						<template v-slot:activator="{ on }">
							<v-text-field
								v-model="datos.fecha_examenes"
								label="Fecha Toma Exámen(es)"
								readonly
								v-on="on"
								outlined
								dense
								:rules="[(v) => !!v || 'La fecha de toma de exámen(es) es requerida']"
							></v-text-field>
						</template>
						<v-date-picker
							v-model="datos.fecha_examenes"
							:max="this.fechaMaxima"
							no-title
							@input="showPicker1 = false"
						></v-date-picker>
					</v-menu>
					<v-menu
						v-model="showPicker2"
						:close-on-content-click="false"
						transition="scale-transition"
						offset-y
						full-width
						max-width="290px"
						min-width="290px"
						header-color="primary"
					>
						<template v-slot:activator="{ on }">
							<v-text-field
								v-model="datos.fecha_entrega"
								label="Fecha Entrega Exámen(es)"
								readonly
								v-on="on"
								outlined
								dense
								:rules="[(v) => !!v || 'La fecha de entrega de exámen(es) es requerida']"
							></v-text-field>
						</template>
						<v-date-picker v-model="datos.fecha_entrega" no-title @input="showPicker2 = false"></v-date-picker>
					</v-menu>
					<v-text-field
						dense
						outlined
						v-model="datos.direccion"
						label="Dirección"
						:rules="[(v) => !!v || 'La dirección de entrega es requerida']"
					></v-text-field>
					<v-text-field
						dense
						outlined
						v-model="datos.ciudad"
						label="Ciudad"
						:rules="[(v) => !!v || 'La ciudad es requerida']"
					></v-text-field>
					<v-text-field
						dense
						outlined
						v-model="datos.examenes_realizados"
						label="Exámen(es) realizados"
						:rules="[(v) => !!v || 'Debe indicar el(los) exámen(es) realizados']"
					></v-text-field>
					<v-btn color="primary" @click="solicitarEntregaResultados()">Solicitar</v-btn>
				</v-form>
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
	import { mapState, mapActions } from 'vuex';
	import moment from 'moment';

	export default {
		data() {
			return {
				valid: false,
				showPicker1: false,
				showPicker2: false,
				datos: {
					nombre: '',
					documento: '',
					telefono: '',
					email: '',
					fecha_examenes: '',
					fecha_entrega: '',
					direccion: '',
					ciudad: '',
					examenes_realizados: '',
				},
			};
		},
		computed: {
			...mapState(['imageAgent', 'emailTo']),
			fechaMaxima() {
				return moment(new Date())
					.format('YYYY-MM-DD')
					.toString();
			},
		},
		methods: {
			...mapActions(['sendMessageUser', 'sendEmail']),
			formatearFecha(date) {
				return moment(date)
					.locale('es')
					.format('dddd D MMMM [de] YYYY');
			},
			solicitarEntregaResultados() {

				if (!this.$refs.form.validate()) {
					console.log('no valido');
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
                <td><b>Email</b></td>
                <td>${this.datos.email}</td>
              </tr>
              <tr>
                <td><b>Fecha Toma Exámenes</b></td>
                <td>${this.formatearFecha(this.datos.fecha_examenes)}</td>
              </tr>
              <tr>
                <td><b>Fecha Entrega Exámenes</b></td>
                <td>${this.formatearFecha(this.datos.fecha_entrega)}</td>
              </tr>
              <tr>
                <td><b>Dirección de Entrega</b></td>
                <td>${this.datos.direccion}</td>
              </tr>
              <tr>
                <td><b>Ciudad de Entrega</b></td>
                <td>${this.datos.ciudad}</td>
              </tr>
              <tr>
                <td><b>Exámenes Realizados</b></td>
                <td>${this.datos.examenes_realizados}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
				this.sendEmail({
					to: this.emailTo,
					message: datosEmail,
					subject: 'Solicitud Entrega Resultados a Domicilio',
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
