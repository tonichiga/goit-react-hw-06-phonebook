(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={addButton:"ButtonAddContact_addButton__39UQD"}},17:function(t,e,n){t.exports={list:"VisibileContacts_list__1-t-3"}},26:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(5),r=n.n(o),i=(n(26),n(11)),s=n(12),u=n(13),l=n(21),d=n(18),b=n(14),m=n.n(b),j=n(2),h=n(1),p=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.reset=function(){t.setState({name:"",number:""})},t.hanldesubmit=function(e){e.preventDefault(),t.props.onSubmit({name:t.state.name,number:t.state.number,id:Date.now()}),t.reset()},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.hanldesubmit,children:[Object(h.jsx)("p",{children:"Name"}),Object(h.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.name,name:"name"}),Object(h.jsx)("p",{children:"Number"}),Object(h.jsx)("input",{type:"number",onChange:this.handleChange,value:this.state.number,name:"number"}),Object(h.jsx)("button",{type:"submit",className:m.a.addButton,children:"Add contact"})]})}}]),n}(a.Component),f=Object(j.b)(null,(function(t){return{onSubmit:function(e){return t(function(t){return{type:"addContact",payload:t}}(e))}}}))(p),O=n(20),C=n(4),x=n.n(C),g=function(t){var e=t.name,n=t.number,a=t.deleteContact,c=t.id;return Object(h.jsxs)("li",{className:x.a.contactElement,children:[Object(h.jsxs)("div",{className:x.a.contactWrapper,children:[Object(h.jsx)("p",{className:x.a.contactName,children:e}),Object(h.jsx)("p",{children:n})]}),Object(h.jsx)("button",{className:x.a.contactButton,onClick:function(){return a(c)},children:"Delete"})]})},v=n(17),_=n.n(v),y=Object(j.b)((function(t){return{data:t}}),(function(t){return{deleteContact:function(e){return t(function(t){return{type:"deleteContacts",payload:t}}(e))}}}))((function(t){var e=t.data,n=t.deleteContact,c=Object(a.useState)(""),o=Object(O.a)(c,2),r=o[0],i=o[1],s=(console.log("data:",e),e.filter((function(t){return t.name===r})));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)("p",{children:"Find contact"}),Object(h.jsx)("input",{type:"text",placeholder:"enter name",onChange:function(t){i(t.target.value)},value:r}),Object(h.jsx)("p",{children:s.map((function(t){return t.name}))}),Object(h.jsx)("ul",{className:_.a.list,children:e.map((function(t){return Object(h.jsx)(g,{name:t.name,number:t.number,deleteContact:n,id:t.id},t.id)}))})]})})),N=function(t){t.value,t.onGetContact;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(f,{}),Object(h.jsx)(y,{})]})},B=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))},S=n(19),k=n(6),w=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],F=Object(k.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case"contact":return t;case"addContact":return[].concat(Object(S.a)(t),[a]);case"deleteContacts":return t.filter((function(t){return t.id!==a}));default:return t}}));console.log(F.getState()),r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(j.a,{store:F,children:Object(h.jsx)(N,{})})}),document.getElementById("root")),B()},4:function(t,e,n){t.exports={contactElement:"VisibileContactsComponent_contactElement__hcH2C",contactName:"VisibileContactsComponent_contactName__2M975",contactButton:"VisibileContactsComponent_contactButton__2QOB5",contactWrapper:"VisibileContactsComponent_contactWrapper__zdpd6"}}},[[36,1,2]]]);
//# sourceMappingURL=main.a2a8a639.chunk.js.map