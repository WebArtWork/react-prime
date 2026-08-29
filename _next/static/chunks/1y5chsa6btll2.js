(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42990,e=>{"use strict";var t=e.i(91398),r=e.i(88850),i=e.i(82948),o=e.i(28137),n=e.i(57294),l=e.i(41158);function a(){return(0,t.jsxs)(o.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Value to describe the source listbox and target listbox can be provided with ",(0,t.jsx)("i",{children:"sourceListProps"})," and ",(0,t.jsx)("i",{children:"targetListProps"})," by passing ",(0,t.jsx)("i",{children:"aria-labelledby"})," or ",(0,t.jsx)("i",{children:"aria-label"})," props. The list elements has a ",(0,t.jsx)("i",{children:"listbox"})," role with the ",(0,t.jsx)("i",{children:"aria-multiselectable"})," attribute. Each list item has an ",(0,t.jsx)("i",{children:"option"})," role with ",(0,t.jsx)("i",{children:"aria-selected"})," and ",(0,t.jsx)("i",{children:"aria-disabled"})," as their attributes."]}),(0,t.jsxs)("p",{children:["Controls buttons are ",(0,t.jsx)("i",{children:"button"})," elements with an ",(0,t.jsx)("i",{children:"aria-label"})," that refers to the ",(0,t.jsx)("i",{children:"aria.moveTop"}),", ",(0,t.jsx)("i",{children:"aria.moveUp"}),", ",(0,t.jsx)("i",{children:"aria.moveDown"}),", ",(0,t.jsx)("i",{children:"aria.moveBottom"}),",",(0,t.jsx)("i",{children:"aria.moveTo"}),", ",(0,t.jsx)("i",{children:"aria.moveAllTo"}),","," ",(0,t.jsx)("i",{children:"aria.moveFrom"})," and ",(0,t.jsx)("i",{children:"aria.moveAllFrom"})," properties of the ",(0,t.jsx)(l.default,{href:"/locale",children:"locale"})," API by default, alternatively you may use",(0,t.jsx)("i",{children:"moveTopButtonProps"}),", ",(0,t.jsx)("i",{children:"moveUpButtonProps"}),", ",(0,t.jsx)("i",{children:"moveDownButtonProps"}),", ",(0,t.jsx)("i",{children:"moveToButtonProps"}),", ",(0,t.jsx)("i",{children:"moveAllToButtonProps"}),", ",(0,t.jsx)("i",{children:"moveFromButtonProps"}),", ",(0,t.jsx)("i",{children:"moveFromButtonProps"})," and ",(0,t.jsx)("i",{children:"moveAllFromButtonProps"})," to customize the buttons like overriding the default ",(0,t.jsx)("i",{children:"aria-label"})," attributes."]}),(0,t.jsx)(n.CodeHighlight,{children:`
<span id="lb">Options</span>
<OrderList aria-labelledby="lb" />

<OrderList aria-label="City" />
`}),(0,t.jsx)("h3",{children:"ListBox Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the first selected option, if there is none then first option receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Toggles the selected state of the focused option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles the selected state of the focused option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Moves focus to the first option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Moves focus to the last option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"down arrow"})]}),(0,t.jsx)("td",{children:"Moves focus to the next option and toggles the selection state."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"up arrow"})]}),(0,t.jsx)("td",{children:"Moves focus to the previous option and toggles the selection state."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"space"})]}),(0,t.jsx)("td",{children:"Selects the items between the most recently selected option and the focused option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"control"})," + ",(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"home"})]}),(0,t.jsx)("td",{children:"Selects the focused options and all the options up to the first one."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"control"})," + ",(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"end"})]}),(0,t.jsx)("td",{children:"Selects the focused options and all the options down to the first one."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"control"})," + ",(0,t.jsx)("i",{children:"a"})]}),(0,t.jsx)("td",{children:"Selects all options."})]})]})]})}),(0,t.jsx)("h3",{children:"Buttons Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Executes button action."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Executes button action."})]})]})]})})]})}var s=e.i(5180),c=e.i(91788),d=e.i(4242),u=e.i(27604),m=e.i(10836),p=e.i(15498),h=e.i(60150),g=e.i(71834),x=e.i(45543),f=e.i(51551),b=e.i(28653),v=e.i(3935);let y=`
@layer primereact {
    .p-picklist {
        display: flex;
    }

    .p-picklist-buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .p-picklist-list-wrapper {
        flex: 1 1 50%;
    }

    .p-picklist-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: auto;
        min-height: 12rem;
        max-height: 24rem;
    }

    .p-picklist-item {
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .p-picklist-item .p-ink {
        pointer-events: none;
    }

    .p-picklist-filter {
        position: relative;
    }

    .p-picklist-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }

    .p-picklist-filter-input {
        width: 100%;
    }
}
`,j=p.ComponentBase.extend({defaultProps:{__TYPE:"PickList",id:null,source:null,target:null,sourceHeader:null,targetHeader:null,style:null,className:null,sourceStyle:null,targetStyle:null,sourceSelection:null,targetSelection:null,showSourceControls:!0,showTargetControls:!0,metaKeySelection:!1,onFocus:null,onBlur:null,filter:!1,filterBy:null,filterMatchMode:"contains",targetFilterIcon:null,sourceFilterIcon:null,moveAllToSourceIcon:null,moveToSourceIcon:null,moveAllToTargetIcon:null,moveToTargetIcon:null,moveBottomIcon:null,moveUpIcon:null,moveTopIcon:null,moveDownIcon:null,filterLocale:void 0,sourceFilterValue:null,targetFilterValue:null,showSourceFilter:!0,showTargetFilter:!0,sourceFilterPlaceholder:null,targetFilterPlaceholder:null,sourceFilterTemplate:null,targetFilterTemplate:null,tabIndex:0,dataKey:null,autoOptionFocus:!0,focusOnHover:!0,breakpoint:"960px",itemTemplate:null,sourceItemTemplate:null,targetItemTemplate:null,onChange:null,onMoveToSource:null,onMoveAllToSource:null,onMoveToTarget:null,onMoveAllToTarget:null,onSourceSelectionChange:null,onTargetSelectionChange:null,onSourceFilterChange:null,onTargetFilterChange:null,children:void 0},css:{classes:{root:"p-picklist p-component",buttons:"p-picklist-buttons p-picklist-transfer-buttons",header:"p-picklist-header",filterIcon:"p-picklist-filter-icon",filter:"p-picklist-filter",filterInput:"p-picklist-filter-input p-inputtext p-component",filterContainer:"p-picklist-filter-container",list:"p-picklist-list",listWrapper:"p-picklist-list-wrapper",listSourceWrapper:"p-picklist-list-wrapper p-picklist-source-wrapper",listTargetWrapper:"p-picklist-list-wrapper p-picklist-target-wrapper",listSource:"p-picklist-list p-picklist-source",listTarget:"p-picklist-list p-picklist-target",item:({selected:e,focused:t})=>(0,v.classNames)("p-picklist-item",{"p-highlight":e,"p-focus":t}),sourceControls:"p-picklist-source-controls p-picklist-buttons",targetControls:"p-picklist-target-controls p-picklist-buttons"},styles:y}});var S=e.i(183),T=e.i(57724),k=e.i(4051),w=e.i(59911),I=e.i(81438),N=e.i(13709);let C=c.memo(e=>{let r=(0,h.useMergeProps)(),{ptm:i,cx:o,unstyled:n}=e,l=e.moveUpIcon||(0,t.jsx)(N.AngleUpIcon,{}),a=e.moveTopIcon||(0,t.jsx)(w.AngleDoubleUpIcon,{}),s=e.moveDownIcon||(0,t.jsx)(I.AngleDownIcon,{}),c=e.moveBottomIcon||(0,t.jsx)(k.AngleDoubleDownIcon,{}),d=!e.selection||!e.selection.length,u=r({className:(0,v.classNames)(e.className,o("controls"))},i("controls",{hostName:e.hostName}));return(0,t.jsxs)("div",{...u,children:[(0,t.jsx)(T.Button,{disabled:d,type:"button",icon:l,onClick:t=>{let r=e.selection;if(r&&r.length){let i=[...e.list];for(let t=0;t<r.length;t++){let o=r[t],n=f.ObjectUtils.findIndexInList(o,i,e.dataKey);if(0!==n){let e=i[n],t=i[n-1];i[n-1]=e,i[n]=t}else break}e.onReorder&&e.onReorder({originalEvent:t,value:i,direction:"up"})}},pt:i("moveUpButton"),unstyled:n,"aria-label":(0,S.ariaLabel)("moveUp"),__parentMetadata:{parent:e.metaData}}),(0,t.jsx)(T.Button,{disabled:d,type:"button",icon:a,onClick:t=>{let r=e.selection;if(r&&r.length){let i=[...e.list];for(let t=0;t<r.length;t++){let o=r[t],n=f.ObjectUtils.findIndexInList(o,i,e.dataKey);if(0!==n){let e=i.splice(n,1)[0];i.unshift(e)}else break}e.onReorder&&e.onReorder({originalEvent:t,value:i,direction:"top"})}},pt:i("moveTopButton"),unstyled:n,"aria-label":(0,S.ariaLabel)("moveTop"),__parentMetadata:{parent:e.metaData}}),(0,t.jsx)(T.Button,{disabled:d,type:"button",icon:s,onClick:t=>{let r=e.selection;if(r&&r.length){let i=[...e.list];for(let t=r.length-1;t>=0;t--){let o=r[t],n=f.ObjectUtils.findIndexInList(o,i,e.dataKey);if(n!==i.length-1){let e=i[n],t=i[n+1];i[n+1]=e,i[n]=t}else break}e.onReorder&&e.onReorder({originalEvent:t,value:i,direction:"down"})}},pt:i("moveDownButton"),unstyled:n,"aria-label":(0,S.ariaLabel)("moveDown"),__parentMetadata:{parent:e.metaData}}),(0,t.jsx)(T.Button,{disabled:d,type:"button",icon:c,onClick:t=>{let r=e.selection;if(r&&r.length){let i=[...e.list];for(let t=r.length-1;t>=0;t--){let o=r[t],n=f.ObjectUtils.findIndexInList(o,i,e.dataKey);if(n!==i.length-1){let e=i.splice(n,1)[0];i.push(e)}else break}e.onReorder&&e.onReorder({originalEvent:t,value:i,direction:"bottom"})}},pt:i("moveBottomButton"),unstyled:n,"aria-label":(0,S.ariaLabel)("moveBottom"),__parentMetadata:{parent:e.metaData}})]})});C.displayName="PickListControls";var D=e.i(92058),P=e.i(75366),L=e.i(50901);let F=c.memo(e=>{let r=(0,h.useMergeProps)(),{ptm:i,cx:o}=e,n=e.template?e.template(e.value):e.value,l=r({className:(0,v.classNames)(e.className,o("item",{selected:e.selected,focused:e.focused})),id:e.id,onClick:t=>{e.onClick&&e.onClick({originalEvent:t,value:e.value,id:e.id})},onKeyDown:t=>{e.onKeyDown&&e.onKeyDown({originalEvent:t,value:e.value})},onFocus:t=>{e.onFocus&&e.onFocus(t)},onMouseDown:t=>{e.onMouseDown&&e.onMouseDown(t)},onMouseMove:e.onMouseMove,role:"option","aria-selected":e.selected,"data-p-highlight":e.selected,"data-p-focused":e.focused},i("item",{hostName:e.hostName,context:{selected:e.selected}}));return(0,t.jsxs)("li",{...l,children:[n,(0,t.jsx)(L.Ripple,{})]})});F.displayName="PickListItem";let A=c.memo(c.forwardRef((e,r)=>{let i,o,n,l=(0,h.useMergeProps)(),a=c.useRef(null),{ptm:s,cx:d}=e,u=(t,r)=>s(t,{hostName:e.hostName,...r}),m=t=>{e.onFilter&&e.onFilter({originalEvent:t,value:t.target.value,type:e.type})},p=e=>{13===e.which&&e.preventDefault()};c.useImperativeHandle(r,()=>({getElement:()=>a.current}));let g=(i=l({className:d("header")},u("header")),e.header?(0,t.jsx)("div",{...i,children:f.ObjectUtils.getJSXElement(e.header,e)}):null),x=(()=>{let r=l({className:d("filterIcon")},u("filterIcon")),i="source"===e.type?e.sourceFilterIcon||(0,t.jsx)(D.SearchIcon,{...r}):e.targetFilterIcon||(0,t.jsx)(D.SearchIcon,{...r}),o=P.IconUtils.getJSXIcon(i,{...r},{props:e});if(e.showFilter){let r=l({className:d("filter")},u("filter")),i=l({type:"text",value:e.filterValue,onChange:m,onKeyDown:p,placeholder:e.placeholder,className:d("filterInput")},u("filterInput")),n=(0,t.jsxs)("div",{...r,children:[(0,t.jsx)("input",{...i}),(0,t.jsxs)("span",{children:[" ",o," "]})]});if(e.filterTemplate){let t={className:"p-picklist-filter",inputProps:{className:"p-picklist-filter-input p-inputtext p-component",onChange:m,onKeyDown:p},iconClassName:"p-picklist-filter-icon",element:n,props:e};n=f.ObjectUtils.getJSXElement(e.filterTemplate,t)}let a=l({className:d("filterContainer")},u("filterContainer"));return(0,t.jsx)("div",{...a,children:n})}return null})(),b=(o=e.list?e.list.map((r,i)=>{let o=e.parentId+"_"+e.type+"_"+i,n=-1!==f.ObjectUtils.findIndexInList(r,e.selection,e.dataKey);return(0,t.jsx)(F,{hostName:e.hostName,id:o,index:i,focused:o===e.focusedOptionId,value:r,template:e.itemTemplate,selected:n,onClick:e.onItemClick,onKeyDown:e.onItemKeyDown,onMouseDown:t=>e.onOptionMouseDown({...t,index:i,type:e.type}),onMouseMove:()=>{e.focusOnHover&&e.focusedList[e.type]&&e?.changeFocusedOptionIndex?.(i,e.type)},ptm:s,cx:d},o)}):null,n=l({ref:a,className:(0,v.classNames)(e.listClassName,d("list")),role:"listbox",id:e.parentId+"_"+e.type+"_list","aria-multiselectable":!0,"aria-activedescendant":e.ariaActivedescendant,tabIndex:e.list&&e.list.length>0?e.tabIndex:-1,onKeyDown:e.onListKeyDown,onFocus:t=>{e.onListFocus(t,e.type)},onBlur:e.onListBlur,style:e.style},u("list")),(0,t.jsx)("ul",{...n,children:o})),y=l({className:(0,v.classNames)(e.className,d("listWrapper"))},u("listWrapper"));return(0,t.jsxs)("div",{...y,children:[g,x,b]})}));A.displayName="PickListSubList";var E=e.i(5064),K=e.i(8753),M=e.i(68463),B=e.i(54903),U=e.i(19820);let O=c.memo(e=>{let r=(0,h.useMergeProps)(),i=(0,E.useMatchMedia)(`(max-width: ${e.breakpoint})`,e.breakpoint),{ptm:o,cx:n,unstyled:l}=e;function a(r){switch(r){case"moveToTargetIcon":return e.moveToTargetIcon||i?e.moveToTargetIcon||(0,t.jsx)(I.AngleDownIcon,{}):e.moveToTargetIcon||(0,t.jsx)(U.AngleRightIcon,{});case"moveAllToTargetIcon":return e.moveAllToTargetIcon||i?e.moveAllToTargetIcon||(0,t.jsx)(k.AngleDoubleDownIcon,{}):e.moveAllToTargetIcon||(0,t.jsx)(M.AngleDoubleRightIcon,{});case"moveToSourceIcon":return e.moveToSourceIcon||i?e.moveToSourceIcon||(0,t.jsx)(N.AngleUpIcon,{}):e.moveToSourceIcon||(0,t.jsx)(B.AngleLeftIcon,{});case"moveAllToSourceIcon":return e.moveAllToSourceIcon||i?e.moveAllToSourceIcon||(0,t.jsx)(w.AngleDoubleUpIcon,{}):e.moveAllToSourceIcon||(0,t.jsx)(K.AngleDoubleLeftIcon,{});default:return null}}let s=P.IconUtils.getJSXIcon(a("moveToTargetIcon"),void 0,{props:e,viewChanged:i}),c=P.IconUtils.getJSXIcon(a("moveAllToTargetIcon"),void 0,{props:e,viewChanged:i}),d=P.IconUtils.getJSXIcon(a("moveToSourceIcon"),void 0,{props:e,viewChanged:i}),u=P.IconUtils.getJSXIcon(a("moveAllToSourceIcon"),void 0,{props:e,viewChanged:i}),m=f.ObjectUtils.isEmpty(e.sourceSelection)||f.ObjectUtils.isEmpty(e.visibleSourceList),p=f.ObjectUtils.isEmpty(e.targetSelection)||f.ObjectUtils.isEmpty(e.visibleTargetList),g=f.ObjectUtils.isEmpty(e.visibleSourceList),x=f.ObjectUtils.isEmpty(e.visibleTargetList),b=r({className:(0,v.classNames)(e.className,n("buttons"))},o("buttons",{hostName:e.hostName}));return(0,t.jsxs)("div",{...b,children:[(0,t.jsx)(T.Button,{disabled:m,type:"button",icon:s,onClick:t=>{let r=e.sourceSelection;if(f.ObjectUtils.isNotEmpty(r)){let i=[...e.target],o=[...e.source];for(let t=0;t<r.length;t++){let n=r[t];-1===f.ObjectUtils.findIndexInList(n,i,e.dataKey)&&i.push(o.splice(f.ObjectUtils.findIndexInList(n,o,e.dataKey),1)[0])}e.onTransfer&&e.onTransfer({originalEvent:t,source:o,target:i,direction:"toTarget"})}},pt:o("moveToTargetButton"),unstyled:l,"aria-label":(0,S.ariaLabel)("moveToTarget"),__parentMetadata:{parent:e.metaData}}),(0,t.jsx)(T.Button,{disabled:g,type:"button",icon:c,onClick:t=>{if(e.source){let r=[...e.target,...e.visibleSourceList],i=e.source.filter(t=>!e.visibleSourceList.some(e=>e===t));e.onTransfer&&e.onTransfer({originalEvent:t,source:i,target:r,direction:"allToTarget"})}},pt:o("moveAllToTargetButton"),unstyled:l,"aria-label":(0,S.ariaLabel)("moveAllToTarget"),__parentMetadata:{parent:e.metaData}}),(0,t.jsx)(T.Button,{disabled:p,type:"button",icon:d,onClick:t=>{let r=e.targetSelection;if(f.ObjectUtils.isNotEmpty(r)){let i=[...e.target],o=[...e.source];for(let t=0;t<r.length;t++){let n=r[t];-1===f.ObjectUtils.findIndexInList(n,o,e.dataKey)&&o.push(i.splice(f.ObjectUtils.findIndexInList(n,i,e.dataKey),1)[0])}e.onTransfer&&e.onTransfer({originalEvent:t,source:o,target:i,direction:"toSource"})}},pt:o("moveToSourceButton"),unstyled:l,"aria-label":(0,S.ariaLabel)("moveToSource"),__parentMetadata:{parent:e.metaData}}),(0,t.jsx)(T.Button,{disabled:x,type:"button",icon:u,onClick:t=>{if(e.source){let r=[...e.source,...e.visibleTargetList],i=e.target.filter(t=>!e.visibleTargetList.some(e=>e===t));e.onTransfer&&e.onTransfer({originalEvent:t,source:r,target:i,direction:"allToSource"})}},pt:o("moveAllToSourceButton"),unstyled:l,"aria-label":(0,S.ariaLabel)("moveAllToSource"),__parentMetadata:{parent:e.metaData}})]})});O.displayName="PickListTransferControls";let H=c.memo(c.forwardRef((e,r)=>{let i=(0,h.useMergeProps)(),o=c.useContext(m.PrimeReactContext),n=j.getProps(e,o),[l,a]=c.useState([]),[s,y]=c.useState([]),[S,T]=c.useState(""),[k,w]=c.useState(""),[I,N]=c.useState(n.id),[D,P]=c.useState(-1),[L,F]=c.useState(null),[E,K]=c.useState({source:!1,target:!1}),M={props:n,state:{sourceSelection:l,targetSelection:s,sourceFilterValue:S,targetFilterValue:k,attributeSelector:I}},{ptm:B,cx:U,isUnstyled:H}=j.setMetaData(M);(0,p.useHandleStyle)(j.css.styles,H,{name:"picklist"});let R=c.useRef(null),_=c.useRef(null),$=c.useRef(null),V=c.useRef(null),W=c.useRef(null),X=c.useRef(null),J=n.sourceSelection?n.sourceSelection:l,q=n.targetSelection?n.targetSelection:s,z=n.onSourceFilterChange?n.sourceFilterValue:S,Y=n.onTargetFilterChange?n.targetFilterValue:k,G=f.ObjectUtils.isNotEmpty(n.filterBy),Q=G&&n.showSourceFilter,Z=G&&n.showTargetFilter,ee=(e,t,r)=>{n.onChange&&n.onChange({originalEvent:e.originalEvent,source:t,target:r})},et=(e,t=1)=>{let r=e.getElementsByClassName("p-highlight");f.ObjectUtils.isNotEmpty(r)&&x.DomHandler.scrollInView(e,-1===t?r[0]:r[r.length-1])},er=(e,t,r)=>{"sourceSelection"===t?a(e.value):y(e.value),r&&r(e)},ei=e=>{let{originalEvent:t,value:r,type:i}=e,[o,l]="source"===i?[T,n.onSourceFilterChange]:[w,n.onTargetFilterChange];l?l({originalEvent:t,value:r}):o(r)},eo=(e="")=>{let t=e.trim().toLocaleLowerCase(n.filterLocale);return el(n.source,t)},en=(e="")=>{let t=e.trim().toLocaleLowerCase(n.filterLocale);return el(n.target,t)},el=(e,t)=>{let r=G?n.filterBy.split(","):[];return u.FilterService.filter(e,r,t,n.filterMatchMode,n.filterLocale)},ea=(e,t)=>{let[r,i]="source"===t?[z,eo]:[Y,en];return G&&f.ObjectUtils.isNotEmpty(r)?i(r):e},es=ea(n.source,"source"),ec=ea(n.target,"target"),ed=(e,t)=>{K({...E,[t]:!0}),eT((e=>{if(-1===D){var t,r;let i,o=e&&e.children?[...e.children]:[],a=((e,t)=>{if(l.length||s.length){let r=x.DomHandler.findSingle(e,'[data-p-highlight="true"]');return f.ObjectUtils.findIndexInList(r,t)}return -1})(e,o);return n.autoOptionFocus&&-1===a&&(t=e,r=o,i=x.DomHandler.findSingle(t,'[data-pc-section="item"]'),a=f.ObjectUtils.findIndexInList(i,r)),a}return -1})(ew(t)),t),n.onFocus&&n.onFocus(e)},eu=(e,t)=>{K({...E,[t]:!1}),P(-1),n.onBlur&&n.onBlur(e)},em=(e,t,r=!1)=>{let i=e.originalEvent,o=e.value,l=e.id,a="source"===t,s=[...a?J:q],c=f.ObjectUtils.findIndexInList(o,s,n.dataKey),d=-1!==c,u=n.metaKeySelection;if(r||P(l),u){let e=i.metaKey||i.ctrlKey||i.shiftKey;d&&e?s.splice(c,1):(e||(s.length=0),s.push(o))}else d?s.splice(c,1):s.push(o);a?er({originalEvent:i,value:s},"sourceSelection",n.onSourceSelectionChange):er({originalEvent:i,value:s},"targetSelection",n.onTargetSelectionChange)},ep=({index:e,type:t})=>{K({...E,[t]:!0}),P(e)},eh=(e,t)=>{switch(e.code){case"ArrowDown":eg(e,t);break;case"ArrowUp":ex(e,t);break;case"Home":ev(e,t);break;case"End":ey(e,t);break;case"Enter":case"NumpadEnter":ef(e,t);break;case"Space":eb(e,t);break;case"KeyA":if(e.ctrlKey){let r="source"===t;r?a([...es]):y([...ec]),er({originalEvent:e,value:r?[...es]:[...ec]},r?"sourceSelection":"targetSelection",r?n.onSourceSelectionChange:n.onTargetSelectionChange),e.preventDefault()}break;case"KeyD":if(e.ctrlKey){let r="source"===t;r?a([]):y([]),er({originalEvent:e,value:[]},r?"sourceSelection":"targetSelection",r?n.onSourceSelectionChange:n.onTargetSelectionChange),e.preventDefault()}}},eg=(e,t)=>{let r=ej(D,t),i=ea("source"===t?n.source:n.target,t);eT(r,t),i&&i.length>0&&e.shiftKey&&em({originalEvent:e,value:i[r]},t,!0),e.preventDefault()},ex=(e,t)=>{let r=eS(D,t),i=ea("source"===t?n.source:n.target,t);eT(r,t),i&&i.length>0&&e.shiftKey&&em({originalEvent:e,value:i[r]},t,!0),e.preventDefault()},ef=(e,t)=>{let r=ew(t),i=ea("source"===t?n.source:n.target,t),o=x.DomHandler.find(r,'[data-pc-section="item"]'),l=x.DomHandler.findSingle(r,`[data-pc-section="item"][id=${D}]`),a=l&&l.getAttribute("id"),s=[...o].findIndex(e=>e===l);i&&i.length>0&&em({originalEvent:e,value:i[s],id:a},t),e.preventDefault()},eb=(e,t)=>{e.preventDefault();let r="source"===t,i=r?l:s;if(e.shiftKey&&i&&i.length>0){let o=r?es:ec,l=ew(t),a=x.DomHandler.find(l,'[data-pc-section="item"]'),s=f.ObjectUtils.findIndexInList(i[0],[...o]),c=x.DomHandler.findSingle(l,`[data-pc-section="item"][id=${D}]`),d=[...a].findIndex(e=>e===c),u=[...o].slice(Math.min(s,d),Math.max(s,d)+1);r?er({originalEvent:e,value:u},"sourceSelection",n.onSourceSelectionChange):er({originalEvent:e,value:u},"targetSelection",n.onTargetSelectionChange)}else ef(e,t)},ev=(e,t)=>{if(e.ctrlKey&&e.shiftKey){let r="source"===t,i=r?es:ec,o=ew(t),l=x.DomHandler.find(o,'[data-pc-section="item"]'),a=x.DomHandler.findSingle(o,`[data-pc-section="item"][id=${D}]`),s=[...i].slice(0,[...l].findIndex(e=>e===a)+1);r?er({originalEvent:e,value:s},"sourceSelection",n.onSourceSelectionChange):er({originalEvent:e,value:s},"targetSelection",n.onTargetSelectionChange)}else eT(0,t);e.preventDefault()},ey=(e,t)=>{let r=ew(t),i=x.DomHandler.find(r,'[data-pc-section="item"]');if(e.ctrlKey&&e.shiftKey){let o="source"===t,l=o?es:ec,a=x.DomHandler.findSingle(r,`[data-pc-section="item"][id=${D}]`),s=[...l].slice([...i].findIndex(e=>e===a),i.length);o?er({originalEvent:e,value:s},"sourceSelection",n.onSourceSelectionChange):er({originalEvent:e,value:s},"targetSelection",n.onTargetSelectionChange)}else eT(i.length-1,t);e.preventDefault()},ej=(e,t)=>{let r=ew(t),i=[...x.DomHandler.find(r,'[data-pc-section="item"]')].findIndex(t=>t.id===e);return i>-1?i+1:0},eS=(e,t)=>{let r=ew(t),i=[...x.DomHandler.find(r,'[data-pc-section="item"]')].findIndex(t=>t.id===e);return i>-1?i-1:0},eT=(e,t)=>{let r,i=ew(t),o=x.DomHandler.find(i,'[data-pc-section="item"]');if(e>=o.length)r=o.length-1;else{if(e<0)return;r=e}P(o[r].getAttribute("id")),ek(o[r].getAttribute("id"),t)},ek=(e,t)=>{let r=ew(t),i=x.DomHandler.findSingle(r,`[data-pc-section="item"][id="${e}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"start"})},ew=e=>"source"===e?_.current.getElement():$.current.getElement();c.useImperativeHandle(r,()=>({props:n,getElement:()=>R.current})),(0,g.useUpdateEffect)(()=>{if(I&&(R.current.setAttribute(I,""),!X.current)){X.current=x.DomHandler.createInlineStyle(o&&o.nonce||d.default.nonce,o&&o.styleContainer);let e=`
@media screen and (max-width: ${n.breakpoint}) {
    .p-picklist[${I}] {
        flex-direction: column;
    }

    .p-picklist[${I}] .p-picklist-buttons {
        padding: var(--content-padding);
        flex-direction: row;
    }

    .p-picklist[${I}] .p-picklist-buttons .p-button {
        margin-right: var(--inline-spacing);
        margin-bottom: 0;
    }

    .p-picklist[${I}] .p-picklist-buttons .p-button:last-child {
        margin-right: 0;
    }
}
`;X.current.innerHTML=e}return()=>{X.current=x.DomHandler.removeInlineStyle(X.current)}},[I,n.breakpoint]),(0,g.useUpdateEffect)(()=>{if(n.id||I||N((0,b.UniqueComponentId)()),V.current){var e=V.current,t=W.current;if(e)switch(t){case"up":et(e,-1);break;case"top":e.scrollTop=0;break;case"down":et(e,1);break;case"bottom":setTimeout(()=>e.scrollTop=e.scrollHeight,100)}V.current=null,W.current=null}}),(0,g.useUpdateEffect)(()=>{F(-1!==D?D:null)},[D]);let eI=n.sourceItemTemplate?n.sourceItemTemplate:n.itemTemplate,eN=n.targetItemTemplate?n.targetItemTemplate:n.itemTemplate,eC=i({id:I,ref:R,className:(0,v.classNames)(n.className,U("root")),style:n.style},j.getOtherProps(n),B("root"));return(0,t.jsxs)("div",{...eC,children:[n.showSourceControls&&(0,t.jsx)(C,{hostName:"PickList",list:n.source,selection:J,onReorder:e=>{ee(e,e.value,n.target),V.current=ew("source"),W.current=e.direction},className:U("sourceControls"),dataKey:n.dataKey,moveUpIcon:n.moveUpIcon,moveTopIcon:n.moveTopIcon,moveDownIcon:n.moveDownIcon,moveBottomIcon:n.moveBottomIcon,ptm:B,cx:U,unstyled:n.unstyled,metaData:M}),(0,t.jsx)(A,{hostName:"PickList",ref:_,type:"source",list:es,parentId:I,selection:J,onSelectionChange:e=>er(e,"sourceSelection",n.onSourceSelectionChange),onListKeyDown:e=>eh(e,"source"),onListFocus:e=>ed(e,"source"),onListBlur:e=>eu(e,"source"),onOptionMouseDown:e=>ep(e),onItemClick:e=>em(e,"source"),focusedOptionId:E.source?L:null,ariaActivedescendant:E.source?L:null,itemTemplate:eI,header:n.sourceHeader,style:n.sourceStyle,className:U("listSourceWrapper"),listClassName:U("listSource"),metaKeySelection:n.metaKeySelection,tabIndex:n.tabIndex,dataKey:n.dataKey,filterValue:z,onFilter:ei,showFilter:Q,placeholder:n.sourceFilterPlaceholder,filterTemplate:n.sourceFilterTemplate,sourceFilterIcon:n.sourceFilterIcon,ptm:B,cx:U,focusedList:E,changeFocusedOptionIndex:eT,focusOnHover:n.focusOnHover}),(0,t.jsx)(O,{hostName:"PickList",onTransfer:e=>{let{originalEvent:t,source:r,target:i,direction:o}=e,l=[];switch(o){case"toTarget":l=J,n.onMoveToTarget&&n.onMoveToTarget({originalEvent:t,value:l});break;case"allToTarget":l=n.source,n.onMoveAllToTarget&&n.onMoveAllToTarget({originalEvent:t,value:l}),l=[];break;case"toSource":l=q,n.onMoveToSource&&n.onMoveToSource({originalEvent:t,value:l});break;case"allToSource":l=n.target,n.onMoveAllToSource&&n.onMoveAllToSource({originalEvent:t,value:l}),l=[]}er({originalEvent:t,value:l},"sourceSelection",n.onSourceSelectionChange),er({originalEvent:t,value:l},"targetSelection",n.onTargetSelectionChange),y([]),a([]),ee(e,r,i)},source:n.source,visibleSourceList:es,target:n.target,breakpoint:n.breakpoint,visibleTargetList:ec,sourceSelection:J,targetSelection:q,dataKey:n.dataKey,moveToTargetIcon:n.moveToTargetIcon,moveAllToTargetIcon:n.moveAllToTargetIcon,moveToSourceIcon:n.moveToSourceIcon,moveAllToSourceIcon:n.moveAllToSourceIcon,ptm:B,cx:U,unstyled:n.unstyled,metaData:M}),(0,t.jsx)(A,{hostName:"PickList",ref:$,type:"target",list:ec,selection:q,parentId:I,onSelectionChange:e=>er(e,"targetSelection",n.onTargetSelectionChange),onListKeyDown:e=>eh(e,"target"),onListFocus:e=>ed(e,"target"),onListBlur:e=>eu(e,"target"),onOptionMouseDown:e=>ep(e),onItemClick:e=>em(e,"target"),focusedOptionId:E.target?L:null,ariaActivedescendant:E.target?L:null,itemTemplate:eN,header:n.targetHeader,style:n.targetStyle,className:U("listTargetWrapper"),listClassName:U("listWrapper"),metaKeySelection:n.metaKeySelection,tabIndex:n.tabIndex,dataKey:n.dataKey,filterValue:Y,onFilter:ei,showFilter:Z,placeholder:n.targetFilterPlaceholder,filterTemplate:n.targetFilterTemplate,targetFilterIcon:n.targetFilterIcon,ptm:B,cx:U,focusedList:E,changeFocusedOptionIndex:eT,focusOnHover:n.focusOnHover}),n.showTargetControls&&(0,t.jsx)(C,{hostName:"PickList",list:n.target,selection:q,onReorder:e=>{ee(e,n.source,e.value),V.current=ew("target"),W.current=e.direction},className:U("targetControls"),dataKey:n.dataKey,moveUpIcon:n.moveUpIcon,moveTopIcon:n.moveTopIcon,moveDownIcon:n.moveDownIcon,moveBottomIcon:n.moveBottomIcon,ptm:B,cx:U,unstyled:n.unstyled,metaData:M})]})}));H.displayName="PickList";var R=e.i(66534);function _(e){let[r,i]=(0,c.useState)([]),[n,l]=(0,c.useState)([]);(0,c.useEffect)(()=>{R.ProductService.getProductsSmall().then(e=>i(e))},[]);let a={basic:`
<PickList dataKey="id" source={source} target={target} onChange={onChange} itemTemplate={itemTemplate} breakpoint="1280px"
    sourceHeader="Available" targetHeader="Selected" sourceStyle={{ height: '24rem' }} targetStyle={{ height: '24rem' }} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
import { ProductService } from './service/ProductService';

export default function BasicDemo() {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setSource(data));
    }, []);

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} />
                <div className="flex-1 flex flex-column gap-2">
                    <span className="font-bold">{item.name}</span>
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        <span>{item.category}</span>
                    </div>
                </div>
                <span className="font-bold text-900">\${item.price}</span>
            </div>
        );
    };

    return (
        <div className="card">
            <PickList dataKey="id" source={source} target={target} onChange={onChange} itemTemplate={itemTemplate} breakpoint="1280px"
                sourceHeader="Available" targetHeader="Selected" sourceStyle={{ height: '24rem' }} targetStyle={{ height: '24rem' }} />
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
import { ProductService } from './service/ProductService';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: 'string',
    rating: number;
}

