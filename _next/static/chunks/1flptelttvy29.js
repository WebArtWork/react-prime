(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),i=e.i(91788);e.s(["CodeHighlight",0,function(e){let o=(0,i.useRef)(),s=`language-${e.lang||"jsx"}`;return(0,i.useEffect)(()=>{window.Prism.highlightElement(o.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:o,className:s,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),i=e.i(3935),o=e.i(58678),s=e.i(3828),n=e.i(91788),r=e.i(51551),a=e.i(72124),c=e.i(41158),l=e.i(87914),d=e.i(28137);let p=e=>{let o=(0,n.useContext)(l.default),{id:a,data:p,name:h,description:m,allowLink:u=!0}=e,x=a.startsWith("pt."),j=(0,s.useRouter)();if(r.ObjectUtils.isNotEmpty(p)){let s=Object.keys(p[0]),l=(e,t)=>{let i=document.getElementById(e);i&&i.parentElement.scrollIntoView({block:"start",behavior:t})},f=(e,o,s)=>{if(u&&e)return e.split("|").map((e,r)=>{if(e.includes(h)){let i=e.indexOf(h),o=e.substring(i).replace(/(\[|\]|<|>).*$/gm,"").trim(),s=h===o?`api.${h}`:`api.${h}.${o===`${h}Props`?"props":o}`;return(0,t.jsxs)(n.default.Fragment,{children:[0!==r?"|":"",(0,t.jsx)(c.default,{href:j.basePath+j.pathname+`#${s}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>l(s,"smooth"),children:e})})]},r)}return(0,t.jsxs)(n.default.Fragment,{children:[0!==r?"|":"",o?(0,t.jsxs)("span",{id:a+"."+e,className:(0,i.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[e,(0,t.jsx)(c.default,{href:j.basePath+j.pathname+`#${a+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>l(a+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},r)});let r=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return o?(0,t.jsxs)("span",{id:a+"."+r,className:(0,i.classNames)("doc-option-name",{"line-through cursor-pointer":!!s}),title:s,children:[r,(0,t.jsx)(c.default,{href:j.basePath+j.pathname+`#${a+"."+r}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>l(a+"."+r),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):r},b=(0,t.jsx)(n.default.Fragment,{children:x?(0,t.jsx)("tr",{children:s.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:s.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),v=(0,t.jsx)(n.default.Fragment,{children:p.map((e,s)=>{if(x){let{value:i,label:o,description:n}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:o}),(0,t.jsx)("td",{children:n})]},s)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([s,n],a)=>"readonly"!==s&&"optional"!==s&&"deprecated"!==s&&(0,t.jsx)("td",{children:"parameters"===s?n.map((e,i)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:f(e.type)}),(0,t.jsx)("br",{})]},i)):"default"===s?(0,t.jsx)("div",{className:(0,i.classNames)("doc-option-default",{"doc-option-dark":o.darkMode,"doc-option-light":!o.darkMode}),children:r.ObjectUtils.isEmpty(n)?"null":f(n,"name"===s,e.deprecated)}):"type"===s?(0,t.jsx)("span",{className:"doc-option-type",children:f(n,"name"===s,e.deprecated)}):"returnType"===s?(0,t.jsx)("div",{className:(0,i.classNames)("doc-option-returnType",{"doc-option-dark":o.darkMode,"doc-option-light":!o.darkMode}),children:f(n,"name"===s,e.deprecated)}):"description"===s||"values"===s?(0,t.jsx)("span",{className:"doc-option-description",children:n}):f(n,"name"===s,e.deprecated)},a))},s)})});return(0,t.jsxs)(n.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:m})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:b}),(0,t.jsx)("tbody",{children:v})]})})]},a)}return null};e.s(["default",0,p],88850);var h=e.i(71864),m=e.i(38076);function u(e){let{doc:i,header:o}=e,s=e.apiExclude,c=i.reduce((e,i)=>{let o,n=i.split("."),c=(o=n[0])&&o[0].toUpperCase()+o.slice(1)||"",l=a.default[c.toLowerCase()],d=(e,t)=>s&&s[e]&&s[e].includes(t),h=e=>s&&s[e]&&"excludeAll"===s[e];if(l){let o=(e,i)=>{if(r.ObjectUtils.isNotEmpty(l.events)&&r.ObjectUtils.isNotEmpty(l.events.values)&&!h("events")){let o={id:`api.${i}.events`,label:"Events",description:l.events.description,children:[]};Object.entries(l.events.values).forEach(([e,s])=>{let[n,r]=[`api.${i}.${e}`,e];d("event",e)||o.children.push({id:n,label:r,component:e=>(0,t.jsx)(p,{name:i,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," See ",(0,t.jsx)("i",{children:s.relatedProp}),"."]}),...e})})}),e.push(o)}if(r.ObjectUtils.isNotEmpty(l.interfaces)&&r.ObjectUtils.isNotEmpty(l.interfaces.values)&&!h("interfaces")){let o={id:`api.${i}.interfaces`,label:"Interfaces",description:l.interfaces.description,children:[]};Object.entries(l.interfaces.values).forEach(([e,s])=>{let[n,r]=[`api.${i}.${e}`,e];d("interfaces",e)||o.children.push({id:n,label:r,component:e=>(0,t.jsx)(p,{name:i,data:s.props,description:(0,t.jsxs)(t.Fragment,{children:[s.description," ",s.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:s.extendedTypes}),"."]})]}),...e})})}),e.push(o)}if(r.ObjectUtils.isNotEmpty(l.types)&&r.ObjectUtils.isNotEmpty(l.types.values)&&!h("types")){let o={id:`api.${i}.types`,label:"Types",description:l.types.description,children:[]};Object.entries(l.types.values).forEach(([e,s])=>{let[n,r]=[`api.${i}.${e}`,e];d("types",e)||o.children.push({id:n,label:r,component:e=>(0,t.jsx)(p,{name:i,data:[s],allowLink:!1,...e})})}),e.push(o)}};if(3===n.length){let i=n[1],o=n[2];if("functions"===i){let s=l[i].values[o],n={id:`api.${c}`,label:c,children:[]},[a,d]=[`api.${c}.function`,"Function"],h=Object.entries(s).reduce((e,[t,i])=>("description"!==t&&(e[t]=i),e),{});n.children.push({id:a,label:d,component:e=>(0,t.jsx)(p,{name:c,data:[h],description:s.description,...e})});let m=s.parameters&&s.parameters.map(e=>e.type);if(r.ObjectUtils.isNotEmpty(l.interfaces)&&r.ObjectUtils.isNotEmpty(l.interfaces.values)){let e={id:`api.${c}.interfaces`,label:"Interfaces",description:l.interfaces.description,children:[]};Object.entries(l.interfaces.values).forEach(([i,o])=>{if(m.includes(i)){let[s,n]=[`api.${c}.${i}`,i],a={id:s,label:n,description:(0,t.jsxs)(t.Fragment,{children:[o.description," ",o.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:o.extendedTypes}),"."]})]}),children:[]};r.ObjectUtils.isNotEmpty(o.props)&&a.children.push({id:`${s}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:o.props,...e})}),r.ObjectUtils.isNotEmpty(o.callbacks)&&a.children.push({id:`${s}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:o.callbacks,...e})}),e.children.push(a)}}),r.ObjectUtils.isNotEmpty(e.children)&&n.children.push(e)}e.push(n)}}else l.components&&Object.entries(l.components).forEach(([s,n])=>{let a={id:`api.${s}`,label:s,description:n.description,children:[]};if(r.ObjectUtils.isNotEmpty(n.props)&&r.ObjectUtils.isNotEmpty(n.props.values)&&!h("props")){let[e,i]=[`api.${s}.props`,"Props"];if(d("props",s))return;a.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:s,data:n.props.values,description:n.props.description,...e})})}if(r.ObjectUtils.isNotEmpty(n.callbacks)&&r.ObjectUtils.isNotEmpty(n.callbacks.values)&&!h("callbacks")){let[e,i]=[`api.${s}.callbacks`,"Callbacks"];if(d("callbacks",s))return;a.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:s,data:n.callbacks.values,description:n.callbacks.description,...e})})}if(r.ObjectUtils.isNotEmpty(n.methods)&&r.ObjectUtils.isNotEmpty(n.methods.values)&&!h("methods")){let[e,i]=[`api.${s}.methods`,"Methods"];if(d("methods",s))return;a.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:s,data:n.methods.values,description:n.methods.description,...e})})}s.toLocaleLowerCase()===i.toLowerCase()&&o(a.children,s),e.push(a)}),l.model&&Object.entries(l.model).forEach(([s,n])=>{let a={id:`api.${s}`,label:s,description:n.description,children:[]};if(r.ObjectUtils.isNotEmpty(n.props)&&r.ObjectUtils.isNotEmpty(n.props.values)&&!h("props")){let[e,i]=[`api.${s}.props`,"Props"];if(d("props",s))return;a.children.push({id:e,label:i,component:e=>(0,t.jsx)(p,{name:s,data:n.props.values,description:n.props.description,...e})})}s.toLocaleLowerCase()===i.toLowerCase()&&o(a.children,s),e.push(a)}),l.components||l.model||o(e,c)}return e},[]);return(0,n.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[o," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",o," module."]})]}),(0,t.jsx)(m.DocSections,{docs:c})]}),(0,t.jsx)(h.DocSectionNav,{docs:c})]})}e.s(["DocComponent",0,function(e){let r,[a,c]=(0,n.useState)(0),l=(0,s.useRouter)();r=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{c(e),l.replace(l.pathname)};return(0,n.useEffect)(()=>{l.asPath.includes("#api")&&c(1),l.asPath.includes("#pt")&&c(3)},[l.asPath]),(0,t.jsxs)("div",{className:(0,i.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(o.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":0===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:r})}),e.apiDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":1===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":2===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,i.classNames)({"doc-tabmenu-active":3===a}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===a?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.componentDocs})]}):null,1===a?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(u,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===a?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===a?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},97517,50693,81647,73856,e=>{"use strict";var t=e.i(91398),i=e.i(5180),o=e.i(28137);e.s(["AddLocaleDoc",0,function(e){let s={basic:`
addLocale('es', {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'mi\xe9rcoles', 'jueves', 'viernes', 's\xe1bado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mi\xe9', 'jue', 'vie', 's\xe1b'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Limpiar',
    //...
});
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["New locale settings can be added using ",(0,t.jsx)("i",{children:"addLocale"})," method."]})}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}],97517);var s=e.i(41158);e.s(["ImportDoc",0,function(e){let n={basic:`
import { locale, addLocale, updateLocaleOption, updateLocaleOptions, localeOption, localeOptions } from 'primereact/api';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Configuration is managed by the ",(0,t.jsx)(s.default,{href:"/configuration/#api.API.LocaleOptions",children:"Locale API"})," imported from ",(0,t.jsx)("i",{children:"primereact/api"}),"."]})}),(0,t.jsx)(i.DocSectionCode,{code:n,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}],50693),e.s(["RepositoryDoc",0,function(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Ready to use settings for locales are available at the community supported ",(0,t.jsx)("a",{href:"https://github.com/primefaces/primelocale",children:"PrimeLocale"})," repository. We'd appreciate if you could contribute to this repository with pull requests and share it with the rest of the community."]})})})}],81647),e.s(["SetLocaleDoc",0,function(e){let s={basic:`
locale('en');
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["An available locale can be set with ",(0,t.jsx)("i",{children:"locale"})," method at anytime."]})}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}],73856)},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},3828,(e,t,i)=>{t.exports=e.r(26990)},48114,e=>{"use strict";var t=e.i(91398),i=e.i(82948),o=e.i(5180),s=e.i(28137);function n(e){let i={basic:`
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        appendTo: 'self',
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["For components with an overlay like a dropdown, popups can be mounted either into the component or DOM element instance using this option. Valid values are any DOM Element like document body and ",(0,t.jsx)("i",{children:"self"}),". By default all popups are appended to document body via Portals."]})}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function r(e){let i={basic:`
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        cssTransition: false,
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["PrimeReact components utilize ",(0,t.jsx)("a",{href:"https://www.npmjs.com/package/react-transition-group",children:"react-transition-group"})," internally to implement animations. Setting ",(0,t.jsx)("i",{children:"cssTransition"})," to false disables all animations."]})}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function a(e){let i={basic:`
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        filterMatchMode: {
            text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
            numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
            date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
         },
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Default filter modes to display on DataTable filter menus."})}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function c(e){let i={basic:`
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        hideOverlaysOnDocumentScrolling: true,
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}

//_app.css
body {
  margin: 0px;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Define behavior if the browser window is scrolled while displaying an overlay panel like a Dropdown or Calendar. Depending on your organization's accessibility needs some prefer panels to be closed on scrolling and some prefer the overlay follow the scroll. Default value is false. IMPORTANT: Your ",(0,t.jsx)("i",{children:"document.body"})," must have ",(0,t.jsx)("i",{children:"overflow"})," CSS on this to work properly."]})}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function l(e){let i={basic:`
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        inputStyle: 'filled',
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Input fields come in two styles, default is ",(0,t.jsx)("i",{children:"outlined"})," with borders around the field whereas ",(0,t.jsx)("i",{children:"filled"})," alternative adds a background color to the field. Applying ",(0,t.jsx)("i",{children:"p-input-filled"})," to an ancestor of an input enables the filled style. If you prefer to use filled inputs in the entire application, use a global container such as the document body or the application element to apply the style class. Note that in case you add it to the application element, components that are teleported to the document body such as Dialog will not be able to display filled inputs as they are not a descendant of the application root element in the DOM tree, to resolve this case set inputStyle to ",(0,t.jsx)("i",{children:"filled"})," at PrimeReact configuration as well."]})}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}var d=e.i(97517),p=e.i(50693),h=e.i(81647),m=e.i(73856);function u(e){let i={basic:`
// _app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        locale: 'de',
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <Component />
        </PrimeReactProvider>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["To establish the default locale for your entire application, you can utilize the",(0,t.jsx)("i",{children:" PrimeReactProvider"}),"."]}),(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("b",{children:"PrimeReactProvider"})," is used, it becomes the primary source of locale configuration for all PrimeReact components."]}),(0,t.jsx)("h5",{children:"Locale Precedence"}),(0,t.jsx)("p",{children:"Locale resolution follows the order below:"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"locale"})," prop defined on a component"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("code",{children:"PrimeReactProvider"})," (",(0,t.jsx)("code",{children:"context.locale"}),")"]}),(0,t.jsxs)("li",{children:["Global ",(0,t.jsx)("code",{children:"PrimeReact.locale"})," set via ",(0,t.jsx)("code",{children:"locale()"})]}),(0,t.jsx)("li",{children:"Browser locale"})]}),(0,t.jsxs)("p",{children:["This means that once ",(0,t.jsx)("b",{children:"PrimeReactProvider"})," is present, calling",(0,t.jsx)("code",{children:" locale()"})," alone is not sufficient. The locale must be provided explicitly through the provider."]})]}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function x(e){let i={basic:`
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        nonce: '.........',
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce",children:"nonce"})," value to use on dynamically generated style elements."]})}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function j(e){let i={basic:`
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        nullSortOrder: 1,
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Determines how ",(0,t.jsx)("i",{children:"null"})," values are sorted. The default value of ",(0,t.jsx)("i",{children:"1"})," means sort like Excel with all NULL values at the bottom of the list. A value of ",(0,t.jsx)("i",{children:"-1"})," sorts NULL at the top of the list in ascending mode and at the bottom of the list in descending mode."]})}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function f(e){let i={basic:`
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        ripple: true,
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Ripple is an optional animation for the supported components such as buttons. It is disabled by default."})}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function b(e){let i={basic:`
//_app.js
import { PrimeReactProvider } from 'primereact/api';

root.attachShadow({ mode: 'open' }); // Open the shadowRoot
const mountHere = root.shadowRoot;

const options = { appendTo: mountHere, styleContainer: mountHere};

ReactDOM.createRoot(mountHere).render(
  <React.StrictMode>
    <PrimeReactProvider value={options}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["This option allows ",(0,t.jsx)("i",{children:"useStyle"})," to insert dynamic CSS styles into a specific container. This is useful when styles need to be scoped such as in a"," ",(0,t.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM",target:"_blank",children:"Shadow DOM"}),". By default all dynamic styles are appended to ",(0,t.jsx)("i",{children:"document.head"}),"."]})}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function v(e){let i={basic:`
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        zIndex: {
            modal: 1100,    // dialog, sidebar
            overlay: 1000,  // dropdown, overlaypanel
            menu: 1000,     // overlay menus
            tooltip: 1100   // tooltip
            toast: 1200     // toast
        },
        autoZIndex: true,
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["ZIndexes are managed automatically to make sure layering of overlay components work seamlessly when combining multiple components. Still there may be cases where you'd like to configure the configure default values such as a custom layout where header section is fixed. In a case like this, dropdown needs to be displayed below the application header but a modal dialog should be displayed above. PrimeReact configuration offers the ",(0,t.jsx)("i",{children:"zIndex"})," property to customize the default values for components categories. Default values are described below and can be customized when setting up the context value."]}),(0,t.jsxs)("p",{children:["The ZIndex of all components is increased according to their groups in harmony with each other. When ",(0,t.jsx)("i",{children:"autoZIndex"})," is false, each group increments its zIndex within itself."]})]}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}e.s(["default",0,()=>{let e=[{id:"appendto",label:"AppendTo",component:n},{id:"stylecontainer",label:"StyleContainer",component:b},{id:"csstransition",label:"CSS Transition",component:r},{id:"filtermatchmode",label:"Filter Mode",component:a},{id:"hideoverlays",label:"Hide Overlays on Viewport Change",component:c},{id:"inputstyle",label:"InputStyle",component:l},{id:"nonce",label:"Nonce",component:x},{id:"nullsortorder",label:"Null Sort Order",component:j},{id:"ripple",label:"Ripple",component:f},{id:"zindex",label:"ZIndex",component:v},{id:"Locale",label:"Locale",children:[{id:"setup",label:"Setup",component:u},{id:"import",label:"Import",component:p.ImportDoc},{id:"setlocale",label:"Set Locale",component:m.SetLocaleDoc},{id:"addlocale",label:"Add Locale",component:d.AddLocaleDoc},{id:"repositorydoc",label:"Repository",component:h.RepositoryDoc}]}];return(0,t.jsx)(i.DocComponent,{title:"Configuration - PrimeReact",header:"Configuration",description:"Global configuration options of the components.",componentDocs:e,apiDocs:["API"],apiExclude:{interfaces:["PrimeIconsOptions"],types:"excludeAll"}})}],48114)},7603,(e,t,i)=>{let o="/configuration";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(48114)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})}]);