(this.webpackJsonpcitasreact=this.webpackJsonpcitasreact||[]).push([[0],{13:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),o=(t(13),t(7)),i=t(1),m=t(2),s=t(5),u=t(6),p=t.n(u),h=function(e){var a=e.crearCita,t=Object(n.useState)({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""}),r=Object(i.a)(t,2),c=r[0],o=r[1],u=Object(n.useState)(!1),h=Object(i.a)(u,2),E=h[0],d=h[1],f=function(e){o(Object(s.a)({},c,Object(m.a)({},e.target.name,e.target.value)))},b=c.mascota,g=c.propietario,v=c.fecha,N=c.hora,w=c.sintomas;return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Crear Cita"),E?l.a.createElement("p",{className:"alerta-error"},"Todos los campos son Obligatorios"):null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==b.trim()&&""!==g.trim()&&""!==v.trim()&&""!==N.trim()&&""!==w.trim()?(E&&d(!1),c.id=p()(),a(c),o({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""})):d(!0)}},l.a.createElement("label",null,"Nombre de la mascota"),l.a.createElement("input",{type:"text",name:"mascota",className:"u-full-width",placeholder:"Nombre Mascota",onChange:f,value:b}),l.a.createElement("label",null,"Nombre del due\xf1o"),l.a.createElement("input",{type:"text",name:"propietario",className:"u-full-width",placeholder:"Nombre del Due\xf1o de la Mascota",onChange:f,value:g}),l.a.createElement("label",null,"Fecha"),l.a.createElement("input",{type:"date",name:"fecha",className:"u-full-width",onChange:f,value:v}),l.a.createElement("label",null,"Hora"),l.a.createElement("input",{type:"time",name:"hora",className:"u-full-width",onChange:f,value:N}),l.a.createElement("label",null,"Sintomas"),l.a.createElement("textarea",{name:"sintomas",className:"u-full-width",onChange:f,value:w}),l.a.createElement("button",{type:"submit",className:"u-full-width button-primary"},"Agregar Citas")))},E=function(e){var a=e.cita,t=e.eliminarCita,n=a.mascota,r=a.propietario,c=a.fecha,o=a.hora,i=a.sintomas;return l.a.createElement("div",{className:"cita"},l.a.createElement("p",null,"Mascota: ",l.a.createElement("span",null,n)),l.a.createElement("p",null,"Propietario: ",l.a.createElement("span",null,r)),l.a.createElement("p",null,"Fecha: ",l.a.createElement("span",null,c)),l.a.createElement("p",null,"Hora: ",l.a.createElement("span",null,o)),l.a.createElement("p",null,"Sintomas: ",l.a.createElement("span",null,i)),l.a.createElement("button",{className:"button eliminar u-full-width",onClick:function(){return t(a.id)}},"Eliminar \xd7"))};var d=function(){var e=[];JSON.parse(localStorage.getItem("citas"))&&(e=JSON.parse(localStorage.getItem("citas")));var a=Object(n.useState)(e),t=Object(i.a)(a,2),r=t[0],c=t[1],m=function(e){var a=r.filter((function(a){return a.id!==e}));c(a)};Object(n.useEffect)((function(){e?localStorage.setItem("citas",JSON.stringify(r)):localStorage.setItem("citas",[])}),[r,e]);var s=0===r.length?"No Hay Citas":"Administa tus Citas";return l.a.createElement(n.Fragment,null,l.a.createElement("h1",null,"Administrador de Pacientes"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"one-half column"},l.a.createElement(h,{crearCita:function(e){c([].concat(Object(o.a)(r),[e]))}})),l.a.createElement("div",{className:"one-half column"},l.a.createElement("h2",null,s),r.map((function(e){return l.a.createElement(E,{key:e.id,cita:e,eliminarCita:m})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a0026335.chunk.js.map