(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,21766,e=>{"use strict";var t=e.i(91398),i=e.i(88850),l=e.i(82948),n=e.i(28137);function a(){return(0,t.jsxs)(n.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Accordion header elements have a ",(0,t.jsx)("i",{children:"button"})," role, an ",(0,t.jsx)("i",{children:"aria-label"})," defined using the ",(0,t.jsx)("i",{children:"label"})," property of the menuitem model and ",(0,t.jsx)("i",{children:"aria-controls"})," to define the id of the content section along with ",(0,t.jsx)("i",{children:"aria-expanded"})," ","for the visibility state."]}),(0,t.jsxs)("p",{children:["The content of an accordion panel uses ",(0,t.jsx)("i",{children:"region"})," role, defines an id that matches the ",(0,t.jsx)("i",{children:"aria-controls"})," of the header and ",(0,t.jsx)("i",{children:"aria-labelledby"})," referring to the id of the header."]}),(0,t.jsxs)("p",{children:["The tree elements has a ",(0,t.jsx)("i",{children:"tree"})," as the role and each menu item has a ",(0,t.jsx)("i",{children:"treeitem"})," role along with ",(0,t.jsx)("i",{children:"aria-label"}),", ",(0,t.jsx)("i",{children:"aria-selected"})," and ",(0,t.jsx)("i",{children:"aria-expanded"})," attributes. The container element of a treenode has the"," ",(0,t.jsx)("i",{children:"group"})," role. The ",(0,t.jsx)("i",{children:"aria-setsize"}),", ",(0,t.jsx)("i",{children:"aria-posinset"})," and ",(0,t.jsx)("i",{children:"aria-level"})," attributes are calculated implicitly and added to each treeitem."]}),(0,t.jsx)("h3",{children:"Header Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Adds focus to the first header when focus moves in to the component, if there is already a focused tab header then moves the focus out of the component based on the page tab sequence."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Toggles the visibility of the content."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles the visibility of the content."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"If panel is collapsed then moves focus to the next header, otherwise first treenode of the panel receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"If previous panel is collapsed then moves focus to the previous header, otherwise last treenode of the previous panel receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Moves focus to the first header."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Moves focus to the last header."})]})]})]})}),(0,t.jsx)("h3",{children:"Tree Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the next focusable element in the page tab order."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"tab"})]}),(0,t.jsx)("td",{children:"Moves focus to the previous focusable element in the page tab order."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Activates the focused treenode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Activates the focused treenode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next treenode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous treenode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"right arrow"})}),(0,t.jsx)("td",{children:"If node is closed, opens the node otherwise moves focus to the first child node."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"If node is open, closes the node otherwise moves focus to the parent node."})]})]})]})})]})}var s=e.i(5180),o=e.i(91788),r=e.i(10836),c=e.i(15498),d=e.i(87350),p=e.i(60150),m=e.i(20484),u=e.i(48214),h=e.i(75676),b=e.i(45543),f=e.i(75366),x=e.i(51551),y=e.i(28653),g=e.i(3935);let j=`
@layer primereact {
    .p-panelmenu .p-panelmenu-header-link {
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        position: relative;
        text-decoration: none;
    }

    .p-panelmenu .p-panelmenu-header-link:focus {
        z-index: 1;
    }

    .p-panelmenu .p-submenu-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-panelmenu .p-menuitem-link {
        display: flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
        text-decoration: none;
        text-decoration: none;
        position: relative;
        overflow: hidden;
    }

    .p-panelmenu .p-menuitem-text {
        line-height: 1;
    }
}
`,v=c.ComponentBase.extend({defaultProps:{__TYPE:"PanelMenu",id:null,model:null,style:null,expandedKeys:null,className:null,onExpandedKeysChange:null,onOpen:null,onClose:null,multiple:!1,transitionOptions:null,expandIcon:null,collapseIcon:null,children:void 0},css:{classes:{headerIcon:({item:e})=>(0,g.classNames)("p-menuitem-icon",e.icon),headerSubmenuIcon:"p-submenu-icon",headerLabel:"p-menuitem-text",headerAction:"p-panelmenu-header-link",panel:({item:e})=>(0,g.classNames)("p-panelmenu-panel",e.className),header:({active:e,item:t})=>(0,g.classNames)("p-component p-panelmenu-header",{"p-highlight":e&&!!t.items,"p-disabled":t.disabled}),headerContent:"p-panelmenu-header-content",menuContent:"p-panelmenu-content",root:"p-panelmenu p-component",separator:"p-menuitem-separator",toggleableContent:({active:e})=>(0,g.classNames)("p-toggleable-content",{"p-toggleable-content-collapsed":!e}),icon:({item:e})=>(0,g.classNames)("p-menuitem-icon",e.icon),label:"p-menuitem-text",submenuicon:"p-submenu-icon",content:"p-menuitem-content",action:({item:e})=>(0,g.classNames)("p-menuitem-link",{"p-disabled":e.disabled}),menuitem:({item:e,focused:t,disabled:i})=>(0,g.classNames)("p-menuitem",e.className,{"p-focus":t,"p-disabled":i}),menu:"p-panelmenu-root-list",submenu:"p-submenu-list",transition:"p-toggleable-content"},styles:j}});var w=e.i(71834),N=e.i(50901);let k=o.memo(o.forwardRef((e,i)=>{let l=(0,p.useMergeProps)(),{ptm:n,cx:a}=e,s=o.useRef(null),r=(t,i)=>n(t,{hostName:e.hostName,...i}),c=(e,t,i)=>r(t,{context:{item:e,index:i,active:y(e),focused:w(e),disabled:v(e)}}),m=t=>`${e.panelId}_${t.key}`,b=(e,t,i)=>e&&e.item?x.ObjectUtils.getItemValue(e.item[t],i):void 0,y=t=>e.activeItemPath&&e.activeItemPath.some(e=>e.key===t.key)||!!t.item?.expanded,j=e=>!1!==b(e,"visible"),v=e=>b(e,"disabled"),w=t=>e.focusedItemId===m(t),I=e=>x.ObjectUtils.isNotEmpty(e.items),S=t=>{e.onItemToggle(t)};o.useImperativeHandle(i,()=>({getElement:()=>s.current}));let P=e.model?e.model.map((i,s)=>{let p,P;return!1===i.visible?null:b(i,"separator")?(P=l({id:p=e.id+"_sep_"+s,className:a("separator"),role:"separator"},r("separator")),(0,o.createElement)("li",{...P,key:p})):((i,s)=>{let p=i.item;if(!1===j(i))return null;let P=m(i),D=y(i),E=w(i),C=v(p),T=(0,g.classNames)("p-menuitem-link",{"p-disabled":p.disabled}),R=(0,g.classNames)("p-menuitem-icon",p.icon),M=l({className:a("icon",{item:p})},c(i,"icon",s)),_=f.IconUtils.getJSXIcon(p.icon,{...M},{props:e.menuProps}),O=l({className:a("label")},c(i,"label",s)),U=p.label&&(0,t.jsx)("span",{...O,children:p.label}),K=l({className:a("submenuicon")},c(i,"submenuicon",s)),A=p.items&&f.IconUtils.getJSXIcon(D?e.collapseIcon||(0,t.jsx)(u.ChevronDownIcon,{...K}):e.expandIcon||(0,t.jsx)(h.ChevronRightIcon,{...K})),F=((i,s)=>{let c=o.createRef(),p=l({className:a("toggleableContent",{active:s})},r("toggleableContent"));if(j(i)&&I(i)){let o=l({classNames:a("transition"),timeout:{enter:1e3,exit:450},in:s,unmountOnExit:!0},r("transition"));return(0,t.jsx)(d.CSSTransition,{nodeRef:c,...o,children:(0,t.jsx)("div",{ref:c,...p,children:(0,t.jsx)(k,{id:m(i)+"_list",role:"group",panelId:e.panelId,level:e.level+1,focusedItemId:e.focusedItemId,activeItemPath:e.activeItemPath,onItemToggle:S,menuProps:e.menuProps,model:i.items,expandIcon:e.expandIcon,collapseIcon:e.collapseIcon,ptm:n,cx:a})})})}return null})(i,D),H=l({href:p.url||"#",className:a("action",{item:p}),target:p.target,onFocus:e=>e.stopPropagation(),tabIndex:"-1"},c(i,"action",s)),B=(0,t.jsxs)("a",{...H,children:[A,_,U,(0,t.jsx)(N.Ripple,{})]});if(p.template){let t={className:T,labelClassName:"p-menuitem-text",iconClassName:R,submenuIconClassName:"p-panelmenu-icon",element:B,props:e,leaf:!p.items,active:D};B=x.ObjectUtils.getJSXElement(p.template,p,t)}let L=l({onClick:e=>{!b(i,"url")&&e.preventDefault(),b(i,"command",{originalEvent:e,item:i.item}),S({processedItem:i,expanded:!y(i)})},className:a("content")},c(i,"content",s)),$=l({id:P,className:a("menuitem",{item:p,focused:E,disabled:C}),style:p.style,role:"treeitem","aria-label":p.label,"aria-expanded":I(p)?D:void 0,"aria-level":e.level+1,"aria-setsize":e.model.filter(e=>j(e)&&!b(e,"separator")).length,"aria-posinset":s-e.model.slice(0,s).filter(e=>j(e)&&b(e,"separator")).length+1,"data-p-focused":E,"data-p-disabled":C},c(i,"menuitem",s));return(0,o.createElement)("li",{...$,key:P,children:[(0,t.jsx)("div",{...L,children:B}),F]})})(i,s)}):null,D=e.root?"menu":"submenu",E=l({id:e.id,ref:s,tabIndex:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onKeyDown:e.onKeyDown,"aria-activedescendant":e.ariaActivedescendant,role:e.role,className:(0,g.classNames)(a(D),e.className)},n(D));return(0,t.jsx)("ul",{...E,children:P})}));k.displayName="PanelMenuSub";let I=o.memo(e=>{let{ptm:i,cx:l}=e,[n,a]=o.useState(!1),[s,r]=o.useState(null),[c,d]=o.useState(null),[p,m]=o.useState([]),[u,h]=o.useState(null),[f,y]=o.useState([]),g=o.useRef(null),j=o.useRef(null),v=o.useRef(null),N=(e,t)=>e&&e.item?x.ObjectUtils.getItemValue(e.item[t]):void 0,I=()=>v.current&&v.current.getElement(),S=e=>{_({originalEvent:e,processedItem:x.ObjectUtils.isNotEmpty(s)?R(s):C(),focusOnNext:!0}),e.preventDefault()},P=e=>{if(x.ObjectUtils.isNotEmpty(s)){let e=b.DomHandler.findSingle(I(),`li[id="${c}"]`),t=e&&(b.DomHandler.findSingle(e,'[data-pc-section="action"]')||b.DomHandler.findSingle(e,"a,button"));t?t.click():e&&e.click()}e.preventDefault()},D=e=>E(e)&&N(e,"label").toLocaleLowerCase().startsWith(g.current.toLocaleLowerCase()),E=e=>!!e&&!N(e,"disabled")&&!N(e,"separator"),C=()=>f.find(e=>E(e)),T=()=>x.ObjectUtils.findLast(f,e=>E(e)),R=e=>{let t=f.findIndex(t=>t.key===e.key);return(t<f.length-1?f.slice(t+1).find(e=>E(e)):void 0)||e},M=e=>{let t=f.findIndex(t=>t.key===e.key);return(t>0?x.ObjectUtils.findLast(f.slice(0,t),e=>E(e)):void 0)||e},_=t=>{let{originalEvent:i,processedItem:l,focusOnNext:n,selfCheck:a,allowHeaderFocus:o=!0}=t;x.ObjectUtils.isNotEmpty(s)&&s.key!==l.key?(r(l),O()):o&&e.onHeaderFocus&&e.onHeaderFocus({originalEvent:i,focusOnNext:n,selfCheck:a})},O=()=>{let e=b.DomHandler.findSingle(I(),`li[id="${c}"]`);e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},U=(t,i,l=0)=>{let n=i||0===l&&e.model;if(!n)return null;for(let e=0;e<n.length;e++){let i=n[e];if((N(i,"key")||i.key)===t)return i;let a=U(t,i.items,l+1);if(a)return a}},K=(e,t=0,i={},l="")=>{let n=[];return e&&e.forEach((e,a)=>{let s=e.key?e.key:(""!==l?l+"_":"")+a,o={item:e,index:a,level:t,key:s,parent:i,parentKey:l};o.items=K(e.items,t+1,o,s),n.push(o)}),n},A=(e,t=[])=>(e&&e.forEach(e=>{(e=>!!e&&(0===e.level||p&&p.some(t=>t.key===e.parentKey))&&!1!==N(e,"visible"))(e)&&(t.push(e),A(e.items,t))}),t);return o.useEffect(()=>{h(K(e.model))},[e.model]),o.useEffect(()=>{y(A(u))},[u,p]),o.useEffect(()=>{m(Object.entries(e.expandedKeys||{}).reduce((e,[t,i])=>{if(i){let i=U(t);i&&e.push(i)}return e},[]))},[e.expandedKeys]),(0,w.useUpdateEffect)(()=>{d(x.ObjectUtils.isNotEmpty(s)?`${e.panelId}_${s.key}`:null)},[e.panelId,s]),(0,t.jsx)(k,{hostName:"PanelMenu",id:e.panelId+"_list",ref:v,role:"tree",tabIndex:-1,ariaActivedescendant:n?c:void 0,panelId:e.panelId,focusedItemId:n?c:void 0,model:u,activeItemPath:p,menuProps:e.menuProps,onFocus:e=>{a(!0),x.ObjectUtils.isEmpty(s)&&setTimeout(()=>{let e=C();e&&r(e)},0)},onBlur:()=>{a(!1),r(null),g.current=""},onKeyDown:e=>{let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":S(e);break;case"ArrowUp":_({originalEvent:i=e,processedItem:x.ObjectUtils.isNotEmpty(s)?M(s):T(),selfCheck:!0}),i.preventDefault();break;case"ArrowLeft":l=e,x.ObjectUtils.isNotEmpty(s)&&(p.some(e=>e.key===s.key)?m(p.filter(e=>e.key!==s.key)):r(x.ObjectUtils.isNotEmpty(s.parent)?s.parent:s),l.preventDefault());break;case"ArrowRight":var i,l,n,a,o=e;if(x.ObjectUtils.isNotEmpty(s)){if(x.ObjectUtils.isNotEmpty(s.items))if(p.some(e=>e.key===s.key))S(o);else{let e=p.filter(e=>e.parentKey!==s.parentKey);e.push(s),m(e)}o.preventDefault()}break;case"Home":_({originalEvent:n=e,processedItem:C(),allowHeaderFocus:!1}),n.preventDefault();break;case"End":_({originalEvent:a=e,processedItem:T(),focusOnNext:!0,allowHeaderFocus:!1}),a.preventDefault();break;case"Space":case"Enter":case"NumpadEnter":P(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&x.ObjectUtils.isPrintableCharacter(e.key)&&((e,t)=>{g.current=(g.current||"")+t;let i=null,l=!1;if(x.ObjectUtils.isNotEmpty(s)){let e=f.findIndex(e=>e.key===s.key);i=f.slice(e).find(e=>D(e)),i=x.ObjectUtils.isEmpty(i)?f.slice(0,e).find(e=>D(e)):i}else i=f.find(e=>D(e));return x.ObjectUtils.isNotEmpty(i)&&(l=!0),x.ObjectUtils.isEmpty(i)&&x.ObjectUtils.isEmpty(s)&&(i=C()),x.ObjectUtils.isNotEmpty(i)&&_({originalEvent:e,processedItem:i,allowHeaderFocus:!1}),j&&clearTimeout(j.current),j.current=setTimeout(()=>{g.current="",j.currentt=null},500)})(e,e.key)}},onItemToggle:t=>{let{processedItem:i,expanded:l}=t;if(e.expandedKeys)e.onToggle&&e.onToggle({item:i.item,expanded:l});else{let e=p.filter(e=>e.parentKey!==i.parentKey);l&&e.push(i),m(e)}i.item&&(i.item={...i.item,expanded:l}),b.DomHandler.focus(I()),r(i)},level:0,className:l("submenu"),expandIcon:e.expandIcon,collapseIcon:e.collapseIcon,root:!0,ptm:i,cx:l})});I.displayName="PanelMenuList";let S=o.memo(o.forwardRef((e,i)=>{let l=(0,p.useMergeProps)(),n=o.useContext(r.PrimeReactContext),a=v.getProps(e,n),[s,j]=o.useState(a.id),[w,N]=o.useState(null),[k,S]=o.useState([]),[P,D]=o.useState(!1),E=o.useRef(null),{ptm:C,cx:T,isUnstyled:R}=v.setMetaData({props:a,state:{id:s,activeItem:w}});(0,c.useHandleStyle)(v.css.styles,R,{name:"panelmenu"});let M=(e,t)=>{t.disabled?e.preventDefault():(t.command&&t.command({originalEvent:e,item:t}),t.items&&X(e,t),t.url||(e.preventDefault(),e.stopPropagation()))},_=(e,t)=>e?x.ObjectUtils.getItemValue(e[t]):void 0,O=e=>a.expandedKeys?a.expandedKeys[_(e,"key")]:a.multiple?k.some(t=>x.ObjectUtils.equals(e,t)):x.ObjectUtils.equals(e,w),U=e=>`${s}_${e}`,K=(e,t)=>`${e||U(t)}_header`,A=(e,t)=>`${e||U(t)}_content`,F=e=>{z(e,$()),e.preventDefault()},H=e=>{z(e,q()),e.preventDefault()},B=(e,t=!1)=>{let i=t?e:e.nextElementSibling,l=b.DomHandler.findSingle(i,'[data-pc-section="header"]');return l?b.DomHandler.getAttribute(l,"data-p-disabled")?B(l.parentElement):l:null},L=(e,t=!1)=>{let i=t?e:e.previousElementSibling,l=b.DomHandler.findSingle(i,'[data-pc-section="header"]');return l?b.DomHandler.getAttribute(l,"data-p-disabled")?L(l.parentElement):l:null},$=()=>B(E.current.firstElementChild,!0),q=()=>L(E.current.lastElementChild,!0),V=e=>{let{originalEvent:t,focusOnNext:i,selfCheck:l}=e,n=t.currentTarget.closest('[data-pc-section="panel"]'),a=l?b.DomHandler.findSingle(n,'[data-pc-section="header"]'):i?B(n):L(n);a?z(t,a):i?F(t):H(t)},X=(e,t)=>{if(!_(t,"disabled")){let i=!O(t);if(N(w&&x.ObjectUtils.equals(t,w)?null:t),a.multiple){let e=k;k.some(e=>x.ObjectUtils.equals(t,e))?e=k.filter(e=>!x.ObjectUtils.equals(t,e)):e.push(t),S(e)}W({item:t,expanded:i}),i&&e?a.onOpen&&a.onOpen({originalEvent:e,item:t}):a.onClose&&a.onClose({originalEvent:e,item:t})}},W=({item:e,expanded:t=!1})=>{if(a.expandedKeys){let i={...a.expandedKeys};t?i[e.key]=!0:delete i[e.key],a.onExpandedKeysChange&&a.onExpandedKeysChange(i)}},z=(e,t)=>{t&&b.DomHandler.focus(t)},J=(e,t,i)=>C(t,{context:{active:O(e),focused:x.ObjectUtils.equals(e,w),disabled:_(e,"disabled"),index:i}});o.useImperativeHandle(i,()=>({props:a,getElement:()=>E.current})),(0,m.useMountEffect)(()=>{s||j((0,y.UniqueComponentId)())}),o.useEffect(()=>{D(!0),a.model&&a.model.forEach(e=>{e.expanded&&X(null,e)})},[a.model]);let G=()=>{D(!1)},Y=a.model?a.model.map((e,i)=>{if(!1===_(e,"visible"))return null;let n=e.id||s+"_"+i,r=O(e),c=(0,g.classNames)("p-menuitem-icon",e.icon),p=l({className:T("headerIcon",{item:e})},J(e,"headerIcon",i)),m=f.IconUtils.getJSXIcon(e.icon,{...p},{props:a}),y=l({className:T("headerSubmenuIcon")},J(e,"headerSubmenuIcon",i)),j=e.items&&f.IconUtils.getJSXIcon(r?a.collapseIcon||(0,t.jsx)(u.ChevronDownIcon,{...y}):a.expandIcon||(0,t.jsx)(h.ChevronRightIcon,{...y})),v=l({className:T("headerLabel")},J(e,"headerLabel",i)),w=e.label&&(0,t.jsx)("span",{...v,children:e.label}),N=o.createRef(),k=l({href:e.url||"#",tabIndex:"-1",className:T("headerAction")},J(e,"headerAction",i)),S=(0,t.jsxs)("a",{...k,children:[j,m,w]});if(e.template){let t={onClick:t=>M(t,e),className:"p-panelmenu-header-link",labelClassName:"p-menuitem-text",submenuIconClassName:"p-panelmenu-icon",iconClassName:c,element:S,props:a,leaf:!e.items,active:r};S=x.ObjectUtils.getJSXElement(e.template,e,t)}let P=l({id:e?.id||U(i),className:T("panel",{item:e}),style:e.style},J(e,"panel",i)),D=l({id:K(e?.id,i),className:T("header",{active:r,item:e}),"aria-label":e.label,"aria-expanded":r,"aria-disabled":e.disabled,"aria-controls":A(e?.id,i),tabIndex:e.disabled?null:"0",onClick:t=>M(t,e),onKeyDown:t=>((e,t)=>{var i,l,n,a;switch(e.code){case"ArrowDown":let s;i=e,(s=!0===b.DomHandler.getAttribute(i.currentTarget,"data-p-highlight")?b.DomHandler.findSingle(i.currentTarget.nextElementSibling,'[data-pc-section="menu"]'):null)?b.DomHandler.focus(s):V({originalEvent:i,focusOnNext:!0}),i.preventDefault();break;case"ArrowUp":let o,r;o=L((l=e).currentTarget.parentElement)||q(),(r=!0===b.DomHandler.getAttribute(o,"data-p-highlight")?b.DomHandler.findSingle(o.nextElementSibling,'[data-pc-section="menu"]'):null)?b.DomHandler.focus(r):V({originalEvent:l,focusOnNext:!1}),l.preventDefault();break;case"Home":F(e);break;case"End":H(e);break;case"Enter":case"NumpadEnter":case"Space":let c;n=e,a=t,(c=b.DomHandler.findSingle(n.currentTarget,'[data-pc-section="headeraction"]'))?c.click():M(n,a),n.preventDefault()}})(t,e),"data-p-disabled":e.disabled,"data-p-highlight":r,role:"button",style:e.style},J(e,"header",i)),E=l({className:T("headerContent")},J(e,"headerContent",i)),R=l({className:T("menuContent")},J(e,"menuContent",i)),B=l({className:T("toggleableContent",{active:r}),role:"region","aria-labelledby":K(e?.id,i)},J(e,"toggleableContent",i)),$=l({classNames:T("transition"),timeout:{enter:1e3,exit:450},onEnter:G,in:r,unmountOnExit:!0,options:a.transitionOptions},J(e,"transition",i));return(0,o.createElement)("div",{...P,key:n,children:[(0,t.jsx)("div",{...D,children:(0,t.jsx)("div",{...E,children:S})}),(0,t.jsx)(d.CSSTransition,{nodeRef:N,...$,children:(0,t.jsx)("div",{id:A(e?.id,i),ref:N,...B,children:(0,t.jsx)("div",{...R,children:(0,t.jsx)(I,{panelId:e?.id||U(i),menuProps:a,onToggle:W,onHeaderFocus:V,level:0,model:e.items,expandedKeys:a.expandedKeys,className:"p-panelmenu-root-submenu",submenuIcon:a.submenuIcon,ptm:C,cx:T})})})})]})}):null,Q=l({ref:E,className:(0,g.classNames)(a.className,T("root")),id:a.id,style:a.style},v.getOtherProps(a),C("root"));return(0,t.jsx)("div",{...Q,children:Y})}));function P(e){let i=[{label:"Files",icon:"pi pi-file",items:[{label:"Documents",icon:"pi pi-file",items:[{label:"Invoices",icon:"pi pi-file-pdf",items:[{label:"Pending",icon:"pi pi-stop"},{label:"Paid",icon:"pi pi-check-circle"}]},{label:"Clients",icon:"pi pi-users"}]},{label:"Images",icon:"pi pi-image",items:[{label:"Logos",icon:"pi pi-image"}]}]},{label:"Cloud",icon:"pi pi-cloud",items:[{label:"Upload",icon:"pi pi-cloud-upload"},{label:"Download",icon:"pi pi-cloud-download"},{label:"Sync",icon:"pi pi-refresh"}]},{label:"Devices",icon:"pi pi-desktop",items:[{label:"Phone",icon:"pi pi-mobile"},{label:"Desktop",icon:"pi pi-desktop"},{label:"Tablet",icon:"pi pi-tablet"}]}],l={basic:`
<PanelMenu model={items} className="w-full md:w-20rem" />   
`,javascript:`
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';

export default function BasicDemo() {
    const items = [     
        {
            label: 'Files',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Documents',
                    icon: 'pi pi-file',
                    items: [
                        {
                            label: 'Invoices',
                            icon: 'pi pi-file-pdf',
                            items: [
                                {
                                    label: 'Pending',
                                    icon: 'pi pi-stop'
                                },
                                {
                                    label: 'Paid',
                                    icon: 'pi pi-check-circle'
                                }
                            ]
                        },
                        {
                            label: 'Clients',
                            icon: 'pi pi-users'
                        }
                    ]
                },
                {
                    label: 'Images',
                    icon: 'pi pi-image',
                    items: [
                        {
                            label: 'Logos',
                            icon: 'pi pi-image'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Cloud',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Upload',
                    icon: 'pi pi-cloud-upload'
                },
                {
                    label: 'Download',
                    icon: 'pi pi-cloud-download'
                },
                {
                    label: 'Sync',
                    icon: 'pi pi-refresh'
                }
            ]
        },
        {
            label: 'Devices',
            icon: 'pi pi-desktop',
            items: [
                {
                    label: 'Phone',
                    icon: 'pi pi-mobile'
                },
                {
                    label: 'Desktop',
                    icon: 'pi pi-desktop'
                },
                {
                    label: 'Tablet',
                    icon: 'pi pi-tablet'
                }
            ]
        }
    ];
    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { MenuItem } from 'primereact/menuitem';

export default function BasicDemo() {
    const items: MenuItem[] = [
    {
            label: 'Files',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Documents',
                    icon: 'pi pi-file',
                    items: [
                        {
                            label: 'Invoices',
                            icon: 'pi pi-file-pdf',
                            items: [
                                {
                                    label: 'Pending',
                                    icon: 'pi pi-stop'
                                },
                                {
                                    label: 'Paid',
                                    icon: 'pi pi-check-circle'
                                }
                            ]
                        },
                        {
                            label: 'Clients',
                            icon: 'pi pi-users'
                        }
                    ]
                },
                {
                    label: 'Images',
                    icon: 'pi pi-image',
                    items: [
                        {
                            label: 'Logos',
                            icon: 'pi pi-image'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Cloud',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Upload',
                    icon: 'pi pi-cloud-upload'
                },
                {
                    label: 'Download',
                    icon: 'pi pi-cloud-download'
                },
                {
                    label: 'Sync',
                    icon: 'pi pi-refresh'
                }
            ]
        },
        {
            label: 'Devices',
            icon: 'pi pi-desktop',
            items: [
                {
                    label: 'Phone',
                    icon: 'pi pi-mobile'
                },
                {
                    label: 'Desktop',
                    icon: 'pi pi-desktop'
                },
                {
                    label: 'Tablet',
                    icon: 'pi pi-tablet'
                }
            ]
        }
    ];
    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["PanelMenu requires a collection of menuitems as its ",(0,t.jsx)("i",{children:"model"}),"."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(S,{model:i,className:"w-full md:w-20rem"})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}S.displayName="PanelMenu";var D=e.i(29363);function E(e){let i=(0,o.useRef)(null),l=[{label:"Files",icon:"pi pi-file",items:[{label:"New",icon:"pi pi-plus",command:()=>{i.current.show({severity:"success",summary:"Success",detail:"File created",life:3e3})}},{label:"Search",icon:"pi pi-search",command:()=>{i.current.show({severity:"warn",summary:"Search Results",detail:"No results found",life:3e3})}},{label:"Print",icon:"pi pi-print",command:()=>{i.current.show({severity:"error",summary:"Error",detail:"No printer connected",life:3e3})}}]},{label:"Sync",icon:"pi pi-cloud",items:[{label:"Import",icon:"pi pi-cloud-download",command:()=>{i.current.show({severity:"info",summary:"Downloads",detail:"Downloaded from cloud",life:3e3})}},{label:"Export",icon:"pi pi-cloud-upload",command:()=>{i.current.show({severity:"info",summary:"Shared",detail:"Exported to cloud",life:3e3})}}]},{label:"Sign Out",icon:"pi pi-sign-out",command:()=>{i.current.show({severity:"info",summary:"Signed out",detail:"User logged out",life:3e3})}}],a={basic:`
<PanelMenu model={items} className="w-full md:w-20rem" />   
<Toast ref={toast} />
`,javascript:`
import React, { useRef } from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { Toast } from 'primereact/toast';

export default function CommandDemo() {
    const toast = useRef(null);

    const items = [
        {
            label: 'Files',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    command: () => {
                        toast.current.show({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                    }
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    command: () => {
                        toast.current.show({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
                    }
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print',
                    command: () => {
                        toast.current.show({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Sync',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Import',
                    icon: 'pi pi-cloud-download',
                    command: () => {
                        toast.current.show({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                    }
                },
                {
                    label: 'Export',
                    icon: 'pi pi-cloud-upload',
                    command: () => {
                        toast.current.show({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Sign Out',
            icon: 'pi pi-sign-out',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Signed out', detail: 'User logged out', life: 3000 });
            }
        }
    ];
    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
            <Toast ref={toast} />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function CommandDemo() {
    const toast = useRef<Toast>(null);

    const items: MenuItem[] = [
        {
            label: 'Files',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    command: () => {
                        toast.current.show({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
                    }
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    command: () => {
                        toast.current.show({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
                    }
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print',
                    command: () => {
                        toast.current.show({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Sync',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Import',
                    icon: 'pi pi-cloud-download',
                    command: () => {
                        toast.current.show({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                    }
                },
                {
                    label: 'Export',
                    icon: 'pi pi-cloud-upload',
                    command: () => {
                        toast.current.show({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Sign Out',
            icon: 'pi pi-sign-out',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Signed out', detail: 'User logged out', life: 3000 });
            }
        }
    ];
    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
            <Toast ref={toast} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("i",{children:"command"})," property defines the callback to run when an item is activated by click or a key event."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(S,{model:l,className:"w-full md:w-20rem"}),(0,t.jsx)(D.Toast,{ref:i})]}),(0,t.jsx)(s.DocSectionCode,{code:a})]})}var C=e.i(57724);function T(e){let i=[{key:"0",label:"Users",icon:"pi pi-users",items:[{key:"0_1",label:"New",items:[{key:"0_1_0",label:"Member"},{key:"0_1_1",label:"Group"}]},{key:"0_2",label:"Search"}]},{key:"1",label:"Tasks",icon:"pi pi-server",items:[{key:"1_0",label:"Add New"},{key:"1_1",label:"Pending"},{key:"1_2",label:"Overdue"}]},{key:"2",label:"Calendar",icon:"pi pi-calendar",items:[{key:"2_0",label:"New Event"},{key:"2_1",label:"Today"},{key:"2_2",label:"This Week"}]}],[l,a]=(0,o.useState)({}),r=e=>{e.items&&e.items.length&&(l[e.key]=!0,e.items.forEach(r))},c={basic:`
<div className="card flex flex-column align-items-center gap-3">
    <Button type="button" label="Toggle All" text onClick={() => toggleAll()} />
    <PanelMenu model={items} expandedKeys={expandedKeys} onExpandedKeysChange={setExpandedKeys} className="w-full md:w-20rem" multiple />
</div>  
`,javascript:`
import React, { useState } from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { Button } from 'primereact/button';

export default function ControlledDemo() {
    const items = [
        {
            key: '0',
            label: 'Users',
            icon: 'pi pi-users',
            items: [
                {
                    key: '0_1',
                    label: 'New',
                    items: [
                        {
                            key: '0_1_0',
                            label: 'Member',
                        },
                        {
                            key: '0_1_1',
                            label: 'Group',
                        }
                    ]
                },
                {
                    key: '0_2',
                    label: 'Search',
                }
            ]
        },
        {
            key: '1',
            label: 'Tasks',
            icon: 'pi pi-server',
            items: [
                {
                    key: '1_0',
                    label: 'Add New',
                },
                {
                    key: '1_1',
                    label: 'Pending',
                },
                {
                    key: '1_2',
                    label: 'Overdue',
                }
            ]
        },
        {
            key: '2',
            label: 'Calendar',
            icon: 'pi pi-calendar',

            items: [
                {
                    key: '2_0',
                    label: 'New Event',
                },
                {
                    key: '2_1',
                    label: 'Today',
                },
                {
                    key: '2_2',
                    label: 'This Week',
                }
            ]
        }
    ];

    const [expandedKeys, setExpandedKeys] = useState({});

    const toggleAll = () => {
        if (Object.keys(expandedKeys).length) {
            collapseAll();
        } else {
            expandAll();
        }
    };

    const expandAll = () => {
        items.forEach(expandNode);
        setExpandedKeys({ ...expandedKeys });
    };

    const collapseAll = () => {
        setExpandedKeys({});
    };

    const expandNode = (node) => {
        if (node.items && node.items.length) {
            expandedKeys[node.key] = true;

            node.items.forEach(expandNode);
        }
    };

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <Button type="button" label="Toggle All" text onClick={() => toggleAll()} />
            <PanelMenu model={items} expandedKeys={expandedKeys} onExpandedKeysChange={setExpandedKeys} className="w-full md:w-20rem" multiple />
        </div>

    )
}
        `,typescript:`
import React, { useState } from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { Button } from 'primereact/button';

export default function ControlledDemo() {
    const items = [
        {
            key: '0',
            label: 'Users',
            icon: 'pi pi-users',
            items: [
                {
                    key: '0_1',
                    label: 'New',
                    items: [
                        {
                            key: '0_1_0',
                            label: 'Member',
                        },
                        {
                            key: '0_1_1',
                            label: 'Group',
                        }
                    ]
                },
                {
                    key: '0_2',
                    label: 'Search',
                }
            ]
        },
        {
            key: '1',
            label: 'Tasks',
            icon: 'pi pi-server',
            items: [
                {
                    key: '1_0',
                    label: 'Add New',
                },
                {
                    key: '1_1',
                    label: 'Pending',
                },
                {
                    key: '1_2',
                    label: 'Overdue',
                }
            ]
        },
        {
            key: '2',
            label: 'Calendar',
            icon: 'pi pi-calendar',
            items: [
                {
                    key: '2_0',
                    label: 'New Event',
                },
                {
                    key: '2_1',
                    label: 'Today',
                },
                {
                    key: '2_2',
                    label: 'This Week',
                }
            ]
        }
    ];

    const [expandedKeys, setExpandedKeys] = useState<any>({});

    const toggleAll = () => {
        if (Object.keys(expandedKeys).length) {
            collapseAll();
        } else {
            expandAll();
        }
    };

    const expandAll = () => {
        items.forEach(expandNode);
        setExpandedKeys({ ...expandedKeys });
    };

    const collapseAll = () => {
        setExpandedKeys({});
    };

    const expandNode = (node) => {
        if (node.items && node.items.length) {
            expandedKeys[node.key] = true;

            node.items.forEach(expandNode);
        }
    };

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <Button type="button" label="Toggle All" text onClick={() => toggleAll()} />
            <PanelMenu model={items} expandedKeys={expandedKeys} onExpandedKeysChange={setExpandedKeys} className="w-full md:w-20rem" multiple />
            </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["If the menuitem has a ",(0,t.jsx)("i",{children:"key"})," defined, PanelMenu state can be controlled programmatically with the ",(0,t.jsx)("i",{children:"expandedKeys"})," property that defines the keys that are expanded. This property is a Map instance whose key is the key of a node and value is a boolean."]})}),(0,t.jsxs)("div",{className:"card flex flex-column align-items-center gap-3",children:[(0,t.jsx)(C.Button,{type:"button",label:"Toggle All",text:!0,onClick:()=>void(Object.keys(l).length?a({}):(i.forEach(r),a({...l})))}),(0,t.jsx)(S,{model:i,expandedKeys:l,onExpandedKeysChange:a,className:"w-full md:w-20rem",multiple:!0})]}),(0,t.jsx)(s.DocSectionCode,{code:c})]})}function R(e){let i={basic:`
import { PanelMenu } from 'primereact/panelmenu';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)(s.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function M(e){let i=[{label:"Files",icon:"pi pi-file",items:[{label:"Documents",icon:"pi pi-file",items:[{label:"Invoices",icon:"pi pi-file-pdf",items:[{label:"Pending",icon:"pi pi-stop"},{label:"Paid",icon:"pi pi-check-circle"}]},{label:"Clients",icon:"pi pi-users"}]},{label:"Images",icon:"pi pi-image",items:[{label:"Logos",icon:"pi pi-image"}]}]},{label:"Cloud",icon:"pi pi-cloud",items:[{label:"Upload",icon:"pi pi-cloud-upload"},{label:"Download",icon:"pi pi-cloud-download"},{label:"Sync",icon:"pi pi-refresh"}]},{label:"Devices",icon:"pi pi-desktop",items:[{label:"Phone",icon:"pi pi-mobile"},{label:"Desktop",icon:"pi pi-desktop"},{label:"Tablet",icon:"pi pi-tablet"}]}],l={basic:`
<PanelMenu model={items} className="w-full md:w-20rem" />   
`,javascript:`
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';

export default function MultipleDemo() {
    const items = [
        {
            label: 'Files',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Documents',
                    icon: 'pi pi-file',
                    items: [
                        {
                            label: 'Invoices',
                            icon: 'pi pi-file-pdf',
                            items: [
                                {
                                    label: 'Pending',
                                    icon: 'pi pi-stop'
                                },
                                {
                                    label: 'Paid',
                                    icon: 'pi pi-check-circle'
                                }
                            ]
                        },
                        {
                            label: 'Clients',
                            icon: 'pi pi-users'
                        }
                    ]
                },
                {
                    label: 'Images',
                    icon: 'pi pi-image',
                    items: [
                        {
                            label: 'Logos',
                            icon: 'pi pi-image'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Cloud',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Upload',
                    icon: 'pi pi-cloud-upload'
                },
                {
                    label: 'Download',
                    icon: 'pi pi-cloud-download'
                },
                {
                    label: 'Sync',
                    icon: 'pi pi-refresh'
                }
            ]
        },
        {
            label: 'Devices',
            icon: 'pi pi-desktop',
            items: [
                {
                    label: 'Phone',
                    icon: 'pi pi-mobile'
                },
                {
                    label: 'Desktop',
                    icon: 'pi pi-desktop'
                },
                {
                    label: 'Tablet',
                    icon: 'pi pi-tablet'
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { MenuItem } from 'primereact/menuitem';

export default function MultipleDemo() {
    const items: MenuItem[] = [
        {
            label: 'Files',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'Documents',
                    icon: 'pi pi-file',
                    items: [
                        {
                            label: 'Invoices',
                            icon: 'pi pi-file-pdf',
                            items: [
                                {
                                    label: 'Pending',
                                    icon: 'pi pi-stop'
                                },
                                {
                                    label: 'Paid',
                                    icon: 'pi pi-check-circle'
                                }
                            ]
                        },
                        {
                            label: 'Clients',
                            icon: 'pi pi-users'
                        }
                    ]
                },
                {
                    label: 'Images',
                    icon: 'pi pi-image',
                    items: [
                        {
                            label: 'Logos',
                            icon: 'pi pi-image'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Cloud',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Upload',
                    icon: 'pi pi-cloud-upload'
                },
                {
                    label: 'Download',
                    icon: 'pi pi-cloud-download'
                },
                {
                    label: 'Sync',
                    icon: 'pi pi-refresh'
                }
            ]
        },
        {
            label: 'Devices',
            icon: 'pi pi-desktop',
            items: [
                {
                    label: 'Phone',
                    icon: 'pi pi-mobile'
                },
                {
                    label: 'Desktop',
                    icon: 'pi pi-desktop'
                },
                {
                    label: 'Tablet',
                    icon: 'pi pi-tablet'
                }
            ]
        }
    ];
    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Only one single root menuitem can be active by default, enable ",(0,t.jsx)("i",{children:"multiple"})," property to be able to open more than one items."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(S,{model:i,className:"w-full md:w-20rem",multiple:!0})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}let _=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"panelmenu"})})]});var O=e.i(3828);function U(e){let i=(0,O.useRouter)(),l=[{label:"Router",icon:"pi pi-palette",items:[{label:"Styled",icon:"pi pi-eraser",url:"/theming"},{label:"Unstyled",icon:"pi pi-heart",url:"/unstyled"}]},{label:"Programmatic",icon:"pi pi-link",command:()=>{i.push("/installation")}},{label:"External",icon:"pi pi-home",items:[{label:"React.js",icon:"pi pi-star",url:"https://react.dev/"},{label:"Vite.js",icon:"pi pi-bookmark",url:"https://vite.dev/"}]}],a={basic:`
<PanelMenu model={items} className="w-full md:w-20rem" />   
`,javascript:`
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { useRouter } from 'next/router';

export default function RouterDemo() {
    const router = useRouter();
    const items = [
        {
            label: 'Router',
            icon: 'pi pi-palette',
            items: [
                {
                    label: 'Styled',
                    icon: 'pi pi-eraser',
                    url: '/theming'
                },
                {
                    label: 'Unstyled',
                    icon: 'pi pi-heart',
                    url: '/unstyled'
                }
            ]
        },
        {
            label: 'Programmatic',
            icon: 'pi pi-link',
            command: () => {
                router.push('/installation');
            }
        },
        {
            label: 'External',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'React.js',
                    icon: 'pi pi-star',
                    url: 'https://react.dev/'
                },
                {
                    label: 'Vite.js',
                    icon: 'pi pi-bookmark',
                    url: 'https://vite.dev/'
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { MenuItem } from 'primereact/menuitem';
import { useRouter } from 'next/router';

export default function RouterDemo() {
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Router',
            icon: 'pi pi-palette',
            items: [
                {
                    label: 'Styled',
                    icon: 'pi pi-eraser',
                    url: '/theming'
                },
                {
                    label: 'Unstyled',
                    icon: 'pi pi-heart',
                    url: '/unstyled'
                }
            ]
        },
        {
            label: 'Programmatic',
            icon: 'pi pi-link',
            command: () => {
                router.push('/installation');
            }
        },
        {
            label: 'External',
            icon: 'pi pi-home',
            items: [
                {
                    label: 'React.js',
                    icon: 'pi pi-star',
                    url: 'https://react.dev/'
                },
                {
                    label: 'Vite.js',
                    icon: 'pi pi-bookmark',
                    url: 'https://vite.dev/'
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Items with navigation are defined with ",(0,t.jsx)("i",{children:"command"})," and ",(0,t.jsx)("i",{children:"url"})," property to be able to use a router link component, an external link or programmatic navigation."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(S,{model:l,className:"w-full md:w-20rem"})}),(0,t.jsx)(s.DocSectionCode,{code:a})]})}var K=e.i(50989);function A(e){let i=(e,i)=>(0,t.jsxs)("a",{className:"flex align-items-center px-3 py-2 cursor-pointer",onClick:i.onClick,children:[(0,t.jsx)("span",{className:`${e.icon} text-primary`}),(0,t.jsx)("span",{className:`mx-2 ${e.items&&"font-semibold"}`,children:e.label}),e.badge&&(0,t.jsx)(K.Badge,{className:"ml-auto",value:e.badge}),e.shortcut&&(0,t.jsx)("span",{className:"ml-auto border-1 surface-border border-round surface-100 text-xs p-1",children:e.shortcut})]}),l={basic:`
<PanelMenu model={items} className="w-full md:w-20rem" />   
`,javascript:`
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    const itemRenderer = (item, options) => (
        <a className="flex align-items-center px-3 py-2 cursor-pointer" onClick={options.onClick}>
            <span className={\`\${item.icon} text-primary\`} />
            <span className={\`mx-2 \${item.items && 'font-semibold'}\`}>{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );

    const items = [
        {
            label: 'Mail',
            icon: 'pi pi-envelope',
            badge: 5,
            template: itemRenderer,
            items: [
                {
                    label: 'Compose',
                    icon: 'pi pi-file-edit',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Inbox',
                    icon: 'pi pi-inbox',
                    badge: 5,
                    template: itemRenderer
                },
                {
                    label: 'Sent',
                    icon: 'pi pi-send',
                    shortcut: '⌘+S',
                    template: itemRenderer
                },
                {
                    label: 'Trash',
                    icon: 'pi pi-trash',
                    shortcut: '⌘+T',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Reports',
            icon: 'pi pi-chart-bar',
            shortcut: '⌘+R',
            template: itemRenderer,
            items: [
                {
                    label: 'Sales',
                    icon: 'pi pi-chart-line',
                    badge: 3,
                    template: itemRenderer
                },
                {
                    label: 'Products',
                    icon: 'pi pi-list',
                    badge: 6,
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Profile',
            icon: 'pi pi-user',
            shortcut: '⌘+W',
            template: itemRenderer,
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Privacy',
                    icon: 'pi pi-shield',
                    shortcut: '⌘+P',
                    template: itemRenderer
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { MenuItem } from 'primereact/menuitem';
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    const itemRenderer = (item, options) => (
        <a className="flex align-items-center px-3 py-2 cursor-pointer" onClick={options.onClick}>
            <span className={\`\${item.icon} text-primary\`} />
            <span className={\`mx-2 \${item.items && 'font-semibold'}\`}>{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );

    const items: MenuItem[] = [
        {
            label: 'Mail',
            icon: 'pi pi-envelope',
            badge: 5,
            template: itemRenderer,
            items: [
                {
                    label: 'Compose',
                    icon: 'pi pi-file-edit',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Inbox',
                    icon: 'pi pi-inbox',
                    badge: 5,
                    template: itemRenderer
                },
                {
                    label: 'Sent',
                    icon: 'pi pi-send',
                    shortcut: '⌘+S',
                    template: itemRenderer
                },
                {
                    label: 'Trash',
                    icon: 'pi pi-trash',
                    shortcut: '⌘+T',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Reports',
            icon: 'pi pi-chart-bar',
            shortcut: '⌘+R',
            template: itemRenderer,
            items: [
                {
                    label: 'Sales',
                    icon: 'pi pi-chart-line',
                    badge: 3,
                    template: itemRenderer
                },
                {
                    label: 'Products',
                    icon: 'pi pi-list',
                    badge: 6,
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Profile',
            icon: 'pi pi-user',
            shortcut: '⌘+W',
            template: itemRenderer,
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Privacy',
                    icon: 'pi pi-shield',
                    shortcut: '⌘+P',
                    template: itemRenderer
                }
            ]
        }
    ];
    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["PanelMenu offers item customization with the items ",(0,t.jsx)("i",{children:"template"})," property that receives the item instance and returns an element."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(S,{model:[{label:"Mail",icon:"pi pi-envelope",badge:5,template:i,items:[{label:"Compose",icon:"pi pi-file-edit",shortcut:"⌘+N",template:i},{label:"Inbox",icon:"pi pi-inbox",badge:5,template:i},{label:"Sent",icon:"pi pi-send",shortcut:"⌘+S",template:i},{label:"Trash",icon:"pi pi-trash",shortcut:"⌘+T",template:i}]},{label:"Reports",icon:"pi pi-chart-bar",shortcut:"⌘+R",template:i,items:[{label:"Sales",icon:"pi pi-chart-line",badge:3,template:i},{label:"Products",icon:"pi pi-list",badge:6,template:i}]},{label:"Profile",icon:"pi pi-user",shortcut:"⌘+W",template:i,items:[{label:"Settings",icon:"pi pi-cog",shortcut:"⌘+O",template:i},{label:"Privacy",icon:"pi pi-shield",shortcut:"⌘+P",template:i}]}],className:"w-full md:w-20rem"})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function F(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-panelmenu"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-panelmenu-header"}),(0,t.jsx)("td",{children:"Accordion header of root submenu."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-panelmenu-content"}),(0,t.jsx)("td",{children:"Accordion content of root submenu."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-submenu-list"}),(0,t.jsx)("td",{children:"List element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menuitem"}),(0,t.jsx)("td",{children:"Menuitem element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menuitem-text"}),(0,t.jsx)("td",{children:"Label of a menuitem."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menuitem-icon"}),(0,t.jsx)("td",{children:"Icon of a menuitem."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-panelmenu-icon"}),(0,t.jsx)("td",{children:"Arrow icon of an accordion header."})]})]})]})})]})}var H=e.i(41158);function B(e){let i={basic:`
const TRANSITIONS = {
    toggleable: {
        timeout: 500,
        classNames: {
            enter: 'max-h-0',
            enterActive: '!max-h-40 overflow-hidden transition-all duration-500 ease-in-out',
            exit: 'max-h-40',
            exitActive: '!max-h-0 overflow-hidden transition-all duration-500 ease-in'
        }
    },
};

const Tailwind = {
    panelmenu: {
        root: 'w-full md:w-[25rem]',
        panel: 'mb-1',
        header: {
            className: classNames(
                'outline-none',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]' // Focus
            )
        },
        headercontent: {
            className: classNames(
                'border border-solid border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 bg-gray-100 dark:bg-gray-900 rounded-md transition-shadow duration-200',
                'hover:bg-gray-200 dark:hover:bg-gray-800/80  hover:text-gray-700 dark:hover:text-white/80'
            )
        },
        headeraction: {
            className: classNames('flex items-center select-none cursor-pointer relative no-underline', 'text-gray-700 dark:text-white/80 p-5 font-bold')
        },
        submenuicon: 'mr-2',
        headericon: 'mr-2',
        menucontent: 'py-1 border border-t-0 border-gray-300 dark:border-blue-900/40 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 rounded-t-none rounded-br-md rounded-bl-md',
        menu: {
            className: classNames('outline-none', 'm-0 p-0 list-none')
        },
        menuitem: ({ context }) => ({
            className: classNames(
                'text-gray-700 dark:text-white/80 transition-shadow duration-200 border-none rounded-none',
                'hover:bg-gray-200 dark:hover:bg-gray-800/80  hover:text-gray-700 dark:hover:text-white/80', // Hover
                {
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused
                }
            )
        }),
        action: {
            className: classNames('text-gray-700 dark:text-white/80 py-3 px-5 select-none', 'flex items-center cursor-pointer no-underline relative overflow-hidden')
        },
        icon: 'mr-2',
        submenu: 'p-0 pl-4 m-0 list-none',
        transition: TRANSITIONS.toggleable
    }
}
        `},l={javascript:`
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';

export default function UnstyledDemo() {
    const items = [
        {
            label:'File',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                    {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark'
                    },
                    {
                        label:'Video',
                        icon:'pi pi-fw pi-video'
                    }
                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
                {
                    label:'Left',
                    icon:'pi pi-fw pi-align-left'
                },
                {
                    label:'Right',
                    icon:'pi pi-fw pi-align-right'
                },
                {
                    label:'Center',
                    icon:'pi pi-fw pi-align-center'
                },
                {
                    label:'Justify',
                    icon:'pi pi-fw pi-align-justify'
                }
            ]
        },
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus'
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus'
                },
                {
                    label:'Search',
                    icon:'pi pi-fw pi-users',
                    items:[
                    {
                        label:'Filter',
                        icon:'pi pi-fw pi-filter',
                        items:[
                            {
                                label:'Print',
                                icon:'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon:'pi pi-fw pi-bars',
                        label:'List'
                    }
                    ]
                }
            ]
        },
        {
            label:'Events',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                },
                {
                    label:'Archive',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-center">
            <PanelMenu model={items} className="w-full md:w-25rem" />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(n.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(H.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(s.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(s.DocSectionCode,{code:l,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:_},{id:"pt.panelmenu.options",label:"PanelMenu PT Options",component:i.default}];return(0,t.jsx)(l.DocComponent,{title:"React PanelMenu Component",header:"PanelMenu",description:"PanelMenu is a hybrid of accordion-tree components.",componentDocs:[{id:"import",label:"Import",component:R},{id:"basic",label:"Basic",component:P},{id:"multiple",label:"Multiple",component:M},{id:"controlled",label:"Controlled",component:T},{id:"template",label:"Template",component:A},{id:"command",label:"Command",component:E},{id:"router",label:"Router",component:U},{id:"accessibility",label:"Accessibility",component:a}],apiDocs:["PanelMenu","MenuItem"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:F},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:B}]}]})}],21766)},12751,(e,t,i)=>{let l="/panelmenu";(window.__NEXT_P=window.__NEXT_P||[]).push([l,()=>e.r(21766)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([l])})}]);