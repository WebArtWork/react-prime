(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),a=e.i(91788);e.s(["CodeHighlight",0,function(e){let n=(0,a.useRef)(),l=`language-${e.lang||"jsx"}`;return(0,a.useEffect)(()=>{window.Prism.highlightElement(n.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:n,className:l,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),a=e.i(3935),n=e.i(58678),l=e.i(3828),s=e.i(91788),r=e.i(51551),i=e.i(72124),o=e.i(41158),c=e.i(87914),d=e.i(28137);let u=e=>{let n=(0,s.useContext)(c.default),{id:i,data:u,name:p,description:m,allowLink:h=!0}=e,f=i.startsWith("pt."),x=(0,l.useRouter)();if(r.ObjectUtils.isNotEmpty(u)){let l=Object.keys(u[0]),c=(e,t)=>{let a=document.getElementById(e);a&&a.parentElement.scrollIntoView({block:"start",behavior:t})},b=(e,n,l)=>{if(h&&e)return e.split("|").map((e,r)=>{if(e.includes(p)){let a=e.indexOf(p),n=e.substring(a).replace(/(\[|\]|<|>).*$/gm,"").trim(),l=p===n?`api.${p}`:`api.${p}.${n===`${p}Props`?"props":n}`;return(0,t.jsxs)(s.default.Fragment,{children:[0!==r?"|":"",(0,t.jsx)(o.default,{href:x.basePath+x.pathname+`#${l}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(l,"smooth"),children:e})})]},r)}return(0,t.jsxs)(s.default.Fragment,{children:[0!==r?"|":"",n?(0,t.jsxs)("span",{id:i+"."+e,className:(0,a.classNames)("doc-option-name",{"line-through cursor-pointer":!!l}),title:l,children:[e,(0,t.jsx)(o.default,{href:x.basePath+x.pathname+`#${i+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(i+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},r)});let r=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return n?(0,t.jsxs)("span",{id:i+"."+r,className:(0,a.classNames)("doc-option-name",{"line-through cursor-pointer":!!l}),title:l,children:[r,(0,t.jsx)(o.default,{href:x.basePath+x.pathname+`#${i+"."+r}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(i+"."+r),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):r},v=(0,t.jsx)(s.default.Fragment,{children:f?(0,t.jsx)("tr",{children:l.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:l.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),j=(0,t.jsx)(s.default.Fragment,{children:u.map((e,l)=>{if(f){let{value:a,label:n,description:s}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:a}),(0,t.jsx)("td",{children:n}),(0,t.jsx)("td",{children:s})]},l)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([l,s],i)=>"readonly"!==l&&"optional"!==l&&"deprecated"!==l&&(0,t.jsx)("td",{children:"parameters"===l?s.map((e,a)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:b(e.type)}),(0,t.jsx)("br",{})]},a)):"default"===l?(0,t.jsx)("div",{className:(0,a.classNames)("doc-option-default",{"doc-option-dark":n.darkMode,"doc-option-light":!n.darkMode}),children:r.ObjectUtils.isEmpty(s)?"null":b(s,"name"===l,e.deprecated)}):"type"===l?(0,t.jsx)("span",{className:"doc-option-type",children:b(s,"name"===l,e.deprecated)}):"returnType"===l?(0,t.jsx)("div",{className:(0,a.classNames)("doc-option-returnType",{"doc-option-dark":n.darkMode,"doc-option-light":!n.darkMode}),children:b(s,"name"===l,e.deprecated)}):"description"===l||"values"===l?(0,t.jsx)("span",{className:"doc-option-description",children:s}):b(s,"name"===l,e.deprecated)},i))},l)})});return(0,t.jsxs)(s.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:m})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:v}),(0,t.jsx)("tbody",{children:j})]})})]},i)}return null};e.s(["default",0,u],88850);var p=e.i(71864),m=e.i(38076);function h(e){let{doc:a,header:n}=e,l=e.apiExclude,o=a.reduce((e,a)=>{let n,s=a.split("."),o=(n=s[0])&&n[0].toUpperCase()+n.slice(1)||"",c=i.default[o.toLowerCase()],d=(e,t)=>l&&l[e]&&l[e].includes(t),p=e=>l&&l[e]&&"excludeAll"===l[e];if(c){let n=(e,a)=>{if(r.ObjectUtils.isNotEmpty(c.events)&&r.ObjectUtils.isNotEmpty(c.events.values)&&!p("events")){let n={id:`api.${a}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,l])=>{let[s,r]=[`api.${a}.${e}`,e];d("event",e)||n.children.push({id:s,label:r,component:e=>(0,t.jsx)(u,{name:a,data:l.props,description:(0,t.jsxs)(t.Fragment,{children:[l.description," See ",(0,t.jsx)("i",{children:l.relatedProp}),"."]}),...e})})}),e.push(n)}if(r.ObjectUtils.isNotEmpty(c.interfaces)&&r.ObjectUtils.isNotEmpty(c.interfaces.values)&&!p("interfaces")){let n={id:`api.${a}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,l])=>{let[s,r]=[`api.${a}.${e}`,e];d("interfaces",e)||n.children.push({id:s,label:r,component:e=>(0,t.jsx)(u,{name:a,data:l.props,description:(0,t.jsxs)(t.Fragment,{children:[l.description," ",l.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:l.extendedTypes}),"."]})]}),...e})})}),e.push(n)}if(r.ObjectUtils.isNotEmpty(c.types)&&r.ObjectUtils.isNotEmpty(c.types.values)&&!p("types")){let n={id:`api.${a}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,l])=>{let[s,r]=[`api.${a}.${e}`,e];d("types",e)||n.children.push({id:s,label:r,component:e=>(0,t.jsx)(u,{name:a,data:[l],allowLink:!1,...e})})}),e.push(n)}};if(3===s.length){let a=s[1],n=s[2];if("functions"===a){let l=c[a].values[n],s={id:`api.${o}`,label:o,children:[]},[i,d]=[`api.${o}.function`,"Function"],p=Object.entries(l).reduce((e,[t,a])=>("description"!==t&&(e[t]=a),e),{});s.children.push({id:i,label:d,component:e=>(0,t.jsx)(u,{name:o,data:[p],description:l.description,...e})});let m=l.parameters&&l.parameters.map(e=>e.type);if(r.ObjectUtils.isNotEmpty(c.interfaces)&&r.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${o}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([a,n])=>{if(m.includes(a)){let[l,s]=[`api.${o}.${a}`,a],i={id:l,label:s,description:(0,t.jsxs)(t.Fragment,{children:[n.description," ",n.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:n.extendedTypes}),"."]})]}),children:[]};r.ObjectUtils.isNotEmpty(n.props)&&i.children.push({id:`${l}.props`,label:"Props",component:e=>(0,t.jsx)(u,{data:n.props,...e})}),r.ObjectUtils.isNotEmpty(n.callbacks)&&i.children.push({id:`${l}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(u,{data:n.callbacks,...e})}),e.children.push(i)}}),r.ObjectUtils.isNotEmpty(e.children)&&s.children.push(e)}e.push(s)}}else c.components&&Object.entries(c.components).forEach(([l,s])=>{let i={id:`api.${l}`,label:l,description:s.description,children:[]};if(r.ObjectUtils.isNotEmpty(s.props)&&r.ObjectUtils.isNotEmpty(s.props.values)&&!p("props")){let[e,a]=[`api.${l}.props`,"Props"];if(d("props",l))return;i.children.push({id:e,label:a,component:e=>(0,t.jsx)(u,{name:l,data:s.props.values,description:s.props.description,...e})})}if(r.ObjectUtils.isNotEmpty(s.callbacks)&&r.ObjectUtils.isNotEmpty(s.callbacks.values)&&!p("callbacks")){let[e,a]=[`api.${l}.callbacks`,"Callbacks"];if(d("callbacks",l))return;i.children.push({id:e,label:a,component:e=>(0,t.jsx)(u,{name:l,data:s.callbacks.values,description:s.callbacks.description,...e})})}if(r.ObjectUtils.isNotEmpty(s.methods)&&r.ObjectUtils.isNotEmpty(s.methods.values)&&!p("methods")){let[e,a]=[`api.${l}.methods`,"Methods"];if(d("methods",l))return;i.children.push({id:e,label:a,component:e=>(0,t.jsx)(u,{name:l,data:s.methods.values,description:s.methods.description,...e})})}l.toLocaleLowerCase()===a.toLowerCase()&&n(i.children,l),e.push(i)}),c.model&&Object.entries(c.model).forEach(([l,s])=>{let i={id:`api.${l}`,label:l,description:s.description,children:[]};if(r.ObjectUtils.isNotEmpty(s.props)&&r.ObjectUtils.isNotEmpty(s.props.values)&&!p("props")){let[e,a]=[`api.${l}.props`,"Props"];if(d("props",l))return;i.children.push({id:e,label:a,component:e=>(0,t.jsx)(u,{name:l,data:s.props.values,description:s.props.description,...e})})}l.toLocaleLowerCase()===a.toLowerCase()&&n(i.children,l),e.push(i)}),c.components||c.model||n(e,o)}return e},[]);return(0,s.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[n," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",n," module."]})]}),(0,t.jsx)(m.DocSections,{docs:o})]}),(0,t.jsx)(p.DocSectionNav,{docs:o})]})}e.s(["DocComponent",0,function(e){let r,[i,o]=(0,s.useState)(0),c=(0,l.useRouter)();r=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{o(e),c.replace(c.pathname)};return(0,s.useEffect)(()=>{c.asPath.includes("#api")&&o(1),c.asPath.includes("#pt")&&o(3)},[c.asPath]),(0,t.jsxs)("div",{className:(0,a.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":0===i}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:r})}),e.apiDocs?(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":1===i}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":2===i}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":3===i}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===i?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.componentDocs})]}):null,1===i?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===i?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===i?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},97776,e=>{"use strict";var t=e.i(91398),a=e.i(91788),n=e.i(10836),l=e.i(15498),s=e.i(60150),r=e.i(3935),i=e.i(51551);let o=`
@layer primereact {
    .p-float-label {
        display: block;
        position: relative;
    }
    
    .p-float-label label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        margin-top: -.5rem;
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
    }
    
    .p-float-label:has(textarea) label {
        top: 1rem;
    }
    
    .p-float-label:has(input:focus) label,
    .p-float-label:has(input.p-filled) label,
    .p-float-label:has(input:-webkit-autofill) label,
    .p-float-label:has(textarea:focus) label,
    .p-float-label:has(textarea.p-filled) label,
    .p-float-label:has(.p-inputwrapper-focus) label,
    .p-float-label:has(.p-inputwrapper-filled) label {
        top: -.75rem;
        font-size: 12px;
    }
    
    .p-float-label .p-placeholder,
    .p-float-label input::placeholder,
    .p-float-label .p-inputtext::placeholder {
        opacity: 0;
        transition-property: all;
        transition-timing-function: ease;
    }
    
    .p-float-label .p-focus .p-placeholder,
    .p-float-label input:focus::placeholder,
    .p-float-label .p-inputtext:focus::placeholder {
        opacity: 1;
        transition-property: all;
        transition-timing-function: ease;
    }
}`,c=l.ComponentBase.extend({defaultProps:{__TYPE:"FloatLabel",children:void 0},css:{classes:{root:"p-float-label"},styles:o}}),d=a.memo(a.forwardRef((e,o)=>{let d=(0,s.useMergeProps)(),u=a.useContext(n.PrimeReactContext),p=c.getProps(e,u),m=a.useRef(o),{ptm:h,cx:f,isUnstyled:x}=c.setMetaData({props:p});(0,l.useHandleStyle)(c.css.styles,x,{name:"floatlabel"}),a.useEffect(()=>{i.ObjectUtils.combinedRefs(m,o)},[m,o]);let b=d({ref:m,className:(0,r.classNames)(f("root"))},c.getOtherProps(p),h("root"));return(0,t.jsx)("span",{...b,children:p.children})}));d.displayName="FloatLabel",e.s(["FloatLabel",0,d],97776)},66082,e=>{"use strict";var t=e.i(91398),a=e.i(91788),n=e.i(10836),l=e.i(15498),s=e.i(60150),r=e.i(34366),i=e.i(64691),o=e.i(45543),c=e.i(51551),d=e.i(3935);let u=l.ComponentBase.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,children:void 0,className:null,invalid:!1,variant:null,keyfilter:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,iconPosition:null},css:{classes:{root:({props:e,isFilled:t,context:a})=>(0,d.classNames)("p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":t,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:a&&"filled"===a.inputStyle})}}}),p=a.memo(a.forwardRef((e,p)=>{let m=(0,s.useMergeProps)(),h=a.useContext(n.PrimeReactContext),f=u.getProps(e,h),{ptm:x,cx:b,isUnstyled:v}=u.setMetaData({props:f,...f.__parentMetadata,context:{disabled:f.disabled,iconPosition:f.iconPosition}});(0,l.useHandleStyle)(u.css.styles,v,{name:"inputtext",styled:!0});let j=a.useRef(p);a.useEffect(()=>{c.ObjectUtils.combinedRefs(j,p)},[j,p]);let g=a.useMemo(()=>c.ObjectUtils.isNotEmpty(f.value)||c.ObjectUtils.isNotEmpty(f.defaultValue),[f.value,f.defaultValue]),k=c.ObjectUtils.isNotEmpty(f.tooltip);a.useEffect(()=>{g||j.current?.value?o.DomHandler.addClass(j.current,"p-filled"):o.DomHandler.removeClass(j.current,"p-filled")},[f.disabled,g]);let y=m({className:(0,d.classNames)(f.className,b("root",{context:h,isFilled:g})),autoComplete:f.autoComplete,onBeforeInput:e=>{f.onBeforeInput&&f.onBeforeInput(e),f.keyfilter&&r.KeyFilter.onBeforeInput(e,f.keyfilter,f.validateOnly)},onInput:e=>{let t=e.target,a=!0;f.keyfilter&&f.validateOnly&&(a=r.KeyFilter.validate(e,f.keyfilter)),f.onInput&&f.onInput(e,a),c.ObjectUtils.isNotEmpty(t.value)?o.DomHandler.addClass(t,"p-filled"):o.DomHandler.removeClass(t,"p-filled")},onKeyDown:e=>{f.onKeyDown&&f.onKeyDown(e),f.keyfilter&&r.KeyFilter.onKeyPress(e,f.keyfilter,f.validateOnly)},onPaste:e=>{f.onPaste&&f.onPaste(e),f.keyfilter&&r.KeyFilter.onPaste(e,f.keyfilter,f.validateOnly)}},u.getOtherProps(f),x("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{ref:j,...y}),k&&(0,t.jsx)(i.Tooltip,{target:j,content:f.tooltip,pt:x("tooltip"),...f.tooltipOptions})]})}));p.displayName="InputText",e.s(["InputText",0,p],66082)},34366,e=>{"use strict";var t=e.i(45543);let a={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:e=>a.DEFAULT_MASKS[e]?a.DEFAULT_MASKS[e]:e,onBeforeInput(e,a,n){!n&&t.DomHandler.isAndroid()&&this.validateKey(e,e.data,a)},onKeyPress(e,a,n){n||t.DomHandler.isAndroid()||e.ctrlKey||e.altKey||e.metaKey||this.validateKey(e,e.key,a)},onPaste(e,t,a){if(a)return;let n=this.getRegex(t);[...e.clipboardData.getData("text")].forEach(t=>{if(!n.test(t))return e.preventDefault(),!1})},validateKey(e,t,a){null==t||!(t.length<=2)||this.getRegex(a).test(t)||e.preventDefault()},validate(e,t){let a=e.target.value,n=!0,l=this.getRegex(t);return a&&!l.test(a)&&(n=!1),n}};e.s(["KeyFilter",0,a])},3828,(e,t,a)=>{t.exports=e.r(26990)},99059,e=>{"use strict";var t=e.i(91398),a=e.i(88850),n=e.i(82948),l=e.i(5180),s=e.i(28137);function r(){let e={basic:`
<label htmlFor="date">Date</label>
<InputMask id="date" />

<span id="phone">Phone</span>
<InputMask aria-labelledby="phone" />

<InputMask aria-label="Age" />
    `};return(0,t.jsxs)(s.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["InputMask component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via ",(0,t.jsx)("i",{children:"label"})," tag combined with ",(0,t.jsx)("i",{children:"id"})," prop or using ",(0,t.jsx)("i",{children:"aria-labelledby"}),","," ",(0,t.jsx)("i",{children:"aria-label"})," props."]}),(0,t.jsx)(l.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the input."})]})})]})})]})}var i=e.i(91788),o=e.i(10836),c=e.i(20484),d=e.i(71834),u=e.i(66082),p=e.i(45543),m=e.i(51551),h=e.i(3935);let f=e.i(15498).ComponentBase.extend({defaultProps:{__TYPE:"InputMask",autoClear:!0,autoFocus:!1,className:null,disabled:!1,id:null,mask:null,maxLength:null,invalid:!1,variant:null,name:null,onBlur:null,onChange:null,onComplete:null,onFocus:null,placeholder:null,readOnly:!1,required:!1,size:null,slotChar:"_",style:null,tabIndex:null,tooltip:null,tooltipOptions:null,type:"text",unmask:!1,value:null,children:void 0},css:{classes:{root:({props:e,context:t})=>(0,h.classNames)("p-inputmask",{"p-filled":e.filled,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:t&&"filled"===t.inputStyle})}}}),x=i.memo(i.forwardRef((e,a)=>{let n=i.useContext(o.PrimeReactContext),l=f.getProps(e,n),s=i.useRef(null),r=i.useRef(null),x=i.useRef(0),b=i.useRef([]),v=i.useRef([]),j=i.useRef(0),g=i.useRef(null),k=i.useRef(!1),y=i.useRef(null),N=i.useRef(null),I=i.useRef(null),C=i.useRef(null),S=i.useRef(null),D=i.useRef(!1),M={props:l},{cx:E}=f.setMetaData(M),F=(e,t)=>{let a,n,l,r=s.current;return r&&r.offsetParent&&r===document.activeElement?("number"==typeof e?(n=e,l="number"==typeof t?t:n,r.setSelectionRange?r.setSelectionRange(n,l):r.createTextRange&&((a=r.createTextRange()).collapse(!0),a.moveEnd("character",l),a.moveStart("character",n),a.select())):r.setSelectionRange?(n=r.selectionStart,l=r.selectionEnd):document.selection&&document.selection.createRange&&(l=(n=0-(a=document.selection.createRange()).duplicate().moveStart("character",-1e5))+a.text.length),{begin:n,end:l}):null},O=()=>{for(let e=r.current;e<=x.current;e++)if(b.current[e]&&v.current[e]===P(e))return!1;return!0},P=i.useCallback(e=>e<l.slotChar.length?l.slotChar.charAt(e):l.slotChar.charAt(0),[l.slotChar]),T=()=>l.unmask?$():s.current&&s.current.value,w=e=>{for(;++e<j.current&&!b.current[e];);return e},R=(e,t)=>{let a,n;if(!(e<0)){for(a=e,n=w(t);a<j.current;a++)if(b.current[a]){if(n<j.current&&b.current[a].test(v.current[n]))v.current[a]=v.current[n],v.current[n]=P(n);else break;n=w(n)}V(),F(Math.max(r.current,e))}},_=e=>{if(k.current=!1,L(),K(e),B(),l.onBlur&&l.onBlur(e),s.current.value!==y.current){let e=document.createEvent("HTMLEvents");e.initEvent("change",!0,!1),s.current.dispatchEvent(e)}},U=(e,t)=>{let a;for(a=e;a<t&&a<j.current;a++)b.current[a]&&(v.current[a]=P(a))},V=()=>{s.current&&(s.current.value=v.current.join(""))},L=e=>{let t,a,n;N.current=!0;let i=s.current&&s.current.value,o=-1;for(t=0,n=0;t<j.current;t++)if(b.current[t]){for(v.current[t]=P(t);n++<i.length;)if(a=i.charAt(n-1),b.current[t].test(a)){v.current[t]=a,o=t;break}if(n>i.length){U(t+1,j.current);break}}else v.current[t]===i.charAt(n)&&n++,t<I.current&&(o=t);return e?V():o+1<I.current?l.autoClear||v.current.join("")===C.current?(s.current&&s.current.value&&(s.current.value=""),U(0,j.current)):V():(V(),s.current&&(s.current.value=s.current.value.substring(0,o+1))),I.current?t:r.current},A=(e,t=!1)=>{!l.readOnly&&(t||F(L(!0)),K(e),l.onComplete&&O()&&l.onComplete({originalEvent:e,value:T()}))},$=i.useCallback(()=>{let e=[];for(let t=0;t<v.current.length;t++){let a=v.current[t];b.current[t]&&a!==P(t)&&e.push(a)}return e.join("")},[P]),K=e=>{if(l.onChange){let t=l.unmask?$():e&&e.target.value;l.onChange({originalEvent:e,value:C.current!==t?t:"",stopPropagation:()=>{e.stopPropagation()},preventDefault:()=>{e.preventDefault()},target:{name:l.name,id:l.id,value:C.current!==t?t:""}})}},B=()=>{s.current&&s.current.value&&s.current.value.length>0?p.DomHandler.addClass(s.current,"p-filled"):p.DomHandler.removeClass(s.current,"p-filled")},H=e=>{let t;return s.current&&(m.ObjectUtils.isEmpty(l.value)?s.current.value="":(s.current.value=l.value,t=L(e),setTimeout(()=>{if(s.current)return V(),L(e)},10)),y.current=s.current.value),B(),t},z=i.useCallback(()=>l.unmask?l.value!==$():C.current!==s.current.value&&s.current.value!==l.value,[l.unmask,l.value,$]),W=()=>{if(l.mask){b.current=[],I.current=l.mask.length,j.current=l.mask.length,r.current=null;let e={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};D.current=p.DomHandler.isChrome()&&p.DomHandler.isAndroid();let t=l.mask.split("");for(let a=0;a<t.length;a++){let n=t[a];"?"===n?(j.current--,I.current=a):e[n]?(b.current.push(new RegExp(e[n])),null===r.current&&(r.current=b.current.length-1),a<I.current&&(x.current=b.current.length-1)):b.current.push(null)}v.current=[];for(let a=0;a<t.length;a++){let n=t[a];"?"!==n&&(e[n]?v.current.push(P(a)):v.current.push(n))}C.current=v.current.join("")}};i.useImperativeHandle(a,()=>({props:l,focus:()=>p.DomHandler.focus(s.current),getElement:()=>s.current})),i.useEffect(()=>{m.ObjectUtils.combinedRefs(s,a)},[s,a]),(0,c.useMountEffect)(()=>{W(),H()}),(0,d.useUpdateEffect)(()=>{W(),F(H(!0)),l.unmask&&K()},[l.mask]),(0,d.useUpdateEffect)(()=>{z()&&H()},[z]),(0,d.useUpdateEffect)(()=>{B()},[l.disabled]);let q=f.getOtherProps(l),Y=(0,h.classNames)(l.className,E("root",{context:n}));return(0,t.jsx)(u.InputText,{ref:s,autoFocus:l.autoFocus,autoComplete:l.autoComplete,id:l.id,type:l.type,name:l.name,style:l.style,className:Y,...q,placeholder:l.placeholder,size:l.size,maxLength:l.maxLength,tabIndex:l.tabIndex,disabled:l.disabled,invalid:l.invalid,readOnly:l.readOnly,onFocus:e=>{let t;!l.readOnly&&(k.current=!0,clearTimeout(S.current),s.current?y.current=s.current.value:y.current="",t=L()||0,S.current=setTimeout(()=>{s.current===document.activeElement&&(V(),t===l.mask.replace("?","").length?F(0,t):F(t),B())},100),l.onFocus&&l.onFocus(e))},onBlur:_,onKeyDown:e=>{let t,a,n;if(l.readOnly)return;let r=e.which||e.keyCode;if(g.current=s.current.value,8===r||46===r||p.DomHandler.isIOS()&&127===r){if(!(t=F()))return;a=t.begin,(n=t.end)-a==0&&(a=46!==r?(e=>{for(;--e>=0&&!b.current[e];);return e})(a):n=w(a-1),n=46===r?w(n):n),U(a,n),R(a,n-1),K(e),e.preventDefault()}else 13===r?(_(e),K(e)):27===r&&(s.current.value=y.current,F(0,L()),K(e),e.preventDefault())},onKeyPress:e=>{let t,a,n,s;if(l.readOnly)return;let r=F();if(!r)return;let i=e.which||e.keyCode;if(!e.ctrlKey&&!e.altKey&&!e.metaKey&&!(i<32)){if(i&&13!==i){if(r.end-r.begin!=0&&(U(r.begin,r.end),R(r.begin,r.end-1)),(t=w(r.begin-1))<j.current&&(a=String.fromCharCode(i),b.current[t].test(a))){let e,l,i,o;for(e=t,l=P(t);e<j.current;e++)if(b.current[e])if(i=w(e),o=v.current[e],v.current[e]=l,i<j.current&&b.current[i].test(o))l=o;else break;v.current[t]=a,V(),n=w(t),p.DomHandler.isAndroid()?setTimeout(()=>{F(n)},0):F(n),r.begin<=x.current&&(s=O())}e.preventDefault()}K(e),l.onComplete&&s&&l.onComplete({originalEvent:e,value:T()})}},onInput:e=>{D.current?(e=>{let t=s.current.value,a=F();if(a){if(g.current.length&&g.current.length>t.length){for(L(!0);a.begin>0&&!b.current[a.begin-1];)a.begin--;if(0===a.begin)for(;a.begin<r.current&&!b.current[a.begin];)a.begin++;F(a.begin,a.begin)}else{for(L(!0);a.begin<j.current&&!b.current[a.begin];)a.begin++;F(a.begin,a.begin)}l.onComplete&&O()&&l.onComplete({originalEvent:e,value:T()}),K(e)}})(e):A(e)},onPaste:e=>A(e,!0),required:l.required,tooltip:l.tooltip,tooltipOptions:l.tooltipOptions,pt:l.pt,unstyled:l.unstyled,__parentMetadata:{parent:M}})}));function b(e){let[a,n]=(0,i.useState)(),r={basic:`
<InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999" />
        `,javascript:`
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function BasicDemo() {
    const [value, setValue] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";

export default function BasicDemo() {
    const [value, setValue] = useState<string | undefined>();

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e: InputMaskChangeEvent) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["InputMask is used as a controlled input with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties along with the ",(0,t.jsx)("i",{children:"mask"})," property to define the mask."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(x,{value:a,onChange:e=>n(e.target.value),mask:"99-999999",placeholder:"99-999999"})}),(0,t.jsx)(l.DocSectionCode,{code:r})]})}function v(e){let a={basic:`
<InputMask mask="99-999999" placeholder="99-999999" disabled />
        `,javascript:`
import React from 'react'; 
import { InputMask } from "primereact/inputmask";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputMask mask="99-999999" placeholder="99-999999" disabled />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { InputMask } from "primereact/inputmask";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputMask mask="99-999999" placeholder="99-999999" disabled />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(x,{mask:"99-999999",placeholder:"99-999999",disabled:!0})}),(0,t.jsx)(l.DocSectionCode,{code:a})]})}function j(e){let[a,n]=(0,i.useState)(),r={basic:`
<InputMask variant="filled" value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999" />
        `,javascript:`
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function FilledDemo() {
    const [value, setValue] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputMask variant="filled" value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";

export default function FilledDemo() {
    const [value, setValue] = useState<string | undefined>();

    return (
        <div className="card flex justify-content-center">
            <InputMask variant="filled" value={value} onChange={(e: InputMaskChangeEvent) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specify the ",(0,t.jsx)("i",{children:"variant"})," property as ",(0,t.jsx)("i",{children:"filled"})," to display the component with a higher visual emphasis than the default ",(0,t.jsx)("i",{children:"outlined"})," style."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(x,{variant:"filled",value:a,onChange:e=>n(e.target.value),mask:"99-999999",placeholder:"99-999999"})}),(0,t.jsx)(l.DocSectionCode,{code:r})]})}x.displayName="InputMask";var g=e.i(97776),k=e.i(41158);function y(e){let[a,n]=(0,i.useState)(),r={basic:`
<FloatLabel>
    <InputMask id="ssn_input" value={value} onChange={(e) => setValue(e.target.value)} mask="999-99-9999" />
    <label htmlFor="ssn_input">SSN</label>
</FloatLabel>
        `,javascript:`
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { FloatLabel } from "primereact/floatlabel";

export default function FloatLabelDemo() {
    const [value, setValue] = useState();

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputMask id="ssn_input" value={value} onChange={(e) => setValue(e.target.value)} mask="999-99-9999" />
                <label htmlFor="ssn_input">SSN</label>
            </FloatLabel>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";
import { FloatLabel } from "primereact/floatlabel";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string | undefined>();

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputMask id="ssn_input" value={value} onChange={(e: InputMaskChangeEvent) => setValue(e.target.value)} mask="999-99-9999" />
                <label htmlFor="ssn_input">SSN</label>
            </FloatLabel>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A floating label appears on top of the input field when focused. Visit ",(0,t.jsx)(k.default,{href:"/floatlabel",children:"FloatLabel"})," documentation for more information."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)(g.FloatLabel,{children:[(0,t.jsx)(x,{id:"ssn_input",value:a,onChange:e=>n(e.target.value),mask:"999-99-9999"}),(0,t.jsx)("label",{htmlFor:"ssn_input",children:"SSN"})]})}),(0,t.jsx)(l.DocSectionCode,{code:r})]})}function N(e){let a={basic:`
import { InputMask } from 'primereact/inputmask';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)(l.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function I(e){let a={basic:`
<InputMask invalid mask="99-999999" placeholder="99-999999" />
        `,javascript:`
import React from 'react'; 
import { InputMask } from "primereact/inputmask";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputMask invalid mask="99-999999" placeholder="99-999999" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { InputMask } from "primereact/inputmask";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputMask invalid mask="99-999999" placeholder="99-999999" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(x,{invalid:!0,mask:"99-999999",placeholder:"99-999999"})}),(0,t.jsx)(l.DocSectionCode,{code:a})]})}function C(e){let a={basic:`
<label htmlFor="ssn" className="font-bold block mb-2">SSN</label>
<InputMask id="ssn" mask="999-99-9999" placeholder="999-99-9999"></InputMask>

<label htmlFor="phone" className="font-bold block mb-2">Phone</label>
<InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>

<label htmlFor="serial" className="font-bold block mb-2">Serial</label>
<InputMask id="serial" mask="a*-999-a999" placeholder="a*-999-a999"></InputMask>
        `,javascript:`
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function MaskDemo() {
    return (
        <div className="card p-fluid flex flex-wrap gap-3">
            <div className="flex-auto">
                <label htmlFor="ssn" className="font-bold block mb-2">SSN</label>
                <InputMask id="ssn" mask="999-99-9999" placeholder="999-99-9999"></InputMask>
            </div>

            <div className="flex-auto">
                <label htmlFor="phone" className="font-bold block mb-2">Phone</label>
                <InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>
            </div>

            <div className="flex-auto">
                <label htmlFor="serial" className="font-bold block mb-2">Serial</label>
                <InputMask id="serial" mask="a*-999-a999" placeholder="a*-999-a999"></InputMask>
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function MaskDemo() {
    return (
        <div className="card p-fluid flex flex-wrap gap-3">
            <div className="flex-auto">
                <label htmlFor="ssn" className="font-bold block mb-2">SSN</label>
                <InputMask id="ssn" mask="999-99-9999" placeholder="999-99-9999"></InputMask>
            </div>

            <div className="flex-auto">
                <label htmlFor="phone" className="font-bold block mb-2">Phone</label>
                <InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>
            </div>

            <div className="flex-auto">
                <label htmlFor="serial" className="font-bold block mb-2">Serial</label>
                <InputMask id="serial" mask="a*-999-a999" placeholder="a*-999-a999"></InputMask>
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Mask format can be a combination of the following definitions; ",(0,t.jsx)("i",{children:"a"})," for alphabetic characters, ",(0,t.jsx)("i",{children:"9"})," for numeric characters and ",(0,t.jsx)("i",{children:"*"})," for alphanumberic characters. In addition, formatting characters like ",(0,t.jsx)("i",{children:"("})," ,"," ",(0,t.jsx)("i",{children:")"})," , ",(0,t.jsx)("i",{children:"-"})," are also accepted."]})}),(0,t.jsxs)("div",{className:"card p-fluid flex flex-wrap gap-3",children:[(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"ssn",className:"font-bold block mb-2",children:"SSN"}),(0,t.jsx)(x,{id:"ssn",mask:"999-99-9999",placeholder:"999-99-9999"})]}),(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"phone",className:"font-bold block mb-2",children:"Phone"}),(0,t.jsx)(x,{id:"phone",mask:"(999) 999-9999",placeholder:"(999) 999-9999"})]}),(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"serial",className:"font-bold block mb-2",children:"Serial"}),(0,t.jsx)(x,{id:"serial",mask:"a*-999-a999",placeholder:"a*-999-a999"})]})]}),(0,t.jsx)(l.DocSectionCode,{code:a})]})}function S(e){let[a,n]=(0,i.useState)(),r={basic:`
<InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999"  />
        `,javascript:`
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function OptionalDemo() {
    const [value, setValue] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputMask, InputMaskChangeEvent} from "primereact/inputmask";

export default function OptionalDemo() {
    const [value, setValue] = useState<string | undefined>();

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e: InputMaskChangeEvent) => setValue(e.target.value)} mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When the input does not complete the mask definition, it is cleared by default. Use ",(0,t.jsx)("i",{children:"autoClear"})," property to control this behavior. In addition, ",(0,t.jsx)("i",{children:"?"})," is used to mark anything after the question mark optional."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(x,{value:a,onChange:e=>n(e.target.value),mask:"(999) 999-9999? x999",placeholder:"(999) 999-9999? x999"})}),(0,t.jsx)(l.DocSectionCode,{code:r})]})}let D=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"inputmask"})})]});function M(e){let[a,n]=(0,i.useState)(),r={basic:`
<InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
        `,javascript:`
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function SlotCharDemo() {
    const [value, setValue] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy"/>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";

export default function SlotCharDemo() {
    const [value, setValue] = useState<string | undefined>();

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e: InputMaskChangeEvent) => setValue(e.target.value)} mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy"/>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Default placeholder for a mask is underscore that can be customized using ",(0,t.jsx)("i",{children:"slotChar"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(x,{value:a,onChange:e=>n(e.target.value),mask:"99/99/9999",placeholder:"99/99/9999",slotChar:"mm/dd/yyyy"})}),(0,t.jsx)(l.DocSectionCode,{code:r})]})}function E(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-inputtext"}),(0,t.jsx)("td",{children:"Input element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-inputmask"}),(0,t.jsx)("td",{children:"Input element"})]})]})]})})]})}function F(e){let a={basic:`
const Tailwind = {
    inputmask: {
        root: ({ props, context }) => ({
            className: classNames(
                'm-0',
                'font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border transition-colors duration-200 appearance-none rounded-lg',
                {
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]':
                        !context.disabled,
                    'hover:border-blue-500': !props.invalid && !context.disabled,
                    'opacity-60 select-none pointer-events-none cursor-default': context.disabled,
                    'border-gray-300 dark:border-blue-900/40': !props.invalid,
                    'border-red-500 hover:border-red-500/80 focus:border-red-500':
                        props.invalid && !context.disabled,
                    'border-red-500/50': props.invalid && context.disabled,
                },
                {
                    'text-lg px-4 py-4': props.size === 'large',
                    'text-xs px-2 py-2': props.size === 'small',
                    'p-3 text-base': !props.size || typeof props.size === 'number'
                },
                {
                    'pl-8': context.iconPosition === 'left',
                    'pr-8': props.iconPosition === 'right'
                }
            ),
        }),
    }
}
        `},n={javascript:`
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function UnstyledDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-center">
            <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(k.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(l.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(l.DocSectionCode,{code:n,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:D},{id:"pt.inputmask.options",label:"InputMask PT Options",component:a.default}],l=(0,t.jsxs)("span",{children:["InputMask does not have a specific API for PassThrough options, but it does support all the pass through options of"," ",(0,t.jsx)(k.default,{href:"/inputtext/#pt.inputtext.options",target:"_blank",children:"InputText"})]});return(0,t.jsx)(n.DocComponent,{title:"React Mask Component",header:"InputMask",description:"InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.",componentDocs:[{id:"import",label:"Import",component:N},{id:"basic",label:"Basic",component:b},{id:"mask",label:"Mask",component:C},{id:"optional",label:"Optional",component:S},{id:"slotchar",label:"Slot Char",component:M},{id:"floatlabel",label:"Float Label",component:y},{id:"filled",label:"Filled",component:j},{id:"invalid",label:"Invalid",component:I},{id:"disabled",label:"Disabled",component:v},{id:"accessibility",label:"Accessibility",component:r}],apiDocs:["InputMask"],ptDocs:e,ptDescription:l,themingDocs:[{id:"styled",label:"Styled",component:E},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:F}]}]})}],99059)},54520,(e,t,a)=>{let n="/inputmask";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(99059)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);