(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var s=e.i(91398),t=e.i(91788);e.s(["CodeHighlight",0,function(e){let i=(0,t.useRef)(),n=`language-${e.lang||"jsx"}`;return(0,t.useEffect)(()=>{window.Prism.highlightElement(i.current)},[]),(0,s.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,s.jsxs)("code",{ref:i,className:n,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var s=e.i(91398),t=e.i(3935),i=e.i(58678),n=e.i(3828),r=e.i(91788),l=e.i(51551),a=e.i(72124),c=e.i(41158),o=e.i(87914),d=e.i(28137);let p=e=>{let i=(0,r.useContext)(o.default),{id:a,data:p,name:u,description:h,allowLink:m=!0}=e,f=a.startsWith("pt."),v=(0,n.useRouter)();if(l.ObjectUtils.isNotEmpty(p)){let n=Object.keys(p[0]),o=(e,s)=>{let t=document.getElementById(e);t&&t.parentElement.scrollIntoView({block:"start",behavior:s})},j=(e,i,n)=>{if(m&&e)return e.split("|").map((e,l)=>{if(e.includes(u)){let t=e.indexOf(u),i=e.substring(t).replace(/(\[|\]|<|>).*$/gm,"").trim(),n=u===i?`api.${u}`:`api.${u}.${i===`${u}Props`?"props":i}`;return(0,s.jsxs)(r.default.Fragment,{children:[0!==l?"|":"",(0,s.jsx)(c.default,{href:v.basePath+v.pathname+`#${n}`,target:"_self",children:(0,s.jsx)("a",{onClick:()=>o(n,"smooth"),children:e})})]},l)}return(0,s.jsxs)(r.default.Fragment,{children:[0!==l?"|":"",i?(0,s.jsxs)("span",{id:a+"."+e,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!n}),title:n,children:[e,(0,s.jsx)(c.default,{href:v.basePath+v.pathname+`#${a+"."+e}`,target:"_self",children:(0,s.jsx)("a",{onClick:()=>o(a+"."+e),className:"doc-option-link",children:(0,s.jsx)("i",{className:"pi pi-link"})})})]}):e]},l)});let l=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return i?(0,s.jsxs)("span",{id:a+"."+l,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!n}),title:n,children:[l,(0,s.jsx)(c.default,{href:v.basePath+v.pathname+`#${a+"."+l}`,target:"_self",children:(0,s.jsx)("a",{onClick:()=>o(a+"."+l),className:"doc-option-link",children:(0,s.jsx)("i",{className:"pi pi-link"})})})]}):l},x=(0,s.jsx)(r.default.Fragment,{children:f?(0,s.jsx)("tr",{children:n.map(e=>(0,s.jsx)("th",{children:e},e))}):(0,s.jsx)("tr",{children:n.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,s.jsx)("th",{children:e},e))})}),b=(0,s.jsx)(r.default.Fragment,{children:p.map((e,n)=>{if(f){let{value:t,label:i,description:r}=e;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:t}),(0,s.jsx)("td",{children:i}),(0,s.jsx)("td",{children:r})]},n)}return(0,s.jsx)("tr",{children:Object.entries(e).map(([n,r],a)=>"readonly"!==n&&"optional"!==n&&"deprecated"!==n&&(0,s.jsx)("td",{children:"parameters"===n?r.map((e,t)=>(0,s.jsxs)("div",{className:"doc-option-params",children:[(0,s.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,s.jsx)("span",{className:"doc-option-parameter-type",children:j(e.type)}),(0,s.jsx)("br",{})]},t)):"default"===n?(0,s.jsx)("div",{className:(0,t.classNames)("doc-option-default",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:l.ObjectUtils.isEmpty(r)?"null":j(r,"name"===n,e.deprecated)}):"type"===n?(0,s.jsx)("span",{className:"doc-option-type",children:j(r,"name"===n,e.deprecated)}):"returnType"===n?(0,s.jsx)("div",{className:(0,t.classNames)("doc-option-returnType",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:j(r,"name"===n,e.deprecated)}):"description"===n||"values"===n?(0,s.jsx)("span",{className:"doc-option-description",children:r}):j(r,"name"===n,e.deprecated)},a))},n)})});return(0,s.jsxs)(r.default.Fragment,{children:[(0,s.jsx)(d.DocSectionText,{...e,children:(0,s.jsx)("p",{children:h})}),(0,s.jsx)("div",{className:"doc-tablewrapper",children:(0,s.jsxs)("table",{className:"doc-table",children:[(0,s.jsx)("thead",{children:x}),(0,s.jsx)("tbody",{children:b})]})})]},a)}return null};e.s(["default",0,p],88850);var u=e.i(71864),h=e.i(38076);function m(e){let{doc:t,header:i}=e,n=e.apiExclude,c=t.reduce((e,t)=>{let i,r=t.split("."),c=(i=r[0])&&i[0].toUpperCase()+i.slice(1)||"",o=a.default[c.toLowerCase()],d=(e,s)=>n&&n[e]&&n[e].includes(s),u=e=>n&&n[e]&&"excludeAll"===n[e];if(o){let i=(e,t)=>{if(l.ObjectUtils.isNotEmpty(o.events)&&l.ObjectUtils.isNotEmpty(o.events.values)&&!u("events")){let i={id:`api.${t}.events`,label:"Events",description:o.events.description,children:[]};Object.entries(o.events.values).forEach(([e,n])=>{let[r,l]=[`api.${t}.${e}`,e];d("event",e)||i.children.push({id:r,label:l,component:e=>(0,s.jsx)(p,{name:t,data:n.props,description:(0,s.jsxs)(s.Fragment,{children:[n.description," See ",(0,s.jsx)("i",{children:n.relatedProp}),"."]}),...e})})}),e.push(i)}if(l.ObjectUtils.isNotEmpty(o.interfaces)&&l.ObjectUtils.isNotEmpty(o.interfaces.values)&&!u("interfaces")){let i={id:`api.${t}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([e,n])=>{let[r,l]=[`api.${t}.${e}`,e];d("interfaces",e)||i.children.push({id:r,label:l,component:e=>(0,s.jsx)(p,{name:t,data:n.props,description:(0,s.jsxs)(s.Fragment,{children:[n.description," ",n.extendedTypes&&(0,s.jsxs)(s.Fragment,{children:["Extends ",(0,s.jsx)("i",{children:n.extendedTypes}),"."]})]}),...e})})}),e.push(i)}if(l.ObjectUtils.isNotEmpty(o.types)&&l.ObjectUtils.isNotEmpty(o.types.values)&&!u("types")){let i={id:`api.${t}.types`,label:"Types",description:o.types.description,children:[]};Object.entries(o.types.values).forEach(([e,n])=>{let[r,l]=[`api.${t}.${e}`,e];d("types",e)||i.children.push({id:r,label:l,component:e=>(0,s.jsx)(p,{name:t,data:[n],allowLink:!1,...e})})}),e.push(i)}};if(3===r.length){let t=r[1],i=r[2];if("functions"===t){let n=o[t].values[i],r={id:`api.${c}`,label:c,children:[]},[a,d]=[`api.${c}.function`,"Function"],u=Object.entries(n).reduce((e,[s,t])=>("description"!==s&&(e[s]=t),e),{});r.children.push({id:a,label:d,component:e=>(0,s.jsx)(p,{name:c,data:[u],description:n.description,...e})});let h=n.parameters&&n.parameters.map(e=>e.type);if(l.ObjectUtils.isNotEmpty(o.interfaces)&&l.ObjectUtils.isNotEmpty(o.interfaces.values)){let e={id:`api.${c}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([t,i])=>{if(h.includes(t)){let[n,r]=[`api.${c}.${t}`,t],a={id:n,label:r,description:(0,s.jsxs)(s.Fragment,{children:[i.description," ",i.extendedTypes&&(0,s.jsxs)(s.Fragment,{children:["Extends ",(0,s.jsx)("i",{children:i.extendedTypes}),"."]})]}),children:[]};l.ObjectUtils.isNotEmpty(i.props)&&a.children.push({id:`${n}.props`,label:"Props",component:e=>(0,s.jsx)(p,{data:i.props,...e})}),l.ObjectUtils.isNotEmpty(i.callbacks)&&a.children.push({id:`${n}.callbacks`,label:"Callbacks",component:e=>(0,s.jsx)(p,{data:i.callbacks,...e})}),e.children.push(a)}}),l.ObjectUtils.isNotEmpty(e.children)&&r.children.push(e)}e.push(r)}}else o.components&&Object.entries(o.components).forEach(([n,r])=>{let a={id:`api.${n}`,label:n,description:r.description,children:[]};if(l.ObjectUtils.isNotEmpty(r.props)&&l.ObjectUtils.isNotEmpty(r.props.values)&&!u("props")){let[e,t]=[`api.${n}.props`,"Props"];if(d("props",n))return;a.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:n,data:r.props.values,description:r.props.description,...e})})}if(l.ObjectUtils.isNotEmpty(r.callbacks)&&l.ObjectUtils.isNotEmpty(r.callbacks.values)&&!u("callbacks")){let[e,t]=[`api.${n}.callbacks`,"Callbacks"];if(d("callbacks",n))return;a.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:n,data:r.callbacks.values,description:r.callbacks.description,...e})})}if(l.ObjectUtils.isNotEmpty(r.methods)&&l.ObjectUtils.isNotEmpty(r.methods.values)&&!u("methods")){let[e,t]=[`api.${n}.methods`,"Methods"];if(d("methods",n))return;a.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:n,data:r.methods.values,description:r.methods.description,...e})})}n.toLocaleLowerCase()===t.toLowerCase()&&i(a.children,n),e.push(a)}),o.model&&Object.entries(o.model).forEach(([n,r])=>{let a={id:`api.${n}`,label:n,description:r.description,children:[]};if(l.ObjectUtils.isNotEmpty(r.props)&&l.ObjectUtils.isNotEmpty(r.props.values)&&!u("props")){let[e,t]=[`api.${n}.props`,"Props"];if(d("props",n))return;a.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:n,data:r.props.values,description:r.props.description,...e})})}n.toLocaleLowerCase()===t.toLowerCase()&&i(a.children,n),e.push(a)}),o.components||o.model||i(e,c)}return e},[]);return(0,r.useEffect)(()=>{let e=window.location.hash.substring(1),s=document.getElementById(e);setTimeout(()=>{s&&s.scrollIntoView({block:"start"})},1)},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsxs)("h1",{children:[i," API"]}),(0,s.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",i," module."]})]}),(0,s.jsx)(h.DocSections,{docs:c})]}),(0,s.jsx)(u.DocSectionNav,{docs:c})]})}e.s(["DocComponent",0,function(e){let l,[a,c]=(0,r.useState)(0),o=(0,n.useRouter)();l=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{c(e),o.replace(o.pathname)};return(0,r.useEffect)(()=>{o.asPath.includes("#api")&&c(1),o.asPath.includes("#pt")&&c(3)},[o.asPath]),(0,s.jsxs)("div",{className:(0,t.classNames)(e.className,"doc-component"),children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("title",{children:e.title}),(0,s.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,s.jsxs)("ul",{className:"doc-tabmenu",children:[(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":0===a}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(0),children:l})}),e.apiDocs?(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":1===a}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":2===a}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":3===a}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,s.jsxs)("div",{className:"doc-tabpanels",children:[0===a?(0,s.jsxs)("div",{className:"doc-tabpanel",children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsx)("h1",{children:e.header}),(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,s.jsx)(h.DocSections,{docs:e.componentDocs})]}),(0,s.jsx)(u.DocSectionNav,{docs:e.componentDocs})]}):null,1===a?(0,s.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,s.jsx)(m,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"doc-main",children:(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsxs)("h1",{children:[e.header," API"]}),(0,s.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===a?(0,s.jsx)(s.Fragment,{children:e.themingDocs?(0,s.jsxs)("div",{className:"doc-tabpanel",children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsx)("div",{className:"doc-intro",children:(0,s.jsxs)("h1",{children:[e.header," Theming"]})}),(0,s.jsx)(h.DocSections,{docs:e.themingDocs})]}),(0,s.jsx)(u.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===a?(0,s.jsx)(s.Fragment,{children:e.ptDocs?(0,s.jsxs)("div",{className:"doc-tabpanel",children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,s.jsx)("p",{children:e.ptDescription})]}),(0,s.jsx)(h.DocSections,{docs:e.ptDocs})]}),(0,s.jsx)(u.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},36785,e=>{"use strict";var s=e.i(91788),t=e.i(45543),i=e.i(20728),n=e.i(26295),r=e.i(35048),l=e.i(4632);e.s(["useOverlayListener",0,({target:e,overlay:a,listener:c,when:o=!0,type:d="click"})=>{let p=s.useRef(null),u=s.useRef(null),[h,m]=(0,i.useEventListener)({target:"window",type:d,listener:e=>{c&&c(e,{type:"outside",valid:3!==e.which&&N(e)})},when:o}),[f,v]=(0,r.useResizeListener)({listener:e=>{c&&c(e,{type:"resize",valid:!t.DomHandler.isTouchDevice()})},when:o}),[j,x]=(0,i.useEventListener)({target:"window",type:"orientationchange",listener:e=>{c&&c(e,{type:"orientationchange",valid:!0})},when:o}),[b,y]=(0,n.useOverlayScrollListener)({target:e,listener:e=>{c&&c(e,{type:"scroll",valid:!0})},when:o}),N=e=>p.current&&!(p.current.isSameNode(e.target)||p.current.contains(e.target)||u.current&&u.current.contains(e.target)),g=()=>{m(),v(),x(),y()};return s.useEffect(()=>{o?(p.current=t.DomHandler.getTargetElement(e),u.current=t.DomHandler.getTargetElement(a)):(g(),p.current=u.current=null)},[e,a,o]),(0,l.useUnmountEffect)(()=>{g()}),[()=>{h(),f(),j(),b()},g]}])},28805,e=>{e.v(s=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(s=>e.l(s))).then(()=>s(48545)))},48761,e=>{e.v(s=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(s=>e.l(s))).then(()=>s(25050)))},3828,(e,s,t)=>{s.exports=e.r(26990)},97824,e=>{"use strict";var s=e.i(91398),t=e.i(82948),i=e.i(5180),n=e.i(28137),r=e.i(57724),l=e.i(36785),a=e.i(41158),c=e.i(91788),o=e.i(10836);function d(e){let t=(0,c.useContext)(o.PrimeReactContext),[d,p]=(0,c.useState)(!1),u=(0,c.useRef)(null),h=(0,c.useRef)(null),[m,f]=(0,l.useOverlayListener)({target:u.current,overlay:h.current,listener:(e,s)=>{s.valid&&(t.hideOverlaysOnDocumentScrolling||"outside"===s.type)&&p(!1)},options:{passive:!0},when:d});(0,c.useEffect)(()=>(m(),()=>{f()}),[m,f]);let v={basic:`
const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
    target: buttonRef.current,
    overlay: overlayRef.current,
    listener: handleScroll,
    options: { passive: true },
    when: visible
});
        `,javascript:`
