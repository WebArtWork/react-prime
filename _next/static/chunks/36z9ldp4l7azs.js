(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),l=e.i(91788);e.s(["CodeHighlight",0,function(e){let a=(0,l.useRef)(),s=`language-${e.lang||"jsx"}`;return(0,l.useEffect)(()=>{window.Prism.highlightElement(a.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:a,className:s,children:[e.children," "]})})}])},74967,e=>{"use strict";e.i(91398),e.i(91788),e.s([])},82948,88850,e=>{"use strict";var t=e.i(91398),l=e.i(3935),a=e.i(58678),s=e.i(3828),r=e.i(91788),i=e.i(51551),o=e.i(72124),c=e.i(41158),n=e.i(87914),d=e.i(28137);let p=e=>{let a=(0,r.useContext)(n.default),{id:o,data:p,name:m,description:u,allowLink:h=!0}=e,f=o.startsWith("pt."),b=(0,s.useRouter)();if(i.ObjectUtils.isNotEmpty(p)){let s=Object.keys(p[0]),n=(e,t)=>{let l=document.getElementById(e);l&&l.parentElement.scrollIntoView({block:"start",behavior:t})},x=(e,a,s)=>{if(h&&e)return e.split("|").map((e,i)=>{if(e.includes(m)){let l=e.indexOf(m),a=e.substring(l).replace(/(\[|\]|<|>).*$/gm,"").trim(),s=m===a?`api.${m}`:`api.${m}.${a===`${m}Props`?"props":a}`;return(0,t.jsxs)(r.default.Fragment,{children:[0!==i?"|":"",(0,t.jsx)(c.default,{href:b.basePath+b.pathname+`#${s}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>n(s,"smooth"),children:e})})]},i)}return(0,t.jsxs)(r.default.Fragment,{children:[0!==i?"|":"",a?(0,t.jsxs)("span",{id:o+"."+e,className:(0,l.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[e,(0,t.jsx)(c.default,{href:b.basePath+b.pathname+`#${o+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>n(o+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},i)});let i=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return a?(0,t.jsxs)("span",{id:o+"."+i,className:(0,l.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[i,(0,t.jsx)(c.default,{href:b.basePath+b.pathname+`#${o+"."+i}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>n(o+"."+i),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):i},v=(0,t.jsx)(r.default.Fragment,{children:f?(0,t.jsx)("tr",{children:s.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:s.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),j=(0,t.jsx)(r.default.Fragment,{children:p.map((e,s)=>{if(f){let{value:l,label:a,description:r}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:l}),(0,t.jsx)("td",{children:a}),(0,t.jsx)("td",{children:r})]},s)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([s,r],o)=>"readonly"!==s&&"optional"!==s&&"deprecated"!==s&&(0,t.jsx)("td",{children:"parameters"===s?r.map((e,l)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:x(e.type)}),(0,t.jsx)("br",{})]},l)):"default"===s?(0,t.jsx)("div",{className:(0,l.classNames)("doc-option-default",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:i.ObjectUtils.isEmpty(r)?"null":x(r,"name"===s,e.deprecated)}):"type"===s?(0,t.jsx)("span",{className:"doc-option-type",children:x(r,"name"===s,e.deprecated)}):"returnType"===s?(0,t.jsx)("div",{className:(0,l.classNames)("doc-option-returnType",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:x(r,"name"===s,e.deprecated)}):"description"===s||"values"===s?(0,t.jsx)("span",{className:"doc-option-description",children:r}):x(r,"name"===s,e.deprecated)},o))},s)})});return(0,t.jsxs)(r.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:u})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:v}),(0,t.jsx)("tbody",{children:j})]})})]},o)}return null};e.s(["default",0,p],88850);var m=e.i(71864),u=e.i(38076);function h(e){let{doc:l,header:a}=e,s=e.apiExclude,c=l.reduce((e,l)=>{let a,r=l.split("."),c=(a=r[0])&&a[0].toUpperCase()+a.slice(1)||"",n=o.default[c.toLowerCase()],d=(e,t)=>s&&s[e]&&s[e].includes(t),m=e=>s&&s[e]&&"excludeAll"===s[e];if(n){let a=(e,l)=>{if(i.ObjectUtils.isNotEmpty(n.events)&&i.ObjectUtils.isNotEmpty(n.events.values)&&!m("events")){let a={id:`api.${l}.events`,label:"Events",description:n.events.description,children:[]};Object.entries(n.events.values).forEach(([e,s])=>{let[r,i]=[`api.${l}.${e}`,e];d("event",e)||a.children.push({id:r,label:i,component:e=>(0,t.jsx)(p,{name:l,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," See ",(0,t.jsx)("i",{children:s.relatedProp}),"."]}),...e})})}),e.push(a)}if(i.ObjectUtils.isNotEmpty(n.interfaces)&&i.ObjectUtils.isNotEmpty(n.interfaces.values)&&!m("interfaces")){let a={id:`api.${l}.interfaces`,label:"Interfaces",description:n.interfaces.description,children:[]};Object.entries(n.interfaces.values).forEach(([e,s])=>{let[r,i]=[`api.${l}.${e}`,e];d("interfaces",e)||a.children.push({id:r,label:i,component:e=>(0,t.jsx)(p,{name:l,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," ",s.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:s.extendedTypes}),"."]})]}),...e})})}),e.push(a)}if(i.ObjectUtils.isNotEmpty(n.types)&&i.ObjectUtils.isNotEmpty(n.types.values)&&!m("types")){let a={id:`api.${l}.types`,label:"Types",description:n.types.description,children:[]};Object.entries(n.types.values).forEach(([e,s])=>{let[r,i]=[`api.${l}.${e}`,e];d("types",e)||a.children.push({id:r,label:i,component:e=>(0,t.jsx)(p,{name:l,data:[s],allowLink:!1,...e})})}),e.push(a)}};if(3===r.length){let l=r[1],a=r[2];if("functions"===l){let s=n[l].values[a],r={id:`api.${c}`,label:c,children:[]},[o,d]=[`api.${c}.function`,"Function"],m=Object.entries(s).reduce((e,[t,l])=>("description"!==t&&(e[t]=l),e),{});r.children.push({id:o,label:d,component:e=>(0,t.jsx)(p,{name:c,data:[m],description:s.description,...e})});let u=s.parameters&&s.parameters.map(e=>e.type);if(i.ObjectUtils.isNotEmpty(n.interfaces)&&i.ObjectUtils.isNotEmpty(n.interfaces.values)){let e={id:`api.${c}.interfaces`,label:"Interfaces",description:n.interfaces.description,children:[]};Object.entries(n.interfaces.values).forEach(([l,a])=>{if(u.includes(l)){let[s,r]=[`api.${c}.${l}`,l],o={id:s,label:r,description:(0,t.jsxs)(t.Fragment,{children:[a.description," ",a.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:a.extendedTypes}),"."]})]}),children:[]};i.ObjectUtils.isNotEmpty(a.props)&&o.children.push({id:`${s}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:a.props,...e})}),i.ObjectUtils.isNotEmpty(a.callbacks)&&o.children.push({id:`${s}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:a.callbacks,...e})}),e.children.push(o)}}),i.ObjectUtils.isNotEmpty(e.children)&&r.children.push(e)}e.push(r)}}else n.components&&Object.entries(n.components).forEach(([s,r])=>{let o={id:`api.${s}`,label:s,description:r.description,children:[]};if(i.ObjectUtils.isNotEmpty(r.props)&&i.ObjectUtils.isNotEmpty(r.props.values)&&!m("props")){let[e,l]=[`api.${s}.props`,"Props"];if(d("props",s))return;o.children.push({id:e,label:l,component:e=>(0,t.jsx)(p,{name:s,data:r.props.values,description:r.props.description,...e})})}if(i.ObjectUtils.isNotEmpty(r.callbacks)&&i.ObjectUtils.isNotEmpty(r.callbacks.values)&&!m("callbacks")){let[e,l]=[`api.${s}.callbacks`,"Callbacks"];if(d("callbacks",s))return;o.children.push({id:e,label:l,component:e=>(0,t.jsx)(p,{name:s,data:r.callbacks.values,description:r.callbacks.description,...e})})}if(i.ObjectUtils.isNotEmpty(r.methods)&&i.ObjectUtils.isNotEmpty(r.methods.values)&&!m("methods")){let[e,l]=[`api.${s}.methods`,"Methods"];if(d("methods",s))return;o.children.push({id:e,label:l,component:e=>(0,t.jsx)(p,{name:s,data:r.methods.values,description:r.methods.description,...e})})}s.toLocaleLowerCase()===l.toLowerCase()&&a(o.children,s),e.push(o)}),n.model&&Object.entries(n.model).forEach(([s,r])=>{let o={id:`api.${s}`,label:s,description:r.description,children:[]};if(i.ObjectUtils.isNotEmpty(r.props)&&i.ObjectUtils.isNotEmpty(r.props.values)&&!m("props")){let[e,l]=[`api.${s}.props`,"Props"];if(d("props",s))return;o.children.push({id:e,label:l,component:e=>(0,t.jsx)(p,{name:s,data:r.props.values,description:r.props.description,...e})})}s.toLocaleLowerCase()===l.toLowerCase()&&a(o.children,s),e.push(o)}),n.components||n.model||a(e,c)}return e},[]);return(0,r.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[a," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",a," module."]})]}),(0,t.jsx)(u.DocSections,{docs:c})]}),(0,t.jsx)(m.DocSectionNav,{docs:c})]})}e.s(["DocComponent",0,function(e){let i,[o,c]=(0,r.useState)(0),n=(0,s.useRouter)();i=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{c(e),n.replace(n.pathname)};return(0,r.useEffect)(()=>{n.asPath.includes("#api")&&c(1),n.asPath.includes("#pt")&&c(3)},[n.asPath]),(0,t.jsxs)("div",{className:(0,l.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,l.classNames)({"doc-tabmenu-active":0===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:i})}),e.apiDocs?(0,t.jsx)("li",{className:(0,l.classNames)({"doc-tabmenu-active":1===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,l.classNames)({"doc-tabmenu-active":2===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,l.classNames)({"doc-tabmenu-active":3===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===o?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(u.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.componentDocs})]}):null,1===o?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===o?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(u.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===o?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(u.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},19982,e=>{"use strict";var t=e.i(91398),l=e.i(91788),a=e.i(10836),s=e.i(15498),r=e.i(60150),i=e.i(51551),o=e.i(3935);let c=`
@layer primereact {
    .p-card-header img {
        width: 100%;
    }
}
`,n=s.ComponentBase.extend({defaultProps:{__TYPE:"Card",id:null,header:null,footer:null,title:null,subTitle:null,style:null,className:null,children:void 0},css:{classes:{root:"p-card p-component",header:"p-card-header",title:"p-card-title",subTitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer",body:"p-card-body"},styles:c}}),d=l.forwardRef((e,c)=>{let d,p,m,u,h,f,b,x,v,j,g=(0,r.useMergeProps)(),y=l.useContext(a.PrimeReactContext),N=n.getProps(e,y),M=l.useRef(c),{ptm:S,cx:E,isUnstyled:C}=n.setMetaData({props:N});(0,s.useHandleStyle)(n.css.styles,C,{name:"card"}),l.useEffect(()=>{i.ObjectUtils.combinedRefs(M,c)},[M,c]);let w=g({id:N.id,ref:M,style:N.style,className:(0,o.classNames)(N.className,E("root"))},n.getOtherProps(N),S("root")),D=(d=g({className:E("header")},S("header")),N.header?(0,t.jsx)("div",{...d,children:i.ObjectUtils.getJSXElement(N.header,N)}):null),O=(p=g({className:E("title")},S("title")),m=N.title&&(0,t.jsx)("div",{...p,children:i.ObjectUtils.getJSXElement(N.title,N)}),u=g({className:E("subTitle")},S("subTitle")),h=N.subTitle&&(0,t.jsx)("div",{...u,children:i.ObjectUtils.getJSXElement(N.subTitle,N)}),f=g({className:E("content")},S("content")),b=N.children&&(0,t.jsx)("div",{...f,children:N.children}),x=g({className:E("footer")},S("footer")),v=N.footer&&(0,t.jsx)("div",{...x,children:i.ObjectUtils.getJSXElement(N.footer,N)}),j=g({className:E("body")},S("body")),(0,t.jsxs)("div",{...j,children:[m,h,b,v]}));return(0,t.jsxs)("div",{...w,children:[D,O]})});d.displayName="Card",e.s(["Card",0,d],19982)},3828,(e,t,l)=>{t.exports=e.r(26990)},4361,e=>{"use strict";var t=e.i(91398),l=e.i(88850),a=e.i(82948),s=e.i(5180),r=e.i(28137),i=e.i(91788),o=e.i(10836),c=e.i(15498),n=e.i(60150),d=e.i(51551),p=e.i(3935);let m=`
@layer primereact {
    .p-metergroup {
        position: relative;
        overflow: hidden;
    }

    .p-metergroup-vertical.p-metergroup {
        display: flex;
    }

    .p-metergroup-vertical .p-metergroup-meter-container {
        flex-direction: column;
    }

    .p-metergroup-meter-container {
        display: flex;
    }

    .p-metergroup-label-list {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-metergroup-vertical .p-metergroup-label-list {
        align-items: start;
    }

    .p-metergroup-label-list-vertical {
        flex-direction: column;
    }

    .p-metergroup-label-list-horizontal {
        flex-direction: row;
    }

    .p-metergroup-label-list-item {
        display: inline-flex;
        align-items: center;
    }

    .p-metergroup-label-type {
        display: inline-block;
    }
}
`,u=c.ComponentBase.extend({defaultProps:{__TYPE:"MeterGroup",__parentMetadata:null,children:void 0,className:null,values:null,min:0,max:100,orientation:"horizontal",labelPosition:"end",labelOrientation:"horizontal",start:null,end:null,meter:null,labelList:null},css:{classes:{root:({props:e})=>[(0,p.classNames)("p-metergroup p-component",{"p-metergroup-horizontal":"horizontal"===e.orientation,"p-metergroup-vertical":"vertical"===e.orientation})],metercontainer:"p-metergroup-meter-container",meter:"p-metergroup-meter",labellist:({props:e})=>(0,p.classNames)("p-metergroup-label-list",{"p-metergroup-label-list-start":"start"===e.labelPosition,"p-metergroup-label-list-end":"end"===e.labelPosition,"p-metergroup-label-list-vertical":"vertical"===e.labelOrientation,"p-metergroup-label-list-horizontal":"horizontal"===e.labelOrientation}),labellistitem:"p-metergroup-label-list-item",labelicon:"p-metergroup-label-icon",labellisttype:"p-metergroup-label-type",label:"p-metergroup-label"},styles:m}}),h=e=>{let l,a,s,r,m,h=i.useContext(o.PrimeReactContext),f=u.getProps(e,h),{values:b,min:x,max:v,orientation:j,labelPosition:g,start:y,end:N,meter:M,labelList:S}=f,E=(0,n.useMergeProps)(),{ptm:C,cx:w,isUnstyled:D}=u.setMetaData({props:f,...f.__parentMetadata,context:{disabled:f.disabled}});(0,c.useHandleStyle)(u.css.styles,D,{name:"metergroup"});let O=0,P=[];b.map(e=>{O+=e.value,P.push(Math.round(e.value/O*100))});let T=(e=0)=>Math.round(Math.max(0,Math.min(100,(e-x)/(v-x)*100))),k=E({className:(0,p.classNames)(f.className,w("root",{orientation:j}))},u.getOtherProps(f),C("root")),G={totalPercent:O,percentages:P,values:b},R=S||(l=E({className:w("labellist")},C("labellist")),a=E({className:w("labellistitem")},C("labellistitem")),s=E({className:w("label")},C("label")),(0,t.jsx)("ol",{...l,children:b.map((e,l)=>{let r=E({className:(0,p.classNames)(w("labelicon"),e.icon),style:{color:e.color}},C("labelicon")),i=E({className:w("labellisttype"),style:{backgroundColor:e.color}},C("labellisttype")),o=e.icon?(0,t.jsx)("i",{...r}):(0,t.jsx)("span",{...i}),c=T(e.value);return(0,t.jsxs)("li",{...a,children:[o,(0,t.jsxs)("span",{...s,children:[e?.label," ",`(${c}%)`]})]},l)})})),U=d.ObjectUtils.getJSXElement(R,{values:b,totalPercent:O});return(0,t.jsxs)("div",{...k,role:"meter","aria-valuemin":x,"aria-valuemax":v,"aria-valuenow":O,children:["start"===g&&U,y&&d.ObjectUtils.getJSXElement(y,G),(r=b.map((e,l)=>{let a=T(e.value),s={backgroundColor:e.color,width:"horizontal"===j?a+"%":"auto",height:"vertical"===j?a+"%":"auto"},r=E({className:w("meter"),style:s},C("meter"));if(M||e.meterTemplate){let t=E({className:w("meter")},C("meter"));return d.ObjectUtils.getJSXElement(e.meterTemplate||M,{...e,percentage:a,index:l},t)}return(0,t.jsx)("span",{...r},l)}),m=E({className:w("metercontainer")},C("metercontainer")),(0,t.jsx)("div",{...m,children:r})),N&&d.ObjectUtils.getJSXElement(N,G),"end"===g&&U]})};function f(e){let l={basic:`
<MeterGroup values={values} />
        `,javascript:`
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function BasicDemo() {
    const values = [{ label: 'Space used', value: 15 }];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} />
        </div>
    )
}
        `,typescript:`
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function BasicDemo() {
    const values = [{ label: 'Space used', value: 15 }];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["MeterGroup requires a ",(0,t.jsx)("i",{children:"value"})," as the data to display where each item in the collection should be a type of ",(0,t.jsx)("i",{children:"MeterItem"}),"."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(h,{values:[{label:"Space used",value:15}]})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function b(e){let l={basic:`
<MeterGroup values={values} />
        `,javascript:`
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function IconDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
        { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
        { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
        { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} />
        </div>
    )
}
        `,typescript:`
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function IconDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
        { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
        { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
        { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Icons can be displayed next to the labels instead of the default marker."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(h,{values:[{label:"Apps",color:"#34d399",value:16,icon:"pi pi-table"},{label:"Messages",color:"#fbbf24",value:8,icon:"pi pi-inbox"},{label:"Media",color:"#60a5fa",value:24,icon:"pi pi-image"},{label:"System",color:"#c084fc",value:10,icon:"pi pi-cog"}]})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function x(e){let l={basic:`
import { MeterGroup } from 'primereact/metergroup';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)(s.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideCodeSandbox:!0,hideStackBlitz:!0})]})}function v(e){let l={basic:`
<MeterGroup values={values} />
        `,javascript:`
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function MultipleDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} />
        </div>
    )
}
        `,typescript:`
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function MultipleDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Adding more items to the array displays the meters in a group."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(h,{values:[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}]})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function j(e){let l={basic:`
<MeterGroup values={values} labelPosition="start" labelOrientation="vertical" />
        `,javascript:`
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function LabelDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} labelPosition="start" labelOrientation="vertical" />
        </div>
    )
}
        `,typescript:`
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function LabelDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} labelPosition="start" labelOrientation="vertical" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["The position of the labels relative to the meters is defined using the ",(0,t.jsx)("i",{children:"labelPosition"})," property. The default orientation of the labels is horizontal, and the vertical alternative is available through the"," ",(0,t.jsx)("i",{children:"labelOrientation"})," option."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(h,{values:[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}],labelPosition:"start",labelOrientation:"vertical"})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function g(e){let l={basic:`
<MeterGroup values={values} orientation="vertical" labelOrientation="vertical" />
        `,javascript:`
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function VerticalDemo() {
    const values = [
         { label: 'Apps', color: '#34d399', value: 24 },
        { label: 'Messages', color: '#fbbf24', value: 16 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 12 }
    ];

    return (
        <div className="card flex justify-content-center" style={{ height: '360px' }}>
            <MeterGroup values={values} orientation="vertical" labelOrientation="vertical" />
        </div>
    )
}
        `,typescript:`
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function VerticalDemo() {
    const values = [
         { label: 'Apps', color: '#34d399', value: 24 },
        { label: 'Messages', color: '#fbbf24', value: 16 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 12 }
    ];

    return (
        <div className="card flex justify-content-center" style={{ height: '360px' }}>
            <MeterGroup values={values} orientation="vertical" labelOrientation="vertical" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["MeterGroup requires a ",(0,t.jsx)("i",{children:"value"})," as the data to display where each item in the collection should be a type of ",(0,t.jsx)("i",{children:"MeterItem"}),"."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",style:{height:"360px"},children:(0,t.jsx)(h,{values:[{label:"Apps",color:"#34d399",value:24},{label:"Messages",color:"#fbbf24",value:16},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:12}],orientation:"vertical",labelOrientation:"vertical"})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function y(e){let l={basic:`
<MeterGroup values={values} max="200" />
        `,javascript:`
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function MinMaxDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} max="200" />
        </div>
    )
}
        `,typescript:`
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function MinMaxDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }    
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} max="200" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Boundaries are configured with the ",(0,t.jsx)("i",{children:"min"})," and ",(0,t.jsx)("i",{children:"max"})," values whose defaults are 0 and 100 respectively."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(h,{values:[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}],max:"200"})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}var N=e.i(57724),M=e.i(19982);function S(e){let l={basic:`
<MeterGroup values={values} />
        `,javascript:`
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function TemplateDemo() {
    const meter = (props, attr) => <span {...attr} key={props.index} style={{ background: \`linear-gradient(to right, \${props.color1}, \${props.color2})\`, width: props.percentage + '%' }} />;

    const labelList = ({ values }) => (
        <div className="flex flex-wrap gap-3">
            {values.map((item, index) => (
                <Card className="flex-1" key={index}>
                    <div className="flex justify-content-between gap-5">
                        <div className="flex flex-column gap-1">
                            <span className="text-secondary text-sm">{item.label}</span>
                            <span className="font-bold text-lg">{item.value}%</span>
                        </div>
                        <span className="w-2rem h-2rem border-circle inline-flex justify-content-center align-items-center text-center" style={{ backgroundColor: item.color1, color: '#ffffff' }}>
                            <i className={item.icon} />
                        </span>
                    </div>
                </Card>
            ))}
        </div>
    );

    const start = ({ totalPercent }) => (
        <div className="flex justify-content-between mt-3 mb-2 relative">
            <span>Storage</span>
            <span style={{ width: totalPercent + '%' }} className="absolute text-right">
                {totalPercent}%
            </span>
            <span className="font-medium">1TB</span>
        </div>
    );

    const end = (
        <div className="flex justify-content-between mt-3">
            <Button label="Manage Storage" outlined size="small" />
            <Button label="Update Plan" size="small" />
        </div>
    );

    const values = [
        { label: 'Apps', color1: '#34d399', color2: '#fbbf24', value: 25, icon: 'pi pi-table' },
        { label: 'Messages', color1: '#fbbf24', color2: '#60a5fa', value: 15, icon: 'pi pi-inbox' },
        { label: 'Media', color1: '#60a5fa', color2: '#c084fc', value: 20, icon: 'pi pi-image' },
        { label: 'System', color1: '#c084fc', color2: '#c084fc', value: 10, icon: 'pi pi-cog', meterTemplate: meter }
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup labelPosition="start" values={values} start={start} end={end} meter={meter} labelList={labelList} />
        </div>
    )
}
        `,typescript:`
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function TemplateDemo() {
    const meter = (props: any, attr: any) => (
        <span
            {...attr}
            key={props.index}
            style={{
                background: \`linear-gradient(to right, \${props.color1}, \${props.color2})\`,
                width: props.percentage + '%',
            }}
        />
    );

    const start = ({ totalPercent }: {totalPercent: number}) => (
        <div className="flex justify-content-between mt-3 mb-2 relative">
            <span>Storage</span>
            <span
                style={{ width: totalPercent + '%' }}
                className="absolute text-right"
            >
                {totalPercent}%
            </span>
            <span className="font-medium">1TB</span>
        </div>
    );

    const end = (
        <div className="flex justify-content-between mt-3">
            <Button label="Manage Storage" outlined size="small" />
            <Button label="Update Plan" size="small" />
        </div>
    );

    const labelList = ({ values }: {values: any[]}) => (
        <div className="flex flex-wrap gap-3">
            {values.map((item, index) => (
                <Card
                    className="flex-1"
                    key={index}
                >
                    <div className="flex justify-content-between gap-5">
                    <div className="flex flex-column gap-1">
                        <span className="text-secondary text-sm">{item.label}</span>
                        <span className="font-bold text-lg">{item.value}%</span>
                    </div>
                    <span
                        className="w-2rem h-2rem border-circle inline-flex justify-content-center align-items-center text-center"
                        style={{ backgroundColor: item.color1, color: '#ffffff' }}
                    >
                        <i className={item.icon} />
                    </span>
                    </div>
                </Card>
            ))}
        </div>
    );

    const values = [
        {
            label: 'Apps',
            color1: '#34d399',
            color2: '#fbbf24',
            value: 25,
            icon: 'pi pi-table',
        },
        {
            label: 'Messages',
            color1: '#fbbf24',
            color2: '#60a5fa',
            value: 15,
            icon: 'pi pi-inbox',
        }, 
        {
            label: 'Media',
            color1: '#60a5fa',
            color2: '#c084fc',
            value: 20,
            icon: 'pi pi-image',
        },
        {
            label: 'System',
            color1: '#c084fc',
            color2: '#c084fc',
            value: 10,
            icon: 'pi pi-cog',
            meterTemplate: meter,
        },
    ];
    
    return (
        <div className="card flex justify-content-center">
            <MeterGroup labelPosition="start" values={values} start={start} end={end} meter={meter} labelList={labelList} />
        </div>
    )
}
        `},a=(e,t)=>(0,i.createElement)("span",{...t,key:e.index,style:{background:`linear-gradient(to right, ${e.color1}, ${e.color2})`,width:e.percentage+"%"}}),o=(0,t.jsxs)("div",{className:"flex justify-content-between mt-3",children:[(0,t.jsx)(N.Button,{label:"Manage Storage",outlined:!0,size:"small"}),(0,t.jsx)(N.Button,{label:"Update Plan",size:"small"})]}),c=[{label:"Apps",color1:"#34d399",color2:"#fbbf24",value:25,icon:"pi pi-table"},{label:"Messages",color1:"#fbbf24",color2:"#60a5fa",value:15,icon:"pi pi-inbox"},{label:"Media",color1:"#60a5fa",color2:"#c084fc",value:20,icon:"pi pi-image"},{label:"System",color1:"#c084fc",color2:"#c084fc",value:10,icon:"pi pi-cog",meterTemplate:a}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["MeterGroup requires a ",(0,t.jsx)("i",{children:"value"})," as the data to display where each item in the collection should be a type of ",(0,t.jsx)("i",{children:"MeterItem"}),"."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(h,{labelPosition:"start",values:c,start:({totalPercent:e})=>(0,t.jsxs)("div",{className:"flex justify-content-between mt-3 mb-2 relative",children:[(0,t.jsx)("span",{children:"Storage"}),(0,t.jsxs)("span",{style:{width:e+"%"},className:"absolute text-right",children:[e,"%"]}),(0,t.jsx)("span",{className:"font-medium",children:"1TB"})]}),end:o,meter:a,labelList:({values:e})=>(0,t.jsx)("div",{className:"flex flex-wrap gap-3",children:e.map((e,l)=>(0,t.jsx)(M.Card,{className:"flex-1",children:(0,t.jsxs)("div",{className:"flex justify-content-between gap-5",children:[(0,t.jsxs)("div",{className:"flex flex-column gap-1",children:[(0,t.jsx)("span",{className:"text-secondary text-sm",children:e.label}),(0,t.jsxs)("span",{className:"font-bold text-lg",children:[e.value,"%"]})]}),(0,t.jsx)("span",{className:"w-2rem h-2rem border-circle inline-flex justify-content-center align-items-center text-center",style:{backgroundColor:e.color1,color:"#ffffff"},children:(0,t.jsx)("i",{className:e.icon})})]})},l))})})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function E(){return(0,t.jsxs)(r.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["MeterGroup component uses ",(0,t.jsx)("i",{children:"meter"})," role in addition to the ",(0,t.jsx)("i",{children:"aria-valuemin"}),", ",(0,t.jsx)("i",{children:"aria-valuemax"})," and ",(0,t.jsx)("i",{children:"aria-valuenow"})," attributes. Value to describe the component can be defined using ",(0,t.jsx)("i",{children:"aria-labelledby"})," prop."]}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("p",{children:"Component does not include any interactive elements."})]})}e.i(74967),e.i(41158);let C=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"metergroup"})})]});function w(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{id:"style",label:"Style",children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-metergroup"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-metergroup-horizontal"}),(0,t.jsx)("td",{children:"Container element when orientation mode is horizontal."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-metergroup-vertical"}),(0,t.jsx)("td",{children:"Container element when orientation mode is vertical."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-metergroup-meter-container"}),(0,t.jsx)("td",{children:"Container of the meters."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-metergroup-meter"}),(0,t.jsx)("td",{children:"Content of a meter."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-metergroup-label-list"}),(0,t.jsx)("td",{children:"Container element of the list of labels."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-metergroup-label-list-start"}),(0,t.jsx)("td",{children:"Container element when label position is start."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-metergroup-label-list-end"}),(0,t.jsx)("td",{children:"Container element when label position is end."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-metergroup-label-list-horizontal"}),(0,t.jsx)("td",{children:"Container element when label orientation is horizontal."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-metergroup-label-list-vertical"}),(0,t.jsx)("td",{children:"Container element when label orientation is vertical."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-metergroup-label-list-item"}),(0,t.jsx)("td",{children:"Container element of a list item."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-metergroup-label-list-type"}),(0,t.jsx)("td",{children:"Container element of a list type."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-metergroup-label"}),(0,t.jsx)("td",{children:"Content of a label."})]})]})]})})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:C},{id:"pt.metergroup.options",label:"MeterGroup PT Options",component:l.default}];return(0,t.jsx)(a.DocComponent,{title:"React MeterGroup Component",header:"MeterGroup",description:"MeterGroup displays scalar measurements within a known range.",componentDocs:[{id:"import",label:"Import",component:x},{id:"basic",label:"Basic",component:f},{id:"multiple",label:"Multiple",component:v},{id:"icon",label:"Icon",component:b},{id:"label",label:"Label",component:j},{id:"vertical",label:"Vertical",component:g},{id:"min-max",label:"Min-Max",component:y},{id:"template",label:"Template",component:S},{id:"accessibility",label:"Accessibility",component:E}],apiDocs:["MeterGroup"],themingDocs:[{id:"styled",label:"Styled",component:w}],ptDocs:e})}],4361)},15526,(e,t,l)=>{let a="/metergroup";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(4361)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);