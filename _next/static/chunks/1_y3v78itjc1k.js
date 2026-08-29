(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),n=e.i(91788);e.s(["CodeHighlight",0,function(e){let s=(0,n.useRef)(),i=`language-${e.lang||"jsx"}`;return(0,n.useEffect)(()=>{window.Prism.highlightElement(s.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:s,className:i,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),n=e.i(3935),s=e.i(58678),i=e.i(3828),o=e.i(91788),a=e.i(51551),l=e.i(72124),r=e.i(41158),c=e.i(87914),p=e.i(28137);let d=e=>{let s=(0,o.useContext)(c.default),{id:l,data:d,name:u,description:m,allowLink:h=!0}=e,x=l.startsWith("pt."),f=(0,i.useRouter)();if(a.ObjectUtils.isNotEmpty(d)){let i=Object.keys(d[0]),c=(e,t)=>{let n=document.getElementById(e);n&&n.parentElement.scrollIntoView({block:"start",behavior:t})},b=(e,s,i)=>{if(h&&e)return e.split("|").map((e,a)=>{if(e.includes(u)){let n=e.indexOf(u),s=e.substring(n).replace(/(\[|\]|<|>).*$/gm,"").trim(),i=u===s?`api.${u}`:`api.${u}.${s===`${u}Props`?"props":s}`;return(0,t.jsxs)(o.default.Fragment,{children:[0!==a?"|":"",(0,t.jsx)(r.default,{href:f.basePath+f.pathname+`#${i}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(i,"smooth"),children:e})})]},a)}return(0,t.jsxs)(o.default.Fragment,{children:[0!==a?"|":"",s?(0,t.jsxs)("span",{id:l+"."+e,className:(0,n.classNames)("doc-option-name",{"line-through cursor-pointer":!!i}),title:i,children:[e,(0,t.jsx)(r.default,{href:f.basePath+f.pathname+`#${l+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(l+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},a)});let a=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return s?(0,t.jsxs)("span",{id:l+"."+a,className:(0,n.classNames)("doc-option-name",{"line-through cursor-pointer":!!i}),title:i,children:[a,(0,t.jsx)(r.default,{href:f.basePath+f.pathname+`#${l+"."+a}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(l+"."+a),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):a},j=(0,t.jsx)(o.default.Fragment,{children:x?(0,t.jsx)("tr",{children:i.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:i.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),v=(0,t.jsx)(o.default.Fragment,{children:d.map((e,i)=>{if(x){let{value:n,label:s,description:o}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:n}),(0,t.jsx)("td",{children:s}),(0,t.jsx)("td",{children:o})]},i)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([i,o],l)=>"readonly"!==i&&"optional"!==i&&"deprecated"!==i&&(0,t.jsx)("td",{children:"parameters"===i?o.map((e,n)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:b(e.type)}),(0,t.jsx)("br",{})]},n)):"default"===i?(0,t.jsx)("div",{className:(0,n.classNames)("doc-option-default",{"doc-option-dark":s.darkMode,"doc-option-light":!s.darkMode}),children:a.ObjectUtils.isEmpty(o)?"null":b(o,"name"===i,e.deprecated)}):"type"===i?(0,t.jsx)("span",{className:"doc-option-type",children:b(o,"name"===i,e.deprecated)}):"returnType"===i?(0,t.jsx)("div",{className:(0,n.classNames)("doc-option-returnType",{"doc-option-dark":s.darkMode,"doc-option-light":!s.darkMode}),children:b(o,"name"===i,e.deprecated)}):"description"===i||"values"===i?(0,t.jsx)("span",{className:"doc-option-description",children:o}):b(o,"name"===i,e.deprecated)},l))},i)})});return(0,t.jsxs)(o.default.Fragment,{children:[(0,t.jsx)(p.DocSectionText,{...e,children:(0,t.jsx)("p",{children:m})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:j}),(0,t.jsx)("tbody",{children:v})]})})]},l)}return null};e.s(["default",0,d],88850);var u=e.i(71864),m=e.i(38076);function h(e){let{doc:n,header:s}=e,i=e.apiExclude,r=n.reduce((e,n)=>{let s,o=n.split("."),r=(s=o[0])&&s[0].toUpperCase()+s.slice(1)||"",c=l.default[r.toLowerCase()],p=(e,t)=>i&&i[e]&&i[e].includes(t),u=e=>i&&i[e]&&"excludeAll"===i[e];if(c){let s=(e,n)=>{if(a.ObjectUtils.isNotEmpty(c.events)&&a.ObjectUtils.isNotEmpty(c.events.values)&&!u("events")){let s={id:`api.${n}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,i])=>{let[o,a]=[`api.${n}.${e}`,e];p("event",e)||s.children.push({id:o,label:a,component:e=>(0,t.jsx)(d,{name:n,data:i.props,description:(0,t.jsxs)(t.Fragment,{children:[i.description," See ",(0,t.jsx)("i",{children:i.relatedProp}),"."]}),...e})})}),e.push(s)}if(a.ObjectUtils.isNotEmpty(c.interfaces)&&a.ObjectUtils.isNotEmpty(c.interfaces.values)&&!u("interfaces")){let s={id:`api.${n}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,i])=>{let[o,a]=[`api.${n}.${e}`,e];p("interfaces",e)||s.children.push({id:o,label:a,component:e=>(0,t.jsx)(d,{name:n,data:i.props,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),...e})})}),e.push(s)}if(a.ObjectUtils.isNotEmpty(c.types)&&a.ObjectUtils.isNotEmpty(c.types.values)&&!u("types")){let s={id:`api.${n}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,i])=>{let[o,a]=[`api.${n}.${e}`,e];p("types",e)||s.children.push({id:o,label:a,component:e=>(0,t.jsx)(d,{name:n,data:[i],allowLink:!1,...e})})}),e.push(s)}};if(3===o.length){let n=o[1],s=o[2];if("functions"===n){let i=c[n].values[s],o={id:`api.${r}`,label:r,children:[]},[l,p]=[`api.${r}.function`,"Function"],u=Object.entries(i).reduce((e,[t,n])=>("description"!==t&&(e[t]=n),e),{});o.children.push({id:l,label:p,component:e=>(0,t.jsx)(d,{name:r,data:[u],description:i.description,...e})});let m=i.parameters&&i.parameters.map(e=>e.type);if(a.ObjectUtils.isNotEmpty(c.interfaces)&&a.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${r}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([n,s])=>{if(m.includes(n)){let[i,o]=[`api.${r}.${n}`,n],l={id:i,label:o,description:(0,t.jsxs)(t.Fragment,{children:[s.description," ",s.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:s.extendedTypes}),"."]})]}),children:[]};a.ObjectUtils.isNotEmpty(s.props)&&l.children.push({id:`${i}.props`,label:"Props",component:e=>(0,t.jsx)(d,{data:s.props,...e})}),a.ObjectUtils.isNotEmpty(s.callbacks)&&l.children.push({id:`${i}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(d,{data:s.callbacks,...e})}),e.children.push(l)}}),a.ObjectUtils.isNotEmpty(e.children)&&o.children.push(e)}e.push(o)}}else c.components&&Object.entries(c.components).forEach(([i,o])=>{let l={id:`api.${i}`,label:i,description:o.description,children:[]};if(a.ObjectUtils.isNotEmpty(o.props)&&a.ObjectUtils.isNotEmpty(o.props.values)&&!u("props")){let[e,n]=[`api.${i}.props`,"Props"];if(p("props",i))return;l.children.push({id:e,label:n,component:e=>(0,t.jsx)(d,{name:i,data:o.props.values,description:o.props.description,...e})})}if(a.ObjectUtils.isNotEmpty(o.callbacks)&&a.ObjectUtils.isNotEmpty(o.callbacks.values)&&!u("callbacks")){let[e,n]=[`api.${i}.callbacks`,"Callbacks"];if(p("callbacks",i))return;l.children.push({id:e,label:n,component:e=>(0,t.jsx)(d,{name:i,data:o.callbacks.values,description:o.callbacks.description,...e})})}if(a.ObjectUtils.isNotEmpty(o.methods)&&a.ObjectUtils.isNotEmpty(o.methods.values)&&!u("methods")){let[e,n]=[`api.${i}.methods`,"Methods"];if(p("methods",i))return;l.children.push({id:e,label:n,component:e=>(0,t.jsx)(d,{name:i,data:o.methods.values,description:o.methods.description,...e})})}i.toLocaleLowerCase()===n.toLowerCase()&&s(l.children,i),e.push(l)}),c.model&&Object.entries(c.model).forEach(([i,o])=>{let l={id:`api.${i}`,label:i,description:o.description,children:[]};if(a.ObjectUtils.isNotEmpty(o.props)&&a.ObjectUtils.isNotEmpty(o.props.values)&&!u("props")){let[e,n]=[`api.${i}.props`,"Props"];if(p("props",i))return;l.children.push({id:e,label:n,component:e=>(0,t.jsx)(d,{name:i,data:o.props.values,description:o.props.description,...e})})}i.toLocaleLowerCase()===n.toLowerCase()&&s(l.children,i),e.push(l)}),c.components||c.model||s(e,r)}return e},[]);return(0,o.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[s," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",s," module."]})]}),(0,t.jsx)(m.DocSections,{docs:r})]}),(0,t.jsx)(u.DocSectionNav,{docs:r})]})}e.s(["DocComponent",0,function(e){let a,[l,r]=(0,o.useState)(0),c=(0,i.useRouter)();a=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let p=e=>{r(e),c.replace(c.pathname)};return(0,o.useEffect)(()=>{c.asPath.includes("#api")&&r(1),c.asPath.includes("#pt")&&r(3)},[c.asPath]),(0,t.jsxs)("div",{className:(0,n.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(s.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":0===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>p(0),children:a})}),e.apiDocs?(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":1===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>p(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":2===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>p(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":3===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>p(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===l?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.componentDocs})]}):null,1===l?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===l?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===l?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},66082,e=>{"use strict";var t=e.i(91398),n=e.i(91788),s=e.i(10836),i=e.i(15498),o=e.i(60150),a=e.i(34366),l=e.i(64691),r=e.i(45543),c=e.i(51551),p=e.i(3935);let d=i.ComponentBase.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,children:void 0,className:null,invalid:!1,variant:null,keyfilter:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,iconPosition:null},css:{classes:{root:({props:e,isFilled:t,context:n})=>(0,p.classNames)("p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":t,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:n&&"filled"===n.inputStyle})}}}),u=n.memo(n.forwardRef((e,u)=>{let m=(0,o.useMergeProps)(),h=n.useContext(s.PrimeReactContext),x=d.getProps(e,h),{ptm:f,cx:b,isUnstyled:j}=d.setMetaData({props:x,...x.__parentMetadata,context:{disabled:x.disabled,iconPosition:x.iconPosition}});(0,i.useHandleStyle)(d.css.styles,j,{name:"inputtext",styled:!0});let v=n.useRef(u);n.useEffect(()=>{c.ObjectUtils.combinedRefs(v,u)},[v,u]);let y=n.useMemo(()=>c.ObjectUtils.isNotEmpty(x.value)||c.ObjectUtils.isNotEmpty(x.defaultValue),[x.value,x.defaultValue]),g=c.ObjectUtils.isNotEmpty(x.tooltip);n.useEffect(()=>{y||v.current?.value?r.DomHandler.addClass(v.current,"p-filled"):r.DomHandler.removeClass(v.current,"p-filled")},[x.disabled,y]);let N=m({className:(0,p.classNames)(x.className,b("root",{context:h,isFilled:y})),autoComplete:x.autoComplete,onBeforeInput:e=>{x.onBeforeInput&&x.onBeforeInput(e),x.keyfilter&&a.KeyFilter.onBeforeInput(e,x.keyfilter,x.validateOnly)},onInput:e=>{let t=e.target,n=!0;x.keyfilter&&x.validateOnly&&(n=a.KeyFilter.validate(e,x.keyfilter)),x.onInput&&x.onInput(e,n),c.ObjectUtils.isNotEmpty(t.value)?r.DomHandler.addClass(t,"p-filled"):r.DomHandler.removeClass(t,"p-filled")},onKeyDown:e=>{x.onKeyDown&&x.onKeyDown(e),x.keyfilter&&a.KeyFilter.onKeyPress(e,x.keyfilter,x.validateOnly)},onPaste:e=>{x.onPaste&&x.onPaste(e),x.keyfilter&&a.KeyFilter.onPaste(e,x.keyfilter,x.validateOnly)}},d.getOtherProps(x),f("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{ref:v,...N}),g&&(0,t.jsx)(l.Tooltip,{target:v,content:x.tooltip,pt:f("tooltip"),...x.tooltipOptions})]})}));u.displayName="InputText",e.s(["InputText",0,u],66082)},34366,e=>{"use strict";var t=e.i(45543);let n={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:e=>n.DEFAULT_MASKS[e]?n.DEFAULT_MASKS[e]:e,onBeforeInput(e,n,s){!s&&t.DomHandler.isAndroid()&&this.validateKey(e,e.data,n)},onKeyPress(e,n,s){s||t.DomHandler.isAndroid()||e.ctrlKey||e.altKey||e.metaKey||this.validateKey(e,e.key,n)},onPaste(e,t,n){if(n)return;let s=this.getRegex(t);[...e.clipboardData.getData("text")].forEach(t=>{if(!s.test(t))return e.preventDefault(),!1})},validateKey(e,t,n){null==t||!(t.length<=2)||this.getRegex(n).test(t)||e.preventDefault()},validate(e,t){let n=e.target.value,s=!0,i=this.getRegex(t);return n&&!i.test(n)&&(s=!1),s}};e.s(["KeyFilter",0,n])},3828,(e,t,n)=>{t.exports=e.r(26990)},42696,e=>{"use strict";var t=e.i(91398),n=e.i(88850),s=e.i(82948),i=e.i(5180),o=e.i(28137),a=e.i(41158);function l(){return(0,t.jsxs)(o.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Input OTP uses a set of InputText components, refer to the ",(0,t.jsx)(a.default,{href:"/inputtext",children:"InputText"})," component for more information about the screen reader support."]}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the input otp."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"right arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next input element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous input element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"backspace"})}),(0,t.jsx)("td",{children:"Deletes the input and moves focus to the previous input element."})]})]})]})})]})}var r=e.i(91788),c=e.i(10836),p=e.i(183),d=e.i(15498),u=e.i(60150),m=e.i(71834),h=e.i(66082),x=e.i(51551);let f=d.ComponentBase.extend({defaultProps:{__TYPE:"InputOtp",__parentMetadata:null,className:null,modelValue:!1,invalid:!1,disabled:!1,readOnly:!1,variant:null,tabIndex:null,length:4,mask:!1,integerOnly:!1},css:{classes:{root:"p-inputotp p-component",input:"p-inputotp-input"}}}),b=r.default.memo(r.default.forwardRef((e,n)=>{let s=(0,r.useRef)(n),i=(0,u.useMergeProps)(),o=(0,r.useContext)(c.PrimeReactContext),a=f.getProps(e,o),{ptm:l,cx:b,isUnstyled:j}=f.setMetaData({props:a,...a.__parentMetadata,context:{disabled:a.disabled}});(0,d.useHandleStyle)(f.css.styles,j,{name:"inputotp"});let v=a.value?a.value?.toString()?.split?.(""):Array(a.length),[y,g]=(0,r.useState)(v),N=e=>{let t=e.nextElementSibling;if(t)return"INPUT"===t.nodeName?t:N(t)},k=e=>{let t=e.previousElementSibling;if(t)return"INPUT"===t.nodeName?t:k(t)},T=e=>{let t=N(e.target);t&&(t.focus(),t.select())},O=e=>{let t=k(e.target);t&&(t.focus(),t.select())},I=(e,t)=>{a?.onChange?.({originalEvent:e,value:t.join("")})},D=(e,t)=>{let n=e.target.value,s=[...y];s[t]=n,g(s=(s=s.join(""))?s.split(""):Array(a.length)),I(e,s)},S=e=>{if(a.disabled||a.readOnly)return;let t=e.clipboardData.getData("text");if(t.length){let n=t.substring(0,a.length+1);if(!a.integerOnly||!isNaN(n)){let t=n.split("");g(t),I(e,t)}}},C=e=>{e.target.select(),a?.focus?.(e)},E=e=>{a?.blur?.(e)},w=e=>{if(!a.disabled&&!a.readOnly&&!e.altKey&&!e.ctrlKey&&!e.metaKey)switch(e.code){case"ArrowLeft":O(e),e.preventDefault();break;case"ArrowRight":T(e),e.preventDefault();break;case"Delete":{e.preventDefault();let t=Number(e.target.id);Number.isNaN(t)||P(y,a.length)||(D({...e,target:{...e.target,value:""}},t),T(e));break}case"Backspace":e.target?.value?.length===0&&(O(e),e.preventDefault());break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":case"NumpadEnter":case"Enter":break;default:{let t=e.target,n=t.selectionStart!==t.selectionEnd,s=y.join("").length>=a.length;(!a.integerOnly||/^[0-9]$/.test(e.key))&&(!s||"Delete"===e.code||n)||e.preventDefault()}}},P=(e,t)=>e.length===t&&e.every(e=>""===e||null==e);(0,m.useUpdateEffect)(()=>{g(a.value?a.value?.toString()?.split?.(""):Array(a.length))},[a.value]);let U=e=>{if(e<=0)return[];let n=a.length-e,s={onInput:e=>{a.disabled||a.readOnly||"insertFromPaste"!==e.nativeEvent.inputType&&(D(e,n),"deleteContentBackward"===e.nativeEvent.inputType?O(e):"insertText"===e.nativeEvent.inputType&&T(e))},onKeyDown:w,onFocus:C,onBlur:E,onPaste:S},i={value:y[n]||"",type:a?.mask?"password":"text",variant:a?.variant,readOnly:a?.readOnly,disabled:a?.disabled,tabIndex:a?.tabIndex,autoFocus:a?.autoFocus&&0===n,"aria-label":(0,p.ariaLabel)("otpLabel",{0:n+1}),"data-index":n,className:b("input")};return[a?.inputTemplate?x.ObjectUtils.getJSXElement(a?.inputTemplate,{events:s,props:i}):(0,r.createElement)(h.InputText,{...i,...s,invalid:a?.invalid,unstyled:a?.unstyled,pt:l("input"),inputMode:a?.integerOnly?"numeric":"text",key:n}),...U(e-1)].map((e,n)=>(0,t.jsx)(r.default.Fragment,{children:e},n))},F=i({className:b("root"),ref:s,style:a?.style},l("root"));return(0,t.jsx)("div",{...F,children:U(a.length)})}));function j(e){let[n,s]=(0,r.useState)(),a={basic:`
<InputOtp value={token} onChange={(e) => setTokens(e.value)}/>
        `,javascript:`
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function BasicDemo() {
    const [token, setTokens] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputOtp value={token} onChange={(e) => setTokens(e.value)}/>
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function BasicDemo() {
    const [token, setTokens] = useState<string | number | undefined>();

    return (
        <div className="card flex justify-content-center">
            <InputOtp value={token} onChange={(e) => setTokens(e.value)}/>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["The number of characters is defined with the ",(0,t.jsx)("i",{children:"length"})," property, which is set to 4 by default."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(b,{value:n,onChange:e=>s(e.value)})}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}function v(e){let n={basic:`
import { InputOtp } from 'primereact/inputotp';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:n,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function y(e){let[n,s]=(0,r.useState)(),a={basic:`
<InputOtp value={token} onChange={(e) => setTokens(e.value)} integerOnly/>
        `,javascript:`
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function IntegerOnlyDemo() {
    const [token, setTokens] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputOtp value={token} onChange={(e) => setTokens(e.value)} integerOnly/>
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function IntegerOnlyDemo() {
    const [token, setTokens] = useState<string | number | undefined>();

    return (
        <div className="card flex justify-content-center">
            <InputOtp value={token} onChange={(e) => setTokens(e.value)} integerOnly/>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"integerOnly"})," is present, only integers can be accepted as input."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(b,{value:n,onChange:e=>s(e.value),integerOnly:!0})}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}function g(e){let[n,s]=(0,r.useState)(),a={basic:`
<InputOtp value={token} onChange={(e) => setTokens(e.value)} mask/>
        `,javascript:`
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function MaskDemo() {
    const [token, setTokens] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputOtp value={token} onChange={(e) => setTokens(e.value)} mask/>
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function MaskDemo() {
    const [token, setTokens] = useState<string | number | undefined>();

    return (
        <div className="card flex justify-content-center">
            <InputOtp value={token} onChange={(e) => setTokens(e.value)} mask/>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Enable the ",(0,t.jsx)("i",{children:"mask"})," option to hide the values in the input fields."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(b,{value:n,onChange:e=>s(e.value),mask:!0})}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}b.displayName="InputOtp";let N=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"inputnumber"})})]});var k=e.i(57724);function T(e){let[n,s]=(0,r.useState)(),a={basic:`
<div className="flex flex-column align-items-center">
    <p className="font-bold text-xl mb-2">Authenticate Your Account</p>
    <p className="text-color-secondary block mb-5">Please enter the code sent to your phone.</p>
    <InputOtp value={token} onChange={(e) => setTokens(e.value)} length={6} inputTemplate={customInput} style={{gap: 0}}/>
    <div className="flex justify-content-between mt-5 align-self-stretch">
        <Button label="Resend Code" link className="p-0"></Button>
        <Button label="Submit Code"></Button>
    </div>
</div>
        `,javascript:`
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';
import { Button } from 'primereact/button';

export default function SampleDemo() {
    const [token, setTokens] = useState();

    const customInput = ({events, props}) => {
        return <><input {...events} {...props} type="text" className="custom-otp-input-sample" />
            {props['data-index'] === 2 && <div className="px-3">
                <i className="pi pi-minus" />
            </div>}
        </>
    };

    return (
        <div className="card flex justify-content-center">
            <style scoped>
                {\`
                    .custom-otp-input-sample {
                        width: 48px;
                        height: 48px;
                        font-size: 24px;
                        appearance: none;
                        text-align: center;
                        transition: all 0.2s;
                        border-radius: 0;
                        border: 1px solid var(--surface-400);
                        background: transparent;
                        outline-offset: -2px;
                        outline-color: transparent;
                        border-right: 0 none;
                        transition: outline-color 0.3s;
                        color: var(--text-color);
                    }

                    .custom-otp-input-sample:focus {
                        outline: 2px solid var(--primary-color);
                    }

                    .custom-otp-input-sample:first-child,
                    .custom-otp-input-sample:nth-child(5) {
                        border-top-left-radius: 12px;
                        border-bottom-left-radius: 12px;
                    }

                    .custom-otp-input-sample:nth-child(3),
                    .custom-otp-input-sample:last-child {
                        border-top-right-radius: 12px;
                        border-bottom-right-radius: 12px;
                        border-right-width: 1px;
                        border-right-style: solid;
                        border-color: var(--surface-400);
                    }
                \`}
            </style>
            <div className="flex flex-column align-items-center">
                <p className="font-bold text-xl mb-2">Authenticate Your Account</p>
                <p className="text-color-secondary block mb-5">Please enter the code sent to your phone.</p>
                <InputOtp value={token} onChange={(e) => setTokens(e.value)} length={6} inputTemplate={customInput} style={{gap: 0}}/>
                <div className="flex justify-content-between mt-5 align-self-stretch">
                    <Button label="Resend Code" link className="p-0"></Button>
                    <Button label="Submit Code"></Button>
                </div>
            </div>
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { InputOtp, InputOtpProps } from 'primereact/inputotp';
import { Button } from 'primereact/button';

interface CustomInputProps extends InputOtpProps {
    events?: any;
    props?: any;
}

export default function SampleDemo() {
    const [token, setTokens] = useState<string | number | undefined>();

    const customInput: FunctionComponent<CustomInputProps> = ({ events, props }) => {
        return (
          <>
            <input {...events} {...props} type="text" className="custom-otp-input-sample" />
            {props?.['data-index'] === 2 && (
              <div className="px-3">
                <i className="pi pi-minus" />
              </div>
            )}
          </>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <style scoped>
                {\`
                    .custom-otp-input-sample {
                        width: 48px;
                        height: 48px;
                        font-size: 24px;
                        appearance: none;
                        text-align: center;
                        transition: all 0.2s;
                        border-radius: 0;
                        border: 1px solid var(--surface-400);
                        background: transparent;
                        outline-offset: -2px;
                        outline-color: transparent;
                        border-right: 0 none;
                        transition: outline-color 0.3s;
                        color: var(--text-color);
                    }

                    .custom-otp-input-sample:focus {
                        outline: 2px solid var(--primary-color);
                    }

                    .custom-otp-input-sample:first-child,
                    .custom-otp-input-sample:nth-child(5) {
                        border-top-left-radius: 12px;
                        border-bottom-left-radius: 12px;
                    }

                    .custom-otp-input-sample:nth-child(3),
                    .custom-otp-input-sample:last-child {
                        border-top-right-radius: 12px;
                        border-bottom-right-radius: 12px;
                        border-right-width: 1px;
                        border-right-style: solid;
                        border-color: var(--surface-400);
                    }
                \`}
            </style>
            <div className="flex flex-column align-items-center">
                <p className="font-bold text-xl mb-2">Authenticate Your Account</p>
                <p className="text-color-secondary block mb-5">Please enter the code sent to your phone.</p>
                <InputOtp value={token} onChange={(e) => setTokens(e.value)} length={6} inputTemplate={customInput} style={{gap: 0}}/>
                <div className="flex justify-content-between mt-5 align-self-stretch">
                    <Button label="Resend Code" link className="p-0"></Button>
                    <Button label="Submit Code"></Button>
                </div>
            </div>
        </div>
    );
}`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"A sample UI implementation with templating and additional elements."})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)("style",{scoped:!0,children:`
                        .custom-otp-input-sample {
                            width: 48px;
                            height: 48px;
                            font-size: 24px;
                            appearance: none;
                            text-align: center;
                            transition: all 0.2s;
                            border-radius: 0;
                            border: 1px solid var(--surface-400);
                            background: transparent;
                            outline-offset: -2px;
                            outline-color: transparent;
                            border-right: 0 none;
                            transition: outline-color 0.3s;
                            color: var(--text-color);
                        }

                        .custom-otp-input-sample:focus {
                            outline: 2px solid var(--primary-color);
                        }

                        .custom-otp-input-sample:first-child,
                        .custom-otp-input-sample:nth-child(5) {
                            border-top-left-radius: 12px;
                            border-bottom-left-radius: 12px;
                        }

                        .custom-otp-input-sample:nth-child(3),
                        .custom-otp-input-sample:last-child {
                            border-top-right-radius: 12px;
                            border-bottom-right-radius: 12px;
                            border-right-width: 1px;
                            border-right-style: solid;
                            border-color: var(--surface-400);
                        }
                    `}),(0,t.jsxs)("div",{className:"flex flex-column align-items-center",children:[(0,t.jsx)("p",{className:"font-bold text-xl mb-2",children:"Authenticate Your Account"}),(0,t.jsx)("p",{className:"text-color-secondary block mb-5",children:"Please enter the code sent to your phone."}),(0,t.jsx)(b,{value:n,onChange:e=>s(e.value),length:6,inputTemplate:({events:e,props:n})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{...e,...n,type:"text",className:"custom-otp-input-sample"}),2===n["data-index"]&&(0,t.jsx)("div",{className:"px-3",children:(0,t.jsx)("i",{className:"pi pi-minus"})})]}),style:{gap:0}}),(0,t.jsxs)("div",{className:"flex justify-content-between mt-5 align-self-stretch",children:[(0,t.jsx)(k.Button,{label:"Resend Code",link:!0,className:"p-0"}),(0,t.jsx)(k.Button,{label:"Submit Code"})]})]})]}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}function O(e){let[n,s]=(0,r.useState)(),a={basic:`
<InputOtp value={token} onChange={(e) => setTokens(e.value)} inputTemplate={customInput}/>
        `,javascript:`
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function TemplateDemo() {
    const [token, setTokens] = useState();

    const customInput = ({events, props}) => <input {...events} {...props} type="text" className="custom-otp-input" />;

    return (
        <div className="card flex justify-content-center">
            <style scoped>
                {\`
                    .custom-otp-input {
                        width: 40px;
                        font-size: 36px;
                        border: 0 none;
                        appearance: none;
                        text-align: center;
                        transition: all 0.2s;
                        background: transparent;
                        border-bottom: 2px solid var(--surface-500);
                    }

                    .custom-otp-input:focus {
                        outline: 0 none;
                        border-bottom-color: var(--primary-color);
                    }
                \`}
            </style>

            <InputOtp value={token} onChange={(e) => setTokens(e.value)} inputTemplate={customInput}/>
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    events: React.HTMLAttributes<HTMLInputElement>;
    props: React.HTMLAttributes<HTMLInputElement>;
}

export default function TemplateDemo() {
    const [token, setTokens] = useState<string | number | undefined>();

      
    const customInput = ({ events, props }: CustomInputProps) => (
    <input {...events} {...props} type="text" className="custom-otp-input" />
    );

    return (
        <div className="card flex justify-content-center">
            <style scoped>
                {\`
                    .custom-otp-input {
                        width: 40px;
                        font-size: 36px;
                        border: 0 none;
                        appearance: none;
                        text-align: center;
                        transition: all 0.2s;
                        background: transparent;
                        border-bottom: 2px solid var(--surface-500);
                    }

                    .custom-otp-input:focus {
                        outline: 0 none;
                        border-bottom-color: var(--primary-color);
                    }
                \`}
            </style>

            <InputOtp value={token} onChange={(e: any) => setTokens(e?.value)} inputTemplate={customInput}/>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Define a template with your own UI elements with bindings to the provided events and attributes to replace the default design."})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)("style",{scoped:!0,children:`
                        .custom-otp-input {
                            width: 40px;
                            font-size: 36px;
                            border: 0 none;
                            appearance: none;
                            text-align: center;
                            transition: all 0.2s;
                            background: transparent;
                            border-bottom: 2px solid var(--surface-500);
                        }

                        .custom-otp-input:focus {
                            outline: 0 none;
                            border-bottom-color: var(--primary-color);
                        }
                    `}),(0,t.jsx)(b,{value:n,onChange:e=>s(e.value),inputTemplate:({events:e,props:n})=>(0,t.jsx)("input",{...e,...n,type:"text",className:"custom-otp-input"})})]}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}function I(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{class:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-inputotp"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-inputotp-input"}),(0,t.jsx)("td",{children:"Input element of the component."})]})]})]})})]})}function D(e){let n={basic:`
const Tailwind = {
    inputotp: {
        root: { className: 'flex items-center gap-2' },
        input: {
            root: {
                className: classNames(
                    'box-border text-center w-10 h-11 p-3 text-slate-900 border border-gray-300 rounded-lg transition-all duration-200',
                    'hover:border-cyan-500',
                    'focus:border-cyan-500 focus:shadow-[0_0_0_0.2rem_#a5f3fc] focus:outline-0 focus:outline-offset-0'
                )
            }
        }
    }
}
    `},s={javascript:`
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function BasicDemo() {
    const [token, setTokens] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputOtp value={token} onChange={(e) => setTokens(e.value)}/>
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(a.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(i.DocSectionCode,{code:n,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(i.DocSectionCode,{code:s,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:N},{id:"pt.inputotp.options",label:"InputOtp PT Options",component:n.default},{id:"pt.inputotptab.options",label:"InputOtpTab PT Options",component:n.default}];return(0,t.jsx)(s.DocComponent,{title:"React InputOtp Component",header:"InputOtp",description:"InputOtp groups a collection of contents in tabs.",componentDocs:[{id:"import",label:"Import",component:v},{id:"basic",label:"Basic",component:j},{id:"mask",label:"Mask",component:g},{id:"integeronly",label:"Integer Only",component:y},{id:"template",label:"Template",component:O},{id:"sample",label:"Sample",component:T},{id:"accessibility",label:"Accessibility",component:l}],apiDocs:["InputOtp","InputOtpTab"],ptDocs:e,ptDescription:"",themingDocs:[{id:"styled",label:"Styled",component:I},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:D}]}]})}],42696)},95767,(e,t,n)=>{let s="/inputotp";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(42696)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})}]);