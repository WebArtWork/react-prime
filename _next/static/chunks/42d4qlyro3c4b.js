(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var a=e.i(91398),t=e.i(91788);e.s(["CodeHighlight",0,function(e){let n=(0,t.useRef)(),l=`language-${e.lang||"jsx"}`;return(0,t.useEffect)(()=>{window.Prism.highlightElement(n.current)},[]),(0,a.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,a.jsxs)("code",{ref:n,className:l,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var a=e.i(91398),t=e.i(3935),n=e.i(58678),l=e.i(3828),i=e.i(91788),r=e.i(51551),s=e.i(72124),o=e.i(41158),d=e.i(87914),c=e.i(28137);let p=e=>{let n=(0,i.useContext)(d.default),{id:s,data:p,name:m,description:h,allowLink:g=!0}=e,x=s.startsWith("pt."),u=(0,l.useRouter)();if(r.ObjectUtils.isNotEmpty(p)){let l=Object.keys(p[0]),d=(e,a)=>{let t=document.getElementById(e);t&&t.parentElement.scrollIntoView({block:"start",behavior:a})},b=(e,n,l)=>{if(g&&e)return e.split("|").map((e,r)=>{if(e.includes(m)){let t=e.indexOf(m),n=e.substring(t).replace(/(\[|\]|<|>).*$/gm,"").trim(),l=m===n?`api.${m}`:`api.${m}.${n===`${m}Props`?"props":n}`;return(0,a.jsxs)(i.default.Fragment,{children:[0!==r?"|":"",(0,a.jsx)(o.default,{href:u.basePath+u.pathname+`#${l}`,target:"_self",children:(0,a.jsx)("a",{onClick:()=>d(l,"smooth"),children:e})})]},r)}return(0,a.jsxs)(i.default.Fragment,{children:[0!==r?"|":"",n?(0,a.jsxs)("span",{id:s+"."+e,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!l}),title:l,children:[e,(0,a.jsx)(o.default,{href:u.basePath+u.pathname+`#${s+"."+e}`,target:"_self",children:(0,a.jsx)("a",{onClick:()=>d(s+"."+e),className:"doc-option-link",children:(0,a.jsx)("i",{className:"pi pi-link"})})})]}):e]},r)});let r=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return n?(0,a.jsxs)("span",{id:s+"."+r,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!l}),title:l,children:[r,(0,a.jsx)(o.default,{href:u.basePath+u.pathname+`#${s+"."+r}`,target:"_self",children:(0,a.jsx)("a",{onClick:()=>d(s+"."+r),className:"doc-option-link",children:(0,a.jsx)("i",{className:"pi pi-link"})})})]}):r},f=(0,a.jsx)(i.default.Fragment,{children:x?(0,a.jsx)("tr",{children:l.map(e=>(0,a.jsx)("th",{children:e},e))}):(0,a.jsx)("tr",{children:l.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,a.jsx)("th",{children:e},e))})}),j=(0,a.jsx)(i.default.Fragment,{children:p.map((e,l)=>{if(x){let{value:t,label:n,description:i}=e;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:t}),(0,a.jsx)("td",{children:n}),(0,a.jsx)("td",{children:i})]},l)}return(0,a.jsx)("tr",{children:Object.entries(e).map(([l,i],s)=>"readonly"!==l&&"optional"!==l&&"deprecated"!==l&&(0,a.jsx)("td",{children:"parameters"===l?i.map((e,t)=>(0,a.jsxs)("div",{className:"doc-option-params",children:[(0,a.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,a.jsx)("span",{className:"doc-option-parameter-type",children:b(e.type)}),(0,a.jsx)("br",{})]},t)):"default"===l?(0,a.jsx)("div",{className:(0,t.classNames)("doc-option-default",{"doc-option-dark":n.darkMode,"doc-option-light":!n.darkMode}),children:r.ObjectUtils.isEmpty(i)?"null":b(i,"name"===l,e.deprecated)}):"type"===l?(0,a.jsx)("span",{className:"doc-option-type",children:b(i,"name"===l,e.deprecated)}):"returnType"===l?(0,a.jsx)("div",{className:(0,t.classNames)("doc-option-returnType",{"doc-option-dark":n.darkMode,"doc-option-light":!n.darkMode}),children:b(i,"name"===l,e.deprecated)}):"description"===l||"values"===l?(0,a.jsx)("span",{className:"doc-option-description",children:i}):b(i,"name"===l,e.deprecated)},s))},l)})});return(0,a.jsxs)(i.default.Fragment,{children:[(0,a.jsx)(c.DocSectionText,{...e,children:(0,a.jsx)("p",{children:h})}),(0,a.jsx)("div",{className:"doc-tablewrapper",children:(0,a.jsxs)("table",{className:"doc-table",children:[(0,a.jsx)("thead",{children:f}),(0,a.jsx)("tbody",{children:j})]})})]},s)}return null};e.s(["default",0,p],88850);var m=e.i(71864),h=e.i(38076);function g(e){let{doc:t,header:n}=e,l=e.apiExclude,o=t.reduce((e,t)=>{let n,i=t.split("."),o=(n=i[0])&&n[0].toUpperCase()+n.slice(1)||"",d=s.default[o.toLowerCase()],c=(e,a)=>l&&l[e]&&l[e].includes(a),m=e=>l&&l[e]&&"excludeAll"===l[e];if(d){let n=(e,t)=>{if(r.ObjectUtils.isNotEmpty(d.events)&&r.ObjectUtils.isNotEmpty(d.events.values)&&!m("events")){let n={id:`api.${t}.events`,label:"Events",description:d.events.description,children:[]};Object.entries(d.events.values).forEach(([e,l])=>{let[i,r]=[`api.${t}.${e}`,e];c("event",e)||n.children.push({id:i,label:r,component:e=>(0,a.jsx)(p,{name:t,data:l.props,description:(0,a.jsxs)(a.Fragment,{children:[l.description," See ",(0,a.jsx)("i",{children:l.relatedProp}),"."]}),...e})})}),e.push(n)}if(r.ObjectUtils.isNotEmpty(d.interfaces)&&r.ObjectUtils.isNotEmpty(d.interfaces.values)&&!m("interfaces")){let n={id:`api.${t}.interfaces`,label:"Interfaces",description:d.interfaces.description,children:[]};Object.entries(d.interfaces.values).forEach(([e,l])=>{let[i,r]=[`api.${t}.${e}`,e];c("interfaces",e)||n.children.push({id:i,label:r,component:e=>(0,a.jsx)(p,{name:t,data:l.props,description:(0,a.jsxs)(a.Fragment,{children:[l.description," ",l.extendedTypes&&(0,a.jsxs)(a.Fragment,{children:["Extends ",(0,a.jsx)("i",{children:l.extendedTypes}),"."]})]}),...e})})}),e.push(n)}if(r.ObjectUtils.isNotEmpty(d.types)&&r.ObjectUtils.isNotEmpty(d.types.values)&&!m("types")){let n={id:`api.${t}.types`,label:"Types",description:d.types.description,children:[]};Object.entries(d.types.values).forEach(([e,l])=>{let[i,r]=[`api.${t}.${e}`,e];c("types",e)||n.children.push({id:i,label:r,component:e=>(0,a.jsx)(p,{name:t,data:[l],allowLink:!1,...e})})}),e.push(n)}};if(3===i.length){let t=i[1],n=i[2];if("functions"===t){let l=d[t].values[n],i={id:`api.${o}`,label:o,children:[]},[s,c]=[`api.${o}.function`,"Function"],m=Object.entries(l).reduce((e,[a,t])=>("description"!==a&&(e[a]=t),e),{});i.children.push({id:s,label:c,component:e=>(0,a.jsx)(p,{name:o,data:[m],description:l.description,...e})});let h=l.parameters&&l.parameters.map(e=>e.type);if(r.ObjectUtils.isNotEmpty(d.interfaces)&&r.ObjectUtils.isNotEmpty(d.interfaces.values)){let e={id:`api.${o}.interfaces`,label:"Interfaces",description:d.interfaces.description,children:[]};Object.entries(d.interfaces.values).forEach(([t,n])=>{if(h.includes(t)){let[l,i]=[`api.${o}.${t}`,t],s={id:l,label:i,description:(0,a.jsxs)(a.Fragment,{children:[n.description," ",n.extendedTypes&&(0,a.jsxs)(a.Fragment,{children:["Extends ",(0,a.jsx)("i",{children:n.extendedTypes}),"."]})]}),children:[]};r.ObjectUtils.isNotEmpty(n.props)&&s.children.push({id:`${l}.props`,label:"Props",component:e=>(0,a.jsx)(p,{data:n.props,...e})}),r.ObjectUtils.isNotEmpty(n.callbacks)&&s.children.push({id:`${l}.callbacks`,label:"Callbacks",component:e=>(0,a.jsx)(p,{data:n.callbacks,...e})}),e.children.push(s)}}),r.ObjectUtils.isNotEmpty(e.children)&&i.children.push(e)}e.push(i)}}else d.components&&Object.entries(d.components).forEach(([l,i])=>{let s={id:`api.${l}`,label:l,description:i.description,children:[]};if(r.ObjectUtils.isNotEmpty(i.props)&&r.ObjectUtils.isNotEmpty(i.props.values)&&!m("props")){let[e,t]=[`api.${l}.props`,"Props"];if(c("props",l))return;s.children.push({id:e,label:t,component:e=>(0,a.jsx)(p,{name:l,data:i.props.values,description:i.props.description,...e})})}if(r.ObjectUtils.isNotEmpty(i.callbacks)&&r.ObjectUtils.isNotEmpty(i.callbacks.values)&&!m("callbacks")){let[e,t]=[`api.${l}.callbacks`,"Callbacks"];if(c("callbacks",l))return;s.children.push({id:e,label:t,component:e=>(0,a.jsx)(p,{name:l,data:i.callbacks.values,description:i.callbacks.description,...e})})}if(r.ObjectUtils.isNotEmpty(i.methods)&&r.ObjectUtils.isNotEmpty(i.methods.values)&&!m("methods")){let[e,t]=[`api.${l}.methods`,"Methods"];if(c("methods",l))return;s.children.push({id:e,label:t,component:e=>(0,a.jsx)(p,{name:l,data:i.methods.values,description:i.methods.description,...e})})}l.toLocaleLowerCase()===t.toLowerCase()&&n(s.children,l),e.push(s)}),d.model&&Object.entries(d.model).forEach(([l,i])=>{let s={id:`api.${l}`,label:l,description:i.description,children:[]};if(r.ObjectUtils.isNotEmpty(i.props)&&r.ObjectUtils.isNotEmpty(i.props.values)&&!m("props")){let[e,t]=[`api.${l}.props`,"Props"];if(c("props",l))return;s.children.push({id:e,label:t,component:e=>(0,a.jsx)(p,{name:l,data:i.props.values,description:i.props.description,...e})})}l.toLocaleLowerCase()===t.toLowerCase()&&n(s.children,l),e.push(s)}),d.components||d.model||n(e,o)}return e},[]);return(0,i.useEffect)(()=>{let e=window.location.hash.substring(1),a=document.getElementById(e);setTimeout(()=>{a&&a.scrollIntoView({block:"start"})},1)},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"doc-main",children:[(0,a.jsxs)("div",{className:"doc-intro",children:[(0,a.jsxs)("h1",{children:[n," API"]}),(0,a.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",n," module."]})]}),(0,a.jsx)(h.DocSections,{docs:o})]}),(0,a.jsx)(m.DocSectionNav,{docs:o})]})}e.s(["DocComponent",0,function(e){let r,[s,o]=(0,i.useState)(0),d=(0,l.useRouter)();r=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let c=e=>{o(e),d.replace(d.pathname)};return(0,i.useEffect)(()=>{d.asPath.includes("#api")&&o(1),d.asPath.includes("#pt")&&o(3)},[d.asPath]),(0,a.jsxs)("div",{className:(0,t.classNames)(e.className,"doc-component"),children:[(0,a.jsxs)(n.default,{children:[(0,a.jsx)("title",{children:e.title}),(0,a.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,a.jsxs)("ul",{className:"doc-tabmenu",children:[(0,a.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":0===s}),children:(0,a.jsx)("button",{type:"button",onClick:()=>c(0),children:r})}),e.apiDocs?(0,a.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":1===s}),children:(0,a.jsx)("button",{type:"button",onClick:()=>c(1),children:"API"})}):null,e.themingDocs?(0,a.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":2===s}),children:(0,a.jsx)("button",{type:"button",onClick:()=>c(2),children:"THEMING"})}):null,e.ptDocs?(0,a.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":3===s}),children:(0,a.jsx)("button",{type:"button",onClick:()=>c(3),children:"PASS THROUGH"})}):null]}),(0,a.jsxs)("div",{className:"doc-tabpanels",children:[0===s?(0,a.jsxs)("div",{className:"doc-tabpanel",children:[(0,a.jsxs)("div",{className:"doc-main",children:[(0,a.jsxs)("div",{className:"doc-intro",children:[(0,a.jsx)("h1",{children:e.header}),(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,a.jsx)(h.DocSections,{docs:e.componentDocs})]}),(0,a.jsx)(m.DocSectionNav,{docs:e.componentDocs})]}):null,1===s?(0,a.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,a.jsx)(g,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"doc-main",children:(0,a.jsxs)("div",{className:"doc-intro",children:[(0,a.jsxs)("h1",{children:[e.header," API"]}),(0,a.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===s?(0,a.jsx)(a.Fragment,{children:e.themingDocs?(0,a.jsxs)("div",{className:"doc-tabpanel",children:[(0,a.jsxs)("div",{className:"doc-main",children:[(0,a.jsx)("div",{className:"doc-intro",children:(0,a.jsxs)("h1",{children:[e.header," Theming"]})}),(0,a.jsx)(h.DocSections,{docs:e.themingDocs})]}),(0,a.jsx)(m.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===s?(0,a.jsx)(a.Fragment,{children:e.ptDocs?(0,a.jsxs)("div",{className:"doc-tabpanel",children:[(0,a.jsxs)("div",{className:"doc-main",children:[(0,a.jsxs)("div",{className:"doc-intro",children:[(0,a.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,a.jsx)("p",{children:e.ptDescription})]}),(0,a.jsx)(h.DocSections,{docs:e.ptDocs})]}),(0,a.jsx)(m.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},48214,e=>{"use strict";var a=e.i(91398),t=e.i(91788),n=e.i(85850);let l=t.memo(t.forwardRef((e,t)=>{let l=n.IconBase.getPTI(e);return(0,a.jsx)("svg",{ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,a.jsx)("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"})})}));l.displayName="ChevronDownIcon",e.s(["ChevronDownIcon",0,l])},17720,e=>{"use strict";var a=e.i(91398),t=e.i(91788),n=e.i(85850);let l=t.memo(t.forwardRef((e,t)=>{let l=n.IconBase.getPTI(e);return(0,a.jsx)("svg",{ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,a.jsx)("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"})})}));l.displayName="ChevronUpIcon",e.s(["ChevronUpIcon",0,l])},3828,(e,a,t)=>{a.exports=e.r(26990)},62286,e=>{"use strict";var a=e.i(91398),t=e.i(88850),n=e.i(82948),l=e.i(28137);function i(){return(0,a.jsxs)(l.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,a.jsx)("h3",{children:"Screen Reader"}),(0,a.jsx)("p",{children:"Component currently uses a table based implementation and does not provide high level of screen reader support, a nested list implementation replacement is planned with aria roles and attributes aligned to a tree widget for high level of reader support in the upcoming versions."}),(0,a.jsx)("h3",{children:"Keyboard Support"}),(0,a.jsx)("div",{className:"doc-tablewrapper",children:(0,a.jsxs)("table",{className:"doc-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Key"}),(0,a.jsx)("th",{children:"Function"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("i",{children:"tab"})}),(0,a.jsx)("td",{children:"Moves focus through the focusable elements within the chart."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("i",{children:"enter"})}),(0,a.jsx)("td",{children:"Toggles the expanded state of a node."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("i",{children:"space"})}),(0,a.jsx)("td",{children:"Toggles the expanded state of a node."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("i",{children:"numpad enter"})}),(0,a.jsx)("td",{children:"Toggles the expanded state of a node."})]})]})]})})]})}var r=e.i(5180),s=e.i(91788),o=e.i(10836),d=e.i(15498),c=e.i(60150),p=e.i(3935),m=e.i(45543);let h=`
@layer primereact {
    .p-organizationchart-table {
        border-spacing: 0;
        border-collapse: separate;
        margin: 0 auto;
    }
    
    .p-organizationchart-table > tbody > tr > td {
        text-align: center;
        vertical-align: top;
        padding: 0 .75rem;
    }
    
    .p-organizationchart-node-content {
        display: inline-block;
        position: relative;
    }
    
    .p-organizationchart-node-content .p-node-toggler {
        position: absolute;
        bottom: -.75rem;
        margin-left: -.75rem;
        z-index: 2;
        left: 50%;
        user-select: none;
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;
        text-decoration: none;
    }
    
    .p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon {
        position: relative;
        top: .25rem;
    }
    
    .p-organizationchart-line-down {
        margin: 0 auto;
        height: 20px;
        width: 1px;
    }
    
    .p-organizationchart-line-right {
        border-radius: 0px;
    }
    
     .p-organizationchart-line-left {
        border-radius: 0;
    }
    
    .p-organizationchart-selectable-node {
        cursor: pointer;
    }
}
`,g=d.ComponentBase.extend({defaultProps:{__TYPE:"OrganizationChart",id:null,value:null,style:null,className:null,selectionMode:null,selection:null,nodeTemplate:null,onSelectionChange:null,onNodeSelect:null,onNodeUnselect:null,togglerIcon:null,children:void 0},css:{classes:{root:"p-organizationchart p-component",table:"p-organizationchart-table",node:({nodeProps:e,node:a,selected:t})=>(0,p.classNames)("p-organizationchart-node-content",{"p-organizationchart-selectable-node":e.selectionMode&&!1!==a.selectable,"p-highlight":t},a.className),nodes:"p-organizationchart-nodes",lines:"p-organizationchart-lines",lineLeft:({index:e})=>(0,p.classNames)("p-organizationchart-line-left",{"p-organizationchart-line-top":0!==e}),lineRight:({index:e,nodeChildLength:a})=>(0,p.classNames)("p-organizationchart-line-right",{"p-organizationchart-line-top":e!==a-1}),lineDown:"p-organizationchart-line-down",nodeTogglerIcon:"p-node-toggler-icon",nodeToggler:"p-node-toggler"},styles:h}});var x=e.i(48214),u=e.i(17720),b=e.i(75366),f=e.i(51551);let j=(e,a)=>{let t=[];for(let n=0;n<e.length;n+=a)t.push(e.slice(n,n+a));return t},v=s.memo(e=>{let t,n,l,i,r,o,d=(0,c.useMergeProps)(),p=e.node,[m,h]=s.useState(p.expanded),g=!1!==p.leaf&&!(p.children&&p.children.length),N=e.isSelected(p),y=!g&&m?"inherit":"hidden",{ptm:C,cx:w,sx:T}=e,S=(a,t)=>C(a,{hostName:e.hostName,...t}),O=a=>S(a,{state:{expanded:m},context:{selected:e.isSelected(p)}}),z=(e,a)=>S(a,{context:{lineTop:e}}),D=(e,a)=>{h(e=>!e),e.preventDefault()},E=(t=e.nodeTemplate&&f.ObjectUtils.getJSXElement(e.nodeTemplate,p)||p.label,n=(0,a.jsx)("div",{children:t}),l=(()=>{if(!g){let t,n=d({className:w("nodeTogglerIcon")},S("nodeTogglerIcon"));t=m?e.togglerIcon||(0,a.jsx)(x.ChevronDownIcon,{...n}):e.togglerIcon||(0,a.jsx)(u.ChevronUpIcon,{...n});let l=b.IconUtils.getJSXIcon(t,{...n},{props:e}),i=d({className:w("nodeToggler"),tabIndex:0,onKeyDown:e=>{("Enter"===e.code||"NumpadEnter"===e.code||"Space"===e.code)&&(D(e,p),e.preventDefault())},onClick:e=>D(e,p),href:"#"},O("nodeToggler"));return(0,a.jsx)("a",{...i,children:(0,a.jsxs)("i",{children:[" ",l," "]})})}return null})(),i=d({colSpan:p.children&&p.children.length?2*Math.min(p.children.length,10):2},S("cell")),r=d({className:w("node",{selected:N,node:p,nodeProps:e}),style:p.style,onClick:a=>{e.onNodeClick(a,p)}},O("node")),o=d(S("row")),(0,a.jsx)("tr",{...o,children:(0,a.jsx)("td",{...i,children:(0,a.jsxs)("div",{...r,children:[n,l]})})})),k=d({className:w("table")},S("table"));return(0,a.jsx)("table",{...k,children:(0,a.jsxs)("tbody",{children:[E,p.children&&!1!==p.expanded?j(p.children,10).map((t,n)=>(0,a.jsxs)(s.Fragment,{children:[p.children&&!1!==p.expanded?j(p.children,10).map((e,t)=>{let n=2*e.length,l=d({className:w("lines"),style:{visibility:y}},S("lines")),i=d({colSpan:n},S("lineCell")),r=d({className:w("lineDown")},S("lineDown"));return(0,s.createElement)("tr",{...l,key:t},(0,a.jsx)("td",{...i,children:(0,a.jsx)("div",{...r})}))}):null,p.children&&!1!==p.expanded?j(p.children,10).map((e,t)=>{let n=e.length,l=d({className:w("lines"),style:{visibility:y}},S("lines"));return(0,s.createElement)("tr",{...l,key:t},e.map((e,t)=>{let l=d({className:w("lineLeft",{index:t})},z(0!==t,"lineLeft")),i=d({className:w("lineRight",{index:t,nodeChildLength:n})},z(t!==n-1,"lineRight"));return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)("td",{...l,children:" "}),(0,a.jsx)("td",{...i,children:" "})]},t)}))}):null,p.children&&!1!==p.expanded?j(p.children,10).map((t,n)=>{t.length;let l=d({className:w("nodes"),style:{visibility:y}},S("nodes")),i=d({colSpan:"2"},S("nodeCell"));return(0,s.createElement)("tr",{...l,key:n},t.map((t,n)=>(0,a.jsx)("td",{...i,children:(0,a.jsx)(v,{node:t,nodeTemplate:e.nodeTemplate,selectionMode:e.selectionMode,onNodeClick:e.onNodeClick,isSelected:e.isSelected,togglerIcon:e.togglerIcon,ptm:C,cx:w,sx:T})},n)))}):null]},n)):null]})})});v.displayName="OrganizationChartNode";let N=s.memo(s.forwardRef((e,t)=>{let n=(0,c.useMergeProps)(),l=s.useContext(o.PrimeReactContext),i=g.getProps(e,l),{ptm:r,cx:h,sx:x,isUnstyled:u}=g.setMetaData({props:i});(0,d.useHandleStyle)(g.css.styles,u,{name:"orgchart"});let b=s.useRef(null),f=i.value&&i.value.length?i.value[0]:null,j=e=>{if(i.selectionMode&&i.selection){if("single"===i.selectionMode)return i.selection===e?0:-1;else if("multiple"===i.selectionMode)return i.selection.findIndex(a=>a===e)}return -1};s.useImperativeHandle(t,()=>({props:i,getElement:()=>b.current}));let N=n({id:i.id,ref:b,style:i.style,className:(0,p.classNames)(i.className,h("root"))},g.getOtherProps(i),r("root"));return(0,a.jsx)("div",{...N,children:(0,a.jsx)(v,{hostName:"OrganizationChart",node:f,nodeTemplate:i.nodeTemplate,selectionMode:i.selectionMode,onNodeClick:(e,a)=>{if(i.selectionMode){let t,n=e.target;if(!1===a.selectable||m.DomHandler.hasClass(n,"p-node-toggler")||m.DomHandler.hasClass(n,"p-node-toggler-icon"))return;let l=j(a),r=l>=0;"single"===i.selectionMode?r?(t=null,i.onNodeUnselect&&i.onNodeUnselect({originalEvent:e,node:a})):(t=a,i.onNodeSelect&&i.onNodeSelect({originalEvent:e,node:a})):"multiple"===i.selectionMode&&(r?(t=i.selection.filter((e,a)=>a!==l),i.onNodeUnselect&&i.onNodeUnselect({originalEvent:e,node:a})):(t=[...i.selection||[],a],i.onNodeSelect&&i.onNodeSelect({originalEvent:e,node:a}))),i.onSelectionChange&&i.onSelectionChange({originalEvent:e,data:t})}},isSelected:e=>-1!==j(e),togglerIcon:i.togglerIcon,ptm:r,cx:h,sx:x})})}));function y(e){let[t]=(0,s.useState)([{label:"Argentina",expanded:!0,children:[{label:"Argentina",expanded:!0,children:[{label:"Argentina"},{label:"Croatia"}]},{label:"France",expanded:!0,children:[{label:"France"},{label:"Morocco"}]}]}]),n={basic:`
<OrganizationChart value={data} />
        `,javascript:`
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function BasicDoc() {
    const [data] = useState([
        {
            label: 'Argentina',
            expanded: true,
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    children: [
                        {
                            label: 'Argentina'
                        },
                        {
                            label: 'Croatia'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    children: [
                        {
                            label: 'France'
                        },
                        {
                            label: 'Morocco'
                        }
                    ]
                }
            ]
        }
    ]);

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart value={data} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { TreeNode } from 'primereact/treenode';

export default function BasicDoc() {
    const [data] = useState<TreeNode[]>([
        {
            label: 'Argentina',
            expanded: true,
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    children: [
                        {
                            label: 'Argentina'
                        },
                        {
                            label: 'Croatia'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    children: [
                        {
                            label: 'France'
                        },
                        {
                            label: 'Morocco'
                        }
                    ]
                }
            ]
        }
    ]);

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart value={data} />
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["OrganizationChart requires a collection of ",(0,a.jsx)("i",{children:"TreeNode"})," instances as a ",(0,a.jsx)("i",{children:"value"}),"."]})}),(0,a.jsx)("div",{className:"card overflow-x-auto",children:(0,a.jsx)(N,{value:t})}),(0,a.jsx)(r.DocSectionCode,{code:n})]})}function C(e){let[t]=(0,s.useState)([{expanded:!0,type:"person",className:"bg-indigo-500 text-white",style:{borderRadius:"12px"},data:{image:"https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",name:"Amy Elsner",title:"CEO"},children:[{expanded:!0,type:"person",className:"bg-purple-500 text-white",style:{borderRadius:"12px"},data:{image:"https://primefaces.org/cdn/primereact/images/avatar/annafali.png",name:"Anna Fali",title:"CMO"},children:[{label:"Sales",className:"bg-purple-500 text-white",style:{borderRadius:"12px"}},{label:"Marketing",className:"bg-purple-500 text-white",style:{borderRadius:"12px"}}]},{expanded:!0,type:"person",className:"bg-teal-500 text-white",style:{borderRadius:"12px"},data:{image:"https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",name:"Stephen Shaw",title:"CTO"},children:[{label:"Development",className:"bg-teal-500 text-white",style:{borderRadius:"12px"}},{label:"UI/UX Design",className:"bg-teal-500 text-white",style:{borderRadius:"12px"}}]}]}]),n={basic:`
<OrganizationChart value={data} nodeTemplate={nodeTemplate} />
        `,javascript:`
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function ColoredDemo() {
    const [data] = useState([
        {
            expanded: true,
            type: 'person',
            className: 'bg-indigo-500 text-white',
            style: { borderRadius: '12px' },
            data: {
                image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    className: 'bg-purple-500 text-white',
                    style: { borderRadius: '12px' },
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO'
                    },
                    children: [
                        {
                            label: 'Sales',
                            className: 'bg-purple-500 text-white',
                            style: { borderRadius: '12px' }
                        },
                        {
                            label: 'Marketing',
                            className: 'bg-purple-500 text-white',
                            style: { borderRadius: '12px' }
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    className: 'bg-teal-500 text-white',
                    style: { borderRadius: '12px' },
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                    children: [
                        {
                            label: 'Development',
                            className: 'bg-teal-500 text-white',
                            style: { borderRadius: '12px' }
                        },
                        {
                            label: 'UI/UX Design',
                            className: 'bg-teal-500 text-white',
                            style: { borderRadius: '12px' }
                        }
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-column">
                    <div className="flex flex-column align-items-center">
                        <img alt={node.data.name} src={node.data.image} className="mb-3 w-3rem h-3rem" />
                        <span className="font-bold mb-2">{node.data.name}</span>
                        <span>{node.data.title}</span>
                    </div>
                </div>
            );
        }

        return node.label;
    };

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { TreeNode } from 'primereact/treenode';

export default function ColoredDemo() {
    const [data] = useState<TreeNode[]>([
        {
            expanded: true,
            type: 'person',
            className: 'bg-indigo-500 text-white',
            style: { borderRadius: '12px' },
            data: {
                image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    className: 'bg-purple-500 text-white',
                    style: { borderRadius: '12px' },
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO'
                    },
                    children: [
                        {
                            label: 'Sales',
                            className: 'bg-purple-500 text-white',
                            style: { borderRadius: '12px' }
                        },
                        {
                            label: 'Marketing',
                            className: 'bg-purple-500 text-white',
                            style: { borderRadius: '12px' }
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    className: 'bg-teal-500 text-white',
                    style: { borderRadius: '12px' },
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                    children: [
                        {
                            label: 'Development',
                            className: 'bg-teal-500 text-white',
                            style: { borderRadius: '12px' }
                        },
                        {
                            label: 'UI/UX Design',
                            className: 'bg-teal-500 text-white',
                            style: { borderRadius: '12px' }
                        }
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node: TreeNode) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-column">
                    <div className="flex flex-column align-items-center">
                        <img alt={node.data.name} src={node.data.image} className="mb-3 w-3rem h-3rem" />
                        <span className="font-bold mb-2">{node.data.name}</span>
                        <span>{node.data.title}</span>
                    </div>
                </div>
            );
        }

        return node.label;
    };

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["Styling a specific node is configured with ",(0,a.jsx)("i",{children:"className"})," and ",(0,a.jsx)("i",{children:"style"})," options of a TreeNode."]})}),(0,a.jsx)("div",{className:"card overflow-x-auto",children:(0,a.jsx)(N,{value:t,nodeTemplate:e=>"person"===e.type?(0,a.jsx)("div",{className:"flex flex-column",children:(0,a.jsxs)("div",{className:"flex flex-column align-items-center",children:[(0,a.jsx)("img",{alt:e.data.name,src:e.data.image,className:"mb-3 w-3rem h-3rem"}),(0,a.jsx)("span",{className:"font-bold mb-2",children:e.data.name}),(0,a.jsx)("span",{children:e.data.title})]})}):e.label})}),(0,a.jsx)(r.DocSectionCode,{code:n})]})}function w(e){let t={basic:`
import { OrganizationChart } from 'primereact/organizationchart';
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.DocSectionText,{...e}),(0,a.jsx)(r.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}N.displayName="OrganizationChart";let T=e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.DocSectionText,{...e}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/organizationchart.jpg",alt:"organizationchart"})})]});function S(e){let[t,n]=(0,s.useState)([]),[i]=(0,s.useState)([{expanded:!0,type:"person",data:{image:"https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",name:"Amy Elsner",title:"CEO"},children:[{expanded:!0,type:"person",data:{image:"https://primefaces.org/cdn/primereact/images/avatar/annafali.png",name:"Anna Fali",title:"CMO"},children:[{label:"Sales"},{label:"Marketing"}]},{expanded:!0,type:"person",data:{image:"https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png",name:"Stephen Shaw",title:"CTO"},children:[{label:"Development"},{label:"UI/UX Design"}]}]}]),o={basic:`
<OrganizationChart value={data} selectionMode="multiple" selection={selection} onSelectionChange={(e) => setSelection(e.data)} nodeTemplate={nodeTemplate} />
        `,javascript:`
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function SelectionDemo() {
    const [selection, setSelection] = useState([]);
    const [data] = useState([
        {
            expanded: true,
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO'
                    },
                    children: [
                        {
                            label: 'Sales'
                        },
                        {
                            label: 'Marketing'
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                    children: [
                        {
                            label: 'Development'
                        },
                        {
                            label: 'UI/UX Design'
                        }
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-column">
                    <div className="flex flex-column align-items-center">
                        <img alt={node.data.name} src={node.data.image} className="mb-3 w-3rem h-3rem" />
                        <span className="font-bold mb-2">{node.data.name}</span>
                        <span>{node.data.title}</span>
                    </div>
                </div>
            );
        }

        return node.label;
    };

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart value={data} selectionMode="multiple" selection={selection} onSelectionChange={(e) => setSelection(e.data)} nodeTemplate={nodeTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { TreeNode } from 'primereact/treenode';

export default function SelectionDemo() {
    const [selection, setSelection] = useState<TreeNode[]>([]);
    const [data] = useState<TreeNode[]>([
        {
            expanded: true,
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO'
                    },
                    children: [
                        {
                            label: 'Sales'
                        },
                        {
                            label: 'Marketing'
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                    children: [
                        {
                            label: 'Development'
                        },
                        {
                            label: 'UI/UX Design'
                        }
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node: TreeNode) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-column">
                    <div className="flex flex-column align-items-center">
                        <img alt={node.data.name} src={node.data.image} className="mb-3 w-3rem h-3rem" />
                        <span className="font-bold mb-2">{node.data.name}</span>
                        <span>{node.data.title}</span>
                    </div>
                </div>
            );
        }

        return node.label;
    };

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart value={data} selectionMode="multiple" selection={selection} onSelectionChange={(e) => setSelection(e.data)} nodeTemplate={nodeTemplate} />
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["Nodes can be selected by defining ",(0,a.jsx)("i",{children:"selectionMode"})," along with a value binding with ",(0,a.jsx)("i",{children:"selection"})," and ",(0,a.jsx)("i",{children:"onSelectionChange"})," properties. By default only one node can be selected, set ",(0,a.jsx)("i",{children:"selectionMode"}),"as ",(0,a.jsx)("i",{children:"multiple"})," to select more than one."]})}),(0,a.jsx)("div",{className:"card overflow-x-auto",children:(0,a.jsx)(N,{value:i,selectionMode:"multiple",selection:t,onSelectionChange:e=>n(e.data),nodeTemplate:e=>"person"===e.type?(0,a.jsx)("div",{className:"flex flex-column",children:(0,a.jsxs)("div",{className:"flex flex-column align-items-center",children:[(0,a.jsx)("img",{alt:e.data.name,src:e.data.image,className:"mb-3 w-3rem h-3rem"}),(0,a.jsx)("span",{className:"font-bold mb-2",children:e.data.name}),(0,a.jsx)("span",{children:e.data.title})]})}):e.label})}),(0,a.jsx)(r.DocSectionCode,{code:o})]})}function O(e){let[t]=(0,s.useState)([{label:"Argentina",expanded:!0,data:"ar",children:[{label:"Argentina",expanded:!0,data:"ar",children:[{label:"Argentina",data:"ar"},{label:"Croatia",data:"hr"}]},{label:"France",expanded:!0,data:"fr",children:[{label:"France",data:"fr"},{label:"Morocco",data:"ma"}]}]}]),n={basic:`
<OrganizationChart value={data} nodeTemplate={nodeTemplate} />
        `,javascript:`
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function TemplateDemo() {
    const [data] = useState([
        {
            label: 'Argentina',
            expanded: true,
            data: 'ar',
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    data: 'ar',
                    children: [
                        {
                            label: 'Argentina',
                            data: 'ar'
                        },
                        {
                            label: 'Croatia',
                            data: 'hr'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    data: 'fr',
                    children: [
                        {
                            label: 'France',
                            data: 'fr'
                        },
                        {
                            label: 'Morocco',
                            data: 'ma'
                        }
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node) => {
        return (
            <div className="flex flex-column align-items-center">
                <img alt={node.label} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`w-2rem shadow-2 flag flag-\${node.data}\`} />
                <div className="mt-3 font-medium text-lg">{node.label}</div>
            </div>
        );
    };

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { TreeNode } from 'primereact/treenode';

export default function TemplateDemo() {
    const [data] = useState<TreeNode[]>([
        {
            label: 'Argentina',
            expanded: true,
            data: 'ar',
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    data: 'ar',
                    children: [
                        {
                            label: 'Argentina',
                            data: 'ar'
                        },
                        {
                            label: 'Croatia',
                            data: 'hr'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    data: 'fr',
                    children: [
                        {
                            label: 'France',
                            data: 'fr'
                        },
                        {
                            label: 'Morocco',
                            data: 'ma'
                        }
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node: TreeNode) => {
        return (
            <div className="flex flex-column align-items-center">
                <img alt={node.label} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`w-2rem shadow-2 flag flag-\${node.data}\`} />
                <div className="mt-3 font-medium text-lg">{node.label}</div>
            </div>
        );
    };

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["Custom content instead of a node ",(0,a.jsx)("i",{children:"label"})," is defined using the ",(0,a.jsx)("i",{children:"nodeTemplate"})," property."]})}),(0,a.jsx)("div",{className:"card overflow-x-auto",children:(0,a.jsx)(N,{value:t,nodeTemplate:e=>(0,a.jsxs)("div",{className:"flex flex-column align-items-center",children:[(0,a.jsx)("img",{alt:e.label,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`w-2rem shadow-2 flag flag-${e.data}`}),(0,a.jsx)("div",{className:"mt-3 font-medium text-lg",children:e.label})]})})}),(0,a.jsx)(r.DocSectionCode,{code:n})]})}function z(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.DocSectionText,{...e,children:(0,a.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,a.jsx)("div",{className:"doc-tablewrapper",children:(0,a.jsxs)("table",{className:"doc-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Element"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-organizationchart"}),(0,a.jsx)("td",{children:"Container element."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-organizationchart-table"}),(0,a.jsx)("td",{children:"Table container of a node."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-organizationchart-lines"}),(0,a.jsx)("td",{children:"Connector lines container."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-organizationchart-nodes"}),(0,a.jsx)("td",{children:"Contained of node children."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-organizationchart-line-right"}),(0,a.jsx)("td",{children:"Right side line of a node connector."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-organizationchart-line-left"}),(0,a.jsx)("td",{children:"Left side line of a node connector."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-organizationchart-line-top"}),(0,a.jsx)("td",{children:"Top side line of a node connector."})]})]})]})})]})}var D=e.i(41158);function E(e){let t={basic:`
const Tailwind = {
    organizationchart: {
        table: 'mx-auto my-0 border-spacing-0 border-separate',
        cell: 'text-center align-top py-0 px-3',
        node: {
            className: classNames(
                'relative inline-block bg-white border border-gray-300 text-gray-600 p-5',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' // Dark Mode
            )
        },
        linecell: 'text-center align-top py-0 px-3',
        linedown: {
            className: classNames(
                'mx-auto my-0 w-px h-[20px] bg-gray-300',
                'dark:bg-blue-900/40' //Dark Mode
            )
        },
        lineleft: ({ context }) => ({
            className: classNames(
                'text-center align-top py-0 px-3 rounded-none border-r border-gray-300',
                'dark:border-blue-900/40', //Dark Mode
                {
                    'border-t': context.lineTop
                }
            )
        }),
        lineright: ({ context }) => ({
            className: classNames(
                'text-center align-top py-0 px-3 rounded-none',
                'dark:border-blue-900/40', //Dark Mode
                {
                    'border-t border-gray-300': context.lineTop
                }
            )
        }),
        nodecell: 'text-center align-top py-0 px-3',
        nodetoggler: {
            className: classNames(
                'absolute bottom-[-0.75rem] left-2/4 -ml-3 w-6 h-6 bg-inherit text-inherit rounded-full z-2 cursor-pointer no-underline select-none',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]' // Focus styles
            )
        },
        nodetogglericon: 'relative inline-block w-4 h-4'
    }
}
        `},n={javascript:`
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function UnstyledDemo() {
  const [data] = useState([
    {
      label: 'Argentina',
      expanded: true,
      data: 'ar',
      children: [
        {
          label: 'Argentina',
          expanded: true,
          data: 'ar',
          children: [
            {
              label: 'Argentina',
              data: 'ar',
            },
            {
              label: 'Croatia',
              data: 'hr',
            },
          ],
        },
        {
          label: 'France',
          expanded: true,
          data: 'fr',
          children: [
            {
              label: 'France',
              data: 'fr',
            },
            {
              label: 'Morocco',
              data: 'ma',
            },
          ],
        },
      ],
    },
  ]);

  const nodeTemplate = (node) => {
    return (
      <div className="flex flex-col items-center">
        <img
          alt={node.label}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={\`w-8 shadow-md flag flag-\${node.data}\`}
        />
        <div className="mt-3 font-medium text-lg">{node.label}</div>
      </div>
    );
  };

  return (
    <div className="card overflow-x-auto">
      <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
    </div>
  );
}`};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(l.DocSectionText,{...e,children:[(0,a.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,a.jsx)(D.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,a.jsx)(r.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,a.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,a.jsx)(r.DocSectionCode,{code:n,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:T},{id:"pt.organizationchart.options",label:"OrganizationChart PT Options",component:t.default}];return(0,a.jsx)(n.DocComponent,{title:"React Organization Chart Component",header:"OrganizationChart",description:"OrganizationChart visualizes hierarchical organization data.",componentDocs:[{id:"import",label:"Import",component:w},{id:"basic",label:"Basic",component:y},{id:"template",label:"Template",component:O},{id:"selection",label:"Selection",component:S},{id:"colored",label:"Colored",component:C},{id:"accessibility",label:"Accessibility",component:i}],apiDocs:["OrganizationChart"],className:"organizationchart-demo",ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:z},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:E}]}]})}],62286)},3606,(e,a,t)=>{let n="/organizationchart";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(62286)]),a.hot&&a.hot.dispose(function(){window.__NEXT_P.push([n])})}]);