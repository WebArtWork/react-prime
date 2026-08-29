(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52683,e=>{"use strict";var t=e.i(91398),o=e.i(88850),a=e.i(82948),n=e.i(5180),l=e.i(28137);function r(){let e={basic:`
<span id="dd1">Options</span>
<Dropdown aria-labelledby="dd1" />

<Dropdown aria-label="Options" />
    `};return(0,t.jsxs)(l.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Value to describe the component can either be provided with ",(0,t.jsx)("i",{children:"aria-labelledby"})," or ",(0,t.jsx)("i",{children:"aria-label"})," props. The dropdown element has a ",(0,t.jsx)("i",{children:"combobox"})," role in addition to ",(0,t.jsx)("i",{children:"aria-haspopup"})," and ",(0,t.jsx)("i",{children:"aria-expanded"})," attributes. If the editable option is enabled ",(0,t.jsx)("i",{children:"aria-autocomplete"})," is also added. The relation between the combobox and the popup is created with ",(0,t.jsx)("i",{children:"aria-controls"})," and ",(0,t.jsx)("i",{children:"aria-activedescendant"})," attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list."]}),(0,t.jsxs)("p",{children:["The popup list has an id that refers to the ",(0,t.jsx)("i",{children:"aria-controls"})," attribute of the ",(0,t.jsx)("i",{children:"combobox"})," element and uses ",(0,t.jsx)("i",{children:"listbox"})," as the role. Each list item has an ",(0,t.jsx)("i",{children:"option"})," role, an id to match the ",(0,t.jsx)("i",{children:"aria-activedescendant"})," ","of the input element along with ",(0,t.jsx)("i",{children:"aria-label"}),", ",(0,t.jsx)("i",{children:"aria-selected"})," and ",(0,t.jsx)("i",{children:"aria-disabled"})," attributes."]}),(0,t.jsxs)("p",{children:["If filtering is enabled, ",(0,t.jsx)("i",{children:"filterInputProps"})," can be defined to give ",(0,t.jsx)("i",{children:"aria-*"})," props to the filter input element."]}),(0,t.jsx)(n.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Closed State Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the dropdown element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Opens the popup and moves visual focus to the selected option, if there is none then last option receives the focus."})]})]})]})}),(0,t.jsx)("h3",{children:"Popup Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"tab"})]}),(0,t.jsx)("td",{children:"Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Selects the focused option and closes the popup."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Selects the focused option and closes the popup."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the popup, moves focus to the dropdown element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next option, if there is none then visual focus does not change."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous option, if there is none then visual focus does not change."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"right arrow"})}),(0,t.jsx)("td",{children:"If the dropdown is editable, removes the visual focus from the current option and moves input cursor to one character left."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"If the dropdown is editable, removes the visual focus from the current option and moves input cursor to one character right."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"If the dropdown is editable, moves input cursor at the end, if not then moves focus to the first option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"If the dropdown is editable, moves input cursor at the beginning, if not then moves focus to the last option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"any printable character"})}),(0,t.jsx)("td",{children:"Moves focus to the option whose label starts with the characters being typed if dropdown is not editable."})]})]})]})}),(0,t.jsx)("h3",{children:"Filter Input Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the dropdown element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the dropdown element."})]})]})]})})]})}var i=e.i(26637),s=e.i(91788);function c(e){let[o,a]=(0,s.useState)(null),r={basic:`
<Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
    placeholder="Select a City" className="w-full md:w-14rem" />
        `,javascript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function BasicDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface City {
    name: string;
    code: string;
}

export default function BasicDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Dropdown is used as a controlled component with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties along with an ",(0,t.jsx)("i",{children:"options"})," collection. Label and value of an option are defined with the ",(0,t.jsx)("i",{children:"optionLabel"})," and ",(0,t.jsx)("i",{children:"optionValue"})," ","properties respectively. Default property name for the ",(0,t.jsx)("i",{children:"optionLabel"})," is ",(0,t.jsx)("i",{children:"label"})," and ",(0,t.jsx)("i",{children:"value"})," for the ",(0,t.jsx)("i",{children:"optionValue"}),". If ",(0,t.jsx)("i",{children:"optionValue"})," is omitted and the object has no ",(0,t.jsx)("i",{children:"value"})," property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no ",(0,t.jsx)("i",{children:"optionLabel"})," and ",(0,t.jsx)("i",{children:"optionValue"})," would be necessary."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Dropdown,{value:o,onChange:e=>a(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",placeholder:"Select a City",className:"w-full md:w-14rem"})}),(0,t.jsx)(n.DocSectionCode,{code:r})]})}function d(e){let[o,a]=(0,s.useState)(null),r={basic:`
<Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
    placeholder="Select a City" className="w-full md:w-14rem" checkmark={true}  highlightOnSelect={false} />
        `,javascript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function CheckmarkDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface City {
    name: string;
    code: string;
}

export default function CheckmarkDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"An alternative way to highlight the selected option is displaying a checkmark instead. "})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Dropdown,{value:o,onChange:e=>a(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",placeholder:"Select a City",className:"w-full md:w-14rem",checkmark:!0,highlightOnSelect:!1})}),(0,t.jsx)(n.DocSectionCode,{code:r})]})}function m(e){let[o,a]=(0,s.useState)(null),r={basic:`
<Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
    showClear placeholder="Select a City" className="w-full md:w-14rem" />
        `,javascript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function ClearIconDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                showClear placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface City {
    name: string;
    code: string;
}

export default function ClearIconDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                showClear placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"showClear"})," is enabled, a clear icon is added to reset the Dropdown."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Dropdown,{value:o,onChange:e=>a(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",showClear:!0,placeholder:"Select a City",className:"w-full md:w-14rem"})}),(0,t.jsx)(n.DocSectionCode,{code:r})]})}function p(e){let o={basic:`
<Dropdown disabled placeholder="Select a City" className="w-full md:w-14rem" />
        `,javascript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Dropdown disabled placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Dropdown disabled placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Dropdown,{disabled:!0,placeholder:"Select a City",className:"w-full md:w-14rem"})}),(0,t.jsx)(n.DocSectionCode,{code:o})]})}function u(e){let[o,a]=(0,s.useState)(null),r={basic:`
<Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
    editable placeholder="Select a City" className="w-full md:w-14rem" />
        `,javascript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function EditableDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                editable placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface City {
    name: string;
    code: string;
}

export default function EditableDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                editable placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"editable"})," is present, the input can also be entered with typing."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Dropdown,{value:o,onChange:e=>a(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",editable:!0,placeholder:"Select a City",className:"w-full md:w-14rem"})}),(0,t.jsx)(n.DocSectionCode,{code:r})]})}function h(e){let[o,a]=(0,s.useState)(null),r={basic:`
<Dropdown variant="filled" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
    placeholder="Select a City" className="w-full md:w-14rem" />
        `,javascript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function FilledDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown variant="filled" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface City {
    name: string;
    code: string;
}

export default function FilledDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown variant="filled" value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specify the ",(0,t.jsx)("i",{children:"variant"})," property as ",(0,t.jsx)("i",{children:"filled"})," to display the component with a higher visual emphasis than the default ",(0,t.jsx)("i",{children:"outlined"})," style."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Dropdown,{variant:"filled",value:o,onChange:e=>a(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",placeholder:"Select a City",className:"w-full md:w-14rem"})}),(0,t.jsx)(n.DocSectionCode,{code:r})]})}function f(e){let[o,a]=(0,s.useState)(null),r={basic:`
<Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country" 
    filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" />
        `,javascript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function FilterDemo() {
    const [selectedCountry, setSelectedCountry] = useState(null);
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

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country" 
                filter filterDelay={400} valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" />
        </div>    
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface Country {
    name: string;
    code: string;
}

export default function FilterDemo() {
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
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

    const selectedCountryTemplate = (option: Country, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option: Country) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCountry} onChange={(e: DropdownChangeEvent) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country" 
                filter filterDelay={400} valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" />
        </div>    
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Dropdown provides built-in filtering that is enabled by adding the ",(0,t.jsx)("i",{children:"filter"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Dropdown,{value:o,onChange:e=>a(e.value),options:[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}],optionLabel:"name",placeholder:"Select a Country",filter:!0,filterDelay:400,showClear:!0,valueTemplate:(e,o)=>e?(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.name,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`mr-2 flag flag-${e.code.toLowerCase()}`,style:{width:"18px"}}),(0,t.jsx)("div",{children:e.name})]}):(0,t.jsx)("span",{children:o.placeholder}),itemTemplate:e=>(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.name,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`mr-2 flag flag-${e.code.toLowerCase()}`,style:{width:"18px"}}),(0,t.jsx)("div",{children:e.name})]}),className:"w-full md:w-14rem"})}),(0,t.jsx)(n.DocSectionCode,{code:r})]})}var x=e.i(97776);function w(e){let[o,a]=(0,s.useState)(null),r={basic:`
<FloatLabel>
    <Dropdown inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full" />
    <label htmlFor="dd-city">Select a City</label>
</FloatLabel>
        `,javascript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';

export default function FloatLabelDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <FloatLabel className="w-full md:w-14rem">
                <Dropdown inputId="dd-city" value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full" />
                <label htmlFor="dd-city">Select a City</label>
            </FloatLabel>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';

interface City {
    name: string;
    code: string;
}

export default function FloatLabelDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <FloatLabel className="w-full md:w-14rem">
                <Dropdown inputId="dd-city" value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" className="w-full" />
                <label htmlFor="dd-city">Select a City</label>
            </FloatLabel>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"A floating label appears on top of the input field when focused."})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)(x.FloatLabel,{className:"w-full md:w-14rem",children:[(0,t.jsx)(i.Dropdown,{inputId:"dd-city",value:o,onChange:e=>a(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",className:"w-full"}),(0,t.jsx)("label",{htmlFor:"dd-city",children:"Select a City"})]})}),(0,t.jsx)(n.DocSectionCode,{code:r})]})}function y(e){let[o,a]=(0,s.useState)(null),r={basic:`
<Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={groupedCities} optionLabel="label" 
    optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} className="w-full md:w-14rem" placeholder="Select a City" />
        `,javascript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function GroupedDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
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
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={groupedCities} optionLabel="label" 
                optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} className="w-full md:w-14rem" placeholder="Select a City" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface City {
    label: string;
    value: string;
} 

interface Country {
    label: string;
    code: string;
    items: City[];
}

export default function GroupedDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const groupedCities: Country[] = [
        {
            label: 'Germany', code: 'DE',
            items: [
                { label: 'Berlin', value: 'Berlin' },
                { label: 'Frankfurt', value: 'Frankfurt' },
                { label: 'Hamburg', value: 'Hamburg' },
                { label: 'Munich', value: 'Munich' }
            ]
        },
        {
            label: 'USA', code: 'US',
            items: [
                { label: 'Chicago', value: 'Chicago' },
                { label: 'Los Angeles', value: 'Los Angeles' },
                { label: 'New York', value: 'New York' },
                { label: 'San Francisco', value: 'San Francisco' }
            ]
        },
        {
            label: 'Japan', code: 'JP',
            items: [
                { label: 'Kyoto', value: 'Kyoto' },
                { label: 'Osaka', value: 'Osaka' },
                { label: 'Tokyo', value: 'Tokyo' },
                { label: 'Yokohama', value: 'Yokohama' }
            ]
        }
    ];

    const groupedItemTemplate = (option: City) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.label} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                <div>{option.label}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={groupedCities} optionLabel="label" 
                optionGroupLabel="label" optionGroupChildren="items" optionGroupTemplate={groupedItemTemplate} className="w-full md:w-14rem" placeholder="Select a City" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Options can be grouped when a nested data structures is provided. To define the label of a group ",(0,t.jsx)("i",{children:"optionGroupLabel"})," property is needed and also ",(0,t.jsx)("i",{children:"optionGroupChildren"})," is required to define the property that refers to the children of a group."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Dropdown,{value:o,onChange:e=>a(e.value),options:[{label:"Germany",code:"DE",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",code:"US",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",code:"JP",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}],optionLabel:"label",optionGroupLabel:"label",optionGroupChildren:"items",optionGroupTemplate:e=>(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.label,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`mr-2 flag flag-${e.code.toLowerCase()}`,style:{width:"18px"}}),(0,t.jsx)("div",{children:e.label})]}),className:"w-full md:w-14rem",placeholder:"Select a City"})}),(0,t.jsx)(n.DocSectionCode,{code:r})]})}function v(e){let o={basic:`
import { Dropdown } from 'primereact/dropdown';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)(n.DocSectionCode,{code:o,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function g(e){let[o,a]=(0,s.useState)(null),r={basic:`
<Dropdown invalid value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
    placeholder="Select a City" className="w-full md:w-14rem" />
        `,javascript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function InvalidDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown invalid value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface City {
    name: string;
    code: string;
}

export default function InvalidDemo() {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown invalid value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Dropdown,{invalid:!0,value:o,onChange:e=>a(e.value),options:[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],optionLabel:"name",placeholder:"Select a City",className:"w-full md:w-14rem"})}),(0,t.jsx)(n.DocSectionCode,{code:r})]})}var b=e.i(41158);function C(e){let[o,a]=(0,s.useState)(null),r=(0,s.useRef)(Array.from({length:1e5})),[c,d]=(0,s.useState)(!1),m=(0,s.useRef)(),p={basic:`
<Dropdown value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} virtualScrollerOptions={{ itemSize: 38 }} 
    placeholder="Select Item" className="w-full md:w-14rem" />
        `,javascript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function LazyVirtualScrollDemo() {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = useRef(Array.from({ length: 100000 }));
    const [loading, setLoading] = useState(false);
    const loadLazyTimeout = useRef();

    const onLazyLoad = (event) => {
        setLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(
            () => {
                const { first, last } = event;
                const _items = [...items.current];

                for (let i = first; i < last; i++) {
                    _items[i] = { label: \`Item #\${i}\`, value: i };
                }

                items.current = _items;
                setLoading(false);
            },
            Math.random() * 1000 + 250
        );
    };
    return (
        <div className="card flex justify-content-center">
            <Dropdown
                value={selectedItem}
                onChange={(e) => setSelectedItem(e.value)}
                options={items.current}
                placeholder="Select Item"
                className="w-full md:w-14rem"
                virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }}
            />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

type ItemType = { label: string; value: number };

export default function LazyVirtualScrollDemo() {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = useRef(Array.from({ length: 100000 }));
    const [loading, setLoading] = useState(false);
    const loadLazyTimeout = useRef();

    const onLazyLoad = (event) => {
        setLoading(true);

        if (loadLazyTimeout.current) {
            clearTimeout(loadLazyTimeout.current);
        }

        //imitate delay of a backend call
        loadLazyTimeout.current = setTimeout(
            () => {
                const { first, last } = event;
                const _items = [...items.current];

                for (let i = first; i < last; i++) {
                    _items[i] = { label: \`Item #\${i}\`, value: i };
                }

                items.current = _items;
                setLoading(false);
            },
            Math.random() * 1000 + 250
        );
    };

    return (
          <div className="card flex justify-content-center">
              <Dropdown
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.value)}
                  options={items.current}
                  placeholder="Select Item"
                  className="w-full md:w-14rem"
                  virtualScrollerOptions={{ lazy: true, onLazyLoad: onLazyLoad, itemSize: 38, showLoader: true, loading: loading, delay: 250 }}
              />
          </div>
      )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Dropdown,{value:o,onChange:e=>a(e.value),options:r.current,placeholder:"Select Item",className:"w-full md:w-14rem",virtualScrollerOptions:{lazy:!0,onLazyLoad:e=>{d(!0),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{let{first:t,last:o}=e,a=[...r.current];for(let e=t;e<o;e++)a[e]={label:`Item #${e}`,value:e};r.current=a,d(!1)},1e3*Math.random()+250)},itemSize:38,showLoader:!0,loading:c,delay:250}})}),(0,t.jsx)(n.DocSectionCode,{code:p})]})}function j(e){let o={basic:`
<Dropdown loading placeholder="Loading..." className="w-full md:w-14rem" />
        `,javascript:`
import React from "react";
import { Dropdown } from 'primereact/dropdown';

export default function LoadingDemo() {

    return (
      <Dropdown loading placeholder="Loading..." className="w-full md:w-14rem" />
    )
}
        `,typescript:`
import React from "react";
import { Dropdown } from 'primereact/dropdown';

export default function LoadingDemo() {

    return (
        <div className="card flex justify-content-center">
          <Dropdown loading placeholder="Loading..." className="w-full md:w-14rem" />“
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Loading state can be used ",(0,t.jsx)("i",{children:"loading"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Dropdown,{loading:!0,placeholder:"Loading...",className:"w-full md:w-14rem"})}),(0,t.jsx)(n.DocSectionCode,{code:o})]})}let S=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/dropdown.jpg",alt:"dropdown"})})]});var N=e.i(48214),D=e.i(75676);function L(e){let[o,a]=(0,s.useState)(null),r={basic:`
<Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country" 
    valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" panelFooterTemplate={panelFooterTemplate}
    dropdownIcon={(opts) => {
        return opts.iconProps['data-pr-overlay-visible'] ? <ChevronRightIcon {...opts.iconProps} /> : <ChevronDownIcon {...opts.iconProps} />;
    }} 
/>
        `,javascript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { ChevronDownIcon } from 'primereact/icons/chevrondown';
import { ChevronRightIcon } from 'primereact/icons/chevronright';

export default function TemplateDemo() {
    const [selectedCountry, setSelectedCountry] = useState(null);
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

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        return (
            <div className="py-2 px-3">
                {selectedCountry ? (
                    <span>
                        <b>{selectedCountry.name}</b> selected.
                    </span>
                ) : (
                    'No country selected.'
                )}
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country" 
                valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" panelFooterTemplate={panelFooterTemplate} 
                dropdownIcon={(opts) => {
                    return opts.iconProps['data-pr-overlay-visible'] ? <ChevronRightIcon {...opts.iconProps} /> : <ChevronDownIcon {...opts.iconProps} />;
                }}/>
        </div>    
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { CheckIcon } from 'primereact/icons/check';
import { StarIcon } from 'primereact/icons/star';

interface Country {
    name: string;
    code: string;
}

export default function TemplateDemo() {
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
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

    const selectedCountryTemplate = (option: Country, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option: Country) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`mr-2 flag flag-\${option.code.toLowerCase()}\`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        return (
            <div className="py-2 px-3">
                {selectedCountry ? (
                    <span>
                        <b>{selectedCountry.name}</b> selected.
                    </span>
                ) : (
                    'No country selected.'
                )}
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCountry} onChange={(e: DropdownChangeEvent) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="Select a Country" 
                valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" panelFooterTemplate={panelFooterTemplate} 
                dropdownIcon={(opts) => {
                    return opts.iconProps['data-pr-overlay-visible'] ? <ChevronRightIcon {...opts.iconProps} /> : <ChevronDownIcon {...opts.iconProps} />;
                }}/>/>
        </div>    
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Options and the selected option display support templating with ",(0,t.jsx)("i",{children:"itemTemplate"})," and ",(0,t.jsx)("i",{children:"valueTemplate"})," properties respectively."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Dropdown,{value:o,onChange:e=>a(e.value),options:[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}],optionLabel:"name",placeholder:"Select a Country",valueTemplate:(e,o)=>e?(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.name,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`mr-2 flag flag-${e.code.toLowerCase()}`,style:{width:"18px"}}),(0,t.jsx)("div",{children:e.name})]}):(0,t.jsx)("span",{children:o.placeholder}),itemTemplate:e=>(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.name,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`mr-2 flag flag-${e.code.toLowerCase()}`,style:{width:"18px"}}),(0,t.jsx)("div",{children:e.name})]}),panelFooterTemplate:()=>(0,t.jsx)("div",{className:"py-2 px-3",children:o?(0,t.jsxs)("span",{children:[(0,t.jsx)("b",{children:o.name})," selected."]}):"No country selected."}),className:"w-full md:w-14rem",dropdownIcon:e=>e.iconProps["data-pr-overlay-visible"]?(0,t.jsx)(D.ChevronRightIcon,{...e.iconProps}):(0,t.jsx)(N.ChevronDownIcon,{...e.iconProps})})}),(0,t.jsx)(n.DocSectionCode,{code:r})]})}function T(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-dropdown"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-dropdown-label"}),(0,t.jsx)("td",{children:"Element to display label of selected option."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-dropdown-trigger"}),(0,t.jsx)("td",{children:"Icon element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-dropdown-panel"}),(0,t.jsx)("td",{children:"Icon element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-dropdown-items-wrapper"}),(0,t.jsx)("td",{children:"Wrapper element of items list."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-dropdown-items"}),(0,t.jsx)("td",{children:"List element of items."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-dropdown-item"}),(0,t.jsx)("td",{children:"An item in the list."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-dropdown-filter-container"}),(0,t.jsx)("td",{children:"Container of filter input."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-dropdown-filter"}),(0,t.jsx)("td",{children:"Filter element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-dropdown-open"}),(0,t.jsx)("td",{children:"Container element when overlay is visible."})]})]})]})})]})}function I(e){let o={basic:`
const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

const Tailwind = {    
    dropdown: {
        root: ({ props }) => ({
            className: classNames(
                'cursor-pointer inline-flex relative select-none',
                'bg-white border border-gray-400 transition-colors duration-200 ease-in-out rounded-md',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300',
                'w-full md:w-56',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            )
        }),
        input: ({ props }) => ({
            className: classNames(
                'cursor-pointer block flex flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative',
                'bg-transparent border-0 text-gray-800',
                'dark:text-white/80',
                'p-3 transition duration-200 bg-transparent rounded appearance-none font-sans text-base',
                'focus:outline-none focus:shadow-none',
                { 'pr-7': props.showClear }
            )
        }),
        trigger: {
            className: classNames('flex items-center justify-center shrink-0', 'bg-transparent text-gray-500 w-12 rounded-tr-lg rounded-br-lg')
        },
        wrapper: {
            className: classNames('max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80')
        },
        list: 'py-3 list-none m-0',
        item: ({ context }) => ({
            className: classNames(
                'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
                'dark:text-white/80 dark:hover:bg-gray-800',
                'hover:text-gray-700 hover:bg-gray-200',
                {
                    'text-gray-700': !context.focused && !context.selected,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.selected,
                    'bg-blue-400 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.selected,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.selected,
                    'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                }
            )
        }),
        itemgroup: {
            className: classNames('m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto')
        },
        header: {
            className: classNames('p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg', 'dark:bg-gray-800 dark:text-white/80 dark:border-blue-900/40')
        },
        filtercontainer: 'relative',
        filterinput: {
            className: classNames(
                'pr-7 -mr-7',
                'w-full',
                'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        filtericon: '-mt-2 absolute top-1/2',
        clearicon: 'text-gray-500 right-12 -mt-2 absolute top-1/2',
        transition: TRANSITIONS.overlay
    }
}
        `},a={javascript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function UnstyledDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(l.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(b.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(n.DocSectionCode,{code:o,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(n.DocSectionCode,{code:a,embedded:!0})]})})}function R(e){let[o,a]=(0,s.useState)(null),r=Array.from({length:1e5}).map((e,t)=>({label:`Item #${t}`,value:t})),c={basic:`
<Dropdown value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} virtualScrollerOptions={{ itemSize: 38 }} 
    placeholder="Select Item" className="w-full md:w-14rem" />
        `,javascript:`
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function VirtualScrollDemo() {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} virtualScrollerOptions={{ itemSize: 38 }} 
                placeholder="Select Item" className="w-full md:w-14rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface Item {
    label: string;
    value: number;
}

export default function VirtualScrollDemo() {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const items: Item[] = Array.from({ length: 100000 }).map((_, i) => ({ label: \`Item #\${i}\`, value: i }));

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedItem} onChange={(e: DropdownChangeEvent) => setSelectedItem(e.value)} options={items} virtualScrollerOptions={{ itemSize: 38 }} 
                placeholder="Select Item" className="w-full md:w-14rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["VirtualScroller is used to render a long list of options efficiently like 100K records in this demo. The configuration is done with ",(0,t.jsx)("i",{children:"virtualScrollerOptions"})," property, refer to the"," ",(0,t.jsx)(b.default,{href:"/virtualscroller",children:"VirtualScroller"})," for more information about the available options as it is used internally by Dropdown."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Dropdown,{value:o,onChange:e=>a(e.value),options:r,virtualScrollerOptions:{itemSize:38},placeholder:"Select Item",className:"w-full md:w-14rem"})}),(0,t.jsx)(n.DocSectionCode,{code:c})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:S},{id:"pt.dropdown.options",label:"Dropdown PT Options",component:o.default}];return(0,t.jsx)(a.DocComponent,{title:"React Dropdown Component",header:"Dropdown",description:"Dropdown also known as Select, is used to choose an item from a collection of options.",componentDocs:[{id:"import",label:"Import",component:v},{id:"basic",label:"Basic",component:c},{id:"checkmark",label:"Checkmark",component:d},{id:"editable",label:"Editable",component:u},{id:"group",label:"Group",component:y},{id:"template",label:"Template",component:L},{id:"filter",label:"Filter",component:f},{id:"clearicon",label:"Clear Icon",component:m},{id:"loadingstate",label:"Loading State",component:j},{id:"virtualscroll",label:"Virtual Scroll",component:R},{id:"lazyvirtualscroll",label:"Lazy Virtual Scroll",component:C},{id:"floatlabel",label:"Float Label",component:w},{id:"filled",label:"Filled",component:h},{id:"invalid",label:"Invalid",component:g},{id:"disabled",label:"Disabled",component:p},{id:"accessibility",label:"Accessibility",component:r}],apiDocs:["Dropdown"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:T},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:I}]}]})}],52683)},89408,(e,t,o)=>{let a="/dropdown";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(52683)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);