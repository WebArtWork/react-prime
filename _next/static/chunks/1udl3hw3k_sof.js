(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,82725,e=>{"use strict";var t=e.i(91398),l=e.i(88850),i=e.i(82948),a=e.i(5180),s=e.i(28137),o=e.i(41158);function n(){let e={basic:`
<span id="dd1">Options</span>
<MultiSelect aria-labelledby="dd1" />

<MultiSelect aria-label="Options" />
    `};return(0,t.jsxs)(s.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Value to describe the component can either be provided with ",(0,t.jsx)("i",{children:"aria-labelledby"})," or ",(0,t.jsx)("i",{children:"aria-label"})," props. The multiselect component has a ",(0,t.jsx)("i",{children:"combobox"})," role in addition to ",(0,t.jsx)("i",{children:"aria-haspopup"})," and ",(0,t.jsx)("i",{children:"aria-expanded"})," ","attributes. The relation between the combobox and the popup is created with ",(0,t.jsx)("i",{children:"aria-controls"})," attribute that refers to the id of the popup listbox."]}),(0,t.jsxs)("p",{children:["The popup listbox uses ",(0,t.jsx)("i",{children:"listbox"})," as the role with ",(0,t.jsx)("i",{children:"aria-multiselectable"})," enabled. Each list item has an ",(0,t.jsx)("i",{children:"option"})," role along with ",(0,t.jsx)("i",{children:"aria-label"}),", ",(0,t.jsx)("i",{children:"aria-selected"})," and ",(0,t.jsx)("i",{children:"aria-disabled"})," attributes."]}),(0,t.jsxs)("p",{children:["Checkbox component at the header uses a hidden native checkbox element internally that is only visible to screen readers. Value to read is defined with the ",(0,t.jsx)("i",{children:"selectAll"})," and ",(0,t.jsx)("i",{children:"unselectAll"})," keys of the ",(0,t.jsx)("i",{children:"aria"})," property from the ",(0,t.jsx)(o.default,{href:"/locale",children:"locale"})," API."]}),(0,t.jsxs)("p",{children:["If filtering is enabled, ",(0,t.jsx)("i",{children:"filterInputProps"})," can be defined to give ",(0,t.jsx)("i",{children:"aria-*"})," props to the input element."]}),(0,t.jsxs)("p",{children:["Close button uses ",(0,t.jsx)("i",{children:"close"})," key of the ",(0,t.jsx)("i",{children:"aria"})," property from the ",(0,t.jsx)(o.default,{href:"/locale",children:"locale"})," API as the ",(0,t.jsx)("i",{children:"aria-label"})," by default, this can be overriden with the ",(0,t.jsx)("i",{children:"closeButtonProps"}),"."]}),(0,t.jsx)(a.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Closed State Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the multiselect element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."})]})]})]})}),(0,t.jsx)("h3",{children:"Popup Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"tab"})]}),(0,t.jsx)("td",{children:"Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Toggles the selection state of the focused option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles the selection state of the focused option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the popup, moves focus to the multiselect element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next option, if there is none then visual focus does not change."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous option, if there is none then visual focus does not change."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Moves focus to the first option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Moves focus to the last option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"any printable character"})}),(0,t.jsx)("td",{children:"Moves focus to the option whose label starts with the characters being typed if dropdown is not editable."})]})]})]})}),(0,t.jsx)("h3",{children:"Toggle All Checkbox Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles the checked state."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the popup."})]})]})]})}),(0,t.jsx)("h3",{children:"Filter Input Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the multiselect element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the multiselect element."})]})]})]})}),(0,t.jsx)("h3",{children:"Close Button Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the multiselect element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the multiselect element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the multiselect element."})]})]})]})})]})}var c=e.i(85598),r=e.i(91788);function d(e){let[l,i]=(0,r.useState)(null),o={basic:`
<MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
    placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        `,javascript:`
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function BasicDemo() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

interface City {
    name: string;
    code: string;
}

export default function BasicDemo() {
    const [selectedCities, setSelectedCities] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCities} onChange={(e: MultiSelectChangeEvent) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["MultiSelect is used as a controlled component with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties along with an ",(0,t.jsx)("i",{children:"options"})," collection. Label and value of an option are defined with the ",(0,t.jsx)("i",{children:"optionLabel"})," and ",(0,t.jsx)("i",{children:"optionValue"})," ","properties respectively. Default property name for the ",(0,t.jsx)("i",{children:"optionLabel"})," is ",(0,t.jsx)("i",{children:"label"})," and ",(0,t.jsx)("i",{children:"value"})," for the ",(0,t.jsx)("i",{children:"optionValue"}),". If ",(0,t.jsx)("i",{children:"optionValue"})," is omitted and the object has no ",(0,t.jsx)("i",{children:"value"})," property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no ",(0,t.jsx)("i",{children:"optionLabel"})," and ",(0,t.jsx)("i",{children:"optionValue"})," would be necessary."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(c.MultiSelect,{value:l,onChange:e=>i(e.value),showClear:!0,options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",placeholder:"Select Cities",maxSelectedLabels:3,className:"w-full md:w-20rem"})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function m(e){let[l,i]=(0,r.useState)(null),o={basic:`
<MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" display="chip"
    placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        `,javascript:`
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function ChipsDemo() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" display="chip" 
                placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

interface City {
    name: string;
    code: string;
}

export default function ChipsDemo() {
    const [selectedCities, setSelectedCities] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCities} onChange={(e: MultiSelectChangeEvent) => setSelectedCities(e.value)} options={cities} display="chip" optionLabel="name" 
                placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Selected values are displayed as a comma separated list by default, setting ",(0,t.jsx)("i",{children:"display"})," as ",(0,t.jsx)("i",{children:"chip"})," displays them as chips."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(c.MultiSelect,{value:l,onChange:e=>i(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],display:"chip",optionLabel:"name",placeholder:"Select Cities",maxSelectedLabels:3,className:"w-full md:w-20rem"})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function u(e){let l={basic:`
<MultiSelect disabled placeholder="Select Cities" className="w-full md:w-20rem" />
        `,javascript:`
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <MultiSelect disabled placeholder="Select Cities" className="w-full md:w-20rem" />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <MultiSelect disabled placeholder="Select Cities" className="w-full md:w-20rem" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(c.MultiSelect,{disabled:!0,placeholder:"Select Cities",className:"w-full md:w-20rem"})}),(0,t.jsx)(a.DocSectionCode,{code:l})]})}function p(e){let[l,i]=(0,r.useState)(null),o={basic:`
<MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
    placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        `,javascript:`
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function FilledDemo() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

interface City {
    name: string;
    code: string;
}

export default function FilledDemo() {
    const [selectedCities, setSelectedCities] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCities} onChange={(e: MultiSelectChangeEvent) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specify the ",(0,t.jsx)("i",{children:"variant"})," property as ",(0,t.jsx)("i",{children:"filled"})," to display the component with a higher visual emphasis than the default ",(0,t.jsx)("i",{children:"outlined"})," style."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(c.MultiSelect,{value:l,onChange:e=>i(e.value),showClear:!0,options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",placeholder:"Select Cities",maxSelectedLabels:3,className:"w-full md:w-20rem"})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function h(e){let[l,i]=(0,r.useState)(null),o={basic:`
<MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
    filter placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        `,javascript:`
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function FilterDemo() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                filter filterDelay={400} placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

interface City {
    name: string;
    code: string;
}

export default function FilterDemo() {
    const [selectedCities, setSelectedCities] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCities} onChange={(e: MultiSelectChangeEvent) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                filter filterDelay={400} placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["MultiSelect provides built-in filtering that is enabled by adding the ",(0,t.jsx)("i",{children:"filter"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(c.MultiSelect,{value:l,onChange:e=>i(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",filter:!0,filterDelay:400,placeholder:"Select Cities",maxSelectedLabels:3,className:"w-full md:w-20rem"})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}var x=e.i(97776);function f(e){let[l,i]=(0,r.useState)(null),n={basic:`
<FloatLabel>
    <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" maxSelectedLabels={3} className="w-full" />
    <label htmlFor="ms-cities">MultiSelect</label>
</FloatLabel>
        `,javascript:`
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
import { FloatLabel } from 'primereact/floatlabel';

export default function FloatLabelDemo() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <FloatLabel className="w-full md:w-20rem">
                <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" maxSelectedLabels={3} className="w-full" />
                <label htmlFor="ms-cities">MultiSelect</label>
            </FloatLabel>
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { FloatLabel } from 'primereact/floatlabel';

interface City {
    name: string;
    code: string;
}

export default function FloatLabelDemo() {
    const [selectedCities, setSelectedCities] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <FloatLabel className="w-full md:w-20rem">
                <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" maxSelectedLabels={3} className="w-full" />
                <label htmlFor="ms-cities">MultiSelect</label>
            </FloatLabel>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A floating label appears on top of the input field when focused. Visit ",(0,t.jsx)(o.default,{href:"/floatlabel",children:"FloatLabel"})," documentation for more information."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)(x.FloatLabel,{className:"w-full md:w-20rem",children:[(0,t.jsx)(c.MultiSelect,{value:l,onChange:e=>i(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",maxSelectedLabels:3,className:"w-full"}),(0,t.jsx)("label",{htmlFor:"ms-cities",children:"MultiSelect"})]})}),(0,t.jsx)(a.DocSectionCode,{code:n})]})}function b(e){let[l,i]=(0,r.useState)(null),o={basic:`
<MultiSelect value={selectedCities} options={groupedCities} onChange={(e) => setSelectedCities(e.value)} optionLabel="label" 
    optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate}
    placeholder="Select Cities" display="chip" className="w-full md:w-20rem" />
        `,javascript:`
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function GroupedDoc() {
    const [selectedCities, setSelectedCities] = useState(null);
    const groupedCities = [
        {
            label: 'Germany',
            code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA',
            code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan',
            code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    const groupedItemTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.label} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                <div>{option.label}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCities} options={groupedCities} onChange={(e) => setSelectedCities(e.value)} optionLabel="label" 
                optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate}
                placeholder="Select Cities" display="chip" className="w-full md:w-20rem" />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

interface City {
    label: string;
    value: string;
}

interface Country {
    label: string;
    code: string;
    items: City[];
}

export default function GroupedDoc() {
    const [selectedCities, setSelectedCities] = useState<City | null>(null);
    const groupedCities: Country[] = [
        {
            label: 'Germany',
            code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA',
            code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan',
            code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    const groupedItemTemplate = (option: Country) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.label} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                <div>{option.label}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCities} options={groupedCities} onChange={(e) => setSelectedCities(e.value)} optionLabel="label" 
                optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate}
                placeholder="Select Cities" display="chip" className="w-full md:w-20rem" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Options can be grouped when a nested data structures is provided. To define the label of a group ",(0,t.jsx)("i",{children:"optionGroupLabel"})," property is needed and also ",(0,t.jsx)("i",{children:"optionGroupChildren"})," is required to define the property that refers to the children of a group."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(c.MultiSelect,{value:l,options:[{label:"Germany",code:"DE",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",code:"US",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",code:"JP",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}],onChange:e=>i(e.value),optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items",optionGroupTemplate:e=>(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.label,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`mr-2 flag flag-${e.code.toLowerCase()}`,style:{width:"18px"}}),(0,t.jsx)("div",{children:e.label})]}),placeholder:"Select Cities",display:"chip",className:"w-full md:w-20rem"})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function S(e){let l={basic:`
import { MultiSelect } from 'primereact/multiselect';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)(a.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function j(e){let[l,i]=(0,r.useState)(null),o={basic:`
<MultiSelect invalid value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
    placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        `,javascript:`
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function InvalidDemo() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect invalid value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

interface City {
    name: string;
    code: string;
}

export default function InvalidDemo() {
    const [selectedCities, setSelectedCities] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect invalid value={selectedCities} onChange={(e: MultiSelectChangeEvent) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(c.MultiSelect,{invalid:!0,value:l,onChange:e=>i(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",placeholder:"Select Cities",maxSelectedLabels:3,className:"w-full md:w-20rem"})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function g(e){let l={basic:`
<MultiSelect loading placeholder="Loading..." className="w-full md:w-20rem" />
        `,javascript:`
import React from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function LoadingDemo() {
    return (
        <div className="card flex justify-content-center">
            <MultiSelect loading placeholder="Loading..." className="w-full md:w-20rem" />
        </div>
    );
}
        `,typescript:`
import React from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function LoadingDemo() {
    return (
        <div className="card flex justify-content-center">
            <MultiSelect loading placeholder="Loading..." className="w-full md:w-20rem" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Loading state can be used ",(0,t.jsx)("i",{children:"loading"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(c.MultiSelect,{loading:!0,placeholder:"Loading...",className:"w-full md:w-20rem"})}),(0,t.jsx)(a.DocSectionCode,{code:l})]})}let v=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/multiselect.jpg",alt:"multiselect"})})]});function C(e){let[l,i]=(0,r.useState)(null),o={basic:`
<MultiSelect value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} optionLabel="name" 
    placeholder="Select Countries" itemTemplate={countryTemplate} panelFooterTemplate={panelFooterTemplate} className="w-full md:w-20rem" display="chip" />
        `,javascript:`
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function TemplateDemo() {
    const [selectedCountries, setSelectedCountries] = useState(null);
    const countries = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const countryTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        const length = selectedCountries ? selectedCountries.length : 0;

        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCountries} options={countries} onChange={(e) => setSelectedCountries(e.value)} optionLabel="name" 
                placeholder="Select Countries" itemTemplate={countryTemplate} panelFooterTemplate={panelFooterTemplate} className="w-full md:w-20rem" display="chip" />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

interface Country {
    name: string;
    code: string;
}

export default function TemplateDemo() {
    const [selectedCountries, setSelectedCountries] = useState<Country[] | null>(null);
    const countries: Country[] = [
        { name: 'Australia', code: 'AU' },
        { name: 'Brazil', code: 'BR' },
        { name: 'China', code: 'CN' },
        { name: 'Egypt', code: 'EG' },
        { name: 'France', code: 'FR' },
        { name: 'Germany', code: 'DE' },
        { name: 'India', code: 'IN' },
        { name: 'Japan', code: 'JP' },
        { name: 'Spain', code: 'ES' },
        { name: 'United States', code: 'US' }
    ];

    const countryTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        const length = selectedCountries ? selectedCountries.length : 0;

        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedCountries} options={countries} onChange={(e: MultiSelectChangeEvent) => setSelectedCountries(e.value)} optionLabel="name" 
                placeholder="Select Countries" itemTemplate={countryTemplate} panelFooterTemplate={panelFooterTemplate} className="w-full md:w-20rem" display="chip" />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Available options and the selected options support templating with ",(0,t.jsx)("i",{children:"itemTemplate"})," and ",(0,t.jsx)("i",{children:"selectedItemTemplate"})," properties respectively. In addition, header, footer and filter sections can be templated as well."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(c.MultiSelect,{value:l,options:[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}],onChange:e=>i(e.value),optionLabel:"name",placeholder:"Select Countries",itemTemplate:e=>(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.name,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`mr-2 flag flag-${e.code.toLowerCase()}`,style:{width:"18px"}}),(0,t.jsx)("div",{children:e.name})]}),panelFooterTemplate:()=>{let e=l?l.length:0;return(0,t.jsxs)("div",{className:"py-2 px-3",children:[(0,t.jsx)("b",{children:e})," item",e>1?"s":""," selected."]})},className:"w-full md:w-20rem",display:"chip"})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function y(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-multiselect"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-multiselect-label-container"}),(0,t.jsx)("td",{children:"Container of the label to display selected items."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-multiselect-label-container"}),(0,t.jsx)("td",{children:"Label to display selected items."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-multiselect-trigger"}),(0,t.jsx)("td",{children:"Dropdown button."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-multiselect-filter-container"}),(0,t.jsx)("td",{children:"Container of filter input."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-multiselect-panel"}),(0,t.jsx)("td",{children:"Overlay panel for items."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-multiselect-items"}),(0,t.jsx)("td",{children:"List container of items."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-multiselect-item"}),(0,t.jsx)("td",{children:"An item in the list."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-multiselect-token"}),(0,t.jsx)("td",{children:"A selected item element container on display='chip' mode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-chips-token-icon"}),(0,t.jsx)("td",{children:"Icon of a selected item element on display='chip' mode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-chips-token-label"}),(0,t.jsx)("td",{children:"Label of a selected item element on display='chip' mode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-multiselect-select-all-label"}),(0,t.jsx)("td",{children:"Label to display when selectAllLabel is defined."})]})]})]})})]})}function w(e){let l={basic:`
const TRANSITIONS = {
    overlay: {
        timeout: 150,
        classNames: {
            enter: 'opacity-0 scale-75',
            enterActive: 'opacity-100 !scale-100 transition-transform transition-opacity duration-150 ease-in',
            exit: 'opacity-100',
            exitActive: '!opacity-0 transition-opacity duration-150 ease-linear'
        }
    }
};

const Tailwind = {
    multiselect: {
        root: ({ props }) => ({
            className: classNames('inline-flex cursor-pointer select-none', 'bg-white dark:bg-gray-900 border border-gray-400 dark:border-blue-900/40  transition-colors duration-200 ease-in-out rounded-md', 'w-full md:w-80', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        labelContainer: 'overflow-hidden flex flex-auto cursor-pointer',
        label: ({ props }) => ({
            className: classNames('block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis', 'text-gray-800 dark:text-white/80', 'p-3 transition duration-200', {
                '!p-3': props.display !== 'chip' && (props.value == null || props.value == undefined),
                '!py-1.5 px-3': props.display === 'chip' && props.value !== null
            })
        }),
        token: {
            className: classNames('py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center')
        },
        removeTokenIcon: 'ml-2',
        trigger: {
            className: classNames('flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 dark:text-white/70 w-12 rounded-tr-lg rounded-br-lg')
        },
        panel: {
            className: classNames('bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg')
        },
        header: {
            className: classNames('p-3 border-b border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 bg-gray-100 dark:bg-gray-800 rounded-t-lg', 'flex items-center justify-between')
        },
        headerCheckboxContainer: {
            className: classNames('inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6')
        },
        headerCheckbox: {
            root: ({ props }) => ({
                className: classNames(
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 dark:text-white/70 rounded-lg transition-colors duration-200',
                    'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                    {
                        'border-gray-300 dark:border-blue-900/40 bg-white dark:bg-gray-900': !props?.checked,
                        'border-blue-500 bg-blue-500': props?.checked
                    }
                )
            })
        },
        headerCheckboxIcon: 'w-4 h-4 transition-all duration-200 text-white text-base',
        closeButton: {
            className: classNames(
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 dark:text-white/70 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 ',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        closeIcon: 'w-4 h-4 inline-block',
        wrapper: {
            className: classNames('max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80')
        },
        list: 'py-3 list-none m-0',
        item: ({ context }) => ({
            className: classNames('cursor-pointer font-normal overflow-hidden relative whitespace-nowrap', 'm-0 p-3 border-0  transition-shadow duration-200 rounded-none', {
                'text-gray-700 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': !context.focused && !context.selected,
                'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': context.focused && !context.selected,
                'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.selected,
                'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.selected
            })
        }),
        checkboxContainer: {
            className: classNames('inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6')
        },
        checkbox: ({ context }) => ({
            className: classNames(
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 dark:text-white/80 rounded-lg transition-colors duration-200',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'border-gray-300 dark:border-blue-900/40  bg-white dark:bg-gray-900': !context.selected,
                    'border-blue-500 bg-blue-500': context.selected
                }
            )
        }),
        checkboxIcon: 'w-4 h-4 transition-all duration-200 text-white text-base',
        itemGroup: {
            className: classNames('m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto')
        },
        filterContainer: 'relative',
        filterInput: {
            root: {
                className: classNames(
                    'pr-7 -mr-7',
                    'w-full',
                    'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80',
                    'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
                )
            }
        },
        filterIcon: '-mt-2 absolute top-1/2',
        clearIcon: 'text-gray-500 right-12 -mt-2 absolute top-1/2',
        transition: TRANSITIONS.overlay
    }
}
    `},i={javascript:`
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function UnstyledDemo() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-center">
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(o.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(a.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(a.DocSectionCode,{code:i,embedded:!0})]})})}function N(e){let[l,i]=(0,r.useState)(!1),[n,d]=(0,r.useState)(null),[m]=(0,r.useState)(Array.from({length:1e5}).map((e,t)=>({label:`Item #${t}`,value:t}))),u={basic:`
<MultiSelect
    value={selectedItems}
    options={items}
    onChange={(e) => {
        setSelectedItems(e.value);
        setSelectAll(e.value.length === items.length);
    }}
    selectAll={selectAll}
    onSelectAll={(e) => {
        setSelectedItems(e.checked ? [] : items.map((item) => item.value));
        setSelectAll(!e.checked);
    }}
    virtualScrollerOptions={{ itemSize: 43 }}
    maxSelectedLabels={3}
    placeholder="Select Items"
    className="w-full md:w-20rem"
/>
        `,javascript:`
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function VirtualScrollDemo() {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState(null);
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i })));

    return (
        <div className="card flex justify-content-center">
            <MultiSelect
            value={selectedItems}
            options={items}
            onChange={(e) => {
                setSelectedItems(e.value);
                setSelectAll(e.value.length === items.length);
            }}
            selectAll={selectAll}
            onSelectAll={(e) => {
                setSelectedItems(e.checked ? [] : items.map((item) => item.value));
                setSelectAll(!e.checked);
            }}
            virtualScrollerOptions={{ itemSize: 43 }}
            maxSelectedLabels={3}
            placeholder="Select Items"
            className="w-full md:w-20rem"
        />
        </div>
    );
}
        `,typescript:`
import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent, MultiSelectAllEvent } from 'primereact/multiselect';

export default function VirtualScrollDemo() {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState(null);
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i })));

    return (
        <div className="card flex justify-content-center">
            <MultiSelect
            value={selectedItems}
            options={items}
            onChange={(e: MultiSelectChangeEvent) => {
                setSelectedItems(e.value);
                setSelectAll(e.value.length === items.length);
            }}
            selectAll={selectAll}
            onSelectAll={(e: MultiSelectAllEvent) => {
                setSelectedItems(e.checked ? [] : items.map((item) => item.value));
                setSelectAll(!e.checked);
            }}
            virtualScrollerOptions={{ itemSize: 43 }}
            maxSelectedLabels={3}
            placeholder="Select Items"
            className="w-full md:w-20rem"
        />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with ",(0,t.jsx)("i",{children:"virtualScrollerOptions"})," property, refer to the"," ",(0,t.jsx)(o.default,{href:"/virtualscroller",children:"VirtualScroller"})," for more information about the available options as it is used internally by MultiSelect."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(c.MultiSelect,{value:n,options:m,onChange:e=>{d(e.value),i(e.value.length===m.length)},selectAll:l,onSelectAll:e=>{d(e.checked?[]:m.map(e=>e.value)),i(!e.checked)},virtualScrollerOptions:{itemSize:43},maxSelectedLabels:3,placeholder:"Select Items",className:"w-full md:w-20rem"})}),(0,t.jsx)(a.DocSectionCode,{code:u})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:v},{id:"pt.multiselect.options",label:"MultiSelect PT Options",component:l.default}];return(0,t.jsx)(i.DocComponent,{title:"React MultiSelect Component",header:"MultiSelect",description:"MultiSelect is used to select multiple items from a collection.",componentDocs:[{id:"import",label:"Import",component:S},{id:"basic",label:"Basic",component:d},{id:"chips",label:"Chips",component:m},{id:"group",label:"Group",component:b},{id:"template",label:"Template",component:C},{id:"filter",label:"Filter",component:h},{id:"loadingstate",label:"Loading State",component:g},{id:"virtualscroll",label:"Virtual Scroll",component:N},{id:"floatlabel",label:"Float Label",component:f},{id:"filled",label:"Filled",component:p},{id:"invalid",label:"Invalid",component:j},{id:"disabled",label:"Disabled",component:u},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["MultiSelect"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:y},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:w}]}]})}],82725)},18867,(e,t,l)=>{let i="/multiselect";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(82725)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);