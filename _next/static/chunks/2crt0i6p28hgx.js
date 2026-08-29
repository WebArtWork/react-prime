(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,27453,e=>{"use strict";var t=e.i(91398),a=e.i(5180),r=e.i(28137),n=e.i(41158);function l(){let e={basic:`
<label htmlFor="date1">Date</label>
<Calendar inputId="date1" />

<span id="date2">Date</span>
<Calendar aria-labelledby="date2" />

<Calendar aria-label="Date" />
    `};return(0,t.jsxs)(r.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Value to describe the component can either be provided via ",(0,t.jsx)("i",{children:"label"})," tag combined with ",(0,t.jsx)("i",{children:"inputId"})," prop or using ",(0,t.jsx)("i",{children:"aria-labelledby"}),", ",(0,t.jsx)("i",{children:"aria-label"})," props. The input element has ",(0,t.jsx)("i",{children:"combobox"})," role in addition to"," ",(0,t.jsx)("i",{children:"aria-autocomplete"}),' as "none", ',(0,t.jsx)("i",{children:"aria-haspopup"}),' as "dialog" and ',(0,t.jsx)("i",{children:"aria-expanded"})," attributes. The relation between the input and the popup is created with ",(0,t.jsx)("i",{children:"aria-controls"})," attribute that refers to the id of the popup."]}),(0,t.jsxs)("p",{children:["The optional calendar button requires includes ",(0,t.jsx)("i",{children:"aria-haspopup"}),", ",(0,t.jsx)("i",{children:"aria-expanded"})," for states along with ",(0,t.jsx)("i",{children:"aria-controls"})," to define the relation between the popup and the button. The value to read is retrieved from the"," ",(0,t.jsx)("i",{children:"chooseDate"}),"key of the aria property from the ",(0,t.jsx)(n.default,{href:"/locale",children:"locale"})," API. This label is also used for the ",(0,t.jsx)("i",{children:"aria-label"})," of the popup as well. When there is a value selected, it is formatted and appended to the label to be able to notify users about the current value."]}),(0,t.jsxs)("p",{children:["Popup has a ",(0,t.jsx)("i",{children:"dialog"})," role along with ",(0,t.jsx)("i",{children:"aria-modal"})," and ",(0,t.jsx)("i",{children:"aria-label"}),". The navigation buttons at the header has an ",(0,t.jsx)("i",{children:"aria-label"})," retrieved from the ",(0,t.jsx)("i",{children:"prevYear"}),", ",(0,t.jsx)("i",{children:"nextYear"}),", ",(0,t.jsx)("i",{children:"prevMonth"}),", ",(0,t.jsx)("i",{children:"nextMonth"}),",",(0,t.jsx)("i",{children:"prevDecade"})," and ",(0,t.jsx)("i",{children:"nextDecade"})," keys of the locale aria API. Similarly month picker button uses the ",(0,t.jsx)("i",{children:"chooseMonth"})," and year picker button uses the ",(0,t.jsx)("i",{children:"chooseYear"})," keys."]}),(0,t.jsxs)("p",{children:["Main date table uses ",(0,t.jsx)("i",{children:"grid"})," role that contains th elements with ",(0,t.jsx)("i",{children:"col"})," as the scope along with ",(0,t.jsx)("i",{children:"abbr"})," tag resolving to the full name of the month. Each date cell has an ",(0,t.jsx)("i",{children:"aria-label"})," referring to the full date value. Buttons at the footer utilize their readable labels as ",(0,t.jsx)("i",{children:"aria-label"})," as well. Selected date also receives the ",(0,t.jsx)("i",{children:"aria-selected"})," attribute."]}),(0,t.jsxs)("p",{children:["Timepicker spinner buttons get their labels for ",(0,t.jsx)("i",{children:"aria-label"})," from the aria locale API using the ",(0,t.jsx)("i",{children:"prevHour"}),", ",(0,t.jsx)("i",{children:"nextHour"}),", ",(0,t.jsx)("i",{children:"prevMinute"}),", ",(0,t.jsx)("i",{children:"nextMinute"}),", ",(0,t.jsx)("i",{children:"prevSecond"}),", ",(0,t.jsx)("i",{children:"nextSecond"}),", ",(0,t.jsx)("i",{children:"am"})," and ",(0,t.jsx)("i",{children:"pm"})," ","keys."]}),(0,t.jsxs)("p",{children:["Calendar also includes a hidden section that is only available to screen readers with ",(0,t.jsx)("i",{children:"aria-live"}),' as "polite". This element is updated when the selected date changes to instruct the user about the current date selected.']}),(0,t.jsx)(a.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Choose Date Button Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Opens popup and moves focus to the selected date, if there is none focuses on today."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Opens popup and moves focus to the selected date, if there is none focuses on today."})]})]})]})}),(0,t.jsx)("h3",{children:"Popup Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Closes the popup and moves focus to the input element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the next focusable element within the popup."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"tab"})]}),(0,t.jsx)("td",{children:"Moves focus to the next focusable element within the popup."})]})]})]})}),(0,t.jsx)("h3",{children:"Header Buttons Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Triggers the button action."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Triggers the button action."})]})]})]})}),(0,t.jsx)("h3",{children:"Date Grid Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Selects the date, closes the popup and moves focus to the input element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Selects the date, closes the popup and moves focus to the input element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the same day of the previous week."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the same day of the next week."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"right arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next day."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous day."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Moves focus to the first day of the current week."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Moves focus to the last day of the current week."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"page up"})}),(0,t.jsx)("td",{children:"Changes the date to previous month in date picker mode. Moves to previous year in month picker mode and previous decade in year picker."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"page up"})]}),(0,t.jsx)("td",{children:"Changes the date to previous year in date picker mode. Has no effect in month or year picker"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"page down"})}),(0,t.jsx)("td",{children:"Changes the date to next month in date picker mode. Moves to next year in month picker mode and next decade in year picker."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"page down"})]}),(0,t.jsx)("td",{children:"Changes the date to next year in date picker mode. Has no effect in month or year picker"})]})]})]})}),(0,t.jsx)("h3",{children:"Footer Buttons Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Triggers the button action."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Triggers the button action."})]})]})]})})]})}var i=e.i(66901),s=e.i(91788);function o(e){let[n,l]=(0,s.useState)(null),o={basic:`
        <Calendar
            value={date}
            onChange={(e) => setDate(e.value)}
            appendTo={typeof window !== 'undefined' ? document.body : null}
        />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function BasicDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
        <Calendar
            value={date}
            onChange={(e) => setDate(e.value)}
            appendTo={typeof window !== 'undefined' ? document.body : null}
        />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function BasicDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                appendTo={typeof window !== 'undefined' ? document.body : null}
            />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Calendar is used a controlled input component with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{value:n,onChange:e=>l(e.value),appendTo:document.body})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function d(e){let[n,l]=(0,s.useState)(null),o={basic:`
<Calendar value={date} onChange={(e) => setDate(e.value)} showButtonBar />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function ButtonBarDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} showButtonBar />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function ButtonBarDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} showButtonBar />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"showButtonBar"})," is present, today and clear buttons are displayed at the footer."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{value:n,onChange:e=>l(e.value),showButtonBar:!0})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function c(e){let[n,l]=(0,s.useState)(null),o={basic:`
<Calendar value={date} onChange={(e) => setDate(e.value)} dateTemplate={dateTemplate} />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DateTemplateDemo() {
    const [date, setDate] = useState(null);

    const dateTemplate = (date) => {
        if (date.day > 10 && date.day < 15) {
            return (
                <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
            );
        }

        return date.day;
    }

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} dateTemplate={dateTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function DateTemplateDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    const dateTemplate = (date: Date) => {
        if (date.day > 10 && date.day < 15) {
            return (
                <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
            );
        }

        return date.day;
    }

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} dateTemplate={dateTemplate} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Custom content can be placed inside date cells with the ",(0,t.jsx)("i",{children:"dateTemplate"})," property that takes a Date as a parameter."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{value:n,onChange:e=>l(e.value),dateTemplate:e=>e.day>10&&e.day<15?(0,t.jsx)("strong",{style:{textDecoration:"line-through"},children:e.day}):e.day})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function h(e){let n={basic:`
<Calendar disabled />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Calendar disabled />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Calendar disabled />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{disabled:!0})}),(0,t.jsx)(a.DocSectionCode,{code:n})]})}function u(e){let[n,l]=(0,s.useState)(null),o={basic:`
<Calendar variant="filled" value={date} onChange={(e) => setDate(e.value)} />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function FilledDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar variant="filled" value={date} onChange={(e) => setDate(e.value)} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function FilledDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar variant="filled" value={date} onChange={(e) => setDate(e.value)} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specify the ",(0,t.jsx)("i",{children:"variant"})," property as ",(0,t.jsx)("i",{children:"filled"})," to display the component with a higher visual emphasis than the default ",(0,t.jsx)("i",{children:"outlined"})," style."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{variant:"filled",value:n,onChange:e=>l(e.value)})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}var m=e.i(97776);function p(e){let[l,o]=(0,s.useState)(null),d={basic:`
<FloatLabel>
    <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
    <label htmlFor="birth_date">Birth Date</label>
</FloatLabel>
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { FloatLabel } from 'primereact/floatlabel';

export default function FloatLabelDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
                <label htmlFor="birth_date">Birth Date</label>
            </FloatLabel>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { FloatLabel } from 'primereact/floatlabel';
import { Nullable } from "primereact/ts-helpers";

export default function FloatLabelDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <Calendar inputId="birth_date" value={date} onChange={(e) => setDate(e.value)} />
                <label htmlFor="birth_date">Birth Date</label>
            </FloatLabel>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A floating label appears on top of the input field when focused. Visit ",(0,t.jsx)(n.default,{href:"/floatlabel",children:"FloatLabel"})," documentation for more information."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)(m.FloatLabel,{children:[(0,t.jsx)(i.Calendar,{inputId:"birth_date",value:l,onChange:e=>o(e.value)}),(0,t.jsx)("label",{htmlFor:"birth_date",children:"Birth Date"})]})}),(0,t.jsx)(a.DocSectionCode,{code:d})]})}function x(e){let[n,l]=(0,s.useState)(null),o={basic:`
<Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function FormatDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function FormatDemo() {
     const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Default date format is ",(0,t.jsx)("i",{children:"mm/dd/yy"})," which can be customized using the ",(0,t.jsx)("i",{children:"dateFormat"})," property. Following options can be a part of the format."]}),(0,t.jsxs)("ul",{className:"mb-4 line-height-4",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"d"})," - day of month (no leading zero)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"dd"})," - day of month (two digit)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"o"})," - day of the year (no leading zeros)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"oo"})," - day of the year (three digit)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"D"})," - day name short"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"DD"})," - day name long"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"m"})," - month of year (no leading zero)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"mm"})," - month of year (two digit)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"M"})," - month name short"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"MM"})," - month name long"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"y"})," - year (two digit)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"yy"})," - year (four digit)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"@"})," - Unix timestamp (ms since 01/01/1970)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"!"})," - Windows ticks (100ns since 01/01/0001)"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"'...'"})," - literal text"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"''"})," - single quote"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("i",{children:"anything else"})," - literal text"]})]})]}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{value:n,onChange:e=>l(e.value),dateFormat:"dd/mm/yy"})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function f(e){let[n,l]=(0,s.useState)(null),o={basic:`
<Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function IconDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Button Display
                </label>
                <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon />
            </div>
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Icon Display
                </label>

                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon  />
            </div>
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Icon Template
                </label>

                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon timeOnly  icon={() => <i className="pi pi-clock" />} />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function IconDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Button Display
                </label>
                <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon />
            </div>
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Icon Display
                </label>

                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon  />
            </div>
            <div className="flex-auto">
                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                    Icon Template
                </label>

                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon timeOnly  icon={() => <i className="pi pi-clock" />} />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["An additional icon is displayed next to the input field when ",(0,t.jsx)("i",{children:"showIcon"})," is present."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap gap-3 p-fluid",children:[(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"buttondisplay",className:"font-bold block mb-2",children:"Button Display"}),(0,t.jsx)(i.Calendar,{id:"buttondisplay",value:n,onChange:e=>l(e.value),showIcon:!0})]}),(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"buttondisplay",className:"font-bold block mb-2",children:"Icon Display"}),(0,t.jsx)(i.Calendar,{value:n,onChange:e=>l(e.value),showIcon:!0})]}),(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"buttondisplay",className:"font-bold block mb-2",children:"Icon Template"}),(0,t.jsx)(i.Calendar,{value:n,onChange:e=>l(e.value),showIcon:!0,timeOnly:!0,icon:()=>(0,t.jsx)("i",{className:"pi pi-clock"})})]})]}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function j(e){let n={basic:`
import { Calendar } from 'primereact/calendar';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)(a.DocSectionCode,{code:n,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function b(e){let[n,l]=(0,s.useState)(null),o={basic:`
<Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />

        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function InlineDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
        </div>

    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function InlineDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Calendar is displayed as a popup by default, add ",(0,t.jsx)("i",{children:"inline"})," property to customize this behavior."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{value:n,onChange:e=>l(e.value),inline:!0,showWeek:!0})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function v(e){let n={basic:`
<Calendar invalid/>
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <Calendar invalid/>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <Calendar invalid/>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state is displayed using the ",(0,t.jsx)("i",{children:"invalid"})," prop to indicate a failed validation. You can use this style when integrating with form validation libraries."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{invalid:!0})}),(0,t.jsx)(a.DocSectionCode,{code:n})]})}var y=e.i(183);function g(e){let[l,o]=(0,s.useState)(null);(0,y.addLocale)("es",{firstDayOfWeek:1,showMonthAfterYear:!0,dayNames:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],dayNamesShort:["dom","lun","mar","mié","jue","vie","sáb"],dayNamesMin:["D","L","M","X","J","V","S"],monthNames:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],monthNamesShort:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],today:"Hoy",clear:"Limpiar"});let d={basic:`
<Calendar value={date} onChange={(e) => setDate(e.value)} locale="es" />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

export default function LocaleDemo() {
    const [date, setDate] = useState(null);

    addLocale('es', {
        firstDayOfWeek: 1,
        showMonthAfterYear: true,
        dayNames: ['domingo', 'lunes', 'martes', 'mi\xe9rcoles', 'jueves', 'viernes', 's\xe1bado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mi\xe9', 'jue', 'vie', 's\xe1b'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Limpiar'
    });

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} locale="es" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { Nullable } from "primereact/ts-helpers";

export default function LocaleDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    addLocale('es', {
        firstDayOfWeek: 1,
        showMonthAfterYear: true,
        dayNames: ['domingo', 'lunes', 'martes', 'mi\xe9rcoles', 'jueves', 'viernes', 's\xe1bado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mi\xe9', 'jue', 'vie', 's\xe1b'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Limpiar'
    });

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} locale="es" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Locale based settings such as labels, dateFormat and firstDayOfWeek are derived from the global ",(0,t.jsx)(n.default,{href:"/locale",children:"Locale"})," configuration. In case, a certain calendar needs to be customized, ",(0,t.jsx)("i",{children:"locale"})," property can be used to override the global setting."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{value:l,onChange:e=>o(e.value),locale:"es"})}),(0,t.jsx)(a.DocSectionCode,{code:d})]})}function D(e){let n=new Date,l=n.getMonth(),o=n.getFullYear(),d=0===l?11:l-1,c=11===d?o-1:o,h=11===l?0:l+1,u=0===h?o+1:o,[m,p]=(0,s.useState)(null),x=new Date;x.setMonth(d),x.setFullYear(c);let f=new Date;f.setMonth(h),f.setFullYear(u);let j={basic:`
<Calendar id="minmax" value={date} onChange={(e) => setDate(e.value)} minDate={minDate} maxDate={maxDate} readOnlyInput />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function MinMaxDemo() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;

    const [date, setDate] = useState(null);

    let minDate = new Date();

    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);

    let maxDate = new Date();

    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} minDate={minDate} maxDate={maxDate} readOnlyInput />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function MinMaxDemo() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;

    const [date, setDate] = useState<Nullable<Date>>(null);

    let minDate = new Date();

    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);

    let maxDate = new Date();

    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} minDate={minDate} maxDate={maxDate} readOnlyInput />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Boundaries for the permitted dates that can be entered are defined with ",(0,t.jsx)("i",{children:"minDate"})," and ",(0,t.jsx)("i",{children:"maxDate"})," properties."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{value:m,onChange:e=>p(e.value),minDate:x,maxDate:f,readOnlyInput:!0})}),(0,t.jsx)(a.DocSectionCode,{code:j})]})}function C(e){let[n,l]=(0,s.useState)(null),o={basic:`
<Calendar value={date} onChange={(e) => setDate(e.value)} view="month" dateFormat="mm/yy" />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function MonthPickerDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} view="month" dateFormat="mm/yy" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function MonthPickerDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} view="month" dateFormat="mm/yy" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Month only picker is enabled by specifying ",(0,t.jsx)("i",{children:"view"})," as ",(0,t.jsx)("i",{children:"month"})," in addition to a suitable ",(0,t.jsx)("i",{children:"dateFormat"}),"."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{value:n,onChange:e=>l(e.value),view:"month",dateFormat:"mm/yy"})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function N(e){let[n,l]=(0,s.useState)(null),o={basic:`
<Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function MultipleDemo() {
    const [dates, setDates] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function MultipleDemo() {
    const [dates, setDates] = useState<Nullable<Date[]>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="multiple" readOnlyInput />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["In order to choose multiple dates, set ",(0,t.jsx)("i",{children:"selectionMode"})," as ",(0,t.jsx)("i",{children:"multiple"}),". In this mode, the value binding should be an array."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{value:n,onChange:e=>l(e.value),selectionMode:"multiple",readOnlyInput:!0})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function w(e){let[n,l]=(0,s.useState)(null),o={basic:`
<Calendar value={date} onChange={(e) => setDate(e.value)} numberOfMonths={3} />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function MultipleMonthsDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} numberOfMonths={3} />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function MultipleMonthsDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} numberOfMonths={3} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Number of months to display is configured with the ",(0,t.jsx)("i",{children:"numberOfMonths"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{value:n,onChange:e=>l(e.value),numberOfMonths:3})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}let S=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"calendar"})})]});function k(e){let[n,l]=(0,s.useState)(null),o={basic:`
<Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function RangeDemo() {
    const [dates, setDates] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function RangeDemo() {
    const [dates, setDates] = useState<Nullable<(Date | null)[]>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={dates} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />
        </div>

    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A range of dates can be selected by defining ",(0,t.jsx)("i",{children:"selectionMode"})," as ",(0,t.jsx)("i",{children:"range"}),", in this case the bound value would be an array with two values where first date is the start of the range and second date is the end."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{value:n,onChange:e=>l(e.value),selectionMode:"range",readOnlyInput:!0,hideOnRangeSelection:!0})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function T(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-calendar"}),(0,t.jsx)("td",{children:"Main container element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-calendar-w-btn"}),(0,t.jsx)("td",{children:"Main container element when button is enabled."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-calendar-timeonly"}),(0,t.jsx)("td",{children:"Main container element in time picker only mode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-inputtext"}),(0,t.jsx)("td",{children:"Input element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datepicker"}),(0,t.jsx)("td",{children:"Datepicker element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datepicker-inline"}),(0,t.jsx)("td",{children:"Datepicker element in inline mode"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-monthpicker"}),(0,t.jsx)("td",{children:"Datepicker element in month view."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-monthpicker-month"}),(0,t.jsx)("td",{children:"Month cell in month view mode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datepicker-touch-ui"}),(0,t.jsx)("td",{children:"Datepicker element in touch ui mode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datepicker-calendar"}),(0,t.jsx)("td",{children:"Table containing dates of a month."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datepicker-current-day"}),(0,t.jsx)("td",{children:"Cell of selected date."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datepicker-today"}),(0,t.jsx)("td",{children:"Cell of today's date."})]})]})]})})]})}function F(e){let l={basic:`
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
    calendar: {
        root: ({ props }) => ({
            className: classNames('inline-flex max-w-full relative', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        input: ({ props }) => ({
            root: {
                className: classNames('font-sans text-base text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none', 'hover:border-blue-500', {
                    'rounded-lg': !props.showIcon,
                    'border-r-0 rounded-l-lg': props.showIcon
                })
            }
        }),
        dropdownButton: {
            root: ({ props }) => ({
                className: classNames({ 'rounded-l-none': props.icon })
            })
        },
        panel: ({ props }) => ({
            className: classNames('bg-white dark:bg-gray-900', 'min-w-full', {
                'shadow-md border-0 absolute': !props.inline,
                'inline-block overflow-x-auto border border-gray-300 dark:border-blue-900/40 p-2 rounded-lg': props.inline
            })
        }),
        header: {
            className: classNames('flex items-center justify-between', 'p-2 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-semibold m-0 border-b border-gray-300 dark:border-blue-900/40 rounded-t-lg')
        },
        previousButton: {
            className: classNames(
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            )
        },
        title: { className: 'leading-8 mx-auto' },
        monthTitle: {
            className: classNames('text-gray-700 dark:text-white/80 transition duration-200 font-semibold p-2', 'mr-2', 'hover:text-blue-500')
        },
        yearTitle: {
            className: classNames('text-gray-700 dark:text-white/80 transition duration-200 font-semibold p-2', 'hover:text-blue-500')
        },
        nextButton: {
            className: classNames(
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            )
        },
        table: {
            className: classNames('border-collapse w-full', 'my-2')
        },
        tableHeaderCell: { className: 'p-2' },
        weekday: { className: 'text-gray-600 dark:text-white/70' },
        day: { className: 'p-2' },
        dayLabel: ({ context }) => ({
            className: classNames(
                'w-10 h-10 rounded-full transition-shadow duration-200 border-transparent border',
                'flex items-center justify-center mx-auto overflow-hidden relative',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'opacity-60 cursor-default': context.disabled,
                    'cursor-pointer': !context.disabled
                },
                {
                    'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                    'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled
                }
            )
        }),
        monthPicker: { className: 'my-2' },
        month: ({ context }) => ({
            className: classNames(
                'w-1/3 inline-flex items-center justify-center cursor-pointer overflow-hidden relative',
                'p-2 transition-shadow duration-200 rounded-lg',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled, 'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled }
            )
        }),
        yearPicker: {
            className: classNames('my-2')
        },
        year: ({ context }) => ({
            className: classNames(
                'w-1/2 inline-flex items-center justify-center cursor-pointer overflow-hidden relative',
                'p-2 transition-shadow duration-200 rounded-lg',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                    'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled
                }
            )
        }),
        timePicker: {
            className: classNames('flex justify-center items-center', 'border-t-1 border-solid border-gray-300 p-2')
        },
        separatorContainer: { className: 'flex items-center flex-col px-2' },
        separator: { className: 'text-xl' },
        hourPicker: { className: 'flex items-center flex-col px-2' },
        minutePicker: { className: 'flex items-center flex-col px-2' },
        ampmPicker: { className: 'flex items-center flex-col px-2' },
        incrementButton: {
            className: classNames(
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            )
        },
        decrementButton: {
            className: classNames(
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            )
        },
        groupContainer: { className: 'flex' },
        group: {
            className: classNames('flex-1', 'border-l border-gray-300 pr-0.5 pl-0.5 pt-0 pb-0', 'first:pl-0 first:border-l-0')
        },
        transition: TRANSITIONS.overlay
    }
}
        `},i={javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function UnstyledDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(n.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(a.DocSectionCode,{code:l,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(a.DocSectionCode,{code:i,embedded:!0})]})})}function M(e){let[n,l]=(0,s.useState)(null),[o,d]=(0,s.useState)(null),[c,h]=(0,s.useState)(null),u={basic:`
<Calendar value={datetime12h} onChange={(e) => setDateTime12h(e.value)} showTime hourFormat="12" />
<Calendar value={datetime24h} onChange={(e) => setDateTime24h(e.value)} showTime hourFormat="24" />
<Calendar value={time} onChange={(e) => setTime(e.value)} timeOnly />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function TimeDemo() {
    const [datetime12h, setDateTime12h] = useState(null);
    const [datetime24h, setDateTime24h] = useState(null);
    const [time, setTime] = useState(null);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="calendar-12h" className="font-bold block mb-2">
                    12h Format
                </label>
                <Calendar id="calendar-12h" value={datetime12h} onChange={(e) => setDateTime12h(e.value)} showTime hourFormat="12" />
            </div>
            <div className="flex-auto">
                <label htmlFor="calendar-24h" className="font-bold block mb-2">
                    24h Format
                </label>
                <Calendar id="calendar-24h" value={datetime24h} onChange={(e) => setDateTime24h(e.value)} showTime hourFormat="24" />
            </div>
            <div className="flex-auto">
                <label htmlFor="calendar-timeonly" className="font-bold block mb-2">
                    Time Only
                </label>
                <Calendar id="calendar-timeonly" value={time} onChange={(e) => setTime(e.value)} timeOnly />
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar} from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function TimeDemo() {
    const [datetime12h, setDateTime12h] = useState<Nullable<Date>>(null);
    const [datetime24h, setDateTime24h] = useState<Nullable<Date>>(null);
    const [time, setTime] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex flex-wrap gap-3 p-fluid">
            <div className="flex-auto">
                <label htmlFor="calendar-12h" className="font-bold block mb-2">
                    12h Format
                </label>
                <Calendar id="calendar-12h" value={datetime12h} onChange={(e) => setDateTime12h(e.value)} showTime hourFormat="12" />
            </div>
            <div className="flex-auto">
                <label htmlFor="calendar-24h" className="font-bold block mb-2">
                    24h Format
                </label>
                <Calendar id="calendar-24h" value={datetime24h} onChange={(e) => setDateTime24h(e.value)} showTime hourFormat="24" />
            </div>
            <div className="flex-auto">
                <label htmlFor="calendar-timeonly" className="font-bold block mb-2">
                    Time Only
                </label>
                <Calendar id="calendar-timeonly" value={time} onChange={(e) => setTime(e.value)} timeOnly />
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A time picker is displayed when ",(0,t.jsx)("i",{children:"showTime"})," is enabled where 12/24 hour format is configured with ",(0,t.jsx)("i",{children:"hourFormat"})," property. In case, only time needs to be selected, add ",(0,t.jsx)("i",{children:"timeOnly"})," to hide the date section."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap gap-3 p-fluid",children:[(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"calendar-12h",className:"font-bold block mb-2",children:"12h Format"}),(0,t.jsx)(i.Calendar,{id:"calendar-12h",value:n,onChange:e=>l(e.value),showTime:!0,hourFormat:"12"})]}),(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"calendar-24h",className:"font-bold block mb-2",children:"24h Format"}),(0,t.jsx)(i.Calendar,{id:"calendar-24h",value:o,onChange:e=>d(e.value),showTime:!0,hourFormat:"24"})]}),(0,t.jsxs)("div",{className:"flex-auto",children:[(0,t.jsx)("label",{htmlFor:"calendar-timeonly",className:"font-bold block mb-2",children:"Time Only"}),(0,t.jsx)(i.Calendar,{id:"calendar-timeonly",value:c,onChange:e=>h(e.value),timeOnly:!0})]})]}),(0,t.jsx)(a.DocSectionCode,{code:u})]})}function I(e){let[n,l]=(0,s.useState)(null),o={basic:`
<Calendar value={date} onChange={(e) => setDate(e.value)} touchUI />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function TouchUIDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} touchUI />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function TouchUIDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} touchUI />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"touchUI"})," is enabled, overlay is displayed as optimized for touch devices."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{value:n,onChange:e=>l(e.value),touchUI:!0})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}function R(e){let[n,l]=(0,s.useState)(null),o={basic:`
<Calendar value={date} onChange={(e) => setDate(e.value)} view="year" dateFormat="yy" />
        `,javascript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function YearPickerDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} view="year" dateFormat="yy" />
        </div>
    )
}
        `,typescript:`
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";

export default function YearPickerDemo() {
    const [date, setDate] = useState<Nullable<Date>>(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} view="year" dateFormat="yy" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specifying ",(0,t.jsx)("i",{children:"view"})," as ",(0,t.jsx)("i",{children:"year"})," in addition to a suitable ",(0,t.jsx)("i",{children:"dateFormat"})," enables the year picker."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(i.Calendar,{value:n,onChange:e=>l(e.value),view:"year",dateFormat:"yy"})}),(0,t.jsx)(a.DocSectionCode,{code:o})]})}var O=e.i(88850),B=e.i(82948);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:S},{id:"pt.calendar.options",label:"Calendar PT Options",component:O.default}];return(0,t.jsx)(B.DocComponent,{title:"React Calendar Component",header:"Calendar",description:"Calendar, also known as DatePicker, is a form component to work with dates.",componentDocs:[{id:"import",label:"Import",component:j},{id:"basic",label:"Basic",component:o},{id:"format",label:"Format",component:x},{id:"locale",label:"Locale",component:g},{id:"icon",label:"Icon",component:f},{id:"minmax",label:"Min / Max",component:D},{id:"multiple",label:"Multiple",component:N},{id:"range",label:"Range",component:k},{id:"button",label:"Button Bar",component:d},{id:"time",label:"Time",component:M},{id:"monthpicker",label:"Month Picker",component:C},{id:"yearpicker",label:"Year Picker",component:R},{id:"multiplemonths",label:"Multiple Months",component:w},{id:"datetemplate",label:"Date Template",component:c},{id:"touchui",label:"Touch UI",component:I},{id:"inline",label:"Inline",component:b},{id:"filled",label:"Filled",component:u},{id:"floatlabel",label:"Float Label",component:p},{id:"invalid",label:"Invalid",component:v},{id:"disabled",label:"Disabled",component:h},{id:"accessibility",label:"Accessibility",component:l}],apiDocs:["Calendar"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:T},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:F}]}]})}],27453)},97333,(e,t,a)=>{let r="/calendar";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(27453)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})}]);