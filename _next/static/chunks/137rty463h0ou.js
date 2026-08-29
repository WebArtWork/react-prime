(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,44421,e=>{"use strict";var i=e.i(91398),t=e.i(88850),o=e.i(82948),a=e.i(28137);function s(){return(0,i.jsxs)(a.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,i.jsx)("h3",{children:"Screen Reader"}),(0,i.jsxs)("p",{children:["Dock component uses the ",(0,i.jsx)("i",{children:"menu"})," role with the ",(0,i.jsx)("i",{children:"aria-orientation"})," and the value to describe the menu can either be provided with ",(0,i.jsx)("i",{children:"aria-labelledby"})," or ",(0,i.jsx)("i",{children:"aria-label"})," props. Each list item has a ",(0,i.jsx)("i",{children:"presentation"})," role whereas anchor elements have a ",(0,i.jsx)("i",{children:"menuitem"})," role with ",(0,i.jsx)("i",{children:"aria-label"})," referring to the label of the item and ",(0,i.jsx)("i",{children:"aria-disabled"})," defined if the item is disabled."]}),(0,i.jsx)("h3",{children:"Keyboard Support"}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Key"}),(0,i.jsx)("th",{children:"Function"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"tab"})}),(0,i.jsx)("td",{children:"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{children:[(0,i.jsx)("i",{children:"shift"})," + ",(0,i.jsx)("i",{children:"tab"})]}),(0,i.jsx)("td",{children:"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"enter"})}),(0,i.jsx)("td",{children:"Activates the focused menuitem."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"space"})}),(0,i.jsx)("td",{children:"Activates the focused menuitem."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"down arrow"})}),(0,i.jsx)("td",{children:"Moves focus to the next menuitem in vertical layout."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"up arrow"})}),(0,i.jsx)("td",{children:"Moves focus to the previous menuitem in vertical layout."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"home"})}),(0,i.jsx)("td",{children:"Moves focus to the first menuitem in horizontal layout."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"end"})}),(0,i.jsx)("td",{children:"Moves focus to the last menuitem in horizontal layout."})]})]})]})})]})}var r=e.i(5180),n=e.i(4242),l=e.i(10836),c=e.i(61149),d=e.i(91788),p=e.i(15498),m=e.i(60150),u=e.i(20484),h=e.i(50901),g=e.i(45543),f=e.i(75366),b=e.i(51551),k=e.i(28653),v=e.i(3935);let x=`
@layer primereact {
    .p-dock {
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }

    .p-dock-list-container {
        display: flex;
        pointer-events: auto;
    }

    .p-dock-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
    }

    .p-dock-magnification .p-dock-item {
        transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
    }

    .p-dock-action {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        cursor: default;
    }

    .p-dock-magnification .p-dock-item-second-prev,
    .p-dock-magnification .p-dock-item-second-next {
        transform: scale(1.2);
    }

    .p-dock-magnification .p-dock-item-prev,
    .p-dock-magnification .p-dock-item-next {
        transform: scale(1.4);
    }

    .p-dock-magnification .p-dock-item-current {
        transform: scale(1.6);
        z-index: 1;
    }

    /* Position */
    /* top */
    .p-dock-top {
        left: 0;
        top: 0;
        width: 100%;
    }

    .p-dock-top.p-dock-magnification .p-dock-item {
        transform-origin: center top;
    }

    .p-dock-top .p-dock-list-container {
        flex-direction: column-reverse;
    }

    /* bottom */
    .p-dock-bottom {
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .p-dock-bottom.p-dock-magnification .p-dock-item {
        transform-origin: center bottom;
    }

    .p-dock-bottom .p-dock-list-container {
        flex-direction: column;
    }

    /* right */
    .p-dock-right {
        right: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-right.p-dock-magnification .p-dock-item {
        transform-origin: center right;
    }

    .p-dock-right .p-dock-list {
        flex-direction: column;
    }

    /* left */
    .p-dock-left {
        left: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-left.p-dock-magnification .p-dock-item {
        transform-origin: center left;
    }

    .p-dock-left .p-dock-list {
        flex-direction: column;
    }

    .p-dock-left .p-dock-list-container {
        flex-direction: row-reverse;
    }
}
`,w=p.ComponentBase.extend({defaultProps:{__TYPE:"Dock",id:null,style:null,className:null,model:null,tabIndex:0,onFocus:null,onBlur:null,position:"bottom",magnification:!0,header:null,footer:null,children:void 0},css:{classes:{icon:"p-dock-action-icon",action:({disabled:e})=>(0,v.classNames)("p-dock-action",{"p-disabled":e}),menuitem:({currentIndexState:e,index:i,active:t})=>(0,v.classNames)("p-dock-item",{"p-dock-item-second-prev":e-2===i,"p-dock-item-prev":e-1===i,"p-dock-item-current":e===i,"p-dock-item-next":e+1===i,"p-dock-item-second-next":e+2===i,"p-focus":t}),content:"p-menuitem-content",header:"p-dock-header",menu:"p-dock-list",footer:"p-dock-footer",root:({props:e})=>(0,v.classNames)(`p-dock p-component p-dock-${e.position}`,{"p-dock-magnification":e.magnification}),container:"p-dock-list-container"},styles:x}}),j=d.memo(d.forwardRef((e,t)=>{let o,a,[s,r]=d.useState(-3),[n,c]=d.useState(!1),[x,j]=d.useState(-1),y=(0,m.useMergeProps)(),D=d.useContext(l.PrimeReactContext),T=w.getProps(e,D),[S,N]=d.useState(T.id),{ptm:F,cx:I,isUnstyled:R}=w.setMetaData({props:T,state:{id:S,currentIndex:s}}),P=d.useRef(null),E=d.useRef(null);(0,p.useHandleStyle)(w.css.styles,R,{name:"dock"});let A=(e,i,t)=>F(e,{context:{index:t,item:i}}),C=(e,i)=>{i.command&&i.command({originalEvent:e,item:i}),e.preventDefault()},H=()=>{L(O(x))},M=()=>{L(_(x))},B=()=>{L(0)},z=()=>{L(g.DomHandler.find(E.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1)},U=()=>{let e=g.DomHandler.findSingle(E.current,`li[id="${x}"]`),i=e&&g.DomHandler.findSingle(e,'[data-pc-section="action"]');i?i.click():e&&e.click()},O=e=>{let i=[...g.DomHandler.find(E.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(i=>i.id===e);return i>-1?i+1:0},_=e=>{let i=[...g.DomHandler.find(E.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(i=>i.id===e);return i>-1?i-1:0},L=e=>{let i=g.DomHandler.find(E.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),t=e>=i.length?i.length-1:e<0?0:e;j(i[t].getAttribute("id"))};(0,u.useMountEffect)(()=>{S||N((0,k.UniqueComponentId)())}),d.useImperativeHandle(t,()=>({props:T,getElement:()=>P.current}));let V=(()=>{if(T.header){let e=b.ObjectUtils.getJSXElement(T.header,{props:T}),t=y({className:I("header")},F("header"));return(0,i.jsx)("div",{...t,children:e})}return null})(),G=(o=T.model?T.model.map((e,t)=>{if(!1===e.visible)return null;let{disabled:o,icon:a,label:n,template:l,url:c,target:p}=e,m=e.id||S+"_"+t,u=(0,v.classNames)("p-dock-action",{"p-disabled":o}),g=(0,v.classNames)("p-dock-action-icon",a),k=y({className:I("icon")},A("icon",e,t)),w=f.IconUtils.getJSXIcon(a,{...k},{props:T}),j=y({href:c||"#",onFocus:e=>e.stopPropagation(),className:I("action",{disabled:o}),tabIndex:-1,target:p,"data-pr-tooltip":n,onClick:i=>C(i,e)},A("action",e,t)),D=(0,i.jsxs)("a",{...j,children:[w,(0,i.jsx)(h.Ripple,{})]});if(l){let i={onClick:i=>C(i,e),className:u,iconClassName:g,"aria-hidden":"true",tabIndex:-1,element:D,props:T,index:t};D=b.ObjectUtils.getJSXElement(l,e,i)}let N=y({className:I("content")},A("content",e,t)),F=m===x,R=y({id:m,role:"menuitem","aria-label":n,"aria-disabled":o,"data-p-focused":F,"data-p-disabled":o||!1,className:I("menuitem",{currentIndexState:s,index:t,active:m===x}),role:"none",onMouseEnter:()=>{r(t)}},A("menuitem",e,t));return(0,d.createElement)("li",{...R,key:m},(0,i.jsx)("div",{...N,children:D}))}):null,a=y({ref:E,className:I("menu"),role:"menu","aria-orientation":"bottom"===T.position||"top"===T.position?"horizontal":"vertical","aria-activedescendant":n?-1!==x?x:null:void 0,tabIndex:T.tabIndex||0,onFocus:e=>{c(!0),L(0),T.onFocus&&T.onFocus(e)},onBlur:e=>{c(!1),j(-1),T.onBlur&&T.onBlur(e)},onKeyDown:e=>{switch(e.code){case"ArrowDown":("left"===T.position||"right"===T.position)&&H(),e.preventDefault();break;case"ArrowUp":("left"===T.position||"right"===T.position)&&M(),e.preventDefault();break;case"ArrowRight":("top"===T.position||"bottom"===T.position)&&H(),e.preventDefault();break;case"ArrowLeft":("top"===T.position||"bottom"===T.position)&&M(),e.preventDefault();break;case"Home":B(),e.preventDefault();break;case"End":z(),e.preventDefault();break;case"Enter":case"NumpadEnter":case"Space":U(),e.preventDefault()}},onMouseLeave:()=>{r(-3)}},F("menu")),(0,i.jsx)("ul",{...a,children:o})),J=(()=>{if(T.footer){let e=b.ObjectUtils.getJSXElement(T.footer,{props:T}),t=y({className:I("footer")},F("footer"));return(0,i.jsx)("div",{...t,children:e})}return null})(),W=y({className:(0,v.classNames)(T.className,I("root")),style:T.style},w.getOtherProps(T),F("root")),X=y({className:I("container")},F("container"));return(0,i.jsx)("div",{id:T.id,ref:P,...W,children:(0,i.jsxs)("div",{...X,children:[V,G,J]})})}));j.displayName="Dock";var y=e.i(63967),D=e.i(10896),T=e.i(2723),S=e.i(60336),N=e.i(29363),F=e.i(64691),I=e.i(82857),R=e.i(57345),P=e.i(72859);function E(e){let[t,o]=(0,d.useState)(!1),[s,p]=(0,d.useState)(!1),[m,u]=(0,d.useState)(null),[h,g]=(0,d.useState)(null),f=(0,d.useRef)(null),b=(0,d.useRef)(null),k=(0,d.useRef)(null),v=(0,d.useContext)(l.PrimeReactContext),x=[{label:"Finder",icon:()=>(0,i.jsx)("img",{alt:"Finder",src:"https://primefaces.org/cdn/primereact/images/dock/finder.svg",width:"100%"}),command:()=>{p(!0)}},{label:"Terminal",icon:()=>(0,i.jsx)("img",{alt:"Finder",src:"https://primefaces.org/cdn/primereact/images/dock/terminal.svg",width:"100%"}),command:()=>{o(!0)}},{label:"App Store",icon:()=>(0,i.jsx)("img",{alt:"App Store",src:"https://primefaces.org/cdn/primereact/images/dock/appstore.svg",width:"100%"}),command:()=>{b.current.show({severity:"error",summary:"An unexpected error occurred while signing in.",detail:"UNTRUSTED_CERT_TITLE"})}},{label:"Safari",icon:()=>(0,i.jsx)("img",{alt:"Finder",src:"https://primefaces.org/cdn/primereact/images/dock/safari.svg",width:"100%"}),command:()=>{b.current.show({severity:"warn",summary:"Safari has stopped working"})}},{label:"Photos",icon:()=>(0,i.jsx)("img",{alt:"Photos",src:"https://primefaces.org/cdn/primereact/images/dock/photos.svg",width:"100%"}),command:()=>{k.current.show()}},{label:"GitHub",icon:()=>(0,i.jsx)("img",{alt:"Settings",src:"https://primefaces.org/cdn/primereact/images/dock/github.svg",width:"100%"})},{label:"Trash",icon:()=>(0,i.jsx)("img",{alt:"trash",src:"https://primefaces.org/cdn/primereact/images/dock/trash.png",width:"100%"}),command:()=>{f.current.show({severity:"info",summary:"Empty Trash"})}}],w=[{label:"Finder",className:"menubar-root"},{label:"File",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archive",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Quit"}],E=e=>{let i,t=e.indexOf(" "),o=-1!==t?e.substring(0,t):e;switch(o){case"date":i="Today is "+new Date().toDateString();break;case"greet":i="Hola "+e.substring(t+1)+"!";break;case"random":i=Math.floor(100*Math.random());break;case"clear":i=null;break;default:i="Unknown command: "+o}i?S.TerminalService.emit("response",i):S.TerminalService.emit("clear")};(0,d.useEffect)(()=>(S.TerminalService.on("command",E),P.PhotoService.getImages().then(e=>u(e)),R.NodeService.getTreeNodes().then(e=>g(e)),v?v.setAppendTo("self"):n.default.appendTo="self",()=>{S.TerminalService.off("command",E),v?v.setAppendTo(null):n.default.appendTo=null}),[]);let A=(0,i.jsx)("i",{className:"pi pi-apple"}),C=(0,i.jsxs)(d.default.Fragment,{children:[(0,i.jsx)("i",{className:"pi pi-video"}),(0,i.jsx)("i",{className:"pi pi-wifi"}),(0,i.jsx)("i",{className:"pi pi-volume-up"}),(0,i.jsx)("span",{children:"Fri 13:07"}),(0,i.jsx)("i",{className:"pi pi-search"}),(0,i.jsx)("i",{className:"pi pi-bars"})]}),H={basic:`
<Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />
<Menubar model={menubarItems} start={start} end={end} />
<div className="dock-window dock-advanced">
    <Toast ref={toast} />
    <Toast ref={toast2} position="top-center" />
    <Dock model={dockItems} />
    <Dialog visible={displayTerminal} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw' }} onHide={() => setDisplayTerminal(false)} maximizable blockScroll={false}>
        <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
    </Dialog>
    <Dialog visible={displayFinder} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw', height: '18rem' }} onHide={() => setDisplayFinder(false)} maximizable blockScroll={false}>
        <Tree value={nodes} />
    </Dialog>
    <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={2} style={{ width: '400px' }}
        circular fullScreen showThumbnails={false} showItemNavigators item={itemTemplate} />
</div>
`,javascript:`
import React, { useRef, useState, useEffect } from 'react';
import { Dock } from 'primereact/dock';
import { Tooltip } from 'primereact/tooltip';
import { Dialog } from 'primereact/dialog';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { Galleria } from 'primereact/galleria';
import { Toast } from 'primereact/toast';
import { Tree } from 'primereact/tree';
import { Menubar } from 'primereact/menubar';
import { NodeService } from './service/NodeService';
import { PhotoService } from './service/PhotoService';
import './DockDemo.css';

export default function AdvanceDemo() {
    const [displayTerminal, setDisplayTerminal] = useState(false);
    const [displayFinder, setDisplayFinder] = useState(false);
    const [images, setImages] = useState(null);
    const [nodes, setNodes] = useState(null);
    const toast = useRef(null);
    const toast2 = useRef(null);
    const galleria = useRef(null);

    const dockItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
            command: () => {
                setDisplayFinder(true);
            }
        },
        {
            label: 'Terminal',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/terminal.svg" width="100%" />,
            command: () => {
                setDisplayTerminal(true);
            }
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
            }
        },
        {
            label: 'Safari',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/safari.svg" width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'warn', summary: 'Safari has stopped working' });
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
            command: () => {
                galleria.current.show();
            }
        },
        {
            label: 'GitHub',
            icon: () => <img alt="Settings" src="https://primefaces.org/cdn/primereact/images/dock/github.svg" width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Empty Trash' });
            }
        }
    ];

    const menubarItems = [
        {
            label: 'Finder',
            className: 'menubar-root'
        },
        {
            label: 'File',
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
            label: 'Quit'
        }
    ];

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            case 'clear':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response) {
            TerminalService.emit('response', response);
        } else {
            TerminalService.emit('clear');
        }
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);
        PhotoService.getImages().then((data) => setImages(data));
        NodeService.getTreeNodes().then((data) => setNodes(data));

        setAppendTo('self');

        return () => {
            TerminalService.off('command', commandHandler);

            // reset
            setAppendTo(null);
        };
    }, []);

    const start = <i className="pi pi-apple"></i>;
    const end = (
        <React.Fragment>
            <i className="pi pi-video" />
            <i className="pi pi-wifi" />
            <i className="pi pi-volume-up" />
            <span>Fri 13:07</span>
            <i className="pi pi-search" />
            <i className="pi pi-bars" />
        </React.Fragment>
    );

    return (
        <div className="card dock-demo">
            <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />
            <Menubar model={menubarItems} start={start} end={end} />
            <div className="dock-window dock-advanced">
                <Toast ref={toast} />
                <Toast ref={toast2} position="top-center" />
                <Dock model={dockItems} />
                <Dialog visible={displayTerminal} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw' }} onHide={() => setDisplayTerminal(false)} maximizable blockScroll={false}>
                    <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
                </Dialog>
                <Dialog visible={displayFinder} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw', height: '18rem' }} onHide={() => setDisplayFinder(false)} maximizable blockScroll={false}>
                    <Tree value={nodes} />
                </Dialog>
                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={2} style={{ width: '400px' }}
                    circular fullScreen showThumbnails={false} showItemNavigators item={itemTemplate} />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useRef, useState, useEffect } from 'react';