import React, { useState, useRef, useEffect } from 'react'; 
import { Button } from 'primereact/button';
import { useOverlayScrollListener } from 'primereact/hooks';

export default function BasicDemo() {
    const [visible, setVisible] = useState(false);
    const buttonRef = useRef(null);
    const overlayRef = useRef(null);

    const handleEvents = (event, options) => {
        if (options.valid) setVisible(false);
    };

    const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
        target: buttonRef.current,
        overlay: overlayRef.current,
        listener: handleEvents,
        options: { passive: true },
        when: visible
    });

    useEffect(() => {
        bindOverlayListener();

        return () => {
            unbindOverlayListener();
        };
    }, [bindOverlayListener, unbindOverlayListener]);

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <div className="w-20rem h-15rem p-3 surface-border border-round border-1 overflow-auto">
                <div className="h-30rem">
                    <div className="relative">
                        <Button ref={buttonRef} onClick={() => setVisible(true)} label="Show" />
                        {visible ? (
                            <div ref={overlayRef} className="absolute border-round shadow-2 p-5 surface-overlay z-2 white-space-nowrap scalein origin-top">
                                Popup Content
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState, useRef, useEffect } from 'react'; 
import { Button } from 'primereact/button';
import { useOverlayScrollListener } from 'primereact/hooks';

export default function BasicDemo() {
    const [visible, setVisible] = useState(false);
    const buttonRef = useRef(null);
    const overlayRef = useRef(null);

    const handleEvents = (event, options) => {
        if (options.valid) setVisible(false);
    };

    const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
        target: buttonRef.current,
        overlay: overlayRef.current,
        listener: handleEvents,
        options: { passive: true },
        when: visible
    });

    useEffect(() => {
        bindOverlayListener();

        return () => {
            unbindOverlayListener();
        };
    }, [bindOverlayListener, unbindOverlayListener]);

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <div className="w-20rem h-15rem p-3 surface-border border-round border-1 overflow-auto">
                <div className="h-30rem">
                    <div className="relative">
                        <Button ref={buttonRef} onClick={() => setVisible(true)} label="Show" />
                        {visible ? (
                            <div ref={overlayRef} className="absolute border-round shadow-2 p-5 surface-overlay z-2 white-space-nowrap scalein origin-top">
                                Popup Content
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
        `};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.DocSectionText,{...e,children:(0,s.jsxs)("p",{children:["This hook combines the features of ",(0,s.jsx)(a.default,{href:"/hooks/useclickotside",children:"useClickOutside"}),", ",(0,s.jsx)(a.default,{href:"/hooks/useoverlayscrollistener",children:"useOverlayScrollListener"})," and"," ",(0,s.jsx)(a.default,{href:"/hooks/useresizelistener",children:"useResizeListener"})," to handle popups positioned relative to another element."]})}),(0,s.jsx)("div",{className:"card flex flex-column justify-content-center align-items-center gap-2",children:(0,s.jsx)("div",{className:"w-20rem h-15rem p-3 surface-border border-round border-1 overflow-auto",children:(0,s.jsx)("div",{className:"h-30rem",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(r.Button,{ref:u,onClick:()=>p(!0),label:"Show"}),d?(0,s.jsx)("div",{ref:h,className:"absolute border-round shadow-2 p-5 surface-overlay z-2 white-space-nowrap scalein origin-top",children:"Popup Content"}):null]})})})}),(0,s.jsx)(i.DocSectionCode,{code:v})]})}function p(e){let t={basic:`
import { useOverlayListener } from 'primereact/hooks';
        `};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.DocSectionText,{...e}),(0,s.jsx)(i.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}e.s(["default",0,()=>(0,s.jsx)(t.DocComponent,{title:"React useOverlayListener Hook",header:"useOverlayListener",description:"Composition of commonly used overlay hooks.",componentDocs:[{id:"import",label:"Import",component:p},{id:"basic",label:"Basic",component:d}],apiDocs:["hooks.functions.useOverlayListener"]})],97824)},72869,(e,s,t)=>{let i="/hooks/useoverlaylistener";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(97824)]),s.hot&&s.hot.dispose(function(){window.__NEXT_P.push([i])})}]);