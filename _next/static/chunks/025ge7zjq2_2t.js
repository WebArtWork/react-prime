(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,58681,e=>{"use strict";var i=e.i(91398),t=e.i(88850),a=e.i(82948),o=e.i(28137),s=e.i(57294),l=e.i(41158);function n(){return(0,i.jsxs)(o.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,i.jsx)("h3",{children:"Screen Reader"}),(0,i.jsxs)("p",{children:["Dialog component uses ",(0,i.jsx)("i",{children:"dialog"})," role along with ",(0,i.jsx)("i",{children:"aria-labelledby"})," referring to the header element however any attribute is passed to the root element so you may use ",(0,i.jsx)("i",{children:"aria-labelledby"})," to override this default behavior. In addition ",(0,i.jsx)("i",{children:"aria-modal"})," is added since focus is kept within the popup."]}),(0,i.jsxs)("p",{children:["It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding ",(0,i.jsx)("i",{children:"tabIndex"})," would be necessary."]}),(0,i.jsxs)("p",{children:["Trigger element also requires ",(0,i.jsx)("i",{children:"aria-expanded"})," and ",(0,i.jsx)("i",{children:"aria-controls"})," to be handled explicitly."]}),(0,i.jsxs)("p",{children:["Close element is a ",(0,i.jsx)("i",{children:"button"})," with an ",(0,i.jsx)("i",{children:"aria-label"})," that refers to the ",(0,i.jsx)("i",{children:"aria.close"})," property of the ",(0,i.jsx)(l.default,{href:"/locale",children:"locale"})," API by default, you may use",(0,i.jsx)("i",{children:"closeButtonProps"})," to customize the element and override the default ",(0,i.jsx)("i",{children:"aria-label"}),"."]}),(0,i.jsx)(s.CodeHighlight,{children:`
<Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} aria-controls={visible ? 'dlg' : null} aria-expanded={visible ? true : false} />

<Dialog id="dlg" header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
<p>Content</p>
</Dialog>
`}),(0,i.jsx)("h3",{children:"Overlay Keyboard Support"}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Key"}),(0,i.jsx)("th",{children:"Function"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"tab"})}),(0,i.jsx)("td",{children:"Moves focus to the next the focusable element within the dialog."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("i",{children:"shift"})," + ",(0,i.jsx)("i",{children:"tab"})]}),(0,i.jsx)("td",{children:"Moves focus to the previous the focusable element within the dialog."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"escape"})}),(0,i.jsxs)("td",{children:["Closes the dialog if ",(0,i.jsx)("i",{children:"closeOnEscape"})," is true."]})]})]})]})}),(0,i.jsx)("h3",{children:"Close Button Keyboard Support"}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Key"}),(0,i.jsx)("th",{children:"Function"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"enter"})}),(0,i.jsx)("td",{children:"Closes the dialog."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"space"})}),(0,i.jsx)("td",{children:"Closes the dialog."})]})]})]})})]})}var r=e.i(5180),u=e.i(57724),c=e.i(61149),d=e.i(91788);function m(e){let[t,a]=(0,d.useState)(!1),s={basic:`
<Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
<Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Dialog>
        `,javascript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function BasicDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function BasicDoc() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Dialog is used as a container and visibility is controlled with a binding to ",(0,i.jsx)("i",{children:"visible"})," and ",(0,i.jsx)("i",{children:"onHide"})," event callback. Dialogs are ",(0,i.jsx)("i",{children:"draggable"})," and ",(0,i.jsx)("i",{children:"resizable"})," by default."]})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsx)(u.Button,{label:"Show",icon:"pi pi-external-link",onClick:()=>a(!0)}),(0,i.jsx)(c.Dialog,{header:"Header",visible:t,style:{width:"50vw"},onHide:()=>{t&&a(!1)},children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]}),(0,i.jsx)(r.DocSectionCode,{code:s})]})}function p(e){let[t,a]=(0,d.useState)(!1),s=(0,i.jsxs)("div",{children:[(0,i.jsx)(u.Button,{label:"No",icon:"pi pi-times",onClick:()=>a(!1),className:"p-button-text"}),(0,i.jsx)(u.Button,{label:"Yes",icon:"pi pi-check",onClick:()=>a(!1),autoFocus:!0})]}),l={basic:`
<Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
<Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }} footer={footerContent}>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Dialog>
        `,javascript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function FooterDemo() {
    const [visible, setVisible] = useState(false);
    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }} footer={footerContent}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function FooterDemo() {
    const [visible, setVisible] = useState<boolean>(false);
    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }} footer={footerContent}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Custom content such as buttons can be placed at the footer section with the ",(0,i.jsx)("i",{children:"footer"})," property."]})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsx)(u.Button,{label:"Show",icon:"pi pi-external-link",onClick:()=>a(!0)}),(0,i.jsx)(c.Dialog,{header:"Header",visible:t,style:{width:"50vw"},onHide:()=>{t&&a(!1)},footer:s,children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]}),(0,i.jsx)(r.DocSectionCode,{code:l})]})}var b=e.i(66082);function h(e){let[t,a]=(0,d.useState)(!1),s={basic:`
