(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),s=e.i(91788);e.s(["CodeHighlight",0,function(e){let i=(0,s.useRef)(),n=`language-${e.lang||"jsx"}`;return(0,s.useEffect)(()=>{window.Prism.highlightElement(i.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:i,className:n,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),s=e.i(3935),i=e.i(58678),n=e.i(3828),c=e.i(91788),a=e.i(51551),l=e.i(72124),r=e.i(41158),o=e.i(87914),d=e.i(28137);let p=e=>{let i=(0,c.useContext)(o.default),{id:l,data:p,name:h,description:u,allowLink:m=!0}=e,x=l.startsWith("pt."),j=(0,n.useRouter)();if(a.ObjectUtils.isNotEmpty(p)){let n=Object.keys(p[0]),o=(e,t)=>{let s=document.getElementById(e);s&&s.parentElement.scrollIntoView({block:"start",behavior:t})},f=(e,i,n)=>{if(m&&e)return e.split("|").map((e,a)=>{if(e.includes(h)){let s=e.indexOf(h),i=e.substring(s).replace(/(\[|\]|<|>).*$/gm,"").trim(),n=h===i?`api.${h}`:`api.${h}.${i===`${h}Props`?"props":i}`;return(0,t.jsxs)(c.default.Fragment,{children:[0!==a?"|":"",(0,t.jsx)(r.default,{href:j.basePath+j.pathname+`#${n}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(n,"smooth"),children:e})})]},a)}return(0,t.jsxs)(c.default.Fragment,{children:[0!==a?"|":"",i?(0,t.jsxs)("span",{id:l+"."+e,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!n}),title:n,children:[e,(0,t.jsx)(r.default,{href:j.basePath+j.pathname+`#${l+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(l+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},a)});let a=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return i?(0,t.jsxs)("span",{id:l+"."+a,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!n}),title:n,children:[a,(0,t.jsx)(r.default,{href:j.basePath+j.pathname+`#${l+"."+a}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(l+"."+a),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):a},b=(0,t.jsx)(c.default.Fragment,{children:x?(0,t.jsx)("tr",{children:n.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:n.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),v=(0,t.jsx)(c.default.Fragment,{children:p.map((e,n)=>{if(x){let{value:s,label:i,description:c}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:s}),(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:c})]},n)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([n,c],l)=>"readonly"!==n&&"optional"!==n&&"deprecated"!==n&&(0,t.jsx)("td",{children:"parameters"===n?c.map((e,s)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:f(e.type)}),(0,t.jsx)("br",{})]},s)):"default"===n?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-default",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:a.ObjectUtils.isEmpty(c)?"null":f(c,"name"===n,e.deprecated)}):"type"===n?(0,t.jsx)("span",{className:"doc-option-type",children:f(c,"name"===n,e.deprecated)}):"returnType"===n?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-returnType",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:f(c,"name"===n,e.deprecated)}):"description"===n||"values"===n?(0,t.jsx)("span",{className:"doc-option-description",children:c}):f(c,"name"===n,e.deprecated)},l))},n)})});return(0,t.jsxs)(c.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:u})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:b}),(0,t.jsx)("tbody",{children:v})]})})]},l)}return null};e.s(["default",0,p],88850);var h=e.i(71864),u=e.i(38076);function m(e){let{doc:s,header:i}=e,n=e.apiExclude,r=s.reduce((e,s)=>{let i,c=s.split("."),r=(i=c[0])&&i[0].toUpperCase()+i.slice(1)||"",o=l.default[r.toLowerCase()],d=(e,t)=>n&&n[e]&&n[e].includes(t),h=e=>n&&n[e]&&"excludeAll"===n[e];if(o){let i=(e,s)=>{if(a.ObjectUtils.isNotEmpty(o.events)&&a.ObjectUtils.isNotEmpty(o.events.values)&&!h("events")){let i={id:`api.${s}.events`,label:"Events",description:o.events.description,children:[]};Object.entries(o.events.values).forEach(([e,n])=>{let[c,a]=[`api.${s}.${e}`,e];d("event",e)||i.children.push({id:c,label:a,component:e=>(0,t.jsx)(p,{name:s,data:n.props,description:(0,t.jsxs)(t.Fragment,{children:[n.description," See ",(0,t.jsx)("i",{children:n.relatedProp}),"."]}),...e})})}),e.push(i)}if(a.ObjectUtils.isNotEmpty(o.interfaces)&&a.ObjectUtils.isNotEmpty(o.interfaces.values)&&!h("interfaces")){let i={id:`api.${s}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([e,n])=>{let[c,a]=[`api.${s}.${e}`,e];d("interfaces",e)||i.children.push({id:c,label:a,component:e=>(0,t.jsx)(p,{name:s,data:n.props,description:(0,t.jsxs)(t.Fragment,{children:[n.description," ",n.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:n.extendedTypes}),"."]})]}),...e})})}),e.push(i)}if(a.ObjectUtils.isNotEmpty(o.types)&&a.ObjectUtils.isNotEmpty(o.types.values)&&!h("types")){let i={id:`api.${s}.types`,label:"Types",description:o.types.description,children:[]};Object.entries(o.types.values).forEach(([e,n])=>{let[c,a]=[`api.${s}.${e}`,e];d("types",e)||i.children.push({id:c,label:a,component:e=>(0,t.jsx)(p,{name:s,data:[n],allowLink:!1,...e})})}),e.push(i)}};if(3===c.length){let s=c[1],i=c[2];if("functions"===s){let n=o[s].values[i],c={id:`api.${r}`,label:r,children:[]},[l,d]=[`api.${r}.function`,"Function"],h=Object.entries(n).reduce((e,[t,s])=>("description"!==t&&(e[t]=s),e),{});c.children.push({id:l,label:d,component:e=>(0,t.jsx)(p,{name:r,data:[h],description:n.description,...e})});let u=n.parameters&&n.parameters.map(e=>e.type);if(a.ObjectUtils.isNotEmpty(o.interfaces)&&a.ObjectUtils.isNotEmpty(o.interfaces.values)){let e={id:`api.${r}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([s,i])=>{if(u.includes(s)){let[n,c]=[`api.${r}.${s}`,s],l={id:n,label:c,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),children:[]};a.ObjectUtils.isNotEmpty(i.props)&&l.children.push({id:`${n}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:i.props,...e})}),a.ObjectUtils.isNotEmpty(i.callbacks)&&l.children.push({id:`${n}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:i.callbacks,...e})}),e.children.push(l)}}),a.ObjectUtils.isNotEmpty(e.children)&&c.children.push(e)}e.push(c)}}else o.components&&Object.entries(o.components).forEach(([n,c])=>{let l={id:`api.${n}`,label:n,description:c.description,children:[]};if(a.ObjectUtils.isNotEmpty(c.props)&&a.ObjectUtils.isNotEmpty(c.props.values)&&!h("props")){let[e,s]=[`api.${n}.props`,"Props"];if(d("props",n))return;l.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:n,data:c.props.values,description:c.props.description,...e})})}if(a.ObjectUtils.isNotEmpty(c.callbacks)&&a.ObjectUtils.isNotEmpty(c.callbacks.values)&&!h("callbacks")){let[e,s]=[`api.${n}.callbacks`,"Callbacks"];if(d("callbacks",n))return;l.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:n,data:c.callbacks.values,description:c.callbacks.description,...e})})}if(a.ObjectUtils.isNotEmpty(c.methods)&&a.ObjectUtils.isNotEmpty(c.methods.values)&&!h("methods")){let[e,s]=[`api.${n}.methods`,"Methods"];if(d("methods",n))return;l.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:n,data:c.methods.values,description:c.methods.description,...e})})}n.toLocaleLowerCase()===s.toLowerCase()&&i(l.children,n),e.push(l)}),o.model&&Object.entries(o.model).forEach(([n,c])=>{let l={id:`api.${n}`,label:n,description:c.description,children:[]};if(a.ObjectUtils.isNotEmpty(c.props)&&a.ObjectUtils.isNotEmpty(c.props.values)&&!h("props")){let[e,s]=[`api.${n}.props`,"Props"];if(d("props",n))return;l.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:n,data:c.props.values,description:c.props.description,...e})})}n.toLocaleLowerCase()===s.toLowerCase()&&i(l.children,n),e.push(l)}),o.components||o.model||i(e,r)}return e},[]);return(0,c.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[i," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",i," module."]})]}),(0,t.jsx)(u.DocSections,{docs:r})]}),(0,t.jsx)(h.DocSectionNav,{docs:r})]})}e.s(["DocComponent",0,function(e){let a,[l,r]=(0,c.useState)(0),o=(0,n.useRouter)();a=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{r(e),o.replace(o.pathname)};return(0,c.useEffect)(()=>{o.asPath.includes("#api")&&r(1),o.asPath.includes("#pt")&&r(3)},[o.asPath]),(0,t.jsxs)("div",{className:(0,s.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":0===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:a})}),e.apiDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":1===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":2===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":3===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===l?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(u.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.componentDocs})]}):null,1===l?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(m,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===l?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(u.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===l?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(u.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},30164,e=>{"use strict";var t=e.i(91398),s=e.i(91788),i=e.i(10836),n=e.i(15498),c=e.i(60150),a=e.i(20484),l=e.i(64691),r=e.i(45543),o=e.i(51551),d=e.i(3935);let p=n.ComponentBase.extend({defaultProps:{__TYPE:"InputSwitch",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,id:null,inputId:null,inputRef:null,invalid:!1,name:null,onBlur:null,onChange:null,onFocus:null,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,children:void 0},css:{classes:{root:({props:e,checked:t})=>(0,d.classNames)("p-inputswitch p-component",{"p-highlight":t,"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-inputswitch-input",slider:"p-inputswitch-slider"}}}),h=s.memo(s.forwardRef((e,h)=>{let u=(0,c.useMergeProps)(),m=s.useContext(i.PrimeReactContext),x=p.getProps(e,m),{ptm:j,cx:f,isUnstyled:b}=p.setMetaData({props:x});(0,n.useHandleStyle)(p.css.styles,b,{name:"inputswitch"});let v=s.useRef(null),g=s.useRef(x.inputRef),w=x.checked===x.trueValue;s.useImperativeHandle(h,()=>({props:x,focus:()=>r.DomHandler.focus(g.current),getElement:()=>v.current,getInput:()=>g.current})),s.useEffect(()=>{o.ObjectUtils.combinedRefs(g,x.inputRef)},[g,x.inputRef]),(0,a.useMountEffect)(()=>{x.autoFocus&&r.DomHandler.focus(g.current,x.autoFocus)});let y=o.ObjectUtils.isNotEmpty(x.tooltip),N=p.getOtherProps(x),S=o.ObjectUtils.reduceKeys(N,r.DomHandler.ARIA_PROPS),k=u({className:(0,d.classNames)(x.className,f("root",{checked:w})),style:x.style,role:"checkbox","aria-checked":w,"data-p-highlight":w,"data-p-disabled":x.disabled},N,j("root")),I=u({type:"checkbox",id:x.inputId,name:x.name,checked:w,onChange:e=>{if(x.onChange){let t=w?x.falseValue:x.trueValue;x.onChange({originalEvent:e,value:t,stopPropagation:()=>{e?.stopPropagation()},preventDefault:()=>{e?.preventDefault()},target:{name:x.name,id:x.id,value:t}})}},onFocus:e=>{x?.onFocus?.(e)},onBlur:e=>{x?.onBlur?.(e)},disabled:x.disabled,role:"switch",tabIndex:x.tabIndex,"aria-checked":w,className:f("input"),...S},j("input")),C=u({className:f("slider")},j("slider"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{id:x.id,ref:v,...k,children:[(0,t.jsx)("input",{ref:g,...I}),(0,t.jsx)("span",{...C})]}),y&&(0,t.jsx)(l.Tooltip,{target:v,content:x.tooltip,pt:j("tooltip"),...x.tooltipOptions})]})}));h.displayName="InputSwitch",e.s(["InputSwitch",0,h],30164)},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},3828,(e,t,s)=>{t.exports=e.r(26990)},73832,e=>{"use strict";var t=e.i(91398),s=e.i(88850),i=e.i(82948),n=e.i(5180),c=e.i(28137);function a(){let e={basic:`
<label htmlFor="switch1">Remember Me</label>
<InputSwitch inputId="switch1" />

<span id="switch2">Remember Me</span>
<InputSwitch aria-labelledby="switch2" />

<InputSwitch aria-label="Remember Me" />
    `};return(0,t.jsxs)(c.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["InputSwitch component uses a hidden native checkbox element with ",(0,t.jsx)("i",{children:"switch"})," role internally that is only visible to screen readers. Value to describe the component can either be provided via ",(0,t.jsx)("i",{children:"label"})," tag combined with"," ",(0,t.jsx)("i",{children:"inputId"})," prop or using ",(0,t.jsx)("i",{children:"aria-labelledby"}),", ",(0,t.jsx)("i",{children:"aria-label"})," props."]}),(0,t.jsx)(n.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the switch."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles the checked state."})]})]})]})})]})}var l=e.i(30164),r=e.i(91788);function o(e){let[s,i]=(0,r.useState)(!1),a={basic:`
<InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function BasicDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";

export default function BasicDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <InputSwitch checked={checked} onChange={(e: InputSwitchChangeEvent) => setChecked(e.value)} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["InputSwitch is used as a controlled input with ",(0,t.jsx)("i",{children:"checked"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(l.InputSwitch,{checked:s,onChange:e=>i(e.value)})}),(0,t.jsx)(n.DocSectionCode,{code:a})]})}function d(e){let s={basic:`
<InputSwitch disabled />
        `,javascript:`
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputSwitch disabled />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputSwitch disabled />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(l.InputSwitch,{disabled:!0})}),(0,t.jsx)(n.DocSectionCode,{code:s})]})}function p(e){let s={basic:`
import { InputSwitch } from 'primereact/inputswitch';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e}),(0,t.jsx)(n.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function h(e){let s={basic:`
<InputSwitch className="p-invalid" />
        `,javascript:`
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputSwitch className="p-invalid" />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputSwitch className="p-invalid" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state style is added using the ",(0,t.jsx)("i",{children:"p-invalid"})," class to indicate a failed validation."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(l.InputSwitch,{className:"p-invalid"})}),(0,t.jsx)(n.DocSectionCode,{code:s})]})}function u(e){let[s,i]=(0,r.useState)(!0),a={basic:`
<InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function PreselectionDemo() {
    const [checked, setChecked] = useState(true);

    return (
        <div className="card flex justify-content-center">
            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";

export default function PreselectionDemo() {
    const [checked, setChecked] = useState<boolean>(true);

    return (
        <div className="card flex justify-content-center">
            <InputSwitch checked={checked} onChange={(e: InputSwitchChangeEvent) => setChecked(e.value)} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Enabling ",(0,t.jsx)("i",{children:"checked"})," property displays the component as active initially."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(l.InputSwitch,{checked:s,onChange:e=>i(e.value)})}),(0,t.jsx)(n.DocSectionCode,{code:a})]})}let m=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/inputswitch.jpg",alt:"inputswitch"})})]});function x(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-inputswitch"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-inputswitch-checked"}),(0,t.jsx)("td",{children:"Container element in active state."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-inputswitch-slider"}),(0,t.jsx)("td",{children:"Slider element behind the handle."})]})]})]})})]})}var j=e.i(41158);function f(e){let s={basic:`
const Tailwind = {
    inputswitch: {
        root: ({ props }) => ({
            className: classNames('inline-block relative', 'w-12 h-7', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        input: {
            className: classNames('absolute appearance-none top-0 left-0 size-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer')
        },
        slider: ({ props }) => ({
            className: classNames(
                'absolute cursor-pointer top-0 left-0 right-0 bottom-0 border border-transparent',
                'transition-colors duration-200 rounded-2xl',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                "before:absolute before:content-'' before:top-1/2 before:bg-white before:dark:bg-gray-900 before:w-5 before:h-5 before:left-1 before:-mt-2.5 before:rounded-full before:transition-duration-200",
                {
                    'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 hover:dark:bg-gray-700 ': !props.checked,
                    'bg-blue-500 before:transform before:translate-x-5': props.checked
                }
            )
        })
    }
}

        `},i={javascript:`
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function UnstyledDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-center">
            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(c.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(j.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(n.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(n.DocSectionCode,{code:i,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:m},{id:"pt.inputswitch.options",label:"InputSwitch PT Options",component:s.default}];return(0,t.jsx)(i.DocComponent,{title:"React InputSwitch Component",header:"InputSwitch",description:"InputSwitch is used to select a boolean value.",componentDocs:[{id:"import",label:"Import",component:p},{id:"basic",label:"Basic",component:o},{id:"preselection",label:"Preselection",component:u},{id:"invalid",label:"Invalid",component:h},{id:"disabled",label:"Disabled",component:d},{id:"accessibility",label:"Accessibility",component:a}],apiDocs:["InputSwitch"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:x},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:f}]}]})}],73832)},61765,(e,t,s)=>{let i="/inputswitch";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(73832)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);