(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,76396,e=>{"use strict";var l=e.i(91398),t=e.i(88850),a=e.i(82948),i=e.i(28137);function n(){return(0,l.jsxs)(i.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,l.jsx)("h3",{children:"Screen Reader"}),(0,l.jsxs)("p",{children:["MegaMenu component uses the ",(0,l.jsx)("i",{children:"menubar"})," role along with ",(0,l.jsx)("i",{children:"aria-orientation"})," and the value to describe the component can either be provided with ",(0,l.jsx)("i",{children:"aria-labelledby"})," or ",(0,l.jsx)("i",{children:"aria-label"})," props. Each list item has a"," ",(0,l.jsx)("i",{children:"presentation"})," role whereas anchor elements have a ",(0,l.jsx)("i",{children:"menuitem"})," role with ",(0,l.jsx)("i",{children:"aria-label"})," referring to the label of the item and ",(0,l.jsx)("i",{children:"aria-disabled"})," defined if the item is disabled. A submenu within a MegaMenu uses the"," ",(0,l.jsx)("i",{children:"menu"})," role with an ",(0,l.jsx)("i",{children:"aria-labelledby"})," defined as the id of the submenu root menuitem label. In addition, root menuitems that open a submenu have ",(0,l.jsx)("i",{children:"aria-haspopup"}),", ",(0,l.jsx)("i",{children:"aria-expanded"})," and ",(0,l.jsx)("i",{children:"aria-controls"})," to define the relation between the item and the submenu."]}),(0,l.jsx)("h3",{children:"Keyboard Support"}),(0,l.jsx)("div",{className:"doc-tablewrapper",children:(0,l.jsxs)("table",{className:"doc-table",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Key"}),(0,l.jsx)("th",{children:"Function"})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("i",{children:"tab"})}),(0,l.jsx)("td",{children:"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsxs)("td",{children:[(0,l.jsx)("i",{children:"shift"})," + ",(0,l.jsx)("i",{children:"tab"})]}),(0,l.jsx)("td",{children:"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("i",{children:"enter"})}),(0,l.jsx)("td",{children:"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("i",{children:"space"})}),(0,l.jsx)("td",{children:"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("i",{children:"escape"})}),(0,l.jsx)("td",{children:"If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("i",{children:"down arrow"})}),(0,l.jsx)("td",{children:"If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("i",{children:"up arrow"})}),(0,l.jsx)("td",{children:"If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("i",{children:"right arrow"})}),(0,l.jsx)("td",{children:"If focus is on a root element, moves focus to the next menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the next menu group."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("i",{children:"left arrow"})}),(0,l.jsx)("td",{children:"If focus is on a root element, moves focus to the previous menuitem. If the focus in inside a submenu, moves focus to the first menuitem of the previous menu group."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("i",{children:"home"})}),(0,l.jsx)("td",{children:"Moves focus to the first menuitem within the submenu."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("i",{children:"end"})}),(0,l.jsx)("td",{children:"Moves focus to the last menuitem within the submenu."})]})]})]})})]})}var s=e.i(5180),r=e.i(91788),o=e.i(4242),m=e.i(10836),c=e.i(183),d=e.i(15498),u=e.i(20728),p=e.i(5064),b=e.i(60150),h=e.i(20484),x=e.i(35048),g=e.i(71834),f=e.i(81438),v=e.i(19820),L=e.i(39971),y=e.i(50901),j=e.i(45543),C=e.i(75366),k=e.i(51551),S=e.i(28653),w=e.i(63957),M=e.i(3935);let N=`
@layer primereact {
    .p-megamenu {
        display: flex;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-megamenu-root-list > .p-menuitem {
        position: relative;
    }

    .p-megamenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-megamenu .p-menuitem-text {
        line-height: 1;
    }

    .p-megamenu-panel {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
    }

    .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    /* Horizontal */
    .p-megamenu-horizontal {
        align-items: center;
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-megamenu-horizontal .p-megamenu-custom,
    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    /* Vertical */
    .p-megamenu-vertical {
        flex-direction: column;
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        flex-direction: column;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link  > .p-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: 0.5rem;
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }

    .p-megamenu-button {
        display: none;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
}
`,R=d.ComponentBase.extend({defaultProps:{__TYPE:"MegaMenu",id:null,model:null,style:null,className:null,orientation:"horizontal",breakpoint:void 0,scrollHeight:"400px",start:null,submenuIcon:null,onFocus:null,onBlur:null,tabIndex:0,menuIcon:null,end:null,children:void 0},css:{classes:{root:({props:e,mobileActiveState:l})=>(0,M.classNames)("p-megamenu p-component",{"p-megamenu-horizontal":"horizontal"===e.orientation,"p-megamenu-vertical":"vertical"===e.orientation,"p-megamenu-mobile-active":l}),content:"p-menuitem-content",separator:"p-menuitem-separator",submenuIcon:"p-submenu-icon",action:({item:e})=>(0,M.classNames)("p-menuitem-link",{"p-disabled":e.disabled}),submenuItem:({focused:e,disabled:l,active:t})=>(0,M.classNames)("p-menuitem",{"p-menuitem-active":t,"p-focus":e,"p-disabled":l}),submenuHeader:({disabled:e})=>(0,M.classNames)("p-megamenu-submenu-header p-submenu-header",{"p-disabled":e}),submenu:"p-submenu-list p-megamenu-submenu",panel:"p-megamenu-panel",grid:"p-megamenu-grid",icon:"p-menuitem-icon",label:"p-menuitem-text",column:({category:e})=>{let l;switch(e.items?e.items.length:0){case 2:l="p-megamenu-col-6";break;case 3:l="p-megamenu-col-4";break;case 4:l="p-megamenu-col-3";break;case 6:l="p-megamenu-col-2";break;default:l="p-megamenu-col-12"}return l},menuButton:"p-megamenu-button",menuitem:({category:e,activeItemState:l,focused:t,disabled:a})=>(0,M.classNames)("p-menuitem",{"p-menuitem-active p-highlight":l&&l.item===e,"p-focus":t,"p-disabled":a}),menubar:"p-megamenu-root-list",menu:"p-megamenu-root-list",start:"p-megamenu-start",end:"p-megamenu-end"},styles:N}}),T=r.memo(r.forwardRef((e,t)=>{let a,i=(0,b.useMergeProps)(),n=r.useContext(m.PrimeReactContext),s=R.getProps(e,n),[N,T]=r.useState(s.id),[I,E]=r.useState(null),[H,V]=r.useState(null),[D,B]=r.useState({index:-1,key:"",parentKey:""}),[U,A]=r.useState(null),[Z,K]=r.useState(!1),[F,P]=r.useState(null),[O,z]=r.useState([]),[$,_]=r.useState(null),[G,W]=r.useState(!1),[q,X]=r.useState(!1),J=r.useRef(""),Y=r.useRef(null),Q=r.useRef(null),ee=r.useRef(null),el=r.useRef(null),et=r.useRef(null),ea="horizontal"===s.orientation,ei="vertical"===s.orientation,en=(0,p.useMatchMedia)(`screen and (max-width: ${s.breakpoint})`,!!s.breakpoint),{ptm:es,cx:er,isUnstyled:eo}=R.setMetaData({props:s,state:{id:N,activeItem:I&&I.item,attributeSelector:$,mobileActive:G}});(0,d.useHandleStyle)(R.css.styles,eo,{name:"megamenu"});let em=(e,l,t)=>es(l,{context:{active:eG(e),focused:eX(e),disabled:eq(e),item:e,index:t}}),[ec,ed]=(0,u.useEventListener)({type:"click",listener:e=>{ef(e)&&eg()}}),[eu,ep]=(0,x.useResizeListener)({type:"resize",listener:()=>{eg()}}),eb=()=>{ec(),eu()},eh=()=>{ed(),ep()},ex=e=>{let{processedItem:l,isFocus:t}=e;if(k.ObjectUtils.isEmpty(l))return;let{index:a,key:i,parentKey:n,items:s}=l,r=k.ObjectUtils.isNotEmpty(s);r&&E(l),B({index:a,key:i,parentKey:n}),r&&K(!0),t&&j.DomHandler.focus(ee.current)},eg=e=>{G&&(W(!1),setTimeout(()=>{j.DomHandler.focus(et.current)},0)),E(null),e&&(B({index:-1,key:"",parentKey:""}),j.DomHandler.focus(ee.current)),K(!1)},ef=e=>Q.current&&!(Q.current.isSameNode(e.target)||Q.current.contains(e.target)||et.current&&et.current.contains(e.target));r.useImperativeHandle(t,()=>({props:s,getElement:()=>Q.current})),(0,h.useMountEffect)(()=>{let e=(0,S.UniqueComponentId)();N||T(e),s.breakpoint&&($||_(e))}),(0,g.useUpdateEffect)(()=>($&&Q.current&&(Q.current.setAttribute($,""),e7()),()=>{e9()}),[$,s.breakpoint]),(0,g.useUpdateEffect)(()=>{G?eb():eh()},[G]),(0,g.useUpdateEffect)(()=>{q&&(eP(-1!==D.index?eV(D.index):eU()),X(!1))},[q]),(0,g.useUpdateEffect)(()=>{let e=j.DomHandler.findSingle(Q.current,".p-menuitem-active > .p-megamenu-panel");return I?(eb(),en||w.ZIndexUtils.set("menu",e,n&&n.autoZIndex||o.default.autoZIndex,n&&n.zIndex.menu||o.default.zIndex.menu)):eh(),en&&e&&e.previousElementSibling.scrollIntoView({block:"nearest",inline:"nearest"}),()=>{eh(),w.ZIndexUtils.clear(e)}},[I,en]),(0,g.useUpdateEffect)(()=>{A(k.ObjectUtils.isNotEmpty(D.key)?`${N}_${D.key}`:null)},[D]),r.useEffect(()=>{P(e2(s.model||[],0,null,""))},[s.model]),(0,g.useUpdateEffect)(()=>{let e=k.ObjectUtils.isNotEmpty(I)?I:null;z(e&&e.key===D.parentKey?e.items.reduce((e,l)=>(l.forEach(l=>{l.items.forEach(l=>{e.push(l)})}),e),[]):F)},[D,I,F]);let ev=e=>{if(e.preventDefault(),ea){if(k.ObjectUtils.isNotEmpty(I)&&I.key===D.key)B({index:-1,key:"",parentKey:I.key});else{let l=eZ(D.index);eQ(l)&&(ex({originalEvent:e,processedItem:l}),B({index:-1,key:l.key,parentKey:l.parentKey}),J.current="")}setTimeout(()=>X(!0),0)}else eP(-1!==D.index?eV(D.index):eU())},eL=e=>{let l=eQ(eZ(D.index));e.altKey&&ea?-1!==D.index&&!l&&k.ObjectUtils.isNotEmpty(I)&&(0===D.index?(B({index:I.index,key:I.key,parentKey:I.parentKey}),E(null)):eP(eE())):eP(-1!==D.index?eD(D.index):eA()),e.preventDefault()},ey=e=>{let l=eZ(D.index);if(eQ(l))ea&&eP(-1!==D.index?eD(D.index):eA());else{ei&&k.ObjectUtils.isNotEmpty(I)&&0===l.columnIndex&&(B({index:I.index,key:I.key,parentKey:I.parentKey}),E(null));let e=l.columnIndex-1,t=O.findIndex(l=>l.columnIndex===e);-1!==t&&eP(t)}e.preventDefault()},ej=e=>{e.preventDefault();let l=eZ(D.index);if(eQ(l)){if(ei)if(k.ObjectUtils.isNotEmpty(I)&&I.key===l.key)B({index:-1,key:"",parentKey:I.key});else{let l=eZ(D.index);eQ(l)&&(ex({originalEvent:e,processedItem:l}),B({index:-1,key:l.key,parentKey:l.parentKey}),J.current="")}setTimeout(()=>X(!0),0)}else{let e=l.columnIndex+1,t=O.findIndex(l=>l.columnIndex===e);-1!==t&&eP(t)}},eC=e=>{eP(eE()),e.preventDefault()},ek=e=>{eP(eH()),e.preventDefault()},eS=e=>{if(-1!==D.index){let e=j.DomHandler.findSingle(ee.current,`li[id="${U}"]`),l=e&&j.DomHandler.findSingle(e,'a[data-pc-section="action"]');l?l.click():e&&e.click()}e.preventDefault()},ew=e=>{eS(e)},eM=e=>{k.ObjectUtils.isNotEmpty(I)&&(B({index:I.index,key:I.key}),E(null)),e.preventDefault()},eN=e=>{if(-1!==D.index){let l=eZ(D.index);eQ(l)||ex({originalEvent:e,processedItem:l})}eg()},eR=e=>{let l=eK(e);return eT(e)&&l&&l.toLocaleLowerCase().startsWith(J.current.toLocaleLowerCase())},eT=e=>!!e&&!eq(e.item)&&!eY(e.item),eI=e=>!!k.ObjectUtils.isNotEmpty(I)&&I.key===e.key,eE=()=>O.findIndex(e=>eT(e)),eH=()=>k.ObjectUtils.findLastIndex(O,e=>eT(e)),eV=e=>{let l=e<O.length-1?O.slice(e+1).findIndex(e=>eT(e)):-1;return l>-1?l+e+1:e},eD=e=>{let l=e>0?k.ObjectUtils.findLastIndex(O.slice(0,e),e=>eT(e)):-1;return l>-1?l:e},eB=()=>O&&O.findIndex(e=>eT(e)&&eI(e)),eU=()=>{let e=eB();return e<0?eE():e},eA=()=>{let e=eB();return e<0?eH():e},eZ=e=>k.ObjectUtils.isNotEmpty(O)?O[e]:null,eK=e=>e&&e.item?e_(e):void 0,eF=(e,l)=>{J.current=(J.current||"")+l;let t=-1,a=!1;return -1!==(t=-1!==D.index?-1===(t=O.slice(D.index).findIndex(e=>eR(e)))?O.slice(0,D.index).findIndex(e=>eR(e)):t+D.index:O.findIndex(e=>eR(e)))&&(a=!0),-1===t&&-1===D.index&&(t=eU()),-1!==t&&eP(t),Y&&clearTimeout(Y),Y.current=setTimeout(()=>{J.current="",Y.current=null},500),a},eP=e=>{let l=eZ(e),t=k.ObjectUtils.isNotEmpty(l)?l.key:"";B({...D,index:e,key:t}),eO()},eO=(e=-1)=>{let l=-1!==e?`${N}_${e}`:U,t=j.DomHandler.findSingle(ee.current,`li[id="${l}"]`);t&&t.scrollIntoView&&t.scrollIntoView({block:"nearest",inline:"start"})},ez=e=>`${N}_${e.key}`,e$=(e,l,t)=>e&&e.item?k.ObjectUtils.getItemValue(e.item[l],t):void 0,e_=e=>e$(e,"label"),eG=e=>!!k.ObjectUtils.isNotEmpty(I)&&I.key===e.key,eW=e=>!1!==e$(e,"visible"),eq=e=>e$(e,"disabled"),eX=e=>U===ez(e),eJ=e=>k.ObjectUtils.isNotEmpty(e.items),eY=e=>e$(e,"separator"),eQ=e=>e&&k.ObjectUtils.isNotEmpty(e.items),e1=()=>s.model.filter(e=>eW(e)&&!e$(e,"separator")).length,e0=e=>e-s.model.slice(0,e).filter(e=>eW(e)&&e$(e,"separator")).length+1,e2=(e,l=0,t={},a="",i)=>e?(Array.isArray(e)||(e=[e]),e.map((e,n)=>{let s=`${""!==a?a+"_":""}${void 0!==i?i+"_":""}${n}`,r={item:e,index:n,level:l,key:s,parent:t,parentKey:a,columnIndex:void 0!==i?i:t&&void 0!==t.columnIndex?t.columnIndex:n};return r.items=0===l&&e.items&&e.items.length>0?e.items.map((e,t)=>e2(e,l+1,r,s,t)):e2(e.items,l+1,r,s),r})):[],e3=(e,t)=>{let a=e.item;if(!1===a.visible)return null;if(a.separator){let e,l;return l=i({id:e=N+"_separator__"+t,className:er("separator"),role:"separator"},es("separator")),(0,r.createElement)("li",{...l,key:e})}let n=ez(e),o=(0,M.classNames)("p-menuitem-link",{"p-disabled":a.disabled}),m=i({className:(0,M.classNames)(a.icon,er("icon"))},es("icon")),c=i({className:er("label")},es("label")),d=(0,M.classNames)(a.icon,"p-menuitem-icon"),u=C.IconUtils.getJSXIcon(a.icon,{...m},{props:s}),p=a.label&&(0,l.jsx)("span",{...c,children:a.label}),b=i({href:a.url||"#",className:er("action",{item:a}),target:a.target,tabIndex:"-1"},em(e,"action",t)),h=eX(e),x=eq(e),g=eJ(e),f=eG(e),v=i({id:n,"aria-label":e_(e),"aria-disabled":x,"aria-haspopup":g?"menu":void 0,"aria-level":"2","aria-expanded":g?f:void 0,"aria-setsize":e1(),"aria-posinset":e0(t),"data-p-highlight":f,"data-p-disabled":x,"data-p-focused":h,className:(0,M.classNames)(a.className,er("submenuItem",{focused:h,disabled:x,active:f})),style:a.style,role:"menuitem"},em(e,"submenuItem",t)),L=i({onClick:l=>(e=>{let{originalEvent:l,processedItem:t}=e,a=t.item;if(a.disabled)return void l.preventDefault();a.url||l.preventDefault(),a.command&&a.command({originalEvent:l,item:a});let i=eQ(t);if(eI(t)){let{index:e,key:l,parentKey:a}=t;E(null),B({index:e,key:l,parentKey:a})}else if(i)ex(e);else{let e=I?I.index:-1,t=I?I.key:"";eg(l),B({index:e,key:t,parentKey:""}),W(!1)}})({originalEvent:l,processedItem:e}),className:er("content")},em(e,"content",t)),j=(0,l.jsxs)("a",{...b,children:[u,p,(0,l.jsx)(y.Ripple,{})]});if(a.template){let e={className:o,labelClassName:"p-menuitem-text",iconClassName:d,element:j,props:s};j=k.ObjectUtils.getJSXElement(a.template,a,e)}return(0,r.createElement)("li",{...v,key:n},(0,l.jsx)("div",{...L,children:j}))},e6=(e,t)=>{if(!eW(e))return null;let a=e.items.map(e3),n=e.id||N+"_sub_"+t,s=e_(e),o=eq(e),m=i({id:n,className:(0,M.classNames)(e.className,er("submenuHeader",{disabled:o})),style:e.style,role:"presentation","data-p-disabled":o},es("submenuHeader"));return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)("li",{...m,children:s}),a]},n)},e7=()=>{if(!el.current){el.current=j.DomHandler.createInlineStyle(n&&n.nonce||o.default.nonce,n&&n.styleContainer);let e=`${$}`,l=`
                    @media screen and (max-width: ${s.breakpoint}) {
                        .p-megamenu[${e}] > .p-megamenu-root-list .p-menuitem-active .p-megamenu-panel {
                            position: relative;
                            left: 0;
                            box-shadow: none;
                            border-radius: 0;
                            background: inherit;
                        }

                        .p-megamenu[${e}] {
                            width: 100%;
                            position: relative;
                            padding: 0.5rem;
                        }

                        .p-megamenu[${e}] .p-megamenu-grid {
                            flex-wrap: wrap;
                        }

                        .p-megamenu[${e}] .p-megamenu-button {
                            display: flex;
                        }

                        .p-megamenu[${e}] .p-megamenu-root-list {
                            display: none;
                        }

                        .p-megamenu[${e}] div[class*="p-megamenu-col-"] {
                            width: 100%;
                        }

                        .p-megamenu[${e}].p-megamenu-mobile-active .p-megamenu-root-list {
                            left: 0;
                            top: 100%;
                            z-index: 1;
                            width: 100%;
                            display: flex;
                            padding: 0.5rem 0;
                            position: absolute;
                            flex-direction: column;
                        }

                        .p-megamenu[${e}] .p-menuitem  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                            margin-left: auto;
                        }

                        .p-megamenu[${e}] .p-submenu-list .p-menuitem-content .p-menuitem-link {
                            padding-left: 2.25rem;
                        }

                        ${ea?`
                                    .p-megamenu[${e}] .p-menuitem-active  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                                        transform: rotate(-180deg);
                                    }
                            `:""}

                        ${ei?`
                                    .p-megamenu[${e}] .p-menuitem  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                                        transform: rotate(90deg);
                                    }

                                    .p-megamenu[${e}] .p-menuitem-active  > .p-menuitem-content >  .p-menuitem-link > .p-submenu-icon {
                                        transform: rotate(-90deg);
                                    }
                            `:""}
                    }
                `;el.current.innerHTML=l}},e9=()=>{el.current=j.DomHandler.removeInlineStyle(el.current)},e8=i({className:(0,M.classNames)(s.className,er("root",{mobileActiveState:G})),id:N,style:s.style},R.getOtherProps(s),es("root")),e4=(a=i({ref:ee,tabIndex:s.disabled?null:s.tabIndex||"0",className:er("menu"),onFocus:e=>{if(V(!0),-1===D.index){let e=eU(),l=eZ(e);B({index:e,key:l.key,parentKey:l.parentKey})}s.onFocus&&s.onFocus(e)},onBlur:e=>{V(!1),B({index:-1,key:"",parentKey:""}),J.current="",K(!1),s.onBlur&&s.onBlur(e)},onKeyDown:e=>{let l=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":ev(e);break;case"ArrowUp":eL(e);break;case"ArrowLeft":ey(e);break;case"ArrowRight":ej(e);break;case"Home":eC(e);break;case"End":ek(e);break;case"Space":ew(e);break;case"Enter":case"NumpadEnter":eS(e);break;case"Escape":eM(e);break;case"Tab":eN(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!l&&k.ObjectUtils.isPrintableCharacter(e.key)&&eF(e,e.key)}},"aria-label":s.ariaLabel,"aria-labelledby":s.ariaLabelledBy,"aria-orientation":ei?"vertical":"horizontal","aria-activedescendant":H?U:null,id:N+"_list",role:"menubar"},es("menu")),F?(0,l.jsx)("ul",{...a,children:F.map((e,t)=>{let a,n,o,m,c,d,u,p,b,h,x,g,L,S;return(0,l.jsx)(r.Fragment,{children:(a=e.item,n=i({className:er("icon")},em(e,"icon",t)),o=C.IconUtils.getJSXIcon(a.icon,{...n},{props:s}),m=i({className:er("label")},em(e,"label",t)),c=a.label&&(0,l.jsx)("span",{...m,children:a.label}),d=(e=>{if(e.items){let e=i({className:er("submenuIcon")},es("submenuIcon")),t=ei?s.submenuIcon||(0,l.jsx)(v.AngleRightIcon,{...e}):s.submenuIcon||(0,l.jsx)(f.AngleDownIcon,{...e});return C.IconUtils.getJSXIcon(t,{...e},{props:s})}return null})(a),u=(e=>{if(e.item.items){let t=e.items?e.items.map((t,a)=>{var n,o,m;let c,d,u,p,b,h;return(0,l.jsx)(r.Fragment,{children:(n=e,o=t,m=a,d=(c=n.item).label+"_column_"+m,u=o.map(e6),p=i({className:er("column",{category:c})},es("column")),b=I&&I.item===c?"block":"none",h=i({role:"menu",tabIndex:s.disabled?null:s.tabIndex||"0",className:er("submenu"),style:{display:b}},es("submenu")),(0,r.createElement)("div",{...p,key:d},(0,l.jsx)("ul",{...h,children:u})))},a)}):null,a=i({className:er("panel")},es("panel")),n=i({className:er("grid")},es("grid"));return(0,l.jsx)("div",{...a,children:(0,l.jsx)("div",{...n,children:t})})}return null})(e),p=i({href:a.url||"#",className:er("action",{item:a}),target:a.target,onFocus:e=>e.stopPropagation(),tabIndex:"-1","aria-hidden":!0},em(e,"action",t)),b=a.template?k.ObjectUtils.getJSXElement(a.template,a,p):(0,l.jsxs)("a",{...p,children:[o,c,d,(0,l.jsx)(y.Ripple,{})]}),h=ez(e),x=eX(e),g=eq(e),L=i({id:h,className:(0,M.classNames)(a.className,er("menuitem",{category:a,activeItemState:I,focused:x,disabled:g})),"aria-label":e_(a),"aria-level":"1","aria-setsize":e1(),"aria-posinset":e0(t),"aria-expanded":eJ(e)?eG(e):void 0,"aria-haspopup":eJ(e)?"menu":void 0,"aria-disabled":eq(e),"data-p-highlight":eG(a),"data-p-disabled":g,"data-p-focused":x,style:a.style,role:"menuitem","data-p-disabled":a.disabled||!1},em(e,"menuitem",t)),S=i({onClick:l=>(e=>{let{originalEvent:l,processedItem:t}=e,a=t.item;if(a.disabled)return void l.preventDefault();a.command&&a.command({originalEvent:l,item:s.item}),a.url||(l.preventDefault(),l.stopPropagation());let i=eQ(t),n=k.ObjectUtils.isEmpty(t.parent);if(eI(t)){let{index:e,key:l,parentKey:a}=t;E(null),B({index:e,key:l,parentKey:a}),K(!n)}else if(i)ex(e);else{let e=n?t:I;eg(),eP(l,e&&e.index),W(!1),j.DomHandler.focus(ee.current)}})({originalEvent:l,processedItem:e}),onMouseEnter:l=>{var t;return t={originalEvent:l,processedItem:e},void(!G&&Z&&ex(t))},className:er("content")},em(e,"content",t)),(0,r.createElement)("li",{...L,key:h,children:[(0,l.jsx)("div",{...S,children:b}),u]}))},t)})}):null),e5=(()=>{let e=i({className:er("start")},es("start"));if(s.start){let t=k.ObjectUtils.getJSXElement(s.start,s);return(0,l.jsx)("div",{...e,children:t})}return null})(),le=(()=>{let e=i({className:er("end")},es("end"));if(s.end){let t=k.ObjectUtils.getJSXElement(s.end,s);return(0,l.jsx)("div",{...e,children:t})}return null})(),ll=(()=>{if(s.model&&s.model.length<1)return null;let e=i({className:er("menuButton"),href:"#",role:"button","aria-haspopup":!!s.model&&s.model.length>0,"aria-expanded":G,"aria-controls":N,"aria-label":(0,c.ariaLabel)("navigation"),tabIndex:0,onClick:e=>{e.preventDefault(),G?(W(!1),w.ZIndexUtils.clear(ee.current),eg()):(W(!0),w.ZIndexUtils.set("menu",ee.current,n&&n.autoZIndex||o.default.autoZIndex,n&&n.zIndex.menu||o.default.zIndex.menu),setTimeout(()=>{B({index:eU(),level:0,parentKey:""})},1))}},es("menuButton")),t=i(es("menuButtonIcon")),a=s.menuIcon||(0,l.jsx)(L.BarsIcon,{...t}),r=C.IconUtils.getJSXIcon(a,{...t},{props:s});return(0,l.jsx)("a",{ref:et,...e,children:r})})();return(0,l.jsxs)("div",{id:s.id,ref:Q,...e8,children:[e5,ll,e4,le]})}));function I(e){let t=[{label:"Furniture",icon:"pi pi-box",items:[[{label:"Living Room",items:[{label:"Accessories"},{label:"Armchair"},{label:"Coffee Table"},{label:"Couch"},{label:"TV Stand"}]}],[{label:"Kitchen",items:[{label:"Bar stool"},{label:"Chair"},{label:"Table"}]},{label:"Bathroom",items:[{label:"Accessories"}]}],[{label:"Bedroom",items:[{label:"Bed"},{label:"Chaise lounge"},{label:"Cupboard"},{label:"Dresser"},{label:"Wardrobe"}]}],[{label:"Office",items:[{label:"Bookcase"},{label:"Cabinet"},{label:"Chair"},{label:"Desk"},{label:"Executive Chair"}]}]]},{label:"Electronics",icon:"pi pi-mobile",items:[[{label:"Computer",items:[{label:"Monitor"},{label:"Mouse"},{label:"Notebook"},{label:"Keyboard"},{label:"Printer"},{label:"Storage"}]}],[{label:"Home Theather",items:[{label:"Projector"},{label:"Speakers"},{label:"TVs"}]}],[{label:"Gaming",items:[{label:"Accessories"},{label:"Console"},{label:"PC"},{label:"Video Games"}]}],[{label:"Appliances",items:[{label:"Coffee Machine"},{label:"Fridge"},{label:"Oven"},{label:"Vaccum Cleaner"},{label:"Washing Machine"}]}]]},{label:"Sports",icon:"pi pi-clock",items:[[{label:"Football",items:[{label:"Kits"},{label:"Shoes"},{label:"Shorts"},{label:"Training"}]}],[{label:"Running",items:[{label:"Accessories"},{label:"Shoes"},{label:"T-Shirts"},{label:"Shorts"}]}],[{label:"Swimming",items:[{label:"Kickboard"},{label:"Nose Clip"},{label:"Swimsuits"},{label:"Paddles"}]}],[{label:"Tennis",items:[{label:"Balls"},{label:"Rackets"},{label:"Shoes"},{label:"Training"}]}]]}],a={basic:`
<MegaMenu model={items}  breakpoint="960px" />
`,javascript:`
import React from 'react';
import { MegaMenu } from 'primereact/megamenu';

export default function BasicDemo() {
    const items = [
        {
            label: 'Furniture',
            icon: 'pi pi-box',
            items: [
                [
                    {
                        label: 'Living Room',
                        items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
                    }
                ],
                [
                    {
                        label: 'Kitchen',
                        items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
                    },
                    {
                        label: 'Bathroom',
                        items: [{ label: 'Accessories' }]
                    }
                ],
                [
                    {
                        label: 'Bedroom',
                        items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
                    }
                ],
                [
                    {
                        label: 'Office',
                        items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
                    }
                ]
            ]
        },
        {
            label: 'Electronics',
            icon: 'pi pi-mobile',
            items: [
                [
                    {
                        label: 'Computer',
                        items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
                    }
                ],
                [
                    {
                        label: 'Home Theather',
                        items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
                    }
                ],
                [
                    {
                        label: 'Gaming',
                        items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
                    }
                ],
                [
                    {
                        label: 'Appliances',
                        items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
                    }
                ]
            ]
        },
        {
            label: 'Sports',
            icon: 'pi pi-clock',
            items: [
                [
                    {
                        label: 'Football',
                        items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }]
                    }
                ],
                [
                    {
                        label: 'Running',
                        items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }]
                    }
                ],
                [
                    {
                        label: 'Swimming',
                        items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
                    }
                ],
                [
                    {
                        label: 'Tennis',
                        items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
                    }
                ]
            ]
        }
    ];

    return (
        <div className="card">
            <MegaMenu model={items} breakpoint="960px" />
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';

export default function BasicDemo() {
    const items: MenuItem[] = [
        {
            label: 'Furniture',
            icon: 'pi pi-box',
            items: [
                [
                    {
                        label: 'Living Room',
                        items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
                    }
                ],
                [
                    {
                        label: 'Kitchen',
                        items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
                    },
                    {
                        label: 'Bathroom',
                        items: [{ label: 'Accessories' }]
                    }
                ],
                [
                    {
                        label: 'Bedroom',
                        items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
                    }
                ],
                [
                    {
                        label: 'Office',
                        items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
                    }
                ]
            ]
        },
        {
            label: 'Electronics',
            icon: 'pi pi-mobile',
            items: [
                [
                    {
                        label: 'Computer',
                        items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
                    }
                ],
                [
                    {
                        label: 'Home Theather',
                        items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
                    }
                ],
                [
                    {
                        label: 'Gaming',
                        items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
                    }
                ],
                [
                    {
                        label: 'Appliances',
                        items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
                    }
                ]
            ]
        },
        {
            label: 'Sports',
            icon: 'pi pi-clock',
            items: [
                [
                    {
                        label: 'Football',
                        items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }]
                    }
                ],
                [
                    {
                        label: 'Running',
                        items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }]
                    }
                ],
                [
                    {
                        label: 'Swimming',
                        items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
                    }
                ],
                [
                    {
                        label: 'Tennis',
                        items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
                    }
                ]
            ]
        }
    ];

    return (
        <div className="card">
            <MegaMenu model={items} breakpoint="960px" />
        </div>
    )
}
        `};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.DocSectionText,{...e,children:(0,l.jsxs)("p",{children:["MegaMenu requires a collection of menuitems as its ",(0,l.jsx)("i",{children:"model"}),"."]})}),(0,l.jsx)("div",{className:"card",children:(0,l.jsx)(T,{model:t,breakpoint:"960px"})}),(0,l.jsx)(s.DocSectionCode,{code:a})]})}function E(e){let t={basic:`
{
    label: 'Log out',
    icon: 'pi pi-signout',
    command: () => {
        // Callback to run
    }
}
        `};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.DocSectionText,{...e,children:(0,l.jsxs)("p",{children:["The ",(0,l.jsx)("i",{children:"command"})," property of a menuitem defines the callback to run when an item is activated by click or a key event."]})}),(0,l.jsx)(s.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function H(e){let t={basic:`
