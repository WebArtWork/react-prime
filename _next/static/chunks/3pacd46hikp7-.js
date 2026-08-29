(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),n=e.i(91788);e.s(["CodeHighlight",0,function(e){let c=(0,n.useRef)(),i=`language-${e.lang||"jsx"}`;return(0,n.useEffect)(()=>{window.Prism.highlightElement(c.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:c,className:i,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),n=e.i(3935),c=e.i(58678),i=e.i(3828),s=e.i(91788),a=e.i(51551),l=e.i(72124),o=e.i(41158),r=e.i(87914),d=e.i(28137);let h=e=>{let c=(0,s.useContext)(r.default),{id:l,data:h,name:p,description:m,allowLink:u=!0}=e,x=l.startsWith("pt."),b=(0,i.useRouter)();if(a.ObjectUtils.isNotEmpty(h)){let i=Object.keys(h[0]),r=(e,t)=>{let n=document.getElementById(e);n&&n.parentElement.scrollIntoView({block:"start",behavior:t})},g=(e,c,i)=>{if(u&&e)return e.split("|").map((e,a)=>{if(e.includes(p)){let n=e.indexOf(p),c=e.substring(n).replace(/(\[|\]|<|>).*$/gm,"").trim(),i=p===c?`api.${p}`:`api.${p}.${c===`${p}Props`?"props":c}`;return(0,t.jsxs)(s.default.Fragment,{children:[0!==a?"|":"",(0,t.jsx)(o.default,{href:b.basePath+b.pathname+`#${i}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>r(i,"smooth"),children:e})})]},a)}return(0,t.jsxs)(s.default.Fragment,{children:[0!==a?"|":"",c?(0,t.jsxs)("span",{id:l+"."+e,className:(0,n.classNames)("doc-option-name",{"line-through cursor-pointer":!!i}),title:i,children:[e,(0,t.jsx)(o.default,{href:b.basePath+b.pathname+`#${l+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>r(l+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},a)});let a=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return c?(0,t.jsxs)("span",{id:l+"."+a,className:(0,n.classNames)("doc-option-name",{"line-through cursor-pointer":!!i}),title:i,children:[a,(0,t.jsx)(o.default,{href:b.basePath+b.pathname+`#${l+"."+a}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>r(l+"."+a),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):a},k=(0,t.jsx)(s.default.Fragment,{children:x?(0,t.jsx)("tr",{children:i.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:i.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),f=(0,t.jsx)(s.default.Fragment,{children:h.map((e,i)=>{if(x){let{value:n,label:c,description:s}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:n}),(0,t.jsx)("td",{children:c}),(0,t.jsx)("td",{children:s})]},i)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([i,s],l)=>"readonly"!==i&&"optional"!==i&&"deprecated"!==i&&(0,t.jsx)("td",{children:"parameters"===i?s.map((e,n)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:g(e.type)}),(0,t.jsx)("br",{})]},n)):"default"===i?(0,t.jsx)("div",{className:(0,n.classNames)("doc-option-default",{"doc-option-dark":c.darkMode,"doc-option-light":!c.darkMode}),children:a.ObjectUtils.isEmpty(s)?"null":g(s,"name"===i,e.deprecated)}):"type"===i?(0,t.jsx)("span",{className:"doc-option-type",children:g(s,"name"===i,e.deprecated)}):"returnType"===i?(0,t.jsx)("div",{className:(0,n.classNames)("doc-option-returnType",{"doc-option-dark":c.darkMode,"doc-option-light":!c.darkMode}),children:g(s,"name"===i,e.deprecated)}):"description"===i||"values"===i?(0,t.jsx)("span",{className:"doc-option-description",children:s}):g(s,"name"===i,e.deprecated)},l))},i)})});return(0,t.jsxs)(s.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:m})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:k}),(0,t.jsx)("tbody",{children:f})]})})]},l)}return null};e.s(["default",0,h],88850);var p=e.i(71864),m=e.i(38076);function u(e){let{doc:n,header:c}=e,i=e.apiExclude,o=n.reduce((e,n)=>{let c,s=n.split("."),o=(c=s[0])&&c[0].toUpperCase()+c.slice(1)||"",r=l.default[o.toLowerCase()],d=(e,t)=>i&&i[e]&&i[e].includes(t),p=e=>i&&i[e]&&"excludeAll"===i[e];if(r){let c=(e,n)=>{if(a.ObjectUtils.isNotEmpty(r.events)&&a.ObjectUtils.isNotEmpty(r.events.values)&&!p("events")){let c={id:`api.${n}.events`,label:"Events",description:r.events.description,children:[]};Object.entries(r.events.values).forEach(([e,i])=>{let[s,a]=[`api.${n}.${e}`,e];d("event",e)||c.children.push({id:s,label:a,component:e=>(0,t.jsx)(h,{name:n,data:i.props,description:(0,t.jsxs)(t.Fragment,{children:[i.description," See ",(0,t.jsx)("i",{children:i.relatedProp}),"."]}),...e})})}),e.push(c)}if(a.ObjectUtils.isNotEmpty(r.interfaces)&&a.ObjectUtils.isNotEmpty(r.interfaces.values)&&!p("interfaces")){let c={id:`api.${n}.interfaces`,label:"Interfaces",description:r.interfaces.description,children:[]};Object.entries(r.interfaces.values).forEach(([e,i])=>{let[s,a]=[`api.${n}.${e}`,e];d("interfaces",e)||c.children.push({id:s,label:a,component:e=>(0,t.jsx)(h,{name:n,data:i.props,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),...e})})}),e.push(c)}if(a.ObjectUtils.isNotEmpty(r.types)&&a.ObjectUtils.isNotEmpty(r.types.values)&&!p("types")){let c={id:`api.${n}.types`,label:"Types",description:r.types.description,children:[]};Object.entries(r.types.values).forEach(([e,i])=>{let[s,a]=[`api.${n}.${e}`,e];d("types",e)||c.children.push({id:s,label:a,component:e=>(0,t.jsx)(h,{name:n,data:[i],allowLink:!1,...e})})}),e.push(c)}};if(3===s.length){let n=s[1],c=s[2];if("functions"===n){let i=r[n].values[c],s={id:`api.${o}`,label:o,children:[]},[l,d]=[`api.${o}.function`,"Function"],p=Object.entries(i).reduce((e,[t,n])=>("description"!==t&&(e[t]=n),e),{});s.children.push({id:l,label:d,component:e=>(0,t.jsx)(h,{name:o,data:[p],description:i.description,...e})});let m=i.parameters&&i.parameters.map(e=>e.type);if(a.ObjectUtils.isNotEmpty(r.interfaces)&&a.ObjectUtils.isNotEmpty(r.interfaces.values)){let e={id:`api.${o}.interfaces`,label:"Interfaces",description:r.interfaces.description,children:[]};Object.entries(r.interfaces.values).forEach(([n,c])=>{if(m.includes(n)){let[i,s]=[`api.${o}.${n}`,n],l={id:i,label:s,description:(0,t.jsxs)(t.Fragment,{children:[c.description," ",c.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:c.extendedTypes}),"."]})]}),children:[]};a.ObjectUtils.isNotEmpty(c.props)&&l.children.push({id:`${i}.props`,label:"Props",component:e=>(0,t.jsx)(h,{data:c.props,...e})}),a.ObjectUtils.isNotEmpty(c.callbacks)&&l.children.push({id:`${i}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(h,{data:c.callbacks,...e})}),e.children.push(l)}}),a.ObjectUtils.isNotEmpty(e.children)&&s.children.push(e)}e.push(s)}}else r.components&&Object.entries(r.components).forEach(([i,s])=>{let l={id:`api.${i}`,label:i,description:s.description,children:[]};if(a.ObjectUtils.isNotEmpty(s.props)&&a.ObjectUtils.isNotEmpty(s.props.values)&&!p("props")){let[e,n]=[`api.${i}.props`,"Props"];if(d("props",i))return;l.children.push({id:e,label:n,component:e=>(0,t.jsx)(h,{name:i,data:s.props.values,description:s.props.description,...e})})}if(a.ObjectUtils.isNotEmpty(s.callbacks)&&a.ObjectUtils.isNotEmpty(s.callbacks.values)&&!p("callbacks")){let[e,n]=[`api.${i}.callbacks`,"Callbacks"];if(d("callbacks",i))return;l.children.push({id:e,label:n,component:e=>(0,t.jsx)(h,{name:i,data:s.callbacks.values,description:s.callbacks.description,...e})})}if(a.ObjectUtils.isNotEmpty(s.methods)&&a.ObjectUtils.isNotEmpty(s.methods.values)&&!p("methods")){let[e,n]=[`api.${i}.methods`,"Methods"];if(d("methods",i))return;l.children.push({id:e,label:n,component:e=>(0,t.jsx)(h,{name:i,data:s.methods.values,description:s.methods.description,...e})})}i.toLocaleLowerCase()===n.toLowerCase()&&c(l.children,i),e.push(l)}),r.model&&Object.entries(r.model).forEach(([i,s])=>{let l={id:`api.${i}`,label:i,description:s.description,children:[]};if(a.ObjectUtils.isNotEmpty(s.props)&&a.ObjectUtils.isNotEmpty(s.props.values)&&!p("props")){let[e,n]=[`api.${i}.props`,"Props"];if(d("props",i))return;l.children.push({id:e,label:n,component:e=>(0,t.jsx)(h,{name:i,data:s.props.values,description:s.props.description,...e})})}i.toLocaleLowerCase()===n.toLowerCase()&&c(l.children,i),e.push(l)}),r.components||r.model||c(e,o)}return e},[]);return(0,s.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[c," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",c," module."]})]}),(0,t.jsx)(m.DocSections,{docs:o})]}),(0,t.jsx)(p.DocSectionNav,{docs:o})]})}e.s(["DocComponent",0,function(e){let a,[l,o]=(0,s.useState)(0),r=(0,i.useRouter)();a=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{o(e),r.replace(r.pathname)};return(0,s.useEffect)(()=>{r.asPath.includes("#api")&&o(1),r.asPath.includes("#pt")&&o(3)},[r.asPath]),(0,t.jsxs)("div",{className:(0,n.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(c.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":0===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:a})}),e.apiDocs?(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":1===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":2===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":3===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===l?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.componentDocs})]}):null,1===l?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(u,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===l?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===l?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},6846,e=>{"use strict";var t=e.i(91398),n=e.i(91788),c=e.i(10836),i=e.i(15498),s=e.i(60150),a=e.i(20484),l=e.i(71834),o=e.i(67143),r=e.i(64691),d=e.i(45543),h=e.i(75366),p=e.i(51551),m=e.i(3935);let u=i.ComponentBase.extend({defaultProps:{__TYPE:"Checkbox",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,icon:null,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,name:null,onChange:null,onContextMenu:null,onMouseDown:null,readOnly:!1,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,value:null,children:void 0},css:{classes:{box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon",root:({props:e,checked:t,context:n})=>(0,m.classNames)("p-checkbox p-component",{"p-highlight":t,"p-disabled":e.disabled,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:n&&"filled"===n.inputStyle})}}}),x=n.memo(n.forwardRef((e,x)=>{let b,g,k,f,j,C,v=(0,s.useMergeProps)(),y=n.useContext(c.PrimeReactContext),N=u.getProps(e,y),[S,D]=n.useState(!1),{ptm:I,cx:w,isUnstyled:O}=u.setMetaData({props:N,state:{focused:S},context:{checked:N.checked===N.trueValue,disabled:N.disabled}});(0,i.useHandleStyle)(u.css.styles,O,{name:"checkbox"});let E=n.useRef(null),P=n.useRef(N.inputRef);n.useImperativeHandle(x,()=>({props:N,focus:()=>d.DomHandler.focus(P.current),getElement:()=>E.current,getInput:()=>P.current})),n.useEffect(()=>{p.ObjectUtils.combinedRefs(P,N.inputRef)},[P,N.inputRef]),(0,l.useUpdateEffect)(()=>{P.current.checked=N.checked===N.trueValue},[N.checked,N.trueValue]),(0,a.useMountEffect)(()=>{N.autoFocus&&d.DomHandler.focus(P.current,N.autoFocus)});let F=N.checked===N.trueValue,T=p.ObjectUtils.isNotEmpty(N.tooltip),R=u.getOtherProps(N),_=v({id:N.id,className:(0,m.classNames)(N.className,w("root",{checked:F,context:y})),style:N.style,"data-p-highlight":F,"data-p-disabled":N.disabled,onContextMenu:N.onContextMenu,onMouseDown:N.onMouseDown},R,I("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{ref:E,..._,children:[(b=p.ObjectUtils.reduceKeys(R,d.DomHandler.ARIA_PROPS),g=v({id:N.inputId,type:"checkbox",className:w("input"),name:N.name,tabIndex:N.tabIndex,onFocus:e=>{D(!0),N?.onFocus?.(e)},onBlur:e=>{D(!1),N?.onBlur?.(e)},onChange:e=>(e=>{if(!N.disabled&&!N.readOnly&&N.onChange){let t=N.checked===N.trueValue?N.falseValue:N.trueValue,n={originalEvent:e,value:N.value,checked:t,stopPropagation:()=>{e?.stopPropagation()},preventDefault:()=>{e?.preventDefault()},target:{type:"checkbox",name:N.name,id:N.id,value:N.value,checked:t}};N?.onChange?.(n),e.defaultPrevented||d.DomHandler.focus(P.current)}})(e),disabled:N.disabled,readOnly:N.readOnly,required:N.required,"aria-invalid":N.invalid,checked:F,...b},I("input")),(0,t.jsx)("input",{ref:P,...g})),(k=v({className:w("icon")},I("icon")),f=v({className:w("box",{checked:F}),"data-p-highlight":F,"data-p-disabled":N.disabled},I("box")),j=F?N.icon||(0,t.jsx)(o.CheckIcon,{...k}):null,C=h.IconUtils.getJSXIcon(j,{...k},{props:N,checked:F}),(0,t.jsx)("div",{...f,children:C}))]}),T&&(0,t.jsx)(r.Tooltip,{target:E,content:N.tooltip,pt:I("tooltip"),...N.tooltipOptions})]})}));x.displayName="Checkbox",e.s(["Checkbox",0,x],6846)},67143,e=>{"use strict";var t=e.i(91398),n=e.i(91788),c=e.i(85850);let i=n.memo(n.forwardRef((e,n)=>{let i=c.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:(0,t.jsx)("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"})})}));i.displayName="CheckIcon",e.s(["CheckIcon",0,i])},3828,(e,t,n)=>{t.exports=e.r(26990)},97309,e=>{"use strict";var t=e.i(91398),n=e.i(5180),c=e.i(28137);function i(){let e={basic:`
<label htmlFor="chkbox1">Remember Me</label>
<Checkbox inputId="chkbox1" />

<span id="chkbox2">Remember Me</span>
<Checkbox aria-labelledby="chkbox2" />

<Checkbox aria-label="Remember Me" />
        `};return(0,t.jsxs)(c.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Checkbox component uses a hidden native checkbox element internally that is only visible to screen readers. Value to describe the component can either be provided via ",(0,t.jsx)("i",{children:"label"})," tag combined with ",(0,t.jsx)("i",{children:"inputId"})," prop or using"," ",(0,t.jsx)("i",{children:"aria-labelledby"}),", ",(0,t.jsx)("i",{children:"aria-label"})," props."]}),(0,t.jsx)(n.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the checkbox."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles the checked state."})]})]})]})})]})}var s=e.i(6846),a=e.i(91788);function l(e){let[i,l]=(0,a.useState)(!1),o={basic:`
<Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        `,javascript:`
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function BasicDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function BasicDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Checkbox is used as a controlled input with ",(0,t.jsx)("i",{children:"checked"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(s.Checkbox,{onChange:e=>l(e.checked),checked:i})}),(0,t.jsx)(n.DocSectionCode,{code:o})]})}function o(e){let i={basic:`
<Checkbox checked disabled></Checkbox>
        `,javascript:`
import React from 'react'; 
import { Checkbox } from "primereact/checkbox";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Checkbox checked disabled></Checkbox>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Checkbox } from "primereact/checkbox";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Checkbox checked disabled></Checkbox>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(s.Checkbox,{checked:!0,disabled:!0})}),(0,t.jsx)(n.DocSectionCode,{code:i})]})}function r(e){let i=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}],[l,o]=(0,a.useState)([i[1]]),r=e=>{let t=[...l];e.checked?t.push(e.value):t=t.filter(t=>t.key!==e.value.key),o(t)},d={basic:`
{categories.map((category) => {
    return (
        <div key={category.key} className="flex align-items-center">
            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
            <label htmlFor={category.key} className="ml-2">{category.name}</label>
        </div>
    );
})}
        `,javascript:`
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function DynamicDemo() {
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                            <label htmlFor={category.key} className="ml-2">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

interface Category {
    name: string; 
    key: string;
}

export default function DynamicDemo() {
    const categories: Category[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([categories[1]]);

    const onCategoryChange = (e: CheckboxChangeEvent) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3">
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                            <label htmlFor={category.key} className="ml-2">
                                {category.name}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Checkboxes can be generated using a list of values."})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)("div",{className:"flex flex-column gap-3",children:i.map(e=>(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)(s.Checkbox,{inputId:e.key,name:"category",value:e,onChange:r,checked:l.some(t=>t.key===e.key)}),(0,t.jsx)("label",{htmlFor:e.key,className:"ml-2",children:e.name})]},e.key))})}),(0,t.jsx)(n.DocSectionCode,{code:d})]})}function d(e){let[i,l]=(0,a.useState)(!1),o={basic:`
<Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        `,javascript:`
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function FilledDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox variant="filled" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function FilledDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox variant="filled" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specify the ",(0,t.jsx)("i",{children:"variant"})," property as ",(0,t.jsx)("i",{children:"filled"})," to display the component with a higher visual emphasis than the default ",(0,t.jsx)("i",{children:"outlined"})," style."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(s.Checkbox,{variant:"filled",onChange:e=>l(e.checked),checked:i})}),(0,t.jsx)(n.DocSectionCode,{code:o})]})}function h(e){let[i,l]=(0,a.useState)([]),o=e=>{let t=[...i];e.checked?t.push(e.value):t.splice(t.indexOf(e.value),1),l(t)},r={basic:`
<div className="flex flex-wrap justify-content-center gap-3">
    <div className="flex align-items-center">
        <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={onIngredientsChange} checked={ingredients.includes('Cheese')} />
        <label htmlFor="ingredient1" className="ml-2">Cheese</label>
    </div>
    <div className="flex align-items-center">
        <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" onChange={onIngredientsChange} checked={ingredients.includes('Mushroom')} />
        <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
    </div>
    <div className="flex align-items-center">
        <Checkbox inputId="ingredient3" name="pizza" value="Pepper" onChange={onIngredientsChange} checked={ingredients.includes('Pepper')} />
        <label htmlFor="ingredient3" className="ml-2">Pepper</label>
    </div>
    <div className="flex align-items-center">
        <Checkbox inputId="ingredient4" name="pizza" value="Onion" onChange={onIngredientsChange} checked={ingredients.includes('Onion')} />
        <label htmlFor="ingredient4" className="ml-2">Onion</label>
    </div>
</div>
        `,javascript:`
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function GroupDemo() {
    const [ingredients, setIngredients] = useState([]);

    const onIngredientsChange = (e) => {
        let _ingredients = [...ingredients];

        if (e.checked)
            _ingredients.push(e.value);
        else
            _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setIngredients(_ingredients);
    }

    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={onIngredientsChange} checked={ingredients.includes('Cheese')} />
                <label htmlFor="ingredient1" className="ml-2">Cheese</label>
            </div>
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" onChange={onIngredientsChange} checked={ingredients.includes('Mushroom')} />
                <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
            </div>
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient3" name="pizza" value="Pepper" onChange={onIngredientsChange} checked={ingredients.includes('Pepper')} />
                <label htmlFor="ingredient3" className="ml-2">Pepper</label>
            </div>
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient4" name="pizza" value="Onion" onChange={onIngredientsChange} checked={ingredients.includes('Onion')} />
                <label htmlFor="ingredient4" className="ml-2">Onion</label>
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function GroupDemo() {
    const [ingredients, setIngredients] = useState<string[]>([]);

    const onIngredientsChange = (e: CheckboxChangeEvent) => {
        let _ingredients = [...ingredients];

        if (e.checked)
            _ingredients.push(e.value);
        else
            _ingredients.splice(_ingredients.indexOf(e.value), 1);

        setIngredients(_ingredients);
    }

    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={onIngredientsChange} checked={ingredients.includes('Cheese')} />
                <label htmlFor="ingredient1" className="ml-2">Cheese</label>
            </div>
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" onChange={onIngredientsChange} checked={ingredients.includes('Mushroom')} />
                <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
            </div>
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient3" name="pizza" value="Pepper" onChange={onIngredientsChange} checked={ingredients.includes('Pepper')} />
                <label htmlFor="ingredient3" className="ml-2">Pepper</label>
            </div>
            <div className="flex align-items-center">
                <Checkbox inputId="ingredient4" name="pizza" value="Onion" onChange={onIngredientsChange} checked={ingredients.includes('Onion')} />
                <label htmlFor="ingredient4" className="ml-2">Onion</label>
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Multiple checkboxes can be grouped together."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)(s.Checkbox,{inputId:"ingredient1",name:"pizza",value:"Cheese",onChange:o,checked:i.includes("Cheese")}),(0,t.jsx)("label",{htmlFor:"ingredient1",className:"ml-2",children:"Cheese"})]}),(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)(s.Checkbox,{inputId:"ingredient2",name:"pizza",value:"Mushroom",onChange:o,checked:i.includes("Mushroom")}),(0,t.jsx)("label",{htmlFor:"ingredient2",className:"ml-2",children:"Mushroom"})]}),(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)(s.Checkbox,{inputId:"ingredient3",name:"pizza",value:"Pepper",onChange:o,checked:i.includes("Pepper")}),(0,t.jsx)("label",{htmlFor:"ingredient3",className:"ml-2",children:"Pepper"})]}),(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)(s.Checkbox,{inputId:"ingredient4",name:"pizza",value:"Onion",onChange:o,checked:i.includes("Onion")}),(0,t.jsx)("label",{htmlFor:"ingredient4",className:"ml-2",children:"Onion"})]})]}),(0,t.jsx)(n.DocSectionCode,{code:r})]})}function p(e){let i={basic:`
import { Checkbox } from 'primereact/checkbox';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e}),(0,t.jsx)(n.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function m(e){let[i,l]=(0,a.useState)(!1),o={basic:`
<Checkbox invalid={!checked} onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>
        `,javascript:`
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function InvalidDemo() { 
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox invalid={!checked} onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function InvalidDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox invalid={!checked} onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(s.Checkbox,{invalid:!i,onChange:e=>l(e.checked),checked:i})}),(0,t.jsx)(n.DocSectionCode,{code:o})]})}let u=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/checkbox.jpg",alt:"checkbox"})})]});function x(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-checkbox"}),(0,t.jsx)("td",{children:"Container element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-checkbox-box"}),(0,t.jsx)("td",{children:"Container of icon."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-checkbox-icon"}),(0,t.jsx)("td",{children:"Icon element."})]})]})]})})]})}var b=e.i(41158);function g(e){let i={basic:`
const Tailwind = {
    checkbox: {
        root: {
            className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6')
        },
        input: {
            className: classNames('absolute appearance-none top-0 left-0 size-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer')
        },
        box: ({ props, context }) => ({
            className: classNames(
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                {
                    'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900': !context.checked,
                    'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400': context.checked
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            )
        }),
        icon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900'
    }
}
        `},s={javascript:`
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function UnstyledDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-center">
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(c.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(b.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(n.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(n.DocSectionCode,{code:s,embedded:!0})]})})}var k=e.i(88850),f=e.i(82948);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:u},{id:"pt.checkbox.options",label:"Checkbox PT Options",component:k.default}];return(0,t.jsx)(f.DocComponent,{title:"React Checkbox Component",header:"Checkbox",description:"Checkbox is an extension to standard checkbox element with theming.",componentDocs:[{id:"import",label:"Import",component:p},{id:"basic",label:"Basic",component:l},{id:"group",label:"Group",component:h},{id:"dynamic",label:"Dynamic",component:r},{id:"invalid",label:"Invalid",component:m},{id:"filled",label:"Filled",component:d},{id:"disabled",label:"Disabled",component:o},{id:"accessibility",label:"Accessibility",component:i}],apiDocs:["Checkbox"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:x},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:g}]}]})}],97309)},79972,(e,t,n)=>{let c="/checkbox";(window.__NEXT_P=window.__NEXT_P||[]).push([c,()=>e.r(97309)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([c])})}]);