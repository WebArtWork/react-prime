(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),i=e.i(91788);e.s(["CodeHighlight",0,function(e){let a=(0,i.useRef)(),s=`language-${e.lang||"jsx"}`;return(0,i.useEffect)(()=>{window.Prism.highlightElement(a.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:a,className:s,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),i=e.i(3935),a=e.i(58678),s=e.i(3828),l=e.i(91788),n=e.i(51551),r=e.i(72124),o=e.i(41158),c=e.i(87914),d=e.i(28137);let p=e=>{let a=(0,l.useContext)(c.default),{id:r,data:p,name:u,description:h,allowLink:m=!0}=e,f=r.startsWith("pt."),x=(0,s.useRouter)();if(n.ObjectUtils.isNotEmpty(p)){let s=Object.keys(p[0]),c=(e,t)=>{let i=document.getElementById(e);i&&i.parentElement.scrollIntoView({block:"start",behavior:t})},v=(e,a,s)=>{if(m&&e)return e.split("|").map((e,n)=>{if(e.includes(u)){let i=e.indexOf(u),a=e.substring(i).replace(/(\[|\]|<|>).*$/gm,"").trim(),s=u===a?`api.${u}`:`api.${u}.${a===`${u}Props`?"props":a}`;return(0,t.jsxs)(l.default.Fragment,{children:[0!==n?"|":"",(0,t.jsx)(o.default,{href:x.basePath+x.pathname+`#${s}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(s,"smooth"),children:e})})]},n)}return(0,t.jsxs)(l.default.Fragment,{children:[0!==n?"|":"",a?(0,t.jsxs)("span",{id:r+"."+e,className:(0,i.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[e,(0,t.jsx)(o.default,{href:x.basePath+x.pathname+`#${r+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(r+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},n)});let n=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return a?(0,t.jsxs)("span",{id:r+"."+n,className:(0,i.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[n,(0,t.jsx)(o.default,{href:x.basePath+x.pathname+`#${r+"."+n}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(r+"."+n),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):n},j=(0,t.jsx)(l.default.Fragment,{children:f?(0,t.jsx)("tr",{children:s.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:s.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),b=(0,t.jsx)(l.default.Fragment,{children:p.map((e,s)=>{if(f){let{value:i,label:a,description:l}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:a}),(0,t.jsx)("td",{children:l})]},s)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([s,l],r)=>"readonly"!==s&&"optional"!==s&&"deprecated"!==s&&(0,t.jsx)("td",{children:"parameters"===s?l.map((e,i)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:v(e.type)}),(0,t.jsx)("br",{})]},i)):"default"===s?(0,t.jsx)("div",{className:(0,i.classNames)("doc-option-default",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:n.ObjectUtils.isEmpty(l)?"null":v(l,"name"===s,e.deprecated)}):"type"===s?(0,t.jsx)("span",{className:"doc-option-type",children:v(l,"name"===s,e.deprecated)}):"returnType"===s?(0,t.jsx)("div",{className:(0,i.classNames)("doc-option-returnType",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:v(l,"name"===s,e.deprecated)}):"description"===s||"values"===s?(0,t.jsx)("span",{className:"doc-option-description",children:l}):v(l,"name"===s,e.deprecated)},r))},s)})});return(0,t.jsxs)(l.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:h})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:j}),(0,t.jsx)("tbody",{children:b})]})})]},r)}return null};e.s(["default",0,p],88850);var u=e.i(71864),h=e.i(38076);function m(e){let{doc:i,header:a}=e,s=e.apiExclude,o=i.reduce((e,i)=>{let a,l=i.split("."),o=(a=l[0])&&a[0].toUpperCase()+a.slice(1)||"",c=r.default[o.toLowerCase()],d=(e,t)=>s&&s[e]&&s[e].includes(t),u=e=>s&&s[e]&&"excludeAll"===s[e];if(c){let a=(e,i)=>{if(n.ObjectUtils.isNotEmpty(c.events)&&n.ObjectUtils.isNotEmpty(c.events.values)&&!u("events")){let a={id:`api.${i}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,s])=>{let[l,n]=[`api.${i}.${e}`,e];d("event",e)||a.children.push({id:l,label:n,component:e=>(0,t.jsx)(p,{name:i,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," See ",(0,t.jsx)("i",{children:s.relatedProp}),"."]}),...e})})}),e.push(a)}if(n.ObjectUtils.isNotEmpty(c.interfaces)&&n.ObjectUtils.isNotEmpty(c.interfaces.values)&&!u("interfaces")){let a={id:`api.${i}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,s])=>{let[l,n]=[`api.${i}.${e}`,e];d("interfaces",e)||a.children.push({id:l,label:n,component:e=>(0,t.jsx)(p,{name:i,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," ",s.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:s.extendedTypes}),"."]})]}),...e})})}),e.push(a)}if(n.ObjectUtils.isNotEmpty(c.types)&&n.ObjectUtils.isNotEmpty(c.types.values)&&!u("types")){let a={id:`api.${i}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,s])=>{let[l,n]=[`api.${i}.${e}`,e];d("types",e)||a.children.push({id:l,label:n,component:e=>(0,t.jsx)(p,{name:i,data:[s],allowLink:!1,...e})})}),e.push(a)}};if(3===l.length){let i=l[1],a=l[2];if("functions"===i){let s=c[i].values[a],l={id:`api.${o}`,label:o,children:[]},[r,d]=[`api.${o}.function`,"Function"],u=Object.entries(s).reduce((e,[t,i])=>("description"!==t&&(e[t]=i),e),{});l.children.push({id:r,label:d,component:e=>(0,t.jsx)(p,{name:o,data:[u],description:s.description,...e})});let h=s.parameters&&s.parameters.map(e=>e.type);if(n.ObjectUtils.isNotEmpty(c.interfaces)&&n.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${o}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([i,a])=>{if(h.includes(i)){let[s,l]=[`api.${o}.${i}`,i],r={id:s,label:l,description:(0,t.jsxs)(t.Fragment,{children:[a.description," ",a.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:a.extendedTypes}),"."]})]}),children:[]};n.ObjectUtils.isNotEmpty(a.props)&&r.children.push({id:`${s}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:a.props,...e})}),n.ObjectUtils.isNotEmpty(a.callbacks)&&r.children.push({id:`${s}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:a.callbacks,...e})}),e.children.push(r)}}),n.ObjectUtils.isNotEmpty(e.children)&&l.children.push(e)}e.push(l)}}else c.components&&Object.entries(c.components).forEach(([s,l])=>{let r={id:`api.${s}`,label:s,description:l.description,children:[]};if(n.ObjectUtils.isNotEmpty(l.props)&&n.ObjectUtils.isNotEmpty(l.props.values)&&!u("props")){let[e,i]=[`api.${s}.props`,"Props"];if(d("props",s))return;r.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:s,data:l.props.values,description:l.props.description,...e})})}if(n.ObjectUtils.isNotEmpty(l.callbacks)&&n.ObjectUtils.isNotEmpty(l.callbacks.values)&&!u("callbacks")){let[e,i]=[`api.${s}.callbacks`,"Callbacks"];if(d("callbacks",s))return;r.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:s,data:l.callbacks.values,description:l.callbacks.description,...e})})}if(n.ObjectUtils.isNotEmpty(l.methods)&&n.ObjectUtils.isNotEmpty(l.methods.values)&&!u("methods")){let[e,i]=[`api.${s}.methods`,"Methods"];if(d("methods",s))return;r.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:s,data:l.methods.values,description:l.methods.description,...e})})}s.toLocaleLowerCase()===i.toLowerCase()&&a(r.children,s),e.push(r)}),c.model&&Object.entries(c.model).forEach(([s,l])=>{let r={id:`api.${s}`,label:s,description:l.description,children:[]};if(n.ObjectUtils.isNotEmpty(l.props)&&n.ObjectUtils.isNotEmpty(l.props.values)&&!u("props")){let[e,i]=[`api.${s}.props`,"Props"];if(d("props",s))return;r.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:s,data:l.props.values,description:l.props.description,...e})})}s.toLocaleLowerCase()===i.toLowerCase()&&a(r.children,s),e.push(r)}),c.components||c.model||a(e,o)}return e},[]);return(0,l.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[a," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",a," module."]})]}),(0,t.jsx)(h.DocSections,{docs:o})]}),(0,t.jsx)(u.DocSectionNav,{docs:o})]})}e.s(["DocComponent",0,function(e){let n,[r,o]=(0,l.useState)(0),c=(0,s.useRouter)();n=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{o(e),c.replace(c.pathname)};return(0,l.useEffect)(()=>{c.asPath.includes("#api")&&o(1),c.asPath.includes("#pt")&&o(3)},[c.asPath]),(0,t.jsxs)("div",{className:(0,i.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":0===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:n})}),e.apiDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":1===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":2===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":3===r}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===r?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(h.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.componentDocs})]}):null,1===r?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(m,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===r?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(h.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===r?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(h.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},97776,e=>{"use strict";var t=e.i(91398),i=e.i(91788),a=e.i(10836),s=e.i(15498),l=e.i(60150),n=e.i(3935),r=e.i(51551);let o=`
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
}`,c=s.ComponentBase.extend({defaultProps:{__TYPE:"FloatLabel",children:void 0},css:{classes:{root:"p-float-label"},styles:o}}),d=i.memo(i.forwardRef((e,o)=>{let d=(0,l.useMergeProps)(),p=i.useContext(a.PrimeReactContext),u=c.getProps(e,p),h=i.useRef(o),{ptm:m,cx:f,isUnstyled:x}=c.setMetaData({props:u});(0,s.useHandleStyle)(c.css.styles,x,{name:"floatlabel"}),i.useEffect(()=>{r.ObjectUtils.combinedRefs(h,o)},[h,o]);let v=d({ref:h,className:(0,n.classNames)(f("root"))},c.getOtherProps(u),m("root"));return(0,t.jsx)("span",{...v,children:u.children})}));d.displayName="FloatLabel",e.s(["FloatLabel",0,d],97776)},12257,e=>{"use strict";var t=e.i(91398),i=e.i(91788),a=e.i(85850);let s=i.memo(i.forwardRef((e,i)=>{let s=a.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:i,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"})})}));s.displayName="TimesCircleIcon",e.s(["TimesCircleIcon",0,s])},34366,e=>{"use strict";var t=e.i(45543);let i={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:e=>i.DEFAULT_MASKS[e]?i.DEFAULT_MASKS[e]:e,onBeforeInput(e,i,a){!a&&t.DomHandler.isAndroid()&&this.validateKey(e,e.data,i)},onKeyPress(e,i,a){a||t.DomHandler.isAndroid()||e.ctrlKey||e.altKey||e.metaKey||this.validateKey(e,e.key,i)},onPaste(e,t,i){if(i)return;let a=this.getRegex(t);[...e.clipboardData.getData("text")].forEach(t=>{if(!a.test(t))return e.preventDefault(),!1})},validateKey(e,t,i){null==t||!(t.length<=2)||this.getRegex(i).test(t)||e.preventDefault()},validate(e,t){let i=e.target.value,a=!0,s=this.getRegex(t);return i&&!s.test(i)&&(a=!1),a}};e.s(["KeyFilter",0,i])},3828,(e,t,i)=>{t.exports=e.r(26990)},89726,e=>{"use strict";var t=e.i(91398),i=e.i(5180),a=e.i(28137);function s(){let e={basic:`
<label htmlFor="chips1">Tags</label>
<Chips inputId="chips1" />

<span id="chips2">Tags</span>
<Chips aria-labelledby="chips2" />

<Chips aria-label="Tags" />
    `};return(0,t.jsxs)(a.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Value to describe the component can either be provided via ",(0,t.jsx)("i",{children:"label"})," tag combined with ",(0,t.jsx)("i",{children:"inputId"})," prop or using ",(0,t.jsx)("i",{children:"aria-labelledby"}),", ",(0,t.jsx)("i",{children:"aria-label"})," props. Chip list uses ",(0,t.jsx)("i",{children:"listbox"})," role with ",(0,t.jsx)("i",{children:"aria-orientation"})," ","set to horizontal whereas each chip has the ",(0,t.jsx)("i",{children:"option"})," role with ",(0,t.jsx)("i",{children:"aria-label"})," set to the label of the chip."]}),(0,t.jsx)(i.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Input Field Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the input element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Adds a new chips using the input field value."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"backspace"})}),(0,t.jsx)("td",{children:"Deletes the previous chip if the input field is empty."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous chip if available and input field is empty."})]})]})]})}),(0,t.jsx)("h3",{children:"Chip Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous chip if available."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"right arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next chip, if there is none then input field receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"backspace"})}),(0,t.jsx)("td",{children:"Deletes the chips and adds focus to the input field."})]})]})]})})]})}var l=e.i(91788),n=e.i(10836),r=e.i(15498),o=e.i(60150),c=e.i(20484),d=e.i(12257),p=e.i(34366),u=e.i(64691),h=e.i(45543),m=e.i(75366),f=e.i(51551),x=e.i(3935);let v=`
@layer primereact {
    .p-chips {
        display: inline-flex;
    }
    
    .p-chips-multiple-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .p-chips-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }
    
    .p-chips-input-token {
        flex: 1 1 auto;
        display: inline-flex;
    }
    
    .p-chips-token-icon {
        cursor: pointer;
    }
    
    .p-chips-input-token input {
        border: 0 none;
        outline: 0 none;
        background-color: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
    }
    
    .p-fluid .p-chips {
        display: flex;
    }
    
    .p-chips-icon-left,
    .p-chips-icon-right {
        position: relative;
        display: inline-block;
    }
    
    .p-chips-icon-left > i,
    .p-chips-icon-right > i,
    .p-chips-icon-left > svg,
    .p-chips-icon-right > svg,
    .p-chips-icon-left > .p-chips-prefix,
    .p-chips-icon-right > .p-chips-suffix {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }
    
    .p-fluid .p-chips-icon-left,
    .p-fluid .p-chips-icon-right {
        display: block;
        width: 100%;
    }
}
`,j=r.ComponentBase.extend({defaultProps:{__TYPE:"Chips",addOnBlur:null,allowDuplicate:!0,ariaLabelledBy:null,autoFocus:!1,className:null,disabled:null,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,itemTemplate:null,keyfilter:null,max:null,name:null,onAdd:null,onBlur:null,onChange:null,onFocus:null,onKeyDown:null,onRemove:null,placeholder:null,readOnly:!1,removable:!0,removeIcon:null,separator:null,style:null,tooltip:null,tooltipOptions:null,value:null,children:void 0},css:{classes:{removeTokenIcon:"p-chips-token-icon",label:"p-chips-token-label",token:({focusedIndex:e,index:t})=>(0,x.classNames)("p-chips-token",{"p-focus":e===t}),inputToken:"p-chips-input-token",container:({props:e,context:t})=>(0,x.classNames)("p-inputtext p-chips-multiple-container",{"p-variant-filled":e.variant?"filled"===e.variant:t&&"filled"===t.inputStyle}),root:({isFilled:e,focusedState:t,disabled:i,invalid:a})=>(0,x.classNames)("p-chips p-component p-inputwrapper",{"p-inputwrapper-filled":e,"p-inputwrapper-focus":t,"p-disabled":i,"p-invalid":a,"p-focus":t})},styles:v}}),b=l.memo(l.forwardRef((e,i)=>{let a,s,v,b,g,C=(0,o.useMergeProps)(),y=l.useContext(n.PrimeReactContext),N=j.getProps(e,y),[D,k]=l.useState(!1),[w,S]=l.useState(null),{ptm:E,cx:T,isUnstyled:F}=j.setMetaData({props:N,state:{focused:D}});(0,r.useHandleStyle)(j.css.styles,F,{name:"chips"});let O=l.useRef(null),R=l.useRef(null),P=l.useRef(N.inputRef),I=(e,t)=>{if(N.disabled||N.readOnly)return;let i=[...N.value],a=i.splice(t,1)[0];A(a,t)&&(N.onRemove&&N.onRemove({originalEvent:e,value:a}),N.onChange&&N.onChange({originalEvent:e,value:i,stopPropagation:()=>{e?.stopPropagation()},preventDefault:()=>{e?.preventDefault()},target:{name:N.name,id:N.id,value:i}}))},_=(e,t,i)=>{if(t&&t.trim().length){let a=N.value?[...N.value]:[];if(N.allowDuplicate||-1===a.indexOf(t)){let i=!0;N.onAdd&&(i=N.onAdd({originalEvent:e,value:t})),!1!==i&&a.push(t)}V(e,a,i)}},V=(e,t,i)=>{N.onChange&&N.onChange({originalEvent:e,value:t,stopPropagation:()=>{e?.stopPropagation()},preventDefault:()=>{e?.preventDefault()},target:{name:N.name,id:N.id,value:t}}),P.current.value="",i&&e.preventDefault()},U=()=>N.max&&N.value&&N.max===N.value.length,L=P.current&&P.current.value,$=l.useMemo(()=>f.ObjectUtils.isNotEmpty(N.value)||f.ObjectUtils.isNotEmpty(L),[N.value,L]),A=(e,t)=>f.ObjectUtils.getPropValue(N.removable,{value:e,index:t,props:N});l.useImperativeHandle(i,()=>({props:N,focus:()=>h.DomHandler.focus(P.current),getElement:()=>O.current,getInput:()=>P.current})),l.useEffect(()=>{f.ObjectUtils.combinedRefs(P,N.inputRef)},[P,N.inputRef]),(0,c.useMountEffect)(()=>{N.autoFocus&&h.DomHandler.focus(P.current,N.autoFocus)});let K=f.ObjectUtils.isNotEmpty(N.tooltip),B=j.getOtherProps(N),M=f.ObjectUtils.reduceKeys(B,h.DomHandler.ARIA_PROPS),H=(a=N.value?N.value.map((e,t)=>{let i=N.itemTemplate?N.itemTemplate(e):e,a=C({className:T("label")},E("label")),s=(0,l.createElement)("span",{...a,key:`${t}_${e}_span`},i),n=((e,t)=>{if(!N.disabled&&!N.readOnly&&A(e,t)){let e=C({className:T("removeTokenIcon"),onClick:e=>I(e,t),"aria-hidden":"true"},E("removeTokenIcon")),i=N.removeIcon||(0,l.createElement)(d.TimesCircleIcon,{...e,key:`${t}_icon`});return m.IconUtils.getJSXIcon(i,{...e},{props:N})}return null})(e,t),r=C({id:N.inputId+"_chips_item_"+t,role:"option","aria-label":e,className:T("token",{focusedIndex:w,index:t}),"aria-selected":!0,"aria-setsize":N.value.length,"aria-posinset":t+1,"data-p-highlight":!0,"data-p-focused":w===t},E("token"));return(0,l.createElement)("li",{...r,key:`${t}_${e}`,children:[s,n]})}):null,s=C({className:T("inputToken")},E("inputToken")),v=C({id:N.inputId,ref:P,placeholder:N.placeholder,type:"text",enterKeyHint:"enter",name:N.name,disabled:N.disabled||U(),onKeyDown:e=>(e=>{let t=e.target.value,i=N.value||[];if(N.onKeyDown&&N.onKeyDown(e),!e.defaultPrevented)switch(e.key){case"Backspace":0===t.length&&i.length>0&&I(e,i.length-1);break;case"Enter":t&&t.trim().length&&(!N.max||N.max>i.length)&&_(e,t,!0);break;case"ArrowLeft":0===t.length&&i&&i.length>0&&h.DomHandler.focus(R.current);break;case"ArrowRight":e.stopPropagation();break;default:N.keyfilter&&p.KeyFilter.onKeyPress(e,N.keyfilter),U()&&e.preventDefault()}})(e),onChange:e=>(e=>{let t=e.target.value?.trim();if(t===N.separator){P.current.value="";return}N.separator&&t.endsWith(N.separator)&&_(e,t.slice(0,-1))})(e),onPaste:e=>(e=>{if(N.separator){let t=N.separator.replace("\\n","\n").replace("\\r","\r").replace("\\t","	"),i=(e.clipboardData||window.clipboardData).getData("Text");if(N.keyfilter&&p.KeyFilter.onPaste(e,N.keyfilter),i){let a=N.value||[],s=i.split(t);s=s.filter(e=>(N.allowDuplicate||-1===a.indexOf(e))&&e.trim().length),V(e,a=[...a,...s],!0)}}})(e),onFocus:e=>{k(!0),S(null),N.onFocus&&N.onFocus(e)},onBlur:e=>(e=>{if(N.addOnBlur){let t=e.target.value,i=N.value||[];t&&t.trim().length&&(!N.max||N.max>i.length)&&_(e,t,!0)}k(!1),N.onBlur&&N.onBlur(e)})(e),readOnly:N.readOnly,...M},E("input")),b=(0,l.createElement)("li",{...s,key:N.inputId+"_chips_input"},(0,t.jsx)("input",{...v})),g=C({ref:R,className:T("container",{context:y}),onClick:e=>void h.DomHandler.focus(P.current),onKeyDown:e=>(e=>{switch(e.code){case"ArrowLeft":let t;t=w,0===P.current.value.length&&N.value&&N.value.length>0&&(t=null===t?N.value.length-1:t-1)<0&&(t=0),S(t);break;case"ArrowRight":let i;i=w,0===P.current.value.length&&N.value&&N.value.length>0&&(i===N.value.length-1?(i=null,P.current.focus()):i++),S(i);break;case"Backspace":var a;a=e,null!==w&&I(a,w)}})(e),tabIndex:-1,role:"listbox","aria-orientation":"horizontal","aria-labelledby":N.ariaLabelledby,"aria-label":N.ariaLabel,"aria-activedescendant":D?null!==w?`${N.inputId}_chips_item_${w}`:null:void 0,"data-p-disabled":N.disabled,"data-p-focus":D,onFocus:()=>{k(!0)},onBlur:()=>{S(-1),k(!1)}},E("container")),(0,t.jsxs)("ul",{...g,children:[a,b]})),z=C({id:N.id,ref:O,className:(0,x.classNames)(N.className,T("root",{isFilled:$,focusedState:D,disabled:N.disabled,invalid:N.invalid})),style:N.style},E("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,l.createElement)("div",{...z,key:"chips"},H),K&&(0,t.jsx)(u.Tooltip,{target:P,content:N.tooltip,pt:E("tooltip"),...N.tooltipOptions})]})}));function g(e){let[s,n]=(0,l.useState)([]),r={basic:`
<Chips value={value} onChange={(e) => setValue(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function BasicDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";

export default function BasicDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value)} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Chips is used as a controlled input with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties where ",(0,t.jsx)("i",{children:"value"})," should be an array."]})}),(0,t.jsx)("div",{className:"card p-fluid",children:(0,t.jsx)(b,{value:s,onChange:e=>n(e.value)})}),(0,t.jsx)(i.DocSectionCode,{code:r})]})}function C(e){let s={basic:`
<Chips disabled placeholder="Disabled" />
        `,javascript:`
import React from 'react'; 
import { Chips } from "primereact/chips";

export default function DisabledDemo() {
    return (
        <div className="card p-fluid">
            <Chips disabled placeholder="Disabled" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Chips } from "primereact/chips";

export default function DisabledDemo() {
    return (
        <div className="card p-fluid">
            <Chips disabled placeholder="Disabled" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card p-fluid",children:(0,t.jsx)(b,{disabled:!0,placeholder:"Disabled"})}),(0,t.jsx)(i.DocSectionCode,{code:s})]})}function y(e){let[s,n]=(0,l.useState)([]),r={basic:`
<Chips variant="filled" value={value} onChange={(e) => setValue(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function FilledDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <Chips variant="filled" value={value} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";

export default function FilledDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <Chips variant="filled" value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value)} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specify the ",(0,t.jsx)("i",{children:"variant"})," property as ",(0,t.jsx)("i",{children:"filled"})," to display the component with a higher visual emphasis than the default ",(0,t.jsx)("i",{children:"outlined"})," style."]})}),(0,t.jsx)("div",{className:"card p-fluid",children:(0,t.jsx)(b,{variant:"filled",value:s,onChange:e=>n(e.value)})}),(0,t.jsx)(i.DocSectionCode,{code:r})]})}b.displayName="Chips";var N=e.i(97776),D=e.i(41158);function k(e){let[s,n]=(0,l.useState)([]),r={basic:`
<FloatLabel>
    <Chips id="username" value={value} onChange={(e) => setValue(e.value)} />
    <label htmlFor="username">Username</label>
</FloatLabel>
        `,javascript:`
import React, { useState } from "react";
import { Chips } from "primereact/chips";
import { FloatLabel } from "primereact/floatlabel";

export default function FloatLabelDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <FloatLabel>
                <Chips id="username" value={value} onChange={(e) => setValue(e.value)} />
                <label htmlFor="username">Username</label>
            </FloatLabel>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";
import { FloatLabel } from "primereact/floatlabel";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <FloatLabel>
                <Chips id="username" value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value)} />
                <label htmlFor="username">Username</label>
            </FloatLabel>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A floating label appears on top of the input field when focused. Visit ",(0,t.jsx)(D.default,{href:"/floatlabel",children:"FloatLabel"})," documentation for more information."]})}),(0,t.jsx)("div",{className:"card p-fluid",children:(0,t.jsxs)(N.FloatLabel,{children:[(0,t.jsx)(b,{id:"username",value:s,onChange:e=>n(e.value)}),(0,t.jsx)("label",{htmlFor:"username",children:"Username"})]})}),(0,t.jsx)(i.DocSectionCode,{code:r})]})}function w(e){let s={basic:`
import { Chips } from 'primereact/chips';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function S(e){let[s,n]=(0,l.useState)([]),r={basic:`
<Chips invalid value={value} onChange={(e) => setValue(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function InvalidDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <Chips invalid value={value} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";

export default function InvalidDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <Chips invalid value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value)} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card p-fluid",children:(0,t.jsx)(b,{invalid:!0,value:s,onChange:e=>n(e.value)})}),(0,t.jsx)(i.DocSectionCode,{code:r})]})}function E(e){let[s,n]=(0,l.useState)([]),r={basic:`
<Chips value={value} onChange={(e) => setValue(e.value)} keyfilter="int" />
        `,javascript:`
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function KeyFilterDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e) => setValue(e.value)} keyfilter="int" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";

export default function KeyFilterDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value)} keyfilter="int" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Chips has built-in key filtering support to block certain keys, refer to ",(0,t.jsx)(D.default,{href:"/keyfilter",children:"keyfilter"})," page for more information."]})}),(0,t.jsx)("div",{className:"card p-fluid",children:(0,t.jsx)(b,{value:s,onChange:e=>n(e.value),keyfilter:"int"})}),(0,t.jsx)(i.DocSectionCode,{code:r})]})}let T=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/chips.jpg",alt:"chips"})})]});function F(e){let[s,n]=(0,l.useState)([]),r={basic:`
<Chips value={value} onChange={(e) => setValue(e.value)} separator="," />
        `,javascript:`
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function SeparatorDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e) => setValue(e.value)} separator="," />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";

export default function SeparatorDemo() {
    const [value, setValue] = useState<string[]>([]);

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value)} separator="," />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A new chip is added when ",(0,t.jsx)("i",{children:"enter"})," key is pressed, ",(0,t.jsx)("i",{children:"separator"})," property allows definining an additional key. Currently only valid value is ",(0,t.jsx)("i",{children:","})," to create a new item when comma key is pressed."]})}),(0,t.jsx)("div",{className:"card p-fluid",children:(0,t.jsx)(b,{value:s,onChange:e=>n(e.value),separator:","})}),(0,t.jsx)(i.DocSectionCode,{code:r})]})}function O(e){let[s,n]=(0,l.useState)([]),r={basic:`
<Chips value={value} onChange={(e) => setValue(e.value)} itemTemplate={customChip} />
        `,javascript:`
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function TemplateDemo() {
    const [value, setValue] = useState([]);
    const customChip = (item) => {
        return (
            <div>
                <span>{item} - (active)</span>
                <i className="pi pi-user-plus"></i>
            </div>
        );
    };

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e) => setValue(e.value)} itemTemplate={customChip} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Chips, ChipsChangeEvent } from "primereact/chips";

export default function TemplateDemo() {
    const [value, setValue] = useState<string[]>([]);
    const customChip = (item: string) => {
        return (
            <div>
                <span>{item} - (active)</span>
                <i className="pi pi-user-plus"></i>
            </div>
        );
    };

    return (
        <div className="card p-fluid">
            <Chips value={value} onChange={(e: ChipsChangeEvent) => setValue(e.value)} itemTemplate={customChip} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Chip content is customized using ",(0,t.jsx)("i",{children:"itemTemplate"})," function that receives a single chip value as a parameter."]})}),(0,t.jsx)("div",{className:"card p-fluid",children:(0,t.jsx)(b,{value:s,onChange:e=>n(e.value),itemTemplate:e=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("span",{children:[e," - (active)"]}),(0,t.jsx)("i",{className:"pi pi-user-plus"})]})})}),(0,t.jsx)(i.DocSectionCode,{code:r})]})}function R(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-chips"}),(0,t.jsx)("td",{children:"Container element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-chips-token"}),(0,t.jsx)("td",{children:"Chip element container."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-chips-token-icon"}),(0,t.jsx)("td",{children:"Icon of a chip."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-chips-token-label"}),(0,t.jsx)("td",{children:"label of a chip."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-chips-input-token"}),(0,t.jsx)("td",{children:"Container of input element."})]})]})]})})]})}function P(e){let s={basic:`
const Tailwind = {        
    chips: {
        root: ({ props }) => ({
            className: classNames('flex', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        container: {
            className: classNames(
                'm-0 py-1.5 px-3 list-none cursor-text overflow-hidden flex items-center flex-wrap',
                'w-full',
                'font-sans text-base text-gray-600 dark:text-white/70 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        inputToken: {
            className: classNames('py-1.5 px-0', 'flex flex-1 inline-flex')
        },
        input: {
            className: classNames('font-sans text-base text-gray-700 dark:text-white/80 p-0 m-0', 'border-0 outline-none bg-transparent shadow-none rounded-none w-full')
        },
        token: {
            className: classNames('py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center')
        },
        removeTokenIcon: 'ml-2'
    }
}
        `},l={javascript:`
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function UnstyledDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card">
            <Chips value={value} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(D.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(i.DocSectionCode,{code:l,embedded:!0})]})})}var I=e.i(88850),_=e.i(82948);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:T},{id:"pt.chips.options",label:"Chips PT Options",component:I.default}];return(0,t.jsx)(_.DocComponent,{title:"React Chips Component",header:"Chips",description:"Chips is used to enter multiple values on an input field.",componentDocs:[{id:"import",label:"Import",component:w},{id:"basic",label:"Basic",component:g},{id:"separator",label:"Separator",component:F},{id:"template",label:"Template",component:O},{id:"keyfilter",label:"Key Filter",component:E},{id:"float",label:"Float Label",component:k},{id:"filled",label:"Filled",component:y},{id:"invalid",label:"Invalid",component:S},{id:"disabled",label:"Disabled",component:C},{id:"accessibility",label:"Accessibility",component:s}],apiDocs:["Chips"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:R},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:P}]}]})}],89726)},48449,(e,t,i)=>{let a="/chips";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(89726)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);