(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var a=e.i(91398),r=e.i(91788);e.s(["CodeHighlight",0,function(e){let s=(0,r.useRef)(),t=`language-${e.lang||"jsx"}`;return(0,r.useEffect)(()=>{window.Prism.highlightElement(s.current)},[]),(0,a.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,a.jsxs)("code",{ref:s,className:t,children:[e.children," "]})})}])},74967,e=>{"use strict";e.i(91398),e.i(91788),e.s([])},82948,88850,e=>{"use strict";var a=e.i(91398),r=e.i(3935),s=e.i(58678),t=e.i(3828),i=e.i(91788),l=e.i(51551),c=e.i(72124),o=e.i(41158),n=e.i(87914),p=e.i(28137);let d=e=>{let s=(0,i.useContext)(n.default),{id:c,data:d,name:m,description:g,allowLink:h=!0}=e,f=c.startsWith("pt."),v=(0,t.useRouter)();if(l.ObjectUtils.isNotEmpty(d)){let t=Object.keys(d[0]),n=(e,a)=>{let r=document.getElementById(e);r&&r.parentElement.scrollIntoView({block:"start",behavior:a})},u=(e,s,t)=>{if(h&&e)return e.split("|").map((e,l)=>{if(e.includes(m)){let r=e.indexOf(m),s=e.substring(r).replace(/(\[|\]|<|>).*$/gm,"").trim(),t=m===s?`api.${m}`:`api.${m}.${s===`${m}Props`?"props":s}`;return(0,a.jsxs)(i.default.Fragment,{children:[0!==l?"|":"",(0,a.jsx)(o.default,{href:v.basePath+v.pathname+`#${t}`,target:"_self",children:(0,a.jsx)("a",{onClick:()=>n(t,"smooth"),children:e})})]},l)}return(0,a.jsxs)(i.default.Fragment,{children:[0!==l?"|":"",s?(0,a.jsxs)("span",{id:c+"."+e,className:(0,r.classNames)("doc-option-name",{"line-through cursor-pointer":!!t}),title:t,children:[e,(0,a.jsx)(o.default,{href:v.basePath+v.pathname+`#${c+"."+e}`,target:"_self",children:(0,a.jsx)("a",{onClick:()=>n(c+"."+e),className:"doc-option-link",children:(0,a.jsx)("i",{className:"pi pi-link"})})})]}):e]},l)});let l=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return s?(0,a.jsxs)("span",{id:c+"."+l,className:(0,r.classNames)("doc-option-name",{"line-through cursor-pointer":!!t}),title:t,children:[l,(0,a.jsx)(o.default,{href:v.basePath+v.pathname+`#${c+"."+l}`,target:"_self",children:(0,a.jsx)("a",{onClick:()=>n(c+"."+l),className:"doc-option-link",children:(0,a.jsx)("i",{className:"pi pi-link"})})})]}):l},x=(0,a.jsx)(i.default.Fragment,{children:f?(0,a.jsx)("tr",{children:t.map(e=>(0,a.jsx)("th",{children:e},e))}):(0,a.jsx)("tr",{children:t.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,a.jsx)("th",{children:e},e))})}),j=(0,a.jsx)(i.default.Fragment,{children:d.map((e,t)=>{if(f){let{value:r,label:s,description:i}=e;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:r}),(0,a.jsx)("td",{children:s}),(0,a.jsx)("td",{children:i})]},t)}return(0,a.jsx)("tr",{children:Object.entries(e).map(([t,i],c)=>"readonly"!==t&&"optional"!==t&&"deprecated"!==t&&(0,a.jsx)("td",{children:"parameters"===t?i.map((e,r)=>(0,a.jsxs)("div",{className:"doc-option-params",children:[(0,a.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,a.jsx)("span",{className:"doc-option-parameter-type",children:u(e.type)}),(0,a.jsx)("br",{})]},r)):"default"===t?(0,a.jsx)("div",{className:(0,r.classNames)("doc-option-default",{"doc-option-dark":s.darkMode,"doc-option-light":!s.darkMode}),children:l.ObjectUtils.isEmpty(i)?"null":u(i,"name"===t,e.deprecated)}):"type"===t?(0,a.jsx)("span",{className:"doc-option-type",children:u(i,"name"===t,e.deprecated)}):"returnType"===t?(0,a.jsx)("div",{className:(0,r.classNames)("doc-option-returnType",{"doc-option-dark":s.darkMode,"doc-option-light":!s.darkMode}),children:u(i,"name"===t,e.deprecated)}):"description"===t||"values"===t?(0,a.jsx)("span",{className:"doc-option-description",children:i}):u(i,"name"===t,e.deprecated)},c))},t)})});return(0,a.jsxs)(i.default.Fragment,{children:[(0,a.jsx)(p.DocSectionText,{...e,children:(0,a.jsx)("p",{children:g})}),(0,a.jsx)("div",{className:"doc-tablewrapper",children:(0,a.jsxs)("table",{className:"doc-table",children:[(0,a.jsx)("thead",{children:x}),(0,a.jsx)("tbody",{children:j})]})})]},c)}return null};e.s(["default",0,d],88850);var m=e.i(71864),g=e.i(38076);function h(e){let{doc:r,header:s}=e,t=e.apiExclude,o=r.reduce((e,r)=>{let s,i=r.split("."),o=(s=i[0])&&s[0].toUpperCase()+s.slice(1)||"",n=c.default[o.toLowerCase()],p=(e,a)=>t&&t[e]&&t[e].includes(a),m=e=>t&&t[e]&&"excludeAll"===t[e];if(n){let s=(e,r)=>{if(l.ObjectUtils.isNotEmpty(n.events)&&l.ObjectUtils.isNotEmpty(n.events.values)&&!m("events")){let s={id:`api.${r}.events`,label:"Events",description:n.events.description,children:[]};Object.entries(n.events.values).forEach(([e,t])=>{let[i,l]=[`api.${r}.${e}`,e];p("event",e)||s.children.push({id:i,label:l,component:e=>(0,a.jsx)(d,{name:r,data:t.props,description:(0,a.jsxs)(a.Fragment,{children:[t.description," See ",(0,a.jsx)("i",{children:t.relatedProp}),"."]}),...e})})}),e.push(s)}if(l.ObjectUtils.isNotEmpty(n.interfaces)&&l.ObjectUtils.isNotEmpty(n.interfaces.values)&&!m("interfaces")){let s={id:`api.${r}.interfaces`,label:"Interfaces",description:n.interfaces.description,children:[]};Object.entries(n.interfaces.values).forEach(([e,t])=>{let[i,l]=[`api.${r}.${e}`,e];p("interfaces",e)||s.children.push({id:i,label:l,component:e=>(0,a.jsx)(d,{name:r,data:t.props,description:(0,a.jsxs)(a.Fragment,{children:[t.description," ",t.extendedTypes&&(0,a.jsxs)(a.Fragment,{children:["Extends ",(0,a.jsx)("i",{children:t.extendedTypes}),"."]})]}),...e})})}),e.push(s)}if(l.ObjectUtils.isNotEmpty(n.types)&&l.ObjectUtils.isNotEmpty(n.types.values)&&!m("types")){let s={id:`api.${r}.types`,label:"Types",description:n.types.description,children:[]};Object.entries(n.types.values).forEach(([e,t])=>{let[i,l]=[`api.${r}.${e}`,e];p("types",e)||s.children.push({id:i,label:l,component:e=>(0,a.jsx)(d,{name:r,data:[t],allowLink:!1,...e})})}),e.push(s)}};if(3===i.length){let r=i[1],s=i[2];if("functions"===r){let t=n[r].values[s],i={id:`api.${o}`,label:o,children:[]},[c,p]=[`api.${o}.function`,"Function"],m=Object.entries(t).reduce((e,[a,r])=>("description"!==a&&(e[a]=r),e),{});i.children.push({id:c,label:p,component:e=>(0,a.jsx)(d,{name:o,data:[m],description:t.description,...e})});let g=t.parameters&&t.parameters.map(e=>e.type);if(l.ObjectUtils.isNotEmpty(n.interfaces)&&l.ObjectUtils.isNotEmpty(n.interfaces.values)){let e={id:`api.${o}.interfaces`,label:"Interfaces",description:n.interfaces.description,children:[]};Object.entries(n.interfaces.values).forEach(([r,s])=>{if(g.includes(r)){let[t,i]=[`api.${o}.${r}`,r],c={id:t,label:i,description:(0,a.jsxs)(a.Fragment,{children:[s.description," ",s.extendedTypes&&(0,a.jsxs)(a.Fragment,{children:["Extends ",(0,a.jsx)("i",{children:s.extendedTypes}),"."]})]}),children:[]};l.ObjectUtils.isNotEmpty(s.props)&&c.children.push({id:`${t}.props`,label:"Props",component:e=>(0,a.jsx)(d,{data:s.props,...e})}),l.ObjectUtils.isNotEmpty(s.callbacks)&&c.children.push({id:`${t}.callbacks`,label:"Callbacks",component:e=>(0,a.jsx)(d,{data:s.callbacks,...e})}),e.children.push(c)}}),l.ObjectUtils.isNotEmpty(e.children)&&i.children.push(e)}e.push(i)}}else n.components&&Object.entries(n.components).forEach(([t,i])=>{let c={id:`api.${t}`,label:t,description:i.description,children:[]};if(l.ObjectUtils.isNotEmpty(i.props)&&l.ObjectUtils.isNotEmpty(i.props.values)&&!m("props")){let[e,r]=[`api.${t}.props`,"Props"];if(p("props",t))return;c.children.push({id:e,label:r,component:e=>(0,a.jsx)(d,{name:t,data:i.props.values,description:i.props.description,...e})})}if(l.ObjectUtils.isNotEmpty(i.callbacks)&&l.ObjectUtils.isNotEmpty(i.callbacks.values)&&!m("callbacks")){let[e,r]=[`api.${t}.callbacks`,"Callbacks"];if(p("callbacks",t))return;c.children.push({id:e,label:r,component:e=>(0,a.jsx)(d,{name:t,data:i.callbacks.values,description:i.callbacks.description,...e})})}if(l.ObjectUtils.isNotEmpty(i.methods)&&l.ObjectUtils.isNotEmpty(i.methods.values)&&!m("methods")){let[e,r]=[`api.${t}.methods`,"Methods"];if(p("methods",t))return;c.children.push({id:e,label:r,component:e=>(0,a.jsx)(d,{name:t,data:i.methods.values,description:i.methods.description,...e})})}t.toLocaleLowerCase()===r.toLowerCase()&&s(c.children,t),e.push(c)}),n.model&&Object.entries(n.model).forEach(([t,i])=>{let c={id:`api.${t}`,label:t,description:i.description,children:[]};if(l.ObjectUtils.isNotEmpty(i.props)&&l.ObjectUtils.isNotEmpty(i.props.values)&&!m("props")){let[e,r]=[`api.${t}.props`,"Props"];if(p("props",t))return;c.children.push({id:e,label:r,component:e=>(0,a.jsx)(d,{name:t,data:i.props.values,description:i.props.description,...e})})}t.toLocaleLowerCase()===r.toLowerCase()&&s(c.children,t),e.push(c)}),n.components||n.model||s(e,o)}return e},[]);return(0,i.useEffect)(()=>{let e=window.location.hash.substring(1),a=document.getElementById(e);setTimeout(()=>{a&&a.scrollIntoView({block:"start"})},1)},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"doc-main",children:[(0,a.jsxs)("div",{className:"doc-intro",children:[(0,a.jsxs)("h1",{children:[s," API"]}),(0,a.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",s," module."]})]}),(0,a.jsx)(g.DocSections,{docs:o})]}),(0,a.jsx)(m.DocSectionNav,{docs:o})]})}e.s(["DocComponent",0,function(e){let l,[c,o]=(0,i.useState)(0),n=(0,t.useRouter)();l=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let p=e=>{o(e),n.replace(n.pathname)};return(0,i.useEffect)(()=>{n.asPath.includes("#api")&&o(1),n.asPath.includes("#pt")&&o(3)},[n.asPath]),(0,a.jsxs)("div",{className:(0,r.classNames)(e.className,"doc-component"),children:[(0,a.jsxs)(s.default,{children:[(0,a.jsx)("title",{children:e.title}),(0,a.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,a.jsxs)("ul",{className:"doc-tabmenu",children:[(0,a.jsx)("li",{className:(0,r.classNames)({"doc-tabmenu-active":0===c}),children:(0,a.jsx)("button",{type:"button",onClick:()=>p(0),children:l})}),e.apiDocs?(0,a.jsx)("li",{className:(0,r.classNames)({"doc-tabmenu-active":1===c}),children:(0,a.jsx)("button",{type:"button",onClick:()=>p(1),children:"API"})}):null,e.themingDocs?(0,a.jsx)("li",{className:(0,r.classNames)({"doc-tabmenu-active":2===c}),children:(0,a.jsx)("button",{type:"button",onClick:()=>p(2),children:"THEMING"})}):null,e.ptDocs?(0,a.jsx)("li",{className:(0,r.classNames)({"doc-tabmenu-active":3===c}),children:(0,a.jsx)("button",{type:"button",onClick:()=>p(3),children:"PASS THROUGH"})}):null]}),(0,a.jsxs)("div",{className:"doc-tabpanels",children:[0===c?(0,a.jsxs)("div",{className:"doc-tabpanel",children:[(0,a.jsxs)("div",{className:"doc-main",children:[(0,a.jsxs)("div",{className:"doc-intro",children:[(0,a.jsx)("h1",{children:e.header}),(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,a.jsx)(g.DocSections,{docs:e.componentDocs})]}),(0,a.jsx)(m.DocSectionNav,{docs:e.componentDocs})]}):null,1===c?(0,a.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,a.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"doc-main",children:(0,a.jsxs)("div",{className:"doc-intro",children:[(0,a.jsxs)("h1",{children:[e.header," API"]}),(0,a.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===c?(0,a.jsx)(a.Fragment,{children:e.themingDocs?(0,a.jsxs)("div",{className:"doc-tabpanel",children:[(0,a.jsxs)("div",{className:"doc-main",children:[(0,a.jsx)("div",{className:"doc-intro",children:(0,a.jsxs)("h1",{children:[e.header," Theming"]})}),(0,a.jsx)(g.DocSections,{docs:e.themingDocs})]}),(0,a.jsx)(m.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===c?(0,a.jsx)(a.Fragment,{children:e.ptDocs?(0,a.jsxs)("div",{className:"doc-tabpanel",children:[(0,a.jsxs)("div",{className:"doc-main",children:[(0,a.jsxs)("div",{className:"doc-intro",children:[(0,a.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,a.jsx)("p",{children:e.ptDescription})]}),(0,a.jsx)(g.DocSections,{docs:e.ptDocs})]}),(0,a.jsx)(m.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},10197,e=>{"use strict";var a=e.i(91398),r=e.i(91788),s=e.i(10836),t=e.i(15498),i=e.i(60150),l=e.i(45543),c=e.i(75366),o=e.i(51551),n=e.i(3935);let p=`
@layer primereact {
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
    }
    
    .p-avatar.p-avatar-image {
        background-color: transparent;
    }
    
    .p-avatar.p-avatar-circle {
        border-radius: 50%;
    }
    
    .p-avatar.p-avatar-circle img {
        border-radius: 50%;
    }
    
    .p-avatar .p-avatar-icon {
        font-size: 1rem;
    }
    
    .p-avatar img {
        width: 100%;
        height: 100%;
    }
    
    .p-avatar-clickable {
        cursor: pointer;
    }
}
`,d=t.ComponentBase.extend({defaultProps:{__TYPE:"Avatar",className:null,icon:null,image:null,imageAlt:"avatar",imageFallback:"default",label:null,onImageError:null,shape:"square",size:"normal",style:null,template:null,children:void 0},css:{classes:{root:({props:e,state:a})=>(0,n.classNames)("p-avatar p-component",{"p-avatar-image":o.ObjectUtils.isNotEmpty(e.image)&&!a.imageFailed,"p-avatar-circle":"circle"===e.shape,"p-avatar-lg":"large"===e.size,"p-avatar-xl":"xlarge"===e.size,"p-avatar-clickable":!!e.onClick}),label:"p-avatar-text",icon:"p-avatar-icon"},styles:p}}),m=r.forwardRef((e,p)=>{let m=(0,i.useMergeProps)(),g=r.useContext(s.PrimeReactContext),h=d.getProps(e,g),f=r.useRef(null),[v,u]=r.useState(!1),[x,j]=r.useState(!1),{ptm:b,cx:y,isUnstyled:N}=d.setMetaData({props:h,state:{imageFailed:v,nested:x}});(0,t.useHandleStyle)(d.css.styles,N,{name:"avatar"});let A=e=>{"default"===h.imageFallback?h.onImageError||(u(!0),e.target.src=null):e.target.src=h.imageFallback,h.onImageError&&h.onImageError(e)};r.useEffect(()=>{j(l.DomHandler.isAttributeEquals(f.current.parentElement,"data-pc-name","avatargroup"))},[]),r.useImperativeHandle(p,()=>({props:h,getElement:()=>f.current}));let z=m({ref:f,style:h.style,className:(0,n.classNames)(h.className,y("root",{imageFailed:v}))},d.getOtherProps(h),b("root")),w=h.template?o.ObjectUtils.getJSXElement(h.template,h):(()=>{if(o.ObjectUtils.isNotEmpty(h.image)&&!v){let e=m({src:h.image,onError:A},b("image"));return(0,a.jsx)("img",{alt:h.imageAlt,...e})}if(h.label){let e=m({className:y("label")},b("label"));return(0,a.jsx)("span",{...e,children:h.label})}if(h.icon){let e=m({className:y("icon")},b("icon"));return c.IconUtils.getJSXIcon(h.icon,{...e},{props:h})}return null})();return(0,a.jsxs)("div",{...z,children:[w,h.children]})});m.displayName="Avatar",e.s(["Avatar",0,m],10197)},3828,(e,a,r)=>{a.exports=e.r(26990)},30226,e=>{"use strict";var a=e.i(91398);e.i(74967);var r=e.i(28137);function s(){return(0,a.jsxs)(r.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,a.jsx)("h3",{children:"Screen Reader"}),(0,a.jsxs)("p",{children:["Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like ",(0,a.jsx)("i",{children:"img"})," along with ",(0,a.jsx)("i",{children:"aria-labelledby"})," or ",(0,a.jsx)("i",{children:"aria-label"})," to describe the component. In case avatars need to be tabbable, ",(0,a.jsx)("i",{children:"tabIndex"})," can be added as well to implement custom key handlers."]}),(0,a.jsx)("h4",{children:"Keyboard Support"}),(0,a.jsx)("p",{children:"Component does not include any interactive elements."})]})}var t=e.i(5180),i=e.i(10197),l=e.i(91788),c=e.i(10836),o=e.i(15498),n=e.i(60150),p=e.i(3935);let d=`
@layer primereact {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }
    
    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`,m=o.ComponentBase.extend({defaultProps:{__TYPE:"AvatarGroup",style:null,className:null,children:void 0},css:{classes:{root:"p-avatar-group p-component"},styles:d}}),g=l.forwardRef((e,r)=>{let s=(0,n.useMergeProps)(),t=l.useContext(c.PrimeReactContext),i=m.getProps(e,t),{ptm:d,cx:g,isUnstyled:h}=m.setMetaData({props:i});(0,o.useHandleStyle)(m.css.styles,h,{name:"avatargroup"});let f=l.useRef(null);l.useImperativeHandle(r,()=>({props:i,getElement:()=>f.current}));let v=s({ref:f,style:i.style,className:(0,p.classNames)(i.className,g("root"))},m.getOtherProps(i),d("root"));return(0,a.jsx)("div",{...v,children:i.children})});function h(e){let s={basic:`
<AvatarGroup>
  <Avatar image="/images/avatar/amyelsner.png" size="large" shape="circle" />
  <Avatar image="/images/avatar/asiyajavayant.png" size="large" shape="circle" />
  <Avatar image="/images/avatar/onyamalimba.png" size="large" shape="circle" />
  <Avatar image="/images/avatar/ionibowcher.png" size="large" shape="circle" />
  <Avatar image="/images/avatar/xuxuefeng.png" size="large" shape="circle" />
  <Avatar label="+2" shape="circle" size="large"/>
</AvatarGroup>

        `,javascript:`
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';

export default function GroupDemo() {

    return (
        <div className="card flex justify-content-center">
            <AvatarGroup>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png" size="large" shape="circle" />
                <Avatar label="+2" shape="circle" size="large"/>
            </AvatarGroup>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';

export default function GroupDemo() {

    return (
        <div className="card flex justify-content-center">
            <AvatarGroup>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" size="large" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png" size="large" shape="circle" />
                <Avatar label="+2" shape="circle" size="large"/>
            </AvatarGroup>
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.DocSectionText,{...e,children:(0,a.jsx)("p",{children:"Grouping is available by wrapping multiple Avatar components inside an AvatarGroup."})}),(0,a.jsx)("div",{className:"card flex justify-content-center",children:(0,a.jsxs)(g,{children:[(0,a.jsx)(i.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",size:"large",shape:"circle"}),(0,a.jsx)(i.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png",size:"large",shape:"circle"}),(0,a.jsx)(i.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png",size:"large",shape:"circle"}),(0,a.jsx)(i.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png",size:"large",shape:"circle"}),(0,a.jsx)(i.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png",size:"large",shape:"circle"}),(0,a.jsx)(i.Avatar,{label:"+2",shape:"circle",size:"large"})]})}),(0,a.jsx)(t.DocSectionCode,{code:s})]})}g.displayName="AvatarGroup";var f=e.i(50989);function v(e){let s={basic:`
<Avatar icon="pi pi-user" size="xlarge" />
<Avatar icon="pi pi-user" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
<Avatar icon="pi pi-user" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />

<Avatar icon="pi pi-user" size="xlarge" shape="circle" />
<Avatar icon="pi pi-user" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
<Avatar icon="pi pi-user" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />

<Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge">
    <Badge value="4" />
</Avatar>
        `,javascript:`
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function IconDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <h5>Icon</h5>
                    <Avatar icon="pi pi-user" className="mr-2" size="xlarge" />
                    <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                    <Avatar icon="pi pi-user" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                </div>

                <div className="flex-auto">
                    <h5>Circle</h5>
                    <Avatar icon="pi pi-user" className="mr-2" size="xlarge" shape="circle" />
                    <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                    <Avatar icon="pi pi-user" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
                </div>

                <div className="flex-auto">
                    <h5>Badge</h5>
                    <Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge">
                        <Badge value="4" />
                    </Avatar>
                </div>
            </div>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function IconDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <h5>Icon</h5>
                    <Avatar icon="pi pi-user" className="mr-2" size="xlarge" />
                    <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                    <Avatar icon="pi pi-user" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                </div>

                <div className="flex-auto">
                    <h5>Circle</h5>
                    <Avatar icon="pi pi-user" className="mr-2" size="xlarge" shape="circle" />
                    <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                    <Avatar icon="pi pi-user" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
                </div>

                <div className="flex-auto">
                    <h5>Badge</h5>
                    <Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge">
                        <Badge value="4" />
                    </Avatar>
                </div>
            </div>
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["A font icon is displayed as an Avatar with the ",(0,a.jsx)("i",{children:"icon"})," property."]})}),(0,a.jsx)("div",{className:"card",children:(0,a.jsxs)("div",{className:"flex flex-wrap gap-5",children:[(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("h5",{children:"Icon"}),(0,a.jsx)(i.Avatar,{icon:"pi pi-user",className:"mr-2",size:"xlarge"}),(0,a.jsx)(i.Avatar,{icon:"pi pi-user",className:"mr-2",size:"large",style:{backgroundColor:"#2196F3",color:"#ffffff"}}),(0,a.jsx)(i.Avatar,{icon:"pi pi-user",style:{backgroundColor:"#9c27b0",color:"#ffffff"}})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("h5",{children:"Circle"}),(0,a.jsx)(i.Avatar,{icon:"pi pi-user",className:"mr-2",size:"xlarge",shape:"circle"}),(0,a.jsx)(i.Avatar,{icon:"pi pi-user",className:"mr-2",size:"large",style:{backgroundColor:"#2196F3",color:"#ffffff"},shape:"circle"}),(0,a.jsx)(i.Avatar,{icon:"pi pi-user",style:{backgroundColor:"#9c27b0",color:"#ffffff"},shape:"circle"})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("h5",{children:"Badge"}),(0,a.jsx)(i.Avatar,{className:"p-overlay-badge",icon:"pi pi-user",size:"xlarge",children:(0,a.jsx)(f.Badge,{value:"4"})})]})]})}),(0,a.jsx)(t.DocSectionCode,{code:s})]})}function u(e){let s={basic:`
<Avatar image="/images/avatar/amyelsner.png" size="xlarge" shape="circle" />
<Avatar image="/images/avatar/asiyajavayant.png" size="large" shape="circle" />
<Avatar image="/images/avatar/onyamalimba.png" shape="circle" />

<Avatar className="p-overlay-badge" image="/images/organization/walter.jpg" size="xlarge">
    <Badge value="4" severity="danger" />
</Avatar>

<Avatar image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
        `,javascript:`
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function ImageDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <h5>Image</h5>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                </div>

                <div className="flex-auto">
                    <h5>Badge</h5>
                    <Avatar className="p-overlay-badge" image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge">
                        <Badge value="4" severity="danger" />
                    </Avatar>
                </div>

                <div className="flex-auto">
                    <h5>Gravatar</h5>
                    <Avatar image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                </div>
            </div>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function ImageDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-5">
                <div className="flex-auto">
                    <h5>Image</h5>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                </div>

                <div className="flex-auto">
                    <h5>Badge</h5>
                    <Avatar className="p-overlay-badge" image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge">
                        <Badge value="4" severity="danger" />
                    </Avatar>
                </div>

                <div className="flex-auto">
                    <h5>Gravatar</h5>
                    <Avatar image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                </div>
            </div>
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["Use the ",(0,a.jsx)("i",{children:"image"})," property to display an image as an Avatar."]})}),(0,a.jsx)("div",{className:"card",children:(0,a.jsxs)("div",{className:"flex flex-wrap gap-5",children:[(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("h5",{children:"Image"}),(0,a.jsx)(i.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",className:"mr-2",size:"xlarge",shape:"circle"}),(0,a.jsx)(i.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png",className:"mr-2",size:"large",shape:"circle"}),(0,a.jsx)(i.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png",shape:"circle"})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("h5",{children:"Badge"}),(0,a.jsx)(i.Avatar,{className:"p-overlay-badge",image:"https://primefaces.org/cdn/primereact/images/organization/walter.jpg",size:"xlarge",children:(0,a.jsx)(f.Badge,{value:"4",severity:"danger"})})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("h5",{children:"Gravatar"}),(0,a.jsx)(i.Avatar,{image:"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp",className:"flex align-items-center justify-content-center mr-2",size:"xlarge"})]})]})}),(0,a.jsx)(t.DocSectionCode,{code:s})]})}function x(e){let s={basic:`
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';   //Optional for grouping
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.DocSectionText,{...e}),(0,a.jsx)(t.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function j(e){let s={basic:`
<Avatar label="P" size="xlarge" />
<Avatar label="V" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
<Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />

<Avatar label="P" size="xlarge" shape="circle" />
<Avatar label="V" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
<Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />

<Avatar label="U" size="xlarge" className="p-overlay-badge">
<Badge value="4" />
        `,javascript:`
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function LabelDemo() {
    return (
        <div className="flex flex-wrap gap-5">
            <div className="flex-auto">
                <h5>Label</h5>
                <Avatar label="P" className="mr-2" size="xlarge" />
                <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                <Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
            </div>

            <div className="flex-auto">
                <h5>Circle</h5>
                <Avatar label="P" className="mr-2" size="xlarge" shape="circle" />
                <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                <Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
            </div>

            <div className="flex-auto">
                <h5>Badge</h5>
                <Avatar label="U" size="xlarge" className="p-overlay-badge">
                    <Badge value="4" />
                </Avatar>
            </div>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function LabelDemo() {
    return (
        <div className="flex flex-wrap gap-5">
            <div className="flex-auto">
                <h5>Label</h5>
                <Avatar label="P" className="mr-2" size="xlarge" />
                <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
                <Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
            </div>

            <div className="flex-auto">
                <h5>Circle</h5>
                <Avatar label="P" className="mr-2" size="xlarge" shape="circle" />
                <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                <Avatar label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
            </div>

            <div className="flex-auto">
                <h5>Badge</h5>
                <Avatar label="U" size="xlarge" className="p-overlay-badge">
                    <Badge value="4" />
                </Avatar>
            </div>
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["A letter Avatar is defined with the ",(0,a.jsx)("i",{children:"label"})," property."]})}),(0,a.jsx)("div",{className:"card",children:(0,a.jsxs)("div",{className:"flex flex-wrap gap-5",children:[(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("h5",{children:"Label"}),(0,a.jsx)(i.Avatar,{label:"P",className:"mr-2",size:"xlarge"}),(0,a.jsx)(i.Avatar,{label:"V",className:"mr-2",size:"large",style:{backgroundColor:"#2196F3",color:"#ffffff"}}),(0,a.jsx)(i.Avatar,{label:"U",style:{backgroundColor:"#9c27b0",color:"#ffffff"}})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("h5",{children:"Circle"}),(0,a.jsx)(i.Avatar,{label:"P",className:"mr-2",size:"xlarge",shape:"circle"}),(0,a.jsx)(i.Avatar,{label:"V",className:"mr-2",size:"large",style:{backgroundColor:"#2196F3",color:"#ffffff"},shape:"circle"}),(0,a.jsx)(i.Avatar,{label:"U",style:{backgroundColor:"#9c27b0",color:"#ffffff"},shape:"circle"})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("h5",{children:"Badge"}),(0,a.jsx)(i.Avatar,{label:"U",size:"xlarge",className:"p-overlay-badge",children:(0,a.jsx)(f.Badge,{value:"4"})})]})]})}),(0,a.jsx)(t.DocSectionCode,{code:s})]})}let b=e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.DocSectionText,{...e}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/avatar.jpg",alt:"avatar"})})]});function y(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.DocSectionText,{...e,children:(0,a.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,a.jsx)("div",{className:"doc-tablewrapper",children:(0,a.jsxs)("table",{className:"doc-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Element"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-avatar"}),(0,a.jsx)("td",{children:"Container element."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-avatar-image"}),(0,a.jsx)("td",{children:"Container element in image mode."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-avatar-circle"}),(0,a.jsx)("td",{children:"Container element with a circle shape."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-avatar-text"}),(0,a.jsx)("td",{children:"Text of the Avatar."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-avatar-icon"}),(0,a.jsx)("td",{children:"Icon of the Avatar."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-avatar-lg"}),(0,a.jsx)("td",{children:"Container element with a large size."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-avatar-xl"}),(0,a.jsx)("td",{children:"Container element with an xlarge size."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-avatar-group"}),(0,a.jsx)("td",{children:"Container element of the group element."})]})]})]})})]})}var N=e.i(41158);function A(e){let s={basic:`
const Tailwind = {           
    avatar: {
        root: ({ props, state }) => ({
            className: classNames(
                'flex items-center justify-center',
                'bg-gray-300 dark:bg-gray-800',
                {
                    'rounded-lg': props.shape == 'square',
                    'rounded-full': props.shape == 'circle'
                },
                {
                    'text-base h-8 w-8': props.size == null || props.size == 'normal',
                    'w-12 h-12 text-xl': props.size == 'large',
                    'w-16 h-16 text-2xl': props.size == 'xlarge'
                },
                {
                    '-ml-4 border-2 border-white dark:border-gray-900': state.isNestedInAvatarGroup
                }
            )
        }),
        image: 'h-full w-full'
    },
    avatargroup: {
        root: 'flex items-center'
    }
}
    `},i={javascript:`
import React from 'react'; 
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';

export default function UnstyledDemo() {
    return (
        <>
            <div className="card">
                <div className="flex flex-wrap gap-5">
                    <div className="flex-auto">
                        <h5 className="text-gray-700 dark:text-white/80">Image</h5>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                    </div>

                    <div className="flex-auto">
                        <h5 className="text-gray-700 dark:text-white/80">Badge</h5>
                        <Avatar className="relative" image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge">
                            <Badge className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 origin-top-right m-0" value="4" severity="danger" />
                        </Avatar>
                    </div>

                    <div className="flex-auto">
                        <h5 className="text-gray-700 dark:text-white/80">Gravatar</h5>
                        <Avatar image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} className="flex align-items-center justify-content-center mr-2" size="xlarge" />
                    </div>
                </div>
            </div>

            <div className="card flex justify-content-center">
                <AvatarGroup>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="large" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="large" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" size="large" shape="circle" />
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png" size="large" shape="circle" />
                    <Avatar label="+2" shape="circle" size="large" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} />
                </AvatarGroup>
            </div>
        </>
    )
}
    `};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(r.DocSectionText,{...e,children:[(0,a.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,a.jsx)(N.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,a.jsx)(t.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,a.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,a.jsx)(t.DocSectionCode,{code:i,embedded:!0})]})})}var z=e.i(88850),w=e.i(82948);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:b},{id:"pt.avatar.options",label:"Avatar PT Options",component:z.default},{id:"pt.avatargroup.options",label:"AvatarGroup PT Options",component:z.default}];return(0,a.jsx)(w.DocComponent,{title:"React Avatar Component",header:"Avatar",description:"Avatar represents people using icons, labels and images.",componentDocs:[{id:"import",label:"Import",component:x},{id:"label",label:"Label",component:j},{id:"icon",label:"Icon",component:v},{id:"image",label:"Image",component:u},{id:"group",label:"Group",component:h},{id:"accessibility",label:"Accessibility",component:s}],apiDocs:["Avatar"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:y},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:A}]}]})}],30226)},42991,(e,a,r)=>{let s="/avatar";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(30226)]),a.hot&&a.hot.dispose(function(){window.__NEXT_P.push([s])})}]);