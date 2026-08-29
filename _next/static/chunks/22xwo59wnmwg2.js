(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,10197,e=>{"use strict";var t=e.i(91398),n=e.i(91788),i=e.i(10836),a=e.i(15498),l=e.i(60150),r=e.i(45543),o=e.i(75366),s=e.i(51551),c=e.i(3935);let p=`
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
`,d=a.ComponentBase.extend({defaultProps:{__TYPE:"Avatar",className:null,icon:null,image:null,imageAlt:"avatar",imageFallback:"default",label:null,onImageError:null,shape:"square",size:"normal",style:null,template:null,children:void 0},css:{classes:{root:({props:e,state:t})=>(0,c.classNames)("p-avatar p-component",{"p-avatar-image":s.ObjectUtils.isNotEmpty(e.image)&&!t.imageFailed,"p-avatar-circle":"circle"===e.shape,"p-avatar-lg":"large"===e.size,"p-avatar-xl":"xlarge"===e.size,"p-avatar-clickable":!!e.onClick}),label:"p-avatar-text",icon:"p-avatar-icon"},styles:p}}),u=n.forwardRef((e,p)=>{let u=(0,l.useMergeProps)(),m=n.useContext(i.PrimeReactContext),b=d.getProps(e,m),f=n.useRef(null),[h,x]=n.useState(!1),[g,v]=n.useState(!1),{ptm:y,cx:L,isUnstyled:C}=d.setMetaData({props:b,state:{imageFailed:h,nested:g}});(0,a.useHandleStyle)(d.css.styles,C,{name:"avatar"});let j=e=>{"default"===b.imageFallback?b.onImageError||(x(!0),e.target.src=null):e.target.src=b.imageFallback,b.onImageError&&b.onImageError(e)};n.useEffect(()=>{v(r.DomHandler.isAttributeEquals(f.current.parentElement,"data-pc-name","avatargroup"))},[]),n.useImperativeHandle(p,()=>({props:b,getElement:()=>f.current}));let I=u({ref:f,style:b.style,className:(0,c.classNames)(b.className,L("root",{imageFailed:h}))},d.getOtherProps(b),y("root")),N=b.template?s.ObjectUtils.getJSXElement(b.template,b):(()=>{if(s.ObjectUtils.isNotEmpty(b.image)&&!h){let e=u({src:b.image,onError:j},y("image"));return(0,t.jsx)("img",{alt:b.imageAlt,...e})}if(b.label){let e=u({className:L("label")},y("label"));return(0,t.jsx)("span",{...e,children:b.label})}if(b.icon){let e=u({className:L("icon")},y("icon"));return o.IconUtils.getJSXIcon(b.icon,{...e},{props:b})}return null})();return(0,t.jsxs)("div",{...I,children:[N,b.children]})});u.displayName="Avatar",e.s(["Avatar",0,u],10197)},5064,e=>{"use strict";var t=e.i(91788);e.s(["useMatchMedia",0,(e,n=!0)=>{let[i,a]=t.useState(!1),l=t.useRef(null),r=e=>a(e.matches),o=()=>l.current&&l.current.removeEventListener("change",r)&&(l.current=null);return t.useEffect(()=>(n&&(l.current=window.matchMedia(e),a(l.current.matches),l.current&&l.current.addEventListener("change",r)),o),[e,n]),i}])},33616,41761,e=>{"use strict";var t=e.i(91398),n=e.i(91788),i=e.i(10836),a=e.i(60150),l=e.i(3935),r=e.i(15498);let o=r.ComponentBase.extend({defaultProps:{__TYPE:"IconField",__parentMetadata:null,children:void 0,className:null,iconPosition:"right"},css:{classes:{root:({props:e})=>(0,l.classNames)("p-icon-field",{"p-icon-field-right":"right"===e.iconPosition,"p-icon-field-left":"left"===e.iconPosition})}}}),s=n.default.memo(n.default.forwardRef((e,r)=>{let s=(0,n.useRef)(r),c=(0,a.useMergeProps)(),p=(0,n.useContext)(i.PrimeReactContext),d=o.getProps(e,p),{ptm:u,cx:m}=o.setMetaData({props:d,...d.__parentMetadata,context:{iconPosition:d.iconPosition}}),b=c({className:(0,l.classNames)(d.className,m("root",{iconPosition:d.iconPosition}))},o.getOtherProps(d),u("root"));return(0,t.jsx)("div",{...b,ref:s,children:n.Children.map(d.children,(e,t)=>(0,n.cloneElement)(e,{iconPosition:d.iconPosition}))})}));s.displayName="IconField",e.s(["IconField",0,s],33616);let c=r.ComponentBase.extend({defaultProps:{__TYPE:"InputIcon",__parentMetadata:null,className:null,iconPosition:null},css:{classes:{root:"p-input-icon"}}}),p=n.default.memo(n.default.forwardRef((e,r)=>{let o=(0,n.useRef)(r),s=(0,a.useMergeProps)(),p=(0,n.useContext)(i.PrimeReactContext),d=c.getProps(e,p),{ptm:u,cx:m}=c.setMetaData({props:d,...d.__parentMetadata,context:{iconPosition:d.iconPosition}}),b=s({className:(0,l.classNames)(d.className,m("root"))},c.getOtherProps(d),u("root"));return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{...b,ref:o,children:d.children})})}));p.displayName="InputIcon",e.s(["InputIcon",0,p],41761)},19820,e=>{"use strict";var t=e.i(91398),n=e.i(91788),i=e.i(85850);let a=n.memo(n.forwardRef((e,n)=>{let a=i.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:(0,t.jsx)("path",{d:"M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",fill:"currentColor"})})}));a.displayName="AngleRightIcon",e.s(["AngleRightIcon",0,a])},48214,e=>{"use strict";var t=e.i(91398),n=e.i(91788),i=e.i(85850);let a=n.memo(n.forwardRef((e,n)=>{let a=i.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:(0,t.jsx)("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"})})}));a.displayName="ChevronDownIcon",e.s(["ChevronDownIcon",0,a])},66082,e=>{"use strict";var t=e.i(91398),n=e.i(91788),i=e.i(10836),a=e.i(15498),l=e.i(60150),r=e.i(34366),o=e.i(64691),s=e.i(45543),c=e.i(51551),p=e.i(3935);let d=a.ComponentBase.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,children:void 0,className:null,invalid:!1,variant:null,keyfilter:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,iconPosition:null},css:{classes:{root:({props:e,isFilled:t,context:n})=>(0,p.classNames)("p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":t,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:n&&"filled"===n.inputStyle})}}}),u=n.memo(n.forwardRef((e,u)=>{let m=(0,l.useMergeProps)(),b=n.useContext(i.PrimeReactContext),f=d.getProps(e,b),{ptm:h,cx:x,isUnstyled:g}=d.setMetaData({props:f,...f.__parentMetadata,context:{disabled:f.disabled,iconPosition:f.iconPosition}});(0,a.useHandleStyle)(d.css.styles,g,{name:"inputtext",styled:!0});let v=n.useRef(u);n.useEffect(()=>{c.ObjectUtils.combinedRefs(v,u)},[v,u]);let y=n.useMemo(()=>c.ObjectUtils.isNotEmpty(f.value)||c.ObjectUtils.isNotEmpty(f.defaultValue),[f.value,f.defaultValue]),L=c.ObjectUtils.isNotEmpty(f.tooltip);n.useEffect(()=>{y||v.current?.value?s.DomHandler.addClass(v.current,"p-filled"):s.DomHandler.removeClass(v.current,"p-filled")},[f.disabled,y]);let C=m({className:(0,p.classNames)(f.className,x("root",{context:b,isFilled:y})),autoComplete:f.autoComplete,onBeforeInput:e=>{f.onBeforeInput&&f.onBeforeInput(e),f.keyfilter&&r.KeyFilter.onBeforeInput(e,f.keyfilter,f.validateOnly)},onInput:e=>{let t=e.target,n=!0;f.keyfilter&&f.validateOnly&&(n=r.KeyFilter.validate(e,f.keyfilter)),f.onInput&&f.onInput(e,n),c.ObjectUtils.isNotEmpty(t.value)?s.DomHandler.addClass(t,"p-filled"):s.DomHandler.removeClass(t,"p-filled")},onKeyDown:e=>{f.onKeyDown&&f.onKeyDown(e),f.keyfilter&&r.KeyFilter.onKeyPress(e,f.keyfilter,f.validateOnly)},onPaste:e=>{f.onPaste&&f.onPaste(e),f.keyfilter&&r.KeyFilter.onPaste(e,f.keyfilter,f.validateOnly)}},d.getOtherProps(f),h("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{ref:v,...C}),L&&(0,t.jsx)(o.Tooltip,{target:v,content:f.tooltip,pt:h("tooltip"),...f.tooltipOptions})]})}));u.displayName="InputText",e.s(["InputText",0,u],66082)},34366,e=>{"use strict";var t=e.i(45543);let n={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:e=>n.DEFAULT_MASKS[e]?n.DEFAULT_MASKS[e]:e,onBeforeInput(e,n,i){!i&&t.DomHandler.isAndroid()&&this.validateKey(e,e.data,n)},onKeyPress(e,n,i){i||t.DomHandler.isAndroid()||e.ctrlKey||e.altKey||e.metaKey||this.validateKey(e,e.key,n)},onPaste(e,t,n){if(n)return;let i=this.getRegex(t);[...e.clipboardData.getData("text")].forEach(t=>{if(!i.test(t))return e.preventDefault(),!1})},validateKey(e,t,n){null==t||!(t.length<=2)||this.getRegex(n).test(t)||e.preventDefault()},validate(e,t){let n=e.target.value,i=!0,a=this.getRegex(t);return n&&!a.test(n)&&(i=!1),i}};e.s(["KeyFilter",0,n])},81201,e=>{"use strict";let t=(0,e.i(44129).EventBus)();e.s(["OverlayService",0,t])},25134,e=>{"use strict";var t=e.i(91398),n=e.i(91788),i=e.i(4242),a=e.i(10836),l=e.i(57724),r=e.i(15498),o=e.i(83955),s=e.i(92052),c=e.i(60150),p=e.i(20484),d=e.i(4632),u=e.i(48214),m=e.i(81201),b=e.i(95925),f=e.i(64691),h=e.i(45543),x=e.i(75366),g=e.i(51551),v=e.i(28653),y=e.i(63957),L=e.i(3935);let C=`
@layer primereact {
    .p-splitbutton {
        display: inline-flex;
        position: relative;
    }

    .p-splitbutton .p-splitbutton-defaultbutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button-outlined.p-button:hover {
        flex: 1 1 auto;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0 none;
    }

    .p-splitbutton-menubutton,
    .p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
    .p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-fluid .p-splitbutton  {
        display: flex;
    }
}
`,j=r.ComponentBase.extend({defaultProps:{__TYPE:"SplitButton",id:null,label:null,icon:null,autoZIndex:!0,baseZIndex:0,loading:!1,loadingIcon:null,model:null,disabled:null,style:null,className:null,buttonClassName:null,menuStyle:null,menuClassName:null,menuButtonClassName:null,buttonProps:null,menuButtonProps:null,tabIndex:null,severity:null,rounded:!1,raised:!1,outlined:!1,text:!1,size:null,appendTo:null,tooltip:null,tooltipOptions:null,buttonTemplate:null,transitionOptions:null,dropdownIcon:null,onClick:null,onShow:null,onHide:null,children:void 0},css:{classes:{icon:"p-button-icon p-c",root:({props:e,size:t})=>(0,L.classNames)("p-splitbutton p-component",{"p-disabled":e.disabled,"p-button-loading-label-only":e.loading&&!e.icon&&e.label,[`p-button-${e.severity}`]:e.severity,"p-button-raised":e.raised,"p-button-rounded":e.rounded,"p-button-text":e.text,"p-button-outlined":e.outlined,[`p-button-${t}`]:t}),button:"p-splitbutton-defaultbutton",menuButton:"p-splitbutton-menubutton",menu:({props:e})=>(0,L.classNames)("p-menu p-menu-overlay p-component",e.menuClassName),menuList:"p-menu-list p-reset",separator:"p-menu-separator",menuIcon:"p-menuitem-icon",menuLabel:"p-menuitem-text",anchor:({_className:e,disabled:t})=>(0,L.classNames)("p-menuitem-link",e,{"p-disabled":t}),menuItem:"p-menuitem",transition:"p-connected-overlay"},styles:C}}),I=n.memo(n.forwardRef((e,C)=>{let I=(0,c.useMergeProps)(),N=n.useContext(a.PrimeReactContext),w=j.getProps(e,N),[M,H]=n.useState(w.id??v.UniqueComponentId),[S,T]=n.useState(!1),k=n.useRef(null),E=n.useRef(null),R=n.useRef(null),D=n.useRef(null),P=(0,s.useDisplayOrder)("split-button-tooltip",S),B={props:w,state:{id:M,overlayVisible:S}},{ptm:_,cx:Z,isUnstyled:O}=j.setMetaData(B);(0,r.useHandleStyle)(j.css.styles,O,{name:"splitbutton"}),(0,o.useGlobalOnEscapeKey)({callback:()=>{K()},when:S&&P,priority:[o.ESC_KEY_HANDLING_PRIORITIES.SPLIT_BUTTON,P]});let F=e=>{S?K(e):U(e)},U=e=>{T(!0),E.current&&E.current.show(e)},K=e=>{T(!1),E.current&&E.current.hide(e)};if((0,p.useMountEffect)(()=>{M||H((0,v.UniqueComponentId)()),h.DomHandler.alignOverlay(D.current,R.current.parentElement,w.appendTo||N&&N.appendTo||i.default.appendTo)}),(0,d.useUnmountEffect)(()=>{y.ZIndexUtils.clear(D.current)}),n.useImperativeHandle(C,()=>({props:w,show:U,hide:K,getElement:()=>k.current})),!1===w.visible)return null;let A=g.ObjectUtils.isNotEmpty(w.tooltip),V={large:"lg",small:"sm"}[w.size],z=w.buttonTemplate?g.ObjectUtils.getJSXElement(w.buttonTemplate,w):null,$=M+"_overlay",X=I({ref:k,id:M,className:(0,L.classNames)(w.className,Z("root",{size:V})),style:w.style},j.getOtherProps(w),_("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{...X,children:[(0,t.jsx)(l.Button,{ref:R,type:"button",className:(0,L.classNames)(w.buttonClassName,Z("button")),icon:w.icon,loading:w.loading,loadingIcon:w.loadingIcon,severity:w.severity,label:w.label,"aria-label":w.label,raised:w.raised,onClick:w.onClick,disabled:w.disabled,tabIndex:w.tabIndex,size:w.size,outlined:w.outlined,text:w.text,...w.buttonProps,pt:_("button"),__parentMetadata:{parent:B},unstyled:w.unstyled,children:z}),(0,t.jsx)(l.Button,{type:"button",className:(0,L.classNames)(w.menuButtonClassName,Z("menuButton")),icon:()=>{let e=I({className:Z("icon")},_("icon")),n=w.dropdownIcon||(0,t.jsx)(u.ChevronDownIcon,{...e});return x.IconUtils.getJSXIcon(n,{...e},{props:w})},onClick:F,disabled:w.disabled,"aria-expanded":S,"aria-haspopup":"true","aria-controls":$,...w.menuButtonProps,size:w.size,severity:w.severity,outlined:w.outlined,text:w.text,raised:w.raised,pt:_("menuButton"),__parentMetadata:{parent:B},onKeyDown:e=>{("ArrowDown"===e.code||"ArrowUp"===e.code)&&(F(e),e.preventDefault())},unstyled:w.unstyled}),(0,t.jsx)(b.TieredMenu,{ref:E,popup:!0,unstyled:w.unstyled,model:w.model,appendTo:w.appendTo,id:$,style:w.menuStyle,autoZIndex:w.autoZIndex,baseZIndex:w.baseZIndex,className:(0,L.classNames)(w.menuClassName,Z("menu")),onClick:e=>{m.OverlayService.emit("overlay-click",{originalEvent:e,target:k.current})},onShow:()=>{w.onShow&&w.onShow()},onHide:()=>{T(!1),w.onHide&&w.onHide()},pt:_("menu"),__parentMetadata:{parent:B}})]}),A&&(0,t.jsx)(f.Tooltip,{target:k,content:w.tooltip,pt:_("tooltip"),...w.tooltipOptions})]})}));I.displayName="SplitButton",e.s(["SplitButton",0,I],25134)},95925,e=>{"use strict";var t=e.i(91398),n=e.i(91788),i=e.i(4242),a=e.i(10836),l=e.i(15498),r=e.i(87350),o=e.i(20728),s=e.i(5064),c=e.i(60150),p=e.i(20484),d=e.i(35048),u=e.i(4632),m=e.i(71834),b=e.i(81201),f=e.i(85971),h=e.i(45543),x=e.i(51551),g=e.i(28653),v=e.i(63957),y=e.i(3935);let L=`
@layer primereact {
    .p-tieredmenu-overlay {
        position: absolute;
    }

    .p-tieredmenu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-tieredmenu .p-submenu-list {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        display: none;
    }

    .p-tieredmenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-tieredmenu .p-menuitem-text {
        line-height: 1;
    }

    .p-tieredmenu .p-menuitem {
        position: relative;
    }

    .p-tieredmenu .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }

    .p-tieredmenu .p-menuitem-active > .p-submenu-list {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-tieredmenu .p-menuitem-active > .p-submenu-list-flipped {
        left: -100%;
    }
}
`,C=l.ComponentBase.extend({defaultProps:{__TYPE:"TieredMenu",__parentMetadata:null,id:null,model:null,popup:!1,style:null,className:null,autoZIndex:!0,baseZIndex:0,breakpoint:void 0,scrollHeight:"400px",appendTo:null,transitionOptions:null,onShow:null,onFocus:null,onBlur:null,onHide:null,submenuIcon:null,children:void 0},css:{classes:{root:({props:e,context:t})=>(0,y.classNames)("p-tieredmenu p-component",{"p-tieredmenu-overlay":e.popup,"p-input-filled":t&&"filled"===t.inputStyle||"filled"===i.default.inputStyle,"p-ripple-disabled":t&&!1===t.ripple||!1===i.default.ripple}),separator:"p-menuitem-separator",icon:({_icon:e})=>(0,y.classNames)("p-menuitem-icon",e),content:"p-menuitem-content",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",action:"p-menuitem-link",menuitem:({itemClassName:e,active:t,focused:n,disabled:i})=>(0,y.classNames)("p-menuitem",{"p-menuitem-active p-highlight":t,"p-focus":n,"p-disabled":i},e),menu:"p-tieredmenu-root-list",submenu:"p-submenu-list",transition:"p-connected-overlay"},styles:L,inlineStyles:{submenu:({subProps:e})=>({display:!e.root&&e.parentActive?"block":"none"})}}});var j=e.i(19820),I=e.i(50901),N=e.i(75366);let w=n.memo(n.forwardRef((e,i)=>{let a=n.useRef(null),l=(0,c.useMergeProps)(),{ptm:r,cx:o,sx:s}=e,p=(t,n)=>r(n,{hostName:e.hostName,context:{active:b(t)}}),d=t=>t.item&&t.item.id?t.item.id:`${e.menuId}_${t.key}`,u=(e,t,n)=>e&&e.item?x.ObjectUtils.getItemValue(e.item[t],n):void 0,b=t=>e.activeItemPath.some(e=>e.key===t.key),f=e=>!1!==u(e,"visible"),g=e=>x.ObjectUtils.isNotEmpty(e.items),v=(t,n)=>{e.onItemMouseEnter&&e.onItemMouseEnter({originalEvent:t,processedItem:n})};(0,m.useUpdateEffect)(()=>{e.root||!e.parentActive||e.isMobileMode||(()=>{if(a.current){let e=a.current.parentElement,t=h.DomHandler.getOffset(e),n=h.DomHandler.getViewport(),i=a.current.offsetParent?a.current.offsetWidth:h.DomHandler.getHiddenElementOuterWidth(a.current),l=h.DomHandler.getOuterWidth(e.children[0]),r=parseInt(t.top,10)+a.current.offsetHeight-h.DomHandler.getWindowScrollTop();r>n.height?a.current.style.top=n.height-r+"px":a.current.style.top="0px",parseInt(t.left,10)+l+i>n.width-h.DomHandler.calculateScrollbarWidth()&&h.DomHandler.addClass(a.current,"p-submenu-list-flipped")}})()},[e.parentActive]),n.useImperativeHandle(i,()=>({getElement:()=>a.current}));let L=e.model?e.model.map((i,a)=>{let c;return!1===f(i)?null:u(i,"separator")?(c=l({className:o("separator"),role:"separator"},r("separator",{hostName:e.hostName})),(0,n.createElement)("li",{...c,key:"separator_"+a})):((i,a)=>{if(!1===f(i))return null;let r=i.item,c=u(i,"style"),m=u(i,"className"),h=u(i,"icon"),L=u(i,"target"),C=u(i,"url"),M=d(i),H=e.focusedItemId===d(i),S=b(i),T=u(i,"disabled"),k=g(i),E=(0,y.classNames)("p-menuitem-link"),R=(0,y.classNames)("p-menuitem-icon",h),D=l({className:(0,y.classNames)(r.icon,"p-menuitem-icon","icon")},p(i,"icon")),P=N.IconUtils.getJSXIcon(h,{...D},{props:e.menuProps}),B=l({className:o("label")},p(i,"label")),_=r.label&&(0,t.jsx)("span",{...B,children:r.label}),Z=l({className:o("submenuIcon")},p(i,"submenuIcon")),O=k&&N.IconUtils.getJSXIcon(e.submenuIcon||(0,t.jsx)(j.AngleRightIcon,{...Z}),{...Z},{props:e.menuProps}),F=g(i)?(0,t.jsx)(w,{id:e.id+"_"+a,menuProps:e.menuProps,model:i.items,menuId:e.menuId,ariaLabelledby:d(i),focusedItemId:e.focusedItemId,activeItemPath:e.activeItemPath,level:e.level+1,onItemClick:e.onItemClick,popup:e.popup,onItemMouseEnter:e.onItemMouseEnter,parentActive:b(i),isMobileMode:e.isMobileMode,submenuIcon:e.submenuIcon,ptm:e.ptm,cx:o,sx:s}):null,U=l({href:C||"#",tabIndex:"-1",onFocus:e=>e.stopPropagation(),className:o("action"),target:L},p(i,"action")),K=(0,t.jsxs)("a",{...U,children:[P,_,O,(0,t.jsx)(I.Ripple,{})]});if(r.template){let t={className:E,labelClassName:"p-menuitem-text",iconClassName:R,submenuIconClassName:"p-submenu-icon",element:K,props:e,active:S,disabled:T};K=x.ObjectUtils.getJSXElement(r.template,r,t)}let A=l({onClick:t=>{let n;return n=i.item,void(u(i,"disabled")?t.preventDefault():(n.command&&n.command({originalEvent:t,item:n}),e.onItemClick&&e.onItemClick({originalEvent:t,processedItem:i}),!n.url&&(t.preventDefault(),t.stopPropagation())))},onMouseEnter:e=>v(e,i),className:o("content")},p(i,"content")),V=l({id:M,"aria-label":r.label,"aria-disabled":T,"aria-expanded":k?S:void 0,"aria-haspopup":k&&!C?"menu":void 0,"aria-setsize":e.model.filter(e=>f(e)&&!u(e,"separator")).length,"aria-posinset":a-e.model.slice(0,a).filter(e=>f(e)&&u(e,"separator")).length+1,"data-p-highlight":S,"data-p-disabled":T,"data-p-visited":H,className:o("menuitem",{itemClassName:m,active:S,focused:H,disabled:T}),style:c,onMouseEnter:e=>v(e,r),role:"menuitem"},p(i,"menuitem"));return(0,n.createElement)("li",{...V,key:M,children:[(0,t.jsx)("div",{...A,children:K}),F]})})(i,a)}):null,C=e.root?"menu":"submenu",M=l({ref:a,id:e.id,tabIndex:e.tabIndex,onFocus:e.onFocus,onBlur:e.onBlur,onKeyDown:e.onKeyDown,className:o(C,{subProps:e}),style:s(C,{subProps:e}),role:e.root?"menubar":"menu","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-orientation":e.ariaOrientation,"aria-activedescendant":e.focusedItemId},r(C,{hostName:e.hostName}));return(0,t.jsx)("ul",{...M,children:L})}));w.displayName="TieredMenuSub";let M=n.memo(n.forwardRef((e,L)=>{let j,I,N=(0,c.useMergeProps)(),M=n.useContext(a.PrimeReactContext),H=C.getProps(e,M),[S,T]=n.useState(H.id),[k,E]=n.useState(!H.popup),[R,D]=n.useState([]),[P,B]=n.useState(!1),[_,Z]=n.useState(null),[O,F]=n.useState({index:-1,level:0,parentKey:""}),[U,K]=n.useState(!1),[A,V]=n.useState([]),[z,$]=n.useState([]),[X,W]=n.useState(!1),[J,q]=n.useState(null),Y={props:H,...H.__parentMetadata,state:{id:S,visible:k,attributeSelector:J}},{ptm:G,cx:Q,sx:ee,isUnstyled:et}=C.setMetaData(Y);(0,l.useHandleStyle)(C.css.styles,et,{name:"tieredmenu"});let en=n.useRef(null),ei=n.useRef(null),ea=n.useRef(null),el=n.useRef(null),er=n.useRef(null),eo=n.useRef(null),es=n.useRef(null),ec=(0,s.useMatchMedia)(`screen and (max-width: ${H.breakpoint})`,!!H.breakpoint),[ep,ed]=(0,o.useEventListener)({type:"click",listener:e=>{let t=en.current&&!en.current.contains(e.target),n=!H.popup||!(ea.current&&(ea.current===e.target||ea.current.contains(e.target)));t&&n&&eh(e,!H.popup)}}),[eu,em]=(0,d.useResizeListener)({listener:()=>{ec||eh(event,!0)}}),eb=e=>{H.popup&&(k?eh(e):ef(e))},ef=e=>{H.popup&&(ea.current=e.currentTarget,E(!0),H.onShow&&H.onShow(e),el.current=e.relatedTarget||null),F({index:eF(),level:0,parentKey:""})},eh=(e,t)=>{H.popup&&(E(!1),H.onHide&&H.onHide(e));let n=eH();D([]),F({index:-1,level:0,parentKey:""}),t&&h.DomHandler.focus(el.current||ea.current||n),K(!1)},ex=e=>{let{processedItem:t,isFocus:n}=e;if(x.ObjectUtils.isEmpty(t))return;let{index:i,key:a,level:l,parentKey:r,items:o}=t,s=x.ObjectUtils.isNotEmpty(o),c=R.filter(e=>e.parentKey!==r&&e.parentKey!==a);s&&c.push(t),F({index:i,level:l,parentKey:r}),D(c),s&&K(!0),n&&h.DomHandler.focus(eH())},eg=e=>{eA(-1!==O.index?e_(O.index):eF()),e.preventDefault()},ev=e=>{if(e.altKey){if(H.popup&&h.DomHandler.focus(ea.current),-1!==O.index){let t=z[O.index];ek(t)||ex({originalEvent:e,processedItem:t})}H.popup&&eh(e,!0),e.preventDefault()}else eA(-1!==O.index?eZ(O.index):eU()),e.preventDefault()},ey=e=>{let t=z[O.index],n=R.find(e=>e.key===t.parentKey);x.ObjectUtils.isEmpty(t.parent)||(F({index:-1,parentKey:n?n.parentKey:""}),eo.current="",setTimeout(()=>W(!0),0)),D(R.filter(e=>e.parentKey!==O.parentKey)),e.preventDefault()},eL=e=>{let t=z[O.index];ek(t)&&(ex({originalEvent:e,processedItem:t}),F({index:-1,parentKey:t.key}),eo.current="",setTimeout(()=>W(!0),0)),e.preventDefault()},eC=e=>{eA(eP()),e.preventDefault()},ej=e=>{eA(eB()),e.preventDefault()},eI=e=>{if(-1!==O.index){let e=h.DomHandler.findSingle(eH(),`li[id="${_}"]`),t=e&&h.DomHandler.findSingle(e,'[data-pc-section="action"]');H.popup&&h.DomHandler.focus(ea.current),t?t.click():e&&e.click()}e.preventDefault()},eN=e=>{eI(e)},ew=e=>{eh(e,!0),H.popup||F({...O,index:eF()}),e.preventDefault()},eM=e=>{if(-1!==O.index){let t=z[O.index];ek(t)||ex({originalEvent:e,processedItem:t})}eh(e)},eH=()=>ei.current.getElement()||null,eS=(e,t)=>e?x.ObjectUtils.getItemValue(e[t]):void 0,eT=e=>eS(e,"disabled"),ek=e=>e&&x.ObjectUtils.isNotEmpty(e.items),eE=e=>{let t;return eR(e)&&((t=e)?eS(t.item,"label"):void 0).toLocaleLowerCase().startsWith(eo.current.toLocaleLowerCase())},eR=e=>!!e&&!eT(e.item)&&!eS(e.item,"separator"),eD=e=>R.some(t=>t.key===e.key),eP=()=>z.findIndex(e=>eR(e)),eB=()=>x.ObjectUtils.findLastIndex(z,e=>eR(e)),e_=e=>{let t=e<z.length-1?z.slice(e+1).findIndex(e=>eR(e)):-1;return t>-1?t+e+1:e},eZ=e=>{let t=e>0?x.ObjectUtils.findLastIndex(z.slice(0,e),e=>eR(e)):-1;return t>-1?t:e},eO=()=>z.findIndex(e=>eR(e)&&eD(e)),eF=()=>{let e=eO();return e<0?eP():e},eU=()=>{let e=eO();return e<0?eB():e},eK=e=>{eo.current=(eo.current||"")+e;let t=-1,n=!1;return -1!==(t=-1!==O.index?-1===(t=z.slice(O.index).findIndex(e=>eE(e)))?z.slice(0,O.index).findIndex(e=>eE(e)):t+O.index:z.findIndex(e=>eE(e)))&&(n=!0),-1===t&&-1===O.index&&(t=eF()),-1!==t&&eA(t),es.current&&clearTimeout(es),es.current=setTimeout(()=>{eo.current="",es.current=null},500),n},eA=e=>{O.index!==e&&(F({...O,index:e}),eV())},eV=(e=-1)=>{let t=-1!==e?`${S}_${e}`:_,n=h.DomHandler.findSingle(eH(),`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"start"})},ez=n.useCallback((e,t=0,n={},i="")=>{let a=[];return e&&e.forEach((e,l)=>{let r=(""!==i?i+"_":"")+l,o={item:e,index:l,level:t,key:r,parent:n,parentKey:i};o.items=ez(e.items,t+1,o,r),a.push(o)}),a},[]),e$=()=>{if(!er.current){er.current=h.DomHandler.createInlineStyle(M&&M.nonce||i.default.nonce,M&&M.styleContainer);let e=`${J}`,t=`
@media screen and (max-width: ${H.breakpoint}) {
    .p-tieredmenu[${e}] > ul {
        max-height: ${H.scrollHeight};
        overflow: ${H.scrollHeight?"auto":""};
    }

    .p-tieredmenu[${e}] .p-submenu-list {
        position: relative;
    }

    .p-tieredmenu[${e}] .p-menuitem-active > .p-submenu-list {
        left: 0;
        box-shadow: none;
        border-radius: 0;
        padding: 0 0 0 calc(var(--inline-spacing) * 2); /* @todo */
    }

    .p-tieredmenu[${e}] .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-tieredmenu[${e}] .p-submenu-icon:before {
        content: "\\e930";
    }

    ${!H.popup?`.p-tieredmenu[${e}] { width: 100%; }`:""}
}
`;er.current.innerHTML=t}},eX=()=>{er.current=h.DomHandler.removeInlineStyle(er.current)};(0,p.useMountEffect)(()=>{let e=(0,g.UniqueComponentId)();S||T(e),H.breakpoint&&(J||q(e))}),n.useEffect(()=>{V(ez(H.model||[]))},[H.model,ez]),(0,m.useUpdateEffect)(()=>{let e=R.find(e=>e.key===O.parentKey);$(e?e.items:A)},[R,O,A]),(0,m.useUpdateEffect)(()=>{Z(-1!==O.index?`${S}${x.ObjectUtils.isNotEmpty(O.parentKey)?"_"+O.parentKey:""}_${O.index}`:null)},[O]),(0,m.useUpdateEffect)(()=>{H.popup||(x.ObjectUtils.isNotEmpty(R)?(ep(),eu()):(ed(),em()))},[R]),(0,m.useUpdateEffect)(()=>{X&&(eA(-1!==O.index?e_(O.index):eF()),D(R.filter(e=>e.parentKey!==O.parentKey)),W(!1))},[X]),(0,m.useUpdateEffect)(()=>(J&&en.current&&(en.current.setAttribute(J,""),e$()),()=>{eX()}),[J,H.breakpoint]),(0,u.useUnmountEffect)(()=>{v.ZIndexUtils.clear(en.current)}),n.useImperativeHandle(L,()=>({props:H,toggle:eb,show:ef,hide:eh,getElement:()=>en.current}));let eW=(j=N({ref:en,id:H.id,className:(0,y.classNames)(H.className,Q("root")),style:H.style,onClick:e=>{H.popup&&b.OverlayService.emit("overlay-click",{originalEvent:e,target:ea.current})}},C.getOtherProps(H),G("root")),I=N({classNames:Q("transition"),in:k,timeout:{enter:120,exit:100},options:H.transitionOptions,unmountOnExit:!0,onEnter:()=>{let e;H.autoZIndex&&v.ZIndexUtils.set("menu",en.current,M&&M.autoZIndex||i.default.autoZIndex,H.baseZIndex||M&&M.zIndex.menu||i.default.zIndex.menu),h.DomHandler.addStyles(en.current,{position:"absolute",top:"0",left:"0"}),e=h.DomHandler.getOuterWidth(ea.current)>h.DomHandler.getOuterWidth(en.current),h.DomHandler.alignOverlay(en.current,ea.current,H.appendTo,e),h.DomHandler.focus(ei.current.getElement()),eV(),J&&H.breakpoint&&(en.current.setAttribute(J,""),e$())},onEntered:()=>{ep(),eu()},onExit:()=>{ea.current=null,ed(),em()},onExited:()=>{v.ZIndexUtils.clear(en.current),eX()}},G("transition")),(0,t.jsx)(r.CSSTransition,{nodeRef:en,...I,children:(0,t.jsx)("div",{...j,children:(0,t.jsx)(w,{id:S+"_list",ref:ei,hostName:"TieredMenu",menuProps:H,tabIndex:0,model:A,ariaLabel:H.ariaLabel,ariaLabelledBy:H.ariaLabelledBy,ariaOrientation:"vertical",ariaActiveDescendant:P?_:void 0,menuId:S,level:0,focusedItemId:_,activeItemPath:R,onFocus:e=>{B(!0),F(-1!==O.index?O:{index:eF(),level:0,parentKey:""}),H.onFocus&&H.onFocus(e)},onBlur:e=>{B(!1),F({index:-1,level:0,parentKey:""}),eo.current="",K(!1),H.onBlur&&H.onBlur(e)},onKeyDown:e=>{let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":eg(e);break;case"ArrowUp":ev(e);break;case"ArrowLeft":ey(e);break;case"ArrowRight":eL(e);break;case"Home":eC(e);break;case"End":ej(e);break;case"Space":eN(e);break;case"Enter":case"NumpadEnter":eI(e);break;case"Escape":H.popup&&h.DomHandler.focus(ea.current),ew(e);break;case"Tab":eM(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&x.ObjectUtils.isPrintableCharacter(e.key)&&eK(e.key)}},onItemClick:e=>{let{originalEvent:t,processedItem:n}=e;if(eT(n)||H.isMobileMode)return;let i=ek(n),a=x.ObjectUtils.isEmpty(n.parent),l=eD(n),r=eH();if(l){let{index:e,key:t,level:l,parentKey:o}=n;D(R.filter(e=>t!==e.key&&t.startsWith(e.key))),F({index:e,level:l,parentKey:o}),i||K(!a),setTimeout(()=>{h.DomHandler.focus(r),i&&K(!0)},0)}else if(i)h.DomHandler.focus(r),ex(e);else{let e=a?n:R.find(e=>""===e.parentKey),i=e?e.index:-1;eh(t,!0),F({index:i,parentKey:e?e.parentKey:""})}},onItemMouseEnter:e=>{let{originalEvent:t,processedItem:n}=e;eT(n)||H.isMobileMode?t.preventDefault():U&&ex(e)},root:!0,popup:H.popup,onHide:eh,isMobileMode:ec,submenuIcon:H.submenuIcon,ptm:G,cx:Q,sx:ee})})}));return H.popup?(0,t.jsx)(f.Portal,{element:eW,appendTo:H.appendTo}):eW}));M.displayName="TieredMenu",e.s(["TieredMenu",0,M],95925)},25859,e=>{"use strict";var t=e.i(91398),n=e.i(91788),i=e.i(10836),a=e.i(15498),l=e.i(60150),r=e.i(51551),o=e.i(3935);let s=a.ComponentBase.extend({defaultProps:{__TYPE:"Toolbar",id:null,style:null,className:null,left:null,right:null,start:null,center:null,end:null,children:void 0},css:{classes:{root:"p-toolbar p-component",start:"p-toolbar-group-start p-toolbar-group-left",center:"p-toolbar-group-center",end:"p-toolbar-group-end p-toolbar-group-right"},styles:`
        @layer primereact {
            .p-toolbar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
            }
            
            .p-toolbar-group-start,
            .p-toolbar-group-center,
            .p-toolbar-group-end {
                display: flex;
                align-items: center;
            }
            
            .p-toolbar-group-left,
            .p-toolbar-group-right {
                display: flex;
                align-items: center;
            }
        }
        `}}),c=n.memo(n.forwardRef((e,c)=>{let p=(0,l.useMergeProps)(),d=n.useContext(i.PrimeReactContext),u=s.getProps(e,d),m=n.useRef(null),b=r.ObjectUtils.getJSXElement(u.left||u.start,u),f=r.ObjectUtils.getJSXElement(u.center,u),h=r.ObjectUtils.getJSXElement(u.right||u.end,u),{ptm:x,cx:g,isUnstyled:v}=s.setMetaData({props:u});(0,a.useHandleStyle)(s.css.styles,v,{name:"toolbar"}),n.useImperativeHandle(c,()=>({props:u,getElement:()=>m.current}));let y=p({className:g("start")},x("start")),L=p({className:g("center")},x("center")),C=p({className:g("end")},x("end")),j=p({id:u.id,ref:m,style:u.style,className:(0,o.classNames)(u.className,g("root")),role:"toolbar"},s.getOtherProps(u),x("root"));return(0,t.jsxs)("div",{...j,children:[(0,t.jsx)("div",{...y,children:b}),(0,t.jsx)("div",{...L,children:f}),(0,t.jsx)("div",{...C,children:h})]})}));c.displayName="Toolbar",e.s(["Toolbar",0,c],25859)},44129,e=>{"use strict";e.s(["EventBus",0,function(){let e=new Map;return{on(t,n){let i=e.get(t);i?i.push(n):i=[n],e.set(t,i)},off(t,n){let i=e.get(t);i&&i.splice(i.indexOf(n)>>>0,1)},emit(t,n){let i=e.get(t);i&&i.slice().forEach(e=>e(n))}}}],44129)},8728,e=>{"use strict";var t=e.i(91398),n=e.i(88850),i=e.i(82948),a=e.i(5180),l=e.i(28137);function r(){let e={basic:`
<Toolbar aria-label="Actions">
    Content
</Toolbar>
    `};return(0,t.jsxs)(l.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Toolbar uses ",(0,t.jsx)("i",{children:"toolbar"})," role for the root element, ",(0,t.jsx)("i",{children:"aria-orientation"})," is not included as it defaults to ",(0,t.jsx)("i",{children:"horizontal"}),". Any valid attribute is passed to the root element so you may add additional properties like"," ",(0,t.jsx)("i",{children:"aria-labelledby"})," and ",(0,t.jsx)("i",{children:"aria-labelled"})," to define the element if required."]}),(0,t.jsx)(a.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("p",{children:"Component does not include any interactive elements. Arbitrary content can be placed with templating and elements like buttons inside should follow the page tab sequence."})]})}var o=e.i(57724),s=e.i(33616),c=e.i(41761),p=e.i(66082),d=e.i(25134),u=e.i(25859),m=e.i(91788);function b(e){let n=(0,t.jsxs)(m.default.Fragment,{children:[(0,t.jsx)(o.Button,{icon:"pi pi-plus",className:"mr-2"}),(0,t.jsx)(o.Button,{icon:"pi pi-print",className:"mr-2"}),(0,t.jsx)(o.Button,{icon:"pi pi-upload"})]}),i=(0,t.jsxs)(s.IconField,{iconPosition:"left",children:[(0,t.jsx)(c.InputIcon,{className:"pi pi-search"}),(0,t.jsx)(p.InputText,{placeholder:"Search"})]}),r=(0,t.jsx)(m.default.Fragment,{children:(0,t.jsx)(d.SplitButton,{label:"Save",model:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"}],icon:"pi pi-check"})}),b={basic:`
<Toolbar start={startContent} end={endContent} />
        `,javascript:`
import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

export default function BasicDemo() {
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        }
    ];

    const startContent = (
        <React.Fragment>
            <Button icon="pi pi-plus" className="mr-2" />
            <Button icon="pi pi-print" className="mr-2" />
            <Button icon="pi pi-upload" />
        </React.Fragment>
    );

    const centerContent = (
        <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText placeholder="Search" />
        </IconField>
    );

    const endContent = (
        <React.Fragment>
            <SplitButton label="Save" model={items} icon="pi pi-check"></SplitButton>
        </React.Fragment>
    );

    return (
        <div className="card">
            <Toolbar start={startContent} center={centerContent} end={endContent} />
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { MenuItem } from 'primereact/menuitem';
import { SplitButton } from 'primereact/splitbutton';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

export default function BasicDemo() {
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        }
    ];

    const startContent = (
        <React.Fragment>
            <Button icon="pi pi-plus" className="mr-2" />
            <Button icon="pi pi-print" className="mr-2" />
            <Button icon="pi pi-upload" />
        </React.Fragment>
    );

    const centerContent = (
        <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText placeholder="Search" />
        </IconField>
    );

    const endContent = (
        <React.Fragment>
            <SplitButton label="Save" model={items} icon="pi pi-check"></SplitButton>
        </React.Fragment>
    );

    return (
        <div className="card">
            <Toolbar start={startContent} center={centerContent} end={endContent} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Toolbar provides ",(0,t.jsx)("i",{children:"start"}),", ",(0,t.jsx)("i",{children:"center"})," and ",(0,t.jsx)("i",{children:"end"})," properties to place content at these sections."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(u.Toolbar,{start:n,center:i,end:r})}),(0,t.jsx)(a.DocSectionCode,{code:b})]})}var f=e.i(10197);function h(e){let n=(0,t.jsx)(m.default.Fragment,{children:(0,t.jsxs)("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("g",{mask:"url(#mask0_2642_713)",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z",fill:"var(--primary-color)"})}),(0,t.jsx)("path",{d:"M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{d:"M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{d:"M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{d:"M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{d:"M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{d:"M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{d:"M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{d:"M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z",fill:"var(--primary-color)"})]})}),i=(0,t.jsxs)("div",{className:"flex flex-wrap align-items-center gap-3",children:[(0,t.jsx)("button",{className:"p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200",children:(0,t.jsx)("i",{className:"pi pi-home text-2xl"})}),(0,t.jsx)("button",{className:"p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200",children:(0,t.jsx)("i",{className:"pi pi-user text-2xl"})}),(0,t.jsx)("button",{className:"p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200",children:(0,t.jsx)("i",{className:"pi pi-search text-2xl"})})]}),r=(0,t.jsx)(m.default.Fragment,{children:(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)(f.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",shape:"circle"}),(0,t.jsx)("span",{className:"font-bold text-bluegray-50",children:"Amy Elsner"})]})}),o={basic:`
<Toolbar start={startContent} end={endContent} />
        `,javascript:`
import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';

export default function CustomDemo() {
    const startContent = (
        <React.Fragment>
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
        </React.Fragment>
    );

    const centerContent = (
        <div className="flex flex-wrap align-items-center gap-3">
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-home text-2xl"></i>
            </button>
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-user text-2xl"></i>
            </button>
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-search text-2xl"></i>
            </button>
        </div>
    );

    const endContent = (
        <React.Fragment>
            <div className="flex align-items-center gap-2">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                <span className="font-bold text-bluegray-50">Amy Elsner</span>
            </div>
        </React.Fragment>
    );

    return (
        <div className="card">
            <Toolbar start={startContent} center={centerContent} end={endContent} className="bg-gray-900 shadow-2" style={{ borderRadius: '3rem', backgroundImage: 'linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))' }} />
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';

export default function CustomDemo() {
    const startContent = (
        <React.Fragment>
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
        </React.Fragment>
    );

    const centerContent = (
        <div className="flex flex-wrap align-items-center gap-3">
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-home text-2xl"></i>
            </button>
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-user text-2xl"></i>
            </button>
            <button className="p-link inline-flex justify-content-center align-items-center text-white h-3rem w-3rem border-circle hover:bg-white-alpha-10 transition-all transition-duration-200">
                <i className="pi pi-search text-2xl"></i>
            </button>
        </div>
    );

    const endContent = (
        <React.Fragment>
            <div className="flex align-items-center gap-2">
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                <span className="font-bold text-bluegray-50">Amy Elsner</span>
            </div>
        </React.Fragment>
    );

    return (
        <div className="card">
            <Toolbar start={startContent} center={centerContent} end={endContent} className="bg-gray-900 shadow-2" style={{ borderRadius: '3rem', backgroundImage: 'linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))' }} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Toolbar provides ",(0,t.jsx)("i",{children:"start"}),", ",(0,t.jsx)("i",{children:"center"})," and ",(0,t.jsx)("i",{children:"end"})," properties to place content at these sections."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(u.Toolbar,{start:n,center:i,end:r,className:"bg-gray-900 shadow-2",style:{borderRadius:"3rem",backgroundImage:"linear-gradient(to right, var(--bluegray-500), var(--bluegray-800))"}})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function x(e){let n={basic:`
import { Toolbar } from 'primereact/toolbar';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)(a.DocSectionCode,{code:n,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}let g=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/toolbar.jpg",alt:"toolbar"})})]});function v(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-toolbar"}),(0,t.jsx)("td",{children:"Main container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-toolbar-group-start"}),(0,t.jsx)("td",{children:"Left content container."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-toolbar-group-center"}),(0,t.jsx)("td",{children:"Center content container."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-toolbar-group-end"}),(0,t.jsx)("td",{children:"Right content container."})]})]})]})})]})}var y=e.i(41158);function L(e){let n={basic:`
const Tailwind = {
    toolbar: {
        root: {
            className: classNames('flex items-center justify-between flex-wrap', 'bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-blue-900/40  p-5 rounded-md gap-2')
        },
        start: 'flex items-center',
        center: 'flex items-center',
        end: 'flex items-center'
    }
}
        `},i={javascript:`
import React from 'react';
//import { useRouter } from 'next/router';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';

export default function UnstyledDemo() {
    //const router = useRouter();
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const startContent = (
        <React.Fragment>
            <Button label="New" icon="pi pi-plus" className="mr-2" />
            <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
            <i className="pi pi-bars text-gray-700 dark:text-white/80 mr-2" />
            <SplitButton label="Save" icon="pi pi-check" model={items} className="p-button-warning"></SplitButton>
        </React.Fragment>
    );

    const endContent = (
        <React.Fragment>
            <Button icon="pi pi-search" className="mr-2" />
            <Button icon="pi pi-calendar" className="p-button-success mr-2" />
            <Button icon="pi pi-times" className="p-button-danger" />
        </React.Fragment>
    );

    return (
        <div className="card">
            <Toolbar start={startContent} end={endContent} />
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(l.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(y.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(a.DocSectionCode,{code:n,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(a.DocSectionCode,{code:i,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:g},{id:"pt.toolbar.options",label:"Toolbar PT Options",component:n.default}];return(0,t.jsx)(i.DocComponent,{title:"React Toolbar Component",header:"Toolbar",description:"Toolbar is a grouping component for buttons and other content.",componentDocs:[{id:"import",label:"Import",component:x},{id:"basic",label:"Basic",component:b},{id:"custom",label:"Custom",component:h},{id:"accessibility",label:"Accessibility",component:r}],apiDocs:["Toolbar"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:v},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:L}]}]})}],8728)},74396,(e,t,n)=>{let i="/toolbar";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(8728)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);