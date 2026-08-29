(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,55280,e=>{"use strict";var t=e.i(91398),l=e.i(88850),o=e.i(82948),n=e.i(5180),s=e.i(28137);function i(){let e={basic:`
<span id="dd1">Options</span>
<TreeSelect aria-labelledby="dd1" />

<TreeSelect aria-label="Options" />
    `};return(0,t.jsxs)(s.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Value to describe the component can either be provided with ",(0,t.jsx)("i",{children:"aria-labelledby"})," or ",(0,t.jsx)("i",{children:"aria-label"})," props. The treeselect element has a ",(0,t.jsx)("i",{children:"combobox"})," role in addition to ",(0,t.jsx)("i",{children:"aria-haspopup"})," and ",(0,t.jsx)("i",{children:"aria-expanded"})," attributes. The relation between the combobox and the popup is created with ",(0,t.jsx)("i",{children:"aria-controls"})," that refers to the id of the popup."]}),(0,t.jsxs)("p",{children:["The popup list has an id that refers to the ",(0,t.jsx)("i",{children:"aria-controls"})," attribute of the ",(0,t.jsx)("i",{children:"combobox"})," element and uses ",(0,t.jsx)("i",{children:"tree"})," as the role. Each list item has a ",(0,t.jsx)("i",{children:"treeitem"})," role along with ",(0,t.jsx)("i",{children:"aria-label"}),", ",(0,t.jsx)("i",{children:"aria-selected"})," ","and ",(0,t.jsx)("i",{children:"aria-expanded"})," attributes. In checkbox selection, ",(0,t.jsx)("i",{children:"aria-checked"})," is used instead of ",(0,t.jsx)("i",{children:"aria-selected"}),". Checkbox and toggle icons are hidden from screen readers as their parent element with ",(0,t.jsx)("i",{children:"treeitem"})," role and attributes are used instead for readers and keyboard support. The container element of a treenode has the ",(0,t.jsx)("i",{children:"group"})," role. The ",(0,t.jsx)("i",{children:"aria-setsize"}),", ",(0,t.jsx)("i",{children:"aria-posinset"})," and ",(0,t.jsx)("i",{children:"aria-level"})," attributes are calculated implicitly and added to each treeitem."]}),(0,t.jsxs)("p",{children:["If filtering is enabled, ",(0,t.jsx)("i",{children:"filterInputProps"})," can be defined to give ",(0,t.jsx)("i",{children:"aria-*"})," props to the filter input element."]}),(0,t.jsx)(n.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Closed State Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the treeselect element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Opens the popup and moves visual focus to the selected treenode, if there is none then first treenode receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."})]})]})]})}),(0,t.jsx)("h3",{children:"Popup Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"tab"})]}),(0,t.jsx)("td",{children:"Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Selects the focused option, closes the popup if selection mode is single."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Selects the focused option, closes the popup if selection mode is single."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the popup, moves focus to the treeselect element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next treenode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous treenode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"right arrow"})}),(0,t.jsx)("td",{children:"If node is closed, opens the node otherwise moves focus to the first child node."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"If node is open, closes the node otherwise moves focus to the parent node."})]})]})]})}),(0,t.jsx)("h3",{children:"Filter Input Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the treeselect element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the treeselect element."})]})]})]})}),(0,t.jsx)("h3",{children:"Close Button Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the treeselect element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the treeselect element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the treeselect element."})]})]})]})})]})}var r=e.i(91788),a=e.i(4242),c=e.i(10836),d=e.i(183),p=e.i(15498),u=e.i(14768),m=e.i(60150),h=e.i(20484),f=e.i(36785),x=e.i(4632),v=e.i(71834),S=e.i(48214),N=e.i(92058),y=e.i(55590),b=e.i(81201),j=e.i(50901),g=e.i(64691),w=e.i(82857),T=e.i(45543),k=e.i(75366),C=e.i(51551),E=e.i(28653),K=e.i(63957),D=e.i(3935);let I=`
@layer primereact {
    .p-treeselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
    }

    .p-treeselect-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-treeselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-treeselect-label  {
        display: block;
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .p-treeselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-treeselect-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }

    .p-treeselect .p-treeselect-panel {
        min-width: 100%;
    }

    .p-treeselect-items-wrapper {
        overflow: auto;
    }

    .p-treeselect-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-treeselect-filter-container {
        position: relative;
        flex: 1 1 auto;
    }

    .p-treeselect-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }

    .p-treeselect-filter-container .p-inputtext {
        width: 100%;
    }

    .p-treeselect-close {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        overflow: hidden;
        position: relative;
        margin-left: auto;
    }

    .p-treeselect-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }

    .p-fluid .p-treeselect {
        display: flex;
}
}
`,F=p.ComponentBase.extend({defaultProps:{__TYPE:"TreeSelect",appendTo:null,ariaLabel:null,ariaLabelledBy:null,className:null,closeIcon:null,clearIcon:null,disabled:!1,display:"comma",dropdownIcon:null,emptyMessage:null,expandedKeys:null,filter:!1,filterBy:"label",filterDelay:300,filterIcon:null,filterInputAutoFocus:!0,filterLocale:void 0,filterMode:"lenient",filterPlaceholder:null,filterTemplate:null,filterValue:null,inputId:null,inputRef:null,invalid:!1,variant:null,metaKeySelection:!1,name:null,nodeTemplate:null,onChange:null,onFocus:null,onBlur:null,onFilterValueChange:null,onHide:null,onNodeClick:null,onNodeCollapse:null,onNodeDoubleClick:null,onNodeExpand:null,onNodeSelect:null,onNodeUnselect:null,onShow:null,options:null,panelClassName:null,panelFooterTemplate:null,panelHeaderTemplate:null,panelStyle:null,placeholder:null,resetFilterOnHide:!1,scrollHeight:"400px",selectionMode:"single",showClear:!1,style:null,tabIndex:null,togglerTemplate:null,transitionOptions:null,value:null,valueTemplate:null,children:void 0},css:{classes:{root:({props:e,focusedState:t,context:l,overlayVisibleState:o,isValueEmpty:n})=>(0,D.classNames)("p-treeselect p-component p-inputwrapper",{"p-treeselect-chip":"chip"===e.display,"p-treeselect-clearable":e.showClear&&!e.disabled,"p-disabled":e.disabled,"p-invalid":e.invalid,"p-focus":t,"p-variant-filled":e.variant?"filled"===e.variant:l&&"filled"===l.inputStyle,"p-inputwrapper-filled":!n,"p-inputwrapper-focus":t||o}),label:({props:e,isValueEmpty:t,getLabel:l})=>(0,D.classNames)("p-treeselect-label",{"p-placeholder":l()===e.placeholder,"p-treeselect-label-empty":!e.placeholder&&t}),panel:({panelProps:e,context:t})=>(0,D.classNames)("p-treeselect-panel p-component",e.panelClassName,{"p-input-filled":t&&"filled"===t.inputStyle||"filled"===a.default.inputStyle,"p-ripple-disabled":t&&!1===t.ripple||!1===a.default.ripple}),labelContainer:"p-treeselect-label-container",tokenLabel:"p-treeselect-token-label",token:"p-treeselect-token",trigger:"p-treeselect-trigger",triggerIcon:"p-treeselect-trigger-icon p-clickable",emptyMessage:"p-treeselect-empty-message",filterContainer:"p-treeselect-filter-container",filter:"p-treeselect-filter p-inputtext p-component",filterIcon:"p-treeselect-filter-icon",closeIcon:"p-treeselect-close-icon",clearIcon:"p-treeselect-clear-icon p-clickable",closeButton:"p-treeselect-close p-link",header:"p-treeselect-header",wrapper:"p-treeselect-items-wrapper",transition:"p-connected-overlay"},styles:I}});var R=e.i(87350),H=e.i(85971);let O=r.forwardRef((e,l)=>{let o,n,s,i,a=(0,m.useMergeProps)(),d=r.useContext(c.PrimeReactContext),{ptm:p,cx:u}=e,h=(t,l)=>p(t,{hostName:e.hostName,...l}),f=(o={maxHeight:e.scrollHeight||"auto"},n=a({className:u("panel",{panelProps:e,context:d}),style:e.panelStyle,onKeyDown:t=>{"Escape"===t.key&&(t.preventDefault(),e.hide())},onClick:e.onClick},h("panel")),s=a({className:u("wrapper"),style:o},h("wrapper")),i=a({classNames:u("transition"),in:e.in,timeout:{enter:120,exit:100},options:e.transitionOptions,unmountOnExit:!0,onEnter:e.onEnter,onEntered:e.onEntered,onExit:e.onExit,onExited:e.onExited},h("transition")),(0,t.jsx)(R.CSSTransition,{nodeRef:l,...i,children:(0,t.jsxs)("div",{ref:l,...n,children:[e.firstHiddenFocusableElementOnOverlay,e.header,(0,t.jsx)("div",{...s,children:e.children}),e.footer,e.lastHiddenFocusableElementOnOverlay]})}));return(0,t.jsx)(H.Portal,{element:f,appendTo:e.appendTo})});O.displayName="TreeSelectPanel";let M=r.memo(r.forwardRef((e,l)=>{let o,n,s,i,I,R,H,M,B,P,U,A,L,_,W,V,X,z,J,q,Z=(0,m.useMergeProps)(),$=r.useContext(c.PrimeReactContext),Y=F.getProps(e,$),[G,Q]=r.useState(!1),[ee,et]=r.useState(!1),[el,eo]=r.useState(Y.expandedKeys),[en,es,ei]=(0,u.useDebounce)("",Y.filterDelay||0),er=r.useRef(null),ea=r.useRef(null),ec=r.useRef(null),ed=r.useRef(Y.inputRef),ep=r.useRef(null),eu=r.useRef(null),em=r.useRef(null),eh=r.useRef(null),ef=r.useRef(null),ex=r.useRef(!1),ev=r.useRef(""),eS=Y.onToggle?Y.expandedKeys:el,eN=Y.onFilterValueChange?Y.filterValue:es,ey=C.ObjectUtils.isEmpty(Y.value),eb="single"===Y.selectionMode,ej="checkbox"===Y.selectionMode,eg=C.ObjectUtils.isNotEmpty(Y.tooltip),ew={props:Y,state:{focused:G,overlayVisible:ee,expandedKeys:eS,filterValue:eN}},{ptm:eT,cx:ek,isUnstyled:eC}=F.setMetaData(ew);(0,p.useHandleStyle)(F.css.styles,eC,{name:"treeselect"});let eE={filter:e=>e_(e),reset:()=>eW()},[eK,eD]=(0,f.useOverlayListener)({target:er,overlay:ea,listener:(e,{valid:t,type:l})=>{t&&("outside"===l||$.hideOverlaysOnDocumentScrolling?eR():T.DomHandler.isDocument(e.target)||eV())},when:ee}),eI=()=>eY.length?eY.map(e=>e.label).join(", "):Y.placeholder,eF=()=>{et(!0)},eR=()=>{et(!1),ed.current&&T.DomHandler.focus(ed.current)},eH=e=>{Y.onChange&&(eu.current=!0,Y.onChange({originalEvent:e,value:void 0,stopPropagation:()=>{e?.stopPropagation()},preventDefault:()=>{e?.preventDefault()},target:{name:Y.name,id:Y.id,value:void 0}}))},eO=e=>{("Enter"===e.key||"Space"===e.code)&&(eH(e),e.preventDefault())},eM=(e,t)=>{switch(e.code){case"ArrowDown":e.preventDefault(),eq();break;case"ArrowUp":e.preventDefault(),ed.current&&T.DomHandler.focus(ed.current);break;case"Enter":case"NumpadEnter":e.preventDefault(),t&&eR();break;case"Escape":eU(e)}},eB=e=>{ee||(ex.current=!0,eF(),e.preventDefault())},eP=e=>{ee?eR():eB(e),e.preventDefault()},eU=e=>{ee&&(eR(),e.preventDefault())},eA=(e,t=!1)=>{!t&&ee&&eL()&&(T.DomHandler.focus(eh.current),e.preventDefault())},eL=()=>T.DomHandler.getFocusableElements(ea.current,':not([data-p-hidden-focusable="true"])').length>0,e_=e=>{let t=e.target.value;Y.onFilterValueChange?Y.onFilterValueChange({originalEvent:e,value:t}):ei(t)},eW=()=>{ei("")},eV=()=>{T.DomHandler.alignOverlay(ea.current,ep.current.parentElement,Y.appendTo||$&&$.appendTo||a.default.appendTo)},eX=(e,t,l)=>{if(e){if(ez(e,t)&&(l.push(e),delete t[e.key]),Object.keys(t).length&&e.children)for(let o of e.children)eX(o,t,l)}else for(let e of Y.options)eX(e,t,l)},ez=(e,t)=>ej?t[e.key]&&t[e.key].checked:t[e.key],eJ=()=>{let e=eb?{[`${Y.value}`]:!0}:{...Y.value};eo({}),e&&Y.options&&eZ(null,null,e)},eq=()=>{let e=[...T.DomHandler.find(em.current?.getElement(),'[data-pc-section="node"]')].find(e=>"0"===e.getAttribute("tabindex"));T.DomHandler.focus(e)},eZ=(e,t,l)=>{if(e){if(ez(e,l)&&(e$(t),delete l[e.key]),Object.keys(l).length&&e.children)for(let o of e.children)t.push(e.key),eZ(o,t,l)}else for(let e of Y.options)eZ(e,[],l)},e$=e=>{if(e.length>0){let t={...el||{}};for(let l of e)t[l]=!0;eo(t)}};r.useImperativeHandle(l,()=>({props:Y,clear:eH,show:eF,hide:eR,focus:()=>T.DomHandler.focus(ed.current),getElement:()=>er.current})),r.useEffect(()=>{C.ObjectUtils.combinedRefs(ed,Y.inputRef)},[ed,Y.inputRef]),(0,h.useMountEffect)(()=>{eJ(),ev.current=(0,E.UniqueComponentId)()+"_list",Y.autoFocus&&T.DomHandler.focus(ed.current,Y.autoFocus),eV()}),(0,v.useUpdateEffect)(()=>{ee&&Y.filter&&eV()}),(0,v.useUpdateEffect)(()=>{eJ()},[Y.options]),(0,v.useUpdateEffect)(()=>{ex.current&&ee&&(ex.current=!1,eq())},[ee]),(0,v.useUpdateEffect)(()=>{ee&&el&&eV()},[el]),(0,v.useUpdateEffect)(()=>{ee&&(eu.current||eJ(),eu.current=!1)},[Y.value]),(0,x.useUnmountEffect)(()=>{K.ZIndexUtils.clear(ea.current)});let eY=(o=[],C.ObjectUtils.isNotEmpty(Y.value)&&Y.options&&eX(null,eb?{[`${Y.value}`]:!0}:{...Y.value},o),o),eG=F.getOtherProps(Y),eQ=C.ObjectUtils.reduceKeys(eG,T.DomHandler.ARIA_PROPS),e0=Z({ref:eh,role:"presentation",className:"p-hidden-accessible p-hidden-focusable",tabIndex:0,onFocus:e=>{let t=e.relatedTarget===ed.current?T.DomHandler.getFirstFocusableElement(ea.current,':not([data-p-hidden-focusable="true"])'):ed.current;T.DomHandler.focus(t)},"aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0},eT("firstHiddenFocusableElementOnOverlay")),e1=Z({ref:ef,role:"presentation",className:"p-hidden-accessible p-hidden-focusable",tabIndex:0,onFocus:e=>{let t=e.relatedTarget===ed.current?T.DomHandler.getLastFocusableElement(ea.current,':not([data-p-hidden-focusable="true"])'):ed.current;T.DomHandler.focus(t)},"aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0},eT("lastHiddenFocusableElementOnOverlay")),e2=Z({ref:er,className:(0,D.classNames)(Y.className,ek("root",{context:$,focusedState:G,overlayVisibleState:ee,isValueEmpty:ey})),style:Y.style,onClick:e=>{Y.disabled||ea.current&&ea.current.contains(e.target)||T.DomHandler.isAttributeEquals(e.target,"data-pc-section","closebutton")||(T.DomHandler.focus(ed.current),ee?eR():eF())}},F.getOtherProps(Y),eT("root")),e5=(n=Z({className:"p-hidden-accessible"},eT("hiddenInputWrapper")),s=Z({ref:ed,role:"listbox",id:Y.inputId,type:"text","aria-expanded":ee,"aria-label":Y.ariaLabel,"aria-labelledby":Y.ariaLabelledBy,"aria-haspopup":"tree","aria-controls":ev.current,onFocus:()=>{Q(!0),Y.onFocus&&Y.onFocus()},onBlur:()=>{Q(!1),Y.onBlur&&Y.onBlur()},onKeyDown:e=>{switch(e.code){case"ArrowDown":eB(e);break;case"Space":case"Enter":case"NumpadEnter":eP(e);break;case"Escape":eU(e);break;case"Tab":ee&&(e.preventDefault(),e.shiftKey?eq():eA(e))}},disabled:Y.disabled,tabIndex:Y.tabIndex,...eQ},eT("hiddenInput")),(0,t.jsx)("div",{...n,children:(0,t.jsx)("input",{...s,readOnly:!0})})),e8=(i=Z({className:ek("token")},eT("token")),I=Z({className:ek("tokenLabel")},eT("tokenLabel")),R=Z({className:ek("labelContainer")},eT("labelContainer")),H=Z({className:ek("label",{isValueEmpty:ey,getLabel:eI})},eT("label")),M=null,Y.valueTemplate?M=C.ObjectUtils.getJSXElement(Y.valueTemplate,eY,Y):"comma"===Y.display?M=eI()||"empty":"chip"===Y.display&&(M=(0,t.jsxs)(t.Fragment,{children:[eY&&eY.map((e,l)=>(0,r.createElement)("div",{...i,key:`${e.key}_${l}`},(0,t.jsx)("span",{...I,children:e.label}))),ey&&(Y.placeholder||"empty")]})),(0,t.jsx)("div",{...R,children:(0,t.jsx)("div",{...H,children:M})})),e3=(B=Z({ref:ep,className:ek("trigger"),role:"button","aria-haspopup":"tree","aria-expanded":ee},eT("trigger")),P=Z({className:ek("triggerIcon")},eT("triggerIcon")),U=Y.dropdownIcon||(0,t.jsx)(S.ChevronDownIcon,{...P}),A=k.IconUtils.getJSXIcon(U,{...P},{props:Y}),(0,t.jsx)("div",{...B,children:A})),e4=(()=>{if(null!=Y.value&&Y.showClear&&!Y.disabled){let e=Z({className:ek("clearIcon"),onPointerUp:eH,tabIndex:Y.tabIndex||"0",onKeyDown:eO,"aria-label":(0,d.localeOption)("clear")},eT("clearIcon")),l=Y.clearIcon||(0,t.jsx)(y.TimesIcon,{...e});return k.IconUtils.getJSXIcon(l,{...e},{props:Y})}return null})(),e7=(0,t.jsx)(w.Tree,{ref:em,id:ev.current,emptyMessage:Y.emptyMessage,expandedKeys:eS,filter:Y.filter,filterBy:Y.filterBy,filterDelay:Y.filterDelay,filterLocale:Y.filterLocale,filterMode:Y.filterMode,filterPlaceholder:Y.filterPlaceholder,filterValue:eN,metaKeySelection:Y.metaKeySelection,nodeTemplate:Y.nodeTemplate,onCollapse:Y.onNodeCollapse,onExpand:Y.onNodeExpand,onFilterValueChange:e=>{ei(e.value)},onNodeClick:Y.onNodeClick,onNodeDoubleClick:Y.onNodeDoubleClick,onSelect:e=>{Y.onNodeSelect&&Y.onNodeSelect(e),eb&&eR()},onSelectionChange:e=>{Y.onChange&&(eu.current=!0,Y.onChange({originalEvent:e.originalEvent,value:e.value,stopPropagation:()=>{e.originalEvent.stopPropagation()},preventDefault:()=>{e.originalEvent.preventDefault()},target:{name:Y.name,id:Y.id,value:e.value}}))},onToggle:e=>{Y.onToggle?Y.onToggle(e):eo(e.value)},onUnselect:e=>{Y.onNodeUnselect&&Y.onNodeUnselect(e),ej&&e.originalEvent.stopPropagation()},selectionKeys:Y.value,selectionMode:Y.selectionMode,showHeader:!1,togglerTemplate:Y.togglerTemplate,value:Y.options,pt:eT("tree"),__parentMetadata:{parent:ew}}),e9=(L=(()=>{if(Y.filter){let e=Y.onFilterValueChange?Y.filterValue:en;e=C.ObjectUtils.isNotEmpty(e)?e:"";let l=Z({className:ek("filterContainer")},eT("filterContainer")),o=Z({ref:ec,type:"text",value:e,autoComplete:"off",className:ek("filter"),placeholder:Y.filterPlaceholder,onKeyDown:e=>eM(e,!1),onChange:e_,disabled:Y.disabled},eT("filter")),n=Z({className:ek("filterIcon")},eT("filterIcon")),s=Y.filterIcon||(0,t.jsx)(N.SearchIcon,{...n}),i=k.IconUtils.getJSXIcon(s,{...n},{props:Y}),r=(0,t.jsxs)("div",{...l,children:[(0,t.jsx)("input",{...o}),i]});if(Y.filterTemplate){let e={className:"p-treeselect-filter-container",element:r,filterOptions:eE,filterInputKeyDown:e=>eM(e,()=>{}),filterInputChange:e_,filterIconClassName:"p-dropdown-filter-icon",props:Y};r=C.ObjectUtils.getJSXElement(Y.filterTemplate,e)}return(0,t.jsx)(t.Fragment,{children:r})}})(),_=Z({className:ek("closeIcon"),"aria-hidden":!0},eT("closeIcon")),W=Y.closeIcon||(0,t.jsx)(y.TimesIcon,{..._}),V=k.IconUtils.getJSXIcon(W,{..._},{props:Y}),X=Z({type:"button",className:ek("closeButton"),onKeyDown:e=>eM(e,!0),onClick:eR,"aria-label":(0,d.ariaLabel)("close")},eT("closeButton")),z=Z({className:ek("header")},eT("header")),J=(0,t.jsxs)("button",{...X,children:[V,(0,t.jsx)(j.Ripple,{})]}),q=(0,t.jsxs)("div",{...z,children:[L,J]}),Y.panelHeaderTemplate?(0,t.jsxs)("div",{children:[q,C.ObjectUtils.getJSXElement(Y.panelHeaderTemplate,{className:"p-treeselect-header",filterElement:L,closeElement:J,closeElementClassName:"p-treeselect-close p-link",closeIconClassName:"p-treeselect-close-icon",onCloseClick:eR,element:q,props:Y})]}):q),e6=C.ObjectUtils.getJSXElement(Y.panelFooterTemplate,Y);return(0,t.jsxs)("div",{...e2,children:[e5,e8,e4,e3,(0,t.jsx)(O,{hostName:"TreeSelect",ref:ea,appendTo:Y.appendTo,panelStyle:Y.panelStyle,panelClassName:Y.panelClassName,scrollHeight:Y.scrollHeight,onClick:e=>{b.OverlayService.emit("overlay-click",{originalEvent:e,target:er.current})},header:e9,hide:eR,footer:e6,firstHiddenFocusableElementOnOverlay:(0,t.jsx)("span",{...e0}),lastHiddenFocusableElementOnOverlay:(0,t.jsx)("span",{...e1}),transitionOptions:Y.transitionOptions,in:ee,onEnter:()=>{let e;K.ZIndexUtils.set("overlay",ea.current,$&&$.autoZIndex||a.default.autoZIndex,$&&$.zIndex.overlay||a.default.zIndex.overlay),T.DomHandler.addStyles(ea.current,{position:"absolute",top:"0",left:"0"}),eq(),eV(),(e=T.DomHandler.findSingle(ea.current,'[data-pc-section="content"][data-p-highlight="true"]'))&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},onEntered:()=>{eK(),Y.filter&&Y.filterInputAutoFocus&&T.DomHandler.focus(ec.current,Y.filterInputAutoFocus),Y.onShow&&Y.onShow()},onExit:()=>{eD()},onExited:()=>{Y.filter&&Y.resetFilterOnHide&&eW(),K.ZIndexUtils.clear(ea.current),Y.onHide&&Y.onHide()},ptm:eT,cx:ek,children:e7}),eg&&(0,t.jsx)(g.Tooltip,{target:er,content:Y.tooltip,pt:eT("tooltip"),...Y.tooltipOptions})]})}));M.displayName="TreeSelect";var B=e.i(41158),P=e.i(57345);function U(e){let[l,o]=(0,r.useState)(null),[i,a]=(0,r.useState)(null);(0,r.useEffect)(()=>{P.NodeService.getTreeNodes().then(e=>o(e))},[]);let c={basic:`
<TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
    className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        `,javascript:`
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function BasicDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
                className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeEvent } from 'primereact/treeselect';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function BasicDemo() {
    const [nodes, setNodes] = useState<TreeNode[] | null>(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value)} 
                className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        </div>
    );
}
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
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["TreeSelect is used as a controlled component with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties along with an ",(0,t.jsx)("i",{children:"options"})," collection. Internally ",(0,t.jsx)(B.default,{href:"tree",children:"Tree"})," component is used so the options model is based on TreeNode API."]}),(0,t.jsxs)("p",{children:["In single selection mode, value binding should be the ",(0,t.jsx)("i",{children:"key"})," value of a node."]})]}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(M,{value:i,onChange:e=>a(e.value),options:l,className:"md:w-20rem w-full",placeholder:"Select Item"})}),(0,t.jsx)(n.DocSectionCode,{code:c,service:["NodeService"]})]})}function A(e){let[l,o]=(0,r.useState)(null),[i,a]=(0,r.useState)(null);(0,r.useEffect)(()=>{P.NodeService.getTreeNodes().then(e=>o(e))},[]);let c={basic:`
{
    '0-0': {
        partialChecked: false,
        checked: true
    }
}
        `},d={basic:`
<TreeSelect value={selectedNodeKeys} onChange={(e) => setSelectedNodeKeys(e.value)} options={nodes} metaKeySelection={false}  
    className="md:w-20rem w-full" selectionMode="checkbox" display="chip" placeholder="Select Items"></TreeSelect>
        `,javascript:`
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function CheckboxDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKeys} onChange={(e) => setSelectedNodeKeys(e.value)} options={nodes} 
                metaKeySelection={false} className="md:w-20rem w-full" selectionMode="checkbox" display="chip" placeholder="Select Items"></TreeSelect>
        </div>    
    );
}
        `,typescript:`
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeEvent } from 'primereact/treeselect';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function CheckboxDemo() {
    const [nodes, setNodes] = useState<TreeNode[] | null>(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState<string[]>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKeys} onChange={(e: TreeSelectChangeEvent) => setSelectedNodeKeys(e.value)} options={nodes} 
                metaKeySelection={false} className="md:w-20rem w-full" selectionMode="checkbox" display="chip" placeholder="Select Items"></TreeSelect>
        </div>
    );
}
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
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Selection of multiple nodes via checkboxes is enabled by configuring ",(0,t.jsx)("i",{children:"selectionMode"})," as ",(0,t.jsx)("i",{children:"checkbox"}),"."]}),(0,t.jsxs)("p",{children:["In checkbox selection mode, value binding should be a key-value pair where key is the node key and value is an object that has ",(0,t.jsx)("i",{children:"checked"})," and ",(0,t.jsx)("i",{children:"partialChecked"})," properties to represent the checked state of a node obje to indicate selection."]})]}),(0,t.jsx)(n.DocSectionCode,{code:c,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(M,{value:i,onChange:e=>a(e.value),options:l,metaKeySelection:!1,className:"md:w-20rem w-full",selectionMode:"checkbox",display:"chip",placeholder:"Select Items"})}),(0,t.jsx)(n.DocSectionCode,{code:d,service:["NodeService"]})]})}function L(e){let[l,o]=(0,r.useState)(null),[i,a]=(0,r.useState)(null);(0,r.useEffect)(()=>{P.NodeService.getTreeNodes().then(e=>o(e))},[]);let c={basic:`
<TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
    className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        `,javascript:`
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function BasicDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
                className="md:w-20rem w-full" placeholder="Select Item" showClear></TreeSelect>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeEvent } from 'primereact/treeselect';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function BasicDemo() {
    const [nodes, setNodes] = useState<TreeNode[] | null>(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value)} 
                className="md:w-20rem w-full" placeholder="Select Item" showClear></TreeSelect>
        </div>
    );
}
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
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"showClear"})," is enabled, a clear icon is added to reset the TreeSelect."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(M,{value:i,onChange:e=>a(e.value),options:l,className:"md:w-20rem w-full",placeholder:"Select Item",showClear:!0})}),(0,t.jsx)(n.DocSectionCode,{code:c,service:["NodeService"]})]})}var _=e.i(57724);function W(e){let[l,o]=(0,r.useState)(null),[i,a]=(0,r.useState)(null),[c,d]=(0,r.useState)({}),p=(e,t)=>{if(e.children&&e.children.length)for(let l of(t[e.key]=!0,e.children))p(l,t)},u=(0,t.jsxs)("div",{className:"p-3 pb-0",children:[(0,t.jsx)(_.Button,{type:"button",icon:"pi pi-plus",onClick:()=>{let e={};for(let t of l)p(t,e);d(e)},className:"w-2rem h-2rem mr-2 p-button-outlined"}),(0,t.jsx)(_.Button,{type:"button",icon:"pi pi-minus",onClick:()=>{d({})},className:"w-2rem h-2rem p-button-outlined"})]});(0,r.useEffect)(()=>{P.NodeService.getTreeNodes().then(e=>o(e))},[]);let m={basic:`
<TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
    className="md:w-20rem w-full" placeholder="Select Item"
    expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} panelHeaderTemplate={headerTemplate}></TreeSelect>
        `,javascript:`
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { Button } from 'primereact/button';
import { NodeService } from './service/NodeService';

export default function ControlledDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const [expandedKeys, setExpandedKeys] = useState({});

    const expandAll = () => {
        let _expandedKeys = {};

        for (let node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    };

    const collapseAll = () => {
        setExpandedKeys({});
    };

    const expandNode = (node, _expandedKeys) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    };

    const headerTemplate = (
        <div className="p-3 pb-0">
            <Button type="button" icon="pi pi-plus" onClick={expandAll} className="w-2rem h-2rem mr-2 p-button-outlined" />
            <Button type="button" icon="pi pi-minus" onClick={collapseAll} className="w-2rem h-2rem p-button-outlined" />
        </div>
    );

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
                className="md:w-20rem w-full" placeholder="Select Item"
                expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} panelHeaderTemplate={headerTemplate}></TreeSelect>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeEvent, TreeSelectExpandedEvent } from 'primereact/treeselect';
import { TreeNode } from 'primereact/treenode';
import { Button } from 'primereact/button';
import { NodeService } from './service/NodeService';

interface NodeKey {
    [key: string]: boolean;
 }

export default function ControlledDemo() {
    const [nodes, setNodes] = useState<TreeNode[] | null>(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string>(null);
    const [expandedKeys, setExpandedKeys] = useState<NodeKey>({});

    const expandAll = () => {
        let _expandedKeys = {};

        for (let node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    };

    const collapseAll = () => {
        setExpandedKeys({});
    };

    const expandNode = (node, _expandedKeys) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    };

    const headerTemplate = (
        <div className="p-3 pb-0">
            <Button type="button" icon="pi pi-plus" onClick={expandAll} className="w-2rem h-2rem mr-2 p-button-outlined" />
            <Button type="button" icon="pi pi-minus" onClick={collapseAll} className="w-2rem h-2rem p-button-outlined" />
        </div>
    );
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value)} 
                className="md:w-20rem w-full" placeholder="Select Item" 
                expandedKeys={expandedKeys} onToggle={(e: TreeSelectExpandedEvent) => setExpandedKeys(e.value)} panelHeaderTemplate={headerTemplate}></TreeSelect>
        </div>
    );
}
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
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Expanded state of nodes is managed programmatically with ",(0,t.jsx)("i",{children:"expandedKeys"})," and ",(0,t.jsx)("i",{children:"onToggle"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(M,{value:i,onChange:e=>a(e.value),options:l,className:"md:w-20rem w-full",placeholder:"Select Item",expandedKeys:c,onToggle:e=>d(e.value),panelHeaderTemplate:u})}),(0,t.jsx)(n.DocSectionCode,{code:m,service:["NodeService"]})]})}function V(e){let[l,o]=(0,r.useState)(null),[i,a]=(0,r.useState)(null);(0,r.useEffect)(()=>{P.NodeService.getTreeNodes().then(e=>o(e))},[]);let c={basic:`
<TreeSelect disabled placeholder="Select Item" className="md:w-20rem w-full" />
        `,javascript:`
import React from "react";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <TreeSelect disabled placeholder="Select Item" className="md:w-20rem w-full" />
        </div>
    );
}
        `,typescript:`
