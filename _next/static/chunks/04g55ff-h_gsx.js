(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,92460,e=>{"use strict";var t=e.i(91398),i=e.i(88850),s=e.i(82948),o=e.i(57294),a=e.i(28137);function l(){return(0,t.jsxs)(a.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["SplitButton component renders two native button elements, main button uses the label property to define ",(0,t.jsx)("i",{children:"aria-label"})," by default which can be customized with ",(0,t.jsx)("i",{children:"buttonProps"}),". Dropdown button requires an explicit definition to describe it using ",(0,t.jsx)("i",{children:"menuButtonProps"})," option and also includes ",(0,t.jsx)("i",{children:"aria-haspopup"}),", ",(0,t.jsx)("i",{children:"aria-expanded"})," for states along with ",(0,t.jsx)("i",{children:"aria-controls"})," to define the relation between the popup and the button."]}),(0,t.jsxs)("p",{children:["The popup overlay uses ",(0,t.jsx)("i",{children:"menu"})," role on the list and each action item has a ",(0,t.jsx)("i",{children:"menuitem"})," role with an ",(0,t.jsx)("i",{children:"aria-label"})," as the menuitem label. The id of the menu refers to the ",(0,t.jsx)("i",{children:"aria-controls"})," of the dropdown button."]}),(0,t.jsx)(o.CodeHighlight,{children:`
<SplitButton buttonProps={{'aria-label': 'Default Action'}} menuButtonProps={{'aria-label': 'More Options'}} />
`}),(0,t.jsx)("h3",{children:"Main Button Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Activates the button."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Activates the button."})]})]})]})}),(0,t.jsx)("h3",{children:"Menu Button Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Toggles the visibility of the menu."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles the visibility of the menu."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Opens the menu and moves focus to the first item."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Opens the menu and moves focus to the last item."})]})]})]})}),(0,t.jsx)("h3",{children:"Menu Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Actives the menuitem, closes the menu and sets focus on the menu button."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the menu and sets focus on the menu button."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next item, if it is the last one then first item receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous item, if it is the first one then last item receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Moves focus to the first item."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Moves focus to the last item."})]})]})]})})]})}var n=e.i(5180),r=e.i(25134),c=e.i(29363),p=e.i(3828),d=e.i(91788);function u(e){let i=(0,p.useRouter)(),s=(0,d.useRef)(null),o=[{label:"Update",icon:"pi pi-refresh",command:()=>{s.current.show({severity:"success",summary:"Updated",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-times",command:()=>{s.current.show({severity:"warn",summary:"Delete",detail:"Data Deleted"})}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://reactjs.org/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{i.push("/fileupload")}}],l={basic:`
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
        `,javascript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function BasicDemo() {
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function BasicDemo() {
    //const router = useRouter();
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["SplitButton has a default action button and a collection of additional options defined by the ",(0,t.jsx)("i",{children:"model"})," property based on MenuModel API."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:()=>{s.current.show({severity:"success",summary:"Success",detail:"Data Saved"})},model:o})]}),(0,t.jsx)(n.DocSectionCode,{code:l})]})}function m(e){let i=(0,p.useRouter)(),s=(0,d.useRef)(null),o=[{label:"Update",icon:"pi pi-refresh",command:()=>{s.current.show({severity:"success",summary:"Updated",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-times",command:()=>{s.current.show({severity:"warn",summary:"Delete",detail:"Data Deleted"})}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://reactjs.org/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{i.push("/fileupload")}}],l={basic:`
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
        `,javascript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function DisabledDemo() {
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} disabled />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function DisabledDemo() {
    //const router = useRouter();
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} disabled />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:()=>{s.current.show({severity:"success",summary:"Success",detail:"Data Saved"})},model:o,disabled:!0})]}),(0,t.jsx)(n.DocSectionCode,{code:l})]})}function v(e){let i=(0,p.useRouter)(),s=(0,d.useRef)(null),o=[{label:"Update",icon:"pi pi-refresh",command:()=>{s.current.show({severity:"success",summary:"Updated",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-times",command:()=>{s.current.show({severity:"warn",summary:"Delete",detail:"Data Deleted"})}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://reactjs.org/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{i.push("/fileupload")}}],l={basic:`
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-check" dropdownIcon="pi pi-cog" onClick={save} model={items} />
        `,javascript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function IconsDemo() {
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-check" dropdownIcon="pi pi-cog" onClick={save} model={items} />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function IconsDemo() {
    //const router = useRouter();
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-check" dropdownIcon="pi pi-cog" onClick={save} model={items} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["SplitButton has a default action button and a collection of additional options defined by the ",(0,t.jsx)("i",{children:"model"})," property based on MenuModel API."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-check",dropdownIcon:"pi pi-cog",onClick:()=>{s.current.show({severity:"success",summary:"Success",detail:"Data Saved"})},model:o})]}),(0,t.jsx)(n.DocSectionCode,{code:l})]})}function S(e){let i={basic:`
import { SplitButton } from 'primereact/splitbutton';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e}),(0,t.jsx)(n.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function f(e){let i=(0,p.useRouter)(),s=(0,d.useRef)(null),o=[{label:"Update",icon:"pi pi-refresh",command:()=>{s.current.show({severity:"success",summary:"Updated",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-times",command:()=>{s.current.show({severity:"warn",summary:"Delete",detail:"Data Deleted"})}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://reactjs.org/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{i.push("/fileupload")}}],[l,u]=(0,d.useState)(!1),m={basic:`
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} loading={loading} />
        `,javascript:`
import React, { useRef, useState } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function LoadingDemo() {
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const [loading, setLoading] = useState(false);

    const save = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
        }, 2000);
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} loading={loading} />
        </div>
    )
}
        `,typescript:`
import React, { useRef, useState } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function LoadingDemo() {
    //const router = useRouter();
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const [loading, setLoading] = useState<boolean>(false);

    const save = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
        }, 2000);
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} loading={loading} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["SplitButton has a default action button and a collection of additional options defined by the ",(0,t.jsx)("i",{children:"model"})," property based on MenuModel API."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:()=>{u(!0),setTimeout(()=>{u(!1),s.current.show({severity:"success",summary:"Success",detail:"Data Saved"})},2e3)},model:o,loading:l})]}),(0,t.jsx)(n.DocSectionCode,{code:m})]})}function b(e){let i=(0,p.useRouter)(),s=(0,d.useRef)(null),o=[{label:"Update",icon:"pi pi-refresh",command:()=>{s.current.show({severity:"success",summary:"Updated",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-times",command:()=>{s.current.show({severity:"warn",summary:"Delete",detail:"Data Deleted"})}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://reactjs.org/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{i.push("/fileupload")}}],l=()=>{s.current.show({severity:"success",summary:"Success",detail:"Data Saved"})},u={basic:`
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} outlined />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" outlined />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" outlined />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" outlined />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" outlined />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" outlined />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" outlined />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="contrast" outlined />
        `,javascript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function OutlinedDemo() {
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="contrast" outlined />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function OutlinedDemo() {
    //const router = useRouter();
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" outlined />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="contrast" outlined />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Outlined buttons display a border without a background initially."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,outlined:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"secondary",outlined:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"success",outlined:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"info",outlined:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"warning",outlined:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"help",outlined:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"danger",outlined:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"contrast",outlined:!0})]}),(0,t.jsx)(n.DocSectionCode,{code:u})]})}let h=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/splitbutton.jpg",alt:"splitbutton"})})]});function y(e){let i=(0,p.useRouter)(),s=(0,d.useRef)(null),o=[{label:"Update",icon:"pi pi-refresh",command:()=>{s.current.show({severity:"success",summary:"Updated",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-times",command:()=>{s.current.show({severity:"warn",summary:"Delete",detail:"Data Deleted"})}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://reactjs.org/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{i.push("/fileupload")}}],l=()=>{s.current.show({severity:"success",summary:"Success",detail:"Data Saved"})},u={basic:`
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} raised />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" raised />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" raised />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" raised />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" raised />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" raised />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" raised />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="contrast" raised />
        `,javascript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function RaisedDemo() {
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} raised />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" raised />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" raised />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" raised />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" raised />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" raised />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" raised />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="contrast" raised />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function RaisedDemo() {
    //const router = useRouter();
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} raised />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" raised />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" raised />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" raised />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" raised />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" raised />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" raised />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="contrast" raised />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Raised buttons display a shadow to indicate elevation."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,raised:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"secondary",raised:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"success",raised:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"info",raised:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"warning",raised:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"help",raised:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"danger",raised:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"contrast",raised:!0})]}),(0,t.jsx)(n.DocSectionCode,{code:u})]})}function x(e){let i=(0,p.useRouter)(),s=(0,d.useRef)(null),o=[{label:"Update",icon:"pi pi-refresh",command:()=>{s.current.show({severity:"success",summary:"Updated",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-times",command:()=>{s.current.show({severity:"warn",summary:"Delete",detail:"Data Deleted"})}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://reactjs.org/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{i.push("/fileupload")}}],l=()=>{s.current.show({severity:"success",summary:"Success",detail:"Data Saved"})},u={basic:`
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} raised text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" raised text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" raised text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" raised text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" raised text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" raised text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" raised text />
        `,javascript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function RaisedTextDemo() {
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" raised text />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function RaisedTextDemo() {
    //const router = useRouter();
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" raised text />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Text buttons can be displayed as raised as well for elevation."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,raised:!0,text:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"secondary",raised:!0,text:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"success",raised:!0,text:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"info",raised:!0,text:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"warning",raised:!0,text:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"help",raised:!0,text:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"danger",raised:!0,text:!0})]}),(0,t.jsx)(n.DocSectionCode,{code:u})]})}function j(e){let i=(0,p.useRouter)(),s=(0,d.useRef)(null),o=[{label:"Update",icon:"pi pi-refresh",command:()=>{s.current.show({severity:"success",summary:"Updated",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-times",command:()=>{s.current.show({severity:"warn",summary:"Delete",detail:"Data Deleted"})}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://reactjs.org/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{i.push("/fileupload")}}],l=()=>{s.current.show({severity:"success",summary:"Success",detail:"Data Saved"})},u={basic:`
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} rounded />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" rounded />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" rounded />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" rounded />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" rounded />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" rounded />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" rounded />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="contrast" rounded />
        `,javascript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function RoundedDemo() {
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="contrast" rounded />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function RoundedDemo() {
    //const router = useRouter();
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="contrast" rounded />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Rounded buttons have a circular border radius."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,rounded:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"secondary",rounded:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"success",rounded:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"info",rounded:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"warning",rounded:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"help",rounded:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"danger",rounded:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"contrast",rounded:!0})]}),(0,t.jsx)(n.DocSectionCode,{code:u})]})}function w(e){let i=(0,p.useRouter)(),s=(0,d.useRef)(null),o=[{label:"Update",icon:"pi pi-refresh",command:()=>{s.current.show({severity:"success",summary:"Updated",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-times",command:()=>{s.current.show({severity:"warn",summary:"Delete",detail:"Data Deleted"})}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://reactjs.org/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{i.push("/fileupload")}}],l=()=>{s.current.show({severity:"success",summary:"Success",detail:"Data Saved"})},u={basic:`
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="contrast" />
        `,javascript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function SeverityDemo() {
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="contrast" />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function SeverityDemo() {
    //const router = useRouter();
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="contrast" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Severity defines the type of button."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"secondary"}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"success"}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"info"}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"warning"}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"help"}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"danger"}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"contrast"})]}),(0,t.jsx)(n.DocSectionCode,{code:u})]})}function D(e){let i=(0,p.useRouter)(),s=(0,d.useRef)(null),o=[{label:"Update",icon:"pi pi-refresh",command:()=>{s.current.show({severity:"success",summary:"Updated",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-times",command:()=>{s.current.show({severity:"warn",summary:"Delete",detail:"Data Deleted"})}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://reactjs.org/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{i.push("/fileupload")}}],l=()=>{s.current.show({severity:"success",summary:"Success",detail:"Data Saved"})},u={basic:`
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} size="small" />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} size="large" />
        `,javascript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function SizesDemo() {
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} size="small" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} size="large" />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function SizesDemo() {
    //const router = useRouter();
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} size="small" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} size="large" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["SplitButton provides ",(0,t.jsx)("i",{children:"small"})," and ",(0,t.jsx)("i",{children:"large"})," sizes as alternatives to the standard."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap align-items-center justify-content-center gap-3",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,size:"small"}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,size:"large"})]}),(0,t.jsx)(n.DocSectionCode,{code:u})]})}function B(e){let i=(0,p.useRouter)(),s=(0,d.useRef)(null),o=[{label:"Update",icon:"pi pi-refresh",command:()=>{s.current.show({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:()=>{s.current.show({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://react.dev/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{i.push("/fileupload")}}],l={basic:`
<Toast ref={toast}></Toast>
<SplitButton label={<span>Prime React</span>} icon="pi pi-prime" model={items} severity="contrast" />
        `,javascript:`
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function TemplateDemo() {
    const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label={<span>Prime React</span>} icon="pi pi-prime" model={items} severity="contrast" />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function TemplateDemo() {
    const router = useRouter();
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label={<span>Prime React</span>} icon="pi pi-prime" model={items} severity="contrast" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["SplitButton has a ",(0,t.jsx)("i",{children:"label"})," and ",(0,t.jsx)("i",{children:"icon"})," properties that allows to define the main button."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsx)(r.SplitButton,{label:(0,t.jsx)("span",{children:"Prime React"}),icon:"pi pi-prime",model:o,severity:"contrast"})]}),(0,t.jsx)(n.DocSectionCode,{code:l})]})}function k(e){let i=(0,p.useRouter)(),s=(0,d.useRef)(null),o=[{label:"Update",icon:"pi pi-refresh",command:()=>{s.current.show({severity:"success",summary:"Updated",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-times",command:()=>{s.current.show({severity:"warn",summary:"Delete",detail:"Data Deleted"})}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://reactjs.org/"}},{label:"Upload",icon:"pi pi-upload",command:()=>{i.push("/fileupload")}}],l=()=>{s.current.show({severity:"success",summary:"Success",detail:"Data Saved"})},u={basic:`
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" text />
        `,javascript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function TextDemo() {
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" text />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function TextDemo() {
    //const router = useRouter();
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" text />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Text buttons are displayed as textual elements."})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-3",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,text:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"secondary",text:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"success",text:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"info",text:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"warning",text:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"help",text:!0}),(0,t.jsx)(r.SplitButton,{label:"Save",icon:"pi pi-plus",onClick:l,model:o,severity:"danger",text:!0})]}),(0,t.jsx)(n.DocSectionCode,{code:u})]})}function C(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-splitbutton"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-splitbutton-button"}),(0,t.jsx)("td",{children:"Dropdown button."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menu"}),(0,t.jsx)("td",{children:"Overlay menu."})]})]})]})})]})}var R=e.i(41158);function T(e){let i={basic:`
const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

const Tailwind = {  
    splitbutton: {
        root: ({ props }) => ({
            className: classNames('inline-flex relative', 'rounded-md', { 'shadow-lg': props.raised })
        }),
        button: {
            root: ({ parent }) => ({
                className: classNames('rounded-r-none border-r-0', { 'rounded-l-full': parent.props.rounded })
            }),
            icon: 'mr-2'
        },
        menu: {
            className: classNames('outline-none', 'm-0 p-0 list-none')
        },
        menulist: 'relative',
        menubutton: {
            root: ({ parent }) => ({
                className: classNames('rounded-l-none', { 'rounded-r-full': parent.props.rounded })
            }),
            label: 'hidden'
        }
    }
}
        `},s={javascript:`
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function UnstyledDemo() {
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center flex-wrap">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="mb-2" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" className="mb-2" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" className="mb-2" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" className="mb-2" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" className="mb-2" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" className="mb-2" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" className="mb-2" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="contrast" className="mb-2" />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(R.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(n.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(n.DocSectionCode,{code:s,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:h},{id:"pt.splitbutton.options",label:"SplitButton PT Options",component:i.default}];return(0,t.jsx)(s.DocComponent,{title:"React SplitButton Component",header:"SplitButton",description:"SplitButton groups a set of commands in an overlay with a default action item.",componentDocs:[{id:"import",label:"Import",component:S},{id:"basic",label:"Basic",component:u},{id:"icons",label:"Icons",component:v},{id:"severity",label:"Severity",component:w},{id:"loading",label:"Loading",component:f},{id:"disabled",label:"Disabled",component:m},{id:"raised",label:"Raised",component:y},{id:"rounded",label:"Rounded",component:j},{id:"text",label:"Text",component:k},{id:"raisedtext",label:"Raised Text",component:x},{id:"outlinedbuttons",label:"Outlined",component:b},{id:"sizes",label:"Sizes",component:D},{id:"template",label:"Template",component:B},{id:"accessibility",label:"Accessibility",component:l}],apiDocs:["SplitButton"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:C},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:T}]}]})}],92460)},23429,(e,t,i)=>{let s="/splitbutton";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(92460)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})}]);