(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},86310,e=>{"use strict";var t=e.i(91398),r=e.i(88850),i=e.i(82948),s=e.i(28137);function a(){return(0,t.jsxs)(s.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["VirtualScroller uses a semantic list element to list the items. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the container element. List element can be also customized for accessibility using ",(0,t.jsx)("i",{children:"listProps"})," property."]}),(0,t.jsx)("h4",{children:"Keyboard Support"}),(0,t.jsx)("p",{children:"Component does not include any built-in interactive elements."})]})}var l=e.i(5180),o=e.i(3935),m=e.i(25926),n=e.i(91788);function c(e){let[r]=(0,n.useState)(Array.from({length:1e5}).map((e,t)=>`Item #${t}`)),i={basic:`
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} 
    className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        `,javascript:`
import React, { useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function BasicDemo() {
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

    const itemTemplate = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize + 'px' }}>
                {item}
            </div>
        );
    };

    return ( 
        <div className="card flex justify-content-center">
            <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { VirtualScroller, VirtualScrollerTemplateOptions } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function BasicDemo() {
    const [items] = useState<string[]>(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

    const itemTemplate = (item: string, options: VirtualScrollerTemplateOptions) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize + 'px' }}>
                {item}
            </div>
        );
    };

    return ( 
        <div className="card flex justify-content-center">
            <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["VirtualScroller requires ",(0,t.jsx)("i",{children:"items"})," as the data to display, ",(0,t.jsx)("i",{children:"itemSize"})," for the dimensions of an item and ",(0,t.jsx)("i",{children:"itemTemplate"})," to define the content per item. Size of the viewport is configured using",(0,t.jsx)("i",{children:"scrollWidth"}),", ",(0,t.jsx)("i",{children:"scrollHeight"})," properties directly or with CSS ",(0,t.jsx)("i",{children:"width"})," and ",(0,t.jsx)("i",{children:"height"})," styles."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(m.VirtualScroller,{items:r,itemSize:50,itemTemplate:(e,r)=>{let i=(0,o.classNames)("flex align-items-center p-2",{"surface-hover":r.odd});return(0,t.jsx)("div",{className:i,style:{height:r.props.itemSize+"px"},children:e})},className:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}})}),(0,t.jsx)(l.DocSectionCode,{code:i})]})}function d(e){let[r]=(0,n.useState)(Array.from({length:1e5}).map((e,t)=>`Item #${t}`)),i=(e,r)=>{let i=(0,o.classNames)("flex align-items-center p-2",{"surface-hover":r.odd});return(0,t.jsx)("div",{className:i,style:{height:r.props.itemSize+"px"},children:e})},a={basic:`
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} delay={150} />
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} delay={500} />
        `,javascript:`
import React, { useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function DelayDemo() {
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

    const itemTemplate = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize + 'px' }}>
                {item}
            </div>
        );
    };

    return ( 
        <div className="card flex flex-wrap justify-content-center gap-5">
            <div>
                <span className="font-bold block mb-2">No Delay</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
            <div>
                <span className="font-bold block mb-2">150ms</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} delay={150} />
            </div>
            <div>
                <span className="font-bold block mb-2">500ms</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} delay={500} />
            </div>
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { VirtualScroller, VirtualScrollerTemplateOptions } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function DelayDemo() {
    const [items] = useState<string[]>(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

    const itemTemplate = (item: string, options: VirtualScrollerTemplateOptions) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize + 'px' }}>
                {item}
            </div>
        );
    };

    return ( 
        <div className="card flex flex-wrap justify-content-center gap-5">
            <div>
                <span className="font-bold block mb-2">No Delay</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
            <div>
                <span className="font-bold block mb-2">150ms</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} delay={150} />
            </div>
            <div>
                <span className="font-bold block mb-2">500ms</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} delay={500} />
            </div>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("i",{children:"delay"})," property adds a threshold to wait in milliseconds during scrolling for render optimization."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-5",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"font-bold block mb-2",children:"No Delay"}),(0,t.jsx)(m.VirtualScroller,{items:r,itemSize:50,itemTemplate:i,className:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"font-bold block mb-2",children:"150ms"}),(0,t.jsx)(m.VirtualScroller,{items:r,itemSize:50,itemTemplate:i,className:"border-1 surface-border border-round",style:{width:"200px",height:"200px"},delay:150})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"font-bold block mb-2",children:"500ms"}),(0,t.jsx)(m.VirtualScroller,{items:r,itemSize:50,itemTemplate:i,className:"border-1 surface-border border-round",style:{width:"200px",height:"200px"},delay:500})]})]}),(0,t.jsx)(l.DocSectionCode,{code:a})]})}function p(e){let[r]=(0,n.useState)(Array.from({length:1e3}).map((e,t)=>Array.from({length:1e3}).map((e,r)=>`Item #${t}_${r}`))),i={basic:`
