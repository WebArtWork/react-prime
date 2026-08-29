(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),a=e.i(91788);e.s(["CodeHighlight",0,function(e){let l=(0,a.useRef)(),i=`language-${e.lang||"jsx"}`;return(0,a.useEffect)(()=>{window.Prism.highlightElement(l.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:l,className:i,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),a=e.i(3935),l=e.i(58678),i=e.i(3828),s=e.i(91788),n=e.i(51551),r=e.i(72124),o=e.i(41158),c=e.i(87914),d=e.i(28137);let p=e=>{let l=(0,s.useContext)(c.default),{id:r,data:p,name:u,description:m,allowLink:x=!0}=e,h=r.startsWith("pt."),f=(0,i.useRouter)();if(n.ObjectUtils.isNotEmpty(p)){let i=Object.keys(p[0]),c=(e,t)=>{let a=document.getElementById(e);a&&a.parentElement.scrollIntoView({block:"start",behavior:t})},j=(e,l,i)=>{if(x&&e)return e.split("|").map((e,n)=>{if(e.includes(u)){let a=e.indexOf(u),l=e.substring(a).replace(/(\[|\]|<|>).*$/gm,"").trim(),i=u===l?`api.${u}`:`api.${u}.${l===`${u}Props`?"props":l}`;return(0,t.jsxs)(s.default.Fragment,{children:[0!==n?"|":"",(0,t.jsx)(o.default,{href:f.basePath+f.pathname+`#${i}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(i,"smooth"),children:e})})]},n)}return(0,t.jsxs)(s.default.Fragment,{children:[0!==n?"|":"",l?(0,t.jsxs)("span",{id:r+"."+e,className:(0,a.classNames)("doc-option-name",{"line-through cursor-pointer":!!i}),title:i,children:[e,(0,t.jsx)(o.default,{href:f.basePath+f.pathname+`#${r+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(r+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},n)});let n=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return l?(0,t.jsxs)("span",{id:r+"."+n,className:(0,a.classNames)("doc-option-name",{"line-through cursor-pointer":!!i}),title:i,children:[n,(0,t.jsx)(o.default,{href:f.basePath+f.pathname+`#${r+"."+n}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(r+"."+n),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):n},b=(0,t.jsx)(s.default.Fragment,{children:h?(0,t.jsx)("tr",{children:i.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:i.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),v=(0,t.jsx)(s.default.Fragment,{children:p.map((e,i)=>{if(h){let{value:a,label:l,description:s}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:a}),(0,t.jsx)("td",{children:l}),(0,t.jsx)("td",{children:s})]},i)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([i,s],r)=>"readonly"!==i&&"optional"!==i&&"deprecated"!==i&&(0,t.jsx)("td",{children:"parameters"===i?s.map((e,a)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:j(e.type)}),(0,t.jsx)("br",{})]},a)):"default"===i?(0,t.jsx)("div",{className:(0,a.classNames)("doc-option-default",{"doc-option-dark":l.darkMode,"doc-option-light":!l.darkMode}),children:n.ObjectUtils.isEmpty(s)?"null":j(s,"name"===i,e.deprecated)}):"type"===i?(0,t.jsx)("span",{className:"doc-option-type",children:j(s,"name"===i,e.deprecated)}):"returnType"===i?(0,t.jsx)("div",{className:(0,a.classNames)("doc-option-returnType",{"doc-option-dark":l.darkMode,"doc-option-light":!l.darkMode}),children:j(s,"name"===i,e.deprecated)}):"description"===i||"values"===i?(0,t.jsx)("span",{className:"doc-option-description",children:s}):j(s,"name"===i,e.deprecated)},r))},i)})});return(0,t.jsxs)(s.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:m})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:b}),(0,t.jsx)("tbody",{children:v})]})})]},r)}return null};e.s(["default",0,p],88850);var u=e.i(71864),m=e.i(38076);function x(e){let{doc:a,header:l}=e,i=e.apiExclude,o=a.reduce((e,a)=>{let l,s=a.split("."),o=(l=s[0])&&l[0].toUpperCase()+l.slice(1)||"",c=r.default[o.toLowerCase()],d=(e,t)=>i&&i[e]&&i[e].includes(t),u=e=>i&&i[e]&&"excludeAll"===i[e];if(c){let l=(e,a)=>{if(n.ObjectUtils.isNotEmpty(c.events)&&n.ObjectUtils.isNotEmpty(c.events.values)&&!u("events")){let l={id:`api.${a}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,i])=>{let[s,n]=[`api.${a}.${e}`,e];d("event",e)||l.children.push({id:s,label:n,component:e=>(0,t.jsx)(p,{name:a,data:i.props,description:(0,t.jsxs)(t.Fragment,{children:[i.description," See ",(0,t.jsx)("i",{children:i.relatedProp}),"."]}),...e})})}),e.push(l)}if(n.ObjectUtils.isNotEmpty(c.interfaces)&&n.ObjectUtils.isNotEmpty(c.interfaces.values)&&!u("interfaces")){let l={id:`api.${a}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,i])=>{let[s,n]=[`api.${a}.${e}`,e];d("interfaces",e)||l.children.push({id:s,label:n,component:e=>(0,t.jsx)(p,{name:a,data:i.props,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),...e})})}),e.push(l)}if(n.ObjectUtils.isNotEmpty(c.types)&&n.ObjectUtils.isNotEmpty(c.types.values)&&!u("types")){let l={id:`api.${a}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,i])=>{let[s,n]=[`api.${a}.${e}`,e];d("types",e)||l.children.push({id:s,label:n,component:e=>(0,t.jsx)(p,{name:a,data:[i],allowLink:!1,...e})})}),e.push(l)}};if(3===s.length){let a=s[1],l=s[2];if("functions"===a){let i=c[a].values[l],s={id:`api.${o}`,label:o,children:[]},[r,d]=[`api.${o}.function`,"Function"],u=Object.entries(i).reduce((e,[t,a])=>("description"!==t&&(e[t]=a),e),{});s.children.push({id:r,label:d,component:e=>(0,t.jsx)(p,{name:o,data:[u],description:i.description,...e})});let m=i.parameters&&i.parameters.map(e=>e.type);if(n.ObjectUtils.isNotEmpty(c.interfaces)&&n.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${o}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([a,l])=>{if(m.includes(a)){let[i,s]=[`api.${o}.${a}`,a],r={id:i,label:s,description:(0,t.jsxs)(t.Fragment,{children:[l.description," ",l.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:l.extendedTypes}),"."]})]}),children:[]};n.ObjectUtils.isNotEmpty(l.props)&&r.children.push({id:`${i}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:l.props,...e})}),n.ObjectUtils.isNotEmpty(l.callbacks)&&r.children.push({id:`${i}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:l.callbacks,...e})}),e.children.push(r)}}),n.ObjectUtils.isNotEmpty(e.children)&&s.children.push(e)}e.push(s)}}else c.components&&Object.entries(c.components).forEach(([i,s])=>{let r={id:`api.${i}`,label:i,description:s.description,children:[]};if(n.ObjectUtils.isNotEmpty(s.props)&&n.ObjectUtils.isNotEmpty(s.props.values)&&!u("props")){let[e,a]=[`api.${i}.props`,"Props"];if(d("props",i))return;r.children.push({id:e,label:a,component:e=>(0,t.jsx)(p,{name:i,data:s.props.values,description:s.props.description,...e})})}if(n.ObjectUtils.isNotEmpty(s.callbacks)&&n.ObjectUtils.isNotEmpty(s.callbacks.values)&&!u("callbacks")){let[e,a]=[`api.${i}.callbacks`,"Callbacks"];if(d("callbacks",i))return;r.children.push({id:e,label:a,component:e=>(0,t.jsx)(p,{name:i,data:s.callbacks.values,description:s.callbacks.description,...e})})}if(n.ObjectUtils.isNotEmpty(s.methods)&&n.ObjectUtils.isNotEmpty(s.methods.values)&&!u("methods")){let[e,a]=[`api.${i}.methods`,"Methods"];if(d("methods",i))return;r.children.push({id:e,label:a,component:e=>(0,t.jsx)(p,{name:i,data:s.methods.values,description:s.methods.description,...e})})}i.toLocaleLowerCase()===a.toLowerCase()&&l(r.children,i),e.push(r)}),c.model&&Object.entries(c.model).forEach(([i,s])=>{let r={id:`api.${i}`,label:i,description:s.description,children:[]};if(n.ObjectUtils.isNotEmpty(s.props)&&n.ObjectUtils.isNotEmpty(s.props.values)&&!u("props")){let[e,a]=[`api.${i}.props`,"Props"];if(d("props",i))return;r.children.push({id:e,label:a,component:e=>(0,t.jsx)(p,{name:i,data:s.props.values,description:s.props.description,...e})})}i.toLocaleLowerCase()===a.toLowerCase()&&l(r.children,i),e.push(r)}),c.components||c.model||l(e,o)}return e},[]);return(0,s.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[l," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",l," module."]})]}),(0,t.jsx)(m.DocSections,{docs:o})]}),(0,t.jsx)(u.DocSectionNav,{docs:o})]})}e.s(["DocComponent",0,function(e){let n,[r,o]=(0,s.useState)(0),c=(0,i.useRouter)();n=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{o(e),c.replace(c.pathname)};return(0,s.useEffect)(()=>{c.asPath.includes("#api")&&o(1),c.asPath.includes("#pt")&&o(3)},[c.asPath]),(0,t.jsxs)("div",{className:(0,a.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(l.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":0===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:n})}),e.apiDocs?(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":1===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":2===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":3===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===r?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.componentDocs})]}):null,1===r?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(x,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===r?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===r?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},97776,e=>{"use strict";var t=e.i(91398),a=e.i(91788),l=e.i(10836),i=e.i(15498),s=e.i(60150),n=e.i(3935),r=e.i(51551);let o=`
@layer primereact {
    .p-float-label {
        display: block;
        position: relative;
    }
    
    .p-float-label label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        margin-top: -.5rem;
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
    }
    
    .p-float-label:has(textarea) label {
        top: 1rem;
    }
    
    .p-float-label:has(input:focus) label,
    .p-float-label:has(input.p-filled) label,
    .p-float-label:has(input:-webkit-autofill) label,
    .p-float-label:has(textarea:focus) label,
    .p-float-label:has(textarea.p-filled) label,
    .p-float-label:has(.p-inputwrapper-focus) label,
    .p-float-label:has(.p-inputwrapper-filled) label {
        top: -.75rem;
        font-size: 12px;
    }
    
    .p-float-label .p-placeholder,
    .p-float-label input::placeholder,
    .p-float-label .p-inputtext::placeholder {
        opacity: 0;
        transition-property: all;
        transition-timing-function: ease;
    }
    
    .p-float-label .p-focus .p-placeholder,
    .p-float-label input:focus::placeholder,
    .p-float-label .p-inputtext:focus::placeholder {
        opacity: 1;
        transition-property: all;
        transition-timing-function: ease;
    }
}`,c=i.ComponentBase.extend({defaultProps:{__TYPE:"FloatLabel",children:void 0},css:{classes:{root:"p-float-label"},styles:o}}),d=a.memo(a.forwardRef((e,o)=>{let d=(0,s.useMergeProps)(),p=a.useContext(l.PrimeReactContext),u=c.getProps(e,p),m=a.useRef(o),{ptm:x,cx:h,isUnstyled:f}=c.setMetaData({props:u});(0,i.useHandleStyle)(c.css.styles,f,{name:"floatlabel"}),a.useEffect(()=>{r.ObjectUtils.combinedRefs(m,o)},[m,o]);let j=d({ref:m,className:(0,n.classNames)(h("root"))},c.getOtherProps(u),x("root"));return(0,t.jsx)("span",{...j,children:u.children})}));d.displayName="FloatLabel",e.s(["FloatLabel",0,d],97776)},66082,e=>{"use strict";var t=e.i(91398),a=e.i(91788),l=e.i(10836),i=e.i(15498),s=e.i(60150),n=e.i(34366),r=e.i(64691),o=e.i(45543),c=e.i(51551),d=e.i(3935);let p=i.ComponentBase.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,children:void 0,className:null,invalid:!1,variant:null,keyfilter:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,iconPosition:null},css:{classes:{root:({props:e,isFilled:t,context:a})=>(0,d.classNames)("p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":t,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:a&&"filled"===a.inputStyle})}}}),u=a.memo(a.forwardRef((e,u)=>{let m=(0,s.useMergeProps)(),x=a.useContext(l.PrimeReactContext),h=p.getProps(e,x),{ptm:f,cx:j,isUnstyled:b}=p.setMetaData({props:h,...h.__parentMetadata,context:{disabled:h.disabled,iconPosition:h.iconPosition}});(0,i.useHandleStyle)(p.css.styles,b,{name:"inputtext",styled:!0});let v=a.useRef(u);a.useEffect(()=>{c.ObjectUtils.combinedRefs(v,u)},[v,u]);let y=a.useMemo(()=>c.ObjectUtils.isNotEmpty(h.value)||c.ObjectUtils.isNotEmpty(h.defaultValue),[h.value,h.defaultValue]),g=c.ObjectUtils.isNotEmpty(h.tooltip);a.useEffect(()=>{y||v.current?.value?o.DomHandler.addClass(v.current,"p-filled"):o.DomHandler.removeClass(v.current,"p-filled")},[h.disabled,y]);let N=m({className:(0,d.classNames)(h.className,j("root",{context:x,isFilled:y})),autoComplete:h.autoComplete,onBeforeInput:e=>{h.onBeforeInput&&h.onBeforeInput(e),h.keyfilter&&n.KeyFilter.onBeforeInput(e,h.keyfilter,h.validateOnly)},onInput:e=>{let t=e.target,a=!0;h.keyfilter&&h.validateOnly&&(a=n.KeyFilter.validate(e,h.keyfilter)),h.onInput&&h.onInput(e,a),c.ObjectUtils.isNotEmpty(t.value)?o.DomHandler.addClass(t,"p-filled"):o.DomHandler.removeClass(t,"p-filled")},onKeyDown:e=>{h.onKeyDown&&h.onKeyDown(e),h.keyfilter&&n.KeyFilter.onKeyPress(e,h.keyfilter,h.validateOnly)},onPaste:e=>{h.onPaste&&h.onPaste(e),h.keyfilter&&n.KeyFilter.onPaste(e,h.keyfilter,h.validateOnly)}},p.getOtherProps(h),f("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{ref:v,...N}),g&&(0,t.jsx)(r.Tooltip,{target:v,content:h.tooltip,pt:f("tooltip"),...h.tooltipOptions})]})}));u.displayName="InputText",e.s(["InputText",0,u],66082)},34366,e=>{"use strict";var t=e.i(45543);let a={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:e=>a.DEFAULT_MASKS[e]?a.DEFAULT_MASKS[e]:e,onBeforeInput(e,a,l){!l&&t.DomHandler.isAndroid()&&this.validateKey(e,e.data,a)},onKeyPress(e,a,l){l||t.DomHandler.isAndroid()||e.ctrlKey||e.altKey||e.metaKey||this.validateKey(e,e.key,a)},onPaste(e,t,a){if(a)return;let l=this.getRegex(t);[...e.clipboardData.getData("text")].forEach(t=>{if(!l.test(t))return e.preventDefault(),!1})},validateKey(e,t,a){null==t||!(t.length<=2)||this.getRegex(a).test(t)||e.preventDefault()},validate(e,t){let a=e.target.value,l=!0,i=this.getRegex(t);return a&&!i.test(a)&&(l=!1),l}};e.s(["KeyFilter",0,a])},3828,(e,t,a)=>{t.exports=e.r(26990)},63185,e=>{"use strict";var t=e.i(91398),a=e.i(88850),l=e.i(82948),i=e.i(5180),s=e.i(28137);function n(){let e={basic:`
<label htmlFor="firstname">Firstname</label>
<InputText id="firstname" />

<span id="lastname">Lastname</span>
<InputText aria-labelledby="lastname" />

<InputText aria-label="Age"/>
    `};return(0,t.jsxs)(s.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["InputText component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via ",(0,t.jsx)("i",{children:"label"})," tag combined with ",(0,t.jsx)("i",{children:"id"})," prop or using ",(0,t.jsx)("i",{children:"aria-labelledby"}),","," ",(0,t.jsx)("i",{children:"aria-label"})," props."]}),(0,t.jsx)(i.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the input."})]})})]})})]})}var r=e.i(66082),o=e.i(91788);function c(e){let[a,l]=(0,o.useState)(""),n={basic:`
<InputText value={value} onChange={(e) => setValue(e.target.value)} />
        `,javascript:`
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["InputText is used as a controlled input with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(r.InputText,{value:a,onChange:e=>l(e.target.value)})}),(0,t.jsx)(i.DocSectionCode,{code:n})]})}function d(e){let a={basic:`
<InputText disabled placeholder="Disabled" />
        `,javascript:`
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText disabled placeholder="Disabled" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText disabled placeholder="Disabled" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(r.InputText,{disabled:!0,placeholder:"Disabled"})}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}function p(e){let[a,l]=(0,o.useState)(""),n={basic:`
<InputText variant="filled" value={value} onChange={(e) => setValue(e.target.value)} />
        `,javascript:`
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function FilledDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputText variant="filled" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function FilledDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputText variant="filled" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specify the ",(0,t.jsx)("i",{children:"variant"})," property as ",(0,t.jsx)("i",{children:"filled"})," to display the component with a higher visual emphasis than the default ",(0,t.jsx)("i",{children:"outlined"})," style."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(r.InputText,{variant:"filled",value:a,onChange:e=>l(e.target.value)})}),(0,t.jsx)(i.DocSectionCode,{code:n})]})}var u=e.i(97776),m=e.i(41158);function x(e){let[a,l]=(0,o.useState)(""),n={basic:`
<FloatLabel>
    <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
    <label htmlFor="username">Username</label>
</FloatLabel>
        `,javascript:`
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function FloatLabelDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </FloatLabel>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="username" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </FloatLabel>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A floating label appears on top of the input field when focused. Visit ",(0,t.jsx)(m.default,{href:"/floatlabel",children:"FloatLabel"})," documentation for more information."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)(u.FloatLabel,{children:[(0,t.jsx)(r.InputText,{id:"username",value:a,onChange:e=>l(e.target.value)}),(0,t.jsx)("label",{htmlFor:"username",children:"Username"})]})}),(0,t.jsx)(i.DocSectionCode,{code:n})]})}function h(e){let a={basic:`
<div className="flex flex-column gap-2">
    <label htmlFor="username">Username</label>
    <InputText id="username" aria-describedby="username-help" />
    <small id="username-help">
        Enter your username to reset your password.
    </small>
</div>
        `,javascript:`
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function HelpTextDemo() {
    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
                <small id="username-help">
                    Enter your username to reset your password.
                </small>
            </div>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function HelpTextDemo() {
    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
                <small id="username-help">
                    Enter your username to reset your password.
                </small>
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["An advisory text can be defined with the semantic ",(0,t.jsx)("i",{children:"small"})," tag."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)("div",{className:"flex flex-column gap-2",children:[(0,t.jsx)("label",{htmlFor:"username",children:"Username"}),(0,t.jsx)(r.InputText,{id:"username","aria-describedby":"username-help"}),(0,t.jsx)("small",{id:"username-help",children:"Enter your username to reset your password."})]})}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}function f(e){let a={basic:`
import { InputText } from 'primereact/inputtext';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function j(e){let a={basic:`
<InputText invalid />
        `,javascript:`
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText invalid />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText invalid />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(r.InputText,{invalid:!0})}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}function b(e){let a={basic:`
<InputText keyfilter="int" placeholder="Integers" />
        `,javascript:`
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function KeyFilterDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText keyfilter="int" placeholder="Integers" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function KeyFilterDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText keyfilter="int" placeholder="Integers" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["InputText has built-in key filtering support to block certain keys, refer to ",(0,t.jsx)(m.default,{href:"/keyfilter",children:"keyfilter"})," page for more information."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(r.InputText,{keyfilter:"int",placeholder:"Integers"})}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}let v=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/inputtext.jpg",alt:"inputtext"})})]});function y(e){let a={basic:`
<InputText type="text" className="p-inputtext-sm" placeholder="Small" />
<InputText type="text" placeholder="Normal" />
<InputText type="text" className="p-inputtext-lg" placeholder="Large" />
        `,javascript:`
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function SizesDemo() {
    return (
        <div className="card flex flex-column align-items-center gap-3 ">
            <InputText type="text" className="p-inputtext-sm" placeholder="Small" />
            <InputText type="text" placeholder="Normal" />
            <InputText type="text" className="p-inputtext-lg" placeholder="Large" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function SizesDemo() {
    return (
        <div className="card flex flex-column align-items-center gap-3 ">
            <InputText type="text" className="p-inputtext-sm" placeholder="Small" />
            <InputText type="text" placeholder="Normal" />
            <InputText type="text" className="p-inputtext-lg" placeholder="Large" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Apply ",(0,t.jsx)("i",{children:".p-inputtext-sm"})," to reduce the size of the input element or ",(0,t.jsx)("i",{children:".p-inputtext-lg"})," to enlarge it."]})}),(0,t.jsxs)("div",{className:"card flex flex-column align-items-center gap-3 ",children:[(0,t.jsx)(r.InputText,{type:"text",className:"p-inputtext-sm",placeholder:"Small"}),(0,t.jsx)(r.InputText,{type:"text",placeholder:"Normal"}),(0,t.jsx)(r.InputText,{type:"text",className:"p-inputtext-lg",placeholder:"Large"})]}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}function g(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-inputtext"}),(0,t.jsx)("td",{children:"Input element"})]})})]})})]})}function N(e){let a={basic:`
const Tailwind = {
    inputtext: {
        root: ({ props, context }) => ({
            className: classNames(
                'm-0',
                'font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border transition-colors duration-200 appearance-none rounded-lg',
                {
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]':
                        !context.disabled,
                    'hover:border-blue-500': !props.invalid && !context.disabled,
                    'opacity-60 select-none pointer-events-none cursor-default': context.disabled,
                    'border-gray-300 dark:border-blue-900/40': !props.invalid,
                    'border-red-500 hover:border-red-500/80 focus:border-red-500':
                        props.invalid && !context.disabled,
                    'border-red-500/50': props.invalid && context.disabled,
                },
                {
                    'text-lg px-4 py-4': props.size === 'large',
                    'text-xs px-2 py-2': props.size === 'small',
                    'p-3 text-base': !props.size || typeof props.size === 'number'
                },
                {
                    'pl-8': context.iconPosition === 'left',
                    'pr-8': props.iconPosition === 'right'
                }
            ),
        }),
    }
}
        `},l={javascript:`
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function UnstyledDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-center">
            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(m.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(i.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(i.DocSectionCode,{code:l,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:v},{id:"pt.inputtext.options",label:"InputText PT Options",component:a.default}];return(0,t.jsx)(l.DocComponent,{title:"React Input Component",header:"InputText",description:"InputText is an extension to standard input element with theming and keyfiltering.",componentDocs:[{id:"import",label:"Import",component:f},{id:"basic",label:"Basic",component:c},{id:"keyfilter",label:"Key Filter",component:b},{id:"sizes",label:"Sizes",component:y},{id:"helptext",label:"Help Text",component:h},{id:"floatlabel",label:"Float Label",component:x},{id:"filled",label:"Filled",component:p},{id:"invalid",label:"Invalid",component:j},{id:"disabled",label:"Disabled",component:d},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["InputText"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:g},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:N}]}]})}],63185)},164,(e,t,a)=>{let l="/inputtext";(window.__NEXT_P=window.__NEXT_P||[]).push([l,()=>e.r(63185)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([l])})}]);