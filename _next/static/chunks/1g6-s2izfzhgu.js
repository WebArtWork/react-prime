(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,74967,e=>{"use strict";e.i(91398),e.i(91788),e.s([])},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},13576,e=>{"use strict";var t=e.i(91398),a=e.i(88850),n=e.i(82948);e.i(74967);var i=e.i(28137),l=e.i(41158);function c(){return(0,t.jsxs)(i.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Inplace component defines ",(0,t.jsx)("i",{children:"aria-live"}),' as "polite" by default, since any valid attribute is passed to the main container aria roles and attributes of the root element can be customized easily.']}),(0,t.jsxs)("p",{children:["Display element uses ",(0,t.jsx)("i",{children:"button"})," role in view mode by default, ",(0,t.jsx)("i",{children:"displayProps"})," can be used for customizations like adding ",(0,t.jsx)("i",{children:"aria-label"})," or ",(0,t.jsx)("i",{children:"aria-labelledby"})," attributes to describe the content of the view mode or even overriding the default role."]}),(0,t.jsxs)("p",{children:["Closable inplace components displays a button with an ",(0,t.jsx)("i",{children:"aria-label"})," that refers to the ",(0,t.jsx)("i",{children:"aria.close"})," property of the ",(0,t.jsx)(l.default,{href:"/locale",children:"locale"})," API by default, you may use",(0,t.jsx)("i",{children:"closeButtonProps"})," to customize the element and override the default ",(0,t.jsx)("i",{children:"aria-label"}),"."]}),(0,t.jsx)("h3",{children:"View Mode Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Switches to content."})]})})]})}),(0,t.jsx)("h3",{children:"Close Button Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Switches to display."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Switches to display."})]})]})]})})]})}var o=e.i(5180),s=e.i(91788),r=e.i(183),p=e.i(10836),d=e.i(57724),u=e.i(15498),m=e.i(60150),h=e.i(71834),x=e.i(55590),I=e.i(3935),f=e.i(75366),y=e.i(51551);let j=`
@layer primereact {
    .p-inplace .p-inplace-display {
        display: inline;
        cursor: pointer;
    }
    
    .p-inplace .p-inplace-content {
        display: inline;
    }
    
    .p-fluid .p-inplace.p-inplace-closable .p-inplace-content {
        display: flex;
    }
    
    .p-fluid .p-inplace.p-inplace-closable .p-inplace-content > .p-inputtext {
        flex: 1 1 auto;
        width: 1%;
    }
    
    .p-inplace-content-close {
        margin-left: .25rem;
    }
}
`;u.ComponentBase.extend({defaultProps:{__TYPE:"InplaceDisplay",children:void 0}}),u.ComponentBase.extend({defaultProps:{__TYPE:"InplaceContent",children:void 0}});let b=u.ComponentBase.extend({defaultProps:{__TYPE:"Inplace",style:null,className:null,active:!1,closable:!1,closeIcon:null,disabled:!1,tabIndex:0,ariaLabel:null,onOpen:null,onClose:null,onToggle:null,children:void 0},css:{classes:{display:({props:e})=>(0,I.classNames)("p-inplace-display",{"p-disabled":e.disabled}),root:({props:e})=>(0,I.classNames)("p-inplace p-component",{"p-inplace-closable":e.closable}),closeButton:"p-inplace-content-close",content:"p-inplace-content"},styles:j}}),g=e=>e.children,C=e=>e.children,v=s.forwardRef((e,a)=>{let n,i=(0,m.useMergeProps)(),l=s.useContext(p.PrimeReactContext),c=b.getProps(e,l),[o,j]=s.useState(c.active),g=s.useRef(null),C=c.onToggle?c.active:o,v={props:c,state:{active:o}},{ptm:D,cx:N,isUnstyled:T}=b.setMetaData(v);(0,u.useHandleStyle)(b.css.styles,T,{name:"inplace"});let w=e=>{c.disabled||(c.onOpen&&c.onOpen(e),c.onToggle?c.onToggle({originalEvent:e,value:!0}):j(!0))},S=e=>{c.disabled||(c.onClose&&c.onClose(e),c.onToggle?c.onToggle({originalEvent:e,value:!1}):j(!1))},P=e=>{("Enter"===e.code||"NumpadEnter"===e.code||"Space"===e.code)&&(w(e),e.preventDefault())};s.useImperativeHandle(a,()=>({props:c,getElement:()=>g.current})),(0,h.useUpdateEffect)(()=>{c.active?w(null):S(null)},[c.active]);let q=(n=["InplaceContent","InplaceDisplay"],s.Children.map(c.children,e=>{if(C&&y.ObjectUtils.isValidChild(e,"InplaceContent",n)){let a,n;return a=(()=>{let e=c.closeIcon||(0,t.jsx)(x.TimesIcon,{}),a=f.IconUtils.getJSXIcon(e,void 0,{props:c}),n=(0,r.localeOption)("aria")?(0,r.localeOption)("aria").close:void 0;if(c.closable){let e=i({className:N("closeButton"),icon:a,type:"button",onClick:S,"aria-label":n,pt:D("closeButton"),__parentMetadata:{parent:v}});return(0,t.jsx)(d.Button,{...e})}return null})(),n=i({className:N("content")},D("content")),(0,t.jsxs)("div",{...n,children:[e,a]})}if(!C&&y.ObjectUtils.isValidChild(e,"InplaceDisplay",n)){let a;return a=i({onClick:w,className:N("display"),onKeyDown:P,tabIndex:c.tabIndex||"0",role:"button","aria-label":c.ariaLabel},D("display")),(0,t.jsx)("div",{...a,children:e})}})),k=i({ref:g,className:(0,I.classNames)(c.className,N("root")),"aria-live":"polite"},b.getOtherProps(c),D("root"));return(0,t.jsx)("div",{...k,children:q})});function D(e){let a={basic:`
<Inplace>
    <InplaceDisplay>View Content</InplaceDisplay>
    <InplaceContent>
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </InplaceContent>
</Inplace>
        `,javascript:`
import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';

export default function BasicDemo() {
    return (
        <Inplace>
            <InplaceDisplay>View Content</InplaceDisplay>
            <InplaceContent>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </InplaceContent>
        </Inplace>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';

export default function BasicDemo() {
    return (
        <Inplace>
            <InplaceDisplay>View Content</InplaceDisplay>
            <InplaceContent>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </InplaceContent>
        </Inplace>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:[(0,t.jsx)("i",{children:"Inplace"})," component requires ",(0,t.jsx)("i",{children:"InplaceDisplay"})," for display mode and ",(0,t.jsx)("i",{children:"InplaceContent"})," to reveal as the actual content."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(v,{children:[(0,t.jsx)(g,{children:"View Content"}),(0,t.jsx)(C,{children:(0,t.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})}),(0,t.jsx)(o.DocSectionCode,{code:a})]})}function N(e){let a={basic:`
<Inplace>
    <InplaceDisplay>
        <span className="inline-flex align-items-center">
            <span className="pi pi-image"></span>
            <span className="ml-2">View Picture</span>
        </span>
    </InplaceDisplay>
    <InplaceContent>
        <img className="w-full" alt="Nature" src="/images/nature/nature1.jpg" />
    </InplaceContent>
</Inplace>
        `,javascript:`
import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';

export default function ImageDemo() {
    return (
        <Inplace>
            <InplaceDisplay>
                <span className="inline-flex align-items-center">
                    <span className="pi pi-image"></span>
                    <span className="ml-2">View Picture</span>
                </span>
            </InplaceDisplay>
            <InplaceContent>
                <img className="w-full" alt="Nature" src="https://primefaces.org/cdn/primereact/images/nature/nature1.jpg" />
            </InplaceContent>
        </Inplace>
    );
}
        `,typescript:`
import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';

export default function ImageDemo() {
    return (
        <Inplace>
            <InplaceDisplay>
                <span className="inline-flex align-items-center">
                    <span className="pi pi-image"></span>
                    <span className="ml-2">View Picture</span>
                </span>
            </InplaceDisplay>
            <InplaceContent>
                <img className="w-full" alt="Nature" src="https://primefaces.org/cdn/primereact/images/nature/nature1.jpg" />
            </InplaceContent>
        </Inplace>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Any content such as an image can be placed inside an Inplace."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(v,{children:[(0,t.jsx)(g,{children:(0,t.jsxs)("span",{className:"inline-flex align-items-center",children:[(0,t.jsx)("span",{className:"pi pi-image"}),(0,t.jsx)("span",{className:"ml-2",children:"View Picture"})]})}),(0,t.jsx)(C,{children:(0,t.jsx)("img",{className:"w-full",alt:"Nature",src:"https://primefaces.org/cdn/primereact/images/nature/nature1.jpg"})})]})}),(0,t.jsx)(o.DocSectionCode,{code:a})]})}function T(e){let a={basic:`
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)(o.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}g.displayName="InplaceDisplay",C.displayName="InplaceContent",v.displayName="Inplace";var w=e.i(66082);function S(e){let[a,n]=(0,s.useState)(""),l={basic:`
 <Inplace closable>
    <InplaceDisplay>{text || 'Click to Edit'}</InplaceDisplay>
    <InplaceContent>
        <InputText value={text} onChange={(e) => setText(e.target.value)} autoFocus />
    </InplaceContent>
</Inplace>
        `,javascript:`
import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export default function InputDemo() {
    const [text, setText] = useState('');

    return (
        <div className="card">
            <Inplace closable>
                <InplaceDisplay>{text || 'Click to Edit'}</InplaceDisplay>
                <InplaceContent>
                    <InputText value={text} onChange={(e) => setText(e.target.value)} autoFocus />
                </InplaceContent>
            </Inplace>
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from 'primereact/inputtext';

export default function InputDemo() {
    const [text, setText] = useState<string>('');

    return (
        <div className="card">
            <Inplace closable>
                <InplaceDisplay>{text || 'Click to Edit'}</InplaceDisplay>
                <InplaceContent>
                    <InputText value={text} onChange={(e) => setText(e.target.value)} autoFocus />
                </InplaceContent>
            </Inplace>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Inplace can be used within a form to display a value as read only before making it editable. The ",(0,t.jsx)("i",{children:"closable"})," property adds a close button next to the content to switch back to read only mode."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(v,{closable:!0,children:[(0,t.jsx)(g,{children:a||"Click to Edit"}),(0,t.jsx)(C,{children:(0,t.jsx)(w.InputText,{value:a,onChange:e=>n(e.target.value),autoFocus:!0})})]})}),(0,t.jsx)(o.DocSectionCode,{code:l})]})}var P=e.i(10367),q=e.i(59837),k=e.i(66534);function E(e){let[a,n]=(0,s.useState)([]),l={basic:`
<Inplace onOpen={onOpen}>
    <InplaceDisplay>
        View Data
    </InplaceDisplay>
    <InplaceContent>
        <DataTable value={products}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
    </InplaceContent>
</Inplace>
        `,javascript:`
import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function LazyDemo() {
    const [products, setProducts] = useState([]);
    
    const onOpen = () => {
        ProductService.getProductsSmall().then(data => setProducts(data));
    }

    return (
        <Inplace onOpen={onOpen}>
            <InplaceDisplay>
                View Data
            </InplaceDisplay>
            <InplaceContent>
                <DataTable value={products}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </InplaceContent>
        </Inplace>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function LazyDemo() {
    const [products, setProducts] = useState<any[]>([]);
    
    const onOpen = () => {
        ProductService.getProductsSmall().then(data => setProducts(data));
    }

    return (
        <Inplace onOpen={onOpen}>
            <InplaceDisplay>
                View Data
            </InplaceDisplay>
            <InplaceContent>
                <DataTable value={products}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </InplaceContent>
        </Inplace>
    );
}
        `,data:`
/* ProductService */        
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Using the ",(0,t.jsx)("i",{children:"onOpen"})," event, data can be loaded in a lazy manner before displaying it in a table."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(v,{onOpen:()=>{k.ProductService.getProductsSmall().then(e=>n(e))},children:[(0,t.jsx)(g,{children:"View Data"}),(0,t.jsx)(C,{children:(0,t.jsxs)(q.DataTable,{value:a,children:[(0,t.jsx)(P.Column,{field:"code",header:"Code"}),(0,t.jsx)(P.Column,{field:"name",header:"Name"}),(0,t.jsx)(P.Column,{field:"category",header:"Category"}),(0,t.jsx)(P.Column,{field:"quantity",header:"Quantity"})]})})]})}),(0,t.jsx)(o.DocSectionCode,{code:l,service:["ProductService"]})]})}let O=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/inplace.jpg",alt:"inplace"})})]});function _(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-inplace"}),(0,t.jsx)("td",{children:"Container element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-inplace-display"}),(0,t.jsx)("td",{children:"Display container"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-inplace-content"}),(0,t.jsx)("td",{children:"Content container"})]})]})]})})]})}function B(e){let a={basic:`
const Tailwind = {          
    inplace: {
        display: {
            className: classNames('p-3 rounded-md transition duration-200 text-gray-700 dark:text-white/80', 'inline cursor-pointer', 'hover:bg-gray-200 hover:text-gray-700 dark:hover:bg-gray-800/80 dark:hover:text-white/80')
        }
    }
}
    `},n={javascript:`
import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';

export default function UnstyledDemo() {
    return (
        <div className="card">
            <Inplace>
                <InplaceDisplay className="text-gray-700 dark:text-white/80">View Content</InplaceDisplay>
                <InplaceContent>
                    <p className="text-gray-700 dark:text-white/80 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </InplaceContent>
            </Inplace>
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(l.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(o.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(o.DocSectionCode,{code:n,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:O},{id:"pt.Inplace.options",label:"Inplace PT Options",component:a.default}];return(0,t.jsx)(n.DocComponent,{title:"React Inplace Component",header:"Inplace",description:"Inplace provides an easy to do editing and display at the same time where clicking the output displays the actual content.",componentDocs:[{id:"import",label:"Import",component:T},{id:"basic",label:"Basic",component:D},{id:"input",label:"Input",component:S},{id:"image",label:"Image",component:N},{id:"lazy",label:"Lazy",component:E},{id:"accessibility",label:"Accessibility",component:c}],apiDocs:["Inplace","InplaceDisplay","InplaceContent"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:_},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:B}]}]})}],13576)},89596,(e,t,a)=>{let n="/inplace";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(13576)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);