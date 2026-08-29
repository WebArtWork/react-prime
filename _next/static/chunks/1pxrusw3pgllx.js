(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,10197,e=>{"use strict";var t=e.i(91398),i=e.i(91788),a=e.i(10836),n=e.i(15498),r=e.i(60150),s=e.i(45543),o=e.i(75366),l=e.i(51551),c=e.i(3935);let m=`
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
`,p=n.ComponentBase.extend({defaultProps:{__TYPE:"Avatar",className:null,icon:null,image:null,imageAlt:"avatar",imageFallback:"default",label:null,onImageError:null,shape:"square",size:"normal",style:null,template:null,children:void 0},css:{classes:{root:({props:e,state:t})=>(0,c.classNames)("p-avatar p-component",{"p-avatar-image":l.ObjectUtils.isNotEmpty(e.image)&&!t.imageFailed,"p-avatar-circle":"circle"===e.shape,"p-avatar-lg":"large"===e.size,"p-avatar-xl":"xlarge"===e.size,"p-avatar-clickable":!!e.onClick}),label:"p-avatar-text",icon:"p-avatar-icon"},styles:m}}),u=i.forwardRef((e,m)=>{let u=(0,r.useMergeProps)(),d=i.useContext(a.PrimeReactContext),h=p.getProps(e,d),f=i.useRef(null),[x,g]=i.useState(!1),[b,v]=i.useState(!1),{ptm:L,cx:C,isUnstyled:j}=p.setMetaData({props:h,state:{imageFailed:x,nested:b}});(0,n.useHandleStyle)(p.css.styles,j,{name:"avatar"});let y=e=>{"default"===h.imageFallback?h.onImageError||(g(!0),e.target.src=null):e.target.src=h.imageFallback,h.onImageError&&h.onImageError(e)};i.useEffect(()=>{v(s.DomHandler.isAttributeEquals(f.current.parentElement,"data-pc-name","avatargroup"))},[]),i.useImperativeHandle(m,()=>({props:h,getElement:()=>f.current}));let N=u({ref:f,style:h.style,className:(0,c.classNames)(h.className,C("root",{imageFailed:x}))},p.getOtherProps(h),L("root")),w=h.template?l.ObjectUtils.getJSXElement(h.template,h):(()=>{if(l.ObjectUtils.isNotEmpty(h.image)&&!x){let e=u({src:h.image,onError:y},L("image"));return(0,t.jsx)("img",{alt:h.imageAlt,...e})}if(h.label){let e=u({className:C("label")},L("label"));return(0,t.jsx)("span",{...e,children:h.label})}if(h.icon){let e=u({className:C("icon")},L("icon"));return o.IconUtils.getJSXIcon(h.icon,{...e},{props:h})}return null})();return(0,t.jsxs)("div",{...N,children:[w,h.children]})});u.displayName="Avatar",e.s(["Avatar",0,u],10197)},36785,e=>{"use strict";var t=e.i(91788),i=e.i(45543),a=e.i(20728),n=e.i(26295),r=e.i(35048),s=e.i(4632);e.s(["useOverlayListener",0,({target:e,overlay:o,listener:l,when:c=!0,type:m="click"})=>{let p=t.useRef(null),u=t.useRef(null),[d,h]=(0,a.useEventListener)({target:"window",type:m,listener:e=>{l&&l(e,{type:"outside",valid:3!==e.which&&C(e)})},when:c}),[f,x]=(0,r.useResizeListener)({listener:e=>{l&&l(e,{type:"resize",valid:!i.DomHandler.isTouchDevice()})},when:c}),[g,b]=(0,a.useEventListener)({target:"window",type:"orientationchange",listener:e=>{l&&l(e,{type:"orientationchange",valid:!0})},when:c}),[v,L]=(0,n.useOverlayScrollListener)({target:e,listener:e=>{l&&l(e,{type:"scroll",valid:!0})},when:c}),C=e=>p.current&&!(p.current.isSameNode(e.target)||p.current.contains(e.target)||u.current&&u.current.contains(e.target)),j=()=>{h(),x(),b(),L()};return t.useEffect(()=>{c?(p.current=i.DomHandler.getTargetElement(e),u.current=i.DomHandler.getTargetElement(o)):(j(),p.current=u.current=null)},[e,o,c]),(0,s.useUnmountEffect)(()=>{j()}),[()=>{d(),f(),g(),v()},j]}])},63340,e=>{"use strict";var t=e.i(91788),i=e.i(4632);e.s(["useTimeout",0,(e,a=0,n=!0)=>{let r=t.useRef(null),s=t.useRef(null),o=t.useCallback(()=>clearTimeout(r.current),[r.current]);return t.useEffect(()=>{s.current=e}),t.useEffect(()=>{if(n)return r.current=setTimeout(function(){s.current()},a),o;o()},[a,n]),(0,i.useUnmountEffect)(()=>{o()}),[o]}])},67143,e=>{"use strict";var t=e.i(91398),i=e.i(91788),a=e.i(85850);let n=i.memo(i.forwardRef((e,i)=>{let n=a.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:i,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,t.jsx)("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"})})}));n.displayName="CheckIcon",e.s(["CheckIcon",0,n])},93265,3004,e=>{"use strict";var t=e.i(91398),i=e.i(91788),a=e.i(85850);let n=i.memo(i.forwardRef((e,i)=>{let n=a.IconBase.getPTI(e);return(0,t.jsxs)("svg",{ref:i,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[(0,t.jsx)("path",{d:"M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",fill:"currentColor"}),(0,t.jsx)("path",{d:"M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",fill:"currentColor"}),(0,t.jsx)("path",{d:"M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",fill:"currentColor"})]})}));n.displayName="ExclamationTriangleIcon",e.s(["ExclamationTriangleIcon",0,n],93265);let r=i.memo(i.forwardRef((e,i)=>{let n=a.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:i,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",fill:"currentColor"})})}));r.displayName="InfoCircleIcon",e.s(["InfoCircleIcon",0,r],3004)},55590,e=>{"use strict";var t=e.i(91398),i=e.i(91788),a=e.i(85850);let n=i.memo(i.forwardRef((e,i)=>{let n=a.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:i,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,t.jsx)("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"})})}));n.displayName="TimesIcon",e.s(["TimesIcon",0,n])},12257,e=>{"use strict";var t=e.i(91398),i=e.i(91788),a=e.i(85850);let n=i.memo(i.forwardRef((e,i)=>{let n=a.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:i,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"})})}));n.displayName="TimesCircleIcon",e.s(["TimesCircleIcon",0,n])},92976,e=>{"use strict";var t=e.i(91398),i=e.i(91788),a=e.i(4242),n=e.i(10836),r=e.i(15498),s=e.i(87350),o=e.i(83955),l=e.i(92052),c=e.i(60150),m=e.i(20484),p=e.i(36785),u=e.i(4632),d=e.i(81201),h=e.i(85971),f=e.i(50901),x=e.i(45543),g=e.i(75366),b=e.i(51551),v=e.i(28653),L=e.i(63957),C=e.i(3935);let j=`
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
`,y=r.ComponentBase.extend({defaultProps:{__TYPE:"Menu",id:null,ariaLabel:null,ariaLabelledBy:null,tabIndex:0,model:null,popup:!1,popupAlignment:"left",style:null,className:null,autoZIndex:!0,baseZIndex:0,appendTo:null,onFocus:null,onBlur:null,transitionOptions:null,onShow:null,onHide:null,children:void 0,closeOnEscape:!0},css:{classes:{root:({props:e,context:t})=>(0,C.classNames)("p-menu p-component",{"p-menu-overlay":e.popup,"p-input-filled":t&&"filled"===t.inputStyle||"filled"===a.default.inputStyle,"p-ripple-disabled":t&&!1===t.ripple||!1===a.default.ripple}),menu:"p-menu-list p-reset",content:({item:e})=>(0,C.classNames)("p-menuitem-content",{"p-disabled":e.disabled}),action:({item:e})=>(0,C.classNames)("p-menuitem-link",{"p-disabled":e.disabled}),menuitem:({focused:e})=>(0,C.classNames)("p-menuitem",{"p-focus":e}),submenuHeader:({submenu:e})=>(0,C.classNames)("p-submenu-header",{"p-disabled":e.disabled}),separator:"p-menu-separator",label:"p-menuitem-text",icon:"p-menuitem-icon",transition:"p-connected-overlay"},styles:j,inlineStyles:{submenuHeader:({submenu:e})=>e.style,menuitem:({item:e})=>e.style}}}),N=i.memo(i.forwardRef((e,j)=>{let N=(0,c.useMergeProps)(),w=i.useContext(n.PrimeReactContext),M=y.getProps(e,w),[R,I]=i.useState(M.id),[S,T]=i.useState(!M.popup),[k,E]=i.useState(-1),[H,D]=i.useState(-1),[Z,_]=i.useState(!1),{ptm:P,cx:B,sx:A,isUnstyled:O}=y.setMetaData({props:M,state:{id:R,visible:S,focused:Z}}),V=(e,t)=>P(e,{context:t});(0,r.useHandleStyle)(y.css.styles,O,{name:"menu"});let U=i.useRef(null),F=i.useRef(null),z=i.useRef(null),X=!!(S&&M.popup&&M.closeOnEscape),q=(0,l.useDisplayOrder)("menu",X);(0,o.useGlobalOnEscapeKey)({callback:e=>{eu(e)},when:X&&q,priority:[o.ESC_KEY_HANDLING_PRIORITIES.MENU,q]});let[G,J]=(0,p.useOverlayListener)({target:z,overlay:U,listener:(e,{valid:t,type:i})=>{t&&(w.hideOverlaysOnDocumentScrolling||"outside"===i?(eu(e),E(-1)):x.DomHandler.isDocument(e.target)||x.DomHandler.absolutePosition(U.current,z.current,M.popupAlignment))},when:S}),K=(e,t,i)=>{t.disabled?e.preventDefault():(t.command&&t.command({originalEvent:e,item:t}),M.popup&&eu(e),M.popup||k===i||E(i),t.url||(e.preventDefault(),e.stopPropagation()))},Y=(e,t)=>{e&&M.popup&&k!==t&&E(t)},Q=e=>{_(!0),M.popup||(-1!==H?(el(H),D(-1)):el(0)),M.onFocus&&M.onFocus(e)},W=e=>{let{currentTarget:t,relatedTarget:i}=e;!(i&&t.contains(i))&&(_(!1),E(-1),M.onBlur&&M.onBlur(e))},$=e=>{switch(e.code){case"ArrowDown":ee(e);break;case"ArrowUp":et(e);break;case"Home":ei(e);break;case"End":ea(e);break;case"Enter":case"NumpadEnter":en(e);break;case"Space":er(e);break;case"Escape":M.popup&&(x.DomHandler.focus(z.current),eu(e));case"Tab":M.popup&&S&&eu(e)}},ee=e=>{el(es(k)),e.preventDefault()},et=e=>{e.altKey&&M.popup?(x.DomHandler.focus(z.current),eu(e)):el(eo(k)),e.preventDefault()},ei=e=>{el(0),e.preventDefault()},ea=e=>{el(x.DomHandler.find(U.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()},en=e=>{let t=x.DomHandler.findSingle(U.current,`li[id="${k}"]`),i=t&&x.DomHandler.findSingle(t,'a[data-pc-section="action"]');M.popup&&x.DomHandler.focus(z.current),i?i.click():t&&t.click(),e.preventDefault()},er=e=>{en(e)},es=e=>{let t=[...x.DomHandler.find(U.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(t=>t.id===e);return t>-1?t+1:0},eo=e=>{let t=[...x.DomHandler.find(U.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]')].findIndex(t=>t.id===e);return t>-1?t-1:0},el=e=>{let t=x.DomHandler.find(U.current,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),i=e>=t.length?t.length-1:e<0?0:e;i>-1&&E(t[i].getAttribute("id"))},ec=()=>-1!==k?k:null,em=e=>{M.popup&&(S?eu(e):ep(e))},ep=e=>{z.current=e.currentTarget,T(!0),M.onShow&&M.onShow(e)},eu=e=>{z.current=e.currentTarget,T(!1),M.onHide&&M.onHide(e)},ed=()=>{x.DomHandler.addStyles(U.current,{position:"absolute",top:"0",left:"0"}),L.ZIndexUtils.set("menu",U.current,w&&w.autoZIndex||a.default.autoZIndex,M.baseZIndex||w&&w.zIndex.menu||a.default.zIndex.menu),x.DomHandler.absolutePosition(U.current,z.current,M.popupAlignment),M.popup&&(x.DomHandler.focus(F.current),el(0))},eh=()=>{G()},ef=()=>{z.current=null,J()},ex=()=>{L.ZIndexUtils.clear(U.current)};(0,m.useMountEffect)(()=>{R||I((0,v.UniqueComponentId)())}),(0,u.useUnmountEffect)(()=>{L.ZIndexUtils.clear(U.current)}),i.useImperativeHandle(j,()=>({props:M,toggle:em,show:ep,hide:eu,getElement:()=>U.current,getTarget:()=>z.current}));let eg=(e,a,n=null)=>{if(!1===e.visible)return null;let r={item:e,index:a,parentId:n},s=(0,C.classNames)("p-menuitem-link",{"p-disabled":e.disabled}),o=(0,C.classNames)("p-menuitem-icon",e.icon),l=N({className:B("icon")},V("icon",r)),c=g.IconUtils.getJSXIcon(e.icon,{...l},{props:M}),m=N({className:B("label")},V("label",r)),p=e.label&&(0,t.jsx)("span",{...m,children:e.label}),u=e.id||(n||R)+"_"+a,d=N({onClick:t=>K(t,e,u),onMouseMove:e=>Y(e,u),className:B("content",{item:e})},V("content",r)),h=N({href:e.url||"#",className:B("action",{item:e}),onFocus:e=>e.stopPropagation(),target:e.target,tabIndex:"-1","aria-label":e.label,"aria-disabled":e.disabled,"data-p-disabled":e.disabled},V("action",r)),x=(0,t.jsx)("div",{...d,children:(0,t.jsxs)("a",{...h,children:[c,p,(0,t.jsx)(f.Ripple,{})]})});if(e.template){let t={onClick:t=>K(t,e,u),onMouseMove:e=>Y(e,u),className:s,tabIndex:"-1",labelClassName:"p-menuitem-text",iconClassName:o,element:x,props:M};x=b.ObjectUtils.getJSXElement(e.template,e,t)}let v=N({id:u,className:(0,C.classNames)(e.className,B("menuitem",{focused:k===u})),onClick:t=>K(t,e,u),style:A("menuitem",{item:e}),role:"menuitem","aria-label":e.label,"aria-disabled":e.disabled,"data-p-focused":ec()===u,"data-p-disabled":e.disabled||!1},V("menuitem",r));return(0,i.createElement)("li",{...v,key:u},x)},eb=(e,a)=>{let n,r,s;return!1===e.visible?null:e.separator?((e,t)=>{if(!1===e.visible)return null;let a=R+"_separator_"+t,n=N({id:a,className:(0,C.classNames)(e.className,B("separator")),role:"separator"},P("separator"));return(0,i.createElement)("li",{...n,key:a})})(e,a):e.items?(n=R+"_sub_"+a,r=e.items.map((e,t)=>eg(e,t,n)),s=N({id:n,role:"none",className:(0,C.classNames)(e.className,B("submenuHeader",{submenu:e})),style:A("submenuHeader",{submenu:e}),"data-p-disabled":e.disabled},P("submenuHeader")),(0,t.jsxs)(i.Fragment,{children:[(0,i.createElement)("li",{...s,key:n},e.label),r]},n)):eg(e,a)},ev=(()=>{if(M.model){let e=M.model.map(eb),i=N({className:(0,C.classNames)(M.className,B("root",{context:w})),style:M.style,onClick:e=>{M.popup&&d.OverlayService.emit("overlay-click",{originalEvent:e,target:z.current})}},y.getOtherProps(M),P("root")),a=N({ref:F,className:B("menu"),id:R+"_list",tabIndex:M.tabIndex||"0",role:"menu","aria-label":M.ariaLabel,"aria-labelledby":M.ariaLabelledBy,"aria-activedescendant":Z?ec():void 0,onFocus:Q,onKeyDown:$,onBlur:W},P("menu")),n=N({classNames:B("transition"),in:S,timeout:{enter:120,exit:100},options:M.transitionOptions,unmountOnExit:!0,onEnter:ed,onEntered:eh,onExit:ef,onExited:ex},P("transition"));return(0,t.jsx)(s.CSSTransition,{nodeRef:U,...n,children:(0,t.jsx)("div",{id:M.id,ref:U,...i,children:(0,t.jsx)("ul",{...a,children:e})})})}return null})();return M.popup?(0,t.jsx)(h.Portal,{element:ev,appendTo:M.appendTo}):ev}));N.displayName="Menu",e.s(["Menu",0,N],92976)},81201,e=>{"use strict";let t=(0,e.i(44129).EventBus)();e.s(["OverlayService",0,t])},29363,e=>{"use strict";var t=e.i(91398),i=e.i(91788),a=e.i(86037),n=e.i(4242),r=e.i(10836),s=e.i(15498),o=e.i(87350),l=e.i(60150),c=e.i(4632),m=e.i(71834),p=e.i(85971),u=e.i(51551),d=e.i(63957),h=e.i(3935);let f=`
@layer primereact {
    .p-toast {
        width: calc(100% - var(--toast-indent, 0px));
        max-width: 25rem;
    }
    
    .p-toast-message-icon {
        flex-shrink: 0;
    }
    
    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
    }
    
    .p-toast-message-text {
        flex: 1 1 auto;
    }
    
    .p-toast-summary {
        overflow-wrap: anywhere;
    }
    
    .p-toast-detail {
        overflow-wrap: anywhere;
    }
    
    .p-toast-top-center {
        transform: translateX(-50%);
    }
    
    .p-toast-bottom-center {
        transform: translateX(-50%);
    }
    
    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }
    
    .p-toast-icon-close {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-toast-icon-close.p-link {
        cursor: pointer;
    }
    
    /* Animations */
    .p-toast-message-enter {
        opacity: 0;
        transform: translateY(50%);
    }
    
    .p-toast-message-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: transform 0.3s, opacity 0.3s;
    }
    
    .p-toast-message-enter-done {
        transform: none;
    }
    
    .p-toast-message-exit {
        opacity: 1;
        max-height: 1000px;
    }
    
    .p-toast .p-toast-message.p-toast-message-exit-active {
        opacity: 0;
        max-height: 0;
        margin-bottom: 0;
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
    }
}
`,x=s.ComponentBase.extend({defaultProps:{__TYPE:"Toast",id:null,className:null,content:null,style:null,baseZIndex:0,position:"top-right",transitionOptions:null,appendTo:"self",onClick:null,onRemove:null,onShow:null,onHide:null,onMouseEnter:null,onMouseLeave:null,children:void 0},css:{classes:{root:({props:e,context:t})=>(0,h.classNames)("p-toast p-component p-toast-"+e.position,e.className,{"p-input-filled":t&&"filled"===t.inputStyle||"filled"===n.default.inputStyle,"p-ripple-disabled":t&&!1===t.ripple||!1===n.default.ripple}),message:{message:({severity:e})=>(0,h.classNames)("p-toast-message",{[`p-toast-message-${e}`]:e}),content:"p-toast-message-content",buttonicon:"p-toast-icon-close-icon",closeButton:"p-toast-icon-close p-link",icon:"p-toast-message-icon",text:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail"},transition:"p-toast-message"},styles:f,inlineStyles:{root:({props:e})=>({position:"fixed",top:"top-right"===e.position||"top-left"===e.position||"top-center"===e.position?"20px":"center"===e.position?"50%":null,right:("top-right"===e.position||"bottom-right"===e.position)&&"20px",bottom:("bottom-left"===e.position||"bottom-right"===e.position||"bottom-center"===e.position)&&"20px",left:"top-left"===e.position||"bottom-left"===e.position?"20px":"center"===e.position||"top-center"===e.position||"bottom-center"===e.position?"50%":null})}}});var g=e.i(183),b=e.i(63340),v=e.i(67143),L=e.i(93265),C=e.i(3004),j=e.i(55590),y=e.i(12257),N=e.i(50901),w=e.i(45543),M=e.i(75366);let R=i.memo(i.forwardRef((e,a)=>{let n,r,s,o,c=(0,l.useMergeProps)(),{messageInfo:m,metaData:p,ptCallbacks:{ptm:d,ptmo:f,cx:x},index:R}=e,{severity:I,content:S,summary:T,detail:k,closable:E,life:H,sticky:D,className:Z,style:_,contentClassName:P,contentStyle:B,icon:A,closeIcon:O,pt:V}=m.message,U={index:R},F={...p,...U},[z,X]=i.useState(!1),[q]=(0,b.useTimeout)(()=>{J()},H||3e3,!D&&!z),G=(t,i)=>d(t,{hostName:e.hostName,...i}),J=()=>{q(),e.onClose&&e.onClose(m)},K=t=>{e.onClick&&!(w.DomHandler.hasClass(t.target,"p-toast-icon-close")||w.DomHandler.hasClass(t.target,"p-toast-icon-close-icon"))&&e.onClick(m.message)},Y=(()=>{if(m){let i=u.ObjectUtils.getJSXElement(S,{message:m.message,onClick:K,onClose:J}),a=c({className:x("message.icon")},G("icon",F),f(V,"icon",{...U,hostName:e.hostName})),n=A;if(!A)switch(I){case"info":n=(0,t.jsx)(C.InfoCircleIcon,{...a});break;case"warn":n=(0,t.jsx)(L.ExclamationTriangleIcon,{...a});break;case"error":n=(0,t.jsx)(y.TimesCircleIcon,{...a});break;case"success":n=(0,t.jsx)(v.CheckIcon,{...a})}let r=M.IconUtils.getJSXIcon(n,{...a},{props:e}),s=c({className:x("message.text")},G("text",F),f(V,"text",{...U,hostName:e.hostName})),o=c({className:x("message.summary")},G("summary",F),f(V,"summary",{...U,hostName:e.hostName})),l=c({className:x("message.detail")},G("detail",F),f(V,"detail",{...U,hostName:e.hostName}));return i||(0,t.jsxs)(t.Fragment,{children:[r,(0,t.jsxs)("div",{...s,children:[(0,t.jsx)("span",{...o,children:T}),k&&(0,t.jsx)("div",{...l,children:k})]})]})}return null})(),Q=(n=c({className:x("message.buttonicon")},G("buttonicon",F),f(V,"buttonicon",{...U,hostName:e.hostName})),r=O||(0,t.jsx)(j.TimesIcon,{...n}),s=M.IconUtils.getJSXIcon(r,{...n},{props:e}),o=c({type:"button",className:x("message.closeButton"),onClick:J,"aria-label":e.ariaCloseLabel||(0,g.ariaLabel)("close")},G("closeButton",F),f(V,"closeButton",{...U,hostName:e.hostName})),!1!==E?(0,t.jsx)("div",{children:(0,t.jsxs)("button",{...o,children:[s,(0,t.jsx)(N.Ripple,{})]})}):null),W=c({ref:a,className:(0,h.classNames)(Z,x("message.message",{severity:I})),style:_,role:"alert","aria-live":"assertive","aria-atomic":"true",onClick:K,onMouseEnter:t=>{e.onMouseEnter&&e.onMouseEnter(t),!t.defaultPrevented&&(D||(q(),X(!0)))},onMouseLeave:t=>{e.onMouseLeave&&e.onMouseLeave(t),!t.defaultPrevented&&(D||X(!1))}},G("message",F),f(V,"root",{...U,hostName:e.hostName})),$=c({className:(0,h.classNames)(P,x("message.content")),style:B},G("content",F),f(V,"content",{...U,hostName:e.hostName}));return(0,t.jsx)("div",{...W,children:(0,t.jsxs)("div",{...$,children:[Y,Q]})})}));R.displayName="ToastMessage";let I=0,S=i.memo(i.forwardRef((e,h)=>{let f,g,b=(0,l.useMergeProps)(),v=i.useContext(r.PrimeReactContext),L=x.getProps(e,v),[C,j]=i.useState([]),y=i.useRef(null),N={props:L,state:{messages:C}},w=x.setMetaData(N);(0,s.useHandleStyle)(x.css.styles,w.isUnstyled,{name:"toast"});let M=e=>{e&&j(t=>S(t,e,!0))},S=(e,t,i)=>{let a;if(Array.isArray(t)){let n=t.reduce((e,t)=>(e.push({_pId:I++,message:t}),e),[]);a=i&&e?[...e,...n]:n}else{let n={_pId:I++,message:t};a=i&&e?[...e,n]:[n]}return a},T=()=>{d.ZIndexUtils.clear(y.current),j([])},k=e=>{j(t=>S(t,e,!1))},E=e=>{let t=u.ObjectUtils.isNotEmpty(e._pId)?e._pId:e.message||e;j(i=>i.filter(i=>i._pId!==e._pId&&!u.ObjectUtils.deepEquals(i.message,t))),L.onRemove&&L.onRemove(e.message||t)},H=e=>{E(e)};(0,m.useUpdateEffect)(()=>{d.ZIndexUtils.set("toast",y.current,v&&v.autoZIndex||n.default.autoZIndex,L.baseZIndex||v&&v.zIndex.toast||n.default.zIndex.toast)},[C,L.baseZIndex]),(0,c.useUnmountEffect)(()=>{d.ZIndexUtils.clear(y.current)}),i.useImperativeHandle(h,()=>({props:L,show:M,replace:k,remove:E,clear:T,getElement:()=>y.current}));let D=(f=b({ref:y,id:L.id,className:w.cx("root",{context:v}),style:w.sx("root")},x.getOtherProps(L),w.ptm("root")),g=b({classNames:w.cx("transition"),timeout:{enter:300,exit:300},options:L.transitionOptions,unmountOnExit:!0,onEntered:()=>{L.onShow&&L.onShow()},onExited:()=>{1===C.length&&d.ZIndexUtils.clear(y.current),L.onHide&&L.onHide()}},w.ptm("transition")),(0,t.jsx)("div",{...f,children:(0,t.jsx)(a.TransitionGroup,{children:C&&C.map((a,n)=>{let r=i.createRef();return(0,t.jsx)(o.CSSTransition,{nodeRef:r,...g,children:e.content?u.ObjectUtils.getJSXElement(e.content,{message:a.message}):(0,t.jsx)(R,{hostName:"Toast",ref:r,messageInfo:a,index:n,onClick:L.onClick,onClose:H,onMouseEnter:L.onMouseEnter,onMouseLeave:L.onMouseLeave,closeIcon:L.closeIcon,ptCallbacks:w,metaData:N})},a._pId)})})}));return(0,t.jsx)(p.Portal,{element:D,appendTo:L.appendTo})}));S.displayName="Toast",e.s(["Toast",0,S],29363)},44129,e=>{"use strict";e.s(["EventBus",0,function(){let e=new Map;return{on(t,i){let a=e.get(t);a?a.push(i):a=[i],e.set(t,a)},off(t,i){let a=e.get(t);a&&a.splice(a.indexOf(i)>>>0,1)},emit(t,i){let a=e.get(t);a&&a.slice().forEach(e=>e(i))}}}],44129)},86037,e=>{"use strict";var t=e.i(60997),i=e.i(75907),a=e.i(49893),n=e.i(91788),r=e.i(20980);function s(e,t){var i=Object.create(null);return e&&n.Children.map(e,function(e){return e}).forEach(function(e){i[e.key]=t&&(0,n.isValidElement)(e)?t(e):e}),i}function o(e,t,i){return null!=i[t]?i[t]:e.props[t]}var l=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},c=function(e){function c(t,i){var a=e.call(this,t,i)||this,n=a.handleExited.bind(function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a));return a.state={contextValue:{isMounting:!0},handleExited:n,firstRender:!0},a}(0,a.default)(c,e);var m=c.prototype;return m.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},m.componentWillUnmount=function(){this.mounted=!1},c.getDerivedStateFromProps=function(e,t){var i,a,r=t.children,l=t.handleExited;return{children:t.firstRender?s(e.children,function(t){return(0,n.cloneElement)(t,{onExited:l.bind(null,t),in:!0,appear:o(t,"appear",e),enter:o(t,"enter",e),exit:o(t,"exit",e)})}):(Object.keys(a=function(e,t){function i(i){return i in t?t[i]:e[i]}e=e||{},t=t||{};var a,n=Object.create(null),r=[];for(var s in e)s in t?r.length&&(n[s]=r,r=[]):r.push(s);var o={};for(var l in t){if(n[l])for(a=0;a<n[l].length;a++){var c=n[l][a];o[n[l][a]]=i(c)}o[l]=i(l)}for(a=0;a<r.length;a++)o[r[a]]=i(r[a]);return o}(r,i=s(e.children))).forEach(function(t){var s=a[t];if((0,n.isValidElement)(s)){var c=t in r,m=t in i,p=r[t],u=(0,n.isValidElement)(p)&&!p.props.in;m&&(!c||u)?a[t]=(0,n.cloneElement)(s,{onExited:l.bind(null,s),in:!0,exit:o(s,"exit",e),enter:o(s,"enter",e)}):m||!c||u?m&&c&&(0,n.isValidElement)(p)&&(a[t]=(0,n.cloneElement)(s,{onExited:l.bind(null,s),in:p.props.in,exit:o(s,"exit",e),enter:o(s,"enter",e)})):a[t]=(0,n.cloneElement)(s,{in:!1})}}),a),firstRender:!1}},m.handleExited=function(e,t){var a=s(this.props.children);e.key in a||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var a=(0,i.default)({},t.children);return delete a[e.key],{children:a}}))},m.render=function(){var e=this.props,i=e.component,a=e.childFactory,s=(0,t.default)(e,["component","childFactory"]),o=this.state.contextValue,c=l(this.state.children).map(a);return(delete s.appear,delete s.enter,delete s.exit,null===i)?n.default.createElement(r.default.Provider,{value:o},c):n.default.createElement(r.default.Provider,{value:o},n.default.createElement(i,s,c))},c}(n.default.Component);c.propTypes={},c.defaultProps={component:"div",childFactory:function(e){return e}},e.s(["TransitionGroup",0,c],86037)},5115,e=>{"use strict";var t=e.i(91398),i=e.i(88850),a=e.i(82948),n=e.i(28137);function r(){return(0,t.jsxs)(n.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Menu component uses the ",(0,t.jsx)("i",{children:"menu"})," role and the value to describe the menu can either be provided with ",(0,t.jsx)("i",{children:"aria-labelledby"})," or ",(0,t.jsx)("i",{children:"aria-label"})," props. Each list item has a ",(0,t.jsx)("i",{children:"presentation"})," role whereas anchor elements have a"," ",(0,t.jsx)("i",{children:"menuitem"})," role with ",(0,t.jsx)("i",{children:"aria-label"})," referring to the label of the item and ",(0,t.jsx)("i",{children:"aria-disabled"})," defined if the item is disabled. A submenu within a Menu uses the ",(0,t.jsx)("i",{children:"group"})," role with an ",(0,t.jsx)("i",{children:"aria-labelledby"})," defined as the id of the submenu root menuitem label."]}),(0,t.jsxs)("p",{children:["In popup mode, the component implicitly manages the ",(0,t.jsx)("i",{children:"aria-expanded"}),", ",(0,t.jsx)("i",{children:"aria-haspopup"})," and ",(0,t.jsx)("i",{children:"aria-controls"})," attributes of the target element to define the relation between the target and the popup."]}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"tab"})]}),(0,t.jsx)("td",{children:"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Activates the focused menuitem. If menu is in overlay mode, popup gets closes and focus moves to target."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"If menu is in overlay mode, popup gets closes and focus moves to target."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next menuitem."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous menuitem."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Moves focus to the first menuitem."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Moves focus to the last menuitem."})]})]})]})})]})}var s=e.i(5180),o=e.i(92976);function l(e){let i={basic:`
<Menu model={items} />
`,javascript:`
import React from 'react'; 
import { Menu } from 'primereact/menu';

export default function BasicDemo() {
    let items = [
        { label: 'New', icon: 'pi pi-plus' },
        { label: 'Search', icon: 'pi pi-search' }
    ];

    return (
        <Menu model={items} />
    )
}
        `,typescript:`
import React from 'react'; 
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';

export default function BasicDemo() {
    let items: MenuItem[] = [
        { label: 'New', icon: 'pi pi-plus' },
        { label: 'Search', icon: 'pi pi-search' }
    ];

    return (
        <Menu model={items} />
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Menu requires a collection of menuitems as its ",(0,t.jsx)("i",{children:"model"}),"."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(o.Menu,{model:[{label:"New",icon:"pi pi-plus"},{label:"Search",icon:"pi pi-search"}]})}),(0,t.jsx)(s.DocSectionCode,{code:i})]})}var c=e.i(29363),m=e.i(91788);function p(e){let i=(0,m.useRef)(null),a=[{label:"New",icon:"pi pi-plus",command:()=>{i.current.show({severity:"success",summary:"Success",detail:"File created",life:3e3})}},{label:"Search",icon:"pi pi-search",command:()=>{i.current.show({severity:"warn",summary:"Search Completed",detail:"No results found",life:3e3})}}],r={basic:`
<Menu model={items} />
<Toast ref={toast} />
`,javascript:`
import React, { useRef } from 'react'; 
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export default function CommandDemo() {
    const toast = useRef(null);
    let items = [
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
                toast.current.show({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
            }
        }
    ];

    return (
        <Menu model={items} />
        <Toast ref={toast} />
    )
}
        `,typescript:`
import React, { useRef } from 'react'; 
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';


export default function CommandDemo() {
    const toast = useRef<Toast>(null);
    let items: MenuItem[] = [
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
                toast.current.show({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
            }
        }
    ];

    return (
        <Menu model={items} />
        <Toast ref={toast} />
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("i",{children:"command"})," property defines the callback to run when an item is activated by click or a key event."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(o.Menu,{model:a}),(0,t.jsx)(c.Toast,{ref:i})]}),(0,t.jsx)(s.DocSectionCode,{code:r})]})}var u=e.i(3828);function d(e){let i=(0,m.useRef)(null);(0,u.useRouter)();let a={basic:`
<Toast ref={toast} />
<Menu model={items} />
`,javascript:`
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export default function GroupDemo() {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search'
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out'
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Menu model={items} />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function GroupDemo() {
    const toast = useRef<Toast>(null);
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search'
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out'
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Menu model={items} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(c.Toast,{ref:i}),(0,t.jsx)(o.Menu,{model:[{label:"Documents",items:[{label:"New",icon:"pi pi-plus"},{label:"Search",icon:"pi pi-search"}]},{label:"Profile",items:[{label:"Settings",icon:"pi pi-cog"},{label:"Logout",icon:"pi pi-sign-out"}]}]})]}),(0,t.jsx)(s.DocSectionCode,{code:a})]})}function h(e){let i={basic:`
import { Menu } from 'primereact/menu';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)(s.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}var f=e.i(57724);function x(e){let i=(0,m.useRef)(null),a=(0,m.useRef)(null);(0,u.useRouter)();let r=(0,m.useRef)(null),l=[{label:"Options",items:[{label:"Refresh",icon:"pi pi-refresh"},{label:"Export",icon:"pi pi-upload"},{label:"Custom template",template:(e,i)=>(0,t.jsx)("div",{className:"p-menuitem-content","data-pc-section":"content",onMouseMove:e=>i.onMouseMove(e),children:(0,t.jsx)("a",{href:"#",className:"p-menuitem-link",children:"Lorem ipsum"})})}]}],p={basic:`
<Toast ref={toast}></Toast>
<Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
<Button label="Show Left" icon="pi pi-align-left" className="mr-2" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
<Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
<Button label="Show Right" icon="pi pi-align-right" className="mr-2" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
`,javascript:`
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export default function PopupDoc() {
    const menuLeft = useRef(null);
    const menuRight = useRef(null);
    const toast = useRef(null);
    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Refresh',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Export',
                    icon: 'pi pi-upload'
                },
                {
                    label: 'Custom template',
                    template: (item, options) => {
                        return (
                            <div className="p-menuitem-content" data-pc-section="content" onMouseMove={(e) => options.onMouseMove(e)}>
                                <a href="#" className="p-menuitem-link">
                                    Lorem ipsum
                                </a>
                            </div>
                        );
                    }
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
            <Button label="Show Left" icon="pi pi-align-left" className="mr-2" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
            <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
            <Button label="Show Right" icon="pi pi-align-right" className="mr-2" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function PopupDoc() {
    const menuLeft = useRef<Menu>(null);
    const menuRight = useRef<Menu>(null);
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Refresh',
                    icon: 'pi pi-refresh'
                },
                {
                    label: 'Export',
                    icon: 'pi pi-upload'
                },
                {
                    label: 'Custom template',
                    template: (item, options) => {
                        return (
                            <div className="p-menuitem-content" data-pc-section="content" onMouseMove={(e) => options.onMouseMove(e)}>
                                <a href="#" className="p-menuitem-link">
                                    Lorem ipsum
                                </a>
                            </div>
                        );
                    }
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />
            <Button label="Show Left" icon="pi pi-align-left" className="mr-2" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
            <Menu model={items} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />
            <Button label="Show Right" icon="pi pi-align-right" className="mr-2" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Popup mode is enabled by adding ",(0,t.jsx)("i",{children:"popup"})," property and calling ",(0,t.jsx)("i",{children:"toggle"})," method with an event of the target. The ",(0,t.jsx)("i",{children:"popupAlignment"})," property allows you to control how the overlay is aligned with its target."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(c.Toast,{ref:r}),(0,t.jsx)(o.Menu,{model:l,popup:!0,ref:i,id:"popup_menu_left"}),(0,t.jsx)(f.Button,{label:"Show Left",icon:"pi pi-align-left",className:"mr-2",onClick:e=>i.current.toggle(e),"aria-controls":"popup_menu_left","aria-haspopup":!0}),(0,t.jsx)(o.Menu,{model:l,popup:!0,ref:a,id:"popup_menu_right",popupAlignment:"right"}),(0,t.jsx)(f.Button,{label:"Show Right",icon:"pi pi-align-right",className:"mr-2",onClick:e=>a.current.toggle(e),"aria-controls":"popup_menu_right","aria-haspopup":!0})]}),(0,t.jsx)(s.DocSectionCode,{code:p})]})}let g=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"menu"})})]});function b(e){let i=(0,u.useRouter)(),a=[{label:"Router Link",icon:"pi pi-palette",url:"/unstyled"},{label:"Programmatic",icon:"pi pi-link",command:()=>{i.push("/installation")}},{label:"External",icon:"pi pi-home",url:"https://react.dev/"}],r={basic:`
<Menu model={items} />
`,javascript:`
import React from 'react'; 
import { Menu } from 'primereact/menu';
import { useRouter } from 'next/router';

export default function RouterDemo() {
    const router = useRouter();
    const items = [
        {
            label: 'Router Link',
            icon: 'pi pi-palette',
            url: '/unstyled'
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
            url: 'https://react.dev/'
        }
    ];

    return (
        <Menu model={items} />
    )
}
        `,typescript:`
import React from 'react'; 
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { useRouter } from 'next/router';

export default function RouterDemo() {
    const router = useRouter();
    const items = [
        {
            label: 'Router Link',
            icon: 'pi pi-palette',
            url: '/unstyled'
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
            url: 'https://react.dev/'
        }
    ];

    return (
        <Menu model={items} />
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Items with navigation are defined with ",(0,t.jsx)("i",{children:"command"})," and ",(0,t.jsx)("i",{children:"url"})," property to be able to use a router link component, an external link or programmatic navigation."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(o.Menu,{model:a})}),(0,t.jsx)(s.DocSectionCode,{code:r})]})}var v=e.i(10197),L=e.i(3935),C=e.i(50989);function j(e){let i=e=>(0,t.jsx)("div",{className:"p-menuitem-content",children:(0,t.jsxs)("a",{className:"flex align-items-center p-menuitem-link",children:[(0,t.jsx)("span",{className:e.icon}),(0,t.jsx)("span",{className:"mx-2",children:e.label}),e.badge&&(0,t.jsx)(C.Badge,{className:"ml-auto",value:e.badge}),e.shortcut&&(0,t.jsx)("span",{className:"ml-auto border-1 surface-border border-round surface-100 text-xs p-1",children:e.shortcut})]})}),a=[{template:()=>(0,t.jsxs)("span",{className:"inline-flex align-items-center gap-1 px-2 py-2",children:[(0,t.jsxs)("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("g",{mask:"url(#mask0_2642_713)",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M31.5357 13.0197L29.2036 17.0218L31.531 21.0161C32.3802 22.4733 32.3802 24.2131 31.5311 25.6702C30.682 27.1274 29.1612 27.9973 27.463 27.9973H22.8081L20.6555 31.6915C19.7975 33.164 18.2608 34.0431 16.5447 34.0431C14.8286 34.0431 13.2918 33.164 12.4337 31.6915L10.2811 27.9973H5.617C3.93113 27.9973 2.42136 27.1337 1.57841 25.6871C0.735451 24.2405 0.735451 22.5131 1.57841 21.0666L3.91045 17.0644L1.58298 13.0702C0.733895 11.613 0.733895 9.87311 1.58298 8.41596C2.43207 6.95878 3.95286 6.08884 5.65104 6.08884H10.306L12.4585 2.39474C13.3165 0.922318 14.8535 0.0430908 16.5695 0.0430908C18.2856 0.0430908 19.8223 0.922227 20.6803 2.39474L22.8329 6.08884H27.4971C29.183 6.08884 30.6927 6.95252 31.5357 8.3991C32.3787 9.84573 32.3787 11.573 31.5357 13.0197ZM16.5695 1.06124C15.225 1.0612 14.0208 1.74999 13.3486 2.90374L11.4927 6.08873H21.6463L19.7904 2.90374C19.1182 1.74999 17.914 1.06124 16.5695 1.06124ZM22.7105 26.1286L22.6607 26.2141L22.6534 26.2266L22.5337 26.432L21.8976 27.5237L21.7881 27.7117L20.4662 29.9803L20.0676 30.6643L19.7869 31.146L19.7763 31.1484L19.77 31.1592C19.0978 32.313 17.8714 32.6453 16.5269 32.6453C15.1843 32.6453 14.004 32.3149 13.3312 31.1641L13.31 31.1588L12.6277 29.9878L12.4567 29.6945L5.09715 17.0644L6.43206 14.7736L6.43225 14.7744L8.78685 10.7356L8.7852 10.7353L9.05248 10.2767L9.05421 10.277L10.9022 7.10709L22.2401 7.10314L28.017 17.0219L22.7105 26.1286ZM30.6411 25.1613C29.9777 26.2996 28.7896 26.9792 27.4629 26.9792H23.4014L28.6101 18.0401L30.641 21.5253C31.3043 22.6636 31.3043 24.0229 30.6411 25.1613ZM2.46839 25.178C3.1256 26.3058 4.30263 26.9791 5.617 26.9791H9.6878L4.50379 18.0826L2.46839 21.5756C1.81123 22.7035 1.81123 24.0502 2.46839 25.178ZM2.47303 12.5611C1.80969 11.4227 1.80969 10.0634 2.47303 8.92507C3.13632 7.78669 4.32437 7.10706 5.65105 7.10706H9.71266L4.50381 16.0462L2.47303 12.5611ZM27.497 7.10706C28.8114 7.10706 29.9885 7.78039 30.6456 8.90826C31.3028 10.036 31.3028 11.3827 30.6456 12.5106L28.6102 16.0036L23.4262 7.10706H27.497Z",fill:"var(--primary-color)"})}),(0,t.jsx)("path",{d:"M22.0969 18.6465L20.3461 18.2616L21.7078 20.1862V26.1522L26.0214 22.3031L26.3764 15.7598L24.2367 16.5296L22.0969 18.6465Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{d:"M11.2035 18.6465L12.9543 18.2616L11.5926 20.1862V26.1522L7.27906 22.3031L6.92397 15.7598L9.06376 16.5296L11.2035 18.6465Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.1761 20.5713L13.7323 18.2618L14.7049 18.8392H18.5955L19.5681 18.2618L21.1243 20.5713V29.2316L19.3056 32.6659H13.6397L12.1761 29.2316V20.5713Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{d:"M21.7079 29.8089L24.2367 27.3071V24.8052L21.7079 26.9221V29.8089Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{d:"M11.5927 29.8089L9.06387 27.3071V24.8052L11.5927 26.9221V29.8089Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2613 7.09967H14.1215L12.5652 10.7563L15.0941 18.0694H18.401L20.7353 10.7563L19.1791 7.09967H17.0394V18.0694H16.2613V7.09967Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{d:"M15.0942 18.0694L6.7296 14.9901L5.56244 10.1788L12.7599 10.7562L15.2887 18.0694H15.0942Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{d:"M18.4011 18.0694L26.7658 14.9901L27.9329 10.1788L20.5409 10.7562L18.2066 18.0694H18.4011Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{d:"M21.1245 10.1789L24.8545 9.794L22.4862 7.09967H19.7628L21.1245 10.1789Z",fill:"var(--primary-color)"}),(0,t.jsx)("path",{d:"M12.1762 10.1789L8.4462 9.794L10.8145 7.09967H13.5378L12.1762 10.1789Z",fill:"var(--primary-color)"})]}),(0,t.jsxs)("span",{className:"font-medium text-xl font-semibold",children:["PRIME",(0,t.jsx)("span",{className:"text-primary",children:"APP"})]})]})},{separator:!0},{label:"Documents",items:[{label:"New",icon:"pi pi-plus",shortcut:"⌘+N",template:i},{label:"Search",icon:"pi pi-search",shortcut:"⌘+S",template:i}]},{label:"Profile",items:[{label:"Settings",icon:"pi pi-cog",shortcut:"⌘+O",template:i},{label:"Messages",icon:"pi pi-inbox",badge:2,template:i},{label:"Logout",icon:"pi pi-sign-out",shortcut:"⌘+Q",template:i}]},{separator:!0},{command:()=>{toast.current.show({severity:"info",summary:"Info",detail:"Item Selected",life:3e3})},template:(e,i)=>(0,t.jsxs)("button",{onClick:e=>i.onClick(e),className:(0,L.classNames)(i.className,"w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround"),children:[(0,t.jsx)(v.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",className:"mr-2",shape:"circle"}),(0,t.jsxs)("div",{className:"flex flex-column align",children:[(0,t.jsx)("span",{className:"font-bold",children:"Amy Elsner"}),(0,t.jsx)("span",{className:"text-sm",children:"Agent"})]})]})}],r={basic:`
<Menu model={items} className="w-full md:w-15rem"  />
`,javascript:`
import React from 'react'; 
import { Menu } from 'primereact/menu';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { classNames } from 'primereact/utils';

export default function TemplateDemo() {
    const itemRenderer = (item) => (
        <div className='p-menuitem-content'>
            <a className="flex align-items-center p-menuitem-link">
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
            </a>
        </div>
    );
    let items = [
        {
            template: () => {
                return (
                    <span className="inline-flex align-items-center gap-1 px-2 py-2">
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
                        <span className="font-medium text-xl font-semibold">
                            PRIME<span className="text-primary">APP</span>
                        </span>
                    </span>
                );
            }
        },
        {
            separator: true
        },
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Messages',
                    icon: 'pi pi-inbox',
                    badge: 2,
                    template: itemRenderer
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    shortcut: '⌘+Q',
                    template: itemRenderer
                }
            ]
        },
        {
            separator: true
        },
        {
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 });
            },
            template: (item, options) => {
                return (
                    <button onClick={(e) => options.onClick(e)} className={classNames(options.className, 'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround')}>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" />
                        <div className="flex flex-column align">
                            <span className="font-bold">Amy Elsner</span>
                            <span className="text-sm">Agent</span>
                        </div>
                    </button>
                );
            }
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <Menu model={items} className="w-full md:w-15rem" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { Badge } from 'primereact/badge';
import { MenuItem } from 'primereact/menuitem';
import { classNames } from 'primereact/utils';

export default function TemplateDemo() {
    const itemRenderer = (item) => (
        <div className='p-menuitem-content'>
            <a className="flex align-items-center p-menuitem-link">
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
            </a>
        </div>
    );
    let items: MenuItem[] = [
        {
            template: () => {
                return (
                    <span className="inline-flex align-items-center gap-1 px-2 py-2">
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
                        <span className="font-medium text-xl font-semibold">
                            PRIME<span className="text-primary">APP</span>
                        </span>
                    </span>
                );
            }
        },
        {
            separator: true
        },
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Messages',
                    icon: 'pi pi-inbox',
                    badge: 2,
                    template: itemRenderer
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    shortcut: '⌘+Q',
                    template: itemRenderer
                }
            ]
        },
        {
            separator: true
        },
        {
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Info', detail: 'Item Selected', life: 3000 });
            },
            template: (item, options) => {
                return (
                    <button onClick={(e) => options.onClick(e)} className={classNames(options.className, 'w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround')}>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" />
                        <div className="flex flex-column align">
                            <span className="font-bold">Amy Elsner</span>
                            <span className="text-sm">Agent</span>
                        </div>
                    </button>
                );
            }
        }
    ]

    return (
        <div className="card flex justify-content-center">
            <Menu model={items} className="w-full md:w-15rem"  />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Custom content can be placed inside the menuitem using the ",(0,t.jsx)("i",{children:"template"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(o.Menu,{model:a,className:"w-full md:w-15rem"})}),(0,t.jsx)(s.DocSectionCode,{code:r})]})}function y(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menu"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menu-list"}),(0,t.jsx)("td",{children:"List element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menuitem"}),(0,t.jsx)("td",{children:"Menuitem element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menuitem-text"}),(0,t.jsx)("td",{children:"Label of a menuitem."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-menuitem-icon"}),(0,t.jsx)("td",{children:"Icon of a menuitem."})]})]})]})})]})}var N=e.i(41158);function w(e){let i={basic:`
export const TRANSITIONS = {
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
    menu: {
        root: 'py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border border-gray-300 dark:border-blue-900/40 rounded-md w-48',
        menu: {
            className: classNames('m-0 p-0 list-none', 'outline-none')
        },
        content: ({ state }) => ({
            className: classNames(
                'text-gray-700 dark:text-white/80 transition-shadow duration-200 rounded-none',
                'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80', // Hover
                {
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': state.focused
                }
            )
        }),
        action: {
            className: classNames('text-gray-700 dark:text-white/80 py-3 px-5 select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative')
        },
        menuitem: {
            className: classNames('hover:bg-gray-200')
        },
        icon: 'text-gray-600 dark:text-white/70 mr-2',
        submenuheader: {
            className: classNames('m-0 p-3 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-bold rounded-tl-none rounded-tr-none')
        },
        separator: 'border-t border-gray-300 dark:border-blue-900/40 my-1',
        transition: TRANSITIONS.overlay
    }
}
        `},a={javascript:`
import React from 'react'; 
import { Menu } from 'primereact/menu';

export default function UnstyledDemo() {
    let items = [
        {label: 'New', icon: 'pi pi-fw pi-plus'},
        {label: 'Delete', icon: 'pi pi-fw pi-trash'}
    ];

    return (
        <div className="card flex justify-center">
            <Menu model={items} />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(n.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(N.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(s.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(s.DocSectionCode,{code:a,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:g},{id:"pt.menu.options",label:"Menu PT Options",component:i.default}];return(0,t.jsx)(a.DocComponent,{title:"React Menu Component",header:"Menu",description:"Menu is a navigation/command component that supports dynamic and static positioning.",componentDocs:[{id:"import",label:"Import",component:h},{id:"basic",label:"Basic",component:l},{id:"group",label:"Group",component:d},{id:"popup",label:"Popup",component:x},{id:"template",label:"Template",component:j},{id:"command",label:"Command",component:p},{id:"router",label:"Router",component:b},{id:"accessibility",label:"Accessibility",component:r}],apiDocs:["Menu","MenuItem"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:y},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:w}]}]})}],5115)},20186,(e,t,i)=>{let a="/menu";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(5115)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);