(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),r=e.i(91788);e.s(["CodeHighlight",0,function(e){let i=(0,r.useRef)(),l=`language-${e.lang||"jsx"}`;return(0,r.useEffect)(()=>{window.Prism.highlightElement(i.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:i,className:l,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),r=e.i(3935),i=e.i(58678),l=e.i(3828),n=e.i(91788),s=e.i(51551),a=e.i(72124),c=e.i(41158),o=e.i(87914),p=e.i(28137);let d=e=>{let i=(0,n.useContext)(o.default),{id:a,data:d,name:u,description:h,allowLink:m=!0}=e,x=a.startsWith("pt."),j=(0,l.useRouter)();if(s.ObjectUtils.isNotEmpty(d)){let l=Object.keys(d[0]),o=(e,t)=>{let r=document.getElementById(e);r&&r.parentElement.scrollIntoView({block:"start",behavior:t})},f=(e,i,l)=>{if(m&&e)return e.split("|").map((e,s)=>{if(e.includes(u)){let r=e.indexOf(u),i=e.substring(r).replace(/(\[|\]|<|>).*$/gm,"").trim(),l=u===i?`api.${u}`:`api.${u}.${i===`${u}Props`?"props":i}`;return(0,t.jsxs)(n.default.Fragment,{children:[0!==s?"|":"",(0,t.jsx)(c.default,{href:j.basePath+j.pathname+`#${l}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(l,"smooth"),children:e})})]},s)}return(0,t.jsxs)(n.default.Fragment,{children:[0!==s?"|":"",i?(0,t.jsxs)("span",{id:a+"."+e,className:(0,r.classNames)("doc-option-name",{"line-through cursor-pointer":!!l}),title:l,children:[e,(0,t.jsx)(c.default,{href:j.basePath+j.pathname+`#${a+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(a+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},s)});let s=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return i?(0,t.jsxs)("span",{id:a+"."+s,className:(0,r.classNames)("doc-option-name",{"line-through cursor-pointer":!!l}),title:l,children:[s,(0,t.jsx)(c.default,{href:j.basePath+j.pathname+`#${a+"."+s}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(a+"."+s),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):s},g=(0,t.jsx)(n.default.Fragment,{children:x?(0,t.jsx)("tr",{children:l.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:l.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),S=(0,t.jsx)(n.default.Fragment,{children:d.map((e,l)=>{if(x){let{value:r,label:i,description:n}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:r}),(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:n})]},l)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([l,n],a)=>"readonly"!==l&&"optional"!==l&&"deprecated"!==l&&(0,t.jsx)("td",{children:"parameters"===l?n.map((e,r)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:f(e.type)}),(0,t.jsx)("br",{})]},r)):"default"===l?(0,t.jsx)("div",{className:(0,r.classNames)("doc-option-default",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:s.ObjectUtils.isEmpty(n)?"null":f(n,"name"===l,e.deprecated)}):"type"===l?(0,t.jsx)("span",{className:"doc-option-type",children:f(n,"name"===l,e.deprecated)}):"returnType"===l?(0,t.jsx)("div",{className:(0,r.classNames)("doc-option-returnType",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:f(n,"name"===l,e.deprecated)}):"description"===l||"values"===l?(0,t.jsx)("span",{className:"doc-option-description",children:n}):f(n,"name"===l,e.deprecated)},a))},l)})});return(0,t.jsxs)(n.default.Fragment,{children:[(0,t.jsx)(p.DocSectionText,{...e,children:(0,t.jsx)("p",{children:h})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:g}),(0,t.jsx)("tbody",{children:S})]})})]},a)}return null};e.s(["default",0,d],88850);var u=e.i(71864),h=e.i(38076);function m(e){let{doc:r,header:i}=e,l=e.apiExclude,c=r.reduce((e,r)=>{let i,n=r.split("."),c=(i=n[0])&&i[0].toUpperCase()+i.slice(1)||"",o=a.default[c.toLowerCase()],p=(e,t)=>l&&l[e]&&l[e].includes(t),u=e=>l&&l[e]&&"excludeAll"===l[e];if(o){let i=(e,r)=>{if(s.ObjectUtils.isNotEmpty(o.events)&&s.ObjectUtils.isNotEmpty(o.events.values)&&!u("events")){let i={id:`api.${r}.events`,label:"Events",description:o.events.description,children:[]};Object.entries(o.events.values).forEach(([e,l])=>{let[n,s]=[`api.${r}.${e}`,e];p("event",e)||i.children.push({id:n,label:s,component:e=>(0,t.jsx)(d,{name:r,data:l.props,description:(0,t.jsxs)(t.Fragment,{children:[l.description," See ",(0,t.jsx)("i",{children:l.relatedProp}),"."]}),...e})})}),e.push(i)}if(s.ObjectUtils.isNotEmpty(o.interfaces)&&s.ObjectUtils.isNotEmpty(o.interfaces.values)&&!u("interfaces")){let i={id:`api.${r}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([e,l])=>{let[n,s]=[`api.${r}.${e}`,e];p("interfaces",e)||i.children.push({id:n,label:s,component:e=>(0,t.jsx)(d,{name:r,data:l.props,description:(0,t.jsxs)(t.Fragment,{children:[l.description," ",l.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:l.extendedTypes}),"."]})]}),...e})})}),e.push(i)}if(s.ObjectUtils.isNotEmpty(o.types)&&s.ObjectUtils.isNotEmpty(o.types.values)&&!u("types")){let i={id:`api.${r}.types`,label:"Types",description:o.types.description,children:[]};Object.entries(o.types.values).forEach(([e,l])=>{let[n,s]=[`api.${r}.${e}`,e];p("types",e)||i.children.push({id:n,label:s,component:e=>(0,t.jsx)(d,{name:r,data:[l],allowLink:!1,...e})})}),e.push(i)}};if(3===n.length){let r=n[1],i=n[2];if("functions"===r){let l=o[r].values[i],n={id:`api.${c}`,label:c,children:[]},[a,p]=[`api.${c}.function`,"Function"],u=Object.entries(l).reduce((e,[t,r])=>("description"!==t&&(e[t]=r),e),{});n.children.push({id:a,label:p,component:e=>(0,t.jsx)(d,{name:c,data:[u],description:l.description,...e})});let h=l.parameters&&l.parameters.map(e=>e.type);if(s.ObjectUtils.isNotEmpty(o.interfaces)&&s.ObjectUtils.isNotEmpty(o.interfaces.values)){let e={id:`api.${c}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([r,i])=>{if(h.includes(r)){let[l,n]=[`api.${c}.${r}`,r],a={id:l,label:n,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),children:[]};s.ObjectUtils.isNotEmpty(i.props)&&a.children.push({id:`${l}.props`,label:"Props",component:e=>(0,t.jsx)(d,{data:i.props,...e})}),s.ObjectUtils.isNotEmpty(i.callbacks)&&a.children.push({id:`${l}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(d,{data:i.callbacks,...e})}),e.children.push(a)}}),s.ObjectUtils.isNotEmpty(e.children)&&n.children.push(e)}e.push(n)}}else o.components&&Object.entries(o.components).forEach(([l,n])=>{let a={id:`api.${l}`,label:l,description:n.description,children:[]};if(s.ObjectUtils.isNotEmpty(n.props)&&s.ObjectUtils.isNotEmpty(n.props.values)&&!u("props")){let[e,r]=[`api.${l}.props`,"Props"];if(p("props",l))return;a.children.push({id:e,label:r,component:e=>(0,t.jsx)(d,{name:l,data:n.props.values,description:n.props.description,...e})})}if(s.ObjectUtils.isNotEmpty(n.callbacks)&&s.ObjectUtils.isNotEmpty(n.callbacks.values)&&!u("callbacks")){let[e,r]=[`api.${l}.callbacks`,"Callbacks"];if(p("callbacks",l))return;a.children.push({id:e,label:r,component:e=>(0,t.jsx)(d,{name:l,data:n.callbacks.values,description:n.callbacks.description,...e})})}if(s.ObjectUtils.isNotEmpty(n.methods)&&s.ObjectUtils.isNotEmpty(n.methods.values)&&!u("methods")){let[e,r]=[`api.${l}.methods`,"Methods"];if(p("methods",l))return;a.children.push({id:e,label:r,component:e=>(0,t.jsx)(d,{name:l,data:n.methods.values,description:n.methods.description,...e})})}l.toLocaleLowerCase()===r.toLowerCase()&&i(a.children,l),e.push(a)}),o.model&&Object.entries(o.model).forEach(([l,n])=>{let a={id:`api.${l}`,label:l,description:n.description,children:[]};if(s.ObjectUtils.isNotEmpty(n.props)&&s.ObjectUtils.isNotEmpty(n.props.values)&&!u("props")){let[e,r]=[`api.${l}.props`,"Props"];if(p("props",l))return;a.children.push({id:e,label:r,component:e=>(0,t.jsx)(d,{name:l,data:n.props.values,description:n.props.description,...e})})}l.toLocaleLowerCase()===r.toLowerCase()&&i(a.children,l),e.push(a)}),o.components||o.model||i(e,c)}return e},[]);return(0,n.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[i," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",i," module."]})]}),(0,t.jsx)(h.DocSections,{docs:c})]}),(0,t.jsx)(u.DocSectionNav,{docs:c})]})}e.s(["DocComponent",0,function(e){let s,[a,c]=(0,n.useState)(0),o=(0,l.useRouter)();s=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let p=e=>{c(e),o.replace(o.pathname)};return(0,n.useEffect)(()=>{o.asPath.includes("#api")&&c(1),o.asPath.includes("#pt")&&c(3)},[o.asPath]),(0,t.jsxs)("div",{className:(0,r.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,r.classNames)({"doc-tabmenu-active":0===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>p(0),children:s})}),e.apiDocs?(0,t.jsx)("li",{className:(0,r.classNames)({"doc-tabmenu-active":1===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>p(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,r.classNames)({"doc-tabmenu-active":2===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>p(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,r.classNames)({"doc-tabmenu-active":3===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>p(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===a?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(h.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.componentDocs})]}):null,1===a?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(m,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===a?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(h.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===a?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(h.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},3828,(e,t,r)=>{t.exports=e.r(26990)},23387,e=>{"use strict";var t=e.i(91398),r=e.i(88850),i=e.i(82948),l=e.i(28137);function n(){return(0,t.jsxs)(l.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Splitter bar defines ",(0,t.jsx)("i",{children:"separator"})," as the role with ",(0,t.jsx)("i",{children:"aria-orientation"})," set to either horizontal or vertical."]}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus through the splitter bar."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Moves a vertical splitter down."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Moves a vertical splitter up."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"Moves a vertical splitter to the left."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"right arrow"})}),(0,t.jsx)("td",{children:"Moves a vertical splitter to the right."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Maximizes the primary panel."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Minimizes the primary panel."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Toggles the primary panel between minimum and maximum sizes."})]})]})]})})]})}var s=e.i(5180),a=e.i(91788),c=e.i(10836),o=e.i(15498),p=e.i(20728),d=e.i(60150),u=e.i(20484),h=e.i(45543),m=e.i(51551),x=e.i(28653),j=e.i(3935);let f=`
@layer primereact {
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
    }

    .p-splitter-vertical {
        flex-direction: column;
    }

    .p-splitter-panel {
        flex-grow: 1;
    }

    .p-splitter-panel-nested {
        display: flex;
    }

    .p-splitter-panel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }

    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: col-resize;
    }

    .p-splitter-horizontal.p-splitter-resizing {
        cursor: col-resize;
        user-select: none;
    }

    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: 24px;
        width: 100%;
    }

    .p-splitter-horizontal > .p-splitter-gutter {
        cursor: col-resize;
    }

    .p-splitter-vertical.p-splitter-resizing {
        cursor: row-resize;
        user-select: none;
    }

    .p-splitter-vertical > .p-splitter-gutter {
        cursor: row-resize;
    }

    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: 24px;
        height: 100%;
    }
}

`,g=o.ComponentBase.extend({defaultProps:{__TYPE:"Splitter",className:null,gutterSize:4,id:null,step:5,layout:"horizontal",onResizeEnd:null,stateKey:null,stateStorage:"session",style:null,children:void 0},css:{classes:{root:({props:e})=>(0,j.classNames)(`p-splitter p-component p-splitter-${e.layout}`),gutter:"p-splitter-gutter",gutterHandler:"p-splitter-gutter-handle",panel:{root:"p-splitter-panel"}},styles:f}}),S=o.ComponentBase.extend({defaultProps:{__TYPE:"SplitterPanel",className:null,minSize:null,size:null,style:null,children:void 0},getCProps:e=>m.ObjectUtils.getComponentProps(e,S.defaultProps),getCOtherProps:e=>m.ObjectUtils.getComponentDiffProps(e,S.defaultProps),getCProp:(e,t)=>m.ObjectUtils.getComponentProp(e,t,S.defaultProps)}),y=()=>{},P=a.memo(a.forwardRef((e,r)=>{let i=(0,d.useMergeProps)(),l=a.useContext(c.PrimeReactContext),n=g.getProps(e,l),s=a.useRef(""),f=a.useRef(null),y=a.useRef(),P=a.useRef({}),b=a.useRef(null),N=a.useRef(null),v=a.useRef(null),z=a.useRef(null),w=a.useRef(null),D=a.useRef(null),E=a.useRef(null),C=a.useRef(null),O=a.useRef(null),k=a.useRef(null),T=a.useRef(null),H=a.useRef(null),[R,U]=a.useState([]),[$,F]=a.useState(!1),I=null!=n.stateKey,A=n.children&&n.children.length||1,M=(e,t)=>t in e?e[t]:n.children&&[].concat(n.children)[t].props.size||100/A,_="horizontal"===n.layout,L={props:n,state:{panelSizes:R,nested:!0===h.DomHandler.getAttribute(f.current&&f.current.parentElement,"data-p-splitter-panel-nested")}},{ptm:K,cx:B,isUnstyled:W}=g.setMetaData({...L});(0,o.useHandleStyle)(g.css.styles,W,{name:"splitter"});let[V,X]=(0,p.useEventListener)({type:"mousemove",listener:e=>ee(e)}),[Y,q]=(0,p.useEventListener)({type:"mouseup",listener:e=>{et(e),G()}}),G=()=>{X(),q()},J=a.useCallback(()=>{switch(n.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw Error(n.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},[n.stateStorage]),Q=a.useCallback(()=>{let e=J().getItem(n.stateKey);e&&U(JSON.parse(e))},[J,n.stateKey]),Z=(e,t,r)=>{let i="touchstart"===e.type?e.touches[0].pageX:e.pageX,l="touchstart"===e.type?e.touches[0].pageY:e.pageY;y.current=P.current[t],b.current=_?h.DomHandler.getWidth(f.current):h.DomHandler.getHeight(f.current),N.current=!0,v.current=_?i:l,z.current=y.current.previousElementSibling,w.current=y.current.nextElementSibling,r?(D.current=_?h.DomHandler.getOuterWidth(z.current,!0):h.DomHandler.getOuterHeight(z.current,!0),O.current=_?h.DomHandler.getOuterWidth(w.current,!0):h.DomHandler.getOuterHeight(w.current,!0)):(D.current=100*(_?h.DomHandler.getOuterWidth(z.current,!0):h.DomHandler.getOuterHeight(z.current,!0))/b.current,O.current=100*(_?h.DomHandler.getOuterWidth(w.current,!0):h.DomHandler.getOuterHeight(w.current,!0))/b.current),C.current=D.current,k.current=O.current,T.current=t,W()||h.DomHandler.addClass(y.current,"p-splitter-gutter-resizing"),y.current.setAttribute("data-p-splitter-gutter-resizing",!0),W()||h.DomHandler.addClass(f.current,"p-splitter-resizing"),f.current.setAttribute("data-p-splitter-resizing",!0)},ee=(e,t=0,r=!1)=>{let i,l,n,s="touchmove"===e.type?e.touches[0].pageX:e.pageX,a="touchmove"===e.type?e.touches[0].pageY:e.pageY;r?_?(n=100*(D.current+t)/b.current,l=100*(O.current-t)/b.current):(n=100*(D.current-t)/b.current,l=100*(O.current+t)/b.current):(i=_?100*s/b.current-100*v.current/b.current:100*a/b.current-100*v.current/b.current,n=D.current+i,l=O.current-i),ei(T.current,n,l)},et=e=>{let t=[...R];t[T.current]=C.current,t[T.current+1]=k.current,n.onResizeEnd&&n.onResizeEnd({originalEvent:e,sizes:t}),I&&m.ObjectUtils.isArray(t)&&J().setItem(n.stateKey,JSON.stringify(t)),U(t),W()||h.DomHandler.removeClass(y.current,"p-splitter-gutter-resizing"),P.current&&Object.keys(P.current).forEach(e=>P.current[e].setAttribute("data-p-splitter-gutter-resizing",!1)),W()||h.DomHandler.removeClass(f.current,"p-splitter-resizing"),f.current.setAttribute("data-p-splitter-resizing",!1),N.current=!1,b.current=null,v.current=null,z.current=null,w.current=null,D.current=null,C.current=null,O.current=null,k.current=null,T.current=null},er=()=>{en(),et()},ei=(e,t,r)=>{T.current=e,y.current=P.current[e],b.current=_?h.DomHandler.getWidth(f.current):h.DomHandler.getHeight(f.current),z.current=y.current.previousElementSibling,w.current=y.current.nextElementSibling,t>100||t<0||r>100||r<0||n.children[T.current].props&&n.children[T.current].props.minSize&&n.children[T.current].props.minSize>t||n.children[T.current+1].props&&n.children[T.current+1].props.minSize&&n.children[T.current+1].props.minSize>r||0||(C.current=t,k.current=r,z.current.style.flexBasis="calc("+t+"% - "+(n.children.length-1)*n.gutterSize+"px)",w.current.style.flexBasis="calc("+r+"% - "+(n.children.length-1)*n.gutterSize+"px)",E.current=parseFloat(t).toFixed(4))},el=(e,t,r)=>{H.current||(H.current=setInterval(()=>{Z(e,t,!0),ee(e,r,!0)},40))},en=()=>{H.current&&(clearInterval(H.current),H.current=null)},es=e=>{ee(e)},ea=e=>{et(e),window.removeEventListener("touchmove",es),window.removeEventListener("touchend",ea)};a.useImperativeHandle(r,()=>({props:n,getElement:()=>f.current})),(0,u.useMountEffect)(()=>{f.current&&(s.current=(0,x.UniqueComponentId)())}),a.useEffect(()=>{let e=[...f.current.children].filter(e=>"splitterpanel.root"===h.DomHandler.getAttribute(e,"data-pc-section")),t=[];e.map((e,r)=>{E.current=M(R,0),t[r]=M(R,r),e.childNodes&&m.ObjectUtils.isNotEmpty(h.DomHandler.find(e,"[data-pc-name='splitter']"))&&m.ObjectUtils.isNotEmpty(h.DomHandler.find(e,"[data-pc-section='root']"))&&(W()||h.DomHandler.addClass(e,"p-splitter-panel-nested"),e.setAttribute("data-p-splitter-panel-nested",!0),F(!0))}),U(t)},[]),a.useEffect(()=>{I&&Q()},[Q,I]);let ec=i({id:n.id,style:n.style,className:(0,j.classNames)(n.className,B("root")),"data-p-splitter-resizing":!1},g.getOtherProps(n),K("root")),eo=a.Children.map(n.children,(e,r)=>{let l=S.getCProp(e,"id")||`${s.current}_${r}`,c=(0,j.classNames)(S.getCProp(e,"className"),B("panel.root")),o=i({ref:e=>P.current[r]=e,className:B("gutter"),style:_?{width:n.gutterSize+"px"}:{height:n.gutterSize+"px"},onMouseDown:e=>{Z(e,r,!1),V(),Y()},onKeyDown:e=>((e,t)=>{let r=n.children[t].props&&n.children[t].props.minSize||0;switch(e.code){case"ArrowLeft":_&&el(e,t,-1*n.step),e.preventDefault();break;case"ArrowRight":_&&el(e,t,n.step),e.preventDefault();break;case"ArrowDown":_||el(e,t,-1*n.step),e.preventDefault();break;case"ArrowUp":_||el(e,t,n.step),e.preventDefault();break;case"Home":ei(t,100-r,r),e.preventDefault();break;case"End":ei(t,r,100-r),e.preventDefault();break;case"NumpadEnter":case"Enter":E.current>=100-(r||5)?ei(t,r,100-r):ei(t,100-r,r),e.preventDefault()}})(e,r),onKeyUp:er,onTouchStart:e=>{Z(e,r,!1),window.addEventListener("touchmove",es,{passive:!1,cancelable:!1}),window.addEventListener("touchend",ea)},onTouchMove:e=>es(e),onTouchEnd:e=>ea(e),"data-p-splitter-gutter-resizing":!1},K("gutter")),p=i({tabIndex:S.getCProp(e,"tabIndex")||0,className:B("gutterHandler"),role:"separator","aria-orientation":_?"vertical":"horizontal","aria-controls":l,"aria-label":S.getCProp(e,"aria-label"),"aria-labelledby":S.getCProp(e,"aria-labelledby"),"aria-valuenow":E.current,"aria-valuetext":parseFloat(E.current).toFixed(0)+"%","aria-valuemin":S.getCProp(e,"minSize")||"0","aria-valuemax":"100"},K("gutterHandler")),d=r!==n.children.length-1&&(0,t.jsx)("div",{...o,children:(0,t.jsx)("div",{...p})}),u="calc("+M(R,r)+"% - "+(A-1)*n.gutterSize+"px)",h=i({key:r,id:l,className:c,style:{...S.getCProp(e,"style"),flexBasis:u},role:"presentation","data-p-splitter-panel-nested":!1,onClick:S.getCProp(e,"onClick")},K("splitterpanel.root",{context:{nested:$}}));return(0,t.jsxs)(a.Fragment,{children:[(0,t.jsx)("div",{...h,children:S.getCProp(e,"children")}),d]})});return(0,t.jsx)("div",{ref:f,...ec,children:eo})}));function b(e){let r={basic:`
<Splitter style={{ height: '300px' }}>
    <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
    <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
</Splitter>
        `,javascript:`
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function HorizontalDemo() {
    return (
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
        </Splitter>
    )
}
        `,typescript:`
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function HorizontalDemo() {
    return (
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
        </Splitter>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Splitter requires two SplitterPanel components as children which are displayed horizontally by default."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(P,{style:{height:"300px"},children:[(0,t.jsx)(y,{className:"flex align-items-center justify-content-center",children:"Panel 1"}),(0,t.jsx)(y,{className:"flex align-items-center justify-content-center",children:"Panel 2"})]})}),(0,t.jsx)(s.DocSectionCode,{code:r})]})}function N(e){let r={basic:`
import { Splitter, SplitterPanel } from 'primereact/splitter';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)(s.DocSectionCode,{code:r,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function v(e){let r={basic:`
<Splitter style={{ height: '300px' }}>
    <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
        Panel 1
    </SplitterPanel>
    <SplitterPanel size={80}>
        <Splitter layout="vertical">
            <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                Panel 2
            </SplitterPanel>
            <SplitterPanel size={85}>
                <Splitter>
                    <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                        Panel 3
                    </SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                        Panel 4
                     </SplitterPanel>
                </Splitter>
             </SplitterPanel>
        </Splitter>
    </SplitterPanel>
</Splitter>
        `,javascript:`
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function NestedDemo() {
    return (
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
                Panel 1
            </SplitterPanel>
            <SplitterPanel size={80}>
                <Splitter layout="vertical">
                    <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                        Panel 2
                    </SplitterPanel>
                    <SplitterPanel size={85}>
                        <Splitter>
                            <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                                Panel 3
                            </SplitterPanel>
                            <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                                Panel 4
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    )
}
        `,typescript:`
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function NestedDemo() {
    return (
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
                Panel 1
            </SplitterPanel>
            <SplitterPanel size={80}>
                <Splitter layout="vertical">
                    <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                        Panel 2
                    </SplitterPanel>
                    <SplitterPanel size={85}>
                        <Splitter>
                            <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                                Panel 3
                            </SplitterPanel>
                            <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                                Panel 4
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Splitters can be combined to create advanced layouts."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(P,{style:{height:"300px"},children:[(0,t.jsx)(y,{className:"flex align-items-center justify-content-center",size:20,minSize:10,children:"Panel 1"}),(0,t.jsx)(y,{size:80,children:(0,t.jsxs)(P,{layout:"vertical",children:[(0,t.jsx)(y,{className:"flex align-items-center justify-content-center",size:15,children:"Panel 2"}),(0,t.jsx)(y,{size:85,children:(0,t.jsxs)(P,{children:[(0,t.jsx)(y,{className:"flex align-items-center justify-content-center",size:20,children:"Panel 3"}),(0,t.jsx)(y,{className:"flex align-items-center justify-content-center",size:80,children:"Panel 4"})]})})]})})]})}),(0,t.jsx)(s.DocSectionCode,{code:r})]})}y.displayName="SplitterPanel",P.displayName="Splitter";let z=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/splitter.jpg",alt:"splitter"})})]});function w(e){let r={basic:`
<Splitter style={{ height: '300px' }}>
    <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>Panel 1</SplitterPanel>
    <SplitterPanel className="flex align-items-center justify-content-center" size={75}>Panel 2</SplitterPanel>
</Splitter>
        `,javascript:`
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function SizeDemo() {
    return (
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center" size={75}>Panel 2</SplitterPanel>
        </Splitter>
    )
}
        `,typescript:`
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function SizeDemo() {
    return (
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center" size={75}>Panel 2</SplitterPanel>
        </Splitter>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Initial dimension of a panel is percentage based and defined using the ",(0,t.jsx)("i",{children:"size"})," property. In addition,",(0,t.jsx)("i",{children:"minSize"})," is provided to set a minimum value during a resize."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(P,{style:{height:"300px"},children:[(0,t.jsx)(y,{className:"flex align-items-center justify-content-center",size:25,minSize:10,children:"Panel 1"}),(0,t.jsx)(y,{className:"flex align-items-center justify-content-center",size:75,children:"Panel 2"})]})}),(0,t.jsx)(s.DocSectionCode,{code:r})]})}function D(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-splitter"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-splitter"}),(0,t.jsx)("td",{children:"Container element during resize."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-splitter-horizontal"}),(0,t.jsx)("td",{children:"Container element with horizontal layout."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-splitter-vertical"}),(0,t.jsx)("td",{children:"Container element with vertical layout."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-splitter-panel"}),(0,t.jsx)("td",{children:"Splitter panel element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-splitter-gutter"}),(0,t.jsx)("td",{children:"Gutter element to use when resizing the panels."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-splitter-gutter-handle"}),(0,t.jsx)("td",{children:"Handl element of the gutter."})]})]})]})})]})}var E=e.i(41158);function C(e){let r={basic:`
const Tailwind = {          
    splitter: {
        root: ({ context }) => ({
            className: classNames('bg-white dark:bg-gray-900 rounded-lg text-gray-700 dark:text-white/80', {
                'border border-solid border-gray-300 dark:border-blue-900/40': !context.nested
            })
        }),
        splitterpanel: {
            root: 'flex grow'
        },
        gutter: ({ props }) => ({
            className: classNames('flex items-center justify-center shrink-0', 'transition-all duration-200 bg-gray-100 dark:bg-gray-800', {
                'cursor-col-resize': props.layout == 'horizontal',
                'cursor-row-resize': props.layout !== 'horizontal'
            })
        }),
        gutterhandler: ({ props }) => ({
            className: classNames('bg-gray-300 dark:bg-gray-600 transition-all duration-200', {
                'h-7': props.layout == 'horizontal',
                'w-7 h-2': props.layout !== 'horizontal'
            })
        })
    }
}
    `},i={javascript:`
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function UnstyledDemo() {
    return (
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex items-center justify-center">Panel 1</SplitterPanel>
            <SplitterPanel className="flex items-center justify-center">Panel 2</SplitterPanel>
        </Splitter>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(l.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(E.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(s.DocSectionCode,{code:r,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(s.DocSectionCode,{code:i,embedded:!0})]})})}function O(e){let r={basic:`
<Splitter style={{ height: '300px' }} layout="vertical">
    <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
    <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
</Splitter>
        `,javascript:`
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function VerticalDemo() {
    return (
        <Splitter style={{ height: '300px' }} layout="vertical">
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
        </Splitter>
    )
}
        `,typescript:`
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function VerticalDemo() {
    return (
        <Splitter style={{ height: '300px' }} layout="vertical">
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
        </Splitter>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Panels are displayed as stacked by setting the ",(0,t.jsx)("i",{children:"layout"})," to ",(0,t.jsx)("i",{children:"vertical"}),"."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(P,{style:{height:"300px"},layout:"vertical",children:[(0,t.jsx)(y,{className:"flex align-items-center justify-content-center",children:"Panel 1"}),(0,t.jsx)(y,{className:"flex align-items-center justify-content-center",children:"Panel 2"})]})}),(0,t.jsx)(s.DocSectionCode,{code:r})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:z},{id:"pt.splitter.options",label:"Splitter PT Options",component:r.default},{id:"pt.splitterpanel.options",label:"SplitterPanel PT Options",component:r.default}];return(0,t.jsx)(i.DocComponent,{title:"React Splitter Component",header:"Splitter",description:"Splitter is utilized to separate and resize panels.",componentDocs:[{id:"import",label:"Import",component:N},{id:"horizontal",label:"Horizontal",component:b},{id:"size",label:"Size",component:w},{id:"vertical",label:"Vertical",component:O},{id:"nested",label:"Nested",component:v},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["Splitter","SplitterPanel"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:D},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:C}]}]})}],23387)},28990,(e,t,r)=>{let i="/splitter";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(23387)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);