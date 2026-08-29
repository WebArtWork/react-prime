(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),i=e.i(91788);e.s(["CodeHighlight",0,function(e){let s=(0,i.useRef)(),a=`language-${e.lang||"jsx"}`;return(0,i.useEffect)(()=>{window.Prism.highlightElement(s.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:s,className:a,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),i=e.i(3935),s=e.i(58678),a=e.i(3828),l=e.i(91788),n=e.i(51551),c=e.i(72124),r=e.i(41158),o=e.i(87914),d=e.i(28137);let h=e=>{let s=(0,l.useContext)(o.default),{id:c,data:h,name:p,description:u,allowLink:m=!0}=e,x=c.startsWith("pt."),b=(0,a.useRouter)();if(n.ObjectUtils.isNotEmpty(h)){let a=Object.keys(h[0]),o=(e,t)=>{let i=document.getElementById(e);i&&i.parentElement.scrollIntoView({block:"start",behavior:t})},j=(e,s,a)=>{if(m&&e)return e.split("|").map((e,n)=>{if(e.includes(p)){let i=e.indexOf(p),s=e.substring(i).replace(/(\[|\]|<|>).*$/gm,"").trim(),a=p===s?`api.${p}`:`api.${p}.${s===`${p}Props`?"props":s}`;return(0,t.jsxs)(l.default.Fragment,{children:[0!==n?"|":"",(0,t.jsx)(r.default,{href:b.basePath+b.pathname+`#${a}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(a,"smooth"),children:e})})]},n)}return(0,t.jsxs)(l.default.Fragment,{children:[0!==n?"|":"",s?(0,t.jsxs)("span",{id:c+"."+e,className:(0,i.classNames)("doc-option-name",{"line-through cursor-pointer":!!a}),title:a,children:[e,(0,t.jsx)(r.default,{href:b.basePath+b.pathname+`#${c+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(c+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},n)});let n=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return s?(0,t.jsxs)("span",{id:c+"."+n,className:(0,i.classNames)("doc-option-name",{"line-through cursor-pointer":!!a}),title:a,children:[n,(0,t.jsx)(r.default,{href:b.basePath+b.pathname+`#${c+"."+n}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(c+"."+n),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):n},f=(0,t.jsx)(l.default.Fragment,{children:x?(0,t.jsx)("tr",{children:a.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:a.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),v=(0,t.jsx)(l.default.Fragment,{children:h.map((e,a)=>{if(x){let{value:i,label:s,description:l}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:s}),(0,t.jsx)("td",{children:l})]},a)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([a,l],c)=>"readonly"!==a&&"optional"!==a&&"deprecated"!==a&&(0,t.jsx)("td",{children:"parameters"===a?l.map((e,i)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:j(e.type)}),(0,t.jsx)("br",{})]},i)):"default"===a?(0,t.jsx)("div",{className:(0,i.classNames)("doc-option-default",{"doc-option-dark":s.darkMode,"doc-option-light":!s.darkMode}),children:n.ObjectUtils.isEmpty(l)?"null":j(l,"name"===a,e.deprecated)}):"type"===a?(0,t.jsx)("span",{className:"doc-option-type",children:j(l,"name"===a,e.deprecated)}):"returnType"===a?(0,t.jsx)("div",{className:(0,i.classNames)("doc-option-returnType",{"doc-option-dark":s.darkMode,"doc-option-light":!s.darkMode}),children:j(l,"name"===a,e.deprecated)}):"description"===a||"values"===a?(0,t.jsx)("span",{className:"doc-option-description",children:l}):j(l,"name"===a,e.deprecated)},c))},a)})});return(0,t.jsxs)(l.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:u})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:f}),(0,t.jsx)("tbody",{children:v})]})})]},c)}return null};e.s(["default",0,h],88850);var p=e.i(71864),u=e.i(38076);function m(e){let{doc:i,header:s}=e,a=e.apiExclude,r=i.reduce((e,i)=>{let s,l=i.split("."),r=(s=l[0])&&s[0].toUpperCase()+s.slice(1)||"",o=c.default[r.toLowerCase()],d=(e,t)=>a&&a[e]&&a[e].includes(t),p=e=>a&&a[e]&&"excludeAll"===a[e];if(o){let s=(e,i)=>{if(n.ObjectUtils.isNotEmpty(o.events)&&n.ObjectUtils.isNotEmpty(o.events.values)&&!p("events")){let s={id:`api.${i}.events`,label:"Events",description:o.events.description,children:[]};Object.entries(o.events.values).forEach(([e,a])=>{let[l,n]=[`api.${i}.${e}`,e];d("event",e)||s.children.push({id:l,label:n,component:e=>(0,t.jsx)(h,{name:i,data:a.props,description:(0,t.jsxs)(t.Fragment,{children:[a.description," See ",(0,t.jsx)("i",{children:a.relatedProp}),"."]}),...e})})}),e.push(s)}if(n.ObjectUtils.isNotEmpty(o.interfaces)&&n.ObjectUtils.isNotEmpty(o.interfaces.values)&&!p("interfaces")){let s={id:`api.${i}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([e,a])=>{let[l,n]=[`api.${i}.${e}`,e];d("interfaces",e)||s.children.push({id:l,label:n,component:e=>(0,t.jsx)(h,{name:i,data:a.props,description:(0,t.jsxs)(t.Fragment,{children:[a.description," ",a.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:a.extendedTypes}),"."]})]}),...e})})}),e.push(s)}if(n.ObjectUtils.isNotEmpty(o.types)&&n.ObjectUtils.isNotEmpty(o.types.values)&&!p("types")){let s={id:`api.${i}.types`,label:"Types",description:o.types.description,children:[]};Object.entries(o.types.values).forEach(([e,a])=>{let[l,n]=[`api.${i}.${e}`,e];d("types",e)||s.children.push({id:l,label:n,component:e=>(0,t.jsx)(h,{name:i,data:[a],allowLink:!1,...e})})}),e.push(s)}};if(3===l.length){let i=l[1],s=l[2];if("functions"===i){let a=o[i].values[s],l={id:`api.${r}`,label:r,children:[]},[c,d]=[`api.${r}.function`,"Function"],p=Object.entries(a).reduce((e,[t,i])=>("description"!==t&&(e[t]=i),e),{});l.children.push({id:c,label:d,component:e=>(0,t.jsx)(h,{name:r,data:[p],description:a.description,...e})});let u=a.parameters&&a.parameters.map(e=>e.type);if(n.ObjectUtils.isNotEmpty(o.interfaces)&&n.ObjectUtils.isNotEmpty(o.interfaces.values)){let e={id:`api.${r}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([i,s])=>{if(u.includes(i)){let[a,l]=[`api.${r}.${i}`,i],c={id:a,label:l,description:(0,t.jsxs)(t.Fragment,{children:[s.description," ",s.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:s.extendedTypes}),"."]})]}),children:[]};n.ObjectUtils.isNotEmpty(s.props)&&c.children.push({id:`${a}.props`,label:"Props",component:e=>(0,t.jsx)(h,{data:s.props,...e})}),n.ObjectUtils.isNotEmpty(s.callbacks)&&c.children.push({id:`${a}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(h,{data:s.callbacks,...e})}),e.children.push(c)}}),n.ObjectUtils.isNotEmpty(e.children)&&l.children.push(e)}e.push(l)}}else o.components&&Object.entries(o.components).forEach(([a,l])=>{let c={id:`api.${a}`,label:a,description:l.description,children:[]};if(n.ObjectUtils.isNotEmpty(l.props)&&n.ObjectUtils.isNotEmpty(l.props.values)&&!p("props")){let[e,i]=[`api.${a}.props`,"Props"];if(d("props",a))return;c.children.push({id:e,label:i,component:e=>(0,t.jsx)(h,{name:a,data:l.props.values,description:l.props.description,...e})})}if(n.ObjectUtils.isNotEmpty(l.callbacks)&&n.ObjectUtils.isNotEmpty(l.callbacks.values)&&!p("callbacks")){let[e,i]=[`api.${a}.callbacks`,"Callbacks"];if(d("callbacks",a))return;c.children.push({id:e,label:i,component:e=>(0,t.jsx)(h,{name:a,data:l.callbacks.values,description:l.callbacks.description,...e})})}if(n.ObjectUtils.isNotEmpty(l.methods)&&n.ObjectUtils.isNotEmpty(l.methods.values)&&!p("methods")){let[e,i]=[`api.${a}.methods`,"Methods"];if(d("methods",a))return;c.children.push({id:e,label:i,component:e=>(0,t.jsx)(h,{name:a,data:l.methods.values,description:l.methods.description,...e})})}a.toLocaleLowerCase()===i.toLowerCase()&&s(c.children,a),e.push(c)}),o.model&&Object.entries(o.model).forEach(([a,l])=>{let c={id:`api.${a}`,label:a,description:l.description,children:[]};if(n.ObjectUtils.isNotEmpty(l.props)&&n.ObjectUtils.isNotEmpty(l.props.values)&&!p("props")){let[e,i]=[`api.${a}.props`,"Props"];if(d("props",a))return;c.children.push({id:e,label:i,component:e=>(0,t.jsx)(h,{name:a,data:l.props.values,description:l.props.description,...e})})}a.toLocaleLowerCase()===i.toLowerCase()&&s(c.children,a),e.push(c)}),o.components||o.model||s(e,r)}return e},[]);return(0,l.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[s," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",s," module."]})]}),(0,t.jsx)(u.DocSections,{docs:r})]}),(0,t.jsx)(p.DocSectionNav,{docs:r})]})}e.s(["DocComponent",0,function(e){let n,[c,r]=(0,l.useState)(0),o=(0,a.useRouter)();n=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{r(e),o.replace(o.pathname)};return(0,l.useEffect)(()=>{o.asPath.includes("#api")&&r(1),o.asPath.includes("#pt")&&r(3)},[o.asPath]),(0,t.jsxs)("div",{className:(0,i.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(s.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":0===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:n})}),e.apiDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":1===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":2===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":3===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===c?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(u.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.componentDocs})]}):null,1===c?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(m,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===c?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(u.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===c?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(u.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},67143,e=>{"use strict";var t=e.i(91398),i=e.i(91788),s=e.i(85850);let a=i.memo(i.forwardRef((e,i)=>{let a=s.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:i,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:(0,t.jsx)("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"})})}));a.displayName="CheckIcon",e.s(["CheckIcon",0,a])},55590,e=>{"use strict";var t=e.i(91398),i=e.i(91788),s=e.i(85850);let a=i.memo(i.forwardRef((e,i)=>{let a=s.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:i,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:(0,t.jsx)("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"})})}));a.displayName="TimesIcon",e.s(["TimesIcon",0,a])},42025,e=>{"use strict";var t=e.i(91398),i=e.i(91788),s=e.i(10836),a=e.i(183),l=e.i(15498),n=e.i(60150),c=e.i(20484),r=e.i(67143),o=e.i(55590),d=e.i(64691),h=e.i(45543),p=e.i(75366),u=e.i(51551),m=e.i(3935);let x=l.ComponentBase.extend({defaultProps:{__TYPE:"TriStateCheckbox",autoFocus:!1,checkIcon:null,className:null,disabled:!1,id:null,invalid:!1,variant:null,onChange:null,readOnly:!1,style:null,tabIndex:"0",tooltip:null,tooltipOptions:null,uncheckIcon:null,value:null,children:void 0},css:{classes:{root:({props:e,context:t})=>(0,m.classNames)("p-tristatecheckbox p-checkbox p-component",{"p-highlight":""!==e.value&&null!==e.value,"p-disabled":e.disabled,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:t&&"filled"===t.inputStyle}),checkIcon:"p-checkbox-icon p-c",box:"p-checkbox-box",input:"p-checkbox-input"}}}),b=i.memo(i.forwardRef((e,b)=>{let j,f=(0,n.useMergeProps)(),v=i.useContext(s.PrimeReactContext),g=x.getProps(e,v),[C,k]=(0,i.useState)(null),y=i.useRef(null),{ptm:N,cx:S,isUnstyled:T}=x.setMetaData({props:g});(0,l.useHandleStyle)(x.css.styles,T,{name:"tristatecheckbox"}),(0,i.useEffect)(()=>{[!0,!1,null].includes(g.value)?k(g.value):k(null)},[g.value]);let w=e=>{let t;g.disabled||g.readOnly||(null===C?t=!0:!0===C?t=!1:!1===C&&(t=null),g.onChange&&g.onChange({originalEvent:e,value:t,stopPropagation:()=>{e?.stopPropagation()},preventDefault:()=>{e?.preventDefault()},target:{name:g.name,id:g.id,value:t}}))};i.useImperativeHandle(b,()=>({props:g,focus:()=>h.DomHandler.focusFirstElement(y.current),getElement:()=>y.current})),(0,c.useMountEffect)(()=>{g.autoFocus&&h.DomHandler.focusFirstElement(y.current)});let D=u.ObjectUtils.isNotEmpty(g.tooltip),E=x.getOtherProps(g),O=u.ObjectUtils.reduceKeys(E,h.DomHandler.ARIA_PROPS),I=f({className:S("checkIcon")},N("checkIcon")),P=f({className:S("checkIcon")},N("uncheckIcon"));!1===C?j=g.uncheckIcon||(0,t.jsx)(o.TimesIcon,{...P}):!0===C&&(j=g.checkIcon||(0,t.jsx)(r.CheckIcon,{...I}));let F=p.IconUtils.getJSXIcon(j,{...I},{props:g}),L=C?(0,a.ariaLabel)("trueLabel"):!1===C?(0,a.ariaLabel)("falseLabel"):(0,a.ariaLabel)("nullLabel"),U=C?"true":"false",$=f({id:g.id+"_box",className:S("box"),tabIndex:g.disabled?"-1":g.tabIndex,onFocus:e=>{g?.onFocus?.(e)},onBlur:e=>{g?.onBlur?.(e)},onKeyDown:e=>{("Enter"===e.code||"NumpadEnter"===e.code||"Space"===e.code)&&(w(e),e.preventDefault())},role:"checkbox","aria-checked":U,...O},N("box")),R=f({className:"p-hidden-accessible","aria-live":"polite"},N("srOnlyAria")),_=f({className:(0,m.classNames)(g.className,S("root",{context:v})),style:g.style,"data-p-disabled":g.disabled},x.getOtherProps(g),N("root")),V=f({id:g.inputId,className:S("input"),type:"checkbox","aria-invalid":g.invalid,disabled:g.disabled,readOnly:g.readOnly,value:C,checked:C,onChange:w},N("input"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{id:g.id,ref:y,..._,children:[(0,t.jsx)("input",{...V}),(0,t.jsx)("span",{...R,children:L}),(0,t.jsx)("div",{...$,children:F})]}),D&&(0,t.jsx)(d.Tooltip,{target:y,content:g.tooltip,pt:N("tooltip"),...g.tooltipOptions})]})}));b.displayName="TriStateCheckbox",e.s(["TriStateCheckbox",0,b],42025)},3828,(e,t,i)=>{t.exports=e.r(26990)},25355,e=>{"use strict";var t=e.i(91398),i=e.i(88850),s=e.i(82948),a=e.i(5180),l=e.i(28137),n=e.i(41158);function c(){let e={basic:`
<span id="chkbox1">Remember Me</span>
<TriStateCheckbox aria-labelledby="chkbox1" />

<TriStateCheckbox aria-label="Remember Me" />
    `};return(0,t.jsxs)(l.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["TriStateCheckbox component uses an element with ",(0,t.jsx)("i",{children:"checkbox"})," role. Value to describe the component can either be provided with ",(0,t.jsx)("i",{children:"aria-labelledby"})," or ",(0,t.jsx)("i",{children:"aria-label"})," props. Component adds an element with",(0,t.jsx)("i",{children:"aria-live"})," attribute that is only visible to screen readers to read the value displayed. Values to read are defined with the ",(0,t.jsx)("i",{children:"trueLabel"}),", ",(0,t.jsx)("i",{children:"falseLabel"})," and ",(0,t.jsx)("i",{children:"nullLabel"})," keys of the ",(0,t.jsx)("i",{children:"aria"}),"property from the ",(0,t.jsx)(n.default,{href:"/locale",children:"locale"})," API. This is an example of a custom accessibility implementation as there is no one to one mapping between the component design and the WCAG specification."]}),(0,t.jsx)(a.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the checkbox."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles between the values."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Toggles between the values."})]})]})]})})]})}var r=e.i(42025),o=e.i(91788);function d(e){let[i,s]=(0,o.useState)(null),n={basic:`
<TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function BasicDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
            <label>{String(value)}</label>
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { TriStateCheckbox, TriStateCheckboxChangeEvent } from 'primereact/tristatecheckbox';

export default function BasicDemo() {
    const [value, setValue] = useState<boolean | undefined | null>(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <TriStateCheckbox value={value} onChange={(e : TriStateCheckboxChangeEvent) => setValue(e.value)} />
            <label>{String(value)}</label>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["TriStateCheckbox is used as a controlled input with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties."]})}),(0,t.jsxs)("div",{className:"card flex flex-column align-items-center gap-3",children:[(0,t.jsx)(r.TriStateCheckbox,{value:i,onChange:e=>s(e.value)}),(0,t.jsx)("label",{children:String(i)})]}),(0,t.jsx)(a.DocSectionCode,{code:n})]})}function h(e){let i={basic:`
<TriStateCheckbox disabled />
        `,javascript:`
import React from "react";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <TriStateCheckbox disabled />
        </div>
    );
}
        `,typescript:`
import React from "react";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <TriStateCheckbox disabled />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(r.TriStateCheckbox,{disabled:!0})}),(0,t.jsx)(a.DocSectionCode,{code:i})]})}function p(e){let[i,s]=(0,o.useState)(null),n={basic:`
<TriStateCheckbox variant="filled" value={value} onChange={(e) => setValue(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function FilledDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <TriStateCheckbox variant="filled" value={value} onChange={(e) => setValue(e.value)} />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { TriStateCheckbox, TriStateCheckboxChangeEvent } from 'primereact/tristatecheckbox';

export default function FilledDemo() {
    const [value, setValue] = useState<boolean | undefined | null>(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <TriStateCheckbox variant="filled" value={value} onChange={(e : TriStateCheckboxChangeEvent) => setValue(e.value)} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specify the ",(0,t.jsx)("i",{children:"variant"})," property as ",(0,t.jsx)("i",{children:"filled"})," to display the component with a higher visual emphasis than the default ",(0,t.jsx)("i",{children:"outlined"})," style."]})}),(0,t.jsx)("div",{className:"card flex flex-column align-items-center gap-3",children:(0,t.jsx)(r.TriStateCheckbox,{variant:"filled",value:i,onChange:e=>s(e.value)})}),(0,t.jsx)(a.DocSectionCode,{code:n})]})}function u(e){let i={basic:`
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)(a.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function m(e){let[i,s]=(0,o.useState)(null),n={basic:`
<TriStateCheckbox invalid value={value} onChange={(e) => setValue(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function InvalidDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <TriStateCheckbox invalid value={value} onChange={(e) => setValue(e.value)} />
            <label>{String(value)}</label>
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { TriStateCheckbox, TriStateCheckboxChangeEvent } from 'primereact/tristatecheckbox';

export default function InvalidDemo() {
    const [value, setValue] = useState<boolean | undefined | null>(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <TriStateCheckbox invalid value={value} onChange={(e : TriStateCheckboxChangeEvent) => setValue(e.value)} />
            <label>{String(value)}</label>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsxs)("div",{className:"card flex flex-column align-items-center gap-3",children:[(0,t.jsx)(r.TriStateCheckbox,{invalid:!0,value:i,onChange:e=>s(e.value)}),(0,t.jsx)("label",{children:String(i)})]}),(0,t.jsx)(a.DocSectionCode,{code:n})]})}let x=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/tristatecheckbox.jpg",alt:"tristatecheckbox"})})]});function b(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-chkbox"}),(0,t.jsx)("td",{children:"Container element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-tristatechkbox"}),(0,t.jsx)("td",{children:"Container element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-chkbox-box"}),(0,t.jsx)("td",{children:"Container of icon."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-chkbox-icon"}),(0,t.jsx)("td",{children:"Icon element."})]})]})]})})]})}function j(e){let i={basic:`
const Tailwind = {
    tristatecheckbox: {
        root: {
            className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6')
        },
        input: {
            className: classNames('absolute appearance-none top-0 left-0 size-full p-0 m-0 opacity-0 z-10 outline-none cursor-pointer')
        },
        box: ({ props }) => ({
            className: classNames(
                'flex items-center justify-center',
                'border-2 w-6 h-6 rounded-lg transition-colors duration-200',
                {
                    'border-blue-500 bg-blue-500 text-white dark:border-blue-400 dark:bg-blue-400': props.value || !props.value,
                    'border-gray-300 text-gray-600 bg-white dark:border-blue-900/40 dark:bg-gray-900': props.value == null
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            )
        }),
        icon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900'
    }
}
    `},s={javascript:`
import React, { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function UnstyledDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex flex-col items-center gap-3">
            <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
            <label>{String(value)}</label>
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(l.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(n.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(a.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(a.DocSectionCode,{code:s,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:x},{id:"pt.tristatecheckbox.options",label:"TriStateCheckbox PT Options",component:i.default}];return(0,t.jsx)(s.DocComponent,{title:"React TriStateCheckbox Component",header:"TriStateCheckbox",description:"TriStateCheckbox is an extension to the Checkbox component with an additional state.",componentDocs:[{id:"import",label:"Import",component:u},{id:"basic",label:"Basic",component:d},{id:"filled",label:"Filled",component:p},{id:"invalid",label:"Invalid",component:m},{id:"disabled",label:"Disabled",component:h},{id:"accessibility",label:"Accessibility",component:c}],apiDocs:["TriStateCheckbox"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:b},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:j}]}]})}],25355)},77178,(e,t,i)=>{let s="/tristatecheckbox";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(25355)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})}]);