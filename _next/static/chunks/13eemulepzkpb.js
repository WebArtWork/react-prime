(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),a=e.i(91788);e.s(["CodeHighlight",0,function(e){let s=(0,a.useRef)(),i=`language-${e.lang||"jsx"}`;return(0,a.useEffect)(()=>{window.Prism.highlightElement(s.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:s,className:i,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),a=e.i(3935),s=e.i(58678),i=e.i(3828),l=e.i(91788),n=e.i(51551),r=e.i(72124),o=e.i(41158),c=e.i(87914),d=e.i(28137);let p=e=>{let s=(0,l.useContext)(c.default),{id:r,data:p,name:u,description:m,allowLink:h=!0}=e,x=r.startsWith("pt."),f=(0,i.useRouter)();if(n.ObjectUtils.isNotEmpty(p)){let i=Object.keys(p[0]),c=(e,t)=>{let a=document.getElementById(e);a&&a.parentElement.scrollIntoView({block:"start",behavior:t})},j=(e,s,i)=>{if(h&&e)return e.split("|").map((e,n)=>{if(e.includes(u)){let a=e.indexOf(u),s=e.substring(a).replace(/(\[|\]|<|>).*$/gm,"").trim(),i=u===s?`api.${u}`:`api.${u}.${s===`${u}Props`?"props":s}`;return(0,t.jsxs)(l.default.Fragment,{children:[0!==n?"|":"",(0,t.jsx)(o.default,{href:f.basePath+f.pathname+`#${i}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(i,"smooth"),children:e})})]},n)}return(0,t.jsxs)(l.default.Fragment,{children:[0!==n?"|":"",s?(0,t.jsxs)("span",{id:r+"."+e,className:(0,a.classNames)("doc-option-name",{"line-through cursor-pointer":!!i}),title:i,children:[e,(0,t.jsx)(o.default,{href:f.basePath+f.pathname+`#${r+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(r+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},n)});let n=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return s?(0,t.jsxs)("span",{id:r+"."+n,className:(0,a.classNames)("doc-option-name",{"line-through cursor-pointer":!!i}),title:i,children:[n,(0,t.jsx)(o.default,{href:f.basePath+f.pathname+`#${r+"."+n}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(r+"."+n),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):n},b=(0,t.jsx)(l.default.Fragment,{children:x?(0,t.jsx)("tr",{children:i.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:i.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),v=(0,t.jsx)(l.default.Fragment,{children:p.map((e,i)=>{if(x){let{value:a,label:s,description:l}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:a}),(0,t.jsx)("td",{children:s}),(0,t.jsx)("td",{children:l})]},i)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([i,l],r)=>"readonly"!==i&&"optional"!==i&&"deprecated"!==i&&(0,t.jsx)("td",{children:"parameters"===i?l.map((e,a)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:j(e.type)}),(0,t.jsx)("br",{})]},a)):"default"===i?(0,t.jsx)("div",{className:(0,a.classNames)("doc-option-default",{"doc-option-dark":s.darkMode,"doc-option-light":!s.darkMode}),children:n.ObjectUtils.isEmpty(l)?"null":j(l,"name"===i,e.deprecated)}):"type"===i?(0,t.jsx)("span",{className:"doc-option-type",children:j(l,"name"===i,e.deprecated)}):"returnType"===i?(0,t.jsx)("div",{className:(0,a.classNames)("doc-option-returnType",{"doc-option-dark":s.darkMode,"doc-option-light":!s.darkMode}),children:j(l,"name"===i,e.deprecated)}):"description"===i||"values"===i?(0,t.jsx)("span",{className:"doc-option-description",children:l}):j(l,"name"===i,e.deprecated)},r))},i)})});return(0,t.jsxs)(l.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:m})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:b}),(0,t.jsx)("tbody",{children:v})]})})]},r)}return null};e.s(["default",0,p],88850);var u=e.i(71864),m=e.i(38076);function h(e){let{doc:a,header:s}=e,i=e.apiExclude,o=a.reduce((e,a)=>{let s,l=a.split("."),o=(s=l[0])&&s[0].toUpperCase()+s.slice(1)||"",c=r.default[o.toLowerCase()],d=(e,t)=>i&&i[e]&&i[e].includes(t),u=e=>i&&i[e]&&"excludeAll"===i[e];if(c){let s=(e,a)=>{if(n.ObjectUtils.isNotEmpty(c.events)&&n.ObjectUtils.isNotEmpty(c.events.values)&&!u("events")){let s={id:`api.${a}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,i])=>{let[l,n]=[`api.${a}.${e}`,e];d("event",e)||s.children.push({id:l,label:n,component:e=>(0,t.jsx)(p,{name:a,data:i.props,description:(0,t.jsxs)(t.Fragment,{children:[i.description," See ",(0,t.jsx)("i",{children:i.relatedProp}),"."]}),...e})})}),e.push(s)}if(n.ObjectUtils.isNotEmpty(c.interfaces)&&n.ObjectUtils.isNotEmpty(c.interfaces.values)&&!u("interfaces")){let s={id:`api.${a}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,i])=>{let[l,n]=[`api.${a}.${e}`,e];d("interfaces",e)||s.children.push({id:l,label:n,component:e=>(0,t.jsx)(p,{name:a,data:i.props,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),...e})})}),e.push(s)}if(n.ObjectUtils.isNotEmpty(c.types)&&n.ObjectUtils.isNotEmpty(c.types.values)&&!u("types")){let s={id:`api.${a}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,i])=>{let[l,n]=[`api.${a}.${e}`,e];d("types",e)||s.children.push({id:l,label:n,component:e=>(0,t.jsx)(p,{name:a,data:[i],allowLink:!1,...e})})}),e.push(s)}};if(3===l.length){let a=l[1],s=l[2];if("functions"===a){let i=c[a].values[s],l={id:`api.${o}`,label:o,children:[]},[r,d]=[`api.${o}.function`,"Function"],u=Object.entries(i).reduce((e,[t,a])=>("description"!==t&&(e[t]=a),e),{});l.children.push({id:r,label:d,component:e=>(0,t.jsx)(p,{name:o,data:[u],description:i.description,...e})});let m=i.parameters&&i.parameters.map(e=>e.type);if(n.ObjectUtils.isNotEmpty(c.interfaces)&&n.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${o}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([a,s])=>{if(m.includes(a)){let[i,l]=[`api.${o}.${a}`,a],r={id:i,label:l,description:(0,t.jsxs)(t.Fragment,{children:[s.description," ",s.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:s.extendedTypes}),"."]})]}),children:[]};n.ObjectUtils.isNotEmpty(s.props)&&r.children.push({id:`${i}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:s.props,...e})}),n.ObjectUtils.isNotEmpty(s.callbacks)&&r.children.push({id:`${i}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:s.callbacks,...e})}),e.children.push(r)}}),n.ObjectUtils.isNotEmpty(e.children)&&l.children.push(e)}e.push(l)}}else c.components&&Object.entries(c.components).forEach(([i,l])=>{let r={id:`api.${i}`,label:i,description:l.description,children:[]};if(n.ObjectUtils.isNotEmpty(l.props)&&n.ObjectUtils.isNotEmpty(l.props.values)&&!u("props")){let[e,a]=[`api.${i}.props`,"Props"];if(d("props",i))return;r.children.push({id:e,label:a,component:e=>(0,t.jsx)(p,{name:i,data:l.props.values,description:l.props.description,...e})})}if(n.ObjectUtils.isNotEmpty(l.callbacks)&&n.ObjectUtils.isNotEmpty(l.callbacks.values)&&!u("callbacks")){let[e,a]=[`api.${i}.callbacks`,"Callbacks"];if(d("callbacks",i))return;r.children.push({id:e,label:a,component:e=>(0,t.jsx)(p,{name:i,data:l.callbacks.values,description:l.callbacks.description,...e})})}if(n.ObjectUtils.isNotEmpty(l.methods)&&n.ObjectUtils.isNotEmpty(l.methods.values)&&!u("methods")){let[e,a]=[`api.${i}.methods`,"Methods"];if(d("methods",i))return;r.children.push({id:e,label:a,component:e=>(0,t.jsx)(p,{name:i,data:l.methods.values,description:l.methods.description,...e})})}i.toLocaleLowerCase()===a.toLowerCase()&&s(r.children,i),e.push(r)}),c.model&&Object.entries(c.model).forEach(([i,l])=>{let r={id:`api.${i}`,label:i,description:l.description,children:[]};if(n.ObjectUtils.isNotEmpty(l.props)&&n.ObjectUtils.isNotEmpty(l.props.values)&&!u("props")){let[e,a]=[`api.${i}.props`,"Props"];if(d("props",i))return;r.children.push({id:e,label:a,component:e=>(0,t.jsx)(p,{name:i,data:l.props.values,description:l.props.description,...e})})}i.toLocaleLowerCase()===a.toLowerCase()&&s(r.children,i),e.push(r)}),c.components||c.model||s(e,o)}return e},[]);return(0,l.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[s," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",s," module."]})]}),(0,t.jsx)(m.DocSections,{docs:o})]}),(0,t.jsx)(u.DocSectionNav,{docs:o})]})}e.s(["DocComponent",0,function(e){let n,[r,o]=(0,l.useState)(0),c=(0,i.useRouter)();n=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{o(e),c.replace(c.pathname)};return(0,l.useEffect)(()=>{c.asPath.includes("#api")&&o(1),c.asPath.includes("#pt")&&o(3)},[c.asPath]),(0,t.jsxs)("div",{className:(0,a.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(s.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":0===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:n})}),e.apiDocs?(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":1===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":2===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,a.classNames)({"doc-tabmenu-active":3===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===r?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.componentDocs})]}):null,1===r?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===r?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===r?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},97776,e=>{"use strict";var t=e.i(91398),a=e.i(91788),s=e.i(10836),i=e.i(15498),l=e.i(60150),n=e.i(3935),r=e.i(51551);let o=`
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
}`,c=i.ComponentBase.extend({defaultProps:{__TYPE:"FloatLabel",children:void 0},css:{classes:{root:"p-float-label"},styles:o}}),d=a.memo(a.forwardRef((e,o)=>{let d=(0,l.useMergeProps)(),p=a.useContext(s.PrimeReactContext),u=c.getProps(e,p),m=a.useRef(o),{ptm:h,cx:x,isUnstyled:f}=c.setMetaData({props:u});(0,i.useHandleStyle)(c.css.styles,f,{name:"floatlabel"}),a.useEffect(()=>{r.ObjectUtils.combinedRefs(m,o)},[m,o]);let j=d({ref:m,className:(0,n.classNames)(x("root"))},c.getOtherProps(u),h("root"));return(0,t.jsx)("span",{...j,children:u.children})}));d.displayName="FloatLabel",e.s(["FloatLabel",0,d],97776)},41978,e=>{"use strict";var t=e.i(91398),a=e.i(91788),s=e.i(10836),i=e.i(15498),l=e.i(60150),n=e.i(34366),r=e.i(64691),o=e.i(45543),c=e.i(51551),d=e.i(3935);let p=`
@layer primereact {
    .p-inputtextarea-resizable {
        overflow: hidden;
        resize: none;
    }
    
    .p-fluid .p-inputtextarea {
        width: 100%;
    }
}
`,u=i.ComponentBase.extend({defaultProps:{__TYPE:"InputTextarea",__parentMetadata:null,autoResize:!1,invalid:!1,variant:null,keyfilter:null,onBlur:null,onFocus:null,onBeforeInput:null,onInput:null,onKeyDown:null,onKeyUp:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,children:void 0,className:null},css:{classes:{root:({props:e,context:t,isFilled:a})=>(0,d.classNames)("p-inputtextarea p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":a,"p-inputtextarea-resizable":e.autoResize,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:t&&"filled"===t.inputStyle})},styles:p}}),m=a.memo(a.forwardRef((e,p)=>{let m=(0,l.useMergeProps)(),h=a.useContext(s.PrimeReactContext),x=u.getProps(e,h),f=a.useRef(p),j=a.useRef(0),{ptm:b,cx:v,isUnstyled:y}=u.setMetaData({props:x,...x.__parentMetadata,context:{disabled:x.disabled}});(0,i.useHandleStyle)(u.css.styles,y,{name:"inputtextarea"});let g=e=>{let t=f.current;t&&T()&&(j.current||(j.current=t.scrollHeight,t.style.overflow="hidden"),(j.current!==t.scrollHeight||e)&&(t.style.height="",t.style.height=t.scrollHeight+"px",parseFloat(t.style.height)>=parseFloat(t.style.maxHeight)?(t.style.overflowY="scroll",t.style.height=t.style.maxHeight):t.style.overflow="hidden",j.current=t.scrollHeight))},T=()=>{if(o.DomHandler.isVisible(f.current)){let e=f.current.getBoundingClientRect();return e.width>0&&e.height>0}return!1};a.useEffect(()=>{c.ObjectUtils.combinedRefs(f,p)},[f,p]),a.useEffect(()=>{x.autoResize&&g(!0)},[x.autoResize,x.value]);let N=a.useMemo(()=>c.ObjectUtils.isNotEmpty(x.value)||c.ObjectUtils.isNotEmpty(x.defaultValue),[x.value,x.defaultValue]),D=c.ObjectUtils.isNotEmpty(x.tooltip),w=m({ref:f,className:(0,d.classNames)(x.className,v("root",{context:h,isFilled:N})),autoComplete:x.autoComplete,onFocus:e=>{x.autoResize&&g(),x.onFocus&&x.onFocus(e)},onBlur:e=>{x.autoResize&&g(),x.onBlur&&x.onBlur(e)},onKeyUp:e=>{x.autoResize&&g(),x.onKeyUp&&x.onKeyUp(e)},onKeyDown:e=>{x.onKeyDown&&x.onKeyDown(e),x.keyfilter&&n.KeyFilter.onKeyPress(e,x.keyfilter,x.validateOnly)},onBeforeInput:e=>{x.onBeforeInput&&x.onBeforeInput(e),x.keyfilter&&n.KeyFilter.onBeforeInput(e,x.keyfilter,x.validateOnly)},onInput:e=>{let t=e.target;x.autoResize&&g(c.ObjectUtils.isEmpty(t.value)),x.onInput&&x.onInput(e),c.ObjectUtils.isNotEmpty(t.value)?o.DomHandler.addClass(t,"p-filled"):o.DomHandler.removeClass(t,"p-filled")},onPaste:e=>{x.onPaste&&x.onPaste(e),x.keyfilter&&n.KeyFilter.onPaste(e,x.keyfilter,x.validateOnly)}},u.getOtherProps(x),b("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("textarea",{...w}),D&&(0,t.jsx)(r.Tooltip,{target:f,content:x.tooltip,pt:b("tooltip"),...x.tooltipOptions})]})}));m.displayName="InputTextarea",e.s(["InputTextarea",0,m],41978)},34366,e=>{"use strict";var t=e.i(45543);let a={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:e=>a.DEFAULT_MASKS[e]?a.DEFAULT_MASKS[e]:e,onBeforeInput(e,a,s){!s&&t.DomHandler.isAndroid()&&this.validateKey(e,e.data,a)},onKeyPress(e,a,s){s||t.DomHandler.isAndroid()||e.ctrlKey||e.altKey||e.metaKey||this.validateKey(e,e.key,a)},onPaste(e,t,a){if(a)return;let s=this.getRegex(t);[...e.clipboardData.getData("text")].forEach(t=>{if(!s.test(t))return e.preventDefault(),!1})},validateKey(e,t,a){null==t||!(t.length<=2)||this.getRegex(a).test(t)||e.preventDefault()},validate(e,t){let a=e.target.value,s=!0,i=this.getRegex(t);return a&&!i.test(a)&&(s=!1),s}};e.s(["KeyFilter",0,a])},3828,(e,t,a)=>{t.exports=e.r(26990)},69973,e=>{"use strict";var t=e.i(91398),a=e.i(88850),s=e.i(82948),i=e.i(5180),l=e.i(28137);function n(){let e={basic:`
<label htmlFor="address1">Address 1</label>
<InputTextarea id="address1" />

<span id="address2">Address 2</span>
<InputTextarea aria-labelledby="address2" />

<InputTextarea aria-label="Address Details"/>
    `};return(0,t.jsxs)(l.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["InputTextarea component renders a native textarea element that implicitly includes any passed prop. Value to describe the component can either be provided via ",(0,t.jsx)("i",{children:"label"})," tag combined with ",(0,t.jsx)("i",{children:"id"})," prop or using"," ",(0,t.jsx)("i",{children:"aria-labelledby"}),", ",(0,t.jsx)("i",{children:"aria-label"})," props."]}),(0,t.jsx)(i.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the input."})]})})]})})]})}var r=e.i(41978),o=e.i(91788);function c(e){let[a,s]=(0,o.useState)(""),n={basic:`
<InputTextarea autoResize value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        `,javascript:`
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function AutoResizeDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputTextarea autoResize value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function AutoResizeDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputTextarea autoResize value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} rows={5} cols={30} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"autoResize"})," is enabled, textarea grows instead of displaying a scrollbar."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(r.InputTextarea,{autoResize:!0,rows:5,cols:30,value:a,onChange:e=>s(e.target.value)})}),(0,t.jsx)(i.DocSectionCode,{code:n})]})}function d(e){let[a,s]=(0,o.useState)(""),n={basic:`
<InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        `,javascript:`
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputTextarea value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} rows={5} cols={30} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Textarea is used as a controlled input with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(r.InputTextarea,{value:a,onChange:e=>s(e.target.value),rows:5,cols:30})}),(0,t.jsx)(i.DocSectionCode,{code:n})]})}function p(e){let a={basic:`
<InputTextarea disabled rows={5} cols={30} />
        `,javascript:`
import React from 'react'; 
import { InputTextarea } from "primereact/inputtextarea";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputTextarea disabled rows={5} cols={30} value="Disabled" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { InputTextarea } from "primereact/inputtextarea";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputTextarea disabled rows={5} cols={30} value="Disabled" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(r.InputTextarea,{disabled:!0,rows:5,cols:30,value:"Disabled"})}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}function u(e){let[a,s]=(0,o.useState)(""),n={basic:`
<InputTextarea variant="filled" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        `,javascript:`
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function FilledDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputTextarea variant="filled" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function FilledDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputTextarea variant="filled" value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} rows={5} cols={30} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specify the ",(0,t.jsx)("i",{children:"variant"})," property as ",(0,t.jsx)("i",{children:"filled"})," to display the component with a higher visual emphasis than the default ",(0,t.jsx)("i",{children:"outlined"})," style."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(r.InputTextarea,{variant:"filled",value:a,onChange:e=>s(e.target.value),rows:5,cols:30})}),(0,t.jsx)(i.DocSectionCode,{code:n})]})}var m=e.i(97776),h=e.i(41158);function x(e){let[a,s]=(0,o.useState)(""),n={basic:`
<FloatLabel>
    <InputTextarea id="username" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
    <label htmlFor="username">Username</label>
</FloatLabel>
        `,javascript:`
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";

export default function FloatLabelDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputTextarea id="description" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                <label htmlFor="description">Description</label>
            </FloatLabel>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { FloatLabel } from "primereact/floatlabel";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputTextarea id="description" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                <label htmlFor="description">Description</label>
            </FloatLabel>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A floating label appears on top of the input field when focused. Visit ",(0,t.jsx)(h.default,{href:"/floatlabel",children:"FloatLabel"})," documentation for more information."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)(m.FloatLabel,{children:[(0,t.jsx)(r.InputTextarea,{id:"description",value:a,onChange:e=>s(e.target.value),rows:5,cols:30}),(0,t.jsx)("label",{htmlFor:"description",children:"Description"})]})}),(0,t.jsx)(i.DocSectionCode,{code:n})]})}function f(e){let a={basic:`
import { InputTextarea } from 'primereact/inputtextarea';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function j(e){let a={basic:`
<InputTextarea invalid rows={5} cols={30} />
        `,javascript:`
import React from 'react'; 
import { InputTextarea } from "primereact/inputtextarea";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputTextarea invalid rows={5} cols={30} />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { InputTextarea } from "primereact/inputtextarea";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputTextarea invalid rows={5} cols={30} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(r.InputTextarea,{invalid:!0,rows:5,cols:30})}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}function b(e){let a={basic:`
<InputTextarea keyfilter="int" placeholder="Integers" rows={5} cols={30} />
        `,javascript:`
import React from 'react'; 
import { InputTextarea } from "primereact/inputtextarea";

export default function KeyFilterDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputTextarea keyfilter="int" placeholder="Integers" rows={5} cols={30}/>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { InputTextarea } from "primereact/inputtextarea";

export default function KeyFilterDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputTextarea keyfilter="int" placeholder="Integers" rows={5} cols={30}/>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["InputTextarea has built-in key filtering support to block certain keys, refer to ",(0,t.jsx)(h.default,{href:"/keyfilter",children:"keyfilter"})," page for more information."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(r.InputTextarea,{keyfilter:"int",placeholder:"Integers",rows:5,cols:30})}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}let v=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/inputtextarea.jpg",alt:"inputtextarea"})})]});function y(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-inputtextarea"}),(0,t.jsx)("td",{children:"Textarea element"})]})})]})})]})}function g(e){let a={basic:`
const Tailwind = {
    inputtextarea: {
        root: ({ context }) => ({
            className: classNames(
                'm-0',
                'font-sans text-base text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled }
            )
        })
    }
}
        `},s={javascript:`
import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

export default function UnstyledDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-center">
            <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(l.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(h.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(i.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(i.DocSectionCode,{code:s,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:v},{id:"pt.inputtextarea.options",label:"InputTextarea PT Options",component:a.default}];return(0,t.jsx)(s.DocComponent,{title:"React Textarea Component",header:"InputTextarea",description:"InputTextarea adds styling and autoResize functionality to standard textarea element.",componentDocs:[{id:"import",label:"Import",component:f},{id:"basic",label:"Basic",component:d},{id:"autoresize",label:"Auto Resize",component:c},{id:"keyfilter",label:"Key Filter",component:b},{id:"floatlabel",label:"Float Label",component:x},{id:"filled",label:"Filled",component:u},{id:"invalid",label:"Invalid",component:j},{id:"disabled",label:"Disabled",component:p},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["InputTextarea"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:y},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:g}]}]})}],69973)},35035,(e,t,a)=>{let s="/inputtextarea";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(69973)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})}]);