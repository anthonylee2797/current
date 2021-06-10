(window.webpackJsonpundefined=window.webpackJsonpundefined||[]).push([[0],{19:function(e,a,t){e.exports=t(36)},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(14),r=t.n(c),u=t(15),i=t(16),s=t(18),o=t(17),m=t(1),v=t(2),d=function(e){var a=e.label,t=e.placeholder,l=e.value,c=e.onChange,r=e.valid,u=e.state;return n.a.createElement("label",{className:"input"},n.a.createElement("span",{className:"input__label"},a),n.a.createElement("input",{className:"input__field",value:l,placeholder:t,onChange:function(e){return c(Object(m.a)(Object(m.a)({},u),{},{value:e.target.value}))}}),"false"===r?n.a.createElement("p",{className:"input__error"},"This field is incorrect"):null)},b=function(e){var a=e.label,t=e.value,l=e.onChange,c=e.options;return n.a.createElement("div",{className:"select"},n.a.createElement("label",null,n.a.createElement("span",{className:"select__label"},a),n.a.createElement("select",{className:"select__field",value:t,onChange:function(e){return l(e.target.value)}},c.map((function(e){return n.a.createElement("option",{className:"select__option",value:e},e)})))))},f=t(4),p=function(e){var a=Object(l.useState)(null),t=Object(v.a)(a,2),c=t[0],r=t[1],u=Object(l.useState)(!0),i=Object(v.a)(u,2),s=i[0],o=i[1],m=e.delay||0,d=e.myKey||"";return Object(l.useEffect)((function(){return null!==c&&clearTimeout(c),r(setTimeout((function(){o(!1)}),m)),function(){o(!0),clearTimeout(c)}}),[d]),s?n.a.createElement("div",{style:{visibility:"hidden"}},e.children):n.a.createElement(f.Motion,{key:d,defaultStyle:{x:-200,opacity:0},style:{x:Object(f.spring)(0),opacity:Object(f.spring)(1,{stiffness:100,damping:40})}},(function(a){var t="";return"top"===e.from&&(t="translateY(".concat(a.x,"px)")),"bottom"===e.from&&(t="translateY(".concat(-a.x,"px)")),"left"===e.from&&(t="translateX(".concat(a.x,"px)")),"right"===e.from&&(t="translateX(".concat(-a.x,"px)")),n.a.createElement("div",{style:{transform:t,opacity:a.opacity}},e.children)}))},O=function(e){var a=e.formStatus;return"Success"===a?n.a.createElement(p,{myKey:"Success",delay:300,from:"left"},n.a.createElement("h1",{className:"animation-success"},"Success")):"Error"===a?n.a.createElement(p,{myKey:"error",delay:300,from:"left"},n.a.createElement("h1",{className:"animation-error"},"Error")):null},j=function(){var e=Object(l.useState)({value:"",valid:!0}),a=Object(v.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)({value:"",valid:!0}),u=Object(v.a)(r,2),i=u[0],s=u[1],o=Object(l.useState)("Individual"),f=Object(v.a)(o,2),p=f[0],j=f[1],E=Object(l.useState)({value:"",valid:!0}),h=Object(v.a)(E,2),y=h[0],g=h[1],S=Object(l.useState)("Sign Up"),N=Object(v.a)(S,2),x=N[0],C=N[1],_=Object(l.useState)(!0),T=Object(v.a)(_,2),w=T[0],k=T[1];return Object(l.useEffect)((function(){"false"===t.valid||"false"===i.valid||"false"===y.valid?C("Error"):"true"===t.valid&&"true"===i.valid&&"true"===y.valid?C("Success"):"Sign Up"===x&&console.log("")}),[w]),n.a.createElement("div",null,n.a.createElement("div",{className:"title"},n.a.createElement("h1",{className:"title-text"},"JOIN CURRENT TODAY")),n.a.createElement("div",{className:"line"}),n.a.createElement("form",{className:"form"},n.a.createElement(d,{valid:t.valid,value:t.value,label:"Your Name",placeholder:"Who are you?",state:t,onChange:c}),n.a.createElement(d,{valid:i.valid,value:i.value,label:"Your Email",placeholder:"you@gmail.com",state:i,onChange:s}),n.a.createElement(b,{value:p,options:["Individual","Parent","Teen"],label:"Account Type",onChange:j}),n.a.createElement(d,{valid:y.valid,value:y.value,label:"Message",placeholder:"How did you hear about Current",state:y,onChange:g}),n.a.createElement("button",{className:"button",onClick:function(e){e.preventDefault(),function(){0===t.value.length?c(Object(m.a)(Object(m.a)({},t),{},{valid:"false"})):c(Object(m.a)(Object(m.a)({},t),{},{valid:"true"}));/\S+@\S+\.\S+/.test(i.value)?s(Object(m.a)(Object(m.a)({},i),{},{valid:"true"})):s(Object(m.a)(Object(m.a)({},i),{},{valid:"false"}));0===y.value.length?g(Object(m.a)(Object(m.a)({},y),{},{valid:"false"})):g(Object(m.a)(Object(m.a)({},y),{},{valid:"true"}))}(),k(!w)},type:"submit"},"Sign Up"),n.a.createElement(O,{formStatus:x})))};t(34),t(35);var E=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"index"},n.a.createElement(j,null))}}]),t}(n.a.Component);E.defaultProps={};var h=E;r.a.render(n.a.createElement(h,null),document.getElementById("app"))}},[[19,1,2]]]);
//# sourceMappingURL=main.6c535d1c.chunk.js.map