import React from "react";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <TreeSelect disabled placeholder="Select Item" className="md:w-20rem w-full" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(M,{disabled:!0,placeholder:"Select Item",className:"md:w-20rem w-full"})}),(0,t.jsx)(n.DocSectionCode,{code:c})]})}function X(e){let[l,o]=(0,r.useState)(null),[i,a]=(0,r.useState)(null);(0,r.useEffect)(()=>{P.NodeService.getTreeNodes().then(e=>o(e))},[]);let c={basic:`
<TreeSelect variant="filled" value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
    className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        `,javascript:`
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function FilledDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect variant="filled" value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
                className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeEvent } from 'primereact/treeselect';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function FilledDemo() {
    const [nodes, setNodes] = useState<TreeNode[] | null>(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect variant="filled" value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value)} 
                className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        </div>
    );
}
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
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specify the ",(0,t.jsx)("i",{children:"variant"})," property as ",(0,t.jsx)("i",{children:"filled"})," to display the component with a higher visual emphasis than the default ",(0,t.jsx)("i",{children:"outlined"})," style."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(M,{variant:"filled",value:i,onChange:e=>a(e.value),options:l,className:"md:w-20rem w-full",placeholder:"Select Item"})}),(0,t.jsx)(n.DocSectionCode,{code:c,service:["NodeService"]})]})}function z(e){let[l,o]=(0,r.useState)(null),[i,a]=(0,r.useState)(null);(0,r.useEffect)(()=>{P.NodeService.getTreeNodes().then(e=>o(e))},[]);let c={basic:`
<TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
    filter className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        `,javascript:`
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function FilterDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
                filter className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeEvent } from 'primereact/treeselect';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function FilterDemo() {
    const [nodes, setNodes] = useState<TreeNode[] | null>(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value)} 
                filter className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        </div>
    );
}
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
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Filtering is enabled by adding the ",(0,t.jsx)("i",{children:"filter"})," property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define"," ",(0,t.jsx)("i",{children:"filterBy"})," property. In addition ",(0,t.jsx)("i",{children:"filterMode"})," specifies the filtering strategy. In ",(0,t.jsx)("i",{children:"lenient"})," mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in ",(0,t.jsx)("i",{children:"strict"})," mode when the query matches a node, filtering continues on all descendants."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(M,{value:i,onChange:e=>a(e.value),options:l,filter:!0,className:"md:w-20rem w-full",placeholder:"Select Item"})}),(0,t.jsx)(n.DocSectionCode,{code:c,service:["NodeService"]})]})}var J=e.i(97776);function q(e){let[l,o]=(0,r.useState)(null),[i,a]=(0,r.useState)(null);(0,r.useEffect)(()=>{P.NodeService.getTreeNodes().then(e=>o(e))},[]);let c={basic:`
<FloatLabel className="w-full md:w-20rem">
    <TreeSelect inputId="treeselect" value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes}
        className="w-full"></TreeSelect>
    <label htmlFor="treeselect">TreeSelect</label>
