(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),s=e.i(91788);e.s(["CodeHighlight",0,function(e){let i=(0,s.useRef)(),r=`language-${e.lang||"jsx"}`;return(0,s.useEffect)(()=>{window.Prism.highlightElement(i.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:i,className:r,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),s=e.i(3935),i=e.i(58678),r=e.i(3828),a=e.i(91788),n=e.i(51551),c=e.i(72124),l=e.i(41158),d=e.i(87914),o=e.i(28137);let p=e=>{let i=(0,a.useContext)(d.default),{id:c,data:p,name:m,description:u,allowLink:h=!0}=e,x=c.startsWith("pt."),j=(0,r.useRouter)();if(n.ObjectUtils.isNotEmpty(p)){let r=Object.keys(p[0]),d=(e,t)=>{let s=document.getElementById(e);s&&s.parentElement.scrollIntoView({block:"start",behavior:t})},f=(e,i,r)=>{if(h&&e)return e.split("|").map((e,n)=>{if(e.includes(m)){let s=e.indexOf(m),i=e.substring(s).replace(/(\[|\]|<|>).*$/gm,"").trim(),r=m===i?`api.${m}`:`api.${m}.${i===`${m}Props`?"props":i}`;return(0,t.jsxs)(a.default.Fragment,{children:[0!==n?"|":"",(0,t.jsx)(l.default,{href:j.basePath+j.pathname+`#${r}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>d(r,"smooth"),children:e})})]},n)}return(0,t.jsxs)(a.default.Fragment,{children:[0!==n?"|":"",i?(0,t.jsxs)("span",{id:c+"."+e,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!r}),title:r,children:[e,(0,t.jsx)(l.default,{href:j.basePath+j.pathname+`#${c+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>d(c+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},n)});let n=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return i?(0,t.jsxs)("span",{id:c+"."+n,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!r}),title:r,children:[n,(0,t.jsx)(l.default,{href:j.basePath+j.pathname+`#${c+"."+n}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>d(c+"."+n),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):n},b=(0,t.jsx)(a.default.Fragment,{children:x?(0,t.jsx)("tr",{children:r.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:r.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),v=(0,t.jsx)(a.default.Fragment,{children:p.map((e,r)=>{if(x){let{value:s,label:i,description:a}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:s}),(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:a})]},r)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([r,a],c)=>"readonly"!==r&&"optional"!==r&&"deprecated"!==r&&(0,t.jsx)("td",{children:"parameters"===r?a.map((e,s)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:f(e.type)}),(0,t.jsx)("br",{})]},s)):"default"===r?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-default",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:n.ObjectUtils.isEmpty(a)?"null":f(a,"name"===r,e.deprecated)}):"type"===r?(0,t.jsx)("span",{className:"doc-option-type",children:f(a,"name"===r,e.deprecated)}):"returnType"===r?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-returnType",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:f(a,"name"===r,e.deprecated)}):"description"===r||"values"===r?(0,t.jsx)("span",{className:"doc-option-description",children:a}):f(a,"name"===r,e.deprecated)},c))},r)})});return(0,t.jsxs)(a.default.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:u})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:b}),(0,t.jsx)("tbody",{children:v})]})})]},c)}return null};e.s(["default",0,p],88850);var m=e.i(71864),u=e.i(38076);function h(e){let{doc:s,header:i}=e,r=e.apiExclude,l=s.reduce((e,s)=>{let i,a=s.split("."),l=(i=a[0])&&i[0].toUpperCase()+i.slice(1)||"",d=c.default[l.toLowerCase()],o=(e,t)=>r&&r[e]&&r[e].includes(t),m=e=>r&&r[e]&&"excludeAll"===r[e];if(d){let i=(e,s)=>{if(n.ObjectUtils.isNotEmpty(d.events)&&n.ObjectUtils.isNotEmpty(d.events.values)&&!m("events")){let i={id:`api.${s}.events`,label:"Events",description:d.events.description,children:[]};Object.entries(d.events.values).forEach(([e,r])=>{let[a,n]=[`api.${s}.${e}`,e];o("event",e)||i.children.push({id:a,label:n,component:e=>(0,t.jsx)(p,{name:s,data:r.props,description:(0,t.jsxs)(t.Fragment,{children:[r.description," See ",(0,t.jsx)("i",{children:r.relatedProp}),"."]}),...e})})}),e.push(i)}if(n.ObjectUtils.isNotEmpty(d.interfaces)&&n.ObjectUtils.isNotEmpty(d.interfaces.values)&&!m("interfaces")){let i={id:`api.${s}.interfaces`,label:"Interfaces",description:d.interfaces.description,children:[]};Object.entries(d.interfaces.values).forEach(([e,r])=>{let[a,n]=[`api.${s}.${e}`,e];o("interfaces",e)||i.children.push({id:a,label:n,component:e=>(0,t.jsx)(p,{name:s,data:r.props,description:(0,t.jsxs)(t.Fragment,{children:[r.description," ",r.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:r.extendedTypes}),"."]})]}),...e})})}),e.push(i)}if(n.ObjectUtils.isNotEmpty(d.types)&&n.ObjectUtils.isNotEmpty(d.types.values)&&!m("types")){let i={id:`api.${s}.types`,label:"Types",description:d.types.description,children:[]};Object.entries(d.types.values).forEach(([e,r])=>{let[a,n]=[`api.${s}.${e}`,e];o("types",e)||i.children.push({id:a,label:n,component:e=>(0,t.jsx)(p,{name:s,data:[r],allowLink:!1,...e})})}),e.push(i)}};if(3===a.length){let s=a[1],i=a[2];if("functions"===s){let r=d[s].values[i],a={id:`api.${l}`,label:l,children:[]},[c,o]=[`api.${l}.function`,"Function"],m=Object.entries(r).reduce((e,[t,s])=>("description"!==t&&(e[t]=s),e),{});a.children.push({id:c,label:o,component:e=>(0,t.jsx)(p,{name:l,data:[m],description:r.description,...e})});let u=r.parameters&&r.parameters.map(e=>e.type);if(n.ObjectUtils.isNotEmpty(d.interfaces)&&n.ObjectUtils.isNotEmpty(d.interfaces.values)){let e={id:`api.${l}.interfaces`,label:"Interfaces",description:d.interfaces.description,children:[]};Object.entries(d.interfaces.values).forEach(([s,i])=>{if(u.includes(s)){let[r,a]=[`api.${l}.${s}`,s],c={id:r,label:a,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),children:[]};n.ObjectUtils.isNotEmpty(i.props)&&c.children.push({id:`${r}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:i.props,...e})}),n.ObjectUtils.isNotEmpty(i.callbacks)&&c.children.push({id:`${r}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:i.callbacks,...e})}),e.children.push(c)}}),n.ObjectUtils.isNotEmpty(e.children)&&a.children.push(e)}e.push(a)}}else d.components&&Object.entries(d.components).forEach(([r,a])=>{let c={id:`api.${r}`,label:r,description:a.description,children:[]};if(n.ObjectUtils.isNotEmpty(a.props)&&n.ObjectUtils.isNotEmpty(a.props.values)&&!m("props")){let[e,s]=[`api.${r}.props`,"Props"];if(o("props",r))return;c.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:a.props.values,description:a.props.description,...e})})}if(n.ObjectUtils.isNotEmpty(a.callbacks)&&n.ObjectUtils.isNotEmpty(a.callbacks.values)&&!m("callbacks")){let[e,s]=[`api.${r}.callbacks`,"Callbacks"];if(o("callbacks",r))return;c.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:a.callbacks.values,description:a.callbacks.description,...e})})}if(n.ObjectUtils.isNotEmpty(a.methods)&&n.ObjectUtils.isNotEmpty(a.methods.values)&&!m("methods")){let[e,s]=[`api.${r}.methods`,"Methods"];if(o("methods",r))return;c.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:a.methods.values,description:a.methods.description,...e})})}r.toLocaleLowerCase()===s.toLowerCase()&&i(c.children,r),e.push(c)}),d.model&&Object.entries(d.model).forEach(([r,a])=>{let c={id:`api.${r}`,label:r,description:a.description,children:[]};if(n.ObjectUtils.isNotEmpty(a.props)&&n.ObjectUtils.isNotEmpty(a.props.values)&&!m("props")){let[e,s]=[`api.${r}.props`,"Props"];if(o("props",r))return;c.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:a.props.values,description:a.props.description,...e})})}r.toLocaleLowerCase()===s.toLowerCase()&&i(c.children,r),e.push(c)}),d.components||d.model||i(e,l)}return e},[]);return(0,a.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[i," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",i," module."]})]}),(0,t.jsx)(u.DocSections,{docs:l})]}),(0,t.jsx)(m.DocSectionNav,{docs:l})]})}e.s(["DocComponent",0,function(e){let n,[c,l]=(0,a.useState)(0),d=(0,r.useRouter)();n=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let o=e=>{l(e),d.replace(d.pathname)};return(0,a.useEffect)(()=>{d.asPath.includes("#api")&&l(1),d.asPath.includes("#pt")&&l(3)},[d.asPath]),(0,t.jsxs)("div",{className:(0,s.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":0===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>o(0),children:n})}),e.apiDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":1===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>o(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":2===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>o(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":3===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>o(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===c?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(u.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.componentDocs})]}):null,1===c?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===c?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(u.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===c?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(u.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},19982,e=>{"use strict";var t=e.i(91398),s=e.i(91788),i=e.i(10836),r=e.i(15498),a=e.i(60150),n=e.i(51551),c=e.i(3935);let l=`
@layer primereact {
    .p-card-header img {
        width: 100%;
    }
}
`,d=r.ComponentBase.extend({defaultProps:{__TYPE:"Card",id:null,header:null,footer:null,title:null,subTitle:null,style:null,className:null,children:void 0},css:{classes:{root:"p-card p-component",header:"p-card-header",title:"p-card-title",subTitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer",body:"p-card-body"},styles:l}}),o=s.forwardRef((e,l)=>{let o,p,m,u,h,x,j,f,b,v,g=(0,a.useMergeProps)(),y=s.useContext(i.PrimeReactContext),N=d.getProps(e,y),C=s.useRef(l),{ptm:q,cx:T,isUnstyled:w}=d.setMetaData({props:N});(0,r.useHandleStyle)(d.css.styles,w,{name:"card"}),s.useEffect(()=>{n.ObjectUtils.combinedRefs(C,l)},[C,l]);let k=g({id:N.id,ref:C,style:N.style,className:(0,c.classNames)(N.className,T("root"))},d.getOtherProps(N),q("root")),E=(o=g({className:T("header")},q("header")),N.header?(0,t.jsx)("div",{...o,children:n.ObjectUtils.getJSXElement(N.header,N)}):null),S=(p=g({className:T("title")},q("title")),m=N.title&&(0,t.jsx)("div",{...p,children:n.ObjectUtils.getJSXElement(N.title,N)}),u=g({className:T("subTitle")},q("subTitle")),h=N.subTitle&&(0,t.jsx)("div",{...u,children:n.ObjectUtils.getJSXElement(N.subTitle,N)}),x=g({className:T("content")},q("content")),j=N.children&&(0,t.jsx)("div",{...x,children:N.children}),f=g({className:T("footer")},q("footer")),b=N.footer&&(0,t.jsx)("div",{...f,children:n.ObjectUtils.getJSXElement(N.footer,N)}),v=g({className:T("body")},q("body")),(0,t.jsxs)("div",{...v,children:[m,h,j,b]}));return(0,t.jsxs)("div",{...k,children:[E,S]})});o.displayName="Card",e.s(["Card",0,o],19982)},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},3828,(e,t,s)=>{t.exports=e.r(26990)},63283,e=>{"use strict";var t=e.i(91398),s=e.i(5180),i=e.i(28137);function r(){let e={basic:`
<Card role="region">
    Content
</Card>
        `};return(0,t.jsxs)(i.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["A card can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so if you require to use one of the"," ",(0,t.jsx)("a",{href:"https://www.w3.org/TR/wai-aria/#landmark",alt:"Landmark Roles",children:"landmark"})," ","roles like ",(0,t.jsx)("i",{children:"region"}),", you may use the ",(0,t.jsx)("i",{children:"role"})," property."]}),(0,t.jsx)(s.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("p",{children:"Component does not include any interactive elements."})]})}var a=e.i(57724),n=e.i(19982);function c(e){let r=(0,t.jsx)("img",{alt:"Card",src:"https://primefaces.org/cdn/primereact/images/usercard.png"}),c=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Button,{label:"Save",icon:"pi pi-check"}),(0,t.jsx)(a.Button,{label:"Cancel",severity:"secondary",icon:"pi pi-times",style:{marginLeft:"0.5em"}})]}),l={basic:`
<Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
</Card>
        `,javascript:`
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function AdvancedDemo() {
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function AdvancedDemo() {
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title="Advanced Card" subTitle="Card subtitle" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Card content can be customized further with ",(0,t.jsx)("i",{children:"subTitle"}),", ",(0,t.jsx)("i",{children:"header"})," and ",(0,t.jsx)("i",{children:"footer"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(n.Card,{title:"Advanced Card",subTitle:"Card subtitle",footer:c,header:r,className:"md:w-25rem",children:(0,t.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"})})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function l(e){let r={basic:`
<Card title="Simple Card">
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </p>
</Card>
        `,javascript:`
import React from 'react'; 
import { Card } from 'primereact/card';

export default function BasicDemo() {
    return (
        <div className="card">
            <Card title="Simple Card">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Card } from 'primereact/card';

export default function BasicDemo() {
    return (
        <div className="card">
            <Card title="Simple Card">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A simple Card is created with a ",(0,t.jsx)("i",{children:"title"})," property along with the content as children."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(n.Card,{title:"Simple Card",children:(0,t.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"})})}),(0,t.jsx)(s.DocSectionCode,{code:r})]})}function d(e){let r={basic:`
import { Card } from 'primereact/card';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)(s.DocSectionCode,{code:r,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}let o=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/card.jpg",alt:"card"})})]});function p(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-card"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-card-title"}),(0,t.jsx)("td",{children:"Title element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-card-subtitle"}),(0,t.jsx)("td",{children:"Subtitle element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-card-content"}),(0,t.jsx)("td",{children:"Content of the card."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-card-footer"}),(0,t.jsx)("td",{children:"Footer of the card."})]})]})]})})]})}var m=e.i(41158);function u(e){let r={basic:`
const Tailwind = {
    card: {
        root: {
            className: classNames(
                'bg-white text-gray-700 shadow-md rounded-md', // Background, text color, box shadow, and border radius.
                'dark:bg-gray-900 dark:text-white ' //dark
            )
        },
        body: 'p-5', // Padding.
        title: 'text-2xl font-bold mb-2', // Font size, font weight, and margin bottom.
        subtitle: {
            className: classNames(
                'font-normal mb-2 text-gray-600', // Font weight, margin bottom, and text color.
                'dark:text-white/60 ' //dark
            )
        },
        content: 'py-5', // Vertical padding.
        footer: 'pt-5' // Top padding.
    }
}
        `},a={javascript:`
import React from 'react';  
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function UnstyledDemo() {
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" severity="secondary" />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title="Advanced Card" subTitle="Card Subtitle" footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(m.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(s.DocSectionCode,{code:r,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(s.DocSectionCode,{code:a,embedded:!0})]})})}var h=e.i(88850),x=e.i(82948);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:o},{id:"pt.card.options",label:"Card PT Options",component:h.default}];return(0,t.jsx)(x.DocComponent,{title:"React Card Component",header:"Card",description:"Card is a flexible container component.",componentDocs:[{id:"import",label:"Import",component:d},{id:"basic",label:"Basic",component:l},{id:"advanced",label:"Advanced",component:c},{id:"accessibility",label:"Accessibility",component:r}],apiDocs:["Card"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:p},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:u}]}]})}],63283)},84069,(e,t,s)=>{let i="/card";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(63283)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);