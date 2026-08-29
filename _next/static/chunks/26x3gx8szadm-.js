(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var i=e.i(91398),t=e.i(91788);e.s(["CodeHighlight",0,function(e){let a=(0,t.useRef)(),s=`language-${e.lang||"jsx"}`;return(0,t.useEffect)(()=>{window.Prism.highlightElement(a.current)},[]),(0,i.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,i.jsxs)("code",{ref:a,className:s,children:[e.children," "]})})}])},74967,e=>{"use strict";e.i(91398),e.i(91788),e.s([])},82948,88850,e=>{"use strict";var i=e.i(91398),t=e.i(3935),a=e.i(58678),s=e.i(3828),l=e.i(91788),c=e.i(51551),n=e.i(72124),r=e.i(41158),o=e.i(87914),p=e.i(28137);let d=e=>{let a=(0,l.useContext)(o.default),{id:n,data:d,name:m,description:h,allowLink:x=!0}=e,u=n.startsWith("pt."),j=(0,s.useRouter)();if(c.ObjectUtils.isNotEmpty(d)){let s=Object.keys(d[0]),o=(e,i)=>{let t=document.getElementById(e);t&&t.parentElement.scrollIntoView({block:"start",behavior:i})},b=(e,a,s)=>{if(x&&e)return e.split("|").map((e,c)=>{if(e.includes(m)){let t=e.indexOf(m),a=e.substring(t).replace(/(\[|\]|<|>).*$/gm,"").trim(),s=m===a?`api.${m}`:`api.${m}.${a===`${m}Props`?"props":a}`;return(0,i.jsxs)(l.default.Fragment,{children:[0!==c?"|":"",(0,i.jsx)(r.default,{href:j.basePath+j.pathname+`#${s}`,target:"_self",children:(0,i.jsx)("a",{onClick:()=>o(s,"smooth"),children:e})})]},c)}return(0,i.jsxs)(l.default.Fragment,{children:[0!==c?"|":"",a?(0,i.jsxs)("span",{id:n+"."+e,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[e,(0,i.jsx)(r.default,{href:j.basePath+j.pathname+`#${n+"."+e}`,target:"_self",children:(0,i.jsx)("a",{onClick:()=>o(n+"."+e),className:"doc-option-link",children:(0,i.jsx)("i",{className:"pi pi-link"})})})]}):e]},c)});let c=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return a?(0,i.jsxs)("span",{id:n+"."+c,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[c,(0,i.jsx)(r.default,{href:j.basePath+j.pathname+`#${n+"."+c}`,target:"_self",children:(0,i.jsx)("a",{onClick:()=>o(n+"."+c),className:"doc-option-link",children:(0,i.jsx)("i",{className:"pi pi-link"})})})]}):c},f=(0,i.jsx)(l.default.Fragment,{children:u?(0,i.jsx)("tr",{children:s.map(e=>(0,i.jsx)("th",{children:e},e))}):(0,i.jsx)("tr",{children:s.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,i.jsx)("th",{children:e},e))})}),g=(0,i.jsx)(l.default.Fragment,{children:d.map((e,s)=>{if(u){let{value:t,label:a,description:l}=e;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:t}),(0,i.jsx)("td",{children:a}),(0,i.jsx)("td",{children:l})]},s)}return(0,i.jsx)("tr",{children:Object.entries(e).map(([s,l],n)=>"readonly"!==s&&"optional"!==s&&"deprecated"!==s&&(0,i.jsx)("td",{children:"parameters"===s?l.map((e,t)=>(0,i.jsxs)("div",{className:"doc-option-params",children:[(0,i.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,i.jsx)("span",{className:"doc-option-parameter-type",children:b(e.type)}),(0,i.jsx)("br",{})]},t)):"default"===s?(0,i.jsx)("div",{className:(0,t.classNames)("doc-option-default",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:c.ObjectUtils.isEmpty(l)?"null":b(l,"name"===s,e.deprecated)}):"type"===s?(0,i.jsx)("span",{className:"doc-option-type",children:b(l,"name"===s,e.deprecated)}):"returnType"===s?(0,i.jsx)("div",{className:(0,t.classNames)("doc-option-returnType",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:b(l,"name"===s,e.deprecated)}):"description"===s||"values"===s?(0,i.jsx)("span",{className:"doc-option-description",children:l}):b(l,"name"===s,e.deprecated)},n))},s)})});return(0,i.jsxs)(l.default.Fragment,{children:[(0,i.jsx)(p.DocSectionText,{...e,children:(0,i.jsx)("p",{children:h})}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:f}),(0,i.jsx)("tbody",{children:g})]})})]},n)}return null};e.s(["default",0,d],88850);var m=e.i(71864),h=e.i(38076);function x(e){let{doc:t,header:a}=e,s=e.apiExclude,r=t.reduce((e,t)=>{let a,l=t.split("."),r=(a=l[0])&&a[0].toUpperCase()+a.slice(1)||"",o=n.default[r.toLowerCase()],p=(e,i)=>s&&s[e]&&s[e].includes(i),m=e=>s&&s[e]&&"excludeAll"===s[e];if(o){let a=(e,t)=>{if(c.ObjectUtils.isNotEmpty(o.events)&&c.ObjectUtils.isNotEmpty(o.events.values)&&!m("events")){let a={id:`api.${t}.events`,label:"Events",description:o.events.description,children:[]};Object.entries(o.events.values).forEach(([e,s])=>{let[l,c]=[`api.${t}.${e}`,e];p("event",e)||a.children.push({id:l,label:c,component:e=>(0,i.jsx)(d,{name:t,data:s.props,description:(0,i.jsxs)(i.Fragment,{children:[s.description," See ",(0,i.jsx)("i",{children:s.relatedProp}),"."]}),...e})})}),e.push(a)}if(c.ObjectUtils.isNotEmpty(o.interfaces)&&c.ObjectUtils.isNotEmpty(o.interfaces.values)&&!m("interfaces")){let a={id:`api.${t}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([e,s])=>{let[l,c]=[`api.${t}.${e}`,e];p("interfaces",e)||a.children.push({id:l,label:c,component:e=>(0,i.jsx)(d,{name:t,data:s.props,description:(0,i.jsxs)(i.Fragment,{children:[s.description," ",s.extendedTypes&&(0,i.jsxs)(i.Fragment,{children:["Extends ",(0,i.jsx)("i",{children:s.extendedTypes}),"."]})]}),...e})})}),e.push(a)}if(c.ObjectUtils.isNotEmpty(o.types)&&c.ObjectUtils.isNotEmpty(o.types.values)&&!m("types")){let a={id:`api.${t}.types`,label:"Types",description:o.types.description,children:[]};Object.entries(o.types.values).forEach(([e,s])=>{let[l,c]=[`api.${t}.${e}`,e];p("types",e)||a.children.push({id:l,label:c,component:e=>(0,i.jsx)(d,{name:t,data:[s],allowLink:!1,...e})})}),e.push(a)}};if(3===l.length){let t=l[1],a=l[2];if("functions"===t){let s=o[t].values[a],l={id:`api.${r}`,label:r,children:[]},[n,p]=[`api.${r}.function`,"Function"],m=Object.entries(s).reduce((e,[i,t])=>("description"!==i&&(e[i]=t),e),{});l.children.push({id:n,label:p,component:e=>(0,i.jsx)(d,{name:r,data:[m],description:s.description,...e})});let h=s.parameters&&s.parameters.map(e=>e.type);if(c.ObjectUtils.isNotEmpty(o.interfaces)&&c.ObjectUtils.isNotEmpty(o.interfaces.values)){let e={id:`api.${r}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([t,a])=>{if(h.includes(t)){let[s,l]=[`api.${r}.${t}`,t],n={id:s,label:l,description:(0,i.jsxs)(i.Fragment,{children:[a.description," ",a.extendedTypes&&(0,i.jsxs)(i.Fragment,{children:["Extends ",(0,i.jsx)("i",{children:a.extendedTypes}),"."]})]}),children:[]};c.ObjectUtils.isNotEmpty(a.props)&&n.children.push({id:`${s}.props`,label:"Props",component:e=>(0,i.jsx)(d,{data:a.props,...e})}),c.ObjectUtils.isNotEmpty(a.callbacks)&&n.children.push({id:`${s}.callbacks`,label:"Callbacks",component:e=>(0,i.jsx)(d,{data:a.callbacks,...e})}),e.children.push(n)}}),c.ObjectUtils.isNotEmpty(e.children)&&l.children.push(e)}e.push(l)}}else o.components&&Object.entries(o.components).forEach(([s,l])=>{let n={id:`api.${s}`,label:s,description:l.description,children:[]};if(c.ObjectUtils.isNotEmpty(l.props)&&c.ObjectUtils.isNotEmpty(l.props.values)&&!m("props")){let[e,t]=[`api.${s}.props`,"Props"];if(p("props",s))return;n.children.push({id:e,label:t,component:e=>(0,i.jsx)(d,{name:s,data:l.props.values,description:l.props.description,...e})})}if(c.ObjectUtils.isNotEmpty(l.callbacks)&&c.ObjectUtils.isNotEmpty(l.callbacks.values)&&!m("callbacks")){let[e,t]=[`api.${s}.callbacks`,"Callbacks"];if(p("callbacks",s))return;n.children.push({id:e,label:t,component:e=>(0,i.jsx)(d,{name:s,data:l.callbacks.values,description:l.callbacks.description,...e})})}if(c.ObjectUtils.isNotEmpty(l.methods)&&c.ObjectUtils.isNotEmpty(l.methods.values)&&!m("methods")){let[e,t]=[`api.${s}.methods`,"Methods"];if(p("methods",s))return;n.children.push({id:e,label:t,component:e=>(0,i.jsx)(d,{name:s,data:l.methods.values,description:l.methods.description,...e})})}s.toLocaleLowerCase()===t.toLowerCase()&&a(n.children,s),e.push(n)}),o.model&&Object.entries(o.model).forEach(([s,l])=>{let n={id:`api.${s}`,label:s,description:l.description,children:[]};if(c.ObjectUtils.isNotEmpty(l.props)&&c.ObjectUtils.isNotEmpty(l.props.values)&&!m("props")){let[e,t]=[`api.${s}.props`,"Props"];if(p("props",s))return;n.children.push({id:e,label:t,component:e=>(0,i.jsx)(d,{name:s,data:l.props.values,description:l.props.description,...e})})}s.toLocaleLowerCase()===t.toLowerCase()&&a(n.children,s),e.push(n)}),o.components||o.model||a(e,r)}return e},[]);return(0,l.useEffect)(()=>{let e=window.location.hash.substring(1),i=document.getElementById(e);setTimeout(()=>{i&&i.scrollIntoView({block:"start"})},1)},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"doc-main",children:[(0,i.jsxs)("div",{className:"doc-intro",children:[(0,i.jsxs)("h1",{children:[a," API"]}),(0,i.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",a," module."]})]}),(0,i.jsx)(h.DocSections,{docs:r})]}),(0,i.jsx)(m.DocSectionNav,{docs:r})]})}e.s(["DocComponent",0,function(e){let c,[n,r]=(0,l.useState)(0),o=(0,s.useRouter)();c=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let p=e=>{r(e),o.replace(o.pathname)};return(0,l.useEffect)(()=>{o.asPath.includes("#api")&&r(1),o.asPath.includes("#pt")&&r(3)},[o.asPath]),(0,i.jsxs)("div",{className:(0,t.classNames)(e.className,"doc-component"),children:[(0,i.jsxs)(a.default,{children:[(0,i.jsx)("title",{children:e.title}),(0,i.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,i.jsxs)("ul",{className:"doc-tabmenu",children:[(0,i.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":0===n}),children:(0,i.jsx)("button",{type:"button",onClick:()=>p(0),children:c})}),e.apiDocs?(0,i.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":1===n}),children:(0,i.jsx)("button",{type:"button",onClick:()=>p(1),children:"API"})}):null,e.themingDocs?(0,i.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":2===n}),children:(0,i.jsx)("button",{type:"button",onClick:()=>p(2),children:"THEMING"})}):null,e.ptDocs?(0,i.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":3===n}),children:(0,i.jsx)("button",{type:"button",onClick:()=>p(3),children:"PASS THROUGH"})}):null]}),(0,i.jsxs)("div",{className:"doc-tabpanels",children:[0===n?(0,i.jsxs)("div",{className:"doc-tabpanel",children:[(0,i.jsxs)("div",{className:"doc-main",children:[(0,i.jsxs)("div",{className:"doc-intro",children:[(0,i.jsx)("h1",{children:e.header}),(0,i.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,i.jsx)(h.DocSections,{docs:e.componentDocs})]}),(0,i.jsx)(m.DocSectionNav,{docs:e.componentDocs})]}):null,1===n?(0,i.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,i.jsx)(x,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"doc-main",children:(0,i.jsxs)("div",{className:"doc-intro",children:[(0,i.jsxs)("h1",{children:[e.header," API"]}),(0,i.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===n?(0,i.jsx)(i.Fragment,{children:e.themingDocs?(0,i.jsxs)("div",{className:"doc-tabpanel",children:[(0,i.jsxs)("div",{className:"doc-main",children:[(0,i.jsx)("div",{className:"doc-intro",children:(0,i.jsxs)("h1",{children:[e.header," Theming"]})}),(0,i.jsx)(h.DocSections,{docs:e.themingDocs})]}),(0,i.jsx)(m.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===n?(0,i.jsx)(i.Fragment,{children:e.ptDocs?(0,i.jsxs)("div",{className:"doc-tabpanel",children:[(0,i.jsxs)("div",{className:"doc-main",children:[(0,i.jsxs)("div",{className:"doc-intro",children:[(0,i.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,i.jsx)("p",{children:e.ptDescription})]}),(0,i.jsx)(h.DocSections,{docs:e.ptDocs})]}),(0,i.jsx)(m.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},86546,e=>{"use strict";var i=e.i(91788),t=e.i(10836),a=e.i(15498),s=e.i(60150),l=e.i(20484),c=e.i(12257),n=e.i(3935),r=e.i(75366),o=e.i(51551),p=e.i(28653);let d=`
@layer primereact {
    .p-chip {
        display: inline-flex;
        align-items: center;
    }
    
    .p-chip-text {
        line-height: 1.5;
    }
    
    .p-chip-icon.pi {
        line-height: 1.5;
    }
    
    .p-chip .p-chip-remove-icon {
        line-height: 1.5;
        cursor: pointer;
    }
    
    .p-chip img {
        border-radius: 50%;
    }
}
`,m=a.ComponentBase.extend({defaultProps:{__TYPE:"Chip",label:null,icon:null,image:null,removable:!1,removeIcon:null,className:null,style:null,template:null,imageAlt:"chip",onImageError:null,onRemove:null,children:void 0},css:{classes:{root:({props:e})=>(0,n.classNames)("p-chip p-component",{"p-chip-image":null!=e.image}),removeIcon:"p-chip-remove-icon",icon:"p-chip-icon",label:"p-chip-text"},styles:d}}),h=i.memo(i.forwardRef((e,d)=>{let h,x,u=(0,s.useMergeProps)(),j=i.useContext(t.PrimeReactContext),b=m.getProps(e,j),f=i.useRef(null),[g,v]=i.useState(!0),[C,y]=i.useState(b.id),{ptm:N,cx:E,isUnstyled:w}=m.setMetaData({props:b});(0,a.useHandleStyle)(m.css.styles,w,{name:"chip"});let k=e=>{("Enter"===e.code||"NumpadEnter"===e.code||"Backspace"===e.code)&&T(e)},T=e=>{let i=!0;b.onRemove&&(e.stopPropagation(),i=b.onRemove({originalEvent:e,value:b.label||b.image||b.icon})),!1!==i&&v(!1)};return(i.useImperativeHandle(d,()=>({props:b,getVisible:()=>g,setVisible:e=>v(e),getElement:()=>f.current})),(0,l.useMountEffect)(()=>{C||y((0,p.UniqueComponentId)())}),C)?g&&(h=b.template?o.ObjectUtils.getJSXElement(b.template,b):(()=>{let e=[],t=u({role:"button",tabIndex:0,className:E("removeIcon"),onClick:T,onKeyDown:k},N("removeIcon")),a=b.removeIcon||(0,i.createElement)(c.TimesCircleIcon,{...t,key:`${C}-removeIcon`});if(b.image){let t=u({src:b.image,onError:b.onImageError},N("image"));e.push((0,i.createElement)("img",{alt:b.imageAlt,...t,key:`${C}-image`}))}else if(b.icon){let i=u({className:E("icon")},N("icon"));e.push(r.IconUtils.getJSXIcon(b.icon,{...i},{props:b}))}if(b.label){let t=u({className:E("label")},N("label"));e.push((0,i.createElement)("span",{...t,key:(0,p.UniqueComponentId)("label")},b.label))}return b.removable&&e.push(r.IconUtils.getJSXIcon(a,{...t},{props:b})),e})(),x=u({ref:f,style:b.style,className:(0,n.classNames)(b.className,E("root")),"aria-label":b.label},m.getOtherProps(b),N("root")),(0,i.createElement)("div",{...x,key:(0,p.UniqueComponentId)("chip")},h)):null}));h.displayName="Chip",e.s(["Chip",0,h],86546)},12257,e=>{"use strict";var i=e.i(91398),t=e.i(91788),a=e.i(85850);let s=t.memo(t.forwardRef((e,t)=>{let s=a.IconBase.getPTI(e);return(0,i.jsx)("svg",{ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"})})}));s.displayName="TimesCircleIcon",e.s(["TimesCircleIcon",0,s])},28805,e=>{e.v(i=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(i=>e.l(i))).then(()=>i(48545)))},48761,e=>{e.v(i=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(i=>e.l(i))).then(()=>i(25050)))},3828,(e,i,t)=>{i.exports=e.r(26990)},79066,e=>{"use strict";var i=e.i(91398);e.i(74967);var t=e.i(28137);function a(){return(0,i.jsxs)(t.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,i.jsx)("h3",{children:"Screen Reader"}),(0,i.jsxs)("p",{children:["Chip uses the ",(0,i.jsx)("i",{children:"label"})," property as the default ",(0,i.jsx)("i",{children:"aria-label"}),", since any attribute is passed to the root element ",(0,i.jsx)("i",{children:"aria-labelledby"})," or ",(0,i.jsx)("i",{children:"aria-label"})," can be used to override the default behavior. Removable chips have a"," ",(0,i.jsx)("i",{children:"tabIndex"})," and focusable with the tab key."]}),(0,i.jsx)("h3",{children:"Keyboard Support"}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Key"}),(0,i.jsx)("th",{children:"Function"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"backspace"})}),(0,i.jsx)("td",{children:"Hides removable."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"enter"})}),(0,i.jsx)("td",{children:"Hides removable."})]})]})]})})]})}var s=e.i(5180),l=e.i(86546);function c(e){let a={basic:`
<Chip label="Action" />
<Chip label="Comedy" />
<Chip label="Mystery" />
<Chip label="Thriller" removable />
        `,javascript:`
import React from 'react';
import { Chip } from 'primereact/chip';

export default function BasicDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Action" />
            <Chip label="Comedy" />
            <Chip label="Mystery" />
            <Chip label="Thriller" removable />
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Chip } from 'primereact/chip';

export default function BasicDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Action" />
            <Chip label="Comedy" />
            <Chip label="Mystery" />
            <Chip label="Thriller" removable />
        </div>
    );
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["A basic chip with a text is created with the ",(0,i.jsx)("i",{children:"label"})," property. In addition when ",(0,i.jsx)("i",{children:"removable"})," is added, a delete icon is displayed to remove a chip."]})}),(0,i.jsxs)("div",{className:"card flex flex-wrap gap-2",children:[(0,i.jsx)(l.Chip,{label:"Action"}),(0,i.jsx)(l.Chip,{label:"Comedy"}),(0,i.jsx)(l.Chip,{label:"Mystery"}),(0,i.jsx)(l.Chip,{label:"Thriller",removable:!0})]}),(0,i.jsx)(s.DocSectionCode,{code:a})]})}function n(e){let a={basic:`
<Chip label="Apple" icon="pi pi-apple" />
<Chip label="Facebook" icon="pi pi-facebook" />
<Chip label="Google" icon="pi pi-google" />
<Chip label="Microsoft" icon="pi pi-microsoft" removable />
        `,javascript:`
import React from 'react';
import { Chip } from 'primereact/chip';

export default function IconDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Apple" icon="pi pi-apple" />
            <Chip label="Facebook" icon="pi pi-facebook" />
            <Chip label="Google" icon="pi pi-google" />
            <Chip label="Microsoft" icon="pi pi-microsoft" removable />
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Chip } from 'primereact/chip';

export default function IconDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Apple" icon="pi pi-apple" />
            <Chip label="Facebook" icon="pi pi-facebook" />
            <Chip label="Google" icon="pi pi-google" />
            <Chip label="Microsoft" icon="pi pi-microsoft" removable />
        </div>
    );
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["A font icon next to the label can be displayed with the ",(0,i.jsx)("i",{children:"icon"})," property."]})}),(0,i.jsxs)("div",{className:"card flex flex-wrap gap-2",children:[(0,i.jsx)(l.Chip,{label:"Apple",icon:"pi pi-apple"}),(0,i.jsx)(l.Chip,{label:"Facebook",icon:"pi pi-facebook"}),(0,i.jsx)(l.Chip,{label:"Google",icon:"pi pi-google"}),(0,i.jsx)(l.Chip,{label:"Microsoft",icon:"pi pi-microsoft",removable:!0})]}),(0,i.jsx)(s.DocSectionCode,{code:a})]})}function r(e){let a={basic:`
<Chip label="Amy Elsner" image="/images/avatar/amyelsner.png" />
<Chip label="Asiya Javayant" image="/images/avatar/asiyajavayant.png" />
<Chip label="Onyama Limba" image="/images/avatar/onyamalimba.png" />
<Chip label="Xuxue Feng" image="/images/avatar/xuxuefeng.png" removable />
        `,javascript:`
import React from 'react';
import { Chip } from 'primereact/chip';

export default function ImageDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Amy Elsner" image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" />
            <Chip label="Asiya Javayant" image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" />
            <Chip label="Onyama Limba" image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" />
            <Chip label="Xuxue Feng" image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png" removable />
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Chip } from 'primereact/chip';

export default function ImageDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Amy Elsner" image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" />
            <Chip label="Asiya Javayant" image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" />
            <Chip label="Onyama Limba" image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" />
            <Chip label="Xuxue Feng" image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png" removable />
        </div>
    );
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["The ",(0,i.jsx)("i",{children:"image"})," property is used to display an image like an avatar."]})}),(0,i.jsxs)("div",{className:"card flex flex-wrap gap-2",children:[(0,i.jsx)(l.Chip,{label:"Amy Elsner",image:"https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"}),(0,i.jsx)(l.Chip,{label:"Asiya Javayant",image:"https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png"}),(0,i.jsx)(l.Chip,{label:"Onyama Limba",image:"https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"}),(0,i.jsx)(l.Chip,{label:"Xuxue Feng",image:"https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png",removable:!0})]}),(0,i.jsx)(s.DocSectionCode,{code:a})]})}function o(e){let a={basic:`
import { Chip } from 'primereact/chip';
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.DocSectionText,{...e}),(0,i.jsx)(s.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}let p=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.DocSectionText,{...e}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/chip.jpg",alt:"chip"})})]});function d(e){let a=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:"bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center",children:"P"}),(0,i.jsx)("span",{className:"ml-2 font-medium",children:"PRIME"})]}),c={basic:`
<Chip template={content} />
        `,javascript:`
import React from 'react';
import { Chip } from 'primereact/chip';

export default function TemplateDemo() {
    const content = (
        <>
            <span className="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">P</span>
            <span className="ml-2 font-medium">PRIME</span>
        </>
    );

    return (
        <div className="card">
            <Chip className="pl-0 pr-3" template={content} />
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Chip } from 'primereact/chip';

export default function TemplateDemo() {
    const content = (
        <>
            <span className="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">P</span>
            <span className="ml-2 font-medium">PRIME</span>
        </>
    );

    return (
        <div className="card">
            <Chip className="pl-0 pr-3" template={content} />
        </div>
    );
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["The ",(0,i.jsx)("i",{children:"template"})," property allows displaying custom content inside a chip."]})}),(0,i.jsx)("div",{className:"card",children:(0,i.jsx)(l.Chip,{className:"pl-0 pr-3",template:a})}),(0,i.jsx)(s.DocSectionCode,{code:c})]})}function m(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Element"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-chip"}),(0,i.jsx)("td",{children:"Container element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-chip-image"}),(0,i.jsx)("td",{children:"Container element in image mode."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-chip-text"}),(0,i.jsx)("td",{children:"Text of the chip."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"pi-chip-remove-icon"}),(0,i.jsx)("td",{children:"Remove icon."})]})]})]})})]})}var h=e.i(41158);function x(e){let a={basic:`
const Tailwind = {          
    chip: {
        root: {
            className: classNames('inline-flex items-center', 'bg-gray-200 text-gray-800 rounded-[16px] px-3 dark:text-white/80 dark:bg-gray-900')
        },
        label: 'leading-6 mt-1.5 mb-1.5',
        icon: 'leading-6 mr-2',
        image: {
            className: classNames('w-9 h-9 ml-[-0.75rem] mr-2', 'rounded-full')
        },
        removeIcon: {
            className: classNames('ml-2 rounded-md transition duration-200 ease-in-out', 'cursor-pointer leading-6')
        }
    }
}
    `},l={javascript:`
import React from 'react';
import { Chip } from 'primereact/chip';

export default function UnstyledDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Apple" icon="pi pi-apple" />
            <Chip label="Facebook" icon="pi pi-facebook" />
            <Chip label="Google" icon="pi pi-google" />
            <Chip label="Microsoft" icon="pi pi-microsoft" removable />
        </div>
    );
}
    `};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.DocSectionText,{...e,children:[(0,i.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,i.jsx)(h.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,i.jsx)(s.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,i.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,i.jsx)(s.DocSectionCode,{code:l,embedded:!0})]})})}var u=e.i(88850),j=e.i(82948);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:p},{id:"pt.chip.options",label:"Chip PT Options",component:u.default}];return(0,i.jsx)(j.DocComponent,{title:"React Chip Component",header:"Chip",description:"Chip represents entities using icons, labels and images.",componentDocs:[{id:"import",label:"Import",component:o},{id:"basic",label:"Basic",component:c},{id:"icon",label:"Icon",component:n},{id:"image",label:"Image",component:r},{id:"templatedoc",label:"Template",component:d},{id:"accessibility",label:"Accessibility",component:a}],apiDocs:["Chip"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:m},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:x}]}]})}],79066)},18703,(e,i,t)=>{let a="/chip";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(79066)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([a])})}]);