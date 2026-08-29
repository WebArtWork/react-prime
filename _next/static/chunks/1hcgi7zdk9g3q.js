(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95583,e=>{"use strict";var i=e.i(91398),s=e.i(88850),t=e.i(82948),a=e.i(57294),r=e.i(28137);function o(){return(0,i.jsxs)(r.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,i.jsx)("h3",{children:"Screen Reader"}),(0,i.jsxs)("p",{children:["Sidebar component uses ",(0,i.jsx)("i",{children:"complementary"})," role by default, since any attribute is passed to the root element aria role can be changed depending on your use case and additional attributes like ",(0,i.jsx)("i",{children:"aria-labelledby"})," can be added. In addition ",(0,i.jsx)("i",{children:"aria-modal"})," is added since focus is kept within the sidebar when opened."]}),(0,i.jsxs)("p",{children:["It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding ",(0,i.jsx)("i",{children:"tabIndex"})," would be necessary."]}),(0,i.jsxs)("p",{children:["Trigger element also requires ",(0,i.jsx)("i",{children:"aria-expanded"})," and ",(0,i.jsx)("i",{children:"aria-controls"})," to be handled explicitly."]}),(0,i.jsx)(a.CodeHighlight,{children:`
<Button icon="pi pi-arrow-right" onClick={(e) => setVisible(true)} aria-controls={visible ? 'sbar' : null} aria-expanded={visible ? true : false}/>

<Sidebar id="sidebar" visible={visible} onHide={() => setVisible(false)} role="region">
Content
</Sidebar>
`}),(0,i.jsx)("h3",{children:"Overlay Keyboard Support"}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Key"}),(0,i.jsx)("th",{children:"Function"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"tab"})}),(0,i.jsx)("td",{children:"Moves focus to the next the focusable element within the sidebar."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("i",{children:"shift"})," + ",(0,i.jsx)("i",{children:"tab"})]}),(0,i.jsx)("td",{children:"Moves focus to the previous the focusable element within the sidebar."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"escape"})}),(0,i.jsxs)("td",{children:["Closes the dialog if ",(0,i.jsx)("i",{children:"closeOnEscape"})," is true."]})]})]})]})}),(0,i.jsx)("h3",{children:"Close Button Keyboard Support"}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Key"}),(0,i.jsx)("th",{children:"Function"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"enter"})}),(0,i.jsx)("td",{children:"Closes the sidebar."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"space"})}),(0,i.jsx)("td",{children:"Closes the sidebar."})]})]})]})})]})}var n=e.i(5180),l=e.i(57724),c=e.i(36163),d=e.i(91788);function m(e){let[s,t]=(0,d.useState)(!1),a={basic:`
<div className="card flex justify-content-center">
    <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h2>Sidebar</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </Sidebar>
    <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
</div>
        `,javascript:`
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Sidebar is used as a container and visibility is controlled with a binding to ",(0,i.jsx)("i",{children:"visible"})," and ",(0,i.jsx)("i",{children:"onHide"})," event callback."]})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsxs)(c.Sidebar,{visible:s,onHide:()=>t(!1),children:[(0,i.jsx)("h2",{children:"Sidebar"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),(0,i.jsx)(l.Button,{icon:"pi pi-arrow-right",onClick:()=>t(!0)})]}),(0,i.jsx)(n.DocSectionCode,{code:a})]})}function p(e){let[s,t]=(0,d.useState)(!1),a={basic:`
<div className="card flex justify-content-center">
    <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
        <h2>Sidebar</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </Sidebar>
    <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
</div>
        `,javascript:`
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function FullScreenDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-window-maximize" onClick={() => setVisible(true)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function FullScreenDemo() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-window-maximize" onClick={() => setVisible(true)} />
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Sidebar can cover the whole page when ",(0,i.jsx)("i",{children:"fullScreen"})," property is enabled."]})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsxs)(c.Sidebar,{visible:s,onHide:()=>t(!1),fullScreen:!0,children:[(0,i.jsx)("h2",{children:"Sidebar"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),(0,i.jsx)(l.Button,{icon:"pi pi-window-maximize",onClick:()=>t(!0)})]}),(0,i.jsx)(n.DocSectionCode,{code:a})]})}var u=e.i(10197),f=e.i(50901),h=e.i(58215);function b(e){let[s,t]=(0,d.useState)(!1),a=(0,d.useRef)(null),o=(0,d.useRef)(null),m=(0,d.useRef)(null),p=(0,d.useRef)(null),b={basic:`
<Sidebar
    visible={visible}
    onHide={() => setVisible(false)}
    content={({ closeIconRef, hide }) => (
        <div className="min-h-screen flex relative lg:static surface-ground">
            <div id="app-sidebar-2" className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
                <div className="flex flex-column h-full">
                    <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                        <span className="inline-flex align-items-center gap-2">
                            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="..."
                                    fill="var(--primary-color)"
                                />
                                <path
                                    d="..."
                                    fill="var(--text-color)"
                                />
                            </svg>
                            <span className="font-semibold text-2xl text-primary">Your Logo</span>
                        </span>
                        <span>
                            <Button type="button" ref={closeIconRef} onClick={(e) => hide(e)} icon="pi pi-times" rounded outlined className="h-2rem w-2rem"></Button>
                        </span>
                    </div>
                    <div className="overflow-y-auto">
                        <ul className="list-none p-3 m-0">
                            <li>
                                <StyleClass nodeRef={btnRef1} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                        <span className="font-medium">FAVORITES</span>
                                        <i className="pi pi-chevron-down"></i>
                                        <Ripple />
                                    </div>
                                </StyleClass>
                                <ul className="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-home mr-2"></i>
                                            <span className="font-medium">Dashboard</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-bookmark mr-2"></i>
                                            <span className="font-medium">Bookmarks</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <StyleClass nodeRef={btnRef2} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                            <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                <i className="pi pi-chart-line mr-2"></i>
                                                <span className="font-medium">Reports</span>
                                                <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                <Ripple />
                                            </a>
                                        </StyleClass>
                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                            <li>
                                                <StyleClass nodeRef={btnRef3} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                    <a ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">Revenue</span>
                                                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-table mr-2"></i>
                                                            <span className="font-medium">View</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-search mr-2"></i>
                                                            <span className="font-medium">Search</span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                    <i className="pi pi-chart-line mr-2"></i>
                                                    <span className="font-medium">Expenses</span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-users mr-2"></i>
                                            <span className="font-medium">Team</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-comments mr-2"></i>
                                            <span className="font-medium">Messages</span>
                                            <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>
                                                3
                                            </span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-calendar mr-2"></i>
                                            <span className="font-medium">Calendar</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">Settings</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="list-none p-3 m-0">
                            <li>
                                <StyleClass nodeRef={btnRef4} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                        <span className="font-medium">APPLICATION</span>
                                        <i className="pi pi-chevron-down"></i>
                                        <Ripple />
                                    </div>
                                </StyleClass>
                                <ul className="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-folder mr-2"></i>
                                            <span className="font-medium">Projects</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-chart-bar mr-2"></i>
                                            <span className="font-medium">Performance</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">Settings</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                        <a  className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                            <span className="font-bold">Amy Elsner</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )}
></Sidebar>
        `,javascript:`
import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';

export default function HeadlessDemo() {
    const [visible, setVisible] = useState(false);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);

    return (
        <div className="card flex justify-content-center">
            <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                content={({ closeIconRef, hide }) => (
                    <div className="min-h-screen flex relative lg:static surface-ground">
                        <div id="app-sidebar-2" className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
                            <div className="flex flex-column h-full">
                                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                                    <span className="inline-flex align-items-center gap-2">
                                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g mask="url(#mask0_2642_713)">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z"
                                                    fill="var(--primary-color)"
                                                />
                                            </g>
                                            <path d="M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z" fill="var(--primary-color)" />
                                            <path d="M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z" fill="var(--primary-color)" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z" fill="var(--primary-color)" />
                                            <path d="M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z" fill="var(--primary-color)" />
                                            <path d="M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z" fill="var(--primary-color)" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z" fill="var(--primary-color)" />
                                            <path d="M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z" fill="var(--primary-color)" />
                                            <path d="M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z" fill="var(--primary-color)" />
                                            <path d="M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z" fill="var(--primary-color)" />
                                            <path d="M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z" fill="var(--primary-color)" />
                                        </svg>
                                        <span className="font-semibold text-2xl text-primary">Your Logo</span>
                                    </span>
                                    <span>
                                        <Button type="button" ref={closeIconRef} onClick={(e) => hide(e)} icon="pi pi-times" rounded outlined className="h-2rem w-2rem"></Button>
                                    </span>
                                </div>
                                <div className="overflow-y-auto">
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <StyleClass nodeRef={btnRef1} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                    <span className="font-medium">FAVORITES</span>
                                                    <i className="pi pi-chevron-down"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-home mr-2"></i>
                                                        <span className="font-medium">Dashboard</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-bookmark mr-2"></i>
                                                        <span className="font-medium">Bookmarks</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <StyleClass nodeRef={btnRef2} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                        <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium">Reports</span>
                                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                            <Ripple />
                                                        </a>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <StyleClass nodeRef={btnRef3} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                                <a ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                    <i className="pi pi-chart-line mr-2"></i>
                                                                    <span className="font-medium">Revenue</span>
                                                                    <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                                    <Ripple />
                                                                </a>
                                                            </StyleClass>
                                                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                        <i className="pi pi-table mr-2"></i>
                                                                        <span className="font-medium">View</span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                        <i className="pi pi-search mr-2"></i>
                                                                        <span className="font-medium">Search</span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-chart-line mr-2"></i>
                                                                <span className="font-medium">Expenses</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-users mr-2"></i>
                                                        <span className="font-medium">Team</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-comments mr-2"></i>
                                                        <span className="font-medium">Messages</span>
                                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>
                                                            3
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-calendar mr-2"></i>
                                                        <span className="font-medium">Calendar</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-cog mr-2"></i>
                                                        <span className="font-medium">Settings</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <StyleClass nodeRef={btnRef4} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                    <span className="font-medium">APPLICATION</span>
                                                    <i className="pi pi-chevron-down"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-folder mr-2"></i>
                                                        <span className="font-medium">Projects</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-chart-bar mr-2"></i>
                                                        <span className="font-medium">Performance</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-cog mr-2"></i>
                                                        <span className="font-medium">Settings</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                                    <a  className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                                        <span className="font-bold">Amy Elsner</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            ></Sidebar>
        </div>
    )
}
        `,typescript:`
import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';

export default function HeadlessDemo() {
    const [visible, setVisible] = useState<boolean>(false);
    const btnRef1 = useRef<any>(null);
    const btnRef2 = useRef<any>(null);
    const btnRef3 = useRef<any>(null);
    const btnRef4 = useRef<any>(null);

    return (
        <div className="card flex justify-content-center">
            <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                content={({ closeIconRef, hide }) => (
                    <div className="min-h-screen flex relative lg:static surface-ground">
                        <div id="app-sidebar-2" className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none" style={{ width: '280px' }}>
                            <div className="flex flex-column h-full">
                                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                                    <span className="inline-flex align-items-center gap-2">
                                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g mask="url(#mask0_2642_713)">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z"
                                                    fill="var(--primary-color)"
                                                />
                                            </g>
                                            <path d="M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z" fill="var(--primary-color)" />
                                            <path d="M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z" fill="var(--primary-color)" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z" fill="var(--primary-color)" />
                                            <path d="M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z" fill="var(--primary-color)" />
                                            <path d="M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z" fill="var(--primary-color)" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z" fill="var(--primary-color)" />
                                            <path d="M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z" fill="var(--primary-color)" />
                                            <path d="M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z" fill="var(--primary-color)" />
                                            <path d="M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z" fill="var(--primary-color)" />
                                            <path d="M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z" fill="var(--primary-color)" />
                                        </svg>
                                        <span className="font-semibold text-2xl text-primary">Your Logo</span>
                                    </span>
                                    <span>
                                        <Button type="button" ref={closeIconRef} onClick={(e) => hide(e)} icon="pi pi-times" rounded outlined className="h-2rem w-2rem"></Button>
                                    </span>
                                </div>
                                <div className="overflow-y-auto">
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <StyleClass nodeRef={btnRef1} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                    <span className="font-medium">FAVORITES</span>
                                                    <i className="pi pi-chevron-down"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-home mr-2"></i>
                                                        <span className="font-medium">Dashboard</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-bookmark mr-2"></i>
                                                        <span className="font-medium">Bookmarks</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <StyleClass nodeRef={btnRef2} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                        <a ref={btnRef2} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium">Reports</span>
                                                            <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                            <Ripple />
                                                        </a>
                                                    </StyleClass>
                                                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                        <li>
                                                            <StyleClass nodeRef={btnRef3} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                                <a ref={btnRef3} className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                    <i className="pi pi-chart-line mr-2"></i>
                                                                    <span className="font-medium">Revenue</span>
                                                                    <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                                                    <Ripple />
                                                                </a>
                                                            </StyleClass>
                                                            <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                        <i className="pi pi-table mr-2"></i>
                                                                        <span className="font-medium">View</span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                        <i className="pi pi-search mr-2"></i>
                                                                        <span className="font-medium">Search</span>
                                                                        <Ripple />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                                <i className="pi pi-chart-line mr-2"></i>
                                                                <span className="font-medium">Expenses</span>
                                                                <Ripple />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-users mr-2"></i>
                                                        <span className="font-medium">Team</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-comments mr-2"></i>
                                                        <span className="font-medium">Messages</span>
                                                        <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>
                                                            3
                                                        </span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-calendar mr-2"></i>
                                                        <span className="font-medium">Calendar</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-cog mr-2"></i>
                                                        <span className="font-medium">Settings</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul className="list-none p-3 m-0">
                                        <li>
                                            <StyleClass nodeRef={btnRef4} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                                <div ref={btnRef4} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                                    <span className="font-medium">APPLICATION</span>
                                                    <i className="pi pi-chevron-down"></i>
                                                    <Ripple />
                                                </div>
                                            </StyleClass>
                                            <ul className="list-none p-0 m-0 overflow-hidden">
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-folder mr-2"></i>
                                                        <span className="font-medium">Projects</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-chart-bar mr-2"></i>
                                                        <span className="font-medium">Performance</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                                        <i className="pi pi-cog mr-2"></i>
                                                        <span className="font-medium">Settings</span>
                                                        <Ripple />
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-auto">
                                    <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                                    <a  className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                                        <span className="font-bold">Amy Elsner</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            ></Sidebar>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Headless mode is enabled by defining a ",(0,i.jsx)("i",{children:"content"})," prop that lets you implement entire sidebar UI instead of the default elements."]})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsx)(c.Sidebar,{visible:s,onHide:()=>t(!1),content:({closeIconRef:e,hide:s})=>(0,i.jsx)("div",{className:"min-h-screen flex relative lg:static surface-ground",children:(0,i.jsx)("div",{id:"app-sidebar-2",className:"surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none",style:{width:"280px"},children:(0,i.jsxs)("div",{className:"flex flex-column h-full",children:[(0,i.jsxs)("div",{className:"flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0",children:[(0,i.jsxs)("span",{className:"inline-flex align-items-center gap-2",children:[(0,i.jsxs)("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("g",{mask:"url(#mask0_2642_713)",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z",fill:"var(--primary-color)"})}),(0,i.jsx)("path",{d:"M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z",fill:"var(--primary-color)"}),(0,i.jsx)("path",{d:"M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z",fill:"var(--primary-color)"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z",fill:"var(--primary-color)"}),(0,i.jsx)("path",{d:"M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z",fill:"var(--primary-color)"}),(0,i.jsx)("path",{d:"M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z",fill:"var(--primary-color)"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z",fill:"var(--primary-color)"}),(0,i.jsx)("path",{d:"M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z",fill:"var(--primary-color)"}),(0,i.jsx)("path",{d:"M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z",fill:"var(--primary-color)"}),(0,i.jsx)("path",{d:"M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z",fill:"var(--primary-color)"}),(0,i.jsx)("path",{d:"M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z",fill:"var(--primary-color)"})]}),(0,i.jsx)("span",{className:"font-semibold text-2xl text-primary",children:"Your Logo"})]}),(0,i.jsx)("span",{children:(0,i.jsx)(l.Button,{type:"button",ref:e,onClick:e=>s(e),icon:"pi pi-times",rounded:!0,outlined:!0,className:"h-2rem w-2rem"})})]}),(0,i.jsxs)("div",{className:"overflow-y-auto",children:[(0,i.jsx)("ul",{className:"list-none p-3 m-0",children:(0,i.jsxs)("li",{children:[(0,i.jsx)(h.StyleClass,{nodeRef:a,selector:"@next",enterFromClassName:"hidden",enterActiveClassName:"slidedown",leaveToClassName:"hidden",leaveActiveClassName:"slideup",children:(0,i.jsxs)("div",{ref:a,className:"p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer",children:[(0,i.jsx)("span",{className:"font-medium",children:"FAVORITES"}),(0,i.jsx)("i",{className:"pi pi-chevron-down"}),(0,i.jsx)(f.Ripple,{})]})}),(0,i.jsxs)("ul",{className:"list-none p-0 m-0 overflow-hidden",children:[(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full",children:[(0,i.jsx)("i",{className:"pi pi-home mr-2"}),(0,i.jsx)("span",{className:"font-medium",children:"Dashboard"}),(0,i.jsx)(f.Ripple,{})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full",children:[(0,i.jsx)("i",{className:"pi pi-bookmark mr-2"}),(0,i.jsx)("span",{className:"font-medium",children:"Bookmarks"}),(0,i.jsx)(f.Ripple,{})]})}),(0,i.jsxs)("li",{children:[(0,i.jsx)(h.StyleClass,{nodeRef:o,selector:"@next",enterFromClassName:"hidden",enterActiveClassName:"slidedown",leaveToClassName:"hidden",leaveActiveClassName:"slideup",children:(0,i.jsxs)("a",{ref:o,className:"p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full",children:[(0,i.jsx)("i",{className:"pi pi-chart-line mr-2"}),(0,i.jsx)("span",{className:"font-medium",children:"Reports"}),(0,i.jsx)("i",{className:"pi pi-chevron-down ml-auto mr-1"}),(0,i.jsx)(f.Ripple,{})]})}),(0,i.jsxs)("ul",{className:"list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)(h.StyleClass,{nodeRef:m,selector:"@next",enterFromClassName:"hidden",enterActiveClassName:"slidedown",leaveToClassName:"hidden",leaveActiveClassName:"slideup",children:(0,i.jsxs)("a",{ref:m,className:"p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full",children:[(0,i.jsx)("i",{className:"pi pi-chart-line mr-2"}),(0,i.jsx)("span",{className:"font-medium",children:"Revenue"}),(0,i.jsx)("i",{className:"pi pi-chevron-down ml-auto mr-1"}),(0,i.jsx)(f.Ripple,{})]})}),(0,i.jsxs)("ul",{className:"list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out",children:[(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full",children:[(0,i.jsx)("i",{className:"pi pi-table mr-2"}),(0,i.jsx)("span",{className:"font-medium",children:"View"}),(0,i.jsx)(f.Ripple,{})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full",children:[(0,i.jsx)("i",{className:"pi pi-search mr-2"}),(0,i.jsx)("span",{className:"font-medium",children:"Search"}),(0,i.jsx)(f.Ripple,{})]})})]})]}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full",children:[(0,i.jsx)("i",{className:"pi pi-chart-line mr-2"}),(0,i.jsx)("span",{className:"font-medium",children:"Expenses"}),(0,i.jsx)(f.Ripple,{})]})})]})]}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full",children:[(0,i.jsx)("i",{className:"pi pi-users mr-2"}),(0,i.jsx)("span",{className:"font-medium",children:"Team"}),(0,i.jsx)(f.Ripple,{})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full",children:[(0,i.jsx)("i",{className:"pi pi-comments mr-2"}),(0,i.jsx)("span",{className:"font-medium",children:"Messages"}),(0,i.jsx)("span",{className:"inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle",style:{minWidth:"1.5rem",height:"1.5rem"},children:"3"}),(0,i.jsx)(f.Ripple,{})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full",children:[(0,i.jsx)("i",{className:"pi pi-calendar mr-2"}),(0,i.jsx)("span",{className:"font-medium",children:"Calendar"}),(0,i.jsx)(f.Ripple,{})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full",children:[(0,i.jsx)("i",{className:"pi pi-cog mr-2"}),(0,i.jsx)("span",{className:"font-medium",children:"Settings"}),(0,i.jsx)(f.Ripple,{})]})})]})]})}),(0,i.jsx)("ul",{className:"list-none p-3 m-0",children:(0,i.jsxs)("li",{children:[(0,i.jsx)(h.StyleClass,{nodeRef:p,selector:"@next",enterFromClassName:"hidden",enterActiveClassName:"slidedown",leaveToClassName:"hidden",leaveActiveClassName:"slideup",children:(0,i.jsxs)("div",{ref:p,className:"p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer",children:[(0,i.jsx)("span",{className:"font-medium",children:"APPLICATION"}),(0,i.jsx)("i",{className:"pi pi-chevron-down"}),(0,i.jsx)(f.Ripple,{})]})}),(0,i.jsxs)("ul",{className:"list-none p-0 m-0 overflow-hidden",children:[(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full",children:[(0,i.jsx)("i",{className:"pi pi-folder mr-2"}),(0,i.jsx)("span",{className:"font-medium",children:"Projects"}),(0,i.jsx)(f.Ripple,{})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full",children:[(0,i.jsx)("i",{className:"pi pi-chart-bar mr-2"}),(0,i.jsx)("span",{className:"font-medium",children:"Performance"}),(0,i.jsx)(f.Ripple,{})]})}),(0,i.jsx)("li",{children:(0,i.jsxs)("a",{className:"p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full",children:[(0,i.jsx)("i",{className:"pi pi-cog mr-2"}),(0,i.jsx)("span",{className:"font-medium",children:"Settings"}),(0,i.jsx)(f.Ripple,{})]})})]})]})})]}),(0,i.jsxs)("div",{className:"mt-auto",children:[(0,i.jsx)("hr",{className:"mb-3 mx-3 border-top-1 border-none surface-border"}),(0,i.jsxs)("a",{className:"m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple",children:[(0,i.jsx)(u.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",shape:"circle"}),(0,i.jsx)("span",{className:"font-bold",children:"Amy Elsner"})]})]})]})})})}),(0,i.jsx)(l.Button,{icon:"pi pi-bars",onClick:()=>t(!0)})]}),(0,i.jsx)(n.DocSectionCode,{code:b})]})}function x(e){let s={basic:`
import { Sidebar } from 'primereact/sidebar';
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e}),(0,i.jsx)(n.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function v(e){let[s,t]=(0,d.useState)(!1),[a,o]=(0,d.useState)(!1),[m,p]=(0,d.useState)(!1),[u,f]=(0,d.useState)(!1),h={basic:`
<div className="flex gap-2 justify-content-center">
    <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} />
    <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
    <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} />
    <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} />
