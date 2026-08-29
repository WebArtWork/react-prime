(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46924,e=>{"use strict";var t=e.i(91398),l=e.i(88850),i=e.i(82948),o=e.i(5180),a=e.i(28137);function n(){let e={basic:`
<span id="lb">Options</span>
<ListBox aria-labelledby="lb" />

<ListBox aria-label="City" />
    `};return(0,t.jsxs)(a.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Value to describe the component can be provided ",(0,t.jsx)("i",{children:"aria-labelledby"})," or ",(0,t.jsx)("i",{children:"aria-label"})," props. The list element has a ",(0,t.jsx)("i",{children:"listbox"})," role with the ",(0,t.jsx)("i",{children:"aria-multiselectable"})," attribute that sets to true when multiple selection is enabled. Each list item has an ",(0,t.jsx)("i",{children:"option"})," role with ",(0,t.jsx)("i",{children:"aria-selected"})," and ",(0,t.jsx)("i",{children:"aria-disabled"})," as their attributes."]}),(0,t.jsxs)("p",{children:["If filtering is enabled, ",(0,t.jsx)("i",{children:"filterInputProps"})," can be defined to give ",(0,t.jsx)("i",{children:"aria-*"})," props to the input element. Alternatively ",(0,t.jsx)("i",{children:"filterPlaceholder"})," is usually utilized by the screen readers as well."]}),(0,t.jsx)(o.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the first selected option, if there is none then first option receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Toggles the selected state of the focused option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles the selected state of the focused option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Moves focus to the first option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Moves focus to the last option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"down arrow"})]}),(0,t.jsx)("td",{children:"Moves focus to the next option and toggles the selection state."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"up arrow"})]}),(0,t.jsx)("td",{children:"Moves focus to the previous option and toggles the selection state."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"space"})]}),(0,t.jsx)("td",{children:"Selects the items between the most recently selected option and the focused option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"control"})," + ",(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"home"})]}),(0,t.jsx)("td",{children:"Selects the focused options and all the options up to the first one."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"control"})," + ",(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"end"})]}),(0,t.jsx)("td",{children:"Selects the focused options and all the options down to the last one."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"control"})," + ",(0,t.jsx)("i",{children:"a"})]}),(0,t.jsx)("td",{children:"Selects all options."})]})]})]})})]})}var s=e.i(91788),r=e.i(27604),c=e.i(10836),d=e.i(183),u=e.i(15498),m=e.i(60150),p=e.i(20484),h=e.i(64691),x=e.i(45543),f=e.i(51551),b=e.i(28653),g=e.i(25926),v=e.i(3935);let y=`
@layer primereact {
    .p-listbox-list-wrapper {
        overflow: auto;
    }
    
    .p-listbox-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    
    .p-listbox-item {
        cursor: pointer;
        position: relative;
        overflow: hidden;
        outline: none;
    }
    
    .p-listbox-filter-container {
        position: relative;
    }
    
    .p-listbox-filter-icon {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }
    
    .p-listbox-filter {
        width: 100%;
    }
}
`,j=u.ComponentBase.extend({defaultProps:{__TYPE:"ListBox",className:null,dataKey:null,disabled:null,emptyFilterMessage:null,emptyMessage:null,filter:!1,filterIcon:null,filterBy:null,filterInputProps:null,filterLocale:void 0,filterMatchMode:"contains",filterPlaceholder:null,filterTemplate:null,filterValue:null,focusOnHover:!0,id:null,itemTemplate:null,invalid:!1,listClassName:null,listStyle:null,metaKeySelection:!1,selectOnFocus:!1,autoOptionFocus:!1,multiple:!1,onChange:null,onFilterValueChange:null,optionDisabled:null,optionGroupChildren:null,optionGroupLabel:null,optionGroupTemplate:null,optionLabel:null,optionValue:null,options:null,style:null,tabIndex:0,tooltip:null,tooltipOptions:null,value:null,virtualScrollerOptions:null,children:void 0},css:{classes:{itemGroup:"p-listbox-item-group",emptyMessage:"p-listbox-empty-message",list:"p-listbox-list",wrapper:({props:e})=>(0,v.classNames)("p-listbox-list-wrapper",e.listClassName),root:({props:e})=>(0,v.classNames)("p-listbox p-component",{"p-disabled":e.disabled,"p-invalid":e.invalid},e.className),item:({props:e})=>(0,v.classNames)("p-listbox-item",{"p-highlight":e.selected,"p-focus":e.focusedOptionIndex===e.index,"p-disabled":e.disabled},e.option.className),filterContainer:"p-listbox-filter-container",filterIcon:"p-listbox-filter-icon",filterInput:"p-listbox-filter",header:"p-listbox-header"},styles:y,inlineStyles:{itemGroup:({scrollerOptions:e})=>({height:e.props?e.props.itemSize:void 0}),list:({options:e,props:t})=>t.virtualScrollerOptions?e.style:void 0}}});var S=e.i(92058),C=e.i(66082),w=e.i(75366);let L=s.memo(e=>{let l=(0,m.useMergeProps)(),{ptCallbacks:{ptm:i,cx:o}}=e,a=(t,l)=>i(t,{hostName:e.hostName,...l}),n={filter:e=>s(e),reset:()=>e.resetFilter()},s=t=>{e.onFilter&&e.onFilter({originalEvent:t,value:t.target.value})},r=(()=>{let r=l({className:o("filterIcon")},a("filterIcon")),c=e.filterIcon||(0,t.jsx)(S.SearchIcon,{...r}),d=w.IconUtils.getJSXIcon(c,{...r},{props:e}),u=l({className:o("header")},a("header")),m=l({className:o("filterContainer")},a("filterContainer")),p=(0,t.jsxs)("div",{...m,children:[(0,t.jsx)(C.InputText,{type:"text",value:e.filter,onChange:s,className:o("filterInput"),disabled:e.disabled,placeholder:e.filterPlaceholder,...e.filterInputProps,pt:i("filterInput"),unstyled:e.unstyled,__parentMetadata:{parent:e.metaData}}),d]});if(e.filterTemplate){let t={className:"p-listbox-filter-container",element:p,filterOptions:n,filterInputChange:s,filterIconClassName:"p-dropdown-filter-icon",props:e};p=f.ObjectUtils.getJSXElement(e.filterTemplate,t)}return(0,t.jsx)("div",{...u,children:p})})();return(0,t.jsx)(t.Fragment,{children:r})});L.displayName="ListBoxHeader";var N=e.i(50901);let I=s.memo(e=>{let[l,i]=s.useState(!1),o=(0,m.useMergeProps)(),{ptCallbacks:{ptm:a,cx:n}}=e,r=e.template?f.ObjectUtils.getJSXElement(e.template,e.option):e.label,c=o({id:e.id,className:n("item",{props:e}),style:e.style,onClick:t=>e.onClick(t,e.option,e.index),onTouchEnd:t=>{e.onTouchEnd&&e.onTouchEnd({originalEvent:t,option:e.option})},onFocus:e=>{i(!0)},onBlur:e=>{i(!1)},tabIndex:"-1",onMouseDown:t=>e.onOptionMouseDown(t,e.index),onMouseMove:t=>e.onOptionMouseMove(t,e.index),"aria-label":e.label,role:"option","aria-selected":e.selected,"aria-disabled":e.disabled,"data-p-disabled":e.disabled},a("item",{hostName:e.hostName,context:{selected:e.selected,disabled:e.disabled,focused:l,focusedOptionIndex:e.focusedOptionIndex}}));return(0,s.createElement)("li",{...c,key:e.optionKey,children:[r,(0,t.jsx)(N.Ripple,{})]})});I.displayName="ListBoxItem";let D=s.memo(s.forwardRef((e,l)=>{let i=(0,m.useMergeProps)(),o=s.useContext(c.PrimeReactContext),a=j.getProps(e,o),[n,v]=s.useState(null),y=s.useRef(null),S=s.useRef(null),C=s.useRef(null),[w,N]=s.useState(-1),[D,T]=s.useState(!1),[B,k]=s.useState(""),[R,F]=s.useState(""),P=s.useRef(null),O=s.useRef(null),E=s.useRef(null),M=s.useRef(null),U=s.useRef(!1),G=(a.onFilterValueChange?a.filterValue:B)||"",Y=G&&G.trim().length>0,K={props:a,state:{filterValue:G}},_=j.setMetaData(K);(0,u.useHandleStyle)(j.css.styles,_.isUnstyled,{name:"listbox"});let A=(e,t,l=-1)=>{a.disabled||eb(t)||(a.multiple?$(e.originalEvent,t):z(e.originalEvent,t),U.current=!1,-1!==l&&v(l))},H=(e,t)=>{en(e,t)},V=(e,t)=>{a.focusOnHover&&D&&en(e,t)},J=()=>{a.disabled||(U.current=!0)},z=(e,t)=>{let l=eh(t),i=!1,o=null;if(!U.current&&a.metaKeySelection){let a=e.metaKey||e.ctrlKey;l?a&&(o=null,i=!0):(o=ef(t),i=!0)}else o=l?null:ef(t),i=!0;i&&ec(e,o)},$=(e,t)=>{let l=eh(t),i=!1,o=null;if(!U&&a.metaKeySelection){let n=e.metaKey||e.ctrlKey;o=l?n?ed(t):[ef(t)]:[...o=n&&a.value||[],ef(t)],i=!0}else o=l?ed(t):[...a.value||[],ef(t)],i=!0;i&&a.onChange({originalEvent:e,value:o,stopPropagation:()=>{e?.stopPropagation()},preventDefault:()=>{e?.preventDefault()},target:{name:a.name,id:a.id,value:o}})},q=()=>f.ObjectUtils.isNotEmpty(a.value),X=e=>f.ObjectUtils.isNotEmpty(e)&&!(eb(e)||a.optionGroupLabel&&e.optionGroup&&e.group),W=e=>X(e)&&eh(e),Q=()=>ew.findIndex(e=>X(e)),Z=()=>f.ObjectUtils.findLastIndex(ew,e=>X(e)),ee=(e,t=!1)=>{let l=-1;return q()&&(l=t?-1===(l=ei(e))?el(e):l:-1===(l=el(e))?ei(e):l),l>-1?l:e},et=e=>X(e)&&ex(e)?.toLocaleLowerCase(a.filterLocale).startsWith(R.toLocaleLowerCase(a.filterLocale)),el=e=>{let t=q()&&e<ew.length-1?ew.slice(e+1).findIndex(e=>W(e)):-1;return t>-1?t+e+1:-1},ei=e=>{let t=q()&&e>0?f.ObjectUtils.findLastIndex(ew.slice(0,e),e=>W(e)):-1;return t>-1?t:-1},eo=(e,t=-1,l=-1)=>{if(-1===t&&(t=ee(l,!0)),-1===l&&(l=ee(t)),-1!==t&&-1!==l){let i=Math.min(t,l),o=Math.max(t,l);ec(e,ew.slice(i,o+1).filter(e=>X(e)).map(e=>ef(e)))}},ea=()=>{let e=q()?ew.findIndex(e=>W(e)):-1;return e<0?Q():e},en=(e,t)=>{n!==t&&(v(t),er(),e&&a.selectOnFocus&&!a.multiple&&A(e,ew[t]))},es=e=>{let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":let l,i;i=-1!==n?(l=n<ew.length-1?ew.slice(n+1).findIndex(e=>X(e)):-1)>-1?l+n+1:n:ea(),a.multiple&&e.shiftKey&&eo(e,w,i),en(e,i),e.preventDefault();break;case"ArrowUp":let o,s,r;r=-1!==n?(o=n>0?f.ObjectUtils.findLastIndex(ew.slice(0,n),e=>X(e)):-1)>-1?o:n:(s=q()?f.ObjectUtils.findLastIndex(ew,e=>W(e)):-1)<0?Z():s,a.multiple&&e.shiftKey&&eo(e,r,w),en(e,r),e.preventDefault();break;case"Home":((e,t=!1)=>{if(t)e.currentTarget.setSelectionRange(0,0),v(-1);else{let t=e.metaKey||e.ctrlKey,l=Q();a.multiple&&e.shiftKey&&t&&eo(e,l,w),en(e,l)}e.preventDefault()})(e);break;case"End":((e,t=!1)=>{if(t){let t=e.currentTarget,l=t.value.length;t.setSelectionRange(l,l),v(-1)}else{let t=e.metaKey||e.ctrlKey,l=Z();a.multiple&&e.shiftKey&&t&&eo(e,w,l),en(e,l)}e.preventDefault()})(e);break;case"PageDown":er(ew.length-1),e.preventDefault();break;case"PageUp":er(0),e.preventDefault();break;case"Enter":case"NumpadEnter":case"Space":-1!==n&&(a.multiple&&e.shiftKey?eo(e,n):A(e,ew[n])),e.preventDefault(),e.preventDefault();break;case"Tab":break;case"ShiftLeft":case"ShiftRight":N(n);break;default:if(a.multiple&&"a"===e.key&&t){ec(e,ew.filter(e=>X(e)).map(e=>ef(e))),e.preventDefault();break}if(!t&&f.ObjectUtils.isPrintableCharacter(e.key)){let t;F((R||"")+e.key),t=-1,f.ObjectUtils.isNotEmpty(R)&&(-1===(t=-1!==n?-1===(t=ew.slice(n).findIndex(e=>et(e)))?ew.slice(0,n).findIndex(e=>et(e)):t+n:ew.findIndex(e=>et(e)))&&-1===n&&(t=ea()),-1!==t&&en(e,t)),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>{F(""),y.current=null},500),e.preventDefault()}}},er=(e=-1)=>{setTimeout(()=>{if(!M.current)return;let t=-1!==e?`${E.current}_${e}`:-1!==n?`${E.current}_${n}`:null,l=M.current.querySelector(`li[id="${t}"]`);l?l.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"}):a.virtualScrollerOptions&&O.current&&O.current.scrollToIndex(-1!==e?e:n)},0)},ec=(e,t)=>{a.onChange&&a.onChange({originalEvent:e,value:t,stopPropagation:()=>{e?.stopPropagation()},preventDefault:()=>{e?.preventDefault()},target:{name:a.name,id:a.id,value:t}})},ed=e=>a.value.filter(t=>!f.ObjectUtils.equals(t,ef(e),a.dataKey)),eu=()=>a.optionValue?null:a.dataKey,em=(e,t)=>{let l=eu();return t.findIndex(t=>f.ObjectUtils.equals(e,ef(t),l))},ep=(e,t)=>f.ObjectUtils.equals(e,t,eu()),eh=e=>{let t=ef(e);return a.multiple?(a.value||[]).some(e=>ep(e,t)):ep(a.value,t)},ex=e=>a.optionLabel?f.ObjectUtils.resolveFieldData(e,a.optionLabel):e&&void 0!==e.label?e.label:e,ef=e=>a.optionValue?f.ObjectUtils.resolveFieldData(e,a.optionValue):e&&void 0!==e.value?e.value:e,eb=e=>a.optionDisabled?f.ObjectUtils.isFunction(a.optionDisabled)?a.optionDisabled(e):f.ObjectUtils.resolveFieldData(e,a.optionDisabled):!!e&&void 0!==e.disabled&&e.disabled,eg=()=>{T(!0),v(-1!==n?n:a.autoOptionFocus?ea():(()=>{if(q())if(!a.multiple)return ew.findIndex(e=>W(e));else for(let e=a.value.length-1;e>=0;e--){let t=a.value[e],l=ew.findIndex(e=>W(e)&&ep(t,ef(e)));if(l>-1)return l}return -1})()),((e=D)=>{if(a.selectOnFocus&&a.autoOptionFocus&&!q()&&!a.multiple&&e){let e=ea();A(null,ew[e]),v(e)}})(!0)},ev=()=>{T(!1),v(-1),N(-1),F("")},ey=e=>f.ObjectUtils.resolveFieldData(e,a.optionGroupChildren),ej=e=>(e||[]).reduce((e,t,l)=>{e.push({optionGroup:t,group:!0,index:l,code:t.code,label:t.label});let i=ey(t);return i&&i.forEach(t=>e.push(t)),e},[]);s.useImperativeHandle(l,()=>({props:a,focus:()=>x.DomHandler.focusFirstElement(P.current),getElement:()=>P.current,getVirtualScroller:()=>O.current})),(0,p.useMountEffect)(()=>{if(O.current){let e=(()=>{if(null!=a.value&&ew)if(!a.optionGroupLabel)return em(a.value,ew);else for(let e=0;e<ew.length;e++){let t=em(a.value,ey(ew[e]));if(-1!==t)return{group:e,option:t}}return -1})();-1!==e&&setTimeout(()=>O.current.scrollToIndex(e),0)}E.current=(0,b.UniqueComponentId)()});let eS=(e,l,o={})=>{let r={height:o.props?o.props.itemSize:void 0};if(e.group&&e.optionGroup&&a.optionGroupLabel){let t=a.optionGroupTemplate?f.ObjectUtils.getJSXElement(a.optionGroupTemplate,e,l):f.ObjectUtils.resolveFieldData(e,a.optionGroupLabel),n=l+"_"+f.ObjectUtils.resolveFieldData(e,a.optionGroupLabel),r=i({className:_.cx("itemGroup"),style:_.sx("itemGroup",{scrollerOptions:o}),role:"group"},_.ptm("itemGroup"));return(0,s.createElement)("li",{...r,key:n},t)}let c=ex(e),d=l+"_"+(a.dataKey?f.ObjectUtils.resolveFieldData(e,a.dataKey):ex(e)),u=eb(e);return(0,t.jsx)(I,{id:E.current+"_"+l,hostName:"ListBox",optionKey:d,label:c,index:l,onOptionMouseDown:H,onOptionMouseMove:V,focusedOptionIndex:n,option:e,style:r,template:a.itemTemplate,selected:eh(e),onClick:A,onTouchEnd:J,disabled:u,ptCallbacks:_,metaData:K},d)},eC=(e,l)=>{let o=i({className:_.cx("emptyMessage")},_.ptm("emptyMessage")),n=f.ObjectUtils.getJSXElement(e,a)||(0,d.localeOption)(l?"emptyFilterMessage":"emptyMessage");return(0,t.jsx)("li",{...o,children:n})},ew=(()=>{let e=a.optionGroupLabel?ej(a.options):a.options;if(Y){let t=G.trim().toLocaleLowerCase(a.filterLocale),l=a.filterBy?a.filterBy.split(","):[a.optionLabel||"label"];if(a.optionGroupLabel){let e=[];for(let i of a.options){let o=r.FilterService.filter(ey(i),l,t,a.filterMatchMode,a.filterLocale);o&&o.length&&e.push({...i,items:o})}return ej(e)}return r.FilterService.filter(e,l,t,a.filterMatchMode,a.filterLocale)}return e})(),eL=f.ObjectUtils.isNotEmpty(a.tooltip),eN=j.getOtherProps(a),eI=f.ObjectUtils.reduceKeys(eN,x.DomHandler.ARIA_PROPS),eD=(()=>{if(a.virtualScrollerOptions){let e={...a.virtualScrollerOptions,items:ew,onLazyLoad:e=>a.virtualScrollerOptions.onLazyLoad({...e,filter:ew}),itemTemplate:(e,t)=>e&&eS(e,t.index,t),contentTemplate:e=>{let l=i({ref:M,style:_.sx("list",{options:e}),className:_.cx("list",{options:e}),role:"listbox",tabIndex:"-1","aria-multiselectable":a.multiple,onFocus:eg,onBlur:ev,onKeyDown:es,...eI},_.ptm("list"));return(0,t.jsx)("ul",{...l,children:e.children})}};return(0,t.jsx)(g.VirtualScroller,{ref:O,...e,pt:_.ptm("virtualScroller")})}let e=f.ObjectUtils.isNotEmpty(ew)?ew.map(eS):Y?eC(a.emptyFilterMessage,!0):eC(a.emptyMessage),l=i({ref:M,className:_.cx("list"),role:"listbox","aria-multiselectable":a.multiple,tabIndex:"-1",onFocus:eg,onBlur:ev,onKeyDown:es,...eI},_.ptm("list"));return(0,t.jsx)("ul",{...l,children:e})})(),eT=a.filter?(0,t.jsx)(L,{hostName:"ListBox",filter:G,filterIcon:a.filterIcon,onFilter:e=>{O.current&&O.current.scrollToIndex(0);let{originalEvent:t,value:l}=e;a.onFilterValueChange?a.onFilterValueChange({originalEvent:t,value:l}):k(l)},resetFilter:()=>{k(""),a.onFilter&&a.onFilter({filter:""})},filterTemplate:a.filterTemplate,disabled:a.disabled,filterPlaceholder:a.filterPlaceholder,filterInputProps:a.filterInputProps,ptCallbacks:_,metaData:K}):null,eB=i({className:_.cx("wrapper"),style:a.listStyle},_.ptm("wrapper")),ek=i({ref:P,id:a.id,className:_.cx("root"),style:a.style},j.getOtherProps(a),_.ptm("root")),eR=i({ref:S,role:"presentation","aria-hidden":"true",className:"p-hidden-accessible p-hidden-focusable",tabIndex:a.disabled?-1:a.tabIndex,onFocus:()=>{x.DomHandler.focus(M.current);let e=x.DomHandler.getFirstFocusableElement(P.current,':not([data-p-hidden-focusable="true"])');C.current.tabIndex=x.DomHandler.isElement(e)?void 0:-1,S.current.tabIndex=-1,en(null,0)},"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0},_.ptm("hiddenFirstFocusableEl")),eF=i({ref:C,role:"presentation","aria-hidden":"true",className:"p-hidden-accessible p-hidden-focusable",tabIndex:a.disabled?-1:a.tabIndex,onFocus:e=>{if(e.relatedTarget===M.current){let e=x.DomHandler.getFirstFocusableElement(P.current,':not([data-p-hidden-focusable="true"])');x.DomHandler.focus(e),S.current.tabIndex=void 0}else x.DomHandler.focus(S.current);C.current.tabIndex=-1},"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0},_.ptm("hiddenLastFocusableEl"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{...ek,children:[(0,t.jsx)("span",{...eR}),eT,(0,t.jsx)("div",{...eB,children:eD}),(0,t.jsx)("span",{...eF})]}),eL&&(0,t.jsx)(h.Tooltip,{target:P,content:a.tooltip,pt:_.ptm("tooltip"),...a.tooltipOptions})]})}));function T(e){let[l,i]=(0,s.useState)(null),n={basic:`
<ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        `,javascript:`
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function BasicDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">  
            <ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';

interface City {
    name: string;
    code: string;
} 

export default function BasicDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">  
            <ListBox value={selectedCity} onChange={(e: ListBoxChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["ListBox is used as a controlled component with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties along with an ",(0,t.jsx)("i",{children:"options"})," collection. Label and value of an option are defined with the ",(0,t.jsx)("i",{children:"optionLabel"})," and ",(0,t.jsx)("i",{children:"optionValue"})," ","properties respectively. Default property name for the ",(0,t.jsx)("i",{children:"optionLabel"})," is ",(0,t.jsx)("i",{children:"label"})," and ",(0,t.jsx)("i",{children:"value"})," for the ",(0,t.jsx)("i",{children:"optionValue"}),". If ",(0,t.jsx)("i",{children:"optionValue"})," is omitted and the object has no ",(0,t.jsx)("i",{children:"value"})," property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no ",(0,t.jsx)("i",{children:"optionLabel"})," and ",(0,t.jsx)("i",{children:"optionValue"})," would be necessary."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(D,{value:l,onChange:e=>i(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",className:"w-full md:w-14rem"})}),(0,t.jsx)(o.DocSectionCode,{code:n})]})}function B(e){let l={basic:`
<ListBox disabled options={cities} optionLabel="name" className="w-full md:w-14rem" />
        `,javascript:`
import React from "react";
import { ListBox } from 'primereact/listbox';

export default function DisabledDemo() {
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <ListBox disabled options={cities} optionLabel="name" className="w-full md:w-14rem" />
        </div>
    )
}
        `,typescript:`
import React from "react";
import { ListBox } from 'primereact/listbox';

interface City {
    name: string;
    code: string;
}

export default function DisabledDemo() {
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <ListBox disabled options={cities} optionLabel="name" className="w-full md:w-14rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(D,{disabled:!0,options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",className:"w-full md:w-14rem"})}),(0,t.jsx)(o.DocSectionCode,{code:l})]})}function k(e){let[l,i]=(0,s.useState)(null),n={basic:`
<ListBox filter value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        `,javascript:`
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function BasicDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">  
            <ListBox filter value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';

interface City {
    name: string;
    code: string;
} 

export default function BasicDemo() {
    const [selectedCity, setSelectedCity] = useState<City |\xa0null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">  
            <ListBox filter value={selectedCity} onChange={(e: ListBoxChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["ListBox provides built-in filtering that is enabled by adding the ",(0,t.jsx)("i",{children:"filter"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(D,{filter:!0,value:l,onChange:e=>i(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",className:"w-full md:w-14rem"})}),(0,t.jsx)(o.DocSectionCode,{code:n})]})}function R(e){let[l,i]=(0,s.useState)(null),n={basic:`
<ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={groupedCities} optionLabel="label" 
    optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
        `,javascript:`
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function GroupDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
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

    const groupTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                <div>{option.label}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={groupedCities} optionLabel="label" 
                optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';

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
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const groupedCities: Country[] = [
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

    const groupTemplate = (option: City) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }}/>
                <div>{option.label}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedCity} onChange={(e: ListBoxChangeEvent) => setSelectedCity(e.value)} options={groupedCities} optionLabel="label" 
                optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Options can be grouped when a nested data structures is provided. To define the label of a group ",(0,t.jsx)("i",{children:"optionGroupLabel"})," property is needed and also ",(0,t.jsx)("i",{children:"optionGroupChildren"})," is required to define the property that refers to the children of a group."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(D,{value:l,onChange:e=>i(e.value),options:[{label:"Germany",code:"DE",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",code:"US",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",code:"JP",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}],optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items",optionGroupTemplate:e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:e.name,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`flag flag-${e.code.toLowerCase()}`,style:{width:"18px"}}),(0,t.jsx)("div",{children:e.label})]}),className:"w-full md:w-14rem",listStyle:{maxHeight:"250px"}})}),(0,t.jsx)(o.DocSectionCode,{code:n})]})}function F(e){let l={basic:`
import { ListBox } from 'primereact/listbox';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e}),(0,t.jsx)(o.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function P(e){let[l,i]=(0,s.useState)(null),n={basic:`
<ListBox invalid value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
    className="w-full md:w-14rem" />
        `,javascript:`
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function InvalidDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">  
            <ListBox invalid value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                className="w-full md:w-14rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';

interface City {
    name: string;
    code: string;
} 

export default function InvalidDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">  
            <ListBox invalid value={selectedCity} onChange={(e: ListBoxChangeEvent) => setSelectedCity(e.value)} 
                options={cities} optionLabel="name"  className="w-full md:w-14rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(D,{invalid:!0,value:l,onChange:e=>i(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",className:"w-full md:w-14rem"})}),(0,t.jsx)(o.DocSectionCode,{code:n})]})}function O(e){let[l,i]=(0,s.useState)(null),n={basic:`
<ListBox multiple value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        `,javascript:`
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function MultipleDemo() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">  
            <ListBox multiple value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';

interface City {
    name: string;
    code: string;
} 

export default function MultipleDemo() {
    const [selectedCities, setSelectedCities] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">  
            <ListBox multiple value={selectedCities} onChange={(e: ListBoxChangeEvent) => setSelectedCities(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["ListBox allows choosing a single item by default, enable ",(0,t.jsx)("i",{children:"multiple"})," property to choose more than one. When the optional ",(0,t.jsx)("i",{children:"metaKeySelection"})," is present, behavior is changed in a way that selecting a new item requires meta key to be present."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(D,{multiple:!0,value:l,onChange:e=>i(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",className:"w-full md:w-14rem"})}),(0,t.jsx)(o.DocSectionCode,{code:n})]})}D.displayName="ListBox";let E=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/listbox.jpg",alt:"listbox"})})]});function M(e){let[l,i]=(0,s.useState)(null),n={basic:`
<ListBox value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" 
    itemTemplate={countryTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
        `,javascript:`
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function TemplateDemo() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const countryTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} style={{ width: '1.25rem', marginRight: '.5rem' }}/>
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" 
                itemTemplate={countryTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';

interface Country {
    name: string;
    code: string;
}

export default function TemplateDemo() {
    const [selectedCountries, setSelectedCountries] = useState<Country | null>(null);
    const countries: Country[] = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const countryTemplate = (option: Country) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${option.code.toLowerCase()}\`} style={{ width: '1.25rem', marginRight: '.5rem' }}/>
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedCountry} onChange={(e: ListBoxChangeEvent) => setSelectedCountry(e.value)} options={countries} optionLabel="name" 
                itemTemplate={countryTemplate} className="w-full md:w-14rem" listStyle={{ maxHeight: '250px' }} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Custom content for an option is displayed with the ",(0,t.jsx)("i",{children:"itemTemplate"})," property that takes an option as a parameter. Additional available templating sections are ",(0,t.jsx)("i",{children:"filterTemplate"})," and ",(0,t.jsx)("i",{children:"optionGroupTemplate"}),"."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(D,{value:l,onChange:e=>i(e.value),options:[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}],optionLabel:"name",itemTemplate:e=>(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.name,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`flag flag-${e.code.toLowerCase()}`,style:{width:"1.25rem",marginRight:".5rem"}}),(0,t.jsx)("div",{children:e.name})]}),className:"w-full md:w-14rem",listStyle:{maxHeight:"250px"}})}),(0,t.jsx)(o.DocSectionCode,{code:n})]})}function U(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-listbox"}),(0,t.jsx)("td",{children:"Main container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-listbox-header"}),(0,t.jsx)("td",{children:"Header element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-listbox-list-wrapper"}),(0,t.jsx)("td",{children:"Container of list element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-listbox-list"}),(0,t.jsx)("td",{children:"List element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-listbox-item"}),(0,t.jsx)("td",{children:"An item in the list element."})]})]})]})})]})}var G=e.i(41158);function Y(e){let l={basic:`
const Tailwind = {
    listbox: {
        root: {
            className: classNames('bg-white dark:bg-gray-900 border border-gray-400 dark:border-blue-900/40 transition-colors duration-200 ease-in-out rounded-md', 'w-full md:w-56')
        },
        wrapper: 'overflow-auto',
        list: 'py-3 list-none m-0',
        item: ({ context }) => ({
            className: classNames('cursor-pointer font-normal overflow-hidden relative whitespace-nowrap', 'm-0 p-3 border-0  transition-shadow duration-200 rounded-none', {
                'text-gray-700 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': !context.focused && !context.selected,
                'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': context.focused && !context.selected,
                'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.selected,
                'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.selected
            })
        }),
        itemGroup: {
            className: classNames('m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto')
        },
        header: {
            className: classNames('p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg', 'dark:bg-gray-800 dark:text-white/80 dark:border-blue-900/40')
        },
        filterContainer: 'relative',
        filterInput: {
            root: {
                className: classNames(
                    'pr-7 -mr-7',
                    'w-full',
                    'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80',
                    'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
                )
            }
        },
        filterIcon: '-mt-2 absolute top-1/2'
    }
}
        `},i={javascript:`
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function UnstyledDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-center">  
            <ListBox value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full md:w-14rem" />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(G.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(o.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(o.DocSectionCode,{code:i,embedded:!0})]})})}function K(e){let[l,i]=(0,s.useState)(null),n=Array.from({length:1e5}).map((e,t)=>({label:`Item #${t}`,value:t})),r={basic:`
<ListBox value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} 
    virtualScrollerOptions={{ itemSize: 38 }} className="w-full md:w-14rem" listStyle={{ height: '250px' }} />
        `,javascript:`
import React, { useState } from "react";
import { ListBox } from 'primereact/listbox';

export default function VirtualScrollDemo() {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} 
                virtualScrollerOptions={{ itemSize: 38 }} className="w-full md:w-14rem" listStyle={{ height: '250px' }} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { ListBox, ListBoxChangeEvent } from 'primereact/listbox';

interface Item {
    label: string;
    value: number;
}

export default function VirtualScrollDemo() {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const items: Item[] = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    return (
        <div className="card flex justify-content-center">
            <ListBox value={selectedItem} onChange={(e: ListBoxChangeEvent) => setSelectedItem(e.value)} options={items} 
                virtualScrollerOptions={{ itemSize: 38 }} className="w-full md:w-14rem" listStyle={{ height: '250px' }} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with ",(0,t.jsx)("i",{children:"virtualScrollerOptions"})," property, refer to the"," ",(0,t.jsx)(G.default,{href:"/virtualscroller",children:"VirtualScroller"})," for more information about the available options as it is used internally by ListBox."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(D,{value:l,onChange:e=>i(e.value),options:n,virtualScrollerOptions:{itemSize:38},className:"w-full md:w-14rem",listStyle:{height:"250px"}})}),(0,t.jsx)(o.DocSectionCode,{code:r})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:E},{id:"pt.listbox.options",label:"Listbox PT Options",component:l.default}];return(0,t.jsx)(i.DocComponent,{title:"React ListBox Component",header:"ListBox",description:"ListBox is used to select one or more values from a list of items.",componentDocs:[{id:"import",label:"Import",component:F},{id:"basic",label:"Basic",component:T},{id:"multiple",label:"Multiple",component:O},{id:"group",label:"Group",component:R},{id:"filter",label:"Filter",component:k},{id:"template",label:"Template",component:M},{id:"virtualscroll",label:"Virtual Scroll",component:K},{id:"invalid",label:"Invalid",component:P},{id:"disabled",label:"Disabled",component:B},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["ListBox"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:U},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:Y}]}]})}],46924)},78642,(e,t,l)=>{let i="/listbox";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(46924)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);