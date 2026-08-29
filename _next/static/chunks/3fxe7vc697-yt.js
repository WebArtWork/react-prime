(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var i=e.i(91398),t=e.i(91788);e.s(["CodeHighlight",0,function(e){let a=(0,t.useRef)(),s=`language-${e.lang||"jsx"}`;return(0,t.useEffect)(()=>{window.Prism.highlightElement(a.current)},[]),(0,i.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,i.jsxs)("code",{ref:a,className:s,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var i=e.i(91398),t=e.i(3935),a=e.i(58678),s=e.i(3828),o=e.i(91788),n=e.i(51551),u=e.i(72124),r=e.i(41158),l=e.i(87914),d=e.i(28137);let c=e=>{let a=(0,o.useContext)(l.default),{id:u,data:c,name:m,description:p,allowLink:v=!0}=e,f=u.startsWith("pt."),b=(0,s.useRouter)();if(n.ObjectUtils.isNotEmpty(c)){let s=Object.keys(c[0]),l=(e,i)=>{let t=document.getElementById(e);t&&t.parentElement.scrollIntoView({block:"start",behavior:i})},h=(e,a,s)=>{if(v&&e)return e.split("|").map((e,n)=>{if(e.includes(m)){let t=e.indexOf(m),a=e.substring(t).replace(/(\[|\]|<|>).*$/gm,"").trim(),s=m===a?`api.${m}`:`api.${m}.${a===`${m}Props`?"props":a}`;return(0,i.jsxs)(o.default.Fragment,{children:[0!==n?"|":"",(0,i.jsx)(r.default,{href:b.basePath+b.pathname+`#${s}`,target:"_self",children:(0,i.jsx)("a",{onClick:()=>l(s,"smooth"),children:e})})]},n)}return(0,i.jsxs)(o.default.Fragment,{children:[0!==n?"|":"",a?(0,i.jsxs)("span",{id:u+"."+e,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[e,(0,i.jsx)(r.default,{href:b.basePath+b.pathname+`#${u+"."+e}`,target:"_self",children:(0,i.jsx)("a",{onClick:()=>l(u+"."+e),className:"doc-option-link",children:(0,i.jsx)("i",{className:"pi pi-link"})})})]}):e]},n)});let n=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return a?(0,i.jsxs)("span",{id:u+"."+n,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[n,(0,i.jsx)(r.default,{href:b.basePath+b.pathname+`#${u+"."+n}`,target:"_self",children:(0,i.jsx)("a",{onClick:()=>l(u+"."+n),className:"doc-option-link",children:(0,i.jsx)("i",{className:"pi pi-link"})})})]}):n},x=(0,i.jsx)(o.default.Fragment,{children:f?(0,i.jsx)("tr",{children:s.map(e=>(0,i.jsx)("th",{children:e},e))}):(0,i.jsx)("tr",{children:s.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,i.jsx)("th",{children:e},e))})}),q=(0,i.jsx)(o.default.Fragment,{children:c.map((e,s)=>{if(f){let{value:t,label:a,description:o}=e;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:t}),(0,i.jsx)("td",{children:a}),(0,i.jsx)("td",{children:o})]},s)}return(0,i.jsx)("tr",{children:Object.entries(e).map(([s,o],u)=>"readonly"!==s&&"optional"!==s&&"deprecated"!==s&&(0,i.jsx)("td",{children:"parameters"===s?o.map((e,t)=>(0,i.jsxs)("div",{className:"doc-option-params",children:[(0,i.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,i.jsx)("span",{className:"doc-option-parameter-type",children:h(e.type)}),(0,i.jsx)("br",{})]},t)):"default"===s?(0,i.jsx)("div",{className:(0,t.classNames)("doc-option-default",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:n.ObjectUtils.isEmpty(o)?"null":h(o,"name"===s,e.deprecated)}):"type"===s?(0,i.jsx)("span",{className:"doc-option-type",children:h(o,"name"===s,e.deprecated)}):"returnType"===s?(0,i.jsx)("div",{className:(0,t.classNames)("doc-option-returnType",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:h(o,"name"===s,e.deprecated)}):"description"===s||"values"===s?(0,i.jsx)("span",{className:"doc-option-description",children:o}):h(o,"name"===s,e.deprecated)},u))},s)})});return(0,i.jsxs)(o.default.Fragment,{children:[(0,i.jsx)(d.DocSectionText,{...e,children:(0,i.jsx)("p",{children:p})}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:x}),(0,i.jsx)("tbody",{children:q})]})})]},u)}return null};e.s(["default",0,c],88850);var m=e.i(71864),p=e.i(38076);function v(e){let{doc:t,header:a}=e,s=e.apiExclude,r=t.reduce((e,t)=>{let a,o=t.split("."),r=(a=o[0])&&a[0].toUpperCase()+a.slice(1)||"",l=u.default[r.toLowerCase()],d=(e,i)=>s&&s[e]&&s[e].includes(i),m=e=>s&&s[e]&&"excludeAll"===s[e];if(l){let a=(e,t)=>{if(n.ObjectUtils.isNotEmpty(l.events)&&n.ObjectUtils.isNotEmpty(l.events.values)&&!m("events")){let a={id:`api.${t}.events`,label:"Events",description:l.events.description,children:[]};Object.entries(l.events.values).forEach(([e,s])=>{let[o,n]=[`api.${t}.${e}`,e];d("event",e)||a.children.push({id:o,label:n,component:e=>(0,i.jsx)(c,{name:t,data:s.props,description:(0,i.jsxs)(i.Fragment,{children:[s.description," See ",(0,i.jsx)("i",{children:s.relatedProp}),"."]}),...e})})}),e.push(a)}if(n.ObjectUtils.isNotEmpty(l.interfaces)&&n.ObjectUtils.isNotEmpty(l.interfaces.values)&&!m("interfaces")){let a={id:`api.${t}.interfaces`,label:"Interfaces",description:l.interfaces.description,children:[]};Object.entries(l.interfaces.values).forEach(([e,s])=>{let[o,n]=[`api.${t}.${e}`,e];d("interfaces",e)||a.children.push({id:o,label:n,component:e=>(0,i.jsx)(c,{name:t,data:s.props,description:(0,i.jsxs)(i.Fragment,{children:[s.description," ",s.extendedTypes&&(0,i.jsxs)(i.Fragment,{children:["Extends ",(0,i.jsx)("i",{children:s.extendedTypes}),"."]})]}),...e})})}),e.push(a)}if(n.ObjectUtils.isNotEmpty(l.types)&&n.ObjectUtils.isNotEmpty(l.types.values)&&!m("types")){let a={id:`api.${t}.types`,label:"Types",description:l.types.description,children:[]};Object.entries(l.types.values).forEach(([e,s])=>{let[o,n]=[`api.${t}.${e}`,e];d("types",e)||a.children.push({id:o,label:n,component:e=>(0,i.jsx)(c,{name:t,data:[s],allowLink:!1,...e})})}),e.push(a)}};if(3===o.length){let t=o[1],a=o[2];if("functions"===t){let s=l[t].values[a],o={id:`api.${r}`,label:r,children:[]},[u,d]=[`api.${r}.function`,"Function"],m=Object.entries(s).reduce((e,[i,t])=>("description"!==i&&(e[i]=t),e),{});o.children.push({id:u,label:d,component:e=>(0,i.jsx)(c,{name:r,data:[m],description:s.description,...e})});let p=s.parameters&&s.parameters.map(e=>e.type);if(n.ObjectUtils.isNotEmpty(l.interfaces)&&n.ObjectUtils.isNotEmpty(l.interfaces.values)){let e={id:`api.${r}.interfaces`,label:"Interfaces",description:l.interfaces.description,children:[]};Object.entries(l.interfaces.values).forEach(([t,a])=>{if(p.includes(t)){let[s,o]=[`api.${r}.${t}`,t],u={id:s,label:o,description:(0,i.jsxs)(i.Fragment,{children:[a.description," ",a.extendedTypes&&(0,i.jsxs)(i.Fragment,{children:["Extends ",(0,i.jsx)("i",{children:a.extendedTypes}),"."]})]}),children:[]};n.ObjectUtils.isNotEmpty(a.props)&&u.children.push({id:`${s}.props`,label:"Props",component:e=>(0,i.jsx)(c,{data:a.props,...e})}),n.ObjectUtils.isNotEmpty(a.callbacks)&&u.children.push({id:`${s}.callbacks`,label:"Callbacks",component:e=>(0,i.jsx)(c,{data:a.callbacks,...e})}),e.children.push(u)}}),n.ObjectUtils.isNotEmpty(e.children)&&o.children.push(e)}e.push(o)}}else l.components&&Object.entries(l.components).forEach(([s,o])=>{let u={id:`api.${s}`,label:s,description:o.description,children:[]};if(n.ObjectUtils.isNotEmpty(o.props)&&n.ObjectUtils.isNotEmpty(o.props.values)&&!m("props")){let[e,t]=[`api.${s}.props`,"Props"];if(d("props",s))return;u.children.push({id:e,label:t,component:e=>(0,i.jsx)(c,{name:s,data:o.props.values,description:o.props.description,...e})})}if(n.ObjectUtils.isNotEmpty(o.callbacks)&&n.ObjectUtils.isNotEmpty(o.callbacks.values)&&!m("callbacks")){let[e,t]=[`api.${s}.callbacks`,"Callbacks"];if(d("callbacks",s))return;u.children.push({id:e,label:t,component:e=>(0,i.jsx)(c,{name:s,data:o.callbacks.values,description:o.callbacks.description,...e})})}if(n.ObjectUtils.isNotEmpty(o.methods)&&n.ObjectUtils.isNotEmpty(o.methods.values)&&!m("methods")){let[e,t]=[`api.${s}.methods`,"Methods"];if(d("methods",s))return;u.children.push({id:e,label:t,component:e=>(0,i.jsx)(c,{name:s,data:o.methods.values,description:o.methods.description,...e})})}s.toLocaleLowerCase()===t.toLowerCase()&&a(u.children,s),e.push(u)}),l.model&&Object.entries(l.model).forEach(([s,o])=>{let u={id:`api.${s}`,label:s,description:o.description,children:[]};if(n.ObjectUtils.isNotEmpty(o.props)&&n.ObjectUtils.isNotEmpty(o.props.values)&&!m("props")){let[e,t]=[`api.${s}.props`,"Props"];if(d("props",s))return;u.children.push({id:e,label:t,component:e=>(0,i.jsx)(c,{name:s,data:o.props.values,description:o.props.description,...e})})}s.toLocaleLowerCase()===t.toLowerCase()&&a(u.children,s),e.push(u)}),l.components||l.model||a(e,r)}return e},[]);return(0,o.useEffect)(()=>{let e=window.location.hash.substring(1),i=document.getElementById(e);setTimeout(()=>{i&&i.scrollIntoView({block:"start"})},1)},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"doc-main",children:[(0,i.jsxs)("div",{className:"doc-intro",children:[(0,i.jsxs)("h1",{children:[a," API"]}),(0,i.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",a," module."]})]}),(0,i.jsx)(p.DocSections,{docs:r})]}),(0,i.jsx)(m.DocSectionNav,{docs:r})]})}e.s(["DocComponent",0,function(e){let n,[u,r]=(0,o.useState)(0),l=(0,s.useRouter)();n=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{r(e),l.replace(l.pathname)};return(0,o.useEffect)(()=>{l.asPath.includes("#api")&&r(1),l.asPath.includes("#pt")&&r(3)},[l.asPath]),(0,i.jsxs)("div",{className:(0,t.classNames)(e.className,"doc-component"),children:[(0,i.jsxs)(a.default,{children:[(0,i.jsx)("title",{children:e.title}),(0,i.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,i.jsxs)("ul",{className:"doc-tabmenu",children:[(0,i.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":0===u}),children:(0,i.jsx)("button",{type:"button",onClick:()=>d(0),children:n})}),e.apiDocs?(0,i.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":1===u}),children:(0,i.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,i.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":2===u}),children:(0,i.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,i.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":3===u}),children:(0,i.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,i.jsxs)("div",{className:"doc-tabpanels",children:[0===u?(0,i.jsxs)("div",{className:"doc-tabpanel",children:[(0,i.jsxs)("div",{className:"doc-main",children:[(0,i.jsxs)("div",{className:"doc-intro",children:[(0,i.jsx)("h1",{children:e.header}),(0,i.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,i.jsx)(p.DocSections,{docs:e.componentDocs})]}),(0,i.jsx)(m.DocSectionNav,{docs:e.componentDocs})]}):null,1===u?(0,i.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,i.jsx)(v,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"doc-main",children:(0,i.jsxs)("div",{className:"doc-intro",children:[(0,i.jsxs)("h1",{children:[e.header," API"]}),(0,i.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===u?(0,i.jsx)(i.Fragment,{children:e.themingDocs?(0,i.jsxs)("div",{className:"doc-tabpanel",children:[(0,i.jsxs)("div",{className:"doc-main",children:[(0,i.jsx)("div",{className:"doc-intro",children:(0,i.jsxs)("h1",{children:[e.header," Theming"]})}),(0,i.jsx)(p.DocSections,{docs:e.themingDocs})]}),(0,i.jsx)(m.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===u?(0,i.jsx)(i.Fragment,{children:e.ptDocs?(0,i.jsxs)("div",{className:"doc-tabpanel",children:[(0,i.jsxs)("div",{className:"doc-main",children:[(0,i.jsxs)("div",{className:"doc-intro",children:[(0,i.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,i.jsx)("p",{children:e.ptDescription})]}),(0,i.jsx)(p.DocSections,{docs:e.ptDocs})]}),(0,i.jsx)(m.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},18718,e=>{"use strict";var i=e.i(91398),t=e.i(28137);e.s(["StyledDoc",0,function(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Element"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-fieldset"}),(0,i.jsx)("td",{children:"Fieldset element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-fieldset-toggleable"}),(0,i.jsx)("td",{children:"Toggleable fieldset element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-fieldset-legend"}),(0,i.jsx)("td",{children:"Legend element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-fieldset-content"}),(0,i.jsx)("td",{children:"Content element."})]})]})]})})]})}])},7869,e=>{"use strict";var i=e.i(91398),t=e.i(91788),a=e.i(10836),s=e.i(15498),o=e.i(60150),n=e.i(3935);let u=`
@layer primereact {
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
    }
    
    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        width: 100%;
        content: "";
    }
    
    .p-divider-horizontal.p-divider-left {
        justify-content: flex-start;
    }
    
    .p-divider-horizontal.p-divider-right {
        justify-content: flex-end;
    }
    
    .p-divider-horizontal.p-divider-center {
        justify-content: center;
    }
    
    .p-divider-content {
        z-index: 1;
    }
    
    .p-divider-vertical {
        min-height: 100%;
        margin: 0 1rem;
        display: flex;
        position: relative;
        justify-content: center;
    }
    
    .p-divider-vertical:before {
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        height: 100%;
        content: "";
    }
    
    .p-divider-vertical.p-divider-top {
        align-items: flex-start;
    }
    
    .p-divider-vertical.p-divider-center {
        align-items: center;
    }
    
    .p-divider-vertical.p-divider-bottom {
        align-items: flex-end;
    }
    
    .p-divider-solid.p-divider-horizontal:before {
        border-top-style: solid;
    }
    
    .p-divider-solid.p-divider-vertical:before {
        border-left-style: solid;
    }
    
    .p-divider-dashed.p-divider-horizontal:before {
        border-top-style: dashed;
    }
    
    .p-divider-dashed.p-divider-vertical:before {
        border-left-style: dashed;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-top-style: dotted;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-left-style: dotted;
    }
}
`,r=s.ComponentBase.extend({defaultProps:{__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null,children:void 0},css:{classes:{root:({props:e,horizontal:i,vertical:t})=>(0,n.classNames)(`p-divider p-component p-divider-${e.layout} p-divider-${e.type}`,{"p-divider-left":i&&(!e.align||"left"===e.align),"p-divider-right":i&&"right"===e.align,"p-divider-center":i&&"center"===e.align||t&&(!e.align||"center"===e.align),"p-divider-top":t&&"top"===e.align,"p-divider-bottom":t&&"bottom"===e.align},e.className),content:"p-divider-content"},styles:u,inlineStyles:{root:({props:e})=>({justifyContent:"horizontal"===e.layout?"center"===e.align||null===e.align?"center":"left"===e.align?"flex-start":"right"===e.align?"flex-end":null:null,alignItems:"vertical"===e.layout?"center"===e.align||null===e.align?"center":"top"===e.align?"flex-start":"bottom"===e.align?"flex-end":null:null})}}}),l=t.forwardRef((e,n)=>{let u=(0,o.useMergeProps)(),l=t.useContext(a.PrimeReactContext),d=r.getProps(e,l),{ptm:c,cx:m,sx:p,isUnstyled:v}=r.setMetaData({props:d});(0,s.useHandleStyle)(r.css.styles,v,{name:"divider"});let f=t.useRef(null),b="horizontal"===d.layout,h="vertical"===d.layout;t.useImperativeHandle(n,()=>({props:d,getElement:()=>f.current}));let x=u({ref:f,style:p("root"),className:m("root",{horizontal:b,vertical:h}),"aria-orientation":d.layout,role:"separator"},r.getOtherProps(d),c("root")),q=u({className:m("content")},c("content"));return(0,i.jsx)("div",{...x,children:(0,i.jsx)("div",{...q,children:d.children})})});l.displayName="Divider",e.s(["Divider",0,l],7869)},66082,e=>{"use strict";var i=e.i(91398),t=e.i(91788),a=e.i(10836),s=e.i(15498),o=e.i(60150),n=e.i(34366),u=e.i(64691),r=e.i(45543),l=e.i(51551),d=e.i(3935);let c=s.ComponentBase.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,children:void 0,className:null,invalid:!1,variant:null,keyfilter:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,iconPosition:null},css:{classes:{root:({props:e,isFilled:i,context:t})=>(0,d.classNames)("p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":i,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:t&&"filled"===t.inputStyle})}}}),m=t.memo(t.forwardRef((e,m)=>{let p=(0,o.useMergeProps)(),v=t.useContext(a.PrimeReactContext),f=c.getProps(e,v),{ptm:b,cx:h,isUnstyled:x}=c.setMetaData({props:f,...f.__parentMetadata,context:{disabled:f.disabled,iconPosition:f.iconPosition}});(0,s.useHandleStyle)(c.css.styles,x,{name:"inputtext",styled:!0});let q=t.useRef(m);t.useEffect(()=>{l.ObjectUtils.combinedRefs(q,m)},[q,m]);let g=t.useMemo(()=>l.ObjectUtils.isNotEmpty(f.value)||l.ObjectUtils.isNotEmpty(f.defaultValue),[f.value,f.defaultValue]),j=l.ObjectUtils.isNotEmpty(f.tooltip);t.useEffect(()=>{g||q.current?.value?r.DomHandler.addClass(q.current,"p-filled"):r.DomHandler.removeClass(q.current,"p-filled")},[f.disabled,g]);let y=p({className:(0,d.classNames)(f.className,h("root",{context:v,isFilled:g})),autoComplete:f.autoComplete,onBeforeInput:e=>{f.onBeforeInput&&f.onBeforeInput(e),f.keyfilter&&n.KeyFilter.onBeforeInput(e,f.keyfilter,f.validateOnly)},onInput:e=>{let i=e.target,t=!0;f.keyfilter&&f.validateOnly&&(t=n.KeyFilter.validate(e,f.keyfilter)),f.onInput&&f.onInput(e,t),l.ObjectUtils.isNotEmpty(i.value)?r.DomHandler.addClass(i,"p-filled"):r.DomHandler.removeClass(i,"p-filled")},onKeyDown:e=>{f.onKeyDown&&f.onKeyDown(e),f.keyfilter&&n.KeyFilter.onKeyPress(e,f.keyfilter,f.validateOnly)},onPaste:e=>{f.onPaste&&f.onPaste(e),f.keyfilter&&n.KeyFilter.onPaste(e,f.keyfilter,f.validateOnly)}},c.getOtherProps(f),b("root"));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{ref:q,...y}),j&&(0,i.jsx)(u.Tooltip,{target:q,content:f.tooltip,pt:b("tooltip"),...f.tooltipOptions})]})}));m.displayName="InputText",e.s(["InputText",0,m],66082)},34366,e=>{"use strict";var i=e.i(45543);let t={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:e=>t.DEFAULT_MASKS[e]?t.DEFAULT_MASKS[e]:e,onBeforeInput(e,t,a){!a&&i.DomHandler.isAndroid()&&this.validateKey(e,e.data,t)},onKeyPress(e,t,a){a||i.DomHandler.isAndroid()||e.ctrlKey||e.altKey||e.metaKey||this.validateKey(e,e.key,t)},onPaste(e,i,t){if(t)return;let a=this.getRegex(i);[...e.clipboardData.getData("text")].forEach(i=>{if(!a.test(i))return e.preventDefault(),!1})},validateKey(e,i,t){null==i||!(i.length<=2)||this.getRegex(t).test(i)||e.preventDefault()},validate(e,i){let t=e.target.value,a=!0,s=this.getRegex(i);return t&&!s.test(t)&&(a=!1),a}};e.s(["KeyFilter",0,t])},3828,(e,i,t)=>{i.exports=e.r(26990)},77878,e=>{"use strict";var i=e.i(91398),t=e.i(88850),a=e.i(82948),s=e.i(28137);function o(){return(0,i.jsxs)(s.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,i.jsx)("h3",{children:"Screen Reader"}),(0,i.jsxs)("p",{children:["Divider uses a ",(0,i.jsx)("i",{children:"separator"})," role with ",(0,i.jsx)("i",{children:"aria-orientation"}),' set to either "horizontal" or "vertical".']}),(0,i.jsx)("h3",{children:"Keyboard Support"}),(0,i.jsx)("p",{children:"Component does not include any interactive elements."})]})}var n=e.i(5180),u=e.i(7869);function r(e){let t={basic:`
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<Divider />
<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
</p>
<Divider />
<p>
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
</p>
<Divider />
<p>
    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
</p>
        `,javascript:`
import React from 'react'; 
import { Divider } from 'primereact/divider';

export default function BasicDemo() {
    return (
        <div className="card">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Divider />
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
            <Divider />
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
            <Divider />
            <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
            </p>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Divider } from 'primereact/divider';

export default function BasicDemo() {
    return (
        <div className="card">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Divider />
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
            <Divider />
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
            <Divider />
            <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
            </p>
        </div>  
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"Divider is basically placed between the items to separate."})}),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,i.jsx)(u.Divider,{}),(0,i.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."}),(0,i.jsx)(u.Divider,{}),(0,i.jsx)("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."}),(0,i.jsx)(u.Divider,{}),(0,i.jsx)("p",{children:"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio."})]}),(0,i.jsx)(n.DocSectionCode,{code:t})]})}var l=e.i(57724);function d(e){let t={basic:`
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<Divider align="left">
    <div className="inline-flex align-items-center">
        <i className="pi pi-user mr-2"></i>
        <b>Text</b>
    </div>
</Divider>
<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
</p>
<Divider align="center">
    <span className="p-tag">Badge</span>
</Divider>
<p>
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
</p>
<Divider align="right">
    <Button label="Button" icon="pi pi-search" className="p-button-outlined"></Button>
</Divider>
<p>
    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
</p>
        `,javascript:`
import React from 'react'; 
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';

export default function ContentDemo() {
    return (
        <div className="card">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Divider align="left">
                <div className="inline-flex align-items-center">
                    <i className="pi pi-user mr-2"></i>
                    <b>Text</b>
                </div>
            </Divider>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
            <Divider align="center">
                <span className="p-tag">Badge</span>
            </Divider>
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
            <Divider align="right">
                <Button label="Button" icon="pi pi-search" className="p-button-outlined"></Button>
            </Divider>
            <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
            </p>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';

export default function ContentDemo() {
    return (
        <div className="card">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Divider align="left">
                <div className="inline-flex align-items-center">
                    <i className="pi pi-user mr-2"></i>
                    <b>Text</b>
                </div>
            </Divider>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
            <Divider align="center">
                <span className="p-tag">Badge</span>
            </Divider>
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
            <Divider align="right">
                <Button label="Button" icon="pi pi-search" className="p-button-outlined"></Button>
            </Divider>
            <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
            </p>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Children are rendered within the boundaries of the divider where location of the content is configured with the ",(0,i.jsx)("i",{children:"align"})," property. In horizontal layout, alignment options are ",(0,i.jsx)("i",{children:"left"}),", ",(0,i.jsx)("i",{children:"center"})," and",(0,i.jsx)("i",{children:"right"})," whereas vertical mode supports ",(0,i.jsx)("i",{children:"top"}),", ",(0,i.jsx)("i",{children:"center"})," and ",(0,i.jsx)("i",{children:"bottom"}),"."]})}),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,i.jsx)(u.Divider,{align:"left",children:(0,i.jsxs)("div",{className:"inline-flex align-items-center",children:[(0,i.jsx)("i",{className:"pi pi-user mr-2"}),(0,i.jsx)("b",{children:"Text"})]})}),(0,i.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."}),(0,i.jsx)(u.Divider,{align:"center",children:(0,i.jsx)("span",{className:"p-tag",children:"Badge"})}),(0,i.jsx)("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."}),(0,i.jsx)(u.Divider,{align:"right",children:(0,i.jsx)(l.Button,{label:"Button",icon:"pi pi-search",className:"p-button-outlined"})}),(0,i.jsx)("p",{children:"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio."})]}),(0,i.jsx)(n.DocSectionCode,{code:t})]})}function c(e){let t={basic:`
import { Divider } from 'primereact/divider';
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.DocSectionText,{...e}),(0,i.jsx)(n.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}var m=e.i(66082);function p(e){let t={basic:`
<div className="card">
    <div className="flex flex-column md:flex-row">
        <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
            <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                <label className="w-6rem">Username</label>
                <InputText id="username" type="text" className="w-12rem" />
            </div>
            <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                <label className="w-6rem">Password</label>
                <InputText id="password" type="password" className="w-12rem" />
            </div>
            <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto"></Button>
        </div>
        <div className="w-full md:w-2">
            <Divider layout="vertical" className="hidden md:flex">
                <b>OR</b>
            </Divider>
            <Divider layout="horizontal" className="flex md:hidden" align="center">
                <b>OR</b>
            </Divider>
        </div>
        <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
            <Button label="Sign Up" icon="pi pi-user-plus" severity="success" className="w-10rem"></Button>
        </div>
    </div>
</div>
        `,javascript:`
import React from 'react'; 
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function LoginDemo() {
    return (
        <div className="card">
            <div className="flex flex-column md:flex-row">
                <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Username</label>
                        <InputText id="username" type="text" className="w-12rem" />
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Password</label>
                        <InputText id="password" type="password" className="w-12rem" />
                    </div>
                    <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto"></Button>
                </div>
                <div className="w-full md:w-2">
                    <Divider layout="vertical" className="hidden md:flex">
                        <b>OR</b>
                    </Divider>
                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>OR</b>
                    </Divider>
                </div>
                <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                    <Button label="Sign Up" icon="pi pi-user-plus" severity="success" className="w-10rem"></Button>
                </div>
            </div>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function LoginDemo() {
    return (
        <div className="card">
            <div className="flex flex-column md:flex-row">
                <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Username</label>
                        <InputText id="username" type="text" className="w-12rem" />
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Password</label>
                        <InputText id="password" type="password" className="w-12rem" />
                    </div>
                    <Button label="Login" icon="pi pi-user" className="w-10rem mx-auto"></Button>
                </div>
                <div className="w-full md:w-2">
                    <Divider layout="vertical" className="hidden md:flex">
                        <b>OR</b>
                    </Divider>
                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>OR</b>
                    </Divider>
                </div>
                <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                    <Button label="Sign Up" icon="pi pi-user-plus" severity="success" className="w-10rem"></Button>
                </div>
            </div>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"Sample implementation of a login form using a divider with content."})}),(0,i.jsx)("div",{className:"card",children:(0,i.jsxs)("div",{className:"flex flex-column md:flex-row",children:[(0,i.jsxs)("div",{className:"w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5",children:[(0,i.jsxs)("div",{className:"flex flex-wrap justify-content-center align-items-center gap-2",children:[(0,i.jsx)("label",{className:"w-6rem",children:"Username"}),(0,i.jsx)(m.InputText,{id:"username",type:"text",className:"w-12rem"})]}),(0,i.jsxs)("div",{className:"flex flex-wrap justify-content-center align-items-center gap-2",children:[(0,i.jsx)("label",{className:"w-6rem",children:"Password"}),(0,i.jsx)(m.InputText,{id:"password",type:"password",className:"w-12rem"})]}),(0,i.jsx)(l.Button,{label:"Login",icon:"pi pi-user",className:"w-10rem mx-auto"})]}),(0,i.jsxs)("div",{className:"w-full md:w-2",children:[(0,i.jsx)(u.Divider,{layout:"vertical",className:"hidden md:flex",children:(0,i.jsx)("b",{children:"OR"})}),(0,i.jsx)(u.Divider,{layout:"horizontal",className:"flex md:hidden",align:"center",children:(0,i.jsx)("b",{children:"OR"})})]}),(0,i.jsx)("div",{className:"w-full md:w-5 flex align-items-center justify-content-center py-5",children:(0,i.jsx)(l.Button,{label:"Sign Up",icon:"pi pi-user-plus",severity:"success",className:"w-10rem"})})]})}),(0,i.jsx)(n.DocSectionCode,{code:t})]})}let v=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.DocSectionText,{...e}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/divider.jpg",alt:"divider"})})]});var f=e.i(41158);function b(e){let t={basic:`
