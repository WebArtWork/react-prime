(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,11649,e=>{"use strict";var t=e.i(91398),o=e.i(5180),a=e.i(28137);function n(){let e={basic:`
<label htmlFor="ac1">Username</label>
<AutoComplete inputId="ac1" />

<span id="ac2">Email</span>
<AutoComplete aria-labelledby="ac2" />

<AutoComplete aria-label="City" />
        `};return(0,t.jsxs)(a.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Value to describe the component can either be provided via ",(0,t.jsx)("i",{children:"label"})," tag combined with ",(0,t.jsx)("i",{children:"inputId"})," prop or using ",(0,t.jsx)("i",{children:"aria-labelledby"}),", ",(0,t.jsx)("i",{children:"aria-label"})," props. The input element has ",(0,t.jsx)("i",{children:"combobox"})," role in addition to"," ",(0,t.jsx)("i",{children:"aria-autocomplete"}),", ",(0,t.jsx)("i",{children:"aria-haspopup"})," and ",(0,t.jsx)("i",{children:"aria-expanded"})," attributes. The relation between the input and the popup is created with ",(0,t.jsx)("i",{children:"aria-controls"})," and ",(0,t.jsx)("i",{children:"aria-activedescendant"})," attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list."]}),(0,t.jsxs)("p",{children:["In multiple mode, chip list uses ",(0,t.jsx)("i",{children:"listbox"})," role with ",(0,t.jsx)("i",{children:"aria-orientation"})," set to horizontal whereas each chip has the ",(0,t.jsx)("i",{children:"option"})," role with ",(0,t.jsx)("i",{children:"aria-label"})," set to the label of the chip."]}),(0,t.jsxs)("p",{children:["The popup list has an id that refers to the ",(0,t.jsx)("i",{children:"aria-controls"})," attribute of the input element and uses ",(0,t.jsx)("i",{children:"listbox"})," as the role. Each list item has ",(0,t.jsx)("i",{children:"option"})," role and an id to match the ",(0,t.jsx)("i",{children:"aria-activedescendant"})," of the input element."]}),(0,t.jsx)(o.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the input element when popup is not visible. If the popup is open and an item is highlighted then popup gets closed, item gets selected and focus moves to the next focusable element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Highlights the previous item if popup is visible."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Highlights the next item if popup is visible."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Selects the highlighted item and closes the popup if popup is visible."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Highlights the first item if popup is visible."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Highlights the last item if popup is visible."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Hides the popup."})]})]})]})}),(0,t.jsx)("h3",{children:"Chips Input Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"backspace"})}),(0,t.jsx)("td",{children:"Deletes the previous chip if the input field is empty."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous chip if available and input field is empty."})]})]})]})}),(0,t.jsx)("h3",{children:"Chip Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous chip if available."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"right arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next chip, if there is none then input field receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"backspace"})}),(0,t.jsx)("td",{children:"Deletes the chips and adds focus to the input field."})]})]})]})})]})}var l=e.i(91788),i=e.i(4242),r=e.i(10836),s=e.i(183),c=e.i(57724),d=e.i(15498),u=e.i(60150),m=e.i(20484),p=e.i(36785),h=e.i(4632),f=e.i(71834),g=e.i(48214),v=e.i(15734),C=e.i(12257),y=e.i(66082),x=e.i(81201),b=e.i(64691),S=e.i(45543),j=e.i(75366),w=e.i(51551),A=e.i(28653),I=e.i(63957),T=e.i(3935);let N=`
@layer primereact {
    .p-autocomplete {
        display: inline-flex;
        position: relative;
    }
    
    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }
    
    .p-autocomplete-dd .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }
    
    .p-autocomplete-dd .p-autocomplete-input,
    .p-autocomplete-dd .p-autocomplete-multiple-container {
         border-top-right-radius: 0;
         border-bottom-right-radius: 0;
     }
    
    .p-autocomplete-dd .p-autocomplete-dropdown {
         border-top-left-radius: 0;
         border-bottom-left-radius: 0px;
    }
    
    .p-autocomplete .p-autocomplete-panel {
        min-width: 100%;
    }
    
    .p-autocomplete-panel {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-autocomplete-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    
    .p-autocomplete-item {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }
    
    .p-autocomplete-multiple-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .p-autocomplete-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }
    
    .p-autocomplete-token-icon {
        cursor: pointer;
    }
    
    .p-autocomplete-input-token {
        flex: 1 1 auto;
        display: inline-flex;
    }
    
    .p-autocomplete-input-token input {
        border: 0 none;
        outline: 0 none;
        background-color: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
    }
    
    .p-fluid .p-autocomplete {
        display: flex;
    }
    
    .p-fluid .p-autocomplete-dd .p-autocomplete-input {
        width: 1%;
    }
    
    .p-autocomplete-items-wrapper {
        overflow: auto;
    } 
}
`,k=d.ComponentBase.extend({defaultProps:{__TYPE:"AutoComplete",id:null,appendTo:null,autoFocus:!1,autoHighlight:!1,className:null,completeMethod:null,delay:300,disabled:!1,dropdown:!1,dropdownAriaLabel:null,dropdownAutoFocus:!0,dropdownIcon:null,dropdownMode:"blank",emptyMessage:null,field:null,forceSelection:!1,inputClassName:null,inputId:null,inputRef:null,inputStyle:null,variant:null,invalid:!1,itemTemplate:null,loadingIcon:null,maxLength:null,minLength:1,multiple:!1,name:null,onBlur:null,onChange:null,onClear:null,onClick:null,onContextMenu:null,onDblClick:null,onDropdownClick:null,onFocus:null,onHide:null,onKeyPress:null,onKeyUp:null,onMouseDown:null,onSelect:null,onShow:null,onUnselect:null,optionGroupChildren:null,optionGroupLabel:null,optionGroupTemplate:null,panelClassName:null,panelFooterTemplate:null,panelStyle:null,placeholder:null,readOnly:!1,removeTokenIcon:null,scrollHeight:"200px",selectedItemTemplate:null,selectionLimit:null,showEmptyMessage:!1,size:null,style:null,suggestions:null,tabIndex:null,tooltip:null,tooltipOptions:null,transitionOptions:null,type:"text",value:null,virtualScrollerOptions:null,children:void 0},css:{classes:{root:({props:e,focusedState:t})=>(0,T.classNames)("p-autocomplete p-component p-inputwrapper",{"p-autocomplete-dd":e.dropdown,"p-autocomplete-multiple":e.multiple,"p-inputwrapper-filled":e.value,"p-invalid":e.invalid,"p-inputwrapper-focus":t}),container:({props:e,context:t})=>(0,T.classNames)("p-autocomplete-multiple-container p-component p-inputtext",{"p-disabled":e.disabled,"p-variant-filled":e.variant?"filled"===e.variant:t&&"filled"===t.inputStyle}),loadingIcon:"p-autocomplete-loader",dropdownButton:"p-autocomplete-dropdown",removeTokenIcon:"p-autocomplete-token-icon",token:"p-autocomplete-token p-highlight",tokenLabel:"p-autocomplete-token-label",inputToken:"p-autocomplete-input-token",input:({props:e,context:t})=>(0,T.classNames)("p-autocomplete-input",{"p-autocomplete-dd-input":e.dropdown,"p-variant-filled":e.variant?"filled"===e.variant:t&&"filled"===t.inputStyle}),panel:({context:e})=>(0,T.classNames)("p-autocomplete-panel p-component",{"p-ripple-disabled":e&&!1===e.ripple||!1===i.default.ripple}),listWrapper:"p-autocomplete-items-wrapper",list:({virtualScrollerOptions:e,options:t})=>e?(0,T.classNames)("p-autocomplete-items",t.className):"p-autocomplete-items",emptyMessage:"p-autocomplete-item",item:({suggestion:e,optionGroupLabel:t,selected:o})=>t?(0,T.classNames)("p-autocomplete-item",{"p-disabled":e.disabled},{selected:o}):(0,T.classNames)("p-autocomplete-item",{"p-disabled":e.disabled},{"p-highlight":o}),itemGroup:"p-autocomplete-item-group",footer:"p-autocomplete-footer",transition:"p-connected-overlay"},styles:N}});var D=e.i(87350),M=e.i(85971),E=e.i(50901),F=e.i(25926);let L=l.memo(l.forwardRef((e,o)=>{let a,n,i,c,d,m=(0,u.useMergeProps)(),{ptm:p,cx:h}=e,f=l.useContext(r.PrimeReactContext),g=(t,o)=>p(t,{hostName:e.hostName,...o}),v=(t,o)=>g(o,{context:{selected:e.selectedItem.current===t,disabled:t.disabled}}),C=t=>w.ObjectUtils.resolveFieldData(t,e.optionGroupLabel),y=l.useRef({key:null,index:0,keyIndex:0}),x=(t,o,a,n)=>{let i=e.optionGroupTemplate?w.ObjectUtils.getJSXElement(e.optionGroupTemplate,t,a):e.getOptionGroupLabel(t)||t,r=m({index:a,className:h("itemGroup"),"data-p-highlight":!1,...n},g("itemGroup"));return(0,l.createElement)("li",{...r,key:o||null},i)},b=(o,a,n,l)=>{let i=e.selectedItem&&e.selectedItem.current&&Array.isArray(e.selectedItem.current)?e.selectedItem.current.some(e=>w.ObjectUtils.deepEquals(e,o)):w.ObjectUtils.deepEquals(e.selectedItem.current,o),r=e.itemTemplate?w.ObjectUtils.getJSXElement(e.itemTemplate,o,n):e.field?w.ObjectUtils.resolveFieldData(o,e.field):o,s=m({index:n,role:"option",className:h("item",{optionGroupLabel:e.optionGroupLabel,suggestion:o,selected:i}),onClick:t=>e.onItemClick(t,o),"aria-selected":i,...l},v(o,"item"));return(0,t.jsxs)("li",{...s,children:[r,(0,t.jsx)(E.Ripple,{})]},a)},S=(o,a,n={})=>{let i={height:n.props?n.props.itemSize:void 0};if(e.optionGroupLabel){if(e.virtualScrollerOptions){let t,n,l=(t=e.suggestions,n=e.optionGroupLabel,t.findIndex(e=>e[n]===o));if(-1!==l){y.current={key:o,index:a,keyIndex:l};let e=a+"_"+C(o);return x(o,e,a,{style:i})}let r=a+"_"+y.current.keyIndex,s=m({style:i,"data-group":y.current.keyIndex,"data-index":a-y.current.index-1,"data-p-disabled":o.disabled});return b(o,r,a,s)}let n=e.getOptionGroupChildren(o).map((e,t)=>{let o=a+"_"+t,n=m({"data-group":a,"data-index":t,"data-p-disabled":e.disabled});return b(e,o,t,n)}),r=a+"_"+C(o);return(0,t.jsxs)(l.Fragment,{children:[x(o,void 0,a,{style:i}),n]},r)}let r=`${a}_${w.ObjectUtils.isObject(o)?w.ObjectUtils.resolveFieldData(o,e.field):o}`,s=m({style:i,"data-p-disabled":o.disabled},v(o,"item"));return b(o,r,a,s)},j=(a={...e.panelStyle||{}},n=(()=>{if(e.showEmptyMessage&&w.ObjectUtils.isEmpty(e.suggestions)){let o=e.emptyMessage||(0,s.localeOption)("emptyMessage"),a=m({className:h("emptyMessage")},g("emptyMessage")),n=m({className:h("list")},g("list"));return(0,t.jsx)("ul",{...n,children:(0,t.jsx)("li",{...a,children:o})})}if(e.virtualScrollerOptions){let o=e.suggestions?e.optionGroupLabel?(t=>{try{return t?.map(t=>[t?.[e?.optionGroupLabel],...t?.[e?.optionGroupChildren]]).flat()}catch(e){}})(e?.suggestions):e.suggestions:null,a={...e.virtualScrollerOptions,...{style:{...e.virtualScrollerOptions.style,...{height:e.scrollHeight}},autoSize:!0,items:o,itemTemplate:(e,t)=>e&&S(e,t.index,t),contentTemplate:o=>{let n=m({id:e.listId,ref:o.contentRef,style:o.style,className:h("list",{virtualScrollerProps:a,options:o}),role:"listbox"},g("list"));return(0,t.jsx)("ul",{...n,children:o.children})}}};return(0,t.jsx)(F.VirtualScroller,{ref:e.virtualScrollerRef,...a,pt:g("virtualScroller"),__parentMetadata:{parent:e.metaData}})}let o=e.suggestions?e.suggestions.map(S):null,a=m({id:e.listId,className:h("list"),role:"listbox"},g("list")),n=m({className:h("listWrapper"),style:{maxHeight:e.scrollHeight||"auto"}},g("listWrapper"));return(0,t.jsx)("div",{...n,children:(0,t.jsx)("ul",{...a,children:o})})})(),i=(()=>{if(e.panelFooterTemplate){let o=w.ObjectUtils.getJSXElement(e.panelFooterTemplate,e,e.onOverlayHide),a=m({className:h("footer")},g("footer"));return(0,t.jsx)("div",{...a,children:o})}return null})(),c=m({className:(0,T.classNames)(e.panelClassName,h("panel",{context:f})),style:a,onClick:t=>e.onClick(t),"data-pr-is-overlay":!0},g("panel")),d=m({classNames:h("transition"),in:e.in,timeout:{enter:120,exit:100},options:e.transitionOptions,unmountOnExit:!0,onEnter:e.onEnter,onEntering:e.onEntering,onEntered:e.onEntered,onExit:e.onExit,onExited:e.onExited},g("transition")),(0,t.jsx)(D.CSSTransition,{nodeRef:o,...d,children:(0,t.jsxs)("div",{ref:o,...c,children:[n,i]})}));return(0,t.jsx)(M.Portal,{element:j,appendTo:e.appendTo})}));L.displayName="AutoCompletePanel";let O=l.memo(l.forwardRef((e,o)=>{let a,n,N,D,M,E,F,O,U,G=(0,u.useMergeProps)(),R=l.useContext(r.PrimeReactContext),_=k.getProps(e,R),[q,H]=l.useState(_.id),[B,P]=l.useState(!1),[V,K]=l.useState(!1),[z,W]=l.useState(!1),J={props:_,state:{id:q,searching:B,focused:V,overlayVisible:z}},{ptm:Y,cx:Z,sx:$,isUnstyled:X}=k.setMetaData(J);(0,d.useHandleStyle)(k.css.styles,X,{name:"autocomplete"});let Q=l.useRef(null),ee=l.useRef(null),et=l.useRef(_.inputRef),eo=l.useRef(null),ea=l.useRef(null),en=l.useRef(null),el=l.useRef(null),[ei,er]=(0,p.useOverlayListener)({target:Q,overlay:ee,listener:(e,{type:t,valid:o})=>{o&&("outside"===t?es(e)||eg():R.hideOverlaysOnDocumentScrolling?eg():S.DomHandler.isDocument(e.target)||eC())},when:z}),es=e=>_.multiple?e.target===eo.current||eo.current.contains(e.target):e.target===et.current,ec=e=>{en.current&&clearTimeout(en.current);let t=e.target.value;_.multiple||em(e,t),w.ObjectUtils.isEmpty(t)?(eg(),_.onClear&&_.onClear(e)):t.length>=_.minLength?en.current=setTimeout(()=>{ed(e,t,"input")},_.delay):eg()},ed=(e,t,o)=>{null==t||("input"!==o||0!==t.trim().length)&&_.completeMethod&&(P(!0),_.completeMethod({originalEvent:e,query:t}))},eu=(e,t,o)=>{_.multiple?(et.current.value="",!eT(t)&&eD()&&em(e,_.value?[..._.value,t]:[t])):(eh(t),em(e,t)),_.onSelect&&_.onSelect({originalEvent:e,value:t}),o||(S.DomHandler.focus(et.current),eg())},em=(e,t)=>{_.onChange&&_.onChange({originalEvent:e,value:t,stopPropagation:()=>{e.stopPropagation()},preventDefault:()=>{e.preventDefault()},target:{name:_.name,id:q,value:t}}),el.current=w.ObjectUtils.isNotEmpty(t)?t:null},ep=e=>{if(w.ObjectUtils.isEmpty(e))return"";if("string"==typeof e)return e;if(_.selectedItemTemplate){let t=w.ObjectUtils.getJSXElement(_.selectedItemTemplate,e);return _.multiple||"string"==typeof t?t:e}return _.field?w.ObjectUtils.resolveFieldData(e,_.field)??e:e},eh=e=>{et.current.value=ep(e)},ef=()=>{W(!0)},eg=()=>{W(!1),P(!1)},ev=()=>{let e=eN()?.firstChild?.firstChild;e&&(X()||S.DomHandler.addClass(e,"p-highlight"),e.setAttribute("data-p-highlight",!0))},eC=()=>{let e=_.multiple?eo.current:et.current;S.DomHandler.alignOverlay(ee.current,e,_.appendTo||R&&R.appendTo||i.default.appendTo)},ey=e=>{_.dropdownAutoFocus&&S.DomHandler.focus(et.current,_.dropdownAutoFocus),"blank"===_.dropdownMode?ed(e,"","dropdown"):"current"===_.dropdownMode&&ed(e,et.current.value,"dropdown"),_.onDropdownClick&&_.onDropdownClick({originalEvent:e,query:et.current.value})},ex=(e,t)=>{if(_.disabled||_.readOnly)return;let o=_.value[t];em(e,_.value.filter((e,o)=>t!==o)),_.onUnselect&&_.onUnselect({originalEvent:e,value:o})},eb=e=>{if(z){let t=S.DomHandler.findSingle(ee.current,'li[data-p-highlight="true"]');switch(e.which){case 40:if(t){let e=ej(t);e&&(X()||S.DomHandler.addClass(e,"p-highlight"),e.setAttribute("data-p-highlight",!0),X()||S.DomHandler.removeClass(t,"p-highlight"),t.setAttribute("data-p-highlight",!1),S.DomHandler.scrollInView(eN(),e))}else t=S.DomHandler.findSingle(ee.current,"li"),"itemgroup"===S.DomHandler.getAttribute(t,"data-pc-section")&&(t=ej(t)),t&&(X()||S.DomHandler.addClass(t,"p-highlight"),t.setAttribute("data-p-highlight",!0));e.preventDefault();break;case 38:if(t){let e=ew(t);e&&(X()||S.DomHandler.addClass(e,"p-highlight"),e.setAttribute("data-p-highlight",!0),X()||S.DomHandler.removeClass(t,"p-highlight"),t.setAttribute("data-p-highlight",!1),S.DomHandler.scrollInView(eN(),e))}e.preventDefault();break;case 13:t&&(eS(e,t),eg(),e.preventDefault());break;case 27:eg(),e.preventDefault();break;case 9:t&&eS(e,t),eg()}}if(_.multiple&&8===e.which&&_.value&&_.value.length&&!et.current.value){let t=_.value[_.value.length-1];em(e,_.value.slice(0,-1)),_.onUnselect&&_.onUnselect({originalEvent:e,value:t})}},eS=(e,t)=>{_.optionGroupLabel?eu(e,ek(_.suggestions[t.dataset.group])[t.dataset.index]):eu(e,_.suggestions[t.getAttribute("index")])},ej=e=>{let t=e.nextElementSibling;return t?"itemgroup"===S.DomHandler.getAttribute(t,"data-pc-section")?ej(t):t:null},ew=e=>{let t=e.previousElementSibling;return t?"itemgroup"===S.DomHandler.getAttribute(t,"data-pc-section")?ew(t):t:null},eA=e=>{K(!0),_.onFocus&&_.onFocus(e)},eI=e=>{K(!1),_.forceSelection&&(e=>{if(_.multiple){et.current.value="";return}let t=w.ObjectUtils.trim(e.target.value).toLowerCase(),o=(_.suggestions||[]).flatMap(e=>e.items?e.items:[e]).find(e=>{let o=_.field?w.ObjectUtils.resolveFieldData(e,_.field):e,a=o?w.ObjectUtils.trim(o).toLowerCase():"";return a&&t===a});o?eu(e,o,!0):(et.current.value="",em(e,null),_.onClear&&_.onClear(e))})(e),_.onBlur&&_.onBlur(e)},eT=e=>!!_.value&&_.value.some(t=>w.ObjectUtils.equals(t,e)),eN=()=>ee?.current?.firstChild,ek=e=>w.ObjectUtils.resolveFieldData(e,_.optionGroupChildren),eD=()=>!_.value||!_.selectionLimit||_.value.length<_.selectionLimit;l.useEffect(()=>{w.ObjectUtils.combinedRefs(et,_.inputRef)},[et,_.inputRef]),l.useEffect(()=>{w.ObjectUtils.isNotEmpty(_.value)&&(el.current=_.value)},[_.value]),(0,m.useMountEffect)(()=>{q||H((0,A.UniqueComponentId)()),_.autoFocus&&S.DomHandler.focus(et.current,_.autoFocus),eC()}),(0,f.useUpdateEffect)(()=>{B&&_.autoHighlight&&_.suggestions&&_.suggestions.length&&ev()},[B]),(0,f.useUpdateEffect)(()=>{B&&(w.ObjectUtils.isNotEmpty(_.suggestions)||_.showEmptyMessage?ef():eg(),P(!1))},[_.suggestions]),(0,f.useUpdateEffect)(()=>{et.current&&!_.multiple&&eh(_.value),z&&eC()}),(0,h.useUnmountEffect)(()=>{en.current&&clearTimeout(en.current),I.ZIndexUtils.clear(ee.current)}),l.useImperativeHandle(o,()=>({props:_,search:ed,show:ef,hide:eg,focus:()=>S.DomHandler.focus(et.current),getElement:()=>Q.current,getOverlay:()=>ee.current,getInput:()=>et.current,getVirtualScroller:()=>ea.current}));let eM=q+"_list",eE=w.ObjectUtils.isNotEmpty(_.tooltip),eF=k.getOtherProps(_),eL=w.ObjectUtils.reduceKeys(eF,S.DomHandler.ARIA_PROPS),eO=(()=>{if(B){let e=G({className:Z("loadingIcon")},Y("loadingIcon")),o=_.loadingIcon||(0,t.jsx)(v.SpinnerIcon,{...e,spin:!0});return j.IconUtils.getJSXIcon(o,{...e},{props:_})}return null})(),eU=_.multiple?(a=eD(),n=w.ObjectUtils.isNotEmpty(_.value)?_.value.map((e,o)=>{let a=G({className:Z("removeTokenIcon"),onClick:e=>ex(e,o),tabIndex:_.tabIndex||"0","aria-label":(0,s.localeOption)("clear"),onKeyDown:e=>((e,t)=>{switch(e.code){case"Space":case"NumpadEnter":case"Enter":ex(e,t),e.preventDefault(),e.stopPropagation()}})(e,o)},Y("removeTokenIcon")),n=_.removeTokenIcon||(0,t.jsx)(C.TimesCircleIcon,{...a}),l=!_.disabled&&j.IconUtils.getJSXIcon(n,{...a},{props:_}),i=G({className:Z("token")},Y("token")),r=G({className:Z("tokenLabel")},Y("tokenLabel"));return(0,t.jsxs)("li",{...i,children:[(0,t.jsx)("span",{...r,children:ep(e)}),l]},o+"multi-item")}):(el.current=null,null),N=z?q+"_list":null,D=G({className:Z("inputToken")},Y("inputToken")),M=G({id:_.inputId,ref:et,"aria-autocomplete":"list","aria-controls":N,"aria-expanded":z,"aria-haspopup":"listbox",autoComplete:"off",className:_.inputClassName,disabled:_.disabled,maxLength:_.maxLength,name:_.name,onBlur:e=>{eI(e),X()||S.DomHandler.removeClass(eo.current,"p-focus"),eo.current.setAttribute("data-p-focus",!1)},onChange:a?ec:void 0,onFocus:e=>{eA(e),X()||S.DomHandler.addClass(eo.current,"p-focus"),eo.current.setAttribute("data-p-focus",!0)},onKeyDown:a?eb:void 0,onKeyPress:_.onKeyPress,onKeyUp:_.onKeyUp,placeholder:a?_.placeholder:void 0,readOnly:_.readOnly||!a,required:_.required,role:"combobox",style:_.inputStyle,tabIndex:_.tabIndex,type:_.type,...eL},Y("input")),E=(0,t.jsx)("li",{...D,children:(0,t.jsx)("input",{...M})}),F=G({ref:eo,className:Z("container",{context:R}),onClick:a?e=>{S.DomHandler.focus(et.current),_.onClick&&_.onClick(e)}:void 0,onContextMenu:_.onContextMenu,onMouseDown:_.onMouseDown,onDoubleClick:_.onDblClick,"data-p-focus":V,"data-p-disabled":_.disabled},Y("container")),(0,t.jsxs)("ul",{...F,children:[n,E]})):(O=ep(_.value),U=z?q+"_list":null,(0,t.jsx)(y.InputText,{ref:et,id:_.inputId,type:_.type,name:_.name,defaultValue:O,role:"combobox","aria-autocomplete":"list","aria-controls":U,"aria-haspopup":"listbox","aria-expanded":z,className:(0,T.classNames)(_.inputClassName,Z("input",{context:R})),style:_.inputStyle,autoComplete:"off",readOnly:_.readOnly,required:_.required,disabled:_.disabled,placeholder:_.placeholder,size:_.size,maxLength:_.maxLength,tabIndex:_.tabIndex,onBlur:eI,onFocus:eA,onChange:ec,onMouseDown:_.onMouseDown,onKeyUp:_.onKeyUp,onKeyDown:eb,onKeyPress:_.onKeyPress,onContextMenu:_.onContextMenu,onClick:_.onClick,onDoubleClick:_.onDblClick,pt:Y("input"),unstyled:_.unstyled,...eL,__parentMetadata:{parent:J}})),eG=(()=>{if(_.dropdown){let e=_.dropdownAriaLabel||_.placeholder||(0,s.localeOption)("choose");return(0,t.jsx)(c.Button,{type:"button",icon:_.dropdownIcon||(0,t.jsx)(g.ChevronDownIcon,{}),className:Z("dropdownButton"),disabled:_.disabled,onClick:ey,"aria-label":e,pt:Y("dropdownButton"),__parentMetadata:{parent:J}})}return null})(),eR=G({id:q,ref:Q,style:_.style,className:(0,T.classNames)(_.className,Z("root",{focusedState:V}))},eF,Y("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("span",{...eR,children:[eU,eO,eG,(0,t.jsx)(L,{hostName:"AutoComplete",ref:ee,virtualScrollerRef:ea,..._,listId:eM,onItemClick:eu,selectedItem:el,onOverlayHide:eg,onClick:e=>{x.OverlayService.emit("overlay-click",{originalEvent:e,target:Q.current})},getOptionGroupLabel:e=>_.optionGroupLabel?w.ObjectUtils.resolveFieldData(e,_.optionGroupLabel):e,getOptionGroupChildren:ek,in:z,onEnter:()=>{I.ZIndexUtils.set("overlay",ee.current,R&&R.autoZIndex||i.default.autoZIndex,R&&R.zIndex.overlay||i.default.zIndex.overlay),S.DomHandler.addStyles(ee.current,{position:"absolute",top:"0",left:"0"}),eC()},onEntering:()=>{_.autoHighlight&&_.suggestions&&_.suggestions.length&&ev()},onEntered:()=>{ei(),_.onShow&&_.onShow()},onExit:()=>{er()},onExited:()=>{I.ZIndexUtils.clear(ee.current),_.onHide&&_.onHide()},ptm:Y,cx:Z,sx:$})]}),eE&&(0,t.jsx)(b.Tooltip,{target:Q,content:_.tooltip,pt:Y("tooltip"),..._.tooltipOptions})]})}));function U(e){let[n,i]=(0,l.useState)(""),[r,s]=(0,l.useState)([]),c={basic:`
<AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)}  />
        `,javascript:`
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function BasicDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["AutoComplete is used as a controlled component with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties. In addition, ",(0,t.jsx)("i",{children:"suggestions"})," and a ",(0,t.jsx)("i",{children:"completeMethod"})," are required to query the results."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(O,{value:n,suggestions:r,completeMethod:e=>{s([...Array(10).keys()].map(t=>e.query+"-"+t))},onChange:e=>i(e.value)})}),(0,t.jsx)(o.DocSectionCode,{code:c})]})}function G(e){let n={basic:`
<AutoComplete disabled placeholder="Disabled" />
        `,javascript:`
import React from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <AutoComplete disabled placeholder="Disabled" />
        </div>
    )
}
        `,typescript:`
import React from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <AutoComplete disabled placeholder="Disabled" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(O,{disabled:!0,placeholder:"Disabled"})}),(0,t.jsx)(o.DocSectionCode,{code:n})]})}function R(e){let[n,i]=(0,l.useState)(""),[r,s]=(0,l.useState)([]),c={basic:`
<AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} dropdown />
        `,javascript:`
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function DropdownDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        let _items = [...Array(10).keys()];
        setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} dropdown />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";

