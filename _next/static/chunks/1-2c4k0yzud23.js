(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28805,e=>{e.v(i=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(i=>e.l(i))).then(()=>i(48545)))},48761,e=>{e.v(i=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(i=>e.l(i))).then(()=>i(25050)))},12719,e=>{"use strict";var i=e.i(91398),t=e.i(88850),l=e.i(82948),r=e.i(28137);function n(){return(0,i.jsxs)(r.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,i.jsx)("h3",{children:"Screen Reader"}),(0,i.jsxs)("p",{children:["TieredMenu component uses the ",(0,i.jsx)("i",{children:"menubar"})," role with ",(0,i.jsx)("i",{children:"aria-orientation"}),' set to "vertical" and the value to describe the menu can either be provided with ',(0,i.jsx)("i",{children:"aria-labelledby"})," or ",(0,i.jsx)("i",{children:"aria-label"})," props. Each list item has a"," ",(0,i.jsx)("i",{children:"presentation"})," role whereas anchor elements have a ",(0,i.jsx)("i",{children:"menuitem"})," role with ",(0,i.jsx)("i",{children:"aria-label"})," referring to the label of the item and ",(0,i.jsx)("i",{children:"aria-disabled"})," defined if the item is disabled. A submenu within a TieredMenu uses the"," ",(0,i.jsx)("i",{children:"menu"})," role with an ",(0,i.jsx)("i",{children:"aria-labelledby"})," defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have ",(0,i.jsx)("i",{children:"aria-haspopup"}),", ",(0,i.jsx)("i",{children:"aria-expanded"})," and ",(0,i.jsx)("i",{children:"aria-controls"})," to define the relation between the item and the submenu."]}),(0,i.jsxs)("p",{children:["In popup mode, the component implicitly manages the ",(0,i.jsx)("i",{children:"aria-expanded"}),", ",(0,i.jsx)("i",{children:"aria-haspopup"})," and ",(0,i.jsx)("i",{children:"aria-controls"})," attributes of the target element to define the relation between the target and the popup."]}),(0,i.jsx)("h3",{children:"Keyboard Support"}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Key"}),(0,i.jsx)("th",{children:"Function"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"tab"})}),(0,i.jsx)("td",{children:"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("i",{children:"shift"})," + ",(0,i.jsx)("i",{children:"tab"})]}),(0,i.jsx)("td",{children:"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"enter"})}),(0,i.jsx)("td",{children:"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"space"})}),(0,i.jsx)("td",{children:"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"escape"})}),(0,i.jsx)("td",{children:"If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"down arrow"})}),(0,i.jsx)("td",{children:"Moves focus to the next menuitem within the submenu."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"up arrow"})}),(0,i.jsx)("td",{children:"Moves focus to the previous menuitem within the submenu."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"right arrow"})}),(0,i.jsx)("td",{children:"Opens a submenu if there is one available and moves focus to the first item."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"left arrow"})}),(0,i.jsx)("td",{children:"Closes a submenu and moves focus to the root item of the closed submenu."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"home"})}),(0,i.jsx)("td",{children:"Moves focus to the first menuitem within the submenu."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"end"})}),(0,i.jsx)("td",{children:"Moves focus to the last menuitem within the submenu."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"any printable character"})}),(0,i.jsx)("td",{children:"Moves focus to the menuitem whose label starts with the characters being typed."})]})]})]})})]})}var a=e.i(5180),o=e.i(95925);function s(e){let t=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",items:[{label:"Document",icon:"pi pi-file"},{label:"Image",icon:"pi pi-image"},{label:"Video",icon:"pi pi-video"}]},{label:"Open",icon:"pi pi-folder-open"},{label:"Print",icon:"pi pi-print"}]},{label:"Edit",icon:"pi pi-file-edit",items:[{label:"Copy",icon:"pi pi-copy"},{label:"Delete",icon:"pi pi-times"}]},{label:"Search",icon:"pi pi-search"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Slack",icon:"pi pi-slack"},{label:"Whatsapp",icon:"pi pi-whatsapp"}]}],l={basic:`
<TieredMenu model={items} breakpoint="767px" />
        `,javascript:`
import React from 'react';
import { TieredMenu } from 'primereact/tieredmenu';

export default function BasicDemo() {
    const items = [
        {
            label: 'File',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    items: [
                        {
                            label: 'Document',
                            icon: 'pi pi-file'
                        },
                        {
                            label: 'Image',
                            icon: 'pi pi-image'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-video'
                        }
                    ]
                },
                {
                    label: 'Open',
                    icon: 'pi pi-folder-open'
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print'
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-file-edit',
            items: [
                {
                    label: 'Copy',
                    icon: 'pi pi-copy'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times'
                }
            ]
        },
        {
            label: 'Search',
            icon: 'pi pi-search'
        },
        {
            separator: true
        },
        {
            label: 'Share',
            icon: 'pi pi-share-alt',
            items: [
                {
                    label: 'Slack',
                    icon: 'pi pi-slack'
                },
                {
                    label: 'Whatsapp',
                    icon: 'pi pi-whatsapp'
                }
            ]
        }
    ];

    return (
        <TieredMenu model={items} breakpoint="767px" />
    )
}
        `,typescript:`
import React from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { MenuItem } from 'primereact/menuitem';

export default function BasicDemo() {
    const items: MenuItem[] = [
        {
            label: 'File',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    items: [
                        {
                            label: 'Document',
                            icon: 'pi pi-file'
                        },
                        {
                            label: 'Image',
                            icon: 'pi pi-image'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-video'
                        }
                    ]
                },
                {
                    label: 'Open',
                    icon: 'pi pi-folder-open'
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print'
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-file-edit',
            items: [
                {
                    label: 'Copy',
                    icon: 'pi pi-copy'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times'
                }
            ]
        },
        {
            label: 'Search',
            icon: 'pi pi-search'
        },
        {
            separator: true
        },
        {
            label: 'Share',
            icon: 'pi pi-share-alt',
            items: [
                {
                    label: 'Slack',
                    icon: 'pi pi-slack'
                },
                {
                    label: 'Whatsapp',
                    icon: 'pi pi-whatsapp'
                }
            ]
        }
    ];

    return (
        <TieredMenu model={items} breakpoint="767px" />
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["TieredMenu requires a collection of menuitems as its ",(0,i.jsx)("i",{children:"model"}),"."]})}),(0,i.jsx)("div",{className:"card flex justify-content-center",children:(0,i.jsx)(o.TieredMenu,{model:t,breakpoint:"767px"})}),(0,i.jsx)(a.DocSectionCode,{code:l})]})}var c=e.i(91788),p=e.i(29363);function m(e){let t=(0,c.useRef)(null),l=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",command:()=>{t.current.show({severity:"success",summary:"Success",detail:"File created",life:3e3})}},{label:"Print",icon:"pi pi-print",command:()=>{t.current.show({severity:"error",summary:"Error",detail:"No printer connected",life:3e3})}}]},{label:"Search",icon:"pi pi-search",command:()=>{t.current.show({severity:"warn",summary:"Search Results",detail:"No results found",life:3e3})}},{separator:!0},{label:"Sync",icon:"pi pi-cloud",items:[{label:"Import",icon:"pi pi-cloud-download",command:()=>{t.current.show({severity:"info",summary:"Downloads",detail:"Downloaded from cloud",life:3e3})}},{label:"Export",icon:"pi pi-cloud-upload",command:()=>{t.current.show({severity:"info",summary:"Shared",detail:"Exported to cloud",life:3e3})}}]}],n={basic:`
<Toast ref={toast} />
<TieredMenu model={items} breakpoint="767px" />
        `,javascript:`
import React, { useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { Toast } from 'primereact/toast';

export default function CommandDemo() {
    const toast = useRef(null);
    const items = [
        {
            label: 'File',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    command: () => {
                        toast.current.show({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                    }
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print',
                    command: () => {
                        toast.current.show({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Search',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
            }
        },
        {
            separator: true
        },
        {
            label: 'Sync',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Import',
                    icon: 'pi pi-cloud-download',
                    command: () => {
                        toast.current.show({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                    }
                },
                {
                    label: 'Export',
                    icon: 'pi pi-cloud-upload',
                    command: () => {
                        toast.current.show({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                    }
                }
            ]
        }
    ];

    return (
        <>
            <Toast ref={toast} />
            <TieredMenu model={items} breakpoint="767px" />
        </>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function CommandDemo() {
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'File',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    command: () => {
                        toast.current.show({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                    }
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print',
                    command: () => {
                        toast.current.show({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Search',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
            }
        },
        {
            separator: true
        },
        {
            label: 'Sync',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Import',
                    icon: 'pi pi-cloud-download',
                    command: () => {
                        toast.current.show({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                    }
                },
                {
                    label: 'Export',
                    icon: 'pi pi-cloud-upload',
                    command: () => {
                        toast.current.show({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                    }
                }
            ]
        }
    ];

    return (
        <>
            <Toast ref={toast} />
            <TieredMenu model={items} breakpoint="767px" />
        </>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["The ",(0,i.jsx)("i",{children:"command"})," property defines the callback to run when an item is activated by click or a key event."]})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsx)(p.Toast,{ref:t}),(0,i.jsx)(o.TieredMenu,{model:l,breakpoint:"767px"})]}),(0,i.jsx)(a.DocSectionCode,{code:n})]})}function d(e){let t={basic:`
import { TieredMenu } from 'primereact/tieredmenu';
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e}),(0,i.jsx)(a.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}var u=e.i(57724);function h(e){let t=(0,c.useRef)(null),l=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",items:[{label:"Document",icon:"pi pi-file"},{label:"Image",icon:"pi pi-image"},{label:"Video",icon:"pi pi-video"}]},{label:"Open",icon:"pi pi-folder-open"},{label:"Print",icon:"pi pi-print"}]},{label:"Edit",icon:"pi pi-file-edit",items:[{label:"Copy",icon:"pi pi-copy"},{label:"Delete",icon:"pi pi-times"}]},{label:"Search",icon:"pi pi-search"},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Slack",icon:"pi pi-slack"},{label:"Whatsapp",icon:"pi pi-whatsapp"}]}],n={basic:`
<TieredMenu model={items} popup ref={menu} breakpoint="767px" />
<Button label="Show" onClick={(e) => menu.current.toggle(e)} />
        `,javascript:`
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';

export default function PopupDemo() {
    const menu = useRef(null);
    const items = [
        {
            label: 'File',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    items: [
                        {
                            label: 'Document',
                            icon: 'pi pi-file'
                        },
                        {
                            label: 'Image',
                            icon: 'pi pi-image'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-video'
                        }
                    ]
                },
                {
                    label: 'Open',
                    icon: 'pi pi-folder-open'
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print'
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-file-edit',
            items: [
                {
                    label: 'Copy',
                    icon: 'pi pi-copy'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times'
                }
            ]
        },
        {
            label: 'Search',
            icon: 'pi pi-search'
        },
        {
            separator: true
        },
        {
            label: 'Share',
            icon: 'pi pi-share-alt',
            items: [
                {
                    label: 'Slack',
                    icon: 'pi pi-slack'
                },
                {
                    label: 'Whatsapp',
                    icon: 'pi pi-whatsapp'
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
            <Button label="Show" onClick={(e) => menu.current.toggle(e)} />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { TieredMenu } from 'primereact/tieredmenu';
import { MenuItem } from 'primereact/menuitem';

export default function PopupDemo() {
    const menu = useRef(null);
    const items: MenuItem[] = [
        {
            label: 'File',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    items: [
                        {
                            label: 'Document',
                            icon: 'pi pi-file'
                        },
                        {
                            label: 'Image',
                            icon: 'pi pi-image'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-video'
                        }
                    ]
                },
                {
                    label: 'Open',
                    icon: 'pi pi-folder-open'
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print'
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-file-edit',
            items: [
                {
                    label: 'Copy',
                    icon: 'pi pi-copy'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times'
                }
            ]
        },
        {
            label: 'Search',
            icon: 'pi pi-search'
        },
        {
            separator: true
        },
        {
            label: 'Share',
            icon: 'pi pi-share-alt',
            items: [
                {
                    label: 'Slack',
                    icon: 'pi pi-slack'
                },
                {
                    label: 'Whatsapp',
                    icon: 'pi pi-whatsapp'
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
            <Button label="Show" onClick={(e) => menu.current.toggle(e)} />
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Popup mode is enabled by adding ",(0,i.jsx)("i",{children:"popup"})," property and calling ",(0,i.jsx)("i",{children:"toggle"})," method with an event of the target."]})}),(0,i.jsxs)("div",{className:"card flex justify-content-center",children:[(0,i.jsx)(o.TieredMenu,{model:l,popup:!0,ref:t,breakpoint:"767px"}),(0,i.jsx)(u.Button,{label:"Toggle",onClick:e=>t.current.toggle(e)})]}),(0,i.jsx)(a.DocSectionCode,{code:n})]})}let b=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"tieredmenu"})})]});var f=e.i(3828);function x(e){let t=(0,f.useRouter)(),l=[{label:"Router",icon:"pi pi-palette",items:[{label:"Styled",url:"/theming"},{label:"Unstyled",url:"/unstyled"}]},{label:"Programmatic",icon:"pi pi-link",command:()=>{t.push("/installation")}},{label:"External",icon:"pi pi-home",items:[{label:"React.js",url:"https://react.dev/"},{label:"Vite.js",url:"https://vitejs.dev/"}]}],n={basic:`
<TieredMenu model={items} breakpoint="767px" />
        `,javascript:`
import React from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { useRouter } from 'next/router';

export default function RouterDemo() {
    const router = useRouter();
    const items = [
        {
            label: 'Router',
            icon: 'pi pi-palette',
            items: [
                {
                    label: 'Styled',
                    url: '/theming'
                },
                {
                    label: 'Unstyled',
                    url: '/unstyled'
                }
            ]
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
            items: [
                {
                    label: 'React.js',
                    url: 'https://react.dev/'
                },
                {
                    label: 'Vite.js',
                    url: 'https://vitejs.dev/'
                }
            ]
        }
    ];

    return (
        <TieredMenu model={items} breakpoint="767px" />
    )
}
        `,typescript:`
import React from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { MenuItem } from 'primereact/menuitem';
import { useRouter } from 'next/router';

export default function RouterDemo() {
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Router',
            icon: 'pi pi-palette',
            items: [
                {
                    label: 'Styled',
                    url: '/theming'
                },
                {
                    label: 'Unstyled',
                    url: '/unstyled'
                }
            ]
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
            items: [
                {
                    label: 'React.js',
                    url: 'https://react.dev/'
                },
                {
                    label: 'Vite.js',
                    url: 'https://vitejs.dev/'
                }
            ]
        }
    ];

    return (
        <TieredMenu model={items} breakpoint="767px" />
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Items with navigation are defined with ",(0,i.jsx)("i",{children:"command"})," and ",(0,i.jsx)("i",{children:"url"})," property to be able to use a router link component, an external link or programmatic navigation."]})}),(0,i.jsx)("div",{className:"card flex justify-content-center",children:(0,i.jsx)(o.TieredMenu,{model:l,breakpoint:"767px"})}),(0,i.jsx)(a.DocSectionCode,{code:n})]})}var j=e.i(50989);function w(e){let t=e=>(0,i.jsxs)("a",{className:"flex align-items-center p-menuitem-link",children:[(0,i.jsx)("span",{className:e.icon}),(0,i.jsx)("span",{className:"mx-2",children:e.label}),e.badge&&(0,i.jsx)(j.Badge,{className:"ml-auto",value:e.badge}),e.shortcut&&(0,i.jsx)("span",{className:"ml-auto border-1 surface-border border-round surface-100 text-xs p-1",children:e.shortcut})]}),l=[{label:"File",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",items:[{label:"Document",icon:"pi pi-file",shortcut:"⌘+N",template:t},{label:"Image",icon:"pi pi-image",shortcut:"⌘+I",template:t},{label:"Video",icon:"pi pi-video",shortcut:"⌘+L",template:t}]},{label:"Open",icon:"pi pi-folder-open",shortcut:"⌘+O",template:t},{label:"Print",icon:"pi pi-print",shortcut:"⌘+P",template:t}]},{label:"Edit",icon:"pi pi-file-edit",items:[{label:"Copy",icon:"pi pi-copy",shortcut:"⌘+C",template:t},{label:"Delete",icon:"pi pi-times",shortcut:"⌘+D",template:t}]},{label:"Search",icon:"pi pi-search",shortcut:"⌘+S",template:t},{separator:!0},{label:"Share",icon:"pi pi-share-alt",items:[{label:"Slack",icon:"pi pi-slack",badge:2,template:t},{label:"Whatsapp",icon:"pi pi-whatsapp",badge:3,template:t}]}],n={basic:`
<TieredMenu model={items} breakpoint="767px" />
        `,javascript:`
import React from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items = [
        {
            label: 'File',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    items: [
                        {
                            label: 'Document',
                            icon: 'pi pi-file',
                            shortcut: '⌘+N',
                            template: itemRenderer
                        },
                        {
                            label: 'Image',
                            icon: 'pi pi-image',
                            shortcut: '⌘+I',
                            template: itemRenderer
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-video',
                            shortcut: '⌘+L',
                            template: itemRenderer
                        }
                    ]
                },
                {
                    label: 'Open',
                    icon: 'pi pi-folder-open',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print',
                    shortcut: '⌘+P',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-file-edit',
            items: [
                {
                    label: 'Copy',
                    icon: 'pi pi-copy',
                    shortcut: '⌘+C',
                    template: itemRenderer
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    shortcut: '⌘+D',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Search',
            icon: 'pi pi-search',
            shortcut: '⌘+S',
            template: itemRenderer
        },
        {
            separator: true
        },
        {
            label: 'Share',
            icon: 'pi pi-share-alt',
            items: [
                {
                    label: 'Slack',
                    icon: 'pi pi-slack',
                    badge: 2,
                    template: itemRenderer
                },
                {
                    label: 'Whatsapp',
                    icon: 'pi pi-whatsapp',
                    badge: 3,
                    template: itemRenderer
                }
            ]
        }
    ]

    return (
        <TieredMenu model={items} breakpoint="767px" />
    )
}
        `,typescript:`
import React from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { MenuItem } from 'primereact/menuitem';
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items: MenuItem[] = [
        {
            label: 'File',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    items: [
                        {
                            label: 'Document',
                            icon: 'pi pi-file',
                            shortcut: '⌘+N',
                            template: itemRenderer
                        },
                        {
                            label: 'Image',
                            icon: 'pi pi-image',
                            shortcut: '⌘+I',
                            template: itemRenderer
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-video',
                            shortcut: '⌘+L',
                            template: itemRenderer
                        }
                    ]
                },
                {
                    label: 'Open',
                    icon: 'pi pi-folder-open',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print',
                    shortcut: '⌘+P',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-file-edit',
            items: [
                {
                    label: 'Copy',
                    icon: 'pi pi-copy',
                    shortcut: '⌘+C',
                    template: itemRenderer
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    shortcut: '⌘+D',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Search',
            icon: 'pi pi-search',
            shortcut: '⌘+S',
            template: itemRenderer
        },
        {
            separator: true
        },
        {
            label: 'Share',
            icon: 'pi pi-share-alt',
            items: [
                {
                    label: 'Slack',
                    icon: 'pi pi-slack',
                    badge: 2,
                    template: itemRenderer
                },
                {
                    label: 'Whatsapp',
                    icon: 'pi pi-whatsapp',
                    badge: 3,
                    template: itemRenderer
                }
            ]
        }
    ]

    return (
        <TieredMenu model={items} breakpoint="767px" />
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["TieredMenu offers item customization with the items ",(0,i.jsx)("i",{children:"template"})," property that receives the item instance and returns an element."]})}),(0,i.jsx)("div",{className:"card flex justify-content-center",children:(0,i.jsx)(o.TieredMenu,{model:l,breakpoint:"767px"})}),(0,i.jsx)(a.DocSectionCode,{code:n})]})}function y(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Element"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-tieredmenu"}),(0,i.jsx)("td",{children:"Container element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-menu-list"}),(0,i.jsx)("td",{children:"List element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-menuitem"}),(0,i.jsx)("td",{children:"Menuitem element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-menuitem-text"}),(0,i.jsx)("td",{children:"Label of a menuitem."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-menuitem-icon"}),(0,i.jsx)("td",{children:"Icon of a menuitem."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-submenu-icon"}),(0,i.jsx)("td",{children:"Arrow icon of a submenu."})]})]})]})})]})}var g=e.i(41158);function v(e){let t={basic:`
export const TRANSITIONS = {
    overlay: {
        timeout: 150,
        classNames: {
            enter: 'opacity-0 scale-75',
            enterActive: 'opacity-100 !scale-100 transition-transform transition-opacity duration-150 ease-in',
            exit: 'opacity-100',
            exitActive: '!opacity-0 transition-opacity duration-150 ease-linear'
        }
    }
};

const Tailwind = {
    tieredmenu: {
        root: {
            className: classNames('py-1 bg-white border border-gray-300 rounded-lg w-[12.5rem]', 'dark:border-blue-900/40 dark:bg-gray-900')
        },
        menu: {
            className: classNames('outline-none', 'm-0 p-0 list-none')
        },
        menuitem: 'relative',
        content: ({ context }) => ({
            className: classNames(
                'transition-shadow duration-200 border-none rounded-none',
                'hover:bg-gray-200 hover:text-gray-700 dark:hover:text-white/80 dark:hover:bg-gray-800/80', //Hover
                {
                    'text-gray-700': !context.focused && !context.active,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.active,
                    'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.active,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.active
                }
            )
        }),
        action: ({ context }) => ({
            className: classNames('py-3 px-5 select-none', 'flex items-center cursor-pointer no-underline relative overflow-hidden', {
                'text-gray-700 dark:text-white/80 hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.active,
                'text-blue-600 bg-blue-100': context.active
            })
        }),
        icon: 'mr-2',
        submenuicon: 'ml-auto',
        separator: 'border-t border-gray-300 my-1 dark:border-blue-900/40',
        submenu: {
            className: classNames('py-1 bg-white dark:bg-gray-900 border-0 shadow-md min-w-full', 'absolute z-10', 'left-full top-0')
        },
        transition: TRANSITIONS.overlay
    }
}
        `},l={javascript:`
import React from 'react';
import { TieredMenu } from 'primereact/tieredmenu';

export default function UnstyledDemo() {
    const items = [
        {
            label: 'File',
            icon: 'pi pi-fw pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {
                            label: 'Bookmark',
                            icon: 'pi pi-fw pi-bookmark'
                        },
                        {
                            label: 'Video',
                            icon: 'pi pi-fw pi-video'
                        }
                    ]
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-trash'
                },
                {
                    separator: true
                },
                {
                    label: 'Export',
                    icon: 'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Left',
                    icon: 'pi pi-fw pi-align-left'
                },
                {
                    label: 'Right',
                    icon: 'pi pi-fw pi-align-right'
                },
                {
                    label: 'Center',
                    icon: 'pi pi-fw pi-align-center'
                },
                {
                    label: 'Justify',
                    icon: 'pi pi-fw pi-align-justify'
                }
            ]
        },
        {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-fw pi-user-minus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        {
                            label: 'Filter',
                            icon: 'pi pi-fw pi-filter',
                            items: [
                                {
                                    label: 'Print',
                                    icon: 'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon: 'pi pi-fw pi-bars',
                            label: 'List'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'Archive',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
        {
            separator: true
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off'
        }
    ];

    return (
        <div className="card flex justify-center">
            <TieredMenu model={items} breakpoint="767px" />
        </div>
    )
}
    `};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(r.DocSectionText,{...e,children:[(0,i.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,i.jsx)(g.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,i.jsx)(a.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,i.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,i.jsx)(a.DocSectionCode,{code:l,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:b},{id:"pt.tieredmenu.options",label:"TieredMenu PT Options",component:t.default}];return(0,i.jsx)(l.DocComponent,{title:"React TieredMenu Component",header:"TieredMenu",description:"TieredMenu displays submenus in nested overlays.",componentDocs:[{id:"import",label:"Import",component:d},{id:"basic",label:"Basic",component:s},{id:"popup",label:"Popup",component:h},{id:"template",label:"Template",component:w},{id:"command",label:"Command",component:m},{id:"router",label:"Router",component:x},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["TieredMenu","MenuItem"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:y},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:v}]}]})}],12719)},37533,(e,i,t)=>{let l="/tieredmenu";(window.__NEXT_P=window.__NEXT_P||[]).push([l,()=>e.r(12719)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([l])})}]);