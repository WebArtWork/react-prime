(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),s=e.i(91788);e.s(["CodeHighlight",0,function(e){let i=(0,s.useRef)(),r=`language-${e.lang||"jsx"}`;return(0,s.useEffect)(()=>{window.Prism.highlightElement(i.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:i,className:r,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),s=e.i(3935),i=e.i(58678),r=e.i(3828),n=e.i(91788),a=e.i(51551),c=e.i(72124),l=e.i(41158),o=e.i(87914),d=e.i(28137);let p=e=>{let i=(0,n.useContext)(o.default),{id:c,data:p,name:h,description:m,allowLink:u=!0}=e,j=c.startsWith("pt."),x=(0,r.useRouter)();if(a.ObjectUtils.isNotEmpty(p)){let r=Object.keys(p[0]),o=(e,t)=>{let s=document.getElementById(e);s&&s.parentElement.scrollIntoView({block:"start",behavior:t})},b=(e,i,r)=>{if(u&&e)return e.split("|").map((e,a)=>{if(e.includes(h)){let s=e.indexOf(h),i=e.substring(s).replace(/(\[|\]|<|>).*$/gm,"").trim(),r=h===i?`api.${h}`:`api.${h}.${i===`${h}Props`?"props":i}`;return(0,t.jsxs)(n.default.Fragment,{children:[0!==a?"|":"",(0,t.jsx)(l.default,{href:x.basePath+x.pathname+`#${r}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(r,"smooth"),children:e})})]},a)}return(0,t.jsxs)(n.default.Fragment,{children:[0!==a?"|":"",i?(0,t.jsxs)("span",{id:c+"."+e,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!r}),title:r,children:[e,(0,t.jsx)(l.default,{href:x.basePath+x.pathname+`#${c+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(c+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},a)});let a=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return i?(0,t.jsxs)("span",{id:c+"."+a,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!r}),title:r,children:[a,(0,t.jsx)(l.default,{href:x.basePath+x.pathname+`#${c+"."+a}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(c+"."+a),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):a},f=(0,t.jsx)(n.default.Fragment,{children:j?(0,t.jsx)("tr",{children:r.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:r.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),g=(0,t.jsx)(n.default.Fragment,{children:p.map((e,r)=>{if(j){let{value:s,label:i,description:n}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:s}),(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:n})]},r)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([r,n],c)=>"readonly"!==r&&"optional"!==r&&"deprecated"!==r&&(0,t.jsx)("td",{children:"parameters"===r?n.map((e,s)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:b(e.type)}),(0,t.jsx)("br",{})]},s)):"default"===r?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-default",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:a.ObjectUtils.isEmpty(n)?"null":b(n,"name"===r,e.deprecated)}):"type"===r?(0,t.jsx)("span",{className:"doc-option-type",children:b(n,"name"===r,e.deprecated)}):"returnType"===r?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-returnType",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:b(n,"name"===r,e.deprecated)}):"description"===r||"values"===r?(0,t.jsx)("span",{className:"doc-option-description",children:n}):b(n,"name"===r,e.deprecated)},c))},r)})});return(0,t.jsxs)(n.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:m})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:f}),(0,t.jsx)("tbody",{children:g})]})})]},c)}return null};e.s(["default",0,p],88850);var h=e.i(71864),m=e.i(38076);function u(e){let{doc:s,header:i}=e,r=e.apiExclude,l=s.reduce((e,s)=>{let i,n=s.split("."),l=(i=n[0])&&i[0].toUpperCase()+i.slice(1)||"",o=c.default[l.toLowerCase()],d=(e,t)=>r&&r[e]&&r[e].includes(t),h=e=>r&&r[e]&&"excludeAll"===r[e];if(o){let i=(e,s)=>{if(a.ObjectUtils.isNotEmpty(o.events)&&a.ObjectUtils.isNotEmpty(o.events.values)&&!h("events")){let i={id:`api.${s}.events`,label:"Events",description:o.events.description,children:[]};Object.entries(o.events.values).forEach(([e,r])=>{let[n,a]=[`api.${s}.${e}`,e];d("event",e)||i.children.push({id:n,label:a,component:e=>(0,t.jsx)(p,{name:s,data:r.props,description:(0,t.jsxs)(t.Fragment,{children:[r.description," See ",(0,t.jsx)("i",{children:r.relatedProp}),"."]}),...e})})}),e.push(i)}if(a.ObjectUtils.isNotEmpty(o.interfaces)&&a.ObjectUtils.isNotEmpty(o.interfaces.values)&&!h("interfaces")){let i={id:`api.${s}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([e,r])=>{let[n,a]=[`api.${s}.${e}`,e];d("interfaces",e)||i.children.push({id:n,label:a,component:e=>(0,t.jsx)(p,{name:s,data:r.props,description:(0,t.jsxs)(t.Fragment,{children:[r.description," ",r.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:r.extendedTypes}),"."]})]}),...e})})}),e.push(i)}if(a.ObjectUtils.isNotEmpty(o.types)&&a.ObjectUtils.isNotEmpty(o.types.values)&&!h("types")){let i={id:`api.${s}.types`,label:"Types",description:o.types.description,children:[]};Object.entries(o.types.values).forEach(([e,r])=>{let[n,a]=[`api.${s}.${e}`,e];d("types",e)||i.children.push({id:n,label:a,component:e=>(0,t.jsx)(p,{name:s,data:[r],allowLink:!1,...e})})}),e.push(i)}};if(3===n.length){let s=n[1],i=n[2];if("functions"===s){let r=o[s].values[i],n={id:`api.${l}`,label:l,children:[]},[c,d]=[`api.${l}.function`,"Function"],h=Object.entries(r).reduce((e,[t,s])=>("description"!==t&&(e[t]=s),e),{});n.children.push({id:c,label:d,component:e=>(0,t.jsx)(p,{name:l,data:[h],description:r.description,...e})});let m=r.parameters&&r.parameters.map(e=>e.type);if(a.ObjectUtils.isNotEmpty(o.interfaces)&&a.ObjectUtils.isNotEmpty(o.interfaces.values)){let e={id:`api.${l}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([s,i])=>{if(m.includes(s)){let[r,n]=[`api.${l}.${s}`,s],c={id:r,label:n,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),children:[]};a.ObjectUtils.isNotEmpty(i.props)&&c.children.push({id:`${r}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:i.props,...e})}),a.ObjectUtils.isNotEmpty(i.callbacks)&&c.children.push({id:`${r}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:i.callbacks,...e})}),e.children.push(c)}}),a.ObjectUtils.isNotEmpty(e.children)&&n.children.push(e)}e.push(n)}}else o.components&&Object.entries(o.components).forEach(([r,n])=>{let c={id:`api.${r}`,label:r,description:n.description,children:[]};if(a.ObjectUtils.isNotEmpty(n.props)&&a.ObjectUtils.isNotEmpty(n.props.values)&&!h("props")){let[e,s]=[`api.${r}.props`,"Props"];if(d("props",r))return;c.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:n.props.values,description:n.props.description,...e})})}if(a.ObjectUtils.isNotEmpty(n.callbacks)&&a.ObjectUtils.isNotEmpty(n.callbacks.values)&&!h("callbacks")){let[e,s]=[`api.${r}.callbacks`,"Callbacks"];if(d("callbacks",r))return;c.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:n.callbacks.values,description:n.callbacks.description,...e})})}if(a.ObjectUtils.isNotEmpty(n.methods)&&a.ObjectUtils.isNotEmpty(n.methods.values)&&!h("methods")){let[e,s]=[`api.${r}.methods`,"Methods"];if(d("methods",r))return;c.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:n.methods.values,description:n.methods.description,...e})})}r.toLocaleLowerCase()===s.toLowerCase()&&i(c.children,r),e.push(c)}),o.model&&Object.entries(o.model).forEach(([r,n])=>{let c={id:`api.${r}`,label:r,description:n.description,children:[]};if(a.ObjectUtils.isNotEmpty(n.props)&&a.ObjectUtils.isNotEmpty(n.props.values)&&!h("props")){let[e,s]=[`api.${r}.props`,"Props"];if(d("props",r))return;c.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:n.props.values,description:n.props.description,...e})})}r.toLocaleLowerCase()===s.toLowerCase()&&i(c.children,r),e.push(c)}),o.components||o.model||i(e,l)}return e},[]);return(0,n.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[i," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",i," module."]})]}),(0,t.jsx)(m.DocSections,{docs:l})]}),(0,t.jsx)(h.DocSectionNav,{docs:l})]})}e.s(["DocComponent",0,function(e){let a,[c,l]=(0,n.useState)(0),o=(0,r.useRouter)();a=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{l(e),o.replace(o.pathname)};return(0,n.useEffect)(()=>{o.asPath.includes("#api")&&l(1),o.asPath.includes("#pt")&&l(3)},[o.asPath]),(0,t.jsxs)("div",{className:(0,s.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":0===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:a})}),e.apiDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":1===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":2===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":3===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===c?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.componentDocs})]}):null,1===c?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(u,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===c?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===c?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},3828,(e,t,s)=>{t.exports=e.r(26990)},58816,e=>{"use strict";var t=e.i(91398),s=e.i(82948),i=e.i(28137);function r(){return(0,t.jsxs)(i.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h6",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Ripple element has the ",(0,t.jsx)("i",{children:"aria-hidden"})," attribute as true so that it gets ignored by the screen readers."]}),(0,t.jsx)("h6",{children:"Keyboard Support"}),(0,t.jsx)("p",{children:"Component does not include any interactive elements."})]})}var n=e.i(5180),a=e.i(50901);function c(e){let s={basic:`
<div className="bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold p-ripple">
    Click Me
    <Ripple />
</div>
        `,javascript:`
import React from 'react';
import { Ripple } from 'primereact/ripple';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center align-items-center">
            <div className="bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold p-ripple">
                Click Me
                <Ripple />
            </div>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Ripple } from 'primereact/ripple';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center align-items-center">
            <div className="bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold p-ripple">
                Click Me
                <Ripple />
            </div>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Ripple is enabled by adding the component as a child and applying ",(0,t.jsx)("i",{children:"p-ripple"})," class to the element."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center align-items-center",children:(0,t.jsxs)("div",{className:"bg-primary flex select-none justify-content-center align-items-center shadow-2 border-round p-6 font-bold p-ripple",children:["Click Me",(0,t.jsx)(a.Ripple,{})]})}),(0,t.jsx)(n.DocSectionCode,{code:s})]})}var l=e.i(41158);function o(e){let s={basic:`
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        ripple: true,
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["To start with, Ripple needs to be enabled globally. See the ",(0,t.jsx)(l.default,{href:"/configuration/#ripple",children:"Configuration API"})," for details."]})}),(0,t.jsx)(n.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function d(e){let s={basic:`
<div className="p-ripple p-5 border-round border-radius-10 shadow-2">
    Green
    <Ripple
        pt={{
            root: { style: { background: 'rgba(75, 175, 80, 0.3)' } }
        }}
    />
</div>
<div className="p-ripple p-5 border-round border-radius-10 shadow-2">
    Orange
    <Ripple
        pt={{
            root: { style: { background: 'rgba(255, 193, 6, 0.3)' } }
        }}
    />
</div>
<div className="p-ripple p-5 border-round border-radius-10 shadow-2">
    Purple
    <Ripple
        pt={{
            root: { style: { background: 'rgba(156, 39, 176, 0.3)' } }
        }}
    />
</div>
        `,javascript:`
import React from 'react';
import { Ripple } from 'primereact/ripple';

export default function CustomDemo() {
    return (
        <div className="card flex justify-content-center align-items-center gap-2">
            <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                Green
                <Ripple
                    pt={{
                        root: { style: { background: 'rgba(75, 175, 80, 0.3)' } }
                    }}
                />
            </div>
            <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                Orange
                <Ripple
                    pt={{
                        root: { style: { background: 'rgba(255, 193, 6, 0.3)' } }
                    }}
                />
            </div>
            <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                Purple
                <Ripple
                    pt={{
                        root: { style: { background: 'rgba(156, 39, 176, 0.3)' } }
                    }}
                />
            </div>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Ripple } from 'primereact/ripple';

export default function CustomDemo() {
    return (
        <div className="card flex justify-content-center align-items-center gap-2">
            <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                Green
                <Ripple
                    pt={{
                        root: { style: { background: 'rgba(75, 175, 80, 0.3)' } }
                    }}
                />
            </div>
            <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                Orange
                <Ripple
                    pt={{
                        root: { style: { background: 'rgba(255, 193, 6, 0.3)' } }
                    }}
                />
            </div>
            <div className="p-ripple p-5 border-round border-radius-10 shadow-2">
                Purple
                <Ripple
                    pt={{
                        root: { style: { background: 'rgba(156, 39, 176, 0.3)' } }
                    }}
                />
            </div>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Default styling of the animation adds a shade of white. This can easily be customized using css that changes the color of ",(0,t.jsx)("i",{children:"p-ink"})," element."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center align-items-center gap-2",children:[(0,t.jsxs)("div",{className:"p-ripple p-5 border-round border-radius-10 shadow-2",children:["Green",(0,t.jsx)(a.Ripple,{pt:{root:{style:{background:"rgba(75, 175, 80, 0.3)"}}}})]}),(0,t.jsxs)("div",{className:"p-ripple p-5 border-round border-radius-10 shadow-2",children:["Orange",(0,t.jsx)(a.Ripple,{pt:{root:{style:{background:"rgba(255, 193, 6, 0.3)"}}}})]}),(0,t.jsxs)("div",{className:"p-ripple p-5 border-round border-radius-10 shadow-2",children:["Purple",(0,t.jsx)(a.Ripple,{pt:{root:{style:{background:"rgba(156, 39, 176, 0.3)"}}}})]})]}),(0,t.jsx)(n.DocSectionCode,{code:s})]})}function p(e){let s={basic:`
import { Ripple } from 'primereact/ripple';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)(n.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function h(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-ripple"}),(0,t.jsx)("td",{children:"Host element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-ink"}),(0,t.jsx)("td",{children:"Ripple element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-ink-active"}),(0,t.jsx)("td",{children:"Ripple element during animating."})]})]})]})})]})}function m(e){let s={basic:`
const Tailwind = {          
    global: {
        css: \`
        *[data-pd-ripple="true"]{
            overflow: hidden;
            position: relative;
        }
        span[data-p-ink-active="true"]{
            animation: ripple 0.4s linear;
        }
        @keyframes ripple {
            100% {
                opacity: 0;
                transform: scale(2.5);
            }
        }
    \`
    }
}
    `},r={javascript:`
import React from 'react';
import { Button } from 'primereact/button';

export default function UnstyledDemo() {
    return (
        <div className="card flex justify-center">
            <Button label="Submit" />
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(l.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(n.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(n.DocSectionCode,{code:r,embedded:!0})]})})}var u=e.i(10836),j=e.i(91788);e.s(["default",0,()=>{let{ripple:e,setRipple:i}=(0,j.useContext)(u.PrimeReactContext),n=(0,j.useRef)(e);return(0,j.useEffect)(()=>{i(!0);let e=n.current;return()=>{i(e)}},[]),(0,t.jsx)(s.DocComponent,{title:"React Ripple Component",header:"Ripple",description:"Ripple component adds ripple effect to the host element.",componentDocs:[{id:"import",label:"Import",component:p},{id:"configuration",label:"ConfigurationDoc",component:o},{id:"basic",label:"Basic",component:c},{id:"custom",label:"Custom",component:d},{id:"accessibility",label:"Accessibility",component:r}],apiDocs:["Ripple"],themingDocs:[{id:"styled",label:"Styled",component:h},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:m}]}]})}],58816)},19346,(e,t,s)=>{let i="/ripple";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(58816)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);