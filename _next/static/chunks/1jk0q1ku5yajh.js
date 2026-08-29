(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),n=e.i(91788);e.s(["CodeHighlight",0,function(e){let i=(0,n.useRef)(),s=`language-${e.lang||"jsx"}`;return(0,n.useEffect)(()=>{window.Prism.highlightElement(i.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:i,className:s,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),n=e.i(3935),i=e.i(58678),s=e.i(3828),l=e.i(91788),o=e.i(51551),a=e.i(72124),c=e.i(41158),r=e.i(87914),d=e.i(28137);let p=e=>{let i=(0,l.useContext)(r.default),{id:a,data:p,name:u,description:m,allowLink:h=!0}=e,x=a.startsWith("pt."),f=(0,s.useRouter)();if(o.ObjectUtils.isNotEmpty(p)){let s=Object.keys(p[0]),r=(e,t)=>{let n=document.getElementById(e);n&&n.parentElement.scrollIntoView({block:"start",behavior:t})},j=(e,i,s)=>{if(h&&e)return e.split("|").map((e,o)=>{if(e.includes(u)){let n=e.indexOf(u),i=e.substring(n).replace(/(\[|\]|<|>).*$/gm,"").trim(),s=u===i?`api.${u}`:`api.${u}.${i===`${u}Props`?"props":i}`;return(0,t.jsxs)(l.default.Fragment,{children:[0!==o?"|":"",(0,t.jsx)(c.default,{href:f.basePath+f.pathname+`#${s}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>r(s,"smooth"),children:e})})]},o)}return(0,t.jsxs)(l.default.Fragment,{children:[0!==o?"|":"",i?(0,t.jsxs)("span",{id:a+"."+e,className:(0,n.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[e,(0,t.jsx)(c.default,{href:f.basePath+f.pathname+`#${a+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>r(a+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},o)});let o=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return i?(0,t.jsxs)("span",{id:a+"."+o,className:(0,n.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[o,(0,t.jsx)(c.default,{href:f.basePath+f.pathname+`#${a+"."+o}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>r(a+"."+o),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):o},b=(0,t.jsx)(l.default.Fragment,{children:x?(0,t.jsx)("tr",{children:s.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:s.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),v=(0,t.jsx)(l.default.Fragment,{children:p.map((e,s)=>{if(x){let{value:n,label:i,description:l}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:n}),(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:l})]},s)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([s,l],a)=>"readonly"!==s&&"optional"!==s&&"deprecated"!==s&&(0,t.jsx)("td",{children:"parameters"===s?l.map((e,n)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:j(e.type)}),(0,t.jsx)("br",{})]},n)):"default"===s?(0,t.jsx)("div",{className:(0,n.classNames)("doc-option-default",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:o.ObjectUtils.isEmpty(l)?"null":j(l,"name"===s,e.deprecated)}):"type"===s?(0,t.jsx)("span",{className:"doc-option-type",children:j(l,"name"===s,e.deprecated)}):"returnType"===s?(0,t.jsx)("div",{className:(0,n.classNames)("doc-option-returnType",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:j(l,"name"===s,e.deprecated)}):"description"===s||"values"===s?(0,t.jsx)("span",{className:"doc-option-description",children:l}):j(l,"name"===s,e.deprecated)},a))},s)})});return(0,t.jsxs)(l.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:m})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:b}),(0,t.jsx)("tbody",{children:v})]})})]},a)}return null};e.s(["default",0,p],88850);var u=e.i(71864),m=e.i(38076);function h(e){let{doc:n,header:i}=e,s=e.apiExclude,c=n.reduce((e,n)=>{let i,l=n.split("."),c=(i=l[0])&&i[0].toUpperCase()+i.slice(1)||"",r=a.default[c.toLowerCase()],d=(e,t)=>s&&s[e]&&s[e].includes(t),u=e=>s&&s[e]&&"excludeAll"===s[e];if(r){let i=(e,n)=>{if(o.ObjectUtils.isNotEmpty(r.events)&&o.ObjectUtils.isNotEmpty(r.events.values)&&!u("events")){let i={id:`api.${n}.events`,label:"Events",description:r.events.description,children:[]};Object.entries(r.events.values).forEach(([e,s])=>{let[l,o]=[`api.${n}.${e}`,e];d("event",e)||i.children.push({id:l,label:o,component:e=>(0,t.jsx)(p,{name:n,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," See ",(0,t.jsx)("i",{children:s.relatedProp}),"."]}),...e})})}),e.push(i)}if(o.ObjectUtils.isNotEmpty(r.interfaces)&&o.ObjectUtils.isNotEmpty(r.interfaces.values)&&!u("interfaces")){let i={id:`api.${n}.interfaces`,label:"Interfaces",description:r.interfaces.description,children:[]};Object.entries(r.interfaces.values).forEach(([e,s])=>{let[l,o]=[`api.${n}.${e}`,e];d("interfaces",e)||i.children.push({id:l,label:o,component:e=>(0,t.jsx)(p,{name:n,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," ",s.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:s.extendedTypes}),"."]})]}),...e})})}),e.push(i)}if(o.ObjectUtils.isNotEmpty(r.types)&&o.ObjectUtils.isNotEmpty(r.types.values)&&!u("types")){let i={id:`api.${n}.types`,label:"Types",description:r.types.description,children:[]};Object.entries(r.types.values).forEach(([e,s])=>{let[l,o]=[`api.${n}.${e}`,e];d("types",e)||i.children.push({id:l,label:o,component:e=>(0,t.jsx)(p,{name:n,data:[s],allowLink:!1,...e})})}),e.push(i)}};if(3===l.length){let n=l[1],i=l[2];if("functions"===n){let s=r[n].values[i],l={id:`api.${c}`,label:c,children:[]},[a,d]=[`api.${c}.function`,"Function"],u=Object.entries(s).reduce((e,[t,n])=>("description"!==t&&(e[t]=n),e),{});l.children.push({id:a,label:d,component:e=>(0,t.jsx)(p,{name:c,data:[u],description:s.description,...e})});let m=s.parameters&&s.parameters.map(e=>e.type);if(o.ObjectUtils.isNotEmpty(r.interfaces)&&o.ObjectUtils.isNotEmpty(r.interfaces.values)){let e={id:`api.${c}.interfaces`,label:"Interfaces",description:r.interfaces.description,children:[]};Object.entries(r.interfaces.values).forEach(([n,i])=>{if(m.includes(n)){let[s,l]=[`api.${c}.${n}`,n],a={id:s,label:l,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),children:[]};o.ObjectUtils.isNotEmpty(i.props)&&a.children.push({id:`${s}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:i.props,...e})}),o.ObjectUtils.isNotEmpty(i.callbacks)&&a.children.push({id:`${s}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:i.callbacks,...e})}),e.children.push(a)}}),o.ObjectUtils.isNotEmpty(e.children)&&l.children.push(e)}e.push(l)}}else r.components&&Object.entries(r.components).forEach(([s,l])=>{let a={id:`api.${s}`,label:s,description:l.description,children:[]};if(o.ObjectUtils.isNotEmpty(l.props)&&o.ObjectUtils.isNotEmpty(l.props.values)&&!u("props")){let[e,n]=[`api.${s}.props`,"Props"];if(d("props",s))return;a.children.push({id:e,label:n,component:e=>(0,t.jsx)(p,{name:s,data:l.props.values,description:l.props.description,...e})})}if(o.ObjectUtils.isNotEmpty(l.callbacks)&&o.ObjectUtils.isNotEmpty(l.callbacks.values)&&!u("callbacks")){let[e,n]=[`api.${s}.callbacks`,"Callbacks"];if(d("callbacks",s))return;a.children.push({id:e,label:n,component:e=>(0,t.jsx)(p,{name:s,data:l.callbacks.values,description:l.callbacks.description,...e})})}if(o.ObjectUtils.isNotEmpty(l.methods)&&o.ObjectUtils.isNotEmpty(l.methods.values)&&!u("methods")){let[e,n]=[`api.${s}.methods`,"Methods"];if(d("methods",s))return;a.children.push({id:e,label:n,component:e=>(0,t.jsx)(p,{name:s,data:l.methods.values,description:l.methods.description,...e})})}s.toLocaleLowerCase()===n.toLowerCase()&&i(a.children,s),e.push(a)}),r.model&&Object.entries(r.model).forEach(([s,l])=>{let a={id:`api.${s}`,label:s,description:l.description,children:[]};if(o.ObjectUtils.isNotEmpty(l.props)&&o.ObjectUtils.isNotEmpty(l.props.values)&&!u("props")){let[e,n]=[`api.${s}.props`,"Props"];if(d("props",s))return;a.children.push({id:e,label:n,component:e=>(0,t.jsx)(p,{name:s,data:l.props.values,description:l.props.description,...e})})}s.toLocaleLowerCase()===n.toLowerCase()&&i(a.children,s),e.push(a)}),r.components||r.model||i(e,c)}return e},[]);return(0,l.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[i," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",i," module."]})]}),(0,t.jsx)(m.DocSections,{docs:c})]}),(0,t.jsx)(u.DocSectionNav,{docs:c})]})}e.s(["DocComponent",0,function(e){let o,[a,c]=(0,l.useState)(0),r=(0,s.useRouter)();o=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{c(e),r.replace(r.pathname)};return(0,l.useEffect)(()=>{r.asPath.includes("#api")&&c(1),r.asPath.includes("#pt")&&c(3)},[r.asPath]),(0,t.jsxs)("div",{className:(0,n.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":0===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:o})}),e.apiDocs?(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":1===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":2===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":3===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===a?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.componentDocs})]}):null,1===a?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===a?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===a?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},76848,e=>{"use strict";var t=e.i(91398),n=e.i(91788),i=e.i(10836),s=e.i(15498),l=e.i(60150),o=e.i(64691),a=e.i(45543),c=e.i(51551),r=e.i(3935);let d=s.ComponentBase.extend({defaultProps:{__TYPE:"SelectButton",id:null,value:null,options:null,optionLabel:null,optionValue:null,optionDisabled:null,tabIndex:null,multiple:!1,invalid:!1,unselectable:!0,allowEmpty:!0,disabled:!1,style:null,className:null,dataKey:null,tooltip:null,tooltipOptions:null,itemTemplate:null,onChange:null,children:void 0},css:{classes:{root:({props:e})=>(0,r.classNames)("p-selectbutton p-button-group p-component",{"p-invalid":e.invalid}),button:({itemProps:e,focusedState:t})=>(0,r.classNames)("p-button p-component",{"p-highlight":e.selected,"p-disabled":e.disabled,"p-focus":t}),label:"p-button-label p-c"}}});var p=e.i(50901);let u=n.memo(e=>{let i,[s,o]=n.useState(!1),a=(0,l.useMergeProps)(),{ptm:d,cx:u}=e,m=t=>d(t,{hostName:e.hostName,context:{selected:e.selected,disabled:e.disabled,option:e.option}}),h=(t,n)=>{e.setFocusedIndex(n),e.onClick&&e.onClick({originalEvent:t,option:e.option})},x=(t,n)=>{let i,s;for(let t=0;t<=e.elementRef.current.children.length-1;t++)"0"===e.elementRef.current.children[t].getAttribute("tabindex")&&(i={elem:e.elementRef.current.children[t],index:t});s="prev"===n?0===i.index?e.elementRef.current.children.length-1:i.index-1:i.index===e.elementRef.current.children.length-1?0:i.index+1,e.setFocusedIndex(s),e.elementRef.current.children[s].focus()},f=(i=a({className:u("label")},m("label")),e.template?c.ObjectUtils.getJSXElement(e.template,e.option):(0,t.jsx)("span",{...i,children:e.label})),j=a({className:(0,r.classNames)(e.className,u("button",{itemProps:e,focusedState:s})),role:"button","aria-label":e.label,"aria-pressed":e.selected,onClick:t=>h(t,e.index),onKeyDown:t=>((e,t)=>{switch(e.code){case"Space":h(e,t),e.preventDefault();break;case"ArrowDown":case"ArrowRight":x(e,"next"),e.preventDefault();break;case"ArrowUp":case"ArrowLeft":x(e,"prev"),e.preventDefault()}})(t,e.index),tabIndex:e.tabIndex,"aria-disabled":e.disabled,onFocus:()=>{o(!0)},onBlur:()=>{o(!1)}},m("button"));return(0,t.jsxs)("div",{...j,children:[f,!e.disabled&&(0,t.jsx)(p.Ripple,{})]})});u.displayName="SelectButtonItem";let m=n.memo(n.forwardRef((e,p)=>{let m=(0,l.useMergeProps)(),h=n.useContext(i.PrimeReactContext),x=d.getProps(e,h),[f,j]=n.useState(0),b=n.useRef(null),{ptm:v,cx:g,isUnstyled:y}=d.setMetaData({props:x});(0,s.useHandleStyle)(d.css.styles,y,{name:"selectbutton",styled:!0});let S=e=>{let t;if(x.disabled||O(e.option))return;let n=D(e.option);if(n&&!(x.unselectable&&x.allowEmpty))return;let i=N(e.option);if(x.multiple){let e=x.value?[...x.value]:[];t=n?e.filter(e=>!c.ObjectUtils.equals(e,i,x.dataKey)):[...e,i]}else t=n?null:i;x.onChange&&x.onChange({originalEvent:e.originalEvent,value:t,stopPropagation:()=>{e.originalEvent.stopPropagation()},preventDefault:()=>{e.originalEvent.preventDefault()},target:{name:x.name,id:x.id,value:t}})},N=e=>x.optionValue?c.ObjectUtils.resolveFieldData(e,x.optionValue):e&&void 0!==e.value?e.value:e,O=e=>x.optionDisabled?c.ObjectUtils.isFunction(x.optionDisabled)?x.optionDisabled(e):c.ObjectUtils.resolveFieldData(e,x.optionDisabled):!!e&&void 0!==e.disabled&&e.disabled,D=e=>{let t=N(e);return x.multiple?!!x.value&&!!x.value.length&&x.value.some(e=>c.ObjectUtils.equals(e,t,x.dataKey)):c.ObjectUtils.equals(x.value,t,x.dataKey)};n.useImperativeHandle(p,()=>({props:x,focus:()=>a.DomHandler.focusFirstElement(b.current),getElement:()=>b.current}));let C=c.ObjectUtils.isNotEmpty(x.tooltip),B=x.options&&x.options.length?x.options.map((e,n)=>{let i=x.disabled||O(e),s=x.optionLabel?c.ObjectUtils.resolveFieldData(e,x.optionLabel):e&&void 0!==e.label?e.label:e,l=x.disabled||n!==f?"-1":"0",o=D(e);return(0,t.jsx)(u,{hostName:"SelectButton",label:s,className:e.className,option:e,setFocusedIndex:j,onClick:S,template:x.itemTemplate,selected:o,tabIndex:l,index:n,disabled:i,ptm:v,cx:g,elementRef:b},s+"_"+n)}):null,E=m({ref:b,id:x.id,className:(0,r.classNames)(x.className,g("root")),style:x.style,role:"group"},d.getOtherProps(x),v("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{...E,children:[B,x.children]}),C&&(0,t.jsx)(o.Tooltip,{target:b,content:x.tooltip,pt:v("tooltip"),...x.tooltipOptions})]})}));m.displayName="SelectButton",e.s(["SelectButton",0,m],76848)},3828,(e,t,n)=>{t.exports=e.r(26990)},58598,e=>{"use strict";var t=e.i(91398),n=e.i(88850),i=e.i(82948),s=e.i(28137);function l(){return(0,t.jsxs)(s.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["The container element that wraps the buttons has a ",(0,t.jsx)("i",{children:"group"})," role whereas each button element uses ",(0,t.jsx)("i",{children:"button"})," role and ",(0,t.jsx)("i",{children:"aria-pressed"})," is updated depending on selection state. Value to describe an option is automatically set using the ",(0,t.jsx)("i",{children:"aria-label"})," property that refers to the label of an option so it is still suggested to define a label even the option display consists of presentational content like icons only."]}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the buttons."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles the checked state of a button."})]})]})]})})]})}var o=e.i(5180),a=e.i(76848),c=e.i(91788);function r(e){let n=["Off","On"],[i,l]=(0,c.useState)(n[0]),r={basic:`
<SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
        `,javascript:`
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function BasicDemo() {
    const options = ['Off', 'On'];
    const [value, setValue] = useState(options[0]);

    return (
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

export default function BasicDemo() {
    const options: string[] = ['Off', 'On'];
    const [value, setValue] = useState<string>(options[0]);

    return (
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e: SelectButtonChangeEvent) => setValue(e.value)} options={options} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["SelectButton is used as a controlled component with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties along with an ",(0,t.jsx)("i",{children:"options"})," collection. Label and value of an option are defined with the ",(0,t.jsx)("i",{children:"optionLabel"})," and ",(0,t.jsx)("i",{children:"optionValue"})," ","properties respectively. Default property name for the ",(0,t.jsx)("i",{children:"optionLabel"})," is ",(0,t.jsx)("i",{children:"label"})," and ",(0,t.jsx)("i",{children:"value"})," for the ",(0,t.jsx)("i",{children:"optionValue"}),". If ",(0,t.jsx)("i",{children:"optionValue"})," is omitted and the object has no ",(0,t.jsx)("i",{children:"value"})," property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no ",(0,t.jsx)("i",{children:"optionLabel"})," and ",(0,t.jsx)("i",{children:"optionValue"})," would be necessary."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.SelectButton,{value:i,onChange:e=>l(e.value),options:n})}),(0,t.jsx)(o.DocSectionCode,{code:r})]})}function d(e){let[n,i]=(0,c.useState)(null),l={basic:`
<SelectButton disabled options={options1} />
<SelectButton value={value} onChange={(e) => setValue(e.value)} options={options2} optionLabel="name" optionDisabled="constant" />
        `,javascript:`
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function DisabledDemo() {
    const [value, setValue] = useState(null);
    const options1 = ['Off', 'On'];
    const options2 = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2, constant: true }
    ];
    
    return (
        <div className="card flex flex-wrap justify-content-center flex-wrap gap-3">
            <SelectButton disabled options={options1} />
            <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options2} optionLabel="name" optionDisabled="constant" />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

interface Item {
    name: string;
    value: number;
    constant: boolean;
}

export default function DisabledDemo() {
    const [value, setValue] = useState(null);
    const options1: string[] = ['Off', 'On'];
    const options2: Item[] = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2, constant: true }
    ];
    
    return (
        <div className="card flex flex-wrap justify-content-center flex-wrap gap-3">
            <SelectButton disabled options={options1} />
            <SelectButton value={value} onChange={(e: SelectButtonChangeEvent) => setValue(e.value)} options={options2} optionLabel="name" optionDisabled="constant" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the ",(0,t.jsx)("i",{children:"optionDisabled"})," property."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center flex-wrap gap-3",children:[(0,t.jsx)(a.SelectButton,{disabled:!0,options:["Off","On"]}),(0,t.jsx)(a.SelectButton,{value:n,onChange:e=>i(e.value),options:[{name:"Option 1",value:1},{name:"Option 2",value:2,constant:!0}],optionLabel:"name",optionDisabled:"constant"})]}),(0,t.jsx)(o.DocSectionCode,{code:l})]})}function p(e){let n={basic:`
import { SelectButton } from 'primereact/selectbutton';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)(o.DocSectionCode,{code:n,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function u(e){let n=["Off","On"],[i,l]=(0,c.useState)(n[0]),r={basic:`
<SelectButton invalid value={value} onChange={(e) => setValue(e.value)} options={options} />
        `,javascript:`
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function InvalidDemo() {
    const options = ['Off', 'On'];
    const [value, setValue] = useState(options[0]);

    return (
        <div className="card flex justify-content-center">
            <SelectButton invalid value={value} onChange={(e) => setValue(e.value)} options={options} />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

export default function InvalidDemo() {
    const options: string[] = ['Off', 'On'];
    const [value, setValue] = useState<string>(options[0]);

    return (
        <div className="card flex justify-content-center">
            <SelectButton invalid value={value} onChange={(e: SelectButtonChangeEvent) => setValue(e.value)} options={options} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.SelectButton,{invalid:!0,value:i,onChange:e=>l(e.value),options:n})}),(0,t.jsx)(o.DocSectionCode,{code:r})]})}function m(e){let[n,i]=(0,c.useState)(null),l={basic:`
<SelectButton value={value} onChange={(e) => setValue(e.value)} optionLabel="name" options={items} multiple />
        `,javascript:`
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function MultipleDemo() {
    const [value, setValue] = useState(null);
    const items = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 }
    ];
    
    return (
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} optionLabel="name" options={items} multiple />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

interface Item {
    name: string;
    value: number;
}

export default function MultipleDemo() {
    const [value, setValue] = useState<Item>(null);
    const items: Item[] = [
        {name: 'Option 1', value: 1},
        {name: 'Option 2', value: 2},
        {name: 'Option 3', value: 3}
    ];
    
    return (
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e: SelectButtonChangeEvent) => setValue(e.value)} optionLabel="name" options={items} multiple />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["SelectButton allows selecting only one item by default and enabling ",(0,t.jsx)("i",{children:"multiple"})," allows choosing more. In multiple case, model property should be an array instead of a single value."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.SelectButton,{value:n,onChange:e=>i(e.value),optionLabel:"name",options:[{name:"Option 1",value:1},{name:"Option 2",value:2},{name:"Option 3",value:3}],multiple:!0})}),(0,t.jsx)(o.DocSectionCode,{code:l})]})}let h=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/selectbutton.jpg",alt:"selectbutton"})})]});function x(e){let[n,i]=(0,c.useState)(null),l={basic:`
<SelectButton value={value} onChange={(e) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" options={justifyOptions} />
        `,javascript:`
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function TemplateDemo() {
    const [value, setValue] = useState(null);
    const justifyOptions = [
        {icon: 'pi pi-align-left', value: 'left'},
        {icon: 'pi pi-align-right', value: 'Right'},
        {icon: 'pi pi-align-center', value: 'Center'},
        {icon: 'pi pi-align-justify', value: 'Justify'}
    ];

    const justifyTemplate = (option) => {
        return <i className={option.icon}></i>;
    }

    return (
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" options={justifyOptions} />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

interface JustifyOption {
    icon: string;
    value: string;
}

export default function TemplateDemo() {
    const [value, setValue] = useState<JustifyOption>(null);
    const justifyOptions: JustifyOption[] = [
        {icon: 'pi pi-align-left', value: 'left'},
        {icon: 'pi pi-align-right', value: 'Right'},
        {icon: 'pi pi-align-center', value: 'Center'},
        {icon: 'pi pi-align-justify', value: 'Justify'}
    ];

    const justifyTemplate = (option: JustifyOption) => {
        return <i className={option.icon}></i>;
    }

    return (
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e: SelectButtonChangeEvent) => setValue(e.value)} itemTemplate={justifyTemplate} optionLabel="value" options={justifyOptions} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Options support templating using the ",(0,t.jsx)("i",{children:"itemTemplate"})," property that references a function to render the content. Notice the usage of ",(0,t.jsx)("i",{children:"optionLabel"}),", although not rendered visually, it is still required to be used as the list key."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.SelectButton,{value:n,onChange:e=>i(e.value),itemTemplate:e=>(0,t.jsx)("i",{className:e.icon}),optionLabel:"value",options:[{icon:"pi pi-align-left",value:"left"},{icon:"pi pi-align-right",value:"Right"},{icon:"pi pi-align-center",value:"Center"},{icon:"pi pi-align-justify",value:"Justify"}]})}),(0,t.jsx)(o.DocSectionCode,{code:l})]})}function f(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper"})]})}var j=e.i(41158);function b(e){let n={basic:`
const Tailwind = {
    selectbutton: {
        root: ({ props }) => ({
            className: classNames({ 'opacity-60 select-none pointer-events-none cursor-default': props.disabled })
        }),
        button: ({ context }) => ({
            className: classNames(
                'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
                'px-4 py-3',
                'transition duration-200 border border-r-0',
                'first:rounded-l-md first:rounded-tr-none first:rounded-br-none last:border-r last:rounded-tl-none last:rounded-bl-none last:rounded-r-md',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-gray-300 dark:border-blue-900/40 hover:bg-gray-50 dark:hover:bg-gray-800/80 ': !context.selected,
                    'bg-blue-500 border-blue-500 text-white hover:bg-blue-600': context.selected,
                    'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                }
            )
        }),
        label: 'font-bold'
    }
}
    `},i={javascript:`
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function UnstyledDemo() {
    const options = ['Off', 'On'];
    const [value, setValue] = useState(options[0]);

    return (
        <div className="card flex justify-center">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(j.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(o.DocSectionCode,{code:n,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(o.DocSectionCode,{code:i,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:h},{id:"pt.selectbutton.options",label:"SelectButton PT Options",component:n.default}];return(0,t.jsx)(i.DocComponent,{title:"React SelectButton Component",header:"SelectButton",description:"SelectButton is used to choose single or multiple items from a list using buttons.",componentDocs:[{id:"import",label:"Import",component:p},{id:"basic",label:"Basic",component:r},{id:"multiple",label:"Multiple",component:m},{id:"template",label:"Template",component:x},{id:"invalid",label:"Invalid",component:u},{id:"disabled",label:"Disabled",component:d},{id:"accessibility",label:"Accessibility",component:l}],apiDocs:["SelectButton"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:f},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:b}]}]})}],58598)},31026,(e,t,n)=>{let i="/selectbutton";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(58598)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);