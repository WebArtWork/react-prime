(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),i=e.i(91788);e.s(["CodeHighlight",0,function(e){let r=(0,i.useRef)(),s=`language-${e.lang||"jsx"}`;return(0,i.useEffect)(()=>{window.Prism.highlightElement(r.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:r,className:s,children:[e.children," "]})})}])},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},3828,(e,t,i)=>{t.exports=e.r(26990)},16703,e=>{"use strict";var t=e.i(91398),i=e.i(71864),r=e.i(38076),s=e.i(5180),o=e.i(28137);function c(e){let i={basic:`
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        `},r={basic:`
// _app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component, pageProps }) {
    return (
        <PrimeReactProvider>
            <Component {...pageProps} />
        </PrimeReactProvider>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Configuration is managed by the ",(0,t.jsx)("i",{children:"PrimeReactProvider"})," and ",(0,t.jsx)("i",{children:"PrimeReactContext"})," imported from ",(0,t.jsx)("i",{children:"primereact/api"}),"."]})}),(0,t.jsx)(s.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("div",{className:"doc-section-description",children:(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("i",{children:"PrimeReactProvider"})," component is used to wrap the application and the ",(0,t.jsx)("i",{children:"PrimeReactContext"})," is used to access the configuration options."]})}),(0,t.jsx)(s.DocSectionCode,{code:r,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function n(e){let i={basic:`
// with npm
npm install primereact

// with yarn
yarn add primereact
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["PrimeReact is available for download at ",(0,t.jsx)("a",{href:"https://www.npmjs.com/package/primereact",children:"npm"}),"."]})}),(0,t.jsx)(s.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function a(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"We've created various samples for the popular options in the React ecosystem."})}),(0,t.jsxs)("div",{className:"flex flex-wrap card justify-content-between gap-3",children:[(0,t.jsx)("a",{href:"https://github.com/primefaces/primereact-examples/tree/main/cra-basic",children:(0,t.jsx)("img",{src:"https://primefaces.org/cdn/primereact/images/logos/cra.svg",alt:"Create React App",className:"w-8rem h-8rem"})}),(0,t.jsx)("a",{href:"https://github.com/primefaces/primereact-examples/tree/main/nextjs-basic",children:(0,t.jsx)("img",{src:"https://primefaces.org/cdn/primereact/images/logos/next-js.svg",alt:"Next.JS",className:"w-8rem h-8rem"})}),(0,t.jsx)("a",{href:"https://github.com/primefaces/primereact-examples/tree/main/vite-basic-ts",children:(0,t.jsx)("img",{src:"https://primefaces.org/cdn/primereact/images/logos/vite.png",alt:"Vite",className:"w-8rem h-8rem"})}),(0,t.jsx)("a",{href:"https://github.com/refinedev/refine/tree/master/examples/blog-refine-primereact",children:(0,t.jsx)("img",{src:"https://primefaces.org/cdn/primereact/images/logos/refine.svg",alt:"Refine",className:"w-8rem h-8rem"})})]})]})}var l=e.i(41158);function d(e){let i={basic:`
import "primereact/resources/themes/lara-light-cyan/theme.css";
`};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Styled mode is based on pre-skinned components with opinionated themes like Material, Bootstrap or PrimeOne themes. Theme is the required css file to be imported, visit the ",(0,t.jsx)(l.default,{href:"/theming/#themes",children:"Themes"})," section for the complete list of available themes to choose from."]}),(0,t.jsx)(s.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})})}function m(e){let i={basic:`
import { PrimeReactProvider } from "primereact/api";
...
return(
    <PrimeReactProvider value={{ unstyled: true }}>
        <App />
    </PrimeReactProvider>
)
`};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Unstyled mode is disabled by default for all components. Using the PrimeReactContext during installation, set ",(0,t.jsx)("i",{children:"unstyled"})," as true to enable it globally. Visit the ",(0,t.jsx)(l.default,{href:"/unstyled",children:"Unstyled mode"})," documentation for more information and examples."]}),(0,t.jsx)(s.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})})}var h=e.i(57724);function p(e){let i={basic:`
import { Button } from 'primereact/button';                             
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Check" icon="pi pi-check" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Check" icon="pi pi-check" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component."})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(h.Button,{label:"Check",icon:"pi pi-check"})}),(0,t.jsx)(s.DocSectionCode,{code:i})]})}function x(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["PrimeReact has first class support for SSR and"," ",(0,t.jsx)("a",{alt:"NextJS",href:"https://nextjs.org/",children:"Next.JS"}),", in fact this website is also built with Next.js"]})}),(0,t.jsx)("div",{className:"video-container",children:(0,t.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/OrRffCobuts",frameBorder:"0",allowFullScreen:!0,title:"Getting Started With NextJs"})})]})}var u=e.i(58678);e.s(["default",0,()=>{let e=[{id:"download",label:"Download",component:n},{id:"context",label:"Context",component:c},{id:"usage",label:"Usage",component:p},{id:"theming",label:"Theming",description:"PrimeReact has two theming modes; styled or unstyled.",children:[{id:"styled",label:"Styled Mode",component:d},{id:"unstyled",label:"Unstyled Mode",component:m}]},{id:"examples",label:"Examples",component:a},{id:"videos",label:"Videos",description:"Video tutorials to take you through step-by-step.",children:[{id:"nextjs",label:"Next.js",component:x}]}];return(0,t.jsxs)("div",{children:[(0,t.jsxs)(u.default,{children:[(0,t.jsx)("title",{children:"Getting Started - PrimeReact"}),(0,t.jsx)("meta",{name:"description",content:"PrimeReact is a rich set of open source components for React."})]}),(0,t.jsxs)("div",{className:"doc",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:"Installation"}),(0,t.jsx)("p",{children:"PrimeReact is a rich set of open source UI components for React."})]}),(0,t.jsx)(r.DocSections,{docs:e})]}),(0,t.jsx)(i.DocSectionNav,{docs:e})]})]})}],16703)},47616,(e,t,i)=>{let r="/installation";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(16703)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})}]);