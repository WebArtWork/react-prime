(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,10197,e=>{"use strict";var t=e.i(91398),a=e.i(91788),i=e.i(10836),n=e.i(15498),l=e.i(60150),r=e.i(45543),o=e.i(75366),s=e.i(51551),c=e.i(3935);let d=`
@layer primereact {
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
    }
    
    .p-avatar.p-avatar-image {
        background-color: transparent;
    }
    
    .p-avatar.p-avatar-circle {
        border-radius: 50%;
    }
    
    .p-avatar.p-avatar-circle img {
        border-radius: 50%;
    }
    
    .p-avatar .p-avatar-icon {
        font-size: 1rem;
    }
    
    .p-avatar img {
        width: 100%;
        height: 100%;
    }
    
    .p-avatar-clickable {
        cursor: pointer;
    }
}
`,u=n.ComponentBase.extend({defaultProps:{__TYPE:"Avatar",className:null,icon:null,image:null,imageAlt:"avatar",imageFallback:"default",label:null,onImageError:null,shape:"square",size:"normal",style:null,template:null,children:void 0},css:{classes:{root:({props:e,state:t})=>(0,c.classNames)("p-avatar p-component",{"p-avatar-image":s.ObjectUtils.isNotEmpty(e.image)&&!t.imageFailed,"p-avatar-circle":"circle"===e.shape,"p-avatar-lg":"large"===e.size,"p-avatar-xl":"xlarge"===e.size,"p-avatar-clickable":!!e.onClick}),label:"p-avatar-text",icon:"p-avatar-icon"},styles:d}}),p=a.forwardRef((e,d)=>{let p=(0,l.useMergeProps)(),m=a.useContext(i.PrimeReactContext),g=u.getProps(e,m),h=a.useRef(null),[f,b]=a.useState(!1),[x,v]=a.useState(!1),{ptm:j,cx:N,isUnstyled:y}=u.setMetaData({props:g,state:{imageFailed:f,nested:x}});(0,n.useHandleStyle)(u.css.styles,y,{name:"avatar"});let T=e=>{"default"===g.imageFallback?g.onImageError||(b(!0),e.target.src=null):e.target.src=g.imageFallback,g.onImageError&&g.onImageError(e)};a.useEffect(()=>{v(r.DomHandler.isAttributeEquals(h.current.parentElement,"data-pc-name","avatargroup"))},[]),a.useImperativeHandle(d,()=>({props:g,getElement:()=>h.current}));let C=p({ref:h,style:g.style,className:(0,c.classNames)(g.className,N("root",{imageFailed:f}))},u.getOtherProps(g),j("root")),w=g.template?s.ObjectUtils.getJSXElement(g.template,g):(()=>{if(s.ObjectUtils.isNotEmpty(g.image)&&!f){let e=p({src:g.image,onError:T},j("image"));return(0,t.jsx)("img",{alt:g.imageAlt,...e})}if(g.label){let e=p({className:N("label")},j("label"));return(0,t.jsx)("span",{...e,children:g.label})}if(g.icon){let e=p({className:N("icon")},j("icon"));return o.IconUtils.getJSXIcon(g.icon,{...e},{props:g})}return null})();return(0,t.jsxs)("div",{...C,children:[w,g.children]})});p.displayName="Avatar",e.s(["Avatar",0,p],10197)},36785,e=>{"use strict";var t=e.i(91788),a=e.i(45543),i=e.i(20728),n=e.i(26295),l=e.i(35048),r=e.i(4632);e.s(["useOverlayListener",0,({target:e,overlay:o,listener:s,when:c=!0,type:d="click"})=>{let u=t.useRef(null),p=t.useRef(null),[m,g]=(0,i.useEventListener)({target:"window",type:d,listener:e=>{s&&s(e,{type:"outside",valid:3!==e.which&&N(e)})},when:c}),[h,f]=(0,l.useResizeListener)({listener:e=>{s&&s(e,{type:"resize",valid:!a.DomHandler.isTouchDevice()})},when:c}),[b,x]=(0,i.useEventListener)({target:"window",type:"orientationchange",listener:e=>{s&&s(e,{type:"orientationchange",valid:!0})},when:c}),[v,j]=(0,n.useOverlayScrollListener)({target:e,listener:e=>{s&&s(e,{type:"scroll",valid:!0})},when:c}),N=e=>u.current&&!(u.current.isSameNode(e.target)||u.current.contains(e.target)||p.current&&p.current.contains(e.target)),y=()=>{g(),f(),x(),j()};return t.useEffect(()=>{c?(u.current=a.DomHandler.getTargetElement(e),p.current=a.DomHandler.getTargetElement(o)):(y(),u.current=p.current=null)},[e,o,c]),(0,r.useUnmountEffect)(()=>{y()}),[()=>{m(),h(),b(),v()},y]}])},97876,e=>{"use strict";var t=e.i(91398),a=e.i(91788),i=e.i(85850);let n=a.memo(a.forwardRef((e,a)=>{let n=i.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:a,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,t.jsx)("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"})})}));n.displayName="MinusIcon",e.s(["MinusIcon",0,n])},46532,e=>{"use strict";var t=e.i(91398),a=e.i(91788),i=e.i(85850);let n=a.memo(a.forwardRef((e,a)=>{let n=i.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:a,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,t.jsx)("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"})})}));n.displayName="PlusIcon",e.s(["PlusIcon",0,n])},92976,e=>{"use strict";var t=e.i(91398),a=e.i(91788),i=e.i(4242),n=e.i(10836),l=e.i(15498),r=e.i(87350),o=e.i(83955),s=e.i(92052),c=e.i(60150),d=e.i(20484),u=e.i(36785),p=e.i(4632),m=e.i(81201),g=e.i(85971),h=e.i(50901),f=e.i(45543),b=e.i(75366),x=e.i(51551),v=e.i(28653),j=e.i(63957),N=e.i(3935);let y=`
@layer primereact {
    .p-menu-overlay {
        position: absolute;
        /* Github #3122: Prevent animation flickering  */
        top: -9999px;
        left: -9999px;
    }

    .p-menu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-menu .p-menuitem-text {
        line-height: 1;
    }
}
`,T=l.ComponentBase.extend({defaultProps:{__TYPE:"Menu",id:null,ariaLabel:null,ariaLabelledBy:null,tabIndex:0,model:null,popup:!1,popupAlignment:"left",style:null,className:null,autoZIndex:!0,baseZIndex:0,appendTo:null,onFocus:null,onBlur:null,transitionOptions:null,onShow:null,onHide:null,children:void 0,closeOnEscape:!0},css:{classes:{root:({props:e,context:t})=>(0,N.classNames)("p-menu p-component",{"p-menu-overlay":e.popup,"p-input-filled":t&&"filled"===t.inputStyle||"filled"===i.default.inputStyle,"p-ripple-disabled":t&&!1===t.ripple||!1===i.default.ripple}),menu:"p-menu-list p-reset",content:({item:e})=>(0,N.classNames)("p-menuitem-content",{"p-disabled":e.disabled}),action:({item:e})=>(0,N.classNames)("p-menuitem-link",{"p-disabled":e.disabled}),menuitem:({focused:e})=>(0,N.classNames)("p-menuitem",{"p-focus":e}),submenuHeader:({submenu:e})=>(0,N.classNames)("p-submenu-header",{"p-disabled":e.disabled}),separator:"p-menu-separator",label:"p-menuitem-text",icon:"p-menuitem-icon",transition:"p-connected-overlay"},styles:y,inlineStyles:{submenuHeader:({submenu:e})=>e.style,menuitem:({item:e})=>e.style}}}),C=a.memo(a.forwardRef((e,y)=>{let C=(0,c.useMergeProps)(),w=a.useContext(n.PrimeReactContext),E=T.getProps(e,w),[D,P]=a.useState(E.id),[q,k]=a.useState(!E.popup),[S,I]=a.useState(-1),[H,B]=a.useState(-1),[R,U]=a.useState(!1),{ptm:_,cx:M,sx:O,isUnstyled:A}=T.setMetaData({props:E,state:{id:D,visible:q,focused:R}}),L=(e,t)=>_(e,{context:t});(0,l.useHandleStyle)(T.css.styles,A,{name:"menu"});let F=a.useRef(null),z=a.useRef(null),X=a.useRef(null),J=!!(q&&E.popup&&E.closeOnEscape),Z=(0,s.useDisplayOrder)("menu",J);(0,o.useGlobalOnEscapeKey)({callback:e=>{ep(e)},when:J&&Z,priority:[o.ESC_KEY_HANDLING_PRIORITIES.MENU,Z]});let[K,$]=(0,u.useOverlayListener)({target:X,overlay:F,listener:(e,{valid:t,type:a})=>{t&&(w.hideOverlaysOnDocumentScrolling||"outside"===a?(ep(e),I(-1)):f.DomHandler.isDocument(e.target)||f.DomHandler.absolutePosition(F.current,X.current,E.popupAlignment))},when:q}),V=(e,t,a)=>{t.disabled?e.preventDefault():(t.command&&t.command({originalEvent:e,item:t}),E.popup&&ep(e),E.popup||S===a||I(a),t.url||(e.preventDefault(),e.stopPropagation()))},Y=(e,t)=>{e&&E.popup&&S!==t&&I(t)},G=e=>{U(!0),E.popup||(-1!==H?(es(H),B(-1)):es(0)),E.onFocus&&E.onFocus(e)},W=e=>{let{currentTarget:t,relatedTarget:a}=e;!(a&&t.contains(a))&&(U(!1),I(-1),E.onBlur&&E.onBlur(e))},Q=e=>{switch(e.code){case"ArrowDown":ee(e);break;case"ArrowUp":et(e);break;case"Home":ea(e);break;case"End":ei(e);break;case"Enter":case"NumpadEnter":en(e);break;case"Space":el(e);break;case"Escape":E.popup&&(f.DomHandler.focus(X.current),ep(e));case"Tab":E.popup&&q&&ep(e)}},ee=e=>{es(er(S)),e.preventDefault()},et=e=>{e.altKey&&E.popup?(f.DomHandler.focus(X.current),ep(e)):es(eo(S)),e.preventDefault()},ea=e=>{es(0),e.preventDefault()},ei=e=>{es(f.DomHandler.find(F.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()},en=e=>{let t=f.DomHandler.findSingle(F.current,`li[id="${S}"]`),a=t&&f.DomHandler.findSingle(t,'a[data-pc-section="action"]');E.popup&&f.DomHandler.focus(X.current),a?a.click():t&&t.click(),e.preventDefault()},el=e=>{en(e)},er=e=>{let t=[...f.DomHandler.find(F.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(t=>t.id===e);return t>-1?t+1:0},eo=e=>{let t=[...f.DomHandler.find(F.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(t=>t.id===e);return t>-1?t-1:0},es=e=>{let t=f.DomHandler.find(F.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),a=e>=t.length?t.length-1:e<0?0:e;a>-1&&I(t[a].getAttribute("id"))},ec=()=>-1!==S?S:null,ed=e=>{E.popup&&(q?ep(e):eu(e))},eu=e=>{X.current=e.currentTarget,k(!0),E.onShow&&E.onShow(e)},ep=e=>{X.current=e.currentTarget,k(!1),E.onHide&&E.onHide(e)},em=()=>{f.DomHandler.addStyles(F.current,{position:"absolute",top:"0",left:"0"}),j.ZIndexUtils.set("menu",F.current,w&&w.autoZIndex||i.default.autoZIndex,E.baseZIndex||w&&w.zIndex.menu||i.default.zIndex.menu),f.DomHandler.absolutePosition(F.current,X.current,E.popupAlignment),E.popup&&(f.DomHandler.focus(z.current),es(0))},eg=()=>{K()},eh=()=>{X.current=null,$()},ef=()=>{j.ZIndexUtils.clear(F.current)};(0,d.useMountEffect)(()=>{D||P((0,v.UniqueComponentId)())}),(0,p.useUnmountEffect)(()=>{j.ZIndexUtils.clear(F.current)}),a.useImperativeHandle(y,()=>({props:E,toggle:ed,show:eu,hide:ep,getElement:()=>F.current,getTarget:()=>X.current}));let eb=(e,i,n=null)=>{if(!1===e.visible)return null;let l={item:e,index:i,parentId:n},r=(0,N.classNames)("p-menuitem-link",{"p-disabled":e.disabled}),o=(0,N.classNames)("p-menuitem-icon",e.icon),s=C({className:M("icon")},L("icon",l)),c=b.IconUtils.getJSXIcon(e.icon,{...s},{props:E}),d=C({className:M("label")},L("label",l)),u=e.label&&(0,t.jsx)("span",{...d,children:e.label}),p=e.id||(n||D)+"_"+i,m=C({onClick:t=>V(t,e,p),onMouseMove:e=>Y(e,p),className:M("content",{item:e})},L("content",l)),g=C({href:e.url||"#",className:M("action",{item:e}),onFocus:e=>e.stopPropagation(),target:e.target,tabIndex:"-1","aria-label":e.label,"aria-disabled":e.disabled,"data-p-disabled":e.disabled},L("action",l)),f=(0,t.jsx)("div",{...m,children:(0,t.jsxs)("a",{...g,children:[c,u,(0,t.jsx)(h.Ripple,{})]})});if(e.template){let t={onClick:t=>V(t,e,p),onMouseMove:e=>Y(e,p),className:r,tabIndex:"-1",labelClassName:"p-menuitem-text",iconClassName:o,element:f,props:E};f=x.ObjectUtils.getJSXElement(e.template,e,t)}let v=C({id:p,className:(0,N.classNames)(e.className,M("menuitem",{focused:S===p})),onClick:t=>V(t,e,p),style:O("menuitem",{item:e}),role:"menuitem","aria-label":e.label,"aria-disabled":e.disabled,"data-p-focused":ec()===p,"data-p-disabled":e.disabled||!1},L("menuitem",l));return(0,a.createElement)("li",{...v,key:p},f)},ex=(e,i)=>{let n,l,r;return!1===e.visible?null:e.separator?((e,t)=>{if(!1===e.visible)return null;let i=D+"_separator_"+t,n=C({id:i,className:(0,N.classNames)(e.className,M("separator")),role:"separator"},_("separator"));return(0,a.createElement)("li",{...n,key:i})})(e,i):e.items?(n=D+"_sub_"+i,l=e.items.map((e,t)=>eb(e,t,n)),r=C({id:n,role:"none",className:(0,N.classNames)(e.className,M("submenuHeader",{submenu:e})),style:O("submenuHeader",{submenu:e}),"data-p-disabled":e.disabled},_("submenuHeader")),(0,t.jsxs)(a.Fragment,{children:[(0,a.createElement)("li",{...r,key:n},e.label),l]},n)):eb(e,i)},ev=(()=>{if(E.model){let e=E.model.map(ex),a=C({className:(0,N.classNames)(E.className,M("root",{context:w})),style:E.style,onClick:e=>{E.popup&&m.OverlayService.emit("overlay-click",{originalEvent:e,target:X.current})}},T.getOtherProps(E),_("root")),i=C({ref:z,className:M("menu"),id:D+"_list",tabIndex:E.tabIndex||"0",role:"menu","aria-label":E.ariaLabel,"aria-labelledby":E.ariaLabelledBy,"aria-activedescendant":R?ec():void 0,onFocus:G,onKeyDown:Q,onBlur:W},_("menu")),n=C({classNames:M("transition"),in:q,timeout:{enter:120,exit:100},options:E.transitionOptions,unmountOnExit:!0,onEnter:em,onEntered:eg,onExit:eh,onExited:ef},_("transition"));return(0,t.jsx)(r.CSSTransition,{nodeRef:F,...n,children:(0,t.jsx)("div",{id:E.id,ref:F,...a,children:(0,t.jsx)("ul",{...i,children:e})})})}return null})();return E.popup?(0,t.jsx)(g.Portal,{element:ev,appendTo:E.appendTo}):ev}));C.displayName="Menu",e.s(["Menu",0,C],92976)},81201,e=>{"use strict";let t=(0,e.i(44129).EventBus)();e.s(["OverlayService",0,t])},59354,e=>{"use strict";var t=e.i(91398),a=e.i(91788),i=e.i(10836),n=e.i(15498),l=e.i(87350),r=e.i(60150),o=e.i(20484),s=e.i(97876),c=e.i(46532),d=e.i(50901),u=e.i(75366),p=e.i(51551),m=e.i(28653),g=e.i(3935);let h=n.ComponentBase.extend({defaultProps:{__TYPE:"Panel",id:null,header:null,headerTemplate:null,footer:null,footerTemplate:null,toggleable:null,style:null,className:null,collapsed:null,expandIcon:null,collapseIcon:null,icons:null,transitionOptions:null,onExpand:null,onCollapse:null,onToggle:null,children:void 0},css:{classes:{root:({props:e})=>(0,g.classNames)("p-panel p-component",{"p-panel-toggleable":e.toggleable}),header:"p-panel-header",title:"p-panel-title",icons:"p-panel-icons",toggler:"p-panel-header-icon p-panel-toggler p-link",togglerIcon:"p-panel-header-icon p-panel-toggler p-link",toggleableContent:"p-toggleable-content",content:"p-panel-content",footer:"p-panel-footer",transition:"p-toggleable-content"},styles:`
        @layer primereact {
            .p-panel-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            
            .p-panel-title {
              line-height: 1;
            }
            
            .p-panel-header-icon {
              display: inline-flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              text-decoration: none;
              overflow: hidden;
              position: relative;
            }
        }
        `}}),f=a.forwardRef((e,f)=>{let b,x,v,j,N,y,T,C,w,E,D,P,q=(0,r.useMergeProps)(),k=a.useContext(i.PrimeReactContext),S=h.getProps(e,k),[I,H]=a.useState(S.id),[B,R]=a.useState(S.collapsed),U=a.useRef(null),_=a.useRef(null),M=!!S.toggleable&&(S.onToggle?S.collapsed:B),O=I+"_header",A=I+"_content",{ptm:L,cx:F,isUnstyled:z}=h.setMetaData({props:S,state:{id:I,collapsed:M}});(0,n.useHandleStyle)(h.css.styles,z,{name:"panel"});let X=e=>{S.toggleable&&(M?J(e):Z(e),e&&(S.onToggle&&S.onToggle({originalEvent:e,value:!M}),e.preventDefault()))},J=e=>{S.onToggle||R(!1),S.onExpand&&e&&S.onExpand(e)},Z=e=>{S.onToggle||R(!0),S.onCollapse&&e&&S.onCollapse(e)};a.useImperativeHandle(f,()=>({props:S,toggle:X,expand:J,collapse:Z,getElement:()=>U.current,getContent:()=>_.current})),(0,o.useMountEffect)(()=>{I||H((0,m.UniqueComponentId)())});let K=q({id:I,ref:U,style:S.style,className:(0,g.classNames)(S.className,F("root"))},h.getOtherProps(S),L("root")),$=(b=p.ObjectUtils.getJSXElement(S.header,S),x=p.ObjectUtils.getJSXElement(S.icons,S),v=(()=>{if(S.toggleable){let e=I+"_label",a=q({className:F("toggler"),onClick:X,id:e,"aria-controls":A,"aria-expanded":!M,type:"button",role:"button","aria-label":S.header},L("toggler")),i=q(L("togglericon")),n=M?S.expandIcon||(0,t.jsx)(c.PlusIcon,{...i}):S.collapseIcon||(0,t.jsx)(s.MinusIcon,{...i}),l=u.IconUtils.getJSXIcon(n,i,{props:S,collapsed:M});return(0,t.jsxs)("button",{...a,children:[l,(0,t.jsx)(d.Ripple,{})]})}return null})(),j=q({id:O,className:F("title")},L("title")),N=(0,t.jsx)("span",{...j,children:b}),y=q({className:F("icons")},L("icons")),T=(0,t.jsxs)("div",{...y,children:[x,v]}),C=q({className:F("header")},L("header")),w=(0,t.jsxs)("div",{...C,children:[N,T]}),S.headerTemplate?p.ObjectUtils.getJSXElement(S.headerTemplate,{className:"p-panel-header",titleClassName:"p-panel-title",iconsClassName:"p-panel-icons",togglerClassName:"p-panel-header-icon p-panel-toggler p-link",onTogglerClick:X,titleElement:N,iconsElement:T,togglerElement:v,element:w,id:I+"_header",props:S,collapsed:M}):S.header||S.toggleable?w:null),V=(E=q({ref:_,className:F("toggleableContent"),"aria-hidden":M,role:"region",id:A,"aria-labelledby":O},L("toggleablecontent")),D=q({className:F("content")},L("content")),P=q({classNames:F("transition"),timeout:{enter:1e3,exit:450},in:!M,unmountOnExit:!0,options:S.transitionOptions},L("transition")),(0,t.jsx)(l.CSSTransition,{nodeRef:_,...P,children:(0,t.jsx)("div",{...E,children:(0,t.jsx)("div",{...D,children:S.children})})})),Y=(()=>{let e=p.ObjectUtils.getJSXElement(S.footer,S),a=q({className:F("footer")},L("footer")),i=(0,t.jsx)("div",{...a,children:e});if(S.footerTemplate){let e={className:F("footer"),element:i,props:S};return p.ObjectUtils.getJSXElement(S.footerTemplate,e)}return S.footer?i:null})();return(0,t.jsxs)("div",{...K,children:[$,V,Y]})});f.displayName="Panel",e.s(["Panel",0,f],59354)},44129,e=>{"use strict";e.s(["EventBus",0,function(){let e=new Map;return{on(t,a){let i=e.get(t);i?i.push(a):i=[a],e.set(t,i)},off(t,a){let i=e.get(t);i&&i.splice(i.indexOf(a)>>>0,1)},emit(t,a){let i=e.get(t);i&&i.slice().forEach(e=>e(a))}}}],44129)},7908,e=>{"use strict";var t=e.i(91398),a=e.i(88850),i=e.i(82948),n=e.i(28137);function l(){return(0,t.jsxs)(n.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Toggleable panels use a content toggle button at the header that has ",(0,t.jsx)("i",{children:"aria-controls"})," to define the id of the content section along with ",(0,t.jsx)("i",{children:"aria-expanded"})," for the visibility state. The value to read the button defaults to the value of the ",(0,t.jsx)("i",{children:"header"})," property and can be customized by defining an ",(0,t.jsx)("i",{children:"aria-label"})," or ",(0,t.jsx)("i",{children:"aria-labelledby"})," via the ",(0,t.jsx)("i",{children:"toggleButtonProps"})," property."]}),(0,t.jsxs)("p",{children:["The content uses ",(0,t.jsx)("i",{children:"region"}),", defines an id that matches the ",(0,t.jsx)("i",{children:"aria-controls"})," of the content toggle button and ",(0,t.jsx)("i",{children:"aria-labelledby"})," referring to the id of the header."]}),(0,t.jsx)("h3",{children:"Content Toggle Button Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the next the focusable element in the page tab sequence."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"tab"})]}),(0,t.jsx)("td",{children:"Moves focus to the previous the focusable element in the page tab sequence."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Toggles the visibility of the content."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles the visibility of the content."})]})]})]})})]})}var r=e.i(5180),o=e.i(59354);function s(e){let a={basic:`
<Panel header="Header">
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>
        `,javascript:`
import React from 'react'; 
import { Panel } from 'primereact/panel';

export default function BasicDemo() {
    return (
        <Panel header="Header">
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    )
}
        `,typescript:`
import React from 'react'; 
import { Panel } from 'primereact/panel';

export default function BasicDemo() {
    return (
        <Panel header="Header">
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A simple Panel is created with a ",(0,t.jsx)("i",{children:"header"})," property along with the content as children."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(o.Panel,{header:"Header",children:(0,t.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),(0,t.jsx)(r.DocSectionCode,{code:a})]})}function c(e){let a={basic:`
import { Panel } from 'primereact/panel';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)(r.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}let d=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/panel.jpg",alt:"panel"})})]});var u=e.i(10197),p=e.i(57724),m=e.i(92976),g=e.i(91788);function h(e){let a=(0,g.useRef)(null),i=[{label:"Refresh",icon:"pi pi-refresh"},{label:"Search",icon:"pi pi-search"},{separator:!0},{label:"Delete",icon:"pi pi-times"}],l={basic:`
<Panel headerTemplate={headerTemplate} footerTemplate={footerTemplate} toggleable>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>
        `,javascript:`
import React, { useRef } from 'react'; 
import { Panel } from 'primereact/panel';
import { Avatar } from 'primereact/Avatar';
import { Menu } from 'primereact/Menu';
import { Button } from 'primereact/Button';

export default function TemplateDemo() {
    const configMenu = useRef(null);
    const items = [
        {
            label: 'Refresh',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Search',
            icon: 'pi pi-search'
        },
        {
            separator: true
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        }
    ];

    const headerTemplate = (options) => {
        const className = \`\${options.className} justify-content-space-between\`;

        return (
            <div className={className}>
                <div className="flex align-items-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" shape="circle" />
                    <span className="font-bold">Amy Elsner</span>
                </div>
                <div>
                    <Menu model={items} popup ref={configMenu} id="config_menu" />
                    <button className="p-panel-header-icon p-link mr-2" onClick={(e) => configMenu?.current?.toggle(e)}>
                        <span className="pi pi-cog"></span>
                    </button>
                    {options.togglerElement}
                </div>
            </div>
        );
    };

    const footerTemplate = (options) => {
        const className = \`\${options.className} flex flex-wrap align-items-center justify-content-between gap-3\`;

        return (
            <div className={className}>
                <div className="flex align-items-center gap-2">
                    <Button icon="pi pi-user" rounded text></Button>
                    <Button icon="pi pi-bookmark" severity="secondary" rounded text></Button>
                </div>
                <span className="p-text-secondary">Updated 2 hours ago</span>
            </div>
        );
    };

    return (
        <Panel headerTemplate={headerTemplate} footerTemplate={footerTemplate} toggleable>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    )
}
        `,typescript:`
import React, { useRef } from 'react'; 
import { Panel } from 'primereact/panel';
import { Avatar } from 'primereact/Avatar';
import { Menu } from 'primereact/Menu';
import { Button } from 'primereact/Button';

export default function TemplateDemo() {
    const configMenu = useRef<HTMLElement | null>(null);
    const items = [
        {
            label: 'Refresh',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Search',
            icon: 'pi pi-search'
        },
        {
            separator: true
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        }
    ];

    const headerTemplate = (options) => {
        const className = \`\${options.className} justify-content-space-between\`;

        return (
            <div className={className}>
                <div className="flex align-items-center gap-2">
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="large" shape="circle" />
                    <span className="font-bold">Amy Elsner</span>
                </div>
                <div>
                    <Menu model={items} popup ref={configMenu} id="config_menu" />
                    <button className="p-panel-header-icon p-link mr-2" onClick={(e) => configMenu?.current?.toggle(e)}>
                        <span className="pi pi-cog"></span>
                    </button>
                    {options.togglerElement}
                </div>
            </div>
        );
    };

    const footerTemplate = (options) => {
        const className = \`\${options.className} flex flex-wrap align-items-center justify-content-between gap-3\`;

        return (
            <div className={className}>
                <div className="flex align-items-center gap-2">
                    <Button icon="pi pi-user" rounded text></Button>
                    <Button icon="pi pi-bookmark" severity="secondary" rounded text></Button>
                </div>
                <span className="p-text-secondary">Updated 2 hours ago</span>
            </div>
        );
    };

    return (
        <Panel headerTemplate={headerTemplate} footerTemplate={footerTemplate} toggleable>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Title section is customized with the ",(0,t.jsx)("i",{children:"headerTemplate"})," property that takes a ",(0,t.jsx)("i",{children:"PanelHeaderTemplateOptions"})," object as a parameter and returns content."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(o.Panel,{headerTemplate:e=>{let n=`${e.className} justify-content-space-between`;return(0,t.jsxs)("div",{className:n,children:[(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)(u.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",size:"large",shape:"circle"}),(0,t.jsx)("span",{className:"font-bold",children:"Amy Elsner"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(m.Menu,{model:i,popup:!0,ref:a,id:"config_menu"}),(0,t.jsx)("button",{className:"p-panel-header-icon p-link mr-2",onClick:e=>a?.current?.toggle(e),children:(0,t.jsx)("span",{className:"pi pi-cog"})}),e.togglerElement]})]})},footerTemplate:e=>{let a=`${e.className} flex flex-wrap align-items-center justify-content-between gap-3`;return(0,t.jsxs)("div",{className:a,children:[(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)(p.Button,{icon:"pi pi-user",rounded:!0,text:!0}),(0,t.jsx)(p.Button,{icon:"pi pi-bookmark",severity:"secondary",rounded:!0,text:!0})]}),(0,t.jsx)("span",{className:"p-text-secondary",children:"Updated 2 hours ago"})]})},toggleable:!0,children:(0,t.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),(0,t.jsx)(r.DocSectionCode,{code:l})]})}function f(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-panel"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-panel-header"}),(0,t.jsx)("td",{children:"Header section."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-panel-title"}),(0,t.jsx)("td",{children:"Title text of panel."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-panel-toggler"}),(0,t.jsx)("td",{children:"Toggle icon."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-panel-content"}),(0,t.jsx)("td",{children:"Content of panel."})]})]})]})})]})}var b=e.i(41158);function x(e){let a={basic:`
const TRANSITIONS = {
    toggleable: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
        enterToClass: 'max-h-40	',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0'
    }
};

const Tailwind = {
    panel: {
        header: ({ props }) => ({
            className: classNames(
                'flex items-center justify-between', // flex and alignments
                'border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg', // borders and colors
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80', // Dark mode
                { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
            )
        }),
        title: 'leading-none font-bold',
        toggler: {
            className: classNames(
                'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
                'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
                'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
            )
        },
        togglerIcon: 'inline-block',
        content: {
            className: classNames(
                'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
            )
        },
        transition: TRANSITIONS.toggleable
    }
}
        `},i={javascript:`
import React from 'react'; 
import { Panel } from 'primereact/panel';

export default function UnstyledDemo() {
    return (
        <div className="card">
            <Panel header="Header">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Panel>
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(n.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(b.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(r.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(r.DocSectionCode,{code:i,embedded:!0})]})})}function v(e){let a=(0,g.useRef)(null),i={basic:`
<Panel header="Header" toggleable>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Panel>
        `,javascript:`
import React from 'react'; 
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';

export default function ToggleableDemo() {
    const ref = useRef(null);
    return (
        <Button label="Toggle" className="m-2" onClick={() => ref.current.toggle()} />
        <Button label="Expand" className="m-2" onClick={() => ref.current.expand()} />
        <Button label="Collapse" className="m-2" onClick={() => ref.current.collapse()} />
        <Panel ref={ref} header="Header" toggleable>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    )
}
        `,typescript:`
import React from 'react'; 
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';

export default function ToggleableDemo() {
    const ref = useRef<Panel>(null);
    return (
        <Button label="Toggle" className="m-2" onClick={() => ref.current?.toggle()} />
        <Button label="Expand" className="m-2" onClick={() => ref.current?.expand()} />
        <Button label="Collapse" className="m-2" onClick={() => ref.current?.collapse()} />
        <Panel ref={ref} header="Header" toggleable>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Panel>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Content of the panel can be expanded and collapsed when ",(0,t.jsx)("i",{children:"toggleable"})," option is enabled. A toggleable panel can either be used as a Controlled or Uncontrolled component. In controlled mode a binding to ",(0,t.jsx)("i",{children:"collapsed"})," ","property along with ",(0,t.jsx)("i",{children:"onToggle"})," event are needed to manage the content state."]})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(p.Button,{label:"Toggle",className:"m-2",onClick:()=>a.current.toggle()}),(0,t.jsx)(p.Button,{label:"Expand",className:"m-2",onClick:()=>a.current.expand()}),(0,t.jsx)(p.Button,{label:"Collapse",className:"m-2",onClick:()=>a.current.collapse()}),(0,t.jsx)(o.Panel,{ref:a,header:"Header",toggleable:!0,children:(0,t.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]}),(0,t.jsx)(r.DocSectionCode,{code:i})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:d},{id:"pt.panel.options",label:"Panel PT Options",component:a.default}];return(0,t.jsx)(i.DocComponent,{title:"React Panel Component",header:"Panel",description:"Panel is a container component with an optional content toggle feature.",componentDocs:[{id:"import",label:"Import",component:c},{id:"basic",label:"Basic",component:s},{id:"toggleable",label:"Toggleable",component:v},{id:"template",label:"Template",component:h},{id:"accessibility",label:"Accessibility",component:l}],apiDocs:["Panel"],ptDocs:e,ptDescription:"",themingDocs:[{id:"styled",label:"Styled",component:f},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:x}]}]})}],7908)},7632,(e,t,a)=>{let i="/panel";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(7908)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);