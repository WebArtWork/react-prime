(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var a=e.i(91398),s=e.i(91788);e.s(["CodeHighlight",0,function(e){let t=(0,s.useRef)(),i=`language-${e.lang||"jsx"}`;return(0,s.useEffect)(()=>{window.Prism.highlightElement(t.current)},[]),(0,a.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,a.jsxs)("code",{ref:t,className:i,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var a=e.i(91398),s=e.i(3935),t=e.i(58678),i=e.i(3828),n=e.i(91788),r=e.i(51551),c=e.i(72124),l=e.i(41158),o=e.i(87914),d=e.i(28137);let p=e=>{let t=(0,n.useContext)(o.default),{id:c,data:p,name:u,description:m,allowLink:g=!0}=e,h=c.startsWith("pt."),x=(0,i.useRouter)();if(r.ObjectUtils.isNotEmpty(p)){let i=Object.keys(p[0]),o=(e,a)=>{let s=document.getElementById(e);s&&s.parentElement.scrollIntoView({block:"start",behavior:a})},v=(e,t,i)=>{if(g&&e)return e.split("|").map((e,r)=>{if(e.includes(u)){let s=e.indexOf(u),t=e.substring(s).replace(/(\[|\]|<|>).*$/gm,"").trim(),i=u===t?`api.${u}`:`api.${u}.${t===`${u}Props`?"props":t}`;return(0,a.jsxs)(n.default.Fragment,{children:[0!==r?"|":"",(0,a.jsx)(l.default,{href:x.basePath+x.pathname+`#${i}`,target:"_self",children:(0,a.jsx)("a",{onClick:()=>o(i,"smooth"),children:e})})]},r)}return(0,a.jsxs)(n.default.Fragment,{children:[0!==r?"|":"",t?(0,a.jsxs)("span",{id:c+"."+e,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!i}),title:i,children:[e,(0,a.jsx)(l.default,{href:x.basePath+x.pathname+`#${c+"."+e}`,target:"_self",children:(0,a.jsx)("a",{onClick:()=>o(c+"."+e),className:"doc-option-link",children:(0,a.jsx)("i",{className:"pi pi-link"})})})]}):e]},r)});let r=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return t?(0,a.jsxs)("span",{id:c+"."+r,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!i}),title:i,children:[r,(0,a.jsx)(l.default,{href:x.basePath+x.pathname+`#${c+"."+r}`,target:"_self",children:(0,a.jsx)("a",{onClick:()=>o(c+"."+r),className:"doc-option-link",children:(0,a.jsx)("i",{className:"pi pi-link"})})})]}):r},j=(0,a.jsx)(n.default.Fragment,{children:h?(0,a.jsx)("tr",{children:i.map(e=>(0,a.jsx)("th",{children:e},e))}):(0,a.jsx)("tr",{children:i.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,a.jsx)("th",{children:e},e))})}),f=(0,a.jsx)(n.default.Fragment,{children:p.map((e,i)=>{if(h){let{value:s,label:t,description:n}=e;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:s}),(0,a.jsx)("td",{children:t}),(0,a.jsx)("td",{children:n})]},i)}return(0,a.jsx)("tr",{children:Object.entries(e).map(([i,n],c)=>"readonly"!==i&&"optional"!==i&&"deprecated"!==i&&(0,a.jsx)("td",{children:"parameters"===i?n.map((e,s)=>(0,a.jsxs)("div",{className:"doc-option-params",children:[(0,a.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,a.jsx)("span",{className:"doc-option-parameter-type",children:v(e.type)}),(0,a.jsx)("br",{})]},s)):"default"===i?(0,a.jsx)("div",{className:(0,s.classNames)("doc-option-default",{"doc-option-dark":t.darkMode,"doc-option-light":!t.darkMode}),children:r.ObjectUtils.isEmpty(n)?"null":v(n,"name"===i,e.deprecated)}):"type"===i?(0,a.jsx)("span",{className:"doc-option-type",children:v(n,"name"===i,e.deprecated)}):"returnType"===i?(0,a.jsx)("div",{className:(0,s.classNames)("doc-option-returnType",{"doc-option-dark":t.darkMode,"doc-option-light":!t.darkMode}),children:v(n,"name"===i,e.deprecated)}):"description"===i||"values"===i?(0,a.jsx)("span",{className:"doc-option-description",children:n}):v(n,"name"===i,e.deprecated)},c))},i)})});return(0,a.jsxs)(n.default.Fragment,{children:[(0,a.jsx)(d.DocSectionText,{...e,children:(0,a.jsx)("p",{children:m})}),(0,a.jsx)("div",{className:"doc-tablewrapper",children:(0,a.jsxs)("table",{className:"doc-table",children:[(0,a.jsx)("thead",{children:j}),(0,a.jsx)("tbody",{children:f})]})})]},c)}return null};e.s(["default",0,p],88850);var u=e.i(71864),m=e.i(38076);function g(e){let{doc:s,header:t}=e,i=e.apiExclude,l=s.reduce((e,s)=>{let t,n=s.split("."),l=(t=n[0])&&t[0].toUpperCase()+t.slice(1)||"",o=c.default[l.toLowerCase()],d=(e,a)=>i&&i[e]&&i[e].includes(a),u=e=>i&&i[e]&&"excludeAll"===i[e];if(o){let t=(e,s)=>{if(r.ObjectUtils.isNotEmpty(o.events)&&r.ObjectUtils.isNotEmpty(o.events.values)&&!u("events")){let t={id:`api.${s}.events`,label:"Events",description:o.events.description,children:[]};Object.entries(o.events.values).forEach(([e,i])=>{let[n,r]=[`api.${s}.${e}`,e];d("event",e)||t.children.push({id:n,label:r,component:e=>(0,a.jsx)(p,{name:s,data:i.props,description:(0,a.jsxs)(a.Fragment,{children:[i.description," See ",(0,a.jsx)("i",{children:i.relatedProp}),"."]}),...e})})}),e.push(t)}if(r.ObjectUtils.isNotEmpty(o.interfaces)&&r.ObjectUtils.isNotEmpty(o.interfaces.values)&&!u("interfaces")){let t={id:`api.${s}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([e,i])=>{let[n,r]=[`api.${s}.${e}`,e];d("interfaces",e)||t.children.push({id:n,label:r,component:e=>(0,a.jsx)(p,{name:s,data:i.props,description:(0,a.jsxs)(a.Fragment,{children:[i.description," ",i.extendedTypes&&(0,a.jsxs)(a.Fragment,{children:["Extends ",(0,a.jsx)("i",{children:i.extendedTypes}),"."]})]}),...e})})}),e.push(t)}if(r.ObjectUtils.isNotEmpty(o.types)&&r.ObjectUtils.isNotEmpty(o.types.values)&&!u("types")){let t={id:`api.${s}.types`,label:"Types",description:o.types.description,children:[]};Object.entries(o.types.values).forEach(([e,i])=>{let[n,r]=[`api.${s}.${e}`,e];d("types",e)||t.children.push({id:n,label:r,component:e=>(0,a.jsx)(p,{name:s,data:[i],allowLink:!1,...e})})}),e.push(t)}};if(3===n.length){let s=n[1],t=n[2];if("functions"===s){let i=o[s].values[t],n={id:`api.${l}`,label:l,children:[]},[c,d]=[`api.${l}.function`,"Function"],u=Object.entries(i).reduce((e,[a,s])=>("description"!==a&&(e[a]=s),e),{});n.children.push({id:c,label:d,component:e=>(0,a.jsx)(p,{name:l,data:[u],description:i.description,...e})});let m=i.parameters&&i.parameters.map(e=>e.type);if(r.ObjectUtils.isNotEmpty(o.interfaces)&&r.ObjectUtils.isNotEmpty(o.interfaces.values)){let e={id:`api.${l}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([s,t])=>{if(m.includes(s)){let[i,n]=[`api.${l}.${s}`,s],c={id:i,label:n,description:(0,a.jsxs)(a.Fragment,{children:[t.description," ",t.extendedTypes&&(0,a.jsxs)(a.Fragment,{children:["Extends ",(0,a.jsx)("i",{children:t.extendedTypes}),"."]})]}),children:[]};r.ObjectUtils.isNotEmpty(t.props)&&c.children.push({id:`${i}.props`,label:"Props",component:e=>(0,a.jsx)(p,{data:t.props,...e})}),r.ObjectUtils.isNotEmpty(t.callbacks)&&c.children.push({id:`${i}.callbacks`,label:"Callbacks",component:e=>(0,a.jsx)(p,{data:t.callbacks,...e})}),e.children.push(c)}}),r.ObjectUtils.isNotEmpty(e.children)&&n.children.push(e)}e.push(n)}}else o.components&&Object.entries(o.components).forEach(([i,n])=>{let c={id:`api.${i}`,label:i,description:n.description,children:[]};if(r.ObjectUtils.isNotEmpty(n.props)&&r.ObjectUtils.isNotEmpty(n.props.values)&&!u("props")){let[e,s]=[`api.${i}.props`,"Props"];if(d("props",i))return;c.children.push({id:e,label:s,component:e=>(0,a.jsx)(p,{name:i,data:n.props.values,description:n.props.description,...e})})}if(r.ObjectUtils.isNotEmpty(n.callbacks)&&r.ObjectUtils.isNotEmpty(n.callbacks.values)&&!u("callbacks")){let[e,s]=[`api.${i}.callbacks`,"Callbacks"];if(d("callbacks",i))return;c.children.push({id:e,label:s,component:e=>(0,a.jsx)(p,{name:i,data:n.callbacks.values,description:n.callbacks.description,...e})})}if(r.ObjectUtils.isNotEmpty(n.methods)&&r.ObjectUtils.isNotEmpty(n.methods.values)&&!u("methods")){let[e,s]=[`api.${i}.methods`,"Methods"];if(d("methods",i))return;c.children.push({id:e,label:s,component:e=>(0,a.jsx)(p,{name:i,data:n.methods.values,description:n.methods.description,...e})})}i.toLocaleLowerCase()===s.toLowerCase()&&t(c.children,i),e.push(c)}),o.model&&Object.entries(o.model).forEach(([i,n])=>{let c={id:`api.${i}`,label:i,description:n.description,children:[]};if(r.ObjectUtils.isNotEmpty(n.props)&&r.ObjectUtils.isNotEmpty(n.props.values)&&!u("props")){let[e,s]=[`api.${i}.props`,"Props"];if(d("props",i))return;c.children.push({id:e,label:s,component:e=>(0,a.jsx)(p,{name:i,data:n.props.values,description:n.props.description,...e})})}i.toLocaleLowerCase()===s.toLowerCase()&&t(c.children,i),e.push(c)}),o.components||o.model||t(e,l)}return e},[]);return(0,n.useEffect)(()=>{let e=window.location.hash.substring(1),a=document.getElementById(e);setTimeout(()=>{a&&a.scrollIntoView({block:"start"})},1)},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"doc-main",children:[(0,a.jsxs)("div",{className:"doc-intro",children:[(0,a.jsxs)("h1",{children:[t," API"]}),(0,a.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",t," module."]})]}),(0,a.jsx)(m.DocSections,{docs:l})]}),(0,a.jsx)(u.DocSectionNav,{docs:l})]})}e.s(["DocComponent",0,function(e){let r,[c,l]=(0,n.useState)(0),o=(0,i.useRouter)();r=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{l(e),o.replace(o.pathname)};return(0,n.useEffect)(()=>{o.asPath.includes("#api")&&l(1),o.asPath.includes("#pt")&&l(3)},[o.asPath]),(0,a.jsxs)("div",{className:(0,s.classNames)(e.className,"doc-component"),children:[(0,a.jsxs)(t.default,{children:[(0,a.jsx)("title",{children:e.title}),(0,a.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,a.jsxs)("ul",{className:"doc-tabmenu",children:[(0,a.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":0===c}),children:(0,a.jsx)("button",{type:"button",onClick:()=>d(0),children:r})}),e.apiDocs?(0,a.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":1===c}),children:(0,a.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,a.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":2===c}),children:(0,a.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,a.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":3===c}),children:(0,a.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,a.jsxs)("div",{className:"doc-tabpanels",children:[0===c?(0,a.jsxs)("div",{className:"doc-tabpanel",children:[(0,a.jsxs)("div",{className:"doc-main",children:[(0,a.jsxs)("div",{className:"doc-intro",children:[(0,a.jsx)("h1",{children:e.header}),(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,a.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,a.jsx)(u.DocSectionNav,{docs:e.componentDocs})]}):null,1===c?(0,a.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,a.jsx)(g,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"doc-main",children:(0,a.jsxs)("div",{className:"doc-intro",children:[(0,a.jsxs)("h1",{children:[e.header," API"]}),(0,a.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===c?(0,a.jsx)(a.Fragment,{children:e.themingDocs?(0,a.jsxs)("div",{className:"doc-tabpanel",children:[(0,a.jsxs)("div",{className:"doc-main",children:[(0,a.jsx)("div",{className:"doc-intro",children:(0,a.jsxs)("h1",{children:[e.header," Theming"]})}),(0,a.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,a.jsx)(u.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===c?(0,a.jsx)(a.Fragment,{children:e.ptDocs?(0,a.jsxs)("div",{className:"doc-tabpanel",children:[(0,a.jsxs)("div",{className:"doc-main",children:[(0,a.jsxs)("div",{className:"doc-intro",children:[(0,a.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,a.jsx)("p",{children:e.ptDescription})]}),(0,a.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,a.jsx)(u.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},39682,e=>{"use strict";var a=e.i(91398),s=e.i(91788),t=e.i(10836),i=e.i(15498),n=e.i(60150),r=e.i(75366),c=e.i(3935);let l=`
@layer primereact {
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-tag-icon,
    .p-tag-value,
    .p-tag-icon.pi {
        line-height: 1.5;
    }
    
    .p-tag.p-tag-rounded {
        border-radius: 10rem;
    }
}
`,o=i.ComponentBase.extend({defaultProps:{__TYPE:"Tag",value:null,severity:null,rounded:!1,icon:null,style:null,className:null,children:void 0},css:{classes:{value:"p-tag-value",icon:"p-tag-icon",root:({props:e})=>(0,c.classNames)("p-tag p-component",{[`p-tag-${e.severity}`]:null!==e.severity,"p-tag-rounded":e.rounded})},styles:l}}),d=s.forwardRef((e,l)=>{let d=(0,n.useMergeProps)(),p=s.useContext(t.PrimeReactContext),u=o.getProps(e,p),{ptm:m,cx:g,isUnstyled:h}=o.setMetaData({props:u});(0,i.useHandleStyle)(o.css.styles,h,{name:"tag"});let x=s.useRef(null),v=d({className:g("icon")},m("icon")),j=r.IconUtils.getJSXIcon(u.icon,{...v},{props:u});s.useImperativeHandle(l,()=>({props:u,getElement:()=>x.current}));let f=d({ref:x,className:(0,c.classNames)(u.className,g("root")),style:u.style},o.getOtherProps(u),m("root")),y=d({className:g("value")},m("value"));return(0,a.jsxs)("span",{...f,children:[j,(0,a.jsx)("span",{...y,children:u.value}),(0,a.jsx)("span",{children:u.children})]})});d.displayName="Tag",e.s(["Tag",0,d],39682)},3828,(e,a,s)=>{a.exports=e.r(26990)},84564,e=>{"use strict";var a=e.i(91398),s=e.i(88850),t=e.i(82948),i=e.i(28137);function n(){return(0,a.jsxs)(i.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,a.jsx)("h3",{children:"Screen Reader"}),(0,a.jsxs)("p",{children:["Tag does not include any roles and attributes by default, any attribute is passed to the root element so aria roles and attributes can be added if required. If the tags are dynamic,",(0,a.jsx)("i",{children:"aria-live"})," may be utilized as well. In case badges need to be tabbable, ",(0,a.jsx)("i",{children:"tabIndex"})," can be added to implement custom key handlers."]}),(0,a.jsx)("h4",{children:"Keyboard Support"}),(0,a.jsx)("p",{children:"Component does not include any interactive elements."})]})}var r=e.i(5180),c=e.i(39682);function l(e){let s={basic:`
<Tag value="New"></Tag>
        `,javascript:`
import React from 'react';
import { Tag } from 'primereact/tag';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tag value="New"></Tag>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Tag } from 'primereact/tag';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tag value="New"></Tag>
        </div>
    );
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["Label of the tag is defined with the ",(0,a.jsx)("i",{children:"value"})," property."]})}),(0,a.jsx)("div",{className:"card flex justify-content-center",children:(0,a.jsx)(c.Tag,{value:"New"})}),(0,a.jsx)(r.DocSectionCode,{code:s})]})}function o(e){let s={basic:`
<Tag className="mr-2" icon="pi pi-user" value="Primary"></Tag>
<Tag className="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
<Tag className="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
<Tag className="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
<Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
        `,javascript:`
import React from 'react';
import { Tag } from 'primereact/tag';

export default function IconDemo() {
    return (
        <div className="card">
            <Tag className="mr-2" icon="pi pi-user" value="Primary"></Tag>
            <Tag className="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
            <Tag className="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
            <Tag className="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
            <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Tag } from 'primereact/tag';

export default function IconDemo() {
    return (
        <div className="card">
            <Tag className="mr-2" icon="pi pi-user" value="Primary"></Tag>
            <Tag className="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
            <Tag className="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
            <Tag className="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
            <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
        </div>
    );
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["A font icon next to the value can be displayed with the ",(0,a.jsx)("i",{children:"icon"})," property."]})}),(0,a.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-2",children:[(0,a.jsx)(c.Tag,{icon:"pi pi-user",value:"Primary"}),(0,a.jsx)(c.Tag,{icon:"pi pi-check",severity:"success",value:"Success"}),(0,a.jsx)(c.Tag,{icon:"pi pi-info-circle",severity:"info",value:"Info"}),(0,a.jsx)(c.Tag,{icon:"pi pi-exclamation-triangle",severity:"warning",value:"Warning"}),(0,a.jsx)(c.Tag,{icon:"pi pi-times",severity:"danger",value:"Danger"})]}),(0,a.jsx)(r.DocSectionCode,{code:s})]})}function d(e){let s={basic:`
import { Tag } from 'primereact/tag';
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.DocSectionText,{...e}),(0,a.jsx)(r.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function p(e){let s={basic:`
<Tag value="Primary" rounded></Tag>
<Tag severity="success" value="Success" rounded></Tag>
<Tag severity="info" value="Info" rounded></Tag>
<Tag severity="warning" value="Warning" rounded></Tag>
<Tag severity="danger" value="Danger" rounded></Tag>
<Tag severity="secondary" value="Secondary" rounded></Tag>
<Tag severity="contrast" value="Contrast" rounded></Tag>
        `,javascript:`
import React from 'react';
import { Tag } from 'primereact/tag';

export default function PillDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Tag value="Primary" rounded></Tag>
            <Tag severity="success" value="Success" rounded></Tag>
            <Tag severity="info" value="Info" rounded></Tag>
            <Tag severity="warning" value="Warning" rounded></Tag>
            <Tag severity="danger" value="Danger" rounded></Tag>
            <Tag severity="secondary" value="Secondary" rounded></Tag>
            <Tag severity="contrast" value="Contrast" rounded></Tag>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Tag } from 'primereact/tag';

export default function PillDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Tag value="Primary" rounded></Tag>
            <Tag severity="success" value="Success" rounded></Tag>
            <Tag severity="info" value="Info" rounded></Tag>
            <Tag severity="warning" value="Warning" rounded></Tag>
            <Tag severity="danger" value="Danger" rounded></Tag>
            <Tag severity="secondary" value="Secondary" rounded></Tag>
            <Tag severity="contrast" value="Contrast" rounded></Tag>
        </div>
    );
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["Enabling ",(0,a.jsx)("i",{children:"rounded"}),", displays a tag as a pill."]})}),(0,a.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-2",children:[(0,a.jsx)(c.Tag,{value:"Primary",rounded:!0}),(0,a.jsx)(c.Tag,{severity:"success",value:"Success",rounded:!0}),(0,a.jsx)(c.Tag,{severity:"info",value:"Info",rounded:!0}),(0,a.jsx)(c.Tag,{severity:"warning",value:"Warning",rounded:!0}),(0,a.jsx)(c.Tag,{severity:"danger",value:"Danger",rounded:!0}),(0,a.jsx)(c.Tag,{severity:"secondary",value:"Secondary",rounded:!0}),(0,a.jsx)(c.Tag,{severity:"contrast",value:"Contrast",rounded:!0})]}),(0,a.jsx)(r.DocSectionCode,{code:s})]})}let u=e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.DocSectionText,{...e}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/tag.jpg",alt:"tag"})})]});function m(e){let s={basic:`
<Tag value="Primary"></Tag>
<Tag severity="success" value="Success"></Tag>
<Tag severity="info" value="Info"></Tag>
<Tag severity="warning" value="Warning"></Tag>
<Tag severity="danger" value="Danger"></Tag>
<Tag severity="secondary" value="Secondary"></Tag>
<Tag severity="contrast" value="Contrast"></Tag>
        `,javascript:`
import React from 'react';
import { Tag } from 'primereact/tag';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Tag value="Primary"></Tag>
            <Tag severity="success" value="Success"></Tag>
            <Tag severity="info" value="Info"></Tag>
            <Tag severity="warning" value="Warning"></Tag>
            <Tag severity="danger" value="Danger"></Tag>
            <Tag severity="secondary" value="Secondary"></Tag>
            <Tag severity="contrast" value="Contrast"></Tag>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Tag } from 'primereact/tag';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Tag value="Primary"></Tag>
            <Tag severity="success" value="Success"></Tag>
            <Tag severity="info" value="Info"></Tag>
            <Tag severity="warning" value="Warning"></Tag>
            <Tag severity="danger" value="Danger"></Tag>
            <Tag severity="secondary" value="Secondary"></Tag>
            <Tag severity="contrast" value="Contrast"></Tag>
        </div>
    );
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["Severity defines the color of the tag, possible values are ",(0,a.jsx)("i",{children:"success"}),", ",(0,a.jsx)("i",{children:"info"}),", ",(0,a.jsx)("i",{children:"warning"})," and ",(0,a.jsx)("i",{children:"danger"})," in addition to the default theme color."]})}),(0,a.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-2",children:[(0,a.jsx)(c.Tag,{value:"Primary"}),(0,a.jsx)(c.Tag,{severity:"success",value:"Success"}),(0,a.jsx)(c.Tag,{severity:"info",value:"Info"}),(0,a.jsx)(c.Tag,{severity:"warning",value:"Warning"}),(0,a.jsx)(c.Tag,{severity:"danger",value:"Danger"}),(0,a.jsx)(c.Tag,{severity:"secondary",value:"Secondary"}),(0,a.jsx)(c.Tag,{severity:"contrast",value:"Contrast"})]}),(0,a.jsx)(r.DocSectionCode,{code:s})]})}function g(e){let s={basic:`
<Tag style={{background: 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)'}}>
    <div className="flex align-items-center gap-2">
        <img alt="Country" src="/images/flag/flag_placeholder.png" className="flag flag-it" style={{ width: '18px' }}/>
        <span className="text-base">Italy</span>
        <i className="pi pi-times text-xs"></i>
    </div>
</Tag>
        `,javascript:`
import React from 'react';
import { Tag } from 'primereact/tag';

export default function TemplateDemo() {
    return (
        <Tag style={{background: 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)'}}>
            <div className="flex align-items-center gap-2">
                <img alt="Country" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                    className="flag flag-it" style={{ width: '18px' }}/>
                <span className="text-base">Italy</span>
                <i className="pi pi-times text-xs"></i>
            </div>
        </Tag>
    );
}
        `,typescript:`
import React from 'react';
import { Tag } from 'primereact/tag';

export default function TemplateDemo() {
    return (
        <Tag style={{background: 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)'}}>
            <div className="flex align-items-center gap-2">
                <img alt="Country" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                    className="flag flag-it" style={{ width: '18px' }}/>
                <span className="text-base">Italy</span>
                <i className="pi pi-times text-xs"></i>
            </div>
        </Tag>
    );
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.DocSectionText,{...e,children:(0,a.jsx)("p",{children:"Children of the component are passed as the content for templating."})}),(0,a.jsx)("div",{className:"card flex justify-content-center",children:(0,a.jsx)(c.Tag,{style:{background:"linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)"},children:(0,a.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,a.jsx)("img",{alt:"Country",src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:"flag flag-it",style:{width:"18px"}}),(0,a.jsx)("span",{className:"text-base",children:"Italy"}),(0,a.jsx)("i",{className:"pi pi-times text-xs"})]})})}),(0,a.jsx)(r.DocSectionCode,{code:s})]})}function h(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.DocSectionText,{...e,children:(0,a.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,a.jsx)("div",{className:"doc-tablewrapper",children:(0,a.jsxs)("table",{className:"doc-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Element"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-tag"}),(0,a.jsx)("td",{children:"Tag element"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-tag-rounded"}),(0,a.jsx)("td",{children:"Rounded element"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-tag-icon"}),(0,a.jsx)("td",{children:"Icon of the tag"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-tag-value"}),(0,a.jsx)("td",{children:"Value of the tag"})]})]})]})})]})}var x=e.i(41158);function v(e){let s={basic:`
const Tailwind = {          
    tag: {
        root: ({ props }) => ({
            className: classNames(
                'inline-flex items-center justify-center',
                'bg-blue-500 text-white text-xs font-semibold px-2 py-1 ',
                {
                    'bg-gray-500 ': props.severity == 'secondary',
                    'bg-green-500 ': props.severity == 'success',
                    'bg-blue-500 ': props.severity == 'info',
                    'bg-orange-500 ': props.severity == 'warning',
                    'bg-purple-500 ': props.severity == 'help',
                    'bg-red-500 ': props.severity == 'danger'
                },
                {
                    'rounded-md': !props.rounded,
                    'rounded-full': props.rounded
                }
            )
        }),
        value: 'leading-6',
        icon: 'mr-1 text-sm'
    }
}
    `},t={javascript:`
import React from 'react';
import { Tag } from 'primereact/tag';

export default function UnstyledDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-2">
            <Tag value="Primary"></Tag>
            <Tag severity="success" value="Success"></Tag>
            <Tag severity="info" value="Info"></Tag>
            <Tag severity="warning" value="Warning"></Tag>
            <Tag severity="danger" value="Danger"></Tag>
        </div>
    );
}
    `};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.DocSectionText,{...e,children:[(0,a.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,a.jsx)(x.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,a.jsx)(r.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,a.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,a.jsx)(r.DocSectionCode,{code:t,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:u},{id:"pt.tag.options",label:"Tag PT Options",component:s.default}];return(0,a.jsx)(t.DocComponent,{title:"React Tag Component",header:"Tag",description:"Tag component is used to categorize content.",componentDocs:[{id:"import",label:"Import",component:d},{id:"basic",label:"Basic",component:l},{id:"severity",label:"Severity",component:m},{id:"pill",label:"Pill",component:p},{id:"icons",label:"Icon",component:o},{id:"template",label:"Template",component:g},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["Tag"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:h},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:v}]}]})}],84564)},27620,(e,a,s)=>{let t="/tag";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(84564)]),a.hot&&a.hot.dispose(function(){window.__NEXT_P.push([t])})}]);