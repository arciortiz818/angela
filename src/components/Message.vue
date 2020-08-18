<template>
  <div>
    <slot name="agent">
      <msg-agent :text="info.text"></msg-agent>
    </slot>
    <slot name="user">
      <msg-user :text="info.text"></msg-user>
    </slot>
    <slot name="opciones_principales">
      <msg-opciones-principales></msg-opciones-principales>
    </slot>
    <slot name="form_muestras">
      <msg-form-muestras></msg-form-muestras>
    </slot>
    <slot name="form_resultados">
      <msg-form-resultados></msg-form-resultados>
    </slot>
    <slot name="form_citas">
      <msg-form-citas></msg-form-citas>
    </slot>
    <slot name="autorizacion_datos">
      <msg-manejo-datos></msg-manejo-datos>
    </slot>
    <slot name="rechaza_datos">
      <msg-rechaza-datos></msg-rechaza-datos>
    </slot>
    <slot name="opcion_salir">
      <msg-salir></msg-salir>
    </slot>
    <slot name="opcion_sedes">
      <msg-sedes></msg-sedes>
    </slot>
    <slot name="opcion_info_sede">
      <msg-info-sede :dataOffice="info.infoSede"></msg-info-sede>
    </slot>
  </div>
</template>

<script>
import MessageAgent from "../components/MessageAgent";
import MessageUser from "../components/MessageUser";
import OpcionesPrincipales from "../components/OpcionesPrincipales";
import FormMuestras from "../components/FormMuestras";
import FormResultados from "../components/FormResultados";
import FormCitas from "../components/FormCitas";
import Salir from "../components/Salir";
import ManejoDatos from "../components/ManejoDatos";
import RechazaDatos from "../components/RechazaDatos";
import Sedes from "../components/Sedes";
import InfoSede from "../components/InfoSede";

export default {
  props: ["info"],
  components: {
    "msg-agent": MessageAgent,
    "msg-user": MessageUser,
    "msg-opciones-principales": OpcionesPrincipales,
    "msg-form-muestras": FormMuestras,
    "msg-form-resultados": FormResultados,
    "msg-form-citas": FormCitas,
    "msg-salir": Salir,
    "msg-manejo-datos": ManejoDatos,
    "msg-rechaza-datos": RechazaDatos,
    "msg-sedes": Sedes,
    "msg-info-sede": InfoSede,
  },
  mounted() {
    // console.log(this.info);
  },
};
</script>

<style>
</style>