<Button label="Login" icon="pi pi-user" onClick={() => setVisible(true)} />
<Dialog
    visible={visible}
    modal
    onHide={() => {if (!visible) return; setVisible(false); }}
    content={({ hide }) => (
        <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
            <...>
        </div>
    )}
></Dialog>
        `,javascript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function HeadlessDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Button label="Login" icon="pi pi-user" onClick={() => setVisible(true)} />
            <Dialog
                visible={visible}
                modal
                onHide={() => {if (!visible) return; setVisible(false); }}
                content={({ hide }) => (
                    <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="block mx-auto">
                            <g mask="url(#mask0_2642_713)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z"
                                    fill="white"
                                />
                            </g>
                            <path d="M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z" fill="white" />
                            <path d="M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z" fill="white" />
                            <path d="M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z" fill="white" />
                            <path d="M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z" fill="white" />
                            <path d="M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z" fill="white" />
                            <path d="M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z" fill="white" />
                            <path d="M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z" fill="white" />
                            <path d="M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z" fill="white" />
                        </svg>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                                Username
                            </label>
                            <InputText id="username" label="Username" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                                Username
                            </label>
                            <InputText id="password" label="Password" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="password"></InputText>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <Button label="Sign-In" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            <Button label="Cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        </div>
                    </div>
                )}
            ></Dialog>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function HeadlessDemo() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Button label="Login" icon="pi pi-user" onClick={() => setVisible(true)} />
            <Dialog
                visible={visible}
                modal
                onHide={() => {if (!visible) return; setVisible(false); }}
                content={({ hide }) => (
                    <div className="flex flex-column px-8 py-5 gap-4" style={{ borderRadius: '12px', backgroundImage: 'radial-gradient(circle at left top, var(--primary-400), var(--primary-700))' }}>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="block mx-auto">
                            <g mask="url(#mask0_2642_713)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z"
                                    fill="white"
                                />
                            </g>
                            <path d="M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z" fill="white" />
                            <path d="M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z" fill="white" />
                            <path d="M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z" fill="white" />
                            <path d="M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z" fill="white" />
                            <path d="M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z" fill="white" />
                            <path d="M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z" fill="white" />
                            <path d="M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z" fill="white" />
                            <path d="M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z" fill="white" />
                        </svg>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                                Username
                            </label>
                            <InputText id="username" label="Username" className="bg-white-alpha-20 border-none p-3 text-primary-50"></InputText>
                        </div>
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="username" className="text-primary-50 font-semibold">
                                Username
                            </label>
                            <InputText id="password" label="Password" className="bg-white-alpha-20 border-none p-3 text-primary-50" type="password"></InputText>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <Button label="Sign-In" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                            <Button label="Cancel" onClick={(e) => hide(e)} text className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"></Button>
                        </div>
                    </div>
                )}
            ></Dialog>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Headless mode is enabled by defining a ",(0,i.jsx)("i",{children:"content"})," prop that lets you implement entire dialog UI instead of the default elements."]})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsx)(u.Button,{label:"Login",icon:"pi pi-user",onClick:()=>a(!0)}),(0,i.jsx)(c.Dialog,{visible:t,modal:!0,onHide:()=>{t&&a(!1)},content:({hide:e})=>(0,i.jsxs)("div",{className:"flex flex-column px-8 py-5 gap-4",style:{borderRadius:"12px",backgroundImage:"radial-gradient(circle at left top, var(--primary-400), var(--primary-700))"},children:[(0,i.jsxs)("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"block mx-auto",children:[(0,i.jsx)("g",{mask:"url(#mask0_2642_713)",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z",fill:"white"})}),(0,i.jsx)("path",{d:"M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z",fill:"white"}),(0,i.jsx)("path",{d:"M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z",fill:"white"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z",fill:"white"}),(0,i.jsx)("path",{d:"M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z",fill:"white"}),(0,i.jsx)("path",{d:"M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z",fill:"white"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z",fill:"white"}),(0,i.jsx)("path",{d:"M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z",fill:"white"}),(0,i.jsx)("path",{d:"M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z",fill:"white"}),(0,i.jsx)("path",{d:"M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z",fill:"white"}),(0,i.jsx)("path",{d:"M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z",fill:"white"})]}),(0,i.jsxs)("div",{className:"inline-flex flex-column gap-2",children:[(0,i.jsx)("label",{htmlFor:"username",className:"text-primary-50 font-semibold",children:"Username"}),(0,i.jsx)(b.InputText,{id:"username",label:"Username",className:"bg-white-alpha-20 border-none p-3 text-primary-50"})]}),(0,i.jsxs)("div",{className:"inline-flex flex-column gap-2",children:[(0,i.jsx)("label",{htmlFor:"username",className:"text-primary-50 font-semibold",children:"Username"}),(0,i.jsx)(b.InputText,{id:"password",label:"Password",className:"bg-white-alpha-20 border-none p-3 text-primary-50",type:"password"})]}),(0,i.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,i.jsx)(u.Button,{label:"Sign-In",onClick:i=>e(i),text:!0,className:"p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"}),(0,i.jsx)(u.Button,{label:"Cancel",onClick:i=>e(i),text:!0,className:"p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"})]})]})})]}),(0,i.jsx)(r.DocSectionCode,{code:s})]})}function f(e){let t={basic:`
