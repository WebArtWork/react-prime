(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,7869,e=>{"use strict";var t=e.i(91398),a=e.i(91788),n=e.i(10836),r=e.i(15498),o=e.i(60150),s=e.i(3935);let i=`
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
`,l=r.ComponentBase.extend({defaultProps:{__TYPE:"Divider",align:null,layout:"horizontal",type:"solid",style:null,className:null,children:void 0},css:{classes:{root:({props:e,horizontal:t,vertical:a})=>(0,s.classNames)(`p-divider p-component p-divider-${e.layout} p-divider-${e.type}`,{"p-divider-left":t&&(!e.align||"left"===e.align),"p-divider-right":t&&"right"===e.align,"p-divider-center":t&&"center"===e.align||a&&(!e.align||"center"===e.align),"p-divider-top":a&&"top"===e.align,"p-divider-bottom":a&&"bottom"===e.align},e.className),content:"p-divider-content"},styles:i,inlineStyles:{root:({props:e})=>({justifyContent:"horizontal"===e.layout?"center"===e.align||null===e.align?"center":"left"===e.align?"flex-start":"right"===e.align?"flex-end":null:null,alignItems:"vertical"===e.layout?"center"===e.align||null===e.align?"center":"top"===e.align?"flex-start":"bottom"===e.align?"flex-end":null:null})}}}),d=a.forwardRef((e,s)=>{let i=(0,o.useMergeProps)(),d=a.useContext(n.PrimeReactContext),p=l.getProps(e,d),{ptm:c,cx:g,sx:u,isUnstyled:m}=l.setMetaData({props:p});(0,r.useHandleStyle)(l.css.styles,m,{name:"divider"});let h=a.useRef(null),f="horizontal"===p.layout,x="vertical"===p.layout;a.useImperativeHandle(s,()=>({props:p,getElement:()=>h.current}));let P=i({ref:h,style:u("root"),className:g("root",{horizontal:f,vertical:x}),"aria-orientation":p.layout,role:"separator"},l.getOtherProps(p),c("root")),v=i({className:g("content")},c("content"));return(0,t.jsx)("div",{...P,children:(0,t.jsx)("div",{...v,children:p.children})})});d.displayName="Divider",e.s(["Divider",0,d],7869)},65157,e=>{"use strict";var t=e.i(91398),a=e.i(91788),n=e.i(10836),r=e.i(15498),o=e.i(20728),s=e.i(60150),i=e.i(45543),l=e.i(51551),d=e.i(3935);let p=`
@layer primereact {
    .p-slider {
        position: relative;
    }
    
    .p-slider .p-slider-handle {
        position: absolute;
        cursor: grab;
        touch-action: none;
        display: block;
        z-index: 1;
    }
    
    .p-slider .p-slider-handle.p-slider-handle-active {
        z-index: 2;
    }
    
    .p-slider-range {
        position: absolute;
        display: block;
    }
    
    .p-slider-horizontal .p-slider-range {
        top: 0;
        left: 0;
        height: 100%;
    }
    
    .p-slider-horizontal .p-slider-handle {
        top: 50%;
    }
    
    .p-slider-vertical {
        height: 100px;
    }
    
    .p-slider-vertical .p-slider-handle {
        left: 50%;
    }
    
    .p-slider-vertical .p-slider-range {
        bottom: 0;
        left: 0;
        width: 100%;
    }
}
`,c=r.ComponentBase.extend({defaultProps:{__TYPE:"Slider",id:null,value:null,min:0,max:100,orientation:"horizontal",step:null,range:!1,style:null,className:null,disabled:!1,tabIndex:0,onChange:null,onSlideEnd:null,children:void 0},css:{classes:{handle:({index:e,handleIndex:t})=>(0,d.classNames)("p-slider-handle",{"p-slider-handle-start":0===e,"p-slider-handle-end":1===e,"p-slider-handle-active":t.current===e}),range:"p-slider-range",root:({props:e,vertical:t,horizontal:a})=>(0,d.classNames)("p-slider p-component",{"p-disabled":e.disabled,"p-slider-horizontal":a,"p-slider-vertical":t})},styles:p,inlineStyles:{handle:{position:"absolute"},range:{position:"absolute"}}}}),g=a.memo(a.forwardRef((e,p)=>{let g,u,m,h,f,x,P,v,b,w,j,y=(0,s.useMergeProps)(),C=a.useContext(n.PrimeReactContext),N=c.getProps(e,C),k=a.useRef(null),R=a.useRef(0),D=a.useRef(!1),S=a.useRef(!1),L=a.useRef(0),T=a.useRef(0),_=a.useRef(0),F=a.useRef(0),I=a.useRef(),E=N.range?N.value??[N.min,N.max]:N.value??N.min??0,O="horizontal"===N.orientation,A="vertical"===N.orientation,[z,M]=(0,o.useEventListener)({type:"mousemove",listener:e=>Q(e)}),[B,K]=(0,o.useEventListener)({type:"mouseup",listener:e=>Z(e)}),[H,$]=(0,o.useEventListener)({type:"touchmove",listener:e=>Q(e)}),[U,X]=(0,o.useEventListener)({type:"touchend",listener:e=>Z(e)}),{ptm:W,cx:Y,sx:G,isUnstyled:J}=c.setMetaData({props:N});(0,r.useHandleStyle)(c.css.styles,J,{name:"slider"});let V=(e,t)=>{ea(e,(N.range?E[R.current]:E)+(N.step||1)*t),e.preventDefault()},q=(e,t)=>{N.disabled||(S.current=!0,ee(),D.current=!0,N.range&&E[0]===N.max?R.current=0:R.current=t,e.preventDefault())},Q=e=>{S.current&&(et(e),e.preventDefault())},Z=e=>{if(S.current){S.current=!1;let t=et(e);N.onSlideEnd&&N.onSlideEnd({originalEvent:e,value:t}),I.current=void 0,M(),K(),$(),X()}},ee=()=>{let e=k.current.getBoundingClientRect();L.current=e.left+i.DomHandler.getWindowScrollLeft(),T.current=e.top+i.DomHandler.getWindowScrollTop(),_.current=k.current.offsetWidth,F.current=k.current.offsetHeight},et=e=>{let t,a,{pageX:n,pageY:r}={pageX:(a=Array.from(e.changedTouches??[]).find(e=>e.identifier===I.current)||e).pageX,pageY:a.pageY};if(!n||!r)return;t=O?(n-L.current)*100/_.current:(T.current+F.current-r)*100/F.current;let o=(N.max-N.min)*(t/100)+N.min;if(N.step){let e=N.range?E[R.current]:E,t=o-e;t<0?o=e+Math.ceil(o/N.step-e/N.step)*N.step:t>0&&(o=e+Math.floor(o/N.step-e/N.step)*N.step)}else o=Math.floor(o);return ea(e,o)},ea=(e,t)=>{let a=parseFloat(t.toFixed(10)),n=a;return N.range?(0===R.current?a<N.min?a=N.min:a>N.max&&(a=N.max):a>N.max?a=N.max:a<N.min&&(a=N.min),(n=[...E])[R.current]=a):(a<N.min?a=N.min:a>N.max&&(a=N.max),n=a),N.onChange&&N.onChange({originalEvent:e,value:n}),n},en=(e,a,n)=>{e=l.ObjectUtils.isEmpty(e)?null:e,a=l.ObjectUtils.isEmpty(a)?null:a;let r={transition:S.current?"none":null,left:null!=e?e+"%":null,bottom:null!=a?a+"%":null},o=y({className:Y("handle",{index:n,handleIndex:R}),style:{...G("handle",{dragging:S,leftValue:e,bottomValue:a}),...r},tabIndex:N.tabIndex,role:"slider",onMouseDown:e=>{z(),B(),q(e,n)},onTouchStart:e=>{e.changedTouches&&e.changedTouches[0]&&(I.current=e.changedTouches[0].identifier),H(),U(),q(e,n)},onKeyDown:e=>((e,t)=>{if(!N.disabled)switch(R.current=t,e.key){case"ArrowRight":case"ArrowUp":V(e,1);break;case"ArrowLeft":case"ArrowDown":V(e,-1);break;case"PageUp":V(e,10),e.preventDefault();break;case"PageDown":V(e,-10),e.preventDefault();break;case"Home":V(e,-E),e.preventDefault();break;case"End":V(e,N.max),e.preventDefault()}})(e,n),"aria-valuemin":N.min,"aria-valuemax":N.max,"aria-valuenow":e||a||0,"aria-orientation":N.orientation,...eo},W("handle"));return(0,t.jsx)("span",{...o})};a.useImperativeHandle(p,()=>({props:N,getElement:()=>k.current}));let er=c.getOtherProps(N),eo=l.ObjectUtils.reduceKeys(er,i.DomHandler.ARIA_PROPS),es=N.range?(g=(E[0]<N.min?N.min:E[0]-N.min)*100/(N.max-N.min),u=(E[1]>N.max?N.max:E[1]-N.min)*100/(N.max-N.min),m=O?en(g,null,0):en(null,g,0),h=O?en(u,null,1):en(null,u,1),f=u>g?u-g:g-u,x=u>g?g:u,P=y({className:Y("range"),style:{...G("range"),...O?{left:x+"%",width:f+"%"}:{bottom:x+"%",height:f+"%"}}},W("range")),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{...P}),m,h]})):(v=E<N.min?N.min:E>N.max?N.max:(E-N.min)*100/(N.max-N.min),b=O?{width:v+"%"}:{height:v+"%"},w=O?en(v,null,null):en(null,v,null),j=y({className:Y("range"),style:{...G("range"),...b}},W("range")),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{...j}),w]})),ei=y({style:N.style,className:(0,d.classNames)(N.className,Y("root",{vertical:A,horizontal:O})),onClick:e=>{if(!N.disabled){if(!D.current){ee();let t=et(e);N.onSlideEnd&&N.onSlideEnd({originalEvent:e,value:t})}D.current=!1}}},c.getOtherProps(N),W("root"));return(0,t.jsx)("div",{id:N.id,ref:k,...ei,children:es})}));g.displayName="Slider",e.s(["Slider",0,g],65157)},62579,e=>{"use strict";var t=e.i(91398),a=e.i(88850),n=e.i(82948),r=e.i(28137),o=e.i(41158);function s(){return(0,t.jsxs)(r.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Paginator is placed inside a ",(0,t.jsx)("i",{children:"nav"})," element to indicate a navigation section. All of the paginator elements can be customized using templating however the default behavious is listed below."]}),(0,t.jsxs)("p",{children:["First, previous, next and last page navigators elements with ",(0,t.jsx)("i",{children:"aria-label"})," attributes referring to the ",(0,t.jsx)("i",{children:"aria.firstPageLabel"}),", ",(0,t.jsx)("i",{children:"aria.prevPageLabel"}),", ",(0,t.jsx)("i",{children:"aria.nextPageLabel"})," and ",(0,t.jsx)("i",{children:"aria.lastPageLabel"}),"properties of the ",(0,t.jsx)(o.default,{href:"/locale",children:"locale"})," API respectively."]}),(0,t.jsxs)("p",{children:["Page links are also button elements with an ",(0,t.jsx)("i",{children:"aria-label"})," attribute derived from the ",(0,t.jsx)("i",{children:"aria.pageLabel"})," of the ",(0,t.jsx)(o.default,{href:"/locale",children:"locale"})," API. Current page is marked with ",(0,t.jsx)("i",{children:"aria-current"}),' set to "page" as well.']}),(0,t.jsxs)("p",{children:["Current page report uses ",(0,t.jsx)("i",{children:'aria-live="polite"'})," to instruct screen reader about the changes to the pagination state."]}),(0,t.jsxs)("p",{children:["Rows per page dropdown internally uses a dropdown component, refer to the ",(0,t.jsx)(o.default,{href:"/dropdown",children:"dropdown"})," documentation for accessibility details. Additionally, the dropdown uses an ",(0,t.jsx)("i",{children:"aria-label"}),"from the ",(0,t.jsx)("i",{children:"aria.rowsPerPage"})," property of the ",(0,t.jsx)(o.default,{href:"/locale",children:"locale"})," API."]}),(0,t.jsxs)("p",{children:["Jump to page input is an ",(0,t.jsx)("i",{children:"input"})," element with an ",(0,t.jsx)("i",{children:"aria-label"})," that refers to the ",(0,t.jsx)("i",{children:"aria.jumpToPage"})," property of the ",(0,t.jsx)(o.default,{href:"/locale",children:"locale"})," API."]}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus through the paginator elements."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Executes the paginator element action."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Executes the paginator element action."})]})]})]})}),(0,t.jsx)("h3",{children:"Rows Per Page Dropdown Keyboard Support"}),(0,t.jsxs)("p",{children:["Refer to the ",(0,t.jsx)(o.default,{href:"/dropdown",children:"dropdown"})," documentation for more details about keyboard support."]})]})}var i=e.i(5180),l=e.i(38660),d=e.i(91788);function p(e){let[a,n]=(0,d.useState)(0),[o,s]=(0,d.useState)(10),p={basic:`
<Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
        `,javascript:`
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';

export default function BasicDemo() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div className="card">
            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';

export default function BasicDemo() {
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div className="card">
            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Paginator is used as a controlled component with ",(0,t.jsx)("i",{children:"first"}),", ",(0,t.jsx)("i",{children:"rows"})," and ",(0,t.jsx)("i",{children:"onPageChange"})," properties to manage the first index and number of records to display per page. Total number of records need to be with"," ",(0,t.jsx)("i",{children:"totalRecords"})," property. Default template includes a dropdown to change the ",(0,t.jsx)("i",{children:"rows"})," so ",(0,t.jsx)("i",{children:"rowsPerPageOptions"})," is also necessary for the dropdown options."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(l.Paginator,{first:a,rows:o,totalRecords:120,rowsPerPageOptions:[10,20,30],onPageChange:e=>{n(e.first),s(e.rows)}})}),(0,t.jsx)(i.DocSectionCode,{code:p})]})}function c(e){let[a,n]=(0,d.useState)(0),o={basic:`
<Paginator first={first} rows={1} totalRecords={12} onPageChange={onPageChange} template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />

<div className="p-3 text-center">
    <img alt={first} src={\`https://primefaces.org/cdn/primereact/images/nature/nature\${first + 1}.jpg\`} className="shadow-2 border-round max-w-full" />
</div>
        `,javascript:`
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';

export default function ImagesDemo() {
    const [first, setFirst] = useState(0);

    const onPageChange = (event) => {
        setFirst(event.first);
    };

    return (
        <div className="card">
            <Paginator first={first} rows={1} totalRecords={12} onPageChange={onPageChange} template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />

            <div className="p-3 text-center">
                <img alt={first} src={\`https://primefaces.org/cdn/primereact/images/nature/nature\${first + 1}.jpg\`} className="shadow-2 border-round max-w-full" />
            </div>
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';

export default function ImagesDemo() {
    const [first, setFirst] = useState<number>(0);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
    };

    return (
        <div className="card">
            <Paginator first={first} rows={1} totalRecords={12} onPageChange={onPageChange} template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink" />

            <div className="p-3 text-center">
                <img alt={first} src={\`https://primefaces.org/cdn/primereact/images/nature/nature\${first + 1}.jpg\`} className="shadow-2 border-round max-w-full" />
            </div>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Sample image gallery implementation using paginator."})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(l.Paginator,{first:a,rows:1,totalRecords:12,onPageChange:e=>{n(e.first)},template:"FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"}),(0,t.jsx)("div",{className:"p-3 text-center",children:(0,t.jsx)("img",{alt:a,src:`https://primefaces.org/cdn/primereact/images/nature/nature${a+1}.jpg`,className:"shadow-2 border-round max-w-full"})})]}),(0,t.jsx)(i.DocSectionCode,{code:o})]})}function g(e){let a={basic:`
import { Paginator } from 'primereact/paginator';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function u(e){let[a,n]=(0,d.useState)(0),o={basic:`
<Paginator first={first} rows={10} totalRecords={50} onPageChange={onPageChange} 
    template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
        `,javascript:`
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';

export default function LayoutDemo() {
    const [first, setFirst] = useState(0);

    const onPageChange = (event) => {
        setFirst(event.first);
    };

    return (
        <div className="card">
            <Paginator first={first} rows={10} totalRecords={50} onPageChange={onPageChange} template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';

export default function LayoutDemo() {
    const [first, setFirst] = useState<number>(0);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
    };

    return (
        <div className="card">
            <Paginator first={first} rows={10} totalRecords={50} onPageChange={onPageChange} template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Order and content of the default UI elements of the paginator is defined with the ",(0,t.jsx)("i",{children:"layout"})," option of the ",(0,t.jsx)("i",{children:"template"})," property. Default token names for the elements are as follows;"]}),(0,t.jsxs)("ul",{className:"mb-4 line-height-4",children:[(0,t.jsx)("li",{children:(0,t.jsx)("i",{children:"FirstPageLink"})}),(0,t.jsx)("li",{children:(0,t.jsx)("i",{children:"PrevPageLink"})}),(0,t.jsx)("li",{children:(0,t.jsx)("i",{children:"NextPageLink"})}),(0,t.jsx)("li",{children:(0,t.jsx)("i",{children:"LastPageLink"})}),(0,t.jsx)("li",{children:(0,t.jsx)("i",{children:"PageLinks"})}),(0,t.jsx)("li",{children:(0,t.jsx)("i",{children:"RowsPerPageDropdown"})}),(0,t.jsx)("li",{children:(0,t.jsx)("i",{children:"CurrentPageReport"})}),(0,t.jsx)("li",{children:(0,t.jsx)("i",{children:"JumpToPageInput"})})]})]}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(l.Paginator,{first:a,rows:10,totalRecords:50,onPageChange:e=>{n(e.first)},template:{layout:"PrevPageLink CurrentPageReport NextPageLink"}})}),(0,t.jsx)(i.DocSectionCode,{code:o})]})}let m=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/paginator.jpg",alt:"paginator"})})]});var h=e.i(57724),f=e.i(7869),x=e.i(26637),P=e.i(66082),v=e.i(50901),b=e.i(65157),w=e.i(64691),j=e.i(3935);function y(e){let[a,n]=(0,d.useState)([0,0,0]),[o,s]=(0,d.useState)([10,10,10]),[p,c]=(0,d.useState)(1),[g,u]=(0,d.useState)("Press 'Enter' key to go to this page."),m=(e,t)=>{n(a.map((a,n)=>t===n?e.first:a)),s(o.map((a,n)=>t===n?e.rows:a))},y=e=>{c(e.target.value)},C=(0,t.jsx)(h.Button,{type:"button",icon:"pi pi-star",className:"p-button-outlined"}),N=(0,t.jsx)(h.Button,{type:"button",icon:"pi pi-search"}),k={basic:`
<Paginator template={template1} first={first[0]} rows={rows[0]} totalRecords={120} onPageChange={(e) => onPageChange(e, 0)} leftContent={leftContent} rightContent={rightContent} />
<Paginator template={template2} first={first[1]} rows={rows[1]} totalRecords={120} onPageChange={(e) => onPageChange(e, 1)} className="justify-content-end" />
<Paginator template={template3} first={first[2]} rows={rows[2]} totalRecords={120} onPageChange={(e) => onPageChange(e, 2)} className="justify-content-start" />
        `,javascript:`
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Paginator } from 'primereact/paginator';
import { Ripple } from 'primereact/ripple';
import { Divider } from 'primereact/divider';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { Tooltip } from 'primereact/tooltip';
import { classNames } from 'primereact/utils';

export default function TemplateDemo() {
    const [first, setFirst] = useState([0, 0, 0]);
    const [rows, setRows] = useState([10, 10, 10]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState("Press 'Enter' key to go to this page.");

    const onPageChange = (e, index) => {
        setFirst(first.map((f, i) => (index === i ? e.first : f)));
        setRows(rows.map((r, i) => (index === i ? e.rows : r)));
    };

    const onPageInputChange = (event) => {
        setCurrentPage(event.target.value);
    };

    const onPageInputKeyDown = (event, options) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);

            if (page < 0 || page > options.totalPages) {
                setPageInputTooltip(\`Value must be between 1 and \${options.totalPages}.\`);
            } else {
                let _first = [...first];

                _first[0] = currentPage ? options.rows * (page - 1) : 0;

                setFirst(_first);
                setPageInputTooltip("Press 'Enter' key to go to this page.");
            }
        }
    };

    const leftContent = <Button type="button" icon="pi pi-star" className="p-button-outlined" />;
    const rightContent = <Button type="button" icon="pi pi-search" />;

    const template1 = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        PrevPageLink: (options) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Previous</span>
                    <Ripple />
                </button>
            );
        },
        NextPageLink: (options) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Next</span>
                    <Ripple />
                </button>
            );
        },
        PageLinks: (options) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });

                return (
                    <span className={className} style={{ userSelect: 'none' }}>
                        ...
                    </span>
                );
            }

            return (
                <button type="button" className={options.className} onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            );
        },
        RowsPerPageDropdown: (options) => {
            const dropdownOptions = [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 30, value: 30 },
                { label: 'All', value: options.totalRecords }
            ];

            return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
        },
        CurrentPageReport: (options) => {
            return (
                <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                    Go to <InputText size="2" className="ml-1" value={currentPage} tooltip={pageInputTooltip} onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange} />
                </span>
            );
        }
    };
    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        RowsPerPageDropdown: (options) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 120, value: 120 }
            ];

            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                        Items per page:{' '}
                    </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
        CurrentPageReport: (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };
    const template3 = {
        layout: 'RowsPerPageDropdown PrevPageLink PageLinks NextPageLink CurrentPageReport',
        RowsPerPageDropdown: (options) => {
            return (
                <div className="flex align-items-center">
                <Tooltip target=".slider>.p-slider-handle" content={\`\${options.value} / page\`} position="top" event="focus" />

                    <span className="mr-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                        Items per page:{' '}
                    </span>
                    <Slider className="slider" value={options.value} onChange={options.onChange} min={10} max={120} step={30} style={{ width: '10rem' }} />
                </div>
            );
        },
        CurrentPageReport: (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };

    return (
        <div className="card">
            <Paginator template={template1} first={first[0]} rows={rows[0]} totalRecords={120} onPageChange={(e) => onPageChange(e, 0)} leftContent={leftContent} rightContent={rightContent} />
            <Divider />
            <Paginator template={template2} first={first[1]} rows={rows[1]} totalRecords={120} onPageChange={(e) => onPageChange(e, 1)} className="justify-content-end" />
            <Divider />
            <Paginator template={template3} first={first[2]} rows={rows[2]} totalRecords={120} onPageChange={(e) => onPageChange(e, 2)} className="justify-content-start" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Paginator, PaginatorPageChangeEvent, PaginatorJumpToPageInputOptions, PaginatorCurrentPageReportOptions, PaginatorRowsPerPageDropdownOptions,
    PaginatorLastPageLinkOptions, PaginatorNextPageLinkOptions, PaginatorPageLinksOptions, PaginatorPrevPageLinkOptions, PaginatorFirstPageLinkOptions } from 'primereact/paginator';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { Divider } from 'primereact/divider';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { Tooltip } from 'primereact/tooltip';
import { classNames } from 'primereact/utils';

export default function TemplateDemo() {
    const [first, setFirst] = useState<number[]>([0, 0, 0]);
    const [rows, setRows] = useState([10, 10, 10]);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageInputTooltip, setPageInputTooltip] = useState<string>("Press 'Enter' key to go to this page.");

    const onPageChange = (e: PaginatorPageChangeEvent, index: number) => {
        setFirst(first.map((f, i) => (index === i ? e.first : f)));
        setRows(rows.map((r, i) => (index === i ? e.rows : r)));
    };

    const onPageInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPage(event.target.value);
    };

    const onPageInputKeyDown = (event: React.KeydownEvent<HTMLInputElement>, options: PaginatorCurrentPageReportOptions) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);

            if (page < 0 || page > options.totalPages) {
                setPageInputTooltip(\`Value must be between 1 and \${options.totalPages}.\`);
            } else {
                let _first = [...first];

                _first[0] = currentPage ? options.rows * (page - 1) : 0;

                setFirst(_first);
                setPageInputTooltip("Press 'Enter' key to go to this page.");
            }
        }
    };

    const leftContent = <Button type="button" icon="pi pi-star" className="p-button-outlined" />;
    const rightContent = <Button type="button" icon="pi pi-search" />;

    const template1 = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        PrevPageLink: (options: PaginatorPrevPageLinkOptions) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Previous</span>
                    <Ripple />
                </button>
            );
        },
        NextPageLink: (options: PaginatorNextPageLinkOptions) => {
            return (
                <button type="button" className={classNames(options.className, 'border-round')} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Next</span>
                    <Ripple />
                </button>
            );
        },
        PageLinks: (options: PaginatorPageLinksOptions) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });

                return (
                    <span className={className} style={{ userSelect: 'none' }}>
                        ...
                    </span>
                );
            }

            return (
                <button type="button" className={options.className} onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            );
        },
        RowsPerPageDropdown: (options: PaginatorRowsPerPageDropdownOptions) => {
            const dropdownOptions = [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 30, value: 30 },
                { label: 'All', value: options.totalRecords }
            ];

            return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
        },
        CurrentPageReport: (options: PaginatorCurrentPageReportOptions) => {
            return (
                <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                    Go to <InputText size="2" className="ml-1" value={currentPage} tooltip={pageInputTooltip} onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange} />
                </span>
            );
        }
    };
    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        RowsPerPageDropdown: (options: PaginatorRowsPerPageDropdownOptions) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 120, value: 120 }
            ];

            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                        Items per page:{' '}
                    </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
        CurrentPageReport: (options: PaginatorCurrentPageReportOptions) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };
    const template3 = {
        layout: 'RowsPerPageDropdown PrevPageLink PageLinks NextPageLink CurrentPageReport',
        RowsPerPageDropdown: (options: PaginatorRowsPerPageDropdownOptions) => {
            return (
                <div className="flex align-items-center">
                <Tooltip target=".slider>.p-slider-handle" content={\`\${options.value} / page\`} position="top" event="focus" />

                    <span className="mr-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                        Items per page:{' '}
                    </span>
                    <Slider className="slider" value={options.value} onChange={options.onChange} min={10} max={120} step={30} style={{ width: '10rem' }} />
                </div>
            );
        },
        CurrentPageReport: (options: PaginatorCurrentPageReportOptions) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            );
        }
    };

    return (
        <div className="card">
            <Paginator template={template1} first={first[0]} rows={rows[0]} totalRecords={120} onPageChange={(e) => onPageChange(e, 0)} leftContent={leftContent} rightContent={rightContent} />
            <Divider />
            <Paginator template={template2} first={first[1]} rows={rows[1]} totalRecords={120} onPageChange={(e) => onPageChange(e, 1)} className="justify-content-end" />
            <Divider />
            <Paginator template={template3} first={first[2]} rows={rows[2]} totalRecords={120} onPageChange={(e) => onPageChange(e, 2)} className="justify-content-start" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Templating allows overriding the default content of the UI elements by defining callbacks using the element name. The parameters passed to theese callbacks contain properties for binding to your custom elements like the event handler to trigger pagination. Additional ",(0,t.jsx)("i",{children:"leftContent"})," and ",(0,t.jsx)("i",{children:"rightContent"})," properties are available to insert content at both sides of the paginator."]})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(l.Paginator,{template:{layout:"PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport",PrevPageLink:e=>(0,t.jsxs)("button",{type:"button",className:(0,j.classNames)(e.className,"border-round"),onClick:e.onClick,disabled:e.disabled,children:[(0,t.jsx)("span",{className:"p-3",children:"Previous"}),(0,t.jsx)(v.Ripple,{})]}),NextPageLink:e=>(0,t.jsxs)("button",{type:"button",className:(0,j.classNames)(e.className,"border-round"),onClick:e.onClick,disabled:e.disabled,children:[(0,t.jsx)("span",{className:"p-3",children:"Next"}),(0,t.jsx)(v.Ripple,{})]}),PageLinks:e=>{if(e.view.startPage===e.page&&0!==e.view.startPage||e.view.endPage===e.page&&e.page+1!==e.totalPages){let a=(0,j.classNames)(e.className,{"p-disabled":!0});return(0,t.jsx)("span",{className:a,style:{userSelect:"none"},children:"..."})}return(0,t.jsxs)("button",{type:"button",className:e.className,onClick:e.onClick,children:[e.page+1,(0,t.jsx)(v.Ripple,{})]})},RowsPerPageDropdown:e=>{let a=[{label:10,value:10},{label:20,value:20},{label:30,value:30},{label:"All",value:e.totalRecords}];return(0,t.jsx)(x.Dropdown,{value:e.value,options:a,onChange:e.onChange})},CurrentPageReport:e=>(0,t.jsxs)("span",{className:"mx-3",style:{color:"var(--text-color)",userSelect:"none"},children:["Go to ",(0,t.jsx)(P.InputText,{size:"2",className:"ml-1",value:p,tooltip:g,onKeyDown:t=>((e,t)=>{if("Enter"===e.key){let e=parseInt(p);if(e<0||e>t.totalPages)u(`Value must be between 1 and ${t.totalPages}.`);else{let r=[...a];r[0]=p?t.rows*(e-1):0,n(r),u("Press 'Enter' key to go to this page.")}}})(t,e),onChange:y})]})},first:a[0],rows:o[0],totalRecords:120,onPageChange:e=>m(e,0),leftContent:C,rightContent:N}),(0,t.jsx)(f.Divider,{}),(0,t.jsx)(l.Paginator,{template:{layout:"RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink",RowsPerPageDropdown:e=>(0,t.jsxs)(d.default.Fragment,{children:[(0,t.jsxs)("span",{className:"mx-1",style:{color:"var(--text-color)",userSelect:"none"},children:["Items per page:"," "]}),(0,t.jsx)(x.Dropdown,{value:e.value,options:[{label:5,value:5},{label:10,value:10},{label:20,value:20},{label:120,value:120}],onChange:e.onChange})]}),CurrentPageReport:e=>(0,t.jsxs)("span",{style:{color:"var(--text-color)",userSelect:"none",width:"120px",textAlign:"center"},children:[e.first," - ",e.last," of ",e.totalRecords]})},first:a[1],rows:o[1],totalRecords:120,onPageChange:e=>m(e,1),className:"justify-content-end"}),(0,t.jsx)(f.Divider,{}),(0,t.jsx)(l.Paginator,{template:{layout:"RowsPerPageDropdown PrevPageLink PageLinks NextPageLink CurrentPageReport",RowsPerPageDropdown:e=>(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)(w.Tooltip,{target:".slider>.p-slider-handle",content:`${e.value} / page`,position:"top",event:"focus"}),(0,t.jsxs)("span",{className:"mr-3",style:{color:"var(--text-color)",userSelect:"none"},children:["Items per page:"," "]}),(0,t.jsx)(b.Slider,{className:"slider",value:e.value,onChange:e.onChange,min:10,max:120,step:30,style:{width:"10rem"}})]}),CurrentPageReport:e=>(0,t.jsxs)("span",{style:{color:"var(--text-color)",userSelect:"none",width:"120px",textAlign:"center"},children:[e.first," - ",e.last," of ",e.totalRecords]})},first:a[2],rows:o[2],totalRecords:120,onPageChange:e=>m(e,2),className:"justify-content-start"})]}),(0,t.jsx)(i.DocSectionCode,{code:k})]})}function C(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-paginator"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-paginator-first"}),(0,t.jsx)("td",{children:"First page element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-paginator-prev"}),(0,t.jsx)("td",{children:"Previous page element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-paginator-pages"}),(0,t.jsx)("td",{children:"Container of page links."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-paginator-page"}),(0,t.jsx)("td",{children:"A page link."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-paginator-next"}),(0,t.jsx)("td",{children:"Next pge element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-paginator-last"}),(0,t.jsx)("td",{children:"Last page element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-paginator-rpp-options"}),(0,t.jsx)("td",{children:"Rows per page dropdown."})]})]})]})})]})}function N(e){let a={basic:`
const Tailwind = {
    paginator: {
        root: {
            className: classNames(
                'flex items-center justify-center flex-wrap',
                'bg-white text-gray-500 border-0 px-4 py-2 rounded-md',
                'dark:bg-gray-900 dark:text-white/60 dark:border-blue-900/40' // Dark Mode
            )
        },
        firstpagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500  min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            )
        }),
        previouspagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            )
        }),
        nextpagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            )
        }),
        lastpagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            )
        }),
        pagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:border-blue-300 dark:text-white', // Dark Mode
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                {
                    'bg-blue-50 border-blue-50 text-blue-700 dark:bg-blue-300': context.active
                }
            )
        }),
        rowperpagedropdown: {
            root: ({ props, state }) => ({
                className: classNames(
                    'inline-flex relative cursor-pointer user-none',
                    'bg-white border rounded-md',
                    'transition duration-200',
                    'h-12 mx-2',
                    'dark:bg-gray-950 dark:border-blue-900/40', //DarkMode
                    {
                        'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-blue-500': state.focused && !props.disabled, //Focus
                        'border-gray-300': !state.focused,
                        'hover:border-blue-500': !props.disabled //Hover
                    }
                )
            }),
            input: {
                className: classNames(
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
                    'focus:outline-none focus:outline-offset-0',
                    'dark:text-white' //Dark Mode
                )
            },
            trigger: {
                className: classNames('flex items-center justify-center shrink-0', 'text-gray-500 dark:text-white w-12 rounded-r-md')
            },
            panel: {
                className: classNames(
                    'bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                    'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
                )
            },
            wrapper: 'overflow-auto',
            list: 'm-0 p-0 py-3 list-none',
            item: ({ context }) => ({
                className: classNames(
                    'relative font-normal cursor-pointer space-nowrap overflow-hidden',
                    'm-0 py-3 px-5 border-none text-gray-600 rounded-none',
                    'transition duration-200',
                    'dark:text-white/80', // Dark Mode
                    {
                        'text-blue-700 bg-blue-50 dark:text-white/80 dark:bg-blue-300': !context.focused && context.selected,
                        'bg-blue-300/40': context.focused && context.selected,
                        'text-gray-600 bg-gray-300 dark:text-white/80 dark:bg-blue-900/40': context.focused && !context.selected
                    }
                )
            })
        },
        jumptopageinput: {
            root: 'inline-flex mx-2',
            input: {
                className: classNames(
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border border-gray-300 pr-0',
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] focus:border-blue-300',
                    'dark:text-white dark:bg-gray-950 dark:border-blue-900/40', //Dark Mode
                    'm-0 flex-auto max-w-[3rem]'
                )
            }
        },
        jumptopagedropdown: {
            root: ({ props, state }) => ({
                className: classNames(
                    'inline-flex relative cursor-pointer user-none',
                    'bg-white border rounded-md',
                    'transition duration-200',
                    'h-12 mx-2',
                    'dark:bg-gray-950 dark:border-blue-900/40', //DarkMode
                    {
                        'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-blue-500': state.focused && !props.disabled, //Focus
                        'border-gray-300': !state.focused,
                        'hover:border-blue-500': !props.disabled //Hover
                    }
                )
            }),
            input: {
                className: classNames(
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
                    'focus:outline-none focus:outline-offset-0',
                    'dark:text-white' //Dark Mode
                )
            },
            trigger: {
                className: classNames('flex items-center justify-center shrink-0', 'text-gray-500 dark:text-white w-12 rounded-r-md')
            },
            panel: {
                className: classNames(
                    'bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                    'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
                )
            },
            wrapper: 'overflow-auto',
            list: 'm-0 p-0 py-3 list-none',
            item: ({ context }) => ({
                className: classNames(
                    'relative font-normal cursor-pointer space-nowrap overflow-hidden',
                    'm-0 py-3 px-5 border-none text-gray-600 rounded-none',
                    'transition duration-200',
                    'dark:text-white/80', // Dark Mode
                    {
                        'text-blue-700 bg-blue-50 dark:text-white/80 dark:bg-blue-300': !context.focused && context.selected,
                        'bg-blue-300/40': context.focused && context.selected,
                        'text-gray-600 bg-gray-300 dark:text-white/80 dark:bg-blue-900/40': context.focused && !context.selected
                    }
                )
            })
        }
    }
}
        `},n={javascript:`
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';

export default function UnstyledDemo() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div className="card">
            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(o.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(i.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(i.DocSectionCode,{code:n,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:m},{id:"pt.paginator.options",label:"Paginator PT Options",component:a.default}];return(0,t.jsx)(n.DocComponent,{title:"React Paginator Component",header:"Paginator",description:"Paginator displays data in paged format and provides navigation between pages.",componentDocs:[{id:"import",label:"Import",component:g},{id:"basic",label:"Basic",component:p},{id:"layout",label:"Layout",component:u},{id:"template",label:"Template",component:y},{id:"images",label:"Images",component:c},{id:"accessibility",label:"Accessibility",component:s}],apiDocs:["Paginator"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:C},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:N}]}]})}],62579)},55376,(e,t,a)=>{let n="/paginator";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(62579)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);