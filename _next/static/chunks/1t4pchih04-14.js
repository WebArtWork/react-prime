(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,97776,e=>{"use strict";var l=e.i(91398),a=e.i(91788),t=e.i(10836),o=e.i(15498),p=e.i(60150),i=e.i(3935),s=e.i(51551);let n=`
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
}`,r=o.ComponentBase.extend({defaultProps:{__TYPE:"FloatLabel",children:void 0},css:{classes:{root:"p-float-label"},styles:n}}),f=a.memo(a.forwardRef((e,n)=>{let f=(0,p.useMergeProps)(),c=a.useContext(t.PrimeReactContext),b=r.getProps(e,c),u=a.useRef(n),{ptm:h,cx:d,isUnstyled:m}=r.setMetaData({props:b});(0,o.useHandleStyle)(r.css.styles,m,{name:"floatlabel"}),a.useEffect(()=>{s.ObjectUtils.combinedRefs(u,n)},[u,n]);let x=f({ref:u,className:(0,i.classNames)(d("root"))},r.getOtherProps(b),h("root"));return(0,l.jsx)("span",{...x,children:b.children})}));f.displayName="FloatLabel",e.s(["FloatLabel",0,f],97776)},28805,e=>{e.v(l=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(l=>e.l(l))).then(()=>l(48545)))},48761,e=>{e.v(l=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(l=>e.l(l))).then(()=>l(25050)))}]);