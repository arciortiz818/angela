(function(e){function t(t){for(var n,r,i=t[0],c=t[1],d=t[2],u=0,f=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/angela/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"08b3":function(e,t,a){"use strict";var n=a("d594"),s=a.n(n);s.a},"0e62":function(e,t,a){},"105f":function(e,t,a){"use strict";var n=a("0e62"),s=a.n(n);s.a},1529:function(e,t,a){"use strict";var n=a("282d"),s=a.n(n);s.a},1959:function(e,t,a){"use strict";var n=a("69a4"),s=a.n(n);s.a},"22ec":function(e,t,a){"use strict";var n=a("a593"),s=a.n(n);s.a},"282d":function(e,t,a){},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-app",[a("router-view")],1)],1)},o=[],r={},i=r,c=a("2877"),d=a("6544"),l=a.n(d),u=a("7496"),f=Object(c["a"])(i,s,o,!1,null,null,null),m=f.exports;l()(f,{VApp:u["a"]});var b=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],attrs:{id:"box-chat"}},[a("v-toolbar",{attrs:{color:"primary",dark:""}},[a("v-toolbar-title",[a("h3",[e._v(e._s(e.name_bot))]),a("div",{staticClass:"d-flex",attrs:{id:"state"}},[a("div",{staticClass:"icon-state"}),a("div",{staticClass:"icon-sep"}),a("div",{staticClass:"text-state"},[e._v("En línea")])])]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(t){return e.toggleChat()}}},[a("v-icon",[e._v("mdi-close")])],1),a("br")],1),a("v-card-text",{staticClass:"pt-5",attrs:{id:"box-messages"}},[e._l(e.messages,(function(t,n){return a("v-row",{key:n},["agent"===t.type?a("message-agent",{attrs:{text:t.text}}):e._e(),"user"===t.type?a("message-user",{attrs:{text:t.text}}):e._e(),"opciones"===t.type?a("message-options"):e._e(),"muestras"===t.type?a("message-form-muestras"):e._e(),"resultados"===t.type?a("message-form-resultados"):e._e(),"citas"===t.type?a("message-form-citas"):e._e(),"salir"===t.type?a("message-salir"):e._e()],1)})),e.writing?a("v-container",[a("v-row",[a("v-col",[a("b",[e._v(e._s(e.name_bot))]),e._v(" escribiendo... ")])],1)],1):e._e()],2)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],attrs:{id:"box-message-user"}},[a("v-container",{staticClass:"text-center"},[a("v-text-field",{attrs:{"append-icon":"mdi-send",type:"text",placeholder:"Enviar un mensaje",dense:"",outlined:"",rounded:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.send()},"click:append":function(t){return e.send()}},model:{value:e.userMessage,callback:function(t){e.userMessage=t},expression:"userMessage"}})],1)],1),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.expand,expression:"!expand"}],attrs:{id:"btn-toggle-chat",fab:"",bottom:"",right:""},on:{click:function(t){return e.toggleChat()}}},[a("v-img",{staticClass:"rounded-circle",attrs:{src:e.imageAgent,height:"100px",width:"100px"}})],1)],1)},p=[],h=a("5530"),g=a("2f62"),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-agent"},[a("v-img",{staticClass:"rounded-circle",attrs:{src:e.imageAgent,height:"60px",width:"60px"}}),a("div",{staticClass:"container"},[a("p",{staticClass:"text-agent elevation-4"},[e._v(e._s(e.text))])])],1)},x=[],_={name:"MessageAgent",props:["text"],computed:Object(h["a"])({},Object(g["c"])(["imageAgent"]))},k=_,E=(a("105f"),a("adda")),y=Object(c["a"])(k,j,x,!1,null,null,null),M=y.exports;l()(y,{VImg:E["a"]});var C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box-user"},[a("div",{staticClass:"container"},[a("p",{staticClass:"text-user text-right elevation-4"},[e._v(e._s(e.text))])]),a("v-img",{staticClass:"rounded-circle",attrs:{src:e.imageUser,height:"60px",width:"60px"}})],1)},S=[],D={name:"MessageUser",props:["text"],computed:Object(h["a"])({},Object(g["c"])(["imageUser"]))},w=D,O=(a("1529"),Object(c["a"])(w,C,S,!1,null,null,null)),A=O.exports;l()(O,{VImg:E["a"]});var T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"text-center"},[a("v-row",[a("v-col",[a("v-btn",{staticClass:"btn-opcion",attrs:{color:"primary"},on:{click:function(t){return e.sendMessageUser("Muestras")}}},[e._v("Toma de Muestras a Domicilio")]),a("v-btn",{staticClass:"btn-opcion",attrs:{color:"primary"},on:{click:function(t){return e.sendMessageUser("Resultados")}}},[e._v("Entrega de Resultados a Domicilio")]),a("v-btn",{staticClass:"btn-opcion",attrs:{color:"primary"},on:{click:function(t){return e.sendMessageUser("Citas")}}},[e._v("Programación de Citas")])],1)],1)],1)},z=[],V={name:"Options",methods:Object(h["a"])({},Object(g["b"])(["sendMessageUser"]))},F=V,$=(a("1959"),a("8336")),P=a("62ad"),R=a("a523"),U=a("0fd9"),I=Object(c["a"])(F,T,z,!1,null,null,null),G=I.exports;l()(I,{VBtn:$["a"],VCol:P["a"],VContainer:R["a"],VRow:U["a"]});var q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{attrs:{elevation:"5"}},[a("v-card-text",{staticClass:"text-center"},[a("h3",[e._v("Formulario Solicitud Toma Muestras a Domicilio")])]),a("v-card-text",{staticClass:"text-center"},[a("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{dense:"",outlined:"",label:"Nombre Completo",rules:[function(e){return!!e||"Debe indicar el nombre"}]},model:{value:e.datos.nombre,callback:function(t){e.$set(e.datos,"nombre",t)},expression:"datos.nombre"}}),a("v-text-field",{attrs:{dense:"",outlined:"",label:"Documento de Identidad",rules:[function(e){return!!e||"Debe indicar documento de identidad"}]},model:{value:e.datos.documento,callback:function(t){e.$set(e.datos,"documento",t)},expression:"datos.documento"}}),a("v-text-field",{attrs:{dense:"",outlined:"",label:"Teléfono de Contacto",rules:[function(e){return!!e||"Debe indicar un teléfono de contacto"}]},model:{value:e.datos.telefono,callback:function(t){e.$set(e.datos,"telefono",t)},expression:"datos.telefono"}}),a("v-text-field",{attrs:{dense:"",outlined:"",label:"Dirección",rules:[function(e){return!!e||"La dirección es requerida"}]},model:{value:e.datos.direccion,callback:function(t){e.$set(e.datos,"direccion",t)},expression:"datos.direccion"}}),a("v-text-field",{attrs:{dense:"",outlined:"",label:"Entidad de Salud que lo remite",rules:[function(e){return!!e||"Debe indicar la entidad de salud que lo remite"}]},model:{value:e.datos.entidad_salud,callback:function(t){e.$set(e.datos,"entidad_salud",t)},expression:"datos.entidad_salud"}}),a("v-text-field",{attrs:{dense:"",outlined:"",label:"Exámen(es) a realizar",rules:[function(e){return!!e||"Debe indicar los exámenes a realizar"}]},model:{value:e.datos.examenes_realizar,callback:function(t){e.$set(e.datos,"examenes_realizar",t)},expression:"datos.examenes_realizar"}}),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.solicitarTomaMuestras()}}},[e._v("Solicitar")])],1)],1)],1)],1)},N=[],B=(a("99af"),{data:function(){return{valid:!1,datos:{nombre:"",documento:"",telefono:"",direccion:"",entidad_salud:"",examenes_realizar:""}}},computed:Object(h["a"])({},Object(g["c"])(["imageAgent","emailTo"])),methods:Object(h["a"])(Object(h["a"])({},Object(g["b"])(["sendMessageUser","sendEmail"])),{},{solicitarTomaMuestras:function(){if(this.$refs.form.validate()){var e="\n        <div>\n          <table>\n            <tbody>\n              <tr>\n                <td><b>Nombre Completo</b></td>\n                <td>".concat(this.datos.nombre,"</td>\n              </tr>\n              <tr>\n                <td><b>Documento de Identificación</b></td>\n                <td>").concat(this.datos.documento,"</td>\n              </tr>\n              <tr>\n                <td><b>Teléfono</b></td>\n                <td>").concat(this.datos.telefono,"</td>\n              </tr>\n              <tr>\n                <td><b>Dirección</b></td>\n                <td>").concat(this.datos.direccion,"</td>\n              </tr>\n              <tr>\n                <td><b>Entidad de Salud que lo remite</b></td>\n                <td>").concat(this.datos.entidad_salud,"</td>\n              </tr>\n              <tr>\n                <td><b>Exámenes a realizar</b></td>\n                <td>").concat(this.datos.examenes_realizar,"</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      ");this.sendEmail({to:this.emailTo,message:e,subject:"Solicitud Toma de Muestras a Domicilio"})}else console.log("no valido")}})}),Y=B,L=(a("08b3"),a("b0af")),H=a("99d9"),J=a("4bd4"),K=a("8654"),Q=Object(c["a"])(Y,q,N,!1,null,null,null),W=Q.exports;l()(Q,{VBtn:$["a"],VCard:L["a"],VCardText:H["b"],VContainer:R["a"],VForm:J["a"],VTextField:K["a"]});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{attrs:{elevation:"5"}},[a("v-card-text",{staticClass:"text-center"},[a("h3",[e._v("Formulario Solicitud Entrega Resultados a Domicilio")])]),a("v-card-text",{staticClass:"text-center"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{dense:"",outlined:"",label:"Nombre Completo",rules:[function(e){return!!e||"El nombre es requerido"}]},model:{value:e.datos.nombre,callback:function(t){e.$set(e.datos,"nombre",t)},expression:"datos.nombre"}}),a("v-text-field",{attrs:{dense:"",outlined:"",label:"Documento de Identidad",rules:[function(e){return!!e||"El Documento es requerido"}]},model:{value:e.datos.documento,callback:function(t){e.$set(e.datos,"documento",t)},expression:"datos.documento"}}),a("v-text-field",{attrs:{dense:"",outlined:"",label:"Teléfono de Contacto",rules:[function(e){return!!e||"El teléfono es requerido"}]},model:{value:e.datos.telefono,callback:function(t){e.$set(e.datos,"telefono",t)},expression:"datos.telefono"}}),a("v-text-field",{attrs:{dense:"",outlined:"",label:"Email",rules:[function(e){return!!e||"El email es requerido"}]},model:{value:e.datos.email,callback:function(t){e.$set(e.datos,"email",t)},expression:"datos.email"}}),a("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px","header-color":"primary"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g({attrs:{label:"Fecha Toma Exámen(es)",readonly:"",outlined:"",dense:"",rules:[function(e){return!!e||"La fecha de toma de exámen(es) es requerida"}]},model:{value:e.datos.fecha_examenes,callback:function(t){e.$set(e.datos,"fecha_examenes",t)},expression:"datos.fecha_examenes"}},n))]}}]),model:{value:e.showPicker1,callback:function(t){e.showPicker1=t},expression:"showPicker1"}},[a("v-date-picker",{attrs:{max:this.fechaMaxima,"no-title":""},on:{input:function(t){e.showPicker1=!1}},model:{value:e.datos.fecha_examenes,callback:function(t){e.$set(e.datos,"fecha_examenes",t)},expression:"datos.fecha_examenes"}})],1),a("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px","header-color":"primary"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g({attrs:{label:"Fecha Entrega Exámen(es)",readonly:"",outlined:"",dense:"",rules:[function(e){return!!e||"La fecha de entrega de exámen(es) es requerida"}]},model:{value:e.datos.fecha_entrega,callback:function(t){e.$set(e.datos,"fecha_entrega",t)},expression:"datos.fecha_entrega"}},n))]}}]),model:{value:e.showPicker2,callback:function(t){e.showPicker2=t},expression:"showPicker2"}},[a("v-date-picker",{attrs:{"no-title":""},on:{input:function(t){e.showPicker2=!1}},model:{value:e.datos.fecha_entrega,callback:function(t){e.$set(e.datos,"fecha_entrega",t)},expression:"datos.fecha_entrega"}})],1),a("v-text-field",{attrs:{dense:"",outlined:"",label:"Dirección",rules:[function(e){return!!e||"La dirección de entrega es requerida"}]},model:{value:e.datos.direccion,callback:function(t){e.$set(e.datos,"direccion",t)},expression:"datos.direccion"}}),a("v-text-field",{attrs:{dense:"",outlined:"",label:"Ciudad",rules:[function(e){return!!e||"La ciudad es requerida"}]},model:{value:e.datos.ciudad,callback:function(t){e.$set(e.datos,"ciudad",t)},expression:"datos.ciudad"}}),a("v-text-field",{attrs:{dense:"",outlined:"",label:"Exámen(es) realizados",rules:[function(e){return!!e||"Debe indicar el(los) exámen(es) realizados"}]},model:{value:e.datos.examenes_realizados,callback:function(t){e.$set(e.datos,"examenes_realizados",t)},expression:"datos.examenes_realizados"}}),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.solicitarEntregaResultados()}}},[e._v("Solicitar")])],1)],1)],1)],1)},Z=[],ee=(a("d3b7"),a("25f0"),a("c1df")),te=a.n(ee),ae={data:function(){return{valid:!1,showPicker1:!1,showPicker2:!1,datos:{nombre:"",documento:"",telefono:"",email:"",fecha_examenes:"",fecha_entrega:"",direccion:"",ciudad:"",examenes_realizados:""}}},computed:Object(h["a"])(Object(h["a"])({},Object(g["c"])(["imageAgent","emailTo"])),{},{fechaMaxima:function(){return te()(new Date).format("YYYY-MM-DD").toString()}}),methods:Object(h["a"])(Object(h["a"])({},Object(g["b"])(["sendMessageUser","sendEmail"])),{},{formatearFecha:function(e){return te()(e).locale("es").format("dddd D MMMM [de] YYYY")},solicitarEntregaResultados:function(){if(this.$refs.form.validate()){var e="\n        <div>\n          <table>\n            <tbody>\n              <tr>\n                <td><b>Nombre Completo</b></td>\n                <td>".concat(this.datos.nombre,"</td>\n              </tr>\n              <tr>\n                <td><b>Documento de Identificación</b></td>\n                <td>").concat(this.datos.documento,"</td>\n              </tr>\n              <tr>\n                <td><b>Teléfono</b></td>\n                <td>").concat(this.datos.telefono,"</td>\n              </tr>\n              <tr>\n                <td><b>Email</b></td>\n                <td>").concat(this.datos.email,"</td>\n              </tr>\n              <tr>\n                <td><b>Fecha Toma Exámenes</b></td>\n                <td>").concat(this.formatearFecha(this.datos.fecha_examenes),"</td>\n              </tr>\n              <tr>\n                <td><b>Fecha Entrega Exámenes</b></td>\n                <td>").concat(this.formatearFecha(this.datos.fecha_entrega),"</td>\n              </tr>\n              <tr>\n                <td><b>Dirección de Entrega</b></td>\n                <td>").concat(this.datos.direccion,"</td>\n              </tr>\n              <tr>\n                <td><b>Ciudad de Entrega</b></td>\n                <td>").concat(this.datos.ciudad,"</td>\n              </tr>\n              <tr>\n                <td><b>Exámenes Realizados</b></td>\n                <td>").concat(this.datos.examenes_realizados,"</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      ");this.sendEmail({to:this.emailTo,message:e,subject:"Solicitud Entrega Resultados a Domicilio"})}else console.log("no valido")}})},ne=ae,se=(a("22ec"),a("2e4b")),oe=a("e449"),re=Object(c["a"])(ne,X,Z,!1,null,null,null),ie=re.exports;l()(re,{VBtn:$["a"],VCard:L["a"],VCardText:H["b"],VContainer:R["a"],VDatePicker:se["a"],VForm:J["a"],VMenu:oe["a"],VTextField:K["a"]});var ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{attrs:{elevation:"5"}},[a("v-card-text",{staticClass:"text-center"},[a("h3",[e._v("Formulario Solicitud Cita")])]),a("v-card-text",{staticClass:"text-center"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{dense:"",outlined:"",label:"Nombre Completo",rules:[function(e){return!!e||"Debe indicar el nombre"}]},model:{value:e.datos.nombre,callback:function(t){e.$set(e.datos,"nombre",t)},expression:"datos.nombre"}}),a("v-text-field",{attrs:{dense:"",outlined:"",label:"Documento de Identidad",rules:[function(e){return!!e||"Debe indicar documento de identidad"}]},model:{value:e.datos.documento,callback:function(t){e.$set(e.datos,"documento",t)},expression:"datos.documento"}}),a("v-text-field",{attrs:{dense:"",outlined:"",label:"Teléfono o Celular de Contacto",rules:[function(e){return!!e||"Debe indicar un teléfono de contacto"}]},model:{value:e.datos.telefono,callback:function(t){e.$set(e.datos,"telefono",t)},expression:"datos.telefono"}}),a("v-text-field",{attrs:{dense:"",outlined:"",label:"Email",rules:[function(e){return!!e||"Debe indicar un email"}]},model:{value:e.datos.email,callback:function(t){e.$set(e.datos,"email",t)},expression:"datos.email"}}),a("v-datetime-picker",{attrs:{"text-field-props":e.textFieldProps,"date-picker-props":e.dateProps,"time-format":"hh:mm:ss a",label:"Fecha y Hora de la Cita",clearText:"Cancelar",okText:"Aceptar"},scopedSlots:e._u([{key:"dateIcon",fn:function(){return[a("v-icon",[e._v("mdi-calendar")])]},proxy:!0},{key:"timeIcon",fn:function(){return[a("v-icon",[e._v("mdi-timer")])]},proxy:!0}]),model:{value:e.datos.fecha_hora,callback:function(t){e.$set(e.datos,"fecha_hora",t)},expression:"datos.fecha_hora"}}),a("v-text-field",{attrs:{dense:"",outlined:"",label:"EPS que lo remite",rules:[function(e){return!!e||"Debe indicar la EPS que lo remite"}]},model:{value:e.datos.entidad_salud,callback:function(t){e.$set(e.datos,"entidad_salud",t)},expression:"datos.entidad_salud"}}),a("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.solicitarCita()}}},[e._v("Solicitar")])],1)],1)],1)],1)},de=[],le={data:function(){return{textFieldProps:{dense:!0,outlined:!0,rules:[function(e){return!!e||"Debe indicar una Fecha y Hora para la cita"}]},dateProps:{headerColor:"primary",min:te()(new Date).add(1,"d").format("YYYY-MM-DD")},valid:!1,datos:{nombre:"",documento:"",telefono:"",email:"",fecha_hora:"",entidad_salud:""}}},computed:Object(h["a"])({},Object(g["c"])(["imageAgent","emailTo"])),methods:Object(h["a"])(Object(h["a"])({},Object(g["b"])(["sendMessageUser","sendEmail"])),{},{formatearFecha:function(e){return te()(e).locale("es").format("dddd D MMMM [de] YYYY hh:mm a")},solicitarCita:function(){if(this.$refs.form.validate()){var e="\n       <div>\n         <table>\n           <tbody>\n             <tr>\n               <td><b>Nombre Completo</b></td>\n               <td>".concat(this.datos.nombre,"</td>\n             </tr>\n             <tr>\n               <td><b>Documento de Identificación</b></td>\n               <td>").concat(this.datos.documento,"</td>\n             </tr>\n             <tr>\n               <td><b>Teléfono</b></td>\n               <td>").concat(this.datos.telefono,"</td>\n             </tr>\n             <tr>\n               <td><b>Email</b></td>\n               <td>").concat(this.datos.email,"</td>\n             </tr>\n             <tr>\n               <td><b>Fecha y Hora</b></td>\n               <td>").concat(this.formatearFecha(this.datos.fecha_hora),"</td>\n             </tr>\n             <tr>\n               <td><b>Entidad de Salud que lo remite</b></td>\n               <td>").concat(this.datos.entidad_salud,"</td>\n             </tr>\n\n           </tbody>\n         </table>\n       </div>\n     ");this.sendEmail({to:this.emailTo,message:e,subject:"Solicitud de Cita"})}else console.log("no valido")}})},ue=le,fe=(a("8640"),a("132d")),me=Object(c["a"])(ue,ce,de,!1,null,null,null),be=me.exports;l()(me,{VBtn:$["a"],VCard:L["a"],VCardText:H["b"],VContainer:R["a"],VForm:J["a"],VIcon:fe["a"],VTextField:K["a"]});var ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"text-center"},[a("v-row",[a("v-col",[a("v-btn",{staticClass:"btn-opcion",attrs:{color:"primary"},on:{click:function(t){return e.sendMessageReset()}}},[e._v("Salir")])],1),a("v-col",[a("v-btn",{staticClass:"btn-opcion",attrs:{color:"primary"},on:{click:function(t){return e.sendMessageUser("Opciones")}}},[e._v("Opciones Principales")])],1)],1)],1)},pe=[],he={name:"Salir",methods:Object(h["a"])({},Object(g["b"])(["sendMessageUser","sendMessageReset"]))},ge=he,je=(a("8ed3"),Object(c["a"])(ge,ve,pe,!1,null,null,null)),xe=je.exports;l()(je,{VBtn:$["a"],VCol:P["a"],VContainer:R["a"],VRow:U["a"]});var _e={components:{"message-agent":M,"message-user":A,"message-options":G,"message-form-muestras":W,"message-form-resultados":ie,"message-form-citas":be,"message-salir":xe},data:function(){return{userMessage:"",expand:!1}},computed:Object(h["a"])({},Object(g["c"])(["imageAgent","messages","name_bot","writing"])),mounted:function(){this.sendMessageReset()},updated:function(){if(document.getElementById("box-messages")){var e=document.getElementById("box-messages").scrollTop;document.getElementById("box-messages").scrollTop=e+1e6}},methods:Object(h["a"])(Object(h["a"])({},Object(g["b"])(["sendMessageReset","sendMessageUser"])),{},{send:function(){this.sendMessageUser(this.userMessage),this.userMessage=""},toggleChat:function(){this.expand=!this.expand}})},ke=_e,Ee=(a("cccb"),a("2fa4")),ye=a("71d9"),Me=a("2a7f"),Ce=Object(c["a"])(ke,v,p,!1,null,null,null),Se=Ce.exports;l()(Ce,{VBtn:$["a"],VCard:L["a"],VCardText:H["b"],VCol:P["a"],VContainer:R["a"],VIcon:fe["a"],VImg:E["a"],VRow:U["a"],VSpacer:Ee["a"],VTextField:K["a"],VToolbar:ye["a"],VToolbarTitle:Me["a"]}),n["a"].use(b["a"]);var De=[{path:"/",name:"Home",component:Se}],we=new b["a"]({mode:"history",base:"/angela/",routes:De}),Oe=we,Ae=(a("4160"),a("159b"),a("bc3a")),Te=a.n(Ae);n["a"].use(g["a"]);var ze=new g["a"].Store({state:{messages:[],name_bot:"Angela",writing:!1,urlBot:"https://account.snatchbot.me/channels/api/api/id124889/appchatbot_angela/apschatbot_angela?user_id=chatbot_angela",imageAgent:"https://arciortiz818.github.io/angela/images/img-angela.jpeg')",imageUser:"https://arciortiz818.github.io/angela/images/img-user.jpg')",urlServiceMailer:"https://us-central1-mailer-bbdb3.cloudfunctions.net/mailer",emailTo:"direcciontecnologia@alianzadiagnostica.com"},mutations:{ADD_MESSAGE_USER:function(e,t){e.messages.push({text:t,type:"user"})},ADD_MESSAGE_AGENT:function(e,t){t.forEach((function(t){e.messages.push({text:t.message,type:"agent"})}))},ADD_MESSAGE_OPT_PRINCIPALES:function(e){e.messages.push({text:"",type:"opciones"})},ADD_MESSAGE_FORM_MUESTRAS:function(e){e.messages.push({text:"",type:"muestras"})},ADD_MESSAGE_FORM_RESULTADOS:function(e){e.messages.push({text:"",type:"resultados"})},ADD_MESSAGE_FORM_CITAS:function(e){e.messages.push({text:"",type:"citas"})},ADD_MESSAGE_SALIR:function(e){e.messages.push({text:"",type:"salir"})}},actions:{sendMessageReset:function(e){var t=e.state,a=e.commit;t.messages=[],t.writing=!0,Te.a.post(t.urlBot,{message:"reiniciar"}).then((function(e){a("ADD_MESSAGE_AGENT",e.data.messages)})).then((function(){Te.a.post(t.urlBot,{message:"hola angela"}).then((function(e){a("ADD_MESSAGE_AGENT",e.data.messages),t.writing=!1}))}))},sendMessageUser:function(e,t){var a=e.state,n=e.commit;"Muestras"!==t&&"Resultados"!==t&&"Citas"!==t&&"enviado"!==t&&"hola angela"!==t&&"Opciones"!==t&&n("ADD_MESSAGE_USER",t),a.writing=!0,Te.a.post(a.urlBot,{message:t}).then((function(e){n("ADD_MESSAGE_AGENT",e.data.messages),a.writing=!1,e.data.cards.length>0&&("opciones_principales"==e.data.cards[0].value&&n("ADD_MESSAGE_OPT_PRINCIPALES"),"salir"==e.data.cards[0].value&&n("ADD_MESSAGE_SALIR")),"Muestras"!=t?"Resultados"!=t?"Citas"!=t||n("ADD_MESSAGE_FORM_CITAS"):n("ADD_MESSAGE_FORM_RESULTADOS"):n("ADD_MESSAGE_FORM_MUESTRAS")}))},sendEmail:function(e,t){var a=e.state,n=(e.commit,e.dispatch);Te.a.post(a.urlServiceMailer,t).then((function(e){n("sendMessageUser","enviado")}))}},modules:{}}),Ve=a("f309"),Fe=a("2e15"),$e=a.n(Fe);n["a"].use(Ve["a"]);var Pe=new Ve["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#0B65B2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{es:$e.a},current:"es"}}),Re=a("a7fe"),Ue=a.n(Re),Ie=a("ad24");n["a"].use(a("c1df")),n["a"].use(Ue.a,Te.a),n["a"].use(Ie["a"]),n["a"].config.productionTip=!1,new n["a"]({router:Oe,store:ze,vuetify:Pe,render:function(e){return e(m)}}).$mount("#app")},"5ced":function(e,t,a){},"69a4":function(e,t,a){},8634:function(e,t,a){},8640:function(e,t,a){"use strict";var n=a("9a30"),s=a.n(n);s.a},"8ed3":function(e,t,a){"use strict";var n=a("8634"),s=a.n(n);s.a},"9a30":function(e,t,a){},a593:function(e,t,a){},cccb:function(e,t,a){"use strict";var n=a("5ced"),s=a.n(n);s.a},d594:function(e,t,a){}});
//# sourceMappingURL=app.58bd8da9.js.map