<VirtualScroller items={items} itemSize={[50, 100]} itemTemplate={itemTemplate} orientation="both" 
    className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        `,javascript:`
import React, { useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function GridDemo() {
    const [items] = useState(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`)));

    const itemTemplate = (items, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize[0] + 'px' }}>
                {items.map((item, i) => {
                    return (
                        <div key={i} style={{ width: options.props.itemSize[1] + 'px' }}>
                            {item}
                        </div>
                    );
                })}
            </div>
        );
    };

    return ( 
        <div className="card flex justify-content-center">
            <VirtualScroller items={items} itemSize={[50, 100]} itemTemplate={itemTemplate} orientation="both" className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { VirtualScroller, VirtualScrollerTemplateOptions } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function GridDemo() {
    const [items] = useState<string[][]>(Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => \`Item #\${i}_\${j}\`)));

    const itemTemplate = (items: string[], options: VirtualScrollerTemplateOptions) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize[0] + 'px' }}>
                {items.map((item, i) => {
                    return (
                        <div key={i} style={{ width: options.props.itemSize[1] + 'px' }}>
                            {item}
                        </div>
                    );
                })}
            </div>
        );
    };

    return ( 
        <div className="card flex justify-content-center">
            <VirtualScroller items={items} itemSize={[50, 100]} itemTemplate={itemTemplate} orientation="both" className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Scrolling can be enabled vertically and horizontally when ",(0,t.jsx)("i",{children:"orientation"})," is set as ",(0,t.jsx)("i",{children:"both"}),". In this mode, ",(0,t.jsx)("i",{children:"itemSize"})," should be an array where first value is the height of an item and second is the width."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(m.VirtualScroller,{items:r,itemSize:[50,100],itemTemplate:(e,r)=>{let i=(0,o.classNames)("flex align-items-center p-2",{"surface-hover":r.odd});return(0,t.jsx)("div",{className:i,style:{height:r.props.itemSize[0]+"px"},children:e.map((e,i)=>(0,t.jsx)("div",{style:{width:r.props.itemSize[1]+"px"},children:e},i))})},orientation:"both",className:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}})}),(0,t.jsx)(l.DocSectionCode,{code:i})]})}function h(e){let[r]=(0,n.useState)(Array.from({length:1e5}).map((e,t)=>`Item #${t}`)),i={basic:`
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} orientation="horizontal"
    className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        `,javascript:`
import React, { useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function HorizontalDemo() {
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

    const itemTemplate = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ width: options.props.itemSize + 'px', writingMode: 'vertical-lr' }}>
                {item}
            </div>
        );
    };

    return ( 
        <div className="card flex justify-content-center">
            <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} orientation="horizontal" className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { VirtualScroller, VirtualScrollerTemplateOptions } from 'primereact/virtualscroller';
import { classNames } from 'primereact/utils';

export default function HorizontalDemo() {
    const [items] = useState<string[]>(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

    const itemTemplate = (item: string, options: VirtualScrollerTemplateOptions) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ width: options.props.itemSize + 'px', writingMode: 'vertical-lr' }}>
                {item}
            </div>
        );
    };

    return ( 
        <div className="card flex justify-content-center">
            <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} orientation="horizontal" className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Setting ",(0,t.jsx)("i",{children:"orientation"})," to ",(0,t.jsx)("i",{children:"horizontal"})," enables scrolling horizontally. In this case, the ",(0,t.jsx)("i",{children:"itemSize"})," should refer to the width of an item."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(m.VirtualScroller,{items:r,itemSize:50,itemTemplate:(e,r)=>{let i=(0,o.classNames)("flex align-items-center p-2",{"surface-hover":r.odd});return(0,t.jsx)("div",{className:i,style:{width:r.props.itemSize+"px",writingMode:"vertical-lr"},children:e})},orientation:"horizontal",className:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}})}),(0,t.jsx)(l.DocSectionCode,{code:i})]})}function u(e){let r={basic:`