export default function DropdownDemo() {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        let _items = [...Array(10).keys()];
        setItems(event.query ? [...Array(10).keys()].map(item => event.query + '-' + item) : _items);
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e: AutoCompleteChangeEvent) => setValue(e.value)} dropdown />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Enabling ",(0,t.jsx)("i",{children:"dropdown"})," property displays a button next to the input field where click behavior of the button is defined using ",(0,t.jsx)("i",{children:"dropdownMode"})," property that takes ",(0,t.jsx)("strong",{children:"blank"})," or ",(0,t.jsx)("strong",{children:"current"})," as possible values. ",(0,t.jsx)("i",{children:"blank"})," is the default mode to send a query with an empty string whereas ",(0,t.jsx)("i",{children:"current"})," setting sends a query with the current value of the input."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(O,{value:n,suggestions:r,completeMethod:e=>{let t=[...Array(10).keys()];s(e.query?[...Array(10).keys()].map(t=>e.query+"-"+t):t)},onChange:e=>i(e.value),dropdown:!0})}),(0,t.jsx)(o.DocSectionCode,{code:c})]})}function _(e){let[n,i]=(0,l.useState)(""),[r,s]=(0,l.useState)([]),c={basic:`
<AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} variant="filled" />
        `,javascript:`
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function FilledDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} variant="filled" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";

