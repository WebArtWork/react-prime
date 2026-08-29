(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var s=e.i(91398),t=e.i(91788);e.s(["CodeHighlight",0,function(e){let i=(0,t.useRef)(),r=`language-${e.lang||"jsx"}`;return(0,t.useEffect)(()=>{window.Prism.highlightElement(i.current)},[]),(0,s.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,s.jsxs)("code",{ref:i,className:r,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var s=e.i(91398),t=e.i(3935),i=e.i(58678),r=e.i(3828),n=e.i(91788),o=e.i(51551),a=e.i(72124),c=e.i(41158),l=e.i(87914),d=e.i(28137);let p=e=>{let i=(0,n.useContext)(l.default),{id:a,data:p,name:h,description:m,allowLink:u=!0}=e,x=a.startsWith("pt."),j=(0,r.useRouter)();if(o.ObjectUtils.isNotEmpty(p)){let r=Object.keys(p[0]),l=(e,s)=>{let t=document.getElementById(e);t&&t.parentElement.scrollIntoView({block:"start",behavior:s})},f=(e,i,r)=>{if(u&&e)return e.split("|").map((e,o)=>{if(e.includes(h)){let t=e.indexOf(h),i=e.substring(t).replace(/(\[|\]|<|>).*$/gm,"").trim(),r=h===i?`api.${h}`:`api.${h}.${i===`${h}Props`?"props":i}`;return(0,s.jsxs)(n.default.Fragment,{children:[0!==o?"|":"",(0,s.jsx)(c.default,{href:j.basePath+j.pathname+`#${r}`,target:"_self",children:(0,s.jsx)("a",{onClick:()=>l(r,"smooth"),children:e})})]},o)}return(0,s.jsxs)(n.default.Fragment,{children:[0!==o?"|":"",i?(0,s.jsxs)("span",{id:a+"."+e,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!r}),title:r,children:[e,(0,s.jsx)(c.default,{href:j.basePath+j.pathname+`#${a+"."+e}`,target:"_self",children:(0,s.jsx)("a",{onClick:()=>l(a+"."+e),className:"doc-option-link",children:(0,s.jsx)("i",{className:"pi pi-link"})})})]}):e]},o)});let o=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return i?(0,s.jsxs)("span",{id:a+"."+o,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!r}),title:r,children:[o,(0,s.jsx)(c.default,{href:j.basePath+j.pathname+`#${a+"."+o}`,target:"_self",children:(0,s.jsx)("a",{onClick:()=>l(a+"."+o),className:"doc-option-link",children:(0,s.jsx)("i",{className:"pi pi-link"})})})]}):o},g=(0,s.jsx)(n.default.Fragment,{children:x?(0,s.jsx)("tr",{children:r.map(e=>(0,s.jsx)("th",{children:e},e))}):(0,s.jsx)("tr",{children:r.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,s.jsx)("th",{children:e},e))})}),b=(0,s.jsx)(n.default.Fragment,{children:p.map((e,r)=>{if(x){let{value:t,label:i,description:n}=e;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:t}),(0,s.jsx)("td",{children:i}),(0,s.jsx)("td",{children:n})]},r)}return(0,s.jsx)("tr",{children:Object.entries(e).map(([r,n],a)=>"readonly"!==r&&"optional"!==r&&"deprecated"!==r&&(0,s.jsx)("td",{children:"parameters"===r?n.map((e,t)=>(0,s.jsxs)("div",{className:"doc-option-params",children:[(0,s.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,s.jsx)("span",{className:"doc-option-parameter-type",children:f(e.type)}),(0,s.jsx)("br",{})]},t)):"default"===r?(0,s.jsx)("div",{className:(0,t.classNames)("doc-option-default",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:o.ObjectUtils.isEmpty(n)?"null":f(n,"name"===r,e.deprecated)}):"type"===r?(0,s.jsx)("span",{className:"doc-option-type",children:f(n,"name"===r,e.deprecated)}):"returnType"===r?(0,s.jsx)("div",{className:(0,t.classNames)("doc-option-returnType",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:f(n,"name"===r,e.deprecated)}):"description"===r||"values"===r?(0,s.jsx)("span",{className:"doc-option-description",children:n}):f(n,"name"===r,e.deprecated)},a))},r)})});return(0,s.jsxs)(n.default.Fragment,{children:[(0,s.jsx)(d.DocSectionText,{...e,children:(0,s.jsx)("p",{children:m})}),(0,s.jsx)("div",{className:"doc-tablewrapper",children:(0,s.jsxs)("table",{className:"doc-table",children:[(0,s.jsx)("thead",{children:g}),(0,s.jsx)("tbody",{children:b})]})})]},a)}return null};e.s(["default",0,p],88850);var h=e.i(71864),m=e.i(38076);function u(e){let{doc:t,header:i}=e,r=e.apiExclude,c=t.reduce((e,t)=>{let i,n=t.split("."),c=(i=n[0])&&i[0].toUpperCase()+i.slice(1)||"",l=a.default[c.toLowerCase()],d=(e,s)=>r&&r[e]&&r[e].includes(s),h=e=>r&&r[e]&&"excludeAll"===r[e];if(l){let i=(e,t)=>{if(o.ObjectUtils.isNotEmpty(l.events)&&o.ObjectUtils.isNotEmpty(l.events.values)&&!h("events")){let i={id:`api.${t}.events`,label:"Events",description:l.events.description,children:[]};Object.entries(l.events.values).forEach(([e,r])=>{let[n,o]=[`api.${t}.${e}`,e];d("event",e)||i.children.push({id:n,label:o,component:e=>(0,s.jsx)(p,{name:t,data:r.props,description:(0,s.jsxs)(s.Fragment,{children:[r.description," See ",(0,s.jsx)("i",{children:r.relatedProp}),"."]}),...e})})}),e.push(i)}if(o.ObjectUtils.isNotEmpty(l.interfaces)&&o.ObjectUtils.isNotEmpty(l.interfaces.values)&&!h("interfaces")){let i={id:`api.${t}.interfaces`,label:"Interfaces",description:l.interfaces.description,children:[]};Object.entries(l.interfaces.values).forEach(([e,r])=>{let[n,o]=[`api.${t}.${e}`,e];d("interfaces",e)||i.children.push({id:n,label:o,component:e=>(0,s.jsx)(p,{name:t,data:r.props,description:(0,s.jsxs)(s.Fragment,{children:[r.description," ",r.extendedTypes&&(0,s.jsxs)(s.Fragment,{children:["Extends ",(0,s.jsx)("i",{children:r.extendedTypes}),"."]})]}),...e})})}),e.push(i)}if(o.ObjectUtils.isNotEmpty(l.types)&&o.ObjectUtils.isNotEmpty(l.types.values)&&!h("types")){let i={id:`api.${t}.types`,label:"Types",description:l.types.description,children:[]};Object.entries(l.types.values).forEach(([e,r])=>{let[n,o]=[`api.${t}.${e}`,e];d("types",e)||i.children.push({id:n,label:o,component:e=>(0,s.jsx)(p,{name:t,data:[r],allowLink:!1,...e})})}),e.push(i)}};if(3===n.length){let t=n[1],i=n[2];if("functions"===t){let r=l[t].values[i],n={id:`api.${c}`,label:c,children:[]},[a,d]=[`api.${c}.function`,"Function"],h=Object.entries(r).reduce((e,[s,t])=>("description"!==s&&(e[s]=t),e),{});n.children.push({id:a,label:d,component:e=>(0,s.jsx)(p,{name:c,data:[h],description:r.description,...e})});let m=r.parameters&&r.parameters.map(e=>e.type);if(o.ObjectUtils.isNotEmpty(l.interfaces)&&o.ObjectUtils.isNotEmpty(l.interfaces.values)){let e={id:`api.${c}.interfaces`,label:"Interfaces",description:l.interfaces.description,children:[]};Object.entries(l.interfaces.values).forEach(([t,i])=>{if(m.includes(t)){let[r,n]=[`api.${c}.${t}`,t],a={id:r,label:n,description:(0,s.jsxs)(s.Fragment,{children:[i.description," ",i.extendedTypes&&(0,s.jsxs)(s.Fragment,{children:["Extends ",(0,s.jsx)("i",{children:i.extendedTypes}),"."]})]}),children:[]};o.ObjectUtils.isNotEmpty(i.props)&&a.children.push({id:`${r}.props`,label:"Props",component:e=>(0,s.jsx)(p,{data:i.props,...e})}),o.ObjectUtils.isNotEmpty(i.callbacks)&&a.children.push({id:`${r}.callbacks`,label:"Callbacks",component:e=>(0,s.jsx)(p,{data:i.callbacks,...e})}),e.children.push(a)}}),o.ObjectUtils.isNotEmpty(e.children)&&n.children.push(e)}e.push(n)}}else l.components&&Object.entries(l.components).forEach(([r,n])=>{let a={id:`api.${r}`,label:r,description:n.description,children:[]};if(o.ObjectUtils.isNotEmpty(n.props)&&o.ObjectUtils.isNotEmpty(n.props.values)&&!h("props")){let[e,t]=[`api.${r}.props`,"Props"];if(d("props",r))return;a.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:r,data:n.props.values,description:n.props.description,...e})})}if(o.ObjectUtils.isNotEmpty(n.callbacks)&&o.ObjectUtils.isNotEmpty(n.callbacks.values)&&!h("callbacks")){let[e,t]=[`api.${r}.callbacks`,"Callbacks"];if(d("callbacks",r))return;a.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:r,data:n.callbacks.values,description:n.callbacks.description,...e})})}if(o.ObjectUtils.isNotEmpty(n.methods)&&o.ObjectUtils.isNotEmpty(n.methods.values)&&!h("methods")){let[e,t]=[`api.${r}.methods`,"Methods"];if(d("methods",r))return;a.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:r,data:n.methods.values,description:n.methods.description,...e})})}r.toLocaleLowerCase()===t.toLowerCase()&&i(a.children,r),e.push(a)}),l.model&&Object.entries(l.model).forEach(([r,n])=>{let a={id:`api.${r}`,label:r,description:n.description,children:[]};if(o.ObjectUtils.isNotEmpty(n.props)&&o.ObjectUtils.isNotEmpty(n.props.values)&&!h("props")){let[e,t]=[`api.${r}.props`,"Props"];if(d("props",r))return;a.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:r,data:n.props.values,description:n.props.description,...e})})}r.toLocaleLowerCase()===t.toLowerCase()&&i(a.children,r),e.push(a)}),l.components||l.model||i(e,c)}return e},[]);return(0,n.useEffect)(()=>{let e=window.location.hash.substring(1),s=document.getElementById(e);setTimeout(()=>{s&&s.scrollIntoView({block:"start"})},1)},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsxs)("h1",{children:[i," API"]}),(0,s.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",i," module."]})]}),(0,s.jsx)(m.DocSections,{docs:c})]}),(0,s.jsx)(h.DocSectionNav,{docs:c})]})}e.s(["DocComponent",0,function(e){let o,[a,c]=(0,n.useState)(0),l=(0,r.useRouter)();o=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{c(e),l.replace(l.pathname)};return(0,n.useEffect)(()=>{l.asPath.includes("#api")&&c(1),l.asPath.includes("#pt")&&c(3)},[l.asPath]),(0,s.jsxs)("div",{className:(0,t.classNames)(e.className,"doc-component"),children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("title",{children:e.title}),(0,s.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,s.jsxs)("ul",{className:"doc-tabmenu",children:[(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":0===a}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(0),children:o})}),e.apiDocs?(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":1===a}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":2===a}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":3===a}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,s.jsxs)("div",{className:"doc-tabpanels",children:[0===a?(0,s.jsxs)("div",{className:"doc-tabpanel",children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsx)("h1",{children:e.header}),(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,s.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,s.jsx)(h.DocSectionNav,{docs:e.componentDocs})]}):null,1===a?(0,s.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,s.jsx)(u,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"doc-main",children:(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsxs)("h1",{children:[e.header," API"]}),(0,s.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===a?(0,s.jsx)(s.Fragment,{children:e.themingDocs?(0,s.jsxs)("div",{className:"doc-tabpanel",children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsx)("div",{className:"doc-intro",children:(0,s.jsxs)("h1",{children:[e.header," Theming"]})}),(0,s.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,s.jsx)(h.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===a?(0,s.jsx)(s.Fragment,{children:e.ptDocs?(0,s.jsxs)("div",{className:"doc-tabpanel",children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,s.jsx)("p",{children:e.ptDescription})]}),(0,s.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,s.jsx)(h.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},28805,e=>{e.v(s=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(s=>e.l(s))).then(()=>s(48545)))},48761,e=>{e.v(s=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(s=>e.l(s))).then(()=>s(25050)))},3828,(e,s,t)=>{s.exports=e.r(26990)},23901,e=>{"use strict";var s=e.i(91398),t=e.i(88850),i=e.i(82948),r=e.i(57294),n=e.i(28137);function o(){return(0,s.jsxs)(n.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,s.jsx)("h3",{children:"Screen Reader"}),(0,s.jsxs)("p",{children:["ProgressSpinner components uses ",(0,s.jsx)("i",{children:"progressbar"})," role. Value to describe the component can be defined using ",(0,s.jsx)("i",{children:"aria-labelledby"})," and ",(0,s.jsx)("i",{children:"aria-label"})," props."]}),(0,s.jsx)(r.CodeHighlight,{children:`
<ProgressSpinner aria-label="Loading" />
`}),(0,s.jsx)("h3",{children:"Keyboard Support"}),(0,s.jsx)("p",{children:"Component does not include any interactive elements."})]})}var a=e.i(5180),c=e.i(91788),l=e.i(10836),d=e.i(15498),p=e.i(60150),h=e.i(3935);let m=`
@layer primereact {
    .p-progress-spinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }
    
    .p-progress-spinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }
    
    .p-progress-spinner-svg {
        animation: p-progress-spinner-rotate 2s linear infinite;
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    
    .p-progress-spinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: #d62d20;
        animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }
}

