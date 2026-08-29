(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),n=e.i(91788);e.s(["CodeHighlight",0,function(e){let a=(0,n.useRef)(),s=`language-${e.lang||"jsx"}`;return(0,n.useEffect)(()=>{window.Prism.highlightElement(a.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:a,className:s,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),n=e.i(3935),a=e.i(58678),s=e.i(3828),i=e.i(91788),l=e.i(51551),o=e.i(72124),r=e.i(41158),c=e.i(87914),d=e.i(28137);let u=e=>{let a=(0,i.useContext)(c.default),{id:o,data:u,name:p,description:m,allowLink:h=!0}=e,x=o.startsWith("pt."),v=(0,s.useRouter)();if(l.ObjectUtils.isNotEmpty(u)){let s=Object.keys(u[0]),c=(e,t)=>{let n=document.getElementById(e);n&&n.parentElement.scrollIntoView({block:"start",behavior:t})},j=(e,a,s)=>{if(h&&e)return e.split("|").map((e,l)=>{if(e.includes(p)){let n=e.indexOf(p),a=e.substring(n).replace(/(\[|\]|<|>).*$/gm,"").trim(),s=p===a?`api.${p}`:`api.${p}.${a===`${p}Props`?"props":a}`;return(0,t.jsxs)(i.default.Fragment,{children:[0!==l?"|":"",(0,t.jsx)(r.default,{href:v.basePath+v.pathname+`#${s}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(s,"smooth"),children:e})})]},l)}return(0,t.jsxs)(i.default.Fragment,{children:[0!==l?"|":"",a?(0,t.jsxs)("span",{id:o+"."+e,className:(0,n.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[e,(0,t.jsx)(r.default,{href:v.basePath+v.pathname+`#${o+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(o+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},l)});let l=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return a?(0,t.jsxs)("span",{id:o+"."+l,className:(0,n.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[l,(0,t.jsx)(r.default,{href:v.basePath+v.pathname+`#${o+"."+l}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(o+"."+l),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):l},b=(0,t.jsx)(i.default.Fragment,{children:x?(0,t.jsx)("tr",{children:s.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:s.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),f=(0,t.jsx)(i.default.Fragment,{children:u.map((e,s)=>{if(x){let{value:n,label:a,description:i}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:n}),(0,t.jsx)("td",{children:a}),(0,t.jsx)("td",{children:i})]},s)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([s,i],o)=>"readonly"!==s&&"optional"!==s&&"deprecated"!==s&&(0,t.jsx)("td",{children:"parameters"===s?i.map((e,n)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:j(e.type)}),(0,t.jsx)("br",{})]},n)):"default"===s?(0,t.jsx)("div",{className:(0,n.classNames)("doc-option-default",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:l.ObjectUtils.isEmpty(i)?"null":j(i,"name"===s,e.deprecated)}):"type"===s?(0,t.jsx)("span",{className:"doc-option-type",children:j(i,"name"===s,e.deprecated)}):"returnType"===s?(0,t.jsx)("div",{className:(0,n.classNames)("doc-option-returnType",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:j(i,"name"===s,e.deprecated)}):"description"===s||"values"===s?(0,t.jsx)("span",{className:"doc-option-description",children:i}):j(i,"name"===s,e.deprecated)},o))},s)})});return(0,t.jsxs)(i.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:m})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:b}),(0,t.jsx)("tbody",{children:f})]})})]},o)}return null};e.s(["default",0,u],88850);var p=e.i(71864),m=e.i(38076);function h(e){let{doc:n,header:a}=e,s=e.apiExclude,r=n.reduce((e,n)=>{let a,i=n.split("."),r=(a=i[0])&&a[0].toUpperCase()+a.slice(1)||"",c=o.default[r.toLowerCase()],d=(e,t)=>s&&s[e]&&s[e].includes(t),p=e=>s&&s[e]&&"excludeAll"===s[e];if(c){let a=(e,n)=>{if(l.ObjectUtils.isNotEmpty(c.events)&&l.ObjectUtils.isNotEmpty(c.events.values)&&!p("events")){let a={id:`api.${n}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,s])=>{let[i,l]=[`api.${n}.${e}`,e];d("event",e)||a.children.push({id:i,label:l,component:e=>(0,t.jsx)(u,{name:n,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," See ",(0,t.jsx)("i",{children:s.relatedProp}),"."]}),...e})})}),e.push(a)}if(l.ObjectUtils.isNotEmpty(c.interfaces)&&l.ObjectUtils.isNotEmpty(c.interfaces.values)&&!p("interfaces")){let a={id:`api.${n}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,s])=>{let[i,l]=[`api.${n}.${e}`,e];d("interfaces",e)||a.children.push({id:i,label:l,component:e=>(0,t.jsx)(u,{name:n,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," ",s.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:s.extendedTypes}),"."]})]}),...e})})}),e.push(a)}if(l.ObjectUtils.isNotEmpty(c.types)&&l.ObjectUtils.isNotEmpty(c.types.values)&&!p("types")){let a={id:`api.${n}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,s])=>{let[i,l]=[`api.${n}.${e}`,e];d("types",e)||a.children.push({id:i,label:l,component:e=>(0,t.jsx)(u,{name:n,data:[s],allowLink:!1,...e})})}),e.push(a)}};if(3===i.length){let n=i[1],a=i[2];if("functions"===n){let s=c[n].values[a],i={id:`api.${r}`,label:r,children:[]},[o,d]=[`api.${r}.function`,"Function"],p=Object.entries(s).reduce((e,[t,n])=>("description"!==t&&(e[t]=n),e),{});i.children.push({id:o,label:d,component:e=>(0,t.jsx)(u,{name:r,data:[p],description:s.description,...e})});let m=s.parameters&&s.parameters.map(e=>e.type);if(l.ObjectUtils.isNotEmpty(c.interfaces)&&l.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${r}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([n,a])=>{if(m.includes(n)){let[s,i]=[`api.${r}.${n}`,n],o={id:s,label:i,description:(0,t.jsxs)(t.Fragment,{children:[a.description," ",a.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:a.extendedTypes}),"."]})]}),children:[]};l.ObjectUtils.isNotEmpty(a.props)&&o.children.push({id:`${s}.props`,label:"Props",component:e=>(0,t.jsx)(u,{data:a.props,...e})}),l.ObjectUtils.isNotEmpty(a.callbacks)&&o.children.push({id:`${s}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(u,{data:a.callbacks,...e})}),e.children.push(o)}}),l.ObjectUtils.isNotEmpty(e.children)&&i.children.push(e)}e.push(i)}}else c.components&&Object.entries(c.components).forEach(([s,i])=>{let o={id:`api.${s}`,label:s,description:i.description,children:[]};if(l.ObjectUtils.isNotEmpty(i.props)&&l.ObjectUtils.isNotEmpty(i.props.values)&&!p("props")){let[e,n]=[`api.${s}.props`,"Props"];if(d("props",s))return;o.children.push({id:e,label:n,component:e=>(0,t.jsx)(u,{name:s,data:i.props.values,description:i.props.description,...e})})}if(l.ObjectUtils.isNotEmpty(i.callbacks)&&l.ObjectUtils.isNotEmpty(i.callbacks.values)&&!p("callbacks")){let[e,n]=[`api.${s}.callbacks`,"Callbacks"];if(d("callbacks",s))return;o.children.push({id:e,label:n,component:e=>(0,t.jsx)(u,{name:s,data:i.callbacks.values,description:i.callbacks.description,...e})})}if(l.ObjectUtils.isNotEmpty(i.methods)&&l.ObjectUtils.isNotEmpty(i.methods.values)&&!p("methods")){let[e,n]=[`api.${s}.methods`,"Methods"];if(d("methods",s))return;o.children.push({id:e,label:n,component:e=>(0,t.jsx)(u,{name:s,data:i.methods.values,description:i.methods.description,...e})})}s.toLocaleLowerCase()===n.toLowerCase()&&a(o.children,s),e.push(o)}),c.model&&Object.entries(c.model).forEach(([s,i])=>{let o={id:`api.${s}`,label:s,description:i.description,children:[]};if(l.ObjectUtils.isNotEmpty(i.props)&&l.ObjectUtils.isNotEmpty(i.props.values)&&!p("props")){let[e,n]=[`api.${s}.props`,"Props"];if(d("props",s))return;o.children.push({id:e,label:n,component:e=>(0,t.jsx)(u,{name:s,data:i.props.values,description:i.props.description,...e})})}s.toLocaleLowerCase()===n.toLowerCase()&&a(o.children,s),e.push(o)}),c.components||c.model||a(e,r)}return e},[]);return(0,i.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[a," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",a," module."]})]}),(0,t.jsx)(m.DocSections,{docs:r})]}),(0,t.jsx)(p.DocSectionNav,{docs:r})]})}e.s(["DocComponent",0,function(e){let l,[o,r]=(0,i.useState)(0),c=(0,s.useRouter)();l=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{r(e),c.replace(c.pathname)};return(0,i.useEffect)(()=>{c.asPath.includes("#api")&&r(1),c.asPath.includes("#pt")&&r(3)},[c.asPath]),(0,t.jsxs)("div",{className:(0,n.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":0===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:l})}),e.apiDocs?(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":1===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":2===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,n.classNames)({"doc-tabmenu-active":3===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===o?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.componentDocs})]}):null,1===o?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===o?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===o?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},98225,e=>{"use strict";var t=e.i(91398),n=e.i(91788),a=e.i(10836),s=e.i(15498),i=e.i(20728),l=e.i(60150),o=e.i(3935);let r=s.ComponentBase.extend({defaultProps:{__TYPE:"Knob",id:null,style:null,className:null,value:null,size:100,disabled:!1,readOnly:!1,showValue:!0,tabIndex:0,step:1,min:0,max:100,strokeWidth:14,name:null,valueColor:"var(--primary-color, Black)",rangeColor:"var(--surface-border, LightGray)",textColor:"var(--text-color-secondary, Black)",valueTemplate:"{value}",onChange:null,children:void 0},css:{classes:{range:"p-knob-range",value:"p-knob-value",label:"p-knob-text",root:({props:e})=>(0,o.classNames)("p-knob p-component",{"p-disabled":e.disabled})},styles:`
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
        `}}),c=4*Math.PI/3,d=-Math.PI/3,u=n.memo(n.forwardRef((e,u)=>{let p=(0,l.useMergeProps)(),m=n.useContext(a.PrimeReactContext),h=r.getProps(e,m),{ptm:x,cx:v,isUnstyled:j}=r.setMetaData({props:h});(0,s.useHandleStyle)(r.css.styles,j,{name:"knob"});let b=n.useRef(null),f=!h.disabled&&!h.readOnly,[g,y]=(0,i.useEventListener)({target:"window",type:"mousemove",listener:e=>{R(e.offsetX,e.offsetY),e.preventDefault()},when:f}),[N,C]=(0,i.useEventListener)({target:"window",type:"mouseup",listener:e=>{y(),C(),e.preventDefault()},when:f}),[k,S]=(0,i.useEventListener)({target:"window",type:"touchmove",listener:e=>{if(1===e.touches.length){let t=b.current.getBoundingClientRect(),n=e.targetTouches.item(0);R(n.clientX-t.left,n.clientY-t.top),e.preventDefault()}},when:f}),[D,K]=(0,i.useEventListener)({target:"window",type:"touchend",listener:()=>{S(),K()},when:f}),w=(e,t,n,a,s)=>(e-t)*(s-a)/(n-t)+a,E=()=>w(h.min>0&&h.max>0?h.min:0,h.min,h.max,c,d),T=()=>w(h.value,h.min,h.max,c,d),V=`M ${50+40*Math.cos(c)} ${50-40*Math.sin(c)} A 40 40 0 1 1 ${50+40*Math.cos(d)} ${50-40*Math.sin(d)}`,O=`M ${50+40*Math.cos(E())} ${50-40*Math.sin(E())} A 40 40 0 ${Math.abs(E()-T())<Math.PI?0:1} ${T()>E()?0:1} ${50+40*Math.cos(T())} ${50-40*Math.sin(T())}`,R=(e,t)=>{let n=e-h.size/2;P(Math.atan2(h.size/2-t,n),-Math.PI/2-Math.PI/6)},P=(e,t)=>{let n;if(e>d)n=w(e,c,d,h.min,h.max);else{if(!(e<t))return;n=w(e+2*Math.PI,c,d,h.min,h.max)}h.onChange&&h.onChange({value:Math.round((n-h.min)/h.step)*h.step+h.min})},$=e=>{let t;t=e>h.max?h.max:e<h.min?h.min:e,h.onChange&&h.onChange({value:t})};n.useImperativeHandle(u,()=>({props:h,getElement:()=>b.current}));let M=p({x:50,y:57,textAnchor:"middle",fill:h.textColor,className:v("label"),name:h.name},x("label")),F=h.showValue&&(0,t.jsx)("text",{...M,children:h.valueTemplate.replace("{value}",h.value.toString())}),I=p({ref:b,id:h.id,className:(0,o.classNames)(h.className,v("root")),style:h.style},x("root")),U=p({viewBox:"0 0 100 100",width:h.size,height:h.size,"aria-valuemin":h.min,"aria-valuemax":h.max,"aria-valuenow":h.value,"aria-labelledby":h.ariaLabelledby,"aria-label":h.ariaLabel,role:"slider",tabIndex:h.readonly||h.disabled?-1:h.tabIndex,onClick:e=>{!h.disabled&&!h.readOnly&&R(e.nativeEvent.offsetX,e.nativeEvent.offsetY)},onMouseDown:e=>{g(),N(),e.preventDefault()},onMouseUp:e=>void(y(),C()),onTouchStart:e=>void(k(),D()),onTouchEnd:e=>void(S(),K()),onKeyDown:e=>(e=>{if(!h.disabled&&!h.readonly)switch(e.code){case"ArrowRight":case"ArrowUp":e.preventDefault(),$(h.value+1);break;case"ArrowLeft":case"ArrowDown":e.preventDefault(),$(h.value-1);break;case"Home":e.preventDefault(),$(h.min);break;case"End":e.preventDefault(),$(h.max);break;case"PageUp":e.preventDefault(),$(h.value+10);break;case"PageDown":e.preventDefault(),$(h.value-10)}})(e)},x("svg")),z=p({d:V,strokeWidth:h.strokeWidth,stroke:h.rangeColor,className:v("range")},x("range")),B=p({d:O,strokeWidth:h.strokeWidth,stroke:h.valueColor,className:v("value")},x("value"));return(0,t.jsx)("div",{...I,children:(0,t.jsxs)("svg",{...U,children:[(0,t.jsx)("path",{...z}),(0,t.jsx)("path",{...B}),F]})})}));u.displayName="Knob",e.s(["Knob",0,u],98225)},3828,(e,t,n)=>{t.exports=e.r(26990)},28310,e=>{"use strict";var t=e.i(91398),n=e.i(88850),a=e.i(82948),s=e.i(5180),i=e.i(28137);function l(){let e={basic:`
<label htmlFor="firstname">Firstname</label>
<InputText id="firstname" />

<span id="lastname">Lastname</span>
<InputText aria-labelledby="lastname" />

<InputText aria-label="Age"/>
    `};return(0,t.jsxs)(i.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Knob element component uses ",(0,t.jsx)("i",{children:"slider"})," role in addition to the ",(0,t.jsx)("i",{children:"aria-valuemin"}),", ",(0,t.jsx)("i",{children:"aria-valuemax"})," and ",(0,t.jsx)("i",{children:"aria-valuenow"})," attributes. Value to describe the component can be defined using",(0,t.jsx)("i",{children:"aria-labelledby"})," and ",(0,t.jsx)("i",{children:"aria-label"})," props."]}),(0,t.jsx)(s.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the slider."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsxs)("span",{className:"inline-flex flex-column",children:[(0,t.jsx)("i",{className:"mb-1",children:"left arrow"}),(0,t.jsx)("i",{children:"down arrow"})]})}),(0,t.jsx)("td",{children:"Decrements the value."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsxs)("span",{className:"inline-flex flex-column",children:[(0,t.jsx)("i",{className:"mb-1",children:"right arrow"}),(0,t.jsx)("i",{children:"up arrow"})]})}),(0,t.jsx)("td",{children:"Increments the value."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Set the minimum value."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Set the maximum value."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"page up"})}),(0,t.jsx)("td",{children:"Increments the value by 10 steps."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"page down"})}),(0,t.jsx)("td",{children:"Decrements the value by 10 steps."})]})]})]})})]})}var o=e.i(98225),r=e.i(91788);function c(e){let[n,a]=(0,r.useState)(0),l={basic:`
<Knob value={value} onChange={(e) => setValue(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { Knob } from 'primereact/knob';

export default function BasicDemo() {
    const [value, setValue] = useState(0);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function BasicDemo() {
    const [value, setValue] = useState<number>(0);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e: KnobChangeEvent) => setValue(e.value)} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Knob is used as a controlled input with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(o.Knob,{value:n,onChange:e=>a(e.value)})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function d(e){let[n,a]=(0,r.useState)(75),l={basic:`
<Knob value={value} onChange={(e) => setValue(e.value)} valueColor="#708090" rangeColor="#48d1cc" />
        `,javascript:`
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function ColorDemo() {
    const [value, setValue] = useState(75);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) => setValue(e.value)} valueColor="#708090" rangeColor="#48d1cc" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function ColorDemo() {
    const [value, setValue] = useState<number>(75);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e : KnobChangeEvent) => setValue(e.value)} valueColor="#708090" rangeColor="#48d1cc" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Colors are customized with the ",(0,t.jsx)("i",{children:"textColor"}),", ",(0,t.jsx)("i",{children:"rangeColor"})," and ",(0,t.jsx)("i",{children:"valueColor"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(o.Knob,{value:n,onChange:e=>a(e.value),valueColor:"#708090",rangeColor:"#48d1cc"})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function u(e){let[n,a]=(0,r.useState)(75),l={basic:`
<Knob value={50} disabled />
        `,javascript:`
import React from 'react';
import { Knob } from 'primereact/knob';

export default function DisabledDoc() {
    return (
        <div className="card flex justify-content-center">
            <Knob value={50} disabled />
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { Knob } from 'primereact/knob';

export default function DisabledDoc() {
    return (
        <div className="card flex justify-content-center">
            <Knob value={50} disabled />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, a visual hint is applied to indicate that the Knob cannot be interacted with."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(o.Knob,{value:50,disabled:!0})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function p(e){let n={basic:`
import { Knob } from 'primereact/knob';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)(s.DocSectionCode,{code:n,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function m(e){let[n,a]=(0,r.useState)(10),l={basic:`
<Knob value={value} onChange={(e) => setValue(e.value)} min={-50} max={50} />
        `,javascript:`
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function MinMaxDemo() {
    const [value, setValue] = useState(10);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) =>  setValue(e.value)} min={-50} max={50} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function MinMaxDemo() {
    const [value, setValue] = useState<number>(10);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e : KnobChangeEvent) => setValue(e.value)} min={-50} max={50} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Boundaries are configured with the ",(0,t.jsx)("i",{children:"min"})," and ",(0,t.jsx)("i",{children:"max"})," properties whose defaults are 0 and 100 respectively."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(o.Knob,{value:n,onChange:e=>a(e.value),min:-50,max:50})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}let h=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/knob.jpg",alt:"knob"})})]});var x=e.i(57724);function v(e){let[n,a]=(0,r.useState)(0),l={basic:`
<Knob value={value} size={150} />
<Button icon="pi pi-plus" onClick={() => setValue(value + 1)} disabled={value === 100} />
<Button icon="pi pi-minus" onClick={() => setValue(value - 1)} disabled={value === 0} />
        `,javascript:`
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

export default function ReactiveDemo() {
    const [value, setValue] = useState(0);

    return (
        <div className="card flex flex-column align-items-center gap-2">
            <Knob value={value} size={150} />
            <div className="flex gap-2">
                <Button icon="pi pi-plus" onClick={() => setValue(value + 1)} disabled={value === 100} />
                <Button icon="pi pi-minus" onClick={() => setValue(value - 1)} disabled={value === 0} />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

export default function ReactiveDemo() {
    const [value, setValue] = useState<number>(0);

    return (
        <div className="card flex flex-column align-items-center gap-2">
            <Knob value={value} size={150} />
            <div className="flex gap-2">
                <Button icon="pi pi-plus" onClick={() => setValue(value + 1)} disabled={value === 100} />
                <Button icon="pi pi-minus" onClick={() => setValue(value - 1)} disabled={value === 0} />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Knob can be controlled with custom controls as well."})}),(0,t.jsxs)("div",{className:"card flex flex-column align-items-center gap-2",children:[(0,t.jsx)(o.Knob,{value:n,size:150}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)(x.Button,{icon:"pi pi-plus",onClick:()=>a(n+1),disabled:100===n}),(0,t.jsx)(x.Button,{icon:"pi pi-minus",onClick:()=>a(n-1),disabled:0===n})]})]}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function j(e){let[n,a]=(0,r.useState)(50),l={basic:`
<Knob value={50} readOnly />
        `,javascript:`
import React from 'react';
import { Knob } from 'primereact/knob';

export default function ReadOnlyDemo() {
    return (
        <div className="card flex justify-content-center">
            <Knob value={50} readOnly />
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { Knob } from 'primereact/knob';

export default function ReadOnlyDemo() {
    return (
        <div className="card flex justify-content-center">
            <Knob value={50} readOnly />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"readOnly"})," present, value cannot be edited."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(o.Knob,{value:50,readOnly:!0})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function b(e){let[n,a]=(0,r.useState)(60),l={basic:`
<Knob value={value} onChange={(e) => setValue(e.value)} size={200} />
        `,javascript:`
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function SizeDemo() {
    const [value, setValue] = useState(60);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) => setValue(e.value)} size={200} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function SizeDemo() {
    const [value, setValue] = useState<number>(60);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e : KnobChangeEvent) => setValue(e.value)} size={200} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Diameter of the knob is defined in pixels using the ",(0,t.jsx)("i",{children:"size"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(o.Knob,{value:n,onChange:e=>a(e.value),size:200})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function f(e){let[n,a]=(0,r.useState)(10),l={basic:`
<Knob value={value} step={10} onChange={(e) => setValue(e.value)} />
        `,javascript:`
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function StepDemo() {
    const [value, setValue] = useState(10);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} step={10} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function StepDemo() {
    const [value, setValue] = useState<number>(10);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} step={10} onChange={(e : KnobChangeEvent) => setValue(e.value)}  />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Size of each movement is defined with the ",(0,t.jsx)("i",{children:"step"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(o.Knob,{value:n,step:10,onChange:e=>a(e.value)})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function g(e){let[n,a]=(0,r.useState)(40),l={basic:`
<Knob value={value} onChange={(e) => setValue(e.value)} strokeWidth={5} />
        `,javascript:`
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function StrokeDemo() {
    const [value, setValue] = useState(40);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} strokeWidth={5} onChange={(e) => setValue(e.value)} strokeWidth={5} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function StrokeDemo() {
    const [value, setValue] = useState<number>(40);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e : KnobChangeEvent) => setValue(e.value)} strokeWidth={5} />
        </div>

    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["The border size is specified with the ",(0,t.jsx)("i",{children:"stroke"})," property as a number in pixels."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(o.Knob,{value:n,onChange:e=>a(e.value),strokeWidth:5})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function y(e){let[n,a]=(0,r.useState)(60),l={basic:`
<Knob value={value} onChange={(e) => setValue(e.value)} valueTemplate={'{value}%'} />
        `,javascript:`
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function TemplateDemo() {
    const [value, setValue] = useState(60);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) => setValue(e.value)} valueTemplate={'{value}%'} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function TemplateDemo() {
    const [value, setValue] = useState<number>(60);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e : KnobChangeEvent) => setValue(e.value)} valueTemplate={"{value}%"} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Label is a string template that can be customized with the ",(0,t.jsx)("i",{children:"valueTemplate"})," property having ",(0,t.jsx)("i",{children:n})," as the placeholder ."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(o.Knob,{value:n,onChange:e=>a(e.value),valueTemplate:"{value}%"})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function N(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-knob"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-knob-range"}),(0,t.jsx)("td",{children:"Range element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-knob-value"}),(0,t.jsx)("td",{children:"Value element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-knob-text"}),(0,t.jsx)("td",{children:"Text element."})]})]})]})})]})}var C=e.i(41158);function k(e){let n={basic:`
const Tailwind = {
    knob: {
        root: ({ props }) => ({
            className: classNames('focus:outline-none focus:outline-offset-0 focus:shadow-0', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        range: 'stroke-current transition duration-100 ease-in stroke-gray-200 dark:stroke-gray-700 fill-none',
        value: 'animate-dash-frame  stroke-blue-500 fill-none',
        label: 'text-center text-xl'
    }
}
        `},a={javascript:`
import React, { useState } from "react";
import { Knob } from 'primereact/knob';

export default function UnstyledDemo() {
    const [value, setValue] = useState(0);

    return (
        <div className="card flex justify-center">
            <Knob value={value} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(C.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(s.DocSectionCode,{code:n,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(s.DocSectionCode,{code:a,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:h},{id:"pt.knob.options",label:"Knob PT Options",component:n.default}];return(0,t.jsx)(a.DocComponent,{title:"React Knob Component",header:"Knob",description:"Knob is a form component to define number inputs with a dial.",componentDocs:[{id:"import",label:"Import",component:p},{id:"basic",label:"Basic",component:c},{id:"minmax",label:"Min/Max",component:m},{id:"step",label:"Step",component:f},{id:"template",label:"Template",component:y},{id:"stroke",label:"Stroke",component:g},{id:"size",label:"Size",component:b},{id:"color",label:"Color",component:d},{id:"reactivec",label:"Reactive",component:v},{id:"readonly",label:"ReadOnly",component:j},{id:"disabled",label:"Disabled",component:u},{id:"accessibility",label:"Accessibility",component:l}],apiDocs:["Knob"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:N},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:k}]}]})}],28310)},17715,(e,t,n)=>{let a="/knob";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(28310)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);