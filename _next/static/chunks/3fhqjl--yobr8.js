(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18718,e=>{"use strict";var t=e.i(91398),i=e.i(28137);e.s(["StyledDoc",0,function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-fieldset"}),(0,t.jsx)("td",{children:"Fieldset element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-fieldset-toggleable"}),(0,t.jsx)("td",{children:"Toggleable fieldset element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-fieldset-legend"}),(0,t.jsx)("td",{children:"Legend element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-fieldset-content"}),(0,t.jsx)("td",{children:"Content element."})]})]})]})})]})}])},10197,e=>{"use strict";var t=e.i(91398),i=e.i(91788),a=e.i(10836),l=e.i(15498),n=e.i(60150),o=e.i(45543),r=e.i(75366),s=e.i(51551),d=e.i(3935);let c=`
@layer primereact {
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
    }
    
    .p-avatar.p-avatar-image {
        background-color: transparent;
    }
    
    .p-avatar.p-avatar-circle {
        border-radius: 50%;
    }
    
    .p-avatar.p-avatar-circle img {
        border-radius: 50%;
    }
    
    .p-avatar .p-avatar-icon {
        font-size: 1rem;
    }
    
    .p-avatar img {
        width: 100%;
        height: 100%;
    }
    
    .p-avatar-clickable {
        cursor: pointer;
    }
}
`,u=l.ComponentBase.extend({defaultProps:{__TYPE:"Avatar",className:null,icon:null,image:null,imageAlt:"avatar",imageFallback:"default",label:null,onImageError:null,shape:"square",size:"normal",style:null,template:null,children:void 0},css:{classes:{root:({props:e,state:t})=>(0,d.classNames)("p-avatar p-component",{"p-avatar-image":s.ObjectUtils.isNotEmpty(e.image)&&!t.imageFailed,"p-avatar-circle":"circle"===e.shape,"p-avatar-lg":"large"===e.size,"p-avatar-xl":"xlarge"===e.size,"p-avatar-clickable":!!e.onClick}),label:"p-avatar-text",icon:"p-avatar-icon"},styles:c}}),m=i.forwardRef((e,c)=>{let m=(0,n.useMergeProps)(),p=i.useContext(a.PrimeReactContext),g=u.getProps(e,p),h=i.useRef(null),[x,f]=i.useState(!1),[b,v]=i.useState(!1),{ptm:j,cx:y,isUnstyled:N}=u.setMetaData({props:g,state:{imageFailed:x,nested:b}});(0,l.useHandleStyle)(u.css.styles,N,{name:"avatar"});let q=e=>{"default"===g.imageFallback?g.onImageError||(f(!0),e.target.src=null):e.target.src=g.imageFallback,g.onImageError&&g.onImageError(e)};i.useEffect(()=>{v(o.DomHandler.isAttributeEquals(h.current.parentElement,"data-pc-name","avatargroup"))},[]),i.useImperativeHandle(c,()=>({props:g,getElement:()=>h.current}));let C=m({ref:h,style:g.style,className:(0,d.classNames)(g.className,y("root",{imageFailed:x}))},u.getOtherProps(g),j("root")),T=g.template?s.ObjectUtils.getJSXElement(g.template,g):(()=>{if(s.ObjectUtils.isNotEmpty(g.image)&&!x){let e=m({src:g.image,onError:q},j("image"));return(0,t.jsx)("img",{alt:g.imageAlt,...e})}if(g.label){let e=m({className:y("label")},j("label"));return(0,t.jsx)("span",{...e,children:g.label})}if(g.icon){let e=m({className:y("icon")},j("icon"));return r.IconUtils.getJSXIcon(g.icon,{...e},{props:g})}return null})();return(0,t.jsxs)("div",{...C,children:[T,g.children]})});m.displayName="Avatar",e.s(["Avatar",0,m],10197)},97876,e=>{"use strict";var t=e.i(91398),i=e.i(91788),a=e.i(85850);let l=i.memo(i.forwardRef((e,i)=>{let l=a.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:i,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,t.jsx)("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"})})}));l.displayName="MinusIcon",e.s(["MinusIcon",0,l])},46532,e=>{"use strict";var t=e.i(91398),i=e.i(91788),a=e.i(85850);let l=i.memo(i.forwardRef((e,i)=>{let l=a.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:i,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,t.jsx)("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"})})}));l.displayName="PlusIcon",e.s(["PlusIcon",0,l])},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},20989,e=>{"use strict";var t=e.i(91398),i=e.i(88850),a=e.i(82948),l=e.i(28137);function n(){return(0,t.jsxs)(l.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Fieldset component uses the semantic ",(0,t.jsx)("i",{children:"fieldset"})," element. When toggleable option is enabled, a clickable element with ",(0,t.jsx)("i",{children:"button"})," role is included inside the ",(0,t.jsx)("i",{children:"legend"})," element, this button has ",(0,t.jsx)("i",{children:"aria-controls"})," to define the id of the content section along with ",(0,t.jsx)("i",{children:"aria-expanded"})," for the visibility state. The value to read the button defaults to the value of the ",(0,t.jsx)("i",{children:"legend"})," property and can be customized by defining an ",(0,t.jsx)("i",{children:"aria-label"})," or"," ",(0,t.jsx)("i",{children:"aria-labelledby"})," via the ",(0,t.jsx)("i",{children:"toggleButtonProps"})," property."]}),(0,t.jsxs)("p",{children:["The content uses ",(0,t.jsx)("i",{children:"region"}),", defines an id that matches the ",(0,t.jsx)("i",{children:"aria-controls"})," of the content toggle button and ",(0,t.jsx)("i",{children:"aria-labelledby"})," referring to the id of the header."]}),(0,t.jsx)("h3",{children:"Content Toggle Button Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the next the focusable element in the page tab sequence."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"tab"})]}),(0,t.jsx)("td",{children:"Moves focus to the previous the focusable element in the page tab sequence."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Toggles the visibility of the content."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles the visibility of the content."})]})]})]})})]})}var o=e.i(5180),r=e.i(91788),s=e.i(10836),d=e.i(15498),c=e.i(87350),u=e.i(60150),m=e.i(20484),p=e.i(97876),g=e.i(46532),h=e.i(50901),x=e.i(75366),f=e.i(28653),b=e.i(3935);let v=d.ComponentBase.extend({defaultProps:{__TYPE:"Fieldset",id:null,legend:null,className:null,style:null,toggleable:null,collapsed:null,collapseIcon:null,transitionOptions:null,expandIcon:null,onExpand:null,onCollapse:null,onToggle:null,onClick:null,children:void 0},css:{classes:{root:({props:e})=>(0,b.classNames)("p-fieldset p-component",{"p-fieldset-toggleable":e.toggleable}),toggleableContent:"p-toggleable-content",togglericon:"p-fieldset-toggler",legendTitle:"p-fieldset-legend-text",legend:"p-fieldset-legend p-unselectable-text",content:"p-fieldset-content",transition:"p-toggleable-content"},styles:`
        @layer primereact {
            .p-fieldset-legend > a,
            .p-fieldset-legend > span {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .p-fieldset-toggleable .p-fieldset-legend a {
                cursor: pointer;
                user-select: none;
                overflow: hidden;
                position: relative;
                text-decoration: none;
            }
            
            .p-fieldset-legend-text {
                line-height: 1;
            }
        }
        `}}),j=r.forwardRef((e,i)=>{let a,l,n,o=(0,u.useMergeProps)(),j=r.useContext(s.PrimeReactContext),y=v.getProps(e,j),[N,q]=r.useState(y.id),[C,T]=r.useState(y.collapsed),w=!!y.toggleable&&(y.onToggle?y.collapsed:C),F=r.useRef(null),D=r.useRef(null),E=N+"_header",S=N+"_content",{ptm:k,cx:I,isUnstyled:_}=v.setMetaData({props:y,state:{id:N,collapsed:w}});(0,d.useHandleStyle)(v.css.styles,_,{name:"fieldset"});let P=e=>{y.toggleable&&(w?A(e):R(e),y.onToggle&&y.onToggle({originalEvent:e,value:!w})),e.preventDefault()},A=e=>{y.onToggle||T(!1),y.onExpand&&y.onExpand(e)},R=e=>{y.onToggle||T(!0),y.onCollapse&&y.onCollapse(e)};(0,m.useMountEffect)(()=>{y.id||q((0,f.UniqueComponentId)())});let U=e=>{("Enter"===e.code||"NumpadEnter"===e.code||"Space"===e.code)&&(P(e),e.preventDefault())};r.useImperativeHandle(i,()=>({props:y,getElement:()=>F.current,getContent:()=>D.current}));let H=o({id:N,ref:F,style:y.style,className:(0,b.classNames)(y.className,I("root")),onClick:y.onClick},v.getOtherProps(y),k("root")),B=(()=>{let e=o({className:I("legend")},k("legend"));if(null!=y.legend||y.toggleable){let i=(()=>{let e=o({className:I("legendTitle")},k("legendTitle")),i=o({id:E,role:"button","aria-expanded":!w,"aria-controls":S,onKeyDown:U,onClick:P,"aria-label":y.legend,tabIndex:0},k("toggler"));if(y.toggleable){let a=(()=>{if(y.toggleable){let e=o({className:I("togglericon")},k("togglericon")),i=w?y.expandIcon||(0,t.jsx)(g.PlusIcon,{...e}):y.collapseIcon||(0,t.jsx)(p.MinusIcon,{...e});return x.IconUtils.getJSXIcon(i,e,{props:y})}return null})();return(0,t.jsxs)("a",{...i,children:[a,(0,t.jsx)("span",{...e,children:y.legend}),(0,t.jsx)(h.Ripple,{})]})}return(0,t.jsx)("span",{...e,id:E,children:y.legend})})();return(0,t.jsx)("legend",{...e,children:i})}})(),L=(a=o({className:I("content")},k("content")),l=o({ref:D,id:S,role:"region","aria-labelledby":E,className:I("toggleableContent")},k("toggleableContent")),n=o({classNames:I("transition"),timeout:{enter:1e3,exit:450},in:!w,unmountOnExit:!0,options:y.transitionOptions},k("transition")),(0,t.jsx)(c.CSSTransition,{nodeRef:D,...n,children:(0,t.jsx)("div",{...l,children:(0,t.jsx)("div",{...a,children:y.children})})}));return(0,t.jsxs)("fieldset",{...H,children:[B,L]})});function y(e){let i={basic:`
<Fieldset legend="Header">
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>
        `,javascript:`
import React from 'react';
import { Fieldset } from 'primereact/fieldset';

export default function BasicDemo() {
    return (
        <div className="card">
            <Fieldset legend="Header">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Fieldset>
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { Fieldset } from 'primereact/fieldset';

export default function BasicDemo() {
    return (
        <div className="card">
            <Fieldset legend="Header">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Fieldset>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A simple Fieldset is created with a ",(0,t.jsx)("i",{children:"legend"})," property along with the content as children."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(j,{legend:"Header",children:(0,t.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),(0,t.jsx)(o.DocSectionCode,{code:i})]})}function N(e){let i={basic:`
import { Fieldset } from 'primereact/fieldset';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}j.displayName="Fieldset";let q=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/fieldset.jpg",alt:"fieldset"})})]});var C=e.i(10197);function T(e){let i=(0,t.jsxs)("div",{className:"flex align-items-center gap-2 px-2",children:[(0,t.jsx)(C.Avatar,{image:"/images/avatar/amyelsner.png",shape:"circle"}),(0,t.jsx)("span",{className:"font-bold",children:"Amy Elsner"})]}),a={basic:`
<Fieldset legend={legendTemplate}>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>
        `,javascript:`
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';
import { Avatar } from '@/components/lib/avatar/Avatar';

export default function TemplateDemo() {
    const legendTemplate = (
        <div className="flex align-items-center gap-2 px-2">
            <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold">Amy Elsner</span>
        </div>
    );

    return (
        <div className="card">
            <Fieldset legend={legendTemplate}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Fieldset>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';
import { Avatar } from '@/components/lib/avatar/Avatar';

export default function TemplateDemo() {
    const legendTemplate = (
        <div className="flex align-items-center gap-2 px-2">
            <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold">Amy Elsner</span>
        </div>
    );

    return (
        <div className="card">
            <Fieldset legend={legendTemplate}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Fieldset>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Legend section can also be defined with custom content instead of primitive values."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(j,{legend:i,children:(0,t.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),(0,t.jsx)(o.DocSectionCode,{code:a})]})}var w=e.i(18718),F=e.i(41158);function D(e){let i={basic:`
const TRANSITIONS = {
    toggleable: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
        enterToClass: 'max-h-40	',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0'
    }
};

const Tailwind = {
    fieldset: {
        root: {
            className: classNames(
                'border border-gray-300 bg-white text-gray-700 rounded-md block mx-2 my-0.5 pl-4 pr-5 inline-size-min', // Borders, background, text color, spacing, and inline size.
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' //dark
            )
        },
        legend: ({ props }) => ({
            className: classNames(
                'border border-gray-300 text-gray-700 bg-gray-50 font-bold rounded-md',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 ', //dark
                {
                    'p-0 transition-none hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': props.toggleable,
                    'p-5': !props.toggleable
                }
            )
        }),
        toggler: ({ props }) => ({
            className: classNames('flex items-center justify-center', {
                'p-5 text-gray-700 rounded-md transition-none cursor-pointer overflow-hidden relative select-none hover:text-gray-900 focus:focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:text-white/80 dark:hover:text-white/80 dark:hover:bg-gray-800/60 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]':
                    props.toggleable
            })
        }),
        togglerIcon: 'mr-2 inline-block', // Margin and display style.
        legendTitle: 'flex items-center justify-center leading-none', // alignments, and leading style.
        content: 'p-5', // Padding.
        transition: TRANSITIONS.toggleable
    }
}
        `},a={javascript:`
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';

export default function UnstyledDemo() {
    return (
        <div className="card">
            <Fieldset legend="Header" toggleable>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Fieldset>
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(l.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(F.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(o.DocSectionCode,{code:a,embedded:!0})]})})}function E(e){let i={basic:`
<Fieldset legend="Header" toggleable>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Fieldset>
        `,javascript:`
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';

export default function ToggleableDemo() {
    return (
        <div className="card">
            <Fieldset legend="Header" toggleable>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Fieldset>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';

export default function ToggleableDemo() {
    return (
        <div className="card">
            <Fieldset legend="Header" toggleable>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Fieldset>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Content of the fieldset can be expanded and collapsed when ",(0,t.jsx)("i",{children:"toggleable"})," option is enabled. A toggleable fieldset can either be used as a Controlled or Uncontrolled component. In controlled mode a binding to ",(0,t.jsx)("i",{children:"collapsed"}),"property along with ",(0,t.jsx)("i",{children:"onToggle"})," event are needed to manage the content state."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(j,{legend:"Header",toggleable:!0,children:(0,t.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),(0,t.jsx)(o.DocSectionCode,{code:i})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:q},{id:"pt.fieldset.options",label:"Fieldset PT Options",component:i.default}],l=[{id:"styled",label:"Styled",component:w.StyledDoc},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:D}]}];return(0,t.jsx)(a.DocComponent,{title:"React Fieldset Component",header:"Fieldset",description:"Fieldset is a grouping component with a content toggle feature.",componentDocs:[{id:"import",label:"Import",component:N},{id:"basic",label:"Basic",component:y},{id:"toggleable",label:"Toggleable",component:E},{id:"template",label:"Template",component:T},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["Fieldset"],ptDocs:e,themingDocs:l})}],20989)},30436,(e,t,i)=>{let a="/fieldset";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(20989)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);