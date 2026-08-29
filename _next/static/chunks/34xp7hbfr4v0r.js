(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,73461,e=>{"use strict";var i=e.i(91398),a=e.i(28137);function t(){return(0,i.jsxs)(a.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,i.jsx)("h3",{children:"Screen Reader"}),(0,i.jsxs)("p",{children:["Accordion header elements have a ",(0,i.jsx)("i",{children:"button"})," role and use ",(0,i.jsx)("i",{children:"aria-controls"})," to define the id of the content section along with ",(0,i.jsx)("i",{children:"aria-expanded"})," for the visibility state. The value to read a header element defaults to the value of the ",(0,i.jsx)("i",{children:"header"})," property and can be customized by defining an ",(0,i.jsx)("i",{children:"aria-label"})," or ",(0,i.jsx)("i",{children:"aria-labelledby"})," via the ",(0,i.jsx)("i",{children:"headerProps"})," property."]}),(0,i.jsxs)("p",{children:["The content uses ",(0,i.jsx)("i",{children:"region"})," role, defines an id that matches the ",(0,i.jsx)("i",{children:"aria-controls"})," of the header and ",(0,i.jsx)("i",{children:"aria-labelledby"})," referring to the id of the header."]}),(0,i.jsx)("h3",{children:"Header Keyboard Support"}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Key"}),(0,i.jsx)("th",{children:"Function"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"tab"})}),(0,i.jsx)("td",{children:"Moves focus to the next the focusable element in the page tab sequence."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("i",{children:"shift"})," + ",(0,i.jsx)("i",{children:"tab"})]}),(0,i.jsx)("td",{children:"Moves focus to the previous the focusable element in the page tab sequence."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"enter"})}),(0,i.jsx)("td",{children:"Toggles the visibility of the content."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"space"})}),(0,i.jsx)("td",{children:"Toggles the visibility of the content."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"down arrow"})}),(0,i.jsx)("td",{children:"Moves focus to the next header."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"up arrow"})}),(0,i.jsx)("td",{children:"Moves focus to the previous header."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"home"})}),(0,i.jsx)("td",{children:"Moves focus to the first header."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"end"})}),(0,i.jsx)("td",{children:"Moves focus to the last header."})]})]})]})})]})}var o=e.i(5180),n=e.i(91788),s=e.i(10836),r=e.i(15498),u=e.i(87350),c=e.i(60150),d=e.i(20484),l=e.i(48214),m=e.i(75676),p=e.i(45543),b=e.i(75366),h=e.i(51551),q=e.i(28653),v=e.i(3935);let x=`
@layer primereact {
    .p-accordion-header-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        user-select: none;
        position: relative;
        text-decoration: none;
    }
    
    .p-accordion-header-link:focus {
        z-index: 1;
    }
    
    .p-accordion-header-text {
        line-height: 1;
        width: 100%;
    }
}
`,g=r.ComponentBase.extend({defaultProps:{__TYPE:"Accordion",id:null,activeIndex:null,className:null,style:null,multiple:!1,expandIcon:null,collapseIcon:null,transitionOptions:null,onTabOpen:null,onTabClose:null,onTabChange:null,children:void 0},css:{classes:{root:"p-accordion p-component",accordiontab:{root:({selected:e})=>(0,v.classNames)("p-accordion-tab",{"p-accordion-tab-active":e}),content:"p-accordion-content",header:({selected:e,getTabProp:i,tab:a})=>(0,v.classNames)("p-accordion-header",{"p-highlight":e,"p-disabled":i(a,"disabled")}),headeraction:"p-accordion-header-link",headericon:"p-accordion-toggle-icon",headertitle:"p-accordion-header-text",toggleablecontent:"p-toggleable-content",transition:"p-toggleable-content"}},styles:x}}),f=r.ComponentBase.extend({defaultProps:{__TYPE:"AccordionTab",className:null,contentClassName:null,contentStyle:null,disabled:!1,header:null,headerClassName:null,headerStyle:null,headerTemplate:null,style:null,tabIndex:0,children:void 0},getCProp:(e,i)=>h.ObjectUtils.getComponentProp(e,i,f.defaultProps),getCProps:e=>h.ObjectUtils.getComponentProps(e,f.defaultProps),getCOtherProps:e=>h.ObjectUtils.getComponentDiffProps(e,f.defaultProps)}),A=()=>{},N=n.forwardRef((e,a)=>{let t=(0,c.useMergeProps)(),o=n.useContext(s.PrimeReactContext),x=g.getProps(e,o),[A,N]=n.useState(x.id),[j,T]=n.useState(x.activeIndex),I=n.useRef(null),y=x.onTabChange?x.activeIndex:j,w=n.Children.count(x.children),C={props:x,state:{id:A,activeIndex:j}},{ptm:D,ptmo:S,cx:E,isUnstyled:H}=g.setMetaData({...C});(0,r.useHandleStyle)(g.css.styles,H,{name:"accordion"});let B=(e,i)=>f.getCProp(e,i),k=(e,i,a)=>{let o={parent:C,context:{index:a,count:w,first:0===a,last:a===w-1,selected:z(a),disabled:B(e,"disabled")}};return t(D(`tab.${i}`,{tab:o}),D(`accordiontab.${i}`,{accordiontab:o}),D(`accordiontab.${i}`,o),S(B(e,"pt"),i,o))},U=(e,i,a)=>{if(!B(i,"disabled")){let i=z(a),t=null;if(x.multiple){let e=y||[];t=i?e.filter(e=>e!==a):[...e,a]}else t=i?null:a;let o=i?x.onTabClose:x.onTabOpen;o&&o({originalEvent:e,index:a}),x.onTabChange?x.onTabChange({originalEvent:e,index:t}):T(t)}e.preventDefault()},_=e=>{M(O()),e.preventDefault()},P=e=>{M(F()),e.preventDefault()},L=(e,i=!1)=>{let a=i?e:e.nextElementSibling,t=p.DomHandler.findSingle(a,'[data-pc-section="header"]');return t?p.DomHandler.getAttribute(t,"data-p-disabled")?L(t.parentElement):p.DomHandler.findSingle(t,'[data-pc-section="headeraction"]'):null},R=(e,i=!1)=>{let a=i?e:e.previousElementSibling,t=p.DomHandler.findSingle(a,'[data-pc-section="header"]');return t?p.DomHandler.getAttribute(t,"data-p-disabled")?R(t.parentElement):p.DomHandler.findSingle(t,'[data-pc-section="headeraction"]'):null},O=()=>L(I.current.firstElementChild,!0),F=()=>R(I.current.lastElementChild,!0),M=e=>{e&&p.DomHandler.focus(e)},z=e=>x.multiple&&Array.isArray(y)?y&&y.some(i=>i===e):y===e;if(n.useImperativeHandle(a,()=>({props:x,getElement:()=>I.current})),(0,d.useMountEffect)(()=>{A||N((0,q.UniqueComponentId)())}),!A)return null;let X=n.Children.map(x.children,(e,a)=>{if(h.ObjectUtils.isValidChild(e,"AccordionTab")){let o,s,r,c,d,p,q,g,N,j,T,I,y,w,C,D,S,H,O,F=A+"_"+a,X=z(a),K=(o={...B(e,"style")||{},...B(e,"headerStyle")||{}},s=A+"_header_"+a,r=A+"_content_"+a,c=B(e,"disabled")?-1:B(e,"tabIndex"),d=t({className:E("accordiontab.headertitle")},k(e,"headertitle",a)),p=f.getCProps(e),q=B(e,"headerTemplate")?h.ObjectUtils.getJSXElement(B(e,"headerTemplate"),p):(0,i.jsx)("span",{...d,children:h.ObjectUtils.getJSXElement(B(e,"header"),p)}),g=t({"aria-hidden":"true",className:E("accordiontab.headericon")},k(e,"headericon",a)),N=X?x.collapseIcon||(0,i.jsx)(l.ChevronDownIcon,{...g}):x.expandIcon||(0,i.jsx)(m.ChevronRightIcon,{...g}),j=b.IconUtils.getJSXIcon(N,{...g},{props:x,selected:X}),T=t({className:(0,v.classNames)(B(e,"headerClassName"),B(e,"className"),E("accordiontab.header",{selected:X,getTabProp:B,tab:e})),style:o,"data-p-highlight":X,"data-p-disabled":B(e,"disabled")},k(e,"header",a)),I=t({id:s,href:"#"+r,className:E("accordiontab.headeraction"),role:"button",tabIndex:c,onClick:i=>{U(i,e,a)},onKeyDown:i=>((e,i,a)=>{var t,o,n;switch(e.code){case"ArrowDown":let s;(s=L((t=e).target.parentElement.parentElement))?M(s):_(t),t.preventDefault();break;case"ArrowUp":let r;(r=R((o=e).target.parentElement.parentElement))?M(r):P(o),o.preventDefault();break;case"Home":_(e);break;case"End":P(e);break;case"Enter":case"NumpadEnter":case"Space":U(n=e,i,a),n.preventDefault()}})(i,e,a),"aria-disabled":B(e,"disabled"),"aria-controls":r,"aria-expanded":X},k(e,"headeraction",a)),(0,i.jsx)("div",{...T,children:(0,i.jsxs)("a",{...I,children:[j,q]})})),V=(y={...B(e,"style")||{},...B(e,"contentStyle")||{}},w=A+"_content_"+a,C=A+"_header_"+a,S=t({id:w,ref:D=n.createRef(),className:(0,v.classNames)(B(e,"contentClassName"),B(e,"className"),E("accordiontab.toggleablecontent")),style:y,role:"region","aria-labelledby":C},k(e,"toggleablecontent",a)),H=t({className:E("accordiontab.content")},k(e,"content",a)),O=t({classNames:E("accordiontab.transition"),timeout:{enter:1e3,exit:450},in:X,unmountOnExit:!0,options:x.transitionOptions},k(e,"transition",a)),(0,i.jsx)(u.CSSTransition,{nodeRef:D,...O,children:(0,i.jsx)("div",{...S,children:(0,i.jsx)("div",{...H,children:B(e,"children")})})})),J=t({className:E("accordiontab.root",{selected:X})},f.getCOtherProps(e),k(e,"root",a));return(0,n.createElement)("div",{...J,key:F,children:[K,V]})}return null}),K=t({className:(0,v.classNames)(x.className,E("root")),style:x.style},g.getOtherProps(x),D("root"));return(0,i.jsx)("div",{id:A,ref:I,...K,children:X})});function j(e){let t={basic:`
<Accordion activeIndex={0}>
    <AccordionTab header="Header I">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </AccordionTab>
    <AccordionTab header="Header II">
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </AccordionTab>
    <AccordionTab header="Header III">
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </AccordionTab>
</Accordion>
        `,javascript:`
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function BasicDemo() {
    return (
        <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function BasicDemo() {
    return (
        <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Accordion consists of one or more AccordionTab elements which are collapsed by default. Tab to expand initially can be defined with the ",(0,i.jsx)("i",{children:"activeIndex"})," property."]})}),(0,i.jsx)("div",{className:"card",children:(0,i.jsxs)(N,{activeIndex:0,children:[(0,i.jsx)(A,{header:"Header I",children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),(0,i.jsx)(A,{header:"Header II",children:(0,i.jsx)("p",{className:"m-0",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."})}),(0,i.jsx)(A,{header:"Header III",children:(0,i.jsx)("p",{className:"m-0",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})})]})}),(0,i.jsx)(o.DocSectionCode,{code:t})]})}A.displayName="AccordionTab",N.displayName="Accordion";var T=e.i(57724);function I(e){let[t,s]=(0,n.useState)(null),r={basic:`
<div className="flex flex-wrap justify-content-end gap-2 mb-3">
    <Button outlined={activeIndex !== 0} rounded label="1" onClick={() => setActiveIndex(0)} className="w-2rem h-2rem p-0" />
    <Button outlined={activeIndex !== 1} rounded label="2" onClick={() => setActiveIndex(1)} className="w-2rem h-2rem p-0" />
    <Button outlined={activeIndex !== 2} rounded label="3" onClick={() => setActiveIndex(2)} className="w-2rem h-2rem p-0" />
</div>
<Accordion multiple activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
    <AccordionTab header="Header I">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </AccordionTab>
    <AccordionTab header="Header II">
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </AccordionTab>
    <AccordionTab header="Header III">
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </AccordionTab>
</Accordion>
        `,javascript:`
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';

export default function ControlledDoc() {
    const [activeIndex, setActiveIndex] = useState();

    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-end gap-2 mb-3">
                <Button outlined={activeIndex !== 0} rounded label="1" onClick={() => setActiveIndex(0)} className="w-2rem h-2rem p-0" />
                <Button outlined={activeIndex !== 1} rounded label="2" onClick={() => setActiveIndex(1)} className="w-2rem h-2rem p-0" />
                <Button outlined={activeIndex !== 2} rounded label="3" onClick={() => setActiveIndex(2)} className="w-2rem h-2rem p-0" />
            </div>
            <Accordion multiple activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <AccordionTab header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';

export default function ControlledDoc() {
    const [activeIndex, setActiveIndex] = useState<number | number[]>();

    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-end gap-2 mb-3">
                <Button outlined={activeIndex !== 0} rounded label="1" onClick={() => setActiveIndex(0)} className="w-2rem h-2rem p-0" />
                <Button outlined={activeIndex !== 1} rounded label="2" onClick={() => setActiveIndex(1)} className="w-2rem h-2rem p-0" />
                <Button outlined={activeIndex !== 2} rounded label="3" onClick={() => setActiveIndex(2)} className="w-2rem h-2rem p-0" />
            </div>
            <Accordion multiple activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <AccordionTab header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Accordion can be controlled programmatically using a binding to ",(0,i.jsx)("i",{children:"activeIndex"})," along with ",(0,i.jsx)("i",{children:"onTabChange"})," event to update the active index."]})}),(0,i.jsx)("div",{className:"accordion-demo",children:(0,i.jsxs)("div",{className:"card",children:[(0,i.jsxs)("div",{className:"flex flex-wrap justify-content-end gap-2 mb-3",children:[(0,i.jsx)(T.Button,{outlined:0!==t,rounded:!0,label:"1",onClick:()=>s(0),className:"w-2rem h-2rem p-0"}),(0,i.jsx)(T.Button,{outlined:1!==t,rounded:!0,label:"2",onClick:()=>s(1),className:"w-2rem h-2rem p-0"}),(0,i.jsx)(T.Button,{outlined:2!==t,rounded:!0,label:"3",onClick:()=>s(2),className:"w-2rem h-2rem p-0"})]}),(0,i.jsxs)(N,{multiple:!0,activeIndex:t,onTabChange:e=>s(e.index),children:[(0,i.jsx)(A,{header:"Header I",children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),(0,i.jsx)(A,{header:"Header II",children:(0,i.jsx)("p",{className:"m-0",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."})}),(0,i.jsx)(A,{header:"Header III",children:(0,i.jsx)("p",{className:"m-0",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})})]})]})}),(0,i.jsx)(o.DocSectionCode,{code:r})]})}function y(e){let t={basic:`
<Accordion activeIndex={0}>
    <AccordionTab header="Header I">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </AccordionTab>
    <AccordionTab header="Header II">
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </AccordionTab>
    <AccordionTab header="Header III">
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </AccordionTab>
    <AccordionTab header="Header IV" disabled></AccordionTab>
</Accordion>
        `,javascript:`
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function DisabledDemo() {
    return (
        <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header IV" disabled></AccordionTab>
            </Accordion>
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function DisabledDemo() {
    return (
        <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header IV" disabled></AccordionTab>
            </Accordion>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Enabling ",(0,i.jsx)("i",{children:"disabled"})," property of an AccordionTab prevents user interaction."]})}),(0,i.jsx)("div",{className:"card",children:(0,i.jsxs)(N,{activeIndex:0,children:[(0,i.jsx)(A,{header:"Header I",children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),(0,i.jsx)(A,{header:"Header II",children:(0,i.jsx)("p",{className:"m-0",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."})}),(0,i.jsx)(A,{header:"Header III",children:(0,i.jsx)("p",{className:"m-0",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})}),(0,i.jsx)(A,{header:"Header IV",disabled:!0})]})}),(0,i.jsx)(o.DocSectionCode,{code:t})]})}function w(e){let[t]=(0,n.useState)([{header:"Title I",children:(0,i.jsx)("p",{className:"m-0",children:"Content 1"})},{header:"Title II",children:(0,i.jsx)("p",{className:"m-0",children:"Content 2 "})},{header:"Title III",children:(0,i.jsx)("p",{className:"m-0",children:"Content 3 "})}]),s={basic:`
 <Accordion>{createDynamicTabs()}</Accordion>
        `,javascript:`
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function DynamicDemo() {
    const [tabs] = useState([
        {
            header: 'Title I',
            children: <p className="m-0">Content 1</p>
        },
        {
            header: 'Title II',
            children: <p className="m-0">Content 2 </p>
        },
        {
            header: 'Title III',
            children: <p className="m-0">Content 3 </p>
        }
    ]);

    const createDynamicTabs = () => {
        return tabs.map((tab, i) => {
            return (
                <AccordionTab key={tab.header} header={tab.header} disabled={tab.disabled}>
                    {tab.children}
                </AccordionTab>
            );
        });
    };

    return (
        <div className="card">
             <Accordion>{createDynamicTabs()}</Accordion>
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function DynamicDemo() {
    const [tabs] = useState([
        {
            header: 'Title I',
            children: <p className="m-0">Content 1</p>
        },
        {
            header: 'Title II',
            children: <p className="m-0">Content 2 </p>
        },
        {
            header: 'Title III',
            children: <p className="m-0">Content 3 </p>
        }
    ]);

    const createDynamicTabs = () => {
        return tabs.map((tab, i) => {
            return (
                <AccordionTab key={tab.header} header={tab.header} disabled={tab.disabled}>
                    {tab.children}
                </AccordionTab>
            );
        });
    };
    
    return (
        <div className="card">
            <Accordion>{createDynamicTabs()}</Accordion>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"Accordion tabs can be generated dynamically using code."})}),(0,i.jsx)("div",{className:"card",children:(0,i.jsx)(N,{activeIndex:0,children:t.map((e,a)=>(0,i.jsx)(A,{header:e.header,disabled:e.disabled,children:e.children},e.header))})}),(0,i.jsx)(o.DocSectionCode,{code:s})]})}function C(e){let t={basic:`
import { Accordion, AccordionTab } from 'primereact/accordion';
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.DocSectionText,{...e}),(0,i.jsx)(o.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function D(e){let t={basic:`
<Accordion multiple activeIndex={[0]}>
    <AccordionTab header="Header I">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </AccordionTab>
    <AccordionTab header="Header II">
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </AccordionTab>
    <AccordionTab header="Header III">
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </AccordionTab>
</Accordion>
        `,javascript:`
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function MultipleDemo() {
    return (
        <div className="card">
            <Accordion multiple activeIndex={[0]}>
                <AccordionTab header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function MultipleDemo() {
    return (
        <div className="card">
            <Accordion multiple activeIndex={[0]}>
                <AccordionTab header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Only one tab at a time can be active by default, enabling ",(0,i.jsx)("i",{children:"multiple"})," property changes this behavior to allow multiple tabs. In this case ",(0,i.jsx)("i",{children:"activeIndex"})," needs to be an array."]})}),(0,i.jsx)("div",{className:"card",children:(0,i.jsxs)(N,{multiple:!0,activeIndex:[0],children:[(0,i.jsx)(A,{header:"Header I",children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),(0,i.jsx)(A,{header:"Header II",children:(0,i.jsx)("p",{className:"m-0",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."})}),(0,i.jsx)(A,{header:"Header III",children:(0,i.jsx)("p",{className:"m-0",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})})]})}),(0,i.jsx)(o.DocSectionCode,{code:t})]})}let S=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.DocSectionText,{...e}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/accordion.jpg",alt:"accordion"})})]});var E=e.i(10197),H=e.i(50989);function B(e){let t={basic:`
<Accordion activeIndex={0}>
    <AccordionTab
        header={
            <span className="flex align-items-center gap-2 w-full">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Amy Elsner</span>
                <Badge value="3" className="ml-auto" />
            </span>
        }
    >
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </AccordionTab>
    <AccordionTab
        header={
            <span className="flex align-items-center gap-2 w-full">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Onyama Limba</span>
                <Badge value="4" className="ml-auto" />
            </span>
        }
    >
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </AccordionTab>
    <AccordionTab
        header={
            <span className="flex align-items-center gap-2 w-full">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Ioni Bowcher</span>
                <Badge value="2" className="ml-auto" />
            </span>
        }
    >
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </AccordionTab>
</Accordion>
        `,javascript:`
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    return (
        <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                            <span className="font-bold white-space-nowrap">Amy Elsner</span>
                            <Badge value="3" className="ml-auto" />
                        </span>
                    }
                >
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                            <span className="font-bold white-space-nowrap">Onyama Limba</span>
                            <Badge value="4" className="ml-auto" />
                        </span>
                    }
                >
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" shape="circle" />
                            <span className="font-bold white-space-nowrap">Ioni Bowcher</span>
                            <Badge value="2" className="ml-auto" />
                        </span>
                    }
                >
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    return (
        <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                            <span className="font-bold white-space-nowrap">Amy Elsner</span>
                            <Badge value="3" className="ml-auto" />
                        </span>
                    }
                >
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                            <span className="font-bold white-space-nowrap">Onyama Limba</span>
                            <Badge value="4" className="ml-auto" />
                        </span>
                    }
                >
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab
                    header={
                        <span className="flex align-items-center gap-2 w-full">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" shape="circle" />
                            <span className="font-bold white-space-nowrap">Ioni Bowcher</span>
                            <Badge value="2" className="ml-auto" />
                        </span>
                    }
                >
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt 
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Title section of a tab is customized with the ",(0,i.jsx)("i",{children:"header"})," property."]})}),(0,i.jsx)("div",{className:"card",children:(0,i.jsxs)(N,{activeIndex:0,children:[(0,i.jsx)(A,{header:(0,i.jsxs)("span",{className:"flex align-items-center gap-2 w-full",children:[(0,i.jsx)(E.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",shape:"circle"}),(0,i.jsx)("span",{className:"font-bold white-space-nowrap",children:"Amy Elsner"}),(0,i.jsx)(H.Badge,{value:"3",className:"ml-auto"})]}),children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),(0,i.jsx)(A,{header:(0,i.jsxs)("span",{className:"flex align-items-center gap-2 w-full",children:[(0,i.jsx)(E.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png",shape:"circle"}),(0,i.jsx)("span",{className:"font-bold white-space-nowrap",children:"Onyama Limba"}),(0,i.jsx)(H.Badge,{value:"4",className:"ml-auto"})]}),children:(0,i.jsx)("p",{className:"m-0",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."})}),(0,i.jsx)(A,{header:(0,i.jsxs)("span",{className:"flex align-items-center gap-2 w-full",children:[(0,i.jsx)(E.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png",shape:"circle"}),(0,i.jsx)("span",{className:"font-bold white-space-nowrap",children:"Ioni Bowcher"}),(0,i.jsx)(H.Badge,{value:"2",className:"ml-auto"})]}),children:(0,i.jsx)("p",{className:"m-0",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})})]})}),(0,i.jsx)(o.DocSectionCode,{code:t})]})}function k(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Element"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-accordion"}),(0,i.jsx)("td",{children:"Container element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-accordion-header"}),(0,i.jsx)("td",{children:"Header of a tab."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-accordion-content"}),(0,i.jsx)("td",{children:"Container of a tab."})]})]})]})})]})}var U=e.i(41158);function _(e){let t={basic:`
const TRANSITIONS = {
    toggleable: {
        timeout: 500,
        classNames: {
          enter: 'max-h-0',
          enterActive:
            '!max-h-[1000px] overflow-hidden transition-[max-height] duration-500 ease-in',
          exit: 'max-h-[1000px]',
          exitActive:
            '!max-h-0 overflow-hidden transition-[max-height] duration-500 ease-out',
        }
    }
};

const Tailwind = {  
    accordion: {
        root: 'mb-1',
        accordiontab: {
            root: 'mb-1',
            header: ({ props }) => ({
                className: classNames(
                    { 'select-none pointer-events-none cursor-default opacity-60': props?.disabled } // Condition
                )
            }),
            headerAction: ({ context }) => ({
                className: classNames(
                    'flex items-center cursor-pointer relative no-underline select-none', // Alignments
                    'p-5 transition duration-200 ease-in-out rounded-t-md font-bold transition-shadow duration-200', // Padding and transition
                    'border border-gray-300 bg-gray-100 text-gray-600', // Borders and colors
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // Dark mode
                    'hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800', // Hover
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                    { 'rounded-br-md rounded-bl-md': !context.selected, 'rounded-br-0 rounded-bl-0 text-gray-800': context.selected } // Condition
                )
            }),
            headerIcon: 'inline-block mr-2',
            headerTitle: 'leading-none',
            content: {
                className: classNames(
                    'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
                )
            },
            transition: TRANSITIONS.toggleable
        }
    }
}
        `},n={javascript:`
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function UnstyledDemo() {
    return (
        <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
    )
}
    `};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a.DocSectionText,{...e,children:[(0,i.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,i.jsx)(U.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,i.jsx)(o.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,i.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,i.jsx)(o.DocSectionCode,{code:n,embedded:!0})]})})}var P=e.i(88850),L=e.i(82948);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:S},{id:"pt.accordion.options",label:"Accordion PT Options",component:P.default},{id:"pt.accordiontab.options",label:"AccordionTab PT Options",component:P.default}];return(0,i.jsx)(L.DocComponent,{title:"React Accordion Component",header:"Accordion",description:"Accordion groups a collection of contents in tabs.",componentDocs:[{id:"import",label:"Import",component:C},{id:"basic",label:"Basic",component:j},{id:"dynamic",label:"Dynamic",component:w},{id:"multiple",label:"Multiple",component:D},{id:"disabled",label:"Disabled",component:y},{id:"controlled",label:"Controlled",component:I},{id:"template",label:"Template",component:B},{id:"accessibility",label:"Accessibility",component:t}],apiDocs:["Accordion","AccordionTab"],ptDocs:e,ptDescription:"",themingDocs:[{id:"styled",label:"Styled",component:k},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:_}]}]})}],73461)},78413,(e,i,a)=>{let t="/accordion";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(73461)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([t])})}]);