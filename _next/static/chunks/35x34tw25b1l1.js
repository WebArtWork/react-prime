(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var l=e.i(91398),t=e.i(91788);e.s(["CodeHighlight",0,function(e){let i=(0,t.useRef)(),o=`language-${e.lang||"jsx"}`;return(0,t.useEffect)(()=>{window.Prism.highlightElement(i.current)},[]),(0,l.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,l.jsxs)("code",{ref:i,className:o,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var l=e.i(91398),t=e.i(3935),i=e.i(58678),o=e.i(3828),r=e.i(91788),n=e.i(51551),s=e.i(72124),a=e.i(41158),d=e.i(87914),c=e.i(28137);let q=e=>{let i=(0,r.useContext)(d.default),{id:s,data:q,name:p,description:u,allowLink:h=!0}=e,m=s.startsWith("pt."),b=(0,o.useRouter)();if(n.ObjectUtils.isNotEmpty(q)){let o=Object.keys(q[0]),d=(e,l)=>{let t=document.getElementById(e);t&&t.parentElement.scrollIntoView({block:"start",behavior:l})},f=(e,i,o)=>{if(h&&e)return e.split("|").map((e,n)=>{if(e.includes(p)){let t=e.indexOf(p),i=e.substring(t).replace(/(\[|\]|<|>).*$/gm,"").trim(),o=p===i?`api.${p}`:`api.${p}.${i===`${p}Props`?"props":i}`;return(0,l.jsxs)(r.default.Fragment,{children:[0!==n?"|":"",(0,l.jsx)(a.default,{href:b.basePath+b.pathname+`#${o}`,target:"_self",children:(0,l.jsx)("a",{onClick:()=>d(o,"smooth"),children:e})})]},n)}return(0,l.jsxs)(r.default.Fragment,{children:[0!==n?"|":"",i?(0,l.jsxs)("span",{id:s+"."+e,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!o}),title:o,children:[e,(0,l.jsx)(a.default,{href:b.basePath+b.pathname+`#${s+"."+e}`,target:"_self",children:(0,l.jsx)("a",{onClick:()=>d(s+"."+e),className:"doc-option-link",children:(0,l.jsx)("i",{className:"pi pi-link"})})})]}):e]},n)});let n=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return i?(0,l.jsxs)("span",{id:s+"."+n,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!o}),title:o,children:[n,(0,l.jsx)(a.default,{href:b.basePath+b.pathname+`#${s+"."+n}`,target:"_self",children:(0,l.jsx)("a",{onClick:()=>d(s+"."+n),className:"doc-option-link",children:(0,l.jsx)("i",{className:"pi pi-link"})})})]}):n},x=(0,l.jsx)(r.default.Fragment,{children:m?(0,l.jsx)("tr",{children:o.map(e=>(0,l.jsx)("th",{children:e},e))}):(0,l.jsx)("tr",{children:o.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,l.jsx)("th",{children:e},e))})}),g=(0,l.jsx)(r.default.Fragment,{children:q.map((e,o)=>{if(m){let{value:t,label:i,description:r}=e;return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:t}),(0,l.jsx)("td",{children:i}),(0,l.jsx)("td",{children:r})]},o)}return(0,l.jsx)("tr",{children:Object.entries(e).map(([o,r],s)=>"readonly"!==o&&"optional"!==o&&"deprecated"!==o&&(0,l.jsx)("td",{children:"parameters"===o?r.map((e,t)=>(0,l.jsxs)("div",{className:"doc-option-params",children:[(0,l.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,l.jsx)("span",{className:"doc-option-parameter-type",children:f(e.type)}),(0,l.jsx)("br",{})]},t)):"default"===o?(0,l.jsx)("div",{className:(0,t.classNames)("doc-option-default",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:n.ObjectUtils.isEmpty(r)?"null":f(r,"name"===o,e.deprecated)}):"type"===o?(0,l.jsx)("span",{className:"doc-option-type",children:f(r,"name"===o,e.deprecated)}):"returnType"===o?(0,l.jsx)("div",{className:(0,t.classNames)("doc-option-returnType",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:f(r,"name"===o,e.deprecated)}):"description"===o||"values"===o?(0,l.jsx)("span",{className:"doc-option-description",children:r}):f(r,"name"===o,e.deprecated)},s))},o)})});return(0,l.jsxs)(r.default.Fragment,{children:[(0,l.jsx)(c.DocSectionText,{...e,children:(0,l.jsx)("p",{children:u})}),(0,l.jsx)("div",{className:"doc-tablewrapper",children:(0,l.jsxs)("table",{className:"doc-table",children:[(0,l.jsx)("thead",{children:x}),(0,l.jsx)("tbody",{children:g})]})})]},s)}return null};e.s(["default",0,q],88850);var p=e.i(71864),u=e.i(38076);function h(e){let{doc:t,header:i}=e,o=e.apiExclude,a=t.reduce((e,t)=>{let i,r=t.split("."),a=(i=r[0])&&i[0].toUpperCase()+i.slice(1)||"",d=s.default[a.toLowerCase()],c=(e,l)=>o&&o[e]&&o[e].includes(l),p=e=>o&&o[e]&&"excludeAll"===o[e];if(d){let i=(e,t)=>{if(n.ObjectUtils.isNotEmpty(d.events)&&n.ObjectUtils.isNotEmpty(d.events.values)&&!p("events")){let i={id:`api.${t}.events`,label:"Events",description:d.events.description,children:[]};Object.entries(d.events.values).forEach(([e,o])=>{let[r,n]=[`api.${t}.${e}`,e];c("event",e)||i.children.push({id:r,label:n,component:e=>(0,l.jsx)(q,{name:t,data:o.props,description:(0,l.jsxs)(l.Fragment,{children:[o.description," See ",(0,l.jsx)("i",{children:o.relatedProp}),"."]}),...e})})}),e.push(i)}if(n.ObjectUtils.isNotEmpty(d.interfaces)&&n.ObjectUtils.isNotEmpty(d.interfaces.values)&&!p("interfaces")){let i={id:`api.${t}.interfaces`,label:"Interfaces",description:d.interfaces.description,children:[]};Object.entries(d.interfaces.values).forEach(([e,o])=>{let[r,n]=[`api.${t}.${e}`,e];c("interfaces",e)||i.children.push({id:r,label:n,component:e=>(0,l.jsx)(q,{name:t,data:o.props,description:(0,l.jsxs)(l.Fragment,{children:[o.description," ",o.extendedTypes&&(0,l.jsxs)(l.Fragment,{children:["Extends ",(0,l.jsx)("i",{children:o.extendedTypes}),"."]})]}),...e})})}),e.push(i)}if(n.ObjectUtils.isNotEmpty(d.types)&&n.ObjectUtils.isNotEmpty(d.types.values)&&!p("types")){let i={id:`api.${t}.types`,label:"Types",description:d.types.description,children:[]};Object.entries(d.types.values).forEach(([e,o])=>{let[r,n]=[`api.${t}.${e}`,e];c("types",e)||i.children.push({id:r,label:n,component:e=>(0,l.jsx)(q,{name:t,data:[o],allowLink:!1,...e})})}),e.push(i)}};if(3===r.length){let t=r[1],i=r[2];if("functions"===t){let o=d[t].values[i],r={id:`api.${a}`,label:a,children:[]},[s,c]=[`api.${a}.function`,"Function"],p=Object.entries(o).reduce((e,[l,t])=>("description"!==l&&(e[l]=t),e),{});r.children.push({id:s,label:c,component:e=>(0,l.jsx)(q,{name:a,data:[p],description:o.description,...e})});let u=o.parameters&&o.parameters.map(e=>e.type);if(n.ObjectUtils.isNotEmpty(d.interfaces)&&n.ObjectUtils.isNotEmpty(d.interfaces.values)){let e={id:`api.${a}.interfaces`,label:"Interfaces",description:d.interfaces.description,children:[]};Object.entries(d.interfaces.values).forEach(([t,i])=>{if(u.includes(t)){let[o,r]=[`api.${a}.${t}`,t],s={id:o,label:r,description:(0,l.jsxs)(l.Fragment,{children:[i.description," ",i.extendedTypes&&(0,l.jsxs)(l.Fragment,{children:["Extends ",(0,l.jsx)("i",{children:i.extendedTypes}),"."]})]}),children:[]};n.ObjectUtils.isNotEmpty(i.props)&&s.children.push({id:`${o}.props`,label:"Props",component:e=>(0,l.jsx)(q,{data:i.props,...e})}),n.ObjectUtils.isNotEmpty(i.callbacks)&&s.children.push({id:`${o}.callbacks`,label:"Callbacks",component:e=>(0,l.jsx)(q,{data:i.callbacks,...e})}),e.children.push(s)}}),n.ObjectUtils.isNotEmpty(e.children)&&r.children.push(e)}e.push(r)}}else d.components&&Object.entries(d.components).forEach(([o,r])=>{let s={id:`api.${o}`,label:o,description:r.description,children:[]};if(n.ObjectUtils.isNotEmpty(r.props)&&n.ObjectUtils.isNotEmpty(r.props.values)&&!p("props")){let[e,t]=[`api.${o}.props`,"Props"];if(c("props",o))return;s.children.push({id:e,label:t,component:e=>(0,l.jsx)(q,{name:o,data:r.props.values,description:r.props.description,...e})})}if(n.ObjectUtils.isNotEmpty(r.callbacks)&&n.ObjectUtils.isNotEmpty(r.callbacks.values)&&!p("callbacks")){let[e,t]=[`api.${o}.callbacks`,"Callbacks"];if(c("callbacks",o))return;s.children.push({id:e,label:t,component:e=>(0,l.jsx)(q,{name:o,data:r.callbacks.values,description:r.callbacks.description,...e})})}if(n.ObjectUtils.isNotEmpty(r.methods)&&n.ObjectUtils.isNotEmpty(r.methods.values)&&!p("methods")){let[e,t]=[`api.${o}.methods`,"Methods"];if(c("methods",o))return;s.children.push({id:e,label:t,component:e=>(0,l.jsx)(q,{name:o,data:r.methods.values,description:r.methods.description,...e})})}o.toLocaleLowerCase()===t.toLowerCase()&&i(s.children,o),e.push(s)}),d.model&&Object.entries(d.model).forEach(([o,r])=>{let s={id:`api.${o}`,label:o,description:r.description,children:[]};if(n.ObjectUtils.isNotEmpty(r.props)&&n.ObjectUtils.isNotEmpty(r.props.values)&&!p("props")){let[e,t]=[`api.${o}.props`,"Props"];if(c("props",o))return;s.children.push({id:e,label:t,component:e=>(0,l.jsx)(q,{name:o,data:r.props.values,description:r.props.description,...e})})}o.toLocaleLowerCase()===t.toLowerCase()&&i(s.children,o),e.push(s)}),d.components||d.model||i(e,a)}return e},[]);return(0,r.useEffect)(()=>{let e=window.location.hash.substring(1),l=document.getElementById(e);setTimeout(()=>{l&&l.scrollIntoView({block:"start"})},1)},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"doc-main",children:[(0,l.jsxs)("div",{className:"doc-intro",children:[(0,l.jsxs)("h1",{children:[i," API"]}),(0,l.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",i," module."]})]}),(0,l.jsx)(u.DocSections,{docs:a})]}),(0,l.jsx)(p.DocSectionNav,{docs:a})]})}e.s(["DocComponent",0,function(e){let n,[s,a]=(0,r.useState)(0),d=(0,o.useRouter)();n=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let c=e=>{a(e),d.replace(d.pathname)};return(0,r.useEffect)(()=>{d.asPath.includes("#api")&&a(1),d.asPath.includes("#pt")&&a(3)},[d.asPath]),(0,l.jsxs)("div",{className:(0,t.classNames)(e.className,"doc-component"),children:[(0,l.jsxs)(i.default,{children:[(0,l.jsx)("title",{children:e.title}),(0,l.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,l.jsxs)("ul",{className:"doc-tabmenu",children:[(0,l.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":0===s}),children:(0,l.jsx)("button",{type:"button",onClick:()=>c(0),children:n})}),e.apiDocs?(0,l.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":1===s}),children:(0,l.jsx)("button",{type:"button",onClick:()=>c(1),children:"API"})}):null,e.themingDocs?(0,l.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":2===s}),children:(0,l.jsx)("button",{type:"button",onClick:()=>c(2),children:"THEMING"})}):null,e.ptDocs?(0,l.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":3===s}),children:(0,l.jsx)("button",{type:"button",onClick:()=>c(3),children:"PASS THROUGH"})}):null]}),(0,l.jsxs)("div",{className:"doc-tabpanels",children:[0===s?(0,l.jsxs)("div",{className:"doc-tabpanel",children:[(0,l.jsxs)("div",{className:"doc-main",children:[(0,l.jsxs)("div",{className:"doc-intro",children:[(0,l.jsx)("h1",{children:e.header}),(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,l.jsx)(u.DocSections,{docs:e.componentDocs})]}),(0,l.jsx)(p.DocSectionNav,{docs:e.componentDocs})]}):null,1===s?(0,l.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,l.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"doc-main",children:(0,l.jsxs)("div",{className:"doc-intro",children:[(0,l.jsxs)("h1",{children:[e.header," API"]}),(0,l.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===s?(0,l.jsx)(l.Fragment,{children:e.themingDocs?(0,l.jsxs)("div",{className:"doc-tabpanel",children:[(0,l.jsxs)("div",{className:"doc-main",children:[(0,l.jsx)("div",{className:"doc-intro",children:(0,l.jsxs)("h1",{children:[e.header," Theming"]})}),(0,l.jsx)(u.DocSections,{docs:e.themingDocs})]}),(0,l.jsx)(p.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===s?(0,l.jsx)(l.Fragment,{children:e.ptDocs?(0,l.jsxs)("div",{className:"doc-tabpanel",children:[(0,l.jsxs)("div",{className:"doc-main",children:[(0,l.jsxs)("div",{className:"doc-intro",children:[(0,l.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,l.jsx)("p",{children:e.ptDescription})]}),(0,l.jsx)(u.DocSections,{docs:e.ptDocs})]}),(0,l.jsx)(p.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},3828,(e,l,t)=>{l.exports=e.r(26990)},10151,e=>{"use strict";var l=e.i(91398),t=e.i(88850),i=e.i(82948),o=e.i(28137);function r(){return(0,l.jsx)(o.DocSectionText,{id:"accessibility",label:"Accessibility",children:(0,l.jsx)("p",{children:"Quill performs generally well in terms of accessibility. The elements in the toolbar can be tabbed and have the necessary ARIA roles/attributes for screen readers."})})}var n=e.i(5180),s=e.i(91788),a=e.i(10836),d=e.i(15498),c=e.i(60150),q=e.i(20484),p=e.i(71834),u=e.i(45543),h=e.i(3935);let m=`
/*!
 * Quill Editor v2.0.2
 * https://quilljs.com
 * Copyright (c) 2017-2024, Slab
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
.ql-container {
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  height: 100%;
  margin: 0;
  position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
  visibility: hidden;
}
.ql-container:not(.ql-disabled) li[data-list="checked"] > .ql-ui,
.ql-container:not(.ql-disabled) li[data-list="unchecked"] > .ql-ui {
  cursor: pointer;
}
.ql-clipboard {
  left: -100000px;
  height: 1px;
  overflow-y: hidden;
  position: absolute;
  top: 50%;
}
.ql-clipboard p {
  margin: 0;
  padding: 0;
}
.ql-editor {
  box-sizing: border-box;
  counter-reset: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
    list-9;
  line-height: 1.42;
  height: 100%;
  outline: none;
  overflow-y: auto;
  padding: 12px 15px;
  tab-size: 4;
  -moz-tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.ql-editor > * {
  cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
  margin: 0;
  padding: 0;
}
@supports (counter-set: none) {
  .ql-editor p,
  .ql-editor h1,
  .ql-editor h2,
  .ql-editor h3,
  .ql-editor h4,
  .ql-editor h5,
  .ql-editor h6 {
    counter-set: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
      list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor p,
  .ql-editor h1,
  .ql-editor h2,
  .ql-editor h3,
  .ql-editor h4,
  .ql-editor h5,
  .ql-editor h6 {
    counter-reset: list-0 list-1 list-2 list-3 list-4 list-5 list-6 list-7
      list-8 list-9;
  }
}
.ql-editor table {
  border-collapse: collapse;
}
.ql-editor td {
  border: 1px solid #000;
  padding: 2px 5px;
}
.ql-editor ol {
  padding-left: 1.5em;
}
.ql-editor li {
  list-style-type: none;
  padding-left: 1.5em;
  position: relative;
}
.ql-editor li > .ql-ui:before {
  display: inline-block;
  margin-left: -1.5em;
  margin-right: 0.3em;
  text-align: right;
  white-space: nowrap;
  width: 1.2em;
}
.ql-editor li[data-list="checked"] > .ql-ui,
.ql-editor li[data-list="unchecked"] > .ql-ui {
  color: #777;
}
.ql-editor li[data-list="bullet"] > .ql-ui:before {
  content: "\\2022";
}
.ql-editor li[data-list="checked"] > .ql-ui:before {
  content: "\\2611";
}
.ql-editor li[data-list="unchecked"] > .ql-ui:before {
  content: "\\2610";
}
@supports (counter-set: none) {
  .ql-editor li[data-list] {
    counter-set: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list] {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8
      list-9;
  }
}
.ql-editor li[data-list="ordered"] {
  counter-increment: list-0;
}
.ql-editor li[data-list="ordered"] > .ql-ui:before {
  content: counter(list-0, decimal) ". ";
}
.ql-editor li[data-list="ordered"].ql-indent-1 {
  counter-increment: list-1;
}
.ql-editor li[data-list="ordered"].ql-indent-1 > .ql-ui:before {
  content: counter(list-1, lower-alpha) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-1 {
    counter-set: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-2 {
  counter-increment: list-2;
}
.ql-editor li[data-list="ordered"].ql-indent-2 > .ql-ui:before {
  content: counter(list-2, lower-roman) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-2 {
    counter-set: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-3 {
  counter-increment: list-3;
}
.ql-editor li[data-list="ordered"].ql-indent-3 > .ql-ui:before {
  content: counter(list-3, decimal) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-3 {
    counter-set: list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-4 {
  counter-increment: list-4;
}
.ql-editor li[data-list="ordered"].ql-indent-4 > .ql-ui:before {
  content: counter(list-4, lower-alpha) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-4 {
    counter-set: list-5 list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-5 {
  counter-increment: list-5;
}
.ql-editor li[data-list="ordered"].ql-indent-5 > .ql-ui:before {
  content: counter(list-5, lower-roman) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-5 {
    counter-set: list-6 list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-6 {
  counter-increment: list-6;
}
.ql-editor li[data-list="ordered"].ql-indent-6 > .ql-ui:before {
  content: counter(list-6, decimal) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-6 {
    counter-set: list-7 list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-7 {
  counter-increment: list-7;
}
.ql-editor li[data-list="ordered"].ql-indent-7 > .ql-ui:before {
  content: counter(list-7, lower-alpha) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-7 {
    counter-set: list-8 list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-7 {
    counter-reset: list-8 list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-8 {
  counter-increment: list-8;
}
.ql-editor li[data-list="ordered"].ql-indent-8 > .ql-ui:before {
  content: counter(list-8, lower-roman) ". ";
}
@supports (counter-set: none) {
  .ql-editor li[data-list].ql-indent-8 {
    counter-set: list-9;
  }
}
@supports not (counter-set: none) {
  .ql-editor li[data-list].ql-indent-8 {
    counter-reset: list-9;
  }
}
.ql-editor li[data-list="ordered"].ql-indent-9 {
  counter-increment: list-9;
}
.ql-editor li[data-list="ordered"].ql-indent-9 > .ql-ui:before {
  content: counter(list-9, decimal) ". ";
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 3em;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 4.5em;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 3em;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 4.5em;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 6em;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 7.5em;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 6em;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 7.5em;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 9em;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 10.5em;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 9em;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 10.5em;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 12em;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 13.5em;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 12em;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 13.5em;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 15em;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 16.5em;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 15em;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 16.5em;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 18em;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 19.5em;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 18em;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 19.5em;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 21em;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 22.5em;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 21em;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 22.5em;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 24em;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 25.5em;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 24em;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 25.5em;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 27em;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 28.5em;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 27em;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 28.5em;
}
.ql-editor li.ql-direction-rtl {
  padding-right: 1.5em;
}
.ql-editor li.ql-direction-rtl > .ql-ui:before {
  margin-left: 0.3em;
  margin-right: -1.5em;
  text-align: left;
}
.ql-editor table {
  table-layout: fixed;
  width: 100%;
}
.ql-editor table td {
  outline: none;
}
.ql-editor .ql-code-block-container {
  font-family: monospace;
}
.ql-editor .ql-video {
  display: block;
  max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
  margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
  margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
  background-color: #000;
}
.ql-editor .ql-bg-red {
  background-color: #e60000;
}
.ql-editor .ql-bg-orange {
  background-color: #f90;
}
.ql-editor .ql-bg-yellow {
  background-color: #ff0;
}
.ql-editor .ql-bg-green {
  background-color: #008a00;
}
.ql-editor .ql-bg-blue {
  background-color: #06c;
}
.ql-editor .ql-bg-purple {
  background-color: #93f;
}
.ql-editor .ql-color-white {
  color: #fff;
}
.ql-editor .ql-color-red {
  color: #e60000;
}
.ql-editor .ql-color-orange {
  color: #f90;
}
.ql-editor .ql-color-yellow {
  color: #ff0;
}
.ql-editor .ql-color-green {
  color: #008a00;
}
.ql-editor .ql-color-blue {
  color: #06c;
}
.ql-editor .ql-color-purple {
  color: #93f;
}
.ql-editor .ql-font-serif {
  font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
  font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
  font-size: 0.75em;
}
.ql-editor .ql-size-large {
  font-size: 1.5em;
}
.ql-editor .ql-size-huge {
  font-size: 2.5em;
}
.ql-editor .ql-direction-rtl {
  direction: rtl;
  text-align: inherit;
}
.ql-editor .ql-align-center {
  text-align: center;
}
.ql-editor .ql-align-justify {
  text-align: justify;
}
.ql-editor .ql-align-right {
  text-align: right;
}
.ql-editor .ql-ui {
  position: absolute;
}
.ql-editor.ql-blank::before {
  color: rgba(0, 0, 0, 0.6);
  content: attr(data-placeholder);
  font-style: italic;
  left: 15px;
  pointer-events: none;
  position: absolute;
  right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
  clear: both;
  content: "";
  display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  float: left;
  height: 24px;
  padding: 3px 5px;
  width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
  float: left;
  height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
  outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type="file"],
.ql-snow .ql-toolbar input.ql-image[type="file"] {
  display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
  color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
  fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
  stroke: #06c;
}
@media (pointer: coarse) {
  .ql-snow.ql-toolbar button:hover:not(.ql-active),
  .ql-snow .ql-toolbar button:hover:not(.ql-active) {
    color: #444;
  }
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
    fill: #444;
  }
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
  .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
    stroke: #444;
  }
}
.ql-snow {
  box-sizing: border-box;
}
.ql-snow * {
  box-sizing: border-box;
}
.ql-snow .ql-hidden {
  display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
  visibility: hidden;
}
.ql-snow .ql-tooltip {
  position: absolute;
  transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
  cursor: pointer;
  text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
  transform: translateY(-10px);
}
.ql-snow .ql-formats {
  display: inline-block;
  vertical-align: middle;
}
.ql-snow .ql-formats:after {
  clear: both;
  content: "";
  display: table;
}
.ql-snow .ql-stroke {
  fill: none;
  stroke: #444;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
  fill: none;
  stroke: #444;
  stroke-miterlimit: 10;
  stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
  fill: #444;
}
.ql-snow .ql-empty {
  fill: none;
}
.ql-snow .ql-even {
  fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
  stroke-width: 1;
}
.ql-snow .ql-transparent {
  opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
  display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
  display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
  display: none;
}
.ql-snow .ql-editor h1 {
  font-size: 2em;
}
.ql-snow .ql-editor h2 {
  font-size: 1.5em;
}
.ql-snow .ql-editor h3 {
  font-size: 1.17em;
}
.ql-snow .ql-editor h4 {
  font-size: 1em;
}
.ql-snow .ql-editor h5 {
  font-size: 0.83em;
}
.ql-snow .ql-editor h6 {
  font-size: 0.67em;
}
.ql-snow .ql-editor a {
  text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
  border-left: 4px solid #ccc;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor .ql-code-block-container {
  background-color: #f0f0f0;
  border-radius: 3px;
}
.ql-snow .ql-editor .ql-code-block-container {
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 10px;
}
.ql-snow .ql-editor code {
  font-size: 85%;
  padding: 2px 4px;
}
.ql-snow .ql-editor .ql-code-block-container {
  background-color: #23241f;
  color: #f8f8f2;
  overflow: visible;
}
.ql-snow .ql-editor img {
  max-width: 100%;
}
.ql-snow .ql-picker {
  color: #444;
  display: inline-block;
  float: left;
  font-size: 14px;
  font-weight: 500;
  height: 24px;
  position: relative;
  vertical-align: middle;
}
.ql-snow .ql-picker-label {
  cursor: pointer;
  display: inline-block;
  height: 100%;
  padding-left: 8px;
  padding-right: 2px;
  position: relative;
  width: 100%;
}
.ql-snow .ql-picker-label::before {
  display: inline-block;
  line-height: 22px;
}
.ql-snow .ql-picker-options {
  background-color: #fff;
  display: none;
  min-width: 100%;
  padding: 4px 8px;
  position: absolute;
  white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
  cursor: pointer;
  display: block;
  padding-bottom: 5px;
  padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  color: #ccc;
  z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
  fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
  stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  display: block;
  margin-top: -1px;
  top: 100%;
  z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
  width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
  padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
  right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
  padding: 4px 0;
}
.ql-snow .ql-icon-picker .ql-picker-item {
  height: 24px;
  width: 24px;
  padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
  padding: 3px 5px;
  width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
  border: 1px solid transparent;
  float: left;
  height: 16px;
  margin: 2px;
  padding: 0;
  width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
  position: absolute;
  margin-top: -9px;
  right: 0;
  top: 50%;
  width: 18px;
}
.ql-snow
  .ql-picker.ql-header
  .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-font
  .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-size
  .ql-picker-label[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-header
  .ql-picker-item[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-font
  .ql-picker-item[data-label]:not([data-label=""])::before,
.ql-snow
  .ql-picker.ql-size
  .ql-picker-item[data-label]:not([data-label=""])::before {
  content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
  width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: "Normal";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: "Heading 1";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: "Heading 2";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: "Heading 3";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: "Heading 4";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: "Heading 5";
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: "Heading 6";
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  font-size: 2em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  font-size: 1.5em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  font-size: 1.17em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  font-size: 1em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  font-size: 0.83em;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  font-size: 0.67em;
}
.ql-snow .ql-picker.ql-font {
  width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: "Sans Serif";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="serif"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  content: "Serif";
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value="monospace"]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  content: "Monospace";
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="serif"]::before {
  font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value="monospace"]::before {
  font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
  width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: "Normal";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="small"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  content: "Small";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="large"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  content: "Large";
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value="huge"]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  content: "Huge";
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="small"]::before {
  font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="large"]::before {
  font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value="huge"]::before {
  font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
  background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
  background-color: #000;
}
.ql-code-block-container {
  position: relative;
}
.ql-code-block-container .ql-ui {
  right: 5px;
  top: 5px;
}
.ql-toolbar.ql-snow {
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
  margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
  border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
  border: 1px solid transparent;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
  border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
  border-top: 0;
}
.ql-snow .ql-tooltip {
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px #ddd;
  color: #444;
  padding: 5px 12px;
  white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
  content: "Visit URL:";
  line-height: 26px;
  margin-right: 8px;
}
.ql-snow .ql-tooltip input[type="text"] {
  display: none;
  border: 1px solid #ccc;
  font-size: 13px;
  height: 26px;
  margin: 0;
  padding: 3px 5px;
  width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
  display: inline-block;
  max-width: 200px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
  border-right: 1px solid #ccc;
  content: "Edit";
  margin-left: 16px;
  padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
  content: "Remove";
  margin-left: 8px;
}
.ql-snow .ql-tooltip a {
  line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
  display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type="text"] {
  display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0;
  content: "Save";
  padding-right: 0;
}
.ql-snow .ql-tooltip[data-mode="link"]::before {
  content: "Enter link:";
}
.ql-snow .ql-tooltip[data-mode="formula"]::before {
  content: "Enter formula:";
}
.ql-snow .ql-tooltip[data-mode="video"]::before {
  content: "Enter video:";
}
.ql-snow a {
  color: #06c;
}
.ql-container.ql-snow {
  border: 1px solid #ccc;
}
`,b=d.ComponentBase.extend({defaultProps:{__TYPE:"Editor",id:null,value:null,style:null,className:null,placeholder:null,readOnly:!1,modules:null,formats:null,theme:"snow",showHeader:!0,headerTemplate:null,onTextChange:null,onSelectionChange:null,onLoad:null,maxLength:null,children:void 0},css:{classes:{root:({props:e})=>(0,h.classNames)("",e.className),toolbar:"",content:""},styles:m}}),f=function(){try{return Quill}catch{return null}}(),x=s.memo(s.forwardRef((t,i)=>{let o=(0,c.useMergeProps)(),r=s.useContext(a.PrimeReactContext),n=b.getProps(t,r),{ptm:m,cx:x,isUnstyled:g}=b.setMetaData({props:n});(0,d.useHandleStyle)(b.css.styles,g,{name:"editor"});let k=s.useRef(null),w=s.useRef(null),v=s.useRef(null),j=s.useRef(null),y=s.useRef(!1),[N,E]=s.useState(!1);(0,q.useMountEffect)(()=>{if(!y.current){let l={modules:{toolbar:!!n.showHeader&&v.current,...n.modules},placeholder:n.placeholder,readOnly:n.readOnly,theme:n.theme,formats:n.formats};f?D(new Quill(w.current,l)):e.A(30001).then(e=>{e&&u.DomHandler.isExist(w.current)&&D(e.default?new e.default(w.current,l):new e(w.current,l))}),y.current=!0}});let T=(e,l,t)=>{let i=w.current.children[0],o=i?i.innerHTML:null,r=j.current.getText();if("<p><br></p>"===o&&(o=null),"api"===t){let e=w.current.children[0],l=document.createElement("div");if(l.innerHTML=n.value||"",u.DomHandler.isEqualElement(e,l))return}if(n.maxLength){let e=j.current.getLength();e>n.maxLength&&j.current.deleteText(n.maxLength,e)}n.onTextChange&&n.onTextChange({htmlValue:o,textValue:r,delta:e,source:t})},C=(e,l,t)=>{n.onSelectionChange&&n.onSelectionChange({range:e,oldRange:l,source:t})},S=(0,s.useRef)(n.value);S.current=n.value;let D=e=>{j.current=e,S.current&&e.setContents(e.clipboard.convert({html:S.current,text:""})),E(!0)};(0,p.useUpdateEffect)(()=>{if(N)return j.current.on("text-change",T),j.current.on("selection-change",C),()=>{j.current.off("text-change",T),j.current.off("selection-change",C)}}),(0,p.useUpdateEffect)(()=>{N&&j.current&&j.current.getModule("toolbar")&&n.onLoad&&n.onLoad(j.current)},[N]),(0,p.useUpdateEffect)(()=>{j.current&&!j.current.hasFocus()&&(n.value?j.current.setContents(j.current.clipboard.convert({html:n.value,text:""})):j.current.setText(""))},[n.value]),s.useImperativeHandle(i,()=>({props:n,getQuill:()=>j.current,getElement:()=>k.current,getContent:()=>w.current,getToolbar:()=>v.current}));let z=(()=>{let e=o({ref:v,className:x("toolbar")},m("toolbar"));if(!1===n.showHeader)return null;if(n.headerTemplate)return(0,l.jsx)("div",{...e,children:n.headerTemplate});let t=(e,l)=>o(e&&{...e},m(l)),i=o({className:"ql-formats"},m("formats"));return(0,l.jsxs)("div",{...e,children:[(0,l.jsxs)("span",{...i,children:[(0,l.jsxs)("select",{...t({className:"ql-header",defaultValue:"0"},"header"),children:[(0,l.jsx)("option",{...t({value:"1"},"option"),children:"Heading"}),(0,l.jsx)("option",{...t({value:"2"},"option"),children:"Subheading"}),(0,l.jsx)("option",{...t({value:"0"},"option"),children:"Normal"})]}),(0,l.jsxs)("select",{...t({className:"ql-font"},"font"),children:[(0,l.jsx)("option",{...t(void 0,"option")}),(0,l.jsx)("option",{...t({value:"serif"},"option")}),(0,l.jsx)("option",{...t({value:"monospace"},"option")})]})]}),(0,l.jsxs)("span",{...i,children:[(0,l.jsx)("button",{...t({type:"button",className:"ql-bold","aria-label":"Bold"},"bold")}),(0,l.jsx)("button",{...t({type:"button",className:"ql-italic","aria-label":"Italic"},"italic")}),(0,l.jsx)("button",{...t({type:"button",className:"ql-underline","aria-label":"Underline"},"underline")})]}),(0,l.jsxs)("span",{...i,children:[(0,l.jsx)("select",{...t({className:"ql-color"},"color")}),(0,l.jsx)("select",{...t({className:"ql-background"},"background")})]}),(0,l.jsxs)("span",{...i,children:[(0,l.jsx)("button",{...t({type:"button",className:"ql-list",value:"ordered","aria-label":"Ordered List"},"list")}),(0,l.jsx)("button",{...t({type:"button",className:"ql-list",value:"bullet","aria-label":"Unordered List"},"list")}),(0,l.jsxs)("select",{...t({className:"ql-align"},"select"),children:[(0,l.jsx)("option",{...t({defaultValue:!0},"option")}),(0,l.jsx)("option",{...t({value:"center"},"option")}),(0,l.jsx)("option",{...t({value:"right"},"option")}),(0,l.jsx)("option",{...t({value:"justify"},"option")})]})]}),(0,l.jsxs)("span",{...i,children:[(0,l.jsx)("button",{...t({type:"button",className:"ql-link","aria-label":"Insert Link"},"link")}),(0,l.jsx)("button",{...t({type:"button",className:"ql-image","aria-label":"Insert Image"},"image")}),(0,l.jsx)("button",{...t({type:"button",className:"ql-code-block","aria-label":"Insert Code Block"},"codeBlock")})]}),(0,l.jsx)("span",{...i,children:(0,l.jsx)("button",{...t({type:"button",className:"ql-clean","aria-label":"Remove Styles"},"clean")})})]})})(),O=o({ref:w,className:x("content"),style:n.style},m("content")),R=(0,l.jsx)("div",{...O}),P=o({className:(0,h.classNames)(n.className,x("root"))},b.getOtherProps(n),m("root"));return(0,l.jsxs)("div",{id:n.id,ref:k,...P,children:[z,R]})}));function g(e){let[t,i]=(0,s.useState)(""),r={basic:`
<Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        `,javascript:`
import React, { useState } from "react";
import { Editor } from "primereact/editor";

export default function BasicDemo() {
    const [text, setText] = useState('');

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Editor, EditorTextChangeEvent } from "primereact/editor";

export default function BasicDemo() {
    const [text, setText] = useState<string>('');

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e: EditorTextChangeEvent) => setText(e.htmlValue)} style={{ height: '320px' }} />
        </div>
    )
}
        `};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.DocSectionText,{...e,children:(0,l.jsxs)("p",{children:["Editor is used as a controlled component with ",(0,l.jsx)("i",{children:"value"})," and ",(0,l.jsx)("i",{children:"onTextChange"})," properties."]})}),(0,l.jsx)("div",{className:"card",children:(0,l.jsx)(x,{value:t,onTextChange:e=>i(e.htmlValue),style:{height:"320px"}})}),(0,l.jsx)(n.DocSectionCode,{code:r,dependencies:{quill:"2.0.0"}})]})}function k(e){let t={basic:`
import { Editor } from 'primereact/editor';
        `};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.DocSectionText,{...e}),(0,l.jsx)(n.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}x.displayName="Editor";let w=e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.DocSectionText,{...e}),(0,l.jsx)("div",{children:(0,l.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"editor"})})]});function v(e){let t={basic:`
npm install quill
        `};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.DocSectionText,{...e,children:(0,l.jsxs)("p",{children:["Editor uses ",(0,l.jsx)("a",{href:"https://quilljs.com/",children:"Quill"})," editor underneath so it needs to be installed as a dependency."]})}),(0,l.jsx)(n.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function j(e){let t={basic:`
<Editor value="Always bet on Prime!" readOnly style={{ height: '320px' }} />
        `,javascript:`
import React from "react";
import { Editor } from "primereact/editor";

export default function ReadOnlyDemo() {

    return (
        <div className="card">
            <Editor value="Always bet on Prime!" readOnly style={{ height: '320px' }} />
        </div>        
    )
}
        `,typescript:`
import React from "react";
import { Editor } from "primereact/editor";

export default function ReadOnlyDemo() {
    return (
        <div className="card">
            <Editor value="Always bet on Prime!" readOnly style={{ height: '320px' }} />
        </div>    
    )
}
        `};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.DocSectionText,{...e,children:(0,l.jsxs)("p",{children:["When ",(0,l.jsx)("i",{children:"readOnly"})," is present, the value cannot be edited."]})}),(0,l.jsx)("div",{className:"card",children:(0,l.jsx)(x,{value:"Always bet on Prime!",readOnly:!0,style:{height:"320px"}})}),(0,l.jsx)(n.DocSectionCode,{code:t,dependencies:{quill:"2.0.0"}})]})}function y(e){let[t,i]=(0,s.useState)("<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>"),r=(0,l.jsxs)("span",{className:"ql-formats",children:[(0,l.jsx)("button",{className:"ql-bold","aria-label":"Bold"}),(0,l.jsx)("button",{className:"ql-italic","aria-label":"Italic"}),(0,l.jsx)("button",{className:"ql-underline","aria-label":"Underline"})]}),a={basic:`
<Editor value={text} onTextChange={(e) => setText(e.htmlValue)} headerTemplate={header} style={{ height: '320px' }} />
        `,javascript:`
import React, { useState } from "react";
import { Editor } from "primereact/editor";

export default function TemplateDemo() {
    const [text, setText] = useState('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} headerTemplate={header} style={{ height: '320px' }} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Editor, EditorTextChangeEvent } from "primereact/editor";

export default function TemplateDemo() {
    const [text, setText] = useState<string>('<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>');

    const renderHeader = () => {
        return (
            <span className="ql-formats">
                <button className="ql-bold" aria-label="Bold"></button>
                <button className="ql-italic" aria-label="Italic"></button>
                <button className="ql-underline" aria-label="Underline"></button>
            </span>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e: EditorTextChangeEvent) => setText(e.htmlValue)} headerTemplate={header} style={{ height: '320px' }} />
        </div>
    )
}
        `};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.DocSectionText,{...e,children:(0,l.jsxs)("p",{children:["Toolbar is customized with the ",(0,l.jsx)("i",{children:"headerTemplate"})," property. Refer to ",(0,l.jsx)("a",{href:"http://quilljs.com/docs/modules/toolbar/",children:"Quill documentation"})," for available controls."]})}),(0,l.jsx)("div",{className:"card",children:(0,l.jsx)(x,{value:t,onTextChange:e=>i(e.htmlValue),headerTemplate:r,style:{height:"320px"}})}),(0,l.jsx)(n.DocSectionCode,{code:a,dependencies:{quill:"2.0.0"}})]})}function N(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.DocSectionText,{...e,children:(0,l.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,l.jsx)("div",{className:"doc-tablewrapper",children:(0,l.jsxs)("table",{className:"doc-table",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Name"}),(0,l.jsx)("th",{children:"Element"})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"p-editor-container"}),(0,l.jsx)("td",{children:"Container element"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"p-editor-toolbar"}),(0,l.jsx)("td",{children:"Toolbar of the editor"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"p-editor-content"}),(0,l.jsx)("td",{children:"Editable area"})]})]})]})})]})}var E=e.i(41158);function T(e){let t={basic:`
const Tailwind = {
    editor: {
        toolbar: {
            className: classNames('bg-gray-100 rounded-tr-md rounded-tl-md', 'border border-gray-300 box-border font-sans px-2 py-1')
        },
        formats: {
            className: classNames('inline-block align-middle', 'mr-4')
        },
        header: {
            className: classNames('text-gray-700 inline-block float-left text-base font-medium h-6 relative align-middle', 'w-28', 'border-0 text-gray-600')
        }
    }
}
        `},i={javascript:`
import React, { useState } from "react";
import { Editor } from "primereact/editor";

export default function UnstyledDemo() {
    const [text, setText] = useState('');

    return (
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        </div>
    )
}
    `};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o.DocSectionText,{...e,children:[(0,l.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,l.jsx)(E.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,l.jsx)(n.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,l.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,l.jsx)(n.DocSectionCode,{code:i,embedded:!0,dependencies:{quill:"2.0.0"}})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:w},{id:"pt.editor.options",label:"Editor PT Options",component:t.default}];return(0,l.jsx)(i.DocComponent,{title:"React Editor Component",header:"Editor",description:"Editor is rich text editor component based on Quill.",componentDocs:[{id:"import",label:"Import",component:k},{id:"quill",label:"Quill",component:v},{id:"basic",label:"Basic",component:g},{id:"readOnly",label:"ReadOnly",component:j},{id:"template",label:"Template",component:y},{id:"accessibility",label:"Accessibility",component:r}],apiDocs:["Editor"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:N},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:T}]}]})}],10151)},1042,(e,l,t)=>{let i="/editor";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(10151)]),l.hot&&l.hot.dispose(function(){window.__NEXT_P.push([i])})}]);