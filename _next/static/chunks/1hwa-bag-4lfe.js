(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,97876,e=>{"use strict";var t=e.i(91398),a=e.i(91788),i=e.i(85850);let o=a.memo(a.forwardRef((e,a)=>{let o=i.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:a,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,t.jsx)("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"})})}));o.displayName="MinusIcon",e.s(["MinusIcon",0,o])},46532,e=>{"use strict";var t=e.i(91398),a=e.i(91788),i=e.i(85850);let o=a.memo(a.forwardRef((e,a)=>{let o=i.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:a,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,t.jsx)("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"})})}));o.displayName="PlusIcon",e.s(["PlusIcon",0,o])},59354,e=>{"use strict";var t=e.i(91398),a=e.i(91788),i=e.i(10836),o=e.i(15498),r=e.i(87350),n=e.i(60150),l=e.i(20484),s=e.i(97876),c=e.i(46532),d=e.i(50901),p=e.i(75366),m=e.i(51551),u=e.i(28653),h=e.i(3935);let g=o.ComponentBase.extend({defaultProps:{__TYPE:"Panel",id:null,header:null,headerTemplate:null,footer:null,footerTemplate:null,toggleable:null,style:null,className:null,collapsed:null,expandIcon:null,collapseIcon:null,icons:null,transitionOptions:null,onExpand:null,onCollapse:null,onToggle:null,children:void 0},css:{classes:{root:({props:e})=>(0,h.classNames)("p-panel p-component",{"p-panel-toggleable":e.toggleable}),header:"p-panel-header",title:"p-panel-title",icons:"p-panel-icons",toggler:"p-panel-header-icon p-panel-toggler p-link",togglerIcon:"p-panel-header-icon p-panel-toggler p-link",toggleableContent:"p-toggleable-content",content:"p-panel-content",footer:"p-panel-footer",transition:"p-toggleable-content"},styles:`
        @layer primereact {
            .p-panel-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            
            .p-panel-title {
              line-height: 1;
            }
            
            .p-panel-header-icon {
              display: inline-flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              text-decoration: none;
              overflow: hidden;
              position: relative;
            }
        }
        `}}),f=a.forwardRef((e,f)=>{let x,b,y,v,P,j,C,T,N,w,S,D,_=(0,n.useMergeProps)(),R=a.useContext(i.PrimeReactContext),E=g.getProps(e,R),[k,O]=a.useState(E.id),[I,q]=a.useState(E.collapsed),H=a.useRef(null),U=a.useRef(null),B=!!E.toggleable&&(E.onToggle?E.collapsed:I),M=k+"_header",z=k+"_content",{ptm:A,cx:F,isUnstyled:L}=g.setMetaData({props:E,state:{id:k,collapsed:B}});(0,o.useHandleStyle)(g.css.styles,L,{name:"panel"});let X=e=>{E.toggleable&&(B?J(e):V(e),e&&(E.onToggle&&E.onToggle({originalEvent:e,value:!B}),e.preventDefault()))},J=e=>{E.onToggle||q(!1),E.onExpand&&e&&E.onExpand(e)},V=e=>{E.onToggle||q(!0),E.onCollapse&&e&&E.onCollapse(e)};a.useImperativeHandle(f,()=>({props:E,toggle:X,expand:J,collapse:V,getElement:()=>H.current,getContent:()=>U.current})),(0,l.useMountEffect)(()=>{k||O((0,u.UniqueComponentId)())});let Z=_({id:k,ref:H,style:E.style,className:(0,h.classNames)(E.className,F("root"))},g.getOtherProps(E),A("root")),G=(x=m.ObjectUtils.getJSXElement(E.header,E),b=m.ObjectUtils.getJSXElement(E.icons,E),y=(()=>{if(E.toggleable){let e=k+"_label",a=_({className:F("toggler"),onClick:X,id:e,"aria-controls":z,"aria-expanded":!B,type:"button",role:"button","aria-label":E.header},A("toggler")),i=_(A("togglericon")),o=B?E.expandIcon||(0,t.jsx)(c.PlusIcon,{...i}):E.collapseIcon||(0,t.jsx)(s.MinusIcon,{...i}),r=p.IconUtils.getJSXIcon(o,i,{props:E,collapsed:B});return(0,t.jsxs)("button",{...a,children:[r,(0,t.jsx)(d.Ripple,{})]})}return null})(),v=_({id:M,className:F("title")},A("title")),P=(0,t.jsx)("span",{...v,children:x}),j=_({className:F("icons")},A("icons")),C=(0,t.jsxs)("div",{...j,children:[b,y]}),T=_({className:F("header")},A("header")),N=(0,t.jsxs)("div",{...T,children:[P,C]}),E.headerTemplate?m.ObjectUtils.getJSXElement(E.headerTemplate,{className:"p-panel-header",titleClassName:"p-panel-title",iconsClassName:"p-panel-icons",togglerClassName:"p-panel-header-icon p-panel-toggler p-link",onTogglerClick:X,titleElement:P,iconsElement:C,togglerElement:y,element:N,id:k+"_header",props:E,collapsed:B}):E.header||E.toggleable?N:null),K=(w=_({ref:U,className:F("toggleableContent"),"aria-hidden":B,role:"region",id:z,"aria-labelledby":M},A("toggleablecontent")),S=_({className:F("content")},A("content")),D=_({classNames:F("transition"),timeout:{enter:1e3,exit:450},in:!B,unmountOnExit:!0,options:E.transitionOptions},A("transition")),(0,t.jsx)(r.CSSTransition,{nodeRef:U,...D,children:(0,t.jsx)("div",{...w,children:(0,t.jsx)("div",{...S,children:E.children})})})),Y=(()=>{let e=m.ObjectUtils.getJSXElement(E.footer,E),a=_({className:F("footer")},A("footer")),i=(0,t.jsx)("div",{...a,children:e});if(E.footerTemplate){let e={className:F("footer"),element:i,props:E};return m.ObjectUtils.getJSXElement(E.footerTemplate,e)}return E.footer?i:null})();return(0,t.jsxs)("div",{...Z,children:[G,K,Y]})});f.displayName="Panel",e.s(["Panel",0,f],59354)},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},18142,e=>{"use strict";var t=e.i(91398),a=e.i(82948),i=e.i(5180),o=e.i(28137),r=e.i(59354),n=e.i(3935);function l(e){let a={basic:`
<Panel
    header="Header"
    toggleable
    pt={{
        header: ({ state }) => ({
            id: 'myPanelHeader',
            style: {
                'user-select': 'none'
            },
            className: classNames('border-primary', {
                'bg-primary': state.collapsed,
                'bg-primary-reverse': !state.collapsed
            })
        }),
        content: { className: 'border-primary text-lg text-primary-700' },
        title: 'text-xl', // OR { className: 'text-xl' }
        toggler: 'bg-primary hover:bg-primary-reverse' // OR { className: 'bg-primary hover:bg-primary-reverse' }
    }}
>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>
        `,javascript:`
import React from 'react'; 
import { Panel } from 'primereact/panel';

export default function BasicDemo() {
    return (
        <div className="card">
            <Panel
                header="Header"
                toggleable
                pt={{
                    header: ({ state }) => ({
                        id: 'myPanelHeader',
                        style: {
                            'user-select': 'none'
                        },
                        className: classNames('border-primary', {
                            'bg-primary': state.collapsed,
                            'bg-primary-reverse': !state.collapsed
                        })
                    }),
                    content: { className: 'border-primary text-lg text-primary-700' },
                    title: 'text-xl', // OR { className: 'text-xl' }
                    toggler: 'bg-primary hover:bg-primary-reverse' // OR { className: 'bg-primary hover:bg-primary-reverse' }
                }}
            >
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Panel } from 'primereact/panel';

export default function BasicDemo() {
    return (
        <div className="card">
            <Panel
                header="Header"
                toggleable
                pt={{
                    header: ({ state }) => ({
                        id: 'myPanelHeader',
                        style: {
                            'user-select': 'none'
                        },
                        className: classNames('border-primary', {
                            'bg-primary': state.collapsed,
                            'bg-primary-reverse': !state.collapsed
                        })
                    }),
                    content: { className: 'border-primary text-lg text-primary-700' },
                    title: 'text-xl', // OR { className: 'text-xl' }
                    toggler: 'bg-primary hover:bg-primary-reverse' // OR { className: 'bg-primary hover:bg-primary-reverse' }
                }}
            >
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Each component has a special ",(0,t.jsx)("i",{children:"pt"})," property to define an object with keys corresponding to the available DOM elements. Each value is also an object to define the arbitrary properties to apply to the element such as styling, aria, data-* or custom attributes. Every component documentation has a dedicated section to document the available section names exposed via PT."]}),(0,t.jsxs)("p",{children:["Most common usage of ",(0,t.jsx)("i",{children:"pt"})," is styling and customization. The ",(0,t.jsx)("i",{children:"className"})," and ",(0,t.jsx)("i",{children:"style"})," properties support the exact syntax of the corresponding ",(0,t.jsx)("i",{children:"classNames"})," like objects and conditionals. Example below styles a Panel component with PrimeFlex CSS library."]})]}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(r.Panel,{header:"Header",toggleable:!0,pt:{header:({state:e})=>({id:"myPanelHeader",style:{"user-select":"none"},className:(0,n.classNames)("border-primary",{"bg-primary":e.collapsed,"bg-primary-reverse":!e.collapsed})}),content:{className:"border-primary text-lg text-primary-700"},title:"text-xl",toggler:"bg-primary hover:bg-primary-reverse"},children:(0,t.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}function s(e){let a={basic:`
// _app.js        
import { PrimeReactProvider } from "primereact/api";

export default function CustomCSSDemo() {

    const pt = {
        global: {
            css: \`
                button {
                    padding: 2rem;
                }

                .p-ink {
                    display: block;
                    position: absolute;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 100%;
                    transform: scale(0);
                    pointer-events: none;
                }

                .p-ink-active {
                    animation: ripple 0.4s linear;
                }

                @keyframes ripple {
                    100% {
                        opacity: 0;
                        transform: scale(2.5);
                    }
                }
            \`
        }
    };

    return(
        <PrimeReactProvider value={{ pt }}>
            <App />
        </PrimeReactProvider>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("i",{children:"global"})," property has a ",(0,t.jsx)("i",{children:"css"})," option to define custom css that belongs to a global ",(0,t.jsx)("i",{children:"pt"})," configuration. Common use case of this feature is defining global styles and animations related to the pass through props configuration."]})}),(0,t.jsx)(i.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function c(e){let a={basic:`
// _app.js        
import { PrimeReactProvider } from "primereact/api";

export default function GlobalPTDemo() {

    const pt = {
        panel: {
            header: { className: 'bg-primary' }
        },
        autocomplete: {
            input: { root: { className: 'w-16rem' } }
        }
    };

    return(
        <PrimeReactProvider value={{ pt }}>
            <App />
        </PrimeReactProvider>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Defines the shared pass through properties per component type. For example, with the configuration below all panel headers have the ",(0,t.jsx)("i",{children:"bg-primary"})," style class and the all autocomplete components have a fixed width. These settings can be overriden by a particular component as components ",(0,t.jsx)("i",{children:"pt"})," property has higher precedence over global ",(0,t.jsx)("i",{children:"pt"}),"."]})}),(0,t.jsx)(i.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function d(e){let a={basic:`
<Panel header="Header" pt={panelPT}>
    Content
</Panel>
        `,javascript:`
import React from 'react'; 
import { Panel } from 'primereact/panel';

export default function LifeCyleDemo() {
    const panelPt = {
        hooks: {
            useMountEffect: () => {
                //panel mounted
            },
            useUnmountEffect: () => {
                //panel unmounted
            }
    };

    return (
        <div className="card">
            <Panel header="Header" pt={panelPT}>
                Content
            </Panel>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Panel } from 'primereact/panel';

export default function LifeCyleDemo() {
    const panelPt = {
        hooks: {
            useMountEffect: () => {
                //panel mounted
            },
            useUnmountEffect: () => {
                //panel unmounted
            }
    };
    
    return (
        <div className="card">
            <Panel header="Header" pt={panelPT}>
                Content
            </Panel>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Lifecycle hooks of components are exposed as pass through using the ",(0,t.jsx)("i",{children:"hooks"})," property so that callback functions can be registered. Available callbacks are ",(0,t.jsx)("i",{children:"useMountEffect"}),", ",(0,t.jsx)("i",{children:"useUpdateEffect"}),", ",(0,t.jsx)("i",{children:"useUnmountEffect"}),". Refer to the React.js documentation for detailed information about lifecycle hooks."]})}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}function p(e){let a={basic:`
import React from 'react'; 
import { PrimeReactProvider } from "primereact/api";
import { usePassThrough } from "primereact/passthrough";
import Tailwind from "primereact/passthrough/tailwind";

export default function UsePassThroughDemo() {

    const CustomTailwind = usePassThrough(
        Tailwind,
        {
            panel: {
                title: {
                    className: 'leading-none font-light text-2xl'
                }
            }
        },
        {
            mergeSections: true,
            mergeProps: false
        }
    );

    return(
        <PrimeReactProvider value={{ unstyled: true, pt: CustomTailwind }}>
            <App />
        </PrimeReactProvider>
    )
}
    `},r={basic:`
const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: true, mergeProps: false }
);

// Output: 
// panel.header.className => 'my_panel_header'
// panel.title.className => Tailwind.panel.title.className`},n={basic:`
const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: true, mergeProps: true }
);

// Output: 
// panel.header.className => classNames(Tailwind.panel.header.className, 'my_panel_header')
// panel.title.className => Tailwind.panel.title.className
`},l={basic:`
const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: false, mergeProps: true }
);

// Output: 
// panel.header.className => classNames(Tailwind.panel.header.className, 'my_panel_header')
// panel.title.className => undefined
`},s={basic:`
const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: false, mergeProps: false }
);

// Output: 
// panel.header.className => 'my_panel_header'
// panel.title.className => undefined
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["An existing pass through configuration is customized with the ",(0,t.jsx)("i",{children:"usePassThrough"})," utility. The first parameter is the object to customize, the second parameter is the customizations and the final parameter is the behavior of merging. One of the example use cases is customizing existing unstyled themes like Tailwind."]}),(0,t.jsx)(i.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("i",{children:"mergeSections"})," defines whether the sections from the main configuration gets added and the ",(0,t.jsx)("i",{children:"mergeProps"})," controls whether to override or merge the defined props. Defaults are ",(0,t.jsx)("i",{children:"true"})," for ",(0,t.jsx)("i",{children:"mergeSections"})," and",(0,t.jsx)("i",{children:"false"})," for ",(0,t.jsx)("i",{children:"mergeProps"}),"."]}),(0,t.jsxs)("p",{children:["Some CSS libraries, such as ",(0,t.jsx)("i",{children:"Tailwind"}),", require that class names be merged in a non-conflicting manner. In order to support them a ",(0,t.jsx)("i",{children:"classNameMergeFunction"})," may be passed as part of the ",(0,t.jsx)("i",{children:"ptOptions"})," object to manually define how class names will be merged."]})]}),(0,t.jsx)(i.DocSectionCode,{code:r,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)(i.DocSectionCode,{code:n,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)(i.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}e.s(["default",0,()=>(0,t.jsx)(a.DocComponent,{title:"PrimeReact - PassThrough",header:"Pass Through",description:"The Pass Through props is an API to access the internal DOM Structure of the components.",componentDocs:[{id:"basic",label:"Basic",component:l},{id:"lifecycle",label:"Lifecycle",component:d},{id:"globalpt",label:"Global",component:c},{id:"customcss",label:"Custom CSS",component:s},{id:"usepassthrough",label:"UsePassThrough",component:p}],apiDocs:["API"],apiExclude:{interfaces:["PrimeIconsOptions","APIOptions","ContextAPIOptions","FilterMatchModeOptions","ZIndexOptions","LocaleOptions"],types:"excludeAll"}})],18142)},28959,(e,t,a)=>{let i="/passthrough";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(18142)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);