export default function BasicDemo() {
    const [source, setSource] = useState<Product[]>([]);
    const [target, setTarget] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setSource(data));
    }, []);

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const itemTemplate = (item: Product) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} />
                <div className="flex-1 flex flex-column gap-2">
                    <span className="font-bold">{item.name}</span>
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        <span>{item.category}</span>
                    </div>
                </div>
                <span className="font-bold text-900">\${item.price}</span>
            </div>
        );
    };

    return (
        <div className="card">
            <PickList dataKey="id" source={source} target={target} onChange={onChange} itemTemplate={itemTemplate} breakpoint="1280px"
                sourceHeader="Available" targetHeader="Selected" sourceStyle={{ height: '24rem' }} targetStyle={{ height: '24rem' }} />
        </div>
    );
}
        `,data:`
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: '/bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["OrderList is used as a controlled input with ",(0,t.jsx)("i",{children:"source"}),", ",(0,t.jsx)("i",{children:"target"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties. Content of a list item needs to be defined with the ",(0,t.jsx)("i",{children:"itemTemplate"})," property that receives an object in the list as parameter."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(H,{dataKey:"id",source:r,target:n,onChange:e=>{i(e.source),l(e.target)},itemTemplate:e=>(0,t.jsxs)("div",{className:"flex flex-wrap p-2 align-items-center gap-3",children:[(0,t.jsx)("img",{className:"w-4rem shadow-2 flex-shrink-0 border-round",src:`https://primefaces.org/cdn/primereact/images/product/${e.image}`,alt:e.name}),(0,t.jsxs)("div",{className:"flex-1 flex flex-column gap-2",children:[(0,t.jsx)("span",{className:"font-bold",children:e.name}),(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("i",{className:"pi pi-tag text-sm"}),(0,t.jsx)("span",{children:e.category})]})]}),(0,t.jsxs)("span",{className:"font-bold text-900",children:["$",e.price]})]}),breakpoint:"1280px",sourceHeader:"Available",targetHeader:"Selected",sourceStyle:{height:"24rem"},targetStyle:{height:"24rem"}})}),(0,t.jsx)(s.DocSectionCode,{code:a,service:["ProductService"]})]})}function $(e){let[r,i]=(0,c.useState)([]),[n,l]=(0,c.useState)([]);(0,c.useEffect)(()=>{R.ProductService.getProductsSmall().then(e=>i(e))},[]);let a={basic:`
<PickList dataKey="id" source={source} target={target} onChange={onChange} itemTemplate={itemTemplate} filter filterBy="name" breakpoint="1280px"
    sourceHeader="Available" targetHeader="Selected" sourceStyle={{ height: '24rem' }} targetStyle={{ height: '24rem' }}
    sourceFilterPlaceholder="Search by name" targetFilterPlaceholder="Search by name" />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
