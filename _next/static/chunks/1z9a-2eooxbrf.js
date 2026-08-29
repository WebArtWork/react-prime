(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,10197,e=>{"use strict";var t=e.i(91398),s=e.i(91788),a=e.i(10836),o=e.i(15498),r=e.i(60150),n=e.i(45543),i=e.i(75366),l=e.i(51551),c=e.i(3935);let m=`
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
`,u=o.ComponentBase.extend({defaultProps:{__TYPE:"Avatar",className:null,icon:null,image:null,imageAlt:"avatar",imageFallback:"default",label:null,onImageError:null,shape:"square",size:"normal",style:null,template:null,children:void 0},css:{classes:{root:({props:e,state:t})=>(0,c.classNames)("p-avatar p-component",{"p-avatar-image":l.ObjectUtils.isNotEmpty(e.image)&&!t.imageFailed,"p-avatar-circle":"circle"===e.shape,"p-avatar-lg":"large"===e.size,"p-avatar-xl":"xlarge"===e.size,"p-avatar-clickable":!!e.onClick}),label:"p-avatar-text",icon:"p-avatar-icon"},styles:m}}),d=s.forwardRef((e,m)=>{let d=(0,r.useMergeProps)(),p=s.useContext(a.PrimeReactContext),f=u.getProps(e,p),h=s.useRef(null),[x,g]=s.useState(!1),[v,b]=s.useState(!1),{ptm:C,cx:y,isUnstyled:w}=u.setMetaData({props:f,state:{imageFailed:x,nested:v}});(0,o.useHandleStyle)(u.css.styles,w,{name:"avatar"});let j=e=>{"default"===f.imageFallback?f.onImageError||(g(!0),e.target.src=null):e.target.src=f.imageFallback,f.onImageError&&f.onImageError(e)};s.useEffect(()=>{b(n.DomHandler.isAttributeEquals(h.current.parentElement,"data-pc-name","avatargroup"))},[]),s.useImperativeHandle(m,()=>({props:f,getElement:()=>h.current}));let B=d({ref:h,style:f.style,className:(0,c.classNames)(f.className,y("root",{imageFailed:x}))},u.getOtherProps(f),C("root")),N=f.template?l.ObjectUtils.getJSXElement(f.template,f):(()=>{if(l.ObjectUtils.isNotEmpty(f.image)&&!x){let e=d({src:f.image,onError:j},C("image"));return(0,t.jsx)("img",{alt:f.imageAlt,...e})}if(f.label){let e=d({className:y("label")},C("label"));return(0,t.jsx)("span",{...e,children:f.label})}if(f.icon){let e=d({className:y("icon")},C("icon"));return i.IconUtils.getJSXIcon(f.icon,{...e},{props:f})}return null})();return(0,t.jsxs)("div",{...B,children:[N,f.children]})});d.displayName="Avatar",e.s(["Avatar",0,d],10197)},63340,e=>{"use strict";var t=e.i(91788),s=e.i(4632);e.s(["useTimeout",0,(e,a=0,o=!0)=>{let r=t.useRef(null),n=t.useRef(null),i=t.useCallback(()=>clearTimeout(r.current),[r.current]);return t.useEffect(()=>{n.current=e}),t.useEffect(()=>{if(o)return r.current=setTimeout(function(){n.current()},a),i;i()},[a,o]),(0,s.useUnmountEffect)(()=>{i()}),[i]}])},67143,e=>{"use strict";var t=e.i(91398),s=e.i(91788),a=e.i(85850);let o=s.memo(s.forwardRef((e,s)=>{let o=a.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:s,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,t.jsx)("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"})})}));o.displayName="CheckIcon",e.s(["CheckIcon",0,o])},93265,3004,e=>{"use strict";var t=e.i(91398),s=e.i(91788),a=e.i(85850);let o=s.memo(s.forwardRef((e,s)=>{let o=a.IconBase.getPTI(e);return(0,t.jsxs)("svg",{ref:s,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:[(0,t.jsx)("path",{d:"M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",fill:"currentColor"}),(0,t.jsx)("path",{d:"M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",fill:"currentColor"}),(0,t.jsx)("path",{d:"M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",fill:"currentColor"})]})}));o.displayName="ExclamationTriangleIcon",e.s(["ExclamationTriangleIcon",0,o],93265);let r=s.memo(s.forwardRef((e,s)=>{let o=a.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:s,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",fill:"currentColor"})})}));r.displayName="InfoCircleIcon",e.s(["InfoCircleIcon",0,r],3004)},55590,e=>{"use strict";var t=e.i(91398),s=e.i(91788),a=e.i(85850);let o=s.memo(s.forwardRef((e,s)=>{let o=a.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:s,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,t.jsx)("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"})})}));o.displayName="TimesIcon",e.s(["TimesIcon",0,o])},12257,e=>{"use strict";var t=e.i(91398),s=e.i(91788),a=e.i(85850);let o=s.memo(s.forwardRef((e,s)=>{let o=a.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:s,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"})})}));o.displayName="TimesCircleIcon",e.s(["TimesCircleIcon",0,o])},50770,e=>{"use strict";var t=e.i(91398),s=e.i(91788),a=e.i(10836),o=e.i(15498),r=e.i(60150),n=e.i(3935);let i=`
@layer primereact {
  .p-progressbar {
      position: relative;
      overflow: hidden;
  }
  
  .p-progressbar-determinate .p-progressbar-value {
      height: 100%;
      width: 0%;
      position: absolute;
      display: none;
      border: 0 none;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
  }
  
  .p-progressbar-determinate .p-progressbar-label {
      display: inline-flex;
  }
  
  .p-progressbar-determinate .p-progressbar-value-animate {
      transition: width 1s ease-in-out;
  }
  
  .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
                animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  }
  
  .p-progressbar-indeterminate .p-progressbar-value::after {
      content: '';
      position: absolute;
      background-color: inherit;
      top: 0;
      left: 0;
      bottom: 0;
      will-change: left, right;
      -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
              animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
      -webkit-animation-delay: 1.15s;
              animation-delay: 1.15s;
  }
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
  0% {
    left: -35%;
    right: 100%; }
  60% {
    left: 100%;
    right: -90%; }
  100% {
    left: 100%;
    right: -90%; }
}
@keyframes p-progressbar-indeterminate-anim {
  0% {
    left: -35%;
    right: 100%; }
  60% {
    left: 100%;
    right: -90%; }
  100% {
    left: 100%;
    right: -90%; }
}

@-webkit-keyframes p-progressbar-indeterminate-anim-short {
  0% {
    left: -200%;
    right: 100%; }
  60% {
    left: 107%;
    right: -8%; }
  100% {
    left: 107%;
    right: -8%; }
}
@keyframes p-progressbar-indeterminate-anim-short {
  0% {
    left: -200%;
    right: 100%; }
  60% {
    left: 107%;
    right: -8%; }
  100% {
    left: 107%;
    right: -8%; }
}
`,l=o.ComponentBase.extend({defaultProps:{__TYPE:"ProgressBar",__parentMetadata:null,id:null,value:null,showValue:!0,unit:"%",style:null,className:null,mode:"determinate",displayValueTemplate:null,color:null,children:void 0},css:{classes:{root:({props:e})=>"indeterminate"===e.mode?(0,n.classNames)("p-progressbar p-component p-progressbar-indeterminate"):(0,n.classNames)("p-progressbar p-component p-progressbar-determinate"),value:"p-progressbar-value p-progressbar-value-animate",label:"p-progressbar-label",container:"p-progressbar-indeterminate-container"},styles:i,inlineStyles:{value:({props:e})=>{let t=Math.max(e.value,2),s=e.value?e.color:"transparent";return"indeterminate"===e.mode?{backgroundColor:e.color}:{width:t+"%",display:"flex",backgroundColor:s}}}}}),c=s.memo(s.forwardRef((e,i)=>{let c=(0,r.useMergeProps)(),m=s.useContext(a.PrimeReactContext),u=l.getProps(e,m),{ptm:d,cx:p,isUnstyled:f}=l.setMetaData({props:u,...u.__parentMetadata});(0,o.useHandleStyle)(l.css.styles,f,{name:"progressbar"});let h=s.useRef(null);if(s.useImperativeHandle(i,()=>({props:u,getElement:()=>h.current})),"determinate"===u.mode){let e,s,a,o;return e=u.showValue&&null!=u.value?u.displayValueTemplate?u.displayValueTemplate(u.value):u.value+u.unit:null,s=c({className:(0,n.classNames)(u.className,p("root")),style:u.style,role:"progressbar","aria-valuemin":"0","aria-valuenow":u.value,"aria-valuemax":"100"},l.getOtherProps(u),d("root")),a=c({className:p("value"),style:{width:u.value+"%",display:"flex",backgroundColor:u.color}},d("value")),o=c({className:p("label")},d("label")),(0,t.jsx)("div",{id:u.id,ref:h,...s,children:(0,t.jsx)("div",{...a,children:null!=e&&(0,t.jsx)("div",{...o,children:e})})})}if("indeterminate"===u.mode){let e,s,a;return e=c({className:(0,n.classNames)(u.className,p("root")),style:u.style,role:"progressbar","aria-valuemin":"0","aria-valuenow":u.value,"aria-valuemax":"100"},l.getOtherProps(u),d("root")),s=c({className:p("container")},d("container")),a=c({className:p("value"),style:{backgroundColor:u.color}},d("value")),(0,t.jsx)("div",{id:u.id,ref:h,...e,children:(0,t.jsx)("div",{...s,children:(0,t.jsx)("div",{...a})})})}throw Error(u.mode+" is not a valid mode for the ProgressBar. Valid values are 'determinate' and 'indeterminate'")}));c.displayName="ProgressBar",e.s(["ProgressBar",0,c],50770)},29363,e=>{"use strict";var t=e.i(91398),s=e.i(91788),a=e.i(86037),o=e.i(4242),r=e.i(10836),n=e.i(15498),i=e.i(87350),l=e.i(60150),c=e.i(4632),m=e.i(71834),u=e.i(85971),d=e.i(51551),p=e.i(63957),f=e.i(3935);let h=`
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
`,x=n.ComponentBase.extend({defaultProps:{__TYPE:"Toast",id:null,className:null,content:null,style:null,baseZIndex:0,position:"top-right",transitionOptions:null,appendTo:"self",onClick:null,onRemove:null,onShow:null,onHide:null,onMouseEnter:null,onMouseLeave:null,children:void 0},css:{classes:{root:({props:e,context:t})=>(0,f.classNames)("p-toast p-component p-toast-"+e.position,e.className,{"p-input-filled":t&&"filled"===t.inputStyle||"filled"===o.default.inputStyle,"p-ripple-disabled":t&&!1===t.ripple||!1===o.default.ripple}),message:{message:({severity:e})=>(0,f.classNames)("p-toast-message",{[`p-toast-message-${e}`]:e}),content:"p-toast-message-content",buttonicon:"p-toast-icon-close-icon",closeButton:"p-toast-icon-close p-link",icon:"p-toast-message-icon",text:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail"},transition:"p-toast-message"},styles:h,inlineStyles:{root:({props:e})=>({position:"fixed",top:"top-right"===e.position||"top-left"===e.position||"top-center"===e.position?"20px":"center"===e.position?"50%":null,right:("top-right"===e.position||"bottom-right"===e.position)&&"20px",bottom:("bottom-left"===e.position||"bottom-right"===e.position||"bottom-center"===e.position)&&"20px",left:"top-left"===e.position||"bottom-left"===e.position?"20px":"center"===e.position||"top-center"===e.position||"bottom-center"===e.position?"50%":null})}}});var g=e.i(183),v=e.i(63340),b=e.i(67143),C=e.i(93265),y=e.i(3004),w=e.i(55590),j=e.i(12257),B=e.i(50901),N=e.i(45543),T=e.i(75366);let k=s.memo(s.forwardRef((e,a)=>{let o,r,n,i,c=(0,l.useMergeProps)(),{messageInfo:m,metaData:u,ptCallbacks:{ptm:p,ptmo:h,cx:x},index:k}=e,{severity:R,content:M,summary:S,detail:I,closable:E,life:P,sticky:L,className:D,style:A,contentClassName:V,contentStyle:U,icon:_,closeIcon:F,pt:O}=m.message,Z={index:k},W={...u,...Z},[H,z]=s.useState(!1),[X]=(0,v.useTimeout)(()=>{Y()},P||3e3,!L&&!H),J=(t,s)=>p(t,{hostName:e.hostName,...s}),Y=()=>{X(),e.onClose&&e.onClose(m)},q=t=>{e.onClick&&!(N.DomHandler.hasClass(t.target,"p-toast-icon-close")||N.DomHandler.hasClass(t.target,"p-toast-icon-close-icon"))&&e.onClick(m.message)},K=(()=>{if(m){let s=d.ObjectUtils.getJSXElement(M,{message:m.message,onClick:q,onClose:Y}),a=c({className:x("message.icon")},J("icon",W),h(O,"icon",{...Z,hostName:e.hostName})),o=_;if(!_)switch(R){case"info":o=(0,t.jsx)(y.InfoCircleIcon,{...a});break;case"warn":o=(0,t.jsx)(C.ExclamationTriangleIcon,{...a});break;case"error":o=(0,t.jsx)(j.TimesCircleIcon,{...a});break;case"success":o=(0,t.jsx)(b.CheckIcon,{...a})}let r=T.IconUtils.getJSXIcon(o,{...a},{props:e}),n=c({className:x("message.text")},J("text",W),h(O,"text",{...Z,hostName:e.hostName})),i=c({className:x("message.summary")},J("summary",W),h(O,"summary",{...Z,hostName:e.hostName})),l=c({className:x("message.detail")},J("detail",W),h(O,"detail",{...Z,hostName:e.hostName}));return s||(0,t.jsxs)(t.Fragment,{children:[r,(0,t.jsxs)("div",{...n,children:[(0,t.jsx)("span",{...i,children:S}),I&&(0,t.jsx)("div",{...l,children:I})]})]})}return null})(),G=(o=c({className:x("message.buttonicon")},J("buttonicon",W),h(O,"buttonicon",{...Z,hostName:e.hostName})),r=F||(0,t.jsx)(w.TimesIcon,{...o}),n=T.IconUtils.getJSXIcon(r,{...o},{props:e}),i=c({type:"button",className:x("message.closeButton"),onClick:Y,"aria-label":e.ariaCloseLabel||(0,g.ariaLabel)("close")},J("closeButton",W),h(O,"closeButton",{...Z,hostName:e.hostName})),!1!==E?(0,t.jsx)("div",{children:(0,t.jsxs)("button",{...i,children:[n,(0,t.jsx)(B.Ripple,{})]})}):null),$=c({ref:a,className:(0,f.classNames)(D,x("message.message",{severity:R})),style:A,role:"alert","aria-live":"assertive","aria-atomic":"true",onClick:q,onMouseEnter:t=>{e.onMouseEnter&&e.onMouseEnter(t),!t.defaultPrevented&&(L||(X(),z(!0)))},onMouseLeave:t=>{e.onMouseLeave&&e.onMouseLeave(t),!t.defaultPrevented&&(L||z(!1))}},J("message",W),h(O,"root",{...Z,hostName:e.hostName})),Q=c({className:(0,f.classNames)(V,x("message.content")),style:U},J("content",W),h(O,"content",{...Z,hostName:e.hostName}));return(0,t.jsx)("div",{...$,children:(0,t.jsxs)("div",{...Q,children:[K,G]})})}));k.displayName="ToastMessage";let R=0,M=s.memo(s.forwardRef((e,f)=>{let h,g,v=(0,l.useMergeProps)(),b=s.useContext(r.PrimeReactContext),C=x.getProps(e,b),[y,w]=s.useState([]),j=s.useRef(null),B={props:C,state:{messages:y}},N=x.setMetaData(B);(0,n.useHandleStyle)(x.css.styles,N.isUnstyled,{name:"toast"});let T=e=>{e&&w(t=>M(t,e,!0))},M=(e,t,s)=>{let a;if(Array.isArray(t)){let o=t.reduce((e,t)=>(e.push({_pId:R++,message:t}),e),[]);a=s&&e?[...e,...o]:o}else{let o={_pId:R++,message:t};a=s&&e?[...e,o]:[o]}return a},S=()=>{p.ZIndexUtils.clear(j.current),w([])},I=e=>{w(t=>M(t,e,!1))},E=e=>{let t=d.ObjectUtils.isNotEmpty(e._pId)?e._pId:e.message||e;w(s=>s.filter(s=>s._pId!==e._pId&&!d.ObjectUtils.deepEquals(s.message,t))),C.onRemove&&C.onRemove(e.message||t)},P=e=>{E(e)};(0,m.useUpdateEffect)(()=>{p.ZIndexUtils.set("toast",j.current,b&&b.autoZIndex||o.default.autoZIndex,C.baseZIndex||b&&b.zIndex.toast||o.default.zIndex.toast)},[y,C.baseZIndex]),(0,c.useUnmountEffect)(()=>{p.ZIndexUtils.clear(j.current)}),s.useImperativeHandle(f,()=>({props:C,show:T,replace:I,remove:E,clear:S,getElement:()=>j.current}));let L=(h=v({ref:j,id:C.id,className:N.cx("root",{context:b}),style:N.sx("root")},x.getOtherProps(C),N.ptm("root")),g=v({classNames:N.cx("transition"),timeout:{enter:300,exit:300},options:C.transitionOptions,unmountOnExit:!0,onEntered:()=>{C.onShow&&C.onShow()},onExited:()=>{1===y.length&&p.ZIndexUtils.clear(j.current),C.onHide&&C.onHide()}},N.ptm("transition")),(0,t.jsx)("div",{...h,children:(0,t.jsx)(a.TransitionGroup,{children:y&&y.map((a,o)=>{let r=s.createRef();return(0,t.jsx)(i.CSSTransition,{nodeRef:r,...g,children:e.content?d.ObjectUtils.getJSXElement(e.content,{message:a.message}):(0,t.jsx)(k,{hostName:"Toast",ref:r,messageInfo:a,index:o,onClick:C.onClick,onClose:P,onMouseEnter:C.onMouseEnter,onMouseLeave:C.onMouseLeave,closeIcon:C.closeIcon,ptCallbacks:N,metaData:B})},a._pId)})})}));return(0,t.jsx)(u.Portal,{element:L,appendTo:C.appendTo})}));M.displayName="Toast",e.s(["Toast",0,M],29363)},86037,e=>{"use strict";var t=e.i(60997),s=e.i(75907),a=e.i(49893),o=e.i(91788),r=e.i(20980);function n(e,t){var s=Object.create(null);return e&&o.Children.map(e,function(e){return e}).forEach(function(e){s[e.key]=t&&(0,o.isValidElement)(e)?t(e):e}),s}function i(e,t,s){return null!=s[t]?s[t]:e.props[t]}var l=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},c=function(e){function c(t,s){var a=e.call(this,t,s)||this,o=a.handleExited.bind(function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a));return a.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},a}(0,a.default)(c,e);var m=c.prototype;return m.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},m.componentWillUnmount=function(){this.mounted=!1},c.getDerivedStateFromProps=function(e,t){var s,a,r=t.children,l=t.handleExited;return{children:t.firstRender?n(e.children,function(t){return(0,o.cloneElement)(t,{onExited:l.bind(null,t),in:!0,appear:i(t,"appear",e),enter:i(t,"enter",e),exit:i(t,"exit",e)})}):(Object.keys(a=function(e,t){function s(s){return s in t?t[s]:e[s]}e=e||{},t=t||{};var a,o=Object.create(null),r=[];for(var n in e)n in t?r.length&&(o[n]=r,r=[]):r.push(n);var i={};for(var l in t){if(o[l])for(a=0;a<o[l].length;a++){var c=o[l][a];i[o[l][a]]=s(c)}i[l]=s(l)}for(a=0;a<r.length;a++)i[r[a]]=s(r[a]);return i}(r,s=n(e.children))).forEach(function(t){var n=a[t];if((0,o.isValidElement)(n)){var c=t in r,m=t in s,u=r[t],d=(0,o.isValidElement)(u)&&!u.props.in;m&&(!c||d)?a[t]=(0,o.cloneElement)(n,{onExited:l.bind(null,n),in:!0,exit:i(n,"exit",e),enter:i(n,"enter",e)}):m||!c||d?m&&c&&(0,o.isValidElement)(u)&&(a[t]=(0,o.cloneElement)(n,{onExited:l.bind(null,n),in:u.props.in,exit:i(n,"exit",e),enter:i(n,"enter",e)})):a[t]=(0,o.cloneElement)(n,{in:!1})}}),a),firstRender:!1}},m.handleExited=function(e,t){var a=n(this.props.children);e.key in a||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var a=(0,s.default)({},t.children);return delete a[e.key],{children:a}}))},m.render=function(){var e=this.props,s=e.component,a=e.childFactory,n=(0,t.default)(e,["component","childFactory"]),i=this.state.contextValue,c=l(this.state.children).map(a);return(delete n.appear,delete n.enter,delete n.exit,null===s)?o.default.createElement(r.default.Provider,{value:i},c):o.default.createElement(r.default.Provider,{value:i},o.default.createElement(s,n,c))},c}(o.default.Component);c.propTypes={},c.defaultProps={component:"div",childFactory:function(e){return e}},e.s(["TransitionGroup",0,c],86037)},84218,e=>{"use strict";var t=e.i(91398),s=e.i(88850),a=e.i(82948),o=e.i(28137),r=e.i(41158);function n(){return(0,t.jsxs)(o.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Toast component use ",(0,t.jsx)("i",{children:"alert"})," role that implicitly defines ",(0,t.jsx)("i",{children:"aria-live"}),' as "assertive" and ',(0,t.jsx)("i",{children:"aria-atomic"}),' as "true".']}),(0,t.jsxs)("p",{children:["Close element is a ",(0,t.jsx)("i",{children:"button"})," with an ",(0,t.jsx)("i",{children:"aria-label"})," that refers to the ",(0,t.jsx)("i",{children:"aria.close"})," property of the ",(0,t.jsx)(r.default,{href:"/locale",children:"locale"})," API by default, you may use",(0,t.jsx)("i",{children:"closeButtonProps"})," to customize the element and override the default ",(0,t.jsx)("i",{children:"aria-label"}),"."]}),(0,t.jsx)("h3",{children:"Close Button Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Closes the message."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Closes the message."})]})]})]})})]})}var i=e.i(5180),l=e.i(57724),c=e.i(29363),m=e.i(91788);function u(e){let s=(0,m.useRef)(null),a={basic:`
<Toast ref={toast} />
<Button onClick={show} label="Basic" />
        `,javascript:`
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function BasicDemo() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Button onClick={show} label="Show" />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function BasicDemo() {
    const toast = useRef<Toast>(null);

    const show = () => {
        toast.current?.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Button onClick={show} label="Show" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Messages are displayed by calling the ",(0,t.jsx)("i",{children:"show"})," method provided by the component ref. A single message is specified by the Message interface that defines various properties such as ",(0,t.jsx)("i",{children:"severity"}),", ",(0,t.jsx)("i",{children:"summary"})," and"," ",(0,t.jsx)("i",{children:"detail"}),"."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsx)(l.Button,{onClick:()=>{s.current.show({severity:"info",summary:"Info",detail:"Message Content"})},label:"Show"})]}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}var d=e.i(50770);function p(e){let s=(0,m.useRef)(null),[a,r]=(0,m.useState)(0),n=(0,m.useRef)(null),u=()=>{r(0),s.current.clear(),clearInterval(n.current),n.current=void 0},p={basic:`
<Toast
    ref={toast}
    content={({ message }) => (
        <section className="flex p-3 gap-3 w-full bg-black-alpha-90 shadow-2 fadeindown" style={{ borderRadius: '10px' }}>
            <i className="pi pi-cloud-upload text-primary-500 text-2xl"></i>
            <div className="flex flex-column gap-3 w-full">
                <p className="m-0 font-semibold text-base text-white">{message.summary}</p>
                <p className="m-0 text-base text-700">{message.detail}</p>
                <div className="flex flex-column gap-2">
                    <ProgressBar value={progress} showValue="false"></ProgressBar>
                    <label className="text-right text-xs text-white">{progress}% uploaded...</label>
                </div>
                <div className="flex gap-3 mb-3">
                    <Button label="Another Upload?" text className="p-0" onClick={clear}></Button>
                    <Button label="Cancel" text className="text-white p-0" onClick={clear}></Button>
                </div>
            </div>
        </section>
    )}
></Toast>
<Button onClick={show} label="View" />
            `,javascript:`
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ProgressBar } from 'primereact/progressbar';

export default function HeadlessDemo() {
    const toast = useRef(null);
    const [progress, setProgress] = useState(0);
    const interval = useRef(null);

    const clear = () => {
        setProgress(0);
        toast.current.clear();
        clearInterval(interval.current);
        interval.current = undefined;
    };

    const show = () => {
        if (!interval.current) {
            toast.current.show({
                summary: 'Uploading your files.',
            });

            setProgress(0);

            if (interval.current) {
                clearInterval(interval.current);
            }

            interval.current = setInterval(() => {
                setProgress((prevProgress) => {
                    const newProgress = prevProgress + 20;

                    if (newProgress >= 100) {
                        clearInterval(interval.current);

                        return 100;
                    }

                    return newProgress;
                });
            }, 1000);
        }
    };

    return (
        <div className="card flex justify-content-center">
            <Toast
                ref={toast}
                content={({ message }) => (
                    <section className="flex p-3 gap-3 w-full bg-black-alpha-90 shadow-2 fadeindown" style={{ borderRadius: '10px' }}>
                        <i className="pi pi-cloud-upload text-primary-500 text-2xl"></i>
                        <div className="flex flex-column gap-3 w-full">
                            <p className="m-0 font-semibold text-base text-white">{message.summary}</p>
                            <p className="m-0 text-base text-700">{message.detail}</p>
                            <div className="flex flex-column gap-2">
                                <ProgressBar value={progress} showValue="false"></ProgressBar>
                                <label className="text-right text-xs text-white">{progress}% uploaded...</label>
                            </div>
                            <div className="flex gap-3 mb-3">
                                <Button label="Another Upload?" text className="p-0" onClick={clear}></Button>
                                <Button label="Cancel" text className="text-white p-0" onClick={clear}></Button>
                            </div>
                        </div>
                    </section>
                )}
            ></Toast>
            <Button onClick={show} label="View" />
        </div>
    )
            `,typescript:`
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ProgressBar } from 'primereact/progressbar';

export default function HeadlessDemo() {
    const toast = useRef<Toast>(null);

    const clear = () => {
        setProgress(0);
        toast.current.clear();
        clearInterval(interval.current);
        interval.current = undefined;
    };

    const show = () => {
        if (!interval.current) {
            toast.current.show({
                summary: 'Uploading your files.',
            });

            setProgress(0);

            if (interval.current) {
                clearInterval(interval.current);
            }

            interval.current = setInterval(() => {
                setProgress((prevProgress) => {
                    const newProgress = prevProgress + 20;

                    if (newProgress >= 100) {
                        clearInterval(interval.current);

                        return 100;
                    }

                    return newProgress;
                });
            }, 1000);
        }
    };

    return (
        <div className="card flex justify-content-center">
            <Toast
                ref={toast}
                content={({ message }) => (
                    <section className="flex p-3 gap-3 w-full bg-black-alpha-90 shadow-2 fadeindown" style={{ borderRadius: '10px' }}>
                        <i className="pi pi-cloud-upload text-primary-500 text-2xl"></i>
                        <div className="flex flex-column gap-3 w-full">
                            <p className="m-0 font-semibold text-base text-white">{message.summary}</p>
                            <p className="m-0 text-base text-700">{message.detail}</p>
                            <div className="flex flex-column gap-2">
                                <ProgressBar value={progress} showValue="false"></ProgressBar>
                                <label className="text-right text-xs text-white">{progress}% uploaded...</label>
                            </div>
                            <div className="flex gap-3 mb-3">
                                <Button label="Another Upload?" text className="p-0" onClick={clear}></Button>
                                <Button label="Cancel" text className="text-white p-0" onClick={clear}></Button>
                            </div>
                        </div>
                    </section>
                )}
            ></Toast>
            <Button onClick={show} label="View" />
        </div>
    )
}
            `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Headless mode is enabled by defining a ",(0,t.jsx)("i",{children:"content"})," prop that lets you implement entire dialog UI instead of the default elements."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(c.Toast,{ref:s,position:"top-center",content:({message:e})=>(0,t.jsxs)("section",{className:"flex p-3 gap-3 w-full bg-black-alpha-90 shadow-2 fadeindown",style:{borderRadius:"10px"},children:[(0,t.jsx)("i",{className:"pi pi-cloud-upload text-primary-500 text-2xl"}),(0,t.jsxs)("div",{className:"flex flex-column gap-3 w-full",children:[(0,t.jsx)("p",{className:"m-0 font-semibold text-base text-white",children:e.summary}),(0,t.jsx)("p",{className:"m-0 text-base text-700",children:e.detail}),(0,t.jsxs)("div",{className:"flex flex-column gap-2",children:[(0,t.jsx)(d.ProgressBar,{value:a,showValue:!1,style:{height:"4px"}}),(0,t.jsxs)("label",{className:"text-right text-xs text-white",children:[a,"% uploaded..."]})]}),(0,t.jsxs)("div",{className:"flex gap-3 mb-3",children:[(0,t.jsx)(l.Button,{label:"Another Upload?",text:!0,className:"p-0",onClick:u}),(0,t.jsx)(l.Button,{label:"Cancel",text:!0,className:"text-white p-0",onClick:u})]})]})]})}),(0,t.jsx)(l.Button,{onClick:()=>{n.current||(s.current.show({summary:"Uploading your files."}),r(0),n.current&&clearInterval(n.current),n.current=setInterval(()=>{r(e=>{let t=e+20;return t>=100?(clearInterval(n.current),100):t})},1e3))},label:"View"})]}),(0,t.jsx)(i.DocSectionCode,{code:p})]})}function f(e){let s={basic:`
import { Toast } from 'primereact/toast';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function h(e){let s=(0,m.useRef)(null),a={basic:`
<Toast ref={toast} />
<Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
        `,javascript:`
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function MultipleDemo() {
    const toast = useRef(null);

    const showMultiple = () => {
        toast.current.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 },
            { severity: 'info', summary: 'Info', detail: 'Message Content', life: 3050 },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', life: 3100 },
            { severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150 }
        ]);
    };

    return (
        <div className="card flex justify-content-center gap-2">
            <Toast ref={toast} />
            <Button onClick={showMultiple} label="Multiple" severity='warning' />
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function MultipleDemo() {
    const toast = useRef<Toast>(null);

    const showMultiple = () => {
        toast.current?.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 },
            { severity: 'info', summary: 'Info', detail: 'Message Content', life: 3050 },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', life: 3100 },
            { severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150 }
        ]);
    };

    return (
        <div className="card flex justify-content-center gap-2">
            <Toast ref={toast} />
            <Button onClick={showMultiple} label="Multiple" severity='warning' />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Multiple messages are displayed by passing an array to the ",(0,t.jsx)("i",{children:"show"})," method."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center gap-2",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsx)(l.Button,{onClick:()=>{s.current.show([{severity:"success",summary:"Success",detail:"Message Content",life:3e3},{severity:"info",summary:"Info",detail:"Message Content",life:3050},{severity:"warn",summary:"Warning",detail:"Message Content",life:3100},{severity:"error",summary:"Error",detail:"Message Content",life:3150}])},label:"Multiple",severity:"warning"})]}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}function x(e){let s=(0,m.useRef)(null),a=(0,m.useRef)(null),r=(0,m.useRef)(null),n=(0,m.useRef)(null),u=(0,m.useRef)(null),d=(0,m.useRef)(null),p=(0,m.useRef)(null),f=(e,t,s)=>{let a=e.target.innerText;t.current.show({severity:s,summary:a,detail:a,life:3e3})},h={basic:`
<Toast ref={toastTL} position="top-left" />
<Toast ref={toastBL} position="bottom-left" />
<Toast ref={toastBR} position="bottom-right" />
<Button label="Top Left" className="mr-2" onClick={showTopLeft} />
<Button label="Bottom Left" className="p-button-warning" onClick={showBottomLeft} />
<Button label="Bottom Right" className="p-button-success" onClick={showBottomRight} />
        `,javascript:`
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function PositionDemo() {
    const toastTopCenter = useRef(null);
    const toastTopLeft = useRef(null);
    const toastTopRight = useRef(null);
    const toastCenter = useRef(null);
    const toastBottomLeft = useRef(null);
    const toastBottomCenter = useRef(null);
    const toastBottomRight = useRef(null);

    const showMessage = (event, ref, severity) => {
        const label = event.target.innerText;

        ref.current.show({ severity: severity, summary: label, detail: label, life: 3000 });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toastTopLeft} position="top-left" />
            <Toast ref={toastTopCenter} position="top-center" />
            <Toast ref={toastTopRight} position="top-right" />
            <Toast ref={toastCenter} position="center" />
            <Toast ref={toastBottomLeft} position="bottom-left" />
            <Toast ref={toastBottomCenter} position="bottom-center" />
            <Toast ref={toastBottomRight} position="bottom-right" />
            <div className="flex flex-wrap gap-2">
                <Button label="Top Left" className="p-button-success" onClick={(e) => showMessage(e, toastTopLeft, 'success')} />
                <Button label="Top Center" onClick={(e) => showMessage(e, toastTopCenter, 'info')} />
                <Button label="Top Right" className="p-button-warning" onClick={(e) => showMessage(e, toastTopRight, 'warn')} />
                <Button label="Center" className="p-button-danger" onClick={(e) => showMessage(e, toastCenter, 'error')} />
                <Button label="Bottom Left" className="p-button-success" onClick={(e) => showMessage(e, toastBottomLeft, 'success')} />
                <Button label="Bottom Center" onClick={(e) => showMessage(e, toastBottomCenter, 'info')} />
                <Button label="Bottom Right" className="p-button-warning" onClick={(e) => showMessage(e, toastBottomRight, 'warn')} />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast, ToastMessage } from 'primereact/toast';

export default function PositionDemo() {
    const toastTopCenter = useRef<Toast>(null);
    const toastTopLeft = useRef<Toast>(null);
    const toastTopRight = useRef<Toast>(null);
    const toastCenter = useRef<Toast>(null);
    const toastBottomLeft = useRef<Toast>(null);
    const toastBottomCenter = useRef<Toast>(null);
    const toastBottomRight = useRef<Toast>(null);

    const showMessage = (event: React.MouseEvent<HTMLButtonElement>, ref: React.RefObject<Toast>, severity: ToastMessage['severity']) => {
        const target = event.target as HTMLButtonElement;
        const label = target.innerText;

        ref.current?.show({ severity: severity, summary: label, detail: label, life: 3000 });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toastTopLeft} position="top-left" />
            <Toast ref={toastTopCenter} position="top-center" />
            <Toast ref={toastTopRight} position="top-right" />
            <Toast ref={toastCenter} position="center" />
            <Toast ref={toastBottomLeft} position="bottom-left" />
            <Toast ref={toastBottomCenter} position="bottom-center" />
            <Toast ref={toastBottomRight} position="bottom-right" />
            <div className="flex flex-wrap gap-2">
                <Button label="Top Left" className="p-button-success" onClick={(e) => showMessage(e, toastTopLeft, 'success')} />
                <Button label="Top Center" onClick={(e) => showMessage(e, toastTopCenter, 'info')} />
                <Button label="Top Right" className="p-button-warning" onClick={(e) => showMessage(e, toastTopRight, 'warn')} />
                <Button label="Center" className="p-button-danger" onClick={(e) => showMessage(e, toastCenter, 'error')} />
                <Button label="Bottom Left" className="p-button-success" onClick={(e) => showMessage(e, toastBottomLeft, 'success')} />
                <Button label="Bottom Center" onClick={(e) => showMessage(e, toastBottomCenter, 'info')} />
                <Button label="Bottom Right" className="p-button-warning" onClick={(e) => showMessage(e, toastBottomRight, 'warn')} />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Location of the messages is customized with the ",(0,t.jsx)("i",{children:"position"})," property."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(c.Toast,{ref:a,position:"top-left"}),(0,t.jsx)(c.Toast,{ref:s,position:"top-center"}),(0,t.jsx)(c.Toast,{ref:r,position:"top-right"}),(0,t.jsx)(c.Toast,{ref:n,position:"center"}),(0,t.jsx)(c.Toast,{ref:u,position:"bottom-left"}),(0,t.jsx)(c.Toast,{ref:d,position:"bottom-center"}),(0,t.jsx)(c.Toast,{ref:p,position:"bottom-right"}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)(l.Button,{label:"Top Left",className:"p-button-success",onClick:e=>f(e,a,"success")}),(0,t.jsx)(l.Button,{label:"Top Center",onClick:e=>f(e,s,"info")}),(0,t.jsx)(l.Button,{label:"Top Right",className:"p-button-warning",onClick:e=>f(e,r,"warn")}),(0,t.jsx)(l.Button,{label:"Center",className:"p-button-danger",onClick:e=>f(e,n,"error")}),(0,t.jsx)(l.Button,{label:"Bottom Left",className:"p-button-success",onClick:e=>f(e,u,"success")}),(0,t.jsx)(l.Button,{label:"Bottom Center",onClick:e=>f(e,d,"info")}),(0,t.jsx)(l.Button,{label:"Bottom Right",className:"p-button-warning",onClick:e=>f(e,p,"warn")})]})]}),(0,t.jsx)(i.DocSectionCode,{code:h})]})}let g=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"toast"})})]});function v(e){let s=(0,m.useRef)(null),a={basic:`
<Toast ref={toast} />
<Button label="Success" severity="success" onClick={showSuccess} />
<Button label="Info" severity="info" onClick={showInfo} />
<Button label="Warn" severity="warning" onClick={showWarn} />
<Button label="Error" severity="danger" onClick={showError} />
<Button label="Secondary" severity="secondary" onClick={showSecondary} />
<Button label="Contrast" severity="contrast" onClick={showContrast} />
        `,javascript:`
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function SeverityDemo() {
    const toast = useRef(null);

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    }

    const showInfo = () => {
        toast.current.show({severity:'info', summary: 'Info', detail:'Message Content', life: 3000});
    }

    const showWarn = () => {
        toast.current.show({severity:'warn', summary: 'Warning', detail:'Message Content', life: 3000});
    }

    const showError = () => {
        toast.current.show({severity:'error', summary: 'Error', detail:'Message Content', life: 3000});
    }

    const showSecondary = () => {
        toast.current.show({ severity: 'secondary', summary: 'Secondary', detail: 'Message Content', life: 3000 });
    };

    const showContrast = () => {
        toast.current.show({ severity: 'contrast', summary: 'Contrast', detail: 'Message Content', life: 3000 });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <div className="flex flex-wrap gap-2">
                <Button label="Success" severity="success" onClick={showSuccess} />
                <Button label="Info" severity="info" onClick={showInfo} />
                <Button label="Warn" severity="warning" onClick={showWarn} />
                <Button label="Error" severity="danger" onClick={showError} />
                <Button label="Secondary" severity="secondary" onClick={showSecondary} />
                <Button label="Contrast" severity="contrast" onClick={showContrast} />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function SeverityDemo() {
    const toast = useRef<Toast>(null);

    const showSuccess = () => {
        toast.current?.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    }

    const showInfo = () => {
        toast.current?.show({severity:'info', summary: 'Info', detail:'Message Content', life: 3000});
    }

    const showWarn = () => {
        toast.current?.show({severity:'warn', summary: 'Warning', detail:'Message Content', life: 3000});
    }

    const showError = () => {
        toast.current?.show({severity:'error', summary: 'Error', detail:'Message Content', life: 3000});
    }

    const showSecondary = () => {
        toast.current?.show({ severity: 'secondary', summary: 'Secondary', detail: 'Message Content', life: 3000 });
    };

    const showContrast = () => {
        toast.current?.show({ severity: 'contrast', summary: 'Contrast', detail: 'Message Content', life: 3000 });
    };


    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <div className="flex flex-wrap gap-2">
                <Button label="Success" severity="success" onClick={showSuccess} />
                <Button label="Info" severity="info" onClick={showInfo} />
                <Button label="Warn" severity="warning" onClick={showWarn} />
                <Button label="Error" severity="danger" onClick={showError} />
                <Button label="Secondary" severity="secondary" onClick={showSecondary} />
                <Button label="Contrast" severity="contrast" onClick={showContrast} />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("i",{children:"severity"})," option specifies the type of the message."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)(l.Button,{label:"Success",severity:"success",onClick:()=>{s.current.show({severity:"success",summary:"Success",detail:"Message Content",life:3e3})}}),(0,t.jsx)(l.Button,{label:"Info",severity:"info",onClick:()=>{s.current.show({severity:"info",summary:"Info",detail:"Message Content",life:3e3})}}),(0,t.jsx)(l.Button,{label:"Warn",severity:"warning",onClick:()=>{s.current.show({severity:"warn",summary:"Warning",detail:"Message Content",life:3e3})}}),(0,t.jsx)(l.Button,{label:"Error",severity:"danger",onClick:()=>{s.current.show({severity:"error",summary:"Error",detail:"Message Content",life:3e3})}}),(0,t.jsx)(l.Button,{label:"Secondary",severity:"secondary",onClick:()=>{s.current.show({severity:"secondary",summary:"Secondary",detail:"Message Content",life:3e3})}}),(0,t.jsx)(l.Button,{label:"Contrast",severity:"contrast",onClick:()=>{s.current.show({severity:"contrast",summary:"Contrast",detail:"Message Content",life:3e3})}})]})]}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}function b(e){let s=(0,m.useRef)(null),a={basic:`
<Toast ref={toast} />
<Button onClick={showSticky} label="Sticky" severity="success" />
<Button onClick={clear} label="Clear" />
        `,javascript:`
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function StickyDemo() {
    const toast = useRef(null);

    const showSticky = () => {
        toast.current.show({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
    };

    const clear = () => {
        toast.current.clear();
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <div className="flex flex-wrap gap-2">
                <Button onClick={showSticky} label="Sticky" severity="success" />
                <Button onClick={clear} label="Clear" />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function StickyDemo() {
    const toast = useRef<Toast>(null);

    const showSticky = () => {
        toast.current?.show({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
    };

    const clear = () => {
        toast.current?.clear();
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <div className="flex flex-wrap gap-2">
                <Button onClick={showSticky} label="Sticky" severity="success" />
                <Button onClick={clear} label="Clear" />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A message will disappear after 3000ms, the default value defined for the ",(0,t.jsx)("i",{children:"life"})," option. To display messages that remain visible and do not hide automatically, set the ",(0,t.jsx)("i",{children:"sticky"}),' option to "true".']})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(c.Toast,{ref:s}),(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)(l.Button,{onClick:()=>{s.current.show({severity:"info",summary:"Sticky",detail:"Message Content",sticky:!0})},label:"Sticky"}),(0,t.jsx)(l.Button,{onClick:()=>{s.current.clear()},label:"Clear",severity:"secondary"})]})]}),(0,t.jsx)(i.DocSectionCode,{code:a})]})}var C=e.i(10197);function y(e){let[s,a]=(0,m.useState)(!1),r=(0,m.useRef)(null),n=()=>{r.current.clear(),a(!1)},u={basic:`
toastBC.current.show({
    severity: 'success',
    summary: 'Can you send me the report?',
    sticky: true,
    content: (props) => (
        <div className="flex flex-column align-items-left" style={{ flex: '1' }}>
            <div className="flex align-items-center gap-2">
                <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
                <span className="font-bold text-900">Amy Elsner</span>
            </div>
            <div className="font-medium text-lg my-3 text-900">{props.message.summary}</div>
            <Button className="p-button-sm flex" label="Reply" severity="success" onClick={clear}></Button>
        </div>
    )
});`,javascript:`
import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { Avatar } from '@/components/lib/avatar/Avatar';
import { Toast } from 'primereact/toast';

export default function TemplateDemo() {
    const [visible, setVisible] = useState(false);
    const toastBC = useRef(null);

    const clear = () => {
        toastBC.current.clear();
        setVisible(false);
    };

    const confirm = () => {
        if (!visible) {
            setVisible(true);
            toastBC.current.clear();
            toastBC.current.show({
                severity: 'success',
                summary: 'Can you send me the report?',
                sticky: true,
                content: (props) => (
                    <div className="flex flex-column align-items-left" style={{ flex: '1' }}>
                        <div className="flex align-items-center gap-2">
                            <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
                            <span className="font-bold text-900">Amy Elsner</span>
                        </div>
                        <div className="font-medium text-lg my-3 text-900">{props.message.summary}</div>
                        <Button className="p-button-sm flex" label="Reply" severity="success" onClick={clear}></Button>
                    </div>
                )
            });
        }
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toastBC} position="bottom-center" onRemove={clear} />
            <Button onClick={confirm} label="Confirm" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { Avatar } from '@/components/lib/avatar/Avatar';
import { Toast } from 'primereact/toast';

export default function TemplateDemo() {
    const [visible, setVisible] = useState(false);
    const toastBC = useRef<Toast>(null);

    const clear = () => {
        toastBC.current?.clear();
        setVisible(false);
    };

    const confirm = () => {
        if (!visible) {
            setVisible(true);
            toastBC.current?.clear();
            toastBC.current.show({
                severity: 'success',
                summary: 'Can you send me the report?',
                sticky: true,
                content: (props) => (
                    <div className="flex flex-column align-items-left" style={{ flex: '1' }}>
                        <div className="flex align-items-center gap-2">
                            <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
                            <span className="font-bold text-900">Amy Elsner</span>
                        </div>
                        <div className="font-medium text-lg my-3 text-900">{props.message.summary}</div>
                        <Button className="p-button-sm flex" label="Reply" severity="success" onClick={clear}></Button>
                    </div>
                )
            });
        }
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toastBC} position="bottom-center" onRemove={clear} />
            <Button onClick={confirm} label="Confirm" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Custom content inside a message is defined with the ",(0,t.jsx)("i",{children:"content"})," option."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(c.Toast,{ref:r,position:"bottom-center",onRemove:n}),(0,t.jsx)(l.Button,{onClick:()=>{s||(a(!0),r.current.clear(),r.current.show({severity:"success",summary:"Can you send me the report?",sticky:!0,content:e=>(0,t.jsxs)("div",{className:"flex flex-column align-items-start",style:{flex:"1"},children:[(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)(C.Avatar,{image:"/images/avatar/amyelsner.png",shape:"circle"}),(0,t.jsx)("span",{className:"font-bold text-900",children:"Amy Elsner"})]}),(0,t.jsx)("div",{className:"font-medium text-lg my-3 text-900",children:e.message.summary}),(0,t.jsx)(l.Button,{className:"p-button-sm flex",label:"Reply",severity:"success",onClick:n})]})}))},label:"Confirm"})]}),(0,t.jsx)(i.DocSectionCode,{code:u})]})}function w(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-toast"}),(0,t.jsx)("td",{children:"Main container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-toast-container"}),(0,t.jsx)("td",{children:"Container of a message item."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-toast-item"}),(0,t.jsx)("td",{children:"Message element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-toast-icon-close"}),(0,t.jsx)("td",{children:"Close icon of a message."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-toast-image"}),(0,t.jsx)("td",{children:"Severity icon."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-toast-message"}),(0,t.jsx)("td",{children:"Container of message texts."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-toast-title"}),(0,t.jsx)("td",{children:"Summary of the message."})]})]})]})})]})}function j(e){let s={basic:`
const Tailwind = {  
    toast: {
        root: {
            className: classNames('w-96', 'opacity-90')
        },
        message: ({ state, index }) => ({
            className: classNames('my-4 rounded-md w-full', {
                'bg-blue-100 border-solid border-0 border-l-4 border-blue-500 text-blue-700': state.messages[index] && state.messages[index].message.severity == 'info',
                'bg-green-100 border-solid border-0 border-l-4 border-green-500 text-green-700': state.messages[index] && state.messages[index].message.severity == 'success',
                'bg-orange-100 border-solid border-0 border-l-4 border-orange-500 text-orange-700': state.messages[index] && state.messages[index].message.severity == 'warn',
                'bg-red-100 border-solid border-0 border-l-4 border-red-500 text-red-700': state.messages[index] && state.messages[index].message.severity == 'error'
            })
        }),
        content: 'flex items-center py-5 px-7',
        icon: {
            className: classNames('w-6 h-6', 'text-lg mr-2')
        },
        text: 'text-base font-normal flex flex-col flex-1 grow shrink ml-4',
        summary: 'font-bold block',
        detail: 'mt-1 block',
        closebutton: {
            className: classNames('w-8 h-8 rounded-full bg-transparent transition duration-200 ease-in-out', 'ml-auto overflow-hidden relative', 'flex items-center justify-center', 'hover:bg-white/30')
        },
        transition: {
            enterFromClass: 'opacity-0 translate-x-0 translate-y-2/4 translate-z-0',
            enterActiveClass: 'transition-transform transition-opacity duration-300',
            leaveFromClass: 'max-h-40',
            leaveActiveClass: 'transition-all duration-500 ease-in',
            leaveToClass: 'max-h-0 opacity-0 mb-0 overflow-hidden'
        }
    }
}
        `},a={javascript:`
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function UnstyledDemo() {
    const toast = useRef(null);

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    }

    const showInfo = () => {
        toast.current.show({severity:'info', summary: 'Info', detail:'Message Content', life: 3000});
    }

    const showWarn = () => {
        toast.current.show({severity:'warn', summary: 'Warning', detail:'Message Content', life: 3000});
    }

    const showError = () => {
        toast.current.show({severity:'error', summary: 'Error', detail:'Message Content', life: 3000});
    }

    return (
        <div className="card flex justify-center">
            <Toast ref={toast} />
            <div className="flex flex-wrap gap-2">
                <Button label="Success" severity="success" onClick={showSuccess} />
                <Button label="Info" severity="info" onClick={showInfo} />
                <Button label="Warn" severity="warning" onClick={showWarn} />
                <Button label="Error" severity="danger" onClick={showError} />
            </div>
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(r.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(i.DocSectionCode,{code:a,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:g},{id:"pt.toast.options",label:"Toast PT Options",component:s.default}];return(0,t.jsx)(a.DocComponent,{title:"React Toast Component",header:"Toast",description:"Toast is used to display messages in an overlay.",componentDocs:[{id:"import",label:"Import",component:f},{id:"basic",label:"Basic",component:u},{id:"severity",label:"Severity",component:v},{id:"position",label:"Position",component:x},{id:"multiple",label:"Multiple",component:h},{id:"stickydoc",label:"Sticky",component:b},{id:"template",label:"Template",component:y},{id:"headless",label:"Headless",component:p},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["Toast"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:w},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:j}]}]})}],84218)},83139,(e,t,s)=>{let a="/toast";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(84218)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);