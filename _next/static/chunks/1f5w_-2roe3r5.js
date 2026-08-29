(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,87881,e=>{"use strict";var t=e.i(91398),i=e.i(88850),o=e.i(82948),r=e.i(57294),a=e.i(28137);function n(){return(0,t.jsxs)(a.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["ConfirmDialog component uses ",(0,t.jsx)("i",{children:"alertdialog"})," role along with ",(0,t.jsx)("i",{children:"aria-labelledby"})," referring to the header element however any attribute is passed to the root element so you may use ",(0,t.jsx)("i",{children:"aria-labelledby"})," to override this default behavior. In addition ",(0,t.jsx)("i",{children:"aria-modal"})," is added since focus is kept within the popup."]}),(0,t.jsxs)("p",{children:["It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding ",(0,t.jsx)("i",{children:"tabIndex"})," would be necessary."]}),(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"confirm"})," function is used and a trigger is passed as a parameter, ConfirmDialog adds ",(0,t.jsx)("i",{children:"aria-expanded"})," state attribute and ",(0,t.jsx)("i",{children:"aria-controls"})," to the trigger so that the relation between the trigger and the popup is defined."]}),(0,t.jsx)(r.CodeHighlight,{lang:"js",children:`
const confirm = (event) => {
    confirmDialog({
        trigger: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => acceptFunc(),
        reject: () => rejectFunc()
    });
}

<Button onClick={confirm} icon="pi pi-check" label="Confirm"></Button>

<ConfirmDialog />
`}),(0,t.jsxs)("p",{children:["If the dialog is controlled with the ",(0,t.jsx)("i",{children:"visible"})," property ",(0,t.jsx)("i",{children:"aria-expanded"})," and ",(0,t.jsx)("i",{children:"aria-controls"})," need to be handled explicitly."]}),(0,t.jsx)(r.CodeHighlight,{children:`
<ConfirmDialog id="dlg_confirmation" visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />

<Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" aria-controls={visible ? 'dlg_confirmation' : null} aria-expanded={visible ? true : false} />
`}),(0,t.jsx)("h3",{children:"Overlay Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the next the focusable element within the popup."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"tab"})]}),(0,t.jsx)("td",{children:"Moves focus to the previous the focusable element within the popup."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the trigger."})]})]})]})}),(0,t.jsx)("h3",{children:"Buttons Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Triggers the action, closes the popup and moves focus to the trigger."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Triggers the action, closes the popup and moves focus to the trigger."})]})]})]})})]})}var c=e.i(5180),s=e.i(57724),l=e.i(91788),m=e.i(10836),d=e.i(183),p=e.i(15498),f=e.i(61149),u=e.i(60150),h=e.i(4632),g=e.i(71834),b=e.i(81201),x=e.i(85971),j=e.i(45543),v=e.i(75366),y=e.i(51551),w=e.i(3935);let C=p.ComponentBase.extend({defaultProps:{__TYPE:"ConfirmDialog",accept:null,acceptClassName:null,acceptIcon:null,acceptLabel:null,appendTo:null,breakpoints:null,children:void 0,className:null,content:null,defaultFocus:"accept",footer:null,icon:null,message:null,onHide:null,reject:null,rejectClassName:null,rejectIcon:null,rejectLabel:null,tagKey:void 0,visible:void 0},css:{classes:{root:"p-confirm-dialog",message:"p-confirm-dialog-message",icon:"p-confirm-dialog-icon",acceptButton:"p-confirm-dialog-accept",rejectButton:({getPropValue:e})=>(0,w.classNames)("p-confirm-dialog-reject",{"p-button-text":!e("rejectClassName")})}}}),N=(e={})=>((e={...e,...{visible:void 0===e.visible||e.visible}}).visible&&b.OverlayService.emit("confirm-dialog",e),{show:(t={})=>{b.OverlayService.emit("confirm-dialog",{...e,...t,visible:!0})},hide:()=>{b.OverlayService.emit("confirm-dialog",{visible:!1})}}),D=l.memo(l.forwardRef((e,i)=>{let o,r,a,n,c,N,D,B=(0,u.useMergeProps)(),k=l.useContext(m.PrimeReactContext),R=C.getProps(e,k),[T,S]=l.useState(R.visible),[Y,W]=l.useState(!1),F=l.useRef(null),A=l.useRef(!1),H=l.useRef(null),P=()=>{let e=R.group;return F.current&&(e=F.current.group),Object.assign({},R,F.current,{group:e})},V=e=>P()[e],_=(e,...t)=>y.ObjectUtils.getPropValue(V(e),t),O=V("acceptLabel")||(0,d.localeOption)("accept"),L=V("rejectLabel")||(0,d.localeOption)("reject"),I={props:R,state:{visible:T}},{ptm:E,cx:U,isUnstyled:K}=C.setMetaData(I);(0,p.useHandleStyle)(C.css.styles,K,{name:"confirmdialog"});let z=()=>{A.current||(A.current=!0,_("accept"),q("accept"))},M=()=>{A.current||(A.current=!0,_("reject"),q("reject"))},X=()=>{P().group===R.group&&(S(!0),A.current=!1,H.current=document.activeElement)},q=(e="cancel")=>{T&&("string"!=typeof e&&(e="cancel"),S(!1),_("onHide",e),j.DomHandler.focus(H.current),H.current=null)},J=e=>{if(e.tagKey===R.tagKey&&(void 0===e.group||e.group===R.group)){let t=T!==e.visible;V("target")===e.target||R.target?t&&(F.current=e,e.visible?X():q()):(q(),F.current=e,W(!0))}};l.useEffect(()=>{R.visible?X():q()},[R.visible]),l.useEffect(()=>(R.target||R.message||b.OverlayService.on("confirm-dialog",J),()=>{b.OverlayService.off("confirm-dialog",J)}),[R.target]),(0,g.useUpdateEffect)(()=>{Y&&X()},[Y]),(0,h.useUnmountEffect)(()=>{b.OverlayService.off("confirm-dialog",J)}),l.useImperativeHandle(i,()=>({props:R,confirm:J}));let G=(o=P(),r=y.ObjectUtils.getJSXElement(V("message"),o),a=B({className:U("icon")},E("icon")),n=v.IconUtils.getJSXIcon(V("icon"),{...a},{props:o}),c=(()=>{let e=V("defaultFocus"),i=(0,w.classNames)("p-confirm-dialog-accept",V("acceptClassName")),o=(0,w.classNames)("p-confirm-dialog-reject",{"p-button-text":!V("rejectClassName")},V("rejectClassName")),r=B({label:L,autoFocus:"reject"===e,icon:V("rejectIcon"),className:(0,w.classNames)(V("rejectClassName"),U("rejectButton",{getPropValue:V})),onClick:M,pt:E("rejectButton"),unstyled:R.unstyled,__parentMetadata:{parent:I}},E("rejectButton")),a=B({label:O,autoFocus:void 0===e||"accept"===e,icon:V("acceptIcon"),className:(0,w.classNames)(V("acceptClassName"),U("acceptButton")),onClick:z,pt:E("acceptButton"),unstyled:R.unstyled,__parentMetadata:{parent:I}},E("acceptButton")),n=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Button,{...r}),(0,t.jsx)(s.Button,{...a})]});if(V("footer")){let e={accept:z,reject:M,acceptClassName:i,rejectClassName:o,acceptLabel:O,rejectLabel:L,element:n,props:P()};return y.ObjectUtils.getJSXElement(V("footer"),e)}return n})(),N=B({className:U("message")},E("message")),D=B({visible:T,className:(0,w.classNames)(V("className"),U("root")),footer:c,onHide:q,breakpoints:V("breakpoints"),pt:o.pt,unstyled:R.unstyled,appendTo:V("appendTo"),__parentMetadata:{parent:I}},C.getOtherProps(o)),(0,t.jsxs)(f.Dialog,{...D,content:e?.content,children:[n,(0,t.jsx)("span",{...N,children:r})]}));return(0,t.jsx)(x.Portal,{element:G,appendTo:V("appendTo")})}));D.displayName="ConfirmDialog";var B=e.i(29363);function k(e){let i=(0,l.useRef)(null),o=()=>{i.current.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},r=()=>{i.current.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})},n={basic:`
<Toast ref={toast} />
<ConfirmDialog />
<Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
<Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>
        `,javascript:`
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>
            </div>
        </>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>
            </div>
        </>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A ConfirmDialog component needs to be present on the page that is interacted with the ",(0,t.jsx)("i",{children:"confirmDialog"})," function that takes a configuration object for customization."]})}),(0,t.jsx)(B.Toast,{ref:i}),(0,t.jsxs)("div",{className:"card flex flex-wrap gap-2 justify-content-center",children:[(0,t.jsx)(s.Button,{onClick:()=>{N({message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",defaultFocus:"accept",accept:o,reject:r})},icon:"pi pi-check",label:"Confirm"}),(0,t.jsx)(s.Button,{onClick:()=>{N({message:"Do you want to delete this record?",header:"Delete Confirmation",icon:"pi pi-info-circle",acceptClassName:"p-button-danger",defaultFocus:"reject",accept:o,reject:r})},icon:"pi pi-times",label:"Delete",className:"p-button-danger p-button-outlined"})]}),(0,t.jsx)(c.DocSectionCode,{code:n})]})}function R(e){let[i,o]=(0,l.useState)(!1),r=(0,l.useRef)(null),n={basic:`
<Toast ref={toast} />
<ConfirmDialog group="declarative"  visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" 
    header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
<Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
        `,javascript:`
import React, { useState, useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function DeclarativeDemo() {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog group="declarative"  visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" 
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `,typescript:`
import React, { useState, useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primefaces/button';

export default function DeclarativeDemo() {
    const [visible, setVisible] = useState<boolean>(false);
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog group="declarative"  visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" 
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Declarative is an alternative to the programmatic approach where ConfirmDialog is controlled with a binding to ",(0,t.jsx)("i",{children:"visible"})," and ",(0,t.jsx)("i",{children:"onHide"})," event callback."]})}),(0,t.jsx)(B.Toast,{ref:r}),(0,t.jsx)(D,{group:"declarative",visible:i,onHide:()=>o(!1),message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{r.current.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{r.current.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})}}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(s.Button,{onClick:()=>o(!0),icon:"pi pi-check",label:"Confirm"})}),(0,t.jsx)(c.DocSectionCode,{code:n})]})}function T(e){let i=(0,l.useRef)(null),o=()=>{i.current.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},r=()=>{i.current.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})},n={basic:`
<Toast ref={toast} />
<ConfirmDialog
    group="headless"
    content={({ headerRef, contentRef, footerRef, hide, message }) => (
        <div className="flex flex-column align-items-center p-5 surface-overlay border-round">
            <div className="border-circle bg-primary inline-flex justify-content-center align-items-center h-6rem w-6rem -mt-8">
                <i className="pi pi-question text-5xl"></i>
            </div>
            <span className="font-bold text-2xl block mb-2 mt-4" ref={headerRef}>
                {message.header}
            </span>
            <p className="mb-0" ref={contentRef}>
                {message.message}
            </p>
            <div className="flex align-items-center gap-2 mt-4" ref={footerRef}>
                <Button
                    label="Save"
                    onClick={(event) => {
                        hide(event);
                        accept();
                    }}
                    className="w-8rem"
                ></Button>
                <Button
                    label="Cancel"
                    outlined
                    onClick={(event) => {
                        hide(event);
                        reject();
                    }}
                    className="w-8rem"
                ></Button>
            </div>
        </div>
    )}
/>
<div className="card flex flex-wrap gap-2 justify-content-center">
    <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
</div>
        `,javascript:`
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function HeadlessDemo() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = () => {
        confirmDialog({
            group: 'headless',
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog
                group="headless"
                content={({ headerRef, contentRef, footerRef, hide, message }) => (
                    <div className="flex flex-column align-items-center p-5 surface-overlay border-round">
                        <div className="border-circle bg-primary inline-flex justify-content-center align-items-center h-6rem w-6rem -mt-8">
                            <i className="pi pi-question text-5xl"></i>
                        </div>
                        <span className="font-bold text-2xl block mb-2 mt-4" ref={headerRef}>
                            {message.header}
                        </span>
                        <p className="mb-0" ref={contentRef}>
                            {message.message}
                        </p>
                        <div className="flex align-items-center gap-2 mt-4" ref={footerRef}>
                            <Button
                                label="Save"
                                onClick={(event) => {
                                    hide(event);
                                    accept();
                                }}
                                className="w-8rem"
                            ></Button>
                            <Button
                                label="Cancel"
                                outlined
                                onClick={(event) => {
                                    hide(event);
                                    reject();
                                }}
                                className="w-8rem"
                            ></Button>
                        </div>
                    </div>
                )}
            />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
            </div>
        </>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function HeadlessDemo() {
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            group: 'headless',
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog
                group="headless"
                content={({ headerRef, contentRef, footerRef, hide, message }) => (
                    <div className="flex flex-column align-items-center p-5 surface-overlay border-round">
                        <div className="border-circle bg-primary inline-flex justify-content-center align-items-center h-6rem w-6rem -mt-8">
                            <i className="pi pi-question text-5xl"></i>
                        </div>
                        <span className="font-bold text-2xl block mb-2 mt-4" ref={headerRef}>
                            {message.header}
                        </span>
                        <p className="mb-0" ref={contentRef}>
                            {message.message}
                        </p>
                        <div className="flex align-items-center gap-2 mt-4" ref={footerRef}>
                            <Button
                                label="Save"
                                onClick={(event) => {
                                    hide(event);
                                    accept();
                                }}
                                className="w-8rem"
                            ></Button>
                            <Button
                                label="Cancel"
                                outlined
                                onClick={(event) => {
                                    hide(event);
                                    reject();
                                }}
                                className="w-8rem"
                            ></Button>
                        </div>
                    </div>
                )}
            />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
            </div>
        </>
    )
}
        `};return(0,t.jsxs)("div",{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Headless mode is enabled by defining a ",(0,t.jsx)("i",{children:"content"})," prop that lets you implement entire confirmation UI instead of the default elements."]})}),(0,t.jsx)(B.Toast,{ref:i}),(0,t.jsx)(D,{group:"headless",content:({headerRef:e,contentRef:i,footerRef:a,hide:n,message:c})=>(0,t.jsxs)("div",{className:"flex flex-column align-items-center p-5 surface-overlay border-round",children:[(0,t.jsx)("div",{className:"border-circle bg-primary inline-flex justify-content-center align-items-center h-6rem w-6rem -mt-8",children:(0,t.jsx)("i",{className:"pi pi-question text-5xl"})}),(0,t.jsx)("span",{className:"font-bold text-2xl block mb-2 mt-4",ref:e,children:c.header}),(0,t.jsx)("p",{className:"mb-0",ref:i,children:c.message}),(0,t.jsxs)("div",{className:"flex align-items-center gap-2 mt-4",ref:a,children:[(0,t.jsx)(s.Button,{label:"Save",onClick:e=>{n(e),o()},className:"w-8rem"}),(0,t.jsx)(s.Button,{label:"Cancel",outlined:!0,onClick:e=>{n(e),r()},className:"w-8rem"})]})]})}),(0,t.jsx)("div",{className:"card flex flex-wrap gap-2 justify-content-center",children:(0,t.jsx)(s.Button,{onClick:()=>{N({group:"headless",message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",defaultFocus:"accept",accept:o,reject:r})},icon:"pi pi-check",label:"Confirm"})}),(0,t.jsx)(c.DocSectionCode,{code:n})]})}function S(e){let i={basic:`
import { ConfirmDialog } from 'primereact/confirmdialog'; // For <ConfirmDialog /> component
import { confirmDialog } from 'primereact/confirmdialog'; // For confirmDialog method
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e}),(0,t.jsx)(c.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function Y(e){let i=(0,l.useRef)(null),o=()=>{i.current.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},r=()=>{i.current.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})},n=e=>{N({message:"Do you want to delete this record?",header:"Delete Confirmation",icon:"pi pi-info-circle",position:e,accept:o,reject:r})},m={basic:`
<Toast ref={toast} />
<ConfirmDialog />
<div className="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button label="Left" icon="pi pi-arrow-right" onClick={() => confirm('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
    <Button label="Right" icon="pi pi-arrow-left" onClick={() => confirm('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
</div>
<div className="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => confirm('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
    <Button label="Top" icon="pi pi-arrow-down" onClick={() => confirm('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
    <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => confirm('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
</div>
<div className="flex flex-wrap justify-content-center gap-2">
    <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => confirm('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
    <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => confirm('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
    <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => confirm('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
</div>
        `,javascript:`
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function PositionDemo() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm = (position) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            position,
            accept,
            reject
        });
    };

    return (
        <div className="card">
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="Left" icon="pi pi-arrow-right" onClick={() => confirm('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
                <Button label="Right" icon="pi pi-arrow-left" onClick={() => confirm('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => confirm('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="Top" icon="pi pi-arrow-down" onClick={() => confirm('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => confirm('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2">
                <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => confirm('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => confirm('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => confirm('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function PositionDemo() {
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm = (position) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            position,
            accept,
            reject
        });
    };

    return (
        <div className="card">
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="Left" icon="pi pi-arrow-right" onClick={() => confirm('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
                <Button label="Right" icon="pi pi-arrow-left" onClick={() => confirm('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => confirm('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="Top" icon="pi pi-arrow-down" onClick={() => confirm('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => confirm('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2">
                <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => confirm('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => confirm('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => confirm('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(B.Toast,{ref:i}),(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("i",{children:"position"})," property of the confirm options is used to display a Dialog at all edges and corners of the screen."]})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"flex flex-wrap justify-content-center gap-2 mb-2",children:[(0,t.jsx)(s.Button,{label:"Left",icon:"pi pi-arrow-right",onClick:()=>n("left"),className:"p-button-help",style:{minWidth:"10rem"}}),(0,t.jsx)(s.Button,{label:"Right",icon:"pi pi-arrow-left",onClick:()=>n("right"),className:"p-button-help",style:{minWidth:"10rem"}})]}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-content-center gap-2 mb-2",children:[(0,t.jsx)(s.Button,{label:"TopLeft",icon:"pi pi-arrow-down-right",onClick:()=>n("top-left"),className:"p-button-warning",style:{minWidth:"10rem"}}),(0,t.jsx)(s.Button,{label:"Top",icon:"pi pi-arrow-down",onClick:()=>n("top"),className:"p-button-warning",style:{minWidth:"10rem"}}),(0,t.jsx)(s.Button,{label:"TopRight",icon:"pi pi-arrow-down-left",onClick:()=>n("top-right"),className:"p-button-warning",style:{minWidth:"10rem"}})]}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-content-center gap-2",children:[(0,t.jsx)(s.Button,{label:"BottomLeft",icon:"pi pi-arrow-up-right",onClick:()=>n("bottom-left"),className:"p-button-success",style:{minWidth:"10rem"}}),(0,t.jsx)(s.Button,{label:"Bottom",icon:"pi pi-arrow-up",onClick:()=>n("bottom"),className:"p-button-success",style:{minWidth:"10rem"}}),(0,t.jsx)(s.Button,{label:"BottomRight",icon:"pi pi-arrow-up-left",onClick:()=>n("bottom-right"),className:"p-button-success",style:{minWidth:"10rem"}})]})]}),(0,t.jsx)(c.DocSectionCode,{code:m})]})}let W=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/confirmdialog.jpg",alt:"confirmdialog"})})]});function F(e){let[i,o]=(0,l.useState)(!1),r=(0,l.useRef)(null),n={basic:`
<Toast ref={toast} />
<ConfirmDialog
    group="declarative"
    visible={visible}
    onHide={() => setVisible(false)}
    message="Are you sure you want to proceed?"
    header="Confirmation"
    icon="pi pi-exclamation-triangle"
    accept={accept}
    reject={reject}
    style={{ width: '50vw' }}
    breakpoints={{ '1100px': '75vw', '960px': '100vw' }}
/>
<Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
        `,javascript:`
import React, { useState, useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function DeclarativeDemo() {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog
                group="declarative"
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to proceed?"
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                accept={accept}
                reject={reject}
                style={{ width: '50vw' }}
                breakpoints={{ '1100px': '75vw', '960px': '100vw' }}
            />
            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `,typescript:`
import React, { useState, useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primefaces/button';

export default function DeclarativeDemo() {
    const [visible, setVisible] = useState<boolean>(false);
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog
                group="declarative"
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to proceed?"
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                accept={accept}
                reject={reject}
                style={{ width: '50vw' }}
                breakpoints={{ '1100px': '75vw', '960px': '100vw' }}
            />
            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"ConfirmDialog width can be adjusted per screen size with the breakpoints option where a key defines the max-width for the breakpoint and value for the corresponding width. When no breakpoint matches width defined in style property is used."})}),(0,t.jsx)(B.Toast,{ref:r}),(0,t.jsx)(D,{group:"declarative",visible:i,onHide:()=>o(!1),message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{r.current.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{r.current.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})},style:{width:"50vw"},breakpoints:{"1100px":"75vw","960px":"100vw"}}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(s.Button,{onClick:()=>o(!0),icon:"pi pi-check",label:"Confirm"})}),(0,t.jsx)(c.DocSectionCode,{code:n})]})}function A(e){let i=(0,l.useRef)(null),o=()=>{i.current.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},r=()=>{i.current.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})},n={basic:`
<Toast ref={toast} />
<ConfirmDialog group="templating" />
<div className="card flex justify-content-center">
    <Button onClick={() => showTemplate()} icon="pi pi-check" label="Confirm"></Button>
</div>
        `,javascript:`
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const showTemplate = () => {
        confirmDialog({
            group: 'templating',
            header: 'Confirmation',
            message: (
                <div className="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
                    <i className="pi pi-exclamation-circle text-6xl text-primary-500"></i>
                    <span>Please confirm to proceed moving forward.</span>
                </div>
            ),
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog group="templating" />
            <div className="card flex justify-content-center">
                <Button onClick={() => showTemplate()} icon="pi pi-check" label="Confirm"></Button>
            </div>
        </>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const showTemplate = () => {
        confirmDialog({
            group: 'templating',
            header: 'Confirmation',
            message: (
                <div className="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
                    <i className="pi pi-exclamation-circle text-6xl text-primary-500"></i>
                    <span>Please confirm to proceed moving forward.</span>
                </div>
            ),
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog group="templating" />
            <div className="card flex justify-content-center">
                <Button onClick={() => showTemplate()} icon="pi pi-check" label="Confirm"></Button>
            </div>
        </>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Templating allows customizing the message content. "})}),(0,t.jsx)(B.Toast,{ref:i}),(0,t.jsx)(D,{group:"templating"}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(s.Button,{onClick:()=>void N({group:"templating",header:"Confirmation",message:(0,t.jsxs)("div",{className:"flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border",children:[(0,t.jsx)("i",{className:"pi pi-exclamation-circle text-6xl text-primary-500"}),(0,t.jsx)("span",{children:"Please confirm to proceed moving forward."})]}),accept:o,reject:r}),icon:"pi pi-check",label:"Confirm"})}),(0,t.jsx)(c.DocSectionCode,{code:n})]})}function H(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-confirm-dialog"}),(0,t.jsx)("td",{children:"Container element."})]})})]})})]})}var P=e.i(41158);function V(e){let i={basic:`
const Tailwind = {
    confirmdialog: {
        root: {
            className: classNames(
                'bg-white text-gray-700 border-0 rounded-md shadow-lg',
                'z-40 transform origin-center',
                'mt-3 absolute left-0 top-0',
                'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-white dark:before:border-b-gray-900',
                'dark:border dark:border-blue-900/40 dark:bg-gray-900  dark:text-white/80'
            )
        },
        content: 'p-5 items-center flex',
        icon: 'text-2xl',
        message: 'ml-4',
        footer: 'flex gap-2 justify-end align-center text-right px-5 py-5 pt-0',
        transition: TRANSITIONS.overlay
    },
}
        `},o={javascript:`
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function UnstyledDemo() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    const confirm2 = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className="card flex flex-wrap gap-2 justify-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>
            </div>
        </>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(P.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(c.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(c.DocSectionCode,{code:o,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:W},{id:"pt.confirmdialog.options",label:"ConfirmDialog PT Options",component:i.default}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocComponent,{title:"React Confirmation Dialog Component",header:"ConfirmDialog",description:"ConfirmDialog is an easy to use and customizable Confirmation API using a dialog.",componentDocs:[{id:"import",label:"Import",component:S},{id:"basic",label:"Basic",component:k},{id:"position",label:"Position",component:Y},{id:"declarative",label:"Declarative",component:R},{id:"template",label:"Template",component:A},{id:"responsive",label:"Responsive",component:F},{id:"headless",label:"Headless",component:T},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["ConfirmDialog"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:H},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:V}]}]}),(0,t.jsx)(D,{})]})}],87881)},1235,(e,t,i)=>{let o="/confirmdialog";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(87881)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})}]);