import { Dialog } from 'primereact/dialog';
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DocSectionText,{...e}),(0,i.jsx)(r.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function v(e){let[t,a]=(0,d.useState)(!1),s={basic:`
<Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
<Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
    <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p className="mb-5">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
        ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
    <p className="mb-5">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
        maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
        non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
    </p>
    <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p className="mb-5">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
        ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
    <p className="mb-5">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
        maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
        non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
    </p>
</Dialog>
        `,javascript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function LongContentDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="mb-5">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                    ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
                <p className="mb-5">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                    maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                    non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
                <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="mb-5">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                    ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
                <p className="mb-5">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                    maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                    non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
            </Dialog>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function LongContentDemo() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="mb-5">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                    ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
                <p className="mb-5">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                    maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                    non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
                <p className="mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="mb-5">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                    ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
                <p className="mb-5">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                    maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                    non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
            </Dialog>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"Dialog automatically displays a scroller when content exceeeds viewport."})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsx)(u.Button,{label:"Show",icon:"pi pi-external-link",onClick:()=>a(!0)}),(0,i.jsxs)(c.Dialog,{header:"Header",visible:t,style:{width:"50vw"},onHide:()=>{t&&a(!1)},children:[(0,i.jsx)("p",{className:"mb-5",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,i.jsx)("p",{className:"mb-5",children:'"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'}),(0,i.jsx)("p",{className:"mb-5",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."}),(0,i.jsx)("p",{className:"mb-5",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),(0,i.jsx)("p",{className:"mb-5",children:'"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'}),(0,i.jsx)("p",{className:"mb-5",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."})]})]}),(0,i.jsx)(r.DocSectionCode,{code:s})]})}function x(e){let[t,a]=(0,d.useState)(!1),s={basic:`
<Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
<Dialog header="Header" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Dialog>
        `,javascript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function MaximizableDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function MaximizableDemo() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Adding ",(0,i.jsx)("i",{children:"maximizable"})," property enables the full screen mode."]})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsx)(u.Button,{label:"Show",icon:"pi pi-external-link",onClick:()=>a(!0)}),(0,i.jsx)(c.Dialog,{header:"Header",visible:t,maximizable:!0,style:{width:"50vw"},onHide:()=>{t&&a(!1)},children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]}),(0,i.jsx)(r.DocSectionCode,{code:s})]})}function g(e){let[t,a]=(0,d.useState)(!1),[s,l]=(0,d.useState)("center"),n=(0,i.jsxs)("div",{children:[(0,i.jsx)(u.Button,{label:"No",icon:"pi pi-times",onClick:()=>a(!1),className:"p-button-text"}),(0,i.jsx)(u.Button,{label:"Yes",icon:"pi pi-check",onClick:()=>a(!1),autoFocus:!0})]}),m=e=>{l(e),a(!0)},p={basic:`
<div className="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button label="Left" icon="pi pi-arrow-right" onClick={() => show('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
    <Button label="Right" icon="pi pi-arrow-left" onClick={() => show('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
</div>
<div className="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => show('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
    <Button label="Top" icon="pi pi-arrow-down" onClick={() => show('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
    <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => show('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
</div>
<div className="flex flex-wrap justify-content-center gap-2">
    <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => show('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
    <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => show('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
    <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => show('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
</div>

<Dialog header="Header" visible={visible} position={position} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }} footer={footerContent} draggable={false} resizable={false}>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Dialog>
        `,javascript:`
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function PositionDemo() {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState('center');
    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    const show = (position) => {
        setPosition(position);
        setVisible(true);
    };

    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="Left" icon="pi pi-arrow-right" onClick={() => show('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
                <Button label="Right" icon="pi pi-arrow-left" onClick={() => show('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => show('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="Top" icon="pi pi-arrow-down" onClick={() => show('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => show('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2">
                <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => show('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => show('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => show('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
            </div>

            <Dialog header="Header" visible={visible} position={position} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }} footer={footerContent} draggable={false} resizable={false}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function PositionDemo() {
    const [visible, setVisible] = useState<boolean>(false);
    const [position, setPosition] = useState<string>('center');
    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    const show = (position: string) => {
        setPosition(position);
        setVisible(true);
    };

    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="Left" icon="pi pi-arrow-right" onClick={() => show('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
                <Button label="Right" icon="pi pi-arrow-left" onClick={() => show('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => show('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="Top" icon="pi pi-arrow-down" onClick={() => show('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => show('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2">
                <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => show('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => show('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => show('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
            </div>

            <Dialog header="Header" visible={visible} position={position} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }} footer={footerContent} draggable={false} resizable={false}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["The ",(0,i.jsx)("i",{children:"position"})," property is used to display a Dialog at all edges and corners of the screen."]})}),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsxs)("div",{className:"flex flex-wrap justify-content-center gap-2 mb-2",children:[(0,i.jsx)(u.Button,{label:"Left",icon:"pi pi-arrow-right",onClick:()=>m("left"),className:"p-button-help",style:{minWidth:"10rem"}}),(0,i.jsx)(u.Button,{label:"Right",icon:"pi pi-arrow-left",onClick:()=>m("right"),className:"p-button-help",style:{minWidth:"10rem"}})]}),(0,i.jsxs)("div",{className:"flex flex-wrap justify-content-center gap-2 mb-2",children:[(0,i.jsx)(u.Button,{label:"TopLeft",icon:"pi pi-arrow-down-right",onClick:()=>m("top-left"),className:"p-button-warning",style:{minWidth:"10rem"}}),(0,i.jsx)(u.Button,{label:"Top",icon:"pi pi-arrow-down",onClick:()=>m("top"),className:"p-button-warning",style:{minWidth:"10rem"}}),(0,i.jsx)(u.Button,{label:"TopRight",icon:"pi pi-arrow-down-left",onClick:()=>m("top-right"),className:"p-button-warning",style:{minWidth:"10rem"}})]}),(0,i.jsxs)("div",{className:"flex flex-wrap justify-content-center gap-2",children:[(0,i.jsx)(u.Button,{label:"BottomLeft",icon:"pi pi-arrow-up-right",onClick:()=>m("bottom-left"),className:"p-button-success",style:{minWidth:"10rem"}}),(0,i.jsx)(u.Button,{label:"Bottom",icon:"pi pi-arrow-up",onClick:()=>m("bottom"),className:"p-button-success",style:{minWidth:"10rem"}}),(0,i.jsx)(u.Button,{label:"BottomRight",icon:"pi pi-arrow-up-left",onClick:()=>m("bottom-right"),className:"p-button-success",style:{minWidth:"10rem"}})]}),(0,i.jsx)(c.Dialog,{header:"Header",visible:t,position:s,style:{width:"50vw"},onHide:()=>{t&&a(!1)},footer:n,draggable:!1,resizable:!1,children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]}),(0,i.jsx)(r.DocSectionCode,{code:p})]})}let q=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DocSectionText,{...e}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/dialog.jpg",alt:"dialog"})})]});function w(e){let[t,a]=(0,d.useState)(!1),s={basic:`
<Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
<Dialog header="Header" visible={visible} onHide={() => {if (!visible) return; setVisible(false); }}
    style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Dialog>
        `,javascript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function ResponsiveDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} onHide={() => {if (!visible) return; setVisible(false); }}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function ResponsiveDemo() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} onHide={() => {if (!visible) return; setVisible(false); }}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Dialog width can be adjusted per screen size with the ",(0,i.jsx)("i",{children:"breakpoints"})," option where a key defines the max-width for the breakpoint and value for the corresponding width. When no breakpoint matches width defined in ",(0,i.jsx)("i",{children:"style"})," ","property is used"]})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsx)(u.Button,{label:"Show",icon:"pi pi-external-link",onClick:()=>a(!0)}),(0,i.jsx)(c.Dialog,{header:"Header",visible:t,onHide:()=>{t&&a(!1)},style:{width:"50vw"},breakpoints:{"960px":"75vw","641px":"100vw"},children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]}),(0,i.jsx)(r.DocSectionCode,{code:s})]})}var L=e.i(10197);function j(e){let[t,a]=(0,d.useState)(!1),s=(0,i.jsxs)("div",{className:"inline-flex align-items-center justify-content-center gap-2",children:[(0,i.jsx)(L.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",shape:"circle"}),(0,i.jsx)("span",{className:"font-bold white-space-nowrap",children:"Amy Elsner"})]}),l=(0,i.jsx)("div",{children:(0,i.jsx)(u.Button,{label:"Ok",icon:"pi pi-check",onClick:()=>a(!1),autoFocus:!0})}),n={basic:`
<Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
<Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Dialog>
        `,javascript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Avatar } from '@/components/lib/avatar/Avatar';

export default function TemplateDemo() {
    const [visible, setVisible] = useState(false);

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold white-space-nowrap">Amy Elsner</span>
        </div>
    );

    const footerContent = (
        <div>
            <Button label="Ok" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog visible={visible} modal header={headerElement} footer={footerContent} style={{ width: '50rem' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Avatar } from '@/components/lib/avatar/Avatar';

export default function TemplateDemo() {
    const [visible, setVisible] = useState<boolean>(false);

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold white-space-nowrap">Amy Elsner</span>
        </div>
    );

    const footerContent = (
        <div>
            <Button label="Ok" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog visible={visible} modal header={headerElement} footer={footerContent} style={{ width: '50rem' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"Header and Footer sections allow customization via templating."})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsx)(u.Button,{label:"Show",icon:"pi pi-external-link",onClick:()=>a(!0)}),(0,i.jsx)(c.Dialog,{visible:t,modal:!0,header:s,footer:l,style:{width:"50rem"},onHide:()=>{t&&a(!1)},children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]}),(0,i.jsx)(r.DocSectionCode,{code:n})]})}function y(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Element"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-dialog"}),(0,i.jsx)("td",{children:"Container element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-dialog-header"}),(0,i.jsx)("td",{children:"Container of header."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-dialog-title"}),(0,i.jsx)("td",{children:"Header element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-dialog-header-icons"}),(0,i.jsx)("td",{children:"Icon container inside header."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-dialog-header-close"}),(0,i.jsx)("td",{children:"Close icon element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-dialog-header-maximize"}),(0,i.jsx)("td",{children:"Maximize icon element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-dialog-content"}),(0,i.jsx)("td",{children:"Content element"})]})]})]})})]})}function C(e){let t={basic:`
const Tailwind = {
    dialog: {
        root: ({ state }) => ({
            className: classNames('rounded-lg shadow-lg border-0', 'max-h-[90%] transform scale-100', 'm-0 w-[50vw]', 'dark:border dark:border-blue-900/40', {
                'transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': state.maximized
            })
        }),
        header: {
            className: classNames('flex items-center justify-between shrink-0', 'bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6', 'dark:bg-gray-900  dark:text-white/80')
        },
        headerTitle: 'font-bold text-lg',
        headerIcons: 'flex items-center',
        closeButton: {
            className: classNames(
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        closeButtonIcon: 'w-4 h-4 inline-block',
        content: ({ state }) => ({
            className: classNames('overflow-y-auto', 'bg-white text-gray-700 px-6 pb-8 pt-0', 'rounded-bl-lg rounded-br-lg', 'dark:bg-gray-900  dark:text-white/80 ', {
                grow: state.maximized
            })
        }),
        footer: {
            className: classNames('shrink-0 ', 'border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-lg', 'dark:bg-gray-900  dark:text-white/80')
        },
        mask: ({ state }) => ({
            className: classNames('transition duration-200', { 'bg-black/40': state.containerVisible })
        }),
        transition: ({ props }) => {
            return props.position === 'top'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0'
                  }
                : props.position === 'bottom'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-y-full',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0'
                  }
                : props.position === 'left' || props.position === 'top-left' || props.position === 'bottom-left'
                ? {
                      enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0'
                  }
                : props.position === 'right' || props.position === 'top-right' || props.position === 'bottom-right'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
                  }
                : {
                      enterFromClass: 'opacity-0 scale-75',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75'
                  };
        }
    }
}
        `},a={javascript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function UnstyledDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
    `};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(o.DocSectionText,{...e,children:[(0,i.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,i.jsx)(l.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,i.jsx)(r.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,i.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,i.jsx)(r.DocSectionCode,{code:a,embedded:!0})]})})}function N(e){let[t,a]=(0,d.useState)(!1),s={basic:`
<Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
<Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Dialog>
        `,javascript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function WithoutModalDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} modal={false} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function WithoutModalDemo() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} modal={false} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Mask layer behind the Dialog can be turned off by disabling the ",(0,i.jsx)("i",{children:"modal"})," property."]})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsx)(u.Button,{label:"Show",icon:"pi pi-external-link",onClick:()=>a(!0)}),(0,i.jsx)(c.Dialog,{header:"Header",visible:t,modal:!1,style:{width:"50vw"},onHide:()=>{t&&a(!1)},children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]}),(0,i.jsx)(r.DocSectionCode,{code:s})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:q},{id:"pt.dialog.options",label:"Dialog PT Options",component:t.default}];return(0,i.jsx)(a.DocComponent,{title:"React Dialog Component",header:"Dialog",description:"Dialog is a container to display content in an overlay window",componentDocs:[{id:"import",label:"Import",component:f},{id:"basic",label:"Basic",component:m},{id:"template",label:"Template",component:j},{id:"position",label:"Position",component:g},{id:"maximizable",label:"Maximizable",component:x},{id:"longcontent",label:"Long Content",component:v},{id:"modal",label:"Without Modal",component:N},{id:"responsive",label:"Responsive",component:w},{id:"footer",label:"Footer",component:p},{id:"headless",label:"Headless",component:h},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["Dialog"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:y},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:C}]}]})}],58681)},7475,(e,i,t)=>{let a="/dialog";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(58681)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([a])})}]);