import { ProductService } from './service/ProductService';

export default function FilterDemo() {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setSource(data));
    }, []);

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} />
                <div className="flex-1 flex flex-column gap-2">
                    <span className="font-bold">{item.name}</span>
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        <span>{item.category}</span>
                    </div>
                </div>
                <span className="font-bold text-900">\${item.price}</span>
            </div>
        );
    };

    return (
        <div className="card">
            <PickList dataKey="id" source={source} target={target} onChange={onChange} itemTemplate={itemTemplate} filter filterBy="name" breakpoint="1280px"
                sourceHeader="Available" targetHeader="Selected" sourceStyle={{ height: '24rem' }} targetStyle={{ height: '24rem' }}
                sourceFilterPlaceholder="Search by name" targetFilterPlaceholder="Search by name" />
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
import { ProductService } from './service/ProductService';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: 'string',
    rating: number;
}

export default function FilterDemo() {
    const [source, setSource] = useState<Product[]>([]);
    const [target, setTarget] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setSource(data));
    }, []);

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const itemTemplate = (item: Product) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} />
                <div className="flex-1 flex flex-column gap-2">
                    <span className="font-bold">{item.name}</span>
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        <span>{item.category}</span>
                    </div>
                </div>
                <span className="font-bold text-900">\${item.price}</span>
            </div>
        );
    };

    return (
        <div className="card">
            <PickList dataKey="id" source={source} target={target} onChange={onChange} itemTemplate={itemTemplate} filter filterBy="name" breakpoint="1280px"
                sourceHeader="Available" targetHeader="Selected" sourceStyle={{ height: '24rem' }} targetStyle={{ height: '24rem' }}
                sourceFilterPlaceholder="Search by name" targetFilterPlaceholder="Search by name" />
        </div>
    );
}
        `,data:`
