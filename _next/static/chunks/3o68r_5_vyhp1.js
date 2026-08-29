(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,87353,e=>{"use strict";var t=e.i(91398),a=e.i(88850),l=e.i(82948),r=e.i(28137),o=e.i(41158);function n(){return(0,t.jsxs)(r.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["TreeTable uses a ",(0,t.jsx)("i",{children:"treegrid"})," element whose attributes can be extended with the ",(0,t.jsx)("i",{children:"tableProps"})," option. This property allows passing aria roles and attributes like ",(0,t.jsx)("i",{children:"aria-label"})," and ",(0,t.jsx)("i",{children:"aria-describedby"})," to define the table for readers. Default role of the table is ",(0,t.jsx)("i",{children:"table"}),". Header, body and footer elements use ",(0,t.jsx)("i",{children:"rowgroup"}),", rows use ",(0,t.jsx)("i",{children:"row"})," role, header cells have ",(0,t.jsx)("i",{children:"columnheader"})," and body cells use ",(0,t.jsx)("i",{children:"cell"})," roles. Sortable headers utilizer ",(0,t.jsx)("i",{children:"aria-sort"}),' attribute either set to "ascending" or "descending".']}),(0,t.jsxs)("p",{children:["Row elements manage ",(0,t.jsx)("i",{children:"aria-expanded"})," for state along with ",(0,t.jsx)("i",{children:"aria-posinset"}),", ",(0,t.jsx)("i",{children:"aria-setsize"})," and ",(0,t.jsx)("i",{children:"aria-level"})," attribute to define the hierachy."]}),(0,t.jsxs)("p",{children:["When selection is enabled, ",(0,t.jsx)("i",{children:"aria-selected"})," is set to true on a row. In checkbox mode, the built-in checkbox component use ",(0,t.jsx)("i",{children:"checkbox"})," role with ",(0,t.jsx)("i",{children:"aria-checked"})," state attribute."]}),(0,t.jsx)("p",{children:"Editable cells use custom templating so you need to manage aria roles and attributes manually if required."}),(0,t.jsxs)("p",{children:["Paginator is a standalone component used inside the TreeTable, refer to the ",(0,t.jsx)(o.default,{href:"/paginator",children:"paginator"})," for more information about the accessibility features."]}),(0,t.jsx)("h3",{children:"Sortable Headers Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves through the headers."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Sorts the column."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Sorts the column."})]})]})]})}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the first selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the next focusable element in the page tab sequence."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"tab"})]}),(0,t.jsx)("td",{children:"Moves focus to the last selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the previous focusable element in the page tab sequence."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Selects the focused treenode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Selects the focused treenode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next treenode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous treenode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"right arrow"})}),(0,t.jsx)("td",{children:"If node is closed, opens the node otherwise moves focus to the first child node."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"If node is open, closes the node otherwise moves focus to the parent node."})]})]})]})})]})}var i=e.i(5180),s=e.i(10367),d=e.i(91788),c=e.i(40407),m=e.i(4242),p=e.i(28332),u=e.i(27604),h=e.i(10836),f=e.i(31569),b=e.i(15498),y=e.i(20728),x=e.i(60150),S=e.i(20484),g=e.i(71834),C=e.i(85091),T=e.i(95513),v=e.i(15734),N=e.i(38660),k=e.i(45543),j=e.i(75366),z=e.i(51551),w=e.i(3935);let P=`
@layer primereact {
    .p-treetable {
        position: relative;
    }
    .p-treetable > .p-treetable-wrapper {
        overflow: auto;
    }
    .p-treetable table {
        border-collapse: collapse;
        width: 100%;
        table-layout: fixed;
    }
    .p-treetable .p-sortable-column {
        cursor: pointer;
        user-select: none;
    }
    .p-treetable-selectable .p-treetable-tbody > tr {
        cursor: pointer;
    }
    .p-treetable-toggler {
        cursor: pointer;
        user-select: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        vertical-align: middle;
        overflow: hidden;
        position: relative;
    }
    .p-treetable-toggler + .p-checkbox {
        vertical-align: middle;
    }
    .p-treetable-toggler + .p-checkbox + span {
        vertical-align: middle;
    }
    /* Resizable */
    .p-treetable-resizable > .p-treetable-wrapper {
        overflow-x: auto;
    }
    .p-treetable-resizable .p-treetable-thead > tr > th,
    .p-treetable-resizable .p-treetable-tfoot > tr > td,
    .p-treetable-resizable .p-treetable-tbody > tr > td {
        overflow: hidden;
    }
    .p-treetable-resizable .p-resizable-column {
        background-clip: padding-box;
        position: relative;
    }
    .p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer {
        display: none;
    }
    .p-treetable .p-column-resizer {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        width: 0.5rem;
        height: 100%;
        padding: 0px;
        cursor: col-resize;
        border: 1px solid transparent;
    }
    .p-treetable .p-column-resizer-helper {
        width: 1px;
        position: absolute;
        z-index: 10;
        display: none;
    }
    /* Scrollable */
    .p-treetable-scrollable-wrapper {
        position: relative;
    }
    .p-treetable-scrollable-header,
    .p-treetable-scrollable-footer {
        overflow: hidden;
        border: 0 none;
    }
    .p-treetable-scrollable-body {
        overflow: auto;
        position: relative;
    }
    .p-treetable-virtual-table {
        position: absolute;
    }
    /* Frozen Columns */
    .p-treetable-frozen-view .p-treetable-scrollable-body {
        overflow: hidden;
    }
    .p-treetable-unfrozen-view {
        position: absolute;
        top: 0px;
        left: 0px;
    }
    /* Reorder */
    .p-treetable-reorder-indicator-up,
    .p-treetable-reorder-indicator-down {
        position: absolute;
        display: none;
    }
    /* Loader */
    .p-treetable .p-treetable-loading-overlay {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
    /* Alignment */
    .p-treetable .p-treetable-thead > tr > th.p-align-left > .p-column-header-content,
    .p-treetable .p-treetable-tbody > tr > td.p-align-left,
    .p-treetable .p-treetable-tfoot > tr > td.p-align-left {
        text-align: left;
        justify-content: flex-start;
    }
    .p-treetable .p-treetable-thead > tr > th.p-align-right > .p-column-header-content,
    .p-treetable .p-treetable-tbody > tr > td.p-align-right,
    .p-treetable .p-treetable-tfoot > tr > td.p-align-right {
        text-align: right;
        justify-content: flex-end;
    }
    .p-treetable .p-treetable-thead > tr > th.p-align-center > .p-column-header-content,
    .p-treetable .p-treetable-tbody > tr > td.p-align-center,
    .p-treetable .p-treetable-tfoot > tr > td.p-align-center {
        text-align: center;
        justify-content: center;
    }
}
`,Y=b.ComponentBase.extend({defaultProps:{__TYPE:"TreeTable",alwaysShowPaginator:!0,checkboxIcon:null,className:null,columnResizeMode:"fit",contextMenuSelectionKey:null,currentPageReportTemplate:"({currentPage} of {totalPages})",customRestoreState:null,customSaveState:null,defaultSortOrder:1,emptyMessage:null,expandedKeys:null,filterDelay:300,filterLocale:void 0,filterMode:"lenient",filters:null,first:null,footer:null,footerColumnGroup:null,frozenFooterColumnGroup:null,frozenHeaderColumnGroup:null,frozenWidth:null,globalFilter:null,globalFilterMatchMode:p.FilterMatchMode.CONTAINS,header:null,headerColumnGroup:null,id:null,lazy:!1,loading:!1,loadingIcon:null,metaKeySelection:!1,multiSortMeta:null,onColReorder:null,onCollapse:null,onColumnResizeEnd:null,onContextMenu:null,onContextMenuSelectionChange:null,onExpand:null,onFilter:null,onPage:null,onRowClick:null,onRowMouseEnter:null,onRowMouseLeave:null,onSelect:null,onSelectionChange:null,onSort:null,onStateRestore:null,onStateSave:null,onToggle:null,onUnselect:null,onValueChange:null,pageLinkSize:5,paginator:!1,paginatorClassName:null,paginatorDropdownAppendTo:null,paginatorLeft:null,paginatorPosition:"bottom",paginatorRight:null,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",propagateSelectionDown:!0,propagateSelectionUp:!0,removableSort:!1,reorderIndicatorDownIcon:null,reorderIndicatorUpIcon:null,reorderableColumns:!1,resizableColumns:!1,rowClassName:null,rowHover:!1,rows:null,rowsPerPageOptions:null,scrollHeight:null,scrollable:!1,selectOnEdit:!0,selectionKeys:null,selectionMode:null,showGridlines:!1,sortField:null,sortIcon:null,sortMode:"single",sortOrder:null,stateKey:null,stateStorage:null,stripedRows:!1,style:null,tabIndex:0,tableClassName:null,tableStyle:null,totalRecords:null,value:null,children:void 0,togglerTemplate:null},css:{classes:{root:({props:e,isRowSelectionMode:t})=>(0,w.classNames)("p-treetable p-component",{"p-treetable-hoverable-rows":e.rowHover,"p-treetable-selectable":t(),"p-treetable-resizable":e.resizableColumns,"p-treetable-resizable-fit":e.resizableColumns&&"fit"===e.columnResizeMode,"p-treetable-striped":e.stripedRows,"p-treetable-gridlines":e.showGridlines}),loadingIcon:"p-treetable-loading-icon",loadingWrapper:"p-treetable-loading",loadingOverlay:"p-treetable-loading-overlay p-component-overlay",header:"p-treetable-header",checkIcon:"p-checkbox-icon",footer:"p-treetable-footer",resizeHelper:"p-column-resizer-helper",reorderIndicatorUp:"p-treetable-reorder-indicator-up",reorderIndicatorDown:"p-treetable-reorder-indicator-down",wrapper:"p-treetable-wrapper",table:({props:e})=>(0,w.classNames)("p-treetable-table",{"p-treetable-scrollable-table":e.scrollable,"p-treetable-resizable-table":e.resizableColumns,"p-treetable-resizable-table-fit":e.resizableColumns&&"fit"===e.columnResizeMode}),scrollableWrapper:"p-treetable-wrapper p-treetable-scrollable-wrapper",thead:"p-treetable-thead",tbody:"p-treetable-tbody",tfoot:"p-treetable-tfoot",emptyMessage:"p-treetable-emptymessage",bodyCell:({bodyProps:e,editingState:t,align:a})=>(0,w.classNames)({"p-editable-column":e.editor,"p-cell-editing":!!e.editor&&t,[`p-align-${a}`]:!!a}),sortBadge:"p-sortable-column-badge",headerTitle:"p-column-title",headerContent:"p-column-header-content",headerCell:({headerProps:e,frozen:t,column:a,options:l,getColumnProp:r,sorted:o,align:n})=>l.filterOnly?(0,w.classNames)("p-filter-column",{"p-frozen-column":t}):(0,w.classNames)({"p-sortable-column":r(a,"sortable"),"p-highlight":o,"p-frozen-column":t,"p-resizable-column":e.resizableColumns&&r(a,"resizeable"),"p-reorderable-column":e.reorderableColumns&&r(a,"reorderable")&&!t,[`p-align-${n}`]:!!n}),columnResizer:"p-column-resizer p-clickable",sortIcon:"p-sortable-column-icon",row:({isSelected:e,rowProps:t})=>({"p-highlight":e(),"p-highlight-contextmenu":t.contextMenuSelectionKey&&t.contextMenuSelectionKey===t.node.key,"p-row-odd":parseInt(String(t.rowIndex).split("_").pop(),10)%2!=0}),rowCheckbox:({partialChecked:e})=>(0,w.classNames)("p-treetable-checkbox",{"p-indeterminate":e}),rowToggler:"p-treetable-toggler p-link p-unselectable-text",rowTogglerIcon:"p-treetable-toggler-icon",scrollableBody:"p-treetable-scrollable-body",scrollableHeaderTable:"p-treetable-scrollable-header-table",scrollableHeaderBox:"p-treetable-scrollable-header-box",scrollableHeader:"p-treetable-scrollable-header",scrollableBodyTable:"p-treetable-scrollable-body-table",scrollableFooter:"p-treetable-scrollable-footer",scrollableFooterBox:"p-treetable-scrollable-footer-box",scrollableFooterTable:"p-treetable-scrollable-footer-table",scrollable:({scrolaableProps:e})=>(0,w.classNames)("p-treetable-scrollable-view",{"p-treetable-frozen-view":e.frozen,"p-treetable-unfrozen-view":!e.frozen&&e.frozenWidth}),scrollableColgroup:"p-treetable-scrollable-colgroup"},styles:P}});var E=e.i(183),K=e.i(6846),M=e.i(67143),R=e.i(48214),D=e.i(75676),F=e.i(97876),I=e.i(50901),$=e.i(4632),A=e.i(81201);let O=e=>{let a,[l,r]=d.useState(!1),o=d.useRef(null),n=d.useRef(null),i=d.useRef(!1),s=d.useRef(null),c=d.useRef(null),m=(0,x.useMergeProps)(),p=t=>f.ColumnBase.getCProp(e.column,t),{ptm:u,ptmo:h,cx:b}=e.ptCallbacks,S=t=>{let a,r="single"===e.metaData.props.selectionMode,o="multiple"===e.metaData.props.selectionMode,n=(a=e.column,f.ColumnBase.getCProps(a)),i={props:n,parent:e.metaData,hostName:e.hostName,state:{editing:l},context:{index:e.index,selectable:r||o,selected:e.selected,scrollable:e.metaData.props.scrollable,frozen:p("frozen"),showGridlines:e.metaData.props.showGridlines}};return m(u(`column.${t}`,{column:i}),u(`column.${t}`,i),h(n,t,i))},g=p("field")||`field_${e.index}`,[C,T]=(0,y.useEventListener)({type:"click",listener:e=>{!i.current&&N(e.target)&&P(e),i.current=!1},when:p("editor")}),v=t=>{if(p("editor")&&!l&&(e.selectOnEdit||!e.selectOnEdit&&e.selected)){i.current=!0;let a={originalEvent:t,...{value:z.ObjectUtils.resolveFieldData((0,e.node.data),g),field:g,rowData:e.rowData,rowIndex:e.rowIndex,cellIndex:e.index,selected:Y(),column:e.column,props:e}},l=p("onBeforeCellEditShow");if(l&&(!1===l(a)||t&&t.defaultPrevented))return;r(!0);let o=p("onCellEditInit");o&&(!1===o(a)||t&&t.defaultPrevented)||(C(),s.current=e=>{N(e.target)||(i.current=!0)},A.OverlayService.on("overlay-click",s.current))}},N=e=>o.current&&!(o.current.isSameNode(e)||o.current.contains(e)),j=()=>{setTimeout(()=>{r(!1),T(),A.OverlayService.off("overlay-click",s.current),s.current=null},1)},P=t=>{e.cellEditValidator?e.cellEditValidator({originalEvent:t,columnProps:e})&&j():j()},Y=()=>!!e.selection&&(e.selection instanceof Array?findIndex(e.selection)>-1:equals(e.selection));d.useEffect(()=>{if(o.current&&p("editor"))if(clearTimeout(c.current),l){let e=k.DomHandler.findSingle(o.current,"input");e&&document.activeElement!==e&&!e.hasAttribute("data-isCellEditing")&&(e.setAttribute("data-isCellEditing",!0),e.focus()),n.current.tabIndex=-1}else c.current=setTimeout(()=>{n.current&&n.current.setAttribute("tabindex",0)},50)}),(0,$.useUnmountEffect)(()=>{s.current&&(A.OverlayService.off("overlay-click",s.current),s.current=null)});let E=z.ObjectUtils.getPropValue(e.bodyClassName,e.node.data,{field:e.field,rowIndex:e.rowIndex,props:e}),K=e.bodyStyle||e.style,M=p("editor");if(l)if(M)a=z.ObjectUtils.getJSXElement(M,{node:e.node,rowData:e.rowData,value:z.ObjectUtils.resolveFieldData(e.node.data,e.field),field:e.field,rowIndex:e.rowIndex,props:e});else throw Error("Editor is not found on column.");else a=e.body?z.ObjectUtils.getJSXElement(e.body,e.node,{field:e.field,rowIndex:e.rowIndex,props:e}):z.ObjectUtils.resolveFieldData(e.node.data,e.field);let R=m({tabIndex:0,ref:n,className:"p-cell-editor-key-helper p-hidden-accessible",onFocus:e=>{v(e)}},S("editorKeyHelperLabel")),D=m(S("editorKeyHelper")),F=M&&(0,t.jsx)("a",{...R,children:(0,t.jsx)("span",{...D})}),I=p("align"),O=m({role:"cell",className:(0,w.classNames)(E||e.className,b("bodyCell",{bodyProps:e,editingState:l,align:I})),style:K,onClick:e=>v(e),onKeyDown:e=>{(13===e.which||9===e.which)&&P(e)}},S("root"),S("bodyCell"));return(0,t.jsxs)("td",{ref:o,...O,children:[e.children,F,a]})};O.displayName="TreeTableBodyCell";let H=d.memo(e=>{let a=d.useRef(null),l=d.useRef(!1),r=(0,x.useMergeProps)(),o=!!e.expandedKeys&&void 0!==e.expandedKeys[e.node.key],n=(e,t)=>f.ColumnBase.getCProp(e,t),{ptm:i,ptmo:s,cx:c,isUnstyled:m}=e.ptCallbacks,p=(t,a)=>{let l=f.ColumnBase.getCProps(t),o={props:l,parent:e.metaData,hostName:e.hostName,context:{index:e.rowIndex,selectable:!1!==e.node.selectable,selected:P(),frozen:n(t,"frozen"),scrollable:e.metaData.props.scrollable}};return r(i(`column.${a}`,{column:o}),i(`column.${a}`,o),s(l,a,o))},u=e=>{o?b(e):h(e),e.preventDefault(),e.stopPropagation()},h=(t,a=!1)=>{let l=e.expandedKeys?{...e.expandedKeys}:{};l[e.node.key]=!0,e.onToggle({originalEvent:t,value:l,navigateFocusToChild:a}),y(t,!0)},b=t=>{let a={...e.expandedKeys};delete a[e.node.key],e.onToggle({originalEvent:t,value:a}),y(t,!1)},y=(t,a)=>{a?e.onExpand&&e.onExpand({originalEvent:t,node:e.node}):e.onCollapse&&e.onCollapse({originalEvent:t,node:e.node})},S=t=>{let a=Y(),l=e.selectionKeys?{...e.selectionKeys}:{};a?(e.propagateSelectionDown?C(e.node,!1,l):delete l[e.node.key],e.propagateSelectionUp&&e.onPropagateUp&&e.onPropagateUp({originalEvent:t,check:!1,selectionKeys:l}),e.onUnselect&&e.onUnselect({originalEvent:t,node:e.node})):(e.propagateSelectionDown?C(e.node,!0,l):l[e.node.key]={checked:!0},e.propagateSelectionUp&&e.onPropagateUp&&e.onPropagateUp({originalEvent:t,check:!0,selectionKeys:l}),e.onSelect&&e.onSelect({originalEvent:t,node:e.node})),e.onSelectionChange&&e.onSelectionChange({originalEvent:t,value:l}),k.DomHandler.clearSelection()},g=t=>{let a=t.check,l=t.selectionKeys;for(let t of e.node.children)l[t.key]&&l[t.key].checked;let r=e.node.key,o=z.ObjectUtils.findChildrenByKey(e.originalOptions,r),n=o.some(e=>e.key in l),i=o.every(e=>e.key in l&&l[e.key].checked);n&&!i?l[r]={checked:!1,partialChecked:!0}:i?l[r]={checked:!0,partialChecked:!1}:a?l[r]={checked:!1,partialChecked:!1}:delete l[r],e.propagateSelectionUp&&e.onPropagateUp&&e.onPropagateUp(t)},C=(e,t,a)=>{if(t?a[e.key]={checked:!0,partialChecked:!1}:delete a[e.key],e.children&&e.children.length)for(let l=0;l<e.children.length;l++)C(e.children[l],t,a)},T=(e,t)=>{e.tabIndex="-1",t.tabIndex="0",k.DomHandler.focus(t)},v=e=>{let t=e.previousElementSibling;if(t){let e=t.querySelector("button");return e&&"hidden"!==e.style.visibility?t:v(t)}return null},N=(t,l)=>{if(null!==e.selectionMode){let e=[...k.DomHandler.find(a.current.parentElement,"tr")];t.currentTarget.tabIndex=!1===l?-1:0,e.every(e=>-1===e.tabIndex)&&(e[0].tabIndex=0)}},P=()=>"single"===e.selectionMode?e.selectionKeys===e.node.key:("multiple"===e.selectionMode||"checkbox"===e.selectionMode)&&!!e.selectionKeys&&void 0!==e.selectionKeys[e.node.key],Y=()=>!!e.selectionKeys&&e.selectionKeys[e.node.key]&&e.selectionKeys[e.node.key].checked,$=()=>!!e.selectionKeys&&e.selectionKeys[e.node.key]&&e.selectionKeys[e.node.key].partialChecked,A=e.columns.map((a,l)=>{let d,h;return n(a,"hidden")?null:(n(a,"expander")&&(d=(a=>{let l=o?(0,E.ariaLabel)("collapseLabel"):(0,E.ariaLabel)("expandLabel"),n=r({className:c("rowTogglerIcon"),"aria-hidden":!0},p(a,"rowTogglerIcon")),i=o?(0,t.jsx)(R.ChevronDownIcon,{...n}):(0,t.jsx)(D.ChevronRightIcon,{...n}),s=j.IconUtils.getJSXIcon(e.togglerIcon||i,{...n},{props:e}),d=r({type:"button",className:c("rowToggler"),onClick:e=>u(e),tabIndex:-1,style:{marginLeft:16*e.level+"px",visibility:!1===e.node.leaf||e.node.children&&e.node.children.length?"visible":"hidden"},"aria-label":l},p(a,"rowToggler")),m=(0,t.jsxs)("button",{...d,children:[s,(0,t.jsx)(I.Ripple,{})]});if(e.togglerTemplate){let t={onClick:u,containerClassName:"p-treetable-toggler p-link",iconClassName:"p-treetable-toggler-icon",element:m,props:e,expanded:o,buttonStyle:{marginLeft:16*e.level+"px",visibility:!1===e.node.leaf||e.node.children&&e.node.children.length?"visible":"hidden"}};m=z.ObjectUtils.getJSXElement(e.togglerTemplate,e.node,t)}return m})(a),h=(a=>{if("checkbox"===e.selectionMode&&!1!==e.node.selectable){var l;let o,n,d=Y(),u=$(),h=r({className:c("checkIcon")},p(a,"rowCheckbox.icon")),b=d?e.checkboxIcon||(0,t.jsx)(M.CheckIcon,{...h}):u?e.checkboxIcon||(0,t.jsx)(F.MinusIcon,{}):null,y=j.IconUtils.getJSXIcon(b,{},{props:e,checked:d,partialChecked:u}),x=r({className:c("rowCheckbox"),checked:d||u,onChange:S,icon:y,unstyled:m?.(),tabIndex:-1,"data-p-highlight":d,"data-p-checked":d,"data-p-partialchecked":u},(l="rowCheckbox",r(i(`column.${l}`,{column:n={props:o=f.ColumnBase.getCProps(a),parent:e.metaData,hostName:e.hostName,context:{checked:Y(),partialChecked:$()}}}),i(`column.${l}`,n),s(o,l,n))));return(0,t.jsx)(K.Checkbox,{...x})}return null})(a)),(0,t.jsxs)(O,{hostName:e.hostName,...f.ColumnBase.getCProps(a),index:l,column:a,selectOnEdit:e.selectOnEdit,selected:P(),node:e.node,rowData:e.node&&e.node.data,rowIndex:e.rowIndex,ptCallbacks:e.ptCallbacks,metaData:e.metaData,children:[d,h]},`${n(a,"columnKey")||n(a,"field")}_${l}`))}),W=o&&e.node.children?e.node.children.map((a,l)=>(0,t.jsx)(H,{hostName:e.hostName,level:e.level+1,rowIndex:e.rowIndex+"_"+l,node:a,originalOptions:e.originalOptions,checkboxIcon:e.checkboxIcon,columns:e.columns,expandedKeys:e.expandedKeys,selectOnEdit:e.selectOnEdit,onToggle:e.onToggle,togglerTemplate:e.togglerTemplate,onExpand:e.onExpand,onCollapse:e.onCollapse,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,onSelectionChange:e.onSelectionChange,metaKeySelection:e.metaKeySelection,onRowClick:e.onRowClick,onRowMouseEnter:e.onRowMouseEnter,onRowMouseLeave:e.onRowMouseLeave,onSelect:e.onSelect,onUnselect:e.onUnselect,propagateSelectionUp:e.propagateSelectionUp,propagateSelectionDown:e.propagateSelectionDown,onPropagateUp:g,rowClassName:e.rowClassName,contextMenuSelectionKey:e.contextMenuSelectionKey,onContextMenuSelectionChange:e.onContextMenuSelectionChange,onContextMenu:e.onContextMenu,ptCallbacks:e.ptCallbacks,metaData:e.metaData},`${a.key||JSON.stringify(a.data)}_${l}`)):null,L=null;e.rowClassName&&(L=e.rowClassName(e.node));let U=r({tabIndex:0,className:(0,w.classNames)(c("row",{isSelected:P,rowProps:e})),"aria-expanded":o,"aria-level":e.level+1,"aria-posinset":e.ariaPosInSet,"aria-setsize":e.ariaSetSize,"aria-checked":Y(),"aria-selected":P(),style:e.node.style,onClick:t=>{e.onRowClick&&e.onRowClick(t,e.node),l.current=!1},onTouchEnd:e=>void(l.current=!0),onContextMenu:t=>{k.DomHandler.clearSelection(),e.onContextMenuSelectionChange&&e.onContextMenuSelectionChange({originalEvent:t,value:e.node.key}),e.onContextMenu&&e.onContextMenu({originalEvent:t,node:e.node})},onKeyDown:t=>(t=>{var r,n,i,s,d,c;switch(t.code){case"ArrowDown":let m;(m=(r=t).currentTarget.nextElementSibling)&&T(r.currentTarget,m),r.preventDefault();break;case"ArrowUp":let p;(p=(n=t).currentTarget.previousElementSibling)&&T(n.currentTarget,p),n.preventDefault();break;case"ArrowLeft":(t=>{if(0===e.level&&!o)return;let a=t.currentTarget,l="hidden"===k.DomHandler.findSingle(a,"button").style.visibility;if(k.DomHandler.findSingle(a,'[data-pc-section="rowtoggler"]'),o&&!l)return b(t);let r=v(a);r&&T(a,r)})(t);break;case"ArrowRight":let u;i=t,u="hidden"===k.DomHandler.findSingle(i.currentTarget,"button").style.visibility,k.DomHandler.findSingle(a.current,'[data-pc-section="rowtoggler"]'),u||(o||h(i,!0),i.preventDefault());break;case"Home":let f;s=t,(f=k.DomHandler.findSingle(s.currentTarget.parentElement,`tr[aria-level="${e.level+1}"]`))&&k.DomHandler.focus(f),s.preventDefault();break;case"End":let y,x;d=t,x=(y=k.DomHandler.find(d.currentTarget.parentElement,`tr[aria-level="${e.level+1}"]`))[y.length-1],k.DomHandler.focus(x),d.preventDefault();break;case"Enter":case"NumpadEnter":case"Space":k.DomHandler.isClickable(t.target)||(((c=t).preventDefault(),N(c,l.current),"checkbox"===e.selectionMode)?S(c):(e.onRowClick(c,e.node),l.current=!1));break;case"Tab":(()=>{let e=[...k.DomHandler.find(a.current.parentElement,"tr")],t=e.some(e=>k.DomHandler.getAttribute(e,"data-p-highlight")||"true"===e.getAttribute("aria-checked"));if(e.forEach(e=>{e.tabIndex=-1}),t){e.filter(e=>k.DomHandler.getAttribute(e,"data-p-highlight")||"true"===e.getAttribute("aria-checked"))[0].tabIndex=0;return}e[0].tabIndex=0})()}})(t),onMouseEnter:t=>{e.onRowMouseEnter&&e.onRowMouseEnter({originalEvent:t,node:e.node,index:e.rowIndex})},onMouseLeave:t=>{e.onRowMouseLeave&&e.onRowMouseLeave({originalEvent:t,node:e.node,index:e.rowIndex})},"data-p-highlight":P()},i("row",{hostName:e.hostName,context:{index:e.index,selected:P(),selectable:!1!==e.node.selectable,frozen:n("frozen"),scrollable:e.metaData.props.scrollable,showGridlines:e.metaData.props.showGridlines}}),{className:(0,w.classNames)(L,e.node.className)});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("tr",{ref:a,...U,children:A}),W]})});H.displayName="TreeTableRow";let W=d.memo(e=>{let a,l,r,o,n=(0,x.useMergeProps)(),i="single"===e.selectionMode,s="multiple"===e.selectionMode,{ptm:d,cx:c}=e.ptCallbacks,m=(t,a)=>d(t,{hostName:e.hostName,...a}),p=t=>{let a=[];for(let l of t=t||e.value)a.push(l.key),u(l.key)&&(a=a.concat(p(l.children)));return a},u=t=>e.expandedKeys&&!!e.expandedKeys[t],h=(t,a)=>{e.onRowClick&&e.onRowClick({originalEvent:t,node:a});let l=t.target.nodeName;if("INPUT"!==l&&"BUTTON"!==l&&"A"!==l&&"columnresizer"!==k.DomHandler.getAttribute(t.target,"data-pc-section")&&(i||s)&&!1!==a.selectable){let l,r=f(a),o=e.metaKeySelection,n=p(),d=n.findIndex(e=>e===a.key);if(s&&t.shiftKey){k.DomHandler.clearSelection();let t=n.findIndex(t=>e.selectionKeys[t]),a=Math.min(d,t),r=Math.max(d,t);l={...e.selectionKeys};for(let e=a;e<=r;e++)l[n[e]]=!0}else if(o){let o=t.metaKey||t.ctrlKey;r&&o?(i?l=null:(l={...e.selectionKeys},delete l[a.key]),e.onUnselect&&e.onUnselect({originalEvent:t,node:a})):(i?l=a.key:s&&((l=o&&e.selectionKeys?{...e.selectionKeys}:{})[a.key]=!0),e.onSelect&&e.onSelect({originalEvent:t,node:a}))}else i?r?(l=null,e.onUnselect&&e.onUnselect({originalEvent:t,node:a})):(l=a.key,e.onSelect&&e.onSelect({originalEvent:t,node:a})):r?(l={...e.selectionKeys},delete l[a.key],e.onUnselect&&e.onUnselect({originalEvent:t,node:a})):((l=e.selectionKeys?{...e.selectionKeys}:{})[a.key]=!0,e.onSelect&&e.onSelect({originalEvent:t,node:a}));e.onSelectionChange&&e.onSelectionChange({originalEvent:t,value:l})}},f=t=>(!!i||!!s)&&!!e.selectionKeys&&(i?e.selectionKeys===t.key:void 0!==e.selectionKeys[t.key]),b=(a,l)=>(0,t.jsx)(H,{hostName:e.hostName,level:0,rowIndex:l,ariaSetSize:e.value.length,ariaPosInSet:l+1,selectOnEdit:e.selectOnEdit,node:a,originalOptions:e.originalOptions,checkboxIcon:e.checkboxIcon,columns:e.columns,expandedKeys:e.expandedKeys,onToggle:e.onToggle,togglerTemplate:e.togglerTemplate,onExpand:e.onExpand,onCollapse:e.onCollapse,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,onSelectionChange:e.onSelectionChange,metaKeySelection:e.metaKeySelection,onRowClick:h,onRowMouseEnter:e.onRowMouseEnter,onRowMouseLeave:e.onRowMouseLeave,onSelect:e.onSelect,onUnselect:e.onUnselect,propagateSelectionUp:e.propagateSelectionUp,propagateSelectionDown:e.propagateSelectionDown,rowClassName:e.rowClassName,contextMenuSelectionKey:e.contextMenuSelectionKey,onContextMenuSelectionChange:e.onContextMenuSelectionChange,onContextMenu:e.onContextMenu,ptCallbacks:e.ptCallbacks,metaData:e.metaData},`${a.key||JSON.stringify(a.data)}_${l}`),y=e.value&&e.value.length?(()=>{if(e.paginator&&!e.lazy){let t=e.rows||0,a=e.first||0,l=a+t,r=[];for(let t=a;t<l;t++)if(e.value[t])r.push(b(e.value[t]));else break;return r}return e.value.map(b)})():(a=e.columns?e.columns.length:null,l=z.ObjectUtils.getJSXElement(e.emptyMessage,{props:e.tableProps})||(0,E.localeOption)("emptyMessage"),r=n({className:c("emptyMessage")},m("emptyMessage")),o=n({colSpan:a},m("emptyMessageCell")),(0,t.jsx)("tr",{...r,children:(0,t.jsx)("td",{...o,children:l})})),S=n({role:"rowgroup",className:c("tbody")},m("tbody"));return(0,t.jsx)("tbody",{...S,children:y})});W.displayName="TreeTableBody";var L=e.i(51570),U=e.i(16719);let B=d.memo(e=>{let a=(0,x.useMergeProps)(),{ptm:l,ptmo:r,cx:o}=e.ptCallbacks,n=d.useContext(h.PrimeReactContext),i=(e,t)=>f.ColumnBase.getCProp(e,t),s=(o,n)=>{var s;let d,c,m=a({key:o.field||n,className:i(o,"footerClassName")||i(o,"className"),style:i(o,"footerStyle")||i(o,"style"),rowSpan:i(o,"rowSpan"),colSpan:i(o,"colSpan")},(s="footerCell",a(l(`column.${s}`,{column:c={props:d=f.ColumnBase.getCProps(o),parent:e.metaData,hostName:e.hostName}}),l(`column.${s}`,c),r(d,s,c)))),p=z.ObjectUtils.getJSXElement(i(o,"footer"),{props:f.ColumnBase.getCProps(o)});return(0,t.jsx)("td",{...m,children:p})},c=e.columnGroup?d.Children.toArray(L.ColumnGroupBase.getCProp(e.columnGroup,"children")).map((t,r)=>{let o=d.Children.toArray(U.RowBase.getCProp(t,"children")).map(s),i=a(l("footerRow",{hostName:e.hostName,role:"row"}),U.RowBase.getProps(t.props,n));return(0,d.createElement)("tr",{...i,key:r},o)}):(r=>{if(r){let o=r.map(s),n=a(l("footerRow",{hostName:e.hostName}));return(0,t.jsx)("tr",{...n,children:o})}return null})(e.columns);if(e.columnGroup||e.columns&&e.columns.some(e=>e&&i(e,"footer"))){let r=a({role:"rowgroup",className:o("tfoot")},l("tfoot",{hostName:e.hostName}));return(0,t.jsx)("tfoot",{...r,children:c})}return null});B.displayName="TreeTableFooter";var _=e.i(28736),G=e.i(95193),V=e.i(60681),X=e.i(66082),J=e.i(64691);let q=d.memo(e=>{let a=(0,x.useMergeProps)(),{ptm:l,ptmo:r,cx:o}=e.ptCallbacks,n=d.useRef(null),i=d.useContext(h.PrimeReactContext),s=(e,...t)=>e?"string"==typeof t[0]?f.ColumnBase.getCProp(e,t[0]):f.ColumnBase.getCProp(t[0]||e,t[1]):null,c=(t,o,n)=>{let i=f.ColumnBase.getCProps(t),s={props:i,parent:e.metaData,hostName:e.hostName,...n};return a(l(`column.${o}`,{column:s}),l(`column.${o}`,s),r(i,o,s))},m=(t,a)=>{if(s(a,"sortable")){let l=t.target;(!0===k.DomHandler.getAttribute(l,"data-p-sortable-column")||"headertitle"===k.DomHandler.getAttribute(l,"data-pc-section")||"sorticon"===k.DomHandler.getAttribute(l,"data-pc-section")||"sorticon"===k.DomHandler.getAttribute(l.parentElement,"data-pc-section")||l.closest('[data-p-sortable-column="true"]')&&!l.closest('[data-pc-section="filtermenubutton"]'))&&(e.onSort({originalEvent:t,sortField:s(a,"sortField")||s(a,"field"),sortFunction:s(a,"sortFunction"),sortable:s(a,"sortable")}),k.DomHandler.clearSelection())}},p=(l,r)=>{var i,p,u;let h,f,b;if(s(l,"hidden"))return null;if(s(l,"filter")&&r.renderFilter&&(h=s(l,"filterElement")||(0,t.jsx)(X.InputText,{onInput:t=>((t,a)=>{if(s(a,"filter")&&e.onFilter){n.current&&clearTimeout(n.current);let l=t.target.value;n.current=setTimeout(()=>{e.onFilter({value:l,field:s(a,"field"),matchMode:s(a,"filterMatchMode")||"startsWith"}),n.current=null},e.filterDelay)}})(t,l),type:e.filterType,defaultValue:e.filters&&e.filters[s(l,"field")]?e.filters[s(l,"field")].value:null,className:"p-column-filter",placeholder:s(l,"filterPlaceholder"),maxLength:s(l,"filterMaxLength"),pt:c(l,"filterInput"),unstyled:e.unstyled,__parentMetadata:{parent:e.metaData}})),r.filterOnly){let n=s(l,"frozen"),i=a({role:"columnheader",key:s(l,"columnKey")||s(l,"field")||r.index,className:(0,w.classNames)(o("headerCell",{options:r,frozen:n}),s(l,"filterHeaderClassName")),style:s(l,"filterHeaderStyle")||s(l,"style"),rowSpan:s(l,"rowSpan"),colSpan:s(l,"colSpan"),"data-p-sortable-column":s(l,"sortable"),"data-p-resizable-column":e.resizableColumns,"data-p-frozen-column":n},c(l,"root"),c(l,"headerCell",{context:{frozen:n}}));return(0,t.jsx)("th",{...i,children:h})}let y=d.createRef(null),x=(t=>{if(e.multiSortMeta){for(let a=0;a<e.multiSortMeta.length;a++)if(e.multiSortMeta[a].field===s(t,"field"))return a}return -1})(l),S=-1!==x?e.multiSortMeta[x]:null,g=s(l,"field")===e.sortField,C=null!==S,T=s(l,"sortable")&&(g||C),v=s(l,"frozen"),N=s(l,"alignHeader"),k=0;g?k=e.sortOrder:C&&(k=S.order);let P=((l,r,n)=>{if(s(l,"sortable")){let i=a({className:o("sortIcon")},c(l,"sortIcon",{context:{sorted:r}})),s=r?n<0?(0,t.jsx)(G.SortAmountDownIcon,{...i}):(0,t.jsx)(V.SortAmountUpAltIcon,{...i}):(0,t.jsx)(_.SortAltIcon,{...i});return j.IconUtils.getJSXIcon(e.sortIcon||s,{...i},{props:e,sorted:r,sortOrder:n})}return null})(l,T,k),Y=(i=l,p=T,u=k,s(i,"sortable")?p&&u<0?"descending":p&&u>0?"ascending":"none":null),E=((l,r)=>{if(-1!==r&&e.multiSortMeta&&e.multiSortMeta.length>1){let e=a({className:o("sortBadge")},c(l,"sortBadge"));return(0,t.jsx)("span",{...e,children:r+1})}return null})(l,x),K=T?k?k<0?"descending":"ascending":"none":null,M=s(l,"headerTooltip"),R=z.ObjectUtils.isNotEmpty(M),D=(f=z.ObjectUtils.getJSXElement(s(l,"header"),{props:r}),b=a({className:o("headerTitle")},c(l,"headerTitle")),(0,t.jsx)("span",{...b,children:f})),F=(l=>{if(e.resizableColumns){let r=a({className:o("columnResizer"),onMouseDown:t=>{e.resizableColumns&&e.onResizeStart&&e.onResizeStart({originalEvent:t,columnEl:t.target.parentElement,column:l})}},c(l,"columnResizer"));return(0,t.jsx)("span",{...r})}return null})(l),I=s(l,"sortable"),$=a({role:"columnheader",className:(0,w.classNames)(s(l,"headerClassName")||s(l,"className"),o("headerCell",{headerProps:e,frozen:v,column:l,options:r,getColumnProp:s,sorted:T,align:N})),style:s(l,"headerStyle")||s(l,"style"),tabIndex:I?e.tabIndex:null,"aria-sort":K,onClick:e=>m(e,l),onMouseDown:t=>{e.reorderableColumns&&s(l,"reorderable")&&("INPUT"!==t.target.nodeName?t.currentTarget.draggable=!0:"INPUT"===t.target.nodeName&&(t.currentTarget.draggable=!1))},onKeyDown:e=>{("Enter"===e.key||"Space"===e.code)&&(m(e,l),e.preventDefault())},rowSpan:s(l,"rowSpan"),colSpan:s(l,"colSpan"),"aria-sort":Y,onDragStart:t=>{e.onDragStart&&e.onDragStart({originalEvent:t,column:l})},onDragOver:t=>{e.onDragOver&&e.onDragOver({originalEvent:t,column:l})},onDragLeave:t=>{e.onDragLeave&&e.onDragLeave({originalEvent:t,column:l})},onDrop:t=>{e.onDrop&&e.onDrop({originalEvent:t,column:l})},"data-p-sortable-column":I,"data-p-resizable-column":e.resizableColumns,"data-p-highlight":T,"data-p-frozen-column":s(l,"frozen")},c(l,"root"),c(l,"headerCell",{context:{sorted:T,frozen:v,resizable:e.resizableColumns}})),A=a({className:o("headerContent")},c(l,"headerContent")),O=(0,t.jsxs)("div",{...A,children:[D,P,E,h]});return(0,t.jsxs)(d.Fragment,{children:[(0,t.jsxs)("th",{ref:y,...$,children:[F,O]}),R&&(0,t.jsx)(J.Tooltip,{target:y,content:M,...s(l,"headerTooltipOptions"),unstyled:e.unstyled})]},l.columnKey||l.field||r.index)},u=e.columnGroup?d.Children.toArray(L.ColumnGroupBase.getCProp(e.columnGroup,"children")).map((t,r)=>{let o=d.Children.toArray(U.RowBase.getCProp(t,"children")).map((e,t)=>p(e,{index:t,filterOnly:!1,renderFilter:!0})),n=a(l("headerRow",{hostName:e.hostName}),U.RowBase.getProps(t.props,i));return(0,d.createElement)("tr",{role:"row",...n,key:r},o)}):(r=>{if(r){let o=a(l("headerRow",{hostName:e.hostName,role:"row"}));return(e=>{if(e){for(let t of e)if(s(t,"filter"))return!0}return!1})(r)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("tr",{...o,children:r.map((e,t)=>p(e,{index:t,filterOnly:!1,renderFilter:!1}))}),(0,t.jsx)("tr",{...o,children:r.map((e,t)=>p(e,{index:t,filterOnly:!0,renderFilter:!0}))})]}):(0,t.jsx)("tr",{role:"row",...o,children:r.map((e,t)=>p(e,{index:t,filterOnly:!1,renderFilter:!1}))})}return null})(e.columns),b=a({role:"rowgroup",className:o("thead")},l("thead",{hostName:e.hostName}));return(0,t.jsx)("thead",{...b,children:u})});q.displayName="TreeTableHeader";let Z=d.memo(e=>{let a=d.useRef(null),l=d.useRef(null),r=d.useRef(null),o=d.useRef(null),n=d.useRef(null),i=d.useRef(null),s=d.useRef(null),c=(0,x.useMergeProps)(),{ptm:m,cx:p,sx:u}=e.ptCallbacks,h=(t,a)=>m(t,{hostName:e.hostName,...a}),f=e=>{if(e){let t=e;for(;t&&"root"!==k.DomHandler.getAttribute(t,"data-pc-section")&&"treetable"!==k.DomHandler.getAttribute(t,"data-pc-name");)t=t.parentElement;return t}return null};(0,S.useMountEffect)(()=>{let t=k.DomHandler.find(f(a.current),'[data-pc-section="scrollablebody"]');t=t.length>1?t[1]:t[0];let l=k.DomHandler.calculateScrollbarWidth(t);if(e.frozen)o.current.style.paddingBottom=l+"px";else{let e=k.DomHandler.calculateScrollbarWidth();r.current.style.marginRight=e+"px",s.current&&(s.current.style.marginRight=e+"px")}}),d.useEffect(()=>{if(e.scrollHeight)if(-1!==e.scrollHeight.indexOf("%")){let t=f(a.current);o.current.style.visibility="hidden",o.current.style.height="100px";let l=k.DomHandler.getOuterHeight(t),r=k.DomHandler.getOuterHeight(t.parentElement)*parseInt(e.scrollHeight,10)/100;o.current.style.height="auto",o.current.style.maxHeight=r-(l-100)+"px",o.current.style.visibility="visible"}else o.current.style.maxHeight=e.scrollHeight});let b=e.frozen?e.frozenWidth:"calc(100% - "+e.frozenWidth+")",y=e.frozen?null:e.frozenWidth,g=(()=>{if(z.ObjectUtils.isNotEmpty(e.columns)){let a=e.columns.map((e,a)=>(0,t.jsx)("col",{},e.field+"_"+a)),l=c({className:p("scrollableColgroup")},h("scrollableColgroup"));return(0,t.jsx)("colgroup",{...l,children:a})}return null})(),C=c({className:p("scrollable",{scrolaableProps:e}),style:{width:b,left:y}},h("scrollable")),T=c({className:p("scrollableHeader"),onScroll:e=>void(l.current.scrollLeft=0)},h("scrollableHeader")),v=c({className:p("scrollableHeaderBox")},h("scrollableHeaderBox")),N=c({className:p("scrollableHeaderTable")},h("scrollableHeaderTable")),j=c({className:p("scrollableBody"),style:!e.frozen&&e.scrollHeight?{overflowY:"scroll"}:void 0,onScroll:e=>{let t,l;(l=a.current.previousElementSibling)&&(t=k.DomHandler.findSingle(l,'[data-pc-section="scrollablebody"]')),r.current.style.transform=`translateX(-${o.current.scrollLeft}px)`,s.current&&(s.current.style.transform=`translateX(-${o.current.scrollLeft}px)`),t&&(t.scrollTop=o.current.scrollTop)}},h("scrollableBody")),w=c({style:{top:"0"},className:p("scrollableBodyTable")},h("scrollableBodyTable")),P=c({className:p("scrollableFooter")},h("scrollableFooter")),Y=c({className:u("scrollableFooterBox")},h("scrollableFooterBox")),E=c({className:p("scrollableFooterTable")},h("scrollableFooterTable"));return(0,t.jsxs)("div",{ref:a,...C,children:[(0,t.jsx)("div",{ref:l,...T,children:(0,t.jsx)("div",{ref:r,...v,children:(0,t.jsxs)("table",{...N,children:[g,e.header]})})}),(0,t.jsx)("div",{ref:o,...j,children:(0,t.jsxs)("table",{ref:n,...w,children:[g,e.body]})}),(0,t.jsx)("div",{ref:i,...P,children:(0,t.jsx)("div",{ref:s,...Y,children:(0,t.jsxs)("table",{...E,children:[g,e.footer]})})})]})});Z.displayName="TreeTableScrollableView";let Q=d.forwardRef((e,a)=>{let l,r,o,n,i,s,P,E,K,M,R,D,F=(0,x.useMergeProps)(),I=d.useContext(h.PrimeReactContext),$=Y.getProps(e,I),[A,O]=d.useState($.expandedKeys),[H,L]=d.useState($.first),[U,_]=d.useState($.rows),[G,V]=d.useState($.sortField),[X,J]=d.useState($.sortOrder),[Q,ee]=d.useState($.multiSortMeta),[et,ea]=d.useState($.filters),[el,er]=d.useState([]),eo={props:$,state:{expandedKeys:A,first:H,rows:U,sortField:G,sortOrder:X,multiSortMeta:Q,filters:et,columnOrder:el},context:{scrollable:$.scrollable}},en=Y.setMetaData(eo);(0,b.useHandleStyle)(Y.css.styles,en.isUnstyled,{name:"treetable"});let ei=d.useRef(null),es=d.useRef(null),ed=d.useRef(null),ec=d.useRef(null),em=d.useRef(null),ep=d.useRef(null),eu=d.useRef(null),eh=d.useRef(null),ef=d.useRef(0),eb=d.useRef(0),ey=d.useRef(0),ex=d.useRef(null),eS=d.useRef(null),eg=d.useRef(null),eC=d.useRef(null),eT=d.useRef(null),ev=d.useRef(null),eN=d.useRef(null),[ek,ej]=(0,y.useEventListener)({type:"mousemove",listener:e=>{ep.current&&eq(e)}}),[ez,ew]=(0,y.useEventListener)({type:"mouseup",listener:e=>{ep.current&&(ep.current=!1,eZ(e))}}),eP=()=>null!=$.stateKey||"custom"===$.stateStorage,eY=()=>{let e={};$.paginator&&(e.first=e8(),e.rows=te());let t=tt();if(t&&(e.sortField=t,e.sortOrder=ta()),e.multiSortMeta=tl(),eV()&&(e.filters=tr()),$.reorderableColumns&&(e.columnOrder=el),e.expandedKeysState=A,$.selectionKeys&&$.onSelectionChange&&(e.selectionKeys=$.selectionKeys),"custom"===$.stateStorage)$.customSaveState&&$.customSaveState(e);else{let t=(0,c.getStorage)($.stateStorage);z.ObjectUtils.isNotEmpty(e)&&t.setItem($.stateKey,JSON.stringify(e))}$.onStateSave&&$.onStateSave(e)},eE=()=>{let e=(0,c.getStorage)($.stateStorage);e&&$.stateKey&&e.removeItem($.stateKey)},eK=()=>{let e={};if("custom"===$.stateStorage)$.customRestoreState&&(e=$.customRestoreState());else{let t=(0,c.getStorage)($.stateStorage).getItem($.stateKey),a=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;t&&(e=JSON.parse(t,function(e,t){return"string"==typeof t&&a.test(t)?new Date(t):t}))}eR(e)},eM=e=>{eR(e)},eR=(e={})=>{if(z.ObjectUtils.isNotEmpty(e)){if($.paginator)if($.onPage){var t,a;let l,r;$.onPage(tp((t=e.first,a=e.rows,l=Math.ceil(ti(tm())/a)||1,r=Math.floor(t/a),{first:t,rows:a,page:r,pageCount:l})))}else L(e.first),_(e.rows);e.sortField&&($.onSort?$.onSort(tp({sortField:e.sortField,sortOrder:e.sortOrder})):(V(e.sortField),J(e.sortOrder))),e.multiSortMeta&&($.onSort?$.onSort(tp({multiSortMeta:e.multiSortMeta})):ee(e.multiSortMeta)),e.filters&&($.onFilter?$.onFilter(tp({filters:e.filters})):ea(eG(e.filters))),$.reorderableColumns&&er(e.columnOrder),e.expandedKeysState&&($.onToggle?$.onRowToggle({data:e.expandedKeysState}):O(e.expandedKeysState)),e.selectionKeys&&$.onSelectionChange&&$.onSelectionChange({value:e.selectionKeys}),$.onStateRestore&&$.onStateRestore(e)}},eD=e=>{let{originalEvent:t,value:a,navigateFocusToChild:l}=e;$.onToggle?$.onToggle({originalEvent:t,value:a}):(l&&(eN.current=t),O(a))},eF=e=>{$.onPage?$.onPage(e):(L(e.first),_(e.rows)),$.onValueChange&&$.onValueChange(tm())},eI=e=>{let t,a,l=e.sortField,r=$.defaultSortOrder;if(eC.current=e.sortable,eT.current=e.sortFunction,ev.current=e.sortField,"multiple"===$.sortMode){let o=e.originalEvent.metaKey||e.originalEvent.ctrlKey;if((t=[...tl()])instanceof Array){let e=t.find(e=>e.field===l);r=e?e$(e.order):r}let n={field:l,order:r};r?(t&&o||(t=[]),eA(n,t)):$.removableSort&&t&&eO(n,t),a={multiSortMeta:t}}else r=tt()===l?e$(ta()):r,$.removableSort&&(l=r?l:null),a={sortField:l,sortOrder:r};$.onSort?$.onSort(a):(L(0),V(a.sortField),J(a.sortOrder),ee(a.multiSortMeta)),$.onValueChange&&$.onValueChange(tm({sortField:l,sortOrder:r,multiSortMeta:t}))},e$=e=>$.removableSort?$.defaultSortOrder===e?-1*e:0:-1*e,eA=(e,t)=>{let a=-1;for(let l=0;l<t.length;l++)if(t[l].field===e.field){a=l;break}a>=0?t[a]=e:t.push(e)},eO=(e,t)=>{let a=-1;for(let l=0;l<t.length;l++)if(t[l].field===e.field){a=l;break}a>=0&&t.splice(a,1),t=t.length>0?t:null},eH=({data:e,field:t,order:a})=>{let l=[...e];if(eC.current&&eT.current)l=eT.current({data:e,field:t,order:a});else{let r=new Map,o=z.ObjectUtils.localeComparator(I&&I.locale||m.default.locale);for(let a of e)r.set(a.data,z.ObjectUtils.resolveFieldData(a.data,t));l.sort((e,t)=>eU(r.get(e.data),r.get(t.data),o,a));for(let e=0;e<l.length;e++)l[e].children&&l[e].children.length&&(l[e].children=eH({data:l[e].children,field:t,order:a}))}return l},eW=({data:e,multiSortMeta:t=[]})=>{let a=[...e],l=z.ObjectUtils.localeComparator(I&&I.locale||m.default.locale);a.sort((e,a)=>eL(e,a,t,0,l));for(let e=0;e<a.length;e++)a[e].children&&a[e].children.length&&(a[e].children=eW({data:a[e].children,multiSortMeta:t}));return a},eL=(e,t,a,l,r)=>{if(!a||!a[l])return;let o=z.ObjectUtils.resolveFieldData(e.data,a[l].field),n=z.ObjectUtils.resolveFieldData(t.data,a[l].field);return 0===z.ObjectUtils.compare(o,n,r)?a.length-1>l?eL(e,t,a,l+1,r):0:eU(o,n,r,a[l].order)},eU=(e,t,a,l)=>z.ObjectUtils.sort(e,t,l,a,I&&I.nullSortOrder||m.default.nullSortOrder),eB=(e,t,a)=>{e_({value:e,field:t,matchMode:a})},e_=e=>{ea(t=>{let a=$.onFilter?$.filters:t,l=a?{...a}:{};return eX(e.value)?l[e.field]&&delete l[e.field]:l[e.field]={value:e.value,matchMode:e.matchMode},$.onFilter?$.onFilter({filters:l}):L(0),$.onValueChange&&$.onValueChange(tm({filters:l})),l})},eG=e=>{e=e||$.filters;let t={};return e?Object.entries(e).forEach(([e,a])=>{t[e]=a}):t=tn().reduce((e,t)=>{let a=e9(t,"filterField")||e9(t,"field"),l=e9(t,"filterFunction"),r=e9(t,"dataType"),o=e9(t,"filterMatchMode")||(I&&I.filterMatchModeOptions[r]||m.default.filterMatchModeOptions[r]?I&&I.filterMatchModeOptions[r][0]||m.default.filterMatchModeOptions[r][0]:p.FilterMatchMode.STARTS_WITH);return l&&u.FilterService.register(`custom_${a}`,(...e)=>l(...e,{column:t})),e[a]={value:null,matchMode:o},e},{}),t},eV=()=>z.ObjectUtils.isNotEmpty(tr()),eX=e=>null==e||"string"==typeof e&&0===e.trim().length||e instanceof Array&&0===e.length,eJ=e=>{let t=k.DomHandler.getOffset(ei.current).left;eu.current=e.columnEl,eh.current=e.column,ep.current=!0,ef.current=e.originalEvent.pageX-t+ei.current.scrollLeft,e1()},eq=e=>{let t=k.DomHandler.getOffset(ei.current).left;en.isUnstyled()||k.DomHandler.addClass(ei.current,"p-unselectable-text"),ed.current.style.height=ei.current.offsetHeight+"px",ed.current.style.top="0px",ed.current.style.left=e.pageX-t+ei.current.scrollLeft+"px",ed.current.style.display="block"},eZ=e=>{let t=ed.current.offsetLeft-ef.current,a=eu.current.offsetWidth,l=a+t;if(a+t>parseInt(eu.current.style.minWidth||15,10)){if("fit"===$.columnResizeMode){let e=eu.current.nextElementSibling,a=e.offsetWidth-t;if(l>15&&a>15)if($.scrollable){let e=eQ(eu.current),t=k.DomHandler.findSingle(e,'table[data-pc-section="scrollablebodytable"]'),r=k.DomHandler.findSingle(e,'table[data-pc-section="scrollableheadertable"]'),o=k.DomHandler.findSingle(e,'table[data-pc-section="scrollablefootertable"]'),n=k.DomHandler.index(eu.current);e0(r,n,l,a),e0(t,n,l,a),e0(o,n,l,a)}else eu.current.style.width=l+"px",e&&(e.style.width=a+"px")}else if("expand"===$.columnResizeMode)if($.scrollable){let e=eQ(eu.current),a=k.DomHandler.findSingle(e,'table[data-pc-section="scrollablebodytable"]'),r=k.DomHandler.findSingle(e,'table[data-pc-section="scrollableheadertable"]'),o=k.DomHandler.findSingle(e,'table[data-pc-section="scrollablefootertable"]');a.style.width=a.offsetWidth+t+"px",r.style.width=r.offsetWidth+t+"px",o&&(o.style.width=r.offsetWidth+t+"px");let n=k.DomHandler.index(eu.current);e0(r,n,l,null),e0(a,n,l,null),e0(o,n,l,null)}else es.current.style.width=es.current.offsetWidth+t+"px",eu.current.style.width=l+"px";$.onColumnResizeEnd&&$.onColumnResizeEnd({element:eu.current,column:eh.current,delta:t}),eP()&&eY()}ed.current.style.display="none",eu.current=null,eh.current=null,k.DomHandler.removeClass(ei.current,"p-unselectable-text"),e2()},eQ=e=>{if(e){let t=e.parentElement;for(;t&&"scrollable"!==k.DomHandler.getAttribute(t,"data-pc-section");)t=t.parentElement;return t}return null},e0=(e,t,a,l)=>{if(e){let r="COLGROUP"===e.children[0].nodeName?e.children[0]:null;if(r){let e=r.children[t],o=e.nextElementSibling;e.style.width=a+"px",o&&l&&(o.style.width=l+"px")}else throw Error("Scrollable tables require a colgroup to support resizable columns")}},e1=()=>{ek(),ez()},e2=()=>{ej(),ew()},e5=e=>{let{originalEvent:t,column:a}=e;ep.current?t.preventDefault():(eb.current=k.DomHandler.getHiddenElementOuterWidth(ec.current),ey.current=k.DomHandler.getHiddenElementOuterHeight(ec.current),ex.current=e7(t.currentTarget),eS.current=a,t.dataTransfer.setData("text","b"))},e3=e=>{let{originalEvent:t,column:a}=e,l=e7(t.currentTarget);if($.reorderableColumns&&ex.current&&l&&!e9(a,"frozen")){t.preventDefault();let e=k.DomHandler.getOffset(ei.current),a=k.DomHandler.getOffset(l);if(ex.current!==l){let r=a.left-e.left,o=a.left+l.offsetWidth/2;ec.current.style.top=a.top-e.top-(ey.current-1)+"px",em.current.style.top=a.top-e.top+l.offsetHeight+"px",t.pageX>o?(ec.current.style.left=r+l.offsetWidth-Math.ceil(eb.current/2)+"px",em.current.style.left=r+l.offsetWidth-Math.ceil(eb.current/2)+"px",eg.current=1):(ec.current.style.left=r-Math.ceil(eb.current/2)+"px",em.current.style.left=r-Math.ceil(eb.current/2)+"px",eg.current=-1),ec.current.style.display="block",em.current.style.display="block"}}},e4=e=>{let t=e.originalEvent;$.reorderableColumns&&ex.current&&(t.preventDefault(),ec.current.style.display="none",em.current.style.display="none")},e6=e=>{let{originalEvent:t,column:a}=e;if(t.preventDefault(),ex.current){let e=k.DomHandler.index(ex.current),l=k.DomHandler.index(e7(t.currentTarget)),r=e!==l;if(r&&(l-e==1&&-1===eg.current||e-l==1&&1===eg.current)&&(r=!1),r){let e=el?tn():d.Children.toArray($.children),t=(e,t)=>e9(e,"columnKey")||e9(t,"columnKey")?z.ObjectUtils.equals(e,t,"props.columnKey"):z.ObjectUtils.equals(e,t,"props.field"),l=e.findIndex(e=>t(e,eS.current)),r=e.findIndex(e=>t(e,a));r<l&&1===eg.current&&r++,r>l&&-1===eg.current&&r--,z.ObjectUtils.reorderArray(e,l,r);let o=[];for(let t of e)o.push(e9(t,"columnKey")||e9(t,"field"));er(o),$.onColReorder&&$.onColReorder({dragIndex:l,dropIndex:r,columns:e})}ec.current.style.display="none",em.current.style.display="none",ex.current.draggable=!1,ex.current=null,eg.current=null}},e7=e=>{if("TH"===e.nodeName)return e;let t=e.parentElement;for(;"TH"!==t.nodeName&&(t=t.parentElement););return t},e9=(e,t)=>f.ColumnBase.getCProp(e,t),e8=()=>$.onPage?$.first:H,te=()=>$.onPage?$.rows:U,tt=()=>$.onSort?$.sortField:G,ta=()=>$.onSort?$.sortOrder:X,tl=()=>($.onSort?$.multiSortMeta:Q)||[],tr=()=>$.onFilter?$.filters:et,to=(e,t)=>{if(e&&e.length)for(let a=0;a<e.length;a++){let l=e[a];if(e9(l,"columnKey")===t||e9(l,"field")===t)return l}return null},tn=()=>{let e=d.Children.toArray($.children);if(e&&e.length){if($.reorderableColumns&&el){let t=[];for(let a of el){let l=to(e,a);l&&t.push(l)}return[...t,...e.filter(e=>0>t.indexOf(e))]}return e}return null},ti=e=>$.lazy?$.totalRecords:e?e.length:0,ts=(e,t)=>{if(e){let a=!1;if(e.children){let l=[...e.children];for(let r of(e.children=[],l)){let l={...r};td(l,t)&&(a=!0,e.children.push(l))}}if(a)return!0}},td=(e,{filterField:t,filterValue:a,filterConstraint:l,isStrictMode:r,options:o})=>{let n=!1;return l(z.ObjectUtils.resolveFieldData(e.data,t),a,$.filterLocale,o)&&(n=!0),n&&(!r||tc(e))||(n=ts(e,{filterField:t,filterValue:a,filterConstraint:l,isStrictMode:r})||n),n},tc=e=>!1!==e.leaf&&!(e.children&&e.children.length),tm=e=>{let t=$.value||[];if(!$.lazy&&t&&t.length){let a=e&&e.filters||tr(),l=e&&e.sortField||tt(),r=e&&e.sortOrder||ta(),o=e&&e.multiSortMeta||tl(),n=tn().find(e=>e9(e,"field")===l);n&&(eC.current=e9(n,"sortable"),eT.current=e9(n,"sortFunction")),(z.ObjectUtils.isNotEmpty(a)||$.globalFilter)&&(t=(e=>{let t=[],a=tr(),l=d.Children.toArray($.children),r="strict"===$.filterMode;for(let o of e){let e={...o},n=!0,i=!1;for(let t=0;t<l.length;t++){let s,d,c,m,p=l[t],h=a?a[e9(p,"field")]:null,b=e9(p,"field");if(h){let t=h.matchMode||e9(p,"filterMatchMode")||"startsWith";if(s=h.value,d="custom"===t?e9(p,"filterFunction"):u.FilterService.filters[t],m={rowData:o,filters:a,props:$,column:{filterMeta:h,filterField:b,props:f.ColumnBase.getCProps(p)}},c={filterField:b,filterValue:s,filterConstraint:d,isStrictMode:r,options:m},(!r||ts(e,c)||td(e,c))&&(r||td(e,c)||ts(e,c))||(n=!1),!n)break}if($.globalFilter&&!i){let t={...e};c={filterField:b,filterValue:s=$.globalFilter,filterConstraint:d=u.FilterService.filters[$.globalFilterMatchMode],isStrictMode:r},(r&&(ts(t,c)||td(t,c))||!r&&(td(t,c)||ts(t,c)))&&(i=!0,e=t)}}let s=n;$.globalFilter&&(s=n&&i),s&&t.push(e)}return t})(t)),(l||z.ObjectUtils.isNotEmpty(o))&&("single"===$.sortMode?t=eH({data:t,field:l,order:r}):"multiple"===$.sortMode&&(t=eW({data:t,multiSortMeta:o})))}return t};(0,S.useMountEffect)(()=>{eP()&&eK()}),(0,g.useUpdateEffect)(()=>{eP()&&eY()}),(0,g.useUpdateEffect)(()=>{if(eN.current){let e=eN.current.target,t=e.nextElementSibling;t&&(e.tabIndex="-1",t.tabIndex="0",k.DomHandler.focus(t))}},[A]),d.useImperativeHandle(a,()=>({props:$,clearState:eE,filter:eB,getElement:()=>ei.current,restoreState:eK,restoreTableState:eM,saveState:eY}));let tp=e=>({first:e8(),rows:te(),sortField:tt(),sortOrder:ta(),multiSortMeta:tl(),filters:tr(),...e}),tu=(e,a)=>{let l=tt(),r=ta(),o=[...tl()],n=tr();return(0,t.jsx)(q,{hostName:"TreeTable",columns:e,columnGroup:a,tabIndex:$.tabIndex,onSort:eI,sortField:l,sortIcon:$.sortIcon,sortOrder:r,multiSortMeta:o,resizableColumns:$.resizableColumns,onResizeStart:eJ,reorderableColumns:$.reorderableColumns,onDragStart:e5,onDragOver:e3,onDragLeave:e4,onDrop:e6,onFilter:e_,filters:n,filterDelay:$.filterDelay,ptCallbacks:en,metaData:eo,unstyled:$.unstyled})},th=(e,a)=>(0,t.jsx)(B,{hostName:"TreeTable",columns:e,columnGroup:a,ptCallbacks:en,metaData:eo}),tf=(e,a)=>(0,t.jsx)(W,{hostName:"TreeTable",checkboxIcon:$.checkboxIcon,columns:a,contextMenuSelectionKey:$.contextMenuSelectionKey,emptyMessage:$.emptyMessage,expandedKeys:$.onToggle?$.expandedKeys:A,first:e8(),lazy:$.lazy,loading:$.loading,metaData:eo,metaKeySelection:$.metaKeySelection,onCollapse:$.onCollapse,onContextMenu:$.onContextMenu,onContextMenuSelectionChange:$.onContextMenuSelectionChange,onExpand:$.onExpand,onRowClick:$.onRowClick,onRowMouseEnter:$.onRowMouseEnter,onRowMouseLeave:$.onRowMouseLeave,onSelect:$.onSelect,onSelectionChange:$.onSelectionChange,onToggle:eD,onUnselect:$.onUnselect,originalOptions:$.value,paginator:$.paginator,propagateSelectionDown:$.propagateSelectionDown,propagateSelectionUp:$.propagateSelectionUp,ptCallbacks:en,rowClassName:$.rowClassName,rows:te(),selectOnEdit:$.selectOnEdit,selectionKeys:$.selectionKeys,selectionMode:$.selectionMode,togglerTemplate:$.togglerTemplate,value:e}),tb=(e,a)=>{let l=(0,w.classNames)("p-paginator-"+e,$.paginatorClassName);return(0,t.jsx)(N.Paginator,{first:e8(),rows:te(),pageLinkSize:$.pageLinkSize,className:l,onPageChange:eF,template:$.paginatorTemplate,totalRecords:a,rowsPerPageOptions:$.rowsPerPageOptions,currentPageReportTemplate:$.currentPageReportTemplate,leftContent:$.paginatorLeft,rightContent:$.paginatorRight,alwaysShow:$.alwaysShowPaginator,dropdownAppendTo:$.paginatorDropdownAppendTo,pt:en.ptm("paginator"),unstyled:$.unstyled,__parentMetadata:{parent:eo}})},ty=(e,a,l,r,o)=>{let n=tu(a,r),i=th(a,o),s=tf(e,a);return(0,t.jsx)(Z,{hostName:"TreeTable",columns:a,header:n,body:s,footer:i,scrollHeight:$.scrollHeight,frozen:l,frozenWidth:$.frozenWidth,ptCallbacks:en,metaData:eo})},tx=tm(),tS=$.scrollable?(i=(n=(e=>{let t=null;for(let a of e)e9(a,"frozen")&&(t=t||[]).push(a);return t})(o=tn()))?(e=>{let t=null;for(let a of e)e9(a,"frozen")||(t=t||[]).push(a);return t})(o):o,n&&(l=ty(tx,n,!0,$.frozenHeaderColumnGroup,$.frozenFooterColumnGroup)),r=ty(tx,i,!1,$.headerColumnGroup,$.footerColumnGroup),s=F({className:en.cx("scrollableWrapper")},en.ptm("scrollableWrapper")),(0,t.jsxs)("div",{...s,children:[l,r]})):(E=tu(P=tn(),$.headerColumnGroup),K=th(P,$.footerColumnGroup),M=tf(tx,P),R=F({className:en.cx("wrapper")},en.ptm("wrapper")),D=F({role:"table",style:$.tableStyle,className:(0,w.classNames)($.tableClassName,en.cx("table"))},en.ptm("table")),(0,t.jsx)("div",{...R,children:(0,t.jsxs)("table",{ref:es,...D,children:[E,K,M]})})),tg=ti(tx),tC=F({className:en.cx("header")},en.ptm("header")),tT=F({className:en.cx("footer")},en.ptm("footer")),tv=F({className:en.cx("resizeHelper"),style:{display:"none"}},en.ptm("resizeHelper")),tN=$.header&&(0,t.jsx)("div",{...tC,children:$.header}),tk=$.footer&&(0,t.jsx)("div",{...tT,children:$.footer}),tj=$.paginator&&"bottom"!==$.paginatorPosition&&tb("top",tg),tz=$.paginator&&"top"!==$.paginatorPosition&&tb("bottom",tg),tw=(()=>{if($.loading){let e=F({className:en.cx("loadingIcon")},en.ptm("loadingIcon")),a=$.loadingIcon||(0,t.jsx)(v.SpinnerIcon,{...e,spin:!0}),l=j.IconUtils.getJSXIcon(a,{...e},{props:$}),r=F({className:en.cx("loadingWrapper")},en.ptm("loadingWrapper")),o=F({className:en.cx("loadingOverlay")},en.ptm("loadingOverlay"));return(0,t.jsx)("div",{...r,children:(0,t.jsx)("div",{...o,children:l})})}return null})(),tP=$.resizableColumns&&(0,t.jsx)("div",{ref:ed,...tv}),tY=F({className:en.cx("reorderIndicatorUp"),style:{position:"absolute",display:"none"}},en.ptm("reorderIndicatorUp")),tE=F(en.ptm("reorderIndicatorUpIcon")),tK=$.reorderableColumns&&j.IconUtils.getJSXIcon($.reorderIndicatorUpIcon||(0,t.jsx)(C.ArrowDownIcon,{...tE}),{...tE},{props:$}),tM=$.reorderableColumns&&(0,t.jsx)("span",{ref:ec,...tY,children:tK}),tR={className:en.sx("reorderIndicatorDown"),style:{position:"absolute",display:"none"}},tD=F(en.ptm("reorderIndicatorDownIcon")),tF=j.IconUtils.getJSXIcon($.reorderIndicatorDownIcon||(0,t.jsx)(T.ArrowUpIcon,{...tD}),{...tD},{props:$}),tI=$.reorderableColumns&&(0,t.jsx)("span",{ref:em,...tR,children:tF}),t$=F({role:"table",id:$.id,className:(0,w.classNames)($.className,en.cx("root",{isRowSelectionMode:()=>$.selectionMode&&"single"===$.selectionMode||$.selectionMode&&"multiple"===$.selectionMode})),style:$.style,"data-scrollselectors":".p-treetable-wrapper"},Y.getOtherProps($),en.ptm("root"));return(0,t.jsxs)("div",{ref:ei,...t$,children:[tw,tN,tj,tS,tz,tk,tP,tM,tI]})});Q.displayName="TreeTable";var ee=e.i(57345);function et(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let o={basic:`
<TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function BasicDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function BasicDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["TreeTable requires a collection of ",(0,t.jsx)("i",{children:"TreeNode"})," instances as a ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"Column"})," components as children for the representation. The column with the element to toggle a node should have ",(0,t.jsx)("i",{children:"expander"})," enabled."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})}),(0,t.jsx)(i.DocSectionCode,{code:o,service:["NodeService"]})]})}var ea=e.i(30338),el=e.i(66275);function er(e){let a=[{key:"0",data:{brand:"Bliss",lastYearSale:"51%",thisYearSale:"40%",lastYearProfit:"$54,406.00",thisYearProfit:"$43,342"},children:[{key:"0-0",data:{brand:"Product A",lastYearSale:"25%",thisYearSale:"20%",lastYearProfit:"$34,406.00",thisYearProfit:"$23,342"},children:[{key:"0-0-0",data:{brand:"Product A-1",lastYearSale:"20%",thisYearSale:"10%",lastYearProfit:"$24,406.00",thisYearProfit:"$13,342"}},{key:"0-0-1",data:{brand:"Product A-2",lastYearSale:"5%",thisYearSale:"10%",lastYearProfit:"$10,000.00",thisYearProfit:"$10,000"}}]},{key:"0-1",data:{brand:"Product B",lastYearSale:"26%",thisYearSale:"20%",lastYearProfit:"$24,000.00",thisYearProfit:"$23,000"}}]},{key:"1",data:{brand:"Fate",lastYearSale:"83%",thisYearSale:"96%",lastYearProfit:"$423,132",thisYearProfit:"$312,122"},children:[{key:"1-0",data:{brand:"Product X",lastYearSale:"50%",thisYearSale:"40%",lastYearProfit:"$223,132",thisYearProfit:"$156,061"}},{key:"1-1",data:{brand:"Product Y",lastYearSale:"33%",thisYearSale:"56%",lastYearProfit:"$200,000",thisYearProfit:"$156,061"}}]},{key:"2",data:{brand:"Ruby",lastYearSale:"38%",thisYearSale:"5%",lastYearProfit:"$12,321",thisYearProfit:"$8,500"},children:[{key:"2-0",data:{brand:"Product M",lastYearSale:"18%",thisYearSale:"2%",lastYearProfit:"$10,300",thisYearProfit:"$5,500"}},{key:"2-1",data:{brand:"Product N",lastYearSale:"20%",thisYearSale:"3%",lastYearProfit:"$2,021",thisYearProfit:"$3,000"}}]},{key:"3",data:{brand:"Sky",lastYearSale:"49%",thisYearSale:"22%",lastYearProfit:"$745,232",thisYearProfit:"$650,323"},children:[{key:"3-0",data:{brand:"Product P",lastYearSale:"20%",thisYearSale:"16%",lastYearProfit:"$345,232",thisYearProfit:"$350,000"}},{key:"3-1",data:{brand:"Product R",lastYearSale:"29%",thisYearSale:"6%",lastYearProfit:"$400,009",thisYearProfit:"$300,323"}}]},{key:"4",data:{brand:"Comfort",lastYearSale:"17%",thisYearSale:"79%",lastYearProfit:"$643,242",thisYearProfit:"500,332"},children:[{key:"4-0",data:{brand:"Product S",lastYearSale:"10%",thisYearSale:"40%",lastYearProfit:"$243,242",thisYearProfit:"$100,000"}},{key:"4-1",data:{brand:"Product T",lastYearSale:"7%",thisYearSale:"39%",lastYearProfit:"$400,00",thisYearProfit:"$400,332"}}]},{key:"5",data:{brand:"Merit",lastYearSale:"52%",thisYearSale:" 65%",lastYearProfit:"$421,132",thisYearProfit:"$150,005"},children:[{key:"5-0",data:{brand:"Product L",lastYearSale:"20%",thisYearSale:"40%",lastYearProfit:"$121,132",thisYearProfit:"$100,000"}},{key:"5-1",data:{brand:"Product G",lastYearSale:"32%",thisYearSale:"25%",lastYearProfit:"$300,000",thisYearProfit:"$50,005"}}]},{key:"6",data:{brand:"Violet",lastYearSale:"82%",thisYearSale:"12%",lastYearProfit:"$131,211",thisYearProfit:"$100,214"},children:[{key:"6-0",data:{brand:"Product SH1",lastYearSale:"30%",thisYearSale:"6%",lastYearProfit:"$101,211",thisYearProfit:"$30,214"}},{key:"6-1",data:{brand:"Product SH2",lastYearSale:"52%",thisYearSale:"6%",lastYearProfit:"$30,000",thisYearProfit:"$70,000"}}]},{key:"7",data:{brand:"Dulce",lastYearSale:"44%",thisYearSale:"45%",lastYearProfit:"$66,442",thisYearProfit:"$53,322"},children:[{key:"7-0",data:{brand:"Product PN1",lastYearSale:"22%",thisYearSale:"25%",lastYearProfit:"$33,221",thisYearProfit:"$20,000"}},{key:"7-1",data:{brand:"Product PN2",lastYearSale:"22%",thisYearSale:"25%",lastYearProfit:"$33,221",thisYearProfit:"$33,322"}}]},{key:"8",data:{brand:"Solace",lastYearSale:"90%",thisYearSale:"56%",lastYearProfit:"$765,442",thisYearProfit:"$296,232"},children:[{key:"8-0",data:{brand:"Product HT1",lastYearSale:"60%",thisYearSale:"36%",lastYearProfit:"$465,000",thisYearProfit:"$150,653"}},{key:"8-1",data:{brand:"Product HT2",lastYearSale:"30%",thisYearSale:"20%",lastYearProfit:"$300,442",thisYearProfit:"$145,579"}}]},{key:"9",data:{brand:"Essence",lastYearSale:"75%",thisYearSale:"54%",lastYearProfit:"$21,212",thisYearProfit:"$12,533"},children:[{key:"9-0",data:{brand:"Product TS1",lastYearSale:"50%",thisYearSale:"34%",lastYearProfit:"$11,000",thisYearProfit:"$8,562"}},{key:"9-1",data:{brand:"Product TS2",lastYearSale:"25%",thisYearSale:"20%",lastYearProfit:"$11,212",thisYearProfit:"$3,971"}}]}],l=(0,t.jsxs)(ea.ColumnGroup,{children:[(0,t.jsxs)(el.Row,{children:[(0,t.jsx)(s.Column,{header:"Brand",rowSpan:3}),(0,t.jsx)(s.Column,{header:"Sale Rate",colSpan:4})]}),(0,t.jsxs)(el.Row,{children:[(0,t.jsx)(s.Column,{header:"Sales",colSpan:2}),(0,t.jsx)(s.Column,{header:"Profits",colSpan:2})]}),(0,t.jsxs)(el.Row,{children:[(0,t.jsx)(s.Column,{header:"Last Year"}),(0,t.jsx)(s.Column,{header:"This Year"}),(0,t.jsx)(s.Column,{header:"Last Year"}),(0,t.jsx)(s.Column,{header:"This Year"})]})]}),o=(0,t.jsx)(ea.ColumnGroup,{children:(0,t.jsxs)(el.Row,{children:[(0,t.jsx)(s.Column,{footer:"Totals:",colSpan:3}),(0,t.jsx)(s.Column,{footer:"$506,202"}),(0,t.jsx)(s.Column,{footer:"$531,020"})]})}),n={basic:`
<TreeTable value={nodes} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} tableStyle={{ minWidth: '50rem' }}>
    <Column field="brand" expander />
    <Column field="lastYearSale" />
    <Column field="thisYearSale" />
    <Column field="lastYearProfit" />
    <Column field="thisYearProfit" />
</TreeTable>
        `,javascript:`
import React from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

export default function ColumnGroupDemo() {
    const nodes = [
        {
            key: '0',
            data: { brand: 'Bliss', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            children: [
                {
                    key: '0-0',
                    data: { brand: 'Product A', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$34,406.00', thisYearProfit: '$23,342' },
                    children: [
                        {
                            key: '0-0-0',
                            data: { brand: 'Product A-1', lastYearSale: '20%', thisYearSale: '10%', lastYearProfit: '$24,406.00', thisYearProfit: '$13,342' },
                        },
                        {
                            key: '0-0-1',
                            data: { brand: 'Product A-2', lastYearSale: '5%', thisYearSale: '10%', lastYearProfit: '$10,000.00', thisYearProfit: '$10,000' },
                        }
                    ]
                },
                {
                    key: '0-1',
                    data: { brand: 'Product B', lastYearSale: '26%', thisYearSale: '20%', lastYearProfit: '$24,000.00', thisYearProfit: '$23,000' },
                }
            ]
        },
        {
            key: '1',
            data: { brand: 'Fate', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            children: [
                {
                    key: '1-0',
                    data: { brand: 'Product X', lastYearSale: '50%', thisYearSale: '40%', lastYearProfit: '$223,132', thisYearProfit: '$156,061' },
                },
                {
                    key: '1-1',
                    data: { brand: 'Product Y', lastYearSale: '33%', thisYearSale: '56%', lastYearProfit: '$200,000', thisYearProfit: '$156,061' },
                }
            ]
        },
        {
            key: '2',
            data: { brand: 'Ruby', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            children: [
                {
                    key: '2-0',
                    data: { brand: 'Product M', lastYearSale: '18%', thisYearSale: '2%', lastYearProfit: '$10,300', thisYearProfit: '$5,500' },
                },
                {
                    key: '2-1',
                    data: { brand: 'Product N', lastYearSale: '20%', thisYearSale: '3%', lastYearProfit: '$2,021', thisYearProfit: '$3,000' },
                }
            ]
        },
        {
            key: '3',
            data: { brand: 'Sky', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323' },
            children: [
                {
                    key: '3-0',
                    data: { brand: 'Product P', lastYearSale: '20%', thisYearSale: '16%', lastYearProfit: '$345,232', thisYearProfit: '$350,000' },
                },
                {
                    key: '3-1',
                    data: { brand: 'Product R', lastYearSale: '29%', thisYearSale: '6%', lastYearProfit: '$400,009', thisYearProfit: '$300,323' },
                }
            ]
        },
        {
            key: '4',
            data: { brand: 'Comfort', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            children: [
                {
                    key: '4-0',
                    data: { brand: 'Product S', lastYearSale: '10%', thisYearSale: '40%', lastYearProfit: '$243,242', thisYearProfit: '$100,000' },
                },
                {
                    key: '4-1',
                    data: { brand: 'Product T', lastYearSale: '7%', thisYearSale: '39%', lastYearProfit: '$400,00', thisYearProfit: '$400,332' },
                }
            ]
        },
        {
            key: '5',
            data: { brand: 'Merit', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            children: [
                {
                    key: '5-0',
                    data: { brand: 'Product L', lastYearSale: '20%', thisYearSale: '40%', lastYearProfit: '$121,132', thisYearProfit: '$100,000' },
                },
                {
                    key: '5-1',
                    data: { brand: 'Product G', lastYearSale: '32%', thisYearSale: '25%', lastYearProfit: '$300,000', thisYearProfit: '$50,005' },
                }
            ]
        },
        {
            key: '6',
            data: { brand: 'Violet', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            children: [
                {
                    key: '6-0',
                    data: { brand: 'Product SH1', lastYearSale: '30%', thisYearSale: '6%', lastYearProfit: '$101,211', thisYearProfit: '$30,214' },
                },
                {
                    key: '6-1',
                    data: { brand: 'Product SH2', lastYearSale: '52%', thisYearSale: '6%', lastYearProfit: '$30,000', thisYearProfit: '$70,000' },
                }
            ]
        },
        {
            key: '7',
            data: { brand: 'Dulce', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            children: [
                {
                    key: '7-0',
                    data: { brand: 'Product PN1', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$20,000' },
                },
                {
                    key: '7-1',
                    data: { brand: 'Product PN2', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$33,322' },
                }
            ]
        },
        {
            key: '8',
            data: { brand: 'Solace', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            children: [
                {
                    key: '8-0',
                    data: { brand: 'Product HT1', lastYearSale: '60%', thisYearSale: '36%', lastYearProfit: '$465,000', thisYearProfit: '$150,653' },
                },
                {
                    key: '8-1',
                    data: { brand: 'Product HT2', lastYearSale: '30%', thisYearSale: '20%', lastYearProfit: '$300,442', thisYearProfit: '$145,579' },
                }
            ]
        },
        {
            key: '9',
            data: { brand: 'Essence', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' },
            children: [
                {
                    key: '9-0',
                    data: { brand: 'Product TS1', lastYearSale: '50%', thisYearSale: '34%', lastYearProfit: '$11,000', thisYearProfit: '$8,562' },
                },
                {
                    key: '9-1',
                    data: { brand: 'Product TS2', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$11,212', thisYearProfit: '$3,971' },
                }
            ]
        }
    ];

    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column header="Brand" rowSpan={3} />
                <Column header="Sale Rate" colSpan={4} />
            </Row>
            <Row>
                <Column header="Sales" colSpan={2} />
                <Column header="Profits" colSpan={2} />
            </Row>
            <Row>
                <Column header="Last Year" />
                <Column header="This Year" />
                <Column header="Last Year" />
                <Column header="This Year" />
            </Row>
        </ColumnGroup>
    );

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="Totals:" colSpan={3} />
                <Column footer="$506,202" />
                <Column footer="$531,020" />
            </Row>
        </ColumnGroup>
    );

    return (
        <div className="card">
            <TreeTable value={nodes} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} tableStyle={{ minWidth: '50rem' }}>
                <Column field="brand" expander />
                <Column field="lastYearSale" />
                <Column field="thisYearSale" />
                <Column field="lastYearProfit" />
                <Column field="thisYearProfit" />
            </TreeTable>
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { TreeNode } from 'primereact/treenode';

export default function ColGroupDemo() {
    const nodes: TreeNode[] = [
        {
            key: '0',
            data: { brand: 'Bliss', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            children: [
                {
                    key: '0-0',
                    data: { brand: 'Product A', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$34,406.00', thisYearProfit: '$23,342' },
                    children: [
                        {
                            key: '0-0-0',
                            data: { brand: 'Product A-1', lastYearSale: '20%', thisYearSale: '10%', lastYearProfit: '$24,406.00', thisYearProfit: '$13,342' },
                        },
                        {
                            key: '0-0-1',
                            data: { brand: 'Product A-2', lastYearSale: '5%', thisYearSale: '10%', lastYearProfit: '$10,000.00', thisYearProfit: '$10,000' },
                        }
                    ]
                },
                {
                    key: '0-1',
                    data: { brand: 'Product B', lastYearSale: '26%', thisYearSale: '20%', lastYearProfit: '$24,000.00', thisYearProfit: '$23,000' },
                }
            ]
        },
        {
            key: '1',
            data: { brand: 'Fate', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            children: [
                {
                    key: '1-0',
                    data: { brand: 'Product X', lastYearSale: '50%', thisYearSale: '40%', lastYearProfit: '$223,132', thisYearProfit: '$156,061' },
                },
                {
                    key: '1-1',
                    data: { brand: 'Product Y', lastYearSale: '33%', thisYearSale: '56%', lastYearProfit: '$200,000', thisYearProfit: '$156,061' },
                }
            ]
        },
        {
            key: '2',
            data: { brand: 'Ruby', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            children: [
                {
                    key: '2-0',
                    data: { brand: 'Product M', lastYearSale: '18%', thisYearSale: '2%', lastYearProfit: '$10,300', thisYearProfit: '$5,500' },
                },
                {
                    key: '2-1',
                    data: { brand: 'Product N', lastYearSale: '20%', thisYearSale: '3%', lastYearProfit: '$2,021', thisYearProfit: '$3,000' },
                }
            ]
        },
        {
            key: '3',
            data: { brand: 'Sky', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323' },
            children: [
                {
                    key: '3-0',
                    data: { brand: 'Product P', lastYearSale: '20%', thisYearSale: '16%', lastYearProfit: '$345,232', thisYearProfit: '$350,000' },
                },
                {
                    key: '3-1',
                    data: { brand: 'Product R', lastYearSale: '29%', thisYearSale: '6%', lastYearProfit: '$400,009', thisYearProfit: '$300,323' },
                }
            ]
        },
        {
            key: '4',
            data: { brand: 'Comfort', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            children: [
                {
                    key: '4-0',
                    data: { brand: 'Product S', lastYearSale: '10%', thisYearSale: '40%', lastYearProfit: '$243,242', thisYearProfit: '$100,000' },
                },
                {
                    key: '4-1',
                    data: { brand: 'Product T', lastYearSale: '7%', thisYearSale: '39%', lastYearProfit: '$400,00', thisYearProfit: '$400,332' },
                }
            ]
        },
        {
            key: '5',
            data: { brand: 'Merit', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            children: [
                {
                    key: '5-0',
                    data: { brand: 'Product L', lastYearSale: '20%', thisYearSale: '40%', lastYearProfit: '$121,132', thisYearProfit: '$100,000' },
                },
                {
                    key: '5-1',
                    data: { brand: 'Product G', lastYearSale: '32%', thisYearSale: '25%', lastYearProfit: '$300,000', thisYearProfit: '$50,005' },
                }
            ]
        },
        {
            key: '6',
            data: { brand: 'Violet', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            children: [
                {
                    key: '6-0',
                    data: { brand: 'Product SH1', lastYearSale: '30%', thisYearSale: '6%', lastYearProfit: '$101,211', thisYearProfit: '$30,214' },
                },
                {
                    key: '6-1',
                    data: { brand: 'Product SH2', lastYearSale: '52%', thisYearSale: '6%', lastYearProfit: '$30,000', thisYearProfit: '$70,000' },
                }
            ]
        },
        {
            key: '7',
            data: { brand: 'Dulce', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            children: [
                {
                    key: '7-0',
                    data: { brand: 'Product PN1', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$20,000' },
                },
                {
                    key: '7-1',
                    data: { brand: 'Product PN2', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$33,322' },
                }
            ]
        },
        {
            key: '8',
            data: { brand: 'Solace', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            children: [
                {
                    key: '8-0',
                    data: { brand: 'Product HT1', lastYearSale: '60%', thisYearSale: '36%', lastYearProfit: '$465,000', thisYearProfit: '$150,653' },
                },
                {
                    key: '8-1',
                    data: { brand: 'Product HT2', lastYearSale: '30%', thisYearSale: '20%', lastYearProfit: '$300,442', thisYearProfit: '$145,579' },
                }
            ]
        },
        {
            key: '9',
            data: { brand: 'Essence', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' },
            children: [
                {
                    key: '9-0',
                    data: { brand: 'Product TS1', lastYearSale: '50%', thisYearSale: '34%', lastYearProfit: '$11,000', thisYearProfit: '$8,562' },
                },
                {
                    key: '9-1',
                    data: { brand: 'Product TS2', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$11,212', thisYearProfit: '$3,971' },
                }
            ]
        }
    ];

    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column header="Brand" rowSpan={3} />
                <Column header="Sale Rate" colSpan={4} />
            </Row>
            <Row>
                <Column header="Sales" colSpan={2} />
                <Column header="Profits" colSpan={2} />
            </Row>
            <Row>
                <Column header="Last Year" />
                <Column header="This Year" />
                <Column header="Last Year" />
                <Column header="This Year" />
            </Row>
        </ColumnGroup>
    );

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="Totals:" colSpan={3} />
                <Column footer="$506,202" />
                <Column footer="$531,020" />
            </Row>
        </ColumnGroup>
    );

    return (
        <div className="card">
            <TreeTable value={nodes} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                <Column field="brand" expander />
                <Column field="lastYearSale" />
                <Column field="thisYearSale" />
                <Column field="lastYearProfit" />
                <Column field="thisYearProfit" />
            </TreeTable>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Columns can be grouped within a ",(0,t.jsx)("i",{children:"Row"})," component and groups can be displayed at header and footer using ",(0,t.jsx)("i",{children:"headerColumnGroup"}),", ",(0,t.jsx)("i",{children:"footerColumnGroup"})," properties. Number of cells and rows to span are defined with the"," ",(0,t.jsx)("i",{children:"colSpan"})," and ",(0,t.jsx)("i",{children:"rowSpan"})," properties of a Column."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,headerColumnGroup:l,footerColumnGroup:o,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"brand",expander:!0}),(0,t.jsx)(s.Column,{field:"lastYearSale"}),(0,t.jsx)(s.Column,{field:"thisYearSale"}),(0,t.jsx)(s.Column,{field:"lastYearProfit"}),(0,t.jsx)(s.Column,{field:"thisYearProfit"})]})}),(0,t.jsx)(i.DocSectionCode,{code:n})]})}var eo=e.i(85598);function en(e){let a=[{field:"size",header:"Size"},{field:"type",header:"Type"}],[l,o]=(0,d.useState)([]),[n,c]=(0,d.useState)(a);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>o(e))},[]);let m=(0,t.jsx)(eo.MultiSelect,{value:n,options:a,onChange:e=>{let t=e.value;c(a.filter(e=>t.some(t=>t.field===e.field)))},optionLabel:"header",className:"w-full sm:w-16rem",display:"chip"}),p={basic:`
<TreeTable value={nodes} header={header} tableStyle={{ minWidth: '50rem' }}>
    <Column key="name" field="name" header="Name" expander />
    {visibleColumns.map((col) => (
        <Column key={col.field} field={col.field} header={col.header} />
    ))}
</TreeTable>
        `,javascript:`
import React, {useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';
import { MultiSelect } from 'primereact/multiselect';

export default function ColumnToggleDemo() {
    let columns = [
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }
    ];
    const [nodes, setNodes] = useState([]);
    const [visibleColumns, setVisibleColumns] = useState(columns);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter((col) => selectedColumns.some((sCol) => sCol.field === col.field));

        setVisibleColumns(orderedSelectedColumns);
    };

    const header = <MultiSelect value={visibleColumns} options={columns} onChange={onColumnToggle} optionLabel="header" className="w-full sm:w-16rem" display="chip" />;

    return (
        <div className="card">
            <TreeTable value={nodes} header={header} tableStyle={{ minWidth: '50rem' }}>
                <Column key="name" field="name" header="Name" expander />
                {visibleColumns.map((col) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, {useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

interface ColumnMeta {
    field: string;
    header: string;
}

export default function ColumnToggleDemo() {
    let columns: ColumnMeta[] = [
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }
    ];
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [visibleColumns, setVisibleColumns] = useState<ColumnMeta>(columns);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const onColumnToggle = (event: MultiSelectChangeEvent) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter((col) => selectedColumns.some((sCol) => sCol.field === col.field));

        setVisibleColumns(orderedSelectedColumns);
    };

    const header = <MultiSelect value={visibleColumns} options={columns} onChange={onColumnToggle} optionLabel="header" className="w-full sm:w-16rem" display="chip" />;

    return (
        <div className="card">
            <TreeTable value={nodes} header={header} tableStyle={{ minWidth: '50rem' }}>
                <Column key="name" field="name" header="Name" expander />
                {visibleColumns.map((col) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </TreeTable>
        </div>
    );
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Column visibility based on a condition can be implemented with dynamic columns, in this sample a MultiSelect is used to manage the visible columns."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:l,header:m,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0},"name"),n.map(e=>(0,t.jsx)(s.Column,{field:e.field,header:e.header},e.field))]})}),(0,t.jsx)(i.DocSectionCode,{code:p,service:["NodeService"]})]})}function ei(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let o={basic:`
<TreeTable value={nodes} rowClassName={rowClassName} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size" body={sizeTemplate}></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function ConditionalStyleDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    const sizeTemplate = (node) => {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{ fontWeight: fontWeight }}>{size}</span>;
    }

    const rowClassName = (node) => {
        return { 'p-highlight': (node.children && node.children.length === 3) };
    }

    return (
        <div className="card">
            <TreeTable value={nodes} rowClassName={rowClassName} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size" body={sizeTemplate}></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function ConditionalStyleDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    const sizeTemplate = (node: TreeNode) => {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{ fontWeight: fontWeight }}>{size}</span>;
    }

    const rowClassName = (node: TreeNode) => {
        return { 'p-highlight': (node.children && node.children.length === 3) };
    }

    return (
        <div className="card">
            <TreeTable value={nodes} rowClassName={rowClassName} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size" body={sizeTemplate}></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Particular rows and cells can be styled based on conditions. The ",(0,t.jsx)("i",{children:"rowClassName"})," receives a row data as a parameter to return a style class for a row whereas cells are customized using the ",(0,t.jsx)("i",{children:"body"})," template."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,rowClassName:e=>({"p-highlight":e.children&&3===e.children.length}),tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size",body:e=>{let a=e.data.size,l=parseInt(a,10)>75?"bold":"normal";return(0,t.jsx)("span",{style:{fontWeight:l},children:a})}}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})}),(0,t.jsx)(i.DocSectionCode,{code:o,service:["NodeService"]})]})}var es=e.i(10492),ed=e.i(29363);function ec(e){let[a,l]=(0,d.useState)([]),[o,n]=(0,d.useState)(null),[c,m]=(0,d.useState)(null),p=(0,d.useRef)(null),u=(0,d.useRef)(null),h=[{label:"View Key",icon:"pi pi-search",command:()=>{p.current.show({severity:"success",summary:"Node Key",detail:c})}},{label:"Toggle",icon:"pi pi-sort",command:()=>{let e={...o};e[c]?delete e[c]:e[c]=!0,n(e)}}];(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let f={basic:`
<ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)} />
<TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} contextMenuSelectionKey={selectedNodeKey}
    onContextMenuSelectionChange={(event) => setSelectedNodeKey(event.value)} onContextMenu={(event) => cm.current.show(event.originalEvent)} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { TreeTable } from 'primereact/treetable';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function ContextMenuDemo() {
    const [nodes, setNodes] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menu = [
        {
            label: 'View Key',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Node Key', detail: selectedNodeKey });
            }
        },
        {
            label: 'Toggle',
            icon: 'pi pi-sort',
            command: () => {
                let _expandedKeys = { ...expandedKeys };

                if (_expandedKeys[selectedNodeKey]) delete _expandedKeys[selectedNodeKey];
                else _expandedKeys[selectedNodeKey] = true;

                setExpandedKeys(_expandedKeys);
            }
        }
    ];

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <Toast ref={toast} />

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)} />
            <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} contextMenuSelectionKey={selectedNodeKey}
                    onContextMenuSelectionChange={(event) => setSelectedNodeKey(event.value)} onContextMenu={(event) => cm.current.show(event.originalEvent)} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { TreeTable, TreeTableExpandedKeysType } from 'primereact/treetable';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function ContextMenuDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [expandedKeys, setExpandedKeys] = useState<TreeTableExpandedKeysType | null>(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>(null);
    const toast = useRef<Toast>(null);
    const cm = useRef<ContextMenu>(null);
    const menu = [
        {
            label: 'View Key',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Node Key', detail: selectedNodeKey });
            }
        },
        {
            label: 'Toggle',
            icon: 'pi pi-sort',
            command: () => {
                let _expandedKeys = { ...expandedKeys };

                if (_expandedKeys[selectedNodeKey]) delete _expandedKeys[selectedNodeKey];
                else _expandedKeys[selectedNodeKey] = true;

                setExpandedKeys(_expandedKeys);
            }
        }
    ];

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <Toast ref={toast} />

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)} />
            <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} contextMenuSelectionKey={selectedNodeKey}
                    onContextMenuSelectionChange={(event) => setSelectedNodeKey(event.value)} onContextMenu={(event) => cm.current.show(event.originalEvent)} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,data:`
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
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["TreeTable has exclusive integration with ContextMenu using the ",(0,t.jsx)("i",{children:"onContextMenu"})," event to open a menu on right click alont with",(0,t.jsx)("i",{children:"contextMenuSelection"})," and ",(0,t.jsx)("i",{children:"onContextMenuSelectionChange"})," properties to control the selection via the menu."]})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(ed.Toast,{ref:p}),(0,t.jsx)(es.ContextMenu,{model:h,ref:u,onHide:()=>m(null)}),(0,t.jsxs)(Q,{value:a,expandedKeys:o,onToggle:e=>n(e.value),contextMenuSelectionKey:c,onContextMenuSelectionChange:e=>m(e.value),onContextMenu:e=>u.current.show(e.originalEvent),tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})]}),(0,t.jsx)(i.DocSectionCode,{code:f,service:["NodeService"]})]})}var em=e.i(57724);function ep(e){let[a,l]=(0,d.useState)([]),[o,n]=(0,d.useState)(null);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let c={basic:`
<Button onClick={toggleApplications} label="Toggle Applications" />
<TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} className="mt-4" tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { NodeService } from './service/NodeService';

export default function ControlledDemo() {
    const [nodes, setNodes] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState(null);

    const toggleApplications = () => {
        let _expandedKeys = { ...expandedKeys };

        if (_expandedKeys['0']) delete _expandedKeys['0'];
        else _expandedKeys['0'] = true;

        setExpandedKeys(_expandedKeys);
    };

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <Button onClick={toggleApplications} label="Toggle Applications" />
            <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} className="mt-4" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable, TreeTableExpandedKeysType } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function ControlledDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [expandedKeys, setExpandedKeys] = useState<TreeTableExpandedKeysType | null>(null);

    const toggleApplications = () => {
        let _expandedKeys = { ...expandedKeys };

        if (_expandedKeys['0']) delete _expandedKeys['0'];
        else _expandedKeys['0'] = true;

        setExpandedKeys(_expandedKeys);
    };

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <Button onClick={toggleApplications} label="Toggle Applications" />
            <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} className="mt-4" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Expansion state is controlled with ",(0,t.jsx)("i",{children:"expandedKeys"})," and ",(0,t.jsx)("i",{children:"onToggle"})," properties. The ",(0,t.jsx)("i",{children:"expandedKeys"})," should be an object whose keys refer to the node key and values represent the expanded state e.g."," ",(0,t.jsx)("i",{children:"{'0-0': true}"}),"."]})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(em.Button,{onClick:()=>{let e={...o};e["0"]?delete e["0"]:e["0"]=!0,n(e)},label:"Toggle Applications"}),(0,t.jsxs)(Q,{value:a,expandedKeys:o,onToggle:e=>n(e.value),className:"mt-4",tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})]}),(0,t.jsx)(i.DocSectionCode,{code:c,service:["NodeService"]})]})}function eu(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let o={basic:`
<TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
    {columns.map((col, i) => (
        <Column key={col.field} field={col.field} header={col.header} expander={col.expander} />
    ))}
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function DynamicColumnsDemo() {
    const [nodes, setNodes] = useState([]);
    const columns = [
        { field: 'name', header: 'Name', expander: true },
        { field: 'size', header: 'Type' },
        { field: 'type', header: 'Size' }
    ];

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} expander={col.expander} />
                ))}
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

interface ColumnMeta {
    field: string;
    header: string;
}

export default function DynamicColumnsDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const columns: Column[] = [
        { field: 'name', header: 'Name', expander: true },
        { field: 'size', header: 'Type' },
        { field: 'type', header: 'Size' }
    ];

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} expander={col.expander} />
                ))}
            </TreeTable>
        </div>
    );
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Columns can be created programmatically."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(Q,{value:a,tableStyle:{minWidth:"50rem"},children:[{field:"name",header:"Name",expander:!0},{field:"size",header:"Type"},{field:"type",header:"Size"}].map((e,a)=>(0,t.jsx)(s.Column,{field:e.field,header:e.header,expander:e.expander},e.field))})}),(0,t.jsx)(i.DocSectionCode,{code:o,service:["NodeService"]})]})}function eh(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let o=e=>(0,t.jsx)(X.InputText,{type:"text",value:e.rowData[e.field],onChange:t=>{var r;let o;return r=t.target.value,void(((e,t)=>{let a,l=t.split("-");for(;l.length;)a=(a?a.children:e)[parseInt(l[0],10)],l.shift();return a})(o=JSON.parse(JSON.stringify(a)),e.node.key).data[e.field]=r,l(o))},onKeyDown:e=>e.stopPropagation()}),n={basic:`
<TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander style={{ height: '3.5rem' }}></Column>
    <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5rem' }}></Column>
    <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5rem' }}></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NodeService } from './service/NodeService';

export default function EditDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const onEditorValueChange = (options, value) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, options.node.key);

        editedNode.data[options.field] = value;

        setNodes(newNodes);
    };

    const findNodeByKey = (nodes, key) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;

            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    };

    const inputTextEditor = (options) => {
        return <InputText type="text" value={options.rowData[options.field]} onChange={(e) => onEditorValueChange(options, e.target.value)} onKeyDown={(e) => e.stopPropagation()} />;
    };

    const sizeEditor = (options) => {
        return inputTextEditor(options);
    };

    const typeEditor = (options) => {
        return inputTextEditor(options);
    };

    const requiredValidator = (e) => {
        let props = e.columnProps;
        let value = props.node.data[props.field];

        return value && value.length > 0;
    };

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander style={{ height: '3.5rem' }}></Column>
                <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5rem' }}></Column>
                <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5rem' }}></Column>
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column, ColumnEditorOptions, ColumnEvent } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function EditDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const onEditorValueChange = (options: ColumnEditorOptions, value: string) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, options.node.key);

        editedNode.data[options.field] = value;

        setNodes(newNodes);
    };

    const findNodeByKey = (nodes: TreeNode[], key: string) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;

            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    };

    const inputTextEditor = (options: ColumnEditorOptions) => {
        return <InputText type="text" value={options.rowData[options.field]} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onEditorValueChange(options, e.target.value)} onKeyDown={(e) => e.stopPropagation()} />;
    };

    const sizeEditor = (options: ColumnEditorOptions) => {
        return inputTextEditor(options);
    };

    const typeEditor = (options: ColumnEditorOptions) => {
        return inputTextEditor(options);
    };

    const requiredValidator = (e: ColumnEvent) => {
        let props = e.columnProps;
        let value = props.node.data[props.field];

        return value && value.length > 0;
    };

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander style={{ height: '3.5rem' }}></Column>
                <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5rem' }}></Column>
                <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5rem' }}></Column>
            </TreeTable>
        </div>
    );
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Incell editing is enabled by defining input elements with ",(0,t.jsx)("i",{children:"editor"})," property of a Column."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0,style:{height:"3.5rem"}}),(0,t.jsx)(s.Column,{field:"size",header:"Size",editor:e=>o(e),cellEditValidator:e=>{let t=e.columnProps,a=t.node.data[t.field];return a&&a.length>0},style:{height:"3.5rem"}}),(0,t.jsx)(s.Column,{field:"type",header:"Type",editor:e=>o(e),style:{height:"3.5rem"}})]})}),(0,t.jsx)(i.DocSectionCode,{code:n,service:["NodeService"]})]})}var ef=e.i(33616),eb=e.i(41761),ey=e.i(76848);function ex(e){let[a,l]=(0,d.useState)([]),[o,n]=(0,d.useState)(""),[c,m]=(0,d.useState)("lenient"),[p]=(0,d.useState)([{label:"Lenient",value:"lenient"},{label:"Strict",value:"strict"}]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let u=(0,t.jsx)("div",{className:"flex justify-content-end",children:(0,t.jsxs)(ef.IconField,{iconPosition:"left",children:[(0,t.jsx)(eb.InputIcon,{className:"pi pi-search"}),(0,t.jsx)(X.InputText,{type:"search",onInput:e=>n(e.target.value),placeholder:"Global Search"})]})}),h={basic:`
<SelectButton value={filterMode} onChange={(e) => setFilterMode(e.value)} options={filterOptions} />

<TreeTable value={nodes} globalFilter={globalFilter} header={header} filterMode={filterMode} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
    <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
    <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { SelectButton } from 'primereact/selectbutton';
import { NodeService } from './service/NodeService';

export default function FilterDemo() {
    const [nodes, setNodes] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [filterMode, setFilterMode] = useState('lenient');
    const [filterOptions] = useState([
        { label: 'Lenient', value: 'lenient' },
        { label: 'Strict', value: 'strict' }
    ]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const getHeader = () => {
        return (
            <div className="flex justify-content-end">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                </IconField>
            </div>
        );
    };

    let header = getHeader();

    return (
        <div className="card">
            <div className="flex justify-content-center mb-4">
                <SelectButton value={filterMode} onChange={(e) => setFilterMode(e.value)} options={filterOptions} />
            </div>
            <TreeTable value={nodes} globalFilter={globalFilter} header={header} filterMode={filterMode} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
            </TreeTable>
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { SelectButton } from 'primereact/selectbutton';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

interface FilterModeOption {
    label: string;
    value: string;
}

export default function FilterDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const [filterMode, setFilterMode] = useState<'lenient' | 'strict'>('lenient');
    const [filterOptions] = useState<FilterModeOption[]>([
        { label: 'Lenient', value: 'lenient' },
        { label: 'Strict', value: 'strict' }
    ]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const getHeader = () => {
        return (
            <div className="flex justify-content-end">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                </IconField>
            </div>
        );
    };

    let header = getHeader();

    return (
        <div className="card">
            <div className="flex justify-content-center mb-4">
                <SelectButton value={filterMode} onChange={(e) => setFilterMode(e.value)} options={filterOptions} />
            </div>
            <TreeTable value={nodes} globalFilter={globalFilter} header={header} filterMode={filterMode} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
            </TreeTable>
        </div>
    )
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Filtering is enabled by adding the ",(0,t.jsx)("i",{children:"filter"})," property to a Column. The ",(0,t.jsx)("i",{children:"filterMode"})," specifies the filtering strategy, in ",(0,t.jsx)("i",{children:"lenient"})," mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in ",(0,t.jsx)("i",{children:"strict"})," mode when the query matches a node, filtering continues on all descendants. A general filled called ",(0,t.jsx)("i",{children:"globalFilter"})," is also provided to search all columns that support filtering."]})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("div",{className:"flex justify-content-center mb-4",children:(0,t.jsx)(ey.SelectButton,{value:c,onChange:e=>m(e.value),options:p})}),(0,t.jsxs)(Q,{value:a,globalFilter:o,header:u,filterMode:c,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0,filter:!0,filterPlaceholder:"Filter by name"}),(0,t.jsx)(s.Column,{field:"size",header:"Size",filter:!0,filterPlaceholder:"Filter by size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type",filter:!0,filterPlaceholder:"Filter by type"})]})]}),(0,t.jsx)(i.DocSectionCode,{code:h,service:["NodeService"]})]})}function eS(e){let a={basic:`
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function eg(e){let[a,l]=(0,d.useState)([]),[o,n]=(0,d.useState)(0),[c,m]=(0,d.useState)(10),[p,u]=(0,d.useState)(0),[h,f]=(0,d.useState)(!0);(0,d.useEffect)(()=>{setTimeout(()=>{f(!1),l(b(o,c)),u(1e3)},500)},[]);let b=(e,t)=>{let a=[];for(let l=0;l<t;l++){let t={key:e+l,data:{name:"Item "+(e+l),size:Math.floor(1e3*Math.random())+1+"kb",type:"Type "+(e+l)},leaf:!1};a.push(t)}return a},y={basic:`
<TreeTable value={nodes} lazy paginator totalRecords={totalRecords}
        first={first} rows={rows} onPage={onPage} onExpand={onExpand} loading={loading} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';

export default function LazyLoadDemo() {
    const [nodes, setNodes] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [totalRecords, setTotalRecords] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setNodes(loadNodes(first, rows));
            setTotalRecords(1000);
        }, 500);
    }, []);

    const loadNodes = (first, rows) => {
        let nodes = [];

        for (let i = 0; i < rows; i++) {
            let node = {
                key: first + i,
                data: {
                    name: 'Item ' + (first + i),
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + (first + i)
                },
                leaf: false
            };

            nodes.push(node);
        }

        return nodes;
    };

    const onExpand = (event) => {
        if (!event.node.children) {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
                let lazyNode = { ...event.node };

                lazyNode.children = [
                    {
                        data: {
                            name: lazyNode.data.name + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        }
                    },
                    {
                        data: {
                            name: lazyNode.data.name + ' - 1',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        }
                    }
                ];

                let _nodes = nodes.map((node) => {
                    if (node.key === event.node.key) {
                        node = lazyNode;
                    }

                    return node;
                });

                setLoading(false);
                setNodes(_nodes);
            }, 250);
        }
    };

    const onPage = (event) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            setFirst(event.first);
            setRows(event.rows);
            setNodes(loadNodes(event.first, event.rows));
            setLoading(false);
        }, 500);
    };

    return (
        <div className="card">
            <TreeTable value={nodes} lazy paginator totalRecords={totalRecords}
                first={first} rows={rows} onPage={onPage} onExpand={onExpand} loading={loading} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable, TreeTableEvent, TreeTablePageEvent } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';

export default function LazyLoadDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);
    const [totalRecords, setTotalRecords] = useState<number>(0);
    const [loading, setLoading] = useState<loading>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setNodes(loadNodes(first, rows));
            setTotalRecords(1000);
        }, 500);
    }, []);

    const loadNodes = (first: number, rows: number) => {
        let nodes = [];

        for (let i = 0; i < rows; i++) {
            let node = {
                key: first + i,
                data: {
                    name: 'Item ' + (first + i),
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + (first + i)
                },
                leaf: false
            };

            nodes.push(node);
        }

        return nodes;
    };

    const onExpand = (event: TreeTableEvent) => {
        if (!event.node.children) {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
                let lazyNode = { ...event.node };

                lazyNode.children = [
                    {
                        data: {
                            name: lazyNode.data.name + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        }
                    },
                    {
                        data: {
                            name: lazyNode.data.name + ' - 1',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        }
                    }
                ];

                let _nodes = nodes.map((node) => {
                    if (node.key === event.node.key) {
                        node = lazyNode;
                    }

                    return node;
                });

                setLoading(false);
                setNodes(_nodes);
            }, 250);
        }
    };

    const onPage = (event: TreeTablePageEvent) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            setFirst(event.first);
            setRows(event.rows);
            setNodes(loadNodes(event.first, event.rows));
            setLoading(false);
        }, 500);
    };

    return (
        <div className="card">
            <TreeTable value={nodes} lazy paginator totalRecords={totalRecords}
                first={first} rows={rows} onPage={onPage} onExpand={onExpand} loading={loading} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime ",(0,t.jsx)("i",{children:"paging"}),", ",(0,t.jsx)("i",{children:"sorting"})," and ",(0,t.jsx)("i",{children:"filtering"})," occurs. Sample below imitates lazy loading data from a remote datasource using an in-memory list and timeouts to mimic network connection."]}),(0,t.jsxs)("p",{children:["Enabling the ",(0,t.jsx)("i",{children:"lazy"})," property and assigning the logical number of rows to ",(0,t.jsx)("i",{children:"totalRecords"})," by doing a projection query are the key elements of the implementation so that paginator displays the UI assuming there are actually records of totalRecords size although in reality they are not present on page, only the records that are displayed on the current page exist."]}),(0,t.jsxs)("p",{children:["In addition, only the root elements should be loaded, children can be loaded on demand using ",(0,t.jsx)("i",{children:"onExpand"})," callback."]})]}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,lazy:!0,paginator:!0,totalRecords:p,first:o,rows:c,onPage:e=>{f(!0),setTimeout(()=>{n(e.first),m(e.rows),l(b(e.first,e.rows)),f(!1)},500)},onExpand:e=>{e.node.children||(f(!0),setTimeout(()=>{f(!1);let t={...e.node};t.children=[{data:{name:t.data.name+" - 0",size:Math.floor(1e3*Math.random())+1+"kb",type:"File"}},{data:{name:t.data.name+" - 1",size:Math.floor(1e3*Math.random())+1+"kb",type:"File"}}];let r=a.map(a=>(a.key===e.node.key&&(a=t),a));f(!1),l(r)},250))},loading:h,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})}),(0,t.jsx)(i.DocSectionCode,{code:y})]})}function eC(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{let e=[];for(let t=0;t<50;t++){let a={key:t,data:{name:"Item "+t,size:Math.floor(1e3*Math.random())+1+"kb",type:"Type "+t},children:[{key:t+" - 0",data:{name:"Item "+t+" - 0",size:Math.floor(1e3*Math.random())+1+"kb",type:"Type "+t}}]};e.push(a)}l(e)},[]);let o={basic:`
<TreeTable value={nodes} paginator rows={5} rowsPerPageOptions={[5, 10, 25]} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';

export default function PaginatorBasicDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        let files = [];

        for (let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        setNodes(files);
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} paginator rows={5} rowsPerPageOptions={[5, 10, 25]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';

export default function PaginatorBasicDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        let files = [];

        for (let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        setNodes(files);
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} paginator rows={5} rowsPerPageOptions={[5, 10, 25]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Pagination is enabled by adding ",(0,t.jsx)("i",{children:"paginator"})," property and defining ",(0,t.jsx)("i",{children:"rows"})," per page."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,paginator:!0,rows:5,rowsPerPageOptions:[5,10,25],tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})}),(0,t.jsx)(i.DocSectionCode,{code:o})]})}function eT(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{let e=[];for(let t=0;t<50;t++){let a={key:t,data:{name:"Item "+t,size:Math.floor(1e3*Math.random())+1+"kb",type:"Type "+t},children:[{key:t+" - 0",data:{name:"Item "+t+" - 0",size:Math.floor(1e3*Math.random())+1+"kb",type:"Type "+t}}]};e.push(a)}l(e)},[]);let n=(0,t.jsx)(em.Button,{type:"button",icon:"pi pi-refresh",text:!0}),c=(0,t.jsx)(em.Button,{type:"button",icon:"pi pi-download",text:!0}),m={basic:`
<TreeTable value={nodes} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';

export default function PaginatorTemplateDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        let files = [];

        for (let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        setNodes(files);
    }, []);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    return (
        <div className="card">
            <TreeTable value={nodes} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                    paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { TreeTable } from 'primereact/treetable';
import { TreeNode } from 'primereact/treenode';
import { Column } from 'primereact/column';

export default function PaginatorTemplateDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        let files = [];

        for (let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        setNodes(files);
    }, []);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    return (
        <div className="card">
            <TreeTable value={nodes} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                    paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Paginator UI is customized using the ",(0,t.jsx)("i",{children:"paginatorTemplate"})," property. Each element can also be customized further with your own UI to replace the default one, refer to the ",(0,t.jsx)(o.default,{href:"/paginator",children:"Paginator"})," component for more information about the advanced customization options."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,paginator:!0,rows:5,rowsPerPageOptions:[5,10,25,50],paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"{first} to {last} of {totalRecords}",paginatorLeft:n,paginatorRight:c,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})}),(0,t.jsx)(i.DocSectionCode,{code:m})]})}let ev=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"treetable"})})]});function eN(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let o={basic:`
<TreeTable value={nodes} reorderableColumns tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function ReorderDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} reorderableColumns tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function ReorderDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} reorderableColumns tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Order of the columns can be changed using drag and drop when ",(0,t.jsx)("i",{children:"reorderableColumns"})," is present."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,reorderableColumns:!0,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})}),(0,t.jsx)(i.DocSectionCode,{code:o,service:["NodeService"]})]})}function ek(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let o={basic:`
<TreeTable value={nodes} resizableColumns showGridlines columnResizeMode="expand" tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function ExpandModeDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} resizableColumns showGridlines columnResizeMode="expand" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function ExpandModeDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} resizableColumns showGridlines columnResizeMode="expand" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Setting ",(0,t.jsx)("i",{children:"columnResizeMode"})," as ",(0,t.jsx)("i",{children:"expand"})," changes the table width as well."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,resizableColumns:!0,showGridlines:!0,columnResizeMode:"expand",tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})}),(0,t.jsx)(i.DocSectionCode,{code:o,service:["NodeService"]})]})}function ej(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let o={basic:`
<TreeTable value={nodes} resizableColumns showGridlines tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function FitModeDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} resizableColumns showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function FitModeDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} resizableColumns showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Columns can be resized with drag and drop when ",(0,t.jsx)("i",{children:"resizableColumns"})," is enabled. Default resize mode is ",(0,t.jsx)("i",{children:"fit"}),"that does not change the overall table width."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,resizableColumns:!0,showGridlines:!0,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})}),(0,t.jsx)(i.DocSectionCode,{code:o,service:["NodeService"]})]})}function ez(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let o={basic:`
<TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
    <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function FrozenColumnsDemo() {
    const [nodes, setNodes] = useState([]);
    
    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
                <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
                <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
                <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
                <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
                <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
                <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function FrozenColumnsDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
                <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
                <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
                <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
                <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
                <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
                <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
            </TreeTable>
        </div>
    );
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A column can be fixed during horizontal scrolling by enabling the ",(0,t.jsx)("i",{children:"frozen"})," property on a Column. The location is defined with the ",(0,t.jsx)("i",{children:"alignFrozen"})," that can be ",(0,t.jsx)("i",{children:"left"})," or ",(0,t.jsx)("i",{children:"right"}),"."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,scrollable:!0,frozenWidth:"200px",scrollHeight:"250px",children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0,frozen:!0,style:{width:"250px",height:"57px"}}),(0,t.jsx)(s.Column,{field:"size",header:"Size",style:{width:"250px",height:"57px"},columnKey:"size_0"}),(0,t.jsx)(s.Column,{field:"type",header:"Type",style:{width:"250px",height:"57px"},columnKey:"type_0"}),(0,t.jsx)(s.Column,{field:"size",header:"Size",style:{width:"250px",height:"57px"},columnKey:"size_1"}),(0,t.jsx)(s.Column,{field:"type",header:"Type",style:{width:"250px",height:"57px"},columnKey:"type_1"}),(0,t.jsx)(s.Column,{field:"size",header:"Size",style:{width:"250px",height:"57px"},columnKey:"size_2"}),(0,t.jsx)(s.Column,{field:"type",header:"Type",style:{width:"250px",height:"57px"},columnKey:"type_2"})]})}),(0,t.jsx)(i.DocSectionCode,{code:o,service:["NodeService"]})]})}function ew(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let o={basic:`
<TreeTable value={nodes} scrollable scrollHeight="200px">
    <Column field="name" header="Name" expander style={{ width: '250px' }}></Column>
    <Column field="size" header="Size" style={{ width: '250px' }}></Column>
    <Column field="type" header="Type 2" style={{ width: '250px' }}></Column>
    <Column field="size" header="Size 2" style={{ width: '250px' }}></Column>
    <Column field="type" header="Type 3" style={{ width: '250px' }}></Column>
    <Column field="size" header="Size 3" style={{ width: '250px' }}></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function HorizontalScrollDemo() {
    const [nodes, setNodes] = useState([]);
    
    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} scrollable scrollHeight="200px">
                <Column field="name" header="Name" expander style={{ width: '250px' }}></Column>
                <Column field="size" header="Size" style={{ width: '250px' }}></Column>
                <Column field="type" header="Type 2" style={{ width: '250px' }}></Column>
                <Column field="size" header="Size 2" style={{ width: '250px' }}></Column>
                <Column field="type" header="Type 3" style={{ width: '250px' }}></Column>
                <Column field="size" header="Size 3" style={{ width: '250px' }}></Column>
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function HorizontalScrollDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    
    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} scrollable scrollHeight="200px">
                <Column field="name" header="Name" expander style={{ width: '250px' }}></Column>
                <Column field="size" header="Size" style={{ width: '250px' }}></Column>
                <Column field="type" header="Type 2" style={{ width: '250px' }}></Column>
                <Column field="size" header="Size 2" style={{ width: '250px' }}></Column>
                <Column field="type" header="Type 3" style={{ width: '250px' }}></Column>
                <Column field="size" header="Size 3" style={{ width: '250px' }}></Column>
            </TreeTable>
        </div>
    );
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Horizontal scrolling is enabled when the total width of columns exceeds table width."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,scrollable:!0,scrollHeight:"200px",children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0,style:{width:"250px"}}),(0,t.jsx)(s.Column,{field:"size",header:"Size",style:{width:"250px"}}),(0,t.jsx)(s.Column,{field:"type",header:"Type 2",style:{width:"250px"}}),(0,t.jsx)(s.Column,{field:"size",header:"Size 2",style:{width:"250px"}}),(0,t.jsx)(s.Column,{field:"type",header:"Type 3",style:{width:"250px"}}),(0,t.jsx)(s.Column,{field:"size",header:"Size 3",style:{width:"250px"}})]})}),(0,t.jsx)(i.DocSectionCode,{code:o,service:["NodeService"]})]})}function eP(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let o={basic:`
<TreeTable value={nodes} scrollable scrollHeight="200px">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function VerticalScrollDemo() {
    const [nodes, setNodes] = useState([]);
    
    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} scrollable scrollHeight="200px">
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function VerticalScrollDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    
    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} scrollable scrollHeight="200px">
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Adding ",(0,t.jsx)("i",{children:"scrollable"})," property along with a ",(0,t.jsx)("i",{children:"scrollHeight"})," for the data viewport enables vertical scrolling with fixed headers."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,scrollable:!0,scrollHeight:"200px",children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})}),(0,t.jsx)(i.DocSectionCode,{code:o,service:["NodeService"]})]})}function eY(e){let[a,l]=(0,d.useState)([]),[o,n]=(0,d.useState)(null);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let c={basic:`
{
    '0-0': {
        partialChecked: false,
        checked: true
    }
}
        `},m={basic:`
<TreeTable value={nodes} selectionMode="checkbox" selectionKeys={selectedNodeKeys}
        onSelectionChange={(e) => setSelectedNodeKeys(e.value)} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function CheckboxRowSelectionDemo() {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} selectionMode="checkbox" selectionKeys={selectedNodeKeys} onSelectionChange={(e) => setSelectedNodeKeys(e.value)} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable, TreeTableSelectionKeysType, TreeTableSelectionEvent } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function CheckboxRowSelectionDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState<TreeTableSelectionKeysType | null>(null);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} selectionMode="checkbox" selectionKeys={selectedNodeKeys} onSelectionChange={(e: TreeTableSelectionEvent) => setSelectedNodeKeys(e.value)} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Selection of multiple nodes via checkboxes is enabled by configuring ",(0,t.jsx)("i",{children:"selectionMode"})," as ",(0,t.jsx)("i",{children:"checkbox"}),"."]}),(0,t.jsxs)("p",{children:["In checkbox selection mode, value binding should be a key-value pair where key is the node key and value is an object that has ",(0,t.jsx)("i",{children:"checked"})," and ",(0,t.jsx)("i",{children:"partialChecked"})," properties to represent the checked state of a node."]})]}),(0,t.jsx)(i.DocSectionCode,{code:c,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,selectionMode:"checkbox",selectionKeys:o,onSelectionChange:e=>n(e.value),tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})}),(0,t.jsx)(i.DocSectionCode,{code:m,service:["NodeService"]})]})}function eE(e){let[a,l]=(0,d.useState)([]),[o,n]=(0,d.useState)(null),c=(0,d.useRef)(null);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let m={basic:`
<TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey}
        onSelectionChange={(e) => setSelectedNodeKey(e.value)} metaKeySelection={false}
        onSelect={onSelect} onUnselect={onUnselect} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useRef, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function SingleRowSelectionDemo() {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const toast = useRef(null);

    const onSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    };

    const onUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Node Unselected', detail: event.node.data.name });
    };

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <Toast ref={toast} />
            <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={(e) => setSelectedNodeKey(e.value)} metaKeySelection={false} onSelect={onSelect} onUnselect={onUnselect} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,typescript:`
import React, { useState, useRef, useEffect } from 'react';
import { TreeTable, TreeTableSelectionEvent } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { Toast } from 'primereact/toast';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function SingleRowSelectionDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string |\xa0null>(null);
    const toast = useRef(null);

    const onSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    };

    const onUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Node Unselected', detail: event.node.data.name });
    };

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <Toast ref={toast} />
            <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={(e: TreeTableSelectionEvent) => setSelectedNodeKey(e.value)} metaKeySelection={false} onSelect={onSelect} onUnselect={onUnselect} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["TreeTable provides ",(0,t.jsx)("i",{children:"onSelect"})," and ",(0,t.jsx)("i",{children:"onUnselect"})," events to listen selection events."]})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(ed.Toast,{ref:c}),(0,t.jsxs)(Q,{value:a,selectionMode:"single",selectionKeys:o,onSelectionChange:e=>n(e.value),metaKeySelection:!1,onSelect:e=>{c.current.show({severity:"info",summary:"Node Selected",detail:e.node.data.name})},onUnselect:e=>{c.current.show({severity:"warn",summary:"Node Unselected",detail:e.node.data.name})},tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})]}),(0,t.jsx)(i.DocSectionCode,{code:m,service:["NodeService"]})]})}var eK=e.i(30164);function eM(e){let[a,l]=(0,d.useState)([]),[o,n]=(0,d.useState)(null),[c,m]=(0,d.useState)(!0);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let p={basic:`
{
    '0-0': true,
    '0-1-0': true
}
        `},u={basic:`