import { VirtualScroller } from 'primereact/virtualscroller';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)(l.DocSectionCode,{code:r,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}var f=e.i(50513);function x(e){let[r,i]=(0,n.useState)([]),[a,c]=(0,n.useState)(!0),d=(0,n.useRef)(null);(0,n.useEffect)(()=>{i(Array.from({length:1e5})),c(!1)},[]);let p={basic:`
<VirtualScroller items={lazyItems} itemSize={50} itemTemplate={itemTemplate} lazy onLazyLoad={onLazyLoad} 
    loadingTemplate={loadingTemplate} showLoader loading={lazyLoading} 
    className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { Skeleton } from 'primereact/skeleton';
import { classNames } from 'primereact/utils';

export default function LazyDemo() {
    const [lazyItems, setLazyItems] = useState([]);
    const [lazyLoading, setLazyLoading] = useState(true);
    const loadLazyTimeout = useRef(null);

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    }, []);

    const onLazyLoad = (event) => {
        setLazyLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(() => {
            const { first, last } = event;
            const _lazyItems = [...lazyItems];

            for (let i = first; i < last; i++) {
                _lazyItems[i] = \`Item #\${i}\`;
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    };

    const itemTemplate = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize + 'px' }}>
                {item}
            </div>
        );
    };

    const loadingTemplate = (options) => {
        const className = classNames('flex align-items-center p-2', {
            odd: options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    };

    return ( 
        <div className="card flex justify-content-center">
            <VirtualScroller items={lazyItems} itemSize={50} itemTemplate={itemTemplate} lazy onLazyLoad={onLazyLoad} loadingTemplate={loadingTemplate}
                showLoader loading={lazyLoading} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { VirtualScroller, VirtualScrollerTemplateOptions, VirtualScrollerLazyEvent } from 'primereact/virtualscroller';
import { Skeleton } from 'primereact/skeleton';
import { classNames } from 'primereact/utils';

export default function LazyDemo() {
    const [lazyItems, setLazyItems] = useState<string[]>([]);
    const [lazyLoading, setLazyLoading] = useState<boolean>(true);
    const loadLazyTimeout = useRef(null);

    useEffect(() => {
        setLazyItems(Array.from({ length: 100000 }));
        setLazyLoading(false);
    }, []);

    const onLazyLoad = (event: VirtualScrollerLazyEvent) => {
        setLazyLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(() => {
            const { first, last } = event;
            const _lazyItems = [...lazyItems];

            for (let i = first; i < last; i++) {
                _lazyItems[i] = \`Item #\${i}\`;
            }

            setLazyItems(_lazyItems);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    };

    const itemTemplate = (item: string, options: VirtualScrollerTemplateOptions) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize + 'px' }}>
                {item}
            </div>
        );
    };

    const loadingTemplate = (options: VirtualScrollerTemplateOptions) => {
        const className = classNames('flex align-items-center p-2', {
            odd: options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <VirtualScroller items={lazyItems} itemSize={50} itemTemplate={itemTemplate} lazy onLazyLoad={onLazyLoad} loadingTemplate={loadingTemplate}
                showLoader loading={lazyLoading} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded on demand. To implement lazy loading, enable the ",(0,t.jsx)("i",{children:"lazy"}),"property and implement ",(0,t.jsx)("i",{children:"onLazyLoad"})," callback to return data."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(m.VirtualScroller,{items:r,itemSize:50,itemTemplate:(e,r)=>{let i=(0,o.classNames)("flex align-items-center p-2",{"surface-hover":r.odd});return(0,t.jsx)("div",{className:i,style:{height:r.props.itemSize+"px"},children:e})},lazy:!0,onLazyLoad:e=>{c(!0),d.current&&clearTimeout(d.current),d.current=setTimeout(()=>{let{first:t,last:s}=e,a=[...r];for(let e=t;e<s;e++)a[e]=`Item #${e}`;i(a),c(!1)},1e3*Math.random()+250)},loadingTemplate:e=>{let r=(0,o.classNames)("flex align-items-center p-2",{odd:e.odd});return(0,t.jsx)("div",{className:r,style:{height:"50px"},children:(0,t.jsx)(f.Skeleton,{width:e.even?"60%":"50%",height:"1.3rem"})})},showLoader:!0,loading:a,className:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}})}),(0,t.jsx)(l.DocSectionCode,{code:p})]})}var y=e.i(41158);function b(e){let[r]=(0,n.useState)(Array.from({length:1e5}).map((e,t)=>`Item #${t}`)),i=(e,r)=>{let i=(0,o.classNames)("flex align-items-center p-2",{"surface-hover":r.odd});return(0,t.jsx)("div",{className:i,style:{height:r.props.itemSize+"px"},children:e})},a={basic:`
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
<VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        `,javascript:`
import React, { useState } from 'react';
import { VirtualScroller } from 'primereact/virtualscroller';
import { Skeleton } from 'primereact/skeleton';
import { classNames } from 'primereact/utils';

export default function LoadingDemo() {
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

    const itemTemplate = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize + 'px' }}>
                {item}
            </div>
        );
    };

    const loadingTemplate = (options) => {
        const className = classNames('flex align-items-center p-2', {
            odd: options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    };

    return ( 
        <div className="card flex flex-wrap justify-content-center gap-5">
            <div>
                <span className="font-bold block mb-2">Modal</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
            <div>
                <span className="font-bold block mb-2">Skeleton</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { VirtualScroller, VirtualScrollerTemplateOptions } from 'primereact/virtualscroller';
import { Skeleton } from 'primereact/skeleton';
import { classNames } from 'primereact/utils';

export default function LoadingDemo() {
    const [items] = useState<string[]>(Array.from({ length: 100000 }).map((_, i) => \`Item #\${i}\`));

    const itemTemplate = (item: string, options: VirtualScrollerTemplateOptions) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize + 'px' }}>
                {item}
            </div>
        );
    };

    const loadingTemplate = (options: VirtualScrollerTemplateOptions) => {
        const className = classNames('flex align-items-center p-2', {
            odd: options.odd
        });

        return (
            <div className={className} style={{ height: '50px' }}>
                <Skeleton width={options.even ? '60%' : '50%'} height="1.3rem" />
            </div>
        );
    };

    return ( 
        <div className="card flex flex-wrap justify-content-center gap-5">
            <div>
                <span className="font-bold block mb-2">Modal</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
            <div>
                <span className="font-bold block mb-2">Skeleton</span>
                <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} showLoader delay={250} loadingTemplate={loadingTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
            </div>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Busy state is enabled by adding ",(0,t.jsx)("i",{children:"showLoader"})," property which blocks the UI with a modal by default. Alternatively, ",(0,t.jsx)("i",{children:"loadingTemplate"})," can be used to customize items e.g. with ",(0,t.jsx)(y.default,{href:"/skeleton",children:"Skeleton"}),"."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-5",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"font-bold block mb-2",children:"Modal"}),(0,t.jsx)(m.VirtualScroller,{items:r,itemSize:50,itemTemplate:i,showLoader:!0,delay:250,className:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"font-bold block mb-2",children:"Skeleton"}),(0,t.jsx)(m.VirtualScroller,{items:r,itemSize:50,itemTemplate:i,showLoader:!0,delay:250,loadingTemplate:e=>{let r=(0,o.classNames)("flex align-items-center p-2",{odd:e.odd});return(0,t.jsx)("div",{className:r,style:{height:"50px"},children:(0,t.jsx)(f.Skeleton,{width:e.even?"60%":"50%",height:"1.3rem"})})},className:"border-1 surface-border border-round",style:{width:"200px",height:"200px"}})]})]}),(0,t.jsx)(l.DocSectionCode,{code:a})]})}let g=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/virtualscroller.jpg",alt:"virtualscroller"})})]});function S(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-virtualscroller"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-virtualscroller-content"}),(0,t.jsx)("td",{children:"Content element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-virtualscroller-loader"}),(0,t.jsx)("td",{children:"Loader element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-virtualscroller-both"}),(0,t.jsx)("td",{children:"Container element when horizontal and vertical scrolling enabled."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-virtualscroller-horizontal"}),(0,t.jsx)("td",{children:"Container element when horizontal orientation."})]})]})]})})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:g},{id:"pt.virtualscroller.options",label:"VirtualScroller PT Options",component:r.default}];return(0,t.jsx)(i.DocComponent,{title:"React Virtual Scroller Component",header:"VirtualScroller",description:"VirtualScroller is a performant approach to render large amounts of data efficiently.",componentDocs:[{id:"import",label:"Import",component:u},{id:"basic",label:"Basic",component:c},{id:"horizontal",label:"Horizontal",component:h},{id:"grid",label:"Grid",component:p},{id:"delay",label:"Delay",component:d},{id:"loading",label:"Loading",component:b},{id:"lazy",label:"Lazy",component:x},{id:"accessibility",label:"Accessibility",component:a}],apiDocs:["VirtualScroller"],ptDocs:e,className:"virtualscroller-demo",themingDocs:[{id:"styled",label:"Styled",component:S}]})}],86310)},79777,(e,t,r)=>{let i="/virtualscroller";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(86310)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);