(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),s=e.i(91788);e.s(["CodeHighlight",0,function(e){let i=(0,s.useRef)(),r=`language-${e.lang||"jsx"}`;return(0,s.useEffect)(()=>{window.Prism.highlightElement(i.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:i,className:r,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),s=e.i(3935),i=e.i(58678),r=e.i(3828),a=e.i(91788),c=e.i(51551),l=e.i(72124),n=e.i(41158),o=e.i(87914),d=e.i(28137);let p=e=>{let i=(0,a.useContext)(o.default),{id:l,data:p,name:m,description:u,allowLink:h=!0}=e,x=l.startsWith("pt."),f=(0,r.useRouter)();if(c.ObjectUtils.isNotEmpty(p)){let r=Object.keys(p[0]),o=(e,t)=>{let s=document.getElementById(e);s&&s.parentElement.scrollIntoView({block:"start",behavior:t})},j=(e,i,r)=>{if(h&&e)return e.split("|").map((e,c)=>{if(e.includes(m)){let s=e.indexOf(m),i=e.substring(s).replace(/(\[|\]|<|>).*$/gm,"").trim(),r=m===i?`api.${m}`:`api.${m}.${i===`${m}Props`?"props":i}`;return(0,t.jsxs)(a.default.Fragment,{children:[0!==c?"|":"",(0,t.jsx)(n.default,{href:f.basePath+f.pathname+`#${r}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(r,"smooth"),children:e})})]},c)}return(0,t.jsxs)(a.default.Fragment,{children:[0!==c?"|":"",i?(0,t.jsxs)("span",{id:l+"."+e,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!r}),title:r,children:[e,(0,t.jsx)(n.default,{href:f.basePath+f.pathname+`#${l+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(l+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},c)});let c=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return i?(0,t.jsxs)("span",{id:l+"."+c,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!r}),title:r,children:[c,(0,t.jsx)(n.default,{href:f.basePath+f.pathname+`#${l+"."+c}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(l+"."+c),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):c},v=(0,t.jsx)(a.default.Fragment,{children:x?(0,t.jsx)("tr",{children:r.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:r.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),b=(0,t.jsx)(a.default.Fragment,{children:p.map((e,r)=>{if(x){let{value:s,label:i,description:a}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:s}),(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:a})]},r)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([r,a],l)=>"readonly"!==r&&"optional"!==r&&"deprecated"!==r&&(0,t.jsx)("td",{children:"parameters"===r?a.map((e,s)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:j(e.type)}),(0,t.jsx)("br",{})]},s)):"default"===r?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-default",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:c.ObjectUtils.isEmpty(a)?"null":j(a,"name"===r,e.deprecated)}):"type"===r?(0,t.jsx)("span",{className:"doc-option-type",children:j(a,"name"===r,e.deprecated)}):"returnType"===r?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-returnType",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:j(a,"name"===r,e.deprecated)}):"description"===r||"values"===r?(0,t.jsx)("span",{className:"doc-option-description",children:a}):j(a,"name"===r,e.deprecated)},l))},r)})});return(0,t.jsxs)(a.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:u})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:v}),(0,t.jsx)("tbody",{children:b})]})})]},l)}return null};e.s(["default",0,p],88850);var m=e.i(71864),u=e.i(38076);function h(e){let{doc:s,header:i}=e,r=e.apiExclude,n=s.reduce((e,s)=>{let i,a=s.split("."),n=(i=a[0])&&i[0].toUpperCase()+i.slice(1)||"",o=l.default[n.toLowerCase()],d=(e,t)=>r&&r[e]&&r[e].includes(t),m=e=>r&&r[e]&&"excludeAll"===r[e];if(o){let i=(e,s)=>{if(c.ObjectUtils.isNotEmpty(o.events)&&c.ObjectUtils.isNotEmpty(o.events.values)&&!m("events")){let i={id:`api.${s}.events`,label:"Events",description:o.events.description,children:[]};Object.entries(o.events.values).forEach(([e,r])=>{let[a,c]=[`api.${s}.${e}`,e];d("event",e)||i.children.push({id:a,label:c,component:e=>(0,t.jsx)(p,{name:s,data:r.props,description:(0,t.jsxs)(t.Fragment,{children:[r.description," See ",(0,t.jsx)("i",{children:r.relatedProp}),"."]}),...e})})}),e.push(i)}if(c.ObjectUtils.isNotEmpty(o.interfaces)&&c.ObjectUtils.isNotEmpty(o.interfaces.values)&&!m("interfaces")){let i={id:`api.${s}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([e,r])=>{let[a,c]=[`api.${s}.${e}`,e];d("interfaces",e)||i.children.push({id:a,label:c,component:e=>(0,t.jsx)(p,{name:s,data:r.props,description:(0,t.jsxs)(t.Fragment,{children:[r.description," ",r.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:r.extendedTypes}),"."]})]}),...e})})}),e.push(i)}if(c.ObjectUtils.isNotEmpty(o.types)&&c.ObjectUtils.isNotEmpty(o.types.values)&&!m("types")){let i={id:`api.${s}.types`,label:"Types",description:o.types.description,children:[]};Object.entries(o.types.values).forEach(([e,r])=>{let[a,c]=[`api.${s}.${e}`,e];d("types",e)||i.children.push({id:a,label:c,component:e=>(0,t.jsx)(p,{name:s,data:[r],allowLink:!1,...e})})}),e.push(i)}};if(3===a.length){let s=a[1],i=a[2];if("functions"===s){let r=o[s].values[i],a={id:`api.${n}`,label:n,children:[]},[l,d]=[`api.${n}.function`,"Function"],m=Object.entries(r).reduce((e,[t,s])=>("description"!==t&&(e[t]=s),e),{});a.children.push({id:l,label:d,component:e=>(0,t.jsx)(p,{name:n,data:[m],description:r.description,...e})});let u=r.parameters&&r.parameters.map(e=>e.type);if(c.ObjectUtils.isNotEmpty(o.interfaces)&&c.ObjectUtils.isNotEmpty(o.interfaces.values)){let e={id:`api.${n}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([s,i])=>{if(u.includes(s)){let[r,a]=[`api.${n}.${s}`,s],l={id:r,label:a,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),children:[]};c.ObjectUtils.isNotEmpty(i.props)&&l.children.push({id:`${r}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:i.props,...e})}),c.ObjectUtils.isNotEmpty(i.callbacks)&&l.children.push({id:`${r}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:i.callbacks,...e})}),e.children.push(l)}}),c.ObjectUtils.isNotEmpty(e.children)&&a.children.push(e)}e.push(a)}}else o.components&&Object.entries(o.components).forEach(([r,a])=>{let l={id:`api.${r}`,label:r,description:a.description,children:[]};if(c.ObjectUtils.isNotEmpty(a.props)&&c.ObjectUtils.isNotEmpty(a.props.values)&&!m("props")){let[e,s]=[`api.${r}.props`,"Props"];if(d("props",r))return;l.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:a.props.values,description:a.props.description,...e})})}if(c.ObjectUtils.isNotEmpty(a.callbacks)&&c.ObjectUtils.isNotEmpty(a.callbacks.values)&&!m("callbacks")){let[e,s]=[`api.${r}.callbacks`,"Callbacks"];if(d("callbacks",r))return;l.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:a.callbacks.values,description:a.callbacks.description,...e})})}if(c.ObjectUtils.isNotEmpty(a.methods)&&c.ObjectUtils.isNotEmpty(a.methods.values)&&!m("methods")){let[e,s]=[`api.${r}.methods`,"Methods"];if(d("methods",r))return;l.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:a.methods.values,description:a.methods.description,...e})})}r.toLocaleLowerCase()===s.toLowerCase()&&i(l.children,r),e.push(l)}),o.model&&Object.entries(o.model).forEach(([r,a])=>{let l={id:`api.${r}`,label:r,description:a.description,children:[]};if(c.ObjectUtils.isNotEmpty(a.props)&&c.ObjectUtils.isNotEmpty(a.props.values)&&!m("props")){let[e,s]=[`api.${r}.props`,"Props"];if(d("props",r))return;l.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:a.props.values,description:a.props.description,...e})})}r.toLocaleLowerCase()===s.toLowerCase()&&i(l.children,r),e.push(l)}),o.components||o.model||i(e,n)}return e},[]);return(0,a.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[i," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",i," module."]})]}),(0,t.jsx)(u.DocSections,{docs:n})]}),(0,t.jsx)(m.DocSectionNav,{docs:n})]})}e.s(["DocComponent",0,function(e){let c,[l,n]=(0,a.useState)(0),o=(0,r.useRouter)();c=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{n(e),o.replace(o.pathname)};return(0,a.useEffect)(()=>{o.asPath.includes("#api")&&n(1),o.asPath.includes("#pt")&&n(3)},[o.asPath]),(0,t.jsxs)("div",{className:(0,s.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":0===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:c})}),e.apiDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":1===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":2===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":3===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===l?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(u.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.componentDocs})]}):null,1===l?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===l?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(u.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===l?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(u.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},3828,(e,t,s)=>{t.exports=e.r(26990)},21690,e=>{"use strict";var t=e.i(91398),s=e.i(82948),i=e.i(5180),r=e.i(28137),a=e.i(57724),c=e.i(3935),l=e.i(91788),n=e.i(20728);function o({mode:e="both",initialValue:t={x:0,y:0}}){let[s,i]=l.useState(t),[r,a]=l.useState(!1),c=l.useRef(!1),d=l.useRef(!1),p=l.useRef(null),m=e=>C({x:e.clientX,y:e.clientY}),u=()=>{d.current&&c.current&&(d.current=!1,a(!1),M())},h=e=>{e.cancelable&&e.preventDefault(),C({x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY})},[x,f]=(0,n.useEventListener)({type:"mousemove",listener:m}),[j,v]=(0,n.useEventListener)({type:"mouseup",listener:u}),[b,g]=(0,n.useEventListener)({type:"touchmove",listener:h}),[y,N]=(0,n.useEventListener)({type:"touchend",listener:u}),[k,E]=(0,n.useEventListener)({target:p,type:"mousedown",listener:e=>{O(),e.preventDefault(),m(e)}}),[$,w]=(0,n.useEventListener)({target:p,type:"touchstart",listener:e=>{e.cancelable&&e.preventDefault(),O(),h(e)},options:{passive:!1}}),D=(e,t,s)=>Math.min(Math.max(e,t),s),M=()=>{f(),v(),g(),N()};l.useEffect(()=>{c.current=!0},[]);let O=()=>{!d.current&&c.current&&(d.current=!0,a(!0),x(),j(),b(),y())},C=({x:t,y:s})=>{if(d.current){let r=p.current.getBoundingClientRect(),{clampedX:a,clampedY:c}=(({x:e,y:t})=>({clampedX:D(e,0,1),clampedY:D(t,0,1)}))({x:(t-r.left)/r.width,y:(s-r.top)/r.height});(({clampedX:t,clampedY:s})=>{"vertical"===e?i({y:1-s}):"horizontal"===e?i({x:t}):"both"===e&&i({x:t,y:s})})({clampedX:a,clampedY:c})}};return l.useEffect(()=>(p.current&&(k(),$()),()=>{p.current&&(E(),w())}),[k,$,s,E,w]),{ref:p,...s,active:r,reset:()=>{i(t)}}}function d(e){let{ref:s,x:l,y:n,active:d,reset:p}=o({initialValue:{x:.2,y:.6}}),m={basic:`
const { ref, x, y, active, reset } = useMove({ initialValue: { x: 0.2, y: 0.6 } });
        `,javascript:`
import React from 'react'; 
import { useMove } from 'primereact/hooks';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';

export default function BasicDemo() {
    const { ref, x, y, active, reset } = useMove({ initialValue: { x: 0.2, y: 0.6 } });

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <div className="flex gap-3 text-xl">
                <span>
                    X: <strong>{\`\${Math.round(x * 100)}\`}</strong>
                </span>
                <span>
                    Y: <strong>{\`\${Math.round(y * 100)}\`}</strong>
                </span>
            </div>
            <div ref={ref} className="relative w-14rem h-8rem surface-ground border-round">
                <div className={classNames('absolute border-circle w-2rem h-2rem flex align-items-center justify-content-center', { 'bg-green-500': active, 'bg-primary': !active })}
                    style={{
                        left: \`calc(\${x * 100}% - 1rem)\`,
                        top: \`calc(\${y * 100}% - 1rem)\`,
                        cursor: 'grab'
                    }}>
                    <i className="pi pi-arrows-alt"></i>
                </div>
            </div>
            <Button onClick={reset} label="Reset" className="p-button-outlined"></Button>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { useMove } from 'primereact/hooks';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';

export default function BasicDemo() {
    const { ref, x, y, active, reset } = useMove({ initialValue: { x: 0.2, y: 0.6 } });

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <div className="flex gap-3 text-xl">
                <span>
                    X: <strong>{\`\${Math.round(x * 100)}\`}</strong>
                </span>
                <span>
                    Y: <strong>{\`\${Math.round(y * 100)}\`}</strong>
                </span>
            </div>
            <div ref={ref} className="relative w-14rem h-8rem surface-ground border-round">
                <div className={classNames('absolute border-circle w-2rem h-2rem flex align-items-center justify-content-center', { 'bg-green-500': active, 'bg-primary': !active })}
                    style={{
                        left: \`calc(\${x * 100}% - 1rem)\`,
                        top: \`calc(\${y * 100}% - 1rem)\`,
                        cursor: 'grab'
                    }}>
                    <i className="pi pi-arrows-alt"></i>
                </div>
            </div>
            <Button onClick={reset} label="Reset" className="p-button-outlined"></Button>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Drag the marker over the element to track the position."})}),(0,t.jsxs)("div",{className:"card flex flex-column align-items-center gap-3",children:[(0,t.jsxs)("div",{className:"flex gap-3 text-xl",children:[(0,t.jsxs)("span",{children:["X: ",(0,t.jsx)("strong",{children:`${Math.round(100*l)}`})]}),(0,t.jsxs)("span",{children:["Y: ",(0,t.jsx)("strong",{children:`${Math.round(100*n)}`})]})]}),(0,t.jsx)("div",{ref:s,className:"relative w-14rem h-8rem surface-ground border-round",children:(0,t.jsx)("div",{className:(0,c.classNames)("absolute border-circle w-2rem h-2rem flex align-items-center justify-content-center",{"bg-green-500":d,"bg-primary":!d}),style:{left:`calc(${100*l}% - 1rem)`,top:`calc(${100*n}% - 1rem)`,cursor:"grab"},children:(0,t.jsx)("i",{className:"pi pi-arrows-alt"})})}),(0,t.jsx)(a.Button,{onClick:p,label:"Reset",className:"p-button-outlined"})]}),(0,t.jsx)(i.DocSectionCode,{code:m})]})}function p(e){let{ref:s,x:a}=o({initialValue:{x:.2}}),c={basic:`
const { ref, x } = useMove({ initialValue: { x: 0.2 } });
        `,javascript:`
import React from 'react'; 
import {useMove } from 'primereact/hooks';

export default function HorizontalDemo() {
    const { ref, x } = useMove({ initialValue: { x: 0.2 } });

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <div ref={ref} className="flex align-items-center justify-content-center relative surface-ground w-14rem z-1" style={{ height: '8px' }}>
                <div className="absolute bg-teal-500 z-2"
                    style={{
                        left: 0,
                        width: \`\${x * 100}%\`,
                        height: '8px'
                    }}>
                </div>
                <div className="absolute block border-circle border-solid border-2 border-teal-500 -ml-2 surface-overlay z-3"
                    style={{
                        width: '18px',
                        height: '18px',
                        left: \`calc(\${x * 100}%)\`,
                        cursor: 'grab'
                    }}>
                </div>
            </div>
            <span className="text-xl">
                Value: <strong>{Math.round(x * 100)}</strong>
            </span>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import {useMove } from 'primereact/hooks';

export default function HorizontalDemo() {
    const { ref, x } = useMove({ initialValue: { x: 0.2 } });

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <div ref={ref} className="flex align-items-center justify-content-center relative surface-ground w-14rem z-1" style={{ height: '8px' }}>
                <div className="absolute bg-teal-500 z-2"
                    style={{
                        left: 0,
                        width: \`\${x * 100}%\`,
                        height: '8px'
                    }}>
                </div>
                <div className="absolute block border-circle border-solid border-2 border-teal-500 -ml-2 surface-overlay z-3"
                    style={{
                        width: '18px',
                        height: '18px',
                        left: \`calc(\${x * 100}%)\`,
                        cursor: 'grab'
                    }}>
                </div>
            </div>
            <span className="text-xl">
                Value: <strong>{Math.round(x * 100)}</strong>
            </span>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"A horizontal slider implementation by utilizing the x-axis only."})}),(0,t.jsxs)("div",{className:"card flex flex-column align-items-center gap-3",children:[(0,t.jsxs)("div",{ref:s,className:"flex align-items-center justify-content-center relative surface-ground w-14rem z-1",style:{height:"8px"},children:[(0,t.jsx)("div",{className:"absolute bg-teal-500 z-2",style:{left:0,width:`${100*a}%`,height:"8px"}}),(0,t.jsx)("div",{className:"absolute block border-circle border-solid border-2 border-teal-500 -ml-2 surface-overlay z-3",style:{width:"18px",height:"18px",left:`calc(${100*a}%)`,cursor:"grab"}})]}),(0,t.jsxs)("span",{className:"text-xl",children:["Value: ",(0,t.jsx)("strong",{children:Math.round(100*a)})]})]}),(0,t.jsx)(i.DocSectionCode,{code:c})]})}function m(e){let s={basic:`
import { useMove } from 'primereact/hooks';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function u(e){let{ref:s,y:a}=o({initialValue:{y:.2},mode:"vertical"}),c={basic:`
const { ref, y } = useMove({ initialValue: { y: 0.2 } });
        `,javascript:`
import React from 'react'; 
import {useMove } from 'primereact/hooks';

export default function VerticalDemo() {
    const { ref, y } = useMove({ initialValue: { y: 0.2 }, mode: 'vertical' });

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-3">
            <div ref={ref} className="flex align-items-center justify-content-center relative surface-ground h-14rem z-1" style={{ width: '8px' }}>
                <div className="absolute bg-purple-500 z-2"
                    style={{
                        bottom: 0,
                        width: '8px',
                        height: \`\${y * 100}%\`
                    }}>
                </div>
                <div className='absolute block border-circle border-solid border-2 border-purple -mb-2 surface-overlay z-3'
                    style={{
                        width: '18px',
                        height: '18px',
                        bottom: \`calc(\${y * 100}%)\`,
                        cursor: 'grab'
                    }}>
                </div>
            </div>
            <span className="text-xl">
                Value: <strong>{Math.round(y * 100)}</strong>
            </span>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import {useMove } from 'primereact/hooks';

export default function VerticalDemo() {
    const { ref, y } = useMove({ initialValue: { y: 0.2 }, mode: 'vertical' });

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-3">
            <div ref={ref} className="flex align-items-center justify-content-center relative surface-ground h-14rem z-1" style={{ width: '8px' }}>
                <div className="absolute bg-purple-500 z-2"
                    style={{
                        bottom: 0,
                        width: '8px',
                        height: \`\${y * 100}%\`
                    }}>
                </div>
                <div className='absolute block border-circle border-solid border-2 border-purple -mb-2 surface-overlay z-3'
                    style={{
                        width: '18px',
                        height: '18px',
                        bottom: \`calc(\${y * 100}%)\`,
                        cursor: 'grab'
                    }}>
                </div>
            </div>
            <span className="text-xl">
                Value: <strong>{Math.round(y * 100)}</strong>
            </span>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"A vertical slider implementation by utilizing the y-axis only."})}),(0,t.jsxs)("div",{className:"card flex flex-column justify-content-center align-items-center gap-3",children:[(0,t.jsxs)("div",{ref:s,className:"flex align-items-center justify-content-center relative surface-ground h-14rem z-1",style:{width:"8px"},children:[(0,t.jsx)("div",{className:"absolute bg-purple-500 z-2",style:{bottom:0,width:"8px",height:`${100*a}%`}}),(0,t.jsx)("div",{className:"absolute block border-circle border-solid border-2 border-purple-500 -mb-2 surface-overlay z-3",style:{width:"18px",height:"18px",bottom:`calc(${100*a}%)`,cursor:"grab"}})]}),(0,t.jsxs)("span",{className:"text-xl",children:["Value: ",(0,t.jsx)("strong",{children:Math.round(100*a)})]})]}),(0,t.jsx)(i.DocSectionCode,{code:c})]})}e.s(["default",0,()=>(0,t.jsx)(s.DocComponent,{title:"React useMove Hook",header:"useMove",description:"Handles move interactions via touch and mouse events.",componentDocs:[{id:"import",label:"Import",component:m},{id:"basic",label:"Basic",component:d},{id:"horizontal",label:"Horizontal",component:p},{id:"vertical",label:"Vertical",component:u}],apiDocs:["hooks.functions.useMove"]})],21690)},60393,(e,t,s)=>{let i="/hooks/usemove";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(21690)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);