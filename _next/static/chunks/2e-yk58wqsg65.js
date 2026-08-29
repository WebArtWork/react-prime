(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,23687,e=>{"use strict";var a=e.i(91398),t=e.i(88850),l=e.i(82948),n=e.i(5180),u=e.i(28137);function r(){let e={basic:`
<label htmlFor="input-price">Price</label>
<InputNumber id="span-price" inputId="input-price" />

<span id="label_number">Number</span>
<InputNumber aria-labelledby="label_number" />

<InputNumber aria-label="Number" />
    `};return(0,a.jsxs)(u.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,a.jsx)("h3",{children:"Screen Reader"}),(0,a.jsxs)("p",{children:["Value to describe the component can either be provided via ",(0,a.jsx)("i",{children:"label"})," tag combined with ",(0,a.jsx)("i",{children:"inputId"})," prop or using ",(0,a.jsx)("i",{children:"aria-labelledby"}),", ",(0,a.jsx)("i",{children:"aria-label"})," props. The input element uses ",(0,a.jsx)("i",{children:"spinbutton"})," role in addition to the"," ",(0,a.jsx)("i",{children:"aria-valuemin"}),", ",(0,a.jsx)("i",{children:"aria-valuemax"})," and ",(0,a.jsx)("i",{children:"aria-valuenow"})," attributes. Make sure to assign unique identifiers for the ",(0,a.jsx)("i",{children:"span"}),"and ",(0,a.jsx)("i",{children:"input"}),"."]}),(0,a.jsx)(n.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,a.jsx)("h3",{children:"Keyboard Support"}),(0,a.jsx)("div",{className:"doc-tablewrapper",children:(0,a.jsxs)("table",{className:"doc-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Key"}),(0,a.jsx)("th",{children:"Function"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("i",{children:"tab"})}),(0,a.jsx)("td",{children:"Moves focus to the input."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("i",{children:"up arrow"})}),(0,a.jsx)("td",{children:"Increments the value."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("i",{children:"down arrow"})}),(0,a.jsx)("td",{children:"Decrements the value."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("i",{children:"home"})}),(0,a.jsx)("td",{children:"Set the minimum value if provided."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("i",{children:"end"})}),(0,a.jsx)("td",{children:"Set the maximum value if provided."})]})]})]})})]})}var i=e.i(28084),s=e.i(91788);function o(e){let[t,l]=(0,s.useState)(20),[r,o]=(0,s.useState)(10.5),[c,m]=(0,s.useState)(25),d={basic:`
<InputNumber value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)} showButtons mode="currency" currency="USD" />
<InputNumber value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)} mode="decimal" showButtons min={0} max={100} />
<InputNumber value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)} showButtons buttonLayout="horizontal" step={0.25}
            decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
            mode="currency" currency="EUR" />
`,javascript:`
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function ButtonsDemo() {
    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState(10.50);
    const [value3, setValue3] = useState(25);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="stacked-buttons" className="font-bold block mb-2">Stacked</label>
                <InputNumber inputId="stacked-buttons" value={value1} onValueChange={(e) => setValue1(e.value)} showButtons mode="currency" currency="USD" />
            </div>

            <div className="flex-auto">
                <label htmlFor="minmax-buttons" className="font-bold block mb-2">Min-Max Boundaries</label>
                <InputNumber inputId="minmax-buttons" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" showButtons min={0} max={100} />
            </div>
            <div className="flex-auto">
                <label htmlFor="horizontal-buttons" className="font-bold block mb-2">Horizontal with Step</label>
                <InputNumber inputId="horizontal-buttons" value={value2} onValueChange={(e) => setValue2(e.value)} showButtons buttonLayout="horizontal" step={0.25}
                    decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
                    mode="currency" currency="EUR" />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function ButtonsDemo() {
    const [value1, setValue1] = useState<number>(20);
    const [value2, setValue2] = useState<number>(10.50);
    const [value3, setValue3] = useState<number>(25);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="stacked-buttons" className="font-bold block mb-2">Stacked</label>
                <InputNumber inputId="stacked-buttons" value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)} showButtons mode="currency" currency="USD" />
            </div>

            <div className="flex-auto">
                <label htmlFor="minmax-buttons" className="font-bold block mb-2">Min-Max Boundaries</label>
                <InputNumber inputId="minmax-buttons" value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)} mode="decimal" showButtons min={0} max={100} />
            </div>
            <div className="flex-auto">
                <label htmlFor="horizontal-buttons" className="font-bold block mb-2">Horizontal with Step</label>
                <InputNumber inputId="horizontal-buttons" value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)} showButtons buttonLayout="horizontal" step={0.25}
                    decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
                    mode="currency" currency="EUR" />
            </div>
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["Spinner buttons are enabled using the ",(0,a.jsx)("i",{children:"showButtons"})," property and layout is defined with the ",(0,a.jsx)("i",{children:"buttonLayout"}),"."]})}),(0,a.jsxs)("div",{className:"card flex flex-wrap gap-3 p-fluid",children:[(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"stacked-buttons",className:"font-bold block mb-2",children:"Stacked"}),(0,a.jsx)(i.InputNumber,{inputId:"stacked-buttons",value:t,onValueChange:e=>l(e.value),showButtons:!0,mode:"currency",currency:"USD"})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"minmax-buttons",className:"font-bold block mb-2",children:"Min-Max Boundaries"}),(0,a.jsx)(i.InputNumber,{inputId:"minmax-buttons",value:c,onValueChange:e=>m(e.value),mode:"decimal",showButtons:!0,min:0,max:100})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"horizontal-buttons",className:"font-bold block mb-2",children:"Horizontal with Step"}),(0,a.jsx)(i.InputNumber,{inputId:"horizontal-buttons",value:r,onValueChange:e=>o(e.value),showButtons:!0,buttonLayout:"horizontal",step:.25,decrementButtonClassName:"p-button-danger",incrementButtonClassName:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus",mode:"currency",currency:"EUR"})]})]}),(0,a.jsx)(n.DocSectionCode,{code:d})]})}function c(e){let[t,l]=(0,s.useState)(1500),[r,o]=(0,s.useState)(2500),[c,m]=(0,s.useState)(4250),[d,p]=(0,s.useState)(5002),b={basic:`
<InputNumber inputId="currency-us" value={value1} onValueChange={(e) => setValue1(e.value)} mode="currency" currency="USD" locale="en-US" />
<InputNumber inputId="currency-germany" value={value2} onValueChange={(e) => setValue2(e.value)} mode="currency" currency="EUR" locale="de-DE" />
<InputNumber inputId="currency-india" value={value3} onValueChange={(e) => setValue3(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
<InputNumber inputId="currency-japan" value={value4} onValueChange={(e) => setValue4(e.value)} mode="currency" currency="JPY" locale="jp-JP" />
`,javascript:`
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function CurrencyDemo() {
    const [value1, setValue1] = useState(1500);
    const [value2, setValue2] = useState(2500);
    const [value3, setValue3] = useState(4250);
    const [value4, setValue4] = useState(5002);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="currency-us" className="font-bold block mb-2">United States</label>
                <InputNumber inputId="currency-us" value={value1} onValueChange={(e) => setValue1(e.value)} mode="currency" currency="USD" locale="en-US" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-germany" className="font-bold block mb-2">Germany</label>
                <InputNumber inputId="currency-germany" value={value2} onValueChange={(e) => setValue2(e.value)} mode="currency" currency="EUR" locale="de-DE" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-india" className="font-bold block mb-2">India</label>
                <InputNumber inputId="currency-india" value={value3} onValueChange={(e) => setValue3(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-japan" className="font-bold block mb-2">Japan</label>
                <InputNumber inputId="currency-japan" value={value4} onValueChange={(e) => setValue4(e.value)} mode="currency" currency="JPY" locale="jp-JP" />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function CurrencyDemo() {
    const [value1, setValue1] = useState<number>(1500);
    const [value2, setValue2] = useState<number>(2500);
    const [value3, setValue3] = useState<number>(4250);
    const [value4, setValue4] = useState<number>(5002);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="currency-us" className="font-bold block mb-2">United States</label>
                <InputNumber inputId="currency-us" value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)} mode="currency" currency="USD" locale="en-US" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-germany" className="font-bold block mb-2">Germany</label>
                <InputNumber inputId="currency-germany" value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)} mode="currency" currency="EUR" locale="de-DE" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-india" className="font-bold block mb-2">India</label>
                <InputNumber inputId="currency-india" value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
            </div>
            <div className="flex-auto">
                <label htmlFor="currency-japan" className="font-bold block mb-2">Japan</label>
                <InputNumber inputId="currency-japan" value={value4} onValueChange={(e: InputNumberValueChangeEvent) => setValue4(e.value)} mode="currency" currency="JPY" locale="jp-JP" />
            </div>
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["Monetary values are enabled by setting ",(0,a.jsx)("i",{children:"mode"})," property as ",(0,a.jsx)("i",{children:"currency"}),". In this setting, ",(0,a.jsx)("i",{children:"currency"}),' property also needs to be defined using ISO 4217 standard such as "USD" for the US dollar.']})}),(0,a.jsxs)("div",{className:"card flex flex-wrap gap-3 p-fluid",children:[(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"currency-us",className:"font-bold block mb-2",children:"United States"}),(0,a.jsx)(i.InputNumber,{inputId:"currency-us",value:t,onValueChange:e=>l(e.value),mode:"currency",currency:"USD",locale:"en-US"})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"currency-germany",className:"font-bold block mb-2",children:"Germany"}),(0,a.jsx)(i.InputNumber,{inputId:"currency-germany",value:r,onValueChange:e=>o(e.value),mode:"currency",currency:"EUR",locale:"de-DE"})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"currency-india",className:"font-bold block mb-2",children:"India"}),(0,a.jsx)(i.InputNumber,{inputId:"currency-india",value:c,onValueChange:e=>m(e.value),mode:"currency",currency:"INR",currencyDisplay:"code",locale:"en-IN"})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"currency-japan",className:"font-bold block mb-2",children:"Japan"}),(0,a.jsx)(i.InputNumber,{inputId:"currency-japan",value:d,onValueChange:e=>p(e.value),mode:"currency",currency:"JPY",locale:"jp-JP"})]})]}),(0,a.jsx)(n.DocSectionCode,{code:b})]})}function m(e){let[t,l]=(0,s.useState)(50),r={basic:`
<InputNumber value={value} disabled prefix="%" />
`,javascript:`
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function DisabledDemo() {
    const [value, setValue] = useState(50);

    return (
        <div className="card flex justify-content-center">
            <InputNumber value={value} disabled prefix="%" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function DisabledDemo() {
    const [value, setValue] = useState<number>(50);

    return (
        <div className="card flex justify-content-center">
            <InputNumber value={value} disabled prefix="%" />
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["When ",(0,a.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,a.jsx)("div",{className:"card flex justify-content-center",children:(0,a.jsx)(i.InputNumber,{value:t,disabled:!0,prefix:"%"})}),(0,a.jsx)(n.DocSectionCode,{code:r})]})}function d(e){let[t,l]=(0,s.useState)(null),r={basic:`
<InputNumber variant="filled" value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
`,javascript:`
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function FilledDemo() {
    const [value, setValue] = useState(151351);

    return (
        <div className="card flex justify-content-center">
            <InputNumber variant="filled" value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function FilledDemo() {
    const [value, setValue] = useState<number>(151351);

    return (
        <div className="card flex justify-content-center">
            <InputNumber variant="filled" value={value} onValueChange={(e: InputNumberValueChangeEvent) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["Specify the ",(0,a.jsx)("i",{children:"variant"})," property as ",(0,a.jsx)("i",{children:"filled"})," to display the component with a higher visual emphasis than the default ",(0,a.jsx)("i",{children:"outlined"})," style."]})}),(0,a.jsx)("div",{className:"card flex justify-content-center",children:(0,a.jsx)(i.InputNumber,{variant:"filled",value:t,onValueChange:e=>l(e.value),minFractionDigits:2})}),(0,a.jsx)(n.DocSectionCode,{code:r})]})}var p=e.i(97776),b=e.i(41158);function v(e){let[t,l]=(0,s.useState)(null),r={basic:`
<FloatLabel>
    <InputNumber id="number-input" value={value} onValueChange={(e) => setValue(e.value)} />
    <label htmlFor="number-input">Number</label>
</FloatLabel>
`,javascript:`
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';

export default function FloatLabelDemo() {
    const [value, setValue] = useState(151351);

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputNumber id="number-input" value={value} onValueChange={(e) => setValue(e.value)} />
                <label htmlFor="number-input">Number</label>
            </FloatLabel>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';

export default function FloatLabelDemo() {
    const [value, setValue] = useState<number>(151351);

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputNumber id="number-input" value={value} onValueChange={(e: InputNumberValueChangeEvent) => setValue(e.value)} />
                <label htmlFor="number-input">Number</label>
            </FloatLabel>
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["A floating label appears on top of the input field when focused. Visit ",(0,a.jsx)(b.default,{href:"/floatlabel",children:"FloatLabel"})," documentation for more information."]})}),(0,a.jsx)("div",{className:"card flex justify-content-center",children:(0,a.jsxs)(p.FloatLabel,{children:[(0,a.jsx)(i.InputNumber,{id:"number-input",value:t,onValueChange:e=>l(e.value)}),(0,a.jsx)("label",{htmlFor:"number-input",children:"Number"})]})}),(0,a.jsx)(n.DocSectionCode,{code:r})]})}function h(e){let t={basic:`
import { InputNumber } from 'primereact/inputnumber';
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.DocSectionText,{...e}),(0,a.jsx)(n.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function x(e){let[t,l]=(0,s.useState)(null),r={basic:`
<InputNumber invalid value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
`,javascript:`
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function InvalidDemo() {
    const [value, setValue] = useState(151351);

    return (
        <div className="card flex justify-content-center">
            <InputNumber invalid value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function InvalidDemo() {
    const [value, setValue] = useState<number>(151351);

    return (
        <div className="card flex justify-content-center">
            <InputNumber invalid value={value} onValueChange={(e: InputNumberValueChangeEvent) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["Invalid state is displayed using the ",(0,a.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,a.jsx)("div",{className:"card flex justify-content-center",children:(0,a.jsx)(i.InputNumber,{invalid:!0,value:t,onValueChange:e=>l(e.value),minFractionDigits:2})}),(0,a.jsx)(n.DocSectionCode,{code:r})]})}function f(e){let[t,l]=(0,s.useState)(151351),[r,o]=(0,s.useState)(115744),[c,m]=(0,s.useState)(635524),[d,p]=(0,s.useState)(732762),b={basic:`
<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} minFractionDigits={2} />
<InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} locale="en-US" minFractionDigits={2} />
<InputNumber value={value3} onValueChange={(e) => setValue3(e.value)} locale="de-DE" minFractionDigits={2} />
<InputNumber value={value4} onValueChange={(e) => setValue4(e.value)} locale="en-IN" minFractionDigits={2} />
`,javascript:`
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function LocaleDemo() {
    const [value1, setValue1] = useState(151351);
    const [value2, setValue2] = useState(115744);
    const [value3, setValue3] = useState(635524);
    const [value4, setValue4] = useState(732762);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="locale-user" className="font-bold block mb-2">User Locale</label>
                <InputNumber inputId="locale-user" value={value1} onValueChange={(e) => setValue1(e.value)} minFractionDigits={2} />
            </div>
            <div className="flex-auto">
                <label htmlFor="locale-us" className="font-bold block mb-2">United States Locale</label>
                <InputNumber inputId="locale-us" value={value2} onValueChange={(e) => setValue2(e.value)} locale="en-US" minFractionDigits={2} />
            </div>
            <div className="flex-auto">
                <label htmlFor="locale-german" className="font-bold block mb-2">German Locale</label>
                <InputNumber inputId="locale-german" value={value3} onValueChange={(e) => setValue3(e.value)} locale="de-DE" minFractionDigits={2} />
            </div>
            <div className="flex-auto">
                <label htmlFor="locale-indian" className="font-bold block mb-2">Indian Locale</label>
                <InputNumber inputId="locale-indian" value={value4} onValueChange={(e) => setValue4(e.value)} locale="en-IN" minFractionDigits={2} />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function LocaleDemo() {
    const [value1, setValue1] = useState<number>(151351);
    const [value2, setValue2] = useState<number>(115744);
    const [value3, setValue3] = useState<number>(635524);
    const [value4, setValue4] = useState<number>(732762);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="locale-user" className="font-bold block mb-2">User Locale</label>
                <InputNumber inputId="locale-user" value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)} minFractionDigits={2} />
            </div>
            <div className="flex-auto">
                <label htmlFor="locale-us" className="font-bold block mb-2">United States Locale</label>
                <InputNumber inputId="locale-us" value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)} locale="en-US" minFractionDigits={2} />
            </div>
            <div className="flex-auto">
                <label htmlFor="locale-german" className="font-bold block mb-2">German Locale</label>
                <InputNumber inputId="locale-german" value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)} locale="de-DE" minFractionDigits={2} />
            </div>
            <div className="flex-auto">
                <label htmlFor="locale-indian" className="font-bold block mb-2">Indian Locale</label>
                <InputNumber inputId="locale-indian" value={value4} onValueChange={(e: InputNumberValueChangeEvent) => setValue4(e.value)} locale="en-IN" minFractionDigits={2} />
            </div>
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["Localization information such as grouping and decimal symbols are defined with the ",(0,a.jsx)("i",{children:"locale"})," property which defaults to the user locale."]})}),(0,a.jsxs)("div",{className:"card flex flex-wrap gap-3 p-fluid",children:[(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"locale-user",className:"font-bold block mb-2",children:"User Locale"}),(0,a.jsx)(i.InputNumber,{inputId:"locale-user",value:t,onValueChange:e=>l(e.value),minFractionDigits:2})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"locale-us",className:"font-bold block mb-2",children:"United States Locale"}),(0,a.jsx)(i.InputNumber,{inputId:"locale-us",value:r,onValueChange:e=>o(e.value),locale:"en-US",minFractionDigits:2})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"locale-german",className:"font-bold block mb-2",children:"German Locale"}),(0,a.jsx)(i.InputNumber,{inputId:"locale-german",value:c,onValueChange:e=>m(e.value),locale:"de-DE",minFractionDigits:2})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"locale-indian",className:"font-bold block mb-2",children:"Indian Locale"}),(0,a.jsx)(i.InputNumber,{inputId:"locale-indian",value:d,onValueChange:e=>p(e.value),locale:"en-IN",minFractionDigits:2})]})]}),(0,a.jsx)(n.DocSectionCode,{code:b})]})}function N(e){let[t,l]=(0,s.useState)(42723),[r,o]=(0,s.useState)(58151),[c,m]=(0,s.useState)(2351.35),[d,p]=(0,s.useState)(50),b={basic:`
<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} />
<InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} useGrouping={false} />
<InputNumber value={value3} onValueChange={(e) => setValue3(e.value)} minFractionDigits={2} maxFractionDigits={5} />
<InputNumber value={value4} onValueChange={(e) => setValue4(e.value)} min={0} max={100} />
`,javascript:`
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function NumeralsDemo() {
    const [value1, setValue1] = useState(42723);
    const [value2, setValue2] = useState(58151);
    const [value3, setValue3] = useState(2351.35);
    const [value4, setValue4] = useState(50);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="integeronly" className="font-bold block mb-2">Integer Only</label>
                <InputNumber inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
            </div>
            <div className="flex-auto">
                <label htmlFor="withoutgrouping" className="font-bold block mb-2">Without Grouping</label>
                <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e) => setValue2(e.value)} useGrouping={false} />
            </div>
            <div className="flex-auto">
                <label htmlFor="minmaxfraction" className="font-bold block mb-2">Min-Max Fraction Digits</label>
                <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e) => setValue3(e.value)} minFractionDigits={2} maxFractionDigits={5} />
            </div>
            <div className="flex-auto">
                <label htmlFor="minmax" className="font-bold block mb-2">Min-Max Boundaries</label>
                <InputNumber inputId="minmax" value={value4} onValueChange={(e) => setValue4(e.value)} min={0} max={100} />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function NumeralsDemo() {
    const [value1, setValue1] = useState<number>(42723);
    const [value2, setValue2] = useState<number>(58151);
    const [value3, setValue3] = useState<number>(2351.35);
    const [value4, setValue4] = useState<number>(50);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="integeronly" className="font-bold block mb-2">Integer Only</label>
                <InputNumber inputId="integeronly" value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)} />
            </div>
            <div className="flex-auto">
                <label htmlFor="withoutgrouping" className="font-bold block mb-2">Without Grouping</label>
                <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)} useGrouping={false} />
            </div>
            <div className="flex-auto">
                <label htmlFor="minmaxfraction" className="font-bold block mb-2">Min-Max Fraction Digits</label>
                <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)} minFractionDigits={2} maxFractionDigits={5} />
            </div>
            <div className="flex-auto">
                <label htmlFor="minmax" className="font-bold block mb-2">Min-Max Boundaries</label>
                <InputNumber inputId="minmax" value={value4} onValueChange={(e: InputNumberValueChangeEvent) => setValue4(e.value)} min={0} max={100} />
            </div>
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["InputNumber is used as a controlled input with ",(0,a.jsx)("i",{children:"value"})," and ",(0,a.jsx)("i",{children:"onValueChange"})," properties."]})}),(0,a.jsxs)("div",{className:"card flex flex-wrap gap-3 p-fluid",children:[(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"integeronly",className:"font-bold block mb-2",children:"Integer Only"}),(0,a.jsx)(i.InputNumber,{inputId:"integeronly",value:t,onValueChange:e=>l(e.value)})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"withoutgrouping",className:"font-bold block mb-2",children:"Without Grouping"}),(0,a.jsx)(i.InputNumber,{inputId:"withoutgrouping",value:r,onValueChange:e=>o(e.value),useGrouping:!1})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"minmaxfraction",className:"font-bold block mb-2",children:"Min-Max Fraction Digits"}),(0,a.jsx)(i.InputNumber,{inputId:"minmaxfraction",value:c,onValueChange:e=>m(e.value),minFractionDigits:2,maxFractionDigits:5})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"minmax",className:"font-bold block mb-2",children:"Min-Max Boundaries"}),(0,a.jsx)(i.InputNumber,{inputId:"minmax",value:d,onValueChange:e=>p(e.value),min:0,max:100})]})]}),(0,a.jsx)(n.DocSectionCode,{code:b})]})}function g(e){let[t,l]=(0,s.useState)(20),[r,o]=(0,s.useState)(50),[c,m]=(0,s.useState)(10),[d,p]=(0,s.useState)(20),b={basic:`
<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} suffix=" mi" />
<InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} prefix="%" />
<InputNumber value={value3} onValueChange={(e) => setValue3(e.value)} prefix="Expires in " suffix=" days" />
<InputNumber value={value4} onValueChange={(e) => setValue4(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
`,javascript:`
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function PrefixSuffixDemo() {
    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(10);
    const [value4, setValue4] = useState(20);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="mile" className="font-bold block mb-2">Mile</label>
                <InputNumber inputId="mile" value={value1} onValueChange={(e) => setValue1(e.value)} suffix=" mi" />
            </div>
            <div className="flex-auto">
                <label htmlFor="percent" className="font-bold block mb-2">Percent</label>
                <InputNumber inputId="percent" value={value2} onValueChange={(e) => setValue2(e.value)} prefix="%" />
            </div>
            <div className="flex-auto">
                <label htmlFor="expiry" className="font-bold block mb-2">Expiry</label>
                <InputNumber inputId="expiry" value={value3} onValueChange={(e) => setValue3(e.value)} prefix="Expires in " suffix=" days" />
            </div>
            <div className="flex-auto">
                <label htmlFor="temperature" className="font-bold block mb-2">Temperature</label>
                <InputNumber inputId="temperature" value={value4} onValueChange={(e) => setValue4(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function PrefixSuffixDemo() {
    const [value1, setValue1] = useState<number>(20);
    const [value2, setValue2] = useState<number>(50);
    const [value3, setValue3] = useState<number>(10);
    const [value4, setValue4] = useState<number>(20);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="mile" className="font-bold block mb-2">Mile</label>
                <InputNumber inputId="mile" value={value1} onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)} suffix=" mi" />
            </div>
            <div className="flex-auto">
                <label htmlFor="percent" className="font-bold block mb-2">Percent</label>
                <InputNumber inputId="percent" value={value2} onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)} prefix="%" />
            </div>
            <div className="flex-auto">
                <label htmlFor="expiry" className="font-bold block mb-2">Expiry</label>
                <InputNumber inputId="expiry" value={value3} onValueChange={(e: InputNumberValueChangeEvent) => setValue3(e.value)} prefix="Expires in " suffix=" days" />
            </div>
            <div className="flex-auto">
                <label htmlFor="temperature" className="font-bold block mb-2">Temperature</label>
                <InputNumber inputId="temperature" value={value4} onValueChange={(e: InputNumberValueChangeEvent) => setValue4(e.value)} prefix="&uarr; " suffix="℃" min={0} max={40} />
            </div>
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["Custom texts e.g. units can be placed before or after the input section with the ",(0,a.jsx)("i",{children:"prefix"})," and ",(0,a.jsx)("i",{children:"suffix"})," properties."]})}),(0,a.jsxs)("div",{className:"card flex flex-wrap gap-3 p-fluid",children:[(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"mile",className:"font-bold block mb-2",children:"Mile"}),(0,a.jsx)(i.InputNumber,{inputId:"mile",value:t,onValueChange:e=>l(e.value),suffix:" mi"})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"percent",className:"font-bold block mb-2",children:"Percent"}),(0,a.jsx)(i.InputNumber,{inputId:"percent",value:r,onValueChange:e=>o(e.value),prefix:"%"})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"expiry",className:"font-bold block mb-2",children:"Expiry"}),(0,a.jsx)(i.InputNumber,{inputId:"expiry",value:c,onValueChange:e=>m(e.value),prefix:"Expires in ",suffix:" days"})]}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("label",{htmlFor:"temperature",className:"font-bold block mb-2",children:"Temperature"}),(0,a.jsx)(i.InputNumber,{inputId:"temperature",value:d,onValueChange:e=>p(e.value),prefix:"↑ ",suffix:"℃",min:0,max:40})]})]}),(0,a.jsx)(n.DocSectionCode,{code:b})]})}let I=e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.DocSectionText,{...e}),(0,a.jsx)("div",{children:(0,a.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/inputnumber.jpg",alt:"inputnumber"})})]});function j(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.DocSectionText,{...e,children:(0,a.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,a.jsx)("div",{className:"doc-tablewrapper",children:(0,a.jsxs)("table",{className:"doc-table",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Element"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-inputnumber"}),(0,a.jsx)("td",{children:"Container element"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-inputnumber-stacked"}),(0,a.jsx)("td",{children:"Container element with stacked buttons."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-inputnumber-horizontal"}),(0,a.jsx)("td",{children:"Container element with horizontal buttons."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-inputnumber-vertical"}),(0,a.jsx)("td",{children:"Container element with vertical buttons."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-inputnumber-input"}),(0,a.jsx)("td",{children:"Input element"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-inputnumber-button"}),(0,a.jsx)("td",{children:"Input element"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-inputnumber-button-up"}),(0,a.jsx)("td",{children:"Increment button"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-inputnumber-button-down"}),(0,a.jsx)("td",{children:"Decrement button"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"p-inputnumber-button-icon"}),(0,a.jsx)("td",{children:"Button icon"})]})]})]})})]})}function V(e){let t={basic:`
const Tailwind = {
    inputnumber: {
        root: 'w-full inline-flex',
        input: {
            root: ({ props }) => ({
                className: classNames({ 'rounded-tr-none rounded-br-none': props.showButtons && props.buttonLayout == 'stacked' })
            })
        },
        buttongroup: ({ props }) => ({
            className: classNames({ 'flex flex-col': props.showButtons && props.buttonLayout == 'stacked' })
        }),
        incrementbutton: ({ props }) => ({
            className: classNames('flex !items-center !justify-center', {
                'rounded-br-none rounded-bl-none rounded-bl-none !p-0 flex-1 w-[3rem]': props.showButtons && props.buttonLayout == 'stacked'
            })
        }),
        decrementbutton: ({ props }) => ({
            className: classNames('flex !items-center !justify-center', {
                'rounded-tr-none rounded-tl-none rounded-tl-none !p-0 flex-1 w-[3rem]': props.showButtons && props.buttonLayout == 'stacked'
            })
        })
    }
}
        `},l={javascript:`
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function UnstyledDemo() {
    const [value1, setValue1] = useState(42723);
    const [value2, setValue2] = useState(58151);
    const [value3, setValue3] = useState(2351.35);
    const [value4, setValue4] = useState(50);

    return (
        <div className="card flex flex-wrap">
            <div className="flex-auto">
                <label htmlFor="integeronly" className="font-bold block mb-2 text-gray-700 dark:text-white/80">Integer Only</label>
                <InputNumber inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
            </div>
            <div className="flex-auto">
                <label htmlFor="withoutgrouping" className="font-bold block mb-2 text-gray-700 dark:text-white/80">Without Grouping</label>
                <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e) => setValue2(e.value)} useGrouping={false} />
            </div>
            <div className="flex-auto">
                <label htmlFor="minmaxfraction" className="font-bold block mb-2 text-gray-700 dark:text-white/80">Min-Max Fraction Digits</label>
                <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e) => setValue3(e.value)} minFractionDigits={2} maxFractionDigits={5} />
            </div>
            <div className="flex-auto">
                <label htmlFor="minmax" className="font-bold block mb-2 text-gray-700 dark:text-white/80">Min-Max Boundaries</label>
                <InputNumber inputId="minmax" value={value4} onValueChange={(e) => setValue4(e.value)} min={0} max={100} />
            </div>
        </div>
    )
}
    `};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(u.DocSectionText,{...e,children:[(0,a.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,a.jsx)(b.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,a.jsx)(n.DocSectionCode,{code:t,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,a.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,a.jsx)(n.DocSectionCode,{code:l,embedded:!0})]})})}function y(e){let[t,l]=(0,s.useState)(50),r={basic:`
<InputNumber value={value} onValueChange={(e) => setValue(e.value)} showButtons buttonLayout="vertical" style={{ width: '4rem' }} 
    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
`,javascript:`
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function VerticalDemo() {
    const [value, setValue] = useState(50);

    return (
        <div className="card flex justify-content-center">
            <InputNumber value={value} onValueChange={(e) => setValue(e.value)} showButtons buttonLayout="vertical" style={{ width: '4rem' }} 
                    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
        </div>
)
}
        `,typescript:`
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function VerticalDemo() {
    const [value, setValue] = useState<number>(50);

    return (
        <div className="card flex justify-content-center">
            <InputNumber value={value} onValueChange={(e: InputNumberValueChangeEvent) => setValue(e.value)} showButtons buttonLayout="vertical" style={{ width: '4rem' }} 
                    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
        </div>
    )
}
        `};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.DocSectionText,{...e,children:(0,a.jsxs)("p",{children:["Buttons can also placed vertically by setting ",(0,a.jsx)("i",{children:"buttonLayout"})," as ",(0,a.jsx)("i",{children:"vertical"}),"."]})}),(0,a.jsx)("div",{className:"card flex justify-content-center",children:(0,a.jsx)(i.InputNumber,{value:t,onValueChange:e=>l(e.value),showButtons:!0,buttonLayout:"vertical",style:{width:"4rem"},decrementButtonClassName:"p-button-secondary",incrementButtonClassName:"p-button-secondary",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"})}),(0,a.jsx)(n.DocSectionCode,{code:r})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:I},{id:"pt.inputnumber.options",label:"InputNumber PT Options",component:t.default}];return(0,a.jsx)(l.DocComponent,{title:"React InputNumber Component",header:"InputNumber",description:"InputNumber is an input component to provide numerical input.",componentDocs:[{id:"import",label:"Import",component:h},{id:"numerals",label:"Numerals",component:N},{id:"locale",label:"Locale",component:f},{id:"currency",label:"Currency",component:c},{id:"prefixsuffix",label:"Prefix & Suffix",component:g},{id:"buttons",label:"Buttons",component:o},{id:"vertical",label:"Vertical",component:y},{id:"floatlabel",label:"Float Label",component:v},{id:"filled",label:"Filled",component:d},{id:"invalid",label:"Invalid",component:x},{id:"disabled",label:"Disabled",component:m},{id:"accessibility",label:"Accessibility",component:r}],apiDocs:["InputNumber"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:j},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:V}]}]})}],23687)},47296,(e,a,t)=>{let l="/inputnumber";(window.__NEXT_P=window.__NEXT_P||[]).push([l,()=>e.r(23687)]),a.hot&&a.hot.dispose(function(){window.__NEXT_P.push([l])})}]);