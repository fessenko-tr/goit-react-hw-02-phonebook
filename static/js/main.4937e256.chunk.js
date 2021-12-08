(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),o=(n(16),n(11)),s=n(3),u=n(4),l=n(6),d=n(5),b=(n(17),n(9)),h=n(0),m=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState((function(){return Object(b.a)({},a,c)}))},t.submitNewContact=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.addNewContact(a,c),t.clearForm()},t.clearForm=function(){t.setState((function(){return{name:"",number:""}}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.submitNewContact,children:[Object(h.jsxs)("label",{children:["NAME",Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(h.jsxs)("label",{children:["PHONE",Object(h.jsx)("input",{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(h.jsx)("button",{type:"submit",children:"add contact"})]})}}]),n}(a.Component),j=m;var f=function(t){var e=t.id,n=t.name,a=t.number,c=t.deleteFunction;return Object(h.jsxs)("li",{children:[Object(h.jsx)("p",{children:"".concat(n,": ").concat(a)}),Object(h.jsx)("button",{onClick:function(){c(e)},children:"DELETE"})]})};var p=function(t){var e=t.contactsList,n=t.deleteContactBtn,a=e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsx)(f,{id:e,name:a,number:c,deleteFunction:n},e)}));return Object(h.jsx)("ul",{children:a})};var v=function(t){var e=t.value,n=t.updateFilterFunc;return Object(h.jsxs)("label",{children:["Find contact by name",Object(h.jsx)("input",{value:e,onChange:n})]})},O=n(10),C=n.n(O),g=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addNewContact=function(e,n){var a=t.state.contacts;t.setState((function(t){if(!a.find((function(t){return t.name===e})))return{contacts:[].concat(Object(o.a)(t.contacts),[{id:C.a.generate(),name:e,number:n}])};alert("".concat(e," is already in contacts."))}))},t.deleteContact=function(e){var n=t.state.contacts;t.setState({contacts:n.filter((function(t){return t.id!==e}))})},t.updateFilter=function(e){var n=e.currentTarget.value;t.setState((function(){return{filter:n}}))},t.getFilteredContacs=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getFilteredContacs(),e=this.state.filter;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(j,{addNewContact:this.addNewContact}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(v,{value:e,updateFilterFunc:this.updateFilter}),Object(h.jsx)(p,{contactsList:t,deleteContactBtn:this.deleteContact})]})}}]),n}(a.Component),x=g,F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),F()}},[[27,1,2]]]);
//# sourceMappingURL=main.4937e256.chunk.js.map