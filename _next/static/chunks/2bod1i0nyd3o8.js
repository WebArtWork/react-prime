(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,7869,e=>{"use strict";var t=e.i(91398),a=e.i(91788),l=e.i(10836),s=e.i(15498),i=e.i(60150),r=e.i(3935);let n=`
@layer primereact {
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
    }
    
    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        width: 100%;
        content: "";
    }
    
    .p-divider-horizontal.p-divider-left {
        justify-content: flex-start;
    }
    
    .p-divider-horizontal.p-divider-right {
        justify-content: flex-end;
    }
    
    .p-divider-horizontal.p-divider-center {
        justify-content: center;
    }
    
    .p-divider-content {
        z-index: 1;
    }
    
    .p-divider-vertical {
        min-height: 100%;
        margin: 0 1rem;
        display: flex;
        position: relative;
        justify-content: center;
    }
    
    .p-divider-vertical:before {
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        height: 100%;
        content: "";
    }
    
    .p-divider-vertical.p-divider-top {
        align-items: flex-start;
    }
    
    .p-divider-vertical.p-divider-center {
        align-items: center;
    }
    
    .p-divider-vertical.p-divider-bottom {
        align-items: flex-end;
    }
    
    .p-divider-solid.p-divider-horizontal:before {
        border-top-style: solid;
    }
    
    .p-divider-solid.p-divider-vertical:before {
        border-left-style: solid;
    }
    
    .p-divider-dashed.p-divider-horizontal:before {
        border-top-style: dashed;
    }
    
    .p-divider-dashed.p-divider-vertical:before {
        border-left-style: dashed;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-top-style: dotted;
    }
    
    .p-divider-dotted.p-divider-horizontal:before {
        border-left-style: dotted;
    }
}
`,o=s.ComponentBase.extend({defaultProps:{__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null,children:void 0},css:{classes:{root:({props:e,horizontal:t,vertical:a})=>(0,r.classNames)(`p-divider p-component p-divider-${e.layout} p-divider-${e.type}`,{"p-divider-left":t&&(!e.align||"left"===e.align),"p-divider-right":t&&"right"===e.align,"p-divider-center":t&&"center"===e.align||a&&(!e.align||"center"===e.align),"p-divider-top":a&&"top"===e.align,"p-divider-bottom":a&&"bottom"===e.align},e.className),content:"p-divider-content"},styles:n,inlineStyles:{root:({props:e})=>({justifyContent:"horizontal"===e.layout?"center"===e.align||null===e.align?"center":"left"===e.align?"flex-start":"right"===e.align?"flex-end":null:null,alignItems:"vertical"===e.layout?"center"===e.align||null===e.align?"center":"top"===e.align?"flex-start":"bottom"===e.align?"flex-end":null:null})}}}),d=a.forwardRef((e,r)=>{let n=(0,i.useMergeProps)(),d=a.useContext(l.PrimeReactContext),c=o.getProps(e,d),{ptm:p,cx:u,sx:m,isUnstyled:f}=o.setMetaData({props:c});(0,s.useHandleStyle)(o.css.styles,f,{name:"divider"});let h=a.useRef(null),v="horizontal"===c.layout,x="vertical"===c.layout;a.useImperativeHandle(r,()=>({props:c,getElement:()=>h.current}));let g=n({ref:h,style:m("root"),className:u("root",{horizontal:v,vertical:x}),"aria-orientation":c.layout,role:"separator"},o.getOtherProps(c),p("root")),b=n({className:u("content")},p("content"));return(0,t.jsx)("div",{...g,children:(0,t.jsx)("div",{...b,children:c.children})})});d.displayName="Divider",e.s(["Divider",0,d],7869)},97776,e=>{"use strict";var t=e.i(91398),a=e.i(91788),l=e.i(10836),s=e.i(15498),i=e.i(60150),r=e.i(3935),n=e.i(51551);let o=`
@layer primereact {
    .p-float-label {
        display: block;
        position: relative;
    }
    
    .p-float-label label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        margin-top: -.5rem;
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
    }
    
    .p-float-label:has(textarea) label {
        top: 1rem;
    }
    
    .p-float-label:has(input:focus) label,
    .p-float-label:has(input.p-filled) label,
    .p-float-label:has(input:-webkit-autofill) label,
    .p-float-label:has(textarea:focus) label,
    .p-float-label:has(textarea.p-filled) label,
    .p-float-label:has(.p-inputwrapper-focus) label,
    .p-float-label:has(.p-inputwrapper-filled) label {
        top: -.75rem;
        font-size: 12px;
    }
    
    .p-float-label .p-placeholder,
    .p-float-label input::placeholder,
    .p-float-label .p-inputtext::placeholder {
        opacity: 0;
        transition-property: all;
        transition-timing-function: ease;
    }
    
    .p-float-label .p-focus .p-placeholder,
    .p-float-label input:focus::placeholder,
    .p-float-label .p-inputtext:focus::placeholder {
        opacity: 1;
        transition-property: all;
        transition-timing-function: ease;
    }
}`,d=s.ComponentBase.extend({defaultProps:{__TYPE:"FloatLabel",children:void 0},css:{classes:{root:"p-float-label"},styles:o}}),c=a.memo(a.forwardRef((e,o)=>{let c=(0,i.useMergeProps)(),p=a.useContext(l.PrimeReactContext),u=d.getProps(e,p),m=a.useRef(o),{ptm:f,cx:h,isUnstyled:v}=d.setMetaData({props:u});(0,s.useHandleStyle)(d.css.styles,v,{name:"floatlabel"}),a.useEffect(()=>{n.ObjectUtils.combinedRefs(m,o)},[m,o]);let x=c({ref:m,className:(0,r.classNames)(h("root"))},d.getOtherProps(u),f("root"));return(0,t.jsx)("span",{...x,children:u.children})}));c.displayName="FloatLabel",e.s(["FloatLabel",0,c],97776)},36785,e=>{"use strict";var t=e.i(91788),a=e.i(45543),l=e.i(20728),s=e.i(26295),i=e.i(35048),r=e.i(4632);e.s(["useOverlayListener",0,({target:e,overlay:n,listener:o,when:d=!0,type:c="click"})=>{let p=t.useRef(null),u=t.useRef(null),[m,f]=(0,l.useEventListener)({target:"window",type:c,listener:e=>{o&&o(e,{type:"outside",valid:3!==e.which&&y(e)})},when:d}),[h,v]=(0,i.useResizeListener)({listener:e=>{o&&o(e,{type:"resize",valid:!a.DomHandler.isTouchDevice()})},when:d}),[x,g]=(0,l.useEventListener)({target:"window",type:"orientationchange",listener:e=>{o&&o(e,{type:"orientationchange",valid:!0})},when:d}),[b,w]=(0,s.useOverlayScrollListener)({target:e,listener:e=>{o&&o(e,{type:"scroll",valid:!0})},when:d}),y=e=>p.current&&!(p.current.isSameNode(e.target)||p.current.contains(e.target)||u.current&&u.current.contains(e.target)),j=()=>{f(),v(),g(),w()};return t.useEffect(()=>{d?(p.current=a.DomHandler.getTargetElement(e),u.current=a.DomHandler.getTargetElement(n)):(j(),p.current=u.current=null)},[e,n,d]),(0,r.useUnmountEffect)(()=>{j()}),[()=>{m(),h(),x(),b()},j]}])},33616,41761,e=>{"use strict";var t=e.i(91398),a=e.i(91788),l=e.i(10836),s=e.i(60150),i=e.i(3935),r=e.i(15498);let n=r.ComponentBase.extend({defaultProps:{__TYPE:"IconField",__parentMetadata:null,children:void 0,className:null,iconPosition:"right"},css:{classes:{root:({props:e})=>(0,i.classNames)("p-icon-field",{"p-icon-field-right":"right"===e.iconPosition,"p-icon-field-left":"left"===e.iconPosition})}}}),o=a.default.memo(a.default.forwardRef((e,r)=>{let o=(0,a.useRef)(r),d=(0,s.useMergeProps)(),c=(0,a.useContext)(l.PrimeReactContext),p=n.getProps(e,c),{ptm:u,cx:m}=n.setMetaData({props:p,...p.__parentMetadata,context:{iconPosition:p.iconPosition}}),f=d({className:(0,i.classNames)(p.className,m("root",{iconPosition:p.iconPosition}))},n.getOtherProps(p),u("root"));return(0,t.jsx)("div",{...f,ref:o,children:a.Children.map(p.children,(e,t)=>(0,a.cloneElement)(e,{iconPosition:p.iconPosition}))})}));o.displayName="IconField",e.s(["IconField",0,o],33616);let d=r.ComponentBase.extend({defaultProps:{__TYPE:"InputIcon",__parentMetadata:null,className:null,iconPosition:null},css:{classes:{root:"p-input-icon"}}}),c=a.default.memo(a.default.forwardRef((e,r)=>{let n=(0,a.useRef)(r),o=(0,s.useMergeProps)(),c=(0,a.useContext)(l.PrimeReactContext),p=d.getProps(e,c),{ptm:u,cx:m}=d.setMetaData({props:p,...p.__parentMetadata,context:{iconPosition:p.iconPosition}}),f=o({className:(0,i.classNames)(p.className,m("root"))},d.getOtherProps(p),u("root"));return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("span",{...f,ref:n,children:p.children})})}));c.displayName="InputIcon",e.s(["InputIcon",0,c],41761)},37696,e=>{"use strict";var t=e.i(91398),a=e.i(91788),l=e.i(85850);let s=a.memo(a.forwardRef((e,a)=>{let s=l.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:a,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",fill:"currentColor"})})}));s.displayName="EyeIcon",e.s(["EyeIcon",0,s])},66082,e=>{"use strict";var t=e.i(91398),a=e.i(91788),l=e.i(10836),s=e.i(15498),i=e.i(60150),r=e.i(34366),n=e.i(64691),o=e.i(45543),d=e.i(51551),c=e.i(3935);let p=s.ComponentBase.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,children:void 0,className:null,invalid:!1,variant:null,keyfilter:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,tooltip:null,tooltipOptions:null,validateOnly:!1,iconPosition:null},css:{classes:{root:({props:e,isFilled:t,context:a})=>(0,c.classNames)("p-inputtext p-component",{"p-disabled":e.disabled,"p-filled":t,"p-invalid":e.invalid,"p-variant-filled":e.variant?"filled"===e.variant:a&&"filled"===a.inputStyle})}}}),u=a.memo(a.forwardRef((e,u)=>{let m=(0,i.useMergeProps)(),f=a.useContext(l.PrimeReactContext),h=p.getProps(e,f),{ptm:v,cx:x,isUnstyled:g}=p.setMetaData({props:h,...h.__parentMetadata,context:{disabled:h.disabled,iconPosition:h.iconPosition}});(0,s.useHandleStyle)(p.css.styles,g,{name:"inputtext",styled:!0});let b=a.useRef(u);a.useEffect(()=>{d.ObjectUtils.combinedRefs(b,u)},[b,u]);let w=a.useMemo(()=>d.ObjectUtils.isNotEmpty(h.value)||d.ObjectUtils.isNotEmpty(h.defaultValue),[h.value,h.defaultValue]),y=d.ObjectUtils.isNotEmpty(h.tooltip);a.useEffect(()=>{w||b.current?.value?o.DomHandler.addClass(b.current,"p-filled"):o.DomHandler.removeClass(b.current,"p-filled")},[h.disabled,w]);let j=m({className:(0,c.classNames)(h.className,x("root",{context:f,isFilled:w})),autoComplete:h.autoComplete,onBeforeInput:e=>{h.onBeforeInput&&h.onBeforeInput(e),h.keyfilter&&r.KeyFilter.onBeforeInput(e,h.keyfilter,h.validateOnly)},onInput:e=>{let t=e.target,a=!0;h.keyfilter&&h.validateOnly&&(a=r.KeyFilter.validate(e,h.keyfilter)),h.onInput&&h.onInput(e,a),d.ObjectUtils.isNotEmpty(t.value)?o.DomHandler.addClass(t,"p-filled"):o.DomHandler.removeClass(t,"p-filled")},onKeyDown:e=>{h.onKeyDown&&h.onKeyDown(e),h.keyfilter&&r.KeyFilter.onKeyPress(e,h.keyfilter,h.validateOnly)},onPaste:e=>{h.onPaste&&h.onPaste(e),h.keyfilter&&r.KeyFilter.onPaste(e,h.keyfilter,h.validateOnly)}},p.getOtherProps(h),v("root"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{ref:b,...j}),y&&(0,t.jsx)(n.Tooltip,{target:b,content:h.tooltip,pt:v("tooltip"),...h.tooltipOptions})]})}));u.displayName="InputText",e.s(["InputText",0,u],66082)},34366,e=>{"use strict";var t=e.i(45543);let a={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:e=>a.DEFAULT_MASKS[e]?a.DEFAULT_MASKS[e]:e,onBeforeInput(e,a,l){!l&&t.DomHandler.isAndroid()&&this.validateKey(e,e.data,a)},onKeyPress(e,a,l){l||t.DomHandler.isAndroid()||e.ctrlKey||e.altKey||e.metaKey||this.validateKey(e,e.key,a)},onPaste(e,t,a){if(a)return;let l=this.getRegex(t);[...e.clipboardData.getData("text")].forEach(t=>{if(!l.test(t))return e.preventDefault(),!1})},validateKey(e,t,a){null==t||!(t.length<=2)||this.getRegex(a).test(t)||e.preventDefault()},validate(e,t){let a=e.target.value,l=!0,s=this.getRegex(t);return a&&!s.test(a)&&(l=!1),l}};e.s(["KeyFilter",0,a])},81201,e=>{"use strict";let t=(0,e.i(44129).EventBus)();e.s(["OverlayService",0,t])},44129,e=>{"use strict";e.s(["EventBus",0,function(){let e=new Map;return{on(t,a){let l=e.get(t);l?l.push(a):l=[a],e.set(t,l)},off(t,a){let l=e.get(t);l&&l.splice(l.indexOf(a)>>>0,1)},emit(t,a){let l=e.get(t);l&&l.slice().forEach(e=>e(a))}}}],44129)},74064,e=>{"use strict";var t=e.i(91398),a=e.i(88850),l=e.i(82948),s=e.i(5180),i=e.i(28137);function r(){let e={basic:`
<label htmlFor="pwd1">Password</label>
<Password id="pwd1" />

<span id="pwd2">Password</span>
<Password aria-labelledby="pwd2" />

<Password aria-label="Password"/>
    `};return(0,t.jsxs)(i.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Value to describe the component can either be provided via ",(0,t.jsx)("i",{children:"label"})," tag combined with ",(0,t.jsx)("i",{children:"id"})," prop or using ",(0,t.jsx)("i",{children:"aria-labelledby"}),", ",(0,t.jsx)("i",{children:"aria-label"})," props. Screen reader is notified about the changes to the strength of the password using a section that has ",(0,t.jsx)("i",{children:"aria-live"})," while typing."]}),(0,t.jsx)(s.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the input."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Hides the strength meter if open."})]})]})]})})]})}var n=e.i(91788),o=e.i(4242),d=e.i(10836),c=e.i(183),p=e.i(15498),u=e.i(87350),m=e.i(83955),f=e.i(92052),h=e.i(60150),v=e.i(20484),x=e.i(36785),g=e.i(4632),b=e.i(71834),w=e.i(33616),y=e.i(37696),j=e.i(85850);let C=n.memo(n.forwardRef((e,a)=>{let l=j.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:a,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",fill:"currentColor"})})}));C.displayName="EyeSlashIcon";var P=e.i(41761),S=e.i(66082),N=e.i(81201),D=e.i(85971),I=e.i(45543),R=e.i(75366),T=e.i(51551),E=e.i(63957),k=e.i(3935);let L=`
@layer primereact {
    .p-password {
        position: relative;
        display: inline-flex;
    }
    
    .p-password-panel {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-password .p-password-panel {
        min-width: 100%;
    }
    
    .p-password-meter {
        height: 10px;
    }
    
    .p-password-strength {
        height: 100%;
        width: 0%;
        transition: width 1s ease-in-out;
    }
    
    .p-fluid .p-password {
        display: flex;
    }
    
    .p-password-input::-ms-reveal,
    .p-password-input::-ms-clear {
        display: none;
    }

    .p-password .p-password-show-icon,
    .p-password .p-password-hide-icon {
        line-height: 1.5;
        cursor: pointer;
    }
}
`,M=p.ComponentBase.extend({defaultProps:{__TYPE:"Password",id:null,inputId:null,inputRef:null,promptLabel:null,weakLabel:null,mediumLabel:null,strongLabel:null,mediumRegex:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})",strongRegex:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",feedback:!0,toggleMask:!1,appendTo:null,header:null,content:null,footer:null,showIcon:null,hideIcon:null,icon:null,tooltip:null,tooltipOptions:null,style:null,className:null,inputStyle:null,inputClassName:null,invalid:!1,variant:null,panelStyle:null,panelClassName:null,transitionOptions:null,tabIndex:null,value:void 0,onInput:null,onShow:null,onHide:null,children:void 0},css:{classes:{root:({props:e,isFilled:t,focusedState:a})=>(0,k.classNames)("p-password p-component p-inputwrapper",{"p-inputwrapper-filled":t,"p-inputwrapper-focus":a,"p-input-icon-right":e.toggleMask}),input:({props:e})=>(0,k.classNames)("p-password-input",e.inputClassName),panel:({props:e,context:t})=>(0,k.classNames)("p-password-panel p-component",e.panelClassName,{"p-input-filled":t&&"filled"===t.inputStyle||"filled"===o.default.inputStyle,"p-ripple-disabled":t&&!1===t.ripple||!1===o.default.ripple}),meter:"p-password-meter",meterLabel:({strength:e})=>(0,k.classNames)("p-password-strength",e),info:({strength:e})=>(0,k.classNames)("p-password-info",e),showIcon:"p-password-show-icon",hideIcon:"p-password-hide-icon",transition:"p-connected-overlay"},styles:L}}),F=n.memo(n.forwardRef((e,a)=>{let l=(0,h.useMergeProps)(),s=n.useContext(d.PrimeReactContext),i=M.getProps(e,s),r=i.promptLabel||(0,c.localeOption)("passwordPrompt"),j=i.weakLabel||(0,c.localeOption)("weak"),L=i.mediumLabel||(0,c.localeOption)("medium"),F=i.strongLabel||(0,c.localeOption)("strong"),[O,_]=n.useState(!1),[V,A]=n.useState(null),[H,U]=n.useState(r),[K,B]=n.useState(!1),[z,Z]=n.useState(!1),X=n.useRef(null),Y=n.useRef(null),J=n.useRef(i.inputRef),W=n.useRef(new RegExp(i.mediumRegex)),G=n.useRef(new RegExp(i.strongRegex)),$=z?"text":"password",q={props:i,state:{overlayVisible:O,meter:V,infoText:H,focused:K,unmasked:z}},{ptm:Q,cx:ee,isUnstyled:et}=M.setMetaData(q);(0,p.useHandleStyle)(M.css.styles,et,{name:"password"});let ea=(0,f.useDisplayOrder)("password",O);(0,m.useGlobalOnEscapeKey)({callback:()=>{ec()},when:O&&i.feedback&&ea,priority:[m.ESC_KEY_HANDLING_PRIORITIES.PASSWORD,ea]});let[el,es]=(0,x.useOverlayListener)({target:X,overlay:Y,listener:(e,{valid:t,type:a})=>{t&&("outside"===a||s.hideOverlaysOnDocumentScrolling?ec():I.DomHandler.isDocument(e.target)||ep())},when:O}),ei=J.current&&J.current.value,er=n.useMemo(()=>T.ObjectUtils.isNotEmpty(i.value)||T.ObjectUtils.isNotEmpty(i.defaultValue)||T.ObjectUtils.isNotEmpty(ei),[i.value,i.defaultValue,ei]),en=e=>{i.feedback&&N.OverlayService.emit("overlay-click",{originalEvent:e,target:X.current})},eo=()=>{Z(e=>!e)},ed=()=>{if(V){let e=null;switch(V.strength){case"weak":e=j;break;case"medium":e=L;break;case"strong":e=F}e&&H!==e&&U(e)}else H!==r&&U(r);_(!0)},ec=()=>{_(!1)},ep=()=>{J.current&&I.DomHandler.alignOverlay(Y.current,J.current.parentElement,i.appendTo||s&&s.appendTo||o.default.appendTo)},eu=()=>{E.ZIndexUtils.set("overlay",Y.current,s&&s.autoZIndex||o.default.autoZIndex,s&&s.zIndex.overlay||o.default.zIndex.overlay),I.DomHandler.addStyles(Y.current,{position:"absolute",top:"0",left:"0"}),ep()},em=()=>{el(),i.onShow&&i.onShow()},ef=()=>{es()},eh=()=>{E.ZIndexUtils.clear(Y.current),i.onHide&&i.onHide()};n.useImperativeHandle(a,()=>({props:i,toggleMask:eo,focus:()=>I.DomHandler.focus(J.current),getElement:()=>X.current,getOverlay:()=>Y.current,getInput:()=>J.current})),n.useEffect(()=>{T.ObjectUtils.combinedRefs(J,i.inputRef)},[J,i.inputRef]),n.useEffect(()=>{W.current=new RegExp(i.mediumRegex)},[i.mediumRegex]),n.useEffect(()=>{G.current=new RegExp(i.strongRegex)},[i.strongRegex]),n.useEffect(()=>{!er&&I.DomHandler.hasClass(X.current,"p-inputwrapper-filled")&&I.DomHandler.removeClass(X.current,"p-inputwrapper-filled")},[er]),(0,b.useUpdateEffect)(()=>{(e=>{var t;if(!i.feedback)return;let a=null,l=null;switch(!(t=e)||0===t.length?0:G.current.test(t)?3:W.current.test(t)?2:1*!!(t.length>0)){case 1:a=j,l={strength:"weak",width:"33.33%"};break;case 2:a=L,l={strength:"medium",width:"66.66%"};break;case 3:a=F,l={strength:"strong",width:"100%"};break;default:a=r,l=null}return A(l),U(a)})(i.value)},[i.value]),(0,v.useMountEffect)(()=>{ep()}),(0,g.useUnmountEffect)(()=>{E.ZIndexUtils.clear(Y.current)});let ev=e=>{("Enter"===e.key||"Space"===e.code)&&(eo(),e.preventDefault())},ex=(0,k.classNames)("p-password p-component p-inputwrapper",{"p-inputwrapper-filled":er,"p-inputwrapper-focus":K,"p-input-icon-right":i.toggleMask},i.className),eg=M.getOtherProps(i),eb=(()=>{let e;if(!i.toggleMask)return null;let a=l({role:"switch",tabIndex:i.tabIndex||"0",className:ee("hideIcon"),onClick:eo,onKeyDown:ev,"aria-label":(0,c.ariaLabel)("passwordHide")||"Hide Password","aria-checked":"false"},Q("hideIcon")),s=l({role:"switch",tabIndex:i.tabIndex||"0",className:ee("showIcon"),onClick:eo,onKeyDown:ev,"aria-label":(0,c.ariaLabel)("passwordShow")||"Show Password","aria-checked":"true"},Q("showIcon"));e=z?i.hideIcon||(0,t.jsx)(C,{...a}):i.showIcon||(0,t.jsx)(y.EyeIcon,{...s});let r=R.IconUtils.getJSXIcon(e,z?{...a}:{...s},{props:i});if(i.icon){let e={onClick:eo,className:ex,element:r,props:i};r=T.ObjectUtils.getJSXElement(i.icon,e)}return r})(),ew=(()=>{let{strength:e,width:a}=V||{strength:"",width:"0%"},r=T.ObjectUtils.getJSXElement(i.header,i),n=T.ObjectUtils.getJSXElement(i.footer,i),o=l({className:ee("panel",{context:s}),style:i.panelStyle,onClick:en},Q("panel")),d=l({className:ee("meter")},Q("meter")),c=l({className:ee("meterLabel",{strength:e}),style:{width:a}},Q("meterLabel")),p=l({className:ee("info",{strength:e})},Q("info")),m=i.content?T.ObjectUtils.getJSXElement(i.content,i):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{...d,children:(0,t.jsx)("div",{...c})}),(0,t.jsx)("div",{...p,children:H})]}),f=l({classNames:ee("transition"),in:O,timeout:{enter:120,exit:100},options:i.transitionOptions,unmountOnExit:!0,onEnter:eu,onEntered:em,onExit:ef,onExited:eh},Q("transition")),h=(0,t.jsx)(u.CSSTransition,{nodeRef:Y,...f,children:(0,t.jsxs)("div",{ref:Y,...o,children:[r,m,n]})});return(0,t.jsx)(D.Portal,{element:h,appendTo:i.appendTo})})(),ey=l({ref:X,id:i.id,className:(0,k.classNames)(i.className,ee("root",{isFilled:er,focusedState:K})),style:i.style},Q("root")),ej=l({ref:J,id:i.inputId,autoComplete:i.autoComplete,...eg,className:(0,k.classNames)(i.inputClassName,ee("input")),onBlur:e=>{B(!1),i.feedback&&ec(),i.onBlur&&i.onBlur(e)},onFocus:e=>{B(!0),i.feedback&&ed(),i.onFocus&&i.onFocus(e)},onInput:(e,t)=>{i.onInput&&i.onInput(e,t),i.onChange||(T.ObjectUtils.isNotEmpty(e.target.value)?I.DomHandler.addClass(X.current,"p-inputwrapper-filled"):I.DomHandler.removeClass(X.current,"p-inputwrapper-filled"))},onKeyUp:e=>{let t=e.code;i.feedback&&t&&"Escape"!==t&&!O&&ed(),i.onKeyUp&&i.onKeyUp(e)},invalid:i.invalid,variant:i.variant,style:i.inputStyle,unstyled:i.unstyled,tabIndex:i.tabIndex||"0",tooltip:i.tooltip,tooltipOptions:i.tooltipOptions,type:$,value:i.value,__parentMetadata:{parent:q}},Q("input")),eC=(0,t.jsx)(S.InputText,{...ej});return eb&&(eC=(0,t.jsxs)(w.IconField,{className:ee("iconField"),pt:Q("iconField"),__parentMetadata:{parent:q},children:[eC,(0,t.jsx)(P.InputIcon,{className:ee("inputIcon"),pt:Q("inputIcon"),__parentMetadata:{parent:q},children:eb})]})),(0,t.jsxs)("div",{...ey,children:[eC,ew]})}));function O(e){let[a,l]=(0,n.useState)(""),r={basic:`
<Password value={value} onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} />
        `,javascript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} feedback={false} tabIndex={1} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Password is used as a controlled component with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties. Strength meter is enabled by default so ",(0,t.jsx)("i",{children:"feedback"})," needs to be set as false for a basic password input."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(F,{value:a,onChange:e=>l(e.target.value),feedback:!1,tabIndex:1})}),(0,t.jsx)(s.DocSectionCode,{code:r})]})}function _(e){let a={basic:`
<Password disabled placeholder="Disabled" />
        `,javascript:`
import React from "react";
import { Password } from 'primereact/password';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Password disabled placeholder="Disabled" />
        </div>
    )
}
        `,typescript:`
import React from "react";
import { Password } from 'primereact/password';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Password disabled placeholder="Disabled" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(F,{disabled:!0,placeholder:"Disabled"})}),(0,t.jsx)(s.DocSectionCode,{code:a})]})}function V(e){let[a,l]=(0,n.useState)(""),r={basic:`
<Password variant="filled" value={value} onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} />
        `,javascript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function FilledDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password variant="filled" value={value} onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function FilledDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <Password variant="filled" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} feedback={false} tabIndex={1} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specify the ",(0,t.jsx)("i",{children:"variant"})," property as ",(0,t.jsx)("i",{children:"filled"})," to display the component with a higher visual emphasis than the default ",(0,t.jsx)("i",{children:"outlined"})," style."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(F,{variant:"filled",value:a,onChange:e=>l(e.target.value),feedback:!1,tabIndex:1})}),(0,t.jsx)(s.DocSectionCode,{code:r})]})}F.displayName="Password";var A=e.i(97776),H=e.i(41158);function U(e){let[a,l]=(0,n.useState)(""),r={basic:`
<FloatLabel>
    <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} />
    <label htmlFor="password">Password</label>
