(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t){},130:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(15),o=a.n(s),l=(a(58),a(60),a(62),a(131)),i=(a(64),a(7)),c=a(8),u=a(10),m=a(9),h=a(11),d=a(132),f=a(133),p=a(2),v=(a(68),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).setOrDeleteError=function(e,t){var r=a.state.errors;""===t?delete r[e]:r[e]=t,a.setState({errors:r})},a.handleNameValidation=function(){var e=a.state.fields.name,t="";""===e.trim()?t="Veuillez fournir un nom":e.match(/^[a-zA-Z]+$/)||(t="Veuillez fournir un nom avec des lettres et espaces seulement"),a.setOrDeleteError("name",t)},a.handleEmailValidation=function(){var e=a.state.fields.email,t="";""===e.trim()?t="Veuillez fournir une adresse email":e.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)||(t="Veuillez fournir une adresse email valide"),a.setOrDeleteError("email",t)},a.handlePhoneValidation=function(){var e=a.state.fields.phone,t="";""===e.trim()?t="Veuillez fournir un num\xe9ro de t\xe9l\xe9phone":e.match(/^[0-9]+$/)||(t="Veuillez fournir un num\xe9ro de t\xe9l\xe9phone avec des chiffres seulement"),a.setOrDeleteError("phone",t)},a.handleMessageValidation=function(){var e="";""===a.state.fields.message.trim()&&(e="Veuillez fournir un message"),a.setOrDeleteError("message",e)},a.handleValidation=function(){return a.handleNameValidation(),a.handleEmailValidation(),a.handlePhoneValidation(),a.handleMessageValidation(),0===Object.keys(a.state.errors).length},a.handleChange=function(e){var t=a.state.fields,r=e.target.name;switch(t[r]=e.target.value,a.setState({fields:t}),r){case"name":a.handleNameValidation();break;case"email":a.handleEmailValidation();break;case"phone":a.handlePhoneValidation();break;case"message":a.handleMessageValidation()}},a.handleSubmission=function(e){e.preventDefault(),a.handleValidation()&&(a.setState({sending:!0}),setTimeout(function(){a.props.onSubmit(a.state.fields)},1e3))},a.resetForm=function(){a.setState({fields:{name:"",email:"",phone:"",message:""}})},a.notifServiceCallEnded=function(){a.setState({sending:!1})},a.renderSendButton=function(){return a.state.sending?n.a.createElement(p.Button,{type:"submit",disabled:!0,gradient:"blue",className:"btn-block"},"Envoi en cours ",n.a.createElement(p.Fa,{icon:"circle-o-notch",spin:!0,className:"ml-1"})):n.a.createElement(p.Button,{type:"submit",gradient:"blue",className:"btn-block"},"Envoyer ",n.a.createElement(p.Fa,{icon:"paper-plane-o",className:"ml-1"}))},a.showErrorDiv=function(e){return n.a.createElement("div",{className:"error"},"* ",a.state.errors[e])},a.state={fields:{name:"",email:"",phone:"",message:""},errors:{},sending:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.handleSubmission,noValidate:!0},n.a.createElement("p",{className:"h3 text-center mb-4"},"Laissez nous un message"),n.a.createElement("div",{className:"grey-text"},n.a.createElement(p.Input,{label:"Votre nom",name:"name",id:"name",icon:"user",group:!0,type:"text",value:this.state.fields.name,onChange:this.handleChange,required:!0}),this.state.errors.hasOwnProperty("name")?this.showErrorDiv("name"):null,n.a.createElement(p.Input,{label:"Votre email",name:"email",id:"email",icon:"envelope",group:!0,type:"email",value:this.state.fields.email,onChange:this.handleChange,required:!0}),this.state.errors.hasOwnProperty("email")?this.showErrorDiv("email"):null,n.a.createElement(p.Input,{label:"Votre num\xe9ro de t\xe9l\xe9phone",name:"phone",id:"phone",icon:"phone",group:!0,type:"text",value:this.state.fields.phone,onChange:this.handleChange,required:!0}),this.state.errors.hasOwnProperty("phone")?this.showErrorDiv("phone"):null,n.a.createElement(p.Input,{type:"textarea",name:"message",id:"message",rows:"2",label:"Votre message",icon:"pencil",value:this.state.fields.message,onChange:this.handleChange,required:!0}),this.state.errors.hasOwnProperty("message")?this.showErrorDiv("message"):null),n.a.createElement("div",{className:"text-center mb-3 mt-4"},this.renderSendButton()))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.errors===t.errors?null:{errors:e.errors}}}]),t}(n.a.Component)),b=(a(70),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("header",null,n.a.createElement("a",{href:"https://www.medgo.fr/",rel:"noopener noreferrer",target:"_blank"},n.a.createElement("img",{src:"medGo.jpg",alt:"medGo logo"})))}}]),t}(r.Component)),E=(a(72),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",null,n.a.createElement("span",null," Cr\xe9\xe9 par ",n.a.createElement("a",{href:"mailto:radhinasser@gmail.com"},"Radhi NASSER")," pour ",n.a.createElement("a",{href:"https://www.medgo.fr/",rel:"noopener noreferrer",target:"_blank"},"medGo")," "))}}]),t}(r.Component)),g=a(29),w=a.n(g),O=a(16);var y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){a.setState({successDiv:!1,errorDiv:!1}),function(e){return new Promise(function(t,a){w.a.post(O.a,e).then(function(e){t(e)},function(e){if(e.response.hasOwnProperty("data")){var t=e.response.data;if(t.hasOwnProperty("errors")){var r={};for(var n in t.errors){var s=t.errors[n],o=Object.keys(s)[0];r[o]=s[o]}t.errors=r}a(t)}else a(e)})})}(e).then(function(e){a.form.current.resetForm(),a.form.current.notifServiceCallEnded(),a.setState({successDiv:!0}),setTimeout(function(){a.setState({successDiv:!1})},5e3),a.setState({errors:{}})},function(e){a.form.current.notifServiceCallEnded(),e.hasOwnProperty("errors")?a.setState({errors:e.errors}):a.setState({errorDiv:!0,errors:{}})})},a.showSuccessDiv=function(){return n.a.createElement(p.Card,{color:"success-color",text:"white",className:"text-center"},n.a.createElement(p.CardBody,null,"Votre message a \xe9t\xe9 envoy\xe9 avec succ\xe8s."))},a.showErrorDiv=function(){return n.a.createElement(p.Card,{color:"red lighten-1",text:"white",className:"text-center"},n.a.createElement(p.CardBody,null,"Une erreur est survenue. Veuillez r\xe9essayer dans quelques minutes."))},a.state={successDiv:!1,errorDiv:!1,errors:{}},a.form=n.a.createRef(),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(p.Container,null,n.a.createElement(b,null),n.a.createElement(p.Row,null,n.a.createElement(p.Col,{className:"col-md-6 ml-md-auto mr-md-auto mt-4"},n.a.createElement(p.Card,null,n.a.createElement(p.CardBody,null,n.a.createElement(v,{ref:this.form,errors:this.state.errors,onSubmit:this.handleSubmit}),this.state.successDiv?this.showSuccessDiv():null,this.state.errorDiv?this.showErrorDiv():null)))),n.a.createElement(E,null))}}]),t}(r.Component),C=a(30),S=a.n(C),j=a(50),D=a.n(j),k=(a(125),a(127),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).showErrorDiv=function(){return n.a.createElement(p.Card,{color:"red lighten-1",text:"white",className:"text-center"},n.a.createElement(p.CardBody,null,"Une erreur est survenue. Veuillez r\xe9essayer dans quelques minutes."))},a.state={errorDiv:!1,columns:[{label:"#",field:"#",sort:"asc"},{label:[n.a.createElement("i",{key:"Lorem",className:"fa fa-user mr-2","aria-hidden":"true"}),"Nom"],field:"name",sort:"asc"},{label:[n.a.createElement("i",{key:"Lorem",className:"fa fa-phone mr-2","aria-hidden":"true"}),"Num\xe9ro de t\xe9l\xe9phone"],field:"phone",sort:"asc"},{label:[n.a.createElement("i",{key:"Lorem",className:"fa fa-envelope mr-2","aria-hidden":"true"}),"Email"],field:"email",sort:"asc"},{label:[n.a.createElement("i",{key:"Lorem",className:"fa fa-pencil mr-2","aria-hidden":"true"}),"Message"],field:"message",sort:"asc"},{label:[n.a.createElement("i",{key:"Lorem",className:"fa fa-clock-o mr-2","aria-hidden":"true"}),"Cr\xe9\xe9 \xe0"],field:"createdAt",sort:"asc"}],rows:[]},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;D()(O.b).on("new-message",function(t){var a=e.state.rows;a.unshift(t),e.setState({rows:JSON.parse(JSON.stringify(a))}),S.a.success("Un nouveau message est arriv\xe9",{position:"top-right",effect:"slide",timeout:3e3})}),new Promise(function(e,t){w.a.get(O.a).then(function(t){e(t.data)},function(e){t(e)})}).then(function(t){e.setState({rows:t.messages})},function(t){e.setState({errorDiv:!0})})}},{key:"render",value:function(){return n.a.createElement(p.Container,null,n.a.createElement(b,null),n.a.createElement(S.a,{stack:!1}),n.a.createElement(p.Row,null,n.a.createElement(p.Col,{className:"col-md-12 mb-4 mt-4"},this.state.errorDiv?this.showErrorDiv():null,n.a.createElement(p.Card,{className:"mt-3"},n.a.createElement(p.CardBody,null,n.a.createElement("p",{className:"h3 text-center mb-4"},"Liste des messages"),n.a.createElement(p.MDBDataTable,{borderless:!0,bordered:!0,hover:!0,responsive:!0,sortable:!1,searching:!1,entriesLabel:"Afficher les entr\xe9es",searchLabel:"Chercher",infoLabel:["Montrant","\xe0","de","entr\xe9es"],paginationLabel:["Pr\xe9c\xe9dent","Suivant"],data:{columns:this.state.columns,rows:this.state.rows}}))))),n.a.createElement(E,null))}}]),t}(r.Component)),V=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(d.a,null,n.a.createElement(f.a,{exact:!0,path:"/",component:y}),n.a.createElement(f.a,{exact:!0,path:"/messages",component:k}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(l.a,null,n.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},16:function(e){e.exports={b:"https://contact-form-radhi-nasser.herokuapp.com",a:"https://contact-form-radhi-nasser.herokuapp.com/api/messages"}},53:function(e,t,a){e.exports=a(130)},64:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){}},[[53,2,1]]]);
//# sourceMappingURL=main.bdd49064.chunk.js.map