const Tailwind = {
    divider: {
        root: ({ props }) => ({
            className: classNames(
                'flex relative', // alignments.
                {
                    'w-full my-5 mx-0 py-0 px-5 before:block before:left-0 before:absolute before:top-1/2 before:w-full before:border-t before:border-gray-300 before:dark:border-blue-900/40': props.layout == 'horizontal', // Padding and borders for horizontal layout.
                    'min-h-full mx-4 md:mx-5 py-5 before:block before:min-h-full before:absolute before:left-1/2 before:top-0 before:transform before:-translate-x-1/2 before:border-l before:border-gray-300 before:dark:border-blue-900/40':
                        props.layout == 'vertical' // Padding and borders for vertical layout.
                },
                {
                    'before:border-solid': props.type == 'solid',
                    'before:border-dotted': props.type == 'dotted',
                    'before:border-dashed': props.type == 'dashed'
                } // Border type condition.
            )
        }),
        content: 'px-1 bg-white z-10 dark:bg-gray-900' // Padding and background color.
    }
}
        `},a={javascript:`
import React from 'react';
import { Divider } from 'primereact/divider';

export default function UnstyledDemo() {
    return (
        <div className="card text-gray-700 dark:text-white/80">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Divider align="left">
                <div className="inline-flex align-items-center">
                    <b>Left</b>
                </div>
            </Divider>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
            <Divider align="center" type="dotted">
                <div className="inline-flex align-items-center">
                    <b>Center</b>
                </div>
            </Divider>
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
            <Divider align="right" type="dashed">
                <div className="inline-flex align-items-center">
                    <b>Right</b>
                </div>
            </Divider>
            <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
            </p>
        </div>
    );
}
    `};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.DocSectionText,{...e,children:[(0,i.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,i.jsx)(f.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,i.jsx)(n.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,i.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,i.jsx)(n.DocSectionCode,{code:a,embedded:!0})]})})}function h(e){let t={basic:`
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<Divider type="solid" />
<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
</p>
<Divider type="dashed"/>
<p>
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
</p>
<Divider type="dotted"/>
<p>
    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
    voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
