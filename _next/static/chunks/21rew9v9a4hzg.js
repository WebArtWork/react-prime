(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,58055,e=>{"use strict";var t=e.i(91398),r=e.i(5180),i=e.i(28137);function o(){let e={basic:`
<Button icon="pi pi-check" aria-label="Submit" />

<Button icon="pi pi-check" label="Submit" />

<Button className="youtube p-0" aria-label="Youtube">
    <i className="pi pi-youtube px-2"></i>
    <span className="px-3">Youtube</span>
</Button>
    `};return(0,t.jsxs)(i.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Button component renders a native button element that implicitly includes any passed prop. Text to describe the button is defined with the ",(0,t.jsx)("i",{children:"aria-label"})," prop, if not present ",(0,t.jsx)("i",{children:"label"})," prop is used as the value. If the button is icon only or custom templating is used, it is recommended to use ",(0,t.jsx)("i",{children:"aria-label"})," so that screen readers would be able to read the element properly."]}),(0,t.jsx)(r.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the button."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Activates the button."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Activates the button."})]})]})]})})]})}var n=e.i(57724);function a(e){let o={basic:`
<Button type="button" label="Emails" badge="8" />
<Button type="button" label="Messages" icon="pi pi-users" outlined badge="2" badgeClassName="p-badge-danger" />
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function BadgesDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button type="button" label="Emails" badge="8" />
            <Button type="button" label="Messages" icon="pi pi-users" outlined badge="2" badgeClassName="p-badge-danger" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function BadgesDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button type="button" label="Emails" badge="8" />
            <Button type="button" label="Messages" icon="pi pi-users" outlined badge="2" badgeClassName="p-badge-danger" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Buttons have built-in badge support with ",(0,t.jsx)("i",{children:"badge"})," and ",(0,t.jsx)("i",{children:"badgeClassName"})," properties."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(n.Button,{type:"button",label:"Emails",badge:"8"}),(0,t.jsx)(n.Button,{type:"button",label:"Messages",icon:"pi pi-users",outlined:!0,badge:"2",badgeClassName:"p-badge-danger"})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function l(e){let o={basic:`
<Button label="Submit" />
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Submit" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Submit" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Text to display on a button is defined with the ",(0,t.jsx)("i",{children:"label"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(n.Button,{label:"Submit"})}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}var s=e.i(91788),c=e.i(10836),d=e.i(15498),p=e.i(60150),u=e.i(51551),b=e.i(3935);let x=d.ComponentBase.extend({defaultProps:{__TYPE:"ButtonGroup",children:void 0},css:{classes:{root:"p-button-group p-component"}}}),m=s.memo(s.forwardRef((e,r)=>{let i=(0,p.useMergeProps)(),o=s.useContext(c.PrimeReactContext),n=x.getProps(e,o),a=s.useRef(r),{ptm:l,cx:m,isUnstyled:y}=x.setMetaData({props:n});(0,d.useHandleStyle)(x.css.styles,y,{name:"buttongroup"}),s.useEffect(()=>{u.ObjectUtils.combinedRefs(a,r)},[a,r]);let g=1===s.Children.count(n.children),v=i({ref:a,className:(0,b.classNames)(m("root"),{"p-button-group-single":g}),role:"group"},x.getOtherProps(n),l("root"));return(0,t.jsx)("span",{...v,children:n.children})}));function y(e){let o={basic:`
<ButtonGroup>
    <Button label="Save" icon="pi pi-check" />
    <Button label="Delete" icon="pi pi-trash" />
    <Button label="Cancel" icon="pi pi-times" />
</ButtonGroup>
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';

export default function ButtonSetDemo() {
    return (
        <div className="card flex justify-content-center">
            <ButtonGroup>
                <Button label="Save" icon="pi pi-check" />
                <Button label="Delete" icon="pi pi-trash" />
                <Button label="Cancel" icon="pi pi-times" />
            </ButtonGroup>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';

export default function ButtonSetDemo() {
    return (
        <div className="card flex justify-content-center">
            <ButtonGroup>
                <Button label="Save" icon="pi pi-check" />
                <Button label="Delete" icon="pi pi-trash" />
                <Button label="Cancel" icon="pi pi-times" />
            </ButtonGroup>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Multiple buttons are grouped when wrapped inside an element with ",(0,t.jsx)("i",{children:"ButtonGroup"})," component."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)(m,{children:[(0,t.jsx)(n.Button,{label:"Save",icon:"pi pi-check"}),(0,t.jsx)(n.Button,{label:"Delete",icon:"pi pi-trash"}),(0,t.jsx)(n.Button,{label:"Cancel",icon:"pi pi-times"})]})}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function g(e){let o={basic:`
<Button label="Submit" disabled />
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Submit" disabled />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Submit" disabled />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(n.Button,{label:"Submit",disabled:!0})}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function v(e){let o={basic:`
<Button icon="pi pi-check" aria-label="Filter" />
<Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
<Button icon="pi pi-search" severity="success" aria-label="Search" />
<Button icon="pi pi-user" severity="info" aria-label="User" />
<Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
<Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
<Button icon="pi pi-times" severity="danger" aria-label="Cancel" />

<Button icon="pi pi-check" rounded aria-label="Filter" />
<Button icon="pi pi-bookmark" rounded severity="secondary" aria-label="Bookmark" />
<Button icon="pi pi-search" rounded severity="success" aria-label="Search" />
<Button icon="pi pi-user" rounded severity="info" aria-label="User" />
<Button icon="pi pi-bell" rounded severity="warning" aria-label="Notification" />
<Button icon="pi pi-heart" rounded severity="help" aria-label="Favorite" />
<Button icon="pi pi-times" rounded severity="danger" aria-label="Cancel" />

<Button icon="pi pi-check" rounded outlined aria-label="Filter" />
<Button icon="pi pi-bookmark" rounded outlined severity="secondary" aria-label="Bookmark" />
<Button icon="pi pi-search" rounded outlined severity="success" aria-label="Search" />
<Button icon="pi pi-user" rounded outlined severity="info" aria-label="User" />
<Button icon="pi pi-bell" rounded outlined severity="warning" aria-label="Notification" />
<Button icon="pi pi-heart" rounded outlined severity="help" aria-label="Favorite" />
<Button icon="pi pi-times" rounded outlined severity="danger" aria-label="Cancel" />

<Button icon="pi pi-check" rounded text raised aria-label="Filter" />
<Button icon="pi pi-bookmark" rounded text raised severity="secondary" aria-label="Bookmark" />
<Button icon="pi pi-search" rounded text raised severity="success" aria-label="Search" />
<Button icon="pi pi-user" rounded text raised severity="info" aria-label="User" />
<Button icon="pi pi-bell" rounded text raised severity="warning" aria-label="Notification" />
<Button icon="pi pi-heart" rounded text raised severity="help" aria-label="Favorite" />
<Button icon="pi pi-times" rounded text raised severity="danger" aria-label="Cancel" />

<Button icon="pi pi-check" rounded text aria-label="Filter" />
<Button icon="pi pi-bookmark" rounded text severity="secondary" aria-label="Bookmark" />
<Button icon="pi pi-search" rounded text severity="success" aria-label="Search" />
<Button icon="pi pi-user" rounded text severity="info" aria-label="User" />
<Button icon="pi pi-bell" rounded text severity="warning" aria-label="Notification" />
<Button icon="pi pi-heart" rounded text severity="help" aria-label="Favorite" />
<Button icon="pi pi-times" rounded text severity="danger" aria-label="Cancel" />
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function IconOnlyDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" aria-label="Filter" />
                <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" severity="success" aria-label="Search" />
                <Button icon="pi pi-user" severity="info" aria-label="User" />
                <Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
                <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
                <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" rounded aria-label="Filter" />
                <Button icon="pi pi-bookmark" rounded severity="secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" rounded severity="success" aria-label="Search" />
                <Button icon="pi pi-user" rounded severity="info" aria-label="User" />
                <Button icon="pi pi-bell" rounded severity="warning" aria-label="Notification" />
                <Button icon="pi pi-heart" rounded severity="help" aria-label="Favorite" />
                <Button icon="pi pi-times" rounded severity="danger" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" rounded outlined aria-label="Filter" />
                <Button icon="pi pi-bookmark" rounded outlined severity="secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" rounded outlined severity="success" aria-label="Search" />
                <Button icon="pi pi-user" rounded outlined severity="info" aria-label="User" />
                <Button icon="pi pi-bell" rounded outlined severity="warning" aria-label="Notification" />
                <Button icon="pi pi-heart" rounded outlined severity="help" aria-label="Favorite" />
                <Button icon="pi pi-times" rounded outlined severity="danger" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" rounded text raised aria-label="Filter" />
                <Button icon="pi pi-bookmark" rounded text raised severity="secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" rounded text raised severity="success" aria-label="Search" />
                <Button icon="pi pi-user" rounded text raised severity="info" aria-label="User" />
                <Button icon="pi pi-bell" rounded text raised severity="warning" aria-label="Notification" />
                <Button icon="pi pi-heart" rounded text raised severity="help" aria-label="Favorite" />
                <Button icon="pi pi-times" rounded text raised severity="danger" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3">
                <Button icon="pi pi-check" rounded text aria-label="Filter" />
                <Button icon="pi pi-bookmark" rounded text severity="secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" rounded text severity="success" aria-label="Search" />
                <Button icon="pi pi-user" rounded text severity="info" aria-label="User" />
                <Button icon="pi pi-bell" rounded text severity="warning" aria-label="Notification" />
                <Button icon="pi pi-heart" rounded text severity="help" aria-label="Favorite" />
                <Button icon="pi pi-times" rounded text severity="danger" aria-label="Cancel" />
            </div>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function IconOnlyDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" aria-label="Filter" />
                <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" severity="success" aria-label="Search" />
                <Button icon="pi pi-user" severity="info" aria-label="User" />
                <Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
                <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
                <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" rounded aria-label="Filter" />
                <Button icon="pi pi-bookmark" rounded severity="secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" rounded severity="success" aria-label="Search" />
                <Button icon="pi pi-user" rounded severity="info" aria-label="User" />
                <Button icon="pi pi-bell" rounded severity="warning" aria-label="Notification" />
                <Button icon="pi pi-heart" rounded severity="help" aria-label="Favorite" />
                <Button icon="pi pi-times" rounded severity="danger" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" rounded outlined aria-label="Filter" />
                <Button icon="pi pi-bookmark" rounded outlined severity="secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" rounded outlined severity="success" aria-label="Search" />
                <Button icon="pi pi-user" rounded outlined severity="info" aria-label="User" />
                <Button icon="pi pi-bell" rounded outlined severity="warning" aria-label="Notification" />
                <Button icon="pi pi-heart" rounded outlined severity="help" aria-label="Favorite" />
                <Button icon="pi pi-times" rounded outlined severity="danger" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3 mb-4">
                <Button icon="pi pi-check" rounded text raised aria-label="Filter" />
                <Button icon="pi pi-bookmark" rounded text raised severity="secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" rounded text raised severity="success" aria-label="Search" />
                <Button icon="pi pi-user" rounded text raised severity="info" aria-label="User" />
                <Button icon="pi pi-bell" rounded text raised severity="warning" aria-label="Notification" />
                <Button icon="pi pi-heart" rounded text raised severity="help" aria-label="Favorite" />
                <Button icon="pi pi-times" rounded text raised severity="danger" aria-label="Cancel" />
            </div>

            <div className="flex flex-wrap justify-content-center gap-3">
                <Button icon="pi pi-check" rounded text aria-label="Filter" />
                <Button icon="pi pi-bookmark" rounded text severity="secondary" aria-label="Bookmark" />
                <Button icon="pi pi-search" rounded text severity="success" aria-label="Search" />
                <Button icon="pi pi-user" rounded text severity="info" aria-label="User" />
                <Button icon="pi pi-bell" rounded text severity="warning" aria-label="Notification" />
                <Button icon="pi pi-heart" rounded text severity="help" aria-label="Favorite" />
                <Button icon="pi pi-times" rounded text severity="danger" aria-label="Cancel" />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Buttons can have icons without labels."})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"flex flex-wrap justify-content-center gap-3 mb-4",children:[(0,t.jsx)(n.Button,{icon:"pi pi-check","aria-label":"Filter"}),(0,t.jsx)(n.Button,{icon:"pi pi-bookmark",severity:"secondary","aria-label":"Bookmark"}),(0,t.jsx)(n.Button,{icon:"pi pi-search",severity:"success","aria-label":"Search"}),(0,t.jsx)(n.Button,{icon:"pi pi-user",severity:"info","aria-label":"User"}),(0,t.jsx)(n.Button,{icon:"pi pi-bell",severity:"warning","aria-label":"Notification"}),(0,t.jsx)(n.Button,{icon:"pi pi-heart",severity:"help","aria-label":"Favorite"}),(0,t.jsx)(n.Button,{icon:"pi pi-times",severity:"danger","aria-label":"Cancel"})]}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-content-center gap-3 mb-4",children:[(0,t.jsx)(n.Button,{icon:"pi pi-check",rounded:!0,"aria-label":"Filter"}),(0,t.jsx)(n.Button,{icon:"pi pi-bookmark",rounded:!0,severity:"secondary","aria-label":"Bookmark"}),(0,t.jsx)(n.Button,{icon:"pi pi-search",rounded:!0,severity:"success","aria-label":"Search"}),(0,t.jsx)(n.Button,{icon:"pi pi-user",rounded:!0,severity:"info","aria-label":"User"}),(0,t.jsx)(n.Button,{icon:"pi pi-bell",rounded:!0,severity:"warning","aria-label":"Notification"}),(0,t.jsx)(n.Button,{icon:"pi pi-heart",rounded:!0,severity:"help","aria-label":"Favorite"}),(0,t.jsx)(n.Button,{icon:"pi pi-times",rounded:!0,severity:"danger","aria-label":"Cancel"})]}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-content-center gap-3 mb-4",children:[(0,t.jsx)(n.Button,{icon:"pi pi-check",rounded:!0,outlined:!0,"aria-label":"Filter"}),(0,t.jsx)(n.Button,{icon:"pi pi-bookmark",rounded:!0,outlined:!0,severity:"secondary","aria-label":"Bookmark"}),(0,t.jsx)(n.Button,{icon:"pi pi-search",rounded:!0,outlined:!0,severity:"success","aria-label":"Search"}),(0,t.jsx)(n.Button,{icon:"pi pi-user",rounded:!0,outlined:!0,severity:"info","aria-label":"User"}),(0,t.jsx)(n.Button,{icon:"pi pi-bell",rounded:!0,outlined:!0,severity:"warning","aria-label":"Notification"}),(0,t.jsx)(n.Button,{icon:"pi pi-heart",rounded:!0,outlined:!0,severity:"help","aria-label":"Favorite"}),(0,t.jsx)(n.Button,{icon:"pi pi-times",rounded:!0,outlined:!0,severity:"danger","aria-label":"Cancel"})]}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-content-center gap-3 mb-4",children:[(0,t.jsx)(n.Button,{icon:"pi pi-check",rounded:!0,text:!0,raised:!0,"aria-label":"Filter"}),(0,t.jsx)(n.Button,{icon:"pi pi-bookmark",rounded:!0,text:!0,raised:!0,severity:"secondary","aria-label":"Bookmark"}),(0,t.jsx)(n.Button,{icon:"pi pi-search",rounded:!0,text:!0,raised:!0,severity:"success","aria-label":"Search"}),(0,t.jsx)(n.Button,{icon:"pi pi-user",rounded:!0,text:!0,raised:!0,severity:"info","aria-label":"User"}),(0,t.jsx)(n.Button,{icon:"pi pi-bell",rounded:!0,text:!0,raised:!0,severity:"warning","aria-label":"Notification"}),(0,t.jsx)(n.Button,{icon:"pi pi-heart",rounded:!0,text:!0,raised:!0,severity:"help","aria-label":"Favorite"}),(0,t.jsx)(n.Button,{icon:"pi pi-times",rounded:!0,text:!0,raised:!0,severity:"danger","aria-label":"Cancel"})]}),(0,t.jsxs)("div",{className:"flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(n.Button,{icon:"pi pi-check",rounded:!0,text:!0,"aria-label":"Filter"}),(0,t.jsx)(n.Button,{icon:"pi pi-bookmark",rounded:!0,text:!0,severity:"secondary","aria-label":"Bookmark"}),(0,t.jsx)(n.Button,{icon:"pi pi-search",rounded:!0,text:!0,severity:"success","aria-label":"Search"}),(0,t.jsx)(n.Button,{icon:"pi pi-user",rounded:!0,text:!0,severity:"info","aria-label":"User"}),(0,t.jsx)(n.Button,{icon:"pi pi-bell",rounded:!0,text:!0,severity:"warning","aria-label":"Notification"}),(0,t.jsx)(n.Button,{icon:"pi pi-heart",rounded:!0,text:!0,severity:"help","aria-label":"Favorite"}),(0,t.jsx)(n.Button,{icon:"pi pi-times",rounded:!0,text:!0,severity:"danger","aria-label":"Cancel"})]})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function f(e){let o={basic:`
<Button icon="pi pi-check" />
<Button label="Submit" icon="pi pi-check" />
<Button label="Submit" icon="pi pi-check" iconPos="right" />
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function IconsDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" iconPos="right" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function IconsDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" iconPos="right" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Icon of a button is specified with ",(0,t.jsx)("i",{children:"icon"})," property and position is configured using ",(0,t.jsx)("i",{children:"iconPos"})," attribute."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(n.Button,{icon:"pi pi-check"}),(0,t.jsx)(n.Button,{label:"Submit",icon:"pi pi-check"}),(0,t.jsx)(n.Button,{label:"Submit",icon:"pi pi-check",iconPos:"right"})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function h(e){let o={basic:`
import { Button } from 'primereact/button';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)(r.DocSectionCode,{code:o,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function B(e){let o={basic:`
<Button label="Link" link onClick={() =>  window.open('https://react.dev', '_blank')}/>
<a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
    Navigate
</a>
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function LinkDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Link" link onClick={() =>  window.open('https://react.dev', '_blank')}/>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
                Navigate
            </a>

        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function LinkDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Link" link onClick={() =>  window.open('https://react.dev', '_blank')}/>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="p-button font-bold">
                Navigate
            </a>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A button can be rendered as a link when the ",(0,t.jsx)("i",{children:"link"})," property is present. On the other hand, adding ",(0,t.jsx)("i",{children:".p-button"})," class to an anchor element displays the link as a button."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(n.Button,{label:"Link",link:!0,onClick:()=>window.open("https://react.dev","_blank")}),(0,t.jsx)("a",{href:"https://react.dev",target:"_blank",rel:"noopener noreferrer",className:"p-button font-bold",children:"Navigate"})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function j(e){let[o,a]=(0,s.useState)(!1),l={basic:`
<Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
        `,javascript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';

export default function LoadingDemo() {
    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';

export default function LoadingDemo() {
    const [loading, setLoading] = useState<boolean>(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Busy state is controlled with the ",(0,t.jsx)("i",{children:"loading"})," property."]})}),(0,t.jsx)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:(0,t.jsx)(n.Button,{label:"Submit",icon:"pi pi-check",loading:o,onClick:()=>{a(!0),setTimeout(()=>{a(!1)},2e3)}})}),(0,t.jsx)(r.DocSectionCode,{code:l})]})}function k(e){let o={basic:`
<Button label="Primary" outlined />
<Button label="Secondary" severity="secondary" outlined />
<Button label="Success" severity="success" outlined />
<Button label="Info" severity="info" outlined />
<Button label="Warning" severity="warning" outlined />
<Button label="Help" severity="help" outlined />
<Button label="Danger" severity="danger" outlined />
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function OutlinedDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" outlined />
            <Button label="Secondary" severity="secondary" outlined />
            <Button label="Success" severity="success" outlined />
            <Button label="Info" severity="info" outlined />
            <Button label="Warning" severity="warning" outlined />
            <Button label="Help" severity="help" outlined />
            <Button label="Danger" severity="danger" outlined />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function OutlinedDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" outlined />
            <Button label="Secondary" severity="secondary" outlined />
            <Button label="Success" severity="success" outlined />
            <Button label="Info" severity="info" outlined />
            <Button label="Warning" severity="warning" outlined />
            <Button label="Help" severity="help" outlined />
            <Button label="Danger" severity="danger" outlined />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Outlined buttons display a border without a background initially."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(n.Button,{label:"Primary",outlined:!0}),(0,t.jsx)(n.Button,{label:"Secondary",severity:"secondary",outlined:!0}),(0,t.jsx)(n.Button,{label:"Success",severity:"success",outlined:!0}),(0,t.jsx)(n.Button,{label:"Info",severity:"info",outlined:!0}),(0,t.jsx)(n.Button,{label:"Warning",severity:"warning",outlined:!0}),(0,t.jsx)(n.Button,{label:"Help",severity:"help",outlined:!0}),(0,t.jsx)(n.Button,{label:"Danger",severity:"danger",outlined:!0})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}m.displayName="ButtonGroup";let _=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/button.jpg",alt:"button"})})]});function w(e){let o={basic:`
<Button label="Primary" raised />
<Button label="Secondary" severity="secondary" raised />
<Button label="Success" severity="success" raised />
<Button label="Info" severity="info" raised />
<Button label="Warning" severity="warning" raised />
<Button label="Help" severity="help" raised />
<Button label="Danger" severity="danger" raised />
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function RaisedDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" raised />
            <Button label="Secondary" severity="secondary" raised />
            <Button label="Success" severity="success" raised />
            <Button label="Info" severity="info" raised />
            <Button label="Warning" severity="warning" raised />
            <Button label="Help" severity="help" raised />
            <Button label="Danger" severity="danger" raised />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function RaisedDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" raised />
            <Button label="Secondary" severity="secondary" raised />
            <Button label="Success" severity="success" raised />
            <Button label="Info" severity="info" raised />
            <Button label="Warning" severity="warning" raised />
            <Button label="Help" severity="help" raised />
            <Button label="Danger" severity="danger" raised />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Raised buttons display a shadow to indicate elevation."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(n.Button,{label:"Primary",raised:!0}),(0,t.jsx)(n.Button,{label:"Secondary",severity:"secondary",raised:!0}),(0,t.jsx)(n.Button,{label:"Success",severity:"success",raised:!0}),(0,t.jsx)(n.Button,{label:"Info",severity:"info",raised:!0}),(0,t.jsx)(n.Button,{label:"Warning",severity:"warning",raised:!0}),(0,t.jsx)(n.Button,{label:"Help",severity:"help",raised:!0}),(0,t.jsx)(n.Button,{label:"Danger",severity:"danger",raised:!0})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function S(e){let o={basic:`
<Button label="Primary" text raised />
<Button label="Secondary" severity="secondary" text raised />
<Button label="Success" severity="success" text raised />
<Button label="Info" severity="info" text raised />
<Button label="Warning" severity="warning" text raised />
<Button label="Help" severity="help" text raised />
<Button label="Danger" severity="danger" text raised />
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function RaisedTextDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" text raised />
            <Button label="Secondary" severity="secondary" text raised />
            <Button label="Success" severity="success" text raised />
            <Button label="Info" severity="info" text raised />
            <Button label="Warning" severity="warning" text raised />
            <Button label="Help" severity="help" text raised />
            <Button label="Danger" severity="danger" text raised />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function RaisedTextDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" text raised />
            <Button label="Secondary" severity="secondary" text raised />
            <Button label="Success" severity="success" text raised />
            <Button label="Info" severity="info" text raised />
            <Button label="Warning" severity="warning" text raised />
            <Button label="Help" severity="help" text raised />
            <Button label="Danger" severity="danger" text raised />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Text buttons can be displayed as raised for elevation."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(n.Button,{label:"Primary",text:!0,raised:!0}),(0,t.jsx)(n.Button,{label:"Secondary",severity:"secondary",text:!0,raised:!0}),(0,t.jsx)(n.Button,{label:"Success",severity:"success",text:!0,raised:!0}),(0,t.jsx)(n.Button,{label:"Info",severity:"info",text:!0,raised:!0}),(0,t.jsx)(n.Button,{label:"Warning",severity:"warning",text:!0,raised:!0}),(0,t.jsx)(n.Button,{label:"Help",severity:"help",text:!0,raised:!0}),(0,t.jsx)(n.Button,{label:"Danger",severity:"danger",text:!0,raised:!0}),(0,t.jsx)(n.Button,{label:"Plain",plain:!0,text:!0,raised:!0})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function N(e){let o={basic:`
<Button label="Primary" rounded />
<Button label="Secondary" severity="secondary" rounded />
<Button label="Success" severity="success" rounded />
<Button label="Info" severity="info" rounded />
<Button label="Warning" severity="warning" rounded />
<Button label="Help" severity="help" rounded />
<Button label="Danger" severity="danger" rounded />
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function RoundedDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" rounded />
            <Button label="Secondary" severity="secondary" rounded />
            <Button label="Success" severity="success" rounded />
            <Button label="Info" severity="info" rounded />
            <Button label="Warning" severity="warning" rounded />
            <Button label="Help" severity="help" rounded />
            <Button label="Danger" severity="danger" rounded />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function RoundedDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" rounded />
            <Button label="Secondary" severity="secondary" rounded />
            <Button label="Success" severity="success" rounded />
            <Button label="Info" severity="info" rounded />
            <Button label="Warning" severity="warning" rounded />
            <Button label="Help" severity="help" rounded />
            <Button label="Danger" severity="danger" rounded />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Rounded buttons have a circular border radius."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(n.Button,{label:"Primary",rounded:!0}),(0,t.jsx)(n.Button,{label:"Secondary",severity:"secondary",rounded:!0}),(0,t.jsx)(n.Button,{label:"Success",severity:"success",rounded:!0}),(0,t.jsx)(n.Button,{label:"Info",severity:"info",rounded:!0}),(0,t.jsx)(n.Button,{label:"Warning",severity:"warning",rounded:!0}),(0,t.jsx)(n.Button,{label:"Help",severity:"help",rounded:!0}),(0,t.jsx)(n.Button,{label:"Danger",severity:"danger",rounded:!0})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function D(e){let o={basic:`
<Button label="Primary" />
<Button label="Secondary" severity="secondary" />
<Button label="Success" severity="success" />
<Button label="Info" severity="info" />
<Button label="Warning" severity="warning" />
<Button label="Help" severity="help" />
<Button label="Danger" severity="danger" />
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" />
            <Button label="Secondary" severity="secondary" />
            <Button label="Success" severity="success" />
            <Button label="Info" severity="info" />
            <Button label="Warning" severity="warning" />
            <Button label="Help" severity="help" />
            <Button label="Danger" severity="danger" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" />
            <Button label="Secondary" severity="secondary" />
            <Button label="Success" severity="success" />
            <Button label="Info" severity="info" />
            <Button label="Warning" severity="warning" />
            <Button label="Help" severity="help" />
            <Button label="Danger" severity="danger" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Severity defines the type of button."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(n.Button,{label:"Primary"}),(0,t.jsx)(n.Button,{label:"Secondary",severity:"secondary"}),(0,t.jsx)(n.Button,{label:"Success",severity:"success"}),(0,t.jsx)(n.Button,{label:"Info",severity:"info"}),(0,t.jsx)(n.Button,{label:"Warning",severity:"warning"}),(0,t.jsx)(n.Button,{label:"Help",severity:"help"}),(0,t.jsx)(n.Button,{label:"Danger",severity:"danger"})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function C(e){let o={basic:`
<Button label="Small" icon="pi pi-check" size="small" />
<Button label="Normal" icon="pi pi-check" />
<Button label="Large" icon="pi pi-check" size="large" />
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function SizesDemo() {
    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
            <Button label="Small" icon="pi pi-check" size="small" />
            <Button label="Normal" icon="pi pi-check" />
            <Button label="Large" icon="pi pi-check" size="large" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function SizesDemo() {
    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
            <Button label="Small" icon="pi pi-check" size="small" />
            <Button label="Normal" icon="pi pi-check" />
            <Button label="Large" icon="pi pi-check" size="large" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Button provides ",(0,t.jsx)("i",{children:"small"})," and ",(0,t.jsx)("i",{children:"large"})," sizes as alternatives to the standard."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap align-items-center justify-content-center gap-3",children:[(0,t.jsx)(n.Button,{label:"Small",icon:"pi pi-check",size:"small"}),(0,t.jsx)(n.Button,{label:"Normal",icon:"pi pi-check"}),(0,t.jsx)(n.Button,{label:"Large",icon:"pi pi-check",size:"large"})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function F(e){let o={basic:`
<Button className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
    <img alt="logo" src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg" className="h-2rem"></img>
</Button>
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg" className="h-2rem"></img>
            </Button>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg" className="h-2rem"></img>
            </Button>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Custom content inside a button is defined as children."})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(n.Button,{className:"bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700",children:(0,t.jsx)("img",{alt:"logo",src:"https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg",className:"h-2rem"})})}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function T(e){let o={basic:`
<Button label="Primary" text />
<Button label="Secondary" severity="secondary" text />
<Button label="Success" severity="success" text />
<Button label="Info" severity="info" text />
<Button label="Warning" severity="warning" text />
<Button label="Help" severity="help" text />
<Button label="Danger" severity="danger" text />
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function TextDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" text />
            <Button label="Secondary" severity="secondary" text />
            <Button label="Success" severity="success" text />
            <Button label="Info" severity="info" text />
            <Button label="Warning" severity="warning" text />
            <Button label="Help" severity="help" text />
            <Button label="Danger" severity="danger" text />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';

export default function TextDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" text />
            <Button label="Secondary" severity="secondary" text />
            <Button label="Success" severity="success" text />
            <Button label="Info" severity="info" text />
            <Button label="Warning" severity="warning" text />
            <Button label="Help" severity="help" text />
            <Button label="Danger" severity="danger" text />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Text buttons are displayed as textual elements."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(n.Button,{label:"Primary",text:!0}),(0,t.jsx)(n.Button,{label:"Secondary",severity:"secondary",text:!0}),(0,t.jsx)(n.Button,{label:"Success",severity:"success",text:!0}),(0,t.jsx)(n.Button,{label:"Info",severity:"info",text:!0}),(0,t.jsx)(n.Button,{label:"Warning",severity:"warning",text:!0}),(0,t.jsx)(n.Button,{label:"Help",severity:"help",text:!0}),(0,t.jsx)(n.Button,{label:"Danger",severity:"danger",text:!0}),(0,t.jsx)(n.Button,{label:"Plain",plain:!0,text:!0})]}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function P(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-button"}),(0,t.jsx)("td",{children:"Button element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-button-icon"}),(0,t.jsx)("td",{children:"Icon element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-button-text"}),(0,t.jsx)("td",{children:"Label element of the button"})]})]})]})})]})}var R=e.i(41158);function I(e){let o={basic:`
const Tailwind = {
    button: {
        root: ({ props, context }) => ({
            className: classNames(
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom',
                'transition duration-200 ease-in-out',
                'focus:outline-none focus:outline-offset-0',
                {
                    'text-white dark:text-gray-900 bg-blue-500 dark:bg-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:border-blue-600 dark:hover:border-blue-500 focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                    'text-blue-600 bg-transparent border-transparent focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.link
                },
                {
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(176,185,198,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(203,213,225,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'secondary',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(136,234,172,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(134,239,172,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'success',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'info',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(250,207,133,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(252,211,77,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'warning',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(212,170,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(216,180,254,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'help',
                    'focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(247,162,162,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(252,165,165,0.7),0_1px_2px_0_rgba(0,0,0,0)]':
                        props.severity === 'danger'
                },
                {
                    'text-white dark:text-gray-900 bg-gray-500 dark:bg-gray-400 border border-gray-500 dark:border-gray-400 hover:bg-gray-600 dark:hover:bg-gray-500 hover:border-gray-600 dark:hover:border-gray-500':
                        props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 bg-green-500 dark:bg-green-400 border border-green-500 dark:border-green-400 hover:bg-green-600 dark:hover:bg-green-500 hover:border-green-600 dark:hover:border-green-500':
                        props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 dark:bg-blue-400 bg-blue-500 dark:bg-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500':
                        props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 bg-orange-500 dark:bg-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-600 dark:hover:bg-orange-500 hover:border-orange-600 dark:hover:border-orange-500':
                        props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 bg-purple-500 dark:bg-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 hover:border-purple-600 dark:hover:border-purple-500':
                        props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                    'text-white dark:text-gray-900 bg-red-500 dark:bg-red-400 border border-red-500 dark:border-red-400 hover:bg-red-600 dark:hover:bg-red-500 hover:border-red-600 dark:hover:border-red-500':
                        props.severity === 'danger' && !props.text && !props.outlined && !props.plain
                },
                { 'shadow-lg': props.raised },
                { 'rounded-md': !props.rounded, 'rounded-full': props.rounded },
                {
                    'bg-transparent border-transparent': props.text && !props.plain,
                    'text-blue-500 dark:text-blue-400 hover:bg-blue-300/20': props.text && (props.severity === null || props.severity === 'info') && !props.plain,
                    'text-gray-500 dark:text-gray-400 hover:bg-gray-300/20': props.text && props.severity === 'secondary' && !props.plain,
                    'text-green-500 dark:text-green-400 hover:bg-green-300/20': props.text && props.severity === 'success' && !props.plain,
                    'text-orange-500 dark:text-orange-400 hover:bg-orange-300/20': props.text && props.severity === 'warning' && !props.plain,
                    'text-purple-500 dark:text-purple-400 hover:bg-purple-300/20': props.text && props.severity === 'help' && !props.plain,
                    'text-red-500 dark:text-red-400 hover:bg-red-300/20': props.text && props.severity === 'danger' && !props.plain
                },
                { 'shadow-lg': props.raised && props.text },
                {
                    'text-gray-500 hover:bg-gray-300/20': props.plain && props.text,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.plain && props.outlined,
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.plain && !props.outlined && !props.text
                },
                {
                    'bg-transparent border': props.outlined && !props.plain,
                    'text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 hover:bg-blue-300/20': props.outlined && (props.severity === null || props.severity === 'info') && !props.plain,
                    'text-gray-500 dark:text-gray-400 border border-gray-500 dark:border-gray-400 hover:bg-gray-300/20': props.outlined && props.severity === 'secondary' && !props.plain,
                    'text-green-500 dark:text-green-400 border border-green-500 dark:border-green-400 hover:bg-green-300/20': props.outlined && props.severity === 'success' && !props.plain,
                    'text-orange-500 dark:text-orange-400 border border-orange-500 dark:border-orange-400 hover:bg-orange-300/20': props.outlined && props.severity === 'warning' && !props.plain,
                    'text-purple-500 dark:text-purple-400 border border-purple-500 dark:border-purple-400 hover:bg-purple-300/20': props.outlined && props.severity === 'help' && !props.plain,
                    'text-red-500 dark:text-red-400 border border-red-500 dark:border-red-400 hover:bg-red-300/20': props.outlined && props.severity === 'danger' && !props.plain
                },
                { 'px-4 py-3 text-base': props.size === null, 'text-xs py-2 px-3': props.size === 'small', 'text-xl py-3 px-4': props.size === 'large' },
                { 'flex-column': props.iconPos == 'top' || props.iconPos == 'bottom' },
                { 'opacity-60 pointer-events-none cursor-default': context.disabled }
            )
        }),
        label: ({ props }) => ({
            className: classNames(
                'flex-1',
                'duration-200',
                'font-bold',
                {
                    'hover:underline': props.link
                },
                { 'invisible w-0': props.label == null }
            )
        }),
        icon: ({ props }) => ({
            className: classNames('mx-0', {
                'mr-2': props.iconPos == 'left' && props.label != null,
                'ml-2 order-1': props.iconPos == 'right' && props.label != null,
                'mb-2': props.iconPos == 'top' && props.label != null,
                'mt-2 order-2': props.iconPos == 'bottom' && props.label != null
            })
        }),
        loadingIcon: ({ props }) => ({
            className: classNames('mx-0', {
                'mr-2': props.loading && props.iconPos == 'left' && props.label != null,
                'ml-2 order-1': props.loading && props.iconPos == 'right' && props.label != null,
                'mb-2': props.loading && props.iconPos == 'top' && props.label != null,
                'mt-2 order-2': props.loading && props.iconPos == 'bottom' && props.label != null
            })
        }),
        badge: ({ props }) => ({
            className: classNames({ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge })
        })
    }
}
        `},n={javascript:`
import React from 'react';
import { Button } from 'primereact/button';

export default function UnstyledDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-3">
            <Button label="Primary" />
            <Button label="Secondary" severity="secondary" />
            <Button label="Success" severity="success" />
            <Button label="Info" severity="info" />
            <Button label="Warning" severity="warning" />
            <Button label="Help" severity="help" />
            <Button label="Danger" severity="danger" />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(R.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(r.DocSectionCode,{code:o,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(r.DocSectionCode,{code:n,embedded:!0})]})})}var W=e.i(88850),H=e.i(82948);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:_},{id:"pt.button.options",label:"Button PT Options",component:W.default}];return(0,t.jsx)(H.DocComponent,{title:"React Button Component",header:"Button",description:"Button is an extension to standard input element with icons and theming.",componentDocs:[{id:"import",label:"Import",component:h},{id:"basic",label:"Basic",component:l},{id:"link",label:"Link",component:B},{id:"icons",label:"Icons",component:f},{id:"loading",label:"Loading",component:j},{id:"severity",label:"Severity",component:D},{id:"disabled",label:"Disabled",component:g},{id:"raised",label:"Raised",component:w},{id:"rounded",label:"Rounded",component:N},{id:"text",label:"Text",component:T},{id:"raisedtext",label:"Raised Text",component:S},{id:"outlined",label:"Outlined",component:k},{id:"icononly",label:"Icon Only",component:v},{id:"badges",label:"Badges",component:a},{id:"buttongroup",label:"Button Group",component:y},{id:"sizes",label:"Sizes",component:C},{id:"template",label:"Template",component:F},{id:"accessibility",label:"Accessibility",component:o}],apiDocs:["Button"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:P},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:I}]}]})}],58055)},30724,(e,t,r)=>{let i="/button";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(58055)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);