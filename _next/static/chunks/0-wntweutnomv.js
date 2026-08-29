(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),s=e.i(91788);e.s(["CodeHighlight",0,function(e){let n=(0,s.useRef)(),i=`language-${e.lang||"jsx"}`;return(0,s.useEffect)(()=>{window.Prism.highlightElement(n.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:n,className:i,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),s=e.i(3935),n=e.i(58678),i=e.i(3828),c=e.i(91788),o=e.i(51551),a=e.i(72124),l=e.i(41158),r=e.i(87914),d=e.i(28137);let p=e=>{let n=(0,c.useContext)(r.default),{id:a,data:p,name:h,description:u,allowLink:m=!0}=e,g=a.startsWith("pt."),x=(0,i.useRouter)();if(o.ObjectUtils.isNotEmpty(p)){let i=Object.keys(p[0]),r=(e,t)=>{let s=document.getElementById(e);s&&s.parentElement.scrollIntoView({block:"start",behavior:t})},j=(e,n,i)=>{if(m&&e)return e.split("|").map((e,o)=>{if(e.includes(h)){let s=e.indexOf(h),n=e.substring(s).replace(/(\[|\]|<|>).*$/gm,"").trim(),i=h===n?`api.${h}`:`api.${h}.${n===`${h}Props`?"props":n}`;return(0,t.jsxs)(c.default.Fragment,{children:[0!==o?"|":"",(0,t.jsx)(l.default,{href:x.basePath+x.pathname+`#${i}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>r(i,"smooth"),children:e})})]},o)}return(0,t.jsxs)(c.default.Fragment,{children:[0!==o?"|":"",n?(0,t.jsxs)("span",{id:a+"."+e,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!i}),title:i,children:[e,(0,t.jsx)(l.default,{href:x.basePath+x.pathname+`#${a+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>r(a+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},o)});let o=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return n?(0,t.jsxs)("span",{id:a+"."+o,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!i}),title:i,children:[o,(0,t.jsx)(l.default,{href:x.basePath+x.pathname+`#${a+"."+o}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>r(a+"."+o),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):o},b=(0,t.jsx)(c.default.Fragment,{children:g?(0,t.jsx)("tr",{children:i.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:i.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),f=(0,t.jsx)(c.default.Fragment,{children:p.map((e,i)=>{if(g){let{value:s,label:n,description:c}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:s}),(0,t.jsx)("td",{children:n}),(0,t.jsx)("td",{children:c})]},i)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([i,c],a)=>"readonly"!==i&&"optional"!==i&&"deprecated"!==i&&(0,t.jsx)("td",{children:"parameters"===i?c.map((e,s)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:j(e.type)}),(0,t.jsx)("br",{})]},s)):"default"===i?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-default",{"doc-option-dark":n.darkMode,"doc-option-light":!n.darkMode}),children:o.ObjectUtils.isEmpty(c)?"null":j(c,"name"===i,e.deprecated)}):"type"===i?(0,t.jsx)("span",{className:"doc-option-type",children:j(c,"name"===i,e.deprecated)}):"returnType"===i?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-returnType",{"doc-option-dark":n.darkMode,"doc-option-light":!n.darkMode}),children:j(c,"name"===i,e.deprecated)}):"description"===i||"values"===i?(0,t.jsx)("span",{className:"doc-option-description",children:c}):j(c,"name"===i,e.deprecated)},a))},i)})});return(0,t.jsxs)(c.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:u})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:b}),(0,t.jsx)("tbody",{children:f})]})})]},a)}return null};e.s(["default",0,p],88850);var h=e.i(71864),u=e.i(38076);function m(e){let{doc:s,header:n}=e,i=e.apiExclude,l=s.reduce((e,s)=>{let n,c=s.split("."),l=(n=c[0])&&n[0].toUpperCase()+n.slice(1)||"",r=a.default[l.toLowerCase()],d=(e,t)=>i&&i[e]&&i[e].includes(t),h=e=>i&&i[e]&&"excludeAll"===i[e];if(r){let n=(e,s)=>{if(o.ObjectUtils.isNotEmpty(r.events)&&o.ObjectUtils.isNotEmpty(r.events.values)&&!h("events")){let n={id:`api.${s}.events`,label:"Events",description:r.events.description,children:[]};Object.entries(r.events.values).forEach(([e,i])=>{let[c,o]=[`api.${s}.${e}`,e];d("event",e)||n.children.push({id:c,label:o,component:e=>(0,t.jsx)(p,{name:s,data:i.props,description:(0,t.jsxs)(t.Fragment,{children:[i.description," See ",(0,t.jsx)("i",{children:i.relatedProp}),"."]}),...e})})}),e.push(n)}if(o.ObjectUtils.isNotEmpty(r.interfaces)&&o.ObjectUtils.isNotEmpty(r.interfaces.values)&&!h("interfaces")){let n={id:`api.${s}.interfaces`,label:"Interfaces",description:r.interfaces.description,children:[]};Object.entries(r.interfaces.values).forEach(([e,i])=>{let[c,o]=[`api.${s}.${e}`,e];d("interfaces",e)||n.children.push({id:c,label:o,component:e=>(0,t.jsx)(p,{name:s,data:i.props,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),...e})})}),e.push(n)}if(o.ObjectUtils.isNotEmpty(r.types)&&o.ObjectUtils.isNotEmpty(r.types.values)&&!h("types")){let n={id:`api.${s}.types`,label:"Types",description:r.types.description,children:[]};Object.entries(r.types.values).forEach(([e,i])=>{let[c,o]=[`api.${s}.${e}`,e];d("types",e)||n.children.push({id:c,label:o,component:e=>(0,t.jsx)(p,{name:s,data:[i],allowLink:!1,...e})})}),e.push(n)}};if(3===c.length){let s=c[1],n=c[2];if("functions"===s){let i=r[s].values[n],c={id:`api.${l}`,label:l,children:[]},[a,d]=[`api.${l}.function`,"Function"],h=Object.entries(i).reduce((e,[t,s])=>("description"!==t&&(e[t]=s),e),{});c.children.push({id:a,label:d,component:e=>(0,t.jsx)(p,{name:l,data:[h],description:i.description,...e})});let u=i.parameters&&i.parameters.map(e=>e.type);if(o.ObjectUtils.isNotEmpty(r.interfaces)&&o.ObjectUtils.isNotEmpty(r.interfaces.values)){let e={id:`api.${l}.interfaces`,label:"Interfaces",description:r.interfaces.description,children:[]};Object.entries(r.interfaces.values).forEach(([s,n])=>{if(u.includes(s)){let[i,c]=[`api.${l}.${s}`,s],a={id:i,label:c,description:(0,t.jsxs)(t.Fragment,{children:[n.description," ",n.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:n.extendedTypes}),"."]})]}),children:[]};o.ObjectUtils.isNotEmpty(n.props)&&a.children.push({id:`${i}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:n.props,...e})}),o.ObjectUtils.isNotEmpty(n.callbacks)&&a.children.push({id:`${i}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:n.callbacks,...e})}),e.children.push(a)}}),o.ObjectUtils.isNotEmpty(e.children)&&c.children.push(e)}e.push(c)}}else r.components&&Object.entries(r.components).forEach(([i,c])=>{let a={id:`api.${i}`,label:i,description:c.description,children:[]};if(o.ObjectUtils.isNotEmpty(c.props)&&o.ObjectUtils.isNotEmpty(c.props.values)&&!h("props")){let[e,s]=[`api.${i}.props`,"Props"];if(d("props",i))return;a.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:i,data:c.props.values,description:c.props.description,...e})})}if(o.ObjectUtils.isNotEmpty(c.callbacks)&&o.ObjectUtils.isNotEmpty(c.callbacks.values)&&!h("callbacks")){let[e,s]=[`api.${i}.callbacks`,"Callbacks"];if(d("callbacks",i))return;a.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:i,data:c.callbacks.values,description:c.callbacks.description,...e})})}if(o.ObjectUtils.isNotEmpty(c.methods)&&o.ObjectUtils.isNotEmpty(c.methods.values)&&!h("methods")){let[e,s]=[`api.${i}.methods`,"Methods"];if(d("methods",i))return;a.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:i,data:c.methods.values,description:c.methods.description,...e})})}i.toLocaleLowerCase()===s.toLowerCase()&&n(a.children,i),e.push(a)}),r.model&&Object.entries(r.model).forEach(([i,c])=>{let a={id:`api.${i}`,label:i,description:c.description,children:[]};if(o.ObjectUtils.isNotEmpty(c.props)&&o.ObjectUtils.isNotEmpty(c.props.values)&&!h("props")){let[e,s]=[`api.${i}.props`,"Props"];if(d("props",i))return;a.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:i,data:c.props.values,description:c.props.description,...e})})}i.toLocaleLowerCase()===s.toLowerCase()&&n(a.children,i),e.push(a)}),r.components||r.model||n(e,l)}return e},[]);return(0,c.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[n," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",n," module."]})]}),(0,t.jsx)(u.DocSections,{docs:l})]}),(0,t.jsx)(h.DocSectionNav,{docs:l})]})}e.s(["DocComponent",0,function(e){let o,[a,l]=(0,c.useState)(0),r=(0,i.useRouter)();o=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{l(e),r.replace(r.pathname)};return(0,c.useEffect)(()=>{r.asPath.includes("#api")&&l(1),r.asPath.includes("#pt")&&l(3)},[r.asPath]),(0,t.jsxs)("div",{className:(0,s.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":0===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:o})}),e.apiDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":1===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":2===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":3===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===a?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(u.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.componentDocs})]}):null,1===a?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(m,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===a?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(u.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===a?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(u.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},47886,e=>{"use strict";var t=e.i(91398),s=e.i(91788),n=e.i(10836),i=e.i(15498),c=e.i(60150),o=e.i(20484),a=e.i(50901),l=e.i(64691),r=e.i(3935),d=e.i(45543),p=e.i(75366),h=e.i(51551);let u=i.ComponentBase.extend({defaultProps:{__TYPE:"ToggleButton",id:null,onIcon:null,offIcon:null,onLabel:"Yes",offLabel:"No",iconPos:"left",invalid:!1,style:null,className:null,checked:!1,tabIndex:0,tooltip:null,tooltipOptions:null,onChange:null,onFocus:null,onBlur:null,children:void 0},css:{classes:{root:({props:e})=>(0,r.classNames)("p-togglebutton p-component",{"p-disabled":e.disabled,"p-highlight":e.checked,"p-invalid":e.invalid}),input:"p-togglebutton-input",box:({hasIcon:e,hasLabel:t})=>(0,r.classNames)("p-button p-component",{"p-button-icon-only":e&&!t}),icon:({props:e,label:t})=>(0,r.classNames)("p-button-icon",{"p-button-icon-left":"left"===e.iconPos&&t,"p-button-icon-right":"right"===e.iconPos&&t}),label:"p-button-label"}}}),m=s.memo(s.forwardRef((e,m)=>{let g=(0,c.useMergeProps)(),x=s.useContext(n.PrimeReactContext),j=u.getProps(e,x),b=s.useRef(null),{ptm:f,cx:v,isUnstyled:k}=u.setMetaData({props:j});(0,i.useHandleStyle)(u.css.styles,k,{name:"togglebutton"});let y=j.onLabel&&j.onLabel.length>0&&j.offLabel&&j.offLabel.length>0,N=j.onIcon&&j.offIcon,T=y?j.checked?j.onLabel:j.offLabel:" ",C=j.checked?j.onIcon:j.offIcon,w=e=>{j.disabled||!j.onChange||j.readonly||j.onChange({originalEvent:e,value:!j.checked,stopPropagation:()=>{e.stopPropagation()},preventDefault:()=>{e.preventDefault()},target:{name:j.name,id:j.id,value:!j.checked}})};s.useImperativeHandle(m,()=>({props:j,focus:()=>d.DomHandler.focusFirstElement(b.current),getElement:()=>b.current})),(0,o.useMountEffect)(()=>{j.autoFocus&&d.DomHandler.focusFirstElement(b.current)});let D=h.ObjectUtils.isNotEmpty(j.tooltip),S=j.disabled?-1:j.tabIndex,E=(()=>{if(N){let e=g({className:v("icon",{label:T})},f("icon"));return p.IconUtils.getJSXIcon(C,{...e},{props:j})}return null})(),B=g({className:v("label")},f("label")),I=g({ref:b,id:j.id,className:(0,r.classNames)(j.className,v("root",{hasIcon:N,hasLabel:y})),"data-p-highlight":j.checked,"data-p-disabled":j.disabled},u.getOtherProps(j),f("root")),O=g({id:j.inputId,className:v("input"),style:j.style,onChange:w,onFocus:e=>{j?.onFocus?.(e)},onBlur:e=>{j?.onBlur?.(e)},onKeyDown:e=>{32===e.keyCode&&(w(e),e.preventDefault())},tabIndex:S,type:"checkbox","aria-invalid":j.invalid,disabled:j.disabled,readOnly:j.readonly,value:j.checked,checked:j.checked,"aria-label":j["aria-label"],"aria-labelledby":j["aria-labelledby"]},f("input")),P=g({className:(0,r.classNames)(j.className,v("box",{hasIcon:N,hasLabel:y}))},f("box"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{...I,children:[(0,t.jsx)("input",{...O}),(0,t.jsxs)("div",{...P,children:[E,(0,t.jsx)("span",{...B,children:T}),(0,t.jsx)(a.Ripple,{})]})]}),D&&(0,t.jsx)(l.Tooltip,{target:b,content:j.tooltip,pt:f("tooltip"),...j.tooltipOptions})]})}));m.displayName="ToggleButton",e.s(["ToggleButton",0,m],47886)},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},3828,(e,t,s)=>{t.exports=e.r(26990)},20319,e=>{"use strict";var t=e.i(91398),s=e.i(88850),n=e.i(82948),i=e.i(5180),c=e.i(28137);function o(){let e={basic:`
<span id="rememberme">Remember Me</span>
<ToggleButton aria-labelledby="rememberme" />

<ToggleButton aria-label="Remember Me" />
    `};return(0,t.jsxs)(c.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["ToggleButton component uses an element with ",(0,t.jsx)("i",{children:"button"})," role and updates ",(0,t.jsx)("i",{children:"aria-pressed"})," state for screen readers. Value to describe the component can be defined with ",(0,t.jsx)("i",{children:"aria-labelledby"})," or ",(0,t.jsx)("i",{children:"aria-label"})," props, it is highly suggested to use either of these props as the component changes the label displayed which will result in screen readers to read different labels when the component receives focus. To prevent this, always provide an aria label that does not change related to state."]}),(0,t.jsx)(i.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the button."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles the checked state."})]})]})]})})]})}var a=e.i(47886),l=e.i(91788);function r(e){let[s,n]=(0,l.useState)(!1),o={basic:`
<ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function BasicDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { ToggleButton, ToggleButtonChangeEvent } from 'primereact/togglebutton';

export default function BasicDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton checked={checked} onChange={(e: ToggleButtonChangeEvent) => setChecked(e.value)} className="w-8rem" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["ToggleButton is used a controlled input component with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.ToggleButton,{checked:s,onChange:e=>n(e.value),className:"w-8rem"})}),(0,t.jsx)(i.DocSectionCode,{code:o})]})}function d(e){let[s,n]=(0,l.useState)(!1),o={basic:`
<ToggleButton onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" 
    checked={checked} onChange={(e) => setChecked(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function CustomizedDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" 
                checked={checked} onChange={(e) => setChecked(e.value)} className="w-9rem" />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { ToggleButton, ToggleButtonChangeEvent } from 'primereact/togglebutton';

export default function CustomizedDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" 
                checked={checked} onChange={(e:  ToggleButtonChangeEvent) => setChecked(e.value)} className="w-9rem" />
        </div>
    );
    `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Icons and Labels can be customized using ",(0,t.jsx)("i",{children:"onLabel"}),", ",(0,t.jsx)("i",{children:"offLabel"}),", ",(0,t.jsx)("i",{children:"onIcon"})," and ",(0,t.jsx)("i",{children:"offIcon"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.ToggleButton,{onLabel:"I confirm",offLabel:"I reject",onIcon:"pi pi-check",offIcon:"pi pi-times",checked:s,onChange:e=>n(e.value),className:"w-9rem"})}),(0,t.jsx)(i.DocSectionCode,{code:o})]})}function p(e){let[s,n]=(0,l.useState)(!1),o={basic:`
<ToggleButton disabled checked={checked} onChange={(e) => setChecked(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function DisabledDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton disabled checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { ToggleButton, ToggleButtonChangeEvent } from 'primereact/togglebutton';

export default function DisabledDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton disabled checked={checked} onChange={(e: ToggleButtonChangeEvent) => setChecked(e.value)} className="w-8rem" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.ToggleButton,{disabled:!0,checked:s,onChange:e=>n(e.value),className:"w-8rem"})}),(0,t.jsx)(i.DocSectionCode,{code:o})]})}function h(e){let s={basic:`
import { ToggleButton } from 'primereact/togglebutton';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function u(e){let[s,n]=(0,l.useState)(!1),o={basic:`
<ToggleButton invalid onIcon="pi pi-check" offIcon="pi pi-times" checked={checked} onChange={(e) => setChecked(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function InvalidDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton invalid onIcon="pi pi-check" offIcon="pi pi-times" checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { ToggleButton, ToggleButtonChangeEvent } from 'primereact/togglebutton';

export default function InvalidDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <ToggleButton invalid onIcon="pi pi-check" offIcon="pi pi-times" checked={checked} onChange={(e: ToggleButtonChangeEvent) => setChecked(e.value)} className="w-8rem" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.ToggleButton,{invalid:!0,onIcon:"pi pi-check",offIcon:"pi pi-times",checked:s,onChange:e=>n(e.value),className:"w-8rem"})}),(0,t.jsx)(i.DocSectionCode,{code:o})]})}let m=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/togglebutton.jpg",alt:"togglebutton"})})]});function g(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-togglebutton"}),(0,t.jsx)("td",{children:"Container element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-button-icon-left"}),(0,t.jsx)("td",{children:"Icon element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-button-text"}),(0,t.jsx)("td",{children:"Label element."})]})]})]})})]})}var x=e.i(41158);function j(e){let s={basic:`
const Tailwind = {
    togglebutton: {
        root: ({ props }) => ({
            className: classNames(
                'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
                'px-4 py-3 rounded-md text-base w-36',
                'border transition duration-200 ease-in-out',
                {
                    'bg-white dark:bg-gray-900 border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:border-gray-300 dark:hover:bg-gray-800/70 hover:text-gray-700 dark:hover:text-white/80':
                        !props.checked,
                    'bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600': props.checked
                },
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            )
        }),
        label: 'font-bold text-center w-full',
        icon: ({ props }) => ({
            className: classNames(' mr-2', {
                'text-gray-600 dark:text-white/70': !props.checked,
                'text-white': props.checked
            })
        })
    }
}
    `},n={javascript:`
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function UnstyledDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-center">
            <ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(c.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(x.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(i.DocSectionCode,{code:n,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:m},{id:"pt.togglebutton.options",label:"ToggleButton PT Options",component:s.default}];return(0,t.jsx)(n.DocComponent,{title:"React ToggleButton Component",header:"ToggleButton",description:"ToggleButton is used to select a boolean value using a button.",componentDocs:[{id:"import",label:"Import",component:h},{id:"basic",label:"Basic",component:r},{id:"customized",label:"Customized",component:d},{id:"invalid",label:"Invalid",component:u},{id:"disabled",label:"Disabled",component:p},{id:"accessibility",label:"Accessibility",component:o}],apiDocs:["ToggleButton"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:g},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:j}]}]})}],20319)},27197,(e,t,s)=>{let n="/togglebutton";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(20319)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);