<InputSwitch checked={metaKey} onChange={(e) => setMetaKey(e.value)} />

<TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys}
        onSelectionChange={(e) => setSelectedNodeKeys(e.value)} metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { NodeService } from './service/NodeService';

export default function MultipleRowsSelectionDemo() {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    const [metaKey, setMetaKey] = useState(true);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys} onSelectionChange={(e) => setSelectedNodeKeys(e.value)} metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable, TreeTableSelectionKeysType, TreeTableSelectionEvent } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { NodeService } from './service/NodeService';

export default function MultipleRowsSelectionDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState<TreeTableSelectionKeysType | null>(null);
    const [metaKey, setMetaKey] = useState<boolean>(true);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e: InputSwitchChangeEvent) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys} onSelectionChange={(e: TreeTableSelectionEvent) => setSelectedNodeKeys(e.value)} metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["More than one node is selectable by setting ",(0,t.jsx)("i",{children:"selectionMode"})," to ",(0,t.jsx)("i",{children:"multiple"}),". By default in multiple selection mode, metaKey press (e.g. ",(0,t.jsx)("i",{children:"⌘"}),") is necessary to add to existing selections however this can be configured with disabling the ",(0,t.jsx)("i",{children:"metaKeySelection"})," property. Note that in touch enabled devices, TreeTable always ignores metaKey."]}),(0,t.jsx)("p",{children:"In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection."})]}),(0,t.jsx)(i.DocSectionCode,{code:p,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"flex justify-content-center align-items-center mb-4 gap-2",children:[(0,t.jsx)(eK.InputSwitch,{inputId:"input-metakey",checked:c,onChange:e=>m(e.value)}),(0,t.jsx)("label",{htmlFor:"input-metakey",children:"MetaKey"})]}),(0,t.jsxs)(Q,{value:a,selectionMode:"multiple",selectionKeys:o,onSelectionChange:e=>n(e.value),metaKeySelection:c,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})]}),(0,t.jsx)(i.DocSectionCode,{code:u,service:["NodeService"]})]})}function eR(e){let[a,l]=(0,d.useState)([]),[o,n]=(0,d.useState)(null),[c,m]=(0,d.useState)(!0);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let p={basic:`
<InputSwitch checked={metaKey} onChange={(e) => setMetaKey(e.value)} />

<TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey}
        onSelectionChange={(e) => setSelectedNodeKey(e.value)} metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { NodeService } from './service/NodeService';

export default function SingleRowSelectionDemo() {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const [metaKey, setMetaKey] = useState(true);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={(e) => setSelectedNodeKey(e.value)} metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable, TreeTableSelectionEvent } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { NodeService } from './service/NodeService';

export default function SingleRowSelectionDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>(null);
    const [metaKey, setMetaKey] = useState<boolean>(true);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e: InputSwitchChangeEvent) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={(e: TreeTableSelectionEvent) => setSelectedNodeKey(e.value)} metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Single node selection is configured by setting ",(0,t.jsx)("i",{children:"selectionMode"})," as ",(0,t.jsx)("i",{children:"single"})," along with ",(0,t.jsx)("i",{children:"selectionKeys"})," and ",(0,t.jsx)("i",{children:"onSelectionChange"})," properties to manage the selection value binding."]}),(0,t.jsxs)("p",{children:["By default, metaKey press (e.g. ",(0,t.jsx)("i",{children:"⌘"}),") is necessary to unselect a node however this can be configured with disabling the ",(0,t.jsx)("i",{children:"metaKeySelection"})," property. In touch enabled devices this option has no effect and behavior is same as setting it to false."]})]}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"flex justify-content-center align-items-center mb-4 gap-2",children:[(0,t.jsx)(eK.InputSwitch,{inputId:"input-metakey",checked:c,onChange:e=>m(e.value)}),(0,t.jsx)("label",{htmlFor:"input-metakey",children:"MetaKey"})]}),(0,t.jsxs)(Q,{value:a,selectionMode:"single",selectionKeys:o,onSelectionChange:e=>n(e.value),metaKeySelection:c,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"})]})]}),(0,t.jsx)(i.DocSectionCode,{code:p,service:["NodeService"]})]})}function eD(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>{l(e)})},[]);let o={basic:`
<TreeTable value={nodes} sortMode="multiple" tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander sortable></Column>
    <Column field="size" header="Size" sortable></Column>
    <Column field="type" header="Type" sortable></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function MultipleColumnsDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => {
            setNodes(data);
        });
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} sortMode="multiple" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander sortable></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function MultipleColumnsDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => {
            setNodes(data);
        });
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} sortMode="multiple" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander sortable></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>
        </div>
    );
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Multiple columns can be sorted by defining ",(0,t.jsx)("i",{children:"sortMode"})," as ",(0,t.jsx)("i",{children:"multiple"}),". This mode requires metaKey (e.g. ",(0,t.jsx)("i",{children:"⌘"}),") to be pressed when clicking a header."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,sortMode:"multiple",tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0,sortable:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size",sortable:!0}),(0,t.jsx)(s.Column,{field:"type",header:"Type",sortable:!0})]})}),(0,t.jsx)(i.DocSectionCode,{code:o,service:["NodeService"]})]})}function eF(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>{l(e)})},[]);let o={basic:`
<TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander sortable></Column>
    <Column field="size" header="Size" sortable></Column>
    <Column field="type" header="Type" sortable></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function SingleColumnDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => {
            setNodes(data);
        });
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander sortable></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function SingleColumnDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => {
            setNodes(data);
        });
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander sortable></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>
        </div>
    );
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Sorting on a column is enabled by adding the ",(0,t.jsx)("i",{children:"sortable"})," property."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0,sortable:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size",sortable:!0}),(0,t.jsx)(s.Column,{field:"type",header:"Type",sortable:!0})]})}),(0,t.jsx)(i.DocSectionCode,{code:o,service:["NodeService"]})]})}function eI(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let o=(0,t.jsx)("div",{className:"text-xl font-bold",children:"File Viewer"}),n=(0,t.jsx)("div",{className:"flex justify-content-start",children:(0,t.jsx)(em.Button,{icon:"pi pi-refresh",label:"Reload",severity:"warning"})}),c={basic:`
<TreeTable value={nodes} header={header} footer={footer} togglerTemplate={togglerTemplate} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
    <Column body={actionTemplate} headerClassName="w-10rem" />
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { NodeService } from './service/NodeService';

export default function TemplateDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const actionTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button type="button" icon="pi pi-search" rounded></Button>
                <Button type="button" icon="pi pi-pencil" severity="success" rounded></Button>
            </div>
        );
    };

    const togglerTemplate = (node, options) => {
        if (!node) {
            return;
        }

        const expanded = options.expanded;
        const iconClassName = classNames('p-treetable-toggler-icon pi pi-fw', {
            'pi-caret-right': !expanded,
            'pi-caret-down': expanded
        });

        return (
            <button type="button" className="p-treetable-toggler p-link" style={options.buttonStyle} tabIndex={-1} onClick={options.onClick}>
                <span className={iconClassName} aria-hidden="true"></span>
            </button>
        );
    };

    const header = <div className="text-xl font-bold">File Viewer</div>;
    const footer = (
        <div className="flex justify-content-start">
            <Button icon="pi pi-refresh" label="Reload" severity="warning" />
        </div>
    );

    return (
        <div className="card">
            <TreeTable value={nodes} header={header} footer={footer} togglerTemplate={togglerTemplate} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
                <Column body={actionTemplate} headerClassName="w-10rem" />
            </TreeTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable, TreeTableTogglerTemplateOptions } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function TemplateDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const actionTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button type="button" icon="pi pi-search" rounded></Button>
                <Button type="button" icon="pi pi-pencil" severity="success" rounded></Button>
            </div>
        );
    };

    const togglerTemplate = (node: TreeNode, options: TreeTableTogglerTemplateOptions) => {
        if (!node) {
            return;
        }

        const expanded = options.expanded;
        const iconClassName = classNames('p-treetable-toggler-icon pi pi-fw', {
            'pi-caret-right': !expanded,
            'pi-caret-down': expanded
        });

        return (
            <button type="button" className="p-treetable-toggler p-link" style={options.buttonStyle} tabIndex={-1} onClick={options.onClick}>
                <span className={iconClassName} aria-hidden="true"></span>
            </button>
        );
    };

    const header = <div className="text-xl font-bold">File Viewer</div>;
    const footer = (
        <div className="flex justify-content-start">
            <Button icon="pi pi-refresh" label="Reload" severity="warning" />
        </div>
    );

    return (
        <div className="card">
            <TreeTable value={nodes} header={header} footer={footer} togglerTemplate={togglerTemplate} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
                <Column body={actionTemplate} headerClassName="w-10rem" />
            </TreeTable>
        </div>
    );
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Custom content at ",(0,t.jsx)("i",{children:"header"}),", ",(0,t.jsx)("i",{children:"body"})," and ",(0,t.jsx)("i",{children:"footer"})," sections are supported via templating. The toggler can be customized with the ",(0,t.jsx)("i",{children:"togglerTemplate"})," property."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,header:o,footer:n,togglerTemplate:(e,a)=>{if(!e)return;let l=a.expanded,r=(0,w.classNames)("p-treetable-toggler-icon pi pi-fw",{"pi-caret-right":!l,"pi-caret-down":l});return(0,t.jsx)("button",{type:"button",className:"p-treetable-toggler p-link",style:a.buttonStyle,tabIndex:-1,onClick:a.onClick,children:(0,t.jsx)("span",{className:r,"aria-hidden":"true"})})},tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size"}),(0,t.jsx)(s.Column,{field:"type",header:"Type"}),(0,t.jsx)(s.Column,{body:()=>(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)(em.Button,{type:"button",icon:"pi pi-search",rounded:!0}),(0,t.jsx)(em.Button,{type:"button",icon:"pi pi-pencil",severity:"success",rounded:!0})]}),headerClassName:"w-10rem"})]})}),(0,t.jsx)(i.DocSectionCode,{code:c,service:["NodeService"]})]})}function e$(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treetable"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treetable-header"}),(0,t.jsx)("td",{children:"Header section."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treetable-footer"}),(0,t.jsx)("td",{children:"Footer section."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-column-title"}),(0,t.jsx)("td",{children:"Title of a column."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-sortable-column"}),(0,t.jsx)("td",{children:"Sortable column header."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treetable-scrollable-header"}),(0,t.jsx)("td",{children:"Container of header in a scrollable table."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treetable-scrollable-body"}),(0,t.jsx)("td",{children:"Container of body in a scrollable table."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treetable-scrollable-footer"}),(0,t.jsx)("td",{children:"Container of footer in a scrollable table."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treetable-emptymessage"}),(0,t.jsx)("td",{children:"Cell containing the empty message."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treetable-toggler"}),(0,t.jsx)("td",{children:"Toggler icon."})]})]})]})})]})}function eA(e){let a={basic:`
const Tailwind = {
    treetable: {
        root: ({ props }) => ({
            className: classNames('relative', {
                'flex flex-col h-full': props.scrollHeight
            })
        }),
        loadingoverlay: {
            className: classNames(
                'fixed w-full h-full t-0 l-0 bg-gray-100/40',
                'transition duration-200',
                'absolute flex items-center justify-center z-2',
                'dark:bg-gray-950/40' // Dark Mode
            )
        },
        loadingicon: 'w-8 h-8',
        header: {
            className: classNames(
                'bg-slate-50 text-slate-700 border border-x-0 border-t-0 border-gray-300 p-4 font-bold',
                'dark:bg-gray-900 dark:text-white/70 dark:border-blue-900/40' // Dark Mode
            )
        },
        scrollablewrapper: ({ props }) => ({
            className: classNames({
                'relative overflow-auto': props.scrollable,
                'overflow-x-auto': props.resizableColumns
            })
        }),
        wrapper: ({ props }) => ({
            className: classNames({
                'relative overflow-auto': props.scrollable,
                'overflow-x-auto': props.resizableColumns
            })
        }),
        footer: {
            className: classNames(
                'bg-slate-50 text-slate-700 border border-x-0 border-t-0 border-gray-300 p-4 font-bold',
                'dark:bg-gray-900 dark:text-white/70 dark:border-blue-900/40' // Dark Mode
            )
        },
        table: 'border-collapse table-fixed w-full',
        thead: ({ props }) => ({
            className: classNames({
                'block sticky top-0 z-[1]': props.scrollable
            })
        }),
        tbody: ({ props }) => ({
            className: classNames({
                block: props.scrollable
            })
        }),
        tfoot: ({ props }) => ({
            className: classNames({
                block: props.scrollable
            })
        }),
        headerrow: ({ props }) => ({
            className: classNames({
                'flex flex-nowrap w-full': props.scrollable
            })
        }),
        row: ({ context }) => ({
            className: classNames(
                'transition duration-200',
                'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]', // Focus
                context.selected ? 'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80' : 'bg-white text-gray-600 dark:bg-gray-900 dark:text-white/80',
                {
                    'hover:bg-gray-300/20 hover:text-gray-600 dark:hover:bg-gray-950': context.selectable && !context.selected, // Hover
                    'flex flex-nowrap w-full': context.scrollable
                }
            )
        }),
        column: {
            headercell: ({ context }) => ({
                className: classNames(
                    'text-left border-gray-300 border font-bold',
                    'transition duration-200 p-4',
                    'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', //Dark Mode
                    {
                        'bg-blue-50 text-blue-700': context.sorted,
                        'bg-slate-50': !context.sorted,
                        'flex flex-1 items-center': context.scrollable,
                        'flex-initial shrink-0': context.scrollable && !context.frozen,
                        'sticky z-[1]': context.scrollable && context.frozen,
                        'border-x-0 border-l-0 border-t-0': !context.showGridlines,
                        'overflow-hidden relative bg-clip-padding': !context.frozen
                    }
                )
            }),
            bodycell: ({ context }) => ({
                className: classNames(
                    'text-left border-gray-300 border',
                    'transition duration-200 p-4',
                    'dark:border-blue-900/40', //Dark Mode
                    {
                        'cursor-pointer': context.selectable,
                        'flex flex-1 items-center': context.scrollable,
                        'flex-initial shrink-0': context.scrollable && !context.frozen,
                        sticky: context.scrollable && context.frozen,
                        'border-x-0 border-l-0': !context.showGridlines
                    }
                )
            }),
            rowtoggler: ({ context }) => ({
                className: classNames(
                    'relative inline-flex items-center justify-center align-center cursor-pointer select-none overflow-hidden bg-transparent',
                    'w-8 h-8 border-0 rounded mr-0.5',
                    {
                        'text-blue-700': context.selected,
                        'text-gray-500': !context.selected
                    },
                    'dark:text-white/70' //Dark Mode
                )
            }),
            sorticon: ({ context }) => ({
                className: classNames('ml-2', {
                    'text-blue-700 dark:text-white/80': context.sorted,
                    'text-slate-700 dark:text-white/70': !context.sorted
                })
            }),
            sortbadge: {
                className: classNames(
                    'h-[1.143rem] min-w-[1.143rem] leading-[1.143rem] text-blue-700 bg-blue-50 ml-2 rounded-[50%]',
                    'dark:text-white/80 dark:bg-blue-500/40' // Dark Mode
                )
            },
            columnresizer: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',
            checkboxwrapper: {
                className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6 mr-2')
            },
            checkbox: ({ context }) => ({
                className: classNames(
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    {
                        'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400': context.checked,
                        'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900': !context.checked
                    },
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled
                    }
                )
            }),
            checkboxicon: ({ context }) => ({
                className: classNames('w-4 h-4 transition-all duration-200 text-base dark:text-gray-900', {
                    'text-white': context.checked
                })
            })
        },
        resizehelper: 'absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300'
    }
}
        `},l={javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function UnstyledDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => {
            setNodes(data);
        });
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander sortable></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(o.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(i.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(i.DocSectionCode,{code:l,embedded:!0,service:["NodeService"]})]})})}function eO(e){let[a,l]=(0,d.useState)([]);(0,d.useEffect)(()=>{ee.NodeService.getTreeTableNodes().then(e=>l(e))},[]);let o={basic:`
<TreeTable value={nodes} stateKey={'tree-table-state-demo-session'} stateStorage={'session'}>
    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
    <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
    <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
</TreeTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function StatefulDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }} stateKey={'tree-table-state-demo-session'} stateStorage={'session'}
                    paginator rows={5} rowsPerPageOptions={[5, 10, 25]}>
                <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
            </TreeTable>
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function StatefulDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);



    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }} stateKey={'tree-table-state-demo-session'} stateStorage={'session'}
                    paginator rows={5} rowsPerPageOptions={[5, 10, 25]}>
                <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
            </TreeTable>
        </div>
    )
}
        `,data:`
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsx)("p",{children:"Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again, table would render the data using the last settings."}),(0,t.jsxs)("p",{children:["Change the state of the table e.g paginate or expand rows, navigate away and then return to this table again to test this feature. The setting is set as ",(0,t.jsx)("i",{children:"session"})," with the ",(0,t.jsx)("i",{children:"stateStorage"})," property so that Table retains the state until the browser is closed. Other alternative is ",(0,t.jsx)("i",{children:"local"})," referring to ",(0,t.jsx)("i",{children:"localStorage"})," for an extended lifetime."]})]}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(Q,{value:a,tableStyle:{minWidth:"50rem"},stateKey:"tree-table-state-demo-session",stateStorage:"session",paginator:!0,rows:5,rowsPerPageOptions:[5,10,25],children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",expander:!0,filter:!0,filterPlaceholder:"Filter by name",sortable:!0}),(0,t.jsx)(s.Column,{field:"size",header:"Size",filter:!0,filterPlaceholder:"Filter by size",sortable:!0}),(0,t.jsx)(s.Column,{field:"type",header:"Type",filter:!0,filterPlaceholder:"Filter by type",sortable:!0})]})}),(0,t.jsx)(i.DocSectionCode,{code:o,service:["NodeService"]})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:ev},{id:"pt.treetable.options",label:"TreeTable PT Options",component:a.default},{id:"pt.column.options",label:"Column PT Options",component:a.default}];return(0,t.jsx)(l.DocComponent,{title:"React TreeTable Component",header:"TreeTable",description:"TreeTable is used to display hierarchical data in tabular format.",componentDocs:[{id:"import",label:"Import",component:eS},{id:"basic",label:"Basic",component:et},{id:"dynamic_columns",label:"Dynamic Columns",component:eu},{id:"controlled",label:"Controlled",component:ep},{id:"template",label:"Template",component:eI},{id:"paginator",label:"Paginator",children:[{id:"paginator_basic",label:"Basic",component:eC},{id:"paginator_template",label:"Template",component:eT}]},{id:"sort",label:"Sort",children:[{id:"single_sort",label:"Single Column",component:eF},{id:"multiple_sort",label:"Multiple Columns",component:eD}]},{id:"filter",label:"Filter",component:ex},{id:"selection",label:"Selection",children:[{id:"single_row_selection",label:"Single",component:eR},{id:"multiple_rows_selection",label:"Multiple",component:eM},{id:"checkbox_row_selection",label:"Checkbox",component:eY},{id:"row_selection_events",label:"Events",component:eE}]},{id:"column_group",label:"Column Group",component:er},{id:"lazy_load",label:"Lazy Load",component:eg},{id:"edit",label:"Edit",component:eh},{id:"scroll",label:"Scroll",children:[{id:"vertical_scroll",label:"Vertical",component:eP},{id:"horizontal_scroll",label:"Horizontal",component:ew},{id:"frozen_columns",label:"Frozen Columns",component:ez}]},{id:"column_resize",label:"Column Resize",children:[{id:"resize_fitmode",label:"Fit Mode",component:ej},{id:"resize_expandmode",label:"Expand Mode",component:ek}]},{id:"reorder",label:"Reorder",component:eN},{id:"column_toggle",label:"Column Toggle",component:en},{id:"conditional_style",label:"Conditional Style",component:ei},{id:"contextmenu",label:"Context Menu",component:ec},{id:"stateful",label:"Stateful",component:eO},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["TreeTable","Column","TreeNode"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:e$},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:eA}]}]})}],87353)},42880,(e,t,a)=>{let l="/treetable";(window.__NEXT_P=window.__NEXT_P||[]).push([l,()=>e.r(87353)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([l])})}]);