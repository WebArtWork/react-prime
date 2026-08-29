(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,92165,e=>{"use strict";var r=e.i(91398),t=e.i(88850),n=e.i(82948),a=e.i(28137);function i(){return(0,r.jsxs)(a.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,r.jsx)("h3",{children:"Screen Reader"}),(0,r.jsxs)("p",{children:["Stepper container is defined with the ",(0,r.jsx)("i",{children:"tablist"})," role, as any attribute is passed to the container element ",(0,r.jsx)("i",{children:"aria-labelledby"})," can be optionally used to specify an element to describe the Stepper. Each stepper header has a",(0,r.jsx)("i",{children:"tab"})," role and ",(0,r.jsx)("i",{children:"aria-controls"})," to refer to the corresponding stepper content element. The content element of each stepper has ",(0,r.jsx)("i",{children:"tabpanel"})," role, an id to match the ",(0,r.jsx)("i",{children:"aria-controls"})," of the header and",(0,r.jsx)("i",{children:"aria-labelledby"})," reference to the header as the accessible name."]}),(0,r.jsx)("h3",{children:"Tab Header Keyboard Support"}),(0,r.jsx)("div",{className:"doc-tablewrapper",children:(0,r.jsxs)("table",{className:"doc-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Key"}),(0,r.jsx)("th",{children:"Function"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("i",{children:"tab"})}),(0,r.jsx)("td",{children:"Moves focus through the header."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("i",{children:"enter"})}),(0,r.jsx)("td",{children:"Activates the focused stepper header."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("i",{children:"space"})}),(0,r.jsx)("td",{children:"Activates the focused stepper header."})]})]})]})})]})}var l=e.i(5180),s=e.i(57724),p=e.i(91788),o=e.i(10836),d=e.i(15498),c=e.i(87350),f=e.i(60150),u=e.i(20484),h=e.i(71834),m=e.i(28653),x=e.i(3935),b=e.i(51551);let v=`
@layer primereact {
    .p-stepper .p-stepper-nav {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style-type: none;
        overflow-x: auto;
    }

    .p-stepper-vertical .p-stepper-nav {
        flex-direction: column;
    }

    .p-stepper-header {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        align-items: center;

        &:last-of-type {
            flex: initial;
        }
    }

    .p-stepper-header-bottom {
        align-items: flex-start;
    }

    .p-stepper-header-top {
        align-items: flex-end;
    }

    .p-stepper-header-right, .p-stepper-header-left {
        align-items: center;
    }

    .p-stepper-header .p-stepper-action {
        border: 0 none;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        cursor: pointer;

        &:focus-visible {
            @include focused();
        }
    }

    .p-stepper-header-bottom .p-stepper-action {
        flex-direction: column;
    }

    .p-stepper-header-top .p-stepper-action {
        flex-direction: column-reverse;
    }

    .p-stepper-header-left .p-stepper-action {
        flex-direction: row-reverse;
    }

    .p-stepper.p-stepper-readonly .p-stepper-header {
        cursor: auto;
    }

    .p-stepper-header.p-highlight .p-stepper-action {
        cursor: default;
    }

    .p-stepper-title {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }

    .p-stepper-number {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-stepper-separator {
        flex: 1 1 0;
    }
}
`,j=d.ComponentBase.extend({defaultProps:{__TYPE:"Stepper",activeStep:0,orientation:"horizontal",headerPosition:"right",linear:!1,onChangeStep:null,start:null,end:null,children:void 0},css:{classes:{root:({props:e})=>(0,x.classNames)("p-stepper p-component",{"p-stepper-horizontal":"horizontal"===e.orientation,"p-stepper-vertical":"vertical"===e.orientation,"p-readonly":e.linear}),nav:"p-stepper-nav",stepper:{header:({isStepActive:e,isItemDisabled:r,index:t,headerPosition:n,orientation:a})=>(0,x.classNames)("p-stepper-header",{"p-highlight":e(t),"p-disabled":r(t),[`p-stepper-header-${n}`]:"horizontal"===a}),action:"p-stepper-action p-component",number:"p-stepper-number",title:"p-stepper-title",separator:"p-stepper-separator",toggleableContent:"p-stepper-toggleable-content",content:({props:e})=>(0,x.classNames)("p-stepper-content",{"p-toggleable-content":"vertical"===e.orientation}),panel:({props:e,isStepActive:r,index:t})=>(0,x.classNames)("p-stepper-panel",{"p-stepper-panel-active":"vertical"===e.orientation&&r(t)})},panelContainer:"p-stepper-panels",start:"p-stepper-start",end:"p-stepper-end"},styles:v}}),S=p.memo(p.forwardRef((e,t)=>{let n,a=(0,f.useMergeProps)(),{cx:i}=e,l=a({ref:t,id:e.id,className:i("stepper.content",{stepperpanel:e.stepperpanel,index:e.index}),role:"tabpanel","aria-labelledby":e.ariaLabelledby,...e.getStepPT(e.stepperpanel,"root",e.index),...e.getStepPT(e.stepperpanel,"content",e.index),"data-p-active":e.active});return(0,r.jsx)("div",{...l,children:e.template?(n=e.template,(0,r.jsx)(n,{index:e.index,active:e.active,highlighted:e.highlighted,clickCallback:r=>e.onItemClick(r,e.index),prevCallback:r=>e.prevCallback(r,e.index),nextCallback:r=>e.nextCallback(r,e.index)})):e.stepperpanel})}));S.displayName="StepperContent";let g=p.memo(p.forwardRef((e,t)=>{let n=(0,f.useMergeProps)(),{cx:a}=e,i=n({ref:t,id:e.id,className:a("stepper.action"),role:"tab",type:"button",tabIndex:e.disabled?-1:void 0,"aria-controls":e.ariaControls,onClick:r=>e.clickCallback(r,e.index),...e.getStepPT(e.stepperpanel,"action",e.index)}),l=n({className:a("stepper.number"),...e.getStepPT(e.stepperpanel,"number",e.index)}),s=n({className:a("stepper.title"),...e.getStepPT(e.stepperpanel,"title",e.index)});return e.template?e.template():(0,r.jsxs)("button",{...i,children:[(0,r.jsx)("span",{...l,children:e.index+1}),(0,r.jsx)("span",{...s,children:e.getStepProp(e.stepperpanel,"header")})]})}));g.displayName="StepperHeader";let I=p.memo(p.forwardRef((e,t)=>{let n=(0,f.useMergeProps)()({ref:t,"aria-hidden":!0,className:e.separatorClass,...e.getStepPT(e.stepperpanel,"separator",e.index)});return e.template?e.template():(0,r.jsx)("span",{...n})}));I.displayName="StepperSeparator";let P=p.default.memo(p.default.forwardRef((e,t)=>{let n,a,i,l=(0,f.useMergeProps)(),s=p.default.useContext(o.PrimeReactContext),v=j.getProps(e,s),P=b.ObjectUtils.getJSXElement(v.start,v),y=b.ObjectUtils.getJSXElement(v.end,v),{ptm:C,cx:N,isUnstyled:k,ptmo:B}=j.setMetaData({props:v}),[R,w]=p.default.useState(v.id),[H,T]=p.default.useState(v.activeStep),D=p.default.useRef();(0,d.useHandleStyle)(j.css.styles,k,{name:"stepper"});let _=l({className:N("start")},C("start")),E=l({className:N("end")},C("end"));(0,u.useMountEffect)(()=>{R||w((0,m.UniqueComponentId)())}),(0,h.useUpdateEffect)(()=>{v.activeStep>=0&&v.activeStep<=$().length-1&&M(void 0,v.activeStep)},[v.activeStep]);let z=(e,r)=>e?.props?.[r],A=e=>H===e,F=e=>v.linear&&!A(e),M=(e,r)=>{T(r),v.onChangeStep&&v.onChangeStep({originalEvent:e,index:r})},O=e=>`${R}_${e}_header_action`,U=e=>`${R}_${e}content`,$=()=>p.default.Children.toArray(v.children).reduce((e,r)=>("StepperPanel"===r.type.displayName?e.push(r):r&&Array.isArray(r)&&p.default.Children.toArray(r.props.children).forEach(r=>{"StepperPanel"===r.type.displayName&&e.push(r)}),e),[]),L=(e,r)=>{0!==r&&M(e,r-1)},X=(e,r)=>{r!==$().length-1&&M(e,r+1)},K=(e,r,t)=>{let n=$().length,a={props:e.props,parent:{props:v},context:{index:t,count:n,first:0===t,last:t===n-1,active:A(t),highlighted:t<H,disabled:F(t)}};return l(C(`stepperpanel.${r}`,{stepperpanel:a}),C(`stepperpanel.${r}`,a),B(z(e,"pt"),r,a))},J=(e,r)=>{v.linear?e.preventDefault():r!==H&&M(e,r)};p.default.useImperativeHandle(t,()=>({getElement:()=>D.current,getActiveStep:()=>H,setActiveStep:e=>T(e),nextCallback:e=>X(e,H),prevCallback:e=>L(e,H)}));let V=l({className:(0,x.classNames)(N("root")),role:"tablist"},j.getOtherProps(v),C("root"));return(0,r.jsxs)("div",{...V,children:[P&&(0,r.jsx)("div",{..._,children:P}),"horizontal"===v.orientation&&(n=$().map((e,t)=>{let n=l({className:(0,x.classNames)(N("stepper.header",{isStepActive:A,isItemDisabled:F,step:e,index:t,headerPosition:v.headerPosition,orientation:v.orientation})),"aria-current":A(t)&&"step",role:"presentation","data-p-highlight":A(t),"data-p-disabled":F(t),"data-p-active":A(t),...K(e,"header",t)});return(0,r.jsxs)("li",{...n,children:[(0,r.jsx)(g,{id:O(t),template:e.children?.header,stepperpanel:e,index:t,disabled:F(t),active:A(t),highlighted:t<H,ariaControls:U(t),clickCallback:J,getStepPT:K,getStepProp:z,cx:N}),t!==$().length-1&&(0,r.jsx)(I,{template:e.children?.separator,separatorClass:N("stepper.separator"),stepperpanel:e,index:t,active:A(t),highlighted:t<H,getStepPT:K})]},z(e,"header")||t)}),a=l({className:(0,x.classNames)(N("nav")),ref:D},C("nav")),i=l({className:N("panelContainer")},C("panelContainer")),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("ul",{...a,children:n}),(0,r.jsx)("div",{...i,children:$().map((e,t)=>A(t)?(0,r.jsx)(S,{id:U(t),tempate:e?.children?.content,stepperpanel:e,index:t,active:A(t),highlighted:t<H,clickCallback:J,prevCallback:L,nextCallback:X,getStepPT:K,ariaLabelledby:O(t),ptm:C,cx:N},U(t)):null)})]})),"vertical"===v.orientation&&$().map((e,t)=>{let n=p.default.createRef(null),a=l({ref:D,className:N("stepper.panel",{props:v,index:t,isStepActive:A}),"aria-current":A(t)&&"step",...K(e,"root",t),...K(e,"panel",t),"data-p-highlight":A(t),"data-p-disabled":F(t),"data-p-active":A(t)}),i=l({className:N("stepper.header",{step:e,isStepActive:A,isItemDisabled:F,index:t}),...K(e,"header",t)}),s=l({classNames:N("stepper.content"),...K(e,"transition",t),timeout:{enter:1e3,exit:450},in:A(t),unmountOnExit:!0}),o=l({ref:n,className:N("stepper.toggleableContent"),...K(e,"toggleableContent",t)});return(0,r.jsxs)("div",{...a,children:[(0,r.jsx)("div",{...i,children:(0,r.jsx)(g,{id:O(t),template:e.children?.header,stepperpanel:e,index:t,disabled:F(t),active:A(t),highlighted:t<H,ariaControls:U(t),clickCallback:J,getStepPT:K,getStepProp:z,cx:N})}),(0,r.jsx)(c.CSSTransition,{nodeRef:n,...s,children:(0,r.jsxs)("div",{...o,children:[t!==$().length-1&&(0,r.jsx)(I,{template:e.children?.separator,separatorClass:N("stepper.separator"),stepperpanel:e,index:t,active:A(t),highlighted:t<H,getStepPT:K}),(0,r.jsx)(S,{id:U(t),tempate:e?.children?.content,stepperpanel:e,index:t,active:A(t),highlighted:t<H,clickCallback:J,prevCallback:L,nextCallback:X,getStepPT:K,ariaLabelledby:O(t),ptm:C,cx:N},U(t))]})})]},z(e,"header")||t)}),y&&(0,r.jsx)("div",{...E,children:y})]})}));j.displayName="StepperBase";let y=d.ComponentBase.extend({defaultProps:{__TYPE:"StepperPanel",children:void 0,header:null},css:{styles:""}}),C=p.memo(p.forwardRef((e,t)=>{let n=p.useContext(o.PrimeReactContext),a=y.getProps(e,n),{isUnstyled:i}=y.setMetaData({props:a});return(0,d.useHandleStyle)(y.css.styles,i,{name:"StepperPanel"}),(0,r.jsx)("span",{ref:t,children:a.children})}));function N(e){let t=(0,p.useRef)(null),n={basic:`
<Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
    <StepperPanel header="Header I">
        <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
        </div>
        <div className="flex pt-4 justify-content-end">
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
        </div>
    </StepperPanel>
    <StepperPanel header="Header II">
        <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
        </div>
        <div className="flex pt-4 justify-content-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
        </div>
    </StepperPanel>
    <StepperPanel header="Header III">
        <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
        </div>
        <div className="flex pt-4 justify-content-start">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
        </div>
    </StepperPanel>
</Stepper>
        `,javascript:`
import React, { useRef } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const stepperRef = useRef(null);

    return (
    <div className="card flex justify-content-center">
        <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
            <StepperPanel header="Header I">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                </div>
                <div className="flex pt-4 justify-content-end">
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                </div>
            </StepperPanel>
            <StepperPanel header="Header II">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                </div>
                <div className="flex pt-4 justify-content-between">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                </div>
            </StepperPanel>
            <StepperPanel header="Header III">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                </div>
                <div className="flex pt-4 justify-content-start">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                </div>
            </StepperPanel>
        </Stepper>
    </div>
    )
}
        `,typescript:`
import React, { useRef } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const stepperRef = useRef(null);

    return (
    <div className="card flex justify-content-center">
        <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }}>
            <StepperPanel header="Header I">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                </div>
                <div className="flex pt-4 justify-content-end">
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                </div>
            </StepperPanel>
            <StepperPanel header="Header II">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                </div>
                <div className="flex pt-4 justify-content-between">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                </div>
            </StepperPanel>
            <StepperPanel header="Header III">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                </div>
                <div className="flex pt-4 justify-content-start">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                </div>
            </StepperPanel>
        </Stepper>
    </div>
    )
}
        `};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.DocSectionText,{...e,children:(0,r.jsxs)("p",{children:["Stepper consists of one or more StepperPanel elements to encapsulate each step in the progress. The elements to navigate between the steps are not built-in for ease of customization, instead ",(0,r.jsx)("i",{children:"prevCallback"})," and"," ",(0,r.jsx)("i",{children:"nextCallback"})," events should be bound to your custom UI elements."]})}),(0,r.jsx)("div",{className:"card flex justify-content-center",children:(0,r.jsxs)(P,{ref:t,style:{flexBasis:"50rem"},children:[(0,r.jsxs)(C,{header:"Header I",children:[(0,r.jsx)("div",{className:"flex flex-column h-12rem",children:(0,r.jsx)("div",{className:"border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium",children:"Content I"})}),(0,r.jsx)("div",{className:"flex pt-4 justify-content-end",children:(0,r.jsx)(s.Button,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:()=>t.current.nextCallback()})})]}),(0,r.jsxs)(C,{header:"Header II",children:[(0,r.jsx)("div",{className:"flex flex-column h-12rem",children:(0,r.jsx)("div",{className:"border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium",children:"Content II"})}),(0,r.jsxs)("div",{className:"flex pt-4 justify-content-between",children:[(0,r.jsx)(s.Button,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>t.current.prevCallback()}),(0,r.jsx)(s.Button,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:()=>t.current.nextCallback()})]})]}),(0,r.jsxs)(C,{header:"Header III",children:[(0,r.jsx)("div",{className:"flex flex-column h-12rem",children:(0,r.jsx)("div",{className:"border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium",children:"Content III"})}),(0,r.jsx)("div",{className:"flex pt-4 justify-content-start",children:(0,r.jsx)(s.Button,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>t.current.prevCallback()})})]})]})}),(0,r.jsx)(l.DocSectionCode,{code:n})]})}function k(e){let t={basic:`
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
        `};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.DocSectionText,{...e}),(0,r.jsx)(l.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function B(e){let t=(0,p.useRef)(null),n={basic:`
<Stepper ref={stepperRef} style={{ flexBasis: '50rem' }} linear>
    <StepperPanel header="Header I">
        <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
        </div>
        <div className="flex pt-4 justify-content-end">
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
        </div>
    </StepperPanel>
    <StepperPanel header="Header II">
        <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
        </div>
        <div className="flex pt-4 justify-content-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
        </div>
    </StepperPanel>
    <StepperPanel header="Header III">
        <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
        </div>
        <div className="flex pt-4 justify-content-start">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
        </div>
    </StepperPanel>
</Stepper>
        `,javascript:`
import React, { useRef } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const stepperRef = useRef(null);

    return (
    <div className="card flex justify-content-center">
        <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }} linear>
            <StepperPanel header="Header I">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                </div>
                <div className="flex pt-4 justify-content-end">
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                </div>
            </StepperPanel>
            <StepperPanel header="Header II">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                </div>
                <div className="flex pt-4 justify-content-between">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                </div>
            </StepperPanel>
            <StepperPanel header="Header III">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                </div>
                <div className="flex pt-4 justify-content-start">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                </div>
            </StepperPanel>
        </Stepper>
    </div>
    )
}
        `,typescript:`
import React, { useRef } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const stepperRef = useRef(null);

    return (
    <div className="card flex justify-content-center">
        <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }} linear>
            <StepperPanel header="Header I">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                </div>
                <div className="flex pt-4 justify-content-end">
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                </div>
            </StepperPanel>
            <StepperPanel header="Header II">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                </div>
                <div className="flex pt-4 justify-content-between">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                </div>
            </StepperPanel>
            <StepperPanel header="Header III">
                <div className="flex flex-column h-12rem">
                    <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                </div>
                <div className="flex pt-4 justify-content-start">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                </div>
            </StepperPanel>
        </Stepper>
    </div>
    )
}
        `};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.DocSectionText,{...e,children:(0,r.jsxs)("p",{children:["When ",(0,r.jsx)("i",{children:"linear"})," property is present, current step must be completed in order to move to the next step."]})}),(0,r.jsx)("div",{className:"card flex justify-content-center",children:(0,r.jsxs)(P,{ref:t,style:{flexBasis:"50rem"},linear:!0,children:[(0,r.jsxs)(C,{header:"Header I",children:[(0,r.jsx)("div",{className:"flex flex-column h-12rem",children:(0,r.jsx)("div",{className:"border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium",children:"Content I"})}),(0,r.jsx)("div",{className:"flex pt-4 justify-content-end",children:(0,r.jsx)(s.Button,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:()=>t.current.nextCallback()})})]}),(0,r.jsxs)(C,{header:"Header II",children:[(0,r.jsx)("div",{className:"flex flex-column h-12rem",children:(0,r.jsx)("div",{className:"border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium",children:"Content II"})}),(0,r.jsxs)("div",{className:"flex pt-4 justify-content-between",children:[(0,r.jsx)(s.Button,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>t.current.prevCallback()}),(0,r.jsx)(s.Button,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:()=>t.current.nextCallback()})]})]}),(0,r.jsxs)(C,{header:"Header III",children:[(0,r.jsx)("div",{className:"flex flex-column h-12rem",children:(0,r.jsx)("div",{className:"border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium",children:"Content III"})}),(0,r.jsx)("div",{className:"flex pt-4 justify-content-start",children:(0,r.jsx)(s.Button,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>t.current.prevCallback()})})]})]})}),(0,r.jsx)(l.DocSectionCode,{code:n})]})}C.displayName="StepperPanel";let R=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.DocSectionText,{...e}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"pt_image"})})]});function w(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.DocSectionText,{id:"styled",label:"Styled",children:(0,r.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,r.jsx)("div",{className:"doc-tablewrapper",children:(0,r.jsxs)("table",{className:"doc-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Element"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper"}),(0,r.jsx)("td",{children:"Container element."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper-horizontal"}),(0,r.jsx)("td",{children:"Container element with horizontal layout."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper-vertical"}),(0,r.jsx)("td",{children:"Container element with vertical layout."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper-nav"}),(0,r.jsx)("td",{children:"Container element of navigator."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper-panels"}),(0,r.jsx)("td",{children:"Container element of stepper panel elements."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper-panel"}),(0,r.jsx)("td",{children:"Container element of stepper panel element."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper-header"}),(0,r.jsx)("td",{children:"Container element of stepper header."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper-action"}),(0,r.jsx)("td",{children:"Container element of stepper action."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper-number"}),(0,r.jsx)("td",{children:"Container element of stepper number."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper-title"}),(0,r.jsx)("td",{children:"Container element of stepper title."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper-separator"}),(0,r.jsx)("td",{children:"Container element of stepper separator."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper-toggleable-content"}),(0,r.jsx)("td",{children:"Container element of stepper toggleable content."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper-content"}),(0,r.jsx)("td",{children:"Container element of stepper content."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper-start"}),(0,r.jsx)("td",{children:"Start content container."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-stepper-end"}),(0,r.jsx)("td",{children:"End content container."})]})]})]})})]})}function H(){return(0,r.jsxs)(a.DocSectionText,{id:"style",label:"Style",children:["Visit"," ",(0,r.jsx)("a",{href:"https://github.com/primefaces/primereact-tailwind",target:"_blank",rel:"noopener noreferrer",children:"Tailwind Presets"})," ","project for detailed documentation, examples and ready-to-use presets about how to style PrimeReact components with Tailwind CSS."]})}function T(e){let t=(0,p.useRef)(null),n={basic:`
<Stepper ref={stepperRef} style={{ flexBasis: '50rem' }} orientation="vertical">
    <StepperPanel header="Header I">
        <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
        </div>
        <div className="flex py-4">
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
        </div>
    </StepperPanel>
    <StepperPanel header="Header II">
        <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
        </div>
        <div className="flex py-4 gap-2">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
        </div>
    </StepperPanel>
    <StepperPanel header="Header III">
        <div className="flex flex-column h-12rem">
            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
        </div>
        <div className="flex py-4">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
        </div>
    </StepperPanel>
</Stepper>
        `,javascript:`
import React, { useRef } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const stepperRef = useRef(null);

    return (
        <div className="card">
            <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }} orientation="vertical">
                <StepperPanel header="Header I">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                    </div>
                    <div className="flex py-4">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="Header II">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                    </div>
                    <div className="flex py-4 gap-2">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="Header III">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                    </div>
                    <div className="flex py-4">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    </div>
                </StepperPanel>
            </Stepper>
        </div>
    )
}
        `,typescript:`
import React, { useRef } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const stepperRef = useRef(null);

    return (
        <div className="card">
            <Stepper ref={stepperRef} style={{ flexBasis: '50rem' }} orientation="vertical">
                <StepperPanel header="Header I">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content I</div>
                    </div>
                    <div className="flex py-4">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="Header II">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content II</div>
                    </div>
                    <div className="flex py-4 gap-2">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                    </div>
                </StepperPanel>
                <StepperPanel header="Header III">
                    <div className="flex flex-column h-12rem">
                        <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">Content III</div>
                    </div>
                    <div className="flex py-4">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                    </div>
                </StepperPanel>
            </Stepper>
        </div>
    )
}
        `};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.DocSectionText,{...e,children:(0,r.jsxs)("p",{children:["Layout of the Stepper is configured with the ",(0,r.jsx)("i",{children:"orientation"})," property that accepts ",(0,r.jsx)("i",{children:"horizontal"})," and ",(0,r.jsx)("i",{children:"vertical"})," as available options."]})}),(0,r.jsx)("div",{className:"card",children:(0,r.jsxs)(P,{ref:t,orientation:"vertical",children:[(0,r.jsxs)(C,{header:"Header I",children:[(0,r.jsx)("div",{className:"flex flex-column h-12rem",children:(0,r.jsx)("div",{className:"border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium",children:"Content I"})}),(0,r.jsx)("div",{className:"flex py-4",children:(0,r.jsx)(s.Button,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:()=>t.current.nextCallback()})})]}),(0,r.jsxs)(C,{header:"Header II",children:[(0,r.jsx)("div",{className:"flex flex-column h-12rem",children:(0,r.jsx)("div",{className:"border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium",children:"Content II"})}),(0,r.jsxs)("div",{className:"flex py-4 gap-2",children:[(0,r.jsx)(s.Button,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>t.current.prevCallback()}),(0,r.jsx)(s.Button,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:()=>t.current.nextCallback()})]})]}),(0,r.jsxs)(C,{header:"Header III",children:[(0,r.jsx)("div",{className:"flex flex-column h-12rem",children:(0,r.jsx)("div",{className:"border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium",children:"Content III"})}),(0,r.jsx)("div",{className:"flex py-4",children:(0,r.jsx)(s.Button,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>t.current.prevCallback()})})]})]})}),(0,r.jsx)(l.DocSectionCode,{code:n})]})}function D(e){let t=(0,p.useRef)([]),n={basic:`
<h5>Position top</h5>
<Stepper ref={(ref) => (stepperRef.current[2] = ref)} headerPosition="top">
    <StepperPanel header="Header I"></StepperPanel>
    <StepperPanel header="Header II"></StepperPanel>
    <StepperPanel header="Header III"></StepperPanel>
</Stepper>
<h5>Position right</h5>
<Stepper ref={(ref) => (stepperRef.current[0] = ref)} headerPosition="right">
    <StepperPanel header="Header I"></StepperPanel>
    <StepperPanel header="Header II"></StepperPanel>
    <StepperPanel header="Header III"></StepperPanel>
</Stepper>
<h5>Position left</h5>
<Stepper ref={(ref) => (stepperRef.current[1] = ref)} headerPosition="left">
    <StepperPanel header="Header I"></StepperPanel>
    <StepperPanel header="Header II"></StepperPanel>
    <StepperPanel header="Header III"></StepperPanel>
</Stepper>
<h5>Position bottom</h5>
<Stepper ref={(ref) => (stepperRef.current[2] = ref)} headerPosition="bottom">
    <StepperPanel header="Header I"></StepperPanel>
    <StepperPanel header="Header II"></StepperPanel>
    <StepperPanel header="Header III"></StepperPanel>
</Stepper>
        `,javascript:`
import { useRef } from 'react';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const stepperRef = useRef(null);

    return (
        <h5>Position top</h5>
        <Stepper ref={(ref) => (stepperRef.current[2] = ref)} headerPosition="top">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
        <h5>Position right</h5>
        <Stepper ref={(ref) => (stepperRef.current[0] = ref)} headerPosition="right">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
        <h5>Position left</h5>
        <Stepper ref={(ref) => (stepperRef.current[1] = ref)} headerPosition="left">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
        <h5>Position bottom</h5>
        <Stepper ref={(ref) => (stepperRef.current[2] = ref)} headerPosition="bottom">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
    );
}
        `,typescript:`
import { useRef } from 'react';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const stepperRef = useRef(null);

    return (
        <h5>Position top</h5>
        <Stepper ref={(ref) => (stepperRef.current[2] = ref)} headerPosition="top">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
        <h5>Position right</h5>
        <Stepper ref={(ref) => (stepperRef.current[0] = ref)} headerPosition="right">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
        <h5>Position left</h5>
        <Stepper ref={(ref) => (stepperRef.current[1] = ref)} headerPosition="left">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
        <h5>Position bottom</h5>
        <Stepper ref={(ref) => (stepperRef.current[2] = ref)} headerPosition="bottom">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
    );
}
        `};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.DocSectionText,{...e,children:(0,r.jsxs)("p",{children:["Header position of the stepper can be customized using the ",(0,r.jsx)("i",{children:"headerPosition"})," property. Default value is ",(0,r.jsx)("i",{children:"right"}),"."]})}),(0,r.jsxs)("div",{className:"card flex flex-column justify-content-center",children:[(0,r.jsx)("h5",{children:"Position top"}),(0,r.jsxs)(P,{ref:e=>t.current[0]=e,headerPosition:"top",children:[(0,r.jsx)(C,{header:"Header I"}),(0,r.jsx)(C,{header:"Header II"}),(0,r.jsx)(C,{header:"Header III"})]}),(0,r.jsx)("h5",{children:"Position right"}),(0,r.jsxs)(P,{ref:e=>t.current[1]=e,headerPosition:"right",children:[(0,r.jsx)(C,{header:"Header I"}),(0,r.jsx)(C,{header:"Header II"}),(0,r.jsx)(C,{header:"Header III"})]}),(0,r.jsx)("h5",{children:"Position left"}),(0,r.jsxs)(P,{ref:e=>t.current[2]=e,headerPosition:"left",children:[(0,r.jsx)(C,{header:"Header I"}),(0,r.jsx)(C,{header:"Header II"}),(0,r.jsx)(C,{header:"Header III"})]}),(0,r.jsx)("h5",{children:"Position bottom"}),(0,r.jsxs)(P,{ref:e=>t.current[3]=e,headerPosition:"bottom",children:[(0,r.jsx)(C,{header:"Header I"}),(0,r.jsx)(C,{header:"Header II"}),(0,r.jsx)(C,{header:"Header III"})]}),(0,r.jsxs)("div",{className:"flex pt-4 justify-content-between",children:[(0,r.jsx)(s.Button,{label:"Back",severity:"secondary",icon:"pi pi-arrow-left",onClick:()=>t.current.forEach(e=>e.prevCallback())}),(0,r.jsx)(s.Button,{label:"Next",icon:"pi pi-arrow-right",iconPos:"right",onClick:()=>t.current.forEach(e=>e.nextCallback())})]})]}),(0,r.jsx)(l.DocSectionCode,{code:n})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:R},{id:"pt.stepper.options",label:"Stepper PT Options",component:t.default},{id:"pt.stepperpanel.options",label:"StepperPanel PT Options",component:t.default}];return(0,r.jsx)(n.DocComponent,{title:"React Stepper Component",header:"Stepper",description:"The Stepper component displays a wizard-like workflow by guiding users through the multi-step progression.",componentDocs:[{id:"import",label:"Import",component:k},{id:"basic",label:"Basic",component:N},{id:"vertical",label:"Vertical",component:T},{id:"linear",label:"Linear",component:B},{id:"header",label:"Header",component:D},{id:"accessibility",label:"Accessibility",component:i}],apiDocs:["Stepper","StepperPanel"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:w},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:H}]}]})}],92165)},74197,(e,r,t)=>{let n="/stepper";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(92165)]),r.hot&&r.hot.dispose(function(){window.__NEXT_P.push([n])})}]);