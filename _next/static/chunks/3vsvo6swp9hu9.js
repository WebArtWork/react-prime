(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),i=e.i(91788);e.s(["CodeHighlight",0,function(e){let n=(0,i.useRef)(),a=`language-${e.lang||"jsx"}`;return(0,i.useEffect)(()=>{window.Prism.highlightElement(n.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:n,className:a,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),i=e.i(3935),n=e.i(58678),a=e.i(3828),s=e.i(91788),l=e.i(51551),r=e.i(72124),o=e.i(41158),c=e.i(87914),d=e.i(28137);let p=e=>{let n=(0,s.useContext)(c.default),{id:r,data:p,name:u,description:m,allowLink:h=!0}=e,x=r.startsWith("pt."),g=(0,a.useRouter)();if(l.ObjectUtils.isNotEmpty(p)){let a=Object.keys(p[0]),c=(e,t)=>{let i=document.getElementById(e);i&&i.parentElement.scrollIntoView({block:"start",behavior:t})},f=(e,n,a)=>{if(h&&e)return e.split("|").map((e,l)=>{if(e.includes(u)){let i=e.indexOf(u),n=e.substring(i).replace(/(\[|\]|<|>).*$/gm,"").trim(),a=u===n?`api.${u}`:`api.${u}.${n===`${u}Props`?"props":n}`;return(0,t.jsxs)(s.default.Fragment,{children:[0!==l?"|":"",(0,t.jsx)(o.default,{href:g.basePath+g.pathname+`#${a}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(a,"smooth"),children:e})})]},l)}return(0,t.jsxs)(s.default.Fragment,{children:[0!==l?"|":"",n?(0,t.jsxs)("span",{id:r+"."+e,className:(0,i.classNames)("doc-option-name",{"line-through cursor-pointer":!!a}),title:a,children:[e,(0,t.jsx)(o.default,{href:g.basePath+g.pathname+`#${r+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(r+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},l)});let l=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return n?(0,t.jsxs)("span",{id:r+"."+l,className:(0,i.classNames)("doc-option-name",{"line-through cursor-pointer":!!a}),title:a,children:[l,(0,t.jsx)(o.default,{href:g.basePath+g.pathname+`#${r+"."+l}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(r+"."+l),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):l},j=(0,t.jsx)(s.default.Fragment,{children:x?(0,t.jsx)("tr",{children:a.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:a.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),b=(0,t.jsx)(s.default.Fragment,{children:p.map((e,a)=>{if(x){let{value:i,label:n,description:s}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:n}),(0,t.jsx)("td",{children:s})]},a)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([a,s],r)=>"readonly"!==a&&"optional"!==a&&"deprecated"!==a&&(0,t.jsx)("td",{children:"parameters"===a?s.map((e,i)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:f(e.type)}),(0,t.jsx)("br",{})]},i)):"default"===a?(0,t.jsx)("div",{className:(0,i.classNames)("doc-option-default",{"doc-option-dark":n.darkMode,"doc-option-light":!n.darkMode}),children:l.ObjectUtils.isEmpty(s)?"null":f(s,"name"===a,e.deprecated)}):"type"===a?(0,t.jsx)("span",{className:"doc-option-type",children:f(s,"name"===a,e.deprecated)}):"returnType"===a?(0,t.jsx)("div",{className:(0,i.classNames)("doc-option-returnType",{"doc-option-dark":n.darkMode,"doc-option-light":!n.darkMode}),children:f(s,"name"===a,e.deprecated)}):"description"===a||"values"===a?(0,t.jsx)("span",{className:"doc-option-description",children:s}):f(s,"name"===a,e.deprecated)},r))},a)})});return(0,t.jsxs)(s.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:m})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:j}),(0,t.jsx)("tbody",{children:b})]})})]},r)}return null};e.s(["default",0,p],88850);var u=e.i(71864),m=e.i(38076);function h(e){let{doc:i,header:n}=e,a=e.apiExclude,o=i.reduce((e,i)=>{let n,s=i.split("."),o=(n=s[0])&&n[0].toUpperCase()+n.slice(1)||"",c=r.default[o.toLowerCase()],d=(e,t)=>a&&a[e]&&a[e].includes(t),u=e=>a&&a[e]&&"excludeAll"===a[e];if(c){let n=(e,i)=>{if(l.ObjectUtils.isNotEmpty(c.events)&&l.ObjectUtils.isNotEmpty(c.events.values)&&!u("events")){let n={id:`api.${i}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,a])=>{let[s,l]=[`api.${i}.${e}`,e];d("event",e)||n.children.push({id:s,label:l,component:e=>(0,t.jsx)(p,{name:i,data:a.props,description:(0,t.jsxs)(t.Fragment,{children:[a.description," See ",(0,t.jsx)("i",{children:a.relatedProp}),"."]}),...e})})}),e.push(n)}if(l.ObjectUtils.isNotEmpty(c.interfaces)&&l.ObjectUtils.isNotEmpty(c.interfaces.values)&&!u("interfaces")){let n={id:`api.${i}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,a])=>{let[s,l]=[`api.${i}.${e}`,e];d("interfaces",e)||n.children.push({id:s,label:l,component:e=>(0,t.jsx)(p,{name:i,data:a.props,description:(0,t.jsxs)(t.Fragment,{children:[a.description," ",a.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:a.extendedTypes}),"."]})]}),...e})})}),e.push(n)}if(l.ObjectUtils.isNotEmpty(c.types)&&l.ObjectUtils.isNotEmpty(c.types.values)&&!u("types")){let n={id:`api.${i}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,a])=>{let[s,l]=[`api.${i}.${e}`,e];d("types",e)||n.children.push({id:s,label:l,component:e=>(0,t.jsx)(p,{name:i,data:[a],allowLink:!1,...e})})}),e.push(n)}};if(3===s.length){let i=s[1],n=s[2];if("functions"===i){let a=c[i].values[n],s={id:`api.${o}`,label:o,children:[]},[r,d]=[`api.${o}.function`,"Function"],u=Object.entries(a).reduce((e,[t,i])=>("description"!==t&&(e[t]=i),e),{});s.children.push({id:r,label:d,component:e=>(0,t.jsx)(p,{name:o,data:[u],description:a.description,...e})});let m=a.parameters&&a.parameters.map(e=>e.type);if(l.ObjectUtils.isNotEmpty(c.interfaces)&&l.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${o}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([i,n])=>{if(m.includes(i)){let[a,s]=[`api.${o}.${i}`,i],r={id:a,label:s,description:(0,t.jsxs)(t.Fragment,{children:[n.description," ",n.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:n.extendedTypes}),"."]})]}),children:[]};l.ObjectUtils.isNotEmpty(n.props)&&r.children.push({id:`${a}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:n.props,...e})}),l.ObjectUtils.isNotEmpty(n.callbacks)&&r.children.push({id:`${a}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:n.callbacks,...e})}),e.children.push(r)}}),l.ObjectUtils.isNotEmpty(e.children)&&s.children.push(e)}e.push(s)}}else c.components&&Object.entries(c.components).forEach(([a,s])=>{let r={id:`api.${a}`,label:a,description:s.description,children:[]};if(l.ObjectUtils.isNotEmpty(s.props)&&l.ObjectUtils.isNotEmpty(s.props.values)&&!u("props")){let[e,i]=[`api.${a}.props`,"Props"];if(d("props",a))return;r.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:a,data:s.props.values,description:s.props.description,...e})})}if(l.ObjectUtils.isNotEmpty(s.callbacks)&&l.ObjectUtils.isNotEmpty(s.callbacks.values)&&!u("callbacks")){let[e,i]=[`api.${a}.callbacks`,"Callbacks"];if(d("callbacks",a))return;r.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:a,data:s.callbacks.values,description:s.callbacks.description,...e})})}if(l.ObjectUtils.isNotEmpty(s.methods)&&l.ObjectUtils.isNotEmpty(s.methods.values)&&!u("methods")){let[e,i]=[`api.${a}.methods`,"Methods"];if(d("methods",a))return;r.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:a,data:s.methods.values,description:s.methods.description,...e})})}a.toLocaleLowerCase()===i.toLowerCase()&&n(r.children,a),e.push(r)}),c.model&&Object.entries(c.model).forEach(([a,s])=>{let r={id:`api.${a}`,label:a,description:s.description,children:[]};if(l.ObjectUtils.isNotEmpty(s.props)&&l.ObjectUtils.isNotEmpty(s.props.values)&&!u("props")){let[e,i]=[`api.${a}.props`,"Props"];if(d("props",a))return;r.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:a,data:s.props.values,description:s.props.description,...e})})}a.toLocaleLowerCase()===i.toLowerCase()&&n(r.children,a),e.push(r)}),c.components||c.model||n(e,o)}return e},[]);return(0,s.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[n," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",n," module."]})]}),(0,t.jsx)(m.DocSections,{docs:o})]}),(0,t.jsx)(u.DocSectionNav,{docs:o})]})}e.s(["DocComponent",0,function(e){let l,[r,o]=(0,s.useState)(0),c=(0,a.useRouter)();l=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{o(e),c.replace(c.pathname)};return(0,s.useEffect)(()=>{c.asPath.includes("#api")&&o(1),c.asPath.includes("#pt")&&o(3)},[c.asPath]),(0,t.jsxs)("div",{className:(0,i.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":0===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:l})}),e.apiDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":1===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":2===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":3===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===r?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.componentDocs})]}):null,1===r?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===r?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===r?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},14374,e=>{"use strict";var t=e.i(91398),i=e.i(91788),n=e.i(10836),a=e.i(15498),s=e.i(60150),l=e.i(20484),r=e.i(64691),o=e.i(45543),c=e.i(51551),d=e.i(3935);let p=a.ComponentBase.extend({defaultProps:{__TYPE:"RadioButton",autoFocus:!1,checked:!1,className:null,disabled:!1,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,name:null,onChange:null,onClick:null,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,value:null,children:void 0},css:{classes:{root:({props:e,context:t})=>(0,d.classNames)("p-radiobutton p-component",{"p-highlight":e.checked,"p-disabled":e.disabled,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:t&&"filled"===t.inputStyle}),box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"}}}),u=i.memo(i.forwardRef((e,u)=>{let m,h,x,g,f=(0,s.useMergeProps)(),j=i.useContext(n.PrimeReactContext),b=p.getProps(e,j),v=i.useRef(null),y=i.useRef(b.inputRef),{ptm:N,cx:k,isUnstyled:R}=p.setMetaData({props:b});(0,a.useHandleStyle)(p.css.styles,R,{name:"radiobutton"});let C=e=>{B(e)},B=e=>{if(!b.disabled&&!b.readOnly&&b.onChange){let t=b.checked,i=e.target instanceof HTMLDivElement,n=e.target===y.current&&e.target.checked!==t,a=i&&o.DomHandler.hasClass(v.current,"p-radiobutton-checked")===t&&!t,s=!t,l={originalEvent:e,value:b.value,checked:s,stopPropagation:()=>{e?.stopPropagation()},preventDefault:()=>{e?.preventDefault()},target:{type:"radio",name:b.name,id:b.id,value:b.value,checked:s}};if(n||a){if(b?.onChange?.(l),e.defaultPrevented)return;a&&(y.current.checked=s)}o.DomHandler.focus(y.current)}};i.useImperativeHandle(u,()=>({props:b,select:C,focus:()=>o.DomHandler.focus(y.current),getElement:()=>v.current,getInput:()=>y.current})),i.useEffect(()=>{y.current&&(y.current.checked=b.checked)},[b.checked]),i.useEffect(()=>{c.ObjectUtils.combinedRefs(y,b.inputRef)},[y,b.inputRef]),(0,l.useMountEffect)(()=>{b.autoFocus&&o.DomHandler.focus(y.current,b.autoFocus)});let I=c.ObjectUtils.isNotEmpty(b.tooltip),D=p.getOtherProps(b),w=f({id:b.id,className:(0,d.classNames)(b.className,k("root",{context:j})),style:b.style,"data-p-checked":b.checked},D,N("root"));return delete w.input,delete w.box,delete w.icon,(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{ref:v,...w,children:[(m=c.ObjectUtils.reduceKeys(D,o.DomHandler.ARIA_PROPS),h=f({id:b.inputId,type:"radio",name:b.name,defaultChecked:b.checked,onFocus:e=>{b?.onFocus?.(e)},onBlur:e=>{b?.onBlur?.(e)},onChange:B,disabled:b.disabled,readOnly:b.readOnly,required:b.required,tabIndex:b.tabIndex,className:k("input"),...m},e.input,N("input")),(0,t.jsx)("input",{ref:y,...h})),(x=f({className:k("box")},e.box,N("box")),g=f({className:k("icon")},e.icon,N("icon")),(0,t.jsx)("div",{...x,children:(0,t.jsx)("div",{...g})}))]}),I&&(0,t.jsx)(r.Tooltip,{target:v,content:b.tooltip,pt:N("tooltip"),...b.tooltipOptions})]})}));u.displayName="RadioButton",e.s(["RadioButton",0,u],14374)},3828,(e,t,i)=>{t.exports=e.r(26990)},85986,e=>{"use strict";var t=e.i(91398),i=e.i(88850),n=e.i(82948),a=e.i(5180),s=e.i(28137);function l(){let e={basic:`
<label htmlFor="rb1">One</label>
<RadioButton inputId="rb1" />

<span id="rb2">Two</span>
<RadioButton aria-labelledby="rb2" />

<RadioButton aria-label="Three" />
    `};return(0,t.jsxs)(s.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via ",(0,t.jsx)("i",{children:"label"})," tag combined with ",(0,t.jsx)("i",{children:"inputId"})," prop or using"," ",(0,t.jsx)("i",{children:"aria-labelledby"}),", ",(0,t.jsx)("i",{children:"aria-label"})," props."]}),(0,t.jsx)(a.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the checked radio button, if there is none within the group then first radio button receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsxs)("span",{className:"inline-flex flex-column",children:[(0,t.jsx)("i",{className:"mb-1",children:"left arrow"}),(0,t.jsx)("i",{children:"up arrow"})]})}),(0,t.jsx)("td",{children:"Moves focus to the previous radio button, if there is none then last radio button receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsxs)("span",{className:"inline-flex flex-column",children:[(0,t.jsx)("i",{className:"mb-1",children:"right arrow"}),(0,t.jsx)("i",{children:"down arrow"})]})}),(0,t.jsx)("td",{children:"Moves focus to the next radio button, if there is none then first radio button receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"If the focused radio button is unchecked, changes the state to checked."})]})]})]})})]})}var r=e.i(14374);function o(e){let i={basic:`
<RadioButton checked disabled></RadioButton>
        `,javascript:`
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <RadioButton checked disabled></RadioButton>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <RadioButton checked disabled></RadioButton>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(r.RadioButton,{checked:!0,disabled:!0})}),(0,t.jsx)(a.DocSectionCode,{code:i})]})}var c=e.i(91788);function d(e){let i=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}],[n,l]=(0,c.useState)(i[1]),o={basic:`
{categories.map((category) => {
    return (
        <div key={category.key} className="flex align-items-center">
            <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
            <label htmlFor={category.key} className="ml-2">{category.name}</label>
        </div>
    );
})}
        `,javascript:`
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";

export default function DynamicDemo() {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[1]);

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";

interface Category {
    name: string;
    key: string;
}

export default function DynamicDemo() {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategory, setSelectedCategory] = useState<Category>(categories[1]);

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e: RadioButtonChangeEvent) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"RadioButtons can be generated using a list of values."})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)("div",{className:"flex flex-column gap-3",children:i.map(e=>(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)(r.RadioButton,{inputId:e.key,name:"category",value:e,onChange:e=>l(e.value),checked:n.key===e.key}),(0,t.jsx)("label",{htmlFor:e.key,className:"ml-2",children:e.name})]},e.key))})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function p(e){let i={basic:`
<RadioButton variant="filled" />
        `,javascript:`
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function FilledDemo() {
    return (
        <div className="card flex justify-content-center align-items-center">
            <RadioButton variant="filled" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function FilledDemo() {
    return (
        <div className="card flex justify-content-center align-items-center">
            <RadioButton variant="filled" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specify the ",(0,t.jsx)("i",{children:"variant"})," property as ",(0,t.jsx)("i",{children:"filled"})," to display the component with a higher visual emphasis than the default ",(0,t.jsx)("i",{children:"outlined"})," style."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center align-items-center",children:(0,t.jsx)(r.RadioButton,{variant:"filled"})}),(0,t.jsx)(a.DocSectionCode,{code:i})]})}function u(e){let[i,n]=(0,c.useState)(""),l={basic:`
<div className="flex flex-wrap gap-3">
    <div className="flex align-items-center">
        <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
        <label htmlFor="ingredient1" className="ml-2">Cheese</label>
    </div>
    <div className="flex align-items-center">
        <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
        <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
    </div>
    <div className="flex align-items-center">
        <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Pepper'} />
        <label htmlFor="ingredient3" className="ml-2">Pepper</label>
    </div>
    <div className="flex align-items-center">
        <RadioButton inputId="ingredient4" name="pizza" value="Onion" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Onion'} />
        <label htmlFor="ingredient4" className="ml-2">Onion</label>
    </div>
</div>
        `,javascript:`
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";

export default function GroupDemo() {
    const [ingredient, setIngredient] = useState('');

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-wrap gap-3">
                <div className="flex align-items-center">
                    <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                    <label htmlFor="ingredient1" className="ml-2">Cheese</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                    <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Pepper'} />
                    <label htmlFor="ingredient3" className="ml-2">Pepper</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="ingredient4" name="pizza" value="Onion" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Onion'} />
                    <label htmlFor="ingredient4" className="ml-2">Onion</label>
                </div>
            </div>
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";

export default function GroupDemo() {
    const [ingredient, setIngredient] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-wrap gap-3">
                <div className="flex align-items-center">
                    <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                    <label htmlFor="ingredient1" className="ml-2">Cheese</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                    <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)} checked={ingredient === 'Pepper'} />
                    <label htmlFor="ingredient3" className="ml-2">Pepper</label>
                </div>
                <div className="flex align-items-center">
                    <RadioButton inputId="ingredient4" name="pizza" value="Onion" onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)} checked={ingredient === 'Onion'} />
                    <label htmlFor="ingredient4" className="ml-2">Onion</label>
                </div>
            </div>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["RadioButton is used as a controlled input with ",(0,t.jsx)("i",{children:"value"}),", ",(0,t.jsx)("i",{children:"checked"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)("div",{className:"flex flex-wrap gap-3",children:[(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)(r.RadioButton,{inputId:"ingredient1",name:"pizza",value:"Cheese",onChange:e=>n(e.value),checked:"Cheese"===i}),(0,t.jsx)("label",{htmlFor:"ingredient1",className:"ml-2",children:"Cheese"})]}),(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)(r.RadioButton,{inputId:"ingredient2",name:"pizza",value:"Mushroom",onChange:e=>n(e.value),checked:"Mushroom"===i}),(0,t.jsx)("label",{htmlFor:"ingredient2",className:"ml-2",children:"Mushroom"})]}),(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)(r.RadioButton,{inputId:"ingredient3",name:"pizza",value:"Pepper",onChange:e=>n(e.value),checked:"Pepper"===i}),(0,t.jsx)("label",{htmlFor:"ingredient3",className:"ml-2",children:"Pepper"})]}),(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)(r.RadioButton,{inputId:"ingredient4",name:"pizza",value:"Onion",onChange:e=>n(e.value),checked:"Onion"===i}),(0,t.jsx)("label",{htmlFor:"ingredient4",className:"ml-2",children:"Onion"})]})]})}),(0,t.jsx)(a.DocSectionCode,{code:l})]})}function m(e){let i={basic:`
import { RadioButton } from 'primereact/radiobutton';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)(a.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function h(e){let i={basic:`
<RadioButton invalid/>
        `,javascript:`
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center align-items-center">
            <RadioButton invalid/>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center align-items-center">
            <RadioButton invalid/>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center align-items-center",children:(0,t.jsx)(r.RadioButton,{invalid:!0})}),(0,t.jsx)(a.DocSectionCode,{code:i})]})}let x=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/radiobutton.jpg",alt:"radiobutton"})})]});function g(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-radiobutton"}),(0,t.jsx)("td",{children:"Container element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-radiobutton-box"}),(0,t.jsx)("td",{children:"Container of icon."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-radiobutton-icon"}),(0,t.jsx)("td",{children:"Icon element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-radiobutton-label"}),(0,t.jsx)("td",{children:"Label element."})]})]})]})})]})}var f=e.i(41158);function j(e){let i={basic:`
const Tailwind = {
    radiobutton: {
        root: {
            className: classNames('relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6')
        },
        input: {
              className: classNames(
                    'absolute appearance-none top-0 left-0 size-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer'
              ),
        },
        box: ({ props }) => ({
            className: classNames(
                'flex justify-center items-center',
                'border-2 w-6 h-6 text-gray-700 rounded-full transition duration-200 ease-in-out',
                {
                    'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80': !props.checked,
                    'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400': props.checked
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            )
        }),
        icon: ({ props }) => ({
            className: classNames('transform rounded-full', 'block w-3 h-3 transition duration-200 bg-white dark:bg-gray-900', {
                'backface-hidden scale-10 invisible': !props.checked,
                'transform scale-100 visible': props.checked
            })
        })
    }
}
    `},n={javascript:`
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";

export default function UnstyledDemo() {
    const [ingredient, setIngredient] = useState('');

    return (
        <div className="card flex justify-center">
            <div className="flex flex-wrap gap-3">
                <div className="flex items-center">
                    <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                    <label htmlFor="ingredient1" className="text-gray-700 dark:text-white/80 ml-2">Cheese</label>
                </div>
                <div className="flex items-center">
                    <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                    <label htmlFor="ingredient2" className="text-gray-700 dark:text-white/80 ml-2">Mushroom</label>
                </div>
                <div className="flex items-center">
                    <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Pepper'} />
                    <label htmlFor="ingredient3" className="text-gray-700 dark:text-white/80 ml-2">Pepper</label>
                </div>
                <div className="flex items-center">
                    <RadioButton inputId="ingredient4" name="pizza" value="Onion" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Onion'} />
                    <label htmlFor="ingredient4" className="text-gray-700 dark:text-white/80 ml-2">Onion</label>
                </div>
            </div>
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(f.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(a.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(a.DocSectionCode,{code:n,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:x},{id:"pt.radiobutton.options",label:"RadioButton PT Options",component:i.default}];return(0,t.jsx)(n.DocComponent,{title:"React RadioButton Component",header:"RadioButton",description:"RadioButton is an extension to standard radio button element with theming.",componentDocs:[{id:"import",label:"Import",component:m},{id:"group",label:"Group",component:u},{id:"dynamic",label:"Dynamic",component:d},{id:"filled",label:"Filled",component:p},{id:"invalid",label:"Invalid",component:h},{id:"disabled",label:"Disabled",component:o},{id:"accessibility",label:"Accessibility",component:l}],apiDocs:["RadioButton"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:g},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:j}]}]})}],85986)},16804,(e,t,i)=>{let n="/radiobutton";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(85986)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);