</div>

<Sidebar visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}>
    <h2>Left Sidebar</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</Sidebar>

<Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
    <h2>Right Sidebar</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</Sidebar>

<Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
    <h2>Top Sidebar</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</Sidebar>

<Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
    <h2>Bottom Sidebar</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</Sidebar>
        `,javascript:`
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function PositionDemo() {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);
    const [visibleBottom, setVisibleBottom] = useState(false);

    return (
        <div className="card">
            <div className="flex gap-2 justify-content-center">
                <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} />
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
                <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} />
                <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} />
            </div>

            <Sidebar visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}>
                <h2>Left Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h2>Right Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

            <Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                <h2>Top Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

            <Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
                <h2>Bottom Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function PositionDemo() {
    const [visibleLeft, setVisibleLeft] = useState<boolean>(false);
    const [visibleRight, setVisibleRight] = useState<boolean>(false);
    const [visibleTop, setVisibleTop] = useState<boolean>(false);
    const [visibleBottom, setVisibleBottom] = useState<boolean>(false);

    return (
        <div className="card">
            <div className="flex gap-2 justify-content-center">
                <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} />
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
                <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} />
                <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} />
            </div>

            <Sidebar visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}>
                <h2>Left Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h2>Right Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

            <Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                <h2>Top Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

            <Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
                <h2>Bottom Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Sidebar location is configured with the ",(0,i.jsx)("i",{children:"position"})," property that can take ",(0,i.jsx)("i",{children:"left"}),", ",(0,i.jsx)("i",{children:"right"}),", ",(0,i.jsx)("i",{children:"top"})," and ",(0,i.jsx)("i",{children:"bottom"})," as a value."]})}),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsxs)("div",{className:"flex gap-2 justify-content-center",children:[(0,i.jsx)(l.Button,{icon:"pi pi-arrow-right",onClick:()=>t(!0)}),(0,i.jsx)(l.Button,{icon:"pi pi-arrow-left",onClick:()=>o(!0)}),(0,i.jsx)(l.Button,{icon:"pi pi-arrow-down",onClick:()=>p(!0)}),(0,i.jsx)(l.Button,{icon:"pi pi-arrow-up",onClick:()=>f(!0)})]}),(0,i.jsxs)(c.Sidebar,{visible:s,position:"left",onHide:()=>t(!1),children:[(0,i.jsx)("h2",{children:"Left Sidebar"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),(0,i.jsxs)(c.Sidebar,{visible:a,position:"right",onHide:()=>o(!1),children:[(0,i.jsx)("h2",{children:"Right Sidebar"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),(0,i.jsxs)(c.Sidebar,{visible:m,position:"top",onHide:()=>p(!1),children:[(0,i.jsx)("h2",{children:"Top Sidebar"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),(0,i.jsxs)(c.Sidebar,{visible:u,position:"bottom",onHide:()=>f(!1),children:[(0,i.jsx)("h2",{children:"Bottom Sidebar"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})]}),(0,i.jsx)(n.DocSectionCode,{code:h})]})}let N=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/sidebar.jpg",alt:"sidebar"})})]});function g(e){let[s,t]=(0,d.useState)(!1),a={basic:`
<div className="card flex justify-content-center">
    <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
        <h2>Sidebar</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </Sidebar>
    <Button icon="pi pi-th-large" onClick={() => setVisible(true)} />
</div>
        `,javascript:`
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function SizeDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="w-full md:w-20rem lg:w-30rem">
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function SizeDemo() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="w-full md:w-20rem lg:w-30rem">
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Sidebar dimension can be defined with ",(0,i.jsx)("i",{children:"style"})," or ",(0,i.jsx)("i",{children:"className"})," properties which can also be responsive when used with a CSS utility library like PrimeFlex."]})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsxs)(c.Sidebar,{visible:s,onHide:()=>t(!1),className:"w-full md:w-20rem lg:w-30rem",children:[(0,i.jsx)("h2",{children:"Sidebar"}),(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),(0,i.jsx)(l.Button,{icon:"pi pi-arrow-right",onClick:()=>t(!0)})]}),(0,i.jsx)(n.DocSectionCode,{code:a})]})}function j(e){let[s,t]=(0,d.useState)(!1),a=(0,i.jsx)(d.default.Fragment,{children:(0,i.jsx)("button",{className:"p-sidebar-icon p-link mr-2",children:(0,i.jsx)("span",{className:"pi pi-search"})})}),o=(0,i.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,i.jsx)(u.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",shape:"circle"}),(0,i.jsx)("span",{className:"font-bold",children:"Amy Elsner"})]}),m={basic:`
<Sidebar visible={visible} onHide={() => setVisible(false)} icons={customIcons}>
    <h2>Sidebar</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</Sidebar>
<Button icon="pi pi-plus" onClick={() => setVisible(true)} />
        `,javascript:`
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';

export default function TemplateDemo() {
    const [visible, setVisible] = useState(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-2">
                <span className="pi pi-search" />
            </button>
        </React.Fragment>
    );

    const customHeader = (
        <div className="flex align-items-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold">Amy Elsner</span>
        </div>
    );
    
    return (
        <div className="card flex justify-content-center">
            <Sidebar header={customHeader} visible={visible} onHide={() => setVisible(false)} icons={customIcons}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-plus" onClick={() => setVisible(true)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';

export default function TemplateDemo() {
    const [visible, setVisible] = useState<boolean>(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-2">
                <span className="pi pi-search" />
            </button>
        </React.Fragment>
    );

    const customHeader = (
        <div className="flex align-items-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold">Amy Elsner</span>
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Sidebar header={customHeader} visible={visible} onHide={() => setVisible(false)} icons={customIcons}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-plus" onClick={() => setVisible(true)} />
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Additional content at the header section is provided using the ",(0,i.jsx)("i",{children:"icons"})," and ",(0,i.jsx)("i",{children:"header"})," property."]})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsx)(c.Sidebar,{header:o,visible:s,onHide:()=>t(!1),icons:a,children:(0,i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})}),(0,i.jsx)(l.Button,{icon:"pi pi-plus",onClick:()=>t(!0)})]}),(0,i.jsx)(n.DocSectionCode,{code:m})]})}function L(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Element"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-sidebar"}),(0,i.jsx)("td",{children:"Container element"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-sidebar-left"}),(0,i.jsx)("td",{children:"Container element of left sidebar."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-sidebar-right"}),(0,i.jsx)("td",{children:"Container element of right sidebar."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-sidebar-top"}),(0,i.jsx)("td",{children:"Container element of top sidebar."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-sidebar-bottom"}),(0,i.jsx)("td",{children:"Container element of bottom sidebar."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-sidebar-full"}),(0,i.jsx)("td",{children:"Container element of a full screen sidebar."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-sidebar-active"}),(0,i.jsx)("td",{children:"Container element when sidebar is visible."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-sidebar-close"}),(0,i.jsx)("td",{children:"Close anchor element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-sidebar-sm"}),(0,i.jsx)("td",{children:"Small sized sidebar."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-sidebar-md"}),(0,i.jsx)("td",{children:"Medium sized sidebar."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-sidebar-lg"}),(0,i.jsx)("td",{children:"Large sized sidebar."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-sidebar-view"}),(0,i.jsx)("td",{children:"The page view is displayed according to the sidebar position."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-sidebar-content"}),(0,i.jsx)("td",{children:"Content of sidebar."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-sidebar-mask"}),(0,i.jsx)("td",{children:"Modal layer of the sidebar."})]})]})]})})]})}var w=e.i(41158);function S(e){let s={basic:`
const Tailwind = {
    sidebar: {
        root: ({ props }) => ({
            className: classNames(
                'flex flex-col pointer-events-auto relative transform translate-x-0 translate-y-0 translate-z-0 relative transition-transform duration-300',
                'bg-white text-gray-700 border-0 shadow-lg',
                {
                    '!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': props.position == 'full',
                    'h-full w-80': props.position == 'left' || props.position == 'right',
                    'h-40 w-full': props.position == 'top' || props.position == 'bottom'
                },
                'dark:border dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80'
            )
        }),
        header: {
            className: classNames('flex items-center justify-end', 'p-5')
        },
        closeButton: {
            className: classNames(
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        closeButtonIcon: 'w-4 h-4 inline-block',
        content: {
            className: classNames('p-5 pt-0 h-full w-full', 'grow overflow-y-auto')
        },
        mask: {
            className: classNames('flex pointer-events-auto', 'bg-black bg-opacity-40 transition duration-200 z-20 transition-colors')
        },
        transition: ({ props }) => {
            return props.position === 'top'
                ? {
                      enterFromClass: 'translate-x-0 -translate-y-full translate-z-0',
                      leaveToClass: 'translate-x-0 -translate-y-full translate-z-0'
                  }
                : props.position === 'bottom'
                ? {
                      enterFromClass: 'translate-x-0 translate-y-full translate-z-0',
                      leaveToClass: 'translate-x-0 translate-y-full translate-z-0'
                  }
                : props.position === 'left'
                ? {
                      enterFromClass: '-translate-x-full translate-y-0 translate-z-0',
                      leaveToClass: '-translate-x-full translate-y-0 translate-z-0'
                  }
                : props.position === 'right'
                ? {
                      enterFromClass: 'translate-x-full translate-y-0 translate-z-0',
                      leaveToClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
                  }
                : {
                      enterFromClass: 'opacity-0',
                      enterActiveClass: 'transition-opacity duration-400 ease-in',
                      leaveActiveClass: 'transition-opacity duration-400 ease-in',
                      leaveToClass: 'opacity-0'
                  };
        }
    }
}
        `},t={javascript:`
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function UnstyledDemo() {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);
    const [visibleBottom, setVisibleBottom] = useState(false);

    return (
        <div className="card">
            <div className="flex gap-2 justify-content-center">
                <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} />
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
                <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} />
                <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} />
            </div>

            <Sidebar visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}>
                <h2>Left Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h2>Right Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

            <Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                <h2>Top Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

            <Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
                <h2>Bottom Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
        </div>
    )
}
    `};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.DocSectionText,{...e,children:[(0,i.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,i.jsx)(w.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,i.jsx)(n.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,i.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,i.jsx)(n.DocSectionCode,{code:t,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:N},{id:"pt.sidebar.options",label:"Sidebar PT Options",component:s.default}];return(0,i.jsx)(t.DocComponent,{title:"React Sidebar Component",header:"Sidebar",description:"Sidebar, also known as Drawer, is a container component displayed as an overlay.",componentDocs:[{id:"import",label:"Import",component:x},{id:"basic",label:"Basic",component:m},{id:"position",label:"Position",component:v},{id:"size",label:"Size",component:g},{id:"fullscreen",label:"Full Screen",component:p},{id:"template",label:"Template",component:j},{id:"headless",label:"Headless",component:b},{id:"accessibility",label:"Accessibility",component:o}],apiDocs:["Sidebar"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:L},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:S}]}]})}],95583)},2597,(e,i,s)=>{let t="/sidebar";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(95583)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([t])})}]);