</FloatLabel>
        `,javascript:`
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { FloatLabel } from 'primereact/floatlabel';
import { NodeService } from './service/NodeService';

export default function FloatLabelDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <FloatLabel className="w-full md:w-20rem">
                <TreeSelect inputId="treeselect" value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes}
                    className="w-full"></TreeSelect>
                <label htmlFor="treeselect">TreeSelect</label>
            </FloatLabel>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeEvent } from 'primereact/treeselect';
import { FloatLabel } from 'primereact/floatlabel';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function FloatLabelDemo() {
    const [nodes, setNodes] = useState<TreeNode[] | null>(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string>(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <FloatLabel className="w-full md:w-20rem">
                <TreeSelect inputId="treeselect" value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value)}
                    className="w-full"></TreeSelect>
                <label htmlFor="treeselect">TreeSelect</label>
            </FloatLabel>
        </div>
    );
}
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
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A floating label appears on top of the input field when focused. Visit ",(0,t.jsx)(B.default,{href:"/floatlabel",children:"FloatLabel"})," documentation for more information."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)(J.FloatLabel,{className:"w-full md:w-20rem",children:[(0,t.jsx)(M,{inputId:"treeselect",value:i,onChange:e=>a(e.value),options:l,className:"w-full"}),(0,t.jsx)("label",{htmlFor:"treeselect",children:"TreeSelect"})]})}),(0,t.jsx)(n.DocSectionCode,{code:c,service:["NodeService"]})]})}function Z(e){let l={basic:`
import { TreeSelect } from 'primereact/treeselect';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)(n.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function $(e){let[l,o]=(0,r.useState)(null),[i,a]=(0,r.useState)(null);(0,r.useEffect)(()=>{P.NodeService.getTreeNodes().then(e=>o(e))},[]);let c={basic:`
<TreeSelect invalid value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
    className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        `,javascript:`
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function InvalidDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect invalid value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
                className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeEvent } from 'primereact/treeselect';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function InvalidDemo() {
    const [nodes, setNodes] = useState<TreeNode[] | null>(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect invalid value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value)} 
                className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        </div>
    );
}
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
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(M,{invalid:!0,value:i,onChange:e=>a(e.value),options:l,className:"md:w-20rem w-full",placeholder:"Select Item"})}),(0,t.jsx)(n.DocSectionCode,{code:c,service:["NodeService"]})]})}function Y(e){let[l,o]=(0,r.useState)(null),[i,a]=(0,r.useState)();(0,r.useEffect)(()=>{P.NodeService.getTreeNodes().then(e=>o(e))},[]);let c={basic:`
{
    '0-0': true,
    '0-1-0': true
}
        `},d={basic:`
<TreeSelect value={selectedNodeKeys} onChange={(e) => setSelectedNodeKeys(e.value)} options={nodes} metaKeySelection={false}  
    className="md:w-20rem w-full" selectionMode="multiple" placeholder="Select Items"></TreeSelect>
        `,javascript:`
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function MultipleDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKeys} onChange={(e) => setSelectedNodeKeys(e.value)} options={nodes} 
                metaKeySelection={false} className="md:w-20rem w-full" selectionMode="multiple" placeholder="Select Items"></TreeSelect>
        </div>    
    );
}
        `,typescript:`
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeEvent } from 'primereact/treeselect';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function MultipleDemo() {
    const [nodes, setNodes] = useState<TreeNode[] | null>(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState<string[]>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKeys} onChange={(e: TreeSelectChangeEvent) => setSelectedNodeKeys(e.value)} options={nodes} 
                metaKeySelection={false} className="md:w-20rem w-full" selectionMode="multiple" placeholder="Select Items"></TreeSelect>
        </div>
    );
}
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
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["More than one node is selectable by setting ",(0,t.jsx)("i",{children:"selectionMode"})," to ",(0,t.jsx)("i",{children:"multiple"}),". By default in multiple selection mode, metaKey press (e.g. ",(0,t.jsx)("i",{children:"⌘"}),") is necessary to add to existing selections however this can be configured with disabling the ",(0,t.jsx)("i",{children:"metaKeySelection"})," property. Note that in touch enabled devices, TreeSelect always ignores metaKey."]}),(0,t.jsx)("p",{children:"In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection."})]}),(0,t.jsx)(n.DocSectionCode,{code:c,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(M,{value:i,onChange:e=>a(e.value),options:l,metaKeySelection:!1,className:"md:w-20rem w-full",selectionMode:"multiple",placeholder:"Select Items"})}),(0,t.jsx)(n.DocSectionCode,{code:d,service:["NodeService"]})]})}let G=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/treeselect.jpg",alt:"treeselect"})})]});function Q(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treeselect"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treeselect-label-container"}),(0,t.jsx)("td",{children:"Container of the label to display selected items."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treeselect-label"}),(0,t.jsx)("td",{children:"Label to display selected items."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treeselect-trigger"}),(0,t.jsx)("td",{children:"Dropdown button."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treeselect-panel"}),(0,t.jsx)("td",{children:"Overlay panel for items."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treeselect-items-wrapper"}),(0,t.jsx)("td",{children:"List container of items."})]})]})]})})]})}function ee(e){let l={basic:`
const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

const Tailwind = {
    treeselect: {
        root: ({ props }) => ({
            className: classNames('inline-flex cursor-pointer select-none', 'bg-white dark:bg-gray-900 border border-gray-400 dark:border-blue-900/40  transition-colors duration-200 ease-in-out rounded-md', 'w-full md:w-80', {
                'opacity-60 select-none pointer-events-none cursor-default': props?.disabled
            })
        }),
        labelContainer: {
            className: classNames('overflow-hidden flex flex-auto cursor-pointer')
        },
        label: {
            className: classNames('block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis', 'text-gray-800 dark:text-white/80', 'p-3 transition duration-200')
        },
        trigger: {
            className: classNames('flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 dark:text-white/70 w-12 rounded-tr-lg rounded-br-lg')
        },
        panel: {
            className: classNames('bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg')
        },
        wrapper: {
            className: classNames('max-h-[200px] overflow-auto', 'bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg')
        },
        transition: TRANSITIONS.overlay
    }
}
    `},o={javascript:`
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function UnstyledDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-center">
            <TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
                className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(B.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(n.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(n.DocSectionCode,{code:o,embedded:!0,service:["NodeService"]})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:G},{id:"pt.treeselect.options",label:"TreeSelect PT Options",component:l.default}];return(0,t.jsx)(o.DocComponent,{title:"React TreeSelect Component",header:"TreeSelect",description:"TreeSelect is a form component to choose from hierarchical data.",componentDocs:[{id:"import",label:"Import",component:Z},{id:"basic",label:"Basic",component:U},{id:"multiple",label:"Multiple",component:Y},{id:"check",label:"Checkbox",component:A},{id:"filter",label:"Filter",component:z},{id:"clearicon",label:"Clear Icon",component:L},{id:"controlled",label:"Controlled",component:W},{id:"floatlabel",label:"Float Label",component:q},{id:"filled",label:"Filled",component:X},{id:"invalid",label:"Invalid",component:$},{id:"disabled",label:"Disabled",component:V},{id:"accessibility",label:"Accessibility",component:i}],apiDocs:["TreeSelect","TreeNode"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:Q},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:ee}]}]})}],55280)},40783,(e,t,l)=>{let o="/treeselect";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(55280)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})}]);