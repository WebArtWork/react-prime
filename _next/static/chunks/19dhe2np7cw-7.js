(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),l=e.i(91788);e.s(["CodeHighlight",0,function(e){let a=(0,l.useRef)(),s=`language-${e.lang||"jsx"}`;return(0,l.useEffect)(()=>{window.Prism.highlightElement(a.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:a,className:s,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),l=e.i(3935),a=e.i(58678),s=e.i(3828),i=e.i(91788),n=e.i(51551),o=e.i(72124),r=e.i(41158),c=e.i(87914),d=e.i(28137);let p=e=>{let a=(0,i.useContext)(c.default),{id:o,data:p,name:u,description:m,allowLink:h=!0}=e,f=o.startsWith("pt."),x=(0,s.useRouter)();if(n.ObjectUtils.isNotEmpty(p)){let s=Object.keys(p[0]),c=(e,t)=>{let l=document.getElementById(e);l&&l.parentElement.scrollIntoView({block:"start",behavior:t})},b=(e,a,s)=>{if(h&&e)return e.split("|").map((e,n)=>{if(e.includes(u)){let l=e.indexOf(u),a=e.substring(l).replace(/(\[|\]|<|>).*$/gm,"").trim(),s=u===a?`api.${u}`:`api.${u}.${a===`${u}Props`?"props":a}`;return(0,t.jsxs)(i.default.Fragment,{children:[0!==n?"|":"",(0,t.jsx)(r.default,{href:x.basePath+x.pathname+`#${s}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(s,"smooth"),children:e})})]},n)}return(0,t.jsxs)(i.default.Fragment,{children:[0!==n?"|":"",a?(0,t.jsxs)("span",{id:o+"."+e,className:(0,l.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[e,(0,t.jsx)(r.default,{href:x.basePath+x.pathname+`#${o+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(o+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},n)});let n=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return a?(0,t.jsxs)("span",{id:o+"."+n,className:(0,l.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[n,(0,t.jsx)(r.default,{href:x.basePath+x.pathname+`#${o+"."+n}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(o+"."+n),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):n},j=(0,t.jsx)(i.default.Fragment,{children:f?(0,t.jsx)("tr",{children:s.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:s.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),y=(0,t.jsx)(i.default.Fragment,{children:p.map((e,s)=>{if(f){let{value:l,label:a,description:i}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:l}),(0,t.jsx)("td",{children:a}),(0,t.jsx)("td",{children:i})]},s)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([s,i],o)=>"readonly"!==s&&"optional"!==s&&"deprecated"!==s&&(0,t.jsx)("td",{children:"parameters"===s?i.map((e,l)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:b(e.type)}),(0,t.jsx)("br",{})]},l)):"default"===s?(0,t.jsx)("div",{className:(0,l.classNames)("doc-option-default",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:n.ObjectUtils.isEmpty(i)?"null":b(i,"name"===s,e.deprecated)}):"type"===s?(0,t.jsx)("span",{className:"doc-option-type",children:b(i,"name"===s,e.deprecated)}):"returnType"===s?(0,t.jsx)("div",{className:(0,l.classNames)("doc-option-returnType",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:b(i,"name"===s,e.deprecated)}):"description"===s||"values"===s?(0,t.jsx)("span",{className:"doc-option-description",children:i}):b(i,"name"===s,e.deprecated)},o))},s)})});return(0,t.jsxs)(i.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:m})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:j}),(0,t.jsx)("tbody",{children:y})]})})]},o)}return null};e.s(["default",0,p],88850);var u=e.i(71864),m=e.i(38076);function h(e){let{doc:l,header:a}=e,s=e.apiExclude,r=l.reduce((e,l)=>{let a,i=l.split("."),r=(a=i[0])&&a[0].toUpperCase()+a.slice(1)||"",c=o.default[r.toLowerCase()],d=(e,t)=>s&&s[e]&&s[e].includes(t),u=e=>s&&s[e]&&"excludeAll"===s[e];if(c){let a=(e,l)=>{if(n.ObjectUtils.isNotEmpty(c.events)&&n.ObjectUtils.isNotEmpty(c.events.values)&&!u("events")){let a={id:`api.${l}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,s])=>{let[i,n]=[`api.${l}.${e}`,e];d("event",e)||a.children.push({id:i,label:n,component:e=>(0,t.jsx)(p,{name:l,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," See ",(0,t.jsx)("i",{children:s.relatedProp}),"."]}),...e})})}),e.push(a)}if(n.ObjectUtils.isNotEmpty(c.interfaces)&&n.ObjectUtils.isNotEmpty(c.interfaces.values)&&!u("interfaces")){let a={id:`api.${l}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,s])=>{let[i,n]=[`api.${l}.${e}`,e];d("interfaces",e)||a.children.push({id:i,label:n,component:e=>(0,t.jsx)(p,{name:l,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," ",s.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:s.extendedTypes}),"."]})]}),...e})})}),e.push(a)}if(n.ObjectUtils.isNotEmpty(c.types)&&n.ObjectUtils.isNotEmpty(c.types.values)&&!u("types")){let a={id:`api.${l}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,s])=>{let[i,n]=[`api.${l}.${e}`,e];d("types",e)||a.children.push({id:i,label:n,component:e=>(0,t.jsx)(p,{name:l,data:[s],allowLink:!1,...e})})}),e.push(a)}};if(3===i.length){let l=i[1],a=i[2];if("functions"===l){let s=c[l].values[a],i={id:`api.${r}`,label:r,children:[]},[o,d]=[`api.${r}.function`,"Function"],u=Object.entries(s).reduce((e,[t,l])=>("description"!==t&&(e[t]=l),e),{});i.children.push({id:o,label:d,component:e=>(0,t.jsx)(p,{name:r,data:[u],description:s.description,...e})});let m=s.parameters&&s.parameters.map(e=>e.type);if(n.ObjectUtils.isNotEmpty(c.interfaces)&&n.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${r}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([l,a])=>{if(m.includes(l)){let[s,i]=[`api.${r}.${l}`,l],o={id:s,label:i,description:(0,t.jsxs)(t.Fragment,{children:[a.description," ",a.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:a.extendedTypes}),"."]})]}),children:[]};n.ObjectUtils.isNotEmpty(a.props)&&o.children.push({id:`${s}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:a.props,...e})}),n.ObjectUtils.isNotEmpty(a.callbacks)&&o.children.push({id:`${s}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:a.callbacks,...e})}),e.children.push(o)}}),n.ObjectUtils.isNotEmpty(e.children)&&i.children.push(e)}e.push(i)}}else c.components&&Object.entries(c.components).forEach(([s,i])=>{let o={id:`api.${s}`,label:s,description:i.description,children:[]};if(n.ObjectUtils.isNotEmpty(i.props)&&n.ObjectUtils.isNotEmpty(i.props.values)&&!u("props")){let[e,l]=[`api.${s}.props`,"Props"];if(d("props",s))return;o.children.push({id:e,label:l,component:e=>(0,t.jsx)(p,{name:s,data:i.props.values,description:i.props.description,...e})})}if(n.ObjectUtils.isNotEmpty(i.callbacks)&&n.ObjectUtils.isNotEmpty(i.callbacks.values)&&!u("callbacks")){let[e,l]=[`api.${s}.callbacks`,"Callbacks"];if(d("callbacks",s))return;o.children.push({id:e,label:l,component:e=>(0,t.jsx)(p,{name:s,data:i.callbacks.values,description:i.callbacks.description,...e})})}if(n.ObjectUtils.isNotEmpty(i.methods)&&n.ObjectUtils.isNotEmpty(i.methods.values)&&!u("methods")){let[e,l]=[`api.${s}.methods`,"Methods"];if(d("methods",s))return;o.children.push({id:e,label:l,component:e=>(0,t.jsx)(p,{name:s,data:i.methods.values,description:i.methods.description,...e})})}s.toLocaleLowerCase()===l.toLowerCase()&&a(o.children,s),e.push(o)}),c.model&&Object.entries(c.model).forEach(([s,i])=>{let o={id:`api.${s}`,label:s,description:i.description,children:[]};if(n.ObjectUtils.isNotEmpty(i.props)&&n.ObjectUtils.isNotEmpty(i.props.values)&&!u("props")){let[e,l]=[`api.${s}.props`,"Props"];if(d("props",s))return;o.children.push({id:e,label:l,component:e=>(0,t.jsx)(p,{name:s,data:i.props.values,description:i.props.description,...e})})}s.toLocaleLowerCase()===l.toLowerCase()&&a(o.children,s),e.push(o)}),c.components||c.model||a(e,r)}return e},[]);return(0,i.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[a," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",a," module."]})]}),(0,t.jsx)(m.DocSections,{docs:r})]}),(0,t.jsx)(u.DocSectionNav,{docs:r})]})}e.s(["DocComponent",0,function(e){let n,[o,r]=(0,i.useState)(0),c=(0,s.useRouter)();n=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{r(e),c.replace(c.pathname)};return(0,i.useEffect)(()=>{c.asPath.includes("#api")&&r(1),c.asPath.includes("#pt")&&r(3)},[c.asPath]),(0,t.jsxs)("div",{className:(0,l.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,l.classNames)({"doc-tabmenu-active":0===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:n})}),e.apiDocs?(0,t.jsx)("li",{className:(0,l.classNames)({"doc-tabmenu-active":1===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,l.classNames)({"doc-tabmenu-active":2===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,l.classNames)({"doc-tabmenu-active":3===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===o?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.componentDocs})]}):null,1===o?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===o?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===o?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},97776,e=>{"use strict";var t=e.i(91398),l=e.i(91788),a=e.i(10836),s=e.i(15498),i=e.i(60150),n=e.i(3935),o=e.i(51551);let r=`
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
}`,c=s.ComponentBase.extend({defaultProps:{__TYPE:"FloatLabel",children:void 0},css:{classes:{root:"p-float-label"},styles:r}}),d=l.memo(l.forwardRef((e,r)=>{let d=(0,i.useMergeProps)(),p=l.useContext(a.PrimeReactContext),u=c.getProps(e,p),m=l.useRef(r),{ptm:h,cx:f,isUnstyled:x}=c.setMetaData({props:u});(0,s.useHandleStyle)(c.css.styles,x,{name:"floatlabel"}),l.useEffect(()=>{o.ObjectUtils.combinedRefs(m,r)},[m,r]);let b=d({ref:m,className:(0,n.classNames)(f("root"))},c.getOtherProps(u),h("root"));return(0,t.jsx)("span",{...b,children:u.children})}));d.displayName="FloatLabel",e.s(["FloatLabel",0,d],97776)},66082,e=>{"use strict";var t=e.i(91398),l=e.i(91788),a=e.i(10836),s=e.i(15498),i=e.i(60150),n=e.i(34366),o=e.i(64691),r=e.i(45543),c=e.i(51551),d=e.i(3935);let p=s.ComponentBase.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,children:void 0,className:null,invalid:!1,variant:null,keyfilter:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,iconPosition:null},css:{classes:{root:({props:e,isFilled:t,context:l})=>(0,d.classNames)("p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":t,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:l&&"filled"===l.inputStyle})}}}),u=l.memo(l.forwardRef((e,u)=>{let m=(0,i.useMergeProps)(),h=l.useContext(a.PrimeReactContext),f=p.getProps(e,h),{ptm:x,cx:b,isUnstyled:j}=p.setMetaData({props:f,...f.__parentMetadata,context:{disabled:f.disabled,iconPosition:f.iconPosition}});(0,s.useHandleStyle)(p.css.styles,j,{name:"inputtext",styled:!0});let y=l.useRef(u);l.useEffect(()=>{c.ObjectUtils.combinedRefs(y,u)},[y,u]);let v=l.useMemo(()=>c.ObjectUtils.isNotEmpty(f.value)||c.ObjectUtils.isNotEmpty(f.defaultValue),[f.value,f.defaultValue]),g=c.ObjectUtils.isNotEmpty(f.tooltip);l.useEffect(()=>{v||y.current?.value?r.DomHandler.addClass(y.current,"p-filled"):r.DomHandler.removeClass(y.current,"p-filled")},[f.disabled,v]);let N=m({className:(0,d.classNames)(f.className,b("root",{context:h,isFilled:v})),autoComplete:f.autoComplete,onBeforeInput:e=>{f.onBeforeInput&&f.onBeforeInput(e),f.keyfilter&&n.KeyFilter.onBeforeInput(e,f.keyfilter,f.validateOnly)},onInput:e=>{let t=e.target,l=!0;f.keyfilter&&f.validateOnly&&(l=n.KeyFilter.validate(e,f.keyfilter)),f.onInput&&f.onInput(e,l),c.ObjectUtils.isNotEmpty(t.value)?r.DomHandler.addClass(t,"p-filled"):r.DomHandler.removeClass(t,"p-filled")},onKeyDown:e=>{f.onKeyDown&&f.onKeyDown(e),f.keyfilter&&n.KeyFilter.onKeyPress(e,f.keyfilter,f.validateOnly)},onPaste:e=>{f.onPaste&&f.onPaste(e),f.keyfilter&&n.KeyFilter.onPaste(e,f.keyfilter,f.validateOnly)}},p.getOtherProps(f),x("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{ref:y,...N}),g&&(0,t.jsx)(o.Tooltip,{target:y,content:f.tooltip,pt:x("tooltip"),...f.tooltipOptions})]})}));u.displayName="InputText",e.s(["InputText",0,u],66082)},34366,e=>{"use strict";var t=e.i(45543);let l={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:e=>l.DEFAULT_MASKS[e]?l.DEFAULT_MASKS[e]:e,onBeforeInput(e,l,a){!a&&t.DomHandler.isAndroid()&&this.validateKey(e,e.data,l)},onKeyPress(e,l,a){a||t.DomHandler.isAndroid()||e.ctrlKey||e.altKey||e.metaKey||this.validateKey(e,e.key,l)},onPaste(e,t,l){if(l)return;let a=this.getRegex(t);[...e.clipboardData.getData("text")].forEach(t=>{if(!a.test(t))return e.preventDefault(),!1})},validateKey(e,t,l){null==t||!(t.length<=2)||this.getRegex(l).test(t)||e.preventDefault()},validate(e,t){let l=e.target.value,a=!0,s=this.getRegex(t);return l&&!s.test(l)&&(a=!1),a}};e.s(["KeyFilter",0,l])},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},3828,(e,t,l)=>{t.exports=e.r(26990)},82512,e=>{"use strict";var t=e.i(91398),l=e.i(88850),a=e.i(82948),s=e.i(28137);function i(){return(0,t.jsxs)(s.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsx)("p",{children:"FloatLabel does not require any roles and attributes."}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("p",{children:"Component does not include any interactive elements."})]})}var n=e.i(5180),o=e.i(97776),r=e.i(66082),c=e.i(91788);function d(e){let[l,a]=(0,c.useState)(""),i={basic:`
<FloatLabel>
    <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
    <label htmlFor="username">Username</label>
</FloatLabel>
        `,javascript:`
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor"username">Username</label>
            </FloatLabel>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </FloatLabel>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"FloatLabel is used by wrapping the input and its label."})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)(o.FloatLabel,{children:[(0,t.jsx)(r.InputText,{id:"username",value:l,onChange:e=>a(e.target.value)}),(0,t.jsx)("label",{htmlFor:"username",children:"Username"})]})}),(0,t.jsx)(n.DocSectionCode,{code:i})]})}function p(e){let l={basic:`
import { FloatLabel } from 'primereact/floatlabel';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)(n.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}let u=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"floatlabel"})})]});var m=e.i(41158);function h(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{id:"style",label:"Style",children:(0,t.jsxs)("p",{children:["Following is the list of structural style classes, for theming classes visit ",(0,t.jsx)(m.default,{href:"/theming",children:" theming"})," page."]})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-float-label"}),(0,t.jsx)("td",{children:"Float label element."})]})})]})})]})}function f(e){let l={basic:`
const Tailwind = {
    floatlabel: {
        root: {
            className: classNames(
                'block relative', // root component style
                '[&>label]:absolute [&>label]:pointer-events-none [&>label]:left-2 [&>label]:top-1/2 [&>label]:-mt-2 [&>label]:leading-none [&>label]:transition-all [&>label]:ease-in-out', // label style
                '[&>textarea~label]:top-4', // textarea
                '[&>input:focus~label]:-top-3 [&>input:focus~label]:text-xs', // input focus
                '[&>input:autofill~label]:-top-3 [&>input:autofill~label]:text-xs', // input autofill
                '[&>input.p-filled~label]:-top-3 [&>input.p-filled~label]:text-xs', // input filled
                '[&>textarea:focus~label]:-top-3 [&>textarea:focus~label]:text-xs', // textarea focus
                '[&>textarea.p-filled~label]:-top-3 [&>textarea.p-filled~label]:text-xs', // textarea filled
                '[&>div[data-pc-name="dropdown"][data-p-focus="false"]~label]:-top-3 [&>div[data-pc-name="dropdown"][data-p-focus="false"]~label]:text-xs', // dropdown focus
                '[&>input::placeholder]:opacity-0 [&>input::placeholder]:transition-all [&>input::placeholder]:ease-in-out', // placeholder
                '[&>input::placeholder:focus]:opacity-100 [&>input::placeholder:focus]:transition-all [&>input::placeholder:focus]:ease-in-out' // placeholder focus
            )
        }
    },
}
        `},a={javascript:`
import React from 'react';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
              </FloatLabel>
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(m.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(n.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(n.DocSectionCode,{code:a,embedded:!0})]})})}e.s(["default",0,function(){let e=[{id:"pt.wireframe",label:"Wireframe",component:u},{id:"pt.floatlabel.options",label:"FloatLabel PT Options",component:l.default}];return(0,t.jsx)(a.DocComponent,{title:"React Float Label",header:"FloatLabel",description:"FloatLabel appears on top of the input field when focused.",componentDocs:[{id:"import",label:"Import",component:p},{id:"basic",label:"Basic",component:d},{id:"accessibility",label:"Accessibility",component:i}],apiDocs:["FloatLabel"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:h},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:f}]}]})}],82512)},16634,(e,t,l)=>{let a="/floatlabel";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(82512)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);