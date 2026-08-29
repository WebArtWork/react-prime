(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},35307,e=>{"use strict";var t=e.i(91398),a=e.i(88850),r=e.i(82948),l=e.i(28137);function s(){return(0,t.jsxs)(l.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["DataScroller uses a semantic list element to list the items. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the container element. List element can be also customized for accessibility using ",(0,t.jsx)("i",{children:"listProps"})," property."]}),(0,t.jsx)("h4",{children:"Keyboard Support"}),(0,t.jsx)("p",{children:"Component does not include any built-in interactive elements."})]})}var i=e.i(5180),c=e.i(57724),n=e.i(91788),o=e.i(10836),d=e.i(183),m=e.i(15498),u=e.i(60150),p=e.i(20484),g=e.i(4632),x=e.i(71834),f=e.i(51551),v=e.i(3935);let h=`
@layer primereact {
    .p-datascroller .p-datascroller-header {
        text-align: center;
        padding: .5em .75em;
        border-bottom: 0 none;
    }
    
    .p-datascroller .p-datascroller-footer {
        text-align: center;
        padding: .25em .625em;
        border-top: 0px none;
    }
    
    .p-datascroller .p-datascroller-content {
        padding: .25em .625em;
    }
    
    .p-datascroller-inline .p-datascroller-content {
        overflow: auto;
    }
    
    .p-datascroller .p-datascroller-list {
        list-style-type: none; 
        margin: 0;
        padding: 0;
    }
}
`,S=m.ComponentBase.extend({defaultProps:{__TYPE:"DataScroller",id:null,value:null,rows:0,inline:!1,scrollHeight:null,loader:!1,buffer:.9,style:null,className:null,onLazyLoad:null,emptyMessage:null,itemTemplate:null,header:null,footer:null,lazy:!1,children:void 0},css:{classes:{header:"p-datascroller-header",footer:"p-datascroller-footer",content:"p-datascroller-content",list:"p-datascroller-list",root:({props:e})=>(0,v.classNames)("p-datascroller p-component",{"p-datascroller-inline":e.inline})},styles:h,inlineStyles:{content:({props:e})=>({maxHeight:e.scrollHeight})}}}),b=n.memo(n.forwardRef((e,a)=>{let r,l,s,i,c,h,b,N=(0,u.useMergeProps)(),y=n.useContext(o.PrimeReactContext),w=S.getProps(e,y),[T,j]=n.useState([]),{ptm:O,cx:P,sx:C,isUnstyled:D}=S.setMetaData({props:w});(0,m.useHandleStyle)(S.css.styles,D,{name:"datascroller"});let k=n.useRef(null),R=n.useRef(null),K=n.useRef(w.value),L=n.useRef([]),B=n.useRef(0),E=n.useRef(null),F=()=>{if(w.lazy)w.onLazyLoad&&w.onLazyLoad(I()),B.current=B.current+w.rows;else if(K.current){for(let e=B.current;e<B.current+w.rows&&!(e>=K.current.length);e++)L.current.push(K.current[e]);0!==K.current.length&&(B.current=B.current+w.rows),j([...L.current])}},U=()=>{B.current=0,L.current=[],j([...L.current]),F()},I=()=>({first:B.current,rows:w.rows}),$=()=>{w.inline?(E.current=()=>{let e=R.current.scrollTop,t=R.current.scrollHeight,a=R.current.clientHeight;e>=t*w.buffer-a&&F()},R.current.addEventListener("scroll",E.current)):(E.current=()=>{let e=document.body,t=document.documentElement,a=window.pageYOffset||document.documentElement.scrollTop,r=t.clientHeight;a>=Math.max(e.scrollHeight,e.offsetHeight,r,t.scrollHeight,t.offsetHeight)*w.buffer-r&&F()},window.addEventListener("scroll",E.current))},A=()=>{E.current&&(w.inline&&R.current?R.current.removeEventListener("scroll",E.current):w.loader||window.removeEventListener("scroll",E.current)),E.current=null};(0,p.useMountEffect)(()=>{F(),w.loader||$()}),(0,x.useUpdateEffect)(()=>{w.value&&(K.current=w.value,w.lazy||(B.current=0),L.current=[],w.lazy?(L.current=K.current,j([...L.current])):F())},[w.value]),(0,x.useUpdateEffect)(()=>{w.loader?A():$()},[w.loader]),(0,g.useUnmountEffect)(()=>{E.current&&A()}),n.useImperativeHandle(a,()=>({props:w,load:F,reset:U,getElement:()=>k.current,getContent:()=>R.current}));let H=(r=N({className:P("header")},O("header")),w.header?(0,t.jsx)("div",{...r,children:w.header}):null),M=(l=N({className:P("footer")},O("footer")),w.footer?(0,t.jsx)("div",{...l,children:w.footer}):null),W=(s=N({ref:R,className:P("content"),style:C("content")},O("content")),i=N({className:P("list")},O("list")),b=f.ObjectUtils.isNotEmpty(T)?T.map((e,t)=>{let a=O("item"),r=w.itemTemplate?w.itemTemplate(e):e;return(0,n.createElement)("li",{...a,key:t+"_datascrollitem"},r)}):(c=N(O("emptyMessage")),h=f.ObjectUtils.getJSXElement(w.emptyMessage,w)||(0,d.localeOption)("emptyMessage"),(0,t.jsx)("li",{...c,children:h})),(0,t.jsx)("div",{...s,children:(0,t.jsx)("ul",{...i,children:b})})),_=N({id:w.id,ref:k,className:(0,v.classNames)(w.className,P("root"))},S.getOtherProps(w),O("root"));return(0,t.jsxs)("div",{..._,children:[H,W,M]})}));b.displayName="DataScroller";var N=e.i(80140),y=e.i(39682),w=e.i(66534);function T(e){let[a,r]=(0,n.useState)([]);(0,n.useEffect)(()=>{w.ProductService.getProducts().then(e=>r(e))},[]);let s={basic:`
<DataScroller value={products} itemTemplate={itemTemplate} rows={5} buffer={0.4} header="List of Products" />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

export default function BasicDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${data.image}\`} alt={data.name} />
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <div className="text-2xl font-bold text-900">{data.name}</div>
                                <div className="text-700">{data.description}</div>
                            </div>
                            <div className="flex flex-column gap-2">
                                <Rating value={data.rating} readOnly cancel={false}></Rating>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag product-category-icon"></i>
                                    <span className="font-semibold">{data.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-2xl font-semibold">\${data.price}</span>
                            <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                            <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <DataScroller value={products} itemTemplate={itemTemplate} rows={5} buffer={0.4} header="List of Products" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

export default function BasicDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (data: Product) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${data.image}\`} alt={data.name} />
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <div className="text-2xl font-bold text-900">{data.name}</div>
                                <div className="text-700">{data.description}</div>
                            </div>
                            <div className="flex flex-column gap-2">
                                <Rating value={data.rating} readOnly cancel={false}></Rating>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag product-category-icon"></i>
                                    <span className="font-semibold">{data.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-2xl font-semibold">\${data.price}</span>
                            <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                            <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <DataScroller value={products} itemTemplate={itemTemplate} rows={5} buffer={0.4} header="List of Products" />
        </div>
    )
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"DataScroller displays data with on demand loading using scroll."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(b,{value:a,itemTemplate:e=>(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("div",{className:"flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",children:[(0,t.jsx)("img",{className:"w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round",src:`https://primefaces.org/cdn/primereact/images/product/${e.image}`,alt:e.name}),(0,t.jsxs)("div",{className:"flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4",children:[(0,t.jsxs)("div",{className:"flex flex-column align-items-center lg:align-items-start gap-3",children:[(0,t.jsxs)("div",{className:"flex flex-column gap-1",children:[(0,t.jsx)("div",{className:"text-2xl font-bold text-900",children:e.name}),(0,t.jsx)("div",{className:"text-700",children:e.description})]}),(0,t.jsxs)("div",{className:"flex flex-column gap-2",children:[(0,t.jsx)(N.Rating,{value:e.rating,readOnly:!0,cancel:!1}),(0,t.jsxs)("span",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("i",{className:"pi pi-tag product-category-icon"}),(0,t.jsx)("span",{className:"font-semibold",children:e.category})]})]})]}),(0,t.jsxs)("div",{className:"flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2",children:[(0,t.jsxs)("span",{className:"text-2xl font-semibold",children:["$",e.price]}),(0,t.jsx)(c.Button,{icon:"pi pi-shopping-cart",label:"Add to Cart",disabled:"OUTOFSTOCK"===e.inventoryStatus}),(0,t.jsx)(y.Tag,{value:e.inventoryStatus,severity:(e=>{switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}})(e)})]})]})]})}),rows:5,buffer:.4,header:"List of Products"})}),(0,t.jsx)(i.DocSectionCode,{code:s,service:["ProductService"]})]})}function j(e){let a={basic:`
import { DataScroller } from 'primereact/datascroller';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function O(e){let[a,r]=(0,n.useState)([]);(0,n.useEffect)(()=>{w.ProductService.getProducts().then(e=>r(e))},[]);let s={basic:`
<DataScroller value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

export default function InlineDataScrollerDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${data.image}\`} alt={data.name} />
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <div className="text-2xl font-bold text-900">{data.name}</div>
                                <div className="text-700">{data.description}</div>
                            </div>
                            <div className="flex flex-column gap-2">
                                <Rating value={data.rating} readOnly cancel={false}></Rating>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag product-category-icon"></i>
                                    <span className="font-semibold">{data.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-2xl font-semibold">\${data.price}</span>
                            <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                            <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <DataScroller value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

export default function InlineDataScrollerDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (data: Product) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${data.image}\`} alt={data.name} />
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <div className="text-2xl font-bold text-900">{data.name}</div>
                                <div className="text-700">{data.description}</div>
                            </div>
                            <div className="flex flex-column gap-2">
                                <Rating value={data.rating} readOnly cancel={false}></Rating>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag product-category-icon"></i>
                                    <span className="font-semibold">{data.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-2xl font-semibold">\${data.price}</span>
                            <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                            <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <DataScroller value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
        </div>
    )
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"DataScroller can listen scroll event of itself rather than document in inline mode."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(b,{value:a,itemTemplate:e=>(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("div",{className:"flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",children:[(0,t.jsx)("img",{className:"w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round",src:`https://primefaces.org/cdn/primereact/images/product/${e.image}`,alt:e.name}),(0,t.jsxs)("div",{className:"flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4",children:[(0,t.jsxs)("div",{className:"flex flex-column align-items-center lg:align-items-start gap-3",children:[(0,t.jsxs)("div",{className:"flex flex-column gap-1",children:[(0,t.jsx)("div",{className:"text-2xl font-bold text-900",children:e.name}),(0,t.jsx)("div",{className:"text-700",children:e.description})]}),(0,t.jsxs)("div",{className:"flex flex-column gap-2",children:[(0,t.jsx)(N.Rating,{value:e.rating,readOnly:!0,cancel:!1}),(0,t.jsxs)("span",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("i",{className:"pi pi-tag product-category-icon"}),(0,t.jsx)("span",{className:"font-semibold",children:e.category})]})]})]}),(0,t.jsxs)("div",{className:"flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2",children:[(0,t.jsxs)("span",{className:"text-2xl font-semibold",children:["$",e.price]}),(0,t.jsx)(c.Button,{icon:"pi pi-shopping-cart",label:"Add to Cart",disabled:"OUTOFSTOCK"===e.inventoryStatus}),(0,t.jsx)(y.Tag,{value:e.inventoryStatus,severity:(e=>{switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}})(e)})]})]})]})}),rows:5,inline:!0,scrollHeight:"500px",header:"Scroll Down to Load More"})}),(0,t.jsx)(i.DocSectionCode,{code:s,service:["ProductService"]})]})}function P(e){let[a,r]=(0,n.useState)([]),s=(0,n.useRef)(null);(0,n.useEffect)(()=>{w.ProductService.getProducts().then(e=>r(e))},[]);let o=(0,t.jsx)(c.Button,{type:"text",icon:"pi pi-plus",label:"Load",onClick:()=>s.current.load()}),d={basic:`
<DataScroller ref={ds} value={products} itemTemplate={itemTemplate} rows={5} loader footer={footer} header="Click Load Button at Footer to Load More" />
        `,javascript:`
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

export default function LoaderDataScrollerDemo() {
    const [products, setProducts] = useState([]);
    const ds = useRef(null);
    
    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${data.image}\`} alt={data.name} />
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <div className="text-2xl font-bold text-900">{data.name}</div>
                                <div className="text-700">{data.description}</div>
                            </div>
                            <div className="flex flex-column gap-2">
                                <Rating value={data.rating} readOnly cancel={false}></Rating>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag product-category-icon"></i>
                                    <span className="font-semibold">{data.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-2xl font-semibold">\${data.price}</span>
                            <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                            <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const footer = <Button type="text" icon="pi pi-plus" label="Load" onClick={() => ds.current.load()} />;

    return (
        <div className="card">
            <DataScroller ref={ds} value={products} itemTemplate={itemTemplate} rows={5} loader footer={footer} header="Click Load Button at Footer to Load More" />
        </div>
    )
}
        `,typescript:`
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

export default function LoaderDataScrollerDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const ds = useRef<null>(null);
    
    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (data: Product) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${data.image}\`} alt={data.name} />
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <div className="text-2xl font-bold text-900">{data.name}</div>
                                <div className="text-700">{data.description}</div>
                            </div>
                            <div className="flex flex-column gap-2">
                                <Rating value={data.rating} readOnly cancel={false}></Rating>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag product-category-icon"></i>
                                    <span className="font-semibold">{data.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-2xl font-semibold">\${data.price}</span>
                            <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                            <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const footer = <Button type="text" icon="pi pi-plus" label="Load" onClick={() => ds.current.load()} />;

    return (
        <div className="card">
            <DataScroller ref={ds} value={products} itemTemplate={itemTemplate} rows={5} loader footer={footer} header="Click Load Button at Footer to Load More" />
        </div>
    )
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Instead of scrolling, a custom element can be used to load data."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(b,{ref:s,value:a,itemTemplate:e=>(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("div",{className:"flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",children:[(0,t.jsx)("img",{className:"w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round",src:`https://primefaces.org/cdn/primereact/images/product/${e.image}`,alt:e.name}),(0,t.jsxs)("div",{className:"flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4",children:[(0,t.jsxs)("div",{className:"flex flex-column align-items-center lg:align-items-start gap-3",children:[(0,t.jsxs)("div",{className:"flex flex-column gap-1",children:[(0,t.jsx)("div",{className:"text-2xl font-bold text-900",children:e.name}),(0,t.jsx)("div",{className:"text-700",children:e.description})]}),(0,t.jsxs)("div",{className:"flex flex-column gap-2",children:[(0,t.jsx)(N.Rating,{value:e.rating,readOnly:!0,cancel:!1}),(0,t.jsxs)("span",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("i",{className:"pi pi-tag product-category-icon"}),(0,t.jsx)("span",{className:"font-semibold",children:e.category})]})]})]}),(0,t.jsxs)("div",{className:"flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2",children:[(0,t.jsxs)("span",{className:"text-2xl font-semibold",children:["$",e.price]}),(0,t.jsx)(c.Button,{icon:"pi pi-shopping-cart",label:"Add to Cart",disabled:"OUTOFSTOCK"===e.inventoryStatus}),(0,t.jsx)(y.Tag,{value:e.inventoryStatus,severity:(e=>{switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}})(e)})]})]})]})}),rows:5,loader:!0,footer:o,header:"Click Load Button at Footer to Load More"})}),(0,t.jsx)(i.DocSectionCode,{code:d,service:["ProductService"]})]})}function C(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datascroller"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datascroller-header"}),(0,t.jsx)("td",{children:"Header section."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datascroller-footer"}),(0,t.jsx)("td",{children:"Footer section."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datascroller-content"}),(0,t.jsx)("td",{children:"Wrapper of item container."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datascroller-list"}),(0,t.jsx)("td",{children:"Item container element."})]})]})]})})]})}var D=e.i(41158);function k(e){let a={basic:`
const Tailwind = {
    datascroller: {
        content: {
            className: classNames(
                'bg-white blue-gray-700 border-0 p-0',
                'dark:bg-gray-900 dark:text-white/80' // Dark Mode
            )
        },
        grid: 'flex flex-wrap ml-0 mr-0 mt-0 bg-white dark:bg-gray-900',
        header: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white/80 border-gray-200 dark:border-blue-900/40 border-t border-b p-4 font-bold'
    },
}
        `},r={javascript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

export default function UnstyledDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (data) => {
        return (
            <div className="flex flex-col xl:flex-row xl:items-start p-4 gap-4">
                <img className="w-3/4 sm:w-64 xl:w-40 shadow-2 block xl:block mx-auto rounded" src={\`https://primefaces.org/cdn/primereact/images/product/\${data.image}\`} alt={data.name} />
                <div className="flex flex-col lg:flex-row justify-between items-center xl:items-start lg:flex-1 gap-4">
                    <div className="flex flex-col items-center lg:items-start gap-3">
                        <div className="flex flex-col  gap-1">
                            <div className="text-2xl font-bold text-900 dark:text-white/80">{data.name}</div>
                            <div className="text-700 dark:text-white/80">{data.description}</div>
                        </div>
                        <div className="flex flex-col  gap-2">
                            <Rating value={data.rating} readOnly cancel={false}></Rating>
                            <span className="flex items-center gap-2">
                                <i className="pi pi-tag product-category-icon dark:text-white/80"></i>
                                <span className="font-semibold dark:text-white/80">{data.category}</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-end gap-4 lg:gap-2">
                        <span className="text-2xl font-semibold dark:text-white/80">\${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <DataScroller value={products} itemTemplate={itemTemplate} rows={5} buffer={0.4} header="List of Products" />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(l.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(D.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(i.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(i.DocSectionCode,{code:r,embedded:!0,service:["ProductService"]})]})})}let R=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/datascroller.jpg",alt:"datascroller"})})]});e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:R},{id:"pt.datascroller.options",label:"DataScroller PT Options",component:a.default}];return(0,t.jsx)(r.DocComponent,{title:"React DataScroller Component",header:"DataScroller",description:"DataScroller displays data with on demand loading using scroll.",componentDocs:[{id:"import",label:"Import",component:j},{id:"basic",label:"Basic",component:T},{id:"inline",label:"Inline",component:O},{id:"loader",label:"Loader",component:P},{id:"accessibility",label:"Accessibility",component:s}],apiDocs:["DataScroller"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:C},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:k}]}]})}],35307)},85564,(e,t,a)=>{let r="/datascroller";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(35307)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})}]);