@keyframes p-progress-spinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes p-progress-spinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@keyframes p-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%,
    90% {
        stroke: #ffa700;
    }
}
`,u=d.ComponentBase.extend({defaultProps:{__TYPE:"ProgressSpinner",id:null,style:null,className:null,strokeWidth:"2",fill:"none",animationDuration:"2s",children:void 0},css:{classes:{root:"p-progress-spinner",spinner:"p-progress-spinner-svg",circle:"p-progress-spinner-circle"},styles:m,inlineStyles:{spinner:({props:e})=>({animationDuration:e.animationDuration})}}}),x=c.memo(c.forwardRef((e,t)=>{let i=(0,p.useMergeProps)(),r=c.useContext(l.PrimeReactContext),n=u.getProps(e,r),o=c.useRef(null),{ptm:a,cx:m,sx:x,isUnstyled:j}=u.setMetaData({props:n});(0,d.useHandleStyle)(u.css.styles,j,{name:"progressspinner"}),c.useImperativeHandle(t,()=>({props:n,getElement:()=>o.current}));let f=i({id:n.id,ref:o,style:n.style,className:(0,h.classNames)(n.className,m("root")),role:"progressbar","aria-busy":!0},u.getOtherProps(n),a("root")),g=i({className:m("spinner"),viewBox:"25 25 50 50",style:x("spinner")},a("spinner")),b=i({className:m("circle"),cx:"50",cy:"50",r:"20",fill:n.fill,strokeWidth:n.strokeWidth,strokeMiterlimit:"10"},a("circle"));return(0,s.jsx)("div",{...f,children:(0,s.jsx)("svg",{...g,children:(0,s.jsx)("circle",{...b})})})}));function j(e){let t={basic:`
<ProgressSpinner />
        `,javascript:`
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <ProgressSpinner />
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <ProgressSpinner />
        </div>
    );
}
        `};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.DocSectionText,{...e,children:(0,s.jsx)("p",{children:"An infinite spin animation is displayed by default."})}),(0,s.jsx)("div",{className:"card flex justify-content-center",children:(0,s.jsx)(x,{})}),(0,s.jsx)(a.DocSectionCode,{code:t})]})}function f(e){let t={basic:`
<ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
        `,javascript:`
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function CustomDemo() {
    return (
        <div className="card">
            <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function CustomDemo() {
    return (
        <div className="card">
            <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
        </div>
    );
}
        `};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.DocSectionText,{...e,children:(0,s.jsxs)("p",{children:["ProgressSpinner can be customized with styling property like ",(0,s.jsx)("i",{children:"style"}),", ",(0,s.jsx)("i",{children:"strokeWidth"})," and ",(0,s.jsx)("i",{children:"fill"}),"."]})}),(0,s.jsx)("div",{className:"card flex justify-content-center",children:(0,s.jsx)(x,{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"var(--surface-ground)",animationDuration:".5s"})}),(0,s.jsx)(a.DocSectionCode,{code:t})]})}function g(e){let t={basic:`
import { ProgressSpinner } from 'primereact/progressspinner';
        `};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.DocSectionText,{...e}),(0,s.jsx)(a.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}x.displayName="ProgressSpinner";let b=e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.DocSectionText,{...e}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/progressspinner.jpg",alt:"progressspinner"})})]});function y(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.DocSectionText,{...e,children:(0,s.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,s.jsx)("div",{className:"doc-tablewrapper",children:(0,s.jsxs)("table",{className:"doc-table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Element"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"p-progress-spinner"}),(0,s.jsx)("td",{children:"Container element."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"p-progress-circle"}),(0,s.jsx)("td",{children:"SVG element."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"p-progress-path"}),(0,s.jsx)("td",{children:"Circle element."})]})]})]})})]})}var v=e.i(41158);function N(e){let t={basic:`
const Tailwind = {          
    global: {
        css: \`
        .progress-spinner-circle {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: 0;
            animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
            stroke-linecap: round;
        }

        @keyframes p-progress-spinner-dash{
            0% {
                stroke-dasharray: 1, 200;
                stroke-dashoffset: 0;
            }
            
            50% {
                stroke-dasharray: 89, 200;
                stroke-dashoffset: -35px;
            }
            100% {
                stroke-dasharray: 89, 200;
                stroke-dashoffset: -124px;
            }
        }
        @keyframes p-progress-spinner-color {
            100%, 0% {
                stroke: #ff5757;
            }
            40% {
                stroke: #696cff;
            }
            66% {
                stroke: #1ea97c;
            }
            80%, 90% {
                stroke: #cc8925;
            }
        }
    \`
    },        
    progressspinner: {
        root: {
            className: classNames('relative mx-auto w-28 h-28 inline-block', 'before:block before:pt-full')
        },
        spinner: 'absolute top-0 bottom-0 left-0 right-0 m-auto w-full h-full transform origin-center animate-spin',
        circle: 'text-red-500 progress-spinner-circle'
    }
}
    `},i={javascript:`
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function UnstyledDemo() {
    return (
        <div className="card flex justify-content-center">
            <ProgressSpinner />
        </div>
    );
}
    `};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(n.DocSectionText,{...e,children:[(0,s.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,s.jsx)(v.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,s.jsx)(a.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,s.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,s.jsx)(a.DocSectionCode,{code:i,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:b},{id:"pt.progressspinner.options",label:"ProgressSpinner PT Options",component:t.default}];return(0,s.jsx)(i.DocComponent,{title:"React ProgressSpinner Component",header:"ProgressSpinner",description:"ProgressSpinner is a process status indicator.",componentDocs:[{id:"import",label:"Import",component:g},{id:"basic",label:"Basic",component:j},{id:"custom",label:"Custom",component:f},{id:"accessibility",label:"Accessibility",component:o}],apiDocs:["ProgressSpinner"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:y},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:N}]}]})}],23901)},3396,(e,s,t)=>{let i="/progressspinner";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(23901)]),s.hot&&s.hot.dispose(function(){window.__NEXT_P.push([i])})}]);