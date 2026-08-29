(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,74967,e=>{"use strict";e.i(91398),e.i(91788),e.s([])},6846,e=>{"use strict";var t=e.i(91398),l=e.i(91788),s=e.i(10836),n=e.i(15498),a=e.i(60150),i=e.i(20484),o=e.i(71834),r=e.i(67143),d=e.i(64691),c=e.i(45543),m=e.i(75366),u=e.i(51551),h=e.i(3935);let p=n.ComponentBase.extend({defaultProps:{__TYPE:"Checkbox",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,icon:null,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,name:null,onChange:null,onContextMenu:null,onMouseDown:null,readOnly:!1,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,value:null,children:void 0},css:{classes:{box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon",root:({props:e,checked:t,context:l})=>(0,h.classNames)("p-checkbox p-component",{"p-highlight":t,"p-disabled":e.disabled,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:l&&"filled"===l.inputStyle})}}}),f=l.memo(l.forwardRef((e,f)=>{let k,S,x,C,b,v,w=(0,a.useMergeProps)(),N=l.useContext(s.PrimeReactContext),g=p.getProps(e,N),[j,y]=l.useState(!1),{ptm:R,cx:P,isUnstyled:D}=p.setMetaData({props:g,state:{focused:j},context:{checked:g.checked===g.trueValue,disabled:g.disabled}});(0,n.useHandleStyle)(p.css.styles,D,{name:"checkbox"});let z=l.useRef(null),I=l.useRef(g.inputRef);l.useImperativeHandle(f,()=>({props:g,focus:()=>c.DomHandler.focus(I.current),getElement:()=>z.current,getInput:()=>I.current})),l.useEffect(()=>{u.ObjectUtils.combinedRefs(I,g.inputRef)},[I,g.inputRef]),(0,o.useUpdateEffect)(()=>{I.current.checked=g.checked===g.trueValue},[g.checked,g.trueValue]),(0,i.useMountEffect)(()=>{g.autoFocus&&c.DomHandler.focus(I.current,g.autoFocus)});let T=g.checked===g.trueValue,H=u.ObjectUtils.isNotEmpty(g.tooltip),M=p.getOtherProps(g),F=w({id:g.id,className:(0,h.classNames)(g.className,P("root",{checked:T,context:N})),style:g.style,"data-p-highlight":T,"data-p-disabled":g.disabled,onContextMenu:g.onContextMenu,onMouseDown:g.onMouseDown},M,R("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{ref:z,...F,children:[(k=u.ObjectUtils.reduceKeys(M,c.DomHandler.ARIA_PROPS),S=w({id:g.inputId,type:"checkbox",className:P("input"),name:g.name,tabIndex:g.tabIndex,onFocus:e=>{y(!0),g?.onFocus?.(e)},onBlur:e=>{y(!1),g?.onBlur?.(e)},onChange:e=>(e=>{if(!g.disabled&&!g.readOnly&&g.onChange){let t=g.checked===g.trueValue?g.falseValue:g.trueValue,l={originalEvent:e,value:g.value,checked:t,stopPropagation:()=>{e?.stopPropagation()},preventDefault:()=>{e?.preventDefault()},target:{type:"checkbox",name:g.name,id:g.id,value:g.value,checked:t}};g?.onChange?.(l),e.defaultPrevented||c.DomHandler.focus(I.current)}})(e),disabled:g.disabled,readOnly:g.readOnly,required:g.required,"aria-invalid":g.invalid,checked:T,...k},R("input")),(0,t.jsx)("input",{ref:I,...S})),(x=w({className:P("icon")},R("icon")),C=w({className:P("box",{checked:T}),"data-p-highlight":T,"data-p-disabled":g.disabled},R("box")),b=T?g.icon||(0,t.jsx)(r.CheckIcon,{...x}):null,v=m.IconUtils.getJSXIcon(b,{...x},{props:g,checked:T}),(0,t.jsx)("div",{...C,children:v}))]}),H&&(0,t.jsx)(d.Tooltip,{target:z,content:g.tooltip,pt:R("tooltip"),...g.tooltipOptions})]})}));f.displayName="Checkbox",e.s(["Checkbox",0,f],6846)},10367,31569,85091,95513,51570,16719,28736,95193,60681,e=>{"use strict";let t=()=>{};t.displayName="Column",e.s(["Column",0,t],10367);var l=e.i(15498),s=e.i(51551);let n=l.ComponentBase.extend({defaultProps:{__TYPE:"Column",align:null,alignFrozen:"left",alignHeader:null,body:null,bodyClassName:null,bodyStyle:null,cellEditValidateOnClose:!1,cellEditValidator:null,cellEditValidatorEvent:"click",className:null,colSpan:null,columnKey:null,dataType:"text",editor:null,excludeGlobalFilter:!1,expander:!1,exportField:null,exportable:!0,field:null,filter:!1,filterApply:null,filterClear:null,filterElement:null,filterField:null,filterFooter:null,filterFunction:null,filterHeader:null,filterHeaderClassName:null,filterHeaderStyle:null,filterMatchMode:null,filterMatchModeOptions:null,filterMaxLength:null,filterMenuClassName:null,filterMenuStyle:null,filterPlaceholder:null,filterType:"text",footer:null,footerClassName:null,footerStyle:null,frozen:!1,header:null,headerClassName:null,headerStyle:null,headerTooltip:null,headerTooltipOptions:null,hidden:!1,maxConstraints:2,onBeforeCellEditHide:null,onBeforeCellEditShow:null,onCellEditCancel:null,onCellEditComplete:null,onCellEditInit:null,onFilterApplyClick:null,onFilterClear:null,onFilterConstraintAdd:null,onFilterConstraintRemove:null,onFilterMatchModeChange:null,onFilterOperatorChange:null,reorderable:!0,resizeable:!0,rowEditor:!1,rowReorder:!1,rowReorderIcon:null,rowSpan:null,selectionMode:null,showAddButton:!0,showApplyButton:!0,showClearButton:!0,showFilterMatchModes:!0,showFilterMenu:!0,showFilterMenuOptions:!0,showFilterOperator:!0,sortField:null,sortFunction:null,sortable:!1,sortableDisabled:!1,style:null,children:void 0},getCProp:(e,t)=>s.ObjectUtils.getComponentProp(e,t,n.defaultProps),getCProps:e=>s.ObjectUtils.getComponentProps(e,n.defaultProps),getCOtherProps:e=>s.ObjectUtils.getComponentDiffProps(e,n.defaultProps)});e.s(["ColumnBase",0,n],31569);var a=e.i(91398),i=e.i(91788),o=e.i(85850);let r=i.memo(i.forwardRef((e,t)=>{let l=o.IconBase.getPTI(e);return(0,a.jsx)("svg",{ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.99994 14C6.91097 14.0004 6.82281 13.983 6.74064 13.9489C6.65843 13.9148 6.58387 13.8646 6.52133 13.8013L1.10198 8.38193C0.982318 8.25351 0.917175 8.08367 0.920272 7.90817C0.923368 7.73267 0.994462 7.56523 1.11858 7.44111C1.24269 7.317 1.41014 7.2459 1.58563 7.2428C1.76113 7.23971 1.93098 7.30485 2.0594 7.42451L6.32263 11.6877V0.677419C6.32263 0.497756 6.394 0.325452 6.52104 0.198411C6.64808 0.0713706 6.82039 0 7.00005 0C7.17971 0 7.35202 0.0713706 7.47906 0.198411C7.6061 0.325452 7.67747 0.497756 7.67747 0.677419V11.6877L11.9407 7.42451C12.0691 7.30485 12.2389 7.23971 12.4144 7.2428C12.5899 7.2459 12.7574 7.317 12.8815 7.44111C13.0056 7.56523 13.0767 7.73267 13.0798 7.90817C13.0829 8.08367 13.0178 8.25351 12.8981 8.38193L7.47875 13.8013C7.41621 13.8646 7.34164 13.9148 7.25944 13.9489C7.17727 13.983 7.08912 14.0004 7.00015 14C7.00012 14 7.00009 14 7.00005 14C7.00001 14 6.99998 14 6.99994 14Z",fill:"currentColor"})})}));r.displayName="ArrowDownIcon",e.s(["ArrowDownIcon",0,r],85091);let d=i.memo(i.forwardRef((e,t)=>{let l=o.IconBase.getPTI(e);return(0,a.jsx)("svg",{ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.51551 13.799C6.64205 13.9255 6.813 13.9977 6.99193 14C7.17087 13.9977 7.34182 13.9255 7.46835 13.799C7.59489 13.6725 7.66701 13.5015 7.66935 13.3226V2.31233L11.9326 6.57554C11.9951 6.63887 12.0697 6.68907 12.1519 6.72319C12.2341 6.75731 12.3223 6.77467 12.4113 6.77425C12.5003 6.77467 12.5885 6.75731 12.6707 6.72319C12.7529 6.68907 12.8274 6.63887 12.89 6.57554C13.0168 6.44853 13.0881 6.27635 13.0881 6.09683C13.0881 5.91732 13.0168 5.74514 12.89 5.61812L7.48846 0.216594C7.48274 0.210436 7.4769 0.204374 7.47094 0.198411C7.3439 0.0713707 7.1716 0 6.99193 0C6.81227 0 6.63997 0.0713707 6.51293 0.198411C6.50704 0.204296 6.50128 0.210278 6.49563 0.216354L1.09386 5.61812C0.974201 5.74654 0.909057 5.91639 0.912154 6.09189C0.91525 6.26738 0.986345 6.43483 1.11046 6.55894C1.23457 6.68306 1.40202 6.75415 1.57752 6.75725C1.75302 6.76035 1.92286 6.6952 2.05128 6.57554L6.31451 2.31231V13.3226C6.31685 13.5015 6.38898 13.6725 6.51551 13.799Z",fill:"currentColor"})})}));d.displayName="ArrowUpIcon",e.s(["ArrowUpIcon",0,d],95513);let c=l.ComponentBase.extend({defaultProps:{__TYPE:"ColumnGroup",children:void 0},getCProp:(e,t)=>s.ObjectUtils.getComponentProp(e,t,c.defaultProps),getCProps:e=>s.ObjectUtils.getComponentProps(e,c.defaultProps)});e.s(["ColumnGroupBase",0,c],51570);let m=l.ComponentBase.extend({defaultProps:{__TYPE:"Row",style:null,className:null,children:void 0},getCProp:(e,t)=>s.ObjectUtils.getComponentProp(e,t,m.defaultProps)});e.s(["RowBase",0,m],16719);let u=i.memo(i.forwardRef((e,t)=>{let l=o.IconBase.getPTI(e);return(0,a.jsxs)("svg",{ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:[(0,a.jsx)("path",{d:"M5.64515 3.61291C5.47353 3.61291 5.30192 3.54968 5.16644 3.4142L3.38708 1.63484L1.60773 3.4142C1.34579 3.67613 0.912244 3.67613 0.650309 3.4142C0.388374 3.15226 0.388374 2.71871 0.650309 2.45678L2.90837 0.198712C3.17031 -0.0632236 3.60386 -0.0632236 3.86579 0.198712L6.12386 2.45678C6.38579 2.71871 6.38579 3.15226 6.12386 3.4142C5.98837 3.54968 5.81676 3.61291 5.64515 3.61291Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M3.38714 14C3.01681 14 2.70972 13.6929 2.70972 13.3226V0.677419C2.70972 0.307097 3.01681 0 3.38714 0C3.75746 0 4.06456 0.307097 4.06456 0.677419V13.3226C4.06456 13.6929 3.75746 14 3.38714 14Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M10.6129 14C10.4413 14 10.2697 13.9368 10.1342 13.8013L7.87611 11.5432C7.61418 11.2813 7.61418 10.8477 7.87611 10.5858C8.13805 10.3239 8.5716 10.3239 8.83353 10.5858L10.6129 12.3652L12.3922 10.5858C12.6542 10.3239 13.0877 10.3239 13.3497 10.5858C13.6116 10.8477 13.6116 11.2813 13.3497 11.5432L11.0916 13.8013C10.9561 13.9368 10.7845 14 10.6129 14Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M10.6129 14C10.2426 14 9.93552 13.6929 9.93552 13.3226V0.677419C9.93552 0.307097 10.2426 0 10.6129 0C10.9833 0 11.2904 0.307097 11.2904 0.677419V13.3226C11.2904 13.6929 10.9832 14 10.6129 14Z",fill:"currentColor"})]})}));u.displayName="SortAltIcon",e.s(["SortAltIcon",0,u],28736);let h=i.memo(i.forwardRef((e,t)=>{let l=o.IconBase.getPTI(e);return(0,a.jsx)("svg",{ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,a.jsx)("path",{d:"M4.93953 10.5858L3.83759 11.6877V0.677419C3.83759 0.307097 3.53049 0 3.16017 0C2.78985 0 2.48275 0.307097 2.48275 0.677419V11.6877L1.38082 10.5858C1.11888 10.3239 0.685331 10.3239 0.423396 10.5858C0.16146 10.8477 0.16146 11.2813 0.423396 11.5432L2.68146 13.8013C2.74469 13.8645 2.81694 13.9097 2.89823 13.9458C2.97952 13.9819 3.06985 14 3.16017 14C3.25049 14 3.33178 13.9819 3.42211 13.9458C3.5034 13.9097 3.57565 13.8645 3.63888 13.8013L5.89694 11.5432C6.15888 11.2813 6.15888 10.8477 5.89694 10.5858C5.63501 10.3239 5.20146 10.3239 4.93953 10.5858ZM13.0957 0H7.22468C6.85436 0 6.54726 0.307097 6.54726 0.677419C6.54726 1.04774 6.85436 1.35484 7.22468 1.35484H13.0957C13.466 1.35484 13.7731 1.04774 13.7731 0.677419C13.7731 0.307097 13.466 0 13.0957 0ZM7.22468 5.41935H9.48275C9.85307 5.41935 10.1602 5.72645 10.1602 6.09677C10.1602 6.4671 9.85307 6.77419 9.48275 6.77419H7.22468C6.85436 6.77419 6.54726 6.4671 6.54726 6.09677C6.54726 5.72645 6.85436 5.41935 7.22468 5.41935ZM7.6763 8.12903H7.22468C6.85436 8.12903 6.54726 8.43613 6.54726 8.80645C6.54726 9.17677 6.85436 9.48387 7.22468 9.48387H7.6763C8.04662 9.48387 8.35372 9.17677 8.35372 8.80645C8.35372 8.43613 8.04662 8.12903 7.6763 8.12903ZM7.22468 2.70968H11.2892C11.6595 2.70968 11.9666 3.01677 11.9666 3.3871C11.9666 3.75742 11.6595 4.06452 11.2892 4.06452H7.22468C6.85436 4.06452 6.54726 3.75742 6.54726 3.3871C6.54726 3.01677 6.85436 2.70968 7.22468 2.70968Z",fill:"currentColor"})})}));h.displayName="SortAmountDownIcon",e.s(["SortAmountDownIcon",0,h],95193);let p=i.memo(i.forwardRef((e,t)=>{let l=o.IconBase.getPTI(e);return(0,a.jsx)("svg",{ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,a.jsx)("path",{d:"M3.63435 0.19871C3.57113 0.135484 3.49887 0.0903226 3.41758 0.0541935C3.255 -0.0180645 3.06532 -0.0180645 2.90274 0.0541935C2.82145 0.0903226 2.74919 0.135484 2.68597 0.19871L0.427901 2.45677C0.165965 2.71871 0.165965 3.15226 0.427901 3.41419C0.689836 3.67613 1.12338 3.67613 1.38532 3.41419L2.48726 2.31226V13.3226C2.48726 13.6929 2.79435 14 3.16467 14C3.535 14 3.84209 13.6929 3.84209 13.3226V2.31226L4.94403 3.41419C5.07951 3.54968 5.25113 3.6129 5.42274 3.6129C5.59435 3.6129 5.76597 3.54968 5.90145 3.41419C6.16338 3.15226 6.16338 2.71871 5.90145 2.45677L3.64338 0.19871H3.63435ZM13.7685 13.3226C13.7685 12.9523 13.4615 12.6452 13.0911 12.6452H7.22016C6.84984 12.6452 6.54274 12.9523 6.54274 13.3226C6.54274 13.6929 6.84984 14 7.22016 14H13.0911C13.4615 14 13.7685 13.6929 13.7685 13.3226ZM7.22016 8.58064C6.84984 8.58064 6.54274 8.27355 6.54274 7.90323C6.54274 7.5329 6.84984 7.22581 7.22016 7.22581H9.47823C9.84855 7.22581 10.1556 7.5329 10.1556 7.90323C10.1556 8.27355 9.84855 8.58064 9.47823 8.58064H7.22016ZM7.22016 5.87097H7.67177C8.0421 5.87097 8.34919 5.56387 8.34919 5.19355C8.34919 4.82323 8.0421 4.51613 7.67177 4.51613H7.22016C6.84984 4.51613 6.54274 4.82323 6.54274 5.19355C6.54274 5.56387 6.84984 5.87097 7.22016 5.87097ZM11.2847 11.2903H7.22016C6.84984 11.2903 6.54274 10.9832 6.54274 10.6129C6.54274 10.2426 6.84984 9.93548 7.22016 9.93548H11.2847C11.655 9.93548 11.9621 10.2426 11.9621 10.6129C11.9621 10.9832 11.655 11.2903 11.2847 11.2903Z",fill:"currentColor"})})}));p.displayName="SortAmountUpAltIcon",e.s(["SortAmountUpAltIcon",0,p],60681)},93792,e=>{"use strict";var t=e.i(91398),l=e.i(91788),s=e.i(10836),n=e.i(20484),a=e.i(66878),i=e.i(45543),o=e.i(15498),r=e.i(51551);let d=o.ComponentBase.extend({defaultProps:{__TYPE:"FocusTrap",children:void 0},css:{styles:""},getProps:e=>r.ObjectUtils.getMergedProps(e,d.defaultProps),getOtherProps:e=>r.ObjectUtils.getDiffProps(e,d.defaultProps)}),c=l.default.memo(l.default.forwardRef((e,o)=>{let r=l.default.useRef(null),c=l.default.useRef(null),m=l.default.useRef(null),u=l.default.useContext(s.PrimeReactContext),h=d.getProps(e,u);(0,a.useStyle)(d.css.styles,{name:"focustrap"});let{ptm:p}=d.setMetaData({props:h});l.default.useImperativeHandle(o,()=>({props:h,getInk:()=>c.current,getTarget:()=>r.current})),(0,n.useMountEffect)(()=>{h.disabled||(r.current=f(),k(r.current))});let f=()=>c.current&&c.current.parentElement,k=e=>{let{autoFocusSelector:t="",firstFocusableSelector:l="",autoFocus:s=!1}=h||{},n=`${S(t)}`,a=`[autofocus]${n}, [data-pc-autofocus='true']${n}`,o=i.DomHandler.getFirstFocusableElement(e,a);s&&!o&&(o=i.DomHandler.getFirstFocusableElement(e,S(l))),i.DomHandler.focus(o)},S=e=>`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`,x=e=>{let{currentTarget:t,relatedTarget:l}=e,s=l!==t.$_pfocustrap_lasthiddenfocusableelement&&r.current?.contains(l)?t.$_pfocustrap_lasthiddenfocusableelement:i.DomHandler.getFirstFocusableElement(t.parentElement,S(t.$_pfocustrap_focusableselector));i.DomHandler.focus(s)},C=e=>{let{currentTarget:t,relatedTarget:l}=e,s=l!==t.$_pfocustrap_firsthiddenfocusableelement&&r.current?.contains(l)?t.$_pfocustrap_firsthiddenfocusableelement:i.DomHandler.getLastFocusableElement(t.parentElement,S(t.$_pfocustrap_focusableselector));i.DomHandler.focus(s)};return(()=>{let{tabIndex:e=0}=h||{},l=(l,s,n)=>(0,t.jsx)("span",{ref:l,className:"p-hidden-accessible p-hidden-focusable",tabIndex:e,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:s,"data-pc-section":n}),s=l(c,x,"firstfocusableelement"),n=l(m,C,"lastfocusableelement");return c.current&&m.current&&(c.current.$_pfocustrap_lasthiddenfocusableelement=m.current,m.current.$_pfocustrap_firsthiddenfocusableelement=c.current),(0,t.jsxs)(t.Fragment,{children:[s,h.children,n]})})()}));e.s(["default",0,c],93792)},19820,e=>{"use strict";var t=e.i(91398),l=e.i(91788),s=e.i(85850);let n=l.memo(l.forwardRef((e,l)=>{let n=s.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:l,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,t.jsx)("path",{d:"M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",fill:"currentColor"})})}));n.displayName="AngleRightIcon",e.s(["AngleRightIcon",0,n])},39971,e=>{"use strict";var t=e.i(91398),l=e.i(91788),s=e.i(85850);let n=l.memo(l.forwardRef((e,l)=>{let n=s.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:l,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",fill:"currentColor"})})}));n.displayName="BarsIcon",e.s(["BarsIcon",0,n])},75676,e=>{"use strict";var t=e.i(91398),l=e.i(91788),s=e.i(85850);let n=l.memo(l.forwardRef((e,l)=>{let n=s.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:l,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,t.jsx)("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"})})}));n.displayName="ChevronRightIcon",e.s(["ChevronRightIcon",0,n])},17720,e=>{"use strict";var t=e.i(91398),l=e.i(91788),s=e.i(85850);let n=l.memo(l.forwardRef((e,l)=>{let n=s.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:l,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,t.jsx)("path",{d:"M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z",fill:"currentColor"})})}));n.displayName="ChevronUpIcon",e.s(["ChevronUpIcon",0,n])},46532,e=>{"use strict";var t=e.i(91398),l=e.i(91788),s=e.i(85850);let n=l.memo(l.forwardRef((e,l)=>{let n=s.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:l,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,t.jsx)("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"})})}));n.displayName="PlusIcon",e.s(["PlusIcon",0,n])},14374,e=>{"use strict";var t=e.i(91398),l=e.i(91788),s=e.i(10836),n=e.i(15498),a=e.i(60150),i=e.i(20484),o=e.i(64691),r=e.i(45543),d=e.i(51551),c=e.i(3935);let m=n.ComponentBase.extend({defaultProps:{__TYPE:"RadioButton",autoFocus:!1,checked:!1,className:null,disabled:!1,id:null,inputId:null,inputRef:null,invalid:!1,variant:null,name:null,onChange:null,onClick:null,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,value:null,children:void 0},css:{classes:{root:({props:e,context:t})=>(0,c.classNames)("p-radiobutton p-component",{"p-highlight":e.checked,"p-disabled":e.disabled,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:t&&"filled"===t.inputStyle}),box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"}}}),u=l.memo(l.forwardRef((e,u)=>{let h,p,f,k,S=(0,a.useMergeProps)(),x=l.useContext(s.PrimeReactContext),C=m.getProps(e,x),b=l.useRef(null),v=l.useRef(C.inputRef),{ptm:w,cx:N,isUnstyled:g}=m.setMetaData({props:C});(0,n.useHandleStyle)(m.css.styles,g,{name:"radiobutton"});let j=e=>{y(e)},y=e=>{if(!C.disabled&&!C.readOnly&&C.onChange){let t=C.checked,l=e.target instanceof HTMLDivElement,s=e.target===v.current&&e.target.checked!==t,n=l&&r.DomHandler.hasClass(b.current,"p-radiobutton-checked")===t&&!t,a=!t,i={originalEvent:e,value:C.value,checked:a,stopPropagation:()=>{e?.stopPropagation()},preventDefault:()=>{e?.preventDefault()},target:{type:"radio",name:C.name,id:C.id,value:C.value,checked:a}};if(s||n){if(C?.onChange?.(i),e.defaultPrevented)return;n&&(v.current.checked=a)}r.DomHandler.focus(v.current)}};l.useImperativeHandle(u,()=>({props:C,select:j,focus:()=>r.DomHandler.focus(v.current),getElement:()=>b.current,getInput:()=>v.current})),l.useEffect(()=>{v.current&&(v.current.checked=C.checked)},[C.checked]),l.useEffect(()=>{d.ObjectUtils.combinedRefs(v,C.inputRef)},[v,C.inputRef]),(0,i.useMountEffect)(()=>{C.autoFocus&&r.DomHandler.focus(v.current,C.autoFocus)});let R=d.ObjectUtils.isNotEmpty(C.tooltip),P=m.getOtherProps(C),D=S({id:C.id,className:(0,c.classNames)(C.className,N("root",{context:x})),style:C.style,"data-p-checked":C.checked},P,w("root"));return delete D.input,delete D.box,delete D.icon,(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{ref:b,...D,children:[(h=d.ObjectUtils.reduceKeys(P,r.DomHandler.ARIA_PROPS),p=S({id:C.inputId,type:"radio",name:C.name,defaultChecked:C.checked,onFocus:e=>{C?.onFocus?.(e)},onBlur:e=>{C?.onBlur?.(e)},onChange:y,disabled:C.disabled,readOnly:C.readOnly,required:C.required,tabIndex:C.tabIndex,className:N("input"),...h},e.input,w("input")),(0,t.jsx)("input",{ref:v,...p})),(f=S({className:N("box")},e.box,w("box")),k=S({className:N("icon")},e.icon,w("icon")),(0,t.jsx)("div",{...f,children:(0,t.jsx)("div",{...k})}))]}),R&&(0,t.jsx)(o.Tooltip,{target:b,content:C.tooltip,pt:w("tooltip"),...C.tooltipOptions})]})}));u.displayName="RadioButton",e.s(["RadioButton",0,u],14374)},50513,e=>{"use strict";var t=e.i(91398),l=e.i(91788),s=e.i(10836),n=e.i(15498),a=e.i(60150),i=e.i(3935);let o=`
@layer primereact {
    .p-skeleton {
        position: relative;
        overflow: hidden;
    }
    
    .p-skeleton::after {
        content: "";
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
    }
    
    .p-skeleton-circle {
        border-radius: 50%;
    }
    
    .p-skeleton-none::after {
        animation: none;
    }
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`,r=n.ComponentBase.extend({defaultProps:{__TYPE:"Skeleton",shape:"rectangle",size:null,width:"100%",height:"1rem",borderRadius:null,animation:"wave",style:null,className:null},css:{classes:{root:({props:e})=>(0,i.classNames)("p-skeleton p-component",{"p-skeleton-circle":"circle"===e.shape,"p-skeleton-none":"none"===e.animation})},inlineStyles:{root:{position:"relative"}},styles:o}}),d=l.memo(l.forwardRef((e,o)=>{let d=(0,a.useMergeProps)(),c=l.useContext(s.PrimeReactContext),m=r.getProps(e,c),{ptm:u,cx:h,sx:p,isUnstyled:f}=r.setMetaData({props:m});(0,n.useHandleStyle)(r.css.styles,f,{name:"skeleton"});let k=l.useRef(null);l.useImperativeHandle(o,()=>({props:m,getElement:()=>k.current}));let S=m.size?{width:m.size,height:m.size,borderRadius:m.borderRadius}:{width:m.width,height:m.height,borderRadius:m.borderRadius},x=d({ref:k,className:(0,i.classNames)(m.className,h("root")),style:{...S,...p("root")},"aria-hidden":!0},r.getOtherProps(m),u("root"));return(0,t.jsx)("div",{...x})}));d.displayName="Skeleton",e.s(["Skeleton",0,d],50513)},40407,e=>{"use strict";e.s(["getStorage",0,e=>{switch(e){case"local":return window.localStorage;case"session":return window.sessionStorage;case"custom":return null;default:throw Error(e+' is not a valid value for the state storage, supported values are "local", "session" and "custom".')}},"switchTheme",0,(e,t,l,s)=>{let n=document.getElementById(l),a=n.cloneNode(!0),i=n.getAttribute("href").replace(e,t);a.setAttribute("id",l+"-clone"),a.setAttribute("href",i),a.addEventListener("load",()=>{n.remove(),a.setAttribute("id",l),s&&s()}),n.parentNode?.insertBefore(a,n.nextSibling)}])},1187,e=>{"use strict";var t=e.i(91398),l=e.i(88850),s=e.i(82948);e.i(74967);var n=e.i(28137);function a(){return(0,t.jsxs)(n.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Skeleton uses ",(0,t.jsx)("i",{children:"aria-hidden"}),' as "true" so that it gets ignored by screen readers, any valid attribute is passed to the root element so you may customize it further if required. If multiple skeletons are grouped inside a container, you may use ',(0,t.jsx)("i",{children:"aria-busy"})," on the container element as well to indicate the loading process."]}),(0,t.jsx)("h4",{children:"Keyboard Support"}),(0,t.jsx)("p",{children:"Component does not include any interactive elements."})]})}var i=e.i(5180),o=e.i(50513);function r(e){let l={basic:`
<div className="border-round border-1 surface-border p-4 surface-card">
    <div className="flex mb-3">
        <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
        <div>
            <Skeleton width="10rem" className="mb-2"></Skeleton>
            <Skeleton width="5rem" className="mb-2"></Skeleton>
            <Skeleton height=".5rem"></Skeleton>
        </div>
    </div>
    <Skeleton width="100%" height="150px"></Skeleton>
    <div className="flex justify-content-between mt-3">
        <Skeleton width="4rem" height="2rem"></Skeleton>
        <Skeleton width="4rem" height="2rem"></Skeleton>
    </div>
</div>
        `,javascript:`
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function CardDemo() {
    return (
        <div className="card">
            <div className="border-round border-1 surface-border p-4 surface-card">
                <div className="flex mb-3">
                    <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                    <div>
                        <Skeleton width="10rem" className="mb-2"></Skeleton>
                        <Skeleton width="5rem" className="mb-2"></Skeleton>
                        <Skeleton height=".5rem"></Skeleton>
                    </div>
                </div>
                <Skeleton width="100%" height="150px"></Skeleton>
                <div className="flex justify-content-between mt-3">
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                </div>
            </div>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function CardDemo() {
    return (
        <div className="card">
            <div className="border-round border-1 surface-border p-4 surface-card">
                <div className="flex mb-3">
                    <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                    <div>
                        <Skeleton width="10rem" className="mb-2"></Skeleton>
                        <Skeleton width="5rem" className="mb-2"></Skeleton>
                        <Skeleton height=".5rem"></Skeleton>
                    </div>
                </div>
                <Skeleton width="100%" height="150px"></Skeleton>
                <div className="flex justify-content-between mt-3">
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                </div>
            </div>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Sample Card implementation using different Skeleton components and PrimeFlex CSS utilities."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{className:"border-round border-1 surface-border p-4 surface-card",children:[(0,t.jsxs)("div",{className:"flex mb-3",children:[(0,t.jsx)(o.Skeleton,{shape:"circle",size:"4rem",className:"mr-2"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(o.Skeleton,{width:"10rem",className:"mb-2"}),(0,t.jsx)(o.Skeleton,{width:"5rem",className:"mb-2"}),(0,t.jsx)(o.Skeleton,{height:".5rem"})]})]}),(0,t.jsx)(o.Skeleton,{width:"100%",height:"150px"}),(0,t.jsxs)("div",{className:"flex justify-content-between mt-3",children:[(0,t.jsx)(o.Skeleton,{width:"4rem",height:"2rem"}),(0,t.jsx)(o.Skeleton,{width:"4rem",height:"2rem"})]})]})}),(0,t.jsx)(i.DocSectionCode,{code:l})]})}var d=e.i(10367),c=e.i(59837);function m(e){let l=Array.from({length:5},(e,t)=>t),s={basic:`
<DataTable value={items} className="p-datatable-striped">
    <Column field="code" header="Code" style={{ width: '25%' }} body={<Skeleton />}></Column>
    <Column field="name" header="Name" style={{ width: '25%' }} body={<Skeleton />}></Column>
    <Column field="category" header="Category" style={{ width: '25%' }} body={<Skeleton />}></Column>
    <Column field="quantity" header="Quantity" style={{ width: '25%' }} body={<Skeleton />}></Column>
</DataTable>
        `,javascript:`
import React from 'react';
import { Skeleton } from 'primereact/skeleton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function DataTableDemo() {
    const items = Array.from({ length: 5 }, (v, i) => i);

    return (
        <div className="card">
            <DataTable value={items} className="p-datatable-striped">
                <Column field="code" header="Code" style={{ width: '25%' }} body={<Skeleton />}></Column>
                <Column field="name" header="Name" style={{ width: '25%' }} body={<Skeleton />}></Column>
                <Column field="category" header="Category" style={{ width: '25%' }} body={<Skeleton />}></Column>
                <Column field="quantity" header="Quantity" style={{ width: '25%' }} body={<Skeleton />}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Skeleton } from 'primereact/skeleton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function DataTableDemo() {
    const items: number[] = Array.from({ length: 5 }, (v, i) => i);

    return (
        <div className="card">
            <DataTable value={items} className="p-datatable-striped">
                <Column field="code" header="Code" style={{ width: '25%' }} body={<Skeleton />}></Column>
                <Column field="name" header="Name" style={{ width: '25%' }} body={<Skeleton />}></Column>
                <Column field="category" header="Category" style={{ width: '25%' }} body={<Skeleton />}></Column>
                <Column field="quantity" header="Quantity" style={{ width: '25%' }} body={<Skeleton />}></Column>
            </DataTable>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Sample DataTable implementation using different Skeleton components and PrimeFlex CSS utilities."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:l,className:"p-datatable-striped",children:[(0,t.jsx)(d.Column,{field:"code",header:"Code",style:{width:"25%"},body:(0,t.jsx)(o.Skeleton,{})}),(0,t.jsx)(d.Column,{field:"name",header:"Name",style:{width:"25%"},body:(0,t.jsx)(o.Skeleton,{})}),(0,t.jsx)(d.Column,{field:"category",header:"Category",style:{width:"25%"},body:(0,t.jsx)(o.Skeleton,{})}),(0,t.jsx)(d.Column,{field:"quantity",header:"Quantity",style:{width:"25%"},body:(0,t.jsx)(o.Skeleton,{})})]})}),(0,t.jsx)(i.DocSectionCode,{code:s})]})}function u(e){let l={basic:`
import { Skeleton } from 'primereact/skeleton';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function h(e){let l={basic:`
<div className="border-round border-1 surface-border p-4">
    <ul className="m-0 p-0 list-none">
        <li className="mb-3">
            <div className="flex">
                <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                <div style={{ flex: '1' }}>
                    <Skeleton width="100%" className="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li className="mb-3">
            <div className="flex">
                <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                <div style={{ flex: '1' }}>
                    <Skeleton width="100%" className="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li className="mb-3">
            <div className="flex">
                <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                <div style={{ flex: '1' }}>
                    <Skeleton width="100%" className="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li>
            <div className="flex">
                <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                <div style={{ flex: '1' }}>
                    <Skeleton width="100%" className="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
    </ul>
</div>
        `,javascript:`
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function ListDemo() {
    return (
        <div className="card">
            <div className="border-round border-1 surface-border p-4">
                <ul className="m-0 p-0 list-none">
                    <li className="mb-3">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function ListDemo() {
    return (
        <div className="card">
            <div className="border-round border-1 surface-border p-4">
                <ul className="m-0 p-0 list-none">
                    <li className="mb-3">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Sample List implementation using different Skeleton components and PrimeFlex CSS utilities."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)("div",{className:"border-round border-1 surface-border p-4",children:(0,t.jsxs)("ul",{className:"m-0 p-0 list-none",children:[(0,t.jsx)("li",{className:"mb-3",children:(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)(o.Skeleton,{shape:"circle",size:"4rem",className:"mr-2"}),(0,t.jsxs)("div",{style:{flex:"1"},children:[(0,t.jsx)(o.Skeleton,{width:"100%",className:"mb-2"}),(0,t.jsx)(o.Skeleton,{width:"75%"})]})]})}),(0,t.jsx)("li",{className:"mb-3",children:(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)(o.Skeleton,{shape:"circle",size:"4rem",className:"mr-2"}),(0,t.jsxs)("div",{style:{flex:"1"},children:[(0,t.jsx)(o.Skeleton,{width:"100%",className:"mb-2"}),(0,t.jsx)(o.Skeleton,{width:"75%"})]})]})}),(0,t.jsx)("li",{className:"mb-3",children:(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)(o.Skeleton,{shape:"circle",size:"4rem",className:"mr-2"}),(0,t.jsxs)("div",{style:{flex:"1"},children:[(0,t.jsx)(o.Skeleton,{width:"100%",className:"mb-2"}),(0,t.jsx)(o.Skeleton,{width:"75%"})]})]})}),(0,t.jsx)("li",{children:(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)(o.Skeleton,{shape:"circle",size:"4rem",className:"mr-2"}),(0,t.jsxs)("div",{style:{flex:"1"},children:[(0,t.jsx)(o.Skeleton,{width:"100%",className:"mb-2"}),(0,t.jsx)(o.Skeleton,{width:"75%"})]})]})})]})})}),(0,t.jsx)(i.DocSectionCode,{code:l})]})}let p=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/skeleton.jpg",alt:"skeleton"})})]});function f(e){let l={basic:`
<h5>Rectangle</h5>
<Skeleton className="mb-2"></Skeleton>
<Skeleton width="10rem" className="mb-2"></Skeleton>
<Skeleton width="5rem" className="mb-2"></Skeleton>
<Skeleton height="2rem" className="mb-2"></Skeleton>
<Skeleton width="10rem" height="4rem"></Skeleton>

<h5>Rounded</h5>
<Skeleton className="mb-2" borderRadius="16px"></Skeleton>
<Skeleton width="10rem" className="mb-2" borderRadius="16px"></Skeleton>
<Skeleton width="5rem" borderRadius="16px" className="mb-2"></Skeleton>
<Skeleton height="2rem" className="mb-2" borderRadius="16px"></Skeleton>
<Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>

<h5 className="mt-3">Square</h5>
<Skeleton size="2rem" className="mr-2"></Skeleton>
<Skeleton size="3rem" className="mr-2"></Skeleton>
<Skeleton size="4rem" className="mr-2"></Skeleton>
<Skeleton size="5rem"></Skeleton>

<h5 className="mt-3">Circle</h5>
<Skeleton shape="circle" size="2rem" className="mr-2"></Skeleton>
<Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
<Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
<Skeleton shape="circle" size="5rem"></Skeleton>
        `,javascript:`
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function ShapesDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap">
                <div className="w-full md:w-6 p-3">
                    <h5>Rectangle</h5>
                    <Skeleton className="mb-2"></Skeleton>
                    <Skeleton width="10rem" className="mb-2"></Skeleton>
                    <Skeleton width="5rem" className="mb-2"></Skeleton>
                    <Skeleton height="2rem" className="mb-2"></Skeleton>
                    <Skeleton width="10rem" height="4rem"></Skeleton>
                </div>
                <div className="w-full md:w-6 p-3">
                    <h5>Rounded</h5>
                    <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="5rem" borderRadius="16px" className="mb-2"></Skeleton>
                    <Skeleton height="2rem" className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                </div>
                <div className="w-full md:w-6 p-3">
                    <h5>Square</h5>
                    <div className="flex align-items-end">
                        <Skeleton size="2rem" className="mr-2"></Skeleton>
                        <Skeleton size="3rem" className="mr-2"></Skeleton>
                        <Skeleton size="4rem" className="mr-2"></Skeleton>
                        <Skeleton size="5rem"></Skeleton>
                    </div>
                </div>
                <div className="w-full md:w-6 p-3">
                    <h5>Circle</h5>
                    <div className="flex align-items-end">
                        <Skeleton shape="circle" size="2rem" className="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="5rem"></Skeleton>
                    </div>
                </div>
            </div>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function ShapesDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap">
                <div className="w-full md:w-6 p-3">
                    <h5>Rectangle</h5>
                    <Skeleton className="mb-2"></Skeleton>
                    <Skeleton width="10rem" className="mb-2"></Skeleton>
                    <Skeleton width="5rem" className="mb-2"></Skeleton>
                    <Skeleton height="2rem" className="mb-2"></Skeleton>
                    <Skeleton width="10rem" height="4rem"></Skeleton>
                </div>
                <div className="w-full md:w-6 p-3">
                    <h5>Rounded</h5>
                    <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="5rem" borderRadius="16px" className="mb-2"></Skeleton>
                    <Skeleton height="2rem" className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                </div>
                <div className="w-full md:w-6 p-3">
                    <h5>Square</h5>
                    <div className="flex align-items-end">
                        <Skeleton size="2rem" className="mr-2"></Skeleton>
                        <Skeleton size="3rem" className="mr-2"></Skeleton>
                        <Skeleton size="4rem" className="mr-2"></Skeleton>
                        <Skeleton size="5rem"></Skeleton>
                    </div>
                </div>
                <div className="w-full md:w-6 p-3">
                    <h5>Circle</h5>
                    <div className="flex align-items-end">
                        <Skeleton shape="circle" size="2rem" className="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="5rem"></Skeleton>
                    </div>
                </div>
            </div>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Various shapes and sizes can be created using styling properties like ",(0,t.jsx)("i",{children:"shape"}),", ",(0,t.jsx)("i",{children:"width"}),", ",(0,t.jsx)("i",{children:"height"}),", ",(0,t.jsx)("i",{children:"borderRadius"})," and ",(0,t.jsx)("i",{children:"className"}),"."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)("div",{className:"flex flex-wrap",children:[(0,t.jsxs)("div",{className:"w-full md:w-6 p-3",children:[(0,t.jsx)("h5",{children:"Rectangle"}),(0,t.jsx)(o.Skeleton,{className:"mb-2"}),(0,t.jsx)(o.Skeleton,{width:"10rem",className:"mb-2"}),(0,t.jsx)(o.Skeleton,{width:"5rem",className:"mb-2"}),(0,t.jsx)(o.Skeleton,{height:"2rem",className:"mb-2"}),(0,t.jsx)(o.Skeleton,{width:"10rem",height:"4rem"})]}),(0,t.jsxs)("div",{className:"w-full md:w-6 p-3",children:[(0,t.jsx)("h5",{children:"Rounded"}),(0,t.jsx)(o.Skeleton,{className:"mb-2",borderRadius:"16px"}),(0,t.jsx)(o.Skeleton,{width:"10rem",className:"mb-2",borderRadius:"16px"}),(0,t.jsx)(o.Skeleton,{width:"5rem",borderRadius:"16px",className:"mb-2"}),(0,t.jsx)(o.Skeleton,{height:"2rem",className:"mb-2",borderRadius:"16px"}),(0,t.jsx)(o.Skeleton,{width:"10rem",height:"4rem",borderRadius:"16px"})]}),(0,t.jsxs)("div",{className:"w-full md:w-6 p-3",children:[(0,t.jsx)("h5",{children:"Square"}),(0,t.jsxs)("div",{className:"flex align-items-end",children:[(0,t.jsx)(o.Skeleton,{size:"2rem",className:"mr-2"}),(0,t.jsx)(o.Skeleton,{size:"3rem",className:"mr-2"}),(0,t.jsx)(o.Skeleton,{size:"4rem",className:"mr-2"}),(0,t.jsx)(o.Skeleton,{size:"5rem"})]})]}),(0,t.jsxs)("div",{className:"w-full md:w-6 p-3",children:[(0,t.jsx)("h5",{children:"Circle"}),(0,t.jsxs)("div",{className:"flex align-items-end",children:[(0,t.jsx)(o.Skeleton,{shape:"circle",size:"2rem",className:"mr-2"}),(0,t.jsx)(o.Skeleton,{shape:"circle",size:"3rem",className:"mr-2"}),(0,t.jsx)(o.Skeleton,{shape:"circle",size:"4rem",className:"mr-2"}),(0,t.jsx)(o.Skeleton,{shape:"circle",size:"5rem"})]})]})]})}),(0,t.jsx)(i.DocSectionCode,{code:l})]})}function k(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-skeleton"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-skeleton-circle"}),(0,t.jsx)("td",{children:"Container element of a determinate progressbar."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-skeleton-none"}),(0,t.jsx)("td",{children:"Container element of an indeterminate progressbar."})]})]})]})})]})}var S=e.i(41158);function x(e){let l={basic:`
const Tailwind = {          
    skeleton: {
        root: ({ props }) => ({
            className: classNames(
                'overflow-hidden',
                '!mb-2',
                'bg-gray-300 dark:bg-gray-800',
                'after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:content after:w-full after:h-full after:bg-blue-400 after:left-full after:transform after:translate-x-full after:z-10 after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent animate-pulse',
                {
                    'rounded-md': props.shape !== 'circle',
                    'rounded-full': props.shape == 'circle'
                }
            )
        })
    }
}
    `},s={javascript:`
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function UnstyledDemo() {
    return (
        <div className="card text-gray-700 dark:text-white/80">
            <div className="w-full">
                <h5>Rectangle</h5>
                <Skeleton className="mb-2"></Skeleton>
                <Skeleton width="10rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
                <Skeleton height="2rem" className="mb-2"></Skeleton>
                <Skeleton width="10rem" height="4rem"></Skeleton>
            </div>
            <div className="w-full">
                <h5>Rounded</h5>
                <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="10rem" className="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="5rem" borderRadius="16px" className="mb-2"></Skeleton>
                <Skeleton height="2rem" className="mb-2" borderRadius="16px"></Skeleton>
                <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
            </div>
            <div className="w-full">
                <h5>Square</h5>
                <div className="flex items-end">
                    <Skeleton size="2rem" className="mr-2"></Skeleton>
                    <Skeleton size="3rem" className="mr-2"></Skeleton>
                    <Skeleton size="4rem" className="mr-2"></Skeleton>
                    <Skeleton size="5rem"></Skeleton>
                </div>
            </div>
            <div className="w-full ">
                <h5>Circle</h5>
                <div className="flex items-end">
                    <Skeleton shape="circle" size="2rem" className="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                    <Skeleton shape="circle" size="5rem"></Skeleton>
                </div>
            </div>
      </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(n.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(S.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(i.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(i.DocSectionCode,{code:s,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:p},{id:"pt.skeleton.options",label:"Skeleton PT Options",component:l.default}];return(0,t.jsx)(s.DocComponent,{title:"React Skeleton Component",header:"Skeleton",description:"Skeleton is a placeholder to display instead of the actual content.",componentDocs:[{id:"import",label:"Import",component:u},{id:"shapes",label:"Shapes",component:f},{id:"card",label:"Card",component:r},{id:"list",label:"List",component:h},{id:"datatable",label:"DataTable",component:m},{id:"accessibility",label:"Accessibility",component:a}],apiDocs:["Skeleton"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:k},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:x}]}]})}],1187)},34577,(e,t,l)=>{let s="/skeleton";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(1187)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})}]);