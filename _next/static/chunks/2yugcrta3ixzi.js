(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),i=e.i(91788);e.s(["CodeHighlight",0,function(e){let s=(0,i.useRef)(),a=`language-${e.lang||"jsx"}`;return(0,i.useEffect)(()=>{window.Prism.highlightElement(s.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:s,className:a,children:[e.children," "]})})}])},30164,e=>{"use strict";var t=e.i(91398),i=e.i(91788),s=e.i(10836),a=e.i(15498),o=e.i(60150),r=e.i(20484),l=e.i(64691),n=e.i(45543),c=e.i(51551),d=e.i(3935);let h=a.ComponentBase.extend({defaultProps:{__TYPE:"InputSwitch",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,id:null,inputId:null,inputRef:null,invalid:!1,name:null,onBlur:null,onChange:null,onFocus:null,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,children:void 0},css:{classes:{root:({props:e,checked:t})=>(0,d.classNames)("p-inputswitch p-component",{"p-highlight":t,"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-inputswitch-input",slider:"p-inputswitch-slider"}}}),u=i.memo(i.forwardRef((e,u)=>{let p=(0,o.useMergeProps)(),m=i.useContext(s.PrimeReactContext),y=h.getProps(e,m),{ptm:f,cx:b,isUnstyled:S}=h.setMetaData({props:y});(0,a.useHandleStyle)(h.css.styles,S,{name:"inputswitch"});let x=i.useRef(null),g=i.useRef(y.inputRef),w=y.checked===y.trueValue;i.useImperativeHandle(u,()=>({props:y,focus:()=>n.DomHandler.focus(g.current),getElement:()=>x.current,getInput:()=>g.current})),i.useEffect(()=>{c.ObjectUtils.combinedRefs(g,y.inputRef)},[g,y.inputRef]),(0,r.useMountEffect)(()=>{y.autoFocus&&n.DomHandler.focus(g.current,y.autoFocus)});let j=c.ObjectUtils.isNotEmpty(y.tooltip),C=h.getOtherProps(y),v=c.ObjectUtils.reduceKeys(C,n.DomHandler.ARIA_PROPS),k=p({className:(0,d.classNames)(y.className,b("root",{checked:w})),style:y.style,role:"checkbox","aria-checked":w,"data-p-highlight":w,"data-p-disabled":y.disabled},C,f("root")),R=p({type:"checkbox",id:y.inputId,name:y.name,checked:w,onChange:e=>{if(y.onChange){let t=w?y.falseValue:y.trueValue;y.onChange({originalEvent:e,value:t,stopPropagation:()=>{e?.stopPropagation()},preventDefault:()=>{e?.preventDefault()},target:{name:y.name,id:y.id,value:t}})}},onFocus:e=>{y?.onFocus?.(e)},onBlur:e=>{y?.onBlur?.(e)},disabled:y.disabled,role:"switch",tabIndex:y.tabIndex,"aria-checked":w,className:b("input"),...v},f("input")),P=p({className:b("slider")},f("slider"));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{id:y.id,ref:x,...k,children:[(0,t.jsx)("input",{ref:g,...R}),(0,t.jsx)("span",{...P})]}),j&&(0,t.jsx)(l.Tooltip,{target:x,content:y.tooltip,pt:f("tooltip"),...y.tooltipOptions})]})}));u.displayName="InputSwitch",e.s(["InputSwitch",0,u],30164)},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},3828,(e,t,i)=>{t.exports=e.r(26990)},10242,e=>{"use strict";var t=e.i(91398),i=e.i(58678),s=e.i(71864),a=e.i(38076),o=e.i(5180),r=e.i(28137),l=e.i(30164),n=e.i(41158),c=e.i(91788);function d(e){let[i,s]=(0,c.useState)(!1),a=`
        .my-switch-slider {
            border-radius: 0;
        }

        .my-switch-slider:before {
            border-radius: 0;
        }
    `,d={basic:`
import React, { useState } from 'react';
import { InputSwitch } from 'primereact/inputswitch';

export function SpecificityDemo() {
    const [checked, setChecked] = useState(false);
    const css = \`
        .my-switch-slider {
            border-radius: 0;
        }

        .my-switch-slider:before {
            border-radius: 0;
        }
    \`;

    return (
        <div className="card">
            <InputSwitch
                checked={checked}
                onChange={(e) => setChecked(e.value)}
                pt={{
                    slider: {
                        className: 'my-switch-slider'
                    }
                }}
            />
            <style>{css}</style>
        </div>
    );
}
`};return(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsx)("p",{className:"notification",children:"A CSS layer is utilized in styled mode only, in unstyled mode the built-in CSS classes are not included and as a result no layer is defined. This documentation only applies to styled mode."}),(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("i",{children:"@layer"})," is a standard CSS feature to define cascade layers for a customizable order of precedence. If you need to become more familiar with layers, visit the documentation at ",(0,t.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@layer",children:"MDN"})," to begin with. In styled mode, PrimeReact wraps the built-in style classes under the ",(0,t.jsx)("i",{children:"primereact"})," cascade layer to make the library styles easy to override. CSS in your app without a layer has the highest CSS specificity, so you'll be able to override styles regardless of the location or how strong a class is written."]}),(0,t.jsxs)("p",{children:["For example, let's assume you need to remove the rounded borders of the InputSwitch component defined by the theme in use. In order to achieve this, ",(0,t.jsx)("i",{children:".p-inputswitch .p-inputswitch-slider"})," selector needs to be overriden. Without the layers, we'd have to write a stronger css or use ",(0,t.jsx)("i",{children:"!important"})," however, with layers, this does not present an issue as your CSS can always override PrimeReact with a more straightforward class name such as ",(0,t.jsx)("i",{children:"my-switch-slider"}),". Another advantage of this approach is that it does not force you to figure out the built-in class names of the components."]}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(l.InputSwitch,{checked:i,onChange:e=>s(e.value),pt:{slider:{className:"my-switch-slider"}}}),(0,t.jsx)("style",{children:a})]}),(0,t.jsx)(o.DocSectionCode,{code:d,hideToggleCode:!0,hideStackBlitz:!0}),(0,t.jsxs)("p",{children:["Layers also make it possible to use CSS Modules, view the ",(0,t.jsx)(n.default,{href:"/theming/#cssmodules",children:"CSS Modules"})," guide for examples."]})]})}function h(e){let i={basic:`
/* Order */
@layer reset, primereact;

/* Reset CSS */
@layer reset {
    button,
    input {
        /* CSS to Reset */
    }
}
`};return(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Ease of customization may present an issue if you have global styles on HTML elements like inputs and buttons that are also utilized by PrimeReact because global styles with a broader scope e.g. ",(0,t.jsx)("i",{children:"button "})," and no layer always override the PrimeReact components leading to unexpected results. A common use case for global styles applying to standard HTML elements is CSS reset utilities to remove the default styling of the browsers. In this case, best practice is wrapping your CSS in a layer like ",(0,t.jsx)("i",{children:"reset"})," and make sure ",(0,t.jsx)("i",{children:"primereact"})," comes after your layer since layers defined after has higher precedence. This way, your Reset CSS does not get in the way of PrimeReact components."]}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,importCode:!0,hideStackBlitz:!0})]})}function u(e){let i={basic:`
@layer tailwind-base, primereact, tailwind-utilities;

@layer tailwind-base {
    @tailwind base;
}

@layer tailwind-utilities {
    @tailwind components;
    @tailwind utilities;
}
`};return(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Tailwind CSS includes a reset utility in base called ",(0,t.jsx)("a",{href:"https://tailwindcss.com/docs/preflight",target:"_blank",rel:"noopener noreferrer",children:"preflight"}),". If you are using this feature, wrap the base and utilities in separate layers and make sure primereact layer comes after the base."," "]}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,importCode:!0,hideStackBlitz:!0})]})}function p(e){let i={basic:`
@layer bootstrap-reboot, primereact;

@import "bootstrap-reboot.css" layer(bootstrap-rebooot);
`};return(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Bootstrap has a ",(0,t.jsx)("i",{children:"reboot"})," utility to reset the CSS of the standard elements. If you are including this utility, you may give it a layer while importing it."]}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,importCode:!0,hideStackBlitz:!0})]})}function m(e){let i={basic:`
@layer normalize, primereact;

@import "normalize.css" layer(normalize-reset);
`};return(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsx)("p",{children:"Normalize is another utility to reset CSS of the standard elements. While importing the CSS file, assign it to a layer and define the layer order with primereact coming after the normalized layer."}),(0,t.jsx)(o.DocSectionCode,{code:i,hideToggleCode:!0,importCode:!0,hideStackBlitz:!0})]})}e.s(["default",0,()=>{let e=[{id:"specificity",label:"Specificity",component:d},{id:"reset",label:"Reset",component:h},{id:"libraries",label:"Libraries",description:"Compatibility between PrimeReact and CSS libraries.",children:[{id:"tailwind",label:"Tailwind CSS",component:u},{id:"bootstrap",label:"Bootstrap",component:p},{id:"normalize",label:"Normalize",component:m}]}];return(0,t.jsxs)("div",{children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"CSS Layer - PrimeReact"}),(0,t.jsx)("meta",{name:"description",content:"Best practices for the PrimeReact cascade layer in styled mode."})]}),(0,t.jsxs)("div",{className:"doc",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:"CSS Layer"}),(0,t.jsx)("p",{children:"Best practices for the PrimeReact cascade layer in styled mode."})]}),(0,t.jsx)(a.DocSections,{docs:e})]}),(0,t.jsx)(s.DocSectionNav,{docs:e})]})]})}],10242)},4276,(e,t,i)=>{let s="/guides/csslayer";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(10242)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})}]);