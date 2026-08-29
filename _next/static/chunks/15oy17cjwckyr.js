(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),s=e.i(91788);e.s(["CodeHighlight",0,function(e){let i=(0,s.useRef)(),n=`language-${e.lang||"jsx"}`;return(0,s.useEffect)(()=>{window.Prism.highlightElement(i.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:i,className:n,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),s=e.i(3935),i=e.i(58678),n=e.i(3828),c=e.i(91788),a=e.i(51551),r=e.i(72124),o=e.i(41158),l=e.i(87914),d=e.i(28137);let p=e=>{let i=(0,c.useContext)(l.default),{id:r,data:p,name:h,description:u,allowLink:m=!0}=e,j=r.startsWith("pt."),x=(0,n.useRouter)();if(a.ObjectUtils.isNotEmpty(p)){let n=Object.keys(p[0]),l=(e,t)=>{let s=document.getElementById(e);s&&s.parentElement.scrollIntoView({block:"start",behavior:t})},f=(e,i,n)=>{if(m&&e)return e.split("|").map((e,a)=>{if(e.includes(h)){let s=e.indexOf(h),i=e.substring(s).replace(/(\[|\]|<|>).*$/gm,"").trim(),n=h===i?`api.${h}`:`api.${h}.${i===`${h}Props`?"props":i}`;return(0,t.jsxs)(c.default.Fragment,{children:[0!==a?"|":"",(0,t.jsx)(o.default,{href:x.basePath+x.pathname+`#${n}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>l(n,"smooth"),children:e})})]},a)}return(0,t.jsxs)(c.default.Fragment,{children:[0!==a?"|":"",i?(0,t.jsxs)("span",{id:r+"."+e,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!n}),title:n,children:[e,(0,t.jsx)(o.default,{href:x.basePath+x.pathname+`#${r+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>l(r+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},a)});let a=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return i?(0,t.jsxs)("span",{id:r+"."+a,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!n}),title:n,children:[a,(0,t.jsx)(o.default,{href:x.basePath+x.pathname+`#${r+"."+a}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>l(r+"."+a),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):a},b=(0,t.jsx)(c.default.Fragment,{children:j?(0,t.jsx)("tr",{children:n.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:n.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),v=(0,t.jsx)(c.default.Fragment,{children:p.map((e,n)=>{if(j){let{value:s,label:i,description:c}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:s}),(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:c})]},n)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([n,c],r)=>"readonly"!==n&&"optional"!==n&&"deprecated"!==n&&(0,t.jsx)("td",{children:"parameters"===n?c.map((e,s)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:f(e.type)}),(0,t.jsx)("br",{})]},s)):"default"===n?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-default",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:a.ObjectUtils.isEmpty(c)?"null":f(c,"name"===n,e.deprecated)}):"type"===n?(0,t.jsx)("span",{className:"doc-option-type",children:f(c,"name"===n,e.deprecated)}):"returnType"===n?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-returnType",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:f(c,"name"===n,e.deprecated)}):"description"===n||"values"===n?(0,t.jsx)("span",{className:"doc-option-description",children:c}):f(c,"name"===n,e.deprecated)},r))},n)})});return(0,t.jsxs)(c.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:u})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:b}),(0,t.jsx)("tbody",{children:v})]})})]},r)}return null};e.s(["default",0,p],88850);var h=e.i(71864),u=e.i(38076);function m(e){let{doc:s,header:i}=e,n=e.apiExclude,o=s.reduce((e,s)=>{let i,c=s.split("."),o=(i=c[0])&&i[0].toUpperCase()+i.slice(1)||"",l=r.default[o.toLowerCase()],d=(e,t)=>n&&n[e]&&n[e].includes(t),h=e=>n&&n[e]&&"excludeAll"===n[e];if(l){let i=(e,s)=>{if(a.ObjectUtils.isNotEmpty(l.events)&&a.ObjectUtils.isNotEmpty(l.events.values)&&!h("events")){let i={id:`api.${s}.events`,label:"Events",description:l.events.description,children:[]};Object.entries(l.events.values).forEach(([e,n])=>{let[c,a]=[`api.${s}.${e}`,e];d("event",e)||i.children.push({id:c,label:a,component:e=>(0,t.jsx)(p,{name:s,data:n.props,description:(0,t.jsxs)(t.Fragment,{children:[n.description," See ",(0,t.jsx)("i",{children:n.relatedProp}),"."]}),...e})})}),e.push(i)}if(a.ObjectUtils.isNotEmpty(l.interfaces)&&a.ObjectUtils.isNotEmpty(l.interfaces.values)&&!h("interfaces")){let i={id:`api.${s}.interfaces`,label:"Interfaces",description:l.interfaces.description,children:[]};Object.entries(l.interfaces.values).forEach(([e,n])=>{let[c,a]=[`api.${s}.${e}`,e];d("interfaces",e)||i.children.push({id:c,label:a,component:e=>(0,t.jsx)(p,{name:s,data:n.props,description:(0,t.jsxs)(t.Fragment,{children:[n.description," ",n.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:n.extendedTypes}),"."]})]}),...e})})}),e.push(i)}if(a.ObjectUtils.isNotEmpty(l.types)&&a.ObjectUtils.isNotEmpty(l.types.values)&&!h("types")){let i={id:`api.${s}.types`,label:"Types",description:l.types.description,children:[]};Object.entries(l.types.values).forEach(([e,n])=>{let[c,a]=[`api.${s}.${e}`,e];d("types",e)||i.children.push({id:c,label:a,component:e=>(0,t.jsx)(p,{name:s,data:[n],allowLink:!1,...e})})}),e.push(i)}};if(3===c.length){let s=c[1],i=c[2];if("functions"===s){let n=l[s].values[i],c={id:`api.${o}`,label:o,children:[]},[r,d]=[`api.${o}.function`,"Function"],h=Object.entries(n).reduce((e,[t,s])=>("description"!==t&&(e[t]=s),e),{});c.children.push({id:r,label:d,component:e=>(0,t.jsx)(p,{name:o,data:[h],description:n.description,...e})});let u=n.parameters&&n.parameters.map(e=>e.type);if(a.ObjectUtils.isNotEmpty(l.interfaces)&&a.ObjectUtils.isNotEmpty(l.interfaces.values)){let e={id:`api.${o}.interfaces`,label:"Interfaces",description:l.interfaces.description,children:[]};Object.entries(l.interfaces.values).forEach(([s,i])=>{if(u.includes(s)){let[n,c]=[`api.${o}.${s}`,s],r={id:n,label:c,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),children:[]};a.ObjectUtils.isNotEmpty(i.props)&&r.children.push({id:`${n}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:i.props,...e})}),a.ObjectUtils.isNotEmpty(i.callbacks)&&r.children.push({id:`${n}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:i.callbacks,...e})}),e.children.push(r)}}),a.ObjectUtils.isNotEmpty(e.children)&&c.children.push(e)}e.push(c)}}else l.components&&Object.entries(l.components).forEach(([n,c])=>{let r={id:`api.${n}`,label:n,description:c.description,children:[]};if(a.ObjectUtils.isNotEmpty(c.props)&&a.ObjectUtils.isNotEmpty(c.props.values)&&!h("props")){let[e,s]=[`api.${n}.props`,"Props"];if(d("props",n))return;r.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:n,data:c.props.values,description:c.props.description,...e})})}if(a.ObjectUtils.isNotEmpty(c.callbacks)&&a.ObjectUtils.isNotEmpty(c.callbacks.values)&&!h("callbacks")){let[e,s]=[`api.${n}.callbacks`,"Callbacks"];if(d("callbacks",n))return;r.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:n,data:c.callbacks.values,description:c.callbacks.description,...e})})}if(a.ObjectUtils.isNotEmpty(c.methods)&&a.ObjectUtils.isNotEmpty(c.methods.values)&&!h("methods")){let[e,s]=[`api.${n}.methods`,"Methods"];if(d("methods",n))return;r.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:n,data:c.methods.values,description:c.methods.description,...e})})}n.toLocaleLowerCase()===s.toLowerCase()&&i(r.children,n),e.push(r)}),l.model&&Object.entries(l.model).forEach(([n,c])=>{let r={id:`api.${n}`,label:n,description:c.description,children:[]};if(a.ObjectUtils.isNotEmpty(c.props)&&a.ObjectUtils.isNotEmpty(c.props.values)&&!h("props")){let[e,s]=[`api.${n}.props`,"Props"];if(d("props",n))return;r.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:n,data:c.props.values,description:c.props.description,...e})})}n.toLocaleLowerCase()===s.toLowerCase()&&i(r.children,n),e.push(r)}),l.components||l.model||i(e,o)}return e},[]);return(0,c.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[i," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",i," module."]})]}),(0,t.jsx)(u.DocSections,{docs:o})]}),(0,t.jsx)(h.DocSectionNav,{docs:o})]})}e.s(["DocComponent",0,function(e){let a,[r,o]=(0,c.useState)(0),l=(0,n.useRouter)();a=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{o(e),l.replace(l.pathname)};return(0,c.useEffect)(()=>{l.asPath.includes("#api")&&o(1),l.asPath.includes("#pt")&&o(3)},[l.asPath]),(0,t.jsxs)("div",{className:(0,s.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":0===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:a})}),e.apiDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":1===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":2===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":3===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===r?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(u.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.componentDocs})]}):null,1===r?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(m,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===r?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(u.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===r?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(u.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},3828,(e,t,s)=>{t.exports=e.r(26990)},61669,e=>{"use strict";var t=e.i(91398),s=e.i(82948),i=e.i(5180),n=e.i(28137),c=e.i(35048),a=e.i(91788);function r(e){let[s,r]=(0,a.useState)({width:0,height:0}),[o,l]=(0,c.useResizeListener)({listener:e=>{r({width:e.currentTarget.innerWidth,height:e.currentTarget.innerHeight})}});(0,a.useEffect)(()=>{r({width:window.innerWidth,height:window.innerHeight})},[]),(0,a.useEffect)(()=>(o(),()=>{l()}),[o,l]);let d={basic:`
const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
    listener: (event) => {
        setEventData({
            width: event.currentTarget.innerWidth,
            height: event.currentTarget.innerHeight,
        })
    }
});
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { useResizeListener } from 'primereact/hooks';

export default function BasicDemo() {
    const [eventData, setEventData] = useState({ width: 0, height: 0 });

    const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
        listener: (event) => {
            setEventData({
                width: event.currentTarget.innerWidth,
                height: event.currentTarget.innerHeight
            });
        }
    });

    useEffect(() => {
        setEventData({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        bindWindowResizeListener();

        return () => {
            unbindWindowResizeListener();
        };
    }, [bindWindowResizeListener, unbindWindowResizeListener]);

    return (
        <div className="card flex flex-wrap justify-content-center gap-3 text-xl">
            <span>
                Width: <strong>{eventData.width}</strong>
            </span>
            <span>
                Height: <strong>{eventData.height}</strong>
            </span>
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { useResizeListener } from 'primereact/hooks';

export default function BasicDemo() {
    const [eventData, setEventData] = useState({ width: 0, height: 0 });

    const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
        listener: (event) => {
            setEventData({
                width: event.currentTarget.innerWidth,
                height: event.currentTarget.innerHeight
            });
        }
    });

    useEffect(() => {
        setEventData({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        bindWindowResizeListener();

        return () => {
            unbindWindowResizeListener();
        };
    }, [bindWindowResizeListener, unbindWindowResizeListener]);

    return (
        <div className="card flex flex-wrap justify-content-center gap-3 text-xl">
            <span>
                Width: <strong>{eventData.width}</strong>
            </span>
            <span>
                Height: <strong>{eventData.height}</strong>
            </span>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Resize the browser window to view information about the resize event."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3 text-xl",children:[(0,t.jsxs)("span",{children:["Width: ",(0,t.jsx)("strong",{children:s.width})]}),(0,t.jsxs)("span",{children:["Height: ",(0,t.jsx)("strong",{children:s.height})]})]}),(0,t.jsx)(i.DocSectionCode,{code:d})]})}function o(e){let s={basic:`
import { useResizeListener } from 'primereact/hooks';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}e.s(["default",0,()=>(0,t.jsx)(s.DocComponent,{title:"React useResizeListener Hook",header:"useResizeListener",description:"Tracks window resize event.",componentDocs:[{id:"import",label:"Import",component:o},{id:"basic",label:"Basic",component:r}],apiDocs:["hooks.functions.useResizeListener"]})],61669)},47581,(e,t,s)=>{let i="/hooks/useresizelistener";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(61669)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);