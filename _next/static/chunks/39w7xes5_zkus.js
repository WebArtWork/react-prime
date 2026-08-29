(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},83832,e=>{"use strict";var t=e.i(91398),l=e.i(88850),a=e.i(82948),r=e.i(5180),i=e.i(28137);function s(){let e={basic:`
<span id="label_number">Number</span>
<Slider aria-labelledby="label_number" />

<Slider aria-label="Number" />
    `};return(0,t.jsxs)(i.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Slider element component uses ",(0,t.jsx)("i",{children:"slider"})," role on the handle in addition to the ",(0,t.jsx)("i",{children:"aria-orientation"}),", ",(0,t.jsx)("i",{children:"aria-valuemin"}),", ",(0,t.jsx)("i",{children:"aria-valuemax"})," and ",(0,t.jsx)("i",{children:"aria-valuenow"})," attributes. Value to describe the component can be defined using",(0,t.jsx)("i",{children:"aria-labelledby"})," and ",(0,t.jsx)("i",{children:"aria-label"})," props."]}),(0,t.jsx)(r.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the slider."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsxs)("span",{className:"inline-flex flex-column",children:[(0,t.jsx)("i",{className:"mb-1",children:"left arrow"}),(0,t.jsx)("i",{children:"up arrow"})]})}),(0,t.jsx)("td",{children:"Decrements the value."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsxs)("span",{className:"inline-flex flex-column",children:[(0,t.jsx)("i",{className:"mb-1",children:"right arrow"}),(0,t.jsx)("i",{children:"down arrow"})]})}),(0,t.jsx)("td",{children:"Increments the value."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Set the minimum value."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Set the maximum value."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"page up"})}),(0,t.jsx)("td",{children:"Increments the value by 10 steps."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"page down"})}),(0,t.jsx)("td",{children:"Decrements the value by 10 steps."})]})]})]})})]})}var n=e.i(65157),c=e.i(91788);function o(e){let[l,a]=(0,c.useState)(null),s={basic:`
<Slider value={value} onChange={(e) => setValue(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { Slider } from "primereact/slider";

export default function BasicDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Slider, SliderChangeEvent } from "primereact/slider";

export default function BasicDemo() {
    const [value, setValue] = useState<number>(null);

    return (
        <div className="card flex justify-content-center">
            <Slider value={value} onChange={(e: SliderChangeEvent) => setValue(e.value)} className="w-14rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Slider is used as a controlled input with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(n.Slider,{value:l,onChange:e=>a(e.value),className:"w-14rem"})}),(0,t.jsx)(r.DocSectionCode,{code:s})]})}var d=e.i(76848);function u(e){let[l,a]=(0,c.useState)(0),[s,o]=(0,c.useState)([100,100,0]),u={basic:`
<img alt="user header" className="w-full md:w-20rem border-round mb-4" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" style={filterStyle()} />
<SelectButton value={filter} onChange={(e) => setFilter(e.value)} options={filterOptions} className="mb-3" />
<Slider
    value={filterValues[filter]}
    onChange={(e) => {
        const newFilterValues = [...filterValues];
        newFilterValues[filter] = e.value;
        setFilterValues(newFilterValues);
    }}
    className="w-14rem"
    min={0}
    max={200}
/>
        `,javascript:`
import React, { useState } from "react";
import { Slider } from "primereact/slider";
import { SelectButton } from "primereact/selectbutton";

export default function FilterDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column align-items-center">
                <img alt="user header" className="w-full md:w-20rem border-round mb-4" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" style={filterStyle()} />
                <SelectButton value={filter} onChange={(e) => setFilter(e.value)} options={filterOptions} className="mb-3" />
                <Slider
                    value={filterValues[filter]}
                    onChange={(e) => {
                        const newFilterValues = [...filterValues];
                        newFilterValues[filter] = e.value;
                        setFilterValues(newFilterValues);
                    }}
                    className="w-14rem"
                    min={0}
                    max={200}
                />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Slider, SliderChangeEvent } from "primereact/slider";
import { SelectButton } from "primereact/selectbutton";

export default function FilterDemo() {
    const [value, setValue] = useState<number>(null);

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column align-items-center">
                <img alt="user header" className="w-full md:w-20rem border-round mb-4" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" style={filterStyle()} />
                <SelectButton value={filter} onChange={(e) => setFilter(e.value)} options={filterOptions} className="mb-3" />
                <Slider
                    value={filterValues[filter]}
                    onChange={(e) => {
                        const newFilterValues = [...filterValues];
                        newFilterValues[filter] = e.value;
                        setFilterValues(newFilterValues);
                    }}
                    className="w-14rem"
                    min={0}
                    max={200}
                />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Slider is used as a controlled input with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)("div",{className:"flex flex-column align-items-center",children:[(0,t.jsx)("img",{alt:"user header",className:"w-full md:w-20rem border-round mb-4",src:"https://primefaces.org/cdn/primevue/images/card-vue.jpg",style:{filter:`contrast(${s[0]}%) brightness(${s[1]}%) sepia(${s[2]}%)`}}),(0,t.jsx)(d.SelectButton,{value:l,onChange:e=>a(e.value),options:[{label:"Contrast",value:0},{label:"Brightness",value:1},{label:"Sepia",value:2}],className:"mb-3"}),(0,t.jsx)(n.Slider,{value:s[l],onChange:e=>{let t=[...s];t[l]=e.value,o(t)},className:"w-14rem",min:0,max:200})]})}),(0,t.jsx)(r.DocSectionCode,{code:u})]})}function m(e){let l={basic:`
import { Slider } from 'primereact/slider';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)(r.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}var h=e.i(66082);function p(e){let[l,a]=(0,c.useState)(50),s={basic:`
<InputText value={value} onChange={(e) => setValue(e.target.value)} />
<Slider value={value} onChange={(e) => setValue(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { Slider } from "primereact/slider";
import { InputText } from "primereact/inputtext";

export default function InputDemo() {
    const [value, setValue] = useState(50);

    return (
        <div className="card flex justify-content-center">
            <div className="w-14rem">
                <InputText value={value} onChange={(e) => setValue(e.target.value)} className="w-full" />
                <Slider value={value} onChange={(e) => setValue(e.value)} className="w-full" />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Slider, SliderChangeEvent } from "primereact/slider";
import { InputText } from "primereact/inputtext";

export default function InputDemo() {
    const [value, setValue] = useState<number>(50);

    return (
        <div className="card flex justify-content-center">
            <div className="w-14rem">
                <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} className="w-full" />
                <Slider value={value} onChange={(e: SliderChangeEvent) => setValue(e.value)} className="w-full" />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Slider is connected to an input field using two-way binding."})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)("div",{className:"w-14rem",children:[(0,t.jsx)(h.InputText,{value:l,onChange:e=>a(e.target.value),className:"w-full"}),(0,t.jsx)(n.Slider,{value:l,onChange:e=>a(e.value),className:"w-full"})]})}),(0,t.jsx)(r.DocSectionCode,{code:s})]})}let v=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/slider.jpg",alt:"slider"})})]});function x(e){let[l,a]=(0,c.useState)([20,80]),s={basic:`
<Slider value={value} onChange={(e) => setValue(e.value)} range />
        `,javascript:`
import React, { useState } from "react";
import { Slider } from "primereact/slider";

export default function RangeDemo() {
    const [value, setValue] = useState([20,80]);

    return (
        <div className="card flex justify-content-center">
            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" range />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Slider, SliderChangeEvent } from "primereact/slider";

export default function RangeDemo() {
    const [value, setValue] = useState<number[]>([20,80]);

    return (
        <div className="card flex justify-content-center">
            <Slider value={value} onChange={(e: SliderChangeEvent) => setValue(e.value)} className="w-14rem" range/>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"range"})," property is present, slider provides two handles to define two values. In range mode, value should be an array instead of a single value."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(n.Slider,{value:l,onChange:e=>a(e.value),range:!0,className:"w-14rem"})}),(0,t.jsx)(r.DocSectionCode,{code:s})]})}function f(e){let[l,a]=(0,c.useState)(20),s={basic:`
<Slider value={value} onChange={(e) => setValue(e.value)} step={20} />
        `,javascript:`
import React, { useState } from "react";
import { Slider } from "primereact/slider";

export default function StepDemo() {
    const [value, setValue] = useState(20);

    return (
        <div className="card flex justify-content-center">
            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" step={20} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Slider, SliderChangeEvent } from "primereact/slider";

export default function StepDemo() {
    const [value, setValue] = useState<number>(20);

    return (
        <div className="card flex justify-content-center">
            <Slider value={value} onChange={(e: SliderChangeEvent) => setValue(e.value)} className="w-14rem" step={20} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Size of each movement is defined with the ",(0,t.jsx)("i",{children:"step"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(n.Slider,{value:l,onChange:e=>a(e.value),className:"w-14rem",step:20})}),(0,t.jsx)(r.DocSectionCode,{code:s})]})}function j(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-slider"}),(0,t.jsx)("td",{children:"Container element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-slider-handle"}),(0,t.jsx)("td",{children:"Handle element."})]})]})]})})]})}var S=e.i(41158);function g(e){let l={basic:`
const Tailwind = {  
    slider: {
        root: ({ props }) => ({
            className: classNames(
                'relative',
                'bg-gray-100 dark:bg-gray-800 border-0 rounded-6',
                { 'h-1 w-56': props.orientation == 'horizontal', 'w-1 h-56': props.orientation == 'vertical' },
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            )
        }),
        range: ({ props }) => ({
            className: classNames('bg-blue-500', 'block absolute', {
                'top-0 left-0 h-full': props.orientation == 'horizontal',
                'bottom-0 left-0 w-full': props.orientation == 'vertical'
            })
        }),
        handle: ({ props }) => ({
            className: classNames(
                'h-4 w-4 bg-white dark:bg-gray-600 border-2 border-blue-500 rounded-full transition duration-200',
                'cursor-grab touch-action-none block',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                'hover:bg-blue-500 hover:border hover:border-blue-500',
                {
                    'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                    'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical'
                }
            )
        })
    }
}
    `},a={javascript:`
import React, { useState } from "react";
import { Slider } from "primereact/slider";

export default function UnstyledDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-center">
            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(S.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(r.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(r.DocSectionCode,{code:a,embedded:!0})]})})}function b(e){let[l,a]=(0,c.useState)(50),s={basic:`
<Slider value={value} onChange={(e) => setValue(e.value)} orientation="vertical" />
        `,javascript:`
import React, { useState } from "react";
import { Slider } from "primereact/slider";

export default function VerticalDemo() {
    const [value, setValue] = useState(50);

    return (
        <div className="card flex justify-content-center">
            <Slider value={value} onChange={(e) => setValue(e.value)} orientation="vertical" className="h-14rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Slider, SliderChangeEvent } from "primereact/slider";

export default function VerticalDemo() {
    const [value, setValue] = useState<number>(50);

    return (
        <div className="card flex justify-content-center">
            <Slider value={value} onChange={(e: SliderChangeEvent) => setValue(e.value)} orientation="vertical" className="h-14rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Default layout of slider is ",(0,t.jsx)("i",{children:"horizontal"}),", use ",(0,t.jsx)("i",{children:"orientation"})," property for the alternative ",(0,t.jsx)("i",{children:"vertical"})," mode."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(n.Slider,{value:l,onChange:e=>a(e.value),orientation:"vertical",className:"h-14rem"})}),(0,t.jsx)(r.DocSectionCode,{code:s})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:v},{id:"pt.slider.options",label:"Slider PT Options",component:l.default}];return(0,t.jsx)(a.DocComponent,{title:"React Slider Component",header:"Slider",description:"Slider is a component to provide input with a drag handle.",componentDocs:[{id:"import",label:"Import",component:m},{id:"basic",label:"Basic",component:o},{id:"input",label:"Input",component:p},{id:"step",label:"Step",component:f},{id:"range",label:"Range",component:x},{id:"filter",label:"Filter",component:u},{id:"vertical",label:"Vertical",component:b},{id:"accessibility",label:"Accessibility",component:s}],apiDocs:["Slider"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:j},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:g}]}]})}],83832)},53465,(e,t,l)=>{let a="/slider";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(83832)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);