import { Dock } from 'primereact/dock';
import { Tooltip } from 'primereact/tooltip';
import { Dialog } from 'primereact/dialog';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { Galleria } from 'primereact/galleria';
import { Toast } from 'primereact/toast';
import { Tree } from 'primereact/tree';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { NodeService } from './service/NodeService';
import { PhotoService } from './service/PhotoService';
import './DockDemo.css';

export default function AdvanceDemo() {
    const [displayTerminal, setDisplayTerminal] = useState(false);
    const [displayFinder, setDisplayFinder] = useState(false);
    const [images, setImages] = useState(null);
    const [nodes, setNodes] = useState(null);
    const toast = useRef<Toast>(null);
    const toast2 = useRef<Toast>(null);
    const galleria = useRef<Galleria>(null);

    const dockItems = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
            command: () => {
                setDisplayFinder(true);
            }
        },
        {
            label: 'Terminal',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/terminal.svg" width="100%" />,
            command: () => {
                setDisplayTerminal(true);
            }
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE' });
            }
        },
        {
            label: 'Safari',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/safari.svg" width="100%" />,
            command: () => {
                toast2.current.show({ severity: 'warn', summary: 'Safari has stopped working' });
            }
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
            command: () => {
                galleria.current.show();
            }
        },
        {
            label: 'GitHub',
            icon: () => <img alt="Settings" src="https://primefaces.org/cdn/primereact/images/dock/github.svg" width="100%" />
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Empty Trash' });
            }
        }
    ];

    const menubarItems : MenuItem[] = [
        {
            label: 'Finder',
            className: 'menubar-root'
        },
        {
            label: 'File',
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
            label: 'Quit'
        }
    ];

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const commandHandler = (text: string) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            case 'clear':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response) {
            TerminalService.emit('response', response);
        } else {
            TerminalService.emit('clear');
        }
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);
        PhotoService.getImages().then((data) => setImages(data));
        NodeService.getTreeNodes().then((data) => setNodes(data));

        setAppendTo('self');

        return () => {
            TerminalService.off('command', commandHandler);

            // reset
            setAppendTo(null);
        };
    }, []);

    const start = <i className="pi pi-apple"></i>;
    const end = (
        <React.Fragment>
            <i className="pi pi-video" />
            <i className="pi pi-wifi" />
            <i className="pi pi-volume-up" />
            <span>Fri 13:07</span>
            <i className="pi pi-search" />
            <i className="pi pi-bars" />
        </React.Fragment>
    );

    return (
        <div className="card dock-demo">
            <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />
            <Menubar model={menubarItems} start={start} end={end} />
            <div className="dock-window dock-advanced">
                <Toast ref={toast} />
                <Toast ref={toast2} position="top-center" />
                <Dock model={dockItems} />
                <Dialog visible={displayTerminal} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw' }} onHide={() => setDisplayTerminal(false)} maximizable blockScroll={false}>
                    <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
                </Dialog>
                <Dialog visible={displayFinder} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw', height: '18rem' }} onHide={() => setDisplayFinder(false)} maximizable blockScroll={false}>
                    <Tree value={nodes} />
                </Dialog>
                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={2} style={{ width: '400px' }}
                    circular fullScreen showThumbnails={false} showItemNavigators item={itemTemplate} />
            </div>
        </div>
    )
}
        `,extFiles:{"DockDemo.css":`
