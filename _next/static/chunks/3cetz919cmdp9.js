(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,74967,e=>{"use strict";e.i(91398),e.i(91788),e.s([])},97876,e=>{"use strict";var t=e.i(91398),l=e.i(91788),o=e.i(85850);let i=l.memo(l.forwardRef((e,l)=>{let i=o.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:l,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:(0,t.jsx)("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"})})}));i.displayName="MinusIcon",e.s(["MinusIcon",0,i])},46532,e=>{"use strict";var t=e.i(91398),l=e.i(91788),o=e.i(85850);let i=l.memo(l.forwardRef((e,l)=>{let i=o.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:l,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:(0,t.jsx)("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"})})}));i.displayName="PlusIcon",e.s(["PlusIcon",0,i])},59354,e=>{"use strict";var t=e.i(91398),l=e.i(91788),o=e.i(10836),i=e.i(15498),n=e.i(87350),a=e.i(60150),c=e.i(20484),s=e.i(97876),r=e.i(46532),d=e.i(50901),u=e.i(75366),m=e.i(51551),p=e.i(28653),b=e.i(3935);let f=i.ComponentBase.extend({defaultProps:{__TYPE:"Panel",id:null,header:null,headerTemplate:null,footer:null,footerTemplate:null,toggleable:null,style:null,className:null,collapsed:null,expandIcon:null,collapseIcon:null,icons:null,transitionOptions:null,onExpand:null,onCollapse:null,onToggle:null,children:void 0},css:{classes:{root:({props:e})=>(0,b.classNames)("p-panel p-component",{"p-panel-toggleable":e.toggleable}),header:"p-panel-header",title:"p-panel-title",icons:"p-panel-icons",toggler:"p-panel-header-icon p-panel-toggler p-link",togglerIcon:"p-panel-header-icon p-panel-toggler p-link",toggleableContent:"p-toggleable-content",content:"p-panel-content",footer:"p-panel-footer",transition:"p-toggleable-content"},styles:`
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
        `}}),h=l.forwardRef((e,h)=>{let k,x,g,B,v,j,C,y,S,N,U,I,T=(0,a.useMergeProps)(),P=l.useContext(o.PrimeReactContext),q=f.getProps(e,P),[w,D]=l.useState(q.id),[E,R]=l.useState(q.collapsed),_=l.useRef(null),H=l.useRef(null),M=!!q.toggleable&&(q.onToggle?q.collapsed:E),O=w+"_header",L=w+"_content",{ptm:Z,cx:X,isUnstyled:z}=f.setMetaData({props:q,state:{id:w,collapsed:M}});(0,i.useHandleStyle)(f.css.styles,z,{name:"panel"});let A=e=>{q.toggleable&&(M?F(e):J(e),e&&(q.onToggle&&q.onToggle({originalEvent:e,value:!M}),e.preventDefault()))},F=e=>{q.onToggle||R(!1),q.onExpand&&e&&q.onExpand(e)},J=e=>{q.onToggle||R(!0),q.onCollapse&&e&&q.onCollapse(e)};l.useImperativeHandle(h,()=>({props:q,toggle:A,expand:F,collapse:J,getElement:()=>_.current,getContent:()=>H.current})),(0,c.useMountEffect)(()=>{w||D((0,p.UniqueComponentId)())});let V=T({id:w,ref:_,style:q.style,className:(0,b.classNames)(q.className,X("root"))},f.getOtherProps(q),Z("root")),K=(k=m.ObjectUtils.getJSXElement(q.header,q),x=m.ObjectUtils.getJSXElement(q.icons,q),g=(()=>{if(q.toggleable){let e=w+"_label",l=T({className:X("toggler"),onClick:A,id:e,"aria-controls":L,"aria-expanded":!M,type:"button",role:"button","aria-label":q.header},Z("toggler")),o=T(Z("togglericon")),i=M?q.expandIcon||(0,t.jsx)(r.PlusIcon,{...o}):q.collapseIcon||(0,t.jsx)(s.MinusIcon,{...o}),n=u.IconUtils.getJSXIcon(i,o,{props:q,collapsed:M});return(0,t.jsxs)("button",{...l,children:[n,(0,t.jsx)(d.Ripple,{})]})}return null})(),B=T({id:O,className:X("title")},Z("title")),v=(0,t.jsx)("span",{...B,children:k}),j=T({className:X("icons")},Z("icons")),C=(0,t.jsxs)("div",{...j,children:[x,g]}),y=T({className:X("header")},Z("header")),S=(0,t.jsxs)("div",{...y,children:[v,C]}),q.headerTemplate?m.ObjectUtils.getJSXElement(q.headerTemplate,{className:"p-panel-header",titleClassName:"p-panel-title",iconsClassName:"p-panel-icons",togglerClassName:"p-panel-header-icon p-panel-toggler p-link",onTogglerClick:A,titleElement:v,iconsElement:C,togglerElement:g,element:S,id:w+"_header",props:q,collapsed:M}):q.header||q.toggleable?S:null),Y=(N=T({ref:H,className:X("toggleableContent"),"aria-hidden":M,role:"region",id:L,"aria-labelledby":O},Z("toggleablecontent")),U=T({className:X("content")},Z("content")),I=T({classNames:X("transition"),timeout:{enter:1e3,exit:450},in:!M,unmountOnExit:!0,options:q.transitionOptions},Z("transition")),(0,t.jsx)(n.CSSTransition,{nodeRef:H,...I,children:(0,t.jsx)("div",{...N,children:(0,t.jsx)("div",{...U,children:q.children})})})),W=(()=>{let e=m.ObjectUtils.getJSXElement(q.footer,q),l=T({className:X("footer")},Z("footer")),o=(0,t.jsx)("div",{...l,children:e});if(q.footerTemplate){let e={className:X("footer"),element:o,props:q};return m.ObjectUtils.getJSXElement(q.footerTemplate,e)}return q.footer?o:null})();return(0,t.jsxs)("div",{...V,children:[K,Y,W]})});h.displayName="Panel",e.s(["Panel",0,h],59354)},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},39652,e=>{"use strict";var t=e.i(91398);e.i(74967);var l=e.i(28137);function o(){return(0,t.jsxs)(l.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["BlockUI manages ",(0,t.jsx)("i",{children:"aria-busy"})," state attribute when the UI gets blocked and unblocked. Any valid attribute is passed to the root element so additional attributes like ",(0,t.jsx)("i",{children:"role"})," and ",(0,t.jsx)("i",{children:"aria-live"})," can be used to define live regions."]}),(0,t.jsx)("h4",{children:"Keyboard Support"}),(0,t.jsx)("p",{children:"Component does not include any interactive elements."})]})}var i=e.i(5180),n=e.i(57724),a=e.i(91788),c=e.i(4242),s=e.i(10836),r=e.i(15498),d=e.i(60150),u=e.i(20484),m=e.i(4632),p=e.i(71834),b=e.i(85971),f=e.i(45543),h=e.i(51551),k=e.i(63957),x=e.i(3935);let g=`
@layer primereact {
    .p-blockui-container {
        position: relative;
    }
    
    .p-blockui {
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-blockui.p-component-overlay {
        position: absolute;
    }
    
    .p-blockui-document.p-component-overlay {
        position: fixed;
    }
}
`,B=r.ComponentBase.extend({defaultProps:{__TYPE:"BlockUI",autoZIndex:!0,baseZIndex:0,blocked:!1,className:null,containerClassName:null,containerStyle:null,fullScreen:!1,id:null,onBlocked:null,onUnblocked:null,style:null,template:null,children:void 0},css:{classes:{root:"p-blockui-container",mask:({props:e})=>(0,x.classNames)("p-blockui p-component-overlay p-component-overlay-enter",{"p-blockui-document":e.fullScreen})},styles:g}}),v=a.forwardRef((e,l)=>{let o=(0,d.useMergeProps)(),i=a.useContext(s.PrimeReactContext),n=B.getProps(e,i),[g,v]=a.useState(n.blocked),j=a.useRef(null),C=a.useRef(null),y=a.useRef(null),{ptm:S,cx:N,isUnstyled:U}=B.setMetaData({props:n});(0,r.useHandleStyle)(B.css.styles,U,{name:"blockui"});let I=()=>{v(!0),y.current=document.activeElement},T=()=>{U()||f.DomHandler.addClass(C.current,"p-component-overlay-leave"),f.DomHandler.hasCSSAnimation(C.current)>0?C.current.addEventListener("animationend",()=>{P()}):P()},P=()=>{k.ZIndexUtils.clear(C.current),v(!1),n.fullScreen&&(f.DomHandler.unblockBodyScroll(),y.current&&y.current.focus()),n.onUnblocked&&n.onUnblocked()},q=()=>{if(n.fullScreen&&(f.DomHandler.blockBodyScroll(),y.current&&y.current.blur()),n.autoZIndex){let e=n.fullScreen?"modal":"overlay";k.ZIndexUtils.set(e,C.current,i&&i.autoZIndex||c.default.autoZIndex,n.baseZIndex||i&&i.zIndex[e]||c.default.zIndex[e])}n.onBlocked&&n.onBlocked()};(0,u.useMountEffect)(()=>{g&&I()}),(0,p.useUpdateEffect)(()=>{n.blocked?I():T()},[n.blocked]),(0,m.useUnmountEffect)(()=>{n.fullScreen&&f.DomHandler.unblockBodyScroll(),k.ZIndexUtils.clear(C.current)}),a.useImperativeHandle(l,()=>({props:n,block:I,unblock:T,getElement:()=>j.current}));let w=(()=>{if(g){let e=n.fullScreen?document.body:"self",l=o({className:(0,x.classNames)(n.className,N("mask")),style:{...n.style,position:n.fullScreen?"fixed":"absolute",top:"0",left:"0",width:"100%",height:"100%"}},S("mask")),i=n.template?h.ObjectUtils.getJSXElement(n.template,n):null,a=(0,t.jsx)("div",{ref:C,...l,children:i});return(0,t.jsx)(b.Portal,{element:a,appendTo:e,onMounted:q})}return null})(),D=o({id:n.id,ref:j,style:n.containerStyle,className:(0,x.classNames)(n.containerClassName,N("root")),"aria-busy":n.blocked},B.getOtherProps(n),S("root"));return(0,t.jsxs)("div",{...D,children:[n.children,w]})});v.displayName="BlockUI";var j=e.i(59354);function C(e){let[o,c]=(0,a.useState)(!1),s={basic:`
<div className="mb-3">
    <Button label="Block" onClick={() => setBlocked(true)} className="mr-2"></Button>
    <Button label="Unblock" onClick={() => setBlocked(false)} severity="secondary"></Button>
</div>
<BlockUI blocked={blocked}>
    <Panel header="Basic">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
        </p>
    </Panel>
</BlockUI>
        `,javascript:`
import React, { useState } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const [blocked, setBlocked] = useState(false);

    return (
        <div className="card">
            <div className="mb-3">
                <Button label="Block" onClick={() => setBlocked(true)} className="mr-2"></Button>
                <Button label="Unblock" onClick={() => setBlocked(false)} severity="secondary"></Button>
            </div>
            <BlockUI blocked={blocked}>
                <Panel header="Basic">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                </Panel>
            </BlockUI>
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const [blocked, setBlocked] = useState<boolean>(false);

    return (
        <div className="card">
            <div className="mb-3">
                <Button label="Block" onClick={() => setBlocked(true)} className="mr-2"></Button>
                <Button label="Unblock" onClick={() => setBlocked(false)} severity="secondary"></Button>
            </div>
            <BlockUI blocked={blocked}>
                <Panel header="Basic">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                </Panel>
            </BlockUI>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["The element to block should be placed as a child of BlockUI and ",(0,t.jsx)("i",{children:"blocked"})," property is required to control the state."]})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)(n.Button,{label:"Block",onClick:()=>c(!0),className:"mr-2"}),(0,t.jsx)(n.Button,{label:"Unblock",onClick:()=>c(!1),severity:"secondary"})]}),(0,t.jsx)(v,{blocked:o,children:(0,t.jsx)(j.Panel,{header:"Basic",children:(0,t.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})]}),(0,t.jsx)(i.DocSectionCode,{code:s})]})}function y(e){let[o,c]=(0,a.useState)(!1);(0,a.useEffect)(()=>{o&&setTimeout(()=>{c(!1)},3e3)},[o]);let s={basic:`
<BlockUI blocked={blocked} fullScreen />
<Button label="Block" onClick={() => setBlocked(true)} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export default function DocumentDemo() {
    const [blocked, setBlocked] = useState(false);

    useEffect(() => {
        if (blocked) {
            setTimeout(() => {
                setBlocked(false);
            }, 3000);
        }
    }, [blocked]);

    return (
        <div className="card">
            <BlockUI blocked={blocked} fullScreen />
            <Button label="Block" onClick={() => setBlocked(true)} />
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export default function DocumentDemo() {
    const [blocked, setBlocked] = useState<boolean>(false);

    useEffect(() => {
        if (blocked) {
            setTimeout(() => {
                setBlocked(false);
            }, 3000);
        }
    }, [blocked]);

    return (
        <div className="card">
            <BlockUI blocked={blocked} fullScreen />
            <Button label="Block" onClick={() => setBlocked(true)} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Enabling ",(0,t.jsx)("i",{children:"fullScreen"})," property controls the document."]})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(v,{blocked:o,fullScreen:!0}),(0,t.jsx)(n.Button,{label:"Block",onClick:()=>c(!0)})]}),(0,t.jsx)(i.DocSectionCode,{code:s})]})}function S(e){let o={basic:`
import { BlockUI } from 'primereact/blockui';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:o,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}let N=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/blockui.jpg",alt:"blockui"})})]});function U(e){let[o,c]=(0,a.useState)(!0),s={basic:`
<BlockUI blocked={blocked} template={<i className="pi pi-lock" style={{ fontSize: '3rem' }}></i>}>
    <Panel header="Prime React News">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
        </p>
    </Panel>
</BlockUI>
<div className="mt-3 flex flex-column align-items-center">
    <h3>Continue reading?</h3>
    <Button label={buttonText} onClick={() => setBlocked((oldState) => !oldState)}></Button>
</div>
        `,javascript:`
import React, { useState } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const [blocked, setBlocked] = useState(false);
    const buttonText = blocked ? 'Subscribe' : 'Unsubscribe';

    return (
       <div className="card">
            <BlockUI blocked={blocked} template={<i className="pi pi-lock" style={{ fontSize: '3rem' }}></i>}>
                <Panel header="Prime React News">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                </Panel>
            </BlockUI>
            <div className="mt-3 flex flex-column align-items-center">
                <h3>Continue reading?</h3>
                <Button label={buttonText} onClick={() => setBlocked((oldState) => !oldState)}></Button>
            </div>
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const [blocked, setBlocked] = useState<boolean>(false);
    const buttonText = blocked ? 'Subscribe' : 'Unsubscribe';

    return (
       <div className="card">
            <BlockUI blocked={blocked} template={<i className="pi pi-lock" style={{ fontSize: '3rem' }}></i>}>
                <Panel header="Prime React News">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                </Panel>
            </BlockUI>
            <div className="mt-3 flex flex-column align-items-center">
                <h3>Continue reading?</h3>
                <Button label={buttonText} onClick={() => setBlocked((oldState) => !oldState)}></Button>
            </div>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Custom content can be placed inside the modal layer using the ",(0,t.jsx)("i",{children:"template"})," property."]})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(v,{blocked:o,template:(0,t.jsx)("i",{className:"pi pi-lock",style:{fontSize:"3rem"}}),children:(0,t.jsx)(j.Panel,{header:"Prime React News",children:(0,t.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),(0,t.jsxs)("div",{className:"mt-3 flex flex-column align-items-center",children:[(0,t.jsx)("h3",{children:"Continue reading?"}),(0,t.jsx)(n.Button,{label:o?"Subscribe":"Unsubscribe",onClick:()=>c(e=>!e)})]})]}),(0,t.jsx)(i.DocSectionCode,{code:s})]})}function I(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-blockui"}),(0,t.jsx)("td",{children:"Mask element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-blockui-document"}),(0,t.jsx)("td",{children:"Mask element in full screen mode."})]})]})]})})]})}var T=e.i(41158);function P(e){let o={basic:`
const Tailwind = {          
    blockui: {
        root: 'relative',
        mask: 'bg-black/40'
    }
}
    `},n={javascript:`
import React, { useState } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export default function UnstyledDemo() {
    const [blocked, setBlocked] = useState(false);

    return (
        <div className="card">
            <div className="mb-3">
                <Button label="Block" onClick={() => setBlocked(true)} className="mr-2"></Button>
                <Button label="Unblock" onClick={() => setBlocked(false)}></Button>
            </div>
            <BlockUI blocked={blocked}>
                <Panel header="Basic">
                    <p className="text-gray-700 dark:text-white/80 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                </Panel>
            </BlockUI>
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(l.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(T.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(i.DocSectionCode,{code:o,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(i.DocSectionCode,{code:n,embedded:!0})]})})}var q=e.i(88850),w=e.i(82948);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:N},{id:"pt.blockui.options",label:"BlockUI PT Options",component:q.default}];return(0,t.jsx)(w.DocComponent,{title:"React BlockUI Component",header:"BlockUI",description:"BlockUI can block certain elements or the whole page.",componentDocs:[{id:"import",label:"Import",component:S},{id:"basic",label:"Basic",component:C},{id:"document",label:"Document",component:y},{id:"template",label:"Template",component:U},{id:"accessibility",label:"Accessibility",component:o}],apiDocs:["BlockUI"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:I},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:P}]}]})}],39652)},73347,(e,t,l)=>{let o="/blockui";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(39652)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})}]);