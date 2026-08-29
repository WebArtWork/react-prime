(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,35971,e=>{"use strict";var t=e.i(91398),i=e.i(88850),a=e.i(82948),o=e.i(5180),r=e.i(28137);function s(){let e={basic:`
<SpeedDial aria-label="Options" />
    `};return(0,t.jsxs)(r.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["SpeedDial component renders a native button element that implicitly includes any passed prop. Text to describe the button can be defined with the ",(0,t.jsx)("i",{children:"aria-labelledby"})," or ",(0,t.jsx)("i",{children:"aria-label"})," props. Addititonally the button includes includes ",(0,t.jsx)("i",{children:"aria-haspopup"}),", ",(0,t.jsx)("i",{children:"aria-expanded"})," for states along with ",(0,t.jsx)("i",{children:"aria-controls"})," to define the relation between the popup and the button."]}),(0,t.jsxs)("p",{children:["The popup overlay uses ",(0,t.jsx)("i",{children:"menu"})," role on the list and each action item has a ",(0,t.jsx)("i",{children:"menuitem"})," role with an ",(0,t.jsx)("i",{children:"aria-label"})," as the menuitem label. The id of the menu refers to the ",(0,t.jsx)("i",{children:"aria-controls"})," of the button."]}),(0,t.jsx)(o.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Menu Button Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Toggles the visibility of the menu."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles the visibility of the menu."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Opens the menu and moves focus to the first item."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Opens the menu and moves focus to the last item."})]})]})]})}),(0,t.jsx)("h3",{children:"Menu Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Actives the menuitem, closes the menu and sets focus on the menu button."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the menu and sets focus on the menu button."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"arrow keys"})}),(0,t.jsx)("td",{children:"Navigates between the menu items."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Moves focus to the first item."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Moves focus to the last item."})]})]})]})})]})}var l=e.i(91788),d=e.i(10836),n=e.i(57724),c=e.i(15498),p=e.i(83955),m=e.i(92052),u=e.i(20728),h=e.i(60150),f=e.i(20484),b=e.i(71834),y=e.i(97876),x=e.i(46532),D=e.i(50901),v=e.i(45543),w=e.i(75366),j=e.i(51551),g=e.i(28653),S=e.i(3935);let R=`
@layer primereact {
    .p-speeddial {
        position: absolute;
        display: flex;
        z-index: 1;
    }

    .p-speeddial-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: top 0s linear 0.2s;
        pointer-events: none;
    }

    .p-speeddial-item {
        transform: scale(0);
        opacity: 0;
        transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;
        will-change: transform;
    }

    .p-speeddial-action {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        text-decoration: none;
    }

    .p-speeddial-action-icon {
        pointer-events: none;
    }

    .p-speeddial-circle .p-speeddial-item,
    .p-speeddial-semi-circle .p-speeddial-item,
    .p-speeddial-quarter-circle .p-speeddial-item {
        position: absolute;
    }

    .p-speeddial-rotate {
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        will-change: transform;
    }

    .p-speeddial-mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 250ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-speeddial-mask-visible {
        pointer-events: none;
        opacity: 1;
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-speeddial-opened .p-speeddial-list {
        pointer-events: auto;
    }

    .p-speeddial:not(.p-speeddial-opened) .p-speeddial-list {
        display: none;
    }

    .p-speeddial-opened .p-speeddial-item {
        transform: scale(1);
        opacity: 1;
    }

    .p-speeddial-opened .p-speeddial-rotate {
        transform: rotate(45deg);
    }
}
`,T=c.ComponentBase.extend({defaultProps:{__TYPE:"SpeedDial",id:null,model:null,visible:!1,style:null,className:null,direction:"up",transitionDelay:30,type:"linear",radius:0,mask:!1,disabled:!1,hideOnClickOutside:!0,buttonStyle:null,buttonClassName:null,buttonTemplate:null,"aria-label":null,ariaLabelledby:null,maskStyle:null,maskClassName:null,showIcon:null,hideIcon:null,rotateAnimation:!0,onVisibleChange:null,onClick:null,onShow:null,onHide:null,children:void 0},css:{classes:{root:({props:e,visible:t})=>(0,S.classNames)(`p-speeddial p-component p-speeddial-${e.type}`,{[`p-speeddial-direction-${e.direction}`]:"circle"!==e.type,"p-speeddial-opened":t,"p-disabled":e.disabled}),button:({props:e})=>(0,S.classNames)("p-speeddial-button p-button-rounded",{"p-speeddial-rotate":e.rotateAnimation&&!e.hideIcon}),mask:({visible:e})=>(0,S.classNames)("p-speeddial-mask",{"p-speeddial-mask-visible":e}),action:({disabled:e})=>(0,S.classNames)("p-speeddial-action",{"p-disabled":e}),actionIcon:({_icon:e})=>(0,S.classNames)("p-speeddial-action-icon",e),menu:"p-speeddial-list",menuitem:({active:e})=>(0,S.classNames)("p-speeddial-item",{"p-focus":e})},styles:R,inlineStyles:{root:({props:e})=>({alignItems:"up"===e.direction||"down"===e.direction?"center":"",justifyContent:"left"===e.direction||"right"===e.direction?"center":"",flexDirection:"up"===e.direction?"column-reverse":"down"===e.direction?"column":"left"===e.direction?"row-reverse":"right"===e.direction?"row":null}),menu:({props:e})=>({flexDirection:"up"===e.direction?"column-reverse":"down"===e.direction?"column":"left"===e.direction?"row-reverse":"right"===e.direction?"row":null})}}}),N=l.memo(l.forwardRef((e,i)=>{let a,o,r,s,R,N,U,A,C,k,[I,M]=l.useState(!1),[H,E]=l.useState(null),[W,q]=l.useState(!1),[P,$]=l.useState(-1),_=l.useRef(!1),O=l.useRef(null),F=l.useRef(null),z=(0,h.useMergeProps)(),L=l.useContext(d.PrimeReactContext),K=T.getProps(e,L),B=K.onVisibleChange?K.visible:I,X=(0,m.useDisplayOrder)("speed-dial",B),V={props:K,state:{visible:B}},{ptm:J,cx:Q,sx:G,isUnstyled:Y}=T.setMetaData(V);(0,c.useHandleStyle)(T.css.styles,Y,{name:"speeddial"}),(0,p.useGlobalOnEscapeKey)({callback:()=>{ea()},when:B&&X,priority:[p.ESC_KEY_HANDLING_PRIORITIES.SPEED_DIAL,X]});let[Z,ee]=(0,u.useEventListener)({type:"click",listener:e=>{!_.current&&ew(e)&&ea(),_.current=!1},when:I}),et=()=>{K.onVisibleChange?K.onVisibleChange(!0):M(!0),K.onShow&&K.onShow()},ei=()=>{q(!1),$(-1)},ea=()=>{K.onVisibleChange?K.onVisibleChange(!1):M(!1),K.onHide&&K.onHide()},eo=e=>{B?ea():et(),K.onClick&&K.onClick(e),_.current=!0},er=(e,t)=>{t.command&&t.command({originalEvent:e,item:t}),ea(),_.current=!0,e.preventDefault()},es=e=>{q(!0),v.DomHandler.focus(F.current),et(),ey(e),e.preventDefault()},el=e=>{q(!0),v.DomHandler.focus(F.current),et(),eb(e),e.preventDefault()},ed=e=>{let t=[...v.DomHandler.find(O.current,'[data-pc-section="menuitem"]')].findIndex(e=>e.id===P);er(e,K.model[t]),ei();let i=v.DomHandler.findSingle(O.current,"button");i&&v.DomHandler.focus(i)},en=()=>{ea();let e=v.DomHandler.findSingle(O.current,"button");e&&v.DomHandler.focus(e)},ec=e=>{let t=K.direction;"up"===t?eb(e):"down"===t?ey(e):eb(e)},ep=e=>{let t=K.direction;"up"===t?ey(e):"down"===t?eb(e):ey(e)},em=e=>{let t=K.direction;["left","up-right","down-left"].includes(t)?eb(e):(["right","up-left","down-right"].includes(t),ey(e))},eu=e=>{let t=K.direction;["left","up-right","down-left"].includes(t)?ey(e):(["right","up-left","down-right"].includes(t),eb(e))},eh=e=>{e.preventDefault(),$(-1),ey(e,-1)},ef=e=>{e.preventDefault(),$(-1),eb(e,-1)},eb=(e,t=null)=>{ex(ev(t||P)),e.preventDefault()},ey=(e,t=null)=>{ex(eD(t||P)),e.preventDefault()},ex=e=>{let t=[...v.DomHandler.find(O.current,'[data-pc-section="menuitem"]')].filter(e=>!v.DomHandler.hasClass(v.DomHandler.findSingle(e,"a"),"p-disabled"));t[e]&&$(t[e].getAttribute("id"))},eD=e=>{let t=[...v.DomHandler.find(O.current,'[data-pc-section="menuitem"]')].filter(e=>!v.DomHandler.hasClass(v.DomHandler.findSingle(e,"a"),"p-disabled")),i=-1===e?t[t.length-1].id:e,a=t.findIndex(e=>e.getAttribute("id")===i);return -1===e?t.length-1:a-1},ev=e=>{let t=[...v.DomHandler.find(O.current,'[data-pc-section="menuitem"]')].filter(e=>!v.DomHandler.hasClass(v.DomHandler.findSingle(e,"a"),"p-disabled")),i=-1===e?t[0].id:e,a=t.findIndex(e=>e.getAttribute("id")===i);return -1===e?0:a+1},ew=e=>O.current&&!(O.current.isSameNode(e.target)||O.current.contains(e.target));(0,f.useMountEffect)(()=>{if("linear"!==K.type){let e=v.DomHandler.findSingle(O.current,".p-speeddial-button"),t=v.DomHandler.findSingle(F.current,".p-speeddial-item");if(e&&t){let i=Math.abs(e.offsetWidth-t.offsetWidth),a=Math.abs(e.offsetHeight-t.offsetHeight);F.current.style.setProperty("--item-diff-x",`${i/2}px`),F.current.style.setProperty("--item-diff-y",`${a/2}px`)}}}),(0,b.useUpdateEffect)(()=>(I&&K.hideOnClickOutside&&Z(),()=>{K.hideOnClickOutside&&ee()}),[I]),l.useImperativeHandle(i,()=>({props:K,show:et,hide:ea,getElement:()=>O.current}));l.useEffect(()=>{E(K.id||(0,g.UniqueComponentId)())},[K.id]);let ej=(a=!B&&!!K.showIcon||!K.hideIcon,o=B&&!!K.hideIcon,r=(0,S.classNames)("p-speeddial-button p-button-rounded",{"p-speeddial-rotate":K.rotateAnimation&&!K.hideIcon},K.buttonClassName),s=(0,S.classNames)({[`${K.showIcon}`]:!B&&!!K.showIcon||!K.hideIcon,[`${K.hideIcon}`]:B&&!!K.hideIcon}),R=a?K.showIcon||(0,t.jsx)(x.PlusIcon,{}):o?K.hideIcon||(0,t.jsx)(y.MinusIcon,{}):null,N=w.IconUtils.getJSXIcon(R,void 0,{props:K,visible:B}),U=z({type:"button",style:K.buttonStyle,className:(0,S.classNames)(K.buttonClassName,Q("button")),icon:N,onClick:e=>eo(e),disabled:K.disabled,onKeyDown:e=>{switch(e.code){case"ArrowDown":case"ArrowLeft":el(e);break;case"ArrowUp":case"ArrowRight":es(e);break;case"Escape":en()}},"aria-label":K["aria-label"],"aria-expanded":B,"aria-haspopup":!0,"aria-controls":()=>{let e="";for(let t=0;t<K.model.length;t++)e+=`${H}_${t} `;return e.trim()},"aria-labelledby":K.ariaLabelledby,pt:J("button"),unstyled:K.unstyled,__parentMetadata:{parent:V}}),A=(0,t.jsx)(n.Button,{...U}),K.buttonTemplate?j.ObjectUtils.getJSXElement(K.buttonTemplate,{onClick:eo,className:r,iconClassName:s,element:A,props:K,visible:B}):A),eg=(C=K.model?K.model.map((e,i)=>{let a,o;if(!1===e.visible)return null;let{disabled:r,icon:s,label:d,template:n,url:c,target:p,className:m,style:u}=e,h=(0,S.classNames)("p-speeddial-action",{"p-disabled":r}),f=(0,S.classNames)("p-speeddial-action-icon",s),b=z({className:Q("actionIcon")},J("actionIcon")),y=z({href:c||"#",role:"menuitem",className:(0,S.classNames)(m,Q("action",{disabled:r})),"aria-label":e.label,style:u,target:p,tabIndex:"-1","data-pr-tooltip":d,onClick:t=>er(t,e)},J("action")),x=w.IconUtils.getJSXIcon(s,{...b},{props:K}),v=(0,t.jsxs)("a",{...y,children:[x,(0,t.jsx)(D.Ripple,{})]});if(n){let t={onClick:t=>er(t,e),className:h,iconClassName:f,element:v,props:K,visible:B};v=j.ObjectUtils.getJSXElement(n,e,t)}let g=z({id:`${H}_${i}`,className:Q("menuitem",{active:P===`${H}_${i}`}),style:(a=K.model.length,o=(B?i:a-i-1)*K.transitionDelay,{transitionDelay:`${o}ms`,...(e=>{let t=K.type;if("linear"!==t){let i=K.model.length,a=K.radius||20*i;if("circle"===t){let t=2*Math.PI/i;return{left:`calc(${a*Math.cos(t*e)}px + var(--item-diff-x, 0px))`,top:`calc(${a*Math.sin(t*e)}px + var(--item-diff-y, 0px))`}}if("semi-circle"===t){let t=K.direction,o=Math.PI/(i-1),r=`calc(${a*Math.cos(o*e)}px + var(--item-diff-x, 0px))`,s=`calc(${a*Math.sin(o*e)}px + var(--item-diff-y, 0px))`;if("up"===t)return{left:r,bottom:s};if("down"===t)return{left:r,top:s};if("left"===t)return{right:s,top:r};else if("right"===t)return{left:s,top:r}}else if("quarter-circle"===t){let t=K.direction,o=Math.PI/(2*(i-1)),r=`calc(${a*Math.cos(o*e)}px + var(--item-diff-x, 0px))`,s=`calc(${a*Math.sin(o*e)}px + var(--item-diff-y, 0px))`;if("up-left"===t)return{right:r,bottom:s};if("up-right"===t)return{left:r,bottom:s};if("down-left"===t)return{right:s,top:r};else if("down-right"===t)return{left:s,top:r}}}return{}})(i)}),role:"menuitem"},J("menuitem"));return(0,l.createElement)("li",{...g,key:`${H}_${i}`},v)}):null,k=z({ref:F,className:Q("menu"),style:G("menu"),role:"menu",tabIndex:"-1",onFocus:()=>{q(!0)},onKeyDown:e=>{switch(e.code){case"ArrowDown":ep(e);break;case"ArrowUp":ec(e);break;case"ArrowLeft":em(e);break;case"ArrowRight":eu(e);break;case"Enter":case"NumpadEnter":case"Space":ed(e);break;case"Escape":en();break;case"Home":ef(e);break;case"End":eh(e)}},onBlur:ei,"aria-activedescendant":W?-1!==P?P:null:void 0},J("menu")),(0,t.jsx)("ul",{...k,children:C})),eS=(()=>{if(K.mask){let e=z({className:(0,S.classNames)(K.maskClassName,Q("mask",{visible:B})),style:K.maskStyle},J("mask"));return(0,t.jsx)("div",{...e})}return null})(),eR=z({className:(0,S.classNames)(K.className,Q("root",{visible:B})),style:{...K.style,...G("root")},id:H},T.getOtherProps(K),J("root"));return(0,t.jsxs)(l.Fragment,{children:[(0,t.jsxs)("div",{ref:O,...eR,children:[ej,eg]}),eS]})}));N.displayName="SpeedDial";var U=e.i(29363),A=e.i(3828);function C(e){let i=(0,l.useRef)(null),a=(0,A.useRouter)(),s=[{label:"Add",icon:"pi pi-pencil",command:()=>{i.current.show({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{i.current.show({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{i.current.show({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{a.push("/fileupload")}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://react.dev/"}}],d={basic:`
<Toast ref={toast} />
<SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
        `,javascript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';

export default function CircleDemo() {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ height: '500px' }} className="flex align-items-center justify-content-center">
                <Toast ref={toast} />
                <SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';
import { MenuItem } from 'primereact/menuitem';

export default function CircleDemo() {
    const toast = useRef<Toast>(null);
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ height: '500px' }} className="flex align-items-center justify-content-center">
                <Toast ref={toast} />
                <SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Items can be displayed around the button when ",(0,t.jsx)("i",{children:"type"})," is set to ",(0,t.jsx)("i",{children:"circle"}),". Additional ",(0,t.jsx)("i",{children:"radius"})," property defines the radius of the circle."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{style:{height:"500px"},className:"flex align-items-center justify-content-center",children:[(0,t.jsx)(U.Toast,{ref:i}),(0,t.jsx)(N,{model:s,radius:80,type:"circle",buttonClassName:"p-button-warning"})]})}),(0,t.jsx)(o.DocSectionCode,{code:d})]})}function k(e){let i=(0,l.useRef)(null),a=(0,A.useRouter)(),s=[{label:"Add",icon:"pi pi-pencil",command:()=>{i.current.show({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{i.current.show({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{i.current.show({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{a.push("/fileupload")}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://react.dev/"}}],d={basic:`
<Toast ref={toast} />
<SpeedDial model={items} direction="up" transitionDelay={80} showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined" />
        `,javascript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';

export default function CustomDemo() {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '350px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} direction="up" transitionDelay={80} showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined" />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/router';
import { MenuItem } from 'primereact/menuitem';

export default function CustomDemo() {
    const toast = useRef<Toast>(null);
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '350px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} direction="up" transitionDelay={80} showIcon="pi pi-bars" hideIcon="pi pi-times" buttonClassName="p-button-outlined" />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["SpeedDial sample with an outlined button, custom icons and ",(0,t.jsx)("i",{children:"transitionDelay"}),"."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{className:"flex align-items-end justify-content-center",style:{height:"350px"},children:[(0,t.jsx)(U.Toast,{ref:i}),(0,t.jsx)(N,{model:s,direction:"up",transitionDelay:80,showIcon:"pi pi-bars",hideIcon:"pi pi-times",buttonClassName:"p-button-outlined"})]})}),(0,t.jsx)(o.DocSectionCode,{code:d})]})}function I(e){let i={basic:`
import { SpeedDial } from 'primereact/speeddial';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function M(e){let i=(0,l.useRef)(null),a=(0,A.useRouter)(),s=[{label:"Add",icon:"pi pi-pencil",command:()=>{i.current.show({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{i.current.show({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{i.current.show({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{a.push("/fileupload")}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://react.dev/"}}],d={basic:`
<Toast ref={toast} />
<SpeedDial model={items} direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
<SpeedDial model={items} direction="down" style={{ left: 'calc(50% - 2rem)', top: 0 }} />
<SpeedDial model={items} direction="left" style={{ top: 'calc(50% - 2rem)', right: 0 }} />
<SpeedDial model={items} direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
        `,javascript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/router';

export default function LinearDemo() {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '500px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
                <SpeedDial model={items} direction="down" style={{ left: 'calc(50% - 2rem)', top: 0 }} />
                <SpeedDial model={items} direction="left" style={{ top: 'calc(50% - 2rem)', right: 0 }} />
                <SpeedDial model={items} direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { MenuItem } from 'primereact/menuitem';
import { useRouter } from 'next/router';

export default function LinearDoc() {
    const toast = useRef<Toast>(null);
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '500px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
                <SpeedDial model={items} direction="down" style={{ left: 'calc(50% - 2rem)', top: 0 }} />
                <SpeedDial model={items} direction="left" style={{ top: 'calc(50% - 2rem)', right: 0 }} />
                <SpeedDial model={items} direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["SpeedDial items are defined with the ",(0,t.jsx)("i",{children:"model"})," property based on MenuModel API. Default orientation of the items is linear and ",(0,t.jsx)("i",{children:"direction"})," property is used to define the position of the items related to the button."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{style:{position:"relative",height:"500px"},children:[(0,t.jsx)(U.Toast,{ref:i}),(0,t.jsx)(N,{model:s,direction:"up",style:{left:"calc(50% - 2rem)",bottom:0}}),(0,t.jsx)(N,{model:s,direction:"down",style:{left:"calc(50% - 2rem)",top:0}}),(0,t.jsx)(N,{model:s,direction:"left",style:{top:"calc(50% - 2rem)",right:0}}),(0,t.jsx)(N,{model:s,direction:"right",style:{top:"calc(50% - 2rem)",left:0}})]})}),(0,t.jsx)(o.DocSectionCode,{code:d})]})}function H(e){let i=(0,l.useRef)(null),a=(0,A.useRouter)(),s=[{label:"Add",icon:"pi pi-pencil",command:()=>{i.current.show({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{i.current.show({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{i.current.show({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{a.push("/fileupload")}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://react.dev/"}}],d={basic:`
<Toast ref={toast} />
<SpeedDial mask model={items} radius={120} direction="up" style={{ right: 0, bottom: 0 }} />
        `,javascript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';

export default function MaskDemo() {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '350px' }}>
                <Toast ref={toast} />
                <SpeedDial mask model={items} radius={120} direction="up" style={{ right: 0, bottom: 0 }} />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/router';
import { MenuItem } from 'primereact/menuitem';

export default function MaskDemo() {
    const toast = useRef<Toast>(null);
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '350px' }}>
                <Toast ref={toast} />
                <SpeedDial mask model={items} radius={120} direction="up" style={{ right: 0, bottom: 0 }} />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Adding ",(0,t.jsx)("i",{children:"mask"})," property displays a modal layer behind the popup items."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{style:{position:"relative",height:"350px"},children:[(0,t.jsx)(U.Toast,{ref:i}),(0,t.jsx)(N,{mask:!0,model:s,radius:120,direction:"up",style:{right:0,bottom:0}})]})}),(0,t.jsx)(o.DocSectionCode,{code:d})]})}let E=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/speeddial.jpg",alt:"speeddial"})})]});function W(e){let i=(0,l.useRef)(null),a=(0,A.useRouter)(),s=[{label:"Add",icon:"pi pi-pencil",command:()=>{i.current.show({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{i.current.show({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{i.current.show({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{a.push("/fileupload")}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://react.dev/"}}],d={basic:`
<Toast ref={toast} />
<SpeedDial model={items} radius={120} type="quarter-circle" direction="up-left" style={{ right: 0, bottom: 0 }} />
<SpeedDial model={items} radius={120} type="quarter-circle" direction="up-right" style={{ left: 0, bottom: 0 }} />
<SpeedDial model={items} radius={120} type="quarter-circle" direction="down-left" style={{ right: 0, top: 0 }} />
<SpeedDial model={items} radius={120} type="quarter-circle" direction="down-right" style={{ left: 0, top: 0 }} />
        `,javascript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';

export default function QuarterCircleDemo() {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '500px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-left" style={{ right: 0, bottom: 0 }} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-right" style={{ left: 0, bottom: 0 }} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="down-left" style={{ right: 0, top: 0 }} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="down-right" style={{ left: 0, top: 0 }} />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/router';
import { MenuItem } from 'primereact/menuitem';

export default function QuarterCircleDemo() {
    const toast = useRef<Toast>(null);
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '500px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-left" style={{ right: 0, bottom: 0 }} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-right" style={{ left: 0, bottom: 0 }} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="down-left" style={{ right: 0, top: 0 }} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="down-right" style={{ left: 0, top: 0 }} />
            </div>
        </div>
    )
}`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Setting ",(0,t.jsx)("i",{children:"type"})," as ",(0,t.jsx)("i",{children:"quarter-circle"})," displays the items at one of four corners of a button based on the ",(0,t.jsx)("i",{children:"direction"}),"."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{style:{position:"relative",height:"500px"},children:[(0,t.jsx)(U.Toast,{ref:i}),(0,t.jsx)(N,{model:s,radius:120,type:"quarter-circle",direction:"up-left",style:{right:0,bottom:0}}),(0,t.jsx)(N,{model:s,radius:120,type:"quarter-circle",direction:"up-right",style:{left:0,bottom:0}}),(0,t.jsx)(N,{model:s,radius:120,type:"quarter-circle",direction:"down-left",style:{right:0,top:0}}),(0,t.jsx)(N,{model:s,radius:120,type:"quarter-circle",direction:"down-right",style:{left:0,top:0}})]})}),(0,t.jsx)(o.DocSectionCode,{code:d})]})}function q(e){let i=(0,l.useRef)(null),a=(0,A.useRouter)(),s=[{label:"Add",icon:"pi pi-pencil",command:()=>{i.current.show({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{i.current.show({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{i.current.show({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{a.push("/fileupload")}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://react.dev/"}}],d={basic:`
<Toast ref={toast} />
<SpeedDial model={items} radius={80} type="semi-circle" direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
<SpeedDial model={items} radius={80} type="semi-circle" direction="down" style={{ left: 'calc(50% - 2rem)', top: 0 }} />
<SpeedDial model={items} radius={80} type="semi-circle" direction="left" style={{ top: 'calc(50% - 2rem)', right: 0 }} />
<SpeedDial model={items} radius={80} type="semi-circle" direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
        `,javascript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';

export default function SemiCircleDemo() {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '500px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="down" style={{ left: 'calc(50% - 2rem)', top: 0 }} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="left" style={{ top: 'calc(50% - 2rem)', right: 0 }} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/router';
import { MenuItem } from 'primereact/menuitem';

export default function SemiCircleDemo() {
    const toast = useRef<Toast>(null);
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '500px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="down" style={{ left: 'calc(50% - 2rem)', top: 0 }} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="left" style={{ top: 'calc(50% - 2rem)', right: 0 }} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"type"})," is defined as ",(0,t.jsx)("i",{children:"semi-circle"}),", items are displayed in a half-circle around the button."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{style:{position:"relative",height:"500px"},children:[(0,t.jsx)(U.Toast,{ref:i}),(0,t.jsx)(N,{model:s,radius:80,type:"semi-circle",direction:"up",style:{left:"calc(50% - 2rem)",bottom:0}}),(0,t.jsx)(N,{model:s,radius:80,type:"semi-circle",direction:"down",style:{left:"calc(50% - 2rem)",top:0}}),(0,t.jsx)(N,{model:s,radius:80,type:"semi-circle",direction:"left",style:{top:"calc(50% - 2rem)",right:0}}),(0,t.jsx)(N,{model:s,radius:80,type:"semi-circle",direction:"right",style:{top:"calc(50% - 2rem)",left:0}})]})}),(0,t.jsx)(o.DocSectionCode,{code:d})]})}function P(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-speeddial"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-speeddial-button"}),(0,t.jsx)("td",{children:"Button element of speeddial."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-speeddial-mask"}),(0,t.jsx)("td",{children:"Mask element of speeddial."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-speeddial-list"}),(0,t.jsx)("td",{children:"List of the actions."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-speeddial-item"}),(0,t.jsx)("td",{children:"Each action item of list."})]})]})]})})]})}var $=e.i(41158);function _(e){let i={basic:`
const Tailwind = {         
    speeddial: {
        root: 'absolute flex',
        button: {
            root: ({ state }) => ({
                className: classNames('w-16 !h-16 !rounded-full justify-center z-10', {
                    'rotate-45': state.visible
                })
            }),
            label: {
                className: 'hidden'
            }
        },
        menu: 'm-0 p-0 list-none flex items-center justify-center transition delay-200 z-20',
        menuitem: ({ props, state }) => ({
            className: classNames(
                'transform transition-transform duration-200 ease-out transition-opacity duration-800',
                !state.visible ? 'opacity-0 scale-0' : 'opacity-1 scale-100',
                {
                    'my-1 first:mb-2': props.direction == 'up' && props.type == 'linear',
                    'my-1 first:mt-2': props.direction == 'down' && props.type == 'linear',
                    'mx-1 first:mr-2': props.direction == 'left' && props.type == 'linear',
                    'mx-1 first:ml-2': props.direction == 'right' && props.type == 'linear'
                },
                { absolute: props.type !== 'linear' }
            )
        }),
        action: {
            className: classNames('flex items-center justify-center rounded-full relative overflow-hidden', 'w-12 h-12 bg-gray-700 hover:bg-gray-800 text-white')
        },
        mask: ({ state }) => ({
            className: classNames('absolute left-0 top-0 w-full h-full transition-opacity duration-250 ease-in-out bg-black/40 z-0', {
                'opacity-0': !state.visible,
                'pointer-events-none opacity-100 transition-opacity duration-400 ease-in-out': state.visible
            })
        })
    }
}
        `},a={javascript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';

export default function UnstyledDemo() {
    const toast = useRef(null);
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '500px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
                <SpeedDial model={items} direction="down" style={{ left: 'calc(50% - 2rem)', top: 0 }} />
                <SpeedDial model={items} direction="left" style={{ top: 'calc(50% - 2rem)', right: 0 }} />
                <SpeedDial model={items} direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
            </div>
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)($.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(o.DocSectionCode,{code:a,embedded:!0})]})})}var O=e.i(64691);function F(e){let i=(0,l.useRef)(null),a=(0,A.useRouter)(),s=[{label:"Add",icon:"pi pi-pencil",command:()=>{i.current.show({severity:"info",summary:"Add",detail:"Data Added"})}},{label:"Update",icon:"pi pi-refresh",command:()=>{i.current.show({severity:"success",summary:"Update",detail:"Data Updated"})}},{label:"Delete",icon:"pi pi-trash",command:()=>{i.current.show({severity:"error",summary:"Delete",detail:"Data Deleted"})}},{label:"Upload",icon:"pi pi-upload",command:()=>{a.push("/fileupload")}},{label:"React Website",icon:"pi pi-external-link",command:()=>{window.location.href="https://react.dev/"}}],d={basic:`
<Toast ref={toast} />
<Tooltip target=".speeddial-bottom-right .p-speeddial-action" position="left" />
<SpeedDial model={items} direction="up" className="speeddial-bottom-right right-0 bottom-0" buttonClassName="p-button-danger" />

<Tooltip target=".speeddial-bottom-left .p-speeddial-action" />
<SpeedDial model={items} direction="up" className="speeddial-bottom-left left-0 bottom-0" buttonClassName="p-button-help" />
        `,javascript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';

export default function TooltipDemo() {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '350px' }}>
                <Toast ref={toast} />
                <Tooltip target=".speeddial-bottom-right .p-speeddial-action" position="left" />
                <SpeedDial model={items} direction="up" className="speeddial-bottom-right right-0 bottom-0" buttonClassName="p-button-danger" />
                <Tooltip target=".speeddial-bottom-left .p-speeddial-action" />
                <SpeedDial model={items} direction="up" className="speeddial-bottom-left left-0 bottom-0" buttonClassName="p-button-help" />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/router';
import { MenuItem } from 'primereact/menuitem';

export default function TooltipDoc() {
    const toast = useRef<Toast>(null);
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '350px' }}>
                <Toast ref={toast} />
                <Tooltip target=".speeddial-bottom-right .p-speeddial-action" position="left" />
                <SpeedDial model={items} direction="up" className="speeddial-bottom-right right-0 bottom-0" buttonClassName="p-button-danger" />
                <Tooltip target=".speeddial-bottom-left .p-speeddial-action" />
                <SpeedDial model={items} direction="up" className="speeddial-bottom-left left-0 bottom-0" buttonClassName="p-button-help" />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Items display a tooltip on hober when a standalone ",(0,t.jsx)($.default,{href:"/tooltip",children:"Tooltip"})," is present with a target that matches the items."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{style:{position:"relative",height:"350px"},children:[(0,t.jsx)(U.Toast,{ref:i}),(0,t.jsx)(O.Tooltip,{target:".speeddial-bottom-right .p-speeddial-action",position:"left"}),(0,t.jsx)(N,{model:s,direction:"up",className:"speeddial-bottom-right right-0 bottom-0",buttonClassName:"p-button-danger"}),(0,t.jsx)(O.Tooltip,{target:".speeddial-bottom-left .p-speeddial-action"}),(0,t.jsx)(N,{model:s,direction:"up",className:"speeddial-bottom-left left-0 bottom-0",buttonClassName:"p-button-help"})]})}),(0,t.jsx)(o.DocSectionCode,{code:d})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:E},{id:"pt.speeddial.options",label:"SpeedDial PT Options",component:i.default}];return(0,t.jsx)(a.DocComponent,{title:"React Speed Dial Component",header:"Speed Dial",description:"SpeedDial is a floating button with a popup menu.",componentDocs:[{id:"import",label:"Import",component:I},{id:"linear",label:"Linear",component:M},{id:"circle",label:"Circle",component:C},{id:"semicircle",label:"Semi Circle",component:q},{id:"quartercircle",label:"Quarter Circle",component:W},{id:"tooltip",label:"Tooltip",component:F},{id:"mask",label:"Mask",component:H},{id:"custom",label:"Custom",component:k},{id:"accessibility",label:"Accessibility",component:s}],apiDocs:["SpeedDial"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:P},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:_}]}]})}],35971)},76753,(e,t,i)=>{let a="/speeddial";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(35971)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);