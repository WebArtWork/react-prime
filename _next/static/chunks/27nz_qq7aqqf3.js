(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,74967,e=>{"use strict";e.i(91398),e.i(91788),e.s([])},17720,e=>{"use strict";var t=e.i(91398),i=e.i(91788),s=e.i(85850);let r=i.memo(i.forwardRef((e,i)=>{let r=s.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:i,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,t.jsx)("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"})})}));r.displayName="ChevronUpIcon",e.s(["ChevronUpIcon",0,r])},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},18005,e=>{"use strict";var t=e.i(91398),i=e.i(88850),s=e.i(82948);e.i(74967);var r=e.i(28137),a=e.i(41158);function o(){return(0,t.jsxs)(r.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["ScrollTop uses a button element with an ",(0,t.jsx)("i",{children:"aria-label"})," that refers to the ",(0,t.jsx)("i",{children:"aria.scrollTop"})," property of the ",(0,t.jsx)(a.default,{href:"/locale",children:"locale"})," API by default, you may use your own aria roles and attributes as any valid attribute is passed to the button element implicitly."]}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Scrolls to top."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Scrolls to top."})]})]})]})})]})}var l=e.i(5180),n=e.i(91788),c=e.i(4242),d=e.i(10836),u=e.i(183),p=e.i(15498),m=e.i(87350),h=e.i(20728),g=e.i(60150),x=e.i(4632),f=e.i(17720),b=e.i(50901),j=e.i(45543),v=e.i(75366),y=e.i(63957),w=e.i(3935);let S=`
@layer primereact {
    .p-scrolltop {
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-scrolltop-sticky {
        position: sticky;
    }
    
    .p-scrolltop-sticky.p-link {
        margin-left: auto;
    }
    
    .p-scrolltop-helper {
        display: none;
    }
    
    .p-scrolltop-enter {
        opacity: 0;
    }
    
    .p-scrolltop-enter-active {
        opacity: 1;
        transition: opacity .15s;
    }
    
    .p-scrolltop-exit {
        opacity: 1;
    }
    
    .p-scrolltop-exit-active {
        opacity: 0;
        transition: opacity .15s;
    }
}
`,T=p.ComponentBase.extend({defaultProps:{__TYPE:"ScrollTop",target:"window",threshold:400,icon:null,behavior:"smooth",className:null,style:null,transitionOptions:null,onShow:null,onHide:null,children:void 0},css:{classes:{root:({props:e})=>(0,w.classNames)("p-scrolltop p-link p-component",{"p-scrolltop-sticky":"window"!==e.target}),icon:"p-scrolltop-icon",transition:"p-scrolltop"},styles:S}}),C=n.memo(n.forwardRef((e,i)=>{let[s,r]=n.useState(!1),a=(0,g.useMergeProps)(),o=n.useContext(d.PrimeReactContext),l=T.getProps(e,o),{ptm:S,cx:C,isUnstyled:q}=T.setMetaData({props:l,state:{visible:s}});(0,p.useHandleStyle)(T.css.styles,q,{name:"scrolltop"});let N=n.useRef(null),E=n.useRef(null),D="parent"===l.target,[P]=(0,h.useEventListener)({target:()=>E.current&&E.current.parentElement,type:"scroll",listener:e=>{k(e.currentTarget.scrollTop)}}),[R]=(0,h.useEventListener)({target:"window",type:"scroll",listener:e=>{e&&k(j.DomHandler.getWindowScrollTop())}}),k=e=>{r(e>l.threshold)};n.useImperativeHandle(i,()=>({props:l,getElement:()=>elementRef.current})),n.useEffect(()=>{"window"===l.target?R():"parent"===l.target&&P()},[]),(0,x.useUnmountEffect)(()=>{y.ZIndexUtils.clear(N.current)});let I=a({className:C("icon")},S("icon")),U=l.icon||(0,t.jsx)(f.ChevronUpIcon,{...I}),A=v.IconUtils.getJSXIcon(U,{...I},{props:l}),_=(0,u.localeOption)("aria")?(0,u.localeOption)("aria").scrollTop:void 0,B=a({ref:N,type:"button",className:(0,w.classNames)(l.className,C("root")),style:l.style,onClick:()=>{("window"===l.target?window:E.current.parentElement).scroll({top:0,behavior:l.behavior})},"aria-label":_},T.getOtherProps(l),S("root")),L=a({classNames:C("transition"),in:s,timeout:{enter:150,exit:150},options:l.transitionOptions,unmountOnExit:!0,onEnter:()=>{y.ZIndexUtils.set("overlay",N.current,o&&o.autoZIndex||c.default.autoZIndex,o&&o.zIndex.overlay||c.default.zIndex.overlay)},onEntered:()=>{l.onShow&&l.onShow()},onExited:()=>{y.ZIndexUtils.clear(N.current),l.onHide&&l.onHide()}},S("transition"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.CSSTransition,{nodeRef:N,...L,children:(0,t.jsxs)("button",{...B,children:[A,(0,t.jsx)(b.Ripple,{})]})}),D&&(0,t.jsx)("span",{ref:E,className:"p-scrolltop-helper"})]})}));function q(e){let i={basic:`
<ScrollTop />
        `,javascript:`
import React from 'react'; 
import { ScrollTop } from 'primereact/scrolltop';

export default function BasicDemo() {
    return (
        <div className="card flex flex-column align-items-center" style={{ height: '2000px' }}>
            <p>Scroll down the page to display the ScrollTo component.</p>
            <i className="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite" style={{ fontSize: '2rem' }}></i>
            <ScrollTop />
        </div>
    );
}
        `,typescript:`
import React from 'react'; 
import { ScrollTop } from 'primereact/scrolltop';

export default function BasicDemo() {
    return (
        <div className="card flex flex-column align-items-center" style={{ height: '2000px' }}>
            <p>Scroll down the page to display the ScrollTo component.</p>
            <i className="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite" style={{ fontSize: '2rem' }}></i>
            <ScrollTop />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"ScrollTop listens window scroll by default."})}),(0,t.jsxs)("div",{className:"card flex flex-column align-items-center",children:[(0,t.jsx)("p",{children:"Scroll down the page to display the ScrollTo component."}),(0,t.jsx)("i",{className:"pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite text-2xl",style:{fontSize:"2rem",marginBottom:"30rem"}}),(0,t.jsx)(C,{})]}),(0,t.jsx)(l.DocSectionCode,{code:i})]})}function N(e){let i={basic:`
<ScrollTop target="parent" threshold={100} className="w-2rem h-2rem border-round-md bg-primary" icon="pi pi-arrow-up text-base" />
        `,javascript:`
import React from 'react'; 
import { ScrollTop } from 'primereact/scrolltop';

export default function ElementDemo() {
    return (
        <div className="card">
            <div style={{ width: '250px', height: '200px', 'overflow': 'auto' }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur
                    adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor
                    augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet
                    nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus
                    viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
                </p>
                <ScrollTop target="parent" threshold={100} className="w-2rem h-2rem border-round bg-primary" icon="pi pi-arrow-up text-base" />
            </div>
        </div>
    );
}
        `,typescript:`
import React from 'react'; 
import { ScrollTop } from 'primereact/scrolltop';

export default function ElementDemo() {
    return (
        <div className="card">
            <div style={{ width: '250px', height: '200px', 'overflow': 'auto' }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur
                    adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor
                    augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet
                    nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus
                    viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
                </p>
                <ScrollTop target="parent" threshold={100} className="w-2rem h-2rem border-round bg-primary" icon="pi pi-arrow-up text-base" />
            </div>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Setting the ",(0,t.jsx)("i",{children:"target"})," property to ",(0,t.jsx)("i",{children:"parent"})," binds ScrollTop to its parent element that has scrolling content."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{style:{width:"250px",height:"200px",overflow:"auto"},children:[(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec."}),(0,t.jsx)(C,{target:"parent",threshold:100,className:"w-2rem h-2rem border-round bg-primary",icon:"pi pi-arrow-up text-base"})]})}),(0,t.jsx)(l.DocSectionCode,{code:i})]})}function E(e){let i={basic:`
import { ScrollTop } from 'primereact/scrolltop';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)(l.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}C.displayName="ScrollTop";let D=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/scrolltop.jpg",alt:"scrolltop"})})]});function P(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-scrolltop"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-scrolltop-sticky"}),(0,t.jsx)("td",{children:"Container element when attached to its parent."})]})]})]})})]})}function R(e){let i={basic:`
const Tailwind = {          
    scrolltop: {
        root: ({ props }) => ({
            className: classNames('fixed bottom-20 right-20 flex items-center justify-center', 'ml-auto', {
                '!bg-blue-500 hover:bg-blue-600 text-white rounded-md h-8 w-8': props.target == 'parent',
                '!bg-gray-700 hover:bg-gray-800 h-12 w-12 rounded-full text-white': props.target !== 'parent'
            })
        }),
        transition: {
            enterFromClass: 'opacity-0',
            enterActiveClass: 'transition-opacity duration-150',
            leaveActiveClass: 'transition-opacity duration-150',
            leaveToClass: 'opacity-0'
        }
    }
}
    `},s={javascript:`
import React from 'react'; 
import { ScrollTop } from 'primereact/scrolltop';

export default function UnstyledDemo() {
    return (
        <div className="card">
            <div style={{ width: '250px', height: '200px', 'overflow': 'auto' }}>
                <p className="text-gray-700 dark:text-white/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur
                    adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor
                    augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet
                    nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus
                    viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
                </p>
                <ScrollTop target="parent" threshold={100} className="w-2rem h-2rem border-round bg-primary" icon="pi pi-arrow-up text-base" />
            </div>
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(a.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(l.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(l.DocSectionCode,{code:s,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:D},{id:"pt.scrolltop.options",label:"ScrollTop PT Options",component:i.default}];return(0,t.jsx)(s.DocComponent,{title:"React ScrollTop Component",header:"ScrollTop",description:"ScrollTop gets displayed when it gets into viewport and used to navigate back to the top of the page.",componentDocs:[{id:"import",label:"Import",component:E},{id:"basic",label:"Basic",component:q},{id:"element",label:"Element",component:N},{id:"accessibility",label:"Accessibility",component:o}],apiDocs:["ScrollTop"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:P},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:R}]}]})}],18005)},90280,(e,t,i)=>{let s="/scrolltop";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(18005)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})}]);