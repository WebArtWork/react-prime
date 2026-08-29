(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),o=e.i(91788);e.s(["CodeHighlight",0,function(e){let i=(0,o.useRef)(),n=`language-${e.lang||"jsx"}`;return(0,o.useEffect)(()=>{window.Prism.highlightElement(i.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:i,className:n,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),o=e.i(3935),i=e.i(58678),n=e.i(3828),a=e.i(91788),r=e.i(51551),l=e.i(72124),s=e.i(41158),c=e.i(87914),p=e.i(28137);let d=e=>{let i=(0,a.useContext)(c.default),{id:l,data:d,name:u,description:m,allowLink:h=!0}=e,x=l.startsWith("pt."),f=(0,n.useRouter)();if(r.ObjectUtils.isNotEmpty(d)){let n=Object.keys(d[0]),c=(e,t)=>{let o=document.getElementById(e);o&&o.parentElement.scrollIntoView({block:"start",behavior:t})},b=(e,i,n)=>{if(h&&e)return e.split("|").map((e,r)=>{if(e.includes(u)){let o=e.indexOf(u),i=e.substring(o).replace(/(\[|\]|<|>).*$/gm,"").trim(),n=u===i?`api.${u}`:`api.${u}.${i===`${u}Props`?"props":i}`;return(0,t.jsxs)(a.default.Fragment,{children:[0!==r?"|":"",(0,t.jsx)(s.default,{href:f.basePath+f.pathname+`#${n}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(n,"smooth"),children:e})})]},r)}return(0,t.jsxs)(a.default.Fragment,{children:[0!==r?"|":"",i?(0,t.jsxs)("span",{id:l+"."+e,className:(0,o.classNames)("doc-option-name",{"line-through cursor-pointer":!!n}),title:n,children:[e,(0,t.jsx)(s.default,{href:f.basePath+f.pathname+`#${l+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(l+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},r)});let r=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return i?(0,t.jsxs)("span",{id:l+"."+r,className:(0,o.classNames)("doc-option-name",{"line-through cursor-pointer":!!n}),title:n,children:[r,(0,t.jsx)(s.default,{href:f.basePath+f.pathname+`#${l+"."+r}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(l+"."+r),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):r},g=(0,t.jsx)(a.default.Fragment,{children:x?(0,t.jsx)("tr",{children:n.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:n.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),y=(0,t.jsx)(a.default.Fragment,{children:d.map((e,n)=>{if(x){let{value:o,label:i,description:a}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:o}),(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:a})]},n)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([n,a],l)=>"readonly"!==n&&"optional"!==n&&"deprecated"!==n&&(0,t.jsx)("td",{children:"parameters"===n?a.map((e,o)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:b(e.type)}),(0,t.jsx)("br",{})]},o)):"default"===n?(0,t.jsx)("div",{className:(0,o.classNames)("doc-option-default",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:r.ObjectUtils.isEmpty(a)?"null":b(a,"name"===n,e.deprecated)}):"type"===n?(0,t.jsx)("span",{className:"doc-option-type",children:b(a,"name"===n,e.deprecated)}):"returnType"===n?(0,t.jsx)("div",{className:(0,o.classNames)("doc-option-returnType",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:b(a,"name"===n,e.deprecated)}):"description"===n||"values"===n?(0,t.jsx)("span",{className:"doc-option-description",children:a}):b(a,"name"===n,e.deprecated)},l))},n)})});return(0,t.jsxs)(a.default.Fragment,{children:[(0,t.jsx)(p.DocSectionText,{...e,children:(0,t.jsx)("p",{children:m})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:g}),(0,t.jsx)("tbody",{children:y})]})})]},l)}return null};e.s(["default",0,d],88850);var u=e.i(71864),m=e.i(38076);function h(e){let{doc:o,header:i}=e,n=e.apiExclude,s=o.reduce((e,o)=>{let i,a=o.split("."),s=(i=a[0])&&i[0].toUpperCase()+i.slice(1)||"",c=l.default[s.toLowerCase()],p=(e,t)=>n&&n[e]&&n[e].includes(t),u=e=>n&&n[e]&&"excludeAll"===n[e];if(c){let i=(e,o)=>{if(r.ObjectUtils.isNotEmpty(c.events)&&r.ObjectUtils.isNotEmpty(c.events.values)&&!u("events")){let i={id:`api.${o}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,n])=>{let[a,r]=[`api.${o}.${e}`,e];p("event",e)||i.children.push({id:a,label:r,component:e=>(0,t.jsx)(d,{name:o,data:n.props,description:(0,t.jsxs)(t.Fragment,{children:[n.description," See ",(0,t.jsx)("i",{children:n.relatedProp}),"."]}),...e})})}),e.push(i)}if(r.ObjectUtils.isNotEmpty(c.interfaces)&&r.ObjectUtils.isNotEmpty(c.interfaces.values)&&!u("interfaces")){let i={id:`api.${o}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,n])=>{let[a,r]=[`api.${o}.${e}`,e];p("interfaces",e)||i.children.push({id:a,label:r,component:e=>(0,t.jsx)(d,{name:o,data:n.props,description:(0,t.jsxs)(t.Fragment,{children:[n.description," ",n.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:n.extendedTypes}),"."]})]}),...e})})}),e.push(i)}if(r.ObjectUtils.isNotEmpty(c.types)&&r.ObjectUtils.isNotEmpty(c.types.values)&&!u("types")){let i={id:`api.${o}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,n])=>{let[a,r]=[`api.${o}.${e}`,e];p("types",e)||i.children.push({id:a,label:r,component:e=>(0,t.jsx)(d,{name:o,data:[n],allowLink:!1,...e})})}),e.push(i)}};if(3===a.length){let o=a[1],i=a[2];if("functions"===o){let n=c[o].values[i],a={id:`api.${s}`,label:s,children:[]},[l,p]=[`api.${s}.function`,"Function"],u=Object.entries(n).reduce((e,[t,o])=>("description"!==t&&(e[t]=o),e),{});a.children.push({id:l,label:p,component:e=>(0,t.jsx)(d,{name:s,data:[u],description:n.description,...e})});let m=n.parameters&&n.parameters.map(e=>e.type);if(r.ObjectUtils.isNotEmpty(c.interfaces)&&r.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${s}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([o,i])=>{if(m.includes(o)){let[n,a]=[`api.${s}.${o}`,o],l={id:n,label:a,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),children:[]};r.ObjectUtils.isNotEmpty(i.props)&&l.children.push({id:`${n}.props`,label:"Props",component:e=>(0,t.jsx)(d,{data:i.props,...e})}),r.ObjectUtils.isNotEmpty(i.callbacks)&&l.children.push({id:`${n}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(d,{data:i.callbacks,...e})}),e.children.push(l)}}),r.ObjectUtils.isNotEmpty(e.children)&&a.children.push(e)}e.push(a)}}else c.components&&Object.entries(c.components).forEach(([n,a])=>{let l={id:`api.${n}`,label:n,description:a.description,children:[]};if(r.ObjectUtils.isNotEmpty(a.props)&&r.ObjectUtils.isNotEmpty(a.props.values)&&!u("props")){let[e,o]=[`api.${n}.props`,"Props"];if(p("props",n))return;l.children.push({id:e,label:o,component:e=>(0,t.jsx)(d,{name:n,data:a.props.values,description:a.props.description,...e})})}if(r.ObjectUtils.isNotEmpty(a.callbacks)&&r.ObjectUtils.isNotEmpty(a.callbacks.values)&&!u("callbacks")){let[e,o]=[`api.${n}.callbacks`,"Callbacks"];if(p("callbacks",n))return;l.children.push({id:e,label:o,component:e=>(0,t.jsx)(d,{name:n,data:a.callbacks.values,description:a.callbacks.description,...e})})}if(r.ObjectUtils.isNotEmpty(a.methods)&&r.ObjectUtils.isNotEmpty(a.methods.values)&&!u("methods")){let[e,o]=[`api.${n}.methods`,"Methods"];if(p("methods",n))return;l.children.push({id:e,label:o,component:e=>(0,t.jsx)(d,{name:n,data:a.methods.values,description:a.methods.description,...e})})}n.toLocaleLowerCase()===o.toLowerCase()&&i(l.children,n),e.push(l)}),c.model&&Object.entries(c.model).forEach(([n,a])=>{let l={id:`api.${n}`,label:n,description:a.description,children:[]};if(r.ObjectUtils.isNotEmpty(a.props)&&r.ObjectUtils.isNotEmpty(a.props.values)&&!u("props")){let[e,o]=[`api.${n}.props`,"Props"];if(p("props",n))return;l.children.push({id:e,label:o,component:e=>(0,t.jsx)(d,{name:n,data:a.props.values,description:a.props.description,...e})})}n.toLocaleLowerCase()===o.toLowerCase()&&i(l.children,n),e.push(l)}),c.components||c.model||i(e,s)}return e},[]);return(0,a.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[i," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",i," module."]})]}),(0,t.jsx)(m.DocSections,{docs:s})]}),(0,t.jsx)(u.DocSectionNav,{docs:s})]})}e.s(["DocComponent",0,function(e){let r,[l,s]=(0,a.useState)(0),c=(0,n.useRouter)();r=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let p=e=>{s(e),c.replace(c.pathname)};return(0,a.useEffect)(()=>{c.asPath.includes("#api")&&s(1),c.asPath.includes("#pt")&&s(3)},[c.asPath]),(0,t.jsxs)("div",{className:(0,o.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,o.classNames)({"doc-tabmenu-active":0===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>p(0),children:r})}),e.apiDocs?(0,t.jsx)("li",{className:(0,o.classNames)({"doc-tabmenu-active":1===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>p(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,o.classNames)({"doc-tabmenu-active":2===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>p(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,o.classNames)({"doc-tabmenu-active":3===l}),children:(0,t.jsx)("button",{type:"button",onClick:()=>p(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===l?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.componentDocs})]}):null,1===l?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===l?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===l?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},66082,e=>{"use strict";var t=e.i(91398),o=e.i(91788),i=e.i(10836),n=e.i(15498),a=e.i(60150),r=e.i(34366),l=e.i(64691),s=e.i(45543),c=e.i(51551),p=e.i(3935);let d=n.ComponentBase.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,children:void 0,className:null,invalid:!1,variant:null,keyfilter:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,iconPosition:null},css:{classes:{root:({props:e,isFilled:t,context:o})=>(0,p.classNames)("p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":t,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:o&&"filled"===o.inputStyle})}}}),u=o.memo(o.forwardRef((e,u)=>{let m=(0,a.useMergeProps)(),h=o.useContext(i.PrimeReactContext),x=d.getProps(e,h),{ptm:f,cx:b,isUnstyled:g}=d.setMetaData({props:x,...x.__parentMetadata,context:{disabled:x.disabled,iconPosition:x.iconPosition}});(0,n.useHandleStyle)(d.css.styles,g,{name:"inputtext",styled:!0});let y=o.useRef(u);o.useEffect(()=>{c.ObjectUtils.combinedRefs(y,u)},[y,u]);let v=o.useMemo(()=>c.ObjectUtils.isNotEmpty(x.value)||c.ObjectUtils.isNotEmpty(x.defaultValue),[x.value,x.defaultValue]),j=c.ObjectUtils.isNotEmpty(x.tooltip);o.useEffect(()=>{v||y.current?.value?s.DomHandler.addClass(y.current,"p-filled"):s.DomHandler.removeClass(y.current,"p-filled")},[x.disabled,v]);let T=m({className:(0,p.classNames)(x.className,b("root",{context:h,isFilled:v})),autoComplete:x.autoComplete,onBeforeInput:e=>{x.onBeforeInput&&x.onBeforeInput(e),x.keyfilter&&r.KeyFilter.onBeforeInput(e,x.keyfilter,x.validateOnly)},onInput:e=>{let t=e.target,o=!0;x.keyfilter&&x.validateOnly&&(o=r.KeyFilter.validate(e,x.keyfilter)),x.onInput&&x.onInput(e,o),c.ObjectUtils.isNotEmpty(t.value)?s.DomHandler.addClass(t,"p-filled"):s.DomHandler.removeClass(t,"p-filled")},onKeyDown:e=>{x.onKeyDown&&x.onKeyDown(e),x.keyfilter&&r.KeyFilter.onKeyPress(e,x.keyfilter,x.validateOnly)},onPaste:e=>{x.onPaste&&x.onPaste(e),x.keyfilter&&r.KeyFilter.onPaste(e,x.keyfilter,x.validateOnly)}},d.getOtherProps(x),f("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{ref:y,...T}),j&&(0,t.jsx)(l.Tooltip,{target:y,content:x.tooltip,pt:f("tooltip"),...x.tooltipOptions})]})}));u.displayName="InputText",e.s(["InputText",0,u],66082)},34366,e=>{"use strict";var t=e.i(45543);let o={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:e=>o.DEFAULT_MASKS[e]?o.DEFAULT_MASKS[e]:e,onBeforeInput(e,o,i){!i&&t.DomHandler.isAndroid()&&this.validateKey(e,e.data,o)},onKeyPress(e,o,i){i||t.DomHandler.isAndroid()||e.ctrlKey||e.altKey||e.metaKey||this.validateKey(e,e.key,o)},onPaste(e,t,o){if(o)return;let i=this.getRegex(t);[...e.clipboardData.getData("text")].forEach(t=>{if(!i.test(t))return e.preventDefault(),!1})},validateKey(e,t,o){null==t||!(t.length<=2)||this.getRegex(o).test(t)||e.preventDefault()},validate(e,t){let o=e.target.value,i=!0,n=this.getRegex(t);return o&&!n.test(o)&&(i=!1),i}};e.s(["KeyFilter",0,o])},98225,e=>{"use strict";var t=e.i(91398),o=e.i(91788),i=e.i(10836),n=e.i(15498),a=e.i(20728),r=e.i(60150),l=e.i(3935);let s=n.ComponentBase.extend({defaultProps:{__TYPE:"Knob",id:null,style:null,className:null,value:null,size:100,disabled:!1,readOnly:!1,showValue:!0,tabIndex:0,step:1,min:0,max:100,strokeWidth:14,name:null,valueColor:"var(--primary-color, Black)",rangeColor:"var(--surface-border, LightGray)",textColor:"var(--text-color-secondary, Black)",valueTemplate:"{value}",onChange:null,children:void 0},css:{classes:{range:"p-knob-range",value:"p-knob-value",label:"p-knob-text",root:({props:e})=>(0,l.classNames)("p-knob p-component",{"p-disabled":e.disabled})},styles:`
        @keyframes dash-frame {
            100% {
                stroke-dashoffset: 0;
            }
        }
        @layer primereact {
            .p-knob-range {
                fill: none;
                transition: stroke .1s ease-in;
                cursor: pointer;
            }
            .p-knob-value {
                animation-name: dash-frame;
                animation-fill-mode: forwards;
                fill: none;
            }
            .p-knob-text {
                font-size: 1.3rem;
                text-align: center;
            }
        }
        `}}),c=4*Math.PI/3,p=-Math.PI/3,d=o.memo(o.forwardRef((e,d)=>{let u=(0,r.useMergeProps)(),m=o.useContext(i.PrimeReactContext),h=s.getProps(e,m),{ptm:x,cx:f,isUnstyled:b}=s.setMetaData({props:h});(0,n.useHandleStyle)(s.css.styles,b,{name:"knob"});let g=o.useRef(null),y=!h.disabled&&!h.readOnly,[v,j]=(0,a.useEventListener)({target:"window",type:"mousemove",listener:e=>{B(e.offsetX,e.offsetY),e.preventDefault()},when:y}),[T,N]=(0,a.useEventListener)({target:"window",type:"mouseup",listener:e=>{j(),N(),e.preventDefault()},when:y}),[D,k]=(0,a.useEventListener)({target:"window",type:"touchmove",listener:e=>{if(1===e.touches.length){let t=g.current.getBoundingClientRect(),o=e.targetTouches.item(0);B(o.clientX-t.left,o.clientY-t.top),e.preventDefault()}},when:y}),[w,E]=(0,a.useEventListener)({target:"window",type:"touchend",listener:()=>{k(),E()},when:y}),S=(e,t,o,i,n)=>(e-t)*(n-i)/(o-t)+i,O=()=>S(h.min>0&&h.max>0?h.min:0,h.min,h.max,c,p),C=()=>S(h.value,h.min,h.max,c,p),I=`M ${50+40*Math.cos(c)} ${50-40*Math.sin(c)} A 40 40 0 1 1 ${50+40*Math.cos(p)} ${50-40*Math.sin(p)}`,P=`M ${50+40*Math.cos(O())} ${50-40*Math.sin(O())} A 40 40 0 ${Math.abs(O()-C())<Math.PI?0:1} ${C()>O()?0:1} ${50+40*Math.cos(C())} ${50-40*Math.sin(C())}`,B=(e,t)=>{let o=e-h.size/2;R(Math.atan2(h.size/2-t,o),-Math.PI/2-Math.PI/6)},R=(e,t)=>{let o;if(e>p)o=S(e,c,p,h.min,h.max);else{if(!(e<t))return;o=S(e+2*Math.PI,c,p,h.min,h.max)}h.onChange&&h.onChange({value:Math.round((o-h.min)/h.step)*h.step+h.min})},M=e=>{let t;t=e>h.max?h.max:e<h.min?h.min:e,h.onChange&&h.onChange({value:t})};o.useImperativeHandle(d,()=>({props:h,getElement:()=>g.current}));let $=u({x:50,y:57,textAnchor:"middle",fill:h.textColor,className:f("label"),name:h.name},x("label")),F=h.showValue&&(0,t.jsx)("text",{...$,children:h.valueTemplate.replace("{value}",h.value.toString())}),L=u({ref:g,id:h.id,className:(0,l.classNames)(h.className,f("root")),style:h.style},x("root")),U=u({viewBox:"0 0 100 100",width:h.size,height:h.size,"aria-valuemin":h.min,"aria-valuemax":h.max,"aria-valuenow":h.value,"aria-labelledby":h.ariaLabelledby,"aria-label":h.ariaLabel,role:"slider",tabIndex:h.readonly||h.disabled?-1:h.tabIndex,onClick:e=>{!h.disabled&&!h.readOnly&&B(e.nativeEvent.offsetX,e.nativeEvent.offsetY)},onMouseDown:e=>{v(),T(),e.preventDefault()},onMouseUp:e=>void(j(),N()),onTouchStart:e=>void(D(),w()),onTouchEnd:e=>void(k(),E()),onKeyDown:e=>(e=>{if(!h.disabled&&!h.readonly)switch(e.code){case"ArrowRight":case"ArrowUp":e.preventDefault(),M(h.value+1);break;case"ArrowLeft":case"ArrowDown":e.preventDefault(),M(h.value-1);break;case"Home":e.preventDefault(),M(h.min);break;case"End":e.preventDefault(),M(h.max);break;case"PageUp":e.preventDefault(),M(h.value+10);break;case"PageDown":e.preventDefault(),M(h.value-10)}})(e)},x("svg")),H=u({d:I,strokeWidth:h.strokeWidth,stroke:h.rangeColor,className:f("range")},x("range")),K=u({d:P,strokeWidth:h.strokeWidth,stroke:h.valueColor,className:f("value")},x("value"));return(0,t.jsx)("div",{...L,children:(0,t.jsxs)("svg",{...U,children:[(0,t.jsx)("path",{...H}),(0,t.jsx)("path",{...K}),F]})})}));d.displayName="Knob",e.s(["Knob",0,d],98225)},65157,e=>{"use strict";var t=e.i(91398),o=e.i(91788),i=e.i(10836),n=e.i(15498),a=e.i(20728),r=e.i(60150),l=e.i(45543),s=e.i(51551),c=e.i(3935);let p=`
@layer primereact {
    .p-slider {
        position: relative;
    }
    
    .p-slider .p-slider-handle {
        position: absolute;
        cursor: grab;
        touch-action: none;
        display: block;
        z-index: 1;
    }
    
    .p-slider .p-slider-handle.p-slider-handle-active {
        z-index: 2;
    }
    
    .p-slider-range {
        position: absolute;
        display: block;
    }
    
    .p-slider-horizontal .p-slider-range {
        top: 0;
        left: 0;
        height: 100%;
    }
    
    .p-slider-horizontal .p-slider-handle {
        top: 50%;
    }
    
    .p-slider-vertical {
        height: 100px;
    }
    
    .p-slider-vertical .p-slider-handle {
        left: 50%;
    }
    
    .p-slider-vertical .p-slider-range {
        bottom: 0;
        left: 0;
        width: 100%;
    }
}
`,d=n.ComponentBase.extend({defaultProps:{__TYPE:"Slider",id:null,value:null,min:0,max:100,orientation:"horizontal",step:null,range:!1,style:null,className:null,disabled:!1,tabIndex:0,onChange:null,onSlideEnd:null,children:void 0},css:{classes:{handle:({index:e,handleIndex:t})=>(0,c.classNames)("p-slider-handle",{"p-slider-handle-start":0===e,"p-slider-handle-end":1===e,"p-slider-handle-active":t.current===e}),range:"p-slider-range",root:({props:e,vertical:t,horizontal:o})=>(0,c.classNames)("p-slider p-component",{"p-disabled":e.disabled,"p-slider-horizontal":o,"p-slider-vertical":t})},styles:p,inlineStyles:{handle:{position:"absolute"},range:{position:"absolute"}}}}),u=o.memo(o.forwardRef((e,p)=>{let u,m,h,x,f,b,g,y,v,j,T,N=(0,r.useMergeProps)(),D=o.useContext(i.PrimeReactContext),k=d.getProps(e,D),w=o.useRef(null),E=o.useRef(0),S=o.useRef(!1),O=o.useRef(!1),C=o.useRef(0),I=o.useRef(0),P=o.useRef(0),B=o.useRef(0),R=o.useRef(),M=k.range?k.value??[k.min,k.max]:k.value??k.min??0,$="horizontal"===k.orientation,F="vertical"===k.orientation,[L,U]=(0,a.useEventListener)({type:"mousemove",listener:e=>Q(e)}),[H,K]=(0,a.useEventListener)({type:"mouseup",listener:e=>Z(e)}),[A,V]=(0,a.useEventListener)({type:"touchmove",listener:e=>Q(e)}),[_,z]=(0,a.useEventListener)({type:"touchend",listener:e=>Z(e)}),{ptm:W,cx:X,sx:Y,isUnstyled:G}=d.setMetaData({props:k});(0,n.useHandleStyle)(d.css.styles,G,{name:"slider"});let q=(e,t)=>{eo(e,(k.range?M[E.current]:M)+(k.step||1)*t),e.preventDefault()},J=(e,t)=>{k.disabled||(O.current=!0,ee(),S.current=!0,k.range&&M[0]===k.max?E.current=0:E.current=t,e.preventDefault())},Q=e=>{O.current&&(et(e),e.preventDefault())},Z=e=>{if(O.current){O.current=!1;let t=et(e);k.onSlideEnd&&k.onSlideEnd({originalEvent:e,value:t}),R.current=void 0,U(),K(),V(),z()}},ee=()=>{let e=w.current.getBoundingClientRect();C.current=e.left+l.DomHandler.getWindowScrollLeft(),I.current=e.top+l.DomHandler.getWindowScrollTop(),P.current=w.current.offsetWidth,B.current=w.current.offsetHeight},et=e=>{let t,o,{pageX:i,pageY:n}={pageX:(o=Array.from(e.changedTouches??[]).find(e=>e.identifier===R.current)||e).pageX,pageY:o.pageY};if(!i||!n)return;t=$?(i-C.current)*100/P.current:(I.current+B.current-n)*100/B.current;let a=(k.max-k.min)*(t/100)+k.min;if(k.step){let e=k.range?M[E.current]:M,t=a-e;t<0?a=e+Math.ceil(a/k.step-e/k.step)*k.step:t>0&&(a=e+Math.floor(a/k.step-e/k.step)*k.step)}else a=Math.floor(a);return eo(e,a)},eo=(e,t)=>{let o=parseFloat(t.toFixed(10)),i=o;return k.range?(0===E.current?o<k.min?o=k.min:o>k.max&&(o=k.max):o>k.max?o=k.max:o<k.min&&(o=k.min),(i=[...M])[E.current]=o):(o<k.min?o=k.min:o>k.max&&(o=k.max),i=o),k.onChange&&k.onChange({originalEvent:e,value:i}),i},ei=(e,o,i)=>{e=s.ObjectUtils.isEmpty(e)?null:e,o=s.ObjectUtils.isEmpty(o)?null:o;let n={transition:O.current?"none":null,left:null!=e?e+"%":null,bottom:null!=o?o+"%":null},a=N({className:X("handle",{index:i,handleIndex:E}),style:{...Y("handle",{dragging:O,leftValue:e,bottomValue:o}),...n},tabIndex:k.tabIndex,role:"slider",onMouseDown:e=>{L(),H(),J(e,i)},onTouchStart:e=>{e.changedTouches&&e.changedTouches[0]&&(R.current=e.changedTouches[0].identifier),A(),_(),J(e,i)},onKeyDown:e=>((e,t)=>{if(!k.disabled)switch(E.current=t,e.key){case"ArrowRight":case"ArrowUp":q(e,1);break;case"ArrowLeft":case"ArrowDown":q(e,-1);break;case"PageUp":q(e,10),e.preventDefault();break;case"PageDown":q(e,-10),e.preventDefault();break;case"Home":q(e,-M),e.preventDefault();break;case"End":q(e,k.max),e.preventDefault()}})(e,i),"aria-valuemin":k.min,"aria-valuemax":k.max,"aria-valuenow":e||o||0,"aria-orientation":k.orientation,...ea},W("handle"));return(0,t.jsx)("span",{...a})};o.useImperativeHandle(p,()=>({props:k,getElement:()=>w.current}));let en=d.getOtherProps(k),ea=s.ObjectUtils.reduceKeys(en,l.DomHandler.ARIA_PROPS),er=k.range?(u=(M[0]<k.min?k.min:M[0]-k.min)*100/(k.max-k.min),m=(M[1]>k.max?k.max:M[1]-k.min)*100/(k.max-k.min),h=$?ei(u,null,0):ei(null,u,0),x=$?ei(m,null,1):ei(null,m,1),f=m>u?m-u:u-m,b=m>u?u:m,g=N({className:X("range"),style:{...Y("range"),...$?{left:b+"%",width:f+"%"}:{bottom:b+"%",height:f+"%"}}},W("range")),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{...g}),h,x]})):(y=M<k.min?k.min:M>k.max?k.max:(M-k.min)*100/(k.max-k.min),v=$?{width:y+"%"}:{height:y+"%"},j=$?ei(y,null,null):ei(null,y,null),T=N({className:X("range"),style:{...Y("range"),...v}},W("range")),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{...T}),j]})),el=N({style:k.style,className:(0,c.classNames)(k.className,X("root",{vertical:F,horizontal:$})),onClick:e=>{if(!k.disabled){if(!S.current){ee();let t=et(e);k.onSlideEnd&&k.onSlideEnd({originalEvent:e,value:t})}S.current=!1}}},d.getOtherProps(k),W("root"));return(0,t.jsx)("div",{id:k.id,ref:w,...el,children:er})}));u.displayName="Slider",e.s(["Slider",0,u],65157)},3828,(e,t,o)=>{t.exports=e.r(26990)},3878,e=>{"use strict";var t=e.i(91398),o=e.i(88850),i=e.i(82948),n=e.i(28137);function a(){return(0,t.jsxs)(n.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Tooltip component uses ",(0,t.jsx)("i",{children:"tooltip"})," role and when it becomes visible the generated id of the tooltip is defined as the ",(0,t.jsx)("i",{children:"aria-describedby"})," of the target."]}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the tooltip when focus is on the target."})]})})]})})]})}var r=e.i(5180),l=e.i(66082);function s(e){let o={basic:`
<InputText type="text" placeholder="autoHide: false" tooltip="Enter your username" tooltipOptions={{ autoHide: false }} />
<InputText type="text" placeholder="autoHide: true" tooltip="Enter your username" />
        `,javascript:`
import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function AutoHideDemo() {

    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-2">
            <InputText type="text" placeholder="autoHide: false" tooltip="Enter your username" tooltipOptions={{ autoHide: false }} />
            <InputText type="text" placeholder="autoHide: true" tooltip="Enter your username" />
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function AutoHideDemo() {

    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-2">
            <InputText type="text" placeholder="autoHide: false" tooltip="Enter your username" tooltipOptions={{ autoHide: false }} />
            <InputText type="text" placeholder="autoHide: true" tooltip="Enter your username" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Tooltip is hidden when mouse leaves the target element, in cases where tooltip needs to be interacted with, set ",(0,t.jsx)("i",{children:"autoHide"})," to false to change the default behavior."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap align-items-center justify-content-center gap-2",children:[(0,t.jsx)(l.InputText,{type:"text",placeholder:"autoHide: false",tooltip:"Enter your username",tooltipOptions:{autoHide:!1}}),(0,t.jsx)(l.InputText,{type:"text",placeholder:"autoHide: true",tooltip:"Enter your username"})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}var c=e.i(57724);function p(e){let o={basic:`
<Button tooltip="Confirm to proceed" tooltipOptions={{ showDelay: 1000, hideDelay: 300 }} label="Save" />
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function DelayDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button tooltip="Confirm to proceed" tooltipOptions={{ showDelay: 1000, hideDelay: 300 }} label="Save" />
        </div>
    );
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function DelayDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button tooltip="Confirm to proceed" tooltipOptions={{ showDelay: 1000, hideDelay: 300 }} label="Save" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Adding delays to the show and hide events are defined with ",(0,t.jsx)("i",{children:"showDelay"})," and ",(0,t.jsx)("i",{children:"hideDelay"})," options respectively."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(c.Button,{tooltip:"Confirm to proceed",tooltipOptions:{showDelay:1e3,hideDelay:300},label:"Save"})}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}var d=e.i(64691);function u(e){let o={basic:`
<Tooltip target=".disabled-button" />
<span className="disabled-button" data-pr-tooltip="Disabled">
    <Button type="button" label="Save" icon="pi pi-check" disabled />
</span>

<Button type="button" label="Save" icon="pi pi-check" disabled tooltip="Disabled" tooltipOptions={{ showOnDisabled: true }} />
        `,javascript:`
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function DisabledDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Tooltip target=".disabled-button" />
            <span className="disabled-button" data-pr-tooltip="Disabled">
                <Button type="button" label="Save" icon="pi pi-check" disabled />
            </span>

            <Button type="button" label="Save" icon="pi pi-check" disabled tooltip="Disabled" tooltipOptions={{ showOnDisabled: true }} />
        </div>
    );
}
        `,typescript:`
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function DisabledDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Tooltip target=".disabled-button" />
            <span className="disabled-button" data-pr-tooltip="Disabled">
                <Button type="button" label="Save" icon="pi pi-check" disabled />
            </span>

            <Button type="button" label="Save" icon="pi pi-check" disabled tooltip="Disabled" tooltipOptions={{ showOnDisabled: true }} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Disabled elements do not trigger user interactions due to standard behavior. A common workaround for such cases is wrapping the disabled element with another element that has a tooltip attached. If the tooltip is built-in to the component then enable ",(0,t.jsx)("i",{children:"showOnDisabled"})," option instead."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-2",children:[(0,t.jsx)(d.Tooltip,{target:".disabled-button"}),(0,t.jsx)("span",{className:"disabled-button","data-pr-tooltip":"Disabled",children:(0,t.jsx)(c.Button,{type:"button",label:"Save",icon:"pi pi-check",disabled:!0})}),(0,t.jsx)(c.Button,{type:"button",label:"Save",icon:"pi pi-check",disabled:!0,tooltip:"Disabled",tooltipOptions:{showOnDisabled:!0}})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function m(e){let o={basic:`
<InputText type="text" placeholder="Hover" tooltip="Enter your username"/>
<InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{ event: 'focus' }} />
<InputText type="text" placeholder="Both" tooltip="Enter your username" tooltipOptions={{ event: 'both' }} />
        `,javascript:`
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function EventDemo() {
    return (
        <div className="card flex justify-content-center gap-2">
            <InputText type="text" placeholder="Hover" tooltip="Enter your username"/>
            <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{ event: 'focus' }} />
            <InputText type="text" placeholder="Both" tooltip="Enter your username" tooltipOptions={{ event: 'both' }} />
        </div>
    );
}
        `,typescript:`
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function EventDemo() {
    return (
        <div className="card flex justify-content-center gap-2">
            <InputText type="text" placeholder="Hover" tooltip="Enter your username"/>
            <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{ event: 'focus' }} />
            <InputText type="text" placeholder="Both" tooltip="Enter your username" tooltipOptions={{ event: 'both' }} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Tooltip gets displayed on hover event by default, use the ",(0,t.jsx)("i",{children:"event"})," option to set ",(0,t.jsx)("i",{children:"focus"})," or ",(0,t.jsx)("i",{children:"both"})," as alternatives."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-2",children:[(0,t.jsx)(l.InputText,{type:"text",placeholder:"Hover",tooltip:"Enter your username"}),(0,t.jsx)(l.InputText,{type:"text",placeholder:"Focus",tooltip:"Enter your username",tooltipOptions:{event:"focus"}}),(0,t.jsx)(l.InputText,{type:"text",placeholder:"Both",tooltip:"Enter your username",tooltipOptions:{event:"both"}})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function h(e){let o={basic:`
import { Tooltip } from 'primereact/tooltip';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)(r.DocSectionCode,{code:o,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function x(e){let o={basic:`
<Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

<Tooltip target=".logo" mouseTrack mouseTrackLeft={10} />
<img className="logo" alt="logo" src="/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
        `,javascript:`
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function MouseTrackDemo() {
    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-5">
            <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

            <Tooltip target=".logo" mouseTrack mouseTrackLeft={10} />
            <img className="logo" alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
        </div>
    );
}
        `,typescript:`
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function MouseTrackDemo() {
    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-5">
            <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

            <Tooltip target=".logo" mouseTrack mouseTrackLeft={10} />
            <img className="logo" alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"mouseTrack"})," option is enabled, position of the Tooltip is updated according to the pointer coordinates."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap align-items-center justify-content-center gap-5",children:[(0,t.jsx)(c.Button,{type:"button",label:"Save",icon:"pi pi-check",tooltip:"Save",tooltipOptions:{position:"bottom",mouseTrack:!0,mouseTrackTop:15}}),(0,t.jsx)(d.Tooltip,{target:".logo",mouseTrack:!0,mouseTrackLeft:10}),(0,t.jsx)("img",{className:"logo",alt:"logo",src:"https://primefaces.org/cdn/primereact/images/logo.png","data-pr-tooltip":"PrimeReact-Logo",height:"80px"})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function f(e){let o={basic:`
<InputText type="text" placeholder="Right" tooltip="Enter your username" />
<InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{ position: 'top' }} />
<InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{ position: 'bottom' }} />
<InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{ position: 'left' }} />
<InputText type="text" placeholder="Mouse" tooltip="Enter your username" tooltipOptions={{ position: 'mouse' }} />
        `,javascript:`
import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function PositionDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <InputText type="text" placeholder="Right" tooltip="Enter your username" />
            <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{ position: 'top' }} />
            <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{ position: 'bottom' }} />
            <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{ position: 'left' }} />
            <InputText type="text" placeholder="Mouse" tooltip="Enter your username" tooltipOptions={{ position: 'mouse' }} />
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function PositionDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <InputText type="text" placeholder="Right" tooltip="Enter your username" />
            <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{ position: 'top' }} />
            <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{ position: 'bottom' }} />
            <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{ position: 'left' }} />
            <InputText type="text" placeholder="Mouse" tooltip="Enter your username" tooltipOptions={{ position: 'mouse' }} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Form components have built-in support with the ",(0,t.jsx)("i",{children:"tooltip"})," property and customizations like positioning is provided with ",(0,t.jsx)("i",{children:"tooltipOptions"}),"."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-2",children:[(0,t.jsx)(l.InputText,{type:"text",placeholder:"Right",tooltip:"Enter your username"}),(0,t.jsx)(l.InputText,{type:"text",placeholder:"Top",tooltip:"Enter your username",tooltipOptions:{position:"top"}}),(0,t.jsx)(l.InputText,{type:"text",placeholder:"Bottom",tooltip:"Enter your username",tooltipOptions:{position:"bottom"}}),(0,t.jsx)(l.InputText,{type:"text",placeholder:"Left",tooltip:"Enter your username",tooltipOptions:{position:"left"}}),(0,t.jsx)(l.InputText,{type:"text",placeholder:"Mouse",tooltip:"Enter your username",tooltipOptions:{position:"mouse"}})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}let b=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/tooltip.jpg",alt:"tag"})})]});var g=e.i(98225),y=e.i(65157),v=e.i(91788);function j(e){let[o,i]=(0,v.useState)("Click to proceed"),[a,l]=(0,v.useState)(60),[s,p]=(0,v.useState)(20),u={basic:`
<Button type="button" label="Save" icon="pi pi-check" tooltip={buttonTooltip} onClick={() => setButtonTooltip('Completed')} />

<Tooltip target=".knob" content={\`\${knobValue}%\`} />
<Knob className="knob" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

<Tooltip target=".slider>.p-slider-handle" content={\`\${sliderValue}%\`} position="top" event="focus" />
<Slider className="slider" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
        `,javascript:`
import React, { useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Slider } from 'primereact/slider';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

export default function ReactiveDemo() {
    const [buttonTooltip, setButtonTooltip] = useState('Click to proceed');
    const [knobValue, setKnobValue] = useState(60);
    const [sliderValue, setSliderValue] = useState(20);

    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-5">
            <Button type="button" label="Save" icon="pi pi-check" tooltip={buttonTooltip} onClick={() => setButtonTooltip('Completed')} />

            <Tooltip target=".knob" content={\`\${knobValue}%\`} />
            <Knob className="knob" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

            <Tooltip target=".slider>.p-slider-handle" content={\`\${sliderValue}%\`} position="top" event="focus" />
            <Slider className="slider" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Slider } from 'primereact/slider';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

export default function ReactiveDemo() {
    const [buttonTooltip, setButtonTooltip] = useState<string>('Click to proceed');
    const [knobValue, setKnobValue] = useState<number>(60);
    const [sliderValue, setSliderValue] = useState<number>(20);

    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-5">
            <Button type="button" label="Save" icon="pi pi-check" tooltip={buttonTooltip} onClick={() => setButtonTooltip('Completed')} />

            <Tooltip target=".knob" content={\`\${knobValue}%\`} />
            <Knob className="knob" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

            <Tooltip target=".slider>.p-slider-handle" content={\`\${sliderValue}%\`} position="top" event="focus" />
            <Slider className="slider" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Tooltip content is reactive to reflect changes related to the target component."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap align-items-center justify-content-center gap-5",children:[(0,t.jsx)(c.Button,{type:"button",label:"Save",icon:"pi pi-check",tooltip:o,onClick:()=>i("Completed")}),(0,t.jsx)(d.Tooltip,{target:".knob",content:`${a}%`}),(0,t.jsx)(g.Knob,{className:"knob",value:a,onChange:e=>l(e.value),showValue:!1}),(0,t.jsx)(d.Tooltip,{target:".slider>.p-slider-handle",content:`${s}%`,position:"top",event:"focus"}),(0,t.jsx)(y.Slider,{className:"slider",value:s,onChange:e=>p(e.value),style:{width:"14rem"}})]}),(0,t.jsx)(r.DocSectionCode,{code:u})]})}var T=e.i(50989);function N(e){let o={basic:`
<Tooltip target=".custom-target-icon" />

<i className="custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge"
    data-pr-tooltip="No notifications"
    data-pr-position="right"
    data-pr-at="right+5 top"
    data-pr-my="left center-2"
    style={{ fontSize: '2rem', cursor: 'pointer' }}>
    <Badge severity="danger"></Badge>
</i>
        `,javascript:`
import React from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Badge } from 'primereact/badge';

export default function TargetDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tooltip target=".custom-target-icon" />

            <i className="custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge"
                data-pr-tooltip="No notifications"
                data-pr-position="right"
                data-pr-at="right+5 top"
                data-pr-my="left center-2"
                style={{ fontSize: '2rem', cursor: 'pointer' }}>
                <Badge severity="danger"></Badge>
            </i>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Badge } from 'primereact/badge';

export default function TargetDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tooltip target=".custom-target-icon" />

            <i className="custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge"
                data-pr-tooltip="No notifications"
                data-pr-position="right"
                data-pr-at="right+5 top"
                data-pr-my="left center-2"
                style={{ fontSize: '2rem', cursor: 'pointer' }}>
                <Badge severity="danger"></Badge>
            </i>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Standalone ",(0,t.jsx)("i",{children:"Tooltip"})," component can attach to any element using the ",(0,t.jsx)("i",{children:"target"})," property that accepts a valid query selector. In this case, content and options need to be defined with ",(0,t.jsx)("i",{children:"data-pr"})," attributes."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(d.Tooltip,{target:".custom-target-icon"}),(0,t.jsx)("i",{className:"custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge","data-pr-tooltip":"No notifications","data-pr-position":"right","data-pr-at":"right+5 top","data-pr-my":"left center-2",style:{fontSize:"2rem",cursor:"pointer"},children:(0,t.jsx)(T.Badge,{severity:"danger"})})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function D(e){let o={basic:`
<Tooltip target=".custom-tooltip-btn">
    <img alt="logo" src="/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
</Tooltip>

<Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
        `,javascript:`
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tooltip target=".custom-tooltip-btn">
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
            </Tooltip>

            <Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
        </div>
    );
}
        `,typescript:`
import React from 'react'; 
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tooltip target=".custom-tooltip-btn">
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" data-pr-tooltip="PrimeReact-Logo" height="80px" />
            </Tooltip>

            <Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Custom content can be placed as the tooltip value either with ",(0,t.jsx)("i",{children:"content"})," property or nesting the content as children."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(d.Tooltip,{target:".custom-tooltip-btn",children:(0,t.jsx)("img",{alt:"logo",src:"https://primefaces.org/cdn/primereact/images/logo.png","data-pr-tooltip":"PrimeReact-Logo",height:"80px"})}),(0,t.jsx)(c.Button,{className:"custom-tooltip-btn",type:"button",label:"Save",icon:"pi pi-check"})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function k(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-tooltip"}),(0,t.jsx)("td",{children:"Container element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-tooltip-arrow"}),(0,t.jsx)("td",{children:"Arrow of the tooltip"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-tooltip-text"}),(0,t.jsx)("td",{children:"Text of the tooltip"})]})]})]})})]})}var w=e.i(41158);function E(e){let o={basic:`
const Tailwind = {
    tooltip: {
        root: ({ context }) => {
            return {
                className: classNames('absolute shadow-md', {
                    'py-0 px-1': context.right || context.left || (!context.right && !context.left && !context.top && !context.bottom),
                    'py-1 px-0': context.top || context.bottom
                })
            };
        },
        arrow: ({ context }) => ({
            className: classNames('absolute w-0 h-0 border-transparent border-solid', {
                '-mt-1 border-y-[0.25rem] border-r-[0.25rem] border-l-0 border-r-gray-600': context.right,
                '-mt-1 border-y-[0.25rem] border-l-[0.25rem] border-r-0 border-l-gray-600': context.left,
                '-ml-1 border-x-[0.25rem] border-t-[0.25rem] border-b-0 border-t-gray-600': context.top,
                '-ml-1 border-x-[0.25rem] border-b-[0.25rem] border-t-0 border-b-gray-600': context.bottom
            })
        }),
        text: {
            className: 'p-3 bg-gray-600 text-white rounded-md whitespace-pre-line break-words'
        }
    }
}
        `},i={javascript:`
import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function UnstyledDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-2">
            <InputText type="text" placeholder="Right" tooltip="Enter your username" />
            <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{ position: 'top' }} />
            <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{ position: 'bottom' }} />
            <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{ position: 'left' }} />
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(n.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(w.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(r.DocSectionCode,{code:o,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(r.DocSectionCode,{code:i,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:b},{id:"pt.tooltip.options",label:"Tooltip PT Options",component:o.default}];return(0,t.jsx)(i.DocComponent,{title:"React Tooltip Component",header:"Tooltip",description:"Tooltip functionality is integrated within various PrimeReact components.",componentDocs:[{id:"import",label:"Import",component:h},{id:"position",label:"Position",component:f},{id:"event",label:"Event",component:m},{id:"autohide",label:"Auto Hide",component:s},{id:"delay",label:"Delay",component:p},{id:"target",label:"Target",component:N},{id:"mousetrack",label:"Mouse Track",component:x},{id:"reactive",label:"Reactive",component:j},{id:"disabled",label:"Disabled",component:u},{id:"template",label:"Template",component:D},{id:"accessibility",label:"Accessibility",component:a}],apiDocs:["Tooltip","TooltipOptions"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:k},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:E}]}]})}],3878)},78280,(e,t,o)=>{let i="/tooltip";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(3878)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);