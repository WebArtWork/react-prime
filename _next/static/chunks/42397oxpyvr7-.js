(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var s=e.i(91398),t=e.i(91788);e.s(["CodeHighlight",0,function(e){let n=(0,t.useRef)(),r=`language-${e.lang||"jsx"}`;return(0,t.useEffect)(()=>{window.Prism.highlightElement(n.current)},[]),(0,s.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,s.jsxs)("code",{ref:n,className:r,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var s=e.i(91398),t=e.i(3935),n=e.i(58678),r=e.i(3828),i=e.i(91788),c=e.i(51551),o=e.i(72124),a=e.i(41158),l=e.i(87914),d=e.i(28137);let p=e=>{let n=(0,i.useContext)(l.default),{id:o,data:p,name:m,description:u,allowLink:h=!0}=e,x=o.startsWith("pt."),j=(0,r.useRouter)();if(c.ObjectUtils.isNotEmpty(p)){let r=Object.keys(p[0]),l=(e,s)=>{let t=document.getElementById(e);t&&t.parentElement.scrollIntoView({block:"start",behavior:s})},f=(e,n,r)=>{if(h&&e)return e.split("|").map((e,c)=>{if(e.includes(m)){let t=e.indexOf(m),n=e.substring(t).replace(/(\[|\]|<|>).*$/gm,"").trim(),r=m===n?`api.${m}`:`api.${m}.${n===`${m}Props`?"props":n}`;return(0,s.jsxs)(i.default.Fragment,{children:[0!==c?"|":"",(0,s.jsx)(a.default,{href:j.basePath+j.pathname+`#${r}`,target:"_self",children:(0,s.jsx)("a",{onClick:()=>l(r,"smooth"),children:e})})]},c)}return(0,s.jsxs)(i.default.Fragment,{children:[0!==c?"|":"",n?(0,s.jsxs)("span",{id:o+"."+e,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!r}),title:r,children:[e,(0,s.jsx)(a.default,{href:j.basePath+j.pathname+`#${o+"."+e}`,target:"_self",children:(0,s.jsx)("a",{onClick:()=>l(o+"."+e),className:"doc-option-link",children:(0,s.jsx)("i",{className:"pi pi-link"})})})]}):e]},c)});let c=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return n?(0,s.jsxs)("span",{id:o+"."+c,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!r}),title:r,children:[c,(0,s.jsx)(a.default,{href:j.basePath+j.pathname+`#${o+"."+c}`,target:"_self",children:(0,s.jsx)("a",{onClick:()=>l(o+"."+c),className:"doc-option-link",children:(0,s.jsx)("i",{className:"pi pi-link"})})})]}):c},g=(0,s.jsx)(i.default.Fragment,{children:x?(0,s.jsx)("tr",{children:r.map(e=>(0,s.jsx)("th",{children:e},e))}):(0,s.jsx)("tr",{children:r.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,s.jsx)("th",{children:e},e))})}),v=(0,s.jsx)(i.default.Fragment,{children:p.map((e,r)=>{if(x){let{value:t,label:n,description:i}=e;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:t}),(0,s.jsx)("td",{children:n}),(0,s.jsx)("td",{children:i})]},r)}return(0,s.jsx)("tr",{children:Object.entries(e).map(([r,i],o)=>"readonly"!==r&&"optional"!==r&&"deprecated"!==r&&(0,s.jsx)("td",{children:"parameters"===r?i.map((e,t)=>(0,s.jsxs)("div",{className:"doc-option-params",children:[(0,s.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,s.jsx)("span",{className:"doc-option-parameter-type",children:f(e.type)}),(0,s.jsx)("br",{})]},t)):"default"===r?(0,s.jsx)("div",{className:(0,t.classNames)("doc-option-default",{"doc-option-dark":n.darkMode,"doc-option-light":!n.darkMode}),children:c.ObjectUtils.isEmpty(i)?"null":f(i,"name"===r,e.deprecated)}):"type"===r?(0,s.jsx)("span",{className:"doc-option-type",children:f(i,"name"===r,e.deprecated)}):"returnType"===r?(0,s.jsx)("div",{className:(0,t.classNames)("doc-option-returnType",{"doc-option-dark":n.darkMode,"doc-option-light":!n.darkMode}),children:f(i,"name"===r,e.deprecated)}):"description"===r||"values"===r?(0,s.jsx)("span",{className:"doc-option-description",children:i}):f(i,"name"===r,e.deprecated)},o))},r)})});return(0,s.jsxs)(i.default.Fragment,{children:[(0,s.jsx)(d.DocSectionText,{...e,children:(0,s.jsx)("p",{children:u})}),(0,s.jsx)("div",{className:"doc-tablewrapper",children:(0,s.jsxs)("table",{className:"doc-table",children:[(0,s.jsx)("thead",{children:g}),(0,s.jsx)("tbody",{children:v})]})})]},o)}return null};e.s(["default",0,p],88850);var m=e.i(71864),u=e.i(38076);function h(e){let{doc:t,header:n}=e,r=e.apiExclude,a=t.reduce((e,t)=>{let n,i=t.split("."),a=(n=i[0])&&n[0].toUpperCase()+n.slice(1)||"",l=o.default[a.toLowerCase()],d=(e,s)=>r&&r[e]&&r[e].includes(s),m=e=>r&&r[e]&&"excludeAll"===r[e];if(l){let n=(e,t)=>{if(c.ObjectUtils.isNotEmpty(l.events)&&c.ObjectUtils.isNotEmpty(l.events.values)&&!m("events")){let n={id:`api.${t}.events`,label:"Events",description:l.events.description,children:[]};Object.entries(l.events.values).forEach(([e,r])=>{let[i,c]=[`api.${t}.${e}`,e];d("event",e)||n.children.push({id:i,label:c,component:e=>(0,s.jsx)(p,{name:t,data:r.props,description:(0,s.jsxs)(s.Fragment,{children:[r.description," See ",(0,s.jsx)("i",{children:r.relatedProp}),"."]}),...e})})}),e.push(n)}if(c.ObjectUtils.isNotEmpty(l.interfaces)&&c.ObjectUtils.isNotEmpty(l.interfaces.values)&&!m("interfaces")){let n={id:`api.${t}.interfaces`,label:"Interfaces",description:l.interfaces.description,children:[]};Object.entries(l.interfaces.values).forEach(([e,r])=>{let[i,c]=[`api.${t}.${e}`,e];d("interfaces",e)||n.children.push({id:i,label:c,component:e=>(0,s.jsx)(p,{name:t,data:r.props,description:(0,s.jsxs)(s.Fragment,{children:[r.description," ",r.extendedTypes&&(0,s.jsxs)(s.Fragment,{children:["Extends ",(0,s.jsx)("i",{children:r.extendedTypes}),"."]})]}),...e})})}),e.push(n)}if(c.ObjectUtils.isNotEmpty(l.types)&&c.ObjectUtils.isNotEmpty(l.types.values)&&!m("types")){let n={id:`api.${t}.types`,label:"Types",description:l.types.description,children:[]};Object.entries(l.types.values).forEach(([e,r])=>{let[i,c]=[`api.${t}.${e}`,e];d("types",e)||n.children.push({id:i,label:c,component:e=>(0,s.jsx)(p,{name:t,data:[r],allowLink:!1,...e})})}),e.push(n)}};if(3===i.length){let t=i[1],n=i[2];if("functions"===t){let r=l[t].values[n],i={id:`api.${a}`,label:a,children:[]},[o,d]=[`api.${a}.function`,"Function"],m=Object.entries(r).reduce((e,[s,t])=>("description"!==s&&(e[s]=t),e),{});i.children.push({id:o,label:d,component:e=>(0,s.jsx)(p,{name:a,data:[m],description:r.description,...e})});let u=r.parameters&&r.parameters.map(e=>e.type);if(c.ObjectUtils.isNotEmpty(l.interfaces)&&c.ObjectUtils.isNotEmpty(l.interfaces.values)){let e={id:`api.${a}.interfaces`,label:"Interfaces",description:l.interfaces.description,children:[]};Object.entries(l.interfaces.values).forEach(([t,n])=>{if(u.includes(t)){let[r,i]=[`api.${a}.${t}`,t],o={id:r,label:i,description:(0,s.jsxs)(s.Fragment,{children:[n.description," ",n.extendedTypes&&(0,s.jsxs)(s.Fragment,{children:["Extends ",(0,s.jsx)("i",{children:n.extendedTypes}),"."]})]}),children:[]};c.ObjectUtils.isNotEmpty(n.props)&&o.children.push({id:`${r}.props`,label:"Props",component:e=>(0,s.jsx)(p,{data:n.props,...e})}),c.ObjectUtils.isNotEmpty(n.callbacks)&&o.children.push({id:`${r}.callbacks`,label:"Callbacks",component:e=>(0,s.jsx)(p,{data:n.callbacks,...e})}),e.children.push(o)}}),c.ObjectUtils.isNotEmpty(e.children)&&i.children.push(e)}e.push(i)}}else l.components&&Object.entries(l.components).forEach(([r,i])=>{let o={id:`api.${r}`,label:r,description:i.description,children:[]};if(c.ObjectUtils.isNotEmpty(i.props)&&c.ObjectUtils.isNotEmpty(i.props.values)&&!m("props")){let[e,t]=[`api.${r}.props`,"Props"];if(d("props",r))return;o.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:r,data:i.props.values,description:i.props.description,...e})})}if(c.ObjectUtils.isNotEmpty(i.callbacks)&&c.ObjectUtils.isNotEmpty(i.callbacks.values)&&!m("callbacks")){let[e,t]=[`api.${r}.callbacks`,"Callbacks"];if(d("callbacks",r))return;o.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:r,data:i.callbacks.values,description:i.callbacks.description,...e})})}if(c.ObjectUtils.isNotEmpty(i.methods)&&c.ObjectUtils.isNotEmpty(i.methods.values)&&!m("methods")){let[e,t]=[`api.${r}.methods`,"Methods"];if(d("methods",r))return;o.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:r,data:i.methods.values,description:i.methods.description,...e})})}r.toLocaleLowerCase()===t.toLowerCase()&&n(o.children,r),e.push(o)}),l.model&&Object.entries(l.model).forEach(([r,i])=>{let o={id:`api.${r}`,label:r,description:i.description,children:[]};if(c.ObjectUtils.isNotEmpty(i.props)&&c.ObjectUtils.isNotEmpty(i.props.values)&&!m("props")){let[e,t]=[`api.${r}.props`,"Props"];if(d("props",r))return;o.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:r,data:i.props.values,description:i.props.description,...e})})}r.toLocaleLowerCase()===t.toLowerCase()&&n(o.children,r),e.push(o)}),l.components||l.model||n(e,a)}return e},[]);return(0,i.useEffect)(()=>{let e=window.location.hash.substring(1),s=document.getElementById(e);setTimeout(()=>{s&&s.scrollIntoView({block:"start"})},1)},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsxs)("h1",{children:[n," API"]}),(0,s.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",n," module."]})]}),(0,s.jsx)(u.DocSections,{docs:a})]}),(0,s.jsx)(m.DocSectionNav,{docs:a})]})}e.s(["DocComponent",0,function(e){let c,[o,a]=(0,i.useState)(0),l=(0,r.useRouter)();c=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{a(e),l.replace(l.pathname)};return(0,i.useEffect)(()=>{l.asPath.includes("#api")&&a(1),l.asPath.includes("#pt")&&a(3)},[l.asPath]),(0,s.jsxs)("div",{className:(0,t.classNames)(e.className,"doc-component"),children:[(0,s.jsxs)(n.default,{children:[(0,s.jsx)("title",{children:e.title}),(0,s.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,s.jsxs)("ul",{className:"doc-tabmenu",children:[(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":0===o}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(0),children:c})}),e.apiDocs?(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":1===o}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":2===o}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":3===o}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,s.jsxs)("div",{className:"doc-tabpanels",children:[0===o?(0,s.jsxs)("div",{className:"doc-tabpanel",children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsx)("h1",{children:e.header}),(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,s.jsx)(u.DocSections,{docs:e.componentDocs})]}),(0,s.jsx)(m.DocSectionNav,{docs:e.componentDocs})]}):null,1===o?(0,s.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,s.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"doc-main",children:(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsxs)("h1",{children:[e.header," API"]}),(0,s.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===o?(0,s.jsx)(s.Fragment,{children:e.themingDocs?(0,s.jsxs)("div",{className:"doc-tabpanel",children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsx)("div",{className:"doc-intro",children:(0,s.jsxs)("h1",{children:[e.header," Theming"]})}),(0,s.jsx)(u.DocSections,{docs:e.themingDocs})]}),(0,s.jsx)(m.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===o?(0,s.jsx)(s.Fragment,{children:e.ptDocs?(0,s.jsxs)("div",{className:"doc-tabpanel",children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,s.jsx)("p",{children:e.ptDescription})]}),(0,s.jsx)(u.DocSections,{docs:e.ptDocs})]}),(0,s.jsx)(m.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},28805,e=>{e.v(s=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(s=>e.l(s))).then(()=>s(48545)))},48761,e=>{e.v(s=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(s=>e.l(s))).then(()=>s(25050)))},3828,(e,s,t)=>{s.exports=e.r(26990)},38207,e=>{"use strict";var s=e.i(91398),t=e.i(82948),n=e.i(5180),r=e.i(28137),i=e.i(91788),c=e.i(20728);let o=()=>{let[e,s]=i.useState({x:0,y:0}),t=i.useRef(null),n=i.useCallback(e=>{let n,r;if(t.current){let s=e.currentTarget.getBoundingClientRect();n=e.pageX-s.left-(window.pageXOffset||window.scrollX),r=e.pageY-s.top-(window.pageYOffset||window.scrollY)}else n=e.clientX,r=e.clientY;s({x:Math.max(0,Math.round(n)),y:Math.max(0,Math.round(r))})},[]),[r,o]=(0,c.useEventListener)({target:t,type:"mousemove",listener:n}),[a,l]=(0,c.useEventListener)({type:"mousemove",listener:n});return i.useEffect(()=>(r(),t.current||a(),()=>{o(),t.current||l()}),[a,r,l,o]),{ref:t,...e,reset:()=>s({x:0,y:0})}};function a(e){let{x:t,y:i}=o(),c={basic:`
const { x, y } = useMouse();
        `,javascript:`
import React from 'react';
import { useMouse } from 'primereact/hooks';

export default function DocumentDemo() {
    const { x, y } = useMouse();

    return (
        <div className="card flex justify-content-center gap-3 text-xl">
            <span>
                X: <strong>{x}</strong>
            </span>
            <span>
                Y: <strong>{y}</strong>
            </span>
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { useMouse } from 'primereact/hooks';

export default function DocumentDemo() {
    const { x, y } = useMouse();

    return (
        <div className="card flex justify-content-center gap-3 text-xl">
            <span>
                X: <strong>{x}</strong>
            </span>
            <span>
                Y: <strong>{y}</strong>
            </span>
        </div>
    )
}
        `};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.DocSectionText,{...e,children:(0,s.jsxs)("p",{children:["When ",(0,s.jsx)("i",{children:"ref"})," is not used, the document is used as the target."]})}),(0,s.jsxs)("div",{className:"card flex justify-content-center gap-3 text-xl",children:[(0,s.jsxs)("span",{children:["X: ",(0,s.jsx)("strong",{children:t})]}),(0,s.jsxs)("span",{children:["Y: ",(0,s.jsx)("strong",{children:i})]})]}),(0,s.jsx)(n.DocSectionCode,{code:c})]})}function l(e){let{ref:t,x:i,y:c}=o(),a={basic:`
const { ref, x, y } = useMouse();
        `,javascript:`
import React from 'react';
import { useMouse } from 'primereact/hooks';

export default function ElementDemo() {
    const { ref, x, y } = useMouse();

    return (
        <div className="card flex justify-content-center">
            <div ref={ref} className="border-round surface-ground flex flex-wrap gap-3 justify-content-center align-items-center w-full md:w-20rem h-10rem text-xl">
                <span>
                    X: <strong>{x}</strong>
                </span>
                <span>
                    Y: <strong>{y}</strong>
                </span>
            </div>
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { useMouse } from 'primereact/hooks';

export default function ElementDemo() {
    const { ref, x, y } = useMouse();

    return (
        <div className="card flex justify-content-center">
            <div ref={ref} className="border-round surface-ground flex flex-wrap gap-3 justify-content-center align-items-center w-full md:w-20rem h-10rem text-xl">
                <span>
                    X: <strong>{x}</strong>
                </span>
                <span>
                    Y: <strong>{y}</strong>
                </span>
            </div>
        </div>
    )
}
        `};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.DocSectionText,{...e,children:(0,s.jsx)("p",{children:"Hover the mouse over the element to track the mouse position."})}),(0,s.jsx)("div",{className:"card flex justify-content-center",children:(0,s.jsxs)("div",{ref:t,className:"border-round surface-ground flex flex-wrap gap-3 justify-content-center align-items-center w-full md:w-20rem h-10rem text-xl",children:[(0,s.jsxs)("span",{children:["X: ",(0,s.jsx)("strong",{children:i})]}),(0,s.jsxs)("span",{children:["Y: ",(0,s.jsx)("strong",{children:c})]})]})}),(0,s.jsx)(n.DocSectionCode,{code:a})]})}function d(e){let t={basic:`
import { useMouse } from 'primereact/hooks';
        `};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.DocSectionText,{...e}),(0,s.jsx)(n.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function p(e){let{ref:t,x:i,y:c,reset:a}=o(),l={basic:`
const { ref, x, y } = useMouse();
        `,javascript:`
import React from 'react';
import { useMouse } from 'primereact/hooks';

export default function ResetDemo() {
    const { ref, x, y, reset } = useMouse();

    return (
        <div className="card flex justify-content-center">
            <div ref={ref} onMouseLeave={reset} className="border-round surface-ground flex flex-wrap gap-3 justify-content-center align-items-center w-full md:w-20rem h-10rem text-xl">
                <span>
                    X: <strong>{x}</strong>
                </span>
                <span>
                    Y: <strong>{y}</strong>
                </span>
            </div>
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { useMouse } from 'primereact/hooks';

export default function ResetDemo() {
    const { ref, x, y, reset } = useMouse();

    return (
        <div className="card flex justify-content-center">
            <div ref={ref} onMouseLeave={reset} className="border-round surface-ground flex flex-wrap gap-3 justify-content-center align-items-center w-full md:w-20rem h-10rem text-xl">
                <span>
                    X: <strong>{x}</strong>
                </span>
                <span>
                    Y: <strong>{y}</strong>
                </span>
            </div>
        </div>
    )
}
        `};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.DocSectionText,{...e,children:(0,s.jsxs)("p",{children:["The ",(0,s.jsx)("i",{children:"reset"})," callback is provided to clear the tracked mouse position."]})}),(0,s.jsx)("div",{className:"card flex justify-content-center",children:(0,s.jsxs)("div",{ref:t,onMouseLeave:a,className:"border-round surface-ground flex flex-wrap gap-3 justify-content-center align-items-center w-full md:w-20rem h-10rem text-xl",children:[(0,s.jsxs)("span",{children:["X: ",(0,s.jsx)("strong",{children:i})]}),(0,s.jsxs)("span",{children:["Y: ",(0,s.jsx)("strong",{children:c})]})]})}),(0,s.jsx)(n.DocSectionCode,{code:l})]})}e.s(["default",0,()=>(0,s.jsx)(t.DocComponent,{title:"React useMouse Hook",header:"useMouse",description:"Tracks mouse position on an element or document body.",componentDocs:[{id:"import",label:"Import",component:d},{id:"element",label:"Element",component:l},{id:"reset",label:"Reset",component:p},{id:"document",label:"Document",component:a}],apiDocs:["hooks.functions.useMouse"]})],38207)},38285,(e,s,t)=>{let n="/hooks/usemouse";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(38207)]),s.hot&&s.hot.dispose(function(){window.__NEXT_P.push([n])})}]);