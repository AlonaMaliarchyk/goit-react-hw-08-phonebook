"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[932],{9932:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var a=t(2791),r=t(9434),s=t(3634),i="ContactItem_delBtn__1B6Ri",c="ContactItem_contactItem__Z4FuP",o=t(3329),u=function(e){var n=e.name,t=e.number,a=e.id,u=(0,r.I0)();return(0,o.jsxs)("tr",{className:c,children:[(0,o.jsxs)("td",{children:[n," \xa0"]}),(0,o.jsxs)("td",{children:[t,"\xa0"]}),(0,o.jsx)("td",{children:(0,o.jsx)("button",{className:i,type:"button",onClick:function(){return function(e){u((0,s.GK)(e))}(a)},children:(0,o.jsx)("i",{"aria-hidden":"true",className:"trash alternate icon"})})})]})},d=t(5280),l=function(){var e=(0,r.v9)(d.DI),n=(0,r.I0)();return(0,a.useEffect)((function(){n((0,s.yF)())}),[n]),(0,o.jsx)("div",{children:(0,o.jsx)("table",{children:(0,o.jsx)("tbody",{children:e.map((function(e){return(0,o.jsx)(u,{id:e.id,name:e.name,number:e.number},e.id)}))})})})},m=t(4942),h=t(1413),p=t(9439),x={name:"eeee",email:"ccc",password:"8888"},_={input:"ContactForm_input__Bl93P",addBtn:"ContactForm_addBtn__CACuJ"},b=function(){var e=(0,r.I0)(),n=(0,a.useState)((0,h.Z)({},x)),t=(0,p.Z)(n,2)[1],i=(0,r.v9)(d.Af),c=function(e){var n=e.target,a=n.name,r=n.value;t((function(e){return(0,h.Z)((0,h.Z)({},e),{},(0,m.Z)({},a,r))}))};return(0,o.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.target,a=t.elements.name.value,r=t.elements.number.value;i.some((function(e){return e.name.toLowerCase()===a.toLowerCase()}))?alert(a+" is already in contacts"):(e((0,s.uK)({name:a,number:r})),t.reset())},className:_.wrapInput,children:[(0,o.jsx)("label",{children:"Name "}),(0,o.jsx)("input",{className:_.input,type:"text",onChange:c,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,o.jsx)("label",{children:"Number"}),(0,o.jsx)("input",{className:_.input,type:"tel",onChange:c,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,o.jsx)("button",{className:_.addBtn,type:"submit",children:"Add contact"})]})},f=t(9585),j="Filter_input__pxg9Q",v="Filter_filterWrap__6osAr",C=function(){var e=(0,r.I0)();return(0,o.jsxs)("div",{className:v,children:[(0,o.jsx)("label",{children:"Find a contact by name "}),(0,o.jsx)("input",{className:j,type:"text",onChange:function(n){return t=n.target.value,void e((0,f.bI)(t));var t},name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},g=t(8447),y=function(){return(0,o.jsxs)("div",{className:g.Z.form,children:[(0,o.jsx)("h1",{children:"Phonebook"}),(0,o.jsx)(b,{}),(0,o.jsx)("h2",{children:"Contacts"}),(0,o.jsx)(C,{}),(0,o.jsx)(l,{})]})},A=function(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(y,{})})}},8447:function(e,n){n.Z={form:"Form_form__VyJzw",btn:"Form_btn__PhgFt"}}}]);
//# sourceMappingURL=932.ca368a05.chunk.js.map