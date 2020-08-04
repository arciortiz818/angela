<template>
	<v-container>
		<v-card elevation="5">
			<v-card-text class="text-center">
				<h3>Formulario Solicitud Cita</h3>
			</v-card-text>
			<v-card-text class="text-center">
				<v-form ref="form" v-model="valid" lazy-validation>
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
					></v-text-field>
					<v-text-field
						dense
						outlined
						v-model="datos.telefono"
						label="Teléfono o Celular de Contacto"
						:rules="[(v) => !!v || 'Debe indicar un teléfono de contacto']"
					></v-text-field>
					<v-text-field
						dense
						outlined
						v-model="datos.email"
						label="Email"
						:rules="[(v) => !!v || 'Debe indicar un email']"
					></v-text-field>
					<v-datetime-picker
						v-model="datos.fecha_hora"
						:text-field-props="textFieldProps"
						:date-picker-props="dateProps"
						time-format="hh:mm:ss a"
						label="Fecha y Hora de la Cita"
						clearText="Cancelar"
						okText="Aceptar"
					>
						<template v-slot:dateIcon>
							<v-icon>mdi-calendar</v-icon>
						</template>
						<template v-slot:timeIcon>
							<v-icon>mdi-timer</v-icon>
						</template>
					</v-datetime-picker>
					<v-text-field
						dense
						outlined
						v-model="datos.entidad_salud"
						label="EPS que lo remite"
						:rules="[(v) => !!v || 'Debe indicar la EPS que lo remite']"
					></v-text-field>

					<v-btn color="primary" @click="solicitarCita()">Solicitar</v-btn>
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
				textFieldProps: {
					dense: true,
					outlined: true,
					rules: [(v) => !!v || 'Debe indicar una Fecha y Hora para la cita'],
				},
				dateProps: {
					headerColor: 'primary',
					min: moment(new Date())
						.add(1, 'd')
						.format('YYYY-MM-DD'),
				},
				valid: false,
				datos: {
					nombre: '',
					documento: '',
					telefono: '',
					email: '',
					fecha_hora: '',
					entidad_salud: '',
				},
			};
		},

		computed: {
			...mapState(['imageAgent', 'emailTo']),
		},
		methods: {
			...mapActions(['sendMessageUser', 'sendEmail']),
			formatearFecha(date) {
				return moment(date)
					.locale('es')
					.format('dddd D MMMM [de] YYYY hh:mm a');
			},
			solicitarCita() {
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
	               <td><b>Fecha y Hora</b></td>
	               <td>${this.formatearFecha(this.datos.fecha_hora)}</td>
	             </tr>
	             <tr>
	               <td><b>Entidad de Salud que lo remite</b></td>
	               <td>${this.datos.entidad_salud}</td>
	             </tr>

	           </tbody>
	         </table>
	       </div>
	     `;
				this.sendEmail({
					to: this.emailTo,
					message: datosEmail,
					subject: 'Solicitud de Cita',
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