import { MegaMenu } from 'primereact/megamenu';
        `};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.DocSectionText,{...e}),(0,l.jsx)(s.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}T.displayName="MegaMenu";let V=e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.DocSectionText,{...e}),(0,l.jsx)("div",{children:(0,l.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"megamenu"})})]});function D(e){let t={basic:`
{
    label: 'Log out',
    icon: 'pi pi-signout',
    url: 'https://www.react.dev/',
    command: () => {
        router.push('/installation');
    }
}
        `};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.DocSectionText,{...e,children:(0,l.jsxs)("p",{children:["Items with navigation are defined with ",(0,l.jsx)("i",{children:"command"})," property to be able to use a router link component, an external link or programmatic navigation."]})}),(0,l.jsx)(s.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}var B=e.i(10197),U=e.i(57724);function A(e){let t=e=>e.root?(0,l.jsxs)("a",{className:"flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase p-ripple",style:{borderRadius:"2rem"},children:[(0,l.jsx)("span",{className:e.icon}),(0,l.jsx)("span",{className:"ml-2",children:e.label}),(0,l.jsx)(y.Ripple,{})]}):e.image?(0,l.jsxs)("div",{className:"flex flex-column align-items-start gap-3",children:[(0,l.jsx)("img",{alt:"megamenu-demo",src:e.image,className:"w-full"}),(0,l.jsx)("span",{children:e.subtext}),(0,l.jsx)(U.Button,{className:"p-button p-component p-button-outlined",label:e.label})]}):(0,l.jsxs)("a",{className:"flex align-items-center p-3 cursor-pointer mb-2 gap-2 ",children:[(0,l.jsx)("span",{className:"inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem",children:(0,l.jsx)("i",{className:`${e.icon} text-lg`})}),(0,l.jsxs)("span",{className:"inline-flex flex-column gap-1",children:[(0,l.jsx)("span",{className:"font-medium text-lg text-900",children:e.label}),(0,l.jsx)("span",{className:"white-space-nowrap",children:e.subtext})]})]}),a=[{label:"Company",root:!0,template:t,items:[[{items:[{label:"Features",icon:"pi pi-list",subtext:"Subtext of item",template:t},{label:"Customers",icon:"pi pi-users",subtext:"Subtext of item",template:t},{label:"Case Studies",icon:"pi pi-file",subtext:"Subtext of item",template:t}]}],[{items:[{label:"Solutions",icon:"pi pi-shield",subtext:"Subtext of item",template:t},{label:"Faq",icon:"pi pi-question",subtext:"Subtext of item",template:t},{label:"Library",icon:"pi pi-search",subtext:"Subtext of item",template:t}]}],[{items:[{label:"Community",icon:"pi pi-comments",subtext:"Subtext of item",template:t},{label:"Rewards",icon:"pi pi-star",subtext:"Subtext of item",template:t},{label:"Investors",icon:"pi pi-globe",subtext:"Subtext of item",template:t}]}],[{items:[{image:"https://primefaces.org/cdn/primereact/images/uikit/uikit-system.png",label:"GET STARTED",subtext:"Build spectacular apps in no time.",template:t}]}]]},{label:"Resources",root:!0,template:t},{label:"Contact",root:!0,template:t}],n=(0,l.jsxs)("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("g",{mask:"url(#mask0_2642_713)",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z",fill:"var(--primary-color)"})}),(0,l.jsx)("path",{d:"M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z",fill:"var(--primary-color)"}),(0,l.jsx)("path",{d:"M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z",fill:"var(--primary-color)"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z",fill:"var(--primary-color)"}),(0,l.jsx)("path",{d:"M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z",fill:"var(--primary-color)"}),(0,l.jsx)("path",{d:"M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z",fill:"var(--primary-color)"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z",fill:"var(--primary-color)"}),(0,l.jsx)("path",{d:"M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z",fill:"var(--primary-color)"}),(0,l.jsx)("path",{d:"M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z",fill:"var(--primary-color)"}),(0,l.jsx)("path",{d:"M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z",fill:"var(--primary-color)"}),(0,l.jsx)("path",{d:"M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z",fill:"var(--primary-color)"})]}),r=(0,l.jsx)(B.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",shape:"circle"}),o={basic:`
<MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" className="p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} />
`,javascript:`
import React from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { InputText } from 'primereact/inputtext';
import { Ripple } from 'primereact/ripple';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const itemRenderer = (item, options) => {
        if (item.root) {
            return (
                <a className="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase p-ripple hover:surface-ground" style={{ borderRadius: '2rem' }} onClick={(e) => options.onClick(e)}>
                    <span className={item.icon} />
                    <span className="ml-2">{item.label}</span>
                    <Ripple />
                </a>
            );
        } else if (!item.image) {
            return (
                <a className="flex align-items-center p-3 cursor-pointer mb-2 gap-2 " onClick={options.onClick}>
                    <span className="inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem">
                        <i className={\`\${item.icon} text-lg\`}></i>
                    </span>
                    <span className="inline-flex flex-column gap-1">
                        <span className="font-medium text-lg text-900">{item.label}</span>
                        <span className="white-space-nowrap">{item.subtext}</span>
                    </span>
                </a>
            );
        } else {
            return (
                <div className="flex flex-column align-items-start gap-3" onClick={options.onClick}>
                    <img alt="megamenu-demo" src={item.image} className="w-full" />
                    <span>{item.subtext}</span>
                    <Button className="p-button p-component p-button-outlined" label={item.label} />
                </div>
            );
        }
    };

    const items = [
        {
            label: 'Company',
            root: true,
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [
                            { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [
                            { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [{ image: 'https://primefaces.org/cdn/primereact/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.', template: itemRenderer }]
                    }
                ]
            ]
        },
        {
            label: 'Resources',
            root: true,
            template: itemRenderer
        },
        {
            label: 'Contact',
            root: true,
            template: itemRenderer
        }
    ];

    const start = (
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g mask="url(#mask0_2642_713)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z"
                    fill="var(--primary-color)"
                >
            </g>
            <path d="M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z" fill="var(--primary-color)" />
            <path d="M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z" fill="var(--primary-color)" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z"
                fill="var(--primary-color)"
            />
            <path d="M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z" fill="var(--primary-color)" />
            <path d="M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z" fill="var(--primary-color)" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z" fill="var(--primary-color)" />
            <path d="M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z" fill="var(--primary-color)" />
            <path d="M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z" fill="var(--primary-color)" />
            <path d="M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z" fill="var(--primary-color)" />
            <path d="M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z" fill="var(--primary-color)" />
        </svg>
    );
    const end = <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />;

    return (
        <div className="card">
            <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" className="p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} />
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { InputText } from 'primereact/inputtext';
import { MenuItem } from 'primereact/menuitem';
import { Ripple } from 'primereact/ripple';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const itemRenderer = (item, options) => {
        if (item.root) {
            return (
                <a className="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase p-ripple hover:surface-ground" style={{ borderRadius: '2rem' }} onClick={(e) => options.onClick(e)}>
                    <span className={item.icon} />
                    <span className="ml-2">{item.label}</span>
                    <Ripple />
                </a>
            );
        } else if (!item.image) {
            return (
                <a className="flex align-items-center p-3 cursor-pointer mb-2 gap-2 " onClick={options.onClick}>
                    <span className="inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem">
                        <i className={\`\${item.icon} text-lg\`}></i>
                    </span>
                    <span className="inline-flex flex-column gap-1">
                        <span className="font-medium text-lg text-900">{item.label}</span>
                        <span className="white-space-nowrap">{item.subtext}</span>
                    </span>
                </a>
            );
        } else {
            return (
                <div className="flex flex-column align-items-start gap-3" onClick={options.onClick}>
                    <img alt="megamenu-demo" src={item.image} className="w-full" />
                    <span>{item.subtext}</span>
                    <Button className="p-button p-component p-button-outlined" label={item.label} />
                </div>
            );
        }
    };

    const items: MenuItem[] = [
        {
            label: 'Company',
            root: true,
            template: itemRenderer,
            items: [
                [
                    {
                        items: [
                            { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [
                            { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [
                            { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item', template: itemRenderer },
                            { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item', template: itemRenderer }
                        ]
                    }
                ],
                [
                    {
                        items: [{ image: 'https://primefaces.org/cdn/primereact/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.', template: itemRenderer }]
                    }
                ]
            ]
        },
        {
            label: 'Resources',
            root: true,
            template: itemRenderer
        },
        {
            label: 'Contact',
            root: true,
            template: itemRenderer
        }
    ];

    const start = (
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
    );
    const end = <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />;

    return (
        <div className="card">
            <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" className="p-3 surface-0 shadow-2" style={{ borderRadius: '3rem' }} />
        </div>
    )
}
        `};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.DocSectionText,{...e,children:(0,l.jsxs)("p",{children:["Custom content can be placed inside the megamenu using the ",(0,l.jsx)("i",{children:"start"})," and ",(0,l.jsx)("i",{children:"end"})," properties."]})}),(0,l.jsx)("div",{className:"card",children:(0,l.jsx)(T,{model:a,orientation:"horizontal",start:n,end:r,breakpoint:"960px",className:"p-3 surface-0 shadow-2",style:{borderRadius:"3rem"}})}),(0,l.jsx)(s.DocSectionCode,{code:o})]})}function Z(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.DocSectionText,{...e,children:(0,l.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,l.jsx)("div",{className:"doc-tablewrapper",children:(0,l.jsxs)("table",{className:"doc-table",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Name"}),(0,l.jsx)("th",{children:"Element"})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"p-megamenu"}),(0,l.jsx)("td",{children:"Container element."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"p-megamenu-root-list"}),(0,l.jsx)("td",{children:"List element."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"p-menuitem"}),(0,l.jsx)("td",{children:"Menuitem element."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"p-menuitem-text"}),(0,l.jsx)("td",{children:"Label of a menuitem."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"p-menuitem-icon"}),(0,l.jsx)("td",{children:"Icon of a menuitem."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"p-submenu-icon"}),(0,l.jsx)("td",{children:"Arrow icon of a submenu."})]})]})]})})]})}var K=e.i(41158);function F(e){let t={basic:`
const Tailwind = {
    megamenu: {
        root: ({ props }) => ({
            className: classNames('bg-gray-100 dark:bg-gray-900  border border-gray-300 dark:border-blue-900/40  rounded-md', 'flex relative', {
                'p-2 items-center': props.orientation == 'horizontal',
                'flex-col w-48 p-0 py-1': props.orientation !== 'horizontal'
            })
        }),
        menu: {
            className: classNames('m-0 sm:p-0 list-none relative', 'outline-none', 'flex items-center flex-wrap flex-row top-auto left-auto relative bg-transparent shadow-none w-auto')
        },
        menuitem: ({ props, context }) => ({
            className: classNames(
                'transition-shadow duration-200',
                { 'rounded-md': props.orientation == 'horizontal' },
                {
                    'text-gray-700 dark:text-white/80': !context.active,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': context.active
                },
                {
                    'w-auto': props.orientation === 'horizontal',
                    'w-full': props.orientation !== 'horizontal'
                },
                {
                    'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.active,
                    'hover:bg-blue-200 dark:hover:bg-blue-500': context.active
                }
            )
        }),
        headeraction: {
            className: classNames('select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative', 'py-3 px-5 select-none')
        },
        action: {
            className: classNames('select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative', 'py-3 px-5 select-none')
        },
        icon: {
            className: 'mr-2'
        },
        submenuicon: ({ props }) => ({
            className: classNames({
                'ml-2': props.orientation === 'horizontal',
                'ml-auto': props.orientation !== 'horizontal'
            })
        }),
        panel: ({ props }) => ({
            className: classNames('py-1 bg-white dark:bg-gray-900 border-0 shadow-md w-auto', 'absolute z-10', {
                'left-full top-0': props.orientation !== 'horizontal'
            })
        }),
        grid: 'flex',
        column: 'w-1/2',
        submenu: {
            className: classNames('m-0 list-none', 'py-1 w-48')
        },
        submenuheader: {
            className: classNames('m-0 py-3 px-5 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-semibold rounded-tr-md rounded-tl-md')
        }
    }
}
        `},a={javascript:`
import React from 'react';
import { MegaMenu } from 'primereact/megamenu';

export default function UnstyledDemo() {
    const items = [
        {
            label: 'Videos', icon: 'pi pi-fw pi-video',
            items: [
                [
                    {
                        label: 'Video 1',
                        items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                    },
                    {
                        label: 'Video 2',
                        items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                    }
                ],
                [
                    {
                        label: 'Video 3',
                        items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                    },
                    {
                        label: 'Video 4',
                        items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Users', icon: 'pi pi-fw pi-users',
            items: [
                [
                    {
                        label: 'User 1',
                        items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                    },
                    {
                        label: 'User 2',
                        items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                    },
                ],
                [
                    {
                        label: 'User 3',
                        items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                    },
                    {
                        label: 'User 4',
                        items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                    }
                ],
                [
                    {
                        label: 'User 5',
                        items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                    },
                    {
                        label: 'User 6',
                        items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Events', icon: 'pi pi-fw pi-calendar',
            items: [
                [
                    {
                        label: 'Event 1',
                        items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                    },
                    {
                        label: 'Event 2',
                        items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                    }
                ],
                [
                    {
                        label: 'Event 3',
                        items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                    },
                    {
                        label: 'Event 4',
                        items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                    }
                ]
            ]
        },
        {
            label: 'Settings', icon: 'pi pi-fw pi-cog',
            items: [
                [
                    {
                        label: 'Setting 1',
                        items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                    },
                    {
                        label: 'Setting 2',
                        items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                    },
                    {
                        label: 'Setting 3',
                        items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                    }
                ],
                [
                    {
                        label: 'Technology 4',
                        items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                    }
                ]
            ]
        }
    ];

    return (
        <div className="card">
            <MegaMenu model={items} breakpoint="960px" />
        </div>
    )
}
    `};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.DocSectionText,{...e,children:[(0,l.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,l.jsx)(K.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,l.jsx)(s.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,l.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,l.jsx)(s.DocSectionCode,{code:a,embedded:!0})]})})}function P(e){let t=[{label:"Furniture",icon:"pi pi-box",items:[[{label:"Living Room",items:[{label:"Accessories"},{label:"Armchair"},{label:"Coffee Table"},{label:"Couch"},{label:"TV Stand"}]}],[{label:"Kitchen",items:[{label:"Bar stool"},{label:"Chair"},{label:"Table"}]},{label:"Bathroom",items:[{label:"Accessories"}]}],[{label:"Bedroom",items:[{label:"Bed"},{label:"Chaise lounge"},{label:"Cupboard"},{label:"Dresser"},{label:"Wardrobe"}]}],[{label:"Office",items:[{label:"Bookcase"},{label:"Cabinet"},{label:"Chair"},{label:"Desk"},{label:"Executive Chair"}]}]]},{label:"Electronics",icon:"pi pi-mobile",items:[[{label:"Computer",items:[{label:"Monitor"},{label:"Mouse"},{label:"Notebook"},{label:"Keyboard"},{label:"Printer"},{label:"Storage"}]}],[{label:"Home Theather",items:[{label:"Projector"},{label:"Speakers"},{label:"TVs"}]}],[{label:"Gaming",items:[{label:"Accessories"},{label:"Console"},{label:"PC"},{label:"Video Games"}]}],[{label:"Appliances",items:[{label:"Coffee Machine"},{label:"Fridge"},{label:"Oven"},{label:"Vaccum Cleaner"},{label:"Washing Machine"}]}]]},{label:"Sports",icon:"pi pi-clock",items:[[{label:"Football",items:[{label:"Kits"},{label:"Shoes"},{label:"Shorts"},{label:"Training"}]}],[{label:"Running",items:[{label:"Accessories"},{label:"Shoes"},{label:"T-Shirts"},{label:"Shorts"}]}],[{label:"Swimming",items:[{label:"Kickboard"},{label:"Nose Clip"},{label:"Swimsuits"},{label:"Paddles"}]}],[{label:"Tennis",items:[{label:"Balls"},{label:"Rackets"},{label:"Shoes"},{label:"Training"}]}]]}],a={basic:`
<MegaMenu model={items} orientation="vertical" breakpoint="960px" />        
`,javascript:`
import React from 'react'; 
import { MegaMenu } from 'primereact/megamenu';

export default function VerticalDemo() {
    const items = [
        {
            label: 'Furniture',
            icon: 'pi pi-box',
            items: [
                [
                    {
                        label: 'Living Room',
                        items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
                    }
                ],
                [
                    {
                        label: 'Kitchen',
                        items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
                    },
                    {
                        label: 'Bathroom',
                        items: [{ label: 'Accessories' }]
                    }
                ],
                [
                    {
                        label: 'Bedroom',
                        items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
                    }
                ],
                [
                    {
                        label: 'Office',
                        items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
                    }
                ]
            ]
        },
        {
            label: 'Electronics',
            icon: 'pi pi-mobile',
            items: [
                [
                    {
                        label: 'Computer',
                        items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
                    }
                ],
                [
                    {
                        label: 'Home Theather',
                        items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
                    }
                ],
                [
                    {
                        label: 'Gaming',
                        items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
                    }
                ],
                [
                    {
                        label: 'Appliances',
                        items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
                    }
                ]
            ]
        },
        {
            label: 'Sports',
            icon: 'pi pi-clock',
            items: [
                [
                    {
                        label: 'Football',
                        items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }]
                    }
                ],
                [
                    {
                        label: 'Running',
                        items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }]
                    }
                ],
                [
                    {
                        label: 'Swimming',
                        items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
                    }
                ],
                [
                    {
                        label: 'Tennis',
                        items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
                    }
                ]
            ]
        }
    ];

    return (
        <div className="card">
            <MegaMenu model={items} orientation="vertical" breakpoint="960px" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { MegaMenu } from 'primereact/megamenu';
import { MenuItem } from 'primereact/menuitem';

export default function VerticalDemo() {
    const items: MenuItem[] = [
        {
            label: 'Furniture',
            icon: 'pi pi-box',
            items: [
                [
                    {
                        label: 'Living Room',
                        items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
                    }
                ],
                [
                    {
                        label: 'Kitchen',
                        items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
                    },
                    {
                        label: 'Bathroom',
                        items: [{ label: 'Accessories' }]
                    }
                ],
                [
                    {
                        label: 'Bedroom',
                        items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
                    }
                ],
                [
                    {
                        label: 'Office',
                        items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
                    }
                ]
            ]
        },
        {
            label: 'Electronics',
            icon: 'pi pi-mobile',
            items: [
                [
                    {
                        label: 'Computer',
                        items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
                    }
                ],
                [
                    {
                        label: 'Home Theather',
                        items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
                    }
                ],
                [
                    {
                        label: 'Gaming',
                        items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
                    }
                ],
                [
                    {
                        label: 'Appliances',
                        items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
                    }
                ]
            ]
        },
        {
            label: 'Sports',
            icon: 'pi pi-clock',
            items: [
                [
                    {
                        label: 'Football',
                        items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }]
                    }
                ],
                [
                    {
                        label: 'Running',
                        items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }]
                    }
                ],
                [
                    {
                        label: 'Swimming',
                        items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
                    }
                ],
                [
                    {
                        label: 'Tennis',
                        items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
                    }
                ]
            ]
        }
    ];

    return (
        <div className="card">
            <MegaMenu model={items} orientation="vertical" breakpoint="960px" />
        </div>
    )
}
        `};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.DocSectionText,{...e,children:(0,l.jsxs)("p",{children:["Layout of the MegaMenu is changed with the ",(0,l.jsx)("i",{children:"orientation"})," property that accepts ",(0,l.jsx)("i",{children:"horizontal"})," and ",(0,l.jsx)("i",{children:"vertical"})," as options."]})}),(0,l.jsx)("div",{className:"card",children:(0,l.jsx)(T,{model:t,orientation:"vertical",breakpoint:"960px"})}),(0,l.jsx)(s.DocSectionCode,{code:a})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:V},{id:"pt.megamenu.options",label:"MegaMenu PT Options",component:t.default}];return(0,l.jsx)(a.DocComponent,{title:"React MegaMenu Component",header:"MegaMenu",description:"MegaMenu is navigation component that displays submenus together.",componentDocs:[{id:"import",label:"Import",component:H},{id:"basic",label:"Basic",component:I},{id:"Vertical",label:"Vertical",component:P},{id:"template",label:"Template",component:A},{id:"command",label:"Command",component:E},{id:"router",label:"Router",component:D},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["MegaMenu","MenuItem"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:Z},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:F}]}]})}],76396)},89436,(e,l,t)=>{let a="/megamenu";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(76396)]),l.hot&&l.hot.dispose(function(){window.__NEXT_P.push([a])})}]);