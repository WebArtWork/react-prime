(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var s=e.i(91398),t=e.i(91788);e.s(["CodeHighlight",0,function(e){let i=(0,t.useRef)(),n=`language-${e.lang||"jsx"}`;return(0,t.useEffect)(()=>{window.Prism.highlightElement(i.current)},[]),(0,s.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,s.jsxs)("code",{ref:i,className:n,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var s=e.i(91398),t=e.i(3935),i=e.i(58678),n=e.i(3828),l=e.i(91788),r=e.i(51551),c=e.i(72124),a=e.i(41158),o=e.i(87914),d=e.i(28137);let p=e=>{let i=(0,l.useContext)(o.default),{id:c,data:p,name:h,description:u,allowLink:m=!0}=e,j=c.startsWith("pt."),x=(0,n.useRouter)();if(r.ObjectUtils.isNotEmpty(p)){let n=Object.keys(p[0]),o=(e,s)=>{let t=document.getElementById(e);t&&t.parentElement.scrollIntoView({block:"start",behavior:s})},b=(e,i,n)=>{if(m&&e)return e.split("|").map((e,r)=>{if(e.includes(h)){let t=e.indexOf(h),i=e.substring(t).replace(/(\[|\]|<|>).*$/gm,"").trim(),n=h===i?`api.${h}`:`api.${h}.${i===`${h}Props`?"props":i}`;return(0,s.jsxs)(l.default.Fragment,{children:[0!==r?"|":"",(0,s.jsx)(a.default,{href:x.basePath+x.pathname+`#${n}`,target:"_self",children:(0,s.jsx)("a",{onClick:()=>o(n,"smooth"),children:e})})]},r)}return(0,s.jsxs)(l.default.Fragment,{children:[0!==r?"|":"",i?(0,s.jsxs)("span",{id:c+"."+e,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!n}),title:n,children:[e,(0,s.jsx)(a.default,{href:x.basePath+x.pathname+`#${c+"."+e}`,target:"_self",children:(0,s.jsx)("a",{onClick:()=>o(c+"."+e),className:"doc-option-link",children:(0,s.jsx)("i",{className:"pi pi-link"})})})]}):e]},r)});let r=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return i?(0,s.jsxs)("span",{id:c+"."+r,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!n}),title:n,children:[r,(0,s.jsx)(a.default,{href:x.basePath+x.pathname+`#${c+"."+r}`,target:"_self",children:(0,s.jsx)("a",{onClick:()=>o(c+"."+r),className:"doc-option-link",children:(0,s.jsx)("i",{className:"pi pi-link"})})})]}):r},f=(0,s.jsx)(l.default.Fragment,{children:j?(0,s.jsx)("tr",{children:n.map(e=>(0,s.jsx)("th",{children:e},e))}):(0,s.jsx)("tr",{children:n.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,s.jsx)("th",{children:e},e))})}),v=(0,s.jsx)(l.default.Fragment,{children:p.map((e,n)=>{if(j){let{value:t,label:i,description:l}=e;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:t}),(0,s.jsx)("td",{children:i}),(0,s.jsx)("td",{children:l})]},n)}return(0,s.jsx)("tr",{children:Object.entries(e).map(([n,l],c)=>"readonly"!==n&&"optional"!==n&&"deprecated"!==n&&(0,s.jsx)("td",{children:"parameters"===n?l.map((e,t)=>(0,s.jsxs)("div",{className:"doc-option-params",children:[(0,s.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,s.jsx)("span",{className:"doc-option-parameter-type",children:b(e.type)}),(0,s.jsx)("br",{})]},t)):"default"===n?(0,s.jsx)("div",{className:(0,t.classNames)("doc-option-default",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:r.ObjectUtils.isEmpty(l)?"null":b(l,"name"===n,e.deprecated)}):"type"===n?(0,s.jsx)("span",{className:"doc-option-type",children:b(l,"name"===n,e.deprecated)}):"returnType"===n?(0,s.jsx)("div",{className:(0,t.classNames)("doc-option-returnType",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:b(l,"name"===n,e.deprecated)}):"description"===n||"values"===n?(0,s.jsx)("span",{className:"doc-option-description",children:l}):b(l,"name"===n,e.deprecated)},c))},n)})});return(0,s.jsxs)(l.default.Fragment,{children:[(0,s.jsx)(d.DocSectionText,{...e,children:(0,s.jsx)("p",{children:u})}),(0,s.jsx)("div",{className:"doc-tablewrapper",children:(0,s.jsxs)("table",{className:"doc-table",children:[(0,s.jsx)("thead",{children:f}),(0,s.jsx)("tbody",{children:v})]})})]},c)}return null};e.s(["default",0,p],88850);var h=e.i(71864),u=e.i(38076);function m(e){let{doc:t,header:i}=e,n=e.apiExclude,a=t.reduce((e,t)=>{let i,l=t.split("."),a=(i=l[0])&&i[0].toUpperCase()+i.slice(1)||"",o=c.default[a.toLowerCase()],d=(e,s)=>n&&n[e]&&n[e].includes(s),h=e=>n&&n[e]&&"excludeAll"===n[e];if(o){let i=(e,t)=>{if(r.ObjectUtils.isNotEmpty(o.events)&&r.ObjectUtils.isNotEmpty(o.events.values)&&!h("events")){let i={id:`api.${t}.events`,label:"Events",description:o.events.description,children:[]};Object.entries(o.events.values).forEach(([e,n])=>{let[l,r]=[`api.${t}.${e}`,e];d("event",e)||i.children.push({id:l,label:r,component:e=>(0,s.jsx)(p,{name:t,data:n.props,description:(0,s.jsxs)(s.Fragment,{children:[n.description," See ",(0,s.jsx)("i",{children:n.relatedProp}),"."]}),...e})})}),e.push(i)}if(r.ObjectUtils.isNotEmpty(o.interfaces)&&r.ObjectUtils.isNotEmpty(o.interfaces.values)&&!h("interfaces")){let i={id:`api.${t}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([e,n])=>{let[l,r]=[`api.${t}.${e}`,e];d("interfaces",e)||i.children.push({id:l,label:r,component:e=>(0,s.jsx)(p,{name:t,data:n.props,description:(0,s.jsxs)(s.Fragment,{children:[n.description," ",n.extendedTypes&&(0,s.jsxs)(s.Fragment,{children:["Extends ",(0,s.jsx)("i",{children:n.extendedTypes}),"."]})]}),...e})})}),e.push(i)}if(r.ObjectUtils.isNotEmpty(o.types)&&r.ObjectUtils.isNotEmpty(o.types.values)&&!h("types")){let i={id:`api.${t}.types`,label:"Types",description:o.types.description,children:[]};Object.entries(o.types.values).forEach(([e,n])=>{let[l,r]=[`api.${t}.${e}`,e];d("types",e)||i.children.push({id:l,label:r,component:e=>(0,s.jsx)(p,{name:t,data:[n],allowLink:!1,...e})})}),e.push(i)}};if(3===l.length){let t=l[1],i=l[2];if("functions"===t){let n=o[t].values[i],l={id:`api.${a}`,label:a,children:[]},[c,d]=[`api.${a}.function`,"Function"],h=Object.entries(n).reduce((e,[s,t])=>("description"!==s&&(e[s]=t),e),{});l.children.push({id:c,label:d,component:e=>(0,s.jsx)(p,{name:a,data:[h],description:n.description,...e})});let u=n.parameters&&n.parameters.map(e=>e.type);if(r.ObjectUtils.isNotEmpty(o.interfaces)&&r.ObjectUtils.isNotEmpty(o.interfaces.values)){let e={id:`api.${a}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([t,i])=>{if(u.includes(t)){let[n,l]=[`api.${a}.${t}`,t],c={id:n,label:l,description:(0,s.jsxs)(s.Fragment,{children:[i.description," ",i.extendedTypes&&(0,s.jsxs)(s.Fragment,{children:["Extends ",(0,s.jsx)("i",{children:i.extendedTypes}),"."]})]}),children:[]};r.ObjectUtils.isNotEmpty(i.props)&&c.children.push({id:`${n}.props`,label:"Props",component:e=>(0,s.jsx)(p,{data:i.props,...e})}),r.ObjectUtils.isNotEmpty(i.callbacks)&&c.children.push({id:`${n}.callbacks`,label:"Callbacks",component:e=>(0,s.jsx)(p,{data:i.callbacks,...e})}),e.children.push(c)}}),r.ObjectUtils.isNotEmpty(e.children)&&l.children.push(e)}e.push(l)}}else o.components&&Object.entries(o.components).forEach(([n,l])=>{let c={id:`api.${n}`,label:n,description:l.description,children:[]};if(r.ObjectUtils.isNotEmpty(l.props)&&r.ObjectUtils.isNotEmpty(l.props.values)&&!h("props")){let[e,t]=[`api.${n}.props`,"Props"];if(d("props",n))return;c.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:n,data:l.props.values,description:l.props.description,...e})})}if(r.ObjectUtils.isNotEmpty(l.callbacks)&&r.ObjectUtils.isNotEmpty(l.callbacks.values)&&!h("callbacks")){let[e,t]=[`api.${n}.callbacks`,"Callbacks"];if(d("callbacks",n))return;c.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:n,data:l.callbacks.values,description:l.callbacks.description,...e})})}if(r.ObjectUtils.isNotEmpty(l.methods)&&r.ObjectUtils.isNotEmpty(l.methods.values)&&!h("methods")){let[e,t]=[`api.${n}.methods`,"Methods"];if(d("methods",n))return;c.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:n,data:l.methods.values,description:l.methods.description,...e})})}n.toLocaleLowerCase()===t.toLowerCase()&&i(c.children,n),e.push(c)}),o.model&&Object.entries(o.model).forEach(([n,l])=>{let c={id:`api.${n}`,label:n,description:l.description,children:[]};if(r.ObjectUtils.isNotEmpty(l.props)&&r.ObjectUtils.isNotEmpty(l.props.values)&&!h("props")){let[e,t]=[`api.${n}.props`,"Props"];if(d("props",n))return;c.children.push({id:e,label:t,component:e=>(0,s.jsx)(p,{name:n,data:l.props.values,description:l.props.description,...e})})}n.toLocaleLowerCase()===t.toLowerCase()&&i(c.children,n),e.push(c)}),o.components||o.model||i(e,a)}return e},[]);return(0,l.useEffect)(()=>{let e=window.location.hash.substring(1),s=document.getElementById(e);setTimeout(()=>{s&&s.scrollIntoView({block:"start"})},1)},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsxs)("h1",{children:[i," API"]}),(0,s.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",i," module."]})]}),(0,s.jsx)(u.DocSections,{docs:a})]}),(0,s.jsx)(h.DocSectionNav,{docs:a})]})}e.s(["DocComponent",0,function(e){let r,[c,a]=(0,l.useState)(0),o=(0,n.useRouter)();r=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{a(e),o.replace(o.pathname)};return(0,l.useEffect)(()=>{o.asPath.includes("#api")&&a(1),o.asPath.includes("#pt")&&a(3)},[o.asPath]),(0,s.jsxs)("div",{className:(0,t.classNames)(e.className,"doc-component"),children:[(0,s.jsxs)(i.default,{children:[(0,s.jsx)("title",{children:e.title}),(0,s.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,s.jsxs)("ul",{className:"doc-tabmenu",children:[(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":0===c}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(0),children:r})}),e.apiDocs?(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":1===c}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":2===c}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,s.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":3===c}),children:(0,s.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,s.jsxs)("div",{className:"doc-tabpanels",children:[0===c?(0,s.jsxs)("div",{className:"doc-tabpanel",children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsx)("h1",{children:e.header}),(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,s.jsx)(u.DocSections,{docs:e.componentDocs})]}),(0,s.jsx)(h.DocSectionNav,{docs:e.componentDocs})]}):null,1===c?(0,s.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,s.jsx)(m,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"doc-main",children:(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsxs)("h1",{children:[e.header," API"]}),(0,s.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===c?(0,s.jsx)(s.Fragment,{children:e.themingDocs?(0,s.jsxs)("div",{className:"doc-tabpanel",children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsx)("div",{className:"doc-intro",children:(0,s.jsxs)("h1",{children:[e.header," Theming"]})}),(0,s.jsx)(u.DocSections,{docs:e.themingDocs})]}),(0,s.jsx)(h.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===c?(0,s.jsx)(s.Fragment,{children:e.ptDocs?(0,s.jsxs)("div",{className:"doc-tabpanel",children:[(0,s.jsxs)("div",{className:"doc-main",children:[(0,s.jsxs)("div",{className:"doc-intro",children:[(0,s.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,s.jsx)("p",{children:e.ptDescription})]}),(0,s.jsx)(u.DocSections,{docs:e.ptDocs})]}),(0,s.jsx)(h.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},28805,e=>{e.v(s=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(s=>e.l(s))).then(()=>s(48545)))},48761,e=>{e.v(s=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(s=>e.l(s))).then(()=>s(25050)))},3828,(e,s,t)=>{s.exports=e.r(26990)},37221,e=>{"use strict";var s=e.i(91398),t=e.i(82948),i=e.i(5180),n=e.i(28137),l=e.i(57724),r=e.i(26295),c=e.i(91788);function a(e){let[t,a]=(0,c.useState)(!1),o=(0,c.useRef)(null),[d,p]=(0,r.useOverlayScrollListener)({target:o.current,listener:()=>{a(!1)},options:{passive:!0},when:t});(0,c.useEffect)(()=>(d(),()=>{p()}),[d,p]);let h={basic:`
const [bindOverlayScrollListener, unbindOverlayScrollListener] = useOverlayScrollListener({
    target: buttonRef.current,
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

    const handleScroll = () => {
        setVisible(false);
    };

    const [bindOverlayScrollListener, unbindOverlayScrollListener] = useOverlayScrollListener({
        target: buttonRef.current,
        listener: handleScroll,
        options: { passive: true },
        when: visible
    });

    useEffect(() => {
        bindOverlayScrollListener();

        return () => {
            unbindOverlayScrollListener();
        };
    }, [bindOverlayScrollListener, unbindOverlayScrollListener]);

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
                <div className="w-20rem h-15rem p-3 surface-border border-round border-1 overflow-auto">
                    <div className="h-30rem">
                        <div className="relative">
                            <Button ref={buttonRef} onClick={() => setVisible(true)} label="Show" />
                            {visible ? <div className="absolute border-round shadow-2 p-5 surface-overlay z-2 white-space-nowrap scalein origin-top">Popup Content</div> : null}
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

    const handleScroll = () => {
        setVisible(false);
    };

    const [bindOverlayScrollListener, unbindOverlayScrollListener] = useOverlayScrollListener({
        target: buttonRef.current,
        listener: handleScroll,
        options: { passive: true },
        when: visible
    });

    useEffect(() => {
        bindOverlayScrollListener();

        return () => {
            unbindOverlayScrollListener();
        };
    }, [bindOverlayScrollListener, unbindOverlayScrollListener]);

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
                <div className="w-20rem h-15rem p-3 surface-border border-round border-1 overflow-auto">
                    <div className="h-30rem">
                        <div className="relative">
                            <Button ref={buttonRef} onClick={() => setVisible(true)} label="Show" />
                            {visible ? <div className="absolute border-round shadow-2 p-5 surface-overlay z-2 white-space-nowrap scalein origin-top">Popup Content</div> : null}
                        </div>
                    </div>
                </div>
            </div>
    )
}
        `};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.DocSectionText,{...e,children:(0,s.jsx)("p",{children:"When any ancestor component of the button is scrolled, the overlay gets hidden. This is especially useful to avoid alignment issues when the overlay is attached to the document body via a Portal."})}),(0,s.jsx)("div",{className:"card flex flex-column justify-content-center align-items-center gap-2",children:(0,s.jsx)("div",{className:"w-20rem h-15rem p-3 surface-border border-round border-1 overflow-auto",children:(0,s.jsx)("div",{className:"h-30rem",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(l.Button,{ref:o,onClick:()=>a(!0),label:"Show"}),t?(0,s.jsx)("div",{className:"absolute border-round shadow-2 p-5 surface-overlay z-2 white-space-nowrap scalein origin-top",children:"Popup Content"}):null]})})})}),(0,s.jsx)(i.DocSectionCode,{code:h})]})}function o(e){let t={basic:`
import { useOverlayScrollListener } from 'primereact/hooks';
        `};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.DocSectionText,{...e}),(0,s.jsx)(i.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}e.s(["default",0,()=>(0,s.jsx)(t.DocComponent,{title:"React useOverlayScrollListener Hook",header:"useOverlayScrollListener",description:"Monitors scroll event of a parent element.",componentDocs:[{id:"import",label:"Import",component:o},{id:"basic",label:"Basic",component:a}],apiDocs:["hooks.functions.useOverlayScrollListener"]})],37221)},33910,(e,s,t)=>{let i="/hooks/useoverlayscrolllistener";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(37221)]),s.hot&&s.hot.dispose(function(){window.__NEXT_P.push([i])})}]);