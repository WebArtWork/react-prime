(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),i=e.i(91788);e.s(["CodeHighlight",0,function(e){let s=(0,i.useRef)(),a=`language-${e.lang||"jsx"}`;return(0,i.useEffect)(()=>{window.Prism.highlightElement(s.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:s,className:a,children:[e.children," "]})})}])},74967,e=>{"use strict";e.i(91398),e.i(91788),e.s([])},82948,88850,e=>{"use strict";var t=e.i(91398),i=e.i(3935),s=e.i(58678),a=e.i(3828),r=e.i(91788),n=e.i(51551),l=e.i(72124),o=e.i(41158),c=e.i(87914),d=e.i(28137);let m=e=>{let s=(0,r.useContext)(c.default),{id:l,data:m,name:p,description:h,allowLink:u=!0}=e,b=l.startsWith("pt."),x=(0,a.useRouter)();if(n.ObjectUtils.isNotEmpty(m)){let a=Object.keys(m[0]),c=(e,t)=>{let i=document.getElementById(e);i&&i.parentElement.scrollIntoView({block:"start",behavior:t})},j=(e,s,a)=>{if(u&&e)return e.split("|").map((e,n)=>{if(e.includes(p)){let i=e.indexOf(p),s=e.substring(i).replace(/(\[|\]|<|>).*$/gm,"").trim(),a=p===s?`api.${p}`:`api.${p}.${s===`${p}Props`?"props":s}`;return(0,t.jsxs)(r.default.Fragment,{children:[0!==n?"|":"",(0,t.jsx)(o.default,{href:x.basePath+x.pathname+`#${a}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(a,"smooth"),children:e})})]},n)}return(0,t.jsxs)(r.default.Fragment,{children:[0!==n?"|":"",s?(0,t.jsxs)("span",{id:l+"."+e,className:(0,i.classNames)("doc-option-name",{"line-through cursor-pointer":!!a}),title:a,children:[e,(0,t.jsx)(o.default,{href:x.basePath+x.pathname+`#${l+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(l+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},n)});let n=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return s?(0,t.jsxs)("span",{id:l+"."+n,className:(0,i.classNames)("doc-option-name",{"line-through cursor-pointer":!!a}),title:a,children:[n,(0,t.jsx)(o.default,{href:x.basePath+x.pathname+`#${l+"."+n}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(l+"."+n),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):n},f=(0,t.jsx)(r.default.Fragment,{children:b?(0,t.jsx)("tr",{children:a.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:a.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),g=(0,t.jsx)(r.default.Fragment,{children:m.map((e,a)=>{if(b){let{value:i,label:s,description:r}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:s}),(0,t.jsx)("td",{children:r})]},a)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([a,r],l)=>"readonly"!==a&&"optional"!==a&&"deprecated"!==a&&(0,t.jsx)("td",{children:"parameters"===a?r.map((e,i)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:j(e.type)}),(0,t.jsx)("br",{})]},i)):"default"===a?(0,t.jsx)("div",{className:(0,i.classNames)("doc-option-default",{"doc-option-dark":s.darkMode,"doc-option-light":!s.darkMode}),children:n.ObjectUtils.isEmpty(r)?"null":j(r,"name"===a,e.deprecated)}):"type"===a?(0,t.jsx)("span",{className:"doc-option-type",children:j(r,"name"===a,e.deprecated)}):"returnType"===a?(0,t.jsx)("div",{className:(0,i.classNames)("doc-option-returnType",{"doc-option-dark":s.darkMode,"doc-option-light":!s.darkMode}),children:j(r,"name"===a,e.deprecated)}):"description"===a||"values"===a?(0,t.jsx)("span",{className:"doc-option-description",children:r}):j(r,"name"===a,e.deprecated)},l))},a)})});return(0,t.jsxs)(r.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:h})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:f}),(0,t.jsx)("tbody",{children:g})]})})]},l)}return null};e.s(["default",0,m],88850);var p=e.i(71864),h=e.i(38076);function u(e){let{doc:i,header:s}=e,a=e.apiExclude,o=i.reduce((e,i)=>{let s,r=i.split("."),o=(s=r[0])&&s[0].toUpperCase()+s.slice(1)||"",c=l.default[o.toLowerCase()],d=(e,t)=>a&&a[e]&&a[e].includes(t),p=e=>a&&a[e]&&"excludeAll"===a[e];if(c){let s=(e,i)=>{if(n.ObjectUtils.isNotEmpty(c.events)&&n.ObjectUtils.isNotEmpty(c.events.values)&&!p("events")){let s={id:`api.${i}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,a])=>{let[r,n]=[`api.${i}.${e}`,e];d("event",e)||s.children.push({id:r,label:n,component:e=>(0,t.jsx)(m,{name:i,data:a.props,description:(0,t.jsxs)(t.Fragment,{children:[a.description," See ",(0,t.jsx)("i",{children:a.relatedProp}),"."]}),...e})})}),e.push(s)}if(n.ObjectUtils.isNotEmpty(c.interfaces)&&n.ObjectUtils.isNotEmpty(c.interfaces.values)&&!p("interfaces")){let s={id:`api.${i}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,a])=>{let[r,n]=[`api.${i}.${e}`,e];d("interfaces",e)||s.children.push({id:r,label:n,component:e=>(0,t.jsx)(m,{name:i,data:a.props,description:(0,t.jsxs)(t.Fragment,{children:[a.description," ",a.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:a.extendedTypes}),"."]})]}),...e})})}),e.push(s)}if(n.ObjectUtils.isNotEmpty(c.types)&&n.ObjectUtils.isNotEmpty(c.types.values)&&!p("types")){let s={id:`api.${i}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,a])=>{let[r,n]=[`api.${i}.${e}`,e];d("types",e)||s.children.push({id:r,label:n,component:e=>(0,t.jsx)(m,{name:i,data:[a],allowLink:!1,...e})})}),e.push(s)}};if(3===r.length){let i=r[1],s=r[2];if("functions"===i){let a=c[i].values[s],r={id:`api.${o}`,label:o,children:[]},[l,d]=[`api.${o}.function`,"Function"],p=Object.entries(a).reduce((e,[t,i])=>("description"!==t&&(e[t]=i),e),{});r.children.push({id:l,label:d,component:e=>(0,t.jsx)(m,{name:o,data:[p],description:a.description,...e})});let h=a.parameters&&a.parameters.map(e=>e.type);if(n.ObjectUtils.isNotEmpty(c.interfaces)&&n.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${o}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([i,s])=>{if(h.includes(i)){let[a,r]=[`api.${o}.${i}`,i],l={id:a,label:r,description:(0,t.jsxs)(t.Fragment,{children:[s.description," ",s.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:s.extendedTypes}),"."]})]}),children:[]};n.ObjectUtils.isNotEmpty(s.props)&&l.children.push({id:`${a}.props`,label:"Props",component:e=>(0,t.jsx)(m,{data:s.props,...e})}),n.ObjectUtils.isNotEmpty(s.callbacks)&&l.children.push({id:`${a}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(m,{data:s.callbacks,...e})}),e.children.push(l)}}),n.ObjectUtils.isNotEmpty(e.children)&&r.children.push(e)}e.push(r)}}else c.components&&Object.entries(c.components).forEach(([a,r])=>{let l={id:`api.${a}`,label:a,description:r.description,children:[]};if(n.ObjectUtils.isNotEmpty(r.props)&&n.ObjectUtils.isNotEmpty(r.props.values)&&!p("props")){let[e,i]=[`api.${a}.props`,"Props"];if(d("props",a))return;l.children.push({id:e,label:i,component:e=>(0,t.jsx)(m,{name:a,data:r.props.values,description:r.props.description,...e})})}if(n.ObjectUtils.isNotEmpty(r.callbacks)&&n.ObjectUtils.isNotEmpty(r.callbacks.values)&&!p("callbacks")){let[e,i]=[`api.${a}.callbacks`,"Callbacks"];if(d("callbacks",a))return;l.children.push({id:e,label:i,component:e=>(0,t.jsx)(m,{name:a,data:r.callbacks.values,description:r.callbacks.description,...e})})}if(n.ObjectUtils.isNotEmpty(r.methods)&&n.ObjectUtils.isNotEmpty(r.methods.values)&&!p("methods")){let[e,i]=[`api.${a}.methods`,"Methods"];if(d("methods",a))return;l.children.push({id:e,label:i,component:e=>(0,t.jsx)(m,{name:a,data:r.methods.values,description:r.methods.description,...e})})}a.toLocaleLowerCase()===i.toLowerCase()&&s(l.children,a),e.push(l)}),c.model&&Object.entries(c.model).forEach(([a,r])=>{let l={id:`api.${a}`,label:a,description:r.description,children:[]};if(n.ObjectUtils.isNotEmpty(r.props)&&n.ObjectUtils.isNotEmpty(r.props.values)&&!p("props")){let[e,i]=[`api.${a}.props`,"Props"];if(d("props",a))return;l.children.push({id:e,label:i,component:e=>(0,t.jsx)(m,{name:a,data:r.props.values,description:r.props.description,...e})})}a.toLocaleLowerCase()===i.toLowerCase()&&s(l.children,a),e.push(l)}),c.components||c.model||s(e,o)}return e},[]);return(0,r.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[s," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",s," module."]})]}),(0,t.jsx)(h.DocSections,{docs:o})]}),(0,t.jsx)(p.DocSectionNav,{docs:o})]})}e.s(["DocComponent",0,function(e){let n,[l,o]=(0,r.useState)(0),c=(0,a.useRouter)();n=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{o(e),c.replace(c.pathname)};return(0,r.useEffect)(()=>{c.asPath.includes("#api")&&o(1),c.asPath.includes("#pt")&&o(3)},[c.asPath]),(0,t.jsxs)("div",{className:(0,i.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(s.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":0===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:n})}),e.apiDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":1===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":2===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":3===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===l?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(h.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.componentDocs})]}):null,1===l?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(u,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===l?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(h.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===l?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(h.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},75676,e=>{"use strict";var t=e.i(91398),i=e.i(91788),s=e.i(85850);let a=i.memo(i.forwardRef((e,i)=>{let a=s.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:i,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:(0,t.jsx)("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"})})}));a.displayName="ChevronRightIcon",e.s(["ChevronRightIcon",0,a])},3828,(e,t,i)=>{t.exports=e.r(26990)},14460,e=>{"use strict";var t=e.i(91398);e.i(74967);var i=e.i(28137);function s(){return(0,t.jsxs)(i.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Breadcrumb uses the ",(0,t.jsx)("i",{children:"nav"})," element and since any attribute is passed to the root implicitly ",(0,t.jsx)("i",{children:"aria-labelledby"})," or ",(0,t.jsx)("i",{children:"aria-label"})," can be used to describe the component. Inside an ordered list is used where the list item separators have ",(0,t.jsx)("i",{children:"aria-hidden"})," to be able to ignored by the screen readers. If the last link represents the current route, ",(0,t.jsx)("i",{children:"aria-current"}),' is added with "page" as the value.']}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("p",{children:"No special keyboard interaction is needed, all menuitems are focusable based on the page tab sequence."})]})}var a=e.i(5180),r=e.i(91788),n=e.i(10836),l=e.i(15498),o=e.i(60150),c=e.i(20484),d=e.i(75676),m=e.i(75366),p=e.i(51551),h=e.i(28653),u=e.i(3935);let b=`
@layer primereact {
    .p-breadcrumb {
        overflow-x: auto;
        display: flex;
    }

    .p-breadcrumb ol {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    }

    .p-breadcrumb .p-menuitem-text {
        line-height: 1;
    }

    .p-breadcrumb .p-menuitem-link {
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    .p-breadcrumb .p-menuitem-separator {
        display: flex;
        align-items: center;
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }
}
`,x=l.ComponentBase.extend({defaultProps:{__TYPE:"BreadCrumb",id:null,model:null,home:null,separatorIcon:null,style:null,className:null,children:void 0},css:{classes:{icon:"p-menuitem-icon",action:"p-menuitem-link",label:"p-menuitem-text",home:({_className:e,disabled:t})=>(0,u.classNames)("p-breadcrumb-home p-menuitem",{"p-disabled":t},e),separatorIcon:"p-breadcrumb-chevron",separator:"p-menuitem-separator",menuitem:({item:e})=>(0,u.classNames)("p-menuitem",e.className,{"p-disabled":e.disabled}),menu:"p-breadcrumb-list",root:"p-breadcrumb p-component"},styles:b}}),j=r.memo(r.forwardRef((e,i)=>{let s=(0,o.useMergeProps)(),a=r.useContext(n.PrimeReactContext),b=x.getProps(e,a),[j,f]=r.useState(b.id),g=r.useRef(null),{ptm:N,cx:y,isUnstyled:v}=x.setMetaData({props:b,state:{id:j}});(0,l.useHandleStyle)(x.css.styles,v,{name:"breadcrumb"});let C=(e,t)=>{t.disabled?e.preventDefault():(t.command&&t.command({originalEvent:e,item:t}),t.url||(e.preventDefault(),e.stopPropagation()))},w=e=>e===window.location.pathname?"page":void 0,k=e=>{let i=j+"_sep_"+e,a=s({className:y("separatorIcon"),"aria-hidden":"true"},N("separatorIcon")),n=b.separatorIcon||(0,t.jsx)(d.ChevronRightIcon,{...a}),l=m.IconUtils.getJSXIcon(n,{...a},{props:b}),o=s({id:i,className:y("separator"),role:"separator"},N("separator"));return(0,r.createElement)("li",{...o,key:i},l)};(0,c.useMountEffect)(()=>{j||f((0,h.UniqueComponentId)())}),r.useImperativeHandle(i,()=>({props:b,getElement:()=>g.current}));let I=(()=>{let e=b.home;if(e){if(!1===e.visible)return null;let{icon:i,target:a,url:n,disabled:l,style:o,className:c,template:d,label:h}=e,u=s({className:y("icon")},N("icon")),x=m.IconUtils.getJSXIcon(i,{...u},{props:b}),f=s({href:n||"#",className:y("action"),"aria-disabled":l,"aria-current":w(n),target:a,onClick:t=>C(t,e)},N("action")),g=s({className:y("label")},N("label")),v=h&&(0,t.jsx)("span",{...g,children:h}),k=(0,t.jsxs)("a",{...f,children:[x,v]});if(d){let t={onClick:t=>C(t,e),className:"p-menuitem-link",labelClassName:"p-menuitem-text",element:k,props:b};k=p.ObjectUtils.getJSXElement(d,e,t)}let I=j+"_home",T=s({id:I,className:y("home",{_className:c,disabled:l}),style:o},N("home"));return(0,r.createElement)("li",{...T,key:I},k)}return null})(),T=b.model?b.model.map((e,i)=>{if(!1===e.visible)return null;let a=((e,i)=>{if(!1===e.visible)return null;let a=s({className:y("label")},N("label")),n=e.label&&(0,t.jsx)("span",{...a,children:e.label}),l=s({href:e.url||"#",className:y("action"),target:e.target,"aria-current":w(e.url),onClick:t=>C(t,e),"aria-disabled":e.disabled,tabIndex:e.disabled?-1:void 0},N("action")),o=(0,t.jsx)("a",{...l,children:n});if(e.template){let t={onClick:t=>C(t,e),className:"p-menuitem-link",labelClassName:"p-menuitem-text",element:o,props:b};o=p.ObjectUtils.getJSXElement(e.template,e,t)}let c=e.id||j+"_"+i,d=s({id:c,className:y("menuitem",{item:e}),style:e.style},N("menuitem"));return(0,r.createElement)("li",{...d,key:c},o)})(e,i),n=i===b.model.length-1?null:k(i),l=j+"_"+i;return(0,t.jsxs)(r.Fragment,{children:[a,n]},l)}):null,E=k("home"),D=s({className:y("menu")},N("menu")),O=s({id:b.id,ref:g,className:(0,u.classNames)(b.className,y("root")),style:b.style},x.getOtherProps(b),N("root"));return(0,t.jsx)("nav",{...O,children:(0,t.jsxs)("ol",{...D,children:[I,I&&!!T?.length&&E,T]})})}));function f(e){let s={basic:`
<BreadCrumb model={items} home={home} />
        `,javascript:`
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

export default function BasicDemo() {
    const items = [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }];
    const home = { icon: 'pi pi-home', url: 'https://primereact.org' }

    return (
        <BreadCrumb model={items} home={home} />
    )
}
        `,typescript:`
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';

export default function BasicDemo() {
    const items: MenuItem[] = [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }];
    const home: MenuItem = { icon: 'pi pi-home', url: 'https://primereact.org' }

    return (
        <BreadCrumb model={items} home={home} />
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["BreadCrumb requires a collection of menuitems as its ",(0,t.jsx)("i",{children:"model"}),"."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(j,{model:[{label:"Electronics"},{label:"Computer"},{label:"Accessories"},{label:"Keyboard"},{label:"Wireless"}],home:{icon:"pi pi-home",url:"https://primereact.org"}})}),(0,t.jsx)(a.DocSectionCode,{code:s})]})}function g(e){let s={basic:`
import { BreadCrumb } from 'primereact/breadcrumb';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)(a.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}j.displayName="BreadCrumb";let N=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/breadcrumb.jpg",alt:"breadcrumb"})})]});var y=e.i(41158);function v(e){let s=[{label:"Components"},{label:"Form"},{label:"InputText",template:()=>(0,t.jsx)(y.default,{href:"/inputtext",children:(0,t.jsx)("a",{className:"text-primary font-semibold",children:"InputText"})})}],r={basic:`
<BreadCrumb model={items} home={home} />
        `,javascript:`
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import Link from 'next/link';

export default function RouterDemo() {
    const items = [
        { label: 'Components' },
        { label: 'Form' },
        {
            label: 'InputText',
            template: () => <Link href="/inputtext"><a className="text-primary font-semibold">InputText</a></Link>
        }
    ];
    const home = { icon: 'pi pi-home', url: 'https://primereact.org' };


    return (
        <BreadCrumb model={items} home={home} />
    )
}
        `,typescript:`
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import Link from 'next/link';

export default function RouterDemo() {
    const items: MenuItem[] = [
        { label: 'Components' },
        { label: 'Form' },
        {
            label: 'InputText',
            template: () => <Link href="/inputtext"><a className="text-primary font-semibold">InputText</a></Link>
        }
    ];
    const home: MenuItem = { icon: 'pi pi-home', url: 'https://primereact.org' };

    return (
        <BreadCrumb model={items} home={home} />
    )
}`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation."})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(j,{home:{icon:"pi pi-home",url:"https://primereact.org"},model:s})}),(0,t.jsx)(a.DocSectionCode,{code:r})]})}function C(e){let s=(e,i)=>(0,t.jsx)("a",{className:i.className,children:(0,t.jsx)("span",{className:e.icon})}),r={basic:`
<BreadCrumb model={items} home={home} />
        `,javascript:`
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

export default function TemplateDemo() {
    const iconItemTemplate = (item, options) => {
        return (
            <a className={options.className}>
                <span className={item.icon}></span>
            </a>
        );
    };

    const items = [
        { icon: 'pi pi-sitemap', template: iconItemTemplate },
        { icon: 'pi pi-book', template: iconItemTemplate },
        { icon: 'pi pi-wallet', template: iconItemTemplate },
        { icon: 'pi pi-shopping-bag', template: iconItemTemplate },
        { icon: 'pi pi-calculator', template: iconItemTemplate }
    ];

    const home = { icon: 'pi pi-home', url: 'https://www.primereact.org' };

    return (
        <BreadCrumb model={items} home={home} />
    )
}
        `,typescript:`
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem, MenuItemOptions } from 'primereact/menuitem';

export default function TemplateDoc() {
    const iconItemTemplate = (item: MenuItem, options: MenuItemOptions) => {
        return (
            <a className={options.className}>
                <span className={item.icon}></span>
            </a>
        );
    };

    const items: MenuItem[]  = [
        { icon: 'pi pi-sitemap', template: iconItemTemplate },
        { icon: 'pi pi-book', template: iconItemTemplate },
        { icon: 'pi pi-wallet', template: iconItemTemplate },
        { icon: 'pi pi-shopping-bag', template: iconItemTemplate },
        { icon: 'pi pi-calculator', template: iconItemTemplate }
    ];

    const home: MenuItem = { icon: 'pi pi-home', url: 'https://www.primereact.org' };

    return (
        <BreadCrumb model={items} home={home} />
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Custom content can be placed inside the menuitem using the ",(0,t.jsx)("i",{children:"template"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(j,{model:[{icon:"pi pi-sitemap",template:s},{icon:"pi pi-book",template:s},{icon:"pi pi-wallet",template:s},{icon:"pi pi-shopping-bag",template:s},{icon:"pi pi-calculator",template:s}],home:{icon:"pi pi-home",url:"https://www.primereact.org"}})}),(0,t.jsx)(a.DocSectionCode,{code:r})]})}function w(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-breadcrumb"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menuitem"}),(0,t.jsx)("td",{children:"Menuitem element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menuitem-text"}),(0,t.jsx)("td",{children:"Label of a menuitem."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-breadcrumb-chevron"}),(0,t.jsx)("td",{children:"Chevron element."})]})]})]})})]})}function k(e){let s={basic:`
const Tailwind = {    
    breadcrumb: {
        root: {
            className: classNames('overflow-x-auto', 'bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 rounded-md p-4')
        },
        menu: 'm-0 p-0 list-none flex items-center flex-nowrap',
        action: {
            className: classNames(
                'text-decoration-none flex items-center',
                'transition-shadow duration-200 rounded-md text-gray-600 dark:text-white/70',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        icon: 'text-gray-600 dark:text-white/70',
        separator: {
            className: classNames('mx-2 text-gray-600 dark:text-white/70', 'flex items-center')
        }
    }
}
        `},r={javascript:`
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

export default function UnstyledDemo() {
    const items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
    const home = { icon: 'pi pi-home', url: 'https://primereact.org' }

    return (
        <div className="card">
            <BreadCrumb model={items} home={home} />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(y.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(a.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(a.DocSectionCode,{code:r,embedded:!0})]})})}var I=e.i(88850),T=e.i(82948);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:N},{id:"pt.breadcrumb.options",label:"BreadCrumb PT Options",component:I.default}];return(0,t.jsx)(T.DocComponent,{title:"React BreadCrumb Component",header:"BreadCrumb",description:"Breadcrumb provides contextual information about page hierarchy.",componentDocs:[{id:"import",label:"Import",component:g},{id:"basic",label:"Basic",component:f},{id:"template",label:"Template",component:C},{id:"router",label:"Router",component:v},{id:"accessibility",label:"Accessibility",component:s}],apiDocs:["Breadcrumb","MenuItem"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:w},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:k}]}]})}],14460)},85273,(e,t,i)=>{let s="/breadcrumb";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(14460)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})}]);