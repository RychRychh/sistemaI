(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{36:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n.n(i),r=n(28),s=n.n(r),a=(n(36),n(9)),o=n(10),l=n(12),d=n(15),j=n.n(d),h=n(1);function u(){var t=Object(i.useState)({usuario:"","contrase\xf1a":"",pword:""}),e=Object(l.a)(t,2),n=e[0],c=e[1];function r(t){c(Object(o.a)(Object(o.a)({},n),{},Object(a.a)({},t.target.id,t.target.value)))}return Object(h.jsx)("div",{style:{display:"flex",width:"100vw",height:"100vh",justifyContent:"center"},children:Object(h.jsx)("div",{style:{display:"flex",marginTop:"30vh",height:"40vh",backgroundColor:"white",alignItems:"center",borderRadius:"7px",border:" 3px solid black"},children:Object(h.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),j.a.post("http://localhost:8080/api/auth/signup",{usuario:n.usuario,email:n.email,pword:n.pword},{withCredentials:!0}).then((function(t){console.log(t)}),(function(t){console.log(t)}))}(t)},children:[Object(h.jsxs)("table",{style:{padding:"3vw"},children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{align:"right",children:"Usuario:"}),Object(h.jsxs)("td",{align:"left",children:[Object(h.jsx)("input",{id:"usuario",onChange:function(t){return r(t)}})," "]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{align:"right",children:"Email:"}),Object(h.jsxs)("td",{align:"left",children:[Object(h.jsx)("input",{id:"email",onChange:function(t){return r(t)}})," "]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{align:"right",children:"Contrase\xf1a:"}),Object(h.jsxs)("td",{align:"left",children:[Object(h.jsx)("input",{id:"pword",onChange:function(t){return r(t)}})," "]})]})]}),Object(h.jsx)("button",{style:{marginInlineStart:"18em",width:"4.5em"},children:" Entrar"})]})})})}function b(){var t=Object(i.useState)({usuario:"",pword:""}),e=Object(l.a)(t,2),n=e[0],c=e[1],r=Object(i.useState)(""),s=Object(l.a)(r,2),d=(s[0],s[1]);function b(t){c(Object(o.a)(Object(o.a)({},n),{},Object(a.a)({},t.target.id,t.target.value)))}return Object(h.jsxs)("div",{style:{display:"flex",width:"100vw",height:"100vh",justifyContent:"center"},children:[Object(h.jsx)("div",{style:{display:"flex",marginTop:"30vh",height:"40vh",backgroundColor:"white",alignItems:"center",borderRadius:"7px",border:" 3px solid black"},children:Object(h.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),console.log("production"),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_HOST:"http://localhost:8080/",REACT_APP_HOST_SIGNIN:"http://localhost:8080/api/auth/signin",REACT_APP_HOST_SIGNUP:"http://localhost:8080/api/auth/signup"}).REACT_APP),j.a.post("http://localhost:8080/api/auth/signin",{usuario:n.usuario,pword:n.pword},{withCredentials:!0}).then((function(t){console.log(t.data),console.log(t.data.accessToken),d(t.data.accessToken)}),(function(t){console.log(t)}))}(t)},children:[Object(h.jsxs)("table",{style:{padding:"3vw"},children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{align:"right",children:"Usuario:"}),Object(h.jsxs)("td",{align:"left",children:[Object(h.jsx)("input",{id:"usuario",onChange:function(t){return b(t)}})," "]})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{align:"right",children:"Contrase\xf1a:"}),Object(h.jsxs)("td",{align:"left",children:[Object(h.jsx)("input",{id:"pword",onChange:function(t){return b(t)}})," "]})]})]}),Object(h.jsx)("button",{style:{marginInlineStart:"18em",width:"4.5em"},children:" Entrar"})]})}),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(u,{})})]})}var O=n(29),g=n(2);var x=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(O.a,{children:Object(h.jsxs)(g.c,{children:[Object(h.jsx)(g.a,{exact:!0,path:"/",children:Object(h.jsx)(b,{})}),Object(h.jsx)(g.a,{exact:!0,path:"/signup",children:Object(h.jsx)(u,{})})]})})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),i(t),c(t),r(t),s(t)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),p()}},[[61,1,2]]]);
//# sourceMappingURL=main.19300ed9.chunk.js.map