(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,36785,e=>{"use strict";var t=e.i(91788),o=e.i(45543),n=e.i(20728),r=e.i(26295),i=e.i(35048),s=e.i(4632);e.s(["useOverlayListener",0,({target:e,overlay:a,listener:c,when:l=!0,type:p="click"})=>{let u=t.useRef(null),m=t.useRef(null),[d,f]=(0,n.useEventListener)({target:"window",type:p,listener:e=>{c&&c(e,{type:"outside",valid:3!==e.which&&j(e)})},when:l}),[h,g]=(0,i.useResizeListener)({listener:e=>{c&&c(e,{type:"resize",valid:!o.DomHandler.isTouchDevice()})},when:l}),[x,C]=(0,n.useEventListener)({target:"window",type:"orientationchange",listener:e=>{c&&c(e,{type:"orientationchange",valid:!0})},when:l}),[v,b]=(0,r.useOverlayScrollListener)({target:e,listener:e=>{c&&c(e,{type:"scroll",valid:!0})},when:l}),j=e=>u.current&&!(u.current.isSameNode(e.target)||u.current.contains(e.target)||m.current&&m.current.contains(e.target)),y=()=>{f(),g(),C(),b()};return t.useEffect(()=>{l?(u.current=o.DomHandler.getTargetElement(e),m.current=o.DomHandler.getTargetElement(a)):(y(),u.current=m.current=null)},[e,a,l]),(0,s.useUnmountEffect)(()=>{y()}),[()=>{d(),h(),x(),v()},y]}])},63340,e=>{"use strict";var t=e.i(91788),o=e.i(4632);e.s(["useTimeout",0,(e,n=0,r=!0)=>{let i=t.useRef(null),s=t.useRef(null),a=t.useCallback(()=>clearTimeout(i.current),[i.current]);return t.useEffect(()=>{s.current=e}),t.useEffect(()=>{if(r)return i.current=setTimeout(function(){s.current()},n),a;a()},[n,r]),(0,o.useUnmountEffect)(()=>{a()}),[a]}])},67143,e=>{"use strict";var t=e.i(91398),o=e.i(91788),n=e.i(85850);let r=o.memo(o.forwardRef((e,o)=>{let r=n.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:o,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,t.jsx)("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"})})}));r.displayName="CheckIcon",e.s(["CheckIcon",0,r])},93265,3004,e=>{"use strict";var t=e.i(91398),o=e.i(91788),n=e.i(85850);let r=o.memo(o.forwardRef((e,o)=>{let r=n.IconBase.getPTI(e);return(0,t.jsxs)("svg",{ref:o,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[(0,t.jsx)("path",{d:"M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",fill:"currentColor"}),(0,t.jsx)("path",{d:"M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",fill:"currentColor"}),(0,t.jsx)("path",{d:"M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",fill:"currentColor"})]})}));r.displayName="ExclamationTriangleIcon",e.s(["ExclamationTriangleIcon",0,r],93265);let i=o.memo(o.forwardRef((e,o)=>{let r=n.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:o,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",fill:"currentColor"})})}));i.displayName="InfoCircleIcon",e.s(["InfoCircleIcon",0,i],3004)},55590,e=>{"use strict";var t=e.i(91398),o=e.i(91788),n=e.i(85850);let r=o.memo(o.forwardRef((e,o)=>{let r=n.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:o,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,t.jsx)("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"})})}));r.displayName="TimesIcon",e.s(["TimesIcon",0,r])},12257,e=>{"use strict";var t=e.i(91398),o=e.i(91788),n=e.i(85850);let r=o.memo(o.forwardRef((e,o)=>{let r=n.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:o,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"})})}));r.displayName="TimesCircleIcon",e.s(["TimesCircleIcon",0,r])},81201,e=>{"use strict";let t=(0,e.i(44129).EventBus)();e.s(["OverlayService",0,t])},29363,e=>{"use strict";var t=e.i(91398),o=e.i(91788),n=e.i(86037),r=e.i(4242),i=e.i(10836),s=e.i(15498),a=e.i(87350),c=e.i(60150),l=e.i(4632),p=e.i(71834),u=e.i(85971),m=e.i(51551),d=e.i(63957),f=e.i(3935);let h=`
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
`,g=s.ComponentBase.extend({defaultProps:{__TYPE:"Toast",id:null,className:null,content:null,style:null,baseZIndex:0,position:"top-right",transitionOptions:null,appendTo:"self",onClick:null,onRemove:null,onShow:null,onHide:null,onMouseEnter:null,onMouseLeave:null,children:void 0},css:{classes:{root:({props:e,context:t})=>(0,f.classNames)("p-toast p-component p-toast-"+e.position,e.className,{"p-input-filled":t&&"filled"===t.inputStyle||"filled"===r.default.inputStyle,"p-ripple-disabled":t&&!1===t.ripple||!1===r.default.ripple}),message:{message:({severity:e})=>(0,f.classNames)("p-toast-message",{[`p-toast-message-${e}`]:e}),content:"p-toast-message-content",buttonicon:"p-toast-icon-close-icon",closeButton:"p-toast-icon-close p-link",icon:"p-toast-message-icon",text:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail"},transition:"p-toast-message"},styles:h,inlineStyles:{root:({props:e})=>({position:"fixed",top:"top-right"===e.position||"top-left"===e.position||"top-center"===e.position?"20px":"center"===e.position?"50%":null,right:("top-right"===e.position||"bottom-right"===e.position)&&"20px",bottom:("bottom-left"===e.position||"bottom-right"===e.position||"bottom-center"===e.position)&&"20px",left:"top-left"===e.position||"bottom-left"===e.position?"20px":"center"===e.position||"top-center"===e.position||"bottom-center"===e.position?"50%":null})}}});var x=e.i(183),C=e.i(63340),v=e.i(67143),b=e.i(93265),j=e.i(3004),y=e.i(55590),w=e.i(12257),N=e.i(50901),T=e.i(45543),B=e.i(75366);let R=o.memo(o.forwardRef((e,n)=>{let r,i,s,a,l=(0,c.useMergeProps)(),{messageInfo:p,metaData:u,ptCallbacks:{ptm:d,ptmo:h,cx:g},index:R}=e,{severity:k,content:P,summary:I,detail:E,closable:S,life:D,sticky:O,className:L,style:M,contentClassName:H,contentStyle:F,icon:U,closeIcon:Y,pt:A}=p.message,Z={index:R},_={...u,...Z},[V,z]=o.useState(!1),[X]=(0,C.useTimeout)(()=>{J()},D||3e3,!O&&!V),K=(t,o)=>d(t,{hostName:e.hostName,...o}),J=()=>{X(),e.onClose&&e.onClose(p)},G=t=>{e.onClick&&!(T.DomHandler.hasClass(t.target,"p-toast-icon-close")||T.DomHandler.hasClass(t.target,"p-toast-icon-close-icon"))&&e.onClick(p.message)},W=(()=>{if(p){let o=m.ObjectUtils.getJSXElement(P,{message:p.message,onClick:G,onClose:J}),n=l({className:g("message.icon")},K("icon",_),h(A,"icon",{...Z,hostName:e.hostName})),r=U;if(!U)switch(k){case"info":r=(0,t.jsx)(j.InfoCircleIcon,{...n});break;case"warn":r=(0,t.jsx)(b.ExclamationTriangleIcon,{...n});break;case"error":r=(0,t.jsx)(w.TimesCircleIcon,{...n});break;case"success":r=(0,t.jsx)(v.CheckIcon,{...n})}let i=B.IconUtils.getJSXIcon(r,{...n},{props:e}),s=l({className:g("message.text")},K("text",_),h(A,"text",{...Z,hostName:e.hostName})),a=l({className:g("message.summary")},K("summary",_),h(A,"summary",{...Z,hostName:e.hostName})),c=l({className:g("message.detail")},K("detail",_),h(A,"detail",{...Z,hostName:e.hostName}));return o||(0,t.jsxs)(t.Fragment,{children:[i,(0,t.jsxs)("div",{...s,children:[(0,t.jsx)("span",{...a,children:I}),E&&(0,t.jsx)("div",{...c,children:E})]})]})}return null})(),q=(r=l({className:g("message.buttonicon")},K("buttonicon",_),h(A,"buttonicon",{...Z,hostName:e.hostName})),i=Y||(0,t.jsx)(y.TimesIcon,{...r}),s=B.IconUtils.getJSXIcon(i,{...r},{props:e}),a=l({type:"button",className:g("message.closeButton"),onClick:J,"aria-label":e.ariaCloseLabel||(0,x.ariaLabel)("close")},K("closeButton",_),h(A,"closeButton",{...Z,hostName:e.hostName})),!1!==S?(0,t.jsx)("div",{children:(0,t.jsxs)("button",{...a,children:[s,(0,t.jsx)(N.Ripple,{})]})}):null),$=l({ref:n,className:(0,f.classNames)(L,g("message.message",{severity:k})),style:M,role:"alert","aria-live":"assertive","aria-atomic":"true",onClick:G,onMouseEnter:t=>{e.onMouseEnter&&e.onMouseEnter(t),!t.defaultPrevented&&(O||(X(),z(!0)))},onMouseLeave:t=>{e.onMouseLeave&&e.onMouseLeave(t),!t.defaultPrevented&&(O||z(!1))}},K("message",_),h(A,"root",{...Z,hostName:e.hostName})),Q=l({className:(0,f.classNames)(H,g("message.content")),style:F},K("content",_),h(A,"content",{...Z,hostName:e.hostName}));return(0,t.jsx)("div",{...$,children:(0,t.jsxs)("div",{...Q,children:[W,q]})})}));R.displayName="ToastMessage";let k=0,P=o.memo(o.forwardRef((e,f)=>{let h,x,C=(0,c.useMergeProps)(),v=o.useContext(i.PrimeReactContext),b=g.getProps(e,v),[j,y]=o.useState([]),w=o.useRef(null),N={props:b,state:{messages:j}},T=g.setMetaData(N);(0,s.useHandleStyle)(g.css.styles,T.isUnstyled,{name:"toast"});let B=e=>{e&&y(t=>P(t,e,!0))},P=(e,t,o)=>{let n;if(Array.isArray(t)){let r=t.reduce((e,t)=>(e.push({_pId:k++,message:t}),e),[]);n=o&&e?[...e,...r]:r}else{let r={_pId:k++,message:t};n=o&&e?[...e,r]:[r]}return n},I=()=>{d.ZIndexUtils.clear(w.current),y([])},E=e=>{y(t=>P(t,e,!1))},S=e=>{let t=m.ObjectUtils.isNotEmpty(e._pId)?e._pId:e.message||e;y(o=>o.filter(o=>o._pId!==e._pId&&!m.ObjectUtils.deepEquals(o.message,t))),b.onRemove&&b.onRemove(e.message||t)},D=e=>{S(e)};(0,p.useUpdateEffect)(()=>{d.ZIndexUtils.set("toast",w.current,v&&v.autoZIndex||r.default.autoZIndex,b.baseZIndex||v&&v.zIndex.toast||r.default.zIndex.toast)},[j,b.baseZIndex]),(0,l.useUnmountEffect)(()=>{d.ZIndexUtils.clear(w.current)}),o.useImperativeHandle(f,()=>({props:b,show:B,replace:E,remove:S,clear:I,getElement:()=>w.current}));let O=(h=C({ref:w,id:b.id,className:T.cx("root",{context:v}),style:T.sx("root")},g.getOtherProps(b),T.ptm("root")),x=C({classNames:T.cx("transition"),timeout:{enter:300,exit:300},options:b.transitionOptions,unmountOnExit:!0,onEntered:()=>{b.onShow&&b.onShow()},onExited:()=>{1===j.length&&d.ZIndexUtils.clear(w.current),b.onHide&&b.onHide()}},T.ptm("transition")),(0,t.jsx)("div",{...h,children:(0,t.jsx)(n.TransitionGroup,{children:j&&j.map((n,r)=>{let i=o.createRef();return(0,t.jsx)(a.CSSTransition,{nodeRef:i,...x,children:e.content?m.ObjectUtils.getJSXElement(e.content,{message:n.message}):(0,t.jsx)(R,{hostName:"Toast",ref:i,messageInfo:n,index:r,onClick:b.onClick,onClose:D,onMouseEnter:b.onMouseEnter,onMouseLeave:b.onMouseLeave,closeIcon:b.closeIcon,ptCallbacks:T,metaData:N})},n._pId)})})}));return(0,t.jsx)(u.Portal,{element:O,appendTo:b.appendTo})}));P.displayName="Toast",e.s(["Toast",0,P],29363)},44129,e=>{"use strict";e.s(["EventBus",0,function(){let e=new Map;return{on(t,o){let n=e.get(t);n?n.push(o):n=[o],e.set(t,n)},off(t,o){let n=e.get(t);n&&n.splice(n.indexOf(o)>>>0,1)},emit(t,o){let n=e.get(t);n&&n.slice().forEach(e=>e(o))}}}],44129)},86037,e=>{"use strict";var t=e.i(60997),o=e.i(75907),n=e.i(49893),r=e.i(91788),i=e.i(20980);function s(e,t){var o=Object.create(null);return e&&r.Children.map(e,function(e){return e}).forEach(function(e){o[e.key]=t&&(0,r.isValidElement)(e)?t(e):e}),o}function a(e,t,o){return null!=o[t]?o[t]:e.props[t]}var c=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},l=function(e){function l(t,o){var n=e.call(this,t,o)||this,r=n.handleExited.bind(function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n));return n.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},n}(0,n.default)(l,e);var p=l.prototype;return p.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},p.componentWillUnmount=function(){this.mounted=!1},l.getDerivedStateFromProps=function(e,t){var o,n,i=t.children,c=t.handleExited;return{children:t.firstRender?s(e.children,function(t){return(0,r.cloneElement)(t,{onExited:c.bind(null,t),in:!0,appear:a(t,"appear",e),enter:a(t,"enter",e),exit:a(t,"exit",e)})}):(Object.keys(n=function(e,t){function o(o){return o in t?t[o]:e[o]}e=e||{},t=t||{};var n,r=Object.create(null),i=[];for(var s in e)s in t?i.length&&(r[s]=i,i=[]):i.push(s);var a={};for(var c in t){if(r[c])for(n=0;n<r[c].length;n++){var l=r[c][n];a[r[c][n]]=o(l)}a[c]=o(c)}for(n=0;n<i.length;n++)a[i[n]]=o(i[n]);return a}(i,o=s(e.children))).forEach(function(t){var s=n[t];if((0,r.isValidElement)(s)){var l=t in i,p=t in o,u=i[t],m=(0,r.isValidElement)(u)&&!u.props.in;p&&(!l||m)?n[t]=(0,r.cloneElement)(s,{onExited:c.bind(null,s),in:!0,exit:a(s,"exit",e),enter:a(s,"enter",e)}):p||!l||m?p&&l&&(0,r.isValidElement)(u)&&(n[t]=(0,r.cloneElement)(s,{onExited:c.bind(null,s),in:u.props.in,exit:a(s,"exit",e),enter:a(s,"enter",e)})):n[t]=(0,r.cloneElement)(s,{in:!1})}}),n),firstRender:!1}},p.handleExited=function(e,t){var n=s(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=(0,o.default)({},t.children);return delete n[e.key],{children:n}}))},p.render=function(){var e=this.props,o=e.component,n=e.childFactory,s=(0,t.default)(e,["component","childFactory"]),a=this.state.contextValue,l=c(this.state.children).map(n);return(delete s.appear,delete s.enter,delete s.exit,null===o)?r.default.createElement(i.default.Provider,{value:a},l):r.default.createElement(i.default.Provider,{value:a},r.default.createElement(o,s,l))},l}(r.default.Component);l.propTypes={},l.defaultProps={component:"div",childFactory:function(e){return e}},e.s(["TransitionGroup",0,l],86037)},37206,e=>{"use strict";var t=e.i(91398),o=e.i(88850),n=e.i(82948),r=e.i(28137);function i(){return(0,t.jsxs)(r.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["ConfirmPopup component uses ",(0,t.jsx)("i",{children:"alertdialog"})," role and since any attribute is passed to the root element you may define attributes like ",(0,t.jsx)("i",{children:"aria-label"})," or ",(0,t.jsx)("i",{children:"aria-labelledby"})," to describe the popup contents. In addition"," ",(0,t.jsx)("i",{children:"aria-modal"})," is added since focus is kept within the popup."]}),(0,t.jsxs)("p",{children:["It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding ",(0,t.jsx)("i",{children:"tabIndex"})," would be necessary. ConfirmPopup adds ",(0,t.jsx)("i",{children:"aria-expanded"})," state attribute and ",(0,t.jsx)("i",{children:"aria-controls"})," to the trigger so that the relation between the trigger and the popup is defined."]}),(0,t.jsx)("h3",{children:"Overlay Keyboard Support"}),(0,t.jsxs)("p",{children:["When the popup gets opened, the first focusable element receives the focus and this can be customized by adding ",(0,t.jsx)("i",{children:"autofocus"})," to an element within the popup."]}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the next the focusable element within the popup."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"tab"})]}),(0,t.jsx)("td",{children:"Moves focus to the previous the focusable element within the popup."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the trigger."})]})]})]})}),(0,t.jsx)("h3",{children:"Buttons Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Triggers the action, closes the popup and moves focus to the trigger."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Triggers the action, closes the popup and moves focus to the trigger."})]})]})]})})]})}var s=e.i(5180),a=e.i(57724),c=e.i(91788),l=e.i(4242),p=e.i(10836),u=e.i(183),m=e.i(15498),d=e.i(87350),f=e.i(83955),h=e.i(92052),g=e.i(60150),x=e.i(36785),C=e.i(4632),v=e.i(71834),b=e.i(81201),j=e.i(85971),y=e.i(45543),w=e.i(75366),N=e.i(51551),T=e.i(63957),B=e.i(3935);let R=`
@layer primereact {
   .p-confirm-popup {
        margin-top: 10px;       
    }

    .p-confirm-popup-flipped {
        margin-top: -10px;
    }
    
    .p-confirm-popup:after, .p-confirm-popup:before {
        bottom: 100%;
        left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }
    
    .p-confirm-popup:after {
        border-width: 8px;
        margin-left: -8px;
    }
    
    .p-confirm-popup:before {
        border-width: 10px;
        margin-left: -10px;
    }
    
    .p-confirm-popup-flipped:after, .p-confirm-popup-flipped:before {
        bottom: auto;
        top: 100%;
    }
    
    .p-confirm-popup.p-confirm-popup-flipped:after {
        border-bottom-color: transparent;
    }
    
    .p-confirm-popup.p-confirm-popup-flipped:before {
        border-bottom-color: transparent
    }
    
    .p-confirm-popup .p-confirm-popup-content {
        display: flex;
        align-items: center;
    }
}
`,k=m.ComponentBase.extend({defaultProps:{__TYPE:"ConfirmPopup",accept:null,acceptClassName:null,acceptIcon:null,acceptLabel:null,appendTo:null,children:void 0,className:null,closeOnEscape:!0,content:null,defaultFocus:"accept",dismissable:!0,footer:null,icon:null,message:null,onHide:null,onShow:null,reject:null,rejectClassName:null,rejectIcon:null,rejectLabel:null,style:null,tagKey:void 0,target:null,transitionOptions:null,visible:!1},css:{classes:{root:({context:e,getPropValue:t})=>(0,B.classNames)("p-confirm-popup p-component",t("className"),{"p-input-filled":e&&"filled"===e.inputStyle||"filled"===l.default.inputStyle,"p-ripple-disabled":e&&!1===e.ripple||!1===l.default.ripple}),acceptButton:({getPropValue:e})=>(0,B.classNames)("p-confirm-popup-accept p-button-sm",e("acceptClassName")),rejectButton:({getPropValue:e})=>(0,B.classNames)("p-confirm-popup-reject p-button-sm",{"p-button-text":!e("rejectClassName")},e("rejectClassName")),content:"p-confirm-popup-content",icon:"p-confirm-popup-icon",message:"p-confirm-popup-message",footer:"p-confirm-popup-footer",transition:"p-connected-overlay"},styles:R}}),P=(e={})=>((e={...e,...{visible:void 0===e.visible||e.visible}}).visible&&b.OverlayService.emit("confirm-popup",e),{show:(t={})=>{b.OverlayService.emit("confirm-popup",{...e,...t,visible:!0})},hide:()=>{b.OverlayService.emit("confirm-popup",{visible:!1})}}),I=c.memo(c.forwardRef((e,o)=>{let n,r,i,s,R,P,I,E,S,D,O=(0,g.useMergeProps)(),L=c.useContext(p.PrimeReactContext),M=k.getProps(e,L),[H,F]=c.useState(M.visible),[U,Y]=c.useState(!1),A={props:M,state:{visible:H,reshow:U}},{ptm:Z,cx:_,isUnstyled:V}=k.setMetaData(A);(0,m.useHandleStyle)(k.css.styles,V,{name:"confirmpopup"});let z=c.useRef(null),X=c.useRef(null),K=c.useRef(null),J=c.useRef(!1),G=c.useRef(null),W=c.useRef(null),q=c.useRef(null),$=c.useRef(!1),Q=e=>(W.current||M)[e],ee=(e,...t)=>N.ObjectUtils.getPropValue(Q(e),t),et=Q("acceptLabel")||(0,u.localeOption)("accept"),eo=Q("rejectLabel")||(0,u.localeOption)("reject"),en=M.dismissable&&M.closeOnEscape&&H,er=(0,h.useDisplayOrder)("dialog",en);(0,f.useGlobalOnEscapeKey)({callback:()=>{ep("hide")},when:en&&er,priority:[f.ESC_KEY_HANDLING_PRIORITIES.DIALOG,er]});let[ei,es]=(0,x.useOverlayListener)({target:Q("target"),overlay:z,listener:(e,{type:t,valid:o})=>{o&&("outside"===t?(M.dismissable&&!J.current&&ep("hide"),J.current=!1):L.hideOverlaysOnDocumentScrolling?ep("hide"):y.DomHandler.isDocument(e.target)||eu())},when:H}),ea=()=>{$.current||($.current=!0,ee("accept"),ep("accept"))},ec=()=>{$.current||($.current=!0,ee("reject"),ep("reject"))},el=()=>{let e=W.current||M;Y(!1),e.group===M.group&&(F(!0),$.current=!1,G.current=e=>{em(e.target)||(J.current=!0)},b.OverlayService.on("overlay-click",G.current),q.current=document.activeElement)},ep=e=>{F(!1),b.OverlayService.off("overlay-click",G.current),G.current=null,e&&ee("onHide",e),y.DomHandler.focus(q.current),q.current=null},eu=()=>{if(Q("target")){y.DomHandler.absolutePosition(z.current,Q("target"));let e=y.DomHandler.getOffset(z.current),t=y.DomHandler.getOffset(Q("target")),o=0;e.left<t.left&&(o=t.left-e.left),z.current.style.setProperty("--overlayArrowLeft",`${o}px`),e.top<t.top&&(V()||y.DomHandler.addClass(z.current,"p-confirm-popup-flipped"))}},em=e=>z&&z.current&&!(z.current.isSameNode(e)||z.current.contains(e)),ed=e=>{if(e.tagKey===M.tagKey){let t=H!==e.visible;Q("target")===e.target||M.target?t&&(W.current=e,e.visible?el():ep()):(ep(),W.current=e,Y(!0))}};c.useEffect(()=>{M.visible?el():ep()},[M.visible]),c.useEffect(()=>(M.target||M.message||b.OverlayService.on("confirm-popup",ed),()=>{b.OverlayService.off("confirm-popup",ed)}),[M.target]),(0,v.useUpdateEffect)(()=>{U&&el()},[U]),(0,C.useUnmountEffect)(()=>{G.current&&(b.OverlayService.off("overlay-click",G.current),G.current=null),b.OverlayService.off("confirm-popup",ed),T.ZIndexUtils.clear(z.current)}),c.useImperativeHandle(o,()=>({props:M,confirm:ed}));let ef=O({ref:z,id:Q("id"),className:(0,B.classNames)(M.className,_("root",{context:L,getPropValue:Q})),style:Q("style"),onClick:e=>{J.current=!0,b.OverlayService.emit("overlay-click",{originalEvent:e,target:Q("target")})}},k.getOtherProps(M),Z("root")),eh=O({classNames:_("transition"),in:H,timeout:{enter:120,exit:100},options:Q("transitionOptions"),unmountOnExit:!0,onEnter:()=>{T.ZIndexUtils.set("overlay",z.current,L&&L.autoZIndex||l.default.autoZIndex,L&&L.zIndex.overlay||l.default.zIndex.overlay),y.DomHandler.addStyles(z.current,{position:"absolute",top:"0",left:"0"}),eu()},onEntered:()=>{ei();let e=Q("defaultFocus");(void 0===e||"accept"===e)&&X.current&&X.current.focus(),"reject"===e&&K.current&&K.current.focus(),ee("onShow")},onExit:()=>{es()},onExited:()=>{T.ZIndexUtils.clear(z.current),J.current=!1}},Z("transition")),eg=e?.content?(n=W.current||M,r=N.ObjectUtils.getJSXElement(Q("message"),n),(0,t.jsx)(d.CSSTransition,{nodeRef:z,...eh,children:(0,t.jsx)("div",{...ef,children:N.ObjectUtils.getJSXElement(e.content,{message:r,acceptBtnRef:X,rejectBtnRef:K,hide:ep})})})):(i=W.current||M,s=N.ObjectUtils.getJSXElement(Q("message"),i),R=O({className:_("icon")},Z("icon")),P=w.IconUtils.getJSXIcon(Q("icon"),{...R},{props:i}),I=O({className:_("message")},Z("message")),E=O({className:_("content")},Z("content")),S=(0,t.jsxs)("div",{...E,children:[P,(0,t.jsx)("span",{...I,children:s})]}),D=(()=>{let e=(0,B.classNames)("p-confirm-popup-accept p-button-sm",Q("acceptClassName")),o=(0,B.classNames)("p-confirm-popup-reject p-button-sm",{"p-button-text":!Q("rejectClassName")},Q("rejectClassName")),n=O({className:_("footer")},Z("footer")),r=O({ref:K,label:eo,icon:Q("rejectIcon"),className:_("rejectButton",{getPropValue:Q}),onClick:ec,pt:Z("rejectButton"),unstyled:M.unstyled,__parentMetadata:{parent:A}}),i=O({ref:X,label:et,icon:Q("acceptIcon"),className:_("acceptButton",{getPropValue:Q}),onClick:ea,pt:Z("acceptButton"),unstyled:M.unstyled,__parentMetadata:{parent:A}}),s=(0,t.jsxs)("div",{...n,children:[(0,t.jsx)(a.Button,{...r}),(0,t.jsx)(a.Button,{...i})]});if(Q("footer")){let t={accept:ea,reject:ec,className:"p-confirm-popup-footer",acceptClassName:e,rejectClassName:o,acceptLabel:et,rejectLabel:eo,element:s,props:W.current||M};return N.ObjectUtils.getJSXElement(Q("footer"),t)}return s})(),(0,t.jsx)(d.CSSTransition,{nodeRef:z,...eh,children:(0,t.jsxs)("div",{...ef,children:[S,D]})}));return(0,t.jsx)(j.Portal,{element:eg,appendTo:Q("appendTo"),visible:Q("visible")})}));I.displayName="ConfirmPopup";var E=e.i(29363);function S(e){let o=(0,c.useRef)(null),n=()=>{o.current.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},i=()=>{o.current.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})},l={basic:`
<Toast ref={toast} />
<ConfirmPopup />
<div className="card flex flex-wrap gap-2 justify-content-center">
    <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
    <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger"></Button>
</div>
        `,javascript:`
import React, { useRef } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };
    
    const confirm1 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger"></Button>
            </div>
        </>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    return ( 
        <>
            <Toast ref={toast} />
            <ConfirmPopup />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger"></Button>
            </div>
        </>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A ConfirmPopup component needs to be present on the page that is interacted with the ",(0,t.jsx)("i",{children:"confirmPopup"})," function that takes a configuration object for customization. In order to align the popover, ",(0,t.jsx)("i",{children:"target"})," property must be provided referring to the source element."]})}),(0,t.jsx)(E.Toast,{ref:o}),(0,t.jsxs)("div",{className:"card flex flex-wrap gap-2 justify-content-center",children:[(0,t.jsx)(a.Button,{onClick:e=>{P({target:e.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",defaultFocus:"accept",accept:n,reject:i})},icon:"pi pi-check",label:"Confirm"}),(0,t.jsx)(a.Button,{onClick:e=>{P({target:e.currentTarget,message:"Do you want to delete this record?",icon:"pi pi-info-circle",acceptClassName:"p-button-danger",defaultFocus:"reject",accept:n,reject:i})},icon:"pi pi-times",label:"Delete",className:"p-button-danger"})]}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function D(e){let[o,n]=(0,c.useState)(!1),i=(0,c.useRef)(null),l=(0,c.useRef)(null),p={basic:`
<Toast ref={toast} />
<ConfirmPopup target={buttonEl.current} visible={visible} onHide={() => setVisible(false)} 
    message="Are you sure you want to proceed?" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
<Button ref={buttonEl} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
        `,javascript:`
import React, { useRef, useState } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function DeclarativeDemo() {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const buttonEl = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup target={buttonEl.current} visible={visible} onHide={() => setVisible(false)} 
                message="Are you sure you want to proceed?" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <div className="card flex justify-content-center">
                <Button ref={buttonEl} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `,typescript:`
import React, { useRef, useState } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function DeclarativeDemo() {
    const [visible, setVisible] = useState<boolean>(false);
    const toast = useRef<Toast>(null);
    const buttonEl = useRef(null);

    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup target={buttonEl.current} visible={visible} onHide={() => setVisible(false)} 
                message="Are you sure you want to proceed?" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <div className="card flex justify-content-center">
                <Button ref={buttonEl} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Declarative is an alternative to the programmatic approach where ConfirmDialog is controlled with a binding to ",(0,t.jsx)("i",{children:"visible"})," and ",(0,t.jsx)("i",{children:"onHide"})," event callback along with the ",(0,t.jsx)("i",{children:"target"})," property to refer to the source element."]})}),(0,t.jsx)(E.Toast,{ref:i}),(0,t.jsx)(I,{target:l.current,visible:o,onHide:()=>n(!1),message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",accept:()=>{i.current.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{i.current.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})}}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.Button,{ref:l,onClick:()=>n(!0),icon:"pi pi-check",label:"Confirm"})}),(0,t.jsx)(s.DocSectionCode,{code:p})]})}function O(e){let o=(0,c.useRef)(null),n=()=>{o.current.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},i=()=>{o.current.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})},l={basic:`
<Toast ref={toast} />
<ConfirmPopup
    group="headless"
    content={({message, acceptBtnRef, rejectBtnRef, hide}) => 
        <div className="bg-gray-900 text-white border-round p-3">
            <span>{message}</span>
            <div className="flex align-items-center gap-2 mt-3">
                <Button ref={acceptBtnRef} label="Save" onClick={() => {accept(); hide();}} className="p-button-sm p-button-outlined"></Button>
                <Button ref={rejectBtnRef} label="Cancel" outlined onClick={() => {reject(); hide();}}className="p-button-sm p-button-text"></Button>
            </div>
        </div>
    }
/>
<div className="card flex flex-wrap gap-2 justify-content-center">
    <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
    <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger"></Button>
</div>
        `,javascript:`
import React, { useRef } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function HeadlessDemo() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = (event) => {
        confirmPopup({
            group: 'headless',
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?', 
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            group: 'headless',
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            defaultFocus: 'reject',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup
                group="headless"
                content={({message, acceptBtnRef, rejectBtnRef, hide}) => 
                    <div className="bg-gray-900 text-white border-round p-3">
                        <span>{message}</span>
                        <div className="flex align-items-center gap-2 mt-3">
                            <Button ref={acceptBtnRef} label="Save" onClick={() => {accept(); hide();}} className="p-button-sm p-button-outlined"></Button>
                            <Button ref={rejectBtnRef} label="Cancel" outlined onClick={() => {reject(); hide();}}className="p-button-sm p-button-text"></Button>
                        </div>
                    </div>
                }
            />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger"></Button>
            </div>
        </>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function HeadlessDemo() {
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = (event) => {
        confirmPopup({
            group: 'headless',
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?', 
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            group: 'headless',
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            defaultFocus: 'reject',
            accept,
            reject
        });
    };

    return ( 
        <>
            <Toast ref={toast} />
            <ConfirmPopup
                group="headless"
                content={({message, acceptBtnRef, rejectBtnRef, hide}) => 
                    <div className="bg-gray-900 text-white border-round p-3">
                        <span>{message}</span>
                        <div className="flex align-items-center gap-2 mt-3">
                            <Button ref={acceptBtnRef} label="Save" onClick={() => {accept(); hide();}} className="p-button-sm p-button-outlined"></Button>
                            <Button ref={rejectBtnRef} label="Cancel" outlined onClick={() => {reject(); hide();}}className="p-button-sm p-button-text"></Button>
                        </div>
                    </div>
                }
            />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger"></Button>
            </div>
        </>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Headless mode is enabled by defining a ",(0,t.jsx)("i",{children:"content"})," prop that lets you implement entire confirmation UI instead of the default elements."]})}),(0,t.jsx)(E.Toast,{ref:o}),(0,t.jsx)(I,{group:"headless",content:({message:e,acceptBtnRef:o,rejectBtnRef:r,hide:s})=>(0,t.jsxs)("div",{className:"bg-gray-900 text-white border-round p-3",children:[(0,t.jsx)("span",{children:e}),(0,t.jsxs)("div",{className:"flex align-items-center gap-2 mt-3",children:[(0,t.jsx)(a.Button,{ref:o,label:"Save",onClick:()=>{n(),s()},className:"p-button-sm p-button-outlined"}),(0,t.jsx)(a.Button,{ref:r,label:"Cancel",outlined:!0,onClick:()=>{i(),s()},className:"p-button-sm p-button-text"})]})]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap gap-2 justify-content-center",children:[(0,t.jsx)(a.Button,{onClick:e=>{P({group:"headless",target:e.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",defaultFocus:"accept",accept:n,reject:i})},icon:"pi pi-check",label:"Confirm"}),(0,t.jsx)(a.Button,{onClick:e=>{P({group:"headless",target:e.currentTarget,message:"Do you want to delete this record?",icon:"pi pi-info-circle",acceptClassName:"p-button-danger",defaultFocus:"reject",accept:n,reject:i})},icon:"pi pi-times",label:"Delete",className:"p-button-danger"})]}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function L(e){let o={basic:`
import { ConfirmPopup } from 'primereact/confirmpopup'; // To use <ConfirmPopup> tag
import { confirmPopup } from 'primereact/confirmpopup'; // To use confirmPopup method
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)(s.DocSectionCode,{code:o,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}let M=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/confirmpopup.jpg",alt:"confirmpopup"})})]});function H(e){let o=(0,c.useRef)(null),n=()=>{o.current.show({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},i=()=>{o.current.show({severity:"warn",summary:"Rejected",detail:"You have rejected",life:3e3})},l={basic:`
<Toast ref={toast} />
<ConfirmPopup group="templating" />
<div className="card flex justify-content-center">
    <Button onClick={showTemplate} icon="pi pi-check" label="Confirm"></Button>
</div>
        `,javascript:`
import React, { useRef } from 'react';
import { confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const showTemplate = (event) => {
        confirmPopup({
            target: event.currentTarget,
            group: 'templating',
            header: 'Confirmation',
            message: (
                <div className="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
                    <i className="pi pi-exclamation-circle text-6xl text-primary-500"></i>
                    <span>Please confirm to proceed moving forward.</span>
                </div>
            ),
            acceptIcon: 'pi pi-check',
            rejectIcon: 'pi pi-times',
            rejectClass: 'p-button-sm',
            acceptClass: 'p-button-outlined p-button-sm',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup group="templating" />
            <div className="card flex justify-content-center">
                <Button onClick={showTemplate} icon="pi pi-check" label="Confirm"></Button>
            </div>
        </>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const showTemplate = (event) => {
        confirmPopup({
            target: event.currentTarget,
            group: 'templating',
            header: 'Confirmation',
            message: (
                <div className="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
                    <i className="pi pi-exclamation-circle text-6xl text-primary-500"></i>
                    <span>Please confirm to proceed moving forward.</span>
                </div>
            ),
            acceptIcon: 'pi pi-check',
            rejectIcon: 'pi pi-times',
            rejectClass: 'p-button-sm',
            acceptClass: 'p-button-outlined p-button-sm',
            accept,
            reject
        });
    };

    return ( 
        <>
            <Toast ref={toast} />
            <ConfirmPopup group="templating" />
            <div className="card flex justify-content-center">
                <Button onClick={showTemplate} icon="pi pi-check" label="Confirm"></Button>
            </div>
        </>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Templating allows customizing the message content."})}),(0,t.jsx)(E.Toast,{ref:o}),(0,t.jsx)(I,{group:"templating"}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.Button,{onClick:e=>{P({target:e.currentTarget,group:"templating",header:"Confirmation",message:(0,t.jsxs)("div",{className:"flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border",children:[(0,t.jsx)("i",{className:"pi pi-exclamation-circle text-6xl text-primary-500"}),(0,t.jsx)("span",{children:"Please confirm to proceed moving forward."})]}),acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",rejectClass:"p-button-sm",acceptClass:"p-button-outlined p-button-sm",accept:n,reject:i})},icon:"pi pi-check",label:"Confirm"})}),(0,t.jsx)(s.DocSectionCode,{code:l})]})}function F(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-confirm-popup"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-confirm-content"}),(0,t.jsx)("td",{children:"Content element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-confirm-popup-icon"}),(0,t.jsx)("td",{children:"Message icon."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-confirm-popup-message"}),(0,t.jsx)("td",{children:"Message text."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-confirm-popup-footer"}),(0,t.jsx)("td",{children:"Footer element for buttons."})]})]})]})})]})}var U=e.i(41158);function Y(e){let o={basic:`
const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

const Tailwind = {
    confirmpopup: {
        root: {
            className: classNames(
                'bg-white text-gray-700 border-0 rounded-md shadow-lg',
                'z-40 transform origin-center',
                'mt-3 absolute left-0 top-0',
                'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-white dark:before:border-b-gray-900',
                'dark:border dark:border-blue-900/40 dark:bg-gray-900  dark:text-white/80'
            )
        },
        content: 'p-5 items-center flex',
        icon: 'text-2xl',
        message: 'ml-4',
        footer: 'text-right px-5 py-5 pt-0 ',
        transition: TRANSITIONS.overlay
    }
}
        `},n={javascript:`
import React, { useRef } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function UnstyledDemo() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };
    
    const confirm1 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup />
            <div className="card flex flex-wrap gap-2 justify-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger p-button-outlined"></Button>
            </div>
        </>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(U.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(s.DocSectionCode,{code:o,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(s.DocSectionCode,{code:n,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:M},{id:"pt.confirmpopup.options",label:"ConfirmPopup PT Options",component:o.default}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocComponent,{title:"React Confirmation Popup Component",header:"ConfirmPopup",description:"ConfirmPopup is an easy to use and customizable Confirmation API using a popover.",componentDocs:[{id:"import",label:"Import",component:L},{id:"basic",label:"Basic",component:S},{id:"declarative",label:"Declarative",component:D},{id:"template",label:"Template",component:H},{id:"headless",label:"Headless",component:O},{id:"accessibility",label:"Accessibility",component:i}],apiDocs:["ConfirmPopup"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:F},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:Y}]}]}),(0,t.jsx)(I,{})]})}],37206)},44801,(e,t,o)=>{let n="/confirmpopup";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(37206)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);