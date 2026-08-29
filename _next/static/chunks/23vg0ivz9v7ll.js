(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),a=e.i(91788);e.s(["CodeHighlight",0,function(e){let s=(0,a.useRef)(),i=`language-${e.lang||"jsx"}`;return(0,a.useEffect)(()=>{window.Prism.highlightElement(s.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:s,className:i,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),a=e.i(3935),s=e.i(58678),i=e.i(3828),r=e.i(91788),n=e.i(51551),d=e.i(72124),l=e.i(41158),c=e.i(87914),o=e.i(28137);let p=e=>{let s=(0,r.useContext)(c.default),{id:d,data:p,name:m,description:u,allowLink:g=!0}=e,h=d.startsWith("pt."),x=(0,i.useRouter)();if(n.ObjectUtils.isNotEmpty(p)){let i=Object.keys(p[0]),c=(e,t)=>{let a=document.getElementById(e);a&&a.parentElement.scrollIntoView({block:"start",behavior:t})},j=(e,s,i)=>{if(g&&e)return e.split("|").map((e,n)=>{if(e.includes(m)){let a=e.indexOf(m),s=e.substring(a).replace(/(\[|\]|<|>).*$/gm,"").trim(),i=m===s?`api.${m}`:`api.${m}.${s===`${m}Props`?"props":s}`;return(0,t.jsxs)(r.default.Fragment,{children:[0!==n?"|":"",(0,t.jsx)(l.default,{href:x.basePath+x.pathname+`#${i}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(i,"smooth"),children:e})})]},n)}return(0,t.jsxs)(r.default.Fragment,{children:[0!==n?"|":"",s?(0,t.jsxs)("span",{id:d+"."+e,className:(0,a.classNames)("doc-option-name",{"line-through cursor-pointer":!!i}),title:i,children:[e,(0,t.jsx)(l.default,{href:x.basePath+x.pathname+`#${d+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(d+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},n)});let n=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return s?(0,t.jsxs)("span",{id:d+"."+n,className:(0,a.classNames)("doc-option-name",{"line-through cursor-pointer":!!i}),title:i,children:[n,(0,t.jsx)(l.default,{href:x.basePath+x.pathname+`#${d+"."+n}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(d+"."+n),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):n},v=(0,t.jsx)(r.default.Fragment,{children:h?(0,t.jsx)("tr",{children:i.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:i.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),f=(0,t.jsx)(r.default.Fragment,{children:p.map((e,i)=>{if(h){let{value:a,label:s,description:r}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:a}),(0,t.jsx)("td",{children:s}),(0,t.jsx)("td",{children:r})]},i)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([i,r],d)=>"readonly"!==i&&"optional"!==i&&"deprecated"!==i&&(0,t.jsx)("td",{children:"parameters"===i?r.map((e,a)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:j(e.type)}),(0,t.jsx)("br",{})]},a)):"default"===i?(0,t.jsx)("div",{className:(0,a.classNames)("doc-option-default",{"doc-option-dark":s.darkMode,"doc-option-light":!s.darkMode}),children:n.ObjectUtils.isEmpty(r)?"null":j(r,"name"===i,e.deprecated)}):"type"===i?(0,t.jsx)("span",{className:"doc-option-type",children:j(r,"name"===i,e.deprecated)}):"returnType"===i?(0,t.jsx)("div",{className:(0,a.classNames)("doc-option-returnType",{"doc-option-dark":s.darkMode,"doc-option-light":!s.darkMode}),children:j(r,"name"===i,e.deprecated)}):"description"===i||"values"===i?(0,t.jsx)("span",{className:"doc-option-description",children:r}):j(r,"name"===i,e.deprecated)},d))},i)})});return(0,t.jsxs)(r.default.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:u})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:v}),(0,t.jsx)("tbody",{children:f})]})})]},d)}return null};e.s(["default",0,p],88850);var m=e.i(71864),u=e.i(38076);function g(e){let{doc:a,header:s}=e,i=e.apiExclude,l=a.reduce((e,a)=>{let s,r=a.split("."),l=(s=r[0])&&s[0].toUpperCase()+s.slice(1)||"",c=d.default[l.toLowerCase()],o=(e,t)=>i&&i[e]&&i[e].includes(t),m=e=>i&&i[e]&&"excludeAll"===i[e];if(c){let s=(e,a)=>{if(n.ObjectUtils.isNotEmpty(c.events)&&n.ObjectUtils.isNotEmpty(c.events.values)&&!m("events")){let s={id:`api.${a}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,i])=>{let[r,n]=[`api.${a}.${e}`,e];o("event",e)||s.children.push({id:r,label:n,component:e=>(0,t.jsx)(p,{name:a,data:i.props,description:(0,t.jsxs)(t.Fragment,{children:[i.description," See ",(0,t.jsx)("i",{children:i.relatedProp}),"."]}),...e})})}),e.push(s)}if(n.ObjectUtils.isNotEmpty(c.interfaces)&&n.ObjectUtils.isNotEmpty(c.interfaces.values)&&!m("interfaces")){let s={id:`api.${a}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,i])=>{let[r,n]=[`api.${a}.${e}`,e];o("interfaces",e)||s.children.push({id:r,label:n,component:e=>(0,t.jsx)(p,{name:a,data:i.props,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),...e})})}),e.push(s)}if(n.ObjectUtils.isNotEmpty(c.types)&&n.ObjectUtils.isNotEmpty(c.types.values)&&!m("types")){let s={id:`api.${a}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,i])=>{let[r,n]=[`api.${a}.${e}`,e];o("types",e)||s.children.push({id:r,label:n,component:e=>(0,t.jsx)(p,{name:a,data:[i],allowLink:!1,...e})})}),e.push(s)}};if(3===r.length){let a=r[1],s=r[2];if("functions"===a){let i=c[a].values[s],r={id:`api.${l}`,label:l,children:[]},[d,o]=[`api.${l}.function`,"Function"],m=Object.entries(i).reduce((e,[t,a])=>("description"!==t&&(e[t]=a),e),{});r.children.push({id:d,label:o,component:e=>(0,t.jsx)(p,{name:l,data:[m],description:i.description,...e})});let u=i.parameters&&i.parameters.map(e=>e.type);if(n.ObjectUtils.isNotEmpty(c.interfaces)&&n.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${l}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([a,s])=>{if(u.includes(a)){let[i,r]=[`api.${l}.${a}`,a],d={id:i,label:r,description:(0,t.jsxs)(t.Fragment,{children:[s.description," ",s.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:s.extendedTypes}),"."]})]}),children:[]};n.ObjectUtils.isNotEmpty(s.props)&&d.children.push({id:`${i}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:s.props,...e})}),n.ObjectUtils.isNotEmpty(s.callbacks)&&d.children.push({id:`${i}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:s.callbacks,...e})}),e.children.push(d)}}),n.ObjectUtils.isNotEmpty(e.children)&&r.children.push(e)}e.push(r)}}else c.components&&Object.entries(c.components).forEach(([i,r])=>{let d={id:`api.${i}`,label:i,description:r.description,children:[]};if(n.ObjectUtils.isNotEmpty(r.props)&&n.ObjectUtils.isNotEmpty(r.props.values)&&!m("props")){let[e,a]=[`api.${i}.props`,"Props"];if(o("props",i))return;d.children.push({id:e,label:a,component:e=>(0,t.jsx)(p,{name:i,data:r.props.values,description:r.props.description,...e})})}if(n.ObjectUtils.isNotEmpty(r.callbacks)&&n.ObjectUtils.isNotEmpty(r.callbacks.values)&&!m("callbacks")){let[e,a]=[`api.${i}.callbacks`,"Callbacks"];if(o("callbacks",i))return;d.children.push({id:e,label:a,component:e=>(0,t.jsx)(p,{name:i,data:r.callbacks.values,description:r.callbacks.description,...e})})}if(n.ObjectUtils.isNotEmpty(r.methods)&&n.ObjectUtils.isNotEmpty(r.methods.values)&&!m("methods")){let[e,a]=[`api.${i}.methods`,"Methods"];if(o("methods",i))return;d.children.push({id:e,label:a,component:e=>(0,t.jsx)(p,{name:i,data:r.methods.values,description:r.methods.description,...e})})}i.toLocaleLowerCase()===a.toLowerCase()&&s(d.children,i),e.push(d)}),c.model&&Object.entries(c.model).forEach(([i,r])=>{let d={id:`api.${i}`,label:i,description:r.description,children:[]};if(n.ObjectUtils.isNotEmpty(r.props)&&n.ObjectUtils.isNotEmpty(r.props.values)&&!m("props")){let[e,a]=[`api.${i}.props`,"Props"];if(o("props",i))return;d.children.push({id:e,label:a,component:e=>(0,t.jsx)(p,{name:i,data:r.props.values,description:r.props.description,...e})})}i.toLocaleLowerCase()===a.toLowerCase()&&s(d.children,i),e.push(d)}),c.components||c.model||s(e,l)}return e},[]);return(0,r.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[s," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",s," module."]})]}),(0,t.jsx)(u.DocSections,{docs:l})]}),(0,t.jsx)(m.DocSectionNav,{docs:l})]})}e.s(["DocComponent",0,function(e){let n,[d,l]=(0,r.useState)(0),c=(0,i.useRouter)();n=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let o=e=>{l(e),c.replace(c.pathname)};return(0,r.useEffect)(()=>{c.asPath.includes("#api")&&l(1),c.asPath.includes("#pt")&&l(3)},[c.asPath]),(0,t.jsxs)("div",{className:(0,a.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(s.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":0===d}),children:(0,t.jsx)("button",{type:"button",onClick:()=>o(0),children:n})}),e.apiDocs?(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":1===d}),children:(0,t.jsx)("button",{type:"button",onClick:()=>o(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":2===d}),children:(0,t.jsx)("button",{type:"button",onClick:()=>o(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":3===d}),children:(0,t.jsx)("button",{type:"button",onClick:()=>o(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===d?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(u.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.componentDocs})]}):null,1===d?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(g,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===d?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(u.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===d?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(u.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},3828,(e,t,a)=>{t.exports=e.r(26990)},37565,e=>{"use strict";var t=e.i(91398),a=e.i(28137);function s(){return(0,t.jsxs)(a.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Badge does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the badges are dynamic,",(0,t.jsx)("i",{children:"aria-live"})," may be utilized as well. In case badges need to be tabbable, ",(0,t.jsx)("i",{children:"tabIndex"})," can be added to implement custom key handlers."]}),(0,t.jsx)("h4",{children:"Keyboard Support"}),(0,t.jsx)("p",{children:"Component does not include any interactive elements."})]})}var i=e.i(5180),r=e.i(50989);function n(e){let s={basic:`
<Badge value="2"></Badge>
        `,javascript:`
import React from 'react';
import { Badge } from 'primereact/badge';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Badge value="2"></Badge>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Badge } from 'primereact/badge';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Badge value="2"></Badge>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Text to display is defined with the ",(0,t.jsx)("i",{children:"value"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(r.Badge,{value:"2"})}),(0,t.jsx)(i.DocSectionCode,{code:s})]})}var d=e.i(57724);function l(e){let s={basic:`
<Button type="button" label="Emails">
    <Badge value="8"></Badge>
</Button>
<Button type="button" label="Messages" icon="pi pi-users" severity="secondary">
    <Badge value="8" severity="danger"></Badge>
</Button>
            `,javascript:`
import React from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

export default function ButtonDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Button type="button" label="Emails">
                <Badge value="8"></Badge>
            </Button>
            <Button type="button" label="Messages" icon="pi pi-users" severity="secondary">
                <Badge value="8" severity="danger"></Badge>
            </Button>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';

export default function ButtonDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Button type="button" label="Emails">
                <Badge value="8"></Badge>
            </Button>
            <Button type="button" label="Messages" icon="pi pi-users" severity="secondary">
                <Badge value="8" severity="danger"></Badge>
            </Button>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Buttons have built-in support for badges to display a badge inline."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-2",children:[(0,t.jsx)(d.Button,{type:"button",label:"Emails",children:(0,t.jsx)(r.Badge,{value:"8"})}),(0,t.jsx)(d.Button,{type:"button",label:"Messages",icon:"pi pi-users",severity:"secondary",children:(0,t.jsx)(r.Badge,{value:"8",severity:"danger"})})]}),(0,t.jsx)(i.DocSectionCode,{code:s})]})}function c(e){let s={basic:`
import { Badge } from 'primereact/badge';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function o(e){let s={basic:`
<i className="pi pi-bell p-overlay-badge" style={{ fontSize: '2rem' }}>
    <Badge value="2"></Badge>
</i>
<i className="pi pi-calendar p-overlay-badge" style={{ fontSize: '2rem' }}>
    <Badge value="5+" severity="danger"></Badge>
</i>
<i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '2rem' }}>
    <Badge severity="danger"></Badge>
</i>
            `,javascript:`
import React from 'react';
import { Badge } from 'primereact/badge';

export default function PositionDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-4">
            <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge value="2"></Badge>
            </i>
            <i className="pi pi-calendar p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge value="5+" severity="danger"></Badge>
            </i>
            <i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge severity="danger"></Badge>
            </i>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Badge } from 'primereact/badge';

export default function PositionDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-4">
            <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge value="2"></Badge>
            </i>
            <i className="pi pi-calendar p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge value="5+" severity="danger"></Badge>
            </i>
            <i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge severity="danger"></Badge>
            </i>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A Badge can be positioned at the top right corner of an element by adding ",(0,t.jsx)("i",{children:"p-overlay-badge"})," style class to the element and embedding the badge inside."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-4",children:[(0,t.jsx)("i",{className:"pi pi-bell p-overlay-badge",style:{fontSize:"2rem"},children:(0,t.jsx)(r.Badge,{value:"2"})}),(0,t.jsx)("i",{className:"pi pi-calendar p-overlay-badge",style:{fontSize:"2rem"},children:(0,t.jsx)(r.Badge,{value:"5+",severity:"danger"})}),(0,t.jsx)("i",{className:"pi pi-envelope p-overlay-badge",style:{fontSize:"2rem"},children:(0,t.jsx)(r.Badge,{severity:"danger"})})]}),(0,t.jsx)(i.DocSectionCode,{code:s})]})}let p=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/badge.jpg",alt:"badge"})})]});function m(e){let s={basic:`
<Badge value="2"></Badge>
<Badge value="8" severity="success"></Badge>
<Badge value="4" severity="info"></Badge>
<Badge value="12" severity="warning"></Badge>
<Badge value="3" severity="danger"></Badge>
<Badge value="7" severity="secondary"></Badge>
<Badge value="5" severity="contrast"></Badge>
        `,javascript:`
import React from 'react';
import { Badge } from 'primereact/badge';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Badge value="2"></Badge>
            <Badge value="8" severity="success"></Badge>
            <Badge value="4" severity="info"></Badge >
            <Badge value="12" severity="warning"></Badge>
            <Badge value="3" severity="danger"></Badge>
            <Badge value="7" severity="secondary"></Badge>
            <Badge value="5" severity="contrast"></Badge>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Badge } from 'primereact/badge';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Badge value="2"></Badge>
            <Badge value="8" severity="success"></Badge>
            <Badge value="4" severity="info"></Badge >
            <Badge value="12" severity="warning"></Badge>
            <Badge value="3" severity="danger"></Badge>
            <Badge value="7" severity="secondary"></Badge>
            <Badge value="5" severity="contrast"></Badge>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Severity defines the color of the badge, possible values are ",(0,t.jsx)("i",{children:"success"}),", ",(0,t.jsx)("i",{children:"info"}),", ",(0,t.jsx)("i",{children:"warning"})," and ",(0,t.jsx)("i",{children:"danger"})," in addition to the default theme color."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-2",children:[(0,t.jsx)(r.Badge,{value:"2"}),(0,t.jsx)(r.Badge,{value:"8",severity:"success"}),(0,t.jsx)(r.Badge,{value:"4",severity:"info"}),(0,t.jsx)(r.Badge,{value:"12",severity:"warning"}),(0,t.jsx)(r.Badge,{value:"3",severity:"danger"}),(0,t.jsx)(r.Badge,{value:"7",severity:"secondary"}),(0,t.jsx)(r.Badge,{value:"5",severity:"contrast"})]}),(0,t.jsx)(i.DocSectionCode,{code:s})]})}function u(e){let s={basic:`
<Badge value="6" size="xlarge" severity="success"></Badge>
<Badge value="4" size="large" severity="warning"></Badge>
<Badge value="2"></Badge>
        `,javascript:`
import React from 'react';
import { Badge } from 'primereact/badge';

export default function SizeDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center align-items-end gap-2">
            <Badge value="6" size="xlarge" severity="success"></Badge>
            <Badge value="4" size="large" severity="warning"></Badge>
            <Badge value="2"></Badge>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Badge } from 'primereact/badge';

export default function SizeDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center align-items-end gap-2">
            <Badge value="6" size="xlarge" severity="success"></Badge>
            <Badge value="4" size="large" severity="warning"></Badge>
            <Badge value="2"></Badge>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Use the ",(0,t.jsx)("i",{children:"size"})," property to customize the size of a Badge, currently ",(0,t.jsx)("i",{children:"large"})," and ",(0,t.jsx)("i",{children:"xlarge"})," are available as size options."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center align-items-end gap-2",children:[(0,t.jsx)(r.Badge,{value:"6",size:"xlarge",severity:"success"}),(0,t.jsx)(r.Badge,{value:"4",size:"large",severity:"warning"}),(0,t.jsx)(r.Badge,{value:"2"})]}),(0,t.jsx)(i.DocSectionCode,{code:s})]})}function g(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-badge"}),(0,t.jsx)("td",{children:"Badge element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-overlay-badge"}),(0,t.jsx)("td",{children:"Wrapper of a badge and its target."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-badge-dot"}),(0,t.jsx)("td",{children:"Badge element with no value."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-badge-success"}),(0,t.jsx)("td",{children:"Badge element with success severity."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-badge-info"}),(0,t.jsx)("td",{children:"Badge element with info severity."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-badge-warning"}),(0,t.jsx)("td",{children:"Badge element with warning severity."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-badge-danger"}),(0,t.jsx)("td",{children:"Badge element with danger severity."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-badge-lg"}),(0,t.jsx)("td",{children:"Large badge element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-badge-xl"}),(0,t.jsx)("td",{children:"Extra large badge element"})]})]})]})})]})}var h=e.i(41158);function x(e){let s={basic:`
const Tailwind = {          
    badge: {
        root: ({ props }) => ({
            className: classNames(
                'rounded-full p-0 text-center inline-block',
                'bg-blue-500 text-white font-bold',
                {
                    'bg-gray-500 ': props.severity == 'secondary',
                    'bg-green-500 ': props.severity == 'success',
                    'bg-blue-500 ': props.severity == 'info',
                    'bg-orange-500 ': props.severity == 'warning',
                    'bg-purple-500 ': props.severity == 'help',
                    'bg-red-500 ': props.severity == 'danger'
                },
                {
                    'text-xs min-w-[1.5rem] h-[1.5rem] leading-[1.5rem]': props.size == null,
                    'text-lg min-w-[2.25rem] h-[2.25rem] leading-[2.25rem]': props.size == 'large',
                    'text-2xl min-w-[3rem] h-[3rem] leading-[3rem]': props.size == 'xlarge'
                }
            )
        })
    }
}
    `},r={javascript:`
import React from 'react';
import { Badge } from 'primereact/badge';

export default function UnstyledDemo() {
    return (
        <div>
            <div className="card flex flex-wrap justify-center gap-2">
                <Badge value="2"></Badge>
                <Badge value="8" severity="success"></Badge>
                <Badge value="4" severity="info"></Badge >
                <Badge value="12" severity="warning"></Badge>
                <Badge value="3" severity="danger"></Badge>
            </div>
            <div className="card flex flex-wrap justify-center gap-4">
                <i className="pi pi-bell relative text-gray-700 dark:text-white/80" style={{ fontSize: '2rem' }}>
                    <Badge className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 origin-top-right m-0" value="2"></Badge>
                </i>
                <i className="pi pi-calendar relative text-gray-700 dark:text-white/80" style={{ fontSize: '2rem' }}>
                    <Badge className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 origin-top-right m-0" value="5+" severity="danger"></Badge>
                </i>
                <i className="pi pi-envelope relative text-gray-700 dark:text-white/80" style={{ fontSize: '2rem' }}>
                    <Badge className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 origin-top-right m-0" severity="danger" style={{ minWidth:'0.75rem', height:'0.75rem' }}></Badge>
                </i>
            </div>
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(h.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(i.DocSectionCode,{code:r,embedded:!0})]})})}var j=e.i(88850),v=e.i(82948);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:p},{id:"pt.badge.options",label:"Badge PT Options",component:j.default}];return(0,t.jsx)(v.DocComponent,{title:"React Badge Component",header:"Badge",description:"Badge is a small status indicator for another element.",componentDocs:[{id:"import",label:"Import",component:c},{id:"basic",label:"Basic",component:n},{id:"severity",label:"Severity",component:m},{id:"size",label:"Size",component:u},{id:"positioned",label:"Position",component:o},{id:"button",label:"Button",component:l},{id:"accessibility",label:"Accessibility",component:s}],apiDocs:["Badge"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:g},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:x}]}]})}],37565)},38870,(e,t,a)=>{let s="/badge";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(37565)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})}]);