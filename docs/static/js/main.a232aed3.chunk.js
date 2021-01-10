(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{44:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a.n(c),s=a(25),i=a.n(s),o=(a(44),a(17)),l=a(16),u=a(6),j=a(27),d=a(7),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(o.a)(t,2),n=a[0],r=a[1],s=function(){r(e)},i=function(e){var t=e.target;r(Object(d.a)(Object(d.a)({},n),{},Object(j.a)({},t.name,t.value)))};return[n,i,s]},p=a(14),h=a(24),m=a.n(h),O=a(32),x=a(33),f=a.n(x),g="[Auth] Login",v="[Auth] Logout",_="[UI] Set Error",N="[UI] Unset Error",w="[UI] Start loading",y="[UI] Finish loading",E=a(23);a(55),a(51);E.a.initializeApp({apiKey:"AIzaSyBP76lutRf_B0SPlEssvTVNRAOIZuJ0ua0",authDomain:"cra-journal.firebaseapp.com",projectId:"cra-journal",storageBucket:"cra-journal.appspot.com",messagingSenderId:"525580294101",appId:"1:525580294101:web:9592411d94e3ff97b40f5c"});E.a.firestore();var S=new E.a.auth.GoogleAuthProvider,C=function(e){return{type:_,payload:e}},k=function(){return{type:y}},A=function(e,t){return function(a){a({type:w}),E.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(I(t.uid,t.displayName)),a(k())})).catch((function(e){f.a.fire("Error",e.message,"error"),a(k())}))}},I=function(e,t){return{type:g,payload:{uid:e,displayName:t}}},P=function(){return{type:v}};var L=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.ui})).loading,a=b({email:"",password:""}),c=Object(o.a)(a,3),r=c[0],s=c[1],i=(c[2],r.email),u=r.password;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{className:"auth__title",children:"Login"}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(A(i,u))},children:[Object(n.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:s}),Object(n.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:u,onChange:s}),Object(n.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",disabled:t,children:"Ingresar"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"auth__social-networks",children:[Object(n.jsx)("p",{children:"Login with social networks:"}),Object(n.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){E.a.auth().signInWithPopup(S).then((function(t){var a=t.user;e(I(a.uid,a.displayName))}))}))},children:[Object(n.jsx)("div",{className:"google-icon-wrapper",children:Object(n.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(n.jsx)("p",{className:"btn-text",children:Object(n.jsx)("b",{children:"Sign in with google"})})]})]}),Object(n.jsx)(l.b,{className:"link",to:"/auth/register",children:"Create new account"})]})]})},U=a(38);var W=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e})).ui.msgError,a=b({name:"",email:"",password:"",password2:""}),c=Object(o.a)(a,3),r=c[0],s=c[1],i=(c[2],r.name),u=r.email,j=r.password,d=r.password2,h=function(){return 0===i.trim().length?(e(C("Name is required")),!1):U.a.isEmail(u)?j!==d||j.length<5?(e(C("Password should be at least 6 characters and match each other")),!1):(e({type:N}),!0):(e(C("Email error")),!1)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{className:"auth__title",children:"Register"}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h()&&e(function(e,t,a){return function(n){E.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(O.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:a});case 3:n(I(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){f.a.fire("Error",e.message,"error")}))}}(u,j,i))},children:[t.trim().length>0&&Object(n.jsx)("div",{className:"auth__alert-error",children:t}),Object(n.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:i,onChange:s}),Object(n.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:s}),Object(n.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:j,onChange:s}),Object(n.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:d,onChange:s}),Object(n.jsx)("button",{className:"btn btn-primary btn-block mb-5",type:"submit",children:"Register"}),Object(n.jsx)(l.b,{className:"link",to:"/auth/login",children:"Already registered?"})]})]})};var D=function(){return Object(n.jsx)("div",{className:"auth__main",children:Object(n.jsx)("div",{className:"auth__box-container",children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{exact:!0,path:"/auth/login",component:L}),Object(n.jsx)(u.b,{exact:!0,path:"/auth/register",component:W}),Object(n.jsx)(u.a,{to:"/auth/login"})]})})})};var R=function(){return Object(n.jsxs)("div",{className:"journal__entry pointer",children:[Object(n.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(https://www.online-tech-tips.com/wp-content/uploads/2020/04/WallpaperCraft.jpg.optimal.jpg)"}}),Object(n.jsxs)("div",{className:"journal__entry-body",children:[Object(n.jsx)("p",{className:"journal__entry-title",children:"Un nuevo d\xeda"}),Object(n.jsx)("p",{className:"journal__entry-content",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]}),Object(n.jsxs)("div",{className:"journal__entry-date-box",children:[Object(n.jsx)("span",{children:"Monday"}),Object(n.jsx)("h4",{children:"28"})]})]})};var B=function(){return Object(n.jsx)("div",{className:"journal__entries",children:[1,2,3,4,5].map((function(e){return Object(n.jsx)(R,{},e)}))})};var z=function(){var e=Object(p.b)();return Object(n.jsxs)("aside",{className:"journal__sidebar",children:[Object(n.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(n.jsxs)("h3",{className:"mt-5",children:[Object(n.jsx)("i",{className:"far fa-moon"}),Object(n.jsx)("span",{children:" Andres"})]}),Object(n.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(O.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.auth().signOut();case 2:t(P());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(n.jsxs)("div",{className:"journal__new-entry",children:[Object(n.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(n.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(n.jsx)(B,{})]})};var F=function(){return Object(n.jsxs)("div",{className:"notes__appbar",children:[Object(n.jsx)("span",{children:"28 de agosto 2020"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:"btn",children:"Picture"}),Object(n.jsx)("button",{className:"btn",children:"Save"})]})]})};var G=function(){return Object(n.jsxs)("div",{className:"notes__main-content",children:[Object(n.jsx)(F,{}),Object(n.jsxs)("div",{className:"notes__content",children:[Object(n.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off"}),Object(n.jsx)("textarea",{placeholder:"What's happened today",className:"notes__textarea"}),Object(n.jsx)("div",{className:"notes__image",children:Object(n.jsx)("img",{src:"https://www.online-tech-tips.com/wp-content/uploads/2020/04/WallpaperCraft.jpg.optimal.jpg",alt:"Imagen"})})]})]})};var J=function(){return Object(n.jsxs)("div",{className:"journal__main-content",children:[Object(n.jsx)(z,{}),Object(n.jsx)("main",{children:Object(n.jsx)(G,{})})]})},M=a(28);var T=function(e){var t=e.isAuthenticated,a=e.component,c=Object(M.a)(e,["isAuthenticated","component"]);return Object(n.jsx)(u.b,Object(d.a)(Object(d.a)({},c),{},{component:function(e){return t?Object(n.jsx)(u.a,{to:"/"}):Object(n.jsx)(a,Object(d.a)({},e))}}))};var V=function(e){var t=e.isAuthenticated,a=e.component,c=Object(M.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",c.location.pathname),Object(n.jsx)(u.b,Object(d.a)(Object(d.a)({},c),{},{component:function(e){return t?Object(n.jsx)(a,Object(d.a)({},e)):Object(n.jsx)(u.a,{to:"/login"})}}))};var X=function(){var e=Object(p.b)(),t=Object(c.useState)(!0),a=Object(o.a)(t,2),r=a[0],s=a[1],i=Object(c.useState)(!1),j=Object(o.a)(i,2),d=j[0],b=j[1];return Object(c.useEffect)((function(){E.a.auth().onAuthStateChanged((function(t){(null===t||void 0===t?void 0:t.uid)?(e(I(t.uid,t.displayName)),b(!0)):b(!1),s(!1)}))}),[e,s,b]),r?Object(n.jsx)("div",{children:"Espere..."}):Object(n.jsx)("div",{children:Object(n.jsx)(l.a,{children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(T,{isAuthenticated:d,path:"/auth",component:D}),Object(n.jsx)(V,{isAuthenticated:d,exact:!0,path:"/",component:J}),Object(n.jsx)(u.a,{to:"/auth/login"})]})})})},q=a(18);var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{uid:t.payload.uid,name:t.payload.displayName};case v:return{};default:return e}},Z=a(37),H={loading:!1,msgError:""},Q="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d,Y=Object(q.c)({auth:K,ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(d.a)(Object(d.a)({},e),{},{msgError:t.payload});case N:return Object(d.a)(Object(d.a)({},e),{},{msgError:""});case w:return Object(d.a)(Object(d.a)({},e),{},{loading:!0});case y:return Object(d.a)(Object(d.a)({},e),{},{loading:!1});default:return e}}}),$=Object(q.e)(Y,Q(Object(q.a)(Z.a)));var ee=function(){return Object(n.jsx)(p.a,{store:$,children:Object(n.jsx)(X,{})})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(ee,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.a232aed3.chunk.js.map