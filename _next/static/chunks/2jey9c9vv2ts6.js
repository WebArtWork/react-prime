(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,36785,e=>{"use strict";var r=e.i(91788),o=e.i(45543),t=e.i(20728),l=e.i(26295),n=e.i(35048),i=e.i(4632);e.s(["useOverlayListener",0,({target:e,overlay:s,listener:c,when:a=!0,type:d="click"})=>{let p=r.useRef(null),u=r.useRef(null),[h,m]=(0,t.useEventListener)({target:"window",type:d,listener:e=>{c&&c(e,{type:"outside",valid:3!==e.which&&C(e)})},when:a}),[x,f]=(0,n.useResizeListener)({listener:e=>{c&&c(e,{type:"resize",valid:!o.DomHandler.isTouchDevice()})},when:a}),[b,g]=(0,t.useEventListener)({target:"window",type:"orientationchange",listener:e=>{c&&c(e,{type:"orientationchange",valid:!0})},when:a}),[v,j]=(0,l.useOverlayScrollListener)({target:e,listener:e=>{c&&c(e,{type:"scroll",valid:!0})},when:a}),C=e=>p.current&&!(p.current.isSameNode(e.target)||p.current.contains(e.target)||u.current&&u.current.contains(e.target)),k=()=>{m(),f(),g(),j()};return r.useEffect(()=>{a?(p.current=o.DomHandler.getTargetElement(e),u.current=o.DomHandler.getTargetElement(s)):(k(),p.current=u.current=null)},[e,s,a]),(0,i.useUnmountEffect)(()=>{k()}),[()=>{h(),x(),b(),v()},k]}])},81201,e=>{"use strict";let r=(0,e.i(44129).EventBus)();e.s(["OverlayService",0,r])},44129,e=>{"use strict";e.s(["EventBus",0,function(){let e=new Map;return{on(r,o){let t=e.get(r);t?t.push(o):t=[o],e.set(r,t)},off(r,o){let t=e.get(r);t&&t.splice(t.indexOf(o)>>>0,1)},emit(r,o){let t=e.get(r);t&&t.slice().forEach(e=>e(o))}}}],44129)},17541,e=>{"use strict";var r=e.i(91398),o=e.i(28137);function t(){return(0,r.jsxs)(o.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,r.jsx)("h3",{children:"Screen Reader"}),(0,r.jsxs)("p",{children:["Specification does not cover a color picker ",(0,r.jsx)("a",{href:"https://github.com/w3c/aria/issues/930",children:"yet"})," and using a semantic native color picker is not consistent across browsers so currently component is not compatible with screen readers. In the upcoming versions, text fields will be introduced below the slider section to be able to pick a color using accessible text boxes in hsl, rgba and hex formats."]}),(0,r.jsx)("h3",{children:"Closed State Keyboard Support of Popup ColorPicker"}),(0,r.jsx)("div",{className:"doc-tablewrapper",children:(0,r.jsxs)("table",{className:"doc-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Key"}),(0,r.jsx)("th",{children:"Function"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("i",{children:"tab"})}),(0,r.jsx)("td",{children:"Moves focus to the color picker button."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("i",{children:"space"})}),(0,r.jsx)("td",{children:"Opens the popup and moves focus to the color slider."})]})]})]})}),(0,r.jsx)("h3",{children:"Popup Keyboard Support"}),(0,r.jsx)("div",{className:"doc-tablewrapper",children:(0,r.jsxs)("table",{className:"doc-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Key"}),(0,r.jsx)("th",{children:"Function"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("i",{children:"enter"})}),(0,r.jsx)("td",{children:"Selects the color and closes the popup."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("i",{children:"space"})}),(0,r.jsx)("td",{children:"Selects the color and closes the popup."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("i",{children:"escape"})}),(0,r.jsx)("td",{children:"Closes the popup, moves focus to the input."})]})]})]})}),(0,r.jsx)("h3",{children:"Color Picker Slider"}),(0,r.jsx)("div",{className:"doc-tablewrapper",children:(0,r.jsxs)("table",{className:"doc-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Key"}),(0,r.jsx)("th",{children:"Function"})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("i",{children:"arrow keys"})}),(0,r.jsx)("td",{children:"Changes color."})]})})]})}),(0,r.jsx)("h3",{children:"Hue Slider"}),(0,r.jsx)("div",{className:"doc-tablewrapper",children:(0,r.jsxs)("table",{className:"doc-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Key"}),(0,r.jsx)("th",{children:"Function"})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)("span",{className:"inline-flex flex-column",children:[(0,r.jsx)("i",{className:"mb-1",children:"up arrow"}),(0,r.jsx)("i",{children:"down arrow"})]})}),(0,r.jsx)("td",{children:"Changes hue."})]})})]})})]})}var l=e.i(5180),n=e.i(91788),i=e.i(4242),s=e.i(10836),c=e.i(15498),a=e.i(20728),d=e.i(60150),p=e.i(20484),u=e.i(36785),h=e.i(4632),m=e.i(71834),x=e.i(83955),f=e.i(92052),b=e.i(81201),g=e.i(64691),v=e.i(45543),j=e.i(51551),C=e.i(63957),k=e.i(3935);let y=`
@layer primereact {
    .p-colorpicker {
        display: inline-block;
    }
    
    .p-colorpicker-dragging {
        cursor: pointer;
    }
    
    .p-colorpicker-overlay {
        position: relative;
    }
    
    .p-colorpicker-panel {
        position: relative;
        width: 193px;
        height: 166px;
    }
    
    .p-colorpicker-overlay-panel {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-colorpicker-preview {
        cursor: pointer;
    }
    
    .p-colorpicker-panel .p-colorpicker-content {
        position: relative;
    }
    
    .p-colorpicker-panel .p-colorpicker-color-selector {
        width: 150px;
        height: 150px;
        top: 8px;
        left: 8px;
        position: absolute;
    }
    
    .p-colorpicker-panel .p-colorpicker-color {
        width: 150px;
        height: 150px;
    }
    
    .p-colorpicker-panel .p-colorpicker-color-handle {
        position: absolute;
        top: 0px;
        left: 150px;
        border-radius: 100%;
        width: 10px;
        height: 10px;
        border-width: 1px;
        border-style: solid;
        margin: -5px 0 0 -5px;
        cursor: pointer;
        opacity: 0.85;
    }
    
    .p-colorpicker-panel .p-colorpicker-hue {
        width: 17px;
        height: 150px;
        top: 8px;
        left: 167px;
        position: absolute;
        opacity: 0.85;
    }
    
    .p-colorpicker-panel .p-colorpicker-hue-handle {
        position: absolute;
        top: 150px;
        left: 0px;
        width: 21px;
        margin-left: -2px;
        margin-top: -5px;
        height: 10px;
        border-width: 2px;
        border-style: solid;
        opacity: 0.85;
        cursor: pointer;
    }
    
    .p-colorpicker-panel .p-colorpicker-color {
        background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)
    }
    .p-colorpicker-panel .p-colorpicker-hue {
        background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)
    }
}
`,N=c.ComponentBase.extend({defaultProps:{__TYPE:"ColorPicker",appendTo:null,autoFocus:!1,children:void 0,className:null,defaultColor:"ff0000",disabled:!1,format:"hex",id:null,inline:!1,inputClassName:null,inputId:null,inputRef:null,inputStyle:null,onChange:null,onHide:null,onShow:null,panelClassName:null,panelStyle:null,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,transitionOptions:null,value:null},css:{classes:{root:({props:e})=>(0,k.classNames)("p-colorpicker p-component",{"p-colorpicker-overlay":!e.inline}),input:({props:e})=>(0,k.classNames)("p-colorpicker-preview p-inputtext",e.inputClassName,{"p-disabled":e.disabled}),panel:({panelProps:e,context:r})=>(0,k.classNames)("p-colorpicker-panel",e.panelClassName,{"p-colorpicker-overlay-panel":!e.inline,"p-disabled":e.disabled,"p-input-filled":r&&"filled"===r.inputStyle||"filled"===i.default.inputStyle,"p-ripple-disabled":r&&!1===r.ripple||!1===i.default.ripple}),content:"p-colorpicker-content",hueHandle:"p-colorpicker-hue-handle",hue:"p-colorpicker-hue",colorHandle:"p-colorpicker-color-handle",color:"p-colorpicker-color",selector:"p-colorpicker-color-selector",transition:"p-connected-overlay"},styles:y}});var S=e.i(87350),w=e.i(85971);let P=n.forwardRef((e,o)=>{let t,l,i=(0,d.useMergeProps)(),c=n.useContext(s.PrimeReactContext),{ptm:a,cx:p}=e,u=(t=i({className:p("panel",{panelProps:e,context:c}),style:e.panelStyle,onClick:e.onClick,"data-pr-is-overlay":!0},a("panel",{hostName:e.hostName})),l=i({classNames:p("transition"),in:e.in,timeout:{enter:120,exit:100},options:e.transitionOptions,unmountOnExit:!0,onEnter:e.onEnter,onEntered:e.onEntered,onExit:e.onExit,onExited:e.onExited},a("transition",{hostName:e.hostName})),(0,r.jsx)(S.CSSTransition,{nodeRef:o,...l,children:(0,r.jsx)("div",{ref:o,...t,children:e.children})}));return e.inline?u:(0,r.jsx)(w.Portal,{element:u,appendTo:e.appendTo})});P.displayName="ColorPickerPanel";let E=n.memo(n.forwardRef((e,o)=>{let t,l,y,S,w,E,T,D,R=(0,d.useMergeProps)(),H=n.useContext(s.PrimeReactContext),B=N.getProps(e,H),[O,I]=n.useState(!1),{ptm:M,cx:F,isUnstyled:_}=N.setMetaData({props:B,state:{overlayVisible:O}}),X=O&&B.closeOnEscape,G=(0,f.useDisplayOrder)("overlay-panel",X);(0,c.useHandleStyle)(N.css.styles,_,{name:"colorpicker"}),(0,x.useGlobalOnEscapeKey)({callback:()=>{ev()},when:O&&G,priority:[x.ESC_KEY_HANDLING_PRIORITIES.OVERLAY_PANEL,G]});let L=n.useRef(null),U=n.useRef(null),A=n.useRef(B.inputRef),K=n.useRef(null),Y=n.useRef(null),z=n.useRef(null),J=n.useRef(null),Z=n.useRef(!1),W=n.useRef(null),V=n.useRef(!1),[q,Q]=(0,u.useOverlayListener)({target:L,overlay:U,listener:(e,{valid:r,type:o})=>{r&&(H.hideOverlaysOnDocumentScrolling||"outside"===o?ev():v.DomHandler.isDocument(e.target)||eT())},when:O}),[$,ee]=(0,a.useEventListener)({type:"mousemove",listener:e=>{V.current&&ed(e),Z.current&&el(e)}}),[er,eo]=(0,a.useEventListener)({type:"mouseup",listener:()=>{V.current=Z.current=!1,v.DomHandler.removeClass(L.current,"p-colorpicker-dragging"),ee(),eo()}}),et=e=>{B.disabled||(Z.current=!0,el(e),_||v.DomHandler.addClass(L.current,"p-colorpicker-dragging"),e.preventDefault())},el=e=>{let r=J.current.getBoundingClientRect().top+(window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0);W.current=ey({h:Math.floor(360*(150-Math.max(0,Math.min(150,(void 0!==e.pageY?e.pageY:void 0!==e.changedTouches?e.changedTouches[0].pageY:0)-r)))/150),s:W.current.s,b:W.current.b}),em(),ef(),ep()},en=e=>{B.disabled||(V.current=!0,ed(e),_||v.DomHandler.addClass(L.current,"p-colorpicker-dragging"),e.preventDefault())},ei=e=>{V.current&&(ed(e),e.preventDefault()),Z.current&&(el(e),e.preventDefault())},es=()=>{V.current=!1,Z.current=!1,_||v.DomHandler.removeClass(L.current,"p-colorpicker-dragging"),ea()},ec=()=>{$(),er()},ea=()=>{ee(),eo()},ed=e=>{let r=K.current.getBoundingClientRect(),o=r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),t=r.left+document.body.scrollLeft,l=Math.floor(100*Math.max(0,Math.min(150,(e.pageX||e.changedTouches[0].pageX)-t))/150),n=Math.floor(100*(150-Math.max(0,Math.min(150,(e.pageY||e.changedTouches[0].pageY)-o)))/150);W.current=ey({h:W.current.h,s:l,b:n}),ex(),eb(),ep()},ep=()=>{switch(B.format){case"hex":eh(eP(W.current));break;case"rgb":eh(ew(W.current));break;case"hsb":eh(W.current)}},eu=e=>{W.current=(e=>{let r;if(e)switch(B.format){case"hex":r=eN(e);break;case"rgb":r=eS(e);break;case"hsb":r=e}else r=eN(B.defaultColor);return r})(e)},eh=e=>{B.onChange&&B.onChange({value:e,stopPropagation:()=>{},preventDefault:()=>{},target:{name:B.name,id:B.id,value:e}})},em=()=>{if(K.current){let e=ey({h:W.current.h,s:100,b:100});K.current.style.backgroundColor="#"+eP(e)}},ex=()=>{Y.current&&(Y.current.style.left=Math.floor(150*W.current.s/100)+"px",Y.current.style.top=Math.floor(150*(100-W.current.b)/100)+"px")},ef=()=>{z.current&&(z.current.style.top=Math.floor(150-150*W.current.h/360)+"px")},eb=()=>{A.current&&(A.current.style.backgroundColor="#"+eP(W.current))},eg=()=>{I(!0)},ev=()=>{I(!1)},ej=()=>{eC()},eC=()=>{O?ev():eg()},ek=e=>{switch(e.which){case 32:eC(),e.preventDefault();break;case 27:case 9:ev()}},ey=e=>({h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}),eN=e=>{let r;return eS({r:(r=parseInt(e.indexOf("#")>-1?e.substring(1):e,16))>>16,g:(65280&r)>>8,b:255&r})},eS=e=>{let r={h:0,s:0,b:0},o=Math.min(e.r,e.g,e.b),t=Math.max(e.r,e.g,e.b),l=t-o;return r.b=t,r.s=0!==t?255*l/t:0,0!==r.s?e.r===t?r.h=(e.g-e.b)/l:e.g===t?r.h=2+(e.b-e.r)/l:r.h=4+(e.r-e.g)/l:r.h=-1,r.h=60*r.h,r.h<0&&(r.h=r.h+360),r.s=r.s*(100/255),r.b=r.b*(100/255),r},ew=e=>{let r={r:null,g:null,b:null},o=Math.round(e.h),t=Math.round(255*e.s/100),l=Math.round(255*e.b/100);if(0===t)r={r:l,g:l,b:l};else{let e=(255-t)*l/255,n=o%60*(l-e)/60;360===o&&(o=0),o<60?(r.r=l,r.b=e,r.g=e+n):o<120?(r.g=l,r.b=e,r.r=l-n):o<180?(r.g=l,r.r=e,r.b=e+n):o<240?(r.b=l,r.r=e,r.g=l-n):o<300?(r.b=l,r.g=e,r.r=e+n):o<360?(r.r=l,r.g=e,r.b=l-n):(r.r=0,r.g=0,r.b=0)}return{r:Math.round(r.r),g:Math.round(r.g),b:Math.round(r.b)}},eP=e=>(e=>{let r=[e.r.toString(16),e.g.toString(16),e.b.toString(16)];for(let e in r)1===r[e].length&&(r[e]="0"+r[e]);return r.join("")})(ew(e)),eE=()=>{ef(),ex(),eb(),em()},eT=()=>{A.current&&v.DomHandler.alignOverlay(U.current,A.current.parentElement,B.appendTo||H&&H.appendTo||i.default.appendTo)};n.useImperativeHandle(o,()=>({props:B,show:eg,hide:ev,focus:()=>v.DomHandler.focus(A.current),getElement:()=>L.current,getOverlay:()=>U.current,getInput:()=>A.current})),n.useEffect(()=>{j.ObjectUtils.combinedRefs(A,B.inputRef)},[A,B.inputRef]),(0,p.useMountEffect)(()=>{eu(B.value),eE(),B.autoFocus&&v.DomHandler.focus(A.current,B.autoFocus),eT()}),(0,m.useUpdateEffect)(()=>{V.current||Z.current||eu(B.value)},[B.value]),(0,m.useUpdateEffect)(()=>{eE()}),(0,h.useUnmountEffect)(()=>{C.ZIndexUtils.clear(U.current)});let eD=j.ObjectUtils.isNotEmpty(B.tooltip),eR=(t=R({ref:K,className:F("selector"),onMouseDown:e=>{!B.disabled&&(ec(),en(e))},onTouchStart:e=>en(e),onTouchMove:e=>ei(e),onTouchEnd:es},M("selector")),l=R({className:F("color")},M("color")),y=R({ref:Y,className:F("colorHandle")},M("colorHandle")),S=(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{...l,children:(0,r.jsx)("div",{...y})})}),w=R({className:F("hue"),onMouseDown:e=>{!B.disabled&&(ec(),et(e))},onTouchStart:e=>et(e),onTouchMove:e=>ei(e),onTouchEnd:es},M("hue")),E=R({className:F("hueHandle")},M("hueHandle")),T=(0,r.jsx)("div",{ref:J,...w,children:(0,r.jsx)("div",{ref:z,...E})}),D=R({className:F("content")},M("content")),(0,r.jsxs)("div",{...D,children:[S,T]})),eH=(()=>{if(!B.inline){let e=N.getOtherProps(B),o=R({ref:A,type:"text",readOnly:!0,className:F("input"),style:B.inputStyle,id:B.inputId,tabIndex:B.tabIndex,disabled:B.disabled,onClick:ej,onKeyDown:ek,...e},M("input"));return(0,r.jsx)("input",{...o})}return null})(),eB=R({id:B.id,ref:L,style:B.style,className:(0,k.classNames)(B.className,F("root"))},N.getOtherProps(B),M("root"));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{...eB,children:[eH,(0,r.jsx)(P,{hostName:"ColorPicker",ref:U,appendTo:B.appendTo,inline:B.inline,disabled:B.disabled,panelStyle:B.panelStyle,panelClassName:B.panelClassName,onClick:e=>{B.inline||b.OverlayService.emit("overlay-click",{originalEvent:e,target:L.current})},in:B.inline||O,onEnter:()=>{let e=B.inline?void 0:{position:"absolute",top:"0",left:"0"};C.ZIndexUtils.set("overlay",U.current,H&&H.autoZIndex||i.default.autoZIndex,H&&H.zIndex.overlay||i.default.zIndex.overlay),v.DomHandler.addStyles(U.current,e),eT()},onEntered:()=>{q(),B.onShow&&B.onShow()},onExit:()=>{Q()},onExited:()=>{C.ZIndexUtils.clear(U.current),B.onHide&&B.onHide()},transitionOptions:B.transitionOptions,ptm:M,cx:F,children:eR})]}),eD&&(0,r.jsx)(g.Tooltip,{target:L,content:B.tooltip,pt:M("tooltip"),...B.tooltipOptions})]})}));function T(e){let[t,i]=(0,n.useState)(null),s={basic:`
<ColorPicker value={color} onChange={(e) => setColor(e.value)} />

        `,javascript:`
import React, { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function BasicDemo() {
    const [color, setColor] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { ColorPicker, ColorPickerChangeEvent } from 'primereact/colorpicker';

export default function BasicDemo() {
    const [color, setColor] = useState<string>(null);

    return (
        <div className="card flex justify-content-center">
            <ColorPicker value={color} onChange={(e: ColorPickerChangeEvent) => setColor(e.value)} />
        </div>
    )
}
        `};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.DocSectionText,{...e,children:(0,r.jsxs)("p",{children:["ColorPicker is used as a controlled input with ",(0,r.jsx)("i",{children:"value"})," and ",(0,r.jsx)("i",{children:"onChange"})," properties."]})}),(0,r.jsx)("div",{className:"card flex justify-content-center",children:(0,r.jsx)(E,{value:t,onChange:e=>i(e.value)})}),(0,r.jsx)(l.DocSectionCode,{code:s})]})}function D(e){let t={basic:`
<ColorPicker disabled />
        `,javascript:`
import React from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <ColorPicker disabled />
        </div>
    )
}
        `,typescript:`
import React from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <ColorPicker disabled />
        </div>
    )
}
        `};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.DocSectionText,{...e,children:(0,r.jsxs)("p",{children:["When ",(0,r.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,r.jsx)("div",{className:"card flex justify-content-center",children:(0,r.jsx)(E,{disabled:!0})}),(0,r.jsx)(l.DocSectionCode,{code:t})]})}function R(e){let[t,i]=(0,n.useState)("6466f1"),[s,c]=(0,n.useState)({r:100,g:102,b:241}),[a,d]=(0,n.useState)({h:239,s:59,b:95}),p={basic:`
<ColorPicker format="hex" value={colorHEX} onChange={(e) => setColorHEX(e.value)} />
<ColorPicker format="rgb" value={colorRGB} onChange={(e) => setColorRGB(e.value)} />
<ColorPicker format="hsb" value={colorHSB} onChange={(e) => setColorHSB(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function FormatDemo() {
    const [colorHEX, setColorHEX] = useState('6466f1');
    const [colorRGB, setColorRGB] = useState({ r: 100, g: 102, b: 241 });
    const [colorHSB, setColorHSB] = useState({ h: 239, s: 59, b: 95 });

    return (
        <div className="card flex flex-wrap gap-3">
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-hex" className="font-bold block mb-2">
                    HEX
                </label>
                <ColorPicker inputId="cp-hex" format="hex" value={colorHEX} onChange={(e) => setColorHEX(e.value)} className="mb-3" />
                <span>{colorHEX}</span>
            </div>
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-rgb" className="font-bold block mb-2">
                    RGB
                </label>
                <ColorPicker inputId="cp-rgb" format="rgb" value={colorRGB} onChange={(e) => setColorRGB(e.value)} className="mb-3" />
                <span>{JSON.stringify(colorRGB)}</span>
            </div>
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-hsb" className="font-bold block mb-2">
                    HSB
                </label>
                <ColorPicker inputId="cp-hsb" format="hsb" value={colorHSB} onChange={(e) => setColorHSB(e.value)} className="mb-3" />
                <span>{JSON.stringify(colorHSB)}</span>
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { ColorPicker, ColorPickerChangeEvent } from 'primereact/colorpicker';

interface RGB {
    r: number;
    g: number;
    b: number;
}

interface HSB {
    h: number;
    s: number;
    b: number;
}

export default function FormatDemo() {
    const [colorHEX, setColorHEX] = useState<string>('6466f1');
    const [colorRGB, setColorRGB] = useState<RGB>({ r: 100, g: 102, b: 241 });
    const [colorHSB, setColorHSB] = useState<HSB>({ h: 239, s: 59, b: 95 });

    return (
        <div className="card flex flex-wrap gap-3">
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-hex" className="font-bold block mb-2">
                    HEX
                </label>
                <ColorPicker inputId="cp-hex" format="hex" value={colorHEX} onChange={(e: ColorPickerChangeEvent) => setColorHEX(e.value)} className="mb-3" />
                <span>{colorHEX}</span>
            </div>
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-rgb" className="font-bold block mb-2">
                    RGB
                </label>
                <ColorPicker inputId="cp-rgb" format="rgb" value={colorRGB} onChange={(e: ColorPickerChangeEvent) => setColorRGB(e.value)} className="mb-3" />
                <span>{JSON.stringify(colorRGB)}</span>
            </div>
            <div className="flex-1 flex flex-column align-items-center">
                <label htmlFor="cp-hsb" className="font-bold block mb-2">
                    HSB
                </label>
                <ColorPicker inputId="cp-hsb" format="hsb" value={colorHSB} onChange={(e: ColorPickerChangeEvent) => setColorHSB(e.value)} className="mb-3" />
                <span>{JSON.stringify(colorHSB)}</span>
            </div>
        </div>
    )
}
        `};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.DocSectionText,{...e,children:(0,r.jsxs)("p",{children:["Default color format to use in value binding is ",(0,r.jsx)("i",{children:"hex"})," and other possible values can be ",(0,r.jsx)("i",{children:"rgb"})," and ",(0,r.jsx)("i",{children:"hsb"})," using the ",(0,r.jsx)("i",{children:"format"})," property."]})}),(0,r.jsxs)("div",{className:"card flex flex-wrap gap-3",children:[(0,r.jsxs)("div",{className:"flex-1 flex flex-column align-items-center",children:[(0,r.jsx)("label",{htmlFor:"cp-hex",className:"font-bold block mb-2",children:"HEX"}),(0,r.jsx)(E,{inputId:"cp-hex",format:"hex",value:t,onChange:e=>i(e.value),className:"mb-3"}),(0,r.jsx)("span",{children:t})]}),(0,r.jsxs)("div",{className:"flex-1 flex flex-column align-items-center",children:[(0,r.jsx)("label",{htmlFor:"cp-rgb",className:"font-bold block mb-2",children:"RGB"}),(0,r.jsx)(E,{inputId:"cp-rgb",format:"rgb",value:s,onChange:e=>c(e.value),className:"mb-3"}),(0,r.jsx)("span",{children:JSON.stringify(s)})]}),(0,r.jsxs)("div",{className:"flex-1 flex flex-column align-items-center",children:[(0,r.jsx)("label",{htmlFor:"cp-hsb",className:"font-bold block mb-2",children:"HSB"}),(0,r.jsx)(E,{inputId:"cp-hsb",format:"hsb",value:a,onChange:e=>d(e.value),className:"mb-3"}),(0,r.jsx)("span",{children:JSON.stringify(a)})]})]}),(0,r.jsx)(l.DocSectionCode,{code:p})]})}function H(e){let t={basic:`
import { ColorPicker } from 'primereact/colorpicker';
        `};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.DocSectionText,{...e}),(0,r.jsx)(l.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function B(e){let[t,i]=(0,n.useState)(null),s={basic:`
<ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
        `,javascript:`
import React, { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function InlineDemo() {
    const [color, setColor] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <ColorPicker value={color} onChange={(e) => setColor(e.value)} inline />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { ColorPicker, ColorPickerChangeEvent } from 'primereact/colorpicker';

export default function InlineDemo() {
    const [color, setColor] = useState<string>(null);

    return (
        <div className="card flex justify-content-center">
            <ColorPicker value={color} onChange={(e: ColorPickerChangeEvent) => setColor(e.value)} inline />
        </div>
    )
}
        `};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.DocSectionText,{...e,children:(0,r.jsxs)("p",{children:["ColorPicker is displayed as a popup by default, add ",(0,r.jsx)("i",{children:"inline"})," property to customize this behavior."]})}),(0,r.jsx)("div",{className:"card flex justify-content-center",children:(0,r.jsx)(E,{value:t,onChange:e=>i(e.value),inline:!0})}),(0,r.jsx)(l.DocSectionCode,{code:s})]})}E.displayName="ColorPicker";let O=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.DocSectionText,{...e}),(0,r.jsx)("div",{children:(0,r.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/colorpicker.jpg",alt:"colorpicker"})})]});function I(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.DocSectionText,{...e,children:(0,r.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,r.jsx)("div",{className:"doc-tablewrapper",children:(0,r.jsxs)("table",{className:"doc-table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"}),(0,r.jsx)("th",{children:"Element"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-colorpicker"}),(0,r.jsx)("td",{children:"Container element."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-colorpicker-overlay"}),(0,r.jsx)("td",{children:"Container element in overlay mode."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-colorpicker-preview "}),(0,r.jsx)("td",{children:"Preview input in overlay mode."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-colorpicker-panel"}),(0,r.jsx)("td",{children:"Panel element of the colorpicker."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-colorpicker-content"}),(0,r.jsx)("td",{children:"Wrapper that contains color and hue sections."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-colorpicker-color-selector"}),(0,r.jsx)("td",{children:"Color selector container."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-colorpicker-color"}),(0,r.jsx)("td",{children:"Color element."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-colorpicker-color-handle"}),(0,r.jsx)("td",{children:"Handle of the color element."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-colorpicker-hue"}),(0,r.jsx)("td",{children:"Hue slider."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"p-colorpicker-hue-handle"}),(0,r.jsx)("td",{children:"Handle of the hue slider."})]})]})]})})]})}var M=e.i(41158);function F(e){let t={basic:`
const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

const Tailwind = {        
    colorpicker: {
        root: ({ props }) => ({
            className: classNames('inline-block', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        input: {
            className: classNames(
                'm-0',
                'font-sans text-base text-gray-600 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 rounded-lg cursor-pointer',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                'w-8 h-8'
            )
        },
        panel: ({ props }) => ({
            className: classNames('shadow-md', 'bg-gray-800 border-gray-900', {
                'relative h-48 w-52': props.inline,
                'absolute h-48 w-52': !props.inline
            })
        }),
        selector: 'absolute h-44 w-40 top-2 left-2',
        color: {
            className: 'h-44 w-40',
            style: { background: 'linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)' }
        },
        colorhandle: {
            className: classNames('rounded-full border border-solid cursor-pointer h-3 w-3 absolute  opacity-85', 'border-white')
        },
        hue: {
            className: 'h-44 w-6 absolute top-2 left-44 opacity-85',
            style: { background: 'linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)' }
        },
        huehandle: 'border-solid border-2 cursor-pointer h-2 w-8 left-0 -ml-1 -mt-1 opacity-85 absolute',
        transition: TRANSITIONS.overlay
    }
}
        `},n={javascript:`
import React, { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function UnstyledDemo() {
    const [color, setColor] = useState(null);

    return (
        <div className="card flex justify-center">
            <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
        </div>
    )
}
    `};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(o.DocSectionText,{...e,children:[(0,r.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,r.jsx)(M.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,r.jsx)(l.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,r.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,r.jsx)(l.DocSectionCode,{code:n,embedded:!0})]})})}var _=e.i(88850),X=e.i(82948);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:O},{id:"pt.colorpicker.options",label:"ColorPicker PT Options",component:_.default}];return(0,r.jsx)(X.DocComponent,{title:"React ColorPicker Component",header:"ColorPicker",description:"ColorPicker is an input component to select a color.",componentDocs:[{id:"import",label:"Import",component:H},{id:"basic",label:"Basic",component:T},{id:"inline",label:"Inline",component:B},{id:"format",label:"Format",component:R},{id:"disabled",label:"Disabled",component:D},{id:"accessibility",label:"Accessibility",component:t}],apiDocs:["ColorPicker"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:I},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:F}]}]})}],17541)},67569,(e,r,o)=>{let t="/colorpicker";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(17541)]),r.hot&&r.hot.dispose(function(){window.__NEXT_P.push([t])})}]);