(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),s=e.i(91788);e.s(["CodeHighlight",0,function(e){let i=(0,s.useRef)(),a=`language-${e.lang||"jsx"}`;return(0,s.useEffect)(()=>{window.Prism.highlightElement(i.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:i,className:a,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),s=e.i(3935),i=e.i(58678),a=e.i(3828),n=e.i(91788),r=e.i(51551),o=e.i(72124),l=e.i(41158),c=e.i(87914),d=e.i(28137);let p=e=>{let i=(0,n.useContext)(c.default),{id:o,data:p,name:h,description:m,allowLink:u=!0}=e,x=o.startsWith("pt."),g=(0,a.useRouter)();if(r.ObjectUtils.isNotEmpty(p)){let a=Object.keys(p[0]),c=(e,t)=>{let s=document.getElementById(e);s&&s.parentElement.scrollIntoView({block:"start",behavior:t})},j=(e,i,a)=>{if(u&&e)return e.split("|").map((e,r)=>{if(e.includes(h)){let s=e.indexOf(h),i=e.substring(s).replace(/(\[|\]|<|>).*$/gm,"").trim(),a=h===i?`api.${h}`:`api.${h}.${i===`${h}Props`?"props":i}`;return(0,t.jsxs)(n.default.Fragment,{children:[0!==r?"|":"",(0,t.jsx)(l.default,{href:g.basePath+g.pathname+`#${a}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(a,"smooth"),children:e})})]},r)}return(0,t.jsxs)(n.default.Fragment,{children:[0!==r?"|":"",i?(0,t.jsxs)("span",{id:o+"."+e,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!a}),title:a,children:[e,(0,t.jsx)(l.default,{href:g.basePath+g.pathname+`#${o+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(o+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},r)});let r=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return i?(0,t.jsxs)("span",{id:o+"."+r,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!a}),title:a,children:[r,(0,t.jsx)(l.default,{href:g.basePath+g.pathname+`#${o+"."+r}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>c(o+"."+r),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):r},f=(0,t.jsx)(n.default.Fragment,{children:x?(0,t.jsx)("tr",{children:a.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:a.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),b=(0,t.jsx)(n.default.Fragment,{children:p.map((e,a)=>{if(x){let{value:s,label:i,description:n}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:s}),(0,t.jsx)("td",{children:i}),(0,t.jsx)("td",{children:n})]},a)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([a,n],o)=>"readonly"!==a&&"optional"!==a&&"deprecated"!==a&&(0,t.jsx)("td",{children:"parameters"===a?n.map((e,s)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:j(e.type)}),(0,t.jsx)("br",{})]},s)):"default"===a?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-default",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:r.ObjectUtils.isEmpty(n)?"null":j(n,"name"===a,e.deprecated)}):"type"===a?(0,t.jsx)("span",{className:"doc-option-type",children:j(n,"name"===a,e.deprecated)}):"returnType"===a?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-returnType",{"doc-option-dark":i.darkMode,"doc-option-light":!i.darkMode}),children:j(n,"name"===a,e.deprecated)}):"description"===a||"values"===a?(0,t.jsx)("span",{className:"doc-option-description",children:n}):j(n,"name"===a,e.deprecated)},o))},a)})});return(0,t.jsxs)(n.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:m})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:f}),(0,t.jsx)("tbody",{children:b})]})})]},o)}return null};e.s(["default",0,p],88850);var h=e.i(71864),m=e.i(38076);function u(e){let{doc:s,header:i}=e,a=e.apiExclude,l=s.reduce((e,s)=>{let i,n=s.split("."),l=(i=n[0])&&i[0].toUpperCase()+i.slice(1)||"",c=o.default[l.toLowerCase()],d=(e,t)=>a&&a[e]&&a[e].includes(t),h=e=>a&&a[e]&&"excludeAll"===a[e];if(c){let i=(e,s)=>{if(r.ObjectUtils.isNotEmpty(c.events)&&r.ObjectUtils.isNotEmpty(c.events.values)&&!h("events")){let i={id:`api.${s}.events`,label:"Events",description:c.events.description,children:[]};Object.entries(c.events.values).forEach(([e,a])=>{let[n,r]=[`api.${s}.${e}`,e];d("event",e)||i.children.push({id:n,label:r,component:e=>(0,t.jsx)(p,{name:s,data:a.props,description:(0,t.jsxs)(t.Fragment,{children:[a.description," See ",(0,t.jsx)("i",{children:a.relatedProp}),"."]}),...e})})}),e.push(i)}if(r.ObjectUtils.isNotEmpty(c.interfaces)&&r.ObjectUtils.isNotEmpty(c.interfaces.values)&&!h("interfaces")){let i={id:`api.${s}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([e,a])=>{let[n,r]=[`api.${s}.${e}`,e];d("interfaces",e)||i.children.push({id:n,label:r,component:e=>(0,t.jsx)(p,{name:s,data:a.props,description:(0,t.jsxs)(t.Fragment,{children:[a.description," ",a.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:a.extendedTypes}),"."]})]}),...e})})}),e.push(i)}if(r.ObjectUtils.isNotEmpty(c.types)&&r.ObjectUtils.isNotEmpty(c.types.values)&&!h("types")){let i={id:`api.${s}.types`,label:"Types",description:c.types.description,children:[]};Object.entries(c.types.values).forEach(([e,a])=>{let[n,r]=[`api.${s}.${e}`,e];d("types",e)||i.children.push({id:n,label:r,component:e=>(0,t.jsx)(p,{name:s,data:[a],allowLink:!1,...e})})}),e.push(i)}};if(3===n.length){let s=n[1],i=n[2];if("functions"===s){let a=c[s].values[i],n={id:`api.${l}`,label:l,children:[]},[o,d]=[`api.${l}.function`,"Function"],h=Object.entries(a).reduce((e,[t,s])=>("description"!==t&&(e[t]=s),e),{});n.children.push({id:o,label:d,component:e=>(0,t.jsx)(p,{name:l,data:[h],description:a.description,...e})});let m=a.parameters&&a.parameters.map(e=>e.type);if(r.ObjectUtils.isNotEmpty(c.interfaces)&&r.ObjectUtils.isNotEmpty(c.interfaces.values)){let e={id:`api.${l}.interfaces`,label:"Interfaces",description:c.interfaces.description,children:[]};Object.entries(c.interfaces.values).forEach(([s,i])=>{if(m.includes(s)){let[a,n]=[`api.${l}.${s}`,s],o={id:a,label:n,description:(0,t.jsxs)(t.Fragment,{children:[i.description," ",i.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:i.extendedTypes}),"."]})]}),children:[]};r.ObjectUtils.isNotEmpty(i.props)&&o.children.push({id:`${a}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:i.props,...e})}),r.ObjectUtils.isNotEmpty(i.callbacks)&&o.children.push({id:`${a}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:i.callbacks,...e})}),e.children.push(o)}}),r.ObjectUtils.isNotEmpty(e.children)&&n.children.push(e)}e.push(n)}}else c.components&&Object.entries(c.components).forEach(([a,n])=>{let o={id:`api.${a}`,label:a,description:n.description,children:[]};if(r.ObjectUtils.isNotEmpty(n.props)&&r.ObjectUtils.isNotEmpty(n.props.values)&&!h("props")){let[e,s]=[`api.${a}.props`,"Props"];if(d("props",a))return;o.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:a,data:n.props.values,description:n.props.description,...e})})}if(r.ObjectUtils.isNotEmpty(n.callbacks)&&r.ObjectUtils.isNotEmpty(n.callbacks.values)&&!h("callbacks")){let[e,s]=[`api.${a}.callbacks`,"Callbacks"];if(d("callbacks",a))return;o.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:a,data:n.callbacks.values,description:n.callbacks.description,...e})})}if(r.ObjectUtils.isNotEmpty(n.methods)&&r.ObjectUtils.isNotEmpty(n.methods.values)&&!h("methods")){let[e,s]=[`api.${a}.methods`,"Methods"];if(d("methods",a))return;o.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:a,data:n.methods.values,description:n.methods.description,...e})})}a.toLocaleLowerCase()===s.toLowerCase()&&i(o.children,a),e.push(o)}),c.model&&Object.entries(c.model).forEach(([a,n])=>{let o={id:`api.${a}`,label:a,description:n.description,children:[]};if(r.ObjectUtils.isNotEmpty(n.props)&&r.ObjectUtils.isNotEmpty(n.props.values)&&!h("props")){let[e,s]=[`api.${a}.props`,"Props"];if(d("props",a))return;o.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:a,data:n.props.values,description:n.props.description,...e})})}a.toLocaleLowerCase()===s.toLowerCase()&&i(o.children,a),e.push(o)}),c.components||c.model||i(e,l)}return e},[]);return(0,n.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[i," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",i," module."]})]}),(0,t.jsx)(m.DocSections,{docs:l})]}),(0,t.jsx)(h.DocSectionNav,{docs:l})]})}e.s(["DocComponent",0,function(e){let r,[o,l]=(0,n.useState)(0),c=(0,a.useRouter)();r=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{l(e),c.replace(c.pathname)};return(0,n.useEffect)(()=>{c.asPath.includes("#api")&&l(1),c.asPath.includes("#pt")&&l(3)},[c.asPath]),(0,t.jsxs)("div",{className:(0,s.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":0===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:r})}),e.apiDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":1===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":2===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":3===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===o?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.componentDocs})]}):null,1===o?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(u,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===o?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===o?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(h.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},3828,(e,t,s)=>{t.exports=e.r(26990)},40964,e=>{"use strict";var t=e.i(91398),s=e.i(82948),i=e.i(5180),a=e.i(28137);function n(e){let s={basic:`
@layer tailwind-base, primereact, tailwind-utilities;

/* VITE ONLY: In "styled" mode you must add the PrimeReact Theme here. Do NOT include in "unstyled" mode */
@import 'primereact/resources/themes/lara-light-blue/theme.css';

/* NEXT.JS ONLY: In "styled" mode you must also add the layer(primereact) */
@import 'primereact/resources/themes/lara-light-blue/theme.css' layer(primereact);

@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind components;
  @tailwind utilities;
}
`};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Tailwind CSS can be used with styled or unstyled modes of PrimeReact. In both cases, ",(0,t.jsx)("a",{href:"https://tailwindcss.com/docs/preflight",children:"preflight"})," mode may break styling of the core functionality so ",(0,t.jsx)("i",{children:"@layer"})," configuration in your style file that includes tailwind styles is necessary for compatibility."]}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})})}function r(e){let s={javascript:`
import React from 'react'; 
import { Panel } from 'primereact/panel';

export default function TailwindDemo() {
    return (
        <div
        className="
          bg-white
          dark:bg-gray-800
          p-10
          rounded-xl
          flex flex-col
          gap-8
          max-w-3xl
        "
      >
        <h1 className="text-4xl text-black dark:text-white font-bold text-center">
          Tailwind CSS + PrimeReact
        </h1>
        <Panel header="Default Preset">
          <p>
            First panel component uses the global pass through preset from the
            Tailwind CSS based implementation of PrimeOne Design 2023.
          </p>
        </Panel>
    
        <Panel
          header="Custom Header"
          pt={{
            header:
              'p-5 flex items-center justify-between border border-indigo-300 bg-indigo-500 text-indigo-50 rounded-tl-lg rounded-tr-lg dark:bg-indigo-900 dark:border-indigo-900/40 dark:text-white/80',
          }}
        >
          <p>
            Second panel overrides the header section with custom a custom style.
          </p>
        </Panel>
    
        <Panel
          header="Custom Design"
          ptOptions={{ mergeSections: false }}
          pt={{
            header:
              'flex items-center justify-center p-5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-tl-2xl rounded-tr-2xl text-white',
            title: 'leading-none font-bold uppercase text-2xl',
            content:
              'bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 px-5 pb-8 pt-3 text-white text-center rounded-bl-2xl rounded-br-2xl text-xl',
          }}
        >
          <p>
            Third panel ignores the default preset with
            <b> mergeSections: false</b> and applies a custom style to all elements
            of the panel instead.
          </p>
        </Panel>
      </div>
    )
}
    `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"This example covers how to enable the default Tailwind based PrimeOne Design implementation and the customization options"})}),(0,t.jsx)(i.DocSectionCode,{code:s,embedded:!0})]})}var o=e.i(50989);function l(e){let s={basic:`
module.exports = {
    ...
    content: [
        "./index.html",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",

        // Or if using \`src\` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      ...
    }
`},n={basic:`
import { PrimeReactProvider } from "primereact/api";

...
return(
    <PrimeReactProvider value={{ unstyled: true, pt: {} }}>
        <App />
    </PrimeReactProvider>
)
 
`},r={basic:`
import { PrimeReactProvider } from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';

...
return(
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        <App />
    </PrimeReactProvider>
)
 
`},l={basic:`
import { PrimeReactProvider } from "primereact/api";
import { twMerge } from 'tailwind-merge';

...
return(
    <PrimeReactProvider value={{ unstyled: true, pt: {}, ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge } }}>
        <App />
    </PrimeReactProvider>
)
 
`},c={basic:`
import { PrimeReactProvider } from "primereact/api";

export default function MyApp({ Component, pageProps }) {
    
    //My Design System with Tailwind
    const MyDesignSystem = {
        inputtext: {
            root: ({ props, context }) => ({
                className: classNames(
                    'm-0',
                    'font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                    {
                        'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                    },
                    {
                        'text-lg px-4 py-4': props.size == 'large',
                        'text-xs px-2 py-2': props.size == 'small',
                        'p-3 text-base': props.size == null
                    }
                )
            })
        },
        panel: {
            header: ({ props }) => ({
                className: classNames(
                    'flex items-center justify-between', // flex and alignments
                    'border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg', // borders and colors
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80', // Dark mode
                    { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
                )
            }),
            title: 'leading-none font-bold',
            toggler: {
                className: classNames(
                    'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
                    'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
                    'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
                )
            },
            togglerIcon: 'inline-block',
            content: {
                className: classNames(
                    'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
                )
            },
            transition: TRANSITIONS.toggleable
        } 
    };

    return (
        <PrimeReactProvider value={{ unstyled: true, pt: MyDesignSystem }}>
            <Component {...pageProps} />
        </PrimeReactProvider>
    );
}
 
`};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["This section assumes that Tailwind is already available in your application, if not visit the Tailwind CSS ",(0,t.jsx)("a",{href:"https://tailwindcss.com/docs/installation/framework-guides",children:"framework guides "}),"like Vite for the installation and make sure to apply the CSS layer configuration above when including the styles of Tailwind as well."]}),(0,t.jsxs)("p",{className:"flex align-items-start gap-2",children:[(0,t.jsx)(o.Badge,{value:"1"}),(0,t.jsxs)("span",{children:["Tailwind uses PurgeCSS internally to remove unused classes, as PrimeReact components are loaded from ",(0,t.jsx)("i",{children:"node_modules"})," the ",(0,t.jsx)("i",{children:"content"})," property at ",(0,t.jsx)("i",{children:"tailwind.config.js"})," needs to be aware of PrimeReact, otherwise the classes utilized in the theme will be removed as well."]})]}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsxs)("p",{className:"flex align-items-start gap-2",children:[(0,t.jsx)(o.Badge,{value:"2"}),(0,t.jsxs)("span",{children:["Next step is enabling the ",(0,t.jsx)("i",{children:"unstyled"})," option to remove the default style classes from the components and adding an empty ",(0,t.jsx)("i",{children:"pt"})," so that they can be styled with Tailwind in the next section. Note that if you run your application at this stage, functionality and accessibility of the components will still work but everything will be transparent as there is no style."]})]}),(0,t.jsx)(i.DocSectionCode,{code:n,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsxs)("p",{className:"flex align-items-start gap-2",children:[(0,t.jsx)(o.Badge,{value:"3"}),(0,t.jsxs)("span",{children:[(0,t.jsx)("b",{children:"Optional:"})," specify the built in ",(0,t.jsx)("i",{children:"Tailwind"})," style of pre-configured Tailwind settings."]})]}),(0,t.jsx)(i.DocSectionCode,{code:r,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsxs)("p",{className:"flex align-items-start gap-2",children:[(0,t.jsx)(o.Badge,{value:"4"}),(0,t.jsxs)("span",{children:[(0,t.jsx)("b",{children:"Optional:"})," specify the classNameMergeFunction as ",(0,t.jsx)("i",{children:"twMerge"})," to resolve className conflicts via ",(0,t.jsx)("a",{href:"https://www.npmjs.com/package/tailwind-merge",children:"tailwind-merge"}),". This will prevent classNames specified in the global pass through from overriding those specified via pass through in your application."]})]}),(0,t.jsx)(i.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsxs)("p",{className:"flex align-items-start gap-2",children:[(0,t.jsx)(o.Badge,{value:"5"}),(0,t.jsx)("span",{children:"At the final step, component styles are provided via a pass through configuration that utilizes Tailwind CSS. The default preset of each component is available at the Tailwind part under theming section of each component so you'll able to copy paste instead of starting from scratch. Example below styles, inputtext and panel components;"})]}),(0,t.jsx)(i.DocSectionCode,{code:c,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"Voilà 💙, you now have 90+ awesome React UI components styled with Tailwind that will work in harmony with the rest of your application. Time to customize it to bring in your own style with Tailwind."})]})})}e.s(["default",0,()=>{let e=`
    Tailwind CSS is a popular utility first CSS library that fits perfectly to the unstyled mode to skin the entire UI suite with a design system of your choice.
    `;return(0,t.jsx)(s.DocComponent,{title:"Tailwind - PrimeReact",header:"Tailwind CSS",description:e,componentDocs:[{id:"csslayer",label:"CSS Layer",component:n},{id:"unstyledmode",label:"Unstyled Mode",description:"In unstyled mode, the exclusive Tailwind integration of PrimeReact is a great choice for developers who want the flexibility of Tailwind with the convenience of a UI Component library. Tailwind is a perfect match for the unstyled mode of PrimeReact to implement design systems. A built-in Tailwind theme as a pass through preset based on PrimeOne Design is even available to get started in no time. In upcoming iterations, a preset gallery will be available to share implementations developed by the PrimeReact community.",children:[{id:"setup",label:"Setup",component:l},{id:"example",label:"Example",component:r}]}],hideTabMenu:!0})}],40964)},34661,(e,t,s)=>{let i="/tailwind";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(40964)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);