export default function FilledDemo() {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} variant="filled" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specify the ",(0,t.jsx)("i",{children:"variant"})," property as ",(0,t.jsx)("i",{children:"filled"})," to display the component with a higher visual emphasis than the default ",(0,t.jsx)("i",{children:"outlined"})," style."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(O,{value:n,suggestions:r,completeMethod:e=>{s([...Array(10).keys()].map(t=>e.query+"-"+t))},onChange:e=>i(e.value),variant:"filled"})}),(0,t.jsx)(o.DocSectionCode,{code:c})]})}function q(e){let[n,i]=(0,l.useState)(""),[r,s]=(0,l.useState)([]),c={basic:`
<span className="p-float-label">
    <AutoComplete inputId="ac" value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
    <label htmlFor="ac">Float Label</label>
</span>
        `,javascript:`
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function FloatLabelDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <AutoComplete inputId="ac" value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
                <label htmlFor="ac">Float Label</label>
            </span>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <AutoComplete inputId="ac" value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
                <label htmlFor="ac">Float Label</label>
            </span>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"A floating label appears on top of the input field when focused."})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)("span",{className:"p-float-label",children:[(0,t.jsx)(O,{inputId:"ac",value:n,suggestions:r,completeMethod:e=>{s([...Array(10).keys()].map(t=>e.query+"-"+t))},onChange:e=>i(e.value)}),(0,t.jsx)("label",{htmlFor:"ac",children:"Float Label"})]})}),(0,t.jsx)(o.DocSectionCode,{code:c})]})}function H(e){let[n,i]=(0,l.useState)(""),[r,s]=(0,l.useState)([]),c={basic:`
<AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} forceSelection />
        `,javascript:`
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function ForceSelectionDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} forceSelection />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";

export default function ForceSelectionDemo() {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e: AutoCompleteChangeEvent) => setValue(e.value)} forceSelection />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared to make sure the value passed to the model is always one of the suggestions. Simply enable"," ",(0,t.jsx)("i",{children:"forceSelection"})," to enforce that input is always from the suggestion list."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(O,{value:n,suggestions:r,completeMethod:e=>{s([...Array(10).keys()].map(t=>e.query+"-"+t))},onChange:e=>i(e.value),forceSelection:!0})}),(0,t.jsx)(o.DocSectionCode,{code:c})]})}function B(e){let[n,i]=(0,l.useState)(null),[r,s]=(0,l.useState)(null),c=[{label:"Germany",code:"DE",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",code:"US",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",code:"JP",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}],d={basic:`
<AutoComplete value={selectedCity} onChange={(e) => setSelectedCity(e.value)} suggestions={filteredCities} completeMethod={search}
        field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} placeholder="Hint: type 'a'" />
        `,javascript:`
import React, { useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";

export default function GroupDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [filteredCities, setFilteredCities] = useState(null);
    const groupedCities = [
        {
            label: 'Germany',
            code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA',
            code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan',
            code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    const groupedItemTemplate = (item) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={item.label}
                    src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                    className={\`flag flag-\${item.code.toLowerCase()} mr-2\`}
                    style={{width: '18px'}}
                />
                <div>{item.label}</div>
            </div>
        );
    };

    const search = (event) => {
        let query = event.query;
        let _filteredCities = [];

        for (let country of groupedCities) {
            let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);

            if (filteredItems && filteredItems.length) {
                _filteredCities.push({ ...country, ...{ items: filteredItems } });
            }
        }

        setFilteredCities(_filteredCities);
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete value={selectedCity} onChange={(e) => setSelectedCity(e.value)} suggestions={filteredCities} completeMethod={search}
                field="label" optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} placeholder="Hint: type 'a'" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";

interface City {
  label: string;
  value: string;
}

interface Country {
  label: string;
  code: string;
  items: City[];
}

export default function GroupDemo() {
  const [selectedCity, setSelectedCity] = useState<Country>();
  const [filteredCities, setFilteredCities] = useState<Country[]>();
  const groupedCities: Array<Country> = [
    {
      label: "Germany",
      code: "DE",
      items: [
        { label: "Berlin", value: "Berlin" },
        { label: "Frankfurt", value: "Frankfurt" },
        { label: "Hamburg", value: "Hamburg" },
        { label: "Munich", value: "Munich" },
      ],
    },
    {
      label: "USA",
      code: "US",
      items: [
        { label: "Chicago", value: "Chicago" },
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "New York", value: "New York" },
        { label: "San Francisco", value: "San Francisco" },
      ],
    },
    {
      label: "Japan",
      code: "JP",
      items: [
        { label: "Kyoto", value: "Kyoto" },
        { label: "Osaka", value: "Osaka" },
        { label: "Tokyo", value: "Tokyo" },
        { label: "Yokohama", value: "Yokohama" },
      ],
    },
  ];

  const groupedItemTemplate = (item: Country) => {
    return (
      <div className="flex align-items-center">
        <img
          alt={item.label}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={\`flag flag-\${item.code.toLowerCase()} mr-2\`}
          style={{ width: "18px" }}
        />
        <div>{item.label}</div>
      </div>
    );
  };

  const search = (event: AutoCompleteCompleteEvent) => {
    let query = event.query;
    let _filteredCities = [];

    for (let country of groupedCities) {
      let filteredItems = country.items.filter(
        (item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );

      if (filteredItems && filteredItems.length) {
        _filteredCities.push({ ...country, ...{ items: filteredItems } });
      }
    }

    setFilteredCities(_filteredCities);
  };

  return (
    <div className="card flex justify-content-center">
      <AutoComplete
        value={selectedCity}
        onChange={(e: AutoCompleteChangeEvent) => setSelectedCity(e.value)}
        suggestions={filteredCities}
        completeMethod={search}
        field="label"
        optionGroupLabel="label"
        optionGroupChildren="items"
        optionGroupTemplate={groupedItemTemplate}
        placeholder="Hint: type 'a'"
      />
    </div>
  );
}
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Option groups are specified with the ",(0,t.jsx)("i",{children:"optionGroupLabel"})," and ",(0,t.jsx)("i",{children:"optionGroupChildren"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(O,{value:n,onChange:e=>i(e.value),suggestions:r,completeMethod:e=>{let t=e.query,o=[];for(let e of c){let a=e.items.filter(e=>-1!==e.label.toLowerCase().indexOf(t.toLowerCase()));a&&a.length&&o.push({...e,items:a})}s(o)},field:"label",optionGroupLabel:"label",optionGroupChildren:"items",optionGroupTemplate:e=>(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.label,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`flag flag-${e.code.toLowerCase()} mr-2`,style:{width:"18px"}}),(0,t.jsx)("div",{children:e.label})]}),placeholder:"Hint: type 'a'"})}),(0,t.jsx)(o.DocSectionCode,{code:d})]})}function P(e){let n={basic:`
import { AutoComplete } from 'primereact/autocomplete';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e}),(0,t.jsx)(o.DocSectionCode,{code:n,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function V(e){let[n,i]=(0,l.useState)(""),[r,s]=(0,l.useState)([]),c={basic:`
<AutoComplete invalid={value.length < 1} value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function InvalidDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete invalid={value.length < 1} value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";

export default function InvalidDemo() {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-content-center">
            <AutoComplete invalid={value.length < 1} value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(O,{invalid:n.length<1,value:n,suggestions:r,completeMethod:e=>{s([...Array(10).keys()].map(t=>e.query+"-"+t))},onChange:e=>i(e.value)})}),(0,t.jsx)(o.DocSectionCode,{code:c})]})}O.displayName="AutoComplete";let K={getData:()=>[{name:"Afghanistan",code:"AF"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"Andorra",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:'Cote D"Ivoire',code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:'Korea, Democratic People"S Republic of',code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:'Lao People"S Democratic Republic',code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}],getCountries(){return Promise.resolve(this.getData())}};function z(e){let[n,i]=(0,l.useState)([]),[r,s]=(0,l.useState)(null),[c,d]=(0,l.useState)(null);(0,l.useEffect)(()=>{K.getCountries().then(e=>i(e))},[]);let u={basic:`
<AutoComplete field="name" multiple value={selectedCountries} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountries(e.value)} />
        `,javascript:`
import React, { useEffect, useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";
import { CountryService } from "./service/CountryService";

export default function MultipleDemo() {
    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);

    const search = (event) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredCountries;

            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []);

    return (
        <div className="card p-fluid">
            <AutoComplete field="name" multiple value={selectedCountries} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountries(e.value)} />
        </div>
    )
}
        `,typescript:`
import React, { useEffect, useState } from 'react';
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";
import { CountryService } from "./service/CountryService";

interface Country {
    name: string;
    code: string;
}

export default function MultipleDemo() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<Country>(null);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>(null);

    const search = (event: AutoCompleteCompleteEvent) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredCountries;

            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []);

    return (
        <div className="card p-fluid">
            <AutoComplete field="name" multiple value={selectedCountries} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountries(e.value)} />
        </div>
    )
}
        `,data:`
        {
            "data": [
                {"name": "United Kingdom", "code": "UK"},
                {"name": "United States", "code": "USA"},
                ...
            ]
        }
                `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Multiple mode is enabled using ",(0,t.jsx)("i",{children:"multiple"})," property used to select more than one value from the autocomplete. In this case, value reference should be an array. The number of values selectable can be restricted using the"," ",(0,t.jsx)("i",{children:"selectionLimit"})," property."]})}),(0,t.jsx)("div",{className:"card p-fluid",children:(0,t.jsx)(O,{field:"name",multiple:!0,value:r,suggestions:c,completeMethod:e=>{setTimeout(()=>{d(e.query.trim().length?n.filter(t=>t.name.toLowerCase().startsWith(e.query.toLowerCase())):[...n])},250)},onChange:e=>s(e.value)})}),(0,t.jsx)(o.DocSectionCode,{code:u,service:["CountryService"]})]})}function W(e){let[n,i]=(0,l.useState)([]),[r,s]=(0,l.useState)(null),[c,d]=(0,l.useState)(null);(0,l.useEffect)(()=>{K.getCountries().then(e=>i(e))},[]);let u={basic:`
<AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} />
        `,javascript:`