/* ProductService */
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: '/bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Items are filtered using an input field by enabling the ",(0,t.jsx)("i",{children:"filter"})," property. Filter value is checked against the property of an object configured with the ",(0,t.jsx)("i",{children:"filterBy"})," property and the filtering match mode with"," ",(0,t.jsx)("i",{children:"filterMatchMode"})," e.g. ",(0,t.jsx)("i",{children:"contains"}),"."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(H,{dataKey:"id",source:r,target:n,onChange:e=>{i(e.source),l(e.target)},itemTemplate:e=>(0,t.jsxs)("div",{className:"flex flex-wrap p-2 align-items-center gap-3",children:[(0,t.jsx)("img",{className:"w-4rem shadow-2 flex-shrink-0 border-round",src:`https://primefaces.org/cdn/primereact/images/product/${e.image}`,alt:e.name}),(0,t.jsxs)("div",{className:"flex-1 flex flex-column gap-2",children:[(0,t.jsx)("span",{className:"font-bold",children:e.name}),(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("i",{className:"pi pi-tag text-sm"}),(0,t.jsx)("span",{children:e.category})]})]}),(0,t.jsxs)("span",{className:"font-bold text-900",children:["$",e.price]})]}),sourceHeader:"Available",targetHeader:"Selected",sourceStyle:{height:"24rem"},targetStyle:{height:"24rem"},breakpoint:"1280px",filter:!0,filterBy:"name",sourceFilterPlaceholder:"Search by name",targetFilterPlaceholder:"Search by name"})}),(0,t.jsx)(s.DocSectionCode,{code:a,service:["ProductService"]})]})}function V(e){let r={basic:`
import { PickList } from 'primereact/picklist';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e}),(0,t.jsx)(s.DocSectionCode,{code:r,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}let W=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/picklist.jpg",alt:"picklist"})})]});function X(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-picklist"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-picklist-source-controls"}),(0,t.jsx)("td",{children:"Container of source list buttons."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-picklist-target-controls"}),(0,t.jsx)("td",{children:"Container of target list buttons."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-picklist-buttons"}),(0,t.jsx)("td",{children:"Container of buttons."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-picklist-listwrapper"}),(0,t.jsx)("td",{children:"Parent of a list element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-picklist-list"}),(0,t.jsx)("td",{children:"List element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-picklist-item"}),(0,t.jsx)("td",{children:"An item in the list."})]})]})]})})]})}function J(e){let r={basic:`
const Tailwind = {    
    picklist: {
        root: 'flex flex-col xl:flex-row',
        controls: 'flex flex-row xl:flex-col justify-center p-5',
        moveUpButton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        moveTopButton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        moveDownButton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        moveBottomButton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        listWrapper: 'grow shrink basis-2/4',
        header: {
            className: classNames(
                'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
                'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
            )
        },
        list: {
            className: classNames(
                'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
                'border border-gray-300 bg-white text-gray-600 py-3 px-0 rounded-b-md outline-none',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' //Dark Mode
            )
        },
        item: ({ context }) => ({
            className: classNames('relative cursor-pointer overflow-hidden', 'py-3 px-5 m-0 border-none text-gray-600 dark:text-white/80', 'transition duration-200', {
                'text-blue-700 bg-blue-500/20 dark:bg-blue-300/20': context.selected,
                'text-gray-600 dark:bg-blue-900/40': !context.selected
            })
        }),
        buttons: 'flex flex-row xl:flex-col justify-center p-5',
        movetotargetbutton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        movealltotargetbutton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        movetosourcebutton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        movealltosourcebutton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        targetcontrols: 'flex flex-col justify-center p-5',
        targetwrapper: 'grow shrink basis-2/4',
        targetheader: {
            className: classNames(
                'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
                'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
            )
        },
        targetlist: {
            className: classNames(
                'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
                'border border-gray-300 bg-white text-gray-600 py-3 px-0 rounded-b-md outline-none',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' //Dark Mode
            )
        },
        transition: {
            timeout: 0,
            classNames: {
                enter: '!transition-none',
                enterActive: '!transition-none',
                exit: '!transition-none',
                exitActive: '!transition-none'
            }
        }
    },
}
        `},i={javascript:`
import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
import { ProductService } from './service/ProductService';

export default function UnstyledDemo() {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setSource(data));
    }, []);

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 items-center gap-3">
                <img className="w-16 shadow-md shrink-0 rounded" src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} />
                <div className="flex-1 flex flex-col gap-2">
                    <span className="font-bold">{item.name}</span>
                    <div className="flex items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        <span>{item.category}</span>
                    </div>
                </div>
                <span className="font-bold text-900">\${item.price}</span>
            </div>
        );
    };

    return (
        <div className="card">
            <PickList dataKey="id" source={source} target={target} onChange={onChange} itemTemplate={itemTemplate} breakpoint="1280px"
                sourceHeader="Available" targetHeader="Selected" sourceStyle={{ height: '24rem' }} targetStyle={{ height: '24rem' }} />
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(l.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(s.DocSectionCode,{code:r,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(s.DocSectionCode,{code:i,embedded:!0,service:["ProductService"]})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:W},{id:"pt.picklist.options",label:"PickList PT Options",component:r.default}];return(0,t.jsx)(i.DocComponent,{title:"React PickList Component",header:"PickList",description:"PickList is used to reorder items between different lists..",componentDocs:[{id:"import",label:"Import",component:V},{id:"basic",label:"Basic",component:_},{id:"filter",label:"Filter",component:$},{id:"accessibility",label:"Accessibility",component:a}],apiDocs:["PickList"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:X},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:J}]}]})}],42990)},85666,(e,t,r)=>{let i="/picklist";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(42990)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);