</FloatLabel>
        `,javascript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';

export default function FloatLabelDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="password">Password</label>
            </FloatLabel>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <Password inputId="password" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
                <label htmlFor="password">Password</label>
            </FloatLabel>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A floating label appears on top of the input field when focused. Visit ",(0,t.jsx)(H.default,{href:"/floatlabel",children:"FloatLabel"})," documentation for more information."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)(A.FloatLabel,{children:[(0,t.jsx)(F,{inputId:"password",value:a,onChange:e=>l(e.target.value)}),(0,t.jsx)("label",{htmlFor:"password",children:"Password"})]})}),(0,t.jsx)(s.DocSectionCode,{code:r})]})}function K(e){let a={basic:`
import { Password } from 'primereact/password';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)(s.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function B(e){let a={basic:`
<Password invalid />
        `,javascript:`
import React from "react";
import { Password } from 'primereact/password';

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <Password invalid />
        </div>
    )
}
        `,typescript:`
import React from "react";
import { Password } from 'primereact/password';

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <Password invalid />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(F,{invalid:!0})}),(0,t.jsx)(s.DocSectionCode,{code:a})]})}function z(e){let[a,l]=(0,n.useState)(""),r={basic:`
<Password value={value} onChange={(e) => setValue(e.target.value)}
    promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password"/>
        `,javascript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function LocaleDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)}
                promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password"/>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function LocaleDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} 
                promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password"/>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Labels are translated at component level by ",(0,t.jsx)("i",{children:"promptLabel"}),", ",(0,t.jsx)("i",{children:"weakLabel"}),", ",(0,t.jsx)("i",{children:"mediumLabel"})," and ",(0,t.jsx)("i",{children:"strongLabel"})," properties. In order to apply global translations for all Password components in the application, refer to the ",(0,t.jsx)(H.default,{href:"/locale",children:"Locale API"}),"."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(F,{value:a,onChange:e=>l(e.target.value),promptLabel:"Choose a password",weakLabel:"Too simple",mediumLabel:"Average complexity",strongLabel:"Complex password"})}),(0,t.jsx)(s.DocSectionCode,{code:r})]})}function Z(e){let[a,l]=(0,n.useState)(""),r={basic:`
<Password value={value} onChange={(e) => setValue(e.target.value)} />
        `,javascript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function MeterDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function MeterDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Strength meter is displayed as a popup while a value is being entered."})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(F,{value:a,onChange:e=>l(e.target.value)})}),(0,t.jsx)(s.DocSectionCode,{code:r})]})}let X=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/password.jpg",alt:"password"})})]});var Y=e.i(7869);function J(e){let[a,l]=(0,n.useState)(""),r=(0,t.jsx)("div",{className:"font-bold mb-3",children:"Pick a password"}),o=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Y.Divider,{}),(0,t.jsx)("p",{className:"mt-2",children:"Suggestions"}),(0,t.jsxs)("ul",{className:"pl-2 ml-2 mt-0 line-height-3",children:[(0,t.jsx)("li",{children:"At least one lowercase"}),(0,t.jsx)("li",{children:"At least one uppercase"}),(0,t.jsx)("li",{children:"At least one numeric"}),(0,t.jsx)("li",{children:"Minimum 8 characters"})]})]}),d={basic:`
<Password value={value} onChange={(e) => setValue(e.target.value)} header={header} footer={footer} />
        `,javascript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';

export default function TemplateDemo() {
    const [value, setValue] = useState('');
    const header = <div className="font-bold mb-3">Pick a password</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} header={header} footer={footer} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';

export default function TemplateDemo() {
    const [value, setValue] = useState<string>('');
    const header = <div className="font-bold mb-3">Pick a password</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} header={header} footer={footer} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Custom content is placed inside the popup using ",(0,t.jsx)("i",{children:"header"})," and ",(0,t.jsx)("i",{children:"footer"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(F,{value:a,onChange:e=>l(e.target.value),header:r,footer:o})}),(0,t.jsx)(s.DocSectionCode,{code:d})]})}function W(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-password"}),(0,t.jsx)("td",{children:"Container element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-password-input"}),(0,t.jsx)("td",{children:"Input Element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-password-panel"}),(0,t.jsx)("td",{children:"Container of password panel"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-password-meter"}),(0,t.jsx)("td",{children:"Meter element of password strength"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-password-info"}),(0,t.jsx)("td",{children:"Text to display strength"})]})]})]})})]})}function G(e){let a={basic:`
const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

const Tailwind = {
    password: {
        root: ({ props }) => ({
            className: classNames('inline-flex relative', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        panel: 'p-5 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 shadow-md rounded-md',
        meter: 'mb-2 bg-gray-300 dark:bg-gray-700 h-3',
        meterlabel: ({ state, props }) => ({
            className: classNames(
                'transition-width duration-1000 ease-in-out h-full',
                {
                    'bg-red-500': state.meter?.strength == 'weak',
                    'bg-orange-500': state.meter?.strength == 'medium',
                    'bg-green-500': state.meter?.strength == 'strong'
                },
                { 'pr-[2.5rem] ': props.toggleMask }
            )
        }),
        showicon: {
            className: classNames('absolute top-1/2 -mt-2', 'right-3 text-gray-600 dark:text-white/70')
        },
        hideicon: {
            className: classNames('absolute top-1/2 -mt-2', 'right-3 text-gray-600 dark:text-white/70')
        },
        inputIcon: {
            root: 'mt-0'
        },
        transition: TRANSITIONS.overlay
    }
}
    `},l={javascript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function UnstyledDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(H.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(s.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(s.DocSectionCode,{code:l,embedded:!0})]})})}function $(e){let[a,l]=(0,n.useState)(""),r={basic:`
<Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
        `,javascript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function ToggleMaskDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function ToggleMaskDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} toggleMask />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"toggleMask"})," is present, an icon is displayed to show the value as plain text."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(F,{value:a,onChange:e=>l(e.target.value),toggleMask:!0})}),(0,t.jsx)(s.DocSectionCode,{code:r})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:X},{id:"pt.password.options",label:"Password PT Options",component:a.default}];return(0,t.jsx)(l.DocComponent,{title:"React Password Component",header:"Password",description:"Password displays strength indicator for password fields.",componentDocs:[{id:"import",label:"Import",component:K},{id:"basic",label:"Basic",component:O},{id:"meter",label:"Meter",component:Z},{id:"locale",label:"Locale",component:z},{id:"togglemask",label:"Toggle Mask",component:$},{id:"template",label:"Template",component:J},{id:"floatlabel",label:"Float Label",component:U},{id:"filled",label:"Filled",component:V},{id:"invalid",label:"Invalid",component:B},{id:"disabled",label:"Disabled",component:_},{id:"accessibility",label:"Accessibility",component:r}],apiDocs:["Password"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:W},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:G}]}]})}],74064)},19303,(e,t,a)=>{let l="/password";(window.__NEXT_P=window.__NEXT_P||[]).push([l,()=>e.r(74064)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([l])})}]);