</p>
        `,javascript:`
import React from 'react'; 
import { Divider } from 'primereact/divider';

export default function TypeDemo() {
    return (
        <div className="card">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Divider type="solid" />
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
            <Divider type="dashed"/>
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
            <Divider type="dotted"/>
            <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
            </p>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Divider } from 'primereact/divider';

export default function TypeDemo() {
    return (
        <div className="card">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Divider type="solid" />
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
            <Divider type="dashed"/>
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
            <Divider type="dotted"/>
            <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
            </p>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Style of the border is configured with the ",(0,i.jsx)("i",{children:"type"})," property that can either be ",(0,i.jsx)("i",{children:"solid"}),", ",(0,i.jsx)("i",{children:"dotted"})," or ",(0,i.jsx)("i",{children:"dashed"}),"."]})}),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,i.jsx)(u.Divider,{type:"solid"}),(0,i.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."}),(0,i.jsx)(u.Divider,{type:"dashed"}),(0,i.jsx)("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."}),(0,i.jsx)(u.Divider,{type:"dotted"}),(0,i.jsx)("p",{children:"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio."})]}),(0,i.jsx)(n.DocSectionCode,{code:t})]})}function x(e){let t={basic:`
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<Divider layout="vertical" />
<p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
</p>
<Divider layout="vertical" />
<p>
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
</p>
        `,javascript:`
import React from 'react'; 
import { Divider } from 'primereact/divider';

export default function VerticalDemo() {
    return (
        <div className="card flex justify-content-center">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Divider layout="vertical" />
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
            <Divider layout="vertical" />
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Divider } from 'primereact/divider';

export default function VerticalDemo() {
    return (
        <div className="card flex justify-content-center">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Divider layout="vertical" />
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
            <Divider layout="vertical" />
            <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Vertical divider is enabled by setting the ",(0,i.jsx)("i",{children:"layout"})," property as ",(0,i.jsx)("i",{children:"vertical"}),"."]})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,i.jsx)(u.Divider,{layout:"vertical"}),(0,i.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."}),(0,i.jsx)(u.Divider,{layout:"vertical"}),(0,i.jsx)("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})]}),(0,i.jsx)(n.DocSectionCode,{code:t})]})}var q=e.i(18718);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:v},{id:"pt.divider.options",label:"Divider PT Options",component:t.default}],s=[{id:"styled",label:"Styled",component:q.StyledDoc},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:b}]}];return(0,i.jsx)(a.DocComponent,{title:"React Divider Component",header:"Divider",description:"Divider is used to separate contents.",componentDocs:[{id:"import",label:"Import",component:c},{id:"basic",label:"Basic",component:r},{id:"type",label:"Type",component:h},{id:"vertical",label:"Vertical",component:x},{id:"content",label:"Content",component:d},{id:"login",label:"Login",component:p},{id:"accessibility",label:"Accessibility",component:o}],apiDocs:["Divider"],ptDocs:e,themingDocs:s})}],77878)},82549,(e,i,t)=>{let a="/divider";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(77878)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([a])})}]);