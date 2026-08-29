(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,10197,e=>{"use strict";var a=e.i(91398),t=e.i(91788),r=e.i(10836),l=e.i(15498),i=e.i(60150),s=e.i(45543),n=e.i(75366),o=e.i(51551),c=e.i(3935);let m=`
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
`,p=l.ComponentBase.extend({defaultProps:{__TYPE:"Avatar",className:null,icon:null,image:null,imageAlt:"avatar",imageFallback:"default",label:null,onImageError:null,shape:"square",size:"normal",style:null,template:null,children:void 0},css:{classes:{root:({props:e,state:a})=>(0,c.classNames)("p-avatar p-component",{"p-avatar-image":o.ObjectUtils.isNotEmpty(e.image)&&!a.imageFailed,"p-avatar-circle":"circle"===e.shape,"p-avatar-lg":"large"===e.size,"p-avatar-xl":"xlarge"===e.size,"p-avatar-clickable":!!e.onClick}),label:"p-avatar-text",icon:"p-avatar-icon"},styles:m}}),g=t.forwardRef((e,m)=>{let g=(0,i.useMergeProps)(),u=t.useContext(r.PrimeReactContext),v=p.getProps(e,u),d=t.useRef(null),[h,C]=t.useState(!1),[f,b]=t.useState(!1),{ptm:x,cx:w,isUnstyled:I}=p.setMetaData({props:v,state:{imageFailed:h,nested:f}});(0,l.useHandleStyle)(p.css.styles,I,{name:"avatar"});let j=e=>{"default"===v.imageFallback?v.onImageError||(C(!0),e.target.src=null):e.target.src=v.imageFallback,v.onImageError&&v.onImageError(e)};t.useEffect(()=>{b(s.DomHandler.isAttributeEquals(d.current.parentElement,"data-pc-name","avatargroup"))},[]),t.useImperativeHandle(m,()=>({props:v,getElement:()=>d.current}));let y=g({ref:d,style:v.style,className:(0,c.classNames)(v.className,w("root",{imageFailed:h}))},p.getOtherProps(v),x("root")),E=v.template?o.ObjectUtils.getJSXElement(v.template,v):(()=>{if(o.ObjectUtils.isNotEmpty(v.image)&&!h){let e=g({src:v.image,onError:j},x("image"));return(0,a.jsx)("img",{alt:v.imageAlt,...e})}if(v.label){let e=g({className:w("label")},x("label"));return(0,a.jsx)("span",{...e,children:v.label})}if(v.icon){let e=g({className:w("icon")},x("icon"));return n.IconUtils.getJSXIcon(v.icon,{...e},{props:v})}return null})();return(0,a.jsxs)("div",{...y,children:[E,v.children]})});g.displayName="Avatar",e.s(["Avatar",0,g],10197)},48214,e=>{"use strict";var a=e.i(91398),t=e.i(91788),r=e.i(85850);let l=t.memo(t.forwardRef((e,t)=>{let l=r.IconBase.getPTI(e);return(0,a.jsx)("svg",{ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,a.jsx)("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"})})}));l.displayName="ChevronDownIcon",e.s(["ChevronDownIcon",0,l])},75676,e=>{"use strict";var a=e.i(91398),t=e.i(91788),r=e.i(85850);let l=t.memo(t.forwardRef((e,t)=>{let l=r.IconBase.getPTI(e);return(0,a.jsx)("svg",{ref:t,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,a.jsx)("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"})})}));l.displayName="ChevronRightIcon",e.s(["ChevronRightIcon",0,l])},28805,e=>{e.v(a=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(a=>e.l(a))).then(()=>a(48545)))},48761,e=>{e.v(a=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(a=>e.l(a))).then(()=>a(25050)))}]);