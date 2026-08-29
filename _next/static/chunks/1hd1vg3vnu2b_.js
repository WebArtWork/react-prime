(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),i=e.i(91788);e.s(["CodeHighlight",0,function(e){let n=(0,i.useRef)(),s=`language-${e.lang||"jsx"}`;return(0,i.useEffect)(()=>{window.Prism.highlightElement(n.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:n,className:s,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),i=e.i(3935),n=e.i(58678),s=e.i(3828),l=e.i(91788),a=e.i(51551),o=e.i(72124),r=e.i(41158),c=e.i(87914),d=e.i(28137);let p=e=>{let n=(0,l.useContext)(c.default),{id:o,data:p,name:m,description:u,allowLink:h=!0}=e,x=o.startsWith("pt."),g=(0,s.useRouter)();if(a.ObjectUtils.isNotEmpty(p)){let s=Object.keys(p[0]),c=(e,t)=>{let i=document.getElementById(e);i&&i.parentElement.scrollIntoView({block:"start",behavior:t})},v=(e,n,s)=>{if(h&&e)return e.split("|").map((e,a)=>{if(e.includes(m)){let i=e.indexOf(m),n=e.substring(i).replace(/(\[|\]|<|>).*$/gm,"").trim(),s=m===n?`api.${m}`:`api.${m}.${n===`${m}Props`?"props":n}`;return(0,t.jsxs)(l.default.Fragment,{children:[0!==a?"|":"",(0,t.jsx)(r.default,{href:g.basePath+g.pathname+`#${s}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(s,"smooth"),children:e})})]},a)}return(0,t.jsxs)(l.default.Fragment,{children:[0!==a?"|":"",n?(0,t.jsxs)("span",{id:o+"."+e,className:(0,i.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[e,(0,t.jsx)(r.default,{href:g.basePath+g.pathname+`#${o+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(o+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},a)});let a=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return n?(0,t.jsxs)("span",{id:o+"."+a,className:(0,i.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[a,(0,t.jsx)(r.default,{href:g.basePath+g.pathname+`#${o+"."+a}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(o+"."+a),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):a},j=(0,t.jsx)(l.default.Fragment,{children:x?(0,t.jsx)("tr",{children:s.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:s.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),f=(0,t.jsx)(l.default.Fragment,{children:p.map((e,s)=>{if(x){let{value:i,label:n,description:l}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:n}),(0,t.jsx)("td",{children:l})]},s)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([s,l],o)=>"readonly"!==s&&"optional"!==s&&"deprecated"!==s&&(0,t.jsx)("td",{children:"parameters"===s?l.map((e,i)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:v(e.type)}),(0,t.jsx)("br",{})]},i)):"default"===s?(0,t.jsx)("div",{className:(0,i.classNames)("doc-option-default",{"doc-option-dark":n.darkMode,"doc-option-light":!n.darkMode}),children:a.ObjectUtils.isEmpty(l)?"null":v(l,"name"===s,e.deprecated)}):"type"===s?(0,t.jsx)("span",{className:"doc-option-type",children:v(l,"name"===s,e.deprecated)}):"returnType"===s?(0,t.jsx)("div",{className:(0,i.classNames)("doc-option-returnType",{"doc-option-dark":n.darkMode,"doc-option-light":!n.darkMode}),children:v(l,"name"===s,e.deprecated)}):"description"===s||"values"===s?(0,t.jsx)("span",{className:"doc-option-description",children:l}):v(l,"name"===s,e.deprecated)},o))},s)})});return(0,t.jsxs)(l.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:u})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:j}),(0,t.jsx)("tbody",{children:f})]})})]},o)}return null};e.s(["default",0,p],88850);var m=e.i(71864),u=e.i(38076);function h(e){let{doc:i,header:n}=e,s=e.apiExclude,r=i.reduce((e,i)=>{let n,l=i.split("."),r=(n=l[0])&&n[0].toUpperCase()+n.slice(1)||"",c=o.default[r.toLowerCase()],d=(e,t)=>s&&s[e]&&s[e].includes(t),m=e=>s&&s[e]&&"excludeAll"===s[e];if(c){let n=(e,i)=>{if(a.ObjectUtils.isNotEmpty(c.events)&&a.ObjectUtils.isNotEmpty(c.events.values)&&!m("events")){let n={id:`api.${i}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,s])=>{let[l,a]=[`api.${i}.${e}`,e];d("event",e)||n.children.push({id:l,label:a,component:e=>(0,t.jsx)(p,{name:i,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," See ",(0,t.jsx)("i",{children:s.relatedProp}),"."]}),...e})})}),e.push(n)}if(a.ObjectUtils.isNotEmpty(c.interfaces)&&a.ObjectUtils.isNotEmpty(c.interfaces.values)&&!m("interfaces")){let n={id:`api.${i}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,s])=>{let[l,a]=[`api.${i}.${e}`,e];d("interfaces",e)||n.children.push({id:l,label:a,component:e=>(0,t.jsx)(p,{name:i,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," ",s.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:s.extendedTypes}),"."]})]}),...e})})}),e.push(n)}if(a.ObjectUtils.isNotEmpty(c.types)&&a.ObjectUtils.isNotEmpty(c.types.values)&&!m("types")){let n={id:`api.${i}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,s])=>{let[l,a]=[`api.${i}.${e}`,e];d("types",e)||n.children.push({id:l,label:a,component:e=>(0,t.jsx)(p,{name:i,data:[s],allowLink:!1,...e})})}),e.push(n)}};if(3===l.length){let i=l[1],n=l[2];if("functions"===i){let s=c[i].values[n],l={id:`api.${r}`,label:r,children:[]},[o,d]=[`api.${r}.function`,"Function"],m=Object.entries(s).reduce((e,[t,i])=>("description"!==t&&(e[t]=i),e),{});l.children.push({id:o,label:d,component:e=>(0,t.jsx)(p,{name:r,data:[m],description:s.description,...e})});let u=s.parameters&&s.parameters.map(e=>e.type);if(a.ObjectUtils.isNotEmpty(c.interfaces)&&a.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${r}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([i,n])=>{if(u.includes(i)){let[s,l]=[`api.${r}.${i}`,i],o={id:s,label:l,description:(0,t.jsxs)(t.Fragment,{children:[n.description," ",n.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:n.extendedTypes}),"."]})]}),children:[]};a.ObjectUtils.isNotEmpty(n.props)&&o.children.push({id:`${s}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:n.props,...e})}),a.ObjectUtils.isNotEmpty(n.callbacks)&&o.children.push({id:`${s}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:n.callbacks,...e})}),e.children.push(o)}}),a.ObjectUtils.isNotEmpty(e.children)&&l.children.push(e)}e.push(l)}}else c.components&&Object.entries(c.components).forEach(([s,l])=>{let o={id:`api.${s}`,label:s,description:l.description,children:[]};if(a.ObjectUtils.isNotEmpty(l.props)&&a.ObjectUtils.isNotEmpty(l.props.values)&&!m("props")){let[e,i]=[`api.${s}.props`,"Props"];if(d("props",s))return;o.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:s,data:l.props.values,description:l.props.description,...e})})}if(a.ObjectUtils.isNotEmpty(l.callbacks)&&a.ObjectUtils.isNotEmpty(l.callbacks.values)&&!m("callbacks")){let[e,i]=[`api.${s}.callbacks`,"Callbacks"];if(d("callbacks",s))return;o.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:s,data:l.callbacks.values,description:l.callbacks.description,...e})})}if(a.ObjectUtils.isNotEmpty(l.methods)&&a.ObjectUtils.isNotEmpty(l.methods.values)&&!m("methods")){let[e,i]=[`api.${s}.methods`,"Methods"];if(d("methods",s))return;o.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:s,data:l.methods.values,description:l.methods.description,...e})})}s.toLocaleLowerCase()===i.toLowerCase()&&n(o.children,s),e.push(o)}),c.model&&Object.entries(c.model).forEach(([s,l])=>{let o={id:`api.${s}`,label:s,description:l.description,children:[]};if(a.ObjectUtils.isNotEmpty(l.props)&&a.ObjectUtils.isNotEmpty(l.props.values)&&!m("props")){let[e,i]=[`api.${s}.props`,"Props"];if(d("props",s))return;o.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:s,data:l.props.values,description:l.props.description,...e})})}s.toLocaleLowerCase()===i.toLowerCase()&&n(o.children,s),e.push(o)}),c.components||c.model||n(e,r)}return e},[]);return(0,l.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[n," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",n," module."]})]}),(0,t.jsx)(u.DocSections,{docs:r})]}),(0,t.jsx)(m.DocSectionNav,{docs:r})]})}e.s(["DocComponent",0,function(e){let a,[o,r]=(0,l.useState)(0),c=(0,s.useRouter)();a=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{r(e),c.replace(c.pathname)};return(0,l.useEffect)(()=>{c.asPath.includes("#api")&&r(1),c.asPath.includes("#pt")&&r(3)},[c.asPath]),(0,t.jsxs)("div",{className:(0,i.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":0===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:a})}),e.apiDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":1===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":2===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":3===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===o?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(u.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.componentDocs})]}):null,1===o?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===o?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(u.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===o?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(u.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(m.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},19982,e=>{"use strict";var t=e.i(91398),i=e.i(91788),n=e.i(10836),s=e.i(15498),l=e.i(60150),a=e.i(51551),o=e.i(3935);let r=`
@layer primereact {
    .p-card-header img {
        width: 100%;
    }
}
`,c=s.ComponentBase.extend({defaultProps:{__TYPE:"Card",id:null,header:null,footer:null,title:null,subTitle:null,style:null,className:null,children:void 0},css:{classes:{root:"p-card p-component",header:"p-card-header",title:"p-card-title",subTitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer",body:"p-card-body"},styles:r}}),d=i.forwardRef((e,r)=>{let d,p,m,u,h,x,g,v,j,f,b=(0,l.useMergeProps)(),N=i.useContext(n.PrimeReactContext),y=c.getProps(e,N),T=i.useRef(r),{ptm:w,cx:D,isUnstyled:C}=c.setMetaData({props:y});(0,s.useHandleStyle)(c.css.styles,C,{name:"card"}),i.useEffect(()=>{a.ObjectUtils.combinedRefs(T,r)},[T,r]);let k=b({id:y.id,ref:T,style:y.style,className:(0,o.classNames)(y.className,D("root"))},c.getOtherProps(y),w("root")),E=(d=b({className:D("header")},w("header")),y.header?(0,t.jsx)("div",{...d,children:a.ObjectUtils.getJSXElement(y.header,y)}):null),O=(p=b({className:D("title")},w("title")),m=y.title&&(0,t.jsx)("div",{...p,children:a.ObjectUtils.getJSXElement(y.title,y)}),u=b({className:D("subTitle")},w("subTitle")),h=y.subTitle&&(0,t.jsx)("div",{...u,children:a.ObjectUtils.getJSXElement(y.subTitle,y)}),x=b({className:D("content")},w("content")),g=y.children&&(0,t.jsx)("div",{...x,children:y.children}),v=b({className:D("footer")},w("footer")),j=y.footer&&(0,t.jsx)("div",{...v,children:a.ObjectUtils.getJSXElement(y.footer,y)}),f=b({className:D("body")},w("body")),(0,t.jsxs)("div",{...f,children:[m,h,g,j]}));return(0,t.jsxs)("div",{...k,children:[E,O]})});d.displayName="Card",e.s(["Card",0,d],19982)},3828,(e,t,i)=>{t.exports=e.r(26990)},28147,e=>{"use strict";var t=e.i(91398),i=e.i(88850),n=e.i(82948),s=e.i(28137);function l(){return(0,t.jsxs)(s.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsx)("p",{children:"Timeline uses a semantic ordered list element to list the events. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the list element."}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("p",{children:"Component does not include any interactive elements."})]})}var a=e.i(5180),o=e.i(91788),r=e.i(10836),c=e.i(15498),d=e.i(60150),p=e.i(3935),m=e.i(51551);let u=c.ComponentBase.extend({defaultProps:{__TYPE:"Timeline",align:"left",className:null,content:null,dataKey:null,layout:"vertical",marker:null,opposite:null,value:null,children:void 0},css:{classes:{marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",content:"p-timeline-event-content",root:({props:e})=>(0,p.classNames)("p-timeline p-component",{[`p-timeline-${e.align}`]:!0,[`p-timeline-${e.layout}`]:!0},e.className)},styles:`
        @layer primereact {
            .p-timeline {
                display: flex;
                flex-grow: 1;
                flex-direction: column;
            }
        
            .p-timeline-left .p-timeline-event-opposite {
                text-align: right;
            }
        
            .p-timeline-left .p-timeline-event-content {
                text-align: left;
            }
        
            .p-timeline-right .p-timeline-event {
                flex-direction: row-reverse;
            }
        
            .p-timeline-right .p-timeline-event-opposite {
                text-align: left;
            }
        
            .p-timeline-right .p-timeline-event-content {
                text-align: right;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
                flex-direction: row-reverse;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
                text-align: right;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
                text-align: left;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
                text-align: left;
            }
        
            .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
                text-align: right;
            }
        
            .p-timeline-event {
                display: flex;
                position: relative;
                min-height: 70px;
            }
        
            .p-timeline-event:last-child {
                min-height: 0;
            }
        
            .p-timeline-event-opposite {
                flex: 1;
                padding: 0 1rem;
            }
        
            .p-timeline-event-content {
                flex: 1;
                padding: 0 1rem;
            }
        
            .p-timeline-event-separator {
                flex: 0;
                display: flex;
                align-items: center;
                flex-direction: column;
            }
        
            .p-timeline-event-marker {
                display: flex;
                align-self: baseline;
            }
        
            .p-timeline-event-connector {
                flex-grow: 1;
            }
        
            .p-timeline-horizontal {
                flex-direction: row;
            }
        
            .p-timeline-horizontal .p-timeline-event {
                flex-direction: column;
                flex: 1;
            }
        
            .p-timeline-horizontal .p-timeline-event:last-child {
                flex: 0;
            }
        
            .p-timeline-horizontal .p-timeline-event-separator {
                flex-direction: row;
            }
        
            .p-timeline-horizontal .p-timeline-event-connector  {
                width: 100%;
            }
        
            .p-timeline-bottom .p-timeline-event {
                flex-direction: column-reverse;
            }
        
            .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
                flex-direction: column-reverse;
            }
        }
    `}}),h=o.memo(o.forwardRef((e,i)=>{let n=(0,d.useMergeProps)(),s=o.useContext(r.PrimeReactContext),l=u.getProps(e,s),{ptm:a,cx:h,isUnstyled:x}=u.setMetaData({props:l});(0,c.useHandleStyle)(u.css.styles,x,{name:"timeline"});let g=(e,t)=>a(e,{context:{index:t}}),v=o.useRef(null);o.useImperativeHandle(i,()=>({props:l,getElement:()=>v.current}));let j=l.value&&l.value.map((e,i)=>{let s=m.ObjectUtils.getJSXElement(l.opposite,e,i),a=n({className:h("marker")},g("marker",i)),o=m.ObjectUtils.getJSXElement(l.marker,e,i)||(0,t.jsx)("div",{...a}),r=n({className:h("connector")},g("connector",i)),c=i!==l.value.length-1&&(0,t.jsx)("div",{...r}),d=m.ObjectUtils.getJSXElement(l.content,e,i),p=n({className:h("event")},g("event",i)),u=n({className:h("opposite")},g("opposite",i)),x=n({className:h("separator")},g("separator",i)),v=n({className:h("content")},g("content",i));return(0,t.jsxs)("div",{...p,children:[(0,t.jsx)("div",{...u,children:s}),(0,t.jsxs)("div",{...x,children:[o,c]}),(0,t.jsx)("div",{...v,children:d})]},l.dataKey?m.ObjectUtils.resolveFieldData(e,l.dataKey):`pr_id__${i}`)}),f=n({ref:v,className:(0,p.classNames)(l.className,h("root"))},u.getOtherProps(l),a("root"));return(0,t.jsx)("div",{...f,children:j})}));function x(e){let i=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],n={basic:`
<Timeline value={events} content={(item) => item.status} className="w-full md:w-20rem" />
<Timeline value={events} align="right" content={(item) => item.status} className="w-full md:w-20rem" />
<Timeline value={events} align="alternate" content={(item) => item.status} className="w-full md:w-20rem" />
        `,javascript:`
import React from 'react'; 
import { Timeline } from 'primereact/timeline';

export default function AlignmentDemo() {
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div className="card flex flex-wrap gap-6">
            <Timeline value={events} content={(item) => item.status} className="w-full md:w-20rem" />
            <Timeline value={events} align="right" content={(item) => item.status} className="w-full md:w-20rem" />
            <Timeline value={events} align="alternate" content={(item) => item.status} className="w-full md:w-20rem" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Timeline } from 'primereact/timeline';

interface TimelineEvent {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

export default function AlignmentDemo() {
    const events: TimelineEvent[] = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div className="card flex flex-wrap gap-6">
            <Timeline value={events} content={(item) => item.status} className="w-full md:w-20rem" />
            <Timeline value={events} align="right" content={(item) => item.status} className="w-full md:w-20rem" />
            <Timeline value={events} align="alternate" content={(item) => item.status} className="w-full md:w-20rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Content location relative the line is defined with the ",(0,t.jsx)("i",{children:"align"})," property."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap gap-6",children:[(0,t.jsx)(h,{value:i,content:e=>e.status,className:"w-full md:w-20rem"}),(0,t.jsx)(h,{value:i,align:"right",content:e=>e.status,className:"w-full md:w-20rem"}),(0,t.jsx)(h,{value:i,align:"alternate",content:e=>e.status,className:"w-full md:w-20rem"})]}),(0,t.jsx)(a.DocSectionCode,{code:n})]})}function g(e){let i={basic:`
<Timeline value={events} content={(item) => item.status} />
        `,javascript:`
import React from 'react'; 
import { Timeline } from 'primereact/timeline';

export default function BasicDemo() {
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div className="card">
            <Timeline value={events} content={(item) => item.status} />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Timeline } from 'primereact/timeline';

interface TimelineEvent {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

export default function BasicDemo() {
    const events: TimelineEvent[] = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div className="card">
            <Timeline value={events} content={(item) => item.status} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Timeline requires a ",(0,t.jsx)("i",{children:"value"})," for the collection of events and ",(0,t.jsx)("i",{children:"content"})," function that receives an object as a parameter to return content."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(h,{value:[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],content:e=>e.status})}),(0,t.jsx)(a.DocSectionCode,{code:i})]})}function v(e){let i=["2020","2021","2022","2023"],n={basic:`
<Timeline value={events} layout="horizontal" align="top" content={(item) => item} />
<Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />
<Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
        `,javascript:`
import React from 'react'; 
import { Timeline } from 'primereact/timeline';

export default function HorizontalDemo() {
    const events = ['2020', '2021', '2022', '2023'];

    return (
        <div className="card flex flex-column gap-3">
            <Timeline value={events} layout="horizontal" align="top" content={(item) => item} />
            <Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />
            <Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Timeline } from 'primereact/timeline';

export default function HorizontalDemo() {
    const events: string[] = ['2020', '2021', '2022', '2023'];

    return (
        <div className="card flex flex-column gap-3">
            <Timeline value={events} layout="horizontal" align="top" content={(item) => item} />
            <Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />
            <Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["TimeLine orientation is controlled with the ",(0,t.jsx)("i",{children:"layout"})," property, default is ",(0,t.jsx)("i",{children:"vertical"})," having ",(0,t.jsx)("i",{children:"horizontal"})," as the alternative."]})}),(0,t.jsxs)("div",{className:"card flex flex-column gap-3",children:[(0,t.jsx)(h,{value:i,layout:"horizontal",align:"top",content:e=>e}),(0,t.jsx)(h,{value:i,layout:"horizontal",align:"bottom",content:e=>e}),(0,t.jsx)(h,{value:i,layout:"horizontal",align:"alternate",content:e=>e,opposite:(0,t.jsx)("span",{children:" "})})]}),(0,t.jsx)(a.DocSectionCode,{code:n})]})}function j(e){let i={basic:`
import { Timeline } from 'primereact/timeline';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)(a.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function f(e){let i={basic:`
<Timeline value={events} opposite={(item) => item.status} 
    content={(item) => <small className="text-color-secondary">{item.date}</small>} />
        `,javascript:`
import React from 'react'; 
import { Timeline } from 'primereact/timeline';

export default function OppositeDemo() {
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div className="card">
            <Timeline value={events} opposite={(item) => item.status} content={(item) => <small className="text-color-secondary">{item.date}</small>} />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Timeline } from 'primereact/timeline';

interface TimelineEvent {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

export default function OppositeDemo() {
    const events: TimelineEvent[] = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div className="card">
            <Timeline value={events} opposite={(item) => item.status} content={(item) => <small className="text-color-secondary">{item.date}</small>} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Additional content at the other side of the line can be provided with the ",(0,t.jsx)("i",{children:"opposite"})," property."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(h,{value:[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],opposite:e=>e.status,content:e=>(0,t.jsx)("small",{className:"text-color-secondary",children:e.date})})}),(0,t.jsx)(a.DocSectionCode,{code:i})]})}h.displayName="Timeline";let b=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/timeline.jpg",alt:"timeline"})})]});var N=e.i(57724),y=e.i(19982);function T(e){let i={basic:`
<Timeline value={events} align="alternate" className="customized-timeline" 
    marker={customizedMarker} content={customizedContent} />
        `,javascript:`
import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './TimelineDemo.css';

export default function TemplateDemo() {
        const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} width={200} className="shadow-1" />}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                <Button label="Read more" className="p-button-text"></Button>
            </Card>
        );
    };
        
    return (
        <div className="card">
            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './TimelineDemo.css';

interface TimelineEvent {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

export default function TemplateDemo() {
    const events: TimelineEvent[] = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];

    const customizedMarker = (item: TimelineEvent) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item: TimelineEvent) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.image} width={200} className="shadow-1" />}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                <Button label="Read more" className="p-button-text"></Button>
            </Card>
        );
    };

    return (
        <div className="card">
            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>
    )
}
        `,extFiles:{"TimelineDemo.css":`
@media screen and (max-width: 991px) {
    .customized-timeline .p-timeline-event:nth-child(even) {
        flex-direction: row !important;
    }
    .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: left !important;
    }
    .customized-timeline .p-timeline-event-opposite {
        flex: 0;
    }
    .customized-timeline .p-card {
        margin-top: 1rem;
    }
}
    `}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Sample implementation with custom content and styled markers."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(h,{value:[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}],align:"alternate",className:"customized-timeline",marker:e=>(0,t.jsx)("span",{className:"flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1",style:{backgroundColor:e.color},children:(0,t.jsx)("i",{className:e.icon})}),content:e=>(0,t.jsxs)(y.Card,{title:e.status,subTitle:e.date,children:[e.image&&(0,t.jsx)("img",{src:`https://primefaces.org/cdn/primereact/images/product/${e.image}`,alt:e.name,width:200,className:"shadow-1"}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"}),(0,t.jsx)(N.Button,{label:"Read more",className:"p-button-text"})]})})}),(0,t.jsx)(a.DocSectionCode,{code:i})]})}function w(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-timeline"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-timeline-left"}),(0,t.jsx)("td",{children:"Container element when alignment is left."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-timeline-right"}),(0,t.jsx)("td",{children:"Container element when alignment is right."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-timeline-top"}),(0,t.jsx)("td",{children:"Container element when alignment is top."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-timeline-bottom"}),(0,t.jsx)("td",{children:"Container element when alignment is bottom."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-timeline-alternate"}),(0,t.jsx)("td",{children:"Container element when alignment is alternating."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-timeline-vertical"}),(0,t.jsx)("td",{children:"Container element of a vertical timeline."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-timeline-horizontal"}),(0,t.jsx)("td",{children:"Container element of a horizontal timeline."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-timeline-event"}),(0,t.jsx)("td",{children:"Event element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-timeline-event-opposite"}),(0,t.jsx)("td",{children:"Opposite of an event content."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-timeline-event-content"}),(0,t.jsx)("td",{children:"Event content."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-timeline-event-separator"}),(0,t.jsx)("td",{children:"Separator element of an event."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-timeline-event-marker"}),(0,t.jsx)("td",{children:"Marker element of an event."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-timeline-event-connector"}),(0,t.jsx)("td",{children:"Connector element of an event."})]})]})]})})]})}var D=e.i(41158);function C(e){let i={basic:`
const Tailwind = {
    timeline: {
        root: ({ props }) => ({
            className: classNames('flex grow', {
                'flex-col': props.layout === 'vertical',
                'flex-row flex-1': props.layout === 'horizontal'
            })
        }),
        event: ({ props, context }) => ({
            className: classNames('flex relative min-h-[70px]', {
                'flex-row-reverse': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1),
                'flex-col flex-1': props.layout === 'horizontal',
                'flex-col-reverse ': props.align === 'bottom' || (props.layout === 'horizontal' && props.align === 'alternate' && context.index % 2 === 1)
            })
        }),
        opposite: ({ props, context }) => ({
            className: classNames(
                'flex-1',
                {
                    'px-4': props.layout === 'vertical',
                    'py-4': props.layout === 'horizontal'
                },
                {
                    'text-right': props.align === 'left' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 0),
                    'text-left': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1)
                }
            )
        }),
        separator: ({ props }) => ({
            className: classNames('flex items-center flex-initial', {
                'flex-col': props.layout === 'vertical',
                'flex-row': props.layout === 'horizontal'
            })
        }),
        marker: 'flex self-baseline w-4 h-4 rounded-full border-2 border-blue-500 bg-white dark:border-blue-300 dark:bg-blue-900/40',
        connector: ({ props }) => ({
            className: classNames('grow bg-gray-300 dark:bg-blue-900/40', {
                'w-[2px]': props.layout === 'vertical',
                'w-full h-[2px]': props.layout === 'horizontal'
            })
        }),
        content: ({ props, context }) => ({
            className: classNames(
                'flex-1',
                {
                    'px-4': props.layout === 'vertical',
                    'py-4': props.layout === 'horizontal'
                },
                {
                    'text-left': props.align === 'left' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 0),
                    'text-right': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1)
                },
                {
                    'min-h-0': props.layout === 'vertical' && context.index === context.count,
                    'grow-0': props.layout === 'horizontal' && context.index === context.count
                }
            )
        })
    }
}
        `},n={javascript:`
import React from 'react'; 
import { Timeline } from 'primereact/timeline';

export default function UnstyledDemo() {
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div className="card flex flex-wrap gap-6">
            <Timeline value={events} content={(item) => item.status} className="w-full md:w-20rem" />
            <Timeline value={events} align="right" content={(item) => item.status} className="w-full md:w-20rem" />
            <Timeline value={events} align="alternate" content={(item) => item.status} className="w-full md:w-20rem" />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(D.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(a.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(a.DocSectionCode,{code:n,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:b},{id:"pt.timeline.options",label:"Timeline PT Options",component:i.default}];return(0,t.jsx)(n.DocComponent,{title:"React Timeline Component",header:"Timeline",description:"Timeline visualizes a series of chained events.",componentDocs:[{id:"import",label:"Import",component:j},{id:"basic",label:"Basic",component:g},{id:"alignment",label:"Alignment",component:x},{id:"opposite",label:"Opposite",component:f},{id:"template",label:"Template",component:T},{id:"horizontal",label:"Horizontal",component:v},{id:"accessibility",label:"Accessibility",component:l}],apiDocs:["Timeline"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:w},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:C}]}]})}],28147)},56828,(e,t,i)=>{let n="/timeline";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(28147)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);