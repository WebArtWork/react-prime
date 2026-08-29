(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var i=e.i(91398),t=e.i(91788);e.s(["CodeHighlight",0,function(e){let a=(0,t.useRef)(),s=`language-${e.lang||"jsx"}`;return(0,t.useEffect)(()=>{window.Prism.highlightElement(a.current)},[]),(0,i.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,i.jsxs)("code",{ref:a,className:s,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var i=e.i(91398),t=e.i(3935),a=e.i(58678),s=e.i(3828),o=e.i(91788),r=e.i(51551),l=e.i(72124),n=e.i(41158),c=e.i(87914),u=e.i(28137);let d=e=>{let a=(0,o.useContext)(c.default),{id:l,data:d,name:p,description:m,allowLink:h=!0}=e,x=l.startsWith("pt."),b=(0,s.useRouter)();if(r.ObjectUtils.isNotEmpty(d)){let s=Object.keys(d[0]),c=(e,i)=>{let t=document.getElementById(e);t&&t.parentElement.scrollIntoView({block:"start",behavior:i})},v=(e,a,s)=>{if(h&&e)return e.split("|").map((e,r)=>{if(e.includes(p)){let t=e.indexOf(p),a=e.substring(t).replace(/(\[|\]|<|>).*$/gm,"").trim(),s=p===a?`api.${p}`:`api.${p}.${a===`${p}Props`?"props":a}`;return(0,i.jsxs)(o.default.Fragment,{children:[0!==r?"|":"",(0,i.jsx)(n.default,{href:b.basePath+b.pathname+`#${s}`,target:"_self",children:(0,i.jsx)("a",{onClick:()=>c(s,"smooth"),children:e})})]},r)}return(0,i.jsxs)(o.default.Fragment,{children:[0!==r?"|":"",a?(0,i.jsxs)("span",{id:l+"."+e,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[e,(0,i.jsx)(n.default,{href:b.basePath+b.pathname+`#${l+"."+e}`,target:"_self",children:(0,i.jsx)("a",{onClick:()=>c(l+"."+e),className:"doc-option-link",children:(0,i.jsx)("i",{className:"pi pi-link"})})})]}):e]},r)});let r=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return a?(0,i.jsxs)("span",{id:l+"."+r,className:(0,t.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[r,(0,i.jsx)(n.default,{href:b.basePath+b.pathname+`#${l+"."+r}`,target:"_self",children:(0,i.jsx)("a",{onClick:()=>c(l+"."+r),className:"doc-option-link",children:(0,i.jsx)("i",{className:"pi pi-link"})})})]}):r},f=(0,i.jsx)(o.default.Fragment,{children:x?(0,i.jsx)("tr",{children:s.map(e=>(0,i.jsx)("th",{children:e},e))}):(0,i.jsx)("tr",{children:s.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,i.jsx)("th",{children:e},e))})}),q=(0,i.jsx)(o.default.Fragment,{children:d.map((e,s)=>{if(x){let{value:t,label:a,description:o}=e;return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:t}),(0,i.jsx)("td",{children:a}),(0,i.jsx)("td",{children:o})]},s)}return(0,i.jsx)("tr",{children:Object.entries(e).map(([s,o],l)=>"readonly"!==s&&"optional"!==s&&"deprecated"!==s&&(0,i.jsx)("td",{children:"parameters"===s?o.map((e,t)=>(0,i.jsxs)("div",{className:"doc-option-params",children:[(0,i.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,i.jsx)("span",{className:"doc-option-parameter-type",children:v(e.type)}),(0,i.jsx)("br",{})]},t)):"default"===s?(0,i.jsx)("div",{className:(0,t.classNames)("doc-option-default",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:r.ObjectUtils.isEmpty(o)?"null":v(o,"name"===s,e.deprecated)}):"type"===s?(0,i.jsx)("span",{className:"doc-option-type",children:v(o,"name"===s,e.deprecated)}):"returnType"===s?(0,i.jsx)("div",{className:(0,t.classNames)("doc-option-returnType",{"doc-option-dark":a.darkMode,"doc-option-light":!a.darkMode}),children:v(o,"name"===s,e.deprecated)}):"description"===s||"values"===s?(0,i.jsx)("span",{className:"doc-option-description",children:o}):v(o,"name"===s,e.deprecated)},l))},s)})});return(0,i.jsxs)(o.default.Fragment,{children:[(0,i.jsx)(u.DocSectionText,{...e,children:(0,i.jsx)("p",{children:m})}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:f}),(0,i.jsx)("tbody",{children:q})]})})]},l)}return null};e.s(["default",0,d],88850);var p=e.i(71864),m=e.i(38076);function h(e){let{doc:t,header:a}=e,s=e.apiExclude,n=t.reduce((e,t)=>{let a,o=t.split("."),n=(a=o[0])&&a[0].toUpperCase()+a.slice(1)||"",c=l.default[n.toLowerCase()],u=(e,i)=>s&&s[e]&&s[e].includes(i),p=e=>s&&s[e]&&"excludeAll"===s[e];if(c){let a=(e,t)=>{if(r.ObjectUtils.isNotEmpty(c.events)&&r.ObjectUtils.isNotEmpty(c.events.values)&&!p("events")){let a={id:`api.${t}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,s])=>{let[o,r]=[`api.${t}.${e}`,e];u("event",e)||a.children.push({id:o,label:r,component:e=>(0,i.jsx)(d,{name:t,data:s.props,description:(0,i.jsxs)(i.Fragment,{children:[s.description," See ",(0,i.jsx)("i",{children:s.relatedProp}),"."]}),...e})})}),e.push(a)}if(r.ObjectUtils.isNotEmpty(c.interfaces)&&r.ObjectUtils.isNotEmpty(c.interfaces.values)&&!p("interfaces")){let a={id:`api.${t}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,s])=>{let[o,r]=[`api.${t}.${e}`,e];u("interfaces",e)||a.children.push({id:o,label:r,component:e=>(0,i.jsx)(d,{name:t,data:s.props,description:(0,i.jsxs)(i.Fragment,{children:[s.description," ",s.extendedTypes&&(0,i.jsxs)(i.Fragment,{children:["Extends ",(0,i.jsx)("i",{children:s.extendedTypes}),"."]})]}),...e})})}),e.push(a)}if(r.ObjectUtils.isNotEmpty(c.types)&&r.ObjectUtils.isNotEmpty(c.types.values)&&!p("types")){let a={id:`api.${t}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,s])=>{let[o,r]=[`api.${t}.${e}`,e];u("types",e)||a.children.push({id:o,label:r,component:e=>(0,i.jsx)(d,{name:t,data:[s],allowLink:!1,...e})})}),e.push(a)}};if(3===o.length){let t=o[1],a=o[2];if("functions"===t){let s=c[t].values[a],o={id:`api.${n}`,label:n,children:[]},[l,u]=[`api.${n}.function`,"Function"],p=Object.entries(s).reduce((e,[i,t])=>("description"!==i&&(e[i]=t),e),{});o.children.push({id:l,label:u,component:e=>(0,i.jsx)(d,{name:n,data:[p],description:s.description,...e})});let m=s.parameters&&s.parameters.map(e=>e.type);if(r.ObjectUtils.isNotEmpty(c.interfaces)&&r.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${n}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([t,a])=>{if(m.includes(t)){let[s,o]=[`api.${n}.${t}`,t],l={id:s,label:o,description:(0,i.jsxs)(i.Fragment,{children:[a.description," ",a.extendedTypes&&(0,i.jsxs)(i.Fragment,{children:["Extends ",(0,i.jsx)("i",{children:a.extendedTypes}),"."]})]}),children:[]};r.ObjectUtils.isNotEmpty(a.props)&&l.children.push({id:`${s}.props`,label:"Props",component:e=>(0,i.jsx)(d,{data:a.props,...e})}),r.ObjectUtils.isNotEmpty(a.callbacks)&&l.children.push({id:`${s}.callbacks`,label:"Callbacks",component:e=>(0,i.jsx)(d,{data:a.callbacks,...e})}),e.children.push(l)}}),r.ObjectUtils.isNotEmpty(e.children)&&o.children.push(e)}e.push(o)}}else c.components&&Object.entries(c.components).forEach(([s,o])=>{let l={id:`api.${s}`,label:s,description:o.description,children:[]};if(r.ObjectUtils.isNotEmpty(o.props)&&r.ObjectUtils.isNotEmpty(o.props.values)&&!p("props")){let[e,t]=[`api.${s}.props`,"Props"];if(u("props",s))return;l.children.push({id:e,label:t,component:e=>(0,i.jsx)(d,{name:s,data:o.props.values,description:o.props.description,...e})})}if(r.ObjectUtils.isNotEmpty(o.callbacks)&&r.ObjectUtils.isNotEmpty(o.callbacks.values)&&!p("callbacks")){let[e,t]=[`api.${s}.callbacks`,"Callbacks"];if(u("callbacks",s))return;l.children.push({id:e,label:t,component:e=>(0,i.jsx)(d,{name:s,data:o.callbacks.values,description:o.callbacks.description,...e})})}if(r.ObjectUtils.isNotEmpty(o.methods)&&r.ObjectUtils.isNotEmpty(o.methods.values)&&!p("methods")){let[e,t]=[`api.${s}.methods`,"Methods"];if(u("methods",s))return;l.children.push({id:e,label:t,component:e=>(0,i.jsx)(d,{name:s,data:o.methods.values,description:o.methods.description,...e})})}s.toLocaleLowerCase()===t.toLowerCase()&&a(l.children,s),e.push(l)}),c.model&&Object.entries(c.model).forEach(([s,o])=>{let l={id:`api.${s}`,label:s,description:o.description,children:[]};if(r.ObjectUtils.isNotEmpty(o.props)&&r.ObjectUtils.isNotEmpty(o.props.values)&&!p("props")){let[e,t]=[`api.${s}.props`,"Props"];if(u("props",s))return;l.children.push({id:e,label:t,component:e=>(0,i.jsx)(d,{name:s,data:o.props.values,description:o.props.description,...e})})}s.toLocaleLowerCase()===t.toLowerCase()&&a(l.children,s),e.push(l)}),c.components||c.model||a(e,n)}return e},[]);return(0,o.useEffect)(()=>{let e=window.location.hash.substring(1),i=document.getElementById(e);setTimeout(()=>{i&&i.scrollIntoView({block:"start"})},1)},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"doc-main",children:[(0,i.jsxs)("div",{className:"doc-intro",children:[(0,i.jsxs)("h1",{children:[a," API"]}),(0,i.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",a," module."]})]}),(0,i.jsx)(m.DocSections,{docs:n})]}),(0,i.jsx)(p.DocSectionNav,{docs:n})]})}e.s(["DocComponent",0,function(e){let r,[l,n]=(0,o.useState)(0),c=(0,s.useRouter)();r=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let u=e=>{n(e),c.replace(c.pathname)};return(0,o.useEffect)(()=>{c.asPath.includes("#api")&&n(1),c.asPath.includes("#pt")&&n(3)},[c.asPath]),(0,i.jsxs)("div",{className:(0,t.classNames)(e.className,"doc-component"),children:[(0,i.jsxs)(a.default,{children:[(0,i.jsx)("title",{children:e.title}),(0,i.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,i.jsxs)("ul",{className:"doc-tabmenu",children:[(0,i.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":0===l}),children:(0,i.jsx)("button",{type:"button",onClick:()=>u(0),children:r})}),e.apiDocs?(0,i.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":1===l}),children:(0,i.jsx)("button",{type:"button",onClick:()=>u(1),children:"API"})}):null,e.themingDocs?(0,i.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":2===l}),children:(0,i.jsx)("button",{type:"button",onClick:()=>u(2),children:"THEMING"})}):null,e.ptDocs?(0,i.jsx)("li",{className:(0,t.classNames)({"doc-tabmenu-active":3===l}),children:(0,i.jsx)("button",{type:"button",onClick:()=>u(3),children:"PASS THROUGH"})}):null]}),(0,i.jsxs)("div",{className:"doc-tabpanels",children:[0===l?(0,i.jsxs)("div",{className:"doc-tabpanel",children:[(0,i.jsxs)("div",{className:"doc-main",children:[(0,i.jsxs)("div",{className:"doc-intro",children:[(0,i.jsx)("h1",{children:e.header}),(0,i.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,i.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,i.jsx)(p.DocSectionNav,{docs:e.componentDocs})]}):null,1===l?(0,i.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,i.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"doc-main",children:(0,i.jsxs)("div",{className:"doc-intro",children:[(0,i.jsxs)("h1",{children:[e.header," API"]}),(0,i.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===l?(0,i.jsx)(i.Fragment,{children:e.themingDocs?(0,i.jsxs)("div",{className:"doc-tabpanel",children:[(0,i.jsxs)("div",{className:"doc-main",children:[(0,i.jsx)("div",{className:"doc-intro",children:(0,i.jsxs)("h1",{children:[e.header," Theming"]})}),(0,i.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,i.jsx)(p.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===l?(0,i.jsx)(i.Fragment,{children:e.ptDocs?(0,i.jsxs)("div",{className:"doc-tabpanel",children:[(0,i.jsxs)("div",{className:"doc-main",children:[(0,i.jsxs)("div",{className:"doc-intro",children:[(0,i.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,i.jsx)("p",{children:e.ptDescription})]}),(0,i.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,i.jsx)(p.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},3828,(e,i,t)=>{i.exports=e.r(26990)},51688,e=>{"use strict";var i=e.i(91398),t=e.i(88850),a=e.i(82948),s=e.i(28137);function o(){return(0,i.jsxs)(s.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,i.jsx)("h3",{children:"Screen Reader"}),(0,i.jsxs)("p",{children:["Scrollbars of the ScrollPanel has a ",(0,i.jsx)("i",{children:"scrollbar"})," role along with the ",(0,i.jsx)("i",{children:"aria-controls"})," attribute that refers to the id of the scrollable content container and the ",(0,i.jsx)("i",{children:"aria-orientation"})," to indicate the orientation of scrolling."]}),(0,i.jsx)("h3",{children:"Header Keyboard Support"}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Key"}),(0,i.jsx)("th",{children:"Function"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"down arrow"})}),(0,i.jsx)("td",{children:"Scrolls content down when vertical scrolling is available."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"up arrow"})}),(0,i.jsx)("td",{children:"Scrolls content up when vertical scrolling is available."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"left"})}),(0,i.jsx)("td",{children:"Scrolls content left when horizontal scrolling is available."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"right"})}),(0,i.jsx)("td",{children:"Scrolls content right when horizontal scrolling is available."})]})]})]})})]})}var r=e.i(5180),l=e.i(91788),n=e.i(10836),c=e.i(15498),u=e.i(60150),d=e.i(20484),p=e.i(4632),m=e.i(45543),h=e.i(28653),x=e.i(3935);let b=c.ComponentBase.extend({defaultProps:{__TYPE:"ScrollPanel",id:null,style:null,className:null,children:void 0,step:5},css:{classes:{root:"p-scrollpanel p-component",wrapper:"p-scrollpanel-wrapper",content:"p-scrollpanel-content",barx:"p-scrollpanel-bar p-scrollpanel-bar-x",bary:"p-scrollpanel-bar p-scrollpanel-bar-y"},styles:`
        @layer primereact {
            .p-scrollpanel-wrapper {
                overflow: hidden;
                width: 100%;
                height: 100%;
                position: relative;
                z-index: 1;
                float: left;
            }

            .p-scrollpanel-content {
                height: calc(100% + 18px);
                width: calc(100% + 18px);
                padding: 0 18px 18px 0;
                position: relative;
                overflow: auto;
                box-sizing: border-box;
            }

            .p-scrollpanel-bar {
                position: relative;
                background: #c1c1c1;
                border-radius: 3px;
                z-index: 2;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.25s linear;
            }

            .p-scrollpanel-bar-y {
                width: 9px;
                top: 0;
            }

            .p-scrollpanel-bar-x {
                height: 9px;
                bottom: 0;
            }

            .p-scrollpanel-hidden {
                visibility: hidden;
            }

            .p-scrollpanel:hover .p-scrollpanel-bar,
            .p-scrollpanel:active .p-scrollpanel-bar {
                opacity: 1;
            }

            .p-scrollpanel-grabbed {
                user-select: none;
            }
        }
        `}}),v=l.forwardRef((e,t)=>{let a=(0,u.useMergeProps)(),s=l.useContext(n.PrimeReactContext),o=b.getProps(e,s),[r,v]=l.useState(o.id),[f,q]=l.useState("vertical"),{ptm:j,cx:g,isUnstyled:N}=b.setMetaData({props:o});(0,c.useHandleStyle)(b.css.styles,N,{name:"scrollpanel"});let y=l.useRef(null),w=l.useRef(null),S=l.useRef(null),D=l.useRef(null),[E,P]=l.useState(0),[C,T]=l.useState(0),k=l.useRef(!1),U=l.useRef(!1),L=l.useRef(null),O=l.useRef(null),A=l.useRef(null),F=l.useRef(null),R=l.useRef(null),H=l.useRef(!1),$=l.useRef(null),I=r+"_content",z=()=>{if(!w.current)return;let e=w.current.scrollWidth,i=w.current.clientWidth,t=-((y.current.clientHeight-S.current.clientHeight)*1);A.current=i/e;let a=w.current.scrollHeight,s=w.current.clientHeight,o=-((y.current.clientWidth-D.current.clientWidth)*1);F.current=s/a,R.current=window.requestAnimationFrame(()=>{A.current>=1?m.DomHandler.addClass(S.current,"p-scrollpanel-hidden"):(m.DomHandler.removeClass(S.current,"p-scrollpanel-hidden"),m.DomHandler.applyStyle(S.current,{width:Math.max(100*A.current,10)+"%",left:w.current.scrollLeft/e*100+"%",bottom:t+"px"})),F.current>=1?m.DomHandler.addClass(D.current,"p-scrollpanel-hidden"):(m.DomHandler.removeClass(D.current,"p-scrollpanel-hidden"),m.DomHandler.applyStyle(D.current,{height:Math.max(100*F.current,10)+"%",top:"calc("+w.current.scrollTop/a*100+"% - "+S.current.clientHeight+"px)",right:o+"px"}))})},_=e=>{S.current.isSameNode(e.target)?q("horizontal"):D.current.isSameNode(e.target)&&q("vertical")},B=()=>{"horizontal"===f&&q("vertical")},M=e=>{k.current?W(e):(U.current||W(e),K(e))},W=e=>{let i=e.pageX-L.current;L.current=e.pageX,R.current=window.requestAnimationFrame(()=>{w.current.scrollLeft+=i/A.current})},K=e=>{let i=e.pageY-O.current;O.current=e.pageY,R.current=window.requestAnimationFrame(()=>{w.current.scrollTop+=i/F.current})},X=e=>{m.DomHandler.removeClass(D.current,"p-scrollpanel-grabbed"),m.DomHandler.removeClass(S.current,"p-scrollpanel-grabbed"),m.DomHandler.removeClass(document.body,"p-scrollpanel-grabbed"),document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",X),k.current=!1,U.current=!1},Y=e=>{if("vertical"===f)switch(e.code){case"ArrowDown":G("scrollTop",o.step),e.preventDefault();break;case"ArrowUp":G("scrollTop",-1*o.step),e.preventDefault();break;case"ArrowLeft":case"ArrowRight":e.preventDefault()}else if("horizontal"===f)switch(e.code){case"ArrowRight":G("scrollLeft",o.step),e.preventDefault();break;case"ArrowLeft":G("scrollLeft",-1*o.step),e.preventDefault();break;case"ArrowDown":case"ArrowUp":e.preventDefault()}},V=()=>{J()},G=(e,i)=>{J(),$.current=setTimeout(()=>{w.current[e]+=i,z()},40)},J=()=>{$.current&&clearTimeout($.current)},Q=()=>{z()};(0,d.useMountEffect)(()=>{let e,i,t;o.id||v((0,h.UniqueComponentId)()),z(),window.addEventListener("resize",z),e=getComputedStyle(y.current),i=getComputedStyle(S.current),t=m.DomHandler.getHeight(y.current)-parseInt(i.height,10),"none"!==e["max-height"]&&0===t&&(w.current.offsetHeight+parseInt(i.height,10)>parseInt(e["max-height"],10)?y.current.style.height=e["max-height"]:y.current.style.height=w.current.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px"),H.current=!0}),(0,p.useUnmountEffect)(()=>{H.current&&window.removeEventListener("resize",z),R.current&&window.cancelAnimationFrame(R.current)}),l.useImperativeHandle(t,()=>({props:o,refresh:Q,getElement:()=>y.current,getContent:()=>w.current,getXBar:()=>S.current,getYBar:()=>D.current}));let Z=a({id:o.id,ref:y,style:o.style,className:(0,x.classNames)(o.className,g("root"))},b.getOtherProps(o),j("root")),ee=a({className:g("wrapper")},j("wrapper")),ei=a({className:g("content"),onScroll:e=>{E!==e.target.scrollLeft?(P(e.target.scrollLeft),q("horizontal")):C!==e.target.scrollTop&&(T(e.target.scrollTop),q("vertical")),z()},onMouseEnter:z},j("content")),et=a({ref:S,role:"scrollbar",className:g("barx"),tabIndex:0,"aria-valuenow":C,"aria-controls":I,"aria-orientation":"horizontal",onFocus:_,onBlur:B,onKeyDown:Y,onKeyUp:V,onMouseDown:e=>{k.current=!0,L.current=e.pageX,m.DomHandler.addClass(S.current,"p-scrollpanel-grabbed"),m.DomHandler.addClass(document.body,"p-scrollpanel-grabbed"),document.addEventListener("mousemove",M),document.addEventListener("mouseup",X),e.preventDefault()}},j("barx")),ea=a({ref:D,role:"scrollbar",className:g("bary"),tabIndex:0,"aria-valuenow":E,"aria-controls":I,"aria-orientation":"vertical",onFocus:_,onBlur:B,onKeyDown:Y,onKeyUp:V,onMouseDown:e=>{U.current=!0,O.current=e.pageY,m.DomHandler.addClass(D.current,"p-scrollpanel-grabbed"),m.DomHandler.addClass(document.body,"p-scrollpanel-grabbed"),document.addEventListener("mousemove",M),document.addEventListener("mouseup",X),e.preventDefault()}},j("bary"));return(0,i.jsxs)("div",{...Z,children:[(0,i.jsx)("div",{...ee,children:(0,i.jsx)("div",{ref:w,...ei,children:o.children})}),(0,i.jsx)("div",{...et}),(0,i.jsx)("div",{...ea})]})});function f(e){let t={basic:`
<ScrollPanel style={{ width: '100%', height: '200px' }}>
    <p>
        Lorem ipsum dolor ...
    </p>
</ScrollPanel>
        `,javascript:`
import React from 'react'; 
import { ScrollPanel } from 'primereact/scrollpanel';

export default function BasicDemo() {
    return (
        <div className="card">
            <ScrollPanel style={{ width: '100%', height: '200px' }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                    ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
                <p className="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </ScrollPanel>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { ScrollPanel } from 'primereact/scrollpanel';

export default function BasicDemo() {
    return (
        <div className="card">
            <ScrollPanel style={{ width: '100%', height: '200px' }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                    ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
                <p className="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </ScrollPanel>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"ScrollPanel is defined using dimensions for the scrollable viewport."})}),(0,i.jsx)("div",{className:"card",children:(0,i.jsxs)(v,{style:{width:"100%",height:"200px"},children:[(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,i.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."}),(0,i.jsx)("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})]})}),(0,i.jsx)(r.DocSectionCode,{code:t})]})}function q(e){let t={basic:`
<ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
    <p>
        Lorem ipsum dolor ...
    </p>
</ScrollPanel>

<ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar2">
    <p>
    Lorem ipsum dolor ...
    </p>
</ScrollPanel>
        `,javascript:`
import React from 'react'; 
import { ScrollPanel } from 'primereact/scrollpanel';
import './ScrollPanelDemo.css';

export default function CustomDemo() {
    return (
        <div className="card scrollpanel-demo">
            <div className="flex flex-column md:flex-row gap-5">
                <div className="flex-auto">
                    <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </ScrollPanel>
                </div>
                <div className="flex-auto">
                    <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </ScrollPanel>
                </div>
            </div>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { ScrollPanel } from 'primereact/scrollpanel';
import './ScrollPanelDemo.css';

export default function CustomDemo() {
    return (
        <div className="card scrollpanel-demo">
            <div className="flex flex-column md:flex-row gap-5">
                <div className="flex-auto">
                    <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar1">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </ScrollPanel>
                </div>
                <div className="flex-auto">
                    <ScrollPanel style={{ width: '100%', height: '200px' }} className="custombar2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </ScrollPanel>
                </div>
            </div>
        </div>
    )
}
        `,extFiles:{"ScrollPanelDemo.css":`
/* ScrollPanelDemo.css */

.scrollpanel-demo .p-scrollpanel.custombar1 .p-scrollpanel-wrapper {
    border-right: 10px solid var(--surface-ground);
}

.scrollpanel-demo .p-scrollpanel.custombar1 .p-scrollpanel-bar {
    background-color: var(--primary-300);
    opacity: 1;
    transition: background-color .3s;
}

.scrollpanel-demo .p-scrollpanel.custombar1 .p-scrollpanel-bar:hover {
    background-color: var(--primary-400);
}

.scrollpanel-demo .p-scrollpanel.custombar2 .p-scrollpanel-wrapper {
    border-right: 10px solid var(--surface-50);
    border-bottom: 10px solid var(--surface-50);
}

.scrollpanel-demo .p-scrollpanel.custombar2 .p-scrollpanel-bar {
    background-color: var(--surface-300);
    border-radius: 0;
    opacity: 1;
    transition: background-color .3s;
}

.scrollpanel-demo .col-12 {
    padding: 2rem;
}
`}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"Scrollbar visuals can be styled for a unified look across different platforms."})}),(0,i.jsx)("div",{className:"card scrollpanel-demo",children:(0,i.jsxs)("div",{className:"flex flex-column md:flex-row gap-5",children:[(0,i.jsx)("div",{className:"flex-auto",children:(0,i.jsxs)(v,{style:{width:"100%",height:"200px"},className:"custombar1",children:[(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,i.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."}),(0,i.jsx)("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})]})}),(0,i.jsx)("div",{className:"flex-auto",children:(0,i.jsxs)(v,{style:{width:"100%",height:"200px"},className:"custombar2",children:[(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,i.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."}),(0,i.jsx)("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})]})})]})}),(0,i.jsx)(r.DocSectionCode,{code:t})]})}function j(e){let t={basic:`
import { ScrollPanel } from 'primereact/scrollpanel';
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.DocSectionText,{...e}),(0,i.jsx)(r.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}v.displayName="ScrollPanel";let g=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.DocSectionText,{...e}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/scrollpanel.jpg",alt:"scrollpanel"})})]});function N(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Element"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-scrollpanel"}),(0,i.jsx)("td",{children:"Container element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-scrollpanel-wrapper"}),(0,i.jsx)("td",{children:"Wrapper of content section."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-scrollpanel-content"}),(0,i.jsx)("td",{children:"Content section."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-scrollpanel-bar"}),(0,i.jsx)("td",{children:"Scrollbar handle."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-scrollpanel-bar-x"}),(0,i.jsx)("td",{children:"Scrollbar handle of a horizontal bar."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-scrollpanel-bar-y"}),(0,i.jsx)("td",{children:"Scrollbar handle of a vertical bar"})]})]})]})})]})}var y=e.i(41158);function w(e){let t={basic:`
const Tailwind = {
    scrollpanel: {
        wrapper: 'overflow-hidden relative float-left h-full w-full z-[1]',
        content: 'box-border h-[calc(100%+18px)] overflow-scroll pr-[18px] pb-[18px] pl-0 pt-0 relative scrollbar-none w-[calc(100%+18px)] [&::-webkit-scrollbar]:hidden',
        barX: {
            className: classNames('relative bg-gray-100 invisible rounded cursor-pointer h-[9px] bottom-0 z-[2]', 'transition duration-[250ms] ease-linear')
        },
        barY: {
            className: classNames('relative bg-gray-100 rounded cursor-pointer w-[9px] top-0 z-[2]', 'transition duration-[250ms] ease-linear')
        }
    }
}
        `},a={javascript:`
import React from 'react'; 
import { ScrollPanel } from 'primereact/scrollpanel';

export default function UnstyledDemo() {
    return (
        <div className="card">
            <ScrollPanel style={{ width: '100%', height: '150px' }}>
                <p className="text-gray-700 dark:text-white/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text-gray-700 dark:text-white/80">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                    ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
                <p className="text-gray-700 dark:text-white/80 m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                    culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </ScrollPanel>
        </div>
    )
}
    `};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(s.DocSectionText,{...e,children:[(0,i.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,i.jsx)(y.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,i.jsx)(r.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,i.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,i.jsx)(r.DocSectionCode,{code:a,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:g},{id:"pt.scrollpanel.options",label:"ScrollPanel PT Options",component:t.default}];return(0,i.jsx)(a.DocComponent,{title:"React ScrollPanel Component",header:"ScrollPanel",description:"ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.",componentDocs:[{id:"import",label:"Import",component:j},{id:"basic",label:"Basic",component:f},{id:"custom",label:"Custom",component:q},{id:"accessibility",label:"Accessibility",component:o}],apiDocs:["ScrollPanel"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:N},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:w}]}]})}],51688)},30559,(e,i,t)=>{let a="/scrollpanel";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(51688)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([a])})}]);