(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,39682,e=>{"use strict";var t=e.i(91398),i=e.i(91788),r=e.i(10836),n=e.i(15498),a=e.i(60150),o=e.i(75366),s=e.i(3935);let c=`
@layer primereact {
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-tag-icon,
    .p-tag-value,
    .p-tag-icon.pi {
        line-height: 1.5;
    }
    
    .p-tag.p-tag-rounded {
        border-radius: 10rem;
    }
}
`,d=n.ComponentBase.extend({defaultProps:{__TYPE:"Tag",value:null,severity:null,rounded:!1,icon:null,style:null,className:null,children:void 0},css:{classes:{value:"p-tag-value",icon:"p-tag-icon",root:({props:e})=>(0,s.classNames)("p-tag p-component",{[`p-tag-${e.severity}`]:null!==e.severity,"p-tag-rounded":e.rounded})},styles:c}}),l=i.forwardRef((e,c)=>{let l=(0,a.useMergeProps)(),u=i.useContext(r.PrimeReactContext),m=d.getProps(e,u),{ptm:p,cx:g,isUnstyled:h}=d.setMetaData({props:m});(0,n.useHandleStyle)(d.css.styles,h,{name:"tag"});let x=i.useRef(null),f=l({className:g("icon")},p("icon")),y=o.IconUtils.getJSXIcon(m.icon,{...f},{props:m});i.useImperativeHandle(c,()=>({props:m,getElement:()=>x.current}));let b=l({ref:x,className:(0,s.classNames)(m.className,g("root")),style:m.style},d.getOtherProps(m),p("root")),v=l({className:g("value")},p("value"));return(0,t.jsxs)("span",{...b,children:[y,(0,t.jsx)("span",{...v,children:m.value}),(0,t.jsx)("span",{children:m.children})]})});l.displayName="Tag",e.s(["Tag",0,l],39682)},61364,e=>{"use strict";var t=e.i(91398),i=e.i(88850),r=e.i(82948),n=e.i(28137);function a(){return(0,t.jsxs)(n.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["ContextMenu component uses the ",(0,t.jsx)("i",{children:"menubar"})," role with ",(0,t.jsx)("i",{children:"aria-orientation"}),' set to "vertical" and the value to describe the menu can either be provided with ',(0,t.jsx)("i",{children:"aria-labelledby"})," or ",(0,t.jsx)("i",{children:"aria-label"})," props. Each list item has a"," ",(0,t.jsx)("i",{children:"presentation"})," role whereas anchor elements have a ",(0,t.jsx)("i",{children:"menuitem"})," role with ",(0,t.jsx)("i",{children:"aria-label"})," referring to the label of the item and ",(0,t.jsx)("i",{children:"aria-disabled"})," defined if the item is disabled. A submenu within a ContextMenu uses the"," ",(0,t.jsx)("i",{children:"menu"})," role with an ",(0,t.jsx)("i",{children:"aria-labelledby"})," defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have ",(0,t.jsx)("i",{children:"aria-haspopup"}),", ",(0,t.jsx)("i",{children:"aria-expanded"})," and ",(0,t.jsx)("i",{children:"aria-controls"})," to define the relation between the item and the submenu."]}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"When focus is in the menu, closes the context menu and moves focus to the next focusable element in the page sequence."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the context menu."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"If focus is not inside the menu and menu is open, add focus to the first item. If an item is already focused, moves focus to the next menuitem within the submenu."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"If focus is not inside the menu and menu is open, add focus to the last item. If an item is already focused, moves focus to the next menuitem within the submenu."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"right arrow"})}),(0,t.jsx)("td",{children:"Opens a submenu if there is one available and moves focus to the first item."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"Closes a submenu and moves focus to the root item of the closed submenu."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Moves focus to the first menuitem within the submenu."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Moves focus to the last menuitem within the submenu."})]})]})]})})]})}var o=e.i(5180),s=e.i(10492),c=e.i(91788);function d(e){let i=(0,c.useRef)(null),r={basic:`
<ContextMenu model={items} ref={cm} breakpoint="767px" />
<img src="/images/nature/nature3.jpg" alt="Logo" className="max-w-full" onContextMenu={(e) => cm.current.show(e)} />
`,javascript:`
import React, { useRef } from 'react';
import { ContextMenu } from 'primereact/contextmenu';

export default function BasicDemo() {
    const cm = useRef(null);
    const items = [
        { label: 'Copy', icon: 'pi pi-copy' },
        { label: 'Rename', icon: 'pi pi-file-edit' }
    ];

    return (
        <div className="card flex md:justify-content-center">
            <ContextMenu model={items} ref={cm} breakpoint="767px" />
            <img src="https://primefaces.org/cdn/primereact/images/nature/nature3.jpg" alt="Logo" className="max-w-full" onContextMenu={(e) => cm.current.show(e)} />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { ContextMenu } from 'primereact/contextmenu';
import { MenuItem } from 'primereact/menuitem';

export default function BasicDemo() {
    const cm = useRef<ContextMenu>(null);
    const items: MenuItem[] = [
        { label: 'Copy', icon: 'pi pi-copy' },
        { label: 'Rename', icon: 'pi pi-file-edit' }
    ];

    return (
        <div className="card flex md:justify-content-center">
            <ContextMenu model={items} ref={cm} breakpoint="767px" />
            <img src="https://primefaces.org/cdn/primereact/images/nature/nature3.jpg" alt="Logo" className="max-w-full" onContextMenu={(e) => cm.current?.show(e)} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["ContextMenu requires a collection of menuitems as its ",(0,t.jsx)("i",{children:"model"})," and the ",(0,t.jsx)("i",{children:"show"})," method needs to be called explicity using the ",(0,t.jsx)("i",{children:"onContextMenu"})," event of the target to display the menu."]})}),(0,t.jsxs)("div",{className:"card flex md:justify-content-center",children:[(0,t.jsx)(s.ContextMenu,{model:[{label:"Copy",icon:"pi pi-copy"},{label:"Rename",icon:"pi pi-file-edit"}],ref:i,breakpoint:"767px"}),(0,t.jsx)("img",{src:"https://primefaces.org/cdn/primereact/images/nature/nature3.jpg",alt:"Logo",className:"max-w-full",onContextMenu:e=>i.current.show(e)})]}),(0,t.jsx)(o.DocSectionCode,{code:r})]})}var l=e.i(29363),u=e.i(39682);function m(e){let i=(0,c.useRef)(null),r=(0,c.useRef)(),[a,d]=(0,c.useState)(),[m,p]=(0,c.useState)([{id:0,name:"Amy Elsner",image:"amyelsner.png",role:"Admin"},{id:1,name:"Anna Fali",image:"annafali.png",role:"Member"},{id:2,name:"Asiya Javayant",image:"asiyajavayant.png",role:"Member"},{id:3,name:"Bernardo Dominic",image:"bernardodominic.png",role:"Guest"},{id:4,name:"Elwin Sharvill",image:"elwinsharvill.png",role:"Member"}]),g=(e,t)=>{let i=[...m],r=i.findIndex(t=>t.id===e.id);i[r].role=t,p(i)},h=[{label:"Roles",icon:"pi pi-users",items:[{label:"Admin",command:()=>{g(a,"Admin")}},{label:"Member",command:()=>{g(a,"Member")}},{label:"Guest",command:()=>{g(a,"Guest")}}]},{label:"Invite",icon:"pi pi-user-plus",command:()=>{r.current.show({severity:"success",summary:"Success",detail:"Invitation sent!",life:3e3})}}],x={basic:`
<ul className="m-0 p-0 list-none border-1 surface-border border-round p-3 flex flex-column gap-2 w-full md:w-30rem">
    {users.map((user) => (
        <li
            key={user.id}
            className={\`p-2 hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200 flex align-items-center justify-content-between \${selectedUser?.id === user.id && 'border-primary'}\`}
            onContextMenu={(event) => onRightClick(event, user)}
        >
            <div className="flex align-items-center gap-2">
                <img alt="user.name" src={\`https://primefaces.org/cdn/primereact/images/avatar/\${user.image}\`} style={{ width: '32px' }} />
                <span className="font-bold">{user.name}</span>
            </div>
            <Tag value={user.role} severity={getBadge(user)} />
        </li>
    ))}
</ul>
<ContextMenu ref={cm} model={items} onHide={() => setSelectedUser(undefined)} />
<Toast ref={toast} />
`,javascript:`
import { ContextMenu } from 'primereact/contextmenu';
import { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Tag } from 'primereact/tag';

export default function CommandDemo() {
    const cm = useRef(null);
    const toast = useRef();
    const [selectedUser, setSelectedUser] = useState();
    const [users, setUsers] = useState([
        { id: 0, name: 'Amy Elsner', image: 'amyelsner.png', role: 'Admin' },
        { id: 1, name: 'Anna Fali', image: 'annafali.png', role: 'Member' },
        { id: 2, name: 'Asiya Javayant', image: 'asiyajavayant.png', role: 'Member' },
        { id: 3, name: 'Bernardo Dominic', image: 'bernardodominic.png', role: 'Guest' },
        { id: 4, name: 'Elwin Sharvill', image: 'elwinsharvill.png', role: 'Member' }
    ]);

    const changeUserRole = (user, role) => {
        const usersClone = [...users];
        const userIndex = usersClone.findIndex((u) => u.id === user.id);

        usersClone[userIndex].role = role;
        setUsers(usersClone);
    };

    const items = [
        {
            label: 'Roles',
            icon: 'pi pi-users',
            items: [
                {
                    label: 'Admin',
                    command: () => {
                        changeUserRole(selectedUser, 'Admin');
                    }
                },
                {
                    label: 'Member',
                    command: () => {
                        changeUserRole(selectedUser, 'Member');
                    }
                },
                {
                    label: 'Guest',
                    command: () => {
                        changeUserRole(selectedUser, 'Guest');
                    }
                }
            ]
        },
        {
            label: 'Invite',
            icon: 'pi pi-user-plus',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'Invitation sent!', life: 3000 });
            }
        }
    ];

    const onRightClick = (event, user) => {
        if (cm.current) {
            setSelectedUser(user);
            cm.current.show(event);
        }
    };

    const getBadge = (user) => {
        if (user.role === 'Member') return 'info';
        else if (user.role === 'Guest') return 'warning';
        else return null;
    };

    return (
        <div className="card flex md:justify-content-center">
            <ul className="m-0 p-0 list-none border-1 surface-border border-round p-3 flex flex-column gap-2 w-full md:w-30rem">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className={\`p-2 hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200 flex align-items-center justify-content-between \${selectedUser?.id === user.id && 'border-primary'}\`}
                        onContextMenu={(event) => onRightClick(event, user)}
                    >
                        <div className="flex align-items-center gap-2">
                            <img alt="user.name" src={\`https://primefaces.org/cdn/primereact/images/avatar/\${user.image}\`} style={{ width: '32px' }} />
                            <span className="font-bold">{user.name}</span>
                        </div>
                        <Tag value={user.role} severity={getBadge(user)} />
                    </li>
                ))}
            </ul>
            <ContextMenu ref={cm} model={items} onHide={() => setSelectedUser(undefined)} />
            <Toast ref={toast} />
        </div>
    )
}
        `,typescript:`
import { ContextMenu } from 'primereact/contextmenu';
import { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Tag } from 'primereact/tag';

export default function CommandDemo() {
    const cm = useRef<ContextMenuRef | null>(null);
    const toast = useRef<ToastRef | null>(null);
    const [selectedUser, setSelectedUser] = useState<User | undefined>();
    const [users, setUsers] = useState<User[]>([
        { id: 0, name: 'Amy Elsner', image: 'amyelsner.png', role: 'Admin' },
        { id: 1, name: 'Anna Fali', image: 'annafali.png', role: 'Member' },
        { id: 2, name: 'Asiya Javayant', image: 'asiyajavayant.png', role: 'Member' },
        { id: 3, name: 'Bernardo Dominic', image: 'bernardodominic.png', role: 'Guest' },
        { id: 4, name: 'Elwin Sharvill', image: 'elwinsharvill.png', role: 'Member' }
    ]);

    const changeUserRole = (user: User, role: string) => {
        const usersClone = [...users];
        const userIndex = usersClone.findIndex((u) => u.id === user.id);

        usersClone[userIndex].role = role;
        setUsers(usersClone);
    };

    const items = [
        {
            label: 'Roles',
            icon: 'pi pi-users',
            items: [
                {
                    label: 'Admin',
                    command: () => {
                        if (selectedUser) {
                            changeUserRole(selectedUser, 'Admin');
                        }
                    }
                },
                {
                    label: 'Member',
                    command: () => {
                        if (selectedUser) {
                            changeUserRole(selectedUser, 'Member');
                        }
                    }
                },
                {
                    label: 'Guest',
                    command: () => {
                        if (selectedUser) {
                            changeUserRole(selectedUser, 'Guest');
                        }
                    }
                }
            ]
        },
        {
            label: 'Invite',
            icon: 'pi pi-user-plus',
            command: () => {
                toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Invitation sent!', life: 3000 });
            }
        }
    ];

    const onRightClick = (event: MouseEvent, user: User) => {
        if (cm.current) {
            setSelectedUser(user);
            cm.current.show(event);
        }
    };

    const getBadge = (user: User) => {
        if (user.role === 'Member') return 'info';
        else if (user.role === 'Guest') return 'warning';
        else return null;
    };

    return (
        <div className="card flex md:justify-content-center">
            <ul className="m-0 p-0 list-none border-1 surface-border border-round p-3 flex flex-column gap-2 w-full md:w-30rem">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className={\`p-2 hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200 flex align-items-center justify-content-between \${selectedUser?.id === user.id && 'border-primary'}\`}
                        onContextMenu={(event) => onRightClick(event, user)}
                    >
                        <div className="flex align-items-center gap-2">
                            <img alt={user.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${user.image}\`} style={{ width: '32px' }} />
                            <span className="font-bold">{user.name}</span>
                        </div>
                        <Tag value={user.role} severity={getBadge(user)} />
                    </li>
                ))}
            </ul>
            <ContextMenu ref={cm} model={items} onHide={() => setSelectedUser(undefined)} />
            <Toast ref={toast} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("i",{children:"command"})," property defines the callback to run when an item is activated by click or a key event."," "]})}),(0,t.jsxs)("div",{className:"card flex md:justify-content-center",children:[(0,t.jsx)("ul",{className:"m-0 p-0 list-none border-1 surface-border border-round p-3 flex flex-column gap-2 w-full md:w-30rem",children:m.map(e=>(0,t.jsxs)("li",{className:`p-2 hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200 flex align-items-center justify-content-between ${a?.id===e.id&&"border-primary"}`,onContextMenu:t=>{i.current&&(d(e),i.current.show(t))},children:[(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:"user.name",src:`https://primefaces.org/cdn/primereact/images/avatar/${e.image}`,style:{width:"32px"}}),(0,t.jsx)("span",{className:"font-bold",children:e.name})]}),(0,t.jsx)(u.Tag,{value:e.role,severity:"Member"===e.role?"info":"Guest"===e.role?"warning":null})]},e.id))}),(0,t.jsx)(s.ContextMenu,{ref:i,model:h,onHide:()=>d(void 0)}),(0,t.jsx)(l.Toast,{ref:r})]}),(0,t.jsx)(o.DocSectionCode,{code:x})]})}var p=e.i(41158);function g(e){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["DataTable has built-in support for ContextMenu, see the ",(0,t.jsx)(p.default,{href:"/datatable/#contextmenu",children:"Context Menu"})," demo for an example."]})})})}function h(e){let i={basic:`
<ContextMenu global model={items} breakpoint="767px" />
`,javascript:`
import React from 'react';
import { ContextMenu } from 'primereact/contextmenu';

export default function DocumentDemo() {
    const items = [
        {
            label: 'Translate',
            icon: 'pi pi-language'
        },
        {
            label: 'Speech',
            icon: 'pi pi-volume-up',
            items: [
                {
                    label: 'Start',
                    icon: 'pi pi-caret-right'
                },
                {
                    label: 'Stop',
                    icon: 'pi pi-pause'
                }
            ]
        },
        {
            separator: true
        },
        {
            label: 'Print',
            icon: 'pi pi-print'
        }
    ];

    return (
        <div className="card text-center">
            <p className="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
            <ContextMenu global model={items} breakpoint="767px" />
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { ContextMenu } from 'primereact/contextmenu';
import { MenuItem } from 'primereact/menuitem';

export default function DocumentDemo() {
    const items: MenuItem[] = [
        {
            label: 'Translate',
            icon: 'pi pi-language'
        },
        {
            label: 'Speech',
            icon: 'pi pi-volume-up',
            items: [
                {
                    label: 'Start',
                    icon: 'pi pi-caret-right'
                },
                {
                    label: 'Stop',
                    icon: 'pi pi-pause'
                }
            ]
        },
        {
            separator: true
        },
        {
            label: 'Print',
            icon: 'pi pi-print'
        }
    ];

    return (
        <div className="card text-center">
            <p className="mb-0">Right-Click anywhere on this page to view the global ContextMenu.</p>
            <ContextMenu global model={items} breakpoint="767px" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Setting global property attaches the context menu to the document."})}),(0,t.jsxs)("div",{className:"card text-center",children:[(0,t.jsx)("p",{className:"mb-0",children:"Right-Click anywhere on this page to view the global ContextMenu."}),(0,t.jsx)(s.ContextMenu,{global:!0,model:[{label:"Translate",icon:"pi pi-language"},{label:"Speech",icon:"pi pi-volume-up",items:[{label:"Start",icon:"pi pi-caret-right"},{label:"Stop",icon:"pi pi-pause"}]},{separator:!0},{label:"Print",icon:"pi pi-print"}],breakpoint:"767px"})]}),(0,t.jsx)(o.DocSectionCode,{code:i})]})}function x(e){let i={basic:`
import { ContextMenu } from 'primereact/contextmenu';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}let f=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"contextmenu"})})]});var y=e.i(3828);function b(e){let i=(0,c.useRef)(null),r=(0,y.useRouter)(),a=[{label:"Router Link",icon:"pi pi-palette",url:"/unstyled"},{label:"Programmatic",icon:"pi pi-link",command:()=>{r.push("/installation")}},{label:"External",icon:"pi pi-home",url:"https://react.dev/"}],d={basic:`
<span className="inline-flex align-items-center justify-content-center border-2 border-primary border-round w-4rem h-4rem" onContextMenu={(event) => onRightClick(event)} aria-haspopup="true">
    <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40"></img>
</span>
<ContextMenu model={items} ref={cm} />`,javascript:`
import { ContextMenu } from 'primereact/contextmenu';
import { useRef } from 'react';
import { useRouter } from 'next/router'

export function RouterDemo(props) {
    const cm = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Router Link',
            icon: 'pi pi-palette',
            url: '/unstyled'
        },
        {
            label: 'Programmatic',
            icon: 'pi pi-link',
            command: () => {
                router.push('/installation');
            }
        },
        {
            label: 'External',
            icon: 'pi pi-home',
            url: 'https://react.dev/'
        }
    ];

    const onRightClick = (event) => {
        cm.current.show(event);
    };

    return (
        <div className="card flex md:justify-content-center">
            <span className="inline-flex align-items-center justify-content-center border-2 border-primary border-round w-4rem h-4rem" onContextMenu={(event) => onRightClick(event)} aria-haspopup="true">
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40"></img>
            </span>
            <ContextMenu model={items} ref={cm} />
        </div>
    )
}
        `,typescript:`
import { ContextMenu } from 'primereact/contextmenu';
import { useRef, MouseEvent } from 'react';
import { useRouter } from 'next/router'
import { MenuItem } from 'primereact/menuitem';

export function RouterDemo(props: any) {
    const cm = useRef<ContextMenuRef | null>(null);
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Router Link',
            icon: 'pi pi-palette',
            url: '/unstyled'
        },
        {
            label: 'Programmatic',
            icon: 'pi pi-link',
            command: () => {
                router.push('/installation');
            }
        },
        {
            label: 'External',
            icon: 'pi pi-home',
            url: 'https://react.dev/'
        }
    ];

    const onRightClick = (event: MouseEvent) => {
        cm.current?.show(event);
    };

    return (
        <div className="card flex md:justify-content-center">
            <span className="inline-flex align-items-center justify-content-center border-2 border-primary border-round w-4rem h-4rem" onContextMenu={(event) => onRightClick(event)} aria-haspopup="true">
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40"></img>
            </span>
            <ContextMenu model={items} ref={cm} />
        </div>
    )
}`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Items with navigation are defined with ",(0,t.jsx)("i",{children:"command"})," and ",(0,t.jsx)("i",{children:"url"})," property to be able to use a router link component, an external link or programmatic navigation."]})}),(0,t.jsxs)("div",{className:"card flex md:justify-content-center",children:[(0,t.jsx)("span",{className:"inline-flex align-items-center justify-content-center border-2 border-primary border-round w-4rem h-4rem",onContextMenu:e=>{i.current.show(e)},"aria-haspopup":"true",children:(0,t.jsx)("img",{alt:"logo",src:"https://primefaces.org/cdn/primereact/images/logo.png",height:"40"})}),(0,t.jsx)(s.ContextMenu,{model:a,ref:i})]}),(0,t.jsx)(o.DocSectionCode,{code:d})]})}var v=e.i(66534),j=e.i(50989);function C(e){let[i,r]=(0,c.useState)([]),[a,d]=(0,c.useState)([]),l=(0,c.useRef)(null),u=e=>(0,t.jsxs)("a",{className:"flex align-items-center px-3 py-2 cursor-pointer",children:[(0,t.jsx)("span",{className:e.icon}),(0,t.jsx)("span",{className:"ml-2",children:e.label}),(0,t.jsx)(j.Badge,{className:"ml-auto",value:e.badge})]});(0,c.useEffect)(()=>{v.ProductService.getProductsSmall().then(e=>r(e.slice(0,5)))},[]);let m={basic:`
<div className="card flex md:justify-content-center">
    <ul className="m-0 p-0 list-none border-1 surface-border border-round p-3 flex flex-column gap-2 w-full md:w-30rem">
        {products.map((product) => (
            <li
                key={product.id}
                className={\`p-2 hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200 \${selectedId === product.id && 'border-primary'}\`}
                onContextMenu={(e) => onRightClick(e, product.id)}
            >
                <div className="flex flex-wrap p-2 align-items-center gap-3">
                    <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={\`/images/product/\${product.image}\`} alt="product.name" />
                    <div className="flex-1 flex flex-column gap-1">
                        <span className="font-bold">{product.name}</span>
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-tag text-sm"></i>
                            <span>{product.category}</span>
                        </div>
                    </div>
                    <span className="font-bold text-900 ml-5">{product.price}</span>
                </div>
            </li>
        ))}
    </ul>
    <ContextMenu model={items} ref={cm} breakpoint="767px" onHide={() => setSelectedId(undefined)} />
</div>
`,javascript:`
import { useState, useRef, useEffect } from 'react';
import { ProductService } from './service/ProductService';
import { ContextMenu } from 'primereact/contextmenu';

export default function TemplateDemo() {
    const [products, setProducts] = useState([]);
    const [selectedId, setSelectedId] = useState([]);
    const cm = useRef(null);
    const items = [
        {
            label: 'Favorite',
            icon: 'pi pi-star',
            shortcut: '⌘+D'
        },
        {
            label: 'Add',
            icon: 'pi pi-shopping-cart',
            shortcut: '⌘+A'
        },
        {
            separator: true
        },
        {
            label: 'Share',
            icon: 'pi pi-share-alt',
            items: [
                {
                    label: 'Whatsapp',
                    icon: 'pi pi-whatsapp',
                    badge: 2
                },
                {
                    label: 'Instagram',
                    icon: 'pi pi-instagram',
                    badge: 3
                }
            ]
        }
    ];

    const onRightClick = (event, id) => {
      if (cm.current) {
          setSelectedId(id);
          cm.current.show(event);
      }
    };

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 5)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <div className="card flex md:justify-content-center">
          <ul className="m-0 p-0 list-none border-1 surface-border border-round p-3 flex flex-column gap-2 w-full md:w-30rem">
              {products.map((product) => (
                  <li
                      key={product.id}
                      className={\`p-2 hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200 \${selectedId === product.id && 'border-primary'}\`}
                      onContextMenu={(e) => onRightClick(e, product.id)}
                  >
                      <div className="flex flex-wrap p-2 align-items-center gap-3">
                          <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={\`/images/product/\${product.image}\`} alt="product.name" />
                          <div className="flex-1 flex flex-column gap-1">
                              <span className="font-bold">{product.name}</span>
                              <div className="flex align-items-center gap-2">
                                  <i className="pi pi-tag text-sm"></i>
                                  <span>{product.category}</span>
                              </div>
                          </div>
                          <span className="font-bold text-900 ml-5">{product.price}</span>
                      </div>
                  </li>
              ))}
          </ul>
          <ContextMenu model={items} ref={cm} breakpoint="767px" onHide={() => setSelectedId(undefined)} />
      </div>
    )
}
        `,typescript:`
import React, { useState, useRef, useEffect } from 'react';
import { ProductService } from './service/ProductService';
import { MenuItem } from 'primereact/menuitem';

interface Product {
  id: string;
  image: string;
  name: string;
  category: string;
  price: number;
}

interface ContextMenuRef {
  show: (e: MouseEvent) => void;
}

export default function TemplateDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const cm = useRef<ContextMenu>(null);
    const items: MenuItem[] = [
        {
            label: 'Favorite',
            icon: 'pi pi-star',
            shortcut: '⌘+D'
        },
        {
            label: 'Add',
            icon: 'pi pi-shopping-cart',
            shortcut: '⌘+A'
        },
        {
            separator: true
        },
        {
            label: 'Share',
            icon: 'pi pi-share-alt',
            items: [
                {
                    label: 'Whatsapp',
                    icon: 'pi pi-whatsapp',
                    badge: 2
                },
                {
                    label: 'Instagram',
                    icon: 'pi pi-instagram',
                    badge: 3
                }
            ]
        }
    ];

    const onRightClick = (event: React.MouseEvent, id: string): void => {
      if (cm.current) {
        setSelectedId(id);
        cm.current.show(event);
      }
    };

    useEffect(() => {
      ProductService.getProductsSmall().then((data: Product[]) => setProducts(data.slice(0, 5)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <div className="card flex md:justify-content-center">
        <ul className="m-0 p-0 list-none border-1 surface-border border-round p-3 flex flex-column gap-2 w-full md:w-30rem">
          {products.map((product: Product) => (
            <li
              key={product.id}
              className={\`p-2 hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200 \${selectedId === product.id && 'border-primary'}\`}
              onContextMenu={(e) => onRightClick(e, product.id)}
            >
              <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={\`/images/product/\${product.image}\`} alt={product.name} />
                <div className="flex-1 flex flex-column gap-1">
                  <span className="font-bold">{product.name}</span>
                  <div className="flex align-items-center gap-2">
                    <i className="pi pi-tag text-sm"></i>
                    <span>{product.category}</span>
                  </div>
                </div>
                <span className="font-bold text-900 ml-5">{product.price}</span>
              </div>
            </li>
          ))}
        </ul>
        <ContextMenu model={items} ref={cm} breakpoint="767px" onHide={() => setSelectedId(undefined)} />
      </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["ContextMenu offers item customization with the items ",(0,t.jsx)("i",{children:"template"})," property that receives the item instance and returns an element."]})}),(0,t.jsxs)("div",{className:"card flex md:justify-content-center",children:[(0,t.jsx)("ul",{className:"m-0 p-0 list-none border-1 surface-border border-round p-3 flex flex-column gap-2 w-full md:w-30rem",children:i.map(e=>(0,t.jsx)("li",{className:`p-2 hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200 ${a===e.id&&"border-primary"}`,onContextMenu:t=>{var i;return i=e.id,void(l.current&&(d(i),l.current.show(t)))},children:(0,t.jsxs)("div",{className:"flex flex-wrap p-2 align-items-center gap-3",children:[(0,t.jsx)("img",{className:"w-4rem shadow-2 flex-shrink-0 border-round",src:`/images/product/${e.image}`,alt:"product.name"}),(0,t.jsxs)("div",{className:"flex-1 flex flex-column gap-1",children:[(0,t.jsx)("span",{className:"font-bold",children:e.name}),(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("i",{className:"pi pi-tag text-sm"}),(0,t.jsx)("span",{children:e.category})]})]}),(0,t.jsx)("span",{className:"font-bold text-900 ml-5",children:e.price})]})},e.id))}),(0,t.jsx)(s.ContextMenu,{model:[{label:"Favorite",icon:"pi pi-star",shortcut:"⌘+D"},{label:"Add",icon:"pi pi-shopping-cart",shortcut:"⌘+A"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Whatsapp",icon:"pi pi-whatsapp",badge:2,template:u},{label:"Instagram",icon:"pi pi-instagram",badge:3,template:u}]}],ref:l,breakpoint:"767px",onHide:()=>d(void 0)})]}),(0,t.jsx)(o.DocSectionCode,{code:m})]})}function S(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{id:"style",label:"Style",children:(0,t.jsxs)("p",{children:["Following is the list of structural style classes, for theming classes visit ",(0,t.jsx)(p.default,{href:"/theming",children:"theming"})," page."]})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-contextmenu"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menu-list"}),(0,t.jsx)("td",{children:"List element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menuitem"}),(0,t.jsx)("td",{children:"Menuitem element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menuitem-text"}),(0,t.jsx)("td",{children:"Label of a menuitem."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menuitem-icon"}),(0,t.jsx)("td",{children:"Icon of a menuitem."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-submenu-icon"}),(0,t.jsx)("td",{children:"Arrow icon of a submenu."})]})]})]})})]})}function D(e){let i={basic:`
const Tailwind = {
    contextmenu: {
        root: 'py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-none shadow-md rounded-lg w-52',
        menu: {
            className: classNames('m-0 p-0 list-none', 'outline-none')
        },
        menuitem: 'relative',
        content: ({ context }) => ({
            className: classNames(
                'transition-shadow duration-200 rounded-none',
                'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80', // Hover
                {
                    'text-gray-700': !context.focused && !context.active,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.active,
                    'bg-blue-500 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.active,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.active
                }
            )
        }),
        action: {
            className: classNames('cursor-pointer flex items-center no-underline overflow-hidden relative', 'text-gray-700 dark:text-white/80 py-3 px-5 select-none')
        },
        icon: 'text-gray-600 dark:text-white/70 mr-2',
        label: 'text-gray-600 dark:text-white/70',
        transition: {
            timeout: { enter: 250 },
            classNames: {
                enter: 'opacity-0',
                enterActive: '!opacity-100 transition-opacity duration-250'
            }
        }
    }
}
    `},r={javascript:`
import React, { useRef } from 'react';
import { ContextMenu } from 'primereact/contextmenu';

export default function UnstyledDemo() {
    const cm = useRef(null);
    const items = [
        { label: 'View', icon: 'pi pi-fw pi-search' },
        { label: 'Delete', icon: 'pi pi-fw pi-trash' }
    ];

    return (
        <div className="card flex md:justify-center">
            <ContextMenu model={items} ref={cm} breakpoint="767px" />
            <img src="https://primefaces.org/cdn/primereact/images/nature/nature3.jpg" alt="Logo" className="max-w-full" onContextMenu={(e) => cm.current.show(e)} />
        </div>
    )
}`};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(n.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(p.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(o.DocSectionCode,{code:r,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:f},{id:"pt.contextmenu.options",label:"ContextMenu PT Options",component:i.default}];return(0,t.jsx)(r.DocComponent,{title:"React ContextMenu Component",header:"ContextMenu",description:"ContextMenu displays an overlay menu on right click of its target.",componentDocs:[{id:"import",label:"Import",component:x},{id:"basic",label:"Basic",component:d},{id:"document",label:"Document",component:h},{id:"template",label:"Template",component:C},{id:"command",label:"Command",component:m},{id:"router",label:"Router",component:b},{id:"datatable",label:"DataTable",component:g},{id:"accessibility",label:"Accessibility",component:a}],apiDocs:["ContextMenu","MenuItem"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:S},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:D}]}]})}],61364)},49520,(e,t,i)=>{let r="/contextmenu";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(61364)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},66534,e=>{"use strict";e.s(["ProductService",0,{getProductsData:()=>[{id:"1000",code:"f230fh0g3",name:"Bamboo Watch",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Accessories",quantity:24,inventoryStatus:"INSTOCK",rating:5},{id:"1001",code:"nvklal433",name:"Black Watch",description:"Product Description",image:"black-watch.jpg",price:72,category:"Accessories",quantity:61,inventoryStatus:"INSTOCK",rating:4},{id:"1002",code:"zz21cz3c1",name:"Blue Band",description:"Product Description",image:"blue-band.jpg",price:79,category:"Fitness",quantity:2,inventoryStatus:"LOWSTOCK",rating:3},{id:"1003",code:"244wgerg2",name:"Blue T-Shirt",description:"Product Description",image:"blue-t-shirt.jpg",price:29,category:"Clothing",quantity:25,inventoryStatus:"INSTOCK",rating:5},{id:"1004",code:"h456wer53",name:"Bracelet",description:"Product Description",image:"bracelet.jpg",price:15,category:"Accessories",quantity:73,inventoryStatus:"INSTOCK",rating:4},{id:"1005",code:"av2231fwg",name:"Brown Purse",description:"Product Description",image:"brown-purse.jpg",price:120,category:"Accessories",quantity:0,inventoryStatus:"OUTOFSTOCK",rating:4},{id:"1006",code:"bib36pfvm",name:"Chakra Bracelet",description:"Product Description",image:"chakra-bracelet.jpg",price:32,category:"Accessories",quantity:5,inventoryStatus:"LOWSTOCK",rating:3},{id:"1007",code:"mbvjkgip5",name:"Galaxy Earrings",description:"Product Description",image:"galaxy-earrings.jpg",price:34,category:"Accessories",quantity:23,inventoryStatus:"INSTOCK",rating:5},{id:"1008",code:"vbb124btr",name:"Game Controller",description:"Product Description",image:"game-controller.jpg",price:99,category:"Electronics",quantity:2,inventoryStatus:"LOWSTOCK",rating:4},{id:"1009",code:"cm230f032",name:"Gaming Set",description:"Product Description",image:"gaming-set.jpg",price:299,category:"Electronics",quantity:63,inventoryStatus:"INSTOCK",rating:3},{id:"1010",code:"plb34234v",name:"Gold Phone Case",description:"Product Description",image:"gold-phone-case.jpg",price:24,category:"Accessories",quantity:0,inventoryStatus:"OUTOFSTOCK",rating:4},{id:"1011",code:"4920nnc2d",name:"Green Earbuds",description:"Product Description",image:"green-earbuds.jpg",price:89,category:"Electronics",quantity:23,inventoryStatus:"INSTOCK",rating:4},{id:"1012",code:"250vm23cc",name:"Green T-Shirt",description:"Product Description",image:"green-t-shirt.jpg",price:49,category:"Clothing",quantity:74,inventoryStatus:"INSTOCK",rating:5},{id:"1013",code:"fldsmn31b",name:"Grey T-Shirt",description:"Product Description",image:"grey-t-shirt.jpg",price:48,category:"Clothing",quantity:0,inventoryStatus:"OUTOFSTOCK",rating:3},{id:"1014",code:"waas1x2as",name:"Headphones",description:"Product Description",image:"headphones.jpg",price:175,category:"Electronics",quantity:8,inventoryStatus:"LOWSTOCK",rating:5},{id:"1015",code:"vb34btbg5",name:"Light Green T-Shirt",description:"Product Description",image:"light-green-t-shirt.jpg",price:49,category:"Clothing",quantity:34,inventoryStatus:"INSTOCK",rating:4},{id:"1016",code:"k8l6j58jl",name:"Lime Band",description:"Product Description",image:"lime-band.jpg",price:79,category:"Fitness",quantity:12,inventoryStatus:"INSTOCK",rating:3},{id:"1017",code:"v435nn85n",name:"Mini Speakers",description:"Product Description",image:"mini-speakers.jpg",price:85,category:"Clothing",quantity:42,inventoryStatus:"INSTOCK",rating:4},{id:"1018",code:"09zx9c0zc",name:"Painted Phone Case",description:"Product Description",image:"painted-phone-case.jpg",price:56,category:"Accessories",quantity:41,inventoryStatus:"INSTOCK",rating:5},{id:"1019",code:"mnb5mb2m5",name:"Pink Band",description:"Product Description",image:"pink-band.jpg",price:79,category:"Fitness",quantity:63,inventoryStatus:"INSTOCK",rating:4},{id:"1020",code:"r23fwf2w3",name:"Pink Purse",description:"Product Description",image:"pink-purse.jpg",price:110,category:"Accessories",quantity:0,inventoryStatus:"OUTOFSTOCK",rating:4},{id:"1021",code:"pxpzczo23",name:"Purple Band",description:"Product Description",image:"purple-band.jpg",price:79,category:"Fitness",quantity:6,inventoryStatus:"LOWSTOCK",rating:3},{id:"1022",code:"2c42cb5cb",name:"Purple Gemstone Necklace",description:"Product Description",image:"purple-gemstone-necklace.jpg",price:45,category:"Accessories",quantity:62,inventoryStatus:"INSTOCK",rating:4},{id:"1023",code:"5k43kkk23",name:"Purple T-Shirt",description:"Product Description",image:"purple-t-shirt.jpg",price:49,category:"Clothing",quantity:2,inventoryStatus:"LOWSTOCK",rating:5},{id:"1024",code:"lm2tny2k4",name:"Shoes",description:"Product Description",image:"shoes.jpg",price:64,category:"Clothing",quantity:0,inventoryStatus:"INSTOCK",rating:4},{id:"1025",code:"nbm5mv45n",name:"Sneakers",description:"Product Description",image:"sneakers.jpg",price:78,category:"Clothing",quantity:52,inventoryStatus:"INSTOCK",rating:4},{id:"1026",code:"zx23zc42c",name:"Teal T-Shirt",description:"Product Description",image:"teal-t-shirt.jpg",price:49,category:"Clothing",quantity:3,inventoryStatus:"LOWSTOCK",rating:3},{id:"1027",code:"acvx872gc",name:"Yellow Earbuds",description:"Product Description",image:"yellow-earbuds.jpg",price:89,category:"Electronics",quantity:35,inventoryStatus:"INSTOCK",rating:3},{id:"1028",code:"tx125ck42",name:"Yoga Mat",description:"Product Description",image:"yoga-mat.jpg",price:20,category:"Fitness",quantity:15,inventoryStatus:"INSTOCK",rating:5},{id:"1029",code:"gwuby345v",name:"Yoga Set",description:"Product Description",image:"yoga-set.jpg",price:20,category:"Fitness",quantity:25,inventoryStatus:"INSTOCK",rating:8}],getProductsWithOrdersData:()=>[{id:"1000",code:"f230fh0g3",name:"Bamboo Watch",description:"Product Description",image:"bamboo-watch.jpg",price:65,category:"Accessories",quantity:24,inventoryStatus:"INSTOCK",rating:5,orders:[{id:"1000-0",productCode:"f230fh0g3",date:"2020-09-13",amount:65,quantity:1,customer:"David James",status:"PENDING"},{id:"1000-1",productCode:"f230fh0g3",date:"2020-05-14",amount:130,quantity:2,customer:"Leon Rodrigues",status:"DELIVERED"},{id:"1000-2",productCode:"f230fh0g3",date:"2019-01-04",amount:65,quantity:1,customer:"Juan Alejandro",status:"RETURNED"},{id:"1000-3",productCode:"f230fh0g3",date:"2020-09-13",amount:195,quantity:3,customer:"Claire Morrow",status:"CANCELLED"}]},{id:"1001",code:"nvklal433",name:"Black Watch",description:"Product Description",image:"black-watch.jpg",price:72,category:"Accessories",quantity:61,inventoryStatus:"INSTOCK",rating:4,orders:[{id:"1001-0",productCode:"nvklal433",date:"2020-05-14",amount:72,quantity:1,customer:"Maisha Jefferson",status:"DELIVERED"},{id:"1001-1",productCode:"nvklal433",date:"2020-02-28",amount:144,quantity:2,customer:"Octavia Murillo",status:"PENDING"}]},{id:"1002",code:"zz21cz3c1",name:"Blue Band",description:"Product Description",image:"blue-band.jpg",price:79,category:"Fitness",quantity:2,inventoryStatus:"LOWSTOCK",rating:3,orders:[{id:"1002-0",productCode:"zz21cz3c1",date:"2020-07-05",amount:79,quantity:1,customer:"Stacey Leja",status:"DELIVERED"},{id:"1002-1",productCode:"zz21cz3c1",date:"2020-02-06",amount:79,quantity:1,customer:"Ashley Wickens",status:"DELIVERED"}]},{id:"1003",code:"244wgerg2",name:"Blue T-Shirt",description:"Product Description",image:"blue-t-shirt.jpg",price:29,category:"Clothing",quantity:25,inventoryStatus:"INSTOCK",rating:5,orders:[]},{id:"1004",code:"h456wer53",name:"Bracelet",description:"Product Description",image:"bracelet.jpg",price:15,category:"Accessories",quantity:73,inventoryStatus:"INSTOCK",rating:4,orders:[{id:"1004-0",productCode:"h456wer53",date:"2020-09-05",amount:60,quantity:4,customer:"Mayumi Misaki",status:"PENDING"},{id:"1004-1",productCode:"h456wer53",date:"2019-04-16",amount:2,quantity:30,customer:"Francesco Salvatore",status:"DELIVERED"}]},{id:"1005",code:"av2231fwg",name:"Brown Purse",description:"Product Description",image:"brown-purse.jpg",price:120,category:"Accessories",quantity:0,inventoryStatus:"OUTOFSTOCK",rating:4,orders:[{id:"1005-0",productCode:"av2231fwg",date:"2020-01-25",amount:120,quantity:1,customer:"Isabel Sinclair",status:"RETURNED"},{id:"1005-1",productCode:"av2231fwg",date:"2019-03-12",amount:240,quantity:2,customer:"Lionel Clifford",status:"DELIVERED"},{id:"1005-2",productCode:"av2231fwg",date:"2019-05-05",amount:120,quantity:1,customer:"Cody Chavez",status:"DELIVERED"}]},{id:"1006",code:"bib36pfvm",name:"Chakra Bracelet",description:"Product Description",image:"chakra-bracelet.jpg",price:32,category:"Accessories",quantity:5,inventoryStatus:"LOWSTOCK",rating:3,orders:[{id:"1006-0",productCode:"bib36pfvm",date:"2020-02-24",amount:32,quantity:1,customer:"Arvin Darci",status:"DELIVERED"},{id:"1006-1",productCode:"bib36pfvm",date:"2020-01-14",amount:64,quantity:2,customer:"Izzy Jones",status:"PENDING"}]},{id:"1007",code:"mbvjkgip5",name:"Galaxy Earrings",description:"Product Description",image:"galaxy-earrings.jpg",price:34,category:"Accessories",quantity:23,inventoryStatus:"INSTOCK",rating:5,orders:[{id:"1007-0",productCode:"mbvjkgip5",date:"2020-06-19",amount:34,quantity:1,customer:"Jennifer Smith",status:"DELIVERED"}]},{id:"1008",code:"vbb124btr",name:"Game Controller",description:"Product Description",image:"game-controller.jpg",price:99,category:"Electronics",quantity:2,inventoryStatus:"LOWSTOCK",rating:4,orders:[{id:"1008-0",productCode:"vbb124btr",date:"2020-01-05",amount:99,quantity:1,customer:"Jeanfrancois David",status:"DELIVERED"},{id:"1008-1",productCode:"vbb124btr",date:"2020-01-19",amount:198,quantity:2,customer:"Ivar Greenwood",status:"RETURNED"}]},{id:"1009",code:"cm230f032",name:"Gaming Set",description:"Product Description",image:"gaming-set.jpg",price:299,category:"Electronics",quantity:63,inventoryStatus:"INSTOCK",rating:3,orders:[{id:"1009-0",productCode:"cm230f032",date:"2020-06-24",amount:299,quantity:1,customer:"Kadeem Mujtaba",status:"PENDING"},{id:"1009-1",productCode:"cm230f032",date:"2020-05-11",amount:299,quantity:1,customer:"Ashley Wickens",status:"DELIVERED"},{id:"1009-2",productCode:"cm230f032",date:"2019-02-07",amount:299,quantity:1,customer:"Julie Johnson",status:"DELIVERED"},{id:"1009-3",productCode:"cm230f032",date:"2020-04-26",amount:299,quantity:1,customer:"Tony Costa",status:"CANCELLED"}]},{id:"1010",code:"plb34234v",name:"Gold Phone Case",description:"Product Description",image:"gold-phone-case.jpg",price:24,category:"Accessories",quantity:0,inventoryStatus:"OUTOFSTOCK",rating:4,orders:[{id:"1010-0",productCode:"plb34234v",date:"2020-02-04",amount:24,quantity:1,customer:"James Butt",status:"DELIVERED"},{id:"1010-1",productCode:"plb34234v",date:"2020-05-05",amount:48,quantity:2,customer:"Josephine Darakjy",status:"DELIVERED"}]},{id:"1011",code:"4920nnc2d",name:"Green Earbuds",description:"Product Description",image:"green-earbuds.jpg",price:89,category:"Electronics",quantity:23,inventoryStatus:"INSTOCK",rating:4,orders:[{id:"1011-0",productCode:"4920nnc2d",date:"2020-06-01",amount:89,quantity:1,customer:"Art Venere",status:"DELIVERED"}]},{id:"1012",code:"250vm23cc",name:"Green T-Shirt",description:"Product Description",image:"green-t-shirt.jpg",price:49,category:"Clothing",quantity:74,inventoryStatus:"INSTOCK",rating:5,orders:[{id:"1012-0",productCode:"250vm23cc",date:"2020-02-05",amount:49,quantity:1,customer:"Lenna Paprocki",status:"DELIVERED"},{id:"1012-1",productCode:"250vm23cc",date:"2020-02-15",amount:49,quantity:1,customer:"Donette Foller",status:"PENDING"}]},{id:"1013",code:"fldsmn31b",name:"Grey T-Shirt",description:"Product Description",image:"grey-t-shirt.jpg",price:48,category:"Clothing",quantity:0,inventoryStatus:"OUTOFSTOCK",rating:3,orders:[{id:"1013-0",productCode:"fldsmn31b",date:"2020-04-01",amount:48,quantity:1,customer:"Simona Morasca",status:"DELIVERED"}]},{id:"1014",code:"waas1x2as",name:"Headphones",description:"Product Description",image:"headphones.jpg",price:175,category:"Electronics",quantity:8,inventoryStatus:"LOWSTOCK",rating:5,orders:[{id:"1014-0",productCode:"waas1x2as",date:"2020-05-15",amount:175,quantity:1,customer:"Lenna Paprocki",status:"DELIVERED"},{id:"1014-1",productCode:"waas1x2as",date:"2020-01-02",amount:175,quantity:1,customer:"Donette Foller",status:"CANCELLED"}]},{id:"1015",code:"vb34btbg5",name:"Light Green T-Shirt",description:"Product Description",image:"light-green-t-shirt.jpg",price:49,category:"Clothing",quantity:34,inventoryStatus:"INSTOCK",rating:4,orders:[{id:"1015-0",productCode:"vb34btbg5",date:"2020-07-02",amount:98,quantity:2,customer:"Mitsue Tollner",status:"DELIVERED"}]},{id:"1016",code:"k8l6j58jl",name:"Lime Band",description:"Product Description",image:"lime-band.jpg",price:79,category:"Fitness",quantity:12,inventoryStatus:"INSTOCK",rating:3,orders:[]},{id:"1017",code:"v435nn85n",name:"Mini Speakers",description:"Product Description",image:"mini-speakers.jpg",price:85,category:"Clothing",quantity:42,inventoryStatus:"INSTOCK",rating:4,orders:[{id:"1017-0",productCode:"v435nn85n",date:"2020-07-12",amount:85,quantity:1,customer:"Minna Amigon",status:"DELIVERED"}]},{id:"1018",code:"09zx9c0zc",name:"Painted Phone Case",description:"Product Description",image:"painted-phone-case.jpg",price:56,category:"Accessories",quantity:41,inventoryStatus:"INSTOCK",rating:5,orders:[{id:"1018-0",productCode:"09zx9c0zc",date:"2020-07-01",amount:56,quantity:1,customer:"Abel Maclead",status:"DELIVERED"},{id:"1018-1",productCode:"09zx9c0zc",date:"2020-05-02",amount:56,quantity:1,customer:"Minna Amigon",status:"RETURNED"}]},{id:"1019",code:"mnb5mb2m5",name:"Pink Band",description:"Product Description",image:"pink-band.jpg",price:79,category:"Fitness",quantity:63,inventoryStatus:"INSTOCK",rating:4,orders:[]},{id:"1020",code:"r23fwf2w3",name:"Pink Purse",description:"Product Description",image:"pink-purse.jpg",price:110,category:"Accessories",quantity:0,inventoryStatus:"OUTOFSTOCK",rating:4,orders:[{id:"1020-0",productCode:"r23fwf2w3",date:"2020-05-29",amount:110,quantity:1,customer:"Kiley Caldarera",status:"DELIVERED"},{id:"1020-1",productCode:"r23fwf2w3",date:"2020-02-11",amount:220,quantity:2,customer:"Graciela Ruta",status:"DELIVERED"}]},{id:"1021",code:"pxpzczo23",name:"Purple Band",description:"Product Description",image:"purple-band.jpg",price:79,category:"Fitness",quantity:6,inventoryStatus:"LOWSTOCK",rating:3,orders:[{id:"1021-0",productCode:"pxpzczo23",date:"2020-02-02",amount:79,quantity:1,customer:"Cammy Albares",status:"DELIVERED"}]},{id:"1022",code:"2c42cb5cb",name:"Purple Gemstone Necklace",description:"Product Description",image:"purple-gemstone-necklace.jpg",price:45,category:"Accessories",quantity:62,inventoryStatus:"INSTOCK",rating:4,orders:[{id:"1022-0",productCode:"2c42cb5cb",date:"2020-06-29",amount:45,quantity:1,customer:"Mattie Poquette",status:"DELIVERED"},{id:"1022-1",productCode:"2c42cb5cb",date:"2020-02-11",amount:135,quantity:3,customer:"Meaghan Garufi",status:"DELIVERED"}]},{id:"1023",code:"5k43kkk23",name:"Purple T-Shirt",description:"Product Description",image:"purple-t-shirt.jpg",price:49,category:"Clothing",quantity:2,inventoryStatus:"LOWSTOCK",rating:5,orders:[{id:"1023-0",productCode:"5k43kkk23",date:"2020-04-15",amount:49,quantity:1,customer:"Gladys Rim",status:"RETURNED"}]},{id:"1024",code:"lm2tny2k4",name:"Shoes",description:"Product Description",image:"shoes.jpg",price:64,category:"Clothing",quantity:0,inventoryStatus:"INSTOCK",rating:4,orders:[]},{id:"1025",code:"nbm5mv45n",name:"Sneakers",description:"Product Description",image:"sneakers.jpg",price:78,category:"Clothing",quantity:52,inventoryStatus:"INSTOCK",rating:4,orders:[{id:"1025-0",productCode:"nbm5mv45n",date:"2020-02-19",amount:78,quantity:1,customer:"Yuki Whobrey",status:"DELIVERED"},{id:"1025-1",productCode:"nbm5mv45n",date:"2020-05-21",amount:78,quantity:1,customer:"Fletcher Flosi",status:"PENDING"}]},{id:"1026",code:"zx23zc42c",name:"Teal T-Shirt",description:"Product Description",image:"teal-t-shirt.jpg",price:49,category:"Clothing",quantity:3,inventoryStatus:"LOWSTOCK",rating:3,orders:[{id:"1026-0",productCode:"zx23zc42c",date:"2020-04-24",amount:98,quantity:2,customer:"Bette Nicka",status:"DELIVERED"}]},{id:"1027",code:"acvx872gc",name:"Yellow Earbuds",description:"Product Description",image:"yellow-earbuds.jpg",price:89,category:"Electronics",quantity:35,inventoryStatus:"INSTOCK",rating:3,orders:[{id:"1027-0",productCode:"acvx872gc",date:"2020-01-29",amount:89,quantity:1,customer:"Veronika Inouye",status:"DELIVERED"},{id:"1027-1",productCode:"acvx872gc",date:"2020-06-11",amount:89,quantity:1,customer:"Willard Kolmetz",status:"DELIVERED"}]},{id:"1028",code:"tx125ck42",name:"Yoga Mat",description:"Product Description",image:"yoga-mat.jpg",price:20,category:"Fitness",quantity:15,inventoryStatus:"INSTOCK",rating:5,orders:[]},{id:"1029",code:"gwuby345v",name:"Yoga Set",description:"Product Description",image:"yoga-set.jpg",price:20,category:"Fitness",quantity:25,inventoryStatus:"INSTOCK",rating:8,orders:[{id:"1029-0",productCode:"gwuby345v",date:"2020-02-14",amount:4,quantity:80,customer:"Maryann Royster",status:"DELIVERED"}]}],getProductsMini(){return Promise.resolve(this.getProductsData().slice(0,5))},getProductsSmall(){return Promise.resolve(this.getProductsData().slice(0,10))},getProducts(){return Promise.resolve(this.getProductsData())},getProductsWithOrdersSmall(){return Promise.resolve(this.getProductsWithOrdersData().slice(0,10))},getProductsWithOrders(){return Promise.resolve(this.getProductsWithOrdersData())}}])}]);