/* DockDemo.css */

.dock-demo .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url('https://primefaces.org/cdn/primereact/images/dock/window.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
.dock-demo .p-dock {
    z-index: 1000;
}
.dock-demo .dock-advanced .p-dialog-mask, .dock-demo .dock-advanced .p-galleria-mask, .dock-demo .dock-advanced .p-galleria-mask .p-galleria-item-nav, .dock-demo .dock-advanced .p-toast {
    position: absolute;
}
.dock-demo .dock-advanced .p-dialog .p-dialog-header {
    padding: 0.2rem;
}
.dock-demo .dock-advanced .p-dialog .p-dialog-content {
    padding: 0;
}
.dock-demo .dock-advanced .p-dialog p {
    margin-top: 0;
}
.dock-demo .dock-advanced .p-dialog .p-terminal {
    background-color: #212121;
    color: #fff;
    border: 0 none;
    min-height: 18rem;
    height: 100%;
}
.dock-demo .dock-advanced .p-dialog .p-terminal .p-terminal-command {
    color: #80cbc4;
}
.dock-demo .dock-advanced .p-dialog .p-terminal .p-terminal-prompt {
    color: #ffd54f;
}
.dock-demo .dock-advanced .p-dialog .p-terminal .p-terminal-response {
    color: #9fa8da;
}
.dock-demo .dock-advanced .p-dialog .p-tree {
    height: 100%;
    border-radius: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
}
.dock-demo .dock-advanced .p-toast {
    top: 20px;
}
.dock-demo .p-menubar {
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 0;
}
.dock-demo .p-menubar .menubar-root {
    font-weight: bold;
    padding: 0 1rem;
}
.dock-demo .p-menubar .p-menuitem-link {
    padding: 0.5rem 0.75rem;
}
.dock-demo .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
    padding: 0.5rem 0.75rem;
}
.dock-demo .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
    display: none;
}
.dock-demo .p-menubar .p-menubar-end span, .dock-demo .p-menubar .p-menubar-end i {
    padding: 0 0.75rem;
}
.dark-tooltip .p-tooltip .p-tooltip-arrow {
    border-top-color: var(--surface-900);
}
.dark-tooltip .p-tooltip .p-tooltip-text {
    background-color: var(--surface-900);
}
    };
    `,data:`
/* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...

/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
`}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"A sample macOS implementation using various components."})}),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)(F.Tooltip,{className:"dark-tooltip",target:".dock-advanced .p-dock-action",my:"center+15 bottom-15",at:"center top",showDelay:150}),(0,i.jsx)(D.Menubar,{model:w,start:A,end:C}),(0,i.jsxs)("div",{className:"dock-window dock-advanced",style:{backgroundImage:"url(/images/dock/window.jpg)"},children:[(0,i.jsx)(N.Toast,{ref:f,className:"absolute"}),(0,i.jsx)(N.Toast,{ref:b,className:"absolute"}),(0,i.jsx)(j,{model:x}),(0,i.jsx)(c.Dialog,{visible:t,breakpoints:{"960px":"50vw","600px":"75vw"},style:{width:"30vw"},onHide:()=>o(!1),maximizable:!0,blockScroll:!1,children:(0,i.jsx)(T.Terminal,{welcomeMessage:"Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')",prompt:"primereact $"})}),(0,i.jsx)(c.Dialog,{visible:s,breakpoints:{"960px":"50vw","600px":"75vw"},style:{width:"30vw",height:"18rem"},onHide:()=>p(!1),maximizable:!0,blockScroll:!1,children:(0,i.jsx)(I.Tree,{value:h})}),(0,i.jsx)(y.Galleria,{ref:k,value:m,responsiveOptions:[{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],numVisible:2,style:{width:"400px"},circular:!0,fullScreen:!0,showThumbnails:!1,showItemNavigators:!0,item:e=>(0,i.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}})})]})]}),(0,i.jsx)(r.DocSectionCode,{code:H,service:["PhotoService","NodeService"]})]})}var A=e.i(14374);function C(e){let[t,o]=(0,d.useState)("bottom"),s=[{label:"Finder",icon:()=>(0,i.jsx)("img",{alt:"Finder",src:"https://primefaces.org/cdn/primereact/images/dock/finder.svg",width:"100%"})},{label:"App Store",icon:()=>(0,i.jsx)("img",{alt:"App Store",src:"https://primefaces.org/cdn/primereact/images/dock/appstore.svg",width:"100%"})},{label:"Photos",icon:()=>(0,i.jsx)("img",{alt:"Photos",src:"https://primefaces.org/cdn/primereact/images/dock/photos.svg",width:"100%"})},{label:"Trash",icon:()=>(0,i.jsx)("img",{alt:"trash",src:"https://primefaces.org/cdn/primereact/images/dock/trash.png",width:"100%"})}],n={basic:`
<Dock model={items} position="{position}" />
`,javascript:`
import { useState } from 'react';
import { Dock } from 'primereact/dock';
import { RadioButton } from 'primereact/radiobutton';
import './DockDemo.css';

export default function BasicDemo() {
    const [position, setPosition] = useState('bottom');    
    const items = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
        }
    ];

    const positions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    return (
        <div className="card dock-demo">
            <div className="flex flex-wrap gap-3 mb-5">
                {positions.map((option) => {
                    const { value, label } = option;

                    return (
                        <div className="flex align-items-center" key={label}>
                            <RadioButton value={label} onChange={() => setPosition(option.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">
                                {label}
                            </label>
                        </div>
                    );
                })}
            </div>
            <div className="dock-window" style={{ backgroundImage: 'url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)' }}>
                <Dock model={items} position={position} />
            </div>
        </div>
    )
}
        `,typescript:`
import { useState } from 'react';
import { Dock } from 'primereact/dock';
import { MenuItem } from 'primereact/menuitem';
import { RadioButton } from 'primereact/radiobutton';
import './DockDemo.css';

export default function BasicDemo() {
    const [position, setPosition] = useState<string>('bottom');    
    const items: MenuItem[] = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
        }
    ];

    const positions: Array<{label: string, value: string}> = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    return (
        <div className="card dock-demo">
            <div className="flex flex-wrap gap-3 mb-5">
                {positions.map((option) => {
                    const { value, label } = option;

                    return (
                        <div className="flex align-items-center" key={label}>
                            <RadioButton value={label} onChange={() => setPosition(option.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">
                                {label}
                            </label>
                        </div>
                    );
                })}
            </div>
            <div className="dock-window" style={{ backgroundImage: 'url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)' }}>
                <Dock model={items} position={position} />
            </div>
        </div>
    )
}
        `,extFiles:{"DockDemo.css":`
/* DockDemo.css */
.dock-demo .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url('https://primefaces.org/cdn/primereact/images/dock/window.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
.dock-demo .p-dock {
    z-index: 1000;
}  
    `}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Menu requires a collection of menuitems as its ",(0,i.jsx)("i",{children:"model"}),". Default location is ",(0,i.jsx)("i",{children:"bottom"})," and other sides are also available when defined with the ",(0,i.jsx)("i",{children:"position"})," property."]})}),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"flex flex-wrap gap-3 mb-5",children:[{label:"Bottom",value:"bottom"},{label:"Top",value:"top"},{label:"Left",value:"left"},{label:"Right",value:"right"}].map(e=>{let{value:a,label:s}=e;return(0,i.jsxs)("div",{className:"flex align-items-center",children:[(0,i.jsx)(A.RadioButton,{value:s,onChange:()=>o(e.value),checked:t===a}),(0,i.jsx)("label",{htmlFor:s,className:"ml-2",children:s})]},s)})}),(0,i.jsx)("div",{className:"dock-window",style:{backgroundImage:"url(/images/dock/window.jpg)"},children:(0,i.jsx)(j,{model:s,position:t})})]}),(0,i.jsx)(r.DocSectionCode,{code:n})]})}function H(e){let t={basic:`
import { Dock } from 'primereact/dock';
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.DocSectionText,{...e}),(0,i.jsx)(r.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}let M=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.DocSectionText,{...e}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/dock.jpg",alt:"dock"})})]});var B=e.i(41158);function z(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.DocSectionText,{id:"style",label:"Style",children:(0,i.jsxs)("p",{children:["Following is the list of structural style classes, for theming classes visit ",(0,i.jsx)(B.default,{href:"/theming",children:"theming"})," page."]})}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Element"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-dock"}),(0,i.jsx)("td",{children:"Container element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-dock-list"}),(0,i.jsx)("td",{children:"List of items."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-dock-item"}),(0,i.jsx)("td",{children:"Each items in list."})]})]})]})})]})}function U(e){let t={basic:`
const Tailwind = {
    dock: {
        root: ({ props }) => ({
            className: classNames('absolute z-1 flex justify-center items-center pointer-events-none', {
                'left-0 bottom-0 w-full': props.position == 'bottom',
                'left-0 top-0 w-full': props.position == 'top',
                'left-0 top-0 h-full': props.position == 'left',
                'right-0 top-0 h-full': props.position == 'right'
            })
        }),
        container: {
            className: classNames('flex pointer-events-auto', 'bg-white/10 border-white/20 p-2 border rounded-md')
        },
        menu: ({ props }) => ({
            className: classNames('m-0 p-0 list-none flex items-center justify-center', 'outline-none', {
                'flex-col': props.position == 'left' || props.position == 'right'
            })
        }),
        menuitem: ({ props, context, state }) => ({
            className: classNames(
                'p-2 rounded-md',
                'transition-all duration-200 ease-cubic-bezier-will-change-transform transform ',
                {
                    'origin-bottom hover:mx-6': props.position == 'bottom',
                    'origin-top hover:mx-6': props.position == 'top',
                    'origin-left hover:my-6': props.position == 'left',
                    'origin-right hover:my-6': props.position == 'right'
                },
                {
                    'hover:scale-150': state.currentIndex === context.index,
                    'scale-125': state.currentIndex - 1 === context.index || state.currentIndex + 1 === context.index,
                    'scale-110': state.currentIndex - 2 === context.index || state.currentIndex + 2 === context.index
                }
            )
        }),
        action: {
            className: classNames('flex flex-col items-center justify-center relative overflow-hidden cursor-default', 'w-16 h-16')
        }
    }
}
    `},o={javascript:`
import React, { useState } from 'react';
import { Dock } from 'primereact/dock';
import { RadioButton } from 'primereact/radiobutton';
import './DockDemo.css';

export default function BasicDemo() {
    const [position, setPosition] = useState('bottom');    
    const items = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
        }
    ];

    const positions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    return (
        <div className="card dock-demo">
            <div className="flex flex-wrap gap-3 mb-5">
                {positions.map((option) => {
                    const { value, label } = option;

                    return (
                        <div className="flex items-center" key={label}>
                            <RadioButton value={label} onChange={() => setPosition(option.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">
                                {label}
                            </label>
                        </div>
                    );
                })}
            </div>
            <div className="dock-window" style={{ backgroundImage: 'url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)' }}>
                <Dock model={items} position={position} />
            </div>
        </div>
    )
}`,extFiles:{"DockDemo.css":`
/* DockDemo.css */
.dock-demo .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url('https://primefaces.org/cdn/primereact/images/dock/window.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    }
.dock-demo .p-dock {
    z-index: 1000;
}`}};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a.DocSectionText,{...e,children:[(0,i.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,i.jsx)(B.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,i.jsx)(r.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,i.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,i.jsx)(r.DocSectionCode,{code:o,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:M},{id:"pt.dock.options",label:"Dock PT Options",component:t.default}];return(0,i.jsx)(o.DocComponent,{title:"React Dock Component",header:"Dock",description:"Dock is a navigation component consisting of menuitems.",componentDocs:[{id:"import",label:"Import",component:H},{id:"basic",label:"Basic",component:C},{id:"advance",label:"Advanced",component:E},{id:"accessibility",label:"Accessibility",component:s}],apiDocs:["Dock","MenuItem"],className:"dock-demo",ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:z},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:U}]}]})}],44421)},75038,(e,i,t)=>{let o="/dock";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(44421)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([o])})}]);