import React, { useEffect, useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";
import { CountryService } from './service/CountryService';

export default function ObjectDemo() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);

    const search = (event) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredCountries;

            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} />
        </div>
    )
}
        `,typescript:`
import React, { useEffect, useState } from 'react';
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";
import { CountryService } from './service/CountryService';

interface Country {
    name: string;
    code: string;
}

export default function ObjectDemo() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country>(null);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>(null);
    
    const search = (event: AutoCompleteCompleteEvent) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredCountries;

            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} completeMethod={search} onChange={(e: AutoCompleteChangeEvent) => setSelectedCountry(e.value)} />
        </div>
    )
}
        `,data:`
 /* CountryService */
{"name": "United Kingdom", "code": "UK"},
{"name": "United States", "code": "USA"},
...
                `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["AutoComplete can work with objects using the ",(0,t.jsx)("i",{children:"field"})," property that defines the label to display as a suggestion. The value passed to the model would still be the object instance of a suggestion. Here is an example with a Country object that has name and code fields such as ",(0,t.jsx)("i",{children:'{name: "United States", code:"USA"}'}),"."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(O,{field:"name",value:r,suggestions:c,completeMethod:e=>{setTimeout(()=>{d(e.query.trim().length?n.filter(t=>t.name.toLowerCase().startsWith(e.query.toLowerCase())):[...n])},250)},onChange:e=>s(e.value)})}),(0,t.jsx)(o.DocSectionCode,{code:u,service:["CountryService"]})]})}let J=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/autocomplete.jpg",alt:"autocomplete"})})]});function Y(e){let[n,i]=(0,l.useState)([]),[r,s]=(0,l.useState)(null),[c,d]=(0,l.useState)(null);(0,l.useEffect)(()=>{K.getCountries().then(e=>i(e))},[]);let u={basic:`
<AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries}  
    completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} itemTemplate={itemTemplate} panelFooterTemplate={panelFooterTemplate} selectedItemTemplate={selectedItemTemplate} />
        `,javascript:`
import React, { useEffect, useState } from 'react';
import { AutoComplete } from "primereact/autocomplete";
import { CountryService } from './service/CountryService';

export default function TemplateDemo() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);

    const panelFooterTemplate = () => {
        const isCountrySelected = (filteredCountries || []).some( country => country['name'] === selectedCountry );
           return (
            <div className="py-2 px-3">
                {isCountrySelected ? (
                    <span>
                        <b>{selectedCountry}</b> selected.
                    </span>
                ) : (
                    'No country selected.'
                )}
            </div>
        );
    };

    const search = (event) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredCountries;

            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }

    const itemTemplate = (item) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={item.name}
                    src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                    className={\`flag flag-\${item.code.toLowerCase()} mr-2\`}
                    style={{width: '18px'}}
                />
                <div>{item.name}</div>
            </div>
        );
    };

    const selectedItemTemplate = (item) => {
        return item.name + ' (' + item.code.toUpperCase() + ')';
    };

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} 
                completeMethod={search} onChange={(e) => setSelectedCountry(e.value)} itemTemplate={itemTemplate} panelFooterTemplate={panelFooterTemplate} selectedItemTemplate={selectedItemTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useEffect, useState } from 'react';
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";
import { CountryService } from './service/CountryService';

interface Country {
    name: string;
    code: string;
}

export default function TemplateDemo() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<Country>(null);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>(null);
    
    const search = (event: AutoCompleteCompleteEvent) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredCountries;

            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }

    const itemTemplate = (item: Country) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={item.name}
                    src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                    className={\`flag flag-\${item.code.toLowerCase()} mr-2\`}
                    style={{width: '18px'}}
                />
                <div>{item.name}</div>
            </div>
        );
    };

    const selectedItemTemplate = (item: Country) => {
        return item.name + ' (' + item.code.toUpperCase() + ')';
    };
    
    const panelFooterTemplate = () => {
        const isCountrySelected = (filteredCountries || []).some( country => country['name'] === selectedCountry );
           return (
            <div className="py-2 px-3">
                {isCountrySelected ? (
                    <span>
                        <b>{selectedCountry}</b> selected.
                    </span>
                ) : (
                    'No country selected.'
                )}
            </div>
        );
    };

    useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} 
                completeMethod={search} onChange={(e: AutoCompleteChangeEvent) => setSelectedCountry(e.value)} itemTemplate={itemTemplate} panelFooterTemplate={panelFooterTemplate} selectedItemTemplate={selectedItemTemplate} />
        </div>
    )
}
        `,data:`
 /* CountryService */

{"name": "United Kingdom", "code": "UK"},
{"name": "United States", "code": "USA"},
...
                `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Custom content can be displayed as an option using ",(0,t.jsx)("i",{children:"itemTemplate"})," property that references a function with a suggestion option as a parameter and returns an element. Similarly ",(0,t.jsx)("i",{children:"selectedItemTemplate"})," property is available to customize the chips in ",(0,t.jsx)("i",{children:"multiple"})," mode and the text in ",(0,t.jsx)("i",{children:"single"})," mode using the same approach."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(O,{field:"name",value:r,suggestions:c,completeMethod:e=>{setTimeout(()=>{d(e.query.trim().length?n.filter(t=>t.name.toLowerCase().startsWith(e.query.toLowerCase())):[...n])},250)},onChange:e=>s(e.value),itemTemplate:e=>(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.name,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`flag flag-${e.code.toLowerCase()} mr-2`,style:{width:"18px"}}),(0,t.jsx)("div",{children:e.name})]}),panelFooterTemplate:()=>{let e=(c||[]).some(e=>e.name===r);return(0,t.jsx)("div",{className:"py-2 px-3",children:e?(0,t.jsxs)("span",{children:[(0,t.jsx)("b",{children:r})," selected."]}):"No country selected."})},selectedItemTemplate:e=>`${e.name} (${e.code.toUpperCase()})`})}),(0,t.jsx)(o.DocSectionCode,{code:u,service:["CountryService"]})]})}function Z(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-autocomplete"}),(0,t.jsx)("td",{children:"Container element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-autocomplete-panel"}),(0,t.jsx)("td",{children:"Overlay panel of suggestions."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-autocomplete-items"}),(0,t.jsx)("td",{children:"List container of suggestions."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-autocomplete-item"}),(0,t.jsx)("td",{children:"List item of a suggestion."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-autocomplete-token"}),(0,t.jsx)("td",{children:"Element of a selected item in multiple mode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-autocomplete-token-icon"}),(0,t.jsx)("td",{children:"Close icon element of a selected item in multiple mode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-autocomplete-token-label"}),(0,t.jsx)("td",{children:"Label of a selected item in multiple mode."})]})]})]})})]})}var $=e.i(41158);function X(e){let n={basic:`
const TRANSITIONS = {
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
    autocomplete: {
        root: ({ props }) => ({
            className: classNames(
                'relative inline-flex',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                },
                { 'w-full': props.multiple }
            )
        }),
        container: {
            className: classNames(
                'm-0 list-none cursor-text overflow-hidden flex items-center flex-wrap w-full',
                'px-3 py-2 gap-2',
                'font-sans text-base text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40  transition duration-200 ease-in-out appearance-none rounded-md',
                'focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] hover:border-blue-500 focus:outline-none dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        inputToken: {
            className: classNames('py-0.375rem px-0', 'flex-1 inline-flex')
        },
        input: ({ props }) => ({
            root: {
                className: classNames(
                    'm-0',
                    'transition-colors duration-200 appearance-none rounded-lg',
                    { 'rounded-tr-none rounded-br-none': props.dropdown },
                    {
                        'font-sans text-base text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] hover:border-blue-500 focus:outline-none':
                            !props.multiple,
                        'font-sans text-base text-gray-700 dark:text-white/80 border-0 outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full': props.multiple
                    }
                )
            }
        }),
        token: {
            className: classNames('py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center')
        },
        dropdownButton: {
            root: 'rounded-tl-none rounded-bl-none'
        },
        panel: {
            className: classNames('bg-white text-gray-700 border-0 rounded-md shadow-lg', 'max-h-[200px] overflow-auto', 'dark:bg-gray-900 dark:text-white/80')
        },
        list: 'py-3 list-none m-0',
        item: ({ context }) => ({
            className: classNames('cursor-pointer font-normal overflow-hidden relative whitespace-nowrap', 'm-0 p-3 border-0  transition-shadow duration-200 rounded-none', {
                'text-gray-700 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': !context.selected,
                'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': context.focused && !context.selected,
                'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.selected,
                'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': context.selected
            })
        }),
        itemGroup: {
            className: classNames('m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto')
        },
        transition: TRANSITIONS.overlay
    }
}
        `},l={javascript:`
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function UnstyledDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)($.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(o.DocSectionCode,{code:n,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(o.DocSectionCode,{code:l,embedded:!0})]})})}function Q(e){let[n,i]=(0,l.useState)(null),[r,s]=(0,l.useState)(null),c=Array.from({length:1e5}).map((e,t)=>({label:`Item #${t}`,value:t})),d={basic:`
<AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems}
    virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => setSelectedItem(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function VirtualScrollerDemo() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    const searchItems = (event) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo purposes we filter at client side
        let query = event.query;
        let _filteredItems = [];

        for(let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item);
            }
        }

        setFilteredItems(_filteredItems);
    }

    return (
        <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems}
            virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e) => setSelectedItem(e.value)} />
    )
}
        `,typescript:`
import React, { useState } from "react";
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";

interface Item {
    label: string;
    value: number;
}

export default function VirtualScrollerDemo() {
    const [selectedItem, setSelectedItem] = useState<Item>(null);
    const [filteredItems, setFilteredItems] = useState<Item[]>(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    const searchItems = (event: AutoCompleteCompleteEvent) => {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo purposes we filter at client side
        let query = event.query;
        let _filteredItems = [];

        for(let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                _filteredItems.push(item);
            }
        }

        setFilteredItems(_filteredItems);
    }

    return (
        <AutoComplete value={selectedItem} suggestions={filteredItems} completeMethod={searchItems}
            virtualScrollerOptions={{ itemSize: 38 }} field="label" dropdown onChange={(e: AutoCompleteChangeEvent) => setSelectedItem(e.value)} />
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Virtual Scrolling is a performant way to render large lists. Configuration of the scroll behavior is defined with ",(0,t.jsx)("i",{children:"virtualScrollerOptions"}),"that requires ",(0,t.jsx)("i",{children:"itemSize"})," as the mandatory value to set the height of an item. Visit ",(0,t.jsx)($.default,{href:"/virtualscroller",children:"VirtualScroller"})," documentation for more information about the configuration API."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(O,{value:n,suggestions:r,completeMethod:e=>{let t=e.query,o=[];for(let e=0;e<c.length;e++){let a=c[e];0===a.label.toLowerCase().indexOf(t.toLowerCase())&&o.push(a)}s(o)},virtualScrollerOptions:{itemSize:38},field:"label",dropdown:!0,onChange:e=>i(e.value)})}),(0,t.jsx)(o.DocSectionCode,{code:d})]})}var ee=e.i(88850),et=e.i(82948);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:J},{id:"pt.autocomplete.options",label:"AutoComplete PT Options",component:ee.default}];return(0,t.jsx)(et.DocComponent,{title:"React AutoComplete Component",header:"AutoComplete",description:"AutoComplete is an input component that provides real-time suggestions while being typed",componentDocs:[{id:"import",label:"Import",component:P},{id:"basic",label:"Basic",component:U},{id:"dropdown",label:"Dropdown",component:R},{id:"objects",label:"Objects",component:W},{id:"template",label:"Template",component:Y},{id:"group",label:"Group",component:B},{id:"forceselection",label:"Force Selection",component:H},{id:"virtualscroll",label:"Virtual Scroll",component:Q},{id:"multiple",label:"Multiple",component:z},{id:"floatlabel",label:"Float Label",component:q},{id:"filled",label:"Filled",component:_},{id:"invalid",label:"Invalid",component:V},{id:"disabled",label:"Disabled",component:G},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["AutoComplete"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:Z},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:X}]}]})}],11649)},93288,(e,t,o)=>{let a="/autocomplete";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(11649)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);