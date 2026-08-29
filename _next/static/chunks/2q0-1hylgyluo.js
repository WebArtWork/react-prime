(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),l=e.i(91788);e.s(["CodeHighlight",0,function(e){let a=(0,l.useRef)(),s=`language-${e.lang||"jsx"}`;return(0,l.useEffect)(()=>{window.Prism.highlightElement(a.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:a,className:s,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),l=e.i(3935),a=e.i(58678),s=e.i(3828),i=e.i(91788),n=e.i(51551),o=e.i(72124),r=e.i(41158),c=e.i(87914),d=e.i(28137);let p=e=>{let a=(0,i.useContext)(c.default),{id:o,data:p,name:m,description:u,allowLink:h=!0}=e,x=o.startsWith("pt."),f=(0,s.useRouter)();if(n.ObjectUtils.isNotEmpty(p)){let s=Object.keys(p[0]),c=(e,t)=>{let l=document.getElementById(e);l&&l.parentElement.scrollIntoView({block:"start",behavior:t})},b=(e,a,s)=>{if(h&&e)return e.split("|").map((e,n)=>{if(e.includes(m)){let l=e.indexOf(m),a=e.substring(l).replace(/(\[|\]|<|>).*$/gm,"").trim(),s=m===a?`api.${m}`:`api.${m}.${a===`${m}Props`?"props":a}`;return(0,t.jsxs)(i.default.Fragment,{children:[0!==n?"|":"",(0,t.jsx)(r.default,{href:f.basePath+f.pathname+`#${s}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(s,"smooth"),children:e})})]},n)}return(0,t.jsxs)(i.default.Fragment,{children:[0!==n?"|":"",a?(0,t.jsxs)("span",{id:o+"."+e,className:(0,l.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[e,(0,t.jsx)(r.default,{href:f.basePath+f.pathname+`#${o+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(o+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},n)});let n=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return a?(0,t.jsxs)("span",{id:o+"."+n,className:(0,l.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[n,(0,t.jsx)(r.default,{href:f.basePath+f.pathname+`#${o+"."+n}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(o+"."+n),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):n},v=(0,t.jsx)(i.default.Fragment,{children:x?(0,t.jsx)("tr",{children:s.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:s.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),j=(0,t.jsx)(i.default.Fragment,{children:p.map((e,s)=>{if(x){let{value:l,label:a,description:i}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:l}),(0,t.jsx)("td",{children:a}),(0,t.jsx)("td",{children:i})]},s)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([s,i],o)=>"readonly"!==s&&"optional"!==s&&"deprecated"!==s&&(0,t.jsx)("td",{children:"parameters"===s?i.map((e,l)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:b(e.type)}),(0,t.jsx)("br",{})]},l)):"default"===s?(0,t.jsx)("div",{className:(0,l.classNames)("doc-option-default",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:n.ObjectUtils.isEmpty(i)?"null":b(i,"name"===s,e.deprecated)}):"type"===s?(0,t.jsx)("span",{className:"doc-option-type",children:b(i,"name"===s,e.deprecated)}):"returnType"===s?(0,t.jsx)("div",{className:(0,l.classNames)("doc-option-returnType",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:b(i,"name"===s,e.deprecated)}):"description"===s||"values"===s?(0,t.jsx)("span",{className:"doc-option-description",children:i}):b(i,"name"===s,e.deprecated)},o))},s)})});return(0,t.jsxs)(i.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:u})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:v}),(0,t.jsx)("tbody",{children:j})]})})]},o)}return null};e.s(["default",0,p],88850);var m=e.i(71864),u=e.i(38076);function h(e){let{doc:l,header:a}=e,s=e.apiExclude,r=l.reduce((e,l)=>{let a,i=l.split("."),r=(a=i[0])&&a[0].toUpperCase()+a.slice(1)||"",c=o.default[r.toLowerCase()],d=(e,t)=>s&&s[e]&&s[e].includes(t),m=e=>s&&s[e]&&"excludeAll"===s[e];if(c){let a=(e,l)=>{if(n.ObjectUtils.isNotEmpty(c.events)&&n.ObjectUtils.isNotEmpty(c.events.values)&&!m("events")){let a={id:`api.${l}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,s])=>{let[i,n]=[`api.${l}.${e}`,e];d("event",e)||a.children.push({id:i,label:n,component:e=>(0,t.jsx)(p,{name:l,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," See ",(0,t.jsx)("i",{children:s.relatedProp}),"."]}),...e})})}),e.push(a)}if(n.ObjectUtils.isNotEmpty(c.interfaces)&&n.ObjectUtils.isNotEmpty(c.interfaces.values)&&!m("interfaces")){let a={id:`api.${l}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,s])=>{let[i,n]=[`api.${l}.${e}`,e];d("interfaces",e)||a.children.push({id:i,label:n,component:e=>(0,t.jsx)(p,{name:l,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," ",s.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:s.extendedTypes}),"."]})]}),...e})})}),e.push(a)}if(n.ObjectUtils.isNotEmpty(c.types)&&n.ObjectUtils.isNotEmpty(c.types.values)&&!m("types")){let a={id:`api.${l}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,s])=>{let[i,n]=[`api.${l}.${e}`,e];d("types",e)||a.children.push({id:i,label:n,component:e=>(0,t.jsx)(p,{name:l,data:[s],allowLink:!1,...e})})}),e.push(a)}};if(3===i.length){let l=i[1],a=i[2];if("functions"===l){let s=c[l].values[a],i={id:`api.${r}`,label:r,children:[]},[o,d]=[`api.${r}.function`,"Function"],m=Object.entries(s).reduce((e,[t,l])=>("description"!==t&&(e[t]=l),e),{});i.children.push({id:o,label:d,component:e=>(0,t.jsx)(p,{name:r,data:[m],description:s.description,...e})});let u=s.parameters&&s.parameters.map(e=>e.type);if(n.ObjectUtils.isNotEmpty(c.interfaces)&&n.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${r}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([l,a])=>{if(u.includes(l)){let[s,i]=[`api.${r}.${l}`,l],o={id:s,label:i,description:(0,t.jsxs)(t.Fragment,{children:[a.description," ",a.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:a.extendedTypes}),"."]})]}),children:[]};n.ObjectUtils.isNotEmpty(a.props)&&o.children.push({id:`${s}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:a.props,...e})}),n.ObjectUtils.isNotEmpty(a.callbacks)&&o.children.push({id:`${s}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:a.callbacks,...e})}),e.children.push(o)}}),n.ObjectUtils.isNotEmpty(e.children)&&i.children.push(e)}e.push(i)}}else c.components&&Object.entries(c.components).forEach(([s,i])=>{let o={id:`api.${s}`,label:s,description:i.description,children:[]};if(n.ObjectUtils.isNotEmpty(i.props)&&n.ObjectUtils.isNotEmpty(i.props.values)&&!m("props")){let[e,l]=[`api.${s}.props`,"Props"];if(d("props",s))return;o.children.push({id:e,label:l,component:e=>(0,t.jsx)(p,{name:s,data:i.props.values,description:i.props.description,...e})})}if(n.ObjectUtils.isNotEmpty(i.callbacks)&&n.ObjectUtils.isNotEmpty(i.callbacks.values)&&!m("callbacks")){let[e,l]=[`api.${s}.callbacks`,"Callbacks"];if(d("callbacks",s))return;o.children.push({id:e,label:l,component:e=>(0,t.jsx)(p,{name:s,data:i.callbacks.values,description:i.callbacks.description,...e})})}if(n.ObjectUtils.isNotEmpty(i.methods)&&n.ObjectUtils.isNotEmpty(i.methods.values)&&!m("methods")){let[e,l]=[`api.${s}.methods`,"Methods"];if(d("methods",s))return;o.children.push({id:e,label:l,component:e=>(0,t.jsx)(p,{name:s,data:i.methods.values,description:i.methods.description,...e})})}s.toLocaleLowerCase()===l.toLowerCase()&&a(o.children,s),e.push(o)}),c.model&&Object.entries(c.model).forEach(([s,i])=>{let o={id:`api.${s}`,label:s,description:i.description,children:[]};if(n.ObjectUtils.isNotEmpty(i.props)&&n.ObjectUtils.isNotEmpty(i.props.values)&&!m("props")){let[e,l]=[`api.${s}.props`,"Props"];if(d("props",s))return;o.children.push({id:e,label:l,component:e=>(0,t.jsx)(p,{name:s,data:i.props.values,description:i.props.description,...e})})}s.toLocaleLowerCase()===l.toLowerCase()&&a(o.children,s),e.push(o)}),c.components||c.model||a(e,r)}return e},[]);return(0,i.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[a," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",a," module."]})]}),(0,t.jsx)(u.DocSections,{docs:r})]}),(0,t.jsx)(m.DocSectionNav,{docs:r})]})}e.s(["DocComponent",0,function(e){let n,[o,r]=(0,i.useState)(0),c=(0,s.useRouter)();n=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{r(e),c.replace(c.pathname)};return(0,i.useEffect)(()=>{c.asPath.includes("#api")&&r(1),c.asPath.includes("#pt")&&r(3)},[c.asPath]),(0,t.jsxs)("div",{className:(0,l.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,l.classNames)({"doc-tabmenu-active":0===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:n})}),e.apiDocs?(0,t.jsx)("li",{className:(0,l.classNames)({"doc-tabmenu-active":1===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,l.classNames)({"doc-tabmenu-active":2===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,l.classNames)({"doc-tabmenu-active":3===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===o?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(u.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.componentDocs})]}):null,1===o?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===o?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(u.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===o?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(u.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},66082,e=>{"use strict";var t=e.i(91398),l=e.i(91788),a=e.i(10836),s=e.i(15498),i=e.i(60150),n=e.i(34366),o=e.i(64691),r=e.i(45543),c=e.i(51551),d=e.i(3935);let p=s.ComponentBase.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,children:void 0,className:null,invalid:!1,variant:null,keyfilter:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,iconPosition:null},css:{classes:{root:({props:e,isFilled:t,context:l})=>(0,d.classNames)("p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":t,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:l&&"filled"===l.inputStyle})}}}),m=l.memo(l.forwardRef((e,m)=>{let u=(0,i.useMergeProps)(),h=l.useContext(a.PrimeReactContext),x=p.getProps(e,h),{ptm:f,cx:b,isUnstyled:v}=p.setMetaData({props:x,...x.__parentMetadata,context:{disabled:x.disabled,iconPosition:x.iconPosition}});(0,s.useHandleStyle)(p.css.styles,v,{name:"inputtext",styled:!0});let j=l.useRef(m);l.useEffect(()=>{c.ObjectUtils.combinedRefs(j,m)},[j,m]);let N=l.useMemo(()=>c.ObjectUtils.isNotEmpty(x.value)||c.ObjectUtils.isNotEmpty(x.defaultValue),[x.value,x.defaultValue]),y=c.ObjectUtils.isNotEmpty(x.tooltip);l.useEffect(()=>{N||j.current?.value?r.DomHandler.addClass(j.current,"p-filled"):r.DomHandler.removeClass(j.current,"p-filled")},[x.disabled,N]);let k=u({className:(0,d.classNames)(x.className,b("root",{context:h,isFilled:N})),autoComplete:x.autoComplete,onBeforeInput:e=>{x.onBeforeInput&&x.onBeforeInput(e),x.keyfilter&&n.KeyFilter.onBeforeInput(e,x.keyfilter,x.validateOnly)},onInput:e=>{let t=e.target,l=!0;x.keyfilter&&x.validateOnly&&(l=n.KeyFilter.validate(e,x.keyfilter)),x.onInput&&x.onInput(e,l),c.ObjectUtils.isNotEmpty(t.value)?r.DomHandler.addClass(t,"p-filled"):r.DomHandler.removeClass(t,"p-filled")},onKeyDown:e=>{x.onKeyDown&&x.onKeyDown(e),x.keyfilter&&n.KeyFilter.onKeyPress(e,x.keyfilter,x.validateOnly)},onPaste:e=>{x.onPaste&&x.onPaste(e),x.keyfilter&&n.KeyFilter.onPaste(e,x.keyfilter,x.validateOnly)}},p.getOtherProps(x),f("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{ref:j,...k}),y&&(0,t.jsx)(o.Tooltip,{target:j,content:x.tooltip,pt:f("tooltip"),...x.tooltipOptions})]})}));m.displayName="InputText",e.s(["InputText",0,m],66082)},34366,e=>{"use strict";var t=e.i(45543);let l={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:e=>l.DEFAULT_MASKS[e]?l.DEFAULT_MASKS[e]:e,onBeforeInput(e,l,a){!a&&t.DomHandler.isAndroid()&&this.validateKey(e,e.data,l)},onKeyPress(e,l,a){a||t.DomHandler.isAndroid()||e.ctrlKey||e.altKey||e.metaKey||this.validateKey(e,e.key,l)},onPaste(e,t,l){if(l)return;let a=this.getRegex(t);[...e.clipboardData.getData("text")].forEach(t=>{if(!a.test(t))return e.preventDefault(),!1})},validateKey(e,t,l){null==t||!(t.length<=2)||this.getRegex(l).test(t)||e.preventDefault()},validate(e,t){let l=e.target.value,a=!0,s=this.getRegex(t);return l&&!s.test(l)&&(a=!1),a}};e.s(["KeyFilter",0,l])},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},3828,(e,t,l)=>{t.exports=e.r(26990)},38761,e=>{"use strict";var t=e.i(91398),l=e.i(82948),a=e.i(28137),s=e.i(41158);function i(){return(0,t.jsx)(a.DocSectionText,{id:"accessibility",label:"Accessibility",children:(0,t.jsxs)("p",{children:["Refer to ",(0,t.jsx)(s.default,{href:"/inputtext",children:"InputText"})," for accessibility as KeyFilter is a built-in add-on of the InputText."]})})}var n=e.i(5180);function o(e){let l={basic:`
import { InputText } from 'primereact/inputtext';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e}),(0,t.jsx)(n.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}var r=e.i(66082);function c(e){let l={basic:`
<InputText keyfilter="int" />
<InputText keyfilter="pint" />
<InputText keyfilter="num" />
<InputText keyfilter="pnum" />
<InputText keyfilter="money" />
<InputText keyfilter="hex" />
<InputText keyfilter="alpha" />
<InputText keyfilter="alphanum" />
<InputText keyfilter="email" />
        `,javascript:`
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function PresetsDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex-auto">
                    <label htmlFor="integer" className="font-bold block mb-2">
                        Integer
                    </label>
                    <InputText id="integer" keyfilter="int" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="number" className="font-bold block mb-2">
                        Number
                    </label>
                    <InputText id="number" keyfilter="num" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="money" className="font-bold block mb-2">
                        Money
                    </label>
                    <InputText id="money" keyfilter="money" className="w-full" />
                </div>
            </div>
            <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex-auto">
                    <label htmlFor="hex" className="font-bold block mb-2">
                        Hex
                    </label>
                    <InputText id="hex" keyfilter="hex" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="alphabetic" className="font-bold block mb-2">
                        Alphabetic
                    </label>
                    <InputText id="alphabetic" keyfilter="alpha" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="alphanumeric" className="font-bold block mb-2">
                        Alphanumeric
                    </label>
                    <InputText id="alphanumeric" keyfilter="alphanum" className="w-full" />
                </div>
            </div>
            <div className="flex flex-wrap gap-3">
                <div className="flex-auto">
                    <label htmlFor="pint" className="font-bold block mb-2">
                            Positive Integer
                    </label>
                    <InputText id="pint" keyfilter="pint" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="pnum" className="font-bold block mb-2">
                            Positive Number
                    </label>
                    <InputText id="pnum" keyfilter="pnum" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="email" className="font-bold block mb-2">
                            Email
                    </label>
                    <InputText id="email" keyfilter="email" className="w-full" />
                </div>
            </div>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function PresetsDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex-auto">
                    <label htmlFor="integer" className="font-bold block mb-2">
                        Integer
                    </label>
                    <InputText id="integer" keyfilter="int" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="number" className="font-bold block mb-2">
                        Number
                    </label>
                    <InputText id="number" keyfilter="num" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="money" className="font-bold block mb-2">
                        Money
                    </label>
                    <InputText id="money" keyfilter="money" className="w-full" />
                </div>
            </div>
            <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex-auto">
                    <label htmlFor="hex" className="font-bold block mb-2">
                        Hex
                    </label>
                    <InputText id="hex" keyfilter="hex" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="alphabetic" className="font-bold block mb-2">
                        Alphabetic
                    </label>
                    <InputText id="alphabetic" keyfilter="alpha" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="alphanumeric" className="font-bold block mb-2">
                        Alphanumeric
                    </label>
                    <InputText id="alphanumeric" keyfilter="alphanum" className="w-full" />
                </div>
            </div>
            <div className="flex flex-wrap gap-3">
                <div className="flex-auto">
                    <label htmlFor="pint" className="font-bold block mb-2">
                            Positive Integer
                    </label>
                    <InputText id="pint" keyfilter="pint" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="pnum" className="font-bold block mb-2">
                            Positive Number
                    </label>
                    <InputText id="pnum" keyfilter="pnum" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="email" className="font-bold block mb-2">
                            Email
                    </label>
                    <InputText id="email" keyfilter="email" className="w-full" />
                </div>
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["KeyFilter provides various presets configured with the ",(0,t.jsx)("i",{children:"keyfilter"})," property."]})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"flex flex-wrap gap-3 mb-4",children:[(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"integer",className:"font-bold block mb-2",children:"Integer"}),(0,t.jsx)(r.InputText,{id:"integer",keyfilter:"int",className:"w-full"})]}),(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"number",className:"font-bold block mb-2",children:"Number"}),(0,t.jsx)(r.InputText,{id:"number",keyfilter:"num",className:"w-full"})]}),(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"money",className:"font-bold block mb-2",children:"Money"}),(0,t.jsx)(r.InputText,{id:"money",keyfilter:"money",className:"w-full"})]})]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-3 mb-4",children:[(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"hex",className:"font-bold block mb-2",children:"Hex"}),(0,t.jsx)(r.InputText,{id:"hex",keyfilter:"hex",className:"w-full"})]}),(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"alphabetic",className:"font-bold block mb-2",children:"Alphabetic"}),(0,t.jsx)(r.InputText,{id:"alphabetic",keyfilter:"alpha",className:"w-full"})]}),(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"alphanumeric",className:"font-bold block mb-2",children:"Alphanumeric"}),(0,t.jsx)(r.InputText,{id:"alphanumeric",keyfilter:"alphanum",className:"w-full"})]})]}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-3",children:[(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"pint",className:"font-bold block mb-2",children:"Positive Integer"}),(0,t.jsx)(r.InputText,{id:"pint",keyfilter:"pint",className:"w-full"})]}),(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"pnum",className:"font-bold block mb-2",children:"Positive Number"}),(0,t.jsx)(r.InputText,{id:"pnum",keyfilter:"pnum",className:"w-full"})]}),(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"email",className:"font-bold block mb-2",children:"Email"}),(0,t.jsx)(r.InputText,{id:"email",keyfilter:"email",className:"w-full"})]})]})]}),(0,t.jsx)(n.DocSectionCode,{code:l})]})}function d(e){let l={basic:`
<InputText keyfilter={/[^s]/} />
<InputText keyfilter={/^[^<>*!]+$/}  />
        `,javascript:`
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function RegexDemo() {
    return (
        <div className="card flex flex-wrap gap-3">
            <div className="flex-auto">
                <label htmlFor="spacekey" className="font-bold block mb-2">
                    Block Space
                </label>
                <InputText id="spacekey" keyfilter={/[^\\s]/} className="w-full" />
            </div>
            <div className="flex-auto">
                <label htmlFor="chars" className="font-bold block mb-2">
                    Block {\`< > * !\`}
                </label>
                <InputText id="chars" keyfilter={/^[^<>*!]+$/} className="w-full" />
            </div>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function RegexDemo() {
    return (
        <div className="card flex flex-wrap gap-3">
            <div className="flex-auto">
                <label htmlFor="spacekey" className="font-bold block mb-2">
                    Block Space
                </label>
                <InputText id="spacekey" keyfilter={/[^\\s]/} className="w-full" />
            </div>
            <div className="flex-auto">
                <label htmlFor="chars" className="font-bold block mb-2">
                    Block {\`< > * !\`}
                </label>
                <InputText id="chars" keyfilter={/^[^<>*!]+$/} className="w-full" />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"In addition to the presets, a regular expression can be configured for customization of blocking a single key press."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap gap-3",children:[(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"spacekey",className:"font-bold block mb-2",children:"Block Space"}),(0,t.jsx)(r.InputText,{id:"spacekey",keyfilter:/[^\s]/,className:"w-full"})]}),(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsxs)("label",{htmlFor:"chars",className:"font-bold block mb-2",children:["Block ","< > * !"]}),(0,t.jsx)(r.InputText,{id:"chars",keyfilter:/^[^<>*!]+$/,className:"w-full"})]})]}),(0,t.jsx)(n.DocSectionCode,{code:l})]})}var p=e.i(91788);function m(e){let[l,s]=(0,p.useState)(""),i={basic:`
<InputText id="numkeys" keyfilter={/^[+]?(\\d{1,12})?$/} validateOnly onInput={validateInput} />
        `,javascript:`
import React, { useState }  from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function RegexDemo() {
    const [prevValue, setPrevValue] = useState('');

    const validateInput = (event, validatePattern) => {
        const target = event.target;

        // validatePattern is the result of the regex against the whole input string
        if (validatePattern) {
            if (target.value.length > 0) {
                setPrevValue(target.value);
            }

            // key was OK so do nothing
            return;
        }

        // key made the whole input not valid so block this key
        //  Compare current value with previous value
        if (target.value.length > 0) {
            // Set previous valid value
            target.value = prevValue;
        }
    };

    return (
        <div className="card flex justify-content-center">
            <div>
                <label htmlFor="numkeys" className="font-bold block mb-2">
                    Block Numeric (allow "+" only once at start)
                </label>
                <InputText id="numkeys" keyfilter={/^[+]?(\\d{1,12})?$/} validateOnly onInput={validateInput} />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState }  from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function RegexDemo() {
    const [prevValue, setPrevValue] = useState('');

    const validateInput = (event: React.FormEvent<HTMLInputElement>, validatePattern: boolean) => {
        const target = event.target as HTMLInputElement;

        // validated is the result of the regex against the whole input string
        if (validatePattern) {
            if (target.value.length > 0) {
                setPrevValue(target.value);
            }

        // key was OK so do nothing
        return;
        }

        // key made the whole input not valid so block this key
        //  Compare current value with previous value
        if (target.value.length > 0) {
            // Set previous valid value
            target.value = prevValue;
        }
    };

    return (
        <div className="card flex justify-content-center">
            <div>
                <label htmlFor="numkeys" className="font-bold block mb-2">
                    Block Numeric (allow "+" only once at start)
                </label>
                <InputText id="numkeys" keyfilter={/^[+]?(\\d{1,12})?$/} validateOnly onInput={validateInput} />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["In addition to the presets, a regular expression can be used to validate the entire word using ",(0,t.jsx)("i",{children:"validateOnly"}),"."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"numkeys",className:"font-bold block mb-2",children:'Numeric (allow "+" only once at start)'}),(0,t.jsx)(r.InputText,{id:"numkeys",keyfilter:/^[+]?(\d{1,12})?$/,validateOnly:!0,onInput:(e,t)=>{let a=e.target;if(t){a.value.length>0&&s(a.value);return}a.value.length>0&&(a.value=l)}})]})}),(0,t.jsx)(n.DocSectionCode,{code:i})]})}e.s(["default",0,()=>(0,t.jsx)(l.DocComponent,{title:"React KeyFilter",header:"KeyFilter",description:"KeyFilter is a built-in feature of InputText to restrict user input based on a regular expression.",componentDocs:[{id:"import",label:"Import",component:o},{id:"presets",label:"Presets",component:c},{id:"regex",label:"Regex (Single Keypress)",component:d},{id:"regexword",label:"Regex (Whole Word)",component:m},{id:"accessibility",label:"Accessibility",component:i}],apiDocs:["KeyFilter"]})],38761)},1844,(e,t,l)=>{let a="/keyfilter";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(38761)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);