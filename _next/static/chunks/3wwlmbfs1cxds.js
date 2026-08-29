(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,77559,e=>{"use strict";var t=e.i(91398),a=e.i(88850),r=e.i(82948),o=e.i(28137),l=e.i(41158);function i(){return(0,t.jsxs)(o.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["DataTable uses a ",(0,t.jsx)("i",{children:"table"})," element whose attributes can be extended with the ",(0,t.jsx)("i",{children:"tableProps"})," option. This property allows passing aria roles and attributes like ",(0,t.jsx)("i",{children:"aria-label"})," and ",(0,t.jsx)("i",{children:"aria-describedby"})," to define the table for readers. Default role of the table is ",(0,t.jsx)("i",{children:"table"}),". Header, body and footer elements use ",(0,t.jsx)("i",{children:"rowgroup"}),", rows use ",(0,t.jsx)("i",{children:"row"})," role, header cells have ",(0,t.jsx)("i",{children:"columnheader"})," and body cells use ",(0,t.jsx)("i",{children:"cell"})," roles. Sortable headers utilizer ",(0,t.jsx)("i",{children:"aria-sort"}),' attribute either set to "ascending" or "descending".']}),(0,t.jsxs)("p",{children:["Built-in checkbox and radiobutton components for row selection use ",(0,t.jsx)("i",{children:"checkbox"})," and ",(0,t.jsx)("i",{children:"radiobutton"})," roles respectively with ",(0,t.jsx)("i",{children:"aria-checked"})," state attribute. The label to describe them is retrieved from the",(0,t.jsx)("i",{children:"aria.selectRow"})," and ",(0,t.jsx)("i",{children:"aria.unselectRow"})," properties of the ",(0,t.jsx)(l.default,{href:"/locale",children:"locale"})," API. Similarly header checkbox uses ",(0,t.jsx)("i",{children:"selectAll"})," and ",(0,t.jsx)("i",{children:"unselectAll"})," keys. When a row is selected, ",(0,t.jsx)("i",{children:"aria-selected"})," is set to true on a row."]}),(0,t.jsxs)("p",{children:["The element to expand or collapse a row is a ",(0,t.jsx)("i",{children:"button"})," with ",(0,t.jsx)("i",{children:"aria-expanded"})," and ",(0,t.jsx)("i",{children:"aria-controls"})," properties. Value to describe the buttons is derived from ",(0,t.jsx)("i",{children:"aria.expandRow"})," and ",(0,t.jsx)("i",{children:"aria.collapseRow"})," properties of the ",(0,t.jsx)(l.default,{href:"/locale",children:"locale"})," API."]}),(0,t.jsxs)("p",{children:["The filter menu button use ",(0,t.jsx)("i",{children:"aria.showFilterMenu"})," and ",(0,t.jsx)("i",{children:"aria.hideFilterMenu"})," properties as ",(0,t.jsx)("i",{children:"aria-label"})," in addition to the ",(0,t.jsx)("i",{children:"aria-haspopup"}),", ",(0,t.jsx)("i",{children:"aria-expanded"})," and ",(0,t.jsx)("i",{children:"aria-controls"})," to define the relation between the button and the overlay. Popop menu has ",(0,t.jsx)("i",{children:"dialog"})," role with ",(0,t.jsx)("i",{children:"aria-modal"}),"as focus is kept within the overlay. The operator dropdown use ",(0,t.jsx)("i",{children:"aria.filterOperator"})," and filter constraints dropdown use ",(0,t.jsx)("i",{children:"aria.filterConstraint"})," properties. Buttons to add rules on the other hand utilize ",(0,t.jsx)("i",{children:"aria.addRule"})," ","and ",(0,t.jsx)("i",{children:"aria.removeRule"})," properties. The footer buttons similarly use",(0,t.jsx)("i",{children:"aria.clear"})," and ",(0,t.jsx)("i",{children:"aria.apply"})," properties. ",(0,t.jsx)("i",{children:"filterInputProps"})," of the Column component can be used to define aria labels for the built-in filter components, if a custom component is used with templating you also may define your own aria labels as well."]}),(0,t.jsxs)("p",{children:["Editable cells use custom templating so you need to manage aria roles and attributes manually if required. The row editor controls are button elements with ",(0,t.jsx)("i",{children:"aria.editRow"}),", ",(0,t.jsx)("i",{children:"aria.cancelEdit"})," and ",(0,t.jsx)("i",{children:"aria.saveEdit"})," used for the ",(0,t.jsx)("i",{children:"aria-label"}),"."]}),(0,t.jsxs)("p",{children:["Paginator is a standalone component used inside the DataTable, refer to the ",(0,t.jsx)(l.default,{href:"/paginator",children:"paginator"})," for more information about the accessibility features."]}),(0,t.jsx)("h4",{children:"Sortable Headers Keyboard Support"}),(0,t.jsxs)("p",{children:["Any button element inside the DataTable used for cases like filter, row expansion, edit are tabbable and can be used with ",(0,t.jsx)("i",{children:"space"})," and ",(0,t.jsx)("i",{children:"enter"})," keys."]}),(0,t.jsx)("h3",{children:"Sortable Headers Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves through the headers."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Sorts the column."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Sorts the column."})]})]})]})}),(0,t.jsx)("h3",{children:"Filter Menu Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves through the elements inside the popup."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Hides the popup."})]})]})]})}),(0,t.jsx)("h3",{children:"Selection Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the first selected row, if there is none then first row receives the focus."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous row."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next row."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Toggles the selected state of the focused row depending on the metaKeySelection setting."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Toggles the selected state of the focused row depending on the metaKeySelection setting."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Moves focus to the first row."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Moves focus to the last row."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"down arrow"})]}),(0,t.jsx)("td",{children:"Moves focus to the next row and toggles the selection state."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"up arrow"})]}),(0,t.jsx)("td",{children:"Moves focus to the previous row and toggles the selection state."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"space"})]}),(0,t.jsx)("td",{children:"Selects the rows between the most recently selected row and the focused row."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"control"})," + ",(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"home"})]}),(0,t.jsx)("td",{children:"Selects the focused rows and all the options up to the first one."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"control"})," + ",(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"end"})]}),(0,t.jsx)("td",{children:"Selects the focused rows and all the options down to the last one."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"control"})," + ",(0,t.jsx)("i",{children:"a"})]}),(0,t.jsx)("td",{children:"Selects all rows."})]})]})]})})]})}var n=e.i(5180),s=e.i(10367),c=e.i(59837),d=e.i(91788),u=e.i(66534);let m=({options:e,children:a,onLoad:r})=>{let[o,l]=(0,d.useState)(!1),i=(0,d.useRef)(null),n=(0,d.useRef)(null),s=(0,d.useRef)(null);return(0,d.useEffect)(()=>(n.current=new IntersectionObserver(([e])=>{clearTimeout(i.current),e.isIntersecting&&(i.current=setTimeout(()=>{l(!0),n.current.unobserve(s.current),r()},350))},e),s.current&&n.current.observe(s.current),()=>{!o&&s.current&&n.current.unobserve(s.current),clearTimeout(i.current)}),[o,r,e]),(0,t.jsxs)(t.Fragment,{children:[!o&&(0,t.jsx)("div",{ref:s,className:"card",children:(0,t.jsx)("div",{className:"deferred-demo-loading"})}),o&&a]})};function p(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function BasicDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["DataTable requires a ",(0,t.jsx)("i",{children:"value"})," as data to display and ",(0,t.jsx)("i",{children:"Column"})," components as children for the representation."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["ProductService"]})]})}var h=e.i(30164);function f(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)(null),[p,f]=(0,d.useState)(!0),g={basic:`
<InputSwitch checked={metaKey} onChange={(e) => setMetaKey(e.value)} />

<DataTable value={products} cellSelection selectionMode="single" selection={selectedCell}
        onSelectionChange={(e) => setSelectedCell(e.value)} metaKeySelection={metaKey}
        isDataSelectable={isCellSelectable} cellClassName={cellClassName} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

export default function DisabledCellSelectionDemo() {
    const [products, setProducts] = useState([]);
    const [selectedCell, setSelectedCell] = useState(null);
    const [metaKey, setMetaKey] = useState(true);

    const isCellSelectable = (event) => (event.data.field === 'category' && event.data.value === 'Fitness' ? false : true);

    const cellClassName = (data) => (data === 'Fitness' ? 'p-disabled' : '');

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <DataTable value={products} cellSelection selectionMode="single" selection={selectedCell}
                    onSelectionChange={(e) => setSelectedCell(e.value)} metaKeySelection={metaKey}
                    isDataSelectable={isCellSelectable} cellClassName={cellClassName} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent, DataTableCellSelection,
        DataTableDataSelectableEvent, DataTableCellClassNameOptions } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
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

export default function DisabledCellSelectionDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCell, setSelectedCell] = useState<DataTableCellSelection<Product[]> | null>(null);
    const [metaKey, setMetaKey] = useState<boolean>(true);

    const isCellSelectable = (event: DataTableDataSelectableEvent) => (event.data.field === 'category' && event.data.value === 'Fitness' ? false : true);

    const cellClassName = (data: any) => (data === 'Fitness' ? 'p-disabled' : '');

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e: InputSwitchChangeEvent) => setMetaKey(e.value!)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <DataTable value={products} cellSelection selectionMode="single" selection={selectedCell!} metaKeySelection={metaKey}
                    onSelectionChange={(e) => {
                        const value = e.value as DataTableCellSelection<Product[]>;
                        setSelectedCell(value);
                    }} 
                    isDataSelectable={isCellSelectable} cellClassName={cellClassName} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Certain cells can be excluded from selection if ",(0,t.jsx)("i",{children:"isDataSelectable"})," returns false."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"flex justify-content-center align-items-center mb-4 gap-2",children:[(0,t.jsx)(h.InputSwitch,{inputId:"input-metakey",checked:p,onChange:e=>f(e.value)}),(0,t.jsx)("label",{htmlFor:"input-metakey",children:"MetaKey"})]}),(0,t.jsxs)(c.DataTable,{value:a,selectionMode:"single",cellSelection:!0,selection:l,onSelectionChange:e=>{i(e.value)},metaKeySelection:p,isDataSelectable:e=>"category"!==e.data.field||"Fitness"!==e.data.value,cellClassName:e=>"Fitness"===e?"p-disabled":"",tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})]})}),(0,t.jsx)(n.DocSectionCode,{code:g,service:["ProductService"]})]})}var g=e.i(29363);function y(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)(null),p=(0,d.useRef)(null),h={basic:`
<Toast ref={toast} />

<DataTable value={products} cellSelection selectionMode="single" selection={selectedCell}
        onSelectionChange={(e) => setSelectedCell(e.value)} metaKeySelection={false}
        onCellSelect={onCellSelect} onCellUnselect={onCellUnselect} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useRef, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast'
import { ProductService } from './service/ProductService';

export default function CellSelectEventsDemo() {
    const [products, setProducts] = useState([]);
    const [selectedCell, setSelectedCell] = useState(null);
    const toast = useRef(null);

    const onCellSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Cell Selected', detail: \`Name: \${event.value}\`, life: 3000 });
    };

    const onCellUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Cell Unselected', detail: \`Name: \${event.value}\`, life: 3000 });
    };

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <Toast ref={toast} />
            <DataTable value={products} cellSelection selectionMode="single" selection={selectedCell}
                    onSelectionChange={(e) => setSelectedCell(e.value)} metaKeySelection={false}
                    onCellSelect={onCellSelect} onCellUnselect={onCellUnselect} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useRef, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent, DataTableCellSelection, DataTableSelectEvent, DataTableUnselectEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast'
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

export default function CellSelectEventsDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCell, setSelectedCell] = useState<DataTableCellSelection<Product[]> | null>(null);
    const toast = useRef<Toast>(null);

    const onCellSelect = (event: DataTableCellClickEvent<Product[]>) => {
        toast.current?.show({ severity: 'info', summary: 'Cell Selected', detail: \`Name: \${event.value}\`, life: 3000 });
    };

    const onCellUnselect = (event: DataTableCellClickEvent<Product[]>) => {
        toast.current?.show({ severity: 'warn', summary: 'Cell Unselected', detail: \`Name: \${event.value}\`, life: 3000 });
    };

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <Toast ref={toast} />
            <DataTable value={products} cellSelection selectionMode="single" selection={selectedCell!} metaKeySelection={false}
                    onSelectionChange={(e) => {
                        const value = e.value as DataTableCellSelection<Product[]>;
                        setSelectedCell(value);
                    }}
                    onCellSelect={onCellSelect} onCellUnselect={onCellUnselect} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["DataTable provides ",(0,t.jsx)("i",{children:"onCellSelect"})," and ",(0,t.jsx)("i",{children:"onCellUnselect"})," events to listen selection events."]})}),(0,t.jsx)(g.Toast,{ref:p}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,selectionMode:"single",cellSelection:!0,selection:l,onSelectionChange:e=>{i(e.value)},metaKeySelection:!1,onCellSelect:e=>{p.current.show({severity:"info",summary:"Cell Selected",detail:`Name: ${e.value}`,life:3e3})},onCellUnselect:e=>{p.current.show({severity:"warn",summary:"Cell Unselected",detail:`Name: ${e.value}`,life:3e3})},tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})})}),(0,t.jsx)(n.DocSectionCode,{code:h,service:["ProductService"]})]})}function v(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)(null),[p,f]=(0,d.useState)(!0),g={basic:`
<InputSwitch checked={metaKey} onChange={(e) => setMetaKey(e.value)} />

<DataTable value={products} cellSelection selectionMode="multiple" selection={selectedCells}
        onSelectionChange={(e) => setSelectedCells(e.value)}
        metaKeySelection={metaKey} dragSelection tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

export default function MultipleCellsSelectionDemo() {
    const [products, setProducts] = useState([]);
    const [selectedCells, setSelectedCells] = useState(null);
    const [metaKey, setMetaKey] = useState(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <DataTable value={products} cellSelection selectionMode="multiple" selection={selectedCells}
                    onSelectionChange={(e) => setSelectedCells(e.value)}
                    metaKeySelection={metaKey} dragSelection tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent, DataTableCellSelection } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;
}

export default function MultipleCellsSelectionDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCells, setSelectedCells] = useState<DataTableCellSelection<Product[]> | null>(null);
    const [metaKey, setMetaKey] = useState<boolean>(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e: InputSwitchChangeEvent) => setMetaKey(e.value!)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <DataTable value={products} cellSelection selectionMode="multiple" selection={selectedCells!}
                    onSelectionChange={(e) => setSelectedCells(e.value)}
                    metaKeySelection={metaKey} dragSelection tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["More than one cell is selectable by setting ",(0,t.jsx)("i",{children:"selectionMode"})," to ",(0,t.jsx)("i",{children:"multiple"}),". By default in multiple selection mode, metaKey press (e.g. ",(0,t.jsx)("i",{children:"⌘"}),") is necessary to add to existing selections however this can be configured with disabling the ",(0,t.jsx)("i",{children:"metaKeySelection"})," property. Note that in touch enabled devices, DataTable always ignores metaKey."]}),(0,t.jsxs)("p",{children:["Additionaly, multiple cells can be selected using drag when ",(0,t.jsx)("i",{children:"dragSelection"})," is present."]})]}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"flex justify-content-center align-items-center mb-4 gap-2",children:[(0,t.jsx)(h.InputSwitch,{inputId:"input-metakey",checked:p,onChange:e=>f(e.value)}),(0,t.jsx)("label",{htmlFor:"input-metakey",children:"MetaKey"})]}),(0,t.jsxs)(c.DataTable,{value:a,selectionMode:"multiple",cellSelection:!0,selection:l,onSelectionChange:e=>{i(e.value)},metaKeySelection:p,dragSelection:!0,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})]})}),(0,t.jsx)(n.DocSectionCode,{code:g,service:["ProductService"]})]})}function C(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)(null),[p,f]=(0,d.useState)(!0),g={basic:`
<InputSwitch checked={metaKey} onChange={(e) => setMetaKey(e.value)} />

<DataTable value={products} cellSelection selectionMode="single" selection={selectedCell}
        onSelectionChange={(e) => setSelectedCell(e.value)} metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

export default function SingleCellSelectionDemo() {
    const [products, setProducts] = useState([]);
    const [selectedCell, setSelectedCell] = useState(null);
    const [metaKey, setMetaKey] = useState(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <DataTable value={products} cellSelection selectionMode="single" selection={selectedCell}
                    onSelectionChange={(e) => setSelectedCell(e.value)} metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent, DataTableCellSelection } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;
}

export default function SingleCellSelectionDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCell, setSelectedCell] = useState<DataTableCellSelection<Product[]> | null>(null);
    const [metaKey, setMetaKey] = useState<boolean>(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e: InputSwitchChangeEvent) => setMetaKey(e.value!)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <DataTable value={products} cellSelection selectionMode="single" selection={selectedCell!}
                    onSelectionChange={(e) =>  setSelectedCell(e.value)} metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Single cell selection is enabled by adding ",(0,t.jsx)("i",{children:"cellSelection"}),", defining ",(0,t.jsx)("i",{children:"selectionMode"})," as ",(0,t.jsx)("i",{children:"single"})," along with a value binding using ",(0,t.jsx)("i",{children:"selection"})," and ",(0,t.jsx)("i",{children:"onSelectionChange"})," properties. The type of the selection would be",(0,t.jsx)("i",{children:"DataTableCellSelection"})," that provides information about the cell such as ",(0,t.jsx)("i",{children:"cellIndex"})," and ",(0,t.jsx)("i",{children:"rowIndex"}),"."]}),(0,t.jsxs)("p",{children:["By default, metaKey press (e.g. ",(0,t.jsx)("i",{children:"⌘"}),") is necessary to unselect a cell however this can be configured with disabling the ",(0,t.jsx)("i",{children:"metaKeySelection"})," property. In touch enabled devices this option has no effect and behavior is same as setting it to false."]})]}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"flex justify-content-center align-items-center mb-4 gap-2",children:[(0,t.jsx)(h.InputSwitch,{inputId:"input-metakey",checked:p,onChange:e=>f(e.value)}),(0,t.jsx)("label",{htmlFor:"input-metakey",children:"MetaKey"})]}),(0,t.jsxs)(c.DataTable,{value:a,selectionMode:"single",cellSelection:!0,selection:l,onSelectionChange:e=>{i(e.value)},metaKeySelection:p,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})]})}),(0,t.jsx)(n.DocSectionCode,{code:g,service:["ProductService"]})]})}function b(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={products} columnResizeMode="expand" resizableColumns showGridlines tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function ExpandModeDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} columnResizeMode="expand" resizableColumns showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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

export default function ExpandModeDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} columnResizeMode="expand" resizableColumns showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Setting ",(0,t.jsx)("i",{children:"columnResizeMode"})," as ",(0,t.jsx)("i",{children:"expand"})," changes the table width as well."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,columnResizeMode:"expand",resizableColumns:!0,showGridlines:!0,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["ProductService"]})]})}function S(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={products} resizableColumns showGridlines tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function FitModeDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} resizableColumns showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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

export default function FitModeDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} resizableColumns showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Columns can be resized with drag and drop when ",(0,t.jsx)("i",{children:"resizableColumns"})," is enabled. Default resize mode is ",(0,t.jsx)("i",{children:"fit"}),"that does not change the overall table width."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,resizableColumns:!0,showGridlines:!0,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["ProductService"]})]})}var x=e.i(30338),w=e.i(66275);function T(e){let[a,r]=(0,d.useState)([]),l=e=>e.toLocaleString("en-US",{style:"currency",currency:"USD"}),i=(0,t.jsxs)(x.ColumnGroup,{children:[(0,t.jsxs)(w.Row,{children:[(0,t.jsx)(s.Column,{header:"Product",rowSpan:3}),(0,t.jsx)(s.Column,{header:"Sale Rate",colSpan:4})]}),(0,t.jsxs)(w.Row,{children:[(0,t.jsx)(s.Column,{header:"Sales",colSpan:2}),(0,t.jsx)(s.Column,{header:"Profits",colSpan:2})]}),(0,t.jsxs)(w.Row,{children:[(0,t.jsx)(s.Column,{header:"Last Year",sortable:!0,field:"lastYearSale"}),(0,t.jsx)(s.Column,{header:"This Year",sortable:!0,field:"thisYearSale"}),(0,t.jsx)(s.Column,{header:"Last Year",sortable:!0,field:"lastYearProfit"}),(0,t.jsx)(s.Column,{header:"This Year",sortable:!0,field:"thisYearProfit"})]})]}),u=(0,t.jsx)(x.ColumnGroup,{children:(0,t.jsxs)(w.Row,{children:[(0,t.jsx)(s.Column,{footer:"Totals:",colSpan:3,footerStyle:{textAlign:"right"}}),(0,t.jsx)(s.Column,{footer:()=>{let e=0;for(let t of a)e+=t.lastYearProfit;return l(e)}}),(0,t.jsx)(s.Column,{footer:()=>{let e=0;for(let t of a)e+=t.thisYearProfit;return l(e)}})]})}),p={basic:`
<DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} tableStyle={{ minWidth: '50rem' }}>
    <Column field="product" />
    <Column field="lastYearSale" body={lastYearSaleBodyTemplate} />
    <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
    <Column field="lastYearProfit" body={lastYearProfitBodyTemplate} />
    <Column field="thisYearProfit" body={thisYearProfitBodyTemplate} />
</DataTable>
        `,javascript:`
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

export default function ColumnGroupDemo() {
    const [sales] = useState([
        { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
        { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
        { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
        { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
        { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
        { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
        { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
        { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
        { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
        { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
    ]);

    const lastYearSaleBodyTemplate = (rowData) => {
        return \`\${rowData.lastYearSale}%\`;
    };

    const thisYearSaleBodyTemplate = (rowData) => {
        return \`\${rowData.thisYearSale}%\`;
    };

    const lastYearProfitBodyTemplate = (rowData) => {
        return \`\${formatCurrency(rowData.lastYearProfit)}\`;
    };

    const thisYearProfitBodyTemplate = (rowData) => {
        return \`\${formatCurrency(rowData.thisYearProfit)}\`;
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const lastYearTotal = () => {
        let total = 0;

        for (let sale of sales) {
            total += sale.lastYearProfit;
        }

        return formatCurrency(total);
    };

    const thisYearTotal = () => {
        let total = 0;

        for (let sale of sales) {
            total += sale.thisYearProfit;
        }

        return formatCurrency(total);
    };

    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column header="Product" rowSpan={3} />
                <Column header="Sale Rate" colSpan={4} />
            </Row>
            <Row>
                <Column header="Sales" colSpan={2} />
                <Column header="Profits" colSpan={2} />
            </Row>
            <Row>
                <Column header="Last Year" sortable field="lastYearSale" />
                <Column header="This Year" sortable field="thisYearSale" />
                <Column header="Last Year" sortable field="lastYearProfit" />
                <Column header="This Year" sortable field="thisYearProfit" />
            </Row>
        </ColumnGroup>
    );

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="Totals:" colSpan={3} footerStyle={{ textAlign: 'right' }} />
                <Column footer={lastYearTotal} />
                <Column footer={thisYearTotal} />
            </Row>
        </ColumnGroup>
    );

    return (
        <div className="card">
            <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} tableStyle={{ minWidth: '50rem' }}>
                <Column field="product" />
                <Column field="lastYearSale" body={lastYearSaleBodyTemplate} />
                <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
                <Column field="lastYearProfit" body={lastYearProfitBodyTemplate} />
                <Column field="thisYearProfit" body={thisYearProfitBodyTemplate} />
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

interface Sale {
    product: string;
    lastYearSale: number;
    thisYearSale: number;
    lastYearProfit: number;
    thisYearProfit: number;
}

export default function ColumnGroupDemo() {
    const [sales] = useState<Sale[]>([
        { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
        { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
        { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
        { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
        { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
        { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
        { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
        { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
        { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
        { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
    ]);

    const lastYearSaleBodyTemplate = (rowData: Sale) => {
        return \`\${rowData.lastYearSale}%\`;
    };

    const thisYearSaleBodyTemplate = (rowData: Sale) => {
        return \`\${rowData.thisYearSale}%\`;
    };

    const lastYearProfitBodyTemplate = (rowData: Sale) => {
        return \`\${formatCurrency(rowData.lastYearProfit)}\`;
    };

    const thisYearProfitBodyTemplate = (rowData: Sale) => {
        return \`\${formatCurrency(rowData.thisYearProfit)}\`;
    };

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const lastYearTotal = () => {
        let total = 0;

        for (let sale of sales) {
            total += sale.lastYearProfit;
        }

        return formatCurrency(total);
    };

    const thisYearTotal = () => {
        let total = 0;

        for (let sale of sales) {
            total += sale.thisYearProfit;
        }

        return formatCurrency(total);
    };

    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column header="Product" rowSpan={3} />
                <Column header="Sale Rate" colSpan={4} />
            </Row>
            <Row>
                <Column header="Sales" colSpan={2} />
                <Column header="Profits" colSpan={2} />
            </Row>
            <Row>
                <Column header="Last Year" sortable field="lastYearSale" />
                <Column header="This Year" sortable field="thisYearSale" />
                <Column header="Last Year" sortable field="lastYearProfit" />
                <Column header="This Year" sortable field="thisYearProfit" />
            </Row>
        </ColumnGroup>
    );

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="Totals:" colSpan={3} footerStyle={{ textAlign: 'right' }} />
                <Column footer={lastYearTotal} />
                <Column footer={thisYearTotal} />
            </Row>
        </ColumnGroup>
    );

    return (
        <div className="card">
            <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} tableStyle={{ minWidth: '50rem' }}>
                <Column field="product" />
                <Column field="lastYearSale" body={lastYearSaleBodyTemplate} />
                <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
                <Column field="lastYearProfit" body={lastYearProfitBodyTemplate} />
                <Column field="thisYearProfit" body={thisYearProfitBodyTemplate} />
            </DataTable>
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Columns can be grouped within a ",(0,t.jsx)("i",{children:"Row"})," component and groups can be displayed at header and footer using ",(0,t.jsx)("i",{children:"headerColumnGroup"}),", ",(0,t.jsx)("i",{children:"footerColumnGroup"})," properties. Number of cells and rows to span are defined with the"," ",(0,t.jsx)("i",{children:"colSpan"})," and ",(0,t.jsx)("i",{children:"rowSpan"})," properties of a Column."]})}),(0,t.jsx)(m,{onLoad:()=>{r([{product:"Bamboo Watch",lastYearSale:51,thisYearSale:40,lastYearProfit:54406,thisYearProfit:43342},{product:"Black Watch",lastYearSale:83,thisYearSale:9,lastYearProfit:423132,thisYearProfit:312122},{product:"Blue Band",lastYearSale:38,thisYearSale:5,lastYearProfit:12321,thisYearProfit:8500},{product:"Blue T-Shirt",lastYearSale:49,thisYearSale:22,lastYearProfit:745232,thisYearProfit:65323},{product:"Brown Purse",lastYearSale:17,thisYearSale:79,lastYearProfit:643242,thisYearProfit:500332},{product:"Chakra Bracelet",lastYearSale:52,thisYearSale:65,lastYearProfit:421132,thisYearProfit:150005},{product:"Galaxy Earrings",lastYearSale:82,thisYearSale:12,lastYearProfit:131211,thisYearProfit:100214},{product:"Game Controller",lastYearSale:44,thisYearSale:45,lastYearProfit:66442,thisYearProfit:53322},{product:"Gaming Set",lastYearSale:90,thisYearSale:56,lastYearProfit:765442,thisYearProfit:296232},{product:"Gold Phone Case",lastYearSale:75,thisYearSale:54,lastYearProfit:21212,thisYearProfit:12533}])},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,headerColumnGroup:i,footerColumnGroup:u,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"product"}),(0,t.jsx)(s.Column,{field:"lastYearSale",body:e=>`${e.lastYearSale}%`}),(0,t.jsx)(s.Column,{field:"thisYearSale",body:e=>`${e.thisYearSale}%`}),(0,t.jsx)(s.Column,{field:"lastYearProfit",body:e=>`${l(e.lastYearProfit)}`}),(0,t.jsx)(s.Column,{field:"thisYearProfit",body:e=>`${l(e.thisYearProfit)}`})]})})}),(0,t.jsx)(n.DocSectionCode,{code:p})]})}var D=e.i(85598);function j(e){let a=[{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}],[r,l]=(0,d.useState)([]),[i,p]=(0,d.useState)(a),h=(0,t.jsx)(D.MultiSelect,{value:i,options:a,optionLabel:"header",onChange:e=>{let t=e.value;p(a.filter(e=>t.some(t=>t.field===e.field)))},className:"w-full sm:w-20rem",display:"chip"}),f={basic:`
<DataTable value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code" />
    {visibleColumns.map((col) => (
        <Column key={col.field} field={col.field} header={col.header} />
    ))}
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MultiSelect } from 'primereact/multiselect';
import { ProductService } from './service/ProductService';

export default function ColumnToggleDemo() {
    const columns = [
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];
    const [products, setProducts] = useState([]);
    const [visibleColumns, setVisibleColumns] = useState(columns);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter((col) => selectedColumns.some((sCol) => sCol.field === col.field));

        setVisibleColumns(orderedSelectedColumns);
    };

    const header = <MultiSelect value={visibleColumns} options={columns} optionLabel="header" onChange={onColumnToggle} className="w-full sm:w-20rem" display="chip" />;

    return (
        <div className="card">
            <DataTable value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" />
                {visibleColumns.map((col) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
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

interface ColumnMeta {
    field: string;
    header: string;
}

export default function ColumnToggleDemo() {
    const columns: ColumnMeta[] = [
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];
    const [products, setProducts] = useState<Product[]>([]);
    const [visibleColumns, setVisibleColumns] = useState<ColumnMeta[]>(columns);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const onColumnToggle = (event: MultiSelectChangeEvent) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter((col) => selectedColumns.some((sCol) => sCol.field === col.field));

        setVisibleColumns(orderedSelectedColumns);
    };

    const header = <MultiSelect value={visibleColumns} options={columns} optionLabel="header" onChange={onColumnToggle} className="w-full sm:w-20rem" display="chip" />;

    return (
        <div className="card">
            <DataTable value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" />
                {visibleColumns.map((col) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Column visibility based on a condition can be implemented with dynamic columns, in this sample a MultiSelect is used to manage the visible columns."})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>l(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:r,header:h,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),i.map(e=>(0,t.jsx)(s.Column,{field:e.field,header:e.header},e.field))]})})}),(0,t.jsx)(n.DocSectionCode,{code:f,service:["ProductService"]})]})}var P=e.i(3935);function N(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={products} rowClassName={rowClass} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity" body={stockBodyTemplate}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function ConditionalStyleDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const rowClass = (data) => {
        return {
            'bg-primary': data.category === 'Fitness'
        };
    };

    const stockBodyTemplate = (rowData) => {
        const stockClassName = classNames('border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm', {
            'bg-red-100 text-red-900': rowData.quantity === 0,
            'bg-blue-100 text-blue-900': rowData.quantity > 0 && rowData.quantity < 10,
            'bg-teal-100 text-teal-900': rowData.quantity > 10
        });

        return <div className={stockClassName}>{rowData.quantity}</div>;
    };

    return (
        <DataTable value={products} rowClassName={rowClass} tableStyle={{ minWidth: '50rem' }}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity" body={stockBodyTemplate}></Column>
        </DataTable>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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

export default function ConditionalStyleDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const rowClass = (data: Product) => {
        return {
            'bg-primary': data.category === 'Fitness'
        };
    };

    const stockBodyTemplate = (rowData: Product) => {
        const stockClassName = classNames('border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm', {
            'bg-red-100 text-red-900': rowData.quantity === 0,
            'bg-blue-100 text-blue-900': rowData.quantity > 0 && rowData.quantity < 10,
            'bg-teal-100 text-teal-900': rowData.quantity > 10
        });

        return <div className={stockClassName}>{rowData.quantity}</div>;
    };

    return (
        <DataTable value={products} rowClassName={rowClass} tableStyle={{ minWidth: '50rem' }}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity" body={stockBodyTemplate}></Column>
        </DataTable>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Particular rows and cells can be styled based on conditions. The ",(0,t.jsx)("i",{children:"rowClassName"})," receives a row data as a parameter to return a style class for a row whereas cells are customized using the ",(0,t.jsx)("i",{children:"body"})," template."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsSmall().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,rowClassName:e=>({"bg-primary":"Fitness"===e.category}),tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity",body:e=>{let a=(0,P.classNames)("border-circle w-2rem h-2rem inline-flex font-bold justify-content-center align-items-center text-sm",{"bg-red-100 text-red-900":0===e.quantity,"bg-blue-100 text-blue-900":e.quantity>0&&e.quantity<10,"bg-teal-100 text-teal-900":e.quantity>10});return(0,t.jsx)("div",{className:a,children:e.quantity})}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["ProductService"]})]})}var F=e.i(10492);function M(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)(null),p=(0,d.useRef)(null),h=(0,d.useRef)(null),f=[{label:"View",icon:"pi pi-fw pi-search",command:()=>y(l)},{label:"Delete",icon:"pi pi-fw pi-times",command:()=>v(l)}],y=e=>{p.current.show({severity:"info",summary:"Product Selected",detail:e.name})},v=e=>{let t=[...a];t=t.filter(t=>t.id!==e.id),p.current.show({severity:"error",summary:"Product Deleted",detail:e.name}),r(t)},C={basic:`
<Toast ref={toast} />
<ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)} />
<DataTable value={products} onContextMenu={(e) => cm.current.show(e.originalEvent)}
        contextMenuSelection={selectedProduct} onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="price" header="Price" body={priceBodyTemplate} />
</DataTable>
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { ProductService } from './service/ProductService';

export default function ContextMenuDemo() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menuModel = [
        { label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct) },
        { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct) }
    ];

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const viewProduct = (product) => {
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: product.name });
    };

    const deleteProduct = (product) => {
        let _products = [...products];

        _products = _products.filter((p) => p.id !== product.id);

        toast.current.show({ severity: 'error', summary: 'Product Deleted', detail: product.name });
        setProducts(_products);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    return (
        <div className="card">
            <Toast ref={toast} />

            <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)} />
            <DataTable value={products} onContextMenu={(e) => cm.current.show(e.originalEvent)} contextMenuSelection={selectedProduct} onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} />
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
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

export default function ContextMenuDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const toast = useRef<Toast>(null);
    const cm = useRef<ContextMenu>(null);
    const menuModel = [
        { label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct) },
        { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct) }
    ];

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const viewProduct = (product) => {
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: product.name });
    };

    const deleteProduct = (product) => {
        let _products = [...products];

        _products = _products.filter((p) => p.id !== product.id);

        toast.current.show({ severity: 'error', summary: 'Product Deleted', detail: product.name });
        setProducts(_products);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    return (
        <div className="card">
            <Toast ref={toast} />

            <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)} />
            <DataTable value={products} onContextMenu={(e) => cm.current.show(e.originalEvent)} contextMenuSelection={selectedProduct} onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} />
            </DataTable>
        </div>
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["DataTable has exclusive integration with ContextMenu using the ",(0,t.jsx)("i",{children:"onContextMenu"})," event to open a menu on right click alont with",(0,t.jsx)("i",{children:"contextMenuSelection"})," and ",(0,t.jsx)("i",{children:"onContextMenuSelectionChange"})," properties to control the selection via the menu."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(g.Toast,{ref:p}),(0,t.jsx)(F.ContextMenu,{model:f,ref:h,onHide:()=>i(null)}),(0,t.jsxs)(c.DataTable,{value:a,onContextMenu:e=>h.current.show(e.originalEvent),contextMenuSelection:l,onContextMenuSelectionChange:e=>i(e.value),tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"price",header:"Price",body:e=>e.price.toLocaleString("en-US",{style:"currency",currency:"USD"})})]})]})}),(0,t.jsx)(n.DocSectionCode,{code:C,service:["ProductService"]})]})}function E(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
    {columns.map((col, i) => (
        <Column key={col.field} field={col.field} header={col.header} />
    ))}
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function DynamicColumnsDemo() {
    const [products, setProducts] = useState([]);
    const columns = [
        {field: 'code', header: 'Code'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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

interface ColumnMeta {
    field: string;
    header: string;
}

export default function DynamicColumnsDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const columns: ColumnMeta[] = [
        {field: 'code', header: 'Code'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Columns can be created programmatically."})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(c.DataTable,{value:a,tableStyle:{minWidth:"50rem"},children:[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}].map((e,a)=>(0,t.jsx)(s.Column,{field:e.field,header:e.header},e.field))})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["ProductService"]})]})}var R=e.i(28084),B=e.i(66082);function k(e){let[a,r]=(0,d.useState)(null),l=e=>{let{rowData:t,newValue:a,field:r,originalEvent:o}=e;switch(r){case"quantity":case"price":(e=>{let t=String(e);if(!(t=t.trim()))return!1;let a=Math.floor(Number(t=t.replace(/^0+/,"")||"0"));return a!==1/0&&String(a)===t&&a>=0})(a)?t[r]=a:o.preventDefault();break;default:a.trim().length>0?t[r]=a:o.preventDefault()}},i=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.price),p={basic:`
<DataTable value={products} editMode="cell" tableStyle={{ minWidth: '50rem' }}>
    {columns.map(({ field, header }) => {
        return <Column key={field} field={field} header={header}
            style={{ width: '25%' }} body={field === 'price' && priceBodyTemplate}
            editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />;
    })}
</DataTable>
        `,javascript:`
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { ProductService } from './service/ProductService';

export default function CellEditingDemo() {
    const [products, setProducts] = useState(null);

    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'price', header: 'Price' }
    ];

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const isPositiveInteger = (val) => {
        let str = String(val);

        str = str.trim();

        if (!str) {
            return false;
        }

        str = str.replace(/^0+/, '') || '0';
        let n = Math.floor(Number(str));

        return n !== Infinity && String(n) === str && n >= 0;
    };

    const onCellEditComplete = (e) => {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
            case 'quantity':
            case 'price':
                if (isPositiveInteger(newValue)) rowData[field] = newValue;
                else event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0) rowData[field] = newValue;
                else event.preventDefault();
                break;
        }
    };

    const cellEditor = (options) => {
        if (options.field === 'price') return priceEditor(options);
        else return textEditor(options);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} onKeyDown={(e) => e.stopPropagation()} />;
    };

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" onKeyDown={(e) => e.stopPropagation()} />;
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    return (
        <div className="card p-fluid">
            <DataTable value={products} editMode="cell" tableStyle={{ minWidth: '50rem' }}>
                {columns.map(({ field, header }) => {
                    return <Column key={field} field={field} header={header} style={{ width: '25%' }} body={field === 'price' && priceBodyTemplate} editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />;
                })}
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column, ColumnEvent, ColumnEditorOptions } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
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

interface ColumnMeta {
    field: string;
    header: string;
}

export default function CellEditingDemo() {
    const [products, setProducts] = useState<Product[] | null>(null);

    const columns: ColumnMeta[] = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'quantity', header: 'Quantity' },
        { field: 'price', header: 'Price' }
    ];

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const isPositiveInteger = (val: any) => {
        let str = String(val);

        str = str.trim();

        if (!str) {
            return false;
        }

        str = str.replace(/^0+/, '') || '0';
        let n = Math.floor(Number(str));

        return n !== Infinity && String(n) === str && n >= 0;
    };

    const onCellEditComplete = (e: ColumnEvent) => {
        let { rowData, newValue, field, originalEvent: event } = e;

        switch (field) {
            case 'quantity':
            case 'price':
                if (isPositiveInteger(newValue)) rowData[field] = newValue;
                else event.preventDefault();
                break;

            default:
                if (newValue.trim().length > 0) rowData[field] = newValue;
                else event.preventDefault();
                break;
        }
    };

    const cellEditor = (options: ColumnEditorOptions) => {
        if (options.field === 'price') return priceEditor(options);
        else return textEditor(options);
    };

    const textEditor = (options: ColumnEditorOptions) => {
        return <InputText type="text" value={options.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => options.editorCallback(e.target.value)} onKeyDown={(e) => e.stopPropagation()} />;
    };

    const priceEditor = (options: ColumnEditorOptions) => {
        return <InputNumber value={options.value} onValueChange={(e: InputNumberValueChangeEvent) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" onKeyDown={(e) => e.stopPropagation()} />;
    };

    const priceBodyTemplate = (rowData: Product) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    return (
        <div className="card p-fluid">
            <DataTable value={products} editMode="cell" tableStyle={{ minWidth: '50rem' }}>
                {columns.map(({ field, header }) => {
                    return <Column key={field} field={field} header={header} style={{ width: '25%' }} body={field === 'price' && priceBodyTemplate} editor={(options) => cellEditor(options)} onCellEditComplete={onCellEditComplete} />;
                })}
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Cell editing is enabled by setting ",(0,t.jsx)("i",{children:"editMode"})," as ",(0,t.jsx)("i",{children:"cell"}),", defining input elements with ",(0,t.jsx)("i",{children:"editor"})," property of a Column and implementing ",(0,t.jsx)("i",{children:"onCellEditComplete"})," to update the state."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card p-fluid",children:(0,t.jsx)(c.DataTable,{value:a,editMode:"cell",tableStyle:{minWidth:"50rem"},children:[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"quantity",header:"Quantity"},{field:"price",header:"Price"}].map(({field:e,header:a})=>(0,t.jsx)(s.Column,{field:e,header:a,style:{width:"25%"},body:"price"===e&&i,editor:e=>{let a,r;return"price"===e.field?(a=e,(0,t.jsx)(R.InputNumber,{value:a.value,onValueChange:e=>a.editorCallback(e.value),mode:"currency",currency:"USD",locale:"en-US",onKeyDown:e=>e.stopPropagation()})):(r=e,(0,t.jsx)(B.InputText,{type:"text",value:r.value,onChange:e=>r.editorCallback(e.target.value),onKeyDown:e=>e.stopPropagation()}))},onCellEditComplete:l},e))})})}),(0,t.jsx)(n.DocSectionCode,{code:p,service:["ProductService"]})]})}var I=e.i(26637),W=e.i(39682);function A(e){let[a,r]=(0,d.useState)(null),[l]=(0,d.useState)(["INSTOCK","LOWSTOCK","OUTOFSTOCK"]),i=e=>{switch(e){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}},p=e=>(0,t.jsx)(B.InputText,{type:"text",value:e.value,onChange:t=>e.editorCallback(t.target.value)}),h={basic:`
<DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
    <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
    <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
    <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
</DataTable>
        `,javascript:`
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

export default function RowEditingDemo() {
    const [products, setProducts] = useState(null);
    const [statuses] = useState(['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK']);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSeverity = (value) => {
        switch (value) {
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

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        );
    };

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    const allowEdit = (rowData) => {
        return rowData.name !== 'Blue Band';
    };

    return (
        <div className="card p-fluid">
            <DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useEffect, useState } from 'react';
import { DataTable, DataTableRowEditCompleteEvent } from 'primereact/datatable';
import { Column, ColumnEditorOptions } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
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

export default function RowEditingDemo() {
    const [products, setProducts] = useState<Product[]>();
    const [statuses] = useState<string[]>(['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK']);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const getSeverity = (value: string) => {
        switch (value) {
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

    const onRowEditComplete = (e: DataTableRowEditCompleteEvent) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData as Product;

        setProducts(_products);
    };

    const textEditor = (options: ColumnEditorOptions) => {
        return <InputText type="text" value={options.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => options.editorCallback!(e.target.value)} />;
    };

    const statusEditor = (options: ColumnEditorOptions) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e: DropdownChangeEvent) => options.editorCallback!(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        );
    };

    const priceEditor = (options: ColumnEditorOptions) => {
        return <InputNumber value={options.value}  onValueChange={(e: InputNumberValueChangeEvent) => options.editorCallback!(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData: Product) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    };

    const priceBodyTemplate = (rowData: Product) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    const allowEdit = (rowData: Product) => {
        return rowData.name !== 'Blue Band';
    };

    return (
        <div className="card p-fluid">
            <DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                <Column rowEditor={allowEdit} headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Row editing is configured with setting ",(0,t.jsx)("i",{children:"editMode"})," as ",(0,t.jsx)("i",{children:"row"}),". Similarly with cell edit mode, defining input elements with ",(0,t.jsx)("i",{children:"editor"})," property of a Column and implementing ",(0,t.jsx)("i",{children:"onRowEditComplete"})," are necessary to update the state. The column to control the editing state should have ",(0,t.jsx)("i",{children:"rowEditor"})," property applied."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card p-fluid",children:(0,t.jsxs)(c.DataTable,{value:a,editMode:"row",dataKey:"id",onRowEditComplete:e=>{let t=[...a],{newData:o,index:l}=e;t[l]=o,r(t)},tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code",editor:e=>p(e),style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"name",header:"Name",editor:e=>p(e),style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"inventoryStatus",header:"Status",body:e=>(0,t.jsx)(W.Tag,{value:e.inventoryStatus,severity:i(e.inventoryStatus)}),editor:e=>(0,t.jsx)(I.Dropdown,{value:e.value,options:l,onChange:t=>e.editorCallback(t.value),placeholder:"Select a Status",itemTemplate:e=>(0,t.jsx)(W.Tag,{value:e,severity:i(e)})}),style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"price",header:"Price",body:e=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.price),editor:e=>(0,t.jsx)(R.InputNumber,{value:e.value,onValueChange:t=>e.editorCallback(t.value),mode:"currency",currency:"USD",locale:"en-US"}),style:{width:"20%"}}),(0,t.jsx)(s.Column,{rowEditor:e=>"Blue Band"!==e.name,headerStyle:{width:"10%",minWidth:"8rem"},bodyStyle:{textAlign:"center"}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:h,service:["ProductService"]})]})}var L=e.i(57724),O=e.i(64691);function _(a){let[r,l]=(0,d.useState)([]),i=(0,d.useRef)(null),p=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}],h=p.map(e=>({title:e.header,dataKey:e.field})),f=(0,t.jsxs)("div",{className:"flex align-items-center justify-content-end gap-2",children:[(0,t.jsx)(L.Button,{type:"button",icon:"pi pi-file",rounded:!0,onClick:()=>{i.current.exportCSV({selectionOnly:!1})},"data-pr-tooltip":"CSV"}),(0,t.jsx)(L.Button,{type:"button",icon:"pi pi-file-excel",severity:"success",rounded:!0,onClick:()=>{e.A(93073).then(t=>{var a;let o=t.utils.json_to_sheet(r);a=t.write({Sheets:{data:o},SheetNames:["data"]},{bookType:"xlsx",type:"array"}),e.A(52611).then(e=>{if(e&&e.default){let t=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});e.default.saveAs(t,"products_export_"+new Date().getTime()+".xlsx")}})})},"data-pr-tooltip":"XLS"}),(0,t.jsx)(L.Button,{type:"button",icon:"pi pi-file-pdf",severity:"warning",rounded:!0,onClick:()=>{e.A(86007).then(t=>{e.A(40302).then(e=>{let a=t.default,o=e.default,l=new a(0,0);o(l,{head:[h.map(e=>e.title)],body:r.map(e=>h.map(t=>e[t.dataKey]))}),l.save("products.pdf")})})},"data-pr-tooltip":"PDF"})]}),g={basic:`
<Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
<Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
<Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />

<DataTable ref={dt} value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
    {cols.map((col, index) => (
        <Column key={index} field={col.field} header={col.header} />
    ))}
</DataTable>
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { ProductService } from './service/ProductService';

export default function ExportDemo() {
    const [products, setProducts] = useState([]);
    const dt = useRef(null);

    const cols = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);

                doc.autoTable(exportColumns, products);
                doc.save('products.pdf');
            });
        });
    };

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(products);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'products');
        });
    };

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    };

    const header = (
        <div className="flex align-items-center justify-content-end gap-2">
            <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
        </div>
    );

    return (
        <div className="card">
            <Tooltip target=".export-buttons>button" position="bottom" />

            <DataTable ref={dt} value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
                {cols.map((col, index) => (
                    <Column key={index} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
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

interface ColumnMeta {
    field: string;
    header: string;
}

export default function ExportDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const dt = useRef<DataTable>(null);

    const cols: ColumnMeta[] = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);

                doc.autoTable(exportColumns, products);
                doc.save('products.pdf');
            });
        });
    };

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(products);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'products');
        });
    };

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    };

    const header = (
        <div className="flex align-items-center justify-content-end gap-2">
            <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
        </div>
    );

    return (
        <div className="card">
            <Tooltip target=".export-buttons>button" position="bottom" />

            <DataTable ref={dt} value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
                {cols.map((col, index) => (
                    <Column key={index} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...a,children:(0,t.jsxs)("p",{children:["CSV export is a built-in feature, in this sample PDF & XLS export are also available using third party libraries like ",(0,t.jsx)("i",{children:"jsPDF"})," and ",(0,t.jsx)("i",{children:"xlsx"}),"."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>l(e))},children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(O.Tooltip,{target:".export-buttons>button",position:"bottom"}),(0,t.jsx)(c.DataTable,{ref:i,value:r,header:f,tableStyle:{minWidth:"50rem"},children:p.map((e,a)=>(0,t.jsx)(s.Column,{field:e.field,header:e.header},a))})]})}),(0,t.jsx)(n.DocSectionCode,{code:g,service:["ProductService"]})]})}var q=e.i(28332),K=e.i(99102),z=e.i(66901),Y=e.i(33616),U=e.i(41761),G=e.i(50770),V=e.i(65157),H=e.i(42025),Q=e.i(10286);function $(e){let[a,r]=(0,d.useState)(null),[l,i]=(0,d.useState)(null),[u,p]=(0,d.useState)(!1),[h,f]=(0,d.useState)(""),[g]=(0,d.useState)([{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}]),[y]=(0,d.useState)(["unqualified","qualified","new","negotiation","renewal"]),v=e=>{switch(e){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}},C=()=>{i({global:{value:null,matchMode:q.FilterMatchMode.CONTAINS},name:{operator:K.FilterOperator.AND,constraints:[{value:null,matchMode:q.FilterMatchMode.STARTS_WITH}]},"country.name":{operator:K.FilterOperator.AND,constraints:[{value:null,matchMode:q.FilterMatchMode.STARTS_WITH}]},representative:{value:null,matchMode:q.FilterMatchMode.IN},date:{operator:K.FilterOperator.AND,constraints:[{value:null,matchMode:q.FilterMatchMode.DATE_IS}]},balance:{operator:K.FilterOperator.AND,constraints:[{value:null,matchMode:q.FilterMatchMode.EQUALS}]},status:{operator:K.FilterOperator.OR,constraints:[{value:null,matchMode:q.FilterMatchMode.EQUALS}]},activity:{value:null,matchMode:q.FilterMatchMode.BETWEEN},verified:{value:null,matchMode:q.FilterMatchMode.EQUALS}}),f("")},b=e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:e.name,src:`https://primefaces.org/cdn/primereact/images/avatar/${e.image}`,width:"32"}),(0,t.jsx)("span",{children:e.name})]}),S=e=>(0,t.jsx)(W.Tag,{value:e,severity:v(e)}),x=(0,t.jsxs)("div",{className:"flex justify-content-between",children:[(0,t.jsx)(L.Button,{type:"button",icon:"pi pi-filter-slash",label:"Clear",outlined:!0,onClick:()=>{C()}}),(0,t.jsxs)(Y.IconField,{iconPosition:"left",children:[(0,t.jsx)(U.InputIcon,{className:"pi pi-search"}),(0,t.jsx)(B.InputText,{value:h,onChange:e=>{let t=e.target.value,a={...l};a.global.value=t,i(a),f(t)},placeholder:"Keyword Search"})]})]}),w={basic:`
<DataTable value={customers} paginator showGridlines rows={10} loading={loading} dataKey="id" 
        filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} header={header}
        emptyMessage="No customers found." onFilter={(e) => setFilters(e.filters)}>
    <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
    <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate}
        filter filterPlaceholder="Search by country" filterClear={filterClearTemplate} 
        filterApply={filterApplyTemplate} filterFooter={filterFooterTemplate} />
    <Column header="Agent" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
        body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
    <Column header="Date" filterField="date" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
    <Column header="Balance" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
    <Column field="status" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
    <Column field="activity" header="Activity" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
    <Column field="verified" header="Verified" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedFilterTemplate} />
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { CustomerService } from './service/CustomerService';

export default function AdvancedFilterDemo() {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [representatives] = useState([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
        initFilters();
    }, []);

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const clearFilter = () => {
        initFilters();
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            representative: { value: null, matchMode: FilterMatchMode.IN },
            date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
            balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
            verified: { value: null, matchMode: FilterMatchMode.EQUALS }
        });
        setGlobalFilterValue('');
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const filterClearTemplate = (options) => {
        return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} severity="secondary"></Button>;
    };

    const filterApplyTemplate = (options) => {
        return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback} severity="success"></Button>;
    };

    const filterFooterTemplate = () => {
        return <div className="px-3 pt-0 pb-3 text-center">Filter by Country</div>;
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${representative.image}\`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativeFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${option.image}\`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const activityBodyTemplate = (rowData) => {
        return <ProgressBar value={rowData.activity} showValue={false} style={{ height: '6px' }}></ProgressBar>;
    };

    const activityFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </React.Fragment>
        );
    };

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', { 'text-green-500 pi-check-circle': rowData.verified, 'text-red-500 pi-times-circle': !rowData.verified })}></i>;
    };

    const verifiedFilterTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2">
                <label htmlFor="verified-filter" className="font-bold">
                    Verified
                </label>
                <TriStateCheckbox inputId="verified-filter" value={options.value} onChange={(e) => options.filterCallback(e.value)} />
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator showGridlines rows={10} loading={loading} dataKey="id" 
                    filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} header={header}
                    emptyMessage="No customers found." onFilter={(e) => setFilters(e.filters)}>
                <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate}
                    filter filterPlaceholder="Search by country" filterClear={filterClearTemplate} 
                    filterApply={filterApplyTemplate} filterFooter={filterFooterTemplate} />
                <Column header="Agent" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
                <Column header="Date" filterField="date" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column header="Balance" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                <Column field="status" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                <Column field="activity" header="Activity" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                <Column field="verified" header="Verified" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedFilterTemplate} />
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Column, ColumnFilterApplyTemplateOptions, ColumnFilterClearTemplateOptions, ColumnFilterElementTemplateOptions } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { InputNumber, InputNumberChangeEvent } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Slider, SliderChangeEvent } from 'primereact/slider';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox, TriStateCheckboxChangeEvent } from 'primereact/tristatecheckbox';
import { CustomerService } from './service/CustomerService';

interface Representative {
  name: string;
  image: string;
}

interface Country {
    name: string;
    code: string;
}

interface Customer {
  id: number;
  name: string;
  country: Country;
  company: string;
  date: string;
  status: string;
  verified: boolean;
  activity: number;
  representative: Representative;
  balance: number;
}

const defaultFilters: DataTableFilterMeta = {
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },
  'country.name': {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
  },
  representative: { value: null, matchMode: FilterMatchMode.IN },
  date: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
  },
  balance: {
    operator: FilterOperator.AND,
    constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
  },
  status: {
    operator: FilterOperator.OR,
    constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
  },
  activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
  verified: { value: null, matchMode: FilterMatchMode.EQUALS },
};

export default function AdvancedFilterDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [filters, setFilters] = useState<DataTableFilterMeta>(defaultFilters);
    const [loading, setLoading] = useState<boolean>(false);
    const [globalFilterValue, setGlobalFilterValue] = useState<string>('');
    const [representatives] = useState<Representative[]>([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState<string[]>(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status: string) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data: Customer[]) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
        initFilters();
    }, []);

    const getCustomers = (data: Customer[]) => {
        return [...(data || [])].map((d) => {
            // @ts-ignore
            d.date = new Date(d.date);

            return d;
        });
    };

    const formatDate = (value: Date) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const clearFilter = () => {
        initFilters();
    };

    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let _filters = { ...filters };

        // @ts-ignore
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const initFilters = () => {
        setFilters(defaultFilters);
        setGlobalFilterValue('');
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };

    const countryBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const filterClearTemplate = (options: ColumnFilterClearTemplateOptions) => {
        return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} severity="secondary"></Button>;
    };

    const filterApplyTemplate = (options: ColumnFilterApplyTemplateOptions) => {
        return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback} severity="success"></Button>;
    };

    const filterFooterTemplate = () => {
        return <div className="px-3 pt-0 pb-3 text-center">Filter by Country</div>;
    };

    const representativeBodyTemplate = (rowData: Customer) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${representative.image}\`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativeFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e: MultiSelectChangeEvent) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    };

    const representativesItemTemplate = (option: Representative) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${option.image}\`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData: Customer) => {
        return formatDate(new Date(rowData.date));
    };

    const dateFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const balanceBodyTemplate = (rowData: Customer) => {
        return formatCurrency(rowData.balance);
    };

    const balanceFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <InputNumber value={options.value} onChange={(e: InputNumberChangeEvent) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData: Customer) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e: DropdownChangeEvent) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const statusItemTemplate = (option: string) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const activityBodyTemplate = (rowData: Customer) => {
        return <ProgressBar value={rowData.activity} showValue={false} style={{ height: '6px' }}></ProgressBar>;
    };

    const activityFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return (
            <React.Fragment>
                <Slider value={options.value} onChange={(e: SliderChangeEvent) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </React.Fragment>
        );
    };

    const verifiedBodyTemplate = (rowData: Customer) => {
        return <i className={classNames('pi', { 'text-green-500 pi-check-circle': rowData.verified, 'text-red-500 pi-times-circle': !rowData.verified })}></i>;
    };

    const verifiedFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return (
            <div className="flex align-items-center gap-2">
                <label htmlFor="verified-filter" className="font-bold">
                    Verified
                </label>
                <TriStateCheckbox id="verified-filter" value={options.value} onChange={(e: TriStateCheckboxChangeEvent) => options.filterCallback(e.value)} />
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator showGridlines rows={10} loading={loading} dataKey="id" 
                    filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} header={header}
                    emptyMessage="No customers found." onFilter={(e) => setFilters(e.filters)}>
                <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate}
                    filter filterPlaceholder="Search by country" filterClear={filterClearTemplate} 
                    filterApply={filterApplyTemplate} filterFooter={filterFooterTemplate} />
                <Column header="Agent" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
                <Column header="Date" filterField="date" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column header="Balance" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                <Column field="status" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                <Column field="activity" header="Activity" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                <Column field="verified" header="Verified" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedFilterTemplate} />
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"filterDisplay"})," is set as ",(0,t.jsx)("i",{children:"menu"}),", filtering is done via popups with support for multiple constraints and advanced templating."]})}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersMedium().then(e=>{r([...e||[]].map(e=>(e.date=new Date(e.date),e))),p(!1)}),C()},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,paginator:!0,showGridlines:!0,rows:10,loading:u,dataKey:"id",filters:l,globalFilterFields:["name","country.name","representative.name","balance","status"],header:x,emptyMessage:"No customers found.",onFilter:e=>i(e.filters),children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"12rem"}}),(0,t.jsx)(s.Column,{header:"Country",filterField:"country.name",style:{minWidth:"12rem"},body:e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:"flag",src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`flag flag-${e.country.code}`,style:{width:"24px"}}),(0,t.jsx)("span",{children:e.country.name})]}),filter:!0,filterPlaceholder:"Search by country",filterClear:e=>(0,t.jsx)(L.Button,{type:"button",icon:"pi pi-times",onClick:e.filterClearCallback,severity:"secondary"}),filterApply:e=>(0,t.jsx)(L.Button,{type:"button",icon:"pi pi-check",onClick:e.filterApplyCallback,severity:"success"}),filterFooter:()=>(0,t.jsx)("div",{className:"px-3 pt-0 pb-3 text-center",children:"Filter by Country"})}),(0,t.jsx)(s.Column,{header:"Agent",filterField:"representative",showFilterMatchModes:!1,filterMenuStyle:{width:"14rem"},style:{minWidth:"14rem"},body:e=>{let a=e.representative;return(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:a.name,src:`https://primefaces.org/cdn/primereact/images/avatar/${a.image}`,width:"32"}),(0,t.jsx)("span",{children:a.name})]})},filter:!0,filterElement:e=>(0,t.jsx)(D.MultiSelect,{value:e.value,options:g,itemTemplate:b,onChange:t=>e.filterCallback(t.value),optionLabel:"name",placeholder:"Any",className:"p-column-filter"})}),(0,t.jsx)(s.Column,{header:"Date",filterField:"date",dataType:"date",style:{minWidth:"10rem"},body:e=>e.date.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),filter:!0,filterElement:e=>(0,t.jsx)(z.Calendar,{value:e.value,onChange:t=>e.filterCallback(t.value,e.index),dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy",mask:"99/99/9999"})}),(0,t.jsx)(s.Column,{header:"Balance",filterField:"balance",dataType:"numeric",style:{minWidth:"10rem"},body:e=>e.balance.toLocaleString("en-US",{style:"currency",currency:"USD"}),filter:!0,filterElement:e=>(0,t.jsx)(R.InputNumber,{value:e.value,onChange:t=>e.filterCallback(t.value,e.index),mode:"currency",currency:"USD",locale:"en-US"})}),(0,t.jsx)(s.Column,{field:"status",header:"Status",filterMenuStyle:{width:"14rem"},style:{minWidth:"12rem"},body:e=>(0,t.jsx)(W.Tag,{value:e.status,severity:v(e.status)}),filter:!0,filterElement:e=>(0,t.jsx)(I.Dropdown,{value:e.value,options:y,onChange:t=>e.filterCallback(t.value,e.index),itemTemplate:S,placeholder:"Select One",className:"p-column-filter",showClear:!0})}),(0,t.jsx)(s.Column,{field:"activity",header:"Activity",showFilterMatchModes:!1,style:{minWidth:"12rem"},body:e=>(0,t.jsx)(G.ProgressBar,{value:e.activity,showValue:!1,style:{height:"6px"}}),filter:!0,filterElement:e=>(0,t.jsxs)(d.default.Fragment,{children:[(0,t.jsx)(V.Slider,{value:e.value,onChange:t=>e.filterCallback(t.value),range:!0,className:"m-3"}),(0,t.jsxs)("div",{className:"flex align-items-center justify-content-between px-2",children:[(0,t.jsx)("span",{children:e.value?e.value[0]:0}),(0,t.jsx)("span",{children:e.value?e.value[1]:100})]})]})}),(0,t.jsx)(s.Column,{field:"verified",header:"Verified",dataType:"boolean",bodyClassName:"text-center",style:{minWidth:"8rem"},body:e=>(0,t.jsx)("i",{className:(0,P.classNames)("pi",{"text-green-500 pi-check-circle":e.verified,"text-red-500 pi-times-circle":!e.verified})}),filter:!0,filterElement:e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("label",{htmlFor:"verified-filter",className:"font-bold",children:"Verified"}),(0,t.jsx)(H.TriStateCheckbox,{inputId:"verified-filter",value:e.value,onChange:t=>e.filterCallback(t.value)})]})})]})})}),(0,t.jsx)(n.DocSectionCode,{code:w,service:["CustomerService"]})]})}function J(e){let[a,r]=(0,d.useState)(null),[l,i]=(0,d.useState)({global:{value:null,matchMode:q.FilterMatchMode.CONTAINS},name:{value:null,matchMode:q.FilterMatchMode.STARTS_WITH},"country.name":{value:null,matchMode:q.FilterMatchMode.STARTS_WITH},representative:{value:null,matchMode:q.FilterMatchMode.IN},status:{value:null,matchMode:q.FilterMatchMode.EQUALS},verified:{value:null,matchMode:q.FilterMatchMode.EQUALS}}),[u,p]=(0,d.useState)(!0),[h,f]=(0,d.useState)(""),[g]=(0,d.useState)([{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}]),[y]=(0,d.useState)(["unqualified","qualified","new","negotiation","renewal"]),v=e=>{switch(e){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}},C=e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:e.name,src:`https://primefaces.org/cdn/primereact/images/avatar/${e.image}`,width:"32"}),(0,t.jsx)("span",{children:e.name})]}),b=e=>(0,t.jsx)(W.Tag,{value:e,severity:v(e)}),S=(0,t.jsx)("div",{className:"flex justify-content-end",children:(0,t.jsxs)(Y.IconField,{iconPosition:"left",children:[(0,t.jsx)(U.InputIcon,{className:"pi pi-search"}),(0,t.jsx)(B.InputText,{value:h,onChange:e=>{let t=e.target.value,a={...l};a.global.value=t,i(a),f(t)},placeholder:"Keyword Search"})]})}),x={basic:`
<DataTable value={customers} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
        globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
    <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
    <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
    <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
        body={representativeBodyTemplate} filter filterElement={representativeRowFilterTemplate} />
    <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
    <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { CustomerService } from './service/CustomerService';

export default function BasicFilterDemo() {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [representatives] = useState([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${representative.image}\`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${option.image}\`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified })}></i>;
    };

    const representativeRowFilterTemplate = (options) => {
        return (
            <MultiSelect
                value={options.value}
                options={representatives}
                itemTemplate={representativesItemTemplate}
                onChange={(e) => options.filterApplyCallback(e.value)}
                optionLabel="name"
                placeholder="Any"
                className="p-column-filter"
                maxSelectedLabels={1}
                style={{ minWidth: '14rem' }}
            />
        );
    };

    const statusRowFilterTemplate = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
        );
    };

    const verifiedRowFilterTemplate = (options) => {
        return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />;
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                    globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
                <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={representativeBodyTemplate} filter filterElement={representativeRowFilterTemplate} />
                <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
                <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode } from 'primereact/api';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Column, ColumnFilterElementTemplateOptions } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox, TriStateCheckboxChangeEvent } from 'primereact/tristatecheckbox';
import { CustomerService } from './service/CustomerService';

interface Representative {
  name: string;
  image: string;
}

interface Country {
    name: string;
    code: string;
}

interface Customer {
  id: number;
  name: string;
  country: Country;
  company: string;
  date: string;
  status: string;
  verified: boolean;
  activity: number;
  representative: Representative;
  balance: number;
}

export default function BasicFilterDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [filters, setFilters] = useState<DataTableFilterMeta>({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [globalFilterValue, setGlobalFilterValue] = useState<string>('');
    const [representatives] = useState<Representative[]>([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState<string[]>(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status: string) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data: Customer[]) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data: Customer[]) => {
        return [...(data || [])].map((d) => {
            // @ts-ignore
            d.date = new Date(d.date);

            return d;
        });
    };

    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let _filters = { ...filters };

        // @ts-ignore
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };

    const countryBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const representativeBodyTemplate = (rowData: Customer) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${representative.image}\`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativesItemTemplate = (option: Representative) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${option.image}\`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData: Customer) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusItemTemplate = (option: string) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const verifiedBodyTemplate = (rowData: Customer) => {
        return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified })}></i>;
    };

    const representativeRowFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return (
            <MultiSelect
                value={options.value}
                options={representatives}
                itemTemplate={representativesItemTemplate}
                onChange={(e: MultiSelectChangeEvent) => options.filterApplyCallback(e.value)}
                optionLabel="name"
                placeholder="Any"
                className="p-column-filter"
                maxSelectedLabels={1}
                style={{ minWidth: '14rem' }}
            />
        );
    };

    const statusRowFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e: DropdownChangeEvent) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
        );
    };

    const verifiedRowFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <TriStateCheckbox value={options.value} onChange={(e: TriStateCheckboxChangeEvent) => options.filterApplyCallback(e.value)} />;
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                    globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
                <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={representativeBodyTemplate} filter filterElement={representativeRowFilterTemplate} />
                <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
                <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Data filtering is enabled by defining the ",(0,t.jsx)("i",{children:"filters"})," property referring to a ",(0,t.jsx)("i",{children:"DataTableFilterMeta"})," instance. Each column to filter also requires ",(0,t.jsx)("i",{children:"filter"})," to be enabled. Built-in filter element is a input field and using ",(0,t.jsx)("i",{children:"filterElement"}),", it is possible to customize the filtering with your own UI. Filter elements are displayed within a separate row when ",(0,t.jsx)("i",{children:"filterDisplay"})," is defined as ",(0,t.jsx)("i",{children:"row"}),"."]}),(0,t.jsxs)("p",{children:["The optional global filtering searches the data against a single value that is bound to the ",(0,t.jsx)("i",{children:"global"})," key of the ",(0,t.jsx)("i",{children:"filters"})," object. The fields to search against is defined with the ",(0,t.jsx)("i",{children:"globalFilterFields"}),"."]})]}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersMedium().then(e=>{r([...e||[]].map(e=>(e.date=new Date(e.date),e))),p(!1)})},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,paginator:!0,rows:10,dataKey:"id",filters:l,filterDisplay:"row",loading:u,globalFilterFields:["name","country.name","representative.name","status"],header:S,emptyMessage:"No customers found.",children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"12rem"}}),(0,t.jsx)(s.Column,{header:"Country",filterField:"country.name",style:{minWidth:"12rem"},body:e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:"flag",src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`flag flag-${e.country.code}`,style:{width:"24px"}}),(0,t.jsx)("span",{children:e.country.name})]}),filter:!0,filterPlaceholder:"Search by country"}),(0,t.jsx)(s.Column,{header:"Agent",filterField:"representative",showFilterMenu:!1,filterMenuStyle:{width:"14rem"},style:{minWidth:"14rem"},body:e=>{let a=e.representative;return(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:a.name,src:`https://primefaces.org/cdn/primereact/images/avatar/${a.image}`,width:"32"}),(0,t.jsx)("span",{children:a.name})]})},filter:!0,filterElement:e=>(0,t.jsx)(D.MultiSelect,{value:e.value,options:g,itemTemplate:C,onChange:t=>e.filterApplyCallback(t.value),optionLabel:"name",placeholder:"Any",className:"p-column-filter",maxSelectedLabels:1,style:{minWidth:"14rem"}})}),(0,t.jsx)(s.Column,{field:"status",header:"Status",showFilterMenu:!1,filterMenuStyle:{width:"14rem"},style:{minWidth:"12rem"},body:e=>(0,t.jsx)(W.Tag,{value:e.status,severity:v(e.status)}),filter:!0,filterElement:e=>(0,t.jsx)(I.Dropdown,{value:e.value,options:y,onChange:t=>e.filterApplyCallback(t.value),itemTemplate:b,placeholder:"Select One",className:"p-column-filter",showClear:!0,style:{minWidth:"12rem"}})}),(0,t.jsx)(s.Column,{field:"verified",header:"Verified",dataType:"boolean",style:{minWidth:"6rem"},body:e=>(0,t.jsx)("i",{className:(0,P.classNames)("pi",{"true-icon pi-check-circle":e.verified,"false-icon pi-times-circle":!e.verified})}),filter:!0,filterElement:e=>(0,t.jsx)(H.TriStateCheckbox,{value:e.value,onChange:t=>e.filterApplyCallback(t.value)})})]})})}),(0,t.jsx)(n.DocSectionCode,{code:x,service:["CustomerService"]})]})}function X(e){let[a,r]=(0,d.useState)(null),[l,i]=(0,d.useState)({global:{value:null,matchMode:q.FilterMatchMode.CONTAINS},name:{value:null,matchMode:q.FilterMatchMode.STARTS_WITH},"country.name":{value:null,matchMode:q.FilterMatchMode.STARTS_WITH},representative:{value:null,matchMode:q.FilterMatchMode.IN},activity:{value:null,matchMode:q.FilterMatchMode.CUSTOM},status:{value:null,matchMode:q.FilterMatchMode.EQUALS},verified:{value:null,matchMode:q.FilterMatchMode.EQUALS}}),[u,p]=(0,d.useState)(!0),[h,f]=(0,d.useState)(""),[g]=(0,d.useState)([{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}]),[y]=(0,d.useState)(["unqualified","qualified","new","negotiation","renewal"]),v=e=>{switch(e){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}},C=e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:e.name,src:`https://primefaces.org/cdn/primereact/images/avatar/${e.image}`,width:"32"}),(0,t.jsx)("span",{children:e.name})]}),b=e=>(0,t.jsx)(W.Tag,{value:e,severity:v(e)}),S=(0,t.jsx)("div",{className:"flex justify-content-end",children:(0,t.jsxs)(Y.IconField,{iconPosition:"left",children:[(0,t.jsx)(U.InputIcon,{className:"pi pi-search"}),(0,t.jsx)(B.InputText,{value:h,onChange:e=>{let t=e.target.value,a={...l};a.global.value=t,i(a),f(t)},placeholder:"Keyword Search"})]})}),x={basic:`
// The rule argument should be a string in the format "custom_[field]".
FilterService.register('custom_activity', (value, filters) => {
  const [from, to] = filters ?? [null, null];
  if (from === null && to === null) return true;
  if (from !== null && to === null) return from <= value;
  if (from === null && to !== null) return value <= to;
  return from <= value && value <= to;
});

<DataTable value={customers} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
        globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
    <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
    <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
    <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
        body={representativeBodyTemplate} filter filterElement={representativeRowFilterTemplate} />
    <Column header="Activity(Custom Filter)" field="activity" showFilterMenu={false} showClearButton={false} style={{ minWidth: '14rem' }} filter filterElement={activityRowFilterTemplate} />
    <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
    <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterService } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { CustomerService } from './service/CustomerService';

// The rule argument should be a string in the format "custom_[field]".
FilterService.register('custom_activity', (value, filters) => {
  const [from, to] = filters ?? [null, null];
  if (from === null && to === null) return true;
  if (from !== null && to === null) return from <= value;
  if (from === null && to !== null) return value <= to;
  return from <= value && value <= to;
});

export default function CustomFilterDemo() {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        // For using custom filters, you must set FilterMatchMode.CUSTOM to matchMode.
        activity: { value: null, matchMode: FilterMatchMode.CUSTOM },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [loading, setLoading] = useState(true);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [representatives] = useState([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${representative.image}\`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${option.image}\`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified })}></i>;
    };

    const representativeRowFilterTemplate = (options) => {
        return (
            <MultiSelect
                value={options.value}
                options={representatives}
                itemTemplate={representativesItemTemplate}
                onChange={(e) => options.filterApplyCallback(e.value)}
                optionLabel="name"
                placeholder="Any"
                className="p-column-filter"
                maxSelectedLabels={1}
                style={{ minWidth: '14rem' }}
            />
        );
    };

    const statusRowFilterTemplate = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
        );
    };

    const verifiedRowFilterTemplate = (options) => {
        return <TriStateCheckbox value={options.value} onChange={(e) => options.filterApplyCallback(e.value)} />;
    };

    const activityRowFilterTemplate = (options) => {
        const [from, to] = options.value ?? [null, null];

        return (
            <div className="flex gap-1">
                <InputNumber value={from} onChange={(e) => options.filterApplyCallback([e.value, to])} className="w-full" placeholder="from" />
                <InputNumber value={to} onChange={(e) => options.filterApplyCallback([from, e.value])} className="w-full" placeholder="to" />
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                    globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
                <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={representativeBodyTemplate} filter filterElement={representativeRowFilterTemplate} />
                <Column header="Activity(Custom Filter)" field="activity" showFilterMenu={false} showClearButton={false} style={{ minWidth: '14rem' }} filter filterElement={activityRowFilterTemplate} />
                <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
                <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterService } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { CustomerService } from './service/CustomerService';

interface Representative {
  name: string;
  image: string;
}

interface Country {
    name: string;
    code: string;
}

interface Customer {
  id: number;
  name: string;
  country: Country;
  company: string;
  date: string;
  status: string;
  verified: boolean;
  activity: number;
  representative: Representative;
  balance: number;
}

// The rule argument should be a string in the format "custom_[field]".
FilterService.register('custom_activity', (value, filters) => {
  const [from, to] = filters ?? [null, null];
  if (from === null && to === null) return true;
  if (from !== null && to === null) return from <= value;
  if (from === null && to !== null) return value <= to;
  return from <= value && value <= to;
});

export default function CustomFilterDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [filters, setFilters] = useState<DataTableFilterMeta>({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'country.name': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        // For using custom filters, you must set FilterMatchMode.CUSTOM to matchMode.
        activity: { value: null, matchMode: FilterMatchMode.CUSTOM },
        status: { value: null, matchMode: FilterMatchMode.EQUALS },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [globalFilterValue, setGlobalFilterValue] = useState<string>('');
    const [representatives] = useState<Representative[]>([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState<string[]>(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status: string) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data: Customer[]) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data: Customer[]) => {
        return [...(data || [])].map((d) => {
            // @ts-ignore
            d.date = new Date(d.date);

            return d;
        });
    };

    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let _filters = { ...filters };

        // @ts-ignore
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };

    const countryBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const representativeBodyTemplate = (rowData: Customer) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${representative.image}\`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativesItemTemplate = (option: Representative) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${option.image}\`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData: Customer) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusItemTemplate = (option: string) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const verifiedBodyTemplate = (rowData: Customer) => {
        return <i className={classNames('pi', { 'true-icon pi-check-circle': rowData.verified, 'false-icon pi-times-circle': !rowData.verified })}></i>;
    };

    const representativeRowFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return (
            <MultiSelect
                value={options.value}
                options={representatives}
                itemTemplate={representativesItemTemplate}
                onChange={(e: MultiSelectChangeEvent) => options.filterApplyCallback(e.value)}
                optionLabel="name"
                placeholder="Any"
                className="p-column-filter"
                maxSelectedLabels={1}
                style={{ minWidth: '14rem' }}
            />
        );
    };

    const statusRowFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return (
            <Dropdown value={options.value} options={statuses} onChange={(e: DropdownChangeEvent) => options.filterApplyCallback(e.value)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear style={{ minWidth: '12rem' }} />
        );
    };

    const verifiedRowFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <TriStateCheckbox value={options.value} onChange={(e: TriStateCheckboxChangeEvent) => options.filterApplyCallback(e.value)} />;
    };

    const activityRowFilterTemplate = (options) => {
        const [from, to] = options.value ?? [null, null];

        return (
            <div className="flex gap-1">
                <InputNumber value={from} onChange={(e) => options.filterApplyCallback([e.value, to])} className="w-full" placeholder="from" />
                <InputNumber value={to} onChange={(e) => options.filterApplyCallback([from, e.value])} className="w-full" placeholder="to" />
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={10} dataKey="id" filters={filters} filterDisplay="row" loading={loading}
                    globalFilterFields={['name', 'country.name', 'representative.name', 'status']} header={header} emptyMessage="No customers found.">
                <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                <Column header="Agent" filterField="representative" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={representativeBodyTemplate} filter filterElement={representativeRowFilterTemplate} />
                <Column header="Activity(Custom Filter)" field="activity" showFilterMenu={false} showClearButton={false} style={{ minWidth: "14rem" }} filter filterElement={activityRowFilterTemplate} />
                <Column field="status" header="Status" showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusRowFilterTemplate} />
                <Column field="verified" header="Verified" dataType="boolean" style={{ minWidth: '6rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedRowFilterTemplate} />
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Custom filtering is enabled by defining a filter function using ",(0,t.jsx)("i",{children:"FilterService.register"})," where the rule argument must be ",(0,t.jsx)("i",{children:'"custom_[field]"'}),'. The "Activity" field in this example allows custom filtering by a range of two values.']})}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersMedium().then(e=>{r([...e||[]].map(e=>(e.date=new Date(e.date),e))),p(!1)})},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,paginator:!0,rows:10,dataKey:"id",filters:l,filterDisplay:"row",loading:u,globalFilterFields:["name","country.name","representative.name","status"],header:S,emptyMessage:"No customers found.",children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"12rem"}}),(0,t.jsx)(s.Column,{header:"Country",filterField:"country.name",style:{minWidth:"12rem"},body:e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:"flag",src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`flag flag-${e.country.code}`,style:{width:"24px"}}),(0,t.jsx)("span",{children:e.country.name})]}),filter:!0,filterPlaceholder:"Search by country"}),(0,t.jsx)(s.Column,{header:"Agent",filterField:"representative",showFilterMenu:!1,filterMenuStyle:{width:"14rem"},style:{minWidth:"14rem"},body:e=>{let a=e.representative;return(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:a.name,src:`https://primefaces.org/cdn/primereact/images/avatar/${a.image}`,width:"32"}),(0,t.jsx)("span",{children:a.name})]})},filter:!0,filterElement:e=>(0,t.jsx)(D.MultiSelect,{value:e.value,options:g,itemTemplate:C,onChange:t=>e.filterApplyCallback(t.value),optionLabel:"name",placeholder:"Any",className:"p-column-filter",maxSelectedLabels:1,style:{minWidth:"14rem"}})}),(0,t.jsx)(s.Column,{header:"Activity(Custom Filter)",field:"activity",showFilterMenu:!1,showClearButton:!1,style:{minWidth:"14rem"},filter:!0,filterElement:e=>{let[a,r]=e.value??[null,null];return(0,t.jsxs)("div",{className:"flex gap-1",children:[(0,t.jsx)(R.InputNumber,{value:a,onChange:t=>e.filterApplyCallback([t.value,r]),className:"w-full",placeholder:"from"}),(0,t.jsx)(R.InputNumber,{value:r,onChange:t=>e.filterApplyCallback([a,t.value]),className:"w-full",placeholder:"to"})]})}}),(0,t.jsx)(s.Column,{field:"status",header:"Status",showFilterMenu:!1,filterMenuStyle:{width:"14rem"},style:{minWidth:"12rem"},body:e=>(0,t.jsx)(W.Tag,{value:e.status,severity:v(e.status)}),filter:!0,filterElement:e=>(0,t.jsx)(I.Dropdown,{value:e.value,options:y,onChange:t=>e.filterApplyCallback(t.value),itemTemplate:b,placeholder:"Select One",className:"p-column-filter",showClear:!0,style:{minWidth:"12rem"}})}),(0,t.jsx)(s.Column,{field:"verified",header:"Verified",dataType:"boolean",style:{minWidth:"6rem"},body:e=>(0,t.jsx)("i",{className:(0,P.classNames)("pi",{"true-icon pi-check-circle":e.verified,"false-icon pi-times-circle":!e.verified})}),filter:!0,filterElement:e=>(0,t.jsx)(H.TriStateCheckbox,{value:e.value,onChange:t=>e.filterApplyCallback(t.value)})})]})})}),(0,t.jsx)(n.DocSectionCode,{code:x,service:["CustomerService"]})]})}function Z(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={products} showGridlines tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function GridLinesDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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

export default function GridLinesDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Enabling ",(0,t.jsx)("i",{children:"showGridlines"})," displays borders between cells."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,showGridlines:!0,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["ProductService"]})]})}function ee(e){let a={basic:`
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e}),(0,t.jsx)(n.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function et(e){let[a,r]=(0,d.useState)(!1),[l,i]=(0,d.useState)(0),[u,m]=(0,d.useState)(null),[p,h]=(0,d.useState)(!1),[f,g]=(0,d.useState)(null),[y,v]=(0,d.useState)({first:0,rows:10,page:1,sortField:null,sortOrder:null,filters:{name:{value:"",matchMode:"contains"},"country.name":{value:"",matchMode:"contains"},company:{value:"",matchMode:"contains"},"representative.name":{value:"",matchMode:"contains"}}}),C=null;(0,d.useEffect)(()=>{b()},[y]);let b=()=>{r(!0),C&&clearTimeout(C),C=setTimeout(()=>{Q.CustomerService.getCustomers({lazyEvent:JSON.stringify(y)}).then(e=>{i(e.totalRecords),m(e.customers),r(!1)})},1e3*Math.random()+250)},S={basic:`
<DataTable value={customers} lazy filterDisplay="row" dataKey="id" paginator
        first={lazyState.first} rows={10} totalRecords={totalRecords} onPage={onPage}
        onSort={onSort} sortField={lazyState.sortField} sortOrder={lazyState.sortOrder}
        onFilter={onFilter} filters={lazyState.filters} loading={loading} tableStyle={{ minWidth: '75rem' }}
        selection={selectedCustomers} onSelectionChange={onSelectionChange} selectAll={selectAll} onSelectAllChange={onSelectAllChange}>
    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
    <Column field="name" header="Name" sortable filter filterPlaceholder="Search" />
    <Column field="country.name" sortable header="Country" filterField="country.name" body={countryBodyTemplate} filter filterPlaceholder="Search" />
    <Column field="company" sortable filter header="Company" filterPlaceholder="Search" />
    <Column field="representative.name" header="Representative" body={representativeBodyTemplate} filter filterPlaceholder="Search" />
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

export default function LazyLoadDemo() {
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [customers, setCustomers] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [lazyState, setLazyState] = useState({
        first: 0,
        rows: 10,
        page: 1,
        sortField: null,
        sortOrder: null,
        filters: {
            name: { value: '', matchMode: 'contains' },
            'country.name': { value: '', matchMode: 'contains' },
            company: { value: '', matchMode: 'contains' },
            'representative.name': { value: '', matchMode: 'contains' }
        }
    });

    let networkTimeout = null;

    useEffect(() => {
        loadLazyData();
    }, [lazyState]);

    const loadLazyData = () => {
        setLoading(true);

        if (networkTimeout) {
            clearTimeout(networkTimeout);
        }

        //imitate delay of a backend call
        networkTimeout = setTimeout(() => {
            CustomerService.getCustomers({ lazyEvent: JSON.stringify(lazyState) }).then((data) => {
                setTotalRecords(data.totalRecords);
                setCustomers(data.customers);
                setLoading(false);
            });
        }, Math.random() * 1000 + 250);
    };

    const onPage = (event) => {
        setLazyState(event);
    };

    const onSort = (event) => {
        setLazyState(event);
    };

    const onFilter = (event) => {
        event['first'] = 0;
        setLazyState(event);
    };

    const onSelectionChange = (event) => {
        const value = event.value;

        setSelectedCustomers(value);
        setSelectAll(value.length === totalRecords);
    };

    const onSelectAllChange = (event) => {
        const selectAll = event.checked;

        if (selectAll) {
            CustomerService.getCustomers().then((data) => {
                setSelectAll(true);
                setSelectedCustomers(data.customers);
            });
        } else {
            setSelectAll(false);
            setSelectedCustomers([]);
        }
    };

    const representativeBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${rowData.representative.image}\`} width={32} />
                <span>{rowData.representative.name}</span>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    return (
        <div className="card">
            <DataTable value={customers} lazy filterDisplay="row" dataKey="id" paginator
                    first={lazyState.first} rows={10} totalRecords={totalRecords} onPage={onPage}
                    onSort={onSort} sortField={lazyState.sortField} sortOrder={lazyState.sortOrder}
                    onFilter={onFilter} filters={lazyState.filters} loading={loading} tableStyle={{ minWidth: '75rem' }}
                    selection={selectedCustomers} onSelectionChange={onSelectionChange} selectAll={selectAll} onSelectAllChange={onSelectAllChange}>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
                <Column field="name" header="Name" sortable filter filterPlaceholder="Search" />
                <Column field="country.name" sortable header="Country" filterField="country.name" body={countryBodyTemplate} filter filterPlaceholder="Search" />
                <Column field="company" sortable filter header="Company" filterPlaceholder="Search" />
                <Column field="representative.name" header="Representative" body={representativeBodyTemplate} filter filterPlaceholder="Search" />
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent, DataTableSelectAllChangeEvent,
    DataTablePageEvent, DataTableSortEvent, DataTableFilterEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

interface Country {
    name: string;
    code: string;
}

interface Representative {
    name: string;
    code: string;
}

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

interface LazyTableState {
    first: number;
    rows: number;
    page: number;
    sortField?: string;
    sortOrder?: number;
    filters: DataTableFilterMeta;
}

export default function LazyLoadDemo() {
    const [loading, setLoading] = useState<boolean>(false);
    const [totalRecords, setTotalRecords] = useState<number>(0);
    const [customers, setCustomers] = useState<Customer[] | null>(null);
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [selectedCustomers, setSelectedCustomers] = useState<Customer[] |\xa0null>(null);
    const [lazyState, setLazyState] = useState<LazyTableState>({
        first: 0,
        rows: 10,
        page: 1,
        sortField: null,
        sortOrder: null,
        filters: {
            name: { value: '', matchMode: 'contains' },
            'country.name': { value: '', matchMode: 'contains' },
            company: { value: '', matchMode: 'contains' },
            'representative.name': { value: '', matchMode: 'contains' }
        }
    });

    let networkTimeout = null;

    useEffect(() => {
        loadLazyData();
    }, [lazyState]);

    const loadLazyData = () => {
        setLoading(true);

        if (networkTimeout) {
            clearTimeout(networkTimeout);
        }

        //imitate delay of a backend call
        networkTimeout = setTimeout(() => {
            CustomerService.getCustomers({ lazyEvent: JSON.stringify(lazyState) }).then((data) => {
                setTotalRecords(data.totalRecords);
                setCustomers(data.customers);
                setLoading(false);
            });
        }, Math.random() * 1000 + 250);
    };

    const onPage = (event: DataTablePageEvent) => {
        setLazyState(event);
    };

    const onSort = (event: DataTableSortEvent) => {
        setLazyState(event);
    };

    const onFilter = (event: DataTableFilterEvent) => {
        event['first'] = 0;
        setLazyState(event);
    };

    const onSelectionChange = (event: DataTableSelectionChangeEvent) => {
        const value = event.value;

        setSelectedCustomers(value);
        setSelectAll(value.length === totalRecords);
    };

    const onSelectAllChange = (event: DataTableSelectAllChangeEvent) => {
        const selectAll = event.checked;

        if (selectAll) {
            CustomerService.getCustomers().then((data) => {
                setSelectAll(true);
                setSelectedCustomers(data.customers);
            });
        } else {
            setSelectAll(false);
            setSelectedCustomers([]);
        }
    };

    const representativeBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${rowData.representative.image}\`} width={32} />
                <span>{rowData.representative.name}</span>
            </div>
        );
    };

    const countryBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    return (
        <div className="card">
            <DataTable value={customers} lazy filterDisplay="row" dataKey="id" paginator
                    first={lazyState.first} rows={10} totalRecords={totalRecords} onPage={onPage}
                    onSort={onSort} sortField={lazyState.sortField} sortOrder={lazyState.sortOrder}
                    onFilter={onFilter} filters={lazyState.filters} loading={loading} tableStyle={{ minWidth: '75rem' }}
                    selection={selectedCustomers} onSelectionChange={onSelectionChange} selectAll={selectAll} onSelectAllChange={onSelectAllChange}>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }} />
                <Column field="name" header="Name" sortable filter filterPlaceholder="Search" />
                <Column field="country.name" sortable header="Country" filterField="country.name" body={countryBodyTemplate} filter filterPlaceholder="Search" />
                <Column field="company" sortable filter header="Company" filterPlaceholder="Search" />
                <Column field="representative.name" header="Representative" body={representativeBodyTemplate} filter filterPlaceholder="Search" />
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime ",(0,t.jsx)("i",{children:"paging"}),", ",(0,t.jsx)("i",{children:"sorting"})," and ",(0,t.jsx)("i",{children:"filtering"})," occurs. Sample below imitates lazy loading data from a remote datasource using an in-memory list and timeouts to mimic network connection."]}),(0,t.jsxs)("p",{children:["Enabling the ",(0,t.jsx)("i",{children:"lazy"})," property and assigning the logical number of rows to ",(0,t.jsx)("i",{children:"totalRecords"})," by doing a projection query are the key elements of the implementation so that paginator displays the UI assuming there are actually records of totalRecords size although in reality they are not present on page, only the records that are displayed on the current page exist."]}),(0,t.jsxs)("p",{children:["Note that, the implementation of ",(0,t.jsx)("i",{children:"checkbox selection"})," in lazy mode needs to be handled manually as in this example since the DataTable cannot know about the whole dataset."]})]}),(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:u,lazy:!0,filterDisplay:"row",dataKey:"id",paginator:!0,first:y.first,rows:10,totalRecords:l,onPage:e=>{v(e)},onSort:e=>{v(e)},sortField:y.sortField,sortOrder:y.sortOrder,onFilter:e=>{e.first=0,v(e)},filters:y.filters,loading:a,tableStyle:{minWidth:"75rem"},selection:f,onSelectionChange:e=>{let t=e.value;g(t),h(t.length===l)},selectAll:p,onSelectAllChange:e=>{e.checked?Q.CustomerService.getCustomers().then(e=>{h(!0),g(e.customers)}):(h(!1),g([]))},children:[(0,t.jsx)(s.Column,{selectionMode:"multiple",headerStyle:{width:"3rem"}}),(0,t.jsx)(s.Column,{field:"name",header:"Name",sortable:!0,filter:!0,filterPlaceholder:"Search"}),(0,t.jsx)(s.Column,{field:"country.name",sortable:!0,header:"Country",filterField:"country.name",body:e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:"flag",src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`flag flag-${e.country.code}`,style:{width:"24px"}}),(0,t.jsx)("span",{children:e.country.name})]}),filter:!0,filterPlaceholder:"Search"}),(0,t.jsx)(s.Column,{field:"company",sortable:!0,filter:!0,header:"Company",filterPlaceholder:"Search"}),(0,t.jsx)(s.Column,{field:"representative.name",header:"Representative",body:e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:e.representative.name,src:`https://primefaces.org/cdn/primereact/images/avatar/${e.representative.image}`,width:32}),(0,t.jsx)("span",{children:e.representative.name})]}),filter:!0,filterPlaceholder:"Search"})]})}),(0,t.jsx)(n.DocSectionCode,{code:S,service:["CustomerService"]})]})}function ea(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" style={{ width: '25%' }}></Column>
    <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
    <Column field="company" header="Company" style={{ width: '25%' }}></Column>
    <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

export default function PaginatorBasicDemo() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

interface Country {
    name: string;
    code: string;
}

interface Representative {
    name: string;
    code: string;
}

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

export default function PaginatorBasicDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Pagination is enabled by adding ",(0,t.jsx)("i",{children:"paginator"})," property and defining ",(0,t.jsx)("i",{children:"rows"})," per page."]})}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersMedium().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,paginator:!0,rows:5,rowsPerPageOptions:[5,10,25,50],tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"country.name",header:"Country",style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"company",header:"Company",style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"representative.name",header:"Representative",style:{width:"25%"}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["CustomerService"]})]})}function er(e){let[a,r]=(0,d.useState)([]),i=(0,t.jsx)(L.Button,{type:"button",icon:"pi pi-refresh",text:!0}),u=(0,t.jsx)(L.Button,{type:"button",icon:"pi pi-download",text:!0}),p={basic:`
<DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
    <Column field="name" header="Name" style={{ width: '25%' }}></Column>
    <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
    <Column field="company" header="Company" style={{ width: '25%' }}></Column>
    <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

export default function PaginatorTemplateDemo() {
    const [customers, setCustomers] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

interface Country {
    name: string;
    code: string;
}

interface Representative {
    name: string;
    code: string;
}

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

export default function PaginatorTemplateDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Paginator UI is customized using the ",(0,t.jsx)("i",{children:"paginatorTemplate"})," property. Each element can also be customized further with your own UI to replace the default one, refer to the ",(0,t.jsx)(l.default,{href:"/paginator",children:"Paginator"})," component for more information about the advanced customization options."]})}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersMedium().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,paginator:!0,rows:5,rowsPerPageOptions:[5,10,25,50],paginatorTemplate:"RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink",currentPageReportTemplate:"{first} to {last} of {totalRecords}",paginatorLeft:i,paginatorRight:u,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"country.name",header:"Country",style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"company",header:"Company",style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"representative.name",header:"Representative",style:{width:"25%"}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:p,service:["CustomerService"]})]})}e.i(27604).FilterService.register("custom_activity",(e,t)=>{let[a,r]=t??[null,null];return null===a&&null===r||(null!==a&&null===r?a<=e:null===a&&null!==r?e<=r:a<=e&&e<=r)});let eo=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"datatable"})})]});function el(e){let[a,r]=(0,d.useState)([]),l=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}].map((e,a)=>(0,t.jsx)(s.Column,{columnKey:e.field,field:e.field,header:e.header},e.field)),i={basic:`
<DataTable value={products} reorderableColumns reorderableRows onRowReorder={(e) => setProducts(e.value)} tableStyle={{ minWidth: '50rem' }}>
    <Column rowReorder style={{ width: '3rem' }} />
    {dynamicColumns}
</DataTable>
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function ReorderDemo() {
    const [products, setProducts] = useState([]);
    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const dynamicColumns = columns.map((col, i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div className="card">
            <DataTable value={products} reorderableColumns reorderableRows onRowReorder={(e) => setProducts(e.value)} tableStyle={{ minWidth: '50rem' }}>
                <Column rowReorder style={{ width: '3rem' }} />
                {dynamicColumns}
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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

interface ColumnMeta {
    field: string;
    header: string;
}

export default function ReorderDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const columns: ColumnMeta[] = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const dynamicColumns = columns.map((col, i) => {
        return <Column key={col.field} columnKey={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div className="card">
            <DataTable value={products} reorderableColumns reorderableRows onRowReorder={(e) => setProducts(e.value)} tableStyle={{ minWidth: '50rem' }}>
                <Column rowReorder style={{ width: '3rem' }} />
                {dynamicColumns}
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Order of the columns and rows can be changed using drag and drop. Column reordering is configured by adding ",(0,t.jsx)("i",{children:"reorderableColumns"})," property."]}),(0,t.jsxs)("p",{children:["Similarly, adding ",(0,t.jsx)("i",{children:"reorderableRows"})," property enables draggable rows. For the drag handle a column needs to have ",(0,t.jsx)("i",{children:"rowReorder"})," property and ",(0,t.jsx)("i",{children:"onRowReorder"})," callback is required to control the state of the rows after reorder completes."]})]}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,reorderableColumns:!0,reorderableRows:!0,onRowReorder:e=>r(e.value),tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{rowReorder:!0,style:{width:"3rem"}}),l]})})}),(0,t.jsx)(n.DocSectionCode,{code:i,service:["ProductService"]})]})}var ei=e.i(80140);function en(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)(null),p=(0,d.useRef)(null),h=e=>e.toLocaleString("en-US",{style:"currency",currency:"USD"}),f=e=>h(e.amount),y=e=>(0,t.jsx)(W.Tag,{value:e.status.toLowerCase(),severity:C(e)}),v=()=>(0,t.jsx)(L.Button,{icon:"pi pi-search"}),C=e=>{switch(e.status){case"DELIVERED":return"success";case"CANCELLED":return"danger";case"PENDING":return"warning";case"RETURNED":return"info";default:return null}},b=(0,t.jsxs)("div",{className:"flex flex-wrap justify-content-end gap-2",children:[(0,t.jsx)(L.Button,{icon:"pi pi-plus",label:"Expand All",onClick:()=>{let e={};a.forEach(t=>e[`${t.id}`]=!0),i(e)},text:!0}),(0,t.jsx)(L.Button,{icon:"pi pi-minus",label:"Collapse All",onClick:()=>{i(null)},text:!0})]}),S={basic:`
<DataTable value={products} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
        onRowExpand={onRowExpand} onRowCollapse={onRowCollapse} rowExpansionTemplate={rowExpansionTemplate}
        dataKey="id" header={header} tableStyle={{ minWidth: '60rem' }}>
    <Column expander={allowExpansion} style={{ width: '5rem' }} />
    <Column field="name" header="Name" sortable />
    <Column header="Image" body={imageBodyTemplate} />
    <Column field="price" header="Price" sortable body={priceBodyTemplate} />
    <Column field="category" header="Category" sortable />
    <Column field="rating" header="Reviews" sortable body={ratingBodyTemplate} />
    <Column field="inventoryStatus" header="Status" sortable body={statusBodyTemplate} />
</DataTable>
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';

export default function RowExpansionDemo() {
    const [products, setProducts] = useState([]);
    const [expandedRows, setExpandedRows] = useState(null);
    const toast = useRef(null);

    useEffect(() => {
        ProductService.getProductsWithOrdersSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onRowExpand = (event) => {
        toast.current.show({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
    };

    const onRowCollapse = (event) => {
        toast.current.show({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
    };

    const expandAll = () => {
        let _expandedRows = {};

        products.forEach((p) => (_expandedRows[\`\${p.id}\`] = true));

        setExpandedRows(_expandedRows);
    };

    const collapseAll = () => {
        setExpandedRows(null);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const amountBodyTemplate = (rowData) => {
        return formatCurrency(rowData.amount);
    };

    const statusOrderBodyTemplate = (rowData) => {
        return <Tag value={rowData.status.toLowerCase()} severity={getOrderSeverity(rowData)}></Tag>;
    };

    const searchBodyTemplate = () => {
        return <Button icon="pi pi-search" />;
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={\`https://primefaces.org/cdn/primereact/images/product/\${rowData.image}\`} alt={rowData.image} width="64px" className="shadow-4" />;
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getProductSeverity(rowData)}></Tag>;
    };

    const getProductSeverity = (product) => {
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

    const getOrderSeverity = (order) => {
        switch (order.status) {
            case 'DELIVERED':
                return 'success';

            case 'CANCELLED':
                return 'danger';

            case 'PENDING':
                return 'warning';

            case 'RETURNED':
                return 'info';

            default:
                return null;
        }
    };

    const allowExpansion = (rowData) => {
        return rowData.orders.length > 0;
    };

    const rowExpansionTemplate = (data) => {
        return (
            <div className="p-3">
                <h5>Orders for {data.name}</h5>
                <DataTable value={data.orders}>
                    <Column field="id" header="Id" sortable></Column>
                    <Column field="customer" header="Customer" sortable></Column>
                    <Column field="date" header="Date" sortable></Column>
                    <Column field="amount" header="Amount" body={amountBodyTemplate} sortable></Column>
                    <Column field="status" header="Status" body={statusOrderBodyTemplate} sortable></Column>
                    <Column headerStyle={{ width: '4rem' }} body={searchBodyTemplate}></Column>
                </DataTable>
            </div>
        );
    };

    const header = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} text />
            <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} text />
        </div>
    );

    return (
        <div className="card">
            <Toast ref={toast} />
            <DataTable value={products} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    onRowExpand={onRowExpand} onRowCollapse={onRowCollapse} rowExpansionTemplate={rowExpansionTemplate}
                    dataKey="id" header={header} tableStyle={{ minWidth: '60rem' }}>
                <Column expander={allowExpansion} style={{ width: '5rem' }} />
                <Column field="name" header="Name" sortable />
                <Column header="Image" body={imageBodyTemplate} />
                <Column field="price" header="Price" sortable body={priceBodyTemplate} />
                <Column field="category" header="Category" sortable />
                <Column field="rating" header="Reviews" sortable body={ratingBodyTemplate} />
                <Column field="inventoryStatus" header="Status" sortable body={statusBodyTemplate} />
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { DataTable, DataTableExpandedRows, DataTableRowEvent, DataTableValueArray } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Toast } from 'primereact/toast';

interface Order {
    id: string;
    productCode: string;
    date: string;
    amount: number,
    quantity: number,
    customer: string;
    status: string;
}

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
    orders?: Order[];
}

export default function RowExpansionDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray | undefined>(undefined);
    const toast = useRef<Toast>(null);

    useEffect(() => {
        ProductService.getProductsWithOrdersSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onRowExpand = (event: DataTableRowEvent) => {
        toast.current?.show({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
    };

    const onRowCollapse = (event: DataTableRowEvent) => {
        toast.current?.show({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
    };

    const expandAll = () => {
        let _expandedRows: DataTableExpandedRows = {};

        products.forEach((p) => (_expandedRows[\`\${p.id}\`] = true));

        setExpandedRows(_expandedRows);
    };

    const collapseAll = () => {
        setExpandedRows(undefined);
    };

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const amountBodyTemplate = (rowData: Order) => {
        return formatCurrency(rowData.amount);
    };

    const statusOrderBodyTemplate = (rowData: Order) => {
        return <Tag value={rowData.status.toLowerCase()} severity={getOrderSeverity(rowData)}></Tag>;
    };

    const searchBodyTemplate = () => {
        return <Button icon="pi pi-search" />;
    };

    const imageBodyTemplate = (rowData: Product) => {
        return <img src={\`https://primefaces.org/cdn/primereact/images/product/\${rowData.image}\`} alt={rowData.image} width="64px" className="shadow-4" />;
    };

    const priceBodyTemplate = (rowData: Product) => {
        return formatCurrency(rowData.price);
    };

    const ratingBodyTemplate = (rowData: Product) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (rowData: Product) => {
        return <Tag value={rowData.inventoryStatus} severity={getProductSeverity(rowData)}></Tag>;
    };

    const getProductSeverity = (product: Product) => {
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

    const getOrderSeverity = (order: Order) => {
        switch (order.status) {
            case 'DELIVERED':
                return 'success';

            case 'CANCELLED':
                return 'danger';

            case 'PENDING':
                return 'warning';

            case 'RETURNED':
                return 'info';

            default:
                return null;
        }
    };

    const allowExpansion = (rowData: Product) => {
        return rowData.orders!.length > 0;
    };

    const rowExpansionTemplate = (data: Product) => {
        return (
            <div className="p-3">
                <h5>Orders for {data.name}</h5>
                <DataTable value={data.orders}>
                    <Column field="id" header="Id" sortable></Column>
                    <Column field="customer" header="Customer" sortable></Column>
                    <Column field="date" header="Date" sortable></Column>
                    <Column field="amount" header="Amount" body={amountBodyTemplate} sortable></Column>
                    <Column field="status" header="Status" body={statusOrderBodyTemplate} sortable></Column>
                    <Column headerStyle={{ width: '4rem' }} body={searchBodyTemplate}></Column>
                </DataTable>
            </div>
        );
    };

    const header = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} text />
            <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} text />
        </div>
    );

    return (
        <div className="card">
            <Toast ref={toast} />
            <DataTable value={products} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    onRowExpand={onRowExpand} onRowCollapse={onRowCollapse} rowExpansionTemplate={rowExpansionTemplate}
                    dataKey="id" header={header} tableStyle={{ minWidth: '60rem' }}>
                <Column expander={allowExpansion} style={{ width: '5rem' }} />
                <Column field="name" header="Name" sortable />
                <Column header="Image" body={imageBodyTemplate} />
                <Column field="price" header="Price" sortable body={priceBodyTemplate} />
                <Column field="category" header="Category" sortable />
                <Column field="rating" header="Reviews" sortable body={ratingBodyTemplate} />
                <Column field="inventoryStatus" header="Status" sortable body={statusBodyTemplate} />
            </DataTable>
        </div>
    );
}
        `,data:`
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
                `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Row expansion is controlled with ",(0,t.jsx)("i",{children:"expandedRows"})," and ",(0,t.jsx)("i",{children:"onRowToggle"})," properties. The column that has the expander element requires ",(0,t.jsx)("i",{children:"expander"})," property to be enabled. Optional ",(0,t.jsx)("i",{children:"onRowExpand"})," and ",(0,t.jsx)("i",{children:"onRowCollapse"})," ","events are available as callbacks."]}),(0,t.jsxs)("p",{children:["Expanded rows can either be an array of row data or when ",(0,t.jsx)("i",{children:"dataKey"})," is present, an object whose keys are strings referring to the identifier of the row data and values are booleans to represent the expansion state e.g."," ",(0,t.jsx)("i",{children:"{'1004': true}"}),". The ",(0,t.jsx)("i",{children:"dataKey"})," alternative is more performant for large amounts of data."]})]}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsWithOrdersSmall().then(e=>r(e))},children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(g.Toast,{ref:p}),(0,t.jsxs)(c.DataTable,{value:a,expandedRows:l,onRowToggle:e=>i(e.data),onRowExpand:e=>{p.current.show({severity:"info",summary:"Product Expanded",detail:e.data.name,life:3e3})},onRowCollapse:e=>{p.current.show({severity:"success",summary:"Product Collapsed",detail:e.data.name,life:3e3})},rowExpansionTemplate:e=>(0,t.jsxs)("div",{className:"p-3",children:[(0,t.jsxs)("h5",{children:["Orders for ",e.name]}),(0,t.jsxs)(c.DataTable,{value:e.orders,children:[(0,t.jsx)(s.Column,{field:"id",header:"Id",sortable:!0}),(0,t.jsx)(s.Column,{field:"customer",header:"Customer",sortable:!0}),(0,t.jsx)(s.Column,{field:"date",header:"Date",sortable:!0}),(0,t.jsx)(s.Column,{field:"amount",header:"Amount",body:f,sortable:!0}),(0,t.jsx)(s.Column,{field:"status",header:"Status",body:y,sortable:!0}),(0,t.jsx)(s.Column,{headerStyle:{width:"4rem"},body:v})]})]}),dataKey:"id",header:b,tableStyle:{minWidth:"60rem"},children:[(0,t.jsx)(s.Column,{expander:e=>e.orders?.length>0,style:{width:"5rem"}}),(0,t.jsx)(s.Column,{field:"name",header:"Name",sortable:!0}),(0,t.jsx)(s.Column,{header:"Image",body:e=>(0,t.jsx)("img",{src:`https://primefaces.org/cdn/primereact/images/product/${e.image}`,alt:e.image,width:"64px",className:"shadow-4"})}),(0,t.jsx)(s.Column,{field:"price",header:"Price",sortable:!0,body:e=>h(e.price)}),(0,t.jsx)(s.Column,{field:"category",header:"Category",sortable:!0}),(0,t.jsx)(s.Column,{field:"rating",header:"Reviews",sortable:!0,body:e=>(0,t.jsx)(ei.Rating,{value:e.rating,readOnly:!0,cancel:!1})}),(0,t.jsx)(s.Column,{field:"inventoryStatus",header:"Status",sortable:!0,body:e=>(0,t.jsx)(W.Tag,{value:e.inventoryStatus,severity:(e=>{switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}})(e)})})]})]})}),(0,t.jsx)(n.DocSectionCode,{code:S,service:["ProductService"]})]})}function es(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)([]),u={basic:`
<DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
    sortMode="single" sortField="representative.name" sortOrder={1}
    expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" style={{ width: '20%' }}></Column>
    <Column field="country" header="Country" body={countryBodyTemplate} style={{ width: '20%' }}></Column>
    <Column field="company" header="Company" style={{ width: '20%' }}></Column>
    <Column field="status" header="Status" body={statusBodyTemplate} style={{ width: '20%' }}></Column>
    <Column field="date" header="Date" style={{ width: '20%' }}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { CustomerService } from './service/CustomerService';

export default function ExpandableRowGroupDemo() {
    const [customers, setCustomers] = useState([]);
    const [expandedRows, setExpandedRows] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data) => {
        return (
            <React.Fragment>
                <img alt={data.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${data.representative.image}\`} width="32" style={{ verticalAlign: 'middle' }} className="ml-2" />
                <span className="vertical-align-middle ml-2 font-bold line-height-3">{data.representative.name}</span>
            </React.Fragment>
        );
    };

    const footerTemplate = (data) => {
        return (
            <React.Fragment>
                <td colSpan={5}>
                    <div className="flex justify-content-end font-bold w-full">Total Customers: {calculateCustomerTotal(data.representative.name)}</div>
                </td>
            </React.Fragment>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.country.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const calculateCustomerTotal = (name) => {
        let total = 0;

        if (customers) {
            for (let customer of customers) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    };

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    return (
        <div className="card">
            <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1}
                    expandableRowGroups expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ width: '20%' }}></Column>
                <Column field="country" header="Country" body={countryBodyTemplate} style={{ width: '20%' }}></Column>
                <Column field="company" header="Company" style={{ width: '20%' }}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} style={{ width: '20%' }}></Column>
                <Column field="date" header="Date" style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { DataTable, DataTableRowToggleEvent, DataTableExpandedRows } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { CustomerService } from './service/CustomerService';

interface Country {
    name: string;
    code: string;
}

interface Representative {
    name: string;
    image: string;
}

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

export default function ExpandableRowGroupDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | Customer[]>([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data: Customer) => {
        return (
            <React.Fragment>
                <img alt={data.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${data.representative.image}\`} width="32" style={{ verticalAlign: 'middle' }} className="ml-2" />
                <span className="vertical-align-middle ml-2 font-bold line-height-3">{data.representative.name}</span>
            </React.Fragment>
        );
    };

    const footerTemplate = (data: Customer) => {
        return (
            <React.Fragment>
                <td colSpan={5}>
                    <div className="flex justify-content-end font-bold w-full">Total Customers: {calculateCustomerTotal(data.representative.name)}</div>
                </td>
            </React.Fragment>
        );
    };

    const countryBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.country.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData: Customer) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const calculateCustomerTotal = (name: string) => {
        let total = 0;

        if (customers) {
            for (let customer of customers) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    };

    const getSeverity = (status: string) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    return (
        <div className="card">
            <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1}
                    expandableRowGroups expandedRows={expandedRows} onRowToggle={(e: DataTableRowToggleEvent) => setExpandedRows(e.data)}
                    rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ width: '20%' }}></Column>
                <Column field="country" header="Country" body={countryBodyTemplate} style={{ width: '20%' }}></Column>
                <Column field="company" header="Company" style={{ width: '20%' }}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} style={{ width: '20%' }}></Column>
                <Column field="date" header="Date" style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    );
        }
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"expandableRowGroups"})," is present in subheader based row grouping, groups can be expanded and collapsed. State of the expansions are controlled using the ",(0,t.jsx)("i",{children:"expandedRows"})," and ",(0,t.jsx)("i",{children:"onRowToggle"})," properties."]})}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersMedium().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,rowGroupMode:"subheader",groupRowsBy:"representative.name",sortMode:"single",sortField:"representative.name",sortOrder:1,expandableRowGroups:!0,expandedRows:l,onRowToggle:e=>i(e.data),rowGroupHeaderTemplate:e=>(0,t.jsxs)(d.default.Fragment,{children:[(0,t.jsx)("img",{alt:e.representative.name,src:`https://primefaces.org/cdn/primereact/images/avatar/${e.representative.image}`,width:"32",style:{verticalAlign:"middle"},className:"ml-2"}),(0,t.jsx)("span",{className:"vertical-align-middle ml-2 font-bold line-height-3",children:e.representative.name})]}),rowGroupFooterTemplate:e=>(0,t.jsx)(d.default.Fragment,{children:(0,t.jsx)("td",{colSpan:5,children:(0,t.jsxs)("div",{className:"flex justify-content-end font-bold w-full",children:["Total Customers: ",(e=>{let t=0;if(a)for(let r of a)r.representative.name===e&&t++;return t})(e.representative.name)]})})}),tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"country",header:"Country",body:e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:e.country.name,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`flag flag-${e.country.code}`,style:{width:"24px"}}),(0,t.jsx)("span",{children:e.country.name})]}),style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"company",header:"Company",style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"status",header:"Status",body:e=>(0,t.jsx)(W.Tag,{value:e.status,severity:(e=>{switch(e){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}})(e.status)}),style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"date",header:"Date",style:{width:"20%"}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:u,service:["CustomerService"]})]})}function ec(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.name"
        sortMode="single" sortField="representative.name" sortOrder={1} tableStyle={{ minWidth: '50rem' }}>
    <Column header="#" headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex + 1}></Column>
    <Column field="representative.name" header="Representative" body={representativeBodyTemplate} style={{ minWidth: '200px' }}></Column>
    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
    <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '150px' }}></Column>
    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
    <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '100px' }}></Column>
    <Column field="date" header="Date" style={{ minWidth: '100px' }}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { CustomerService } from './service/CustomerService';

export default function RowSpanGroupingDemo() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.country.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const representativeBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${rowData.representative.image}\`} width="32" />
                <span className="font-bold">{rowData.representative.name}</span>
            </div>
        );
    };

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    return (
        <div className="card">
            <DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} tableStyle={{ minWidth: '50rem' }}>
                <Column header="#" headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex + 1}></Column>
                <Column field="representative.name" header="Representative" body={representativeBodyTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '150px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '100px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '100px' }}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { CustomerService } from './service/CustomerService';

interface Country {
    name: string;
    code: string;
}

interface Representative {
    name: string;
    code: string;
}

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

export default function RowSpanGroupingDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const countryBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.country.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData: Customer) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const representativeBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${rowData.representative.image}\`} width="32" />
                <span className="font-bold">{rowData.representative.name}</span>
            </div>
        );
    };

    const getSeverity = (status: string) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    return (
        <div className="card">
            <DataTable value={customers} rowGroupMode="rowspan" groupRowsBy="representative.name"
                    sortMode="single" sortField="representative.name" sortOrder={1} tableStyle={{ minWidth: '50rem' }}>
                <Column header="#" headerStyle={{ width: '3rem' }} body={(data, options) => options.rowIndex + 1}></Column>
                <Column field="representative.name" header="Representative" body={representativeBodyTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '150px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '100px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '100px' }}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"rowGroupMode"})," is configured to be ",(0,t.jsx)("i",{children:"rowspan"}),", the grouping column spans multiple rows."]})}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersMedium().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,rowGroupMode:"rowspan",groupRowsBy:"representative.name",sortMode:"single",sortField:"representative.name",sortOrder:1,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{header:"#",headerStyle:{width:"3rem"},body:(e,t)=>t.rowIndex+1}),(0,t.jsx)(s.Column,{field:"representative.name",header:"Representative",body:e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:e.representative.name,src:`https://primefaces.org/cdn/primereact/images/avatar/${e.representative.image}`,width:"32"}),(0,t.jsx)("span",{className:"font-bold",children:e.representative.name})]}),style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"name",header:"Name",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"country",header:"Country",body:e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:e.country.name,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`flag flag-${e.country.code}`,style:{width:"24px"}}),(0,t.jsx)("span",{children:e.country.name})]}),style:{minWidth:"150px"}}),(0,t.jsx)(s.Column,{field:"company",header:"Company",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"status",header:"Status",body:e=>(0,t.jsx)(W.Tag,{value:e.status,severity:(e=>{switch(e){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}})(e.status)}),style:{minWidth:"100px"}}),(0,t.jsx)(s.Column,{field:"date",header:"Date",style:{minWidth:"100px"}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["CustomerService"]})]})}function ed(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single" sortField="representative.name"
        sortOrder={1} scrollable scrollHeight="400px" rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
    <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '200px' }}></Column>
    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
    <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '200px' }}></Column>
    <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { CustomerService } from './service/CustomerService';

export default function SubHeaderRowGroupDemo() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={data.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${data.representative.image}\`} width="32" />
                <span className="font-bold">{data.representative.name}</span>
            </div>
        );
    };

    const footerTemplate = (data) => {
        return (
            <React.Fragment>
                <td colSpan="5">
                    <div className="flex justify-content-end font-bold w-full">Total Customers: {calculateCustomerTotal(data.representative.name)}</div>
                </td>
            </React.Fragment>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.country.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const calculateCustomerTotal = (name) => {
        let total = 0;

        if (customers) {
            for (let customer of customers) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    };

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    return (
        <div className="card">
            <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single" sortField="representative.name"
                    sortOrder={1} scrollable scrollHeight="400px" rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { CustomerService } from './service/CustomerService';

interface Country {
    name: string;
    code: string;
}

interface Representative {
    name: string;
    code: string;
}

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

export default function SubHeaderRowGroupDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const headerTemplate = (data: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={data.representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${data.representative.image}\`} width="32" />
                <span className="font-bold">{data.representative.name}</span>
            </div>
        );
    };

    const footerTemplate = (data: Customer) => {
        return (
            <React.Fragment>
                <td colSpan="5">
                    <div className="flex justify-content-end font-bold w-full">Total Customers: {calculateCustomerTotal(data.representative.name)}</div>
                </td>
            </React.Fragment>
        );
    };

    const countryBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.country.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData: Customer) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const calculateCustomerTotal = (name: string) => {
        let total = 0;

        if (customers) {
            for (let customer of customers) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    };

    const getSeverity = (status: string) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    return (
        <div className="card">
            <DataTable value={customers} rowGroupMode="subheader" groupRowsBy="representative.name" sortMode="single" sortField="representative.name"
                    sortOrder={1} scrollable scrollHeight="400px" rowGroupHeaderTemplate={headerTemplate} rowGroupFooterTemplate={footerTemplate} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country" header="Country" body={countryBodyTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Rows are grouped with the ",(0,t.jsx)("i",{children:"groupRowsBy"})," property. When ",(0,t.jsx)("i",{children:"rowGroupMode"})," is set as ",(0,t.jsx)("i",{children:"subheader"}),", a header and footer can be displayed for each group. The content of a group header is provided with"," ",(0,t.jsx)("i",{children:"rowGroupHeaderTemplate"})," and footer with ",(0,t.jsx)("i",{children:"rowGroupFooterTemplate"}),"."]})}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersMedium().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,rowGroupMode:"subheader",groupRowsBy:"representative.name",sortMode:"single",sortField:"representative.name",sortOrder:1,scrollable:!0,scrollHeight:"400px",rowGroupHeaderTemplate:e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:e.representative.name,src:`https://primefaces.org/cdn/primereact/images/avatar/${e.representative.image}`,width:"32"}),(0,t.jsx)("span",{className:"font-bold",children:e.representative.name})]}),rowGroupFooterTemplate:e=>(0,t.jsx)(d.default.Fragment,{children:(0,t.jsx)("td",{colSpan:"5",children:(0,t.jsxs)("div",{className:"flex justify-content-end font-bold w-full",children:["Total Customers: ",(e=>{let t=0;if(a)for(let r of a)r.representative.name===e&&t++;return t})(e.representative.name)]})})}),tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"country",header:"Country",body:e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:e.country.name,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`flag flag-${e.country.code}`,style:{width:"24px"}}),(0,t.jsx)("span",{children:e.country.name})]}),style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"company",header:"Company",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"status",header:"Status",body:e=>(0,t.jsx)(W.Tag,{value:e.status,severity:(e=>{switch(e){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}})(e.status)}),style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"date",header:"Date",style:{minWidth:"200px"}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["CustomerService"]})]})}function eu(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)(null),[p,f]=(0,d.useState)(!0),g={basic:`
<InputSwitch checked={rowClick} onChange={(e) => setRowClick(e.value)} />

<DataTable value={products} selectionMode={rowClick ? null : 'checkbox'} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

export default function CheckboxRowSelectionDemo() {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [rowClick, setRowClick] = useState(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-rowclick" checked={rowClick} onChange={(e) => setRowClick(e.value)} />
                <label htmlFor="input-rowclick">Row Click</label>
            </div>
            <DataTable value={products} selectionMode={rowClick ? null : 'checkbox'} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;
}

export default function CheckboxRowSelectionDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[] | null>(null);
    const [rowClick, setRowClick] = useState<boolean>(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-rowclick" checked={rowClick} onChange={(e: InputSwitchChangeEvent) => setRowClick(e.value!)} />
                <label htmlFor="input-rowclick">Row Click</label>
            </div>
            <DataTable value={products} selectionMode={rowClick ? undefined : 'multiple'} selection={selectedProducts!}
                        onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Specifying ",(0,t.jsx)("i",{children:"selectionMode"})," as ",(0,t.jsx)("i",{children:"multiple"})," on a Column, displays a checkbox inside that column for selection. By default, row clicks also trigger selection, set ",(0,t.jsx)("i",{children:"selectionMode"}),"of DataTable to ",(0,t.jsx)("i",{children:"checkbox"})," to only trigger selection using the checkboxes."]}),(0,t.jsxs)("p",{children:["The header checkbox toggles the selection state of the whole dataset by default, when paginator is enabled you may add ",(0,t.jsx)("i",{children:"selectionPageOnly"})," to only control the selection of visible rows."]})]}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"flex justify-content-center align-items-center mb-4 gap-2",children:[(0,t.jsx)(h.InputSwitch,{inputId:"input-rowclick",checked:p,onChange:e=>f(e.value)}),(0,t.jsx)("label",{htmlFor:"input-rowclick",children:"Row Click"})]}),(0,t.jsxs)(c.DataTable,{value:a,selectionMode:p?null:"checkbox",selection:l,onSelectionChange:e=>i(e.value),dataKey:"id",tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{selectionMode:"multiple",headerStyle:{width:"3rem"}}),(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})]})}),(0,t.jsx)(n.DocSectionCode,{code:g,service:["ProductService"]})]})}function em(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)(null),p={basic:`
<DataTable value={products} selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id"
        isDataSelectable={isRowSelectable} rowClassName={rowClassName} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function DisabledRowSelectionDemo() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const isSelectable = (data) => data.quantity >= 10;

    const isRowSelectable = (event) => (event.data ? isSelectable(event.data) : true);

    const rowClassName = (data) => (isSelectable(data) ? '' : 'p-disabled');

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id"
                    isDataSelectable={isRowSelectable} rowClassName={rowClassName} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent, DataTableDataSelectableEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;
}

export default function DisabledRowSelectionDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const isSelectable = (data: Product) => data.quantity >= 10;

    const isRowSelectable = (event: DataTableDataSelectableEvent) => (event.data ? isSelectable(event.data) : true);

    const rowClassName = (data: Product) => (isSelectable(data) ? '' : 'p-disabled');

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} selectionMode="single" selection={selectedProduct!}
                    onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" isDataSelectable={isRowSelectable} rowClassName={rowClassName} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Certain rows can be excluded from selection if ",(0,t.jsx)("i",{children:"isDataSelectable"})," returns false."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,selectionMode:"single",selection:l,onSelectionChange:e=>i(e.value),dataKey:"id",isDataSelectable:e=>!e.data||e.data.quantity>=10,rowClassName:e=>e.quantity>=10?"":"p-disabled",tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})})}),(0,t.jsx)(n.DocSectionCode,{code:p,service:["ProductService"]})]})}function ep(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)(null),p=(0,d.useRef)(null),h={basic:`
<DataTable value={products} selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id"
        onRowSelect={onRowSelect} onRowUnselect={onRowUnselect} metaKeySelection={false} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useRef, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { ProductService } from './service/ProductService';

export default function RowSelectEventsDemo() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const toast = useRef(null);

    const onRowSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: \`Name: \${event.data.name}\`, life: 3000 });
    };

    const onRowUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Product Unselected', detail: \`Name: \${event.data.name}\`, life: 3000 });
    };

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <Toast ref={toast} />
            <DataTable value={products} selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id"
                    onRowSelect={onRowSelect} onRowUnselect={onRowUnselect} metaKeySelection={false} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useRef, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent, DataTableSelectEvent, DataTableUnselectEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { ProductService } from './service/ProductService';

interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;
}

export default function RowSelectEventsDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const toast = useRef<Toast>(null);

    const onRowSelect = (event: DataTableSelectEvent) => {
        toast.current?.show({ severity: 'info', summary: 'Product Selected', detail: \`Name: \${event.data.name}\`, life: 3000 });
    };

    const onRowUnselect = (event: DataTableUnselectEvent) => {
        toast.current?.show({ severity: 'warn', summary: 'Product Unselected', detail: \`Name: \${event.data.name}\`, life: 3000 });
    };

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <Toast ref={toast} />
            <DataTable value={products} selectionMode="single" selection={selectedProduct!} 
                        onSelectionChange={(e) => setSelectedProduct(e.value)}  dataKey="id" onRowSelect={onRowSelect} onRowUnselect={onRowUnselect} metaKeySelection={false} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["DataTable provides ",(0,t.jsx)("i",{children:"onRowSelect"})," and ",(0,t.jsx)("i",{children:"onRowUnselect"})," events to listen selection events."]})}),(0,t.jsx)(g.Toast,{ref:p}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,selectionMode:"single",selection:l,onSelectionChange:e=>i(e.value),dataKey:"id",onRowSelect:e=>{p.current.show({severity:"info",summary:"Product Selected",detail:`Name: ${e.data.name}`,life:3e3})},onRowUnselect:e=>{p.current.show({severity:"warn",summary:"Product Unselected",detail:`Name: ${e.data.name}`,life:3e3})},metaKeySelection:!1,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})})}),(0,t.jsx)(n.DocSectionCode,{code:h,service:["ProductService"]})]})}function eh(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)([]),[p,f]=(0,d.useState)(!0),g={basic:`
<InputSwitch checked={metaKey} onChange={(e) => setMetaKey(e.value)} />

<DataTable value={products} selectionMode="multiple" selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
        dataKey="id" metaKeySelection={metaKey} dragSelection tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

export default function MultipleRowsSelectionDemo() {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [metaKey, setMetaKey] = useState(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <DataTable value={products} selectionMode="multiple" selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id" metaKeySelection={metaKey} dragSelection tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;
}

export default function MultipleRowsSelectionDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [metaKey, setMetaKey] = useState<boolean>(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e: InputSwitchChangeEvent) => setMetaKey(e.value!)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <DataTable value={products} selectionMode="multiple" selection={selectedProducts} 
                    onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id" metaKeySelection={metaKey} dragSelection tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["More than one row is selectable by setting ",(0,t.jsx)("i",{children:"selectionMode"})," to ",(0,t.jsx)("i",{children:"multiple"}),". By default in multiple selection mode, metaKey press (e.g. ",(0,t.jsx)("i",{children:"⌘"}),") is necessary to add to existing selections however this can be configured with disabling the ",(0,t.jsx)("i",{children:"metaKeySelection"})," property. Note that in touch enabled devices, DataTable always ignores metaKey."]}),(0,t.jsxs)("p",{children:["Additionaly, multiple rows can be selected using drag when ",(0,t.jsx)("i",{children:"dragSelection"})," is present."]})]}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"flex justify-content-center align-items-center mb-4 gap-2",children:[(0,t.jsx)(h.InputSwitch,{inputId:"input-metakey",checked:p,onChange:e=>f(e.value)}),(0,t.jsx)("label",{htmlFor:"input-metakey",children:"MetaKey"})]}),(0,t.jsxs)(c.DataTable,{value:a,selectionMode:"multiple",selection:l,onSelectionChange:e=>i(e.value),dataKey:"id",metaKeySelection:p,dragSelection:!0,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})]})}),(0,t.jsx)(n.DocSectionCode,{code:g,service:["ProductService"]})]})}function ef(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)(null),[p,f]=(0,d.useState)(!0),g={basic:`
<InputSwitch checked={rowClick} onChange={(e) => setRowClick(e.value)} />

<DataTable value={products} selectionMode={rowClick ? null : 'radiobutton'} selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
    <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

export default function RadioButtonRowSelectionDemo() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [rowClick, setRowClick] = useState(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-rowclick" checked={rowClick} onChange={(e) => setRowClick(e.value)} />
                <label htmlFor="input-rowclick">Row Click</label>
            </div>
            <DataTable value={products} selectionMode={rowClick ? null : 'radiobutton'} selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;
}

export default function RadioButtonRowSelectionDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [rowClick, setRowClick] = useState<boolean>(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-rowclick" checked={rowClick} onChange={(e: InputSwitchChangeEvent) => setRowClick(e.value!)} />
                <label htmlFor="input-rowclick">Row Click</label>
            </div>
            <DataTable value={products} selectionMode={rowClick ? undefined : 'radiobutton'} selection={selectedProduct!}
                onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Specifying ",(0,t.jsx)("i",{children:"selectionMode"})," as ",(0,t.jsx)("i",{children:"single"})," on a Column, displays a radio button inside that column for selection. By default, row clicks also trigger selection, set ",(0,t.jsx)("i",{children:"selectionMode"}),"of DataTable to ",(0,t.jsx)("i",{children:"radiobutton"})," to only trigger selection using the radio buttons."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"flex justify-content-center align-items-center mb-4 gap-2",children:[(0,t.jsx)(h.InputSwitch,{inputId:"input-rowclick",checked:p,onChange:e=>f(e.value)}),(0,t.jsx)("label",{htmlFor:"input-rowclick",children:"Row Click"})]}),(0,t.jsxs)(c.DataTable,{value:a,selectionMode:p?null:"radiobutton",selection:l,onSelectionChange:e=>i(e.value),dataKey:"id",tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{selectionMode:"single",headerStyle:{width:"3rem"}}),(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})]})}),(0,t.jsx)(n.DocSectionCode,{code:g,service:["ProductService"]})]})}function eg(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)(null),[p,f]=(0,d.useState)(!0),g={basic:`
<InputSwitch checked={metaKey} onChange={(e) => setMetaKey(e.value)} />

<DataTable value={products} selectionMode="single" selection={selectedProduct}
        onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

export default function SingleRowSelectionDemo() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [metaKey, setMetaKey] = useState(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <DataTable value={products} selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;
}

export default function SingleRowSelectionDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [metaKey, setMetaKey] = useState<boolean>(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e: InputSwitchChangeEvent) => setMetaKey(e.value!)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <DataTable value={products} selectionMode="single" selection={selectedProduct!} 
                onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Single row selection is enabled by defining ",(0,t.jsx)("i",{children:"selectionMode"})," as ",(0,t.jsx)("i",{children:"single"})," along with a value binding using ",(0,t.jsx)("i",{children:"selection"})," and ",(0,t.jsx)("i",{children:"onSelectionChange"})," properties. When available, it is suggested to provide a unique identifier of a row with ",(0,t.jsx)("i",{children:"dataKey"})," to optimize performance."]}),(0,t.jsxs)("p",{children:["By default, metaKey press (e.g. ",(0,t.jsx)("i",{children:"⌘"}),") is necessary to unselect a row however this can be configured with disabling the ",(0,t.jsx)("i",{children:"metaKeySelection"})," property. In touch enabled devices this option has no effect and behavior is same as setting it to false."]})]}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"flex justify-content-center align-items-center mb-4 gap-2",children:[(0,t.jsx)(h.InputSwitch,{inputId:"input-metakey",checked:p,onChange:e=>f(e.value)}),(0,t.jsx)("label",{htmlFor:"input-metakey",children:"MetaKey"})]}),(0,t.jsxs)(c.DataTable,{value:a,selectionMode:"single",selection:l,onSelectionChange:e=>i(e.value),dataKey:"id",metaKeySelection:p,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})]})}),(0,t.jsx)(n.DocSectionCode,{code:g,service:["ProductService"]})]})}var ey=e.i(14768);let ev=e=>{let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)([]),[u,p]=(0,d.useState)({global:{value:null,matchMode:q.FilterMatchMode.CONTAINS},name:{operator:K.FilterOperator.AND,constraints:[{value:null,matchMode:q.FilterMatchMode.STARTS_WITH}]},"country.name":{operator:K.FilterOperator.AND,constraints:[{value:null,matchMode:q.FilterMatchMode.STARTS_WITH}]},representative:{value:null,matchMode:q.FilterMatchMode.IN},date:{operator:K.FilterOperator.AND,constraints:[{value:null,matchMode:q.FilterMatchMode.DATE_IS}]},balance:{operator:K.FilterOperator.AND,constraints:[{value:null,matchMode:q.FilterMatchMode.EQUALS}]},status:{operator:K.FilterOperator.OR,constraints:[{value:null,matchMode:q.FilterMatchMode.EQUALS}]},activity:{value:null,matchMode:q.FilterMatchMode.BETWEEN}}),[h,f]=(0,d.useState)(""),g=(0,ey.useDebounce)(h,300),[y]=(0,d.useState)([{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}]),[v]=(0,d.useState)(["unqualified","qualified","new","negotiation","renewal"]);(0,d.useEffect)(()=>{p(e=>({...e,global:{...e.global,value:g}}))},[g]);let C=e=>{switch(e){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}},b=e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:e.name,src:`https://primefaces.org/cdn/primereact/images/avatar/${e.image}`,width:"32"}),(0,t.jsx)("span",{children:e.name})]}),S=e=>(0,t.jsx)(W.Tag,{value:e,severity:C(e)}),x=(0,t.jsxs)("div",{className:"flex flex-wrap gap-2 justify-content-between align-items-center",children:[(0,t.jsx)("h4",{className:"m-0",children:"Customers"}),(0,t.jsxs)(Y.IconField,{iconPosition:"left",children:[(0,t.jsx)(U.InputIcon,{className:"pi pi-search"}),(0,t.jsx)(B.InputText,{value:h,onChange:e=>{f(e.target.value)},placeholder:"Keyword Search"})]})]}),w={basic:`
<DataTable value={customers} paginator header={header} rows={10}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        rowsPerPageOptions={[10, 25, 50]} dataKey="id" selectionMode="checkbox" selection={selectedCustomers} onSelectionChange={(e) => setSelectedCustomers(e.value)}
        filters={filters} filterDisplay="menu" globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']}
        emptyMessage="No customers found." currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
    <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
    <Column field="country.name" header="Country" sortable filterField="country.name" style={{ minWidth: '14rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
    <Column header="Agent" sortable sortField="representative.name" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }}
        style={{ minWidth: '14rem' }} body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
    <Column field="date" header="Date" sortable filterField="date" dataType="date" style={{ minWidth: '12rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
    <Column field="balance" header="Balance" sortable dataType="numeric" style={{ minWidth: '12rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
    <Column field="status" header="Status" sortable filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
    <Column field="activity" header="Activity" sortable showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
    <Column headerStyle={{ width: '5rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} />
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { Tag } from 'primereact/tag';
import { CustomerService } from './service/CustomerService';

export default function CustomersDemo() {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomers, setSelectedCustomers] = useState([]);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: null, matchMode: FilterMatchMode.BETWEEN }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [representatives] = useState([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => setCustomers(getCustomers(data)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
                <h4 className="m-0">Customers</h4>
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${representative.image}\`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativeFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <div className="mb-3 font-bold">Agent Picker</div>
                <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />
            </React.Fragment>
        );
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${option.image}\`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const activityBodyTemplate = (rowData) => {
        return <ProgressBar value={rowData.activity} showValue={false} style={{ height: '6px' }}></ProgressBar>;
    };

    const activityFilterTemplate = (options) => {
        return (
            <>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </>
        );
    };

    const actionBodyTemplate = () => {
        return <Button type="button" icon="pi pi-cog" rounded></Button>;
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator header={header} rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rowsPerPageOptions={[10, 25, 50]} dataKey="id" selectionMode="checkbox" selection={selectedCustomers} onSelectionChange={(e) => setSelectedCustomers(e.value)}
                    filters={filters} filterDisplay="menu" globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']}
                    emptyMessage="No customers found." currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                <Column field="country.name" header="Country" sortable filterField="country.name" style={{ minWidth: '14rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                <Column header="Agent" sortable sortField="representative.name" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }}
                    style={{ minWidth: '14rem' }} body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
                <Column field="date" header="Date" sortable filterField="date" dataType="date" style={{ minWidth: '12rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column field="balance" header="Balance" sortable dataType="numeric" style={{ minWidth: '12rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                <Column field="status" header="Status" sortable filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                <Column field="activity" header="Activity" sortable showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                <Column headerStyle={{ width: '5rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} />
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Column, ColumnFilterElementTemplateOptions } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Slider, SliderChangeEvent } from 'primereact/slider';
import { Tag } from 'primereact/tag';
import { CustomerService } from './service/CustomerService';

interface Country {
  name: string;
  code: string;
}

interface Representative {
  name: string;
  image: string;
}

interface Customer {
  id: number;
  name: string;
  country: Country;
  company: string;
  date: string | Date;
  status: string;
  verified: boolean;
  activity: number;
  representative: Representative;
  balance: number;
}

export default function CustomersDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [selectedCustomers, setSelectedCustomers] = useState<Customer[]>([]);
    const [filters, setFilters] = useState<DataTableFilterMeta>({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        activity: { value: null, matchMode: FilterMatchMode.BETWEEN }
    });
    const [globalFilterValue, setGlobalFilterValue] = useState<string>('');
    const [representatives] = useState<Representative[]>([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState<string[]>(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status: string) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => setCustomers(getCustomers(data)));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getCustomers = (data: Customer[]) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const formatDate = (value: string | Date) => {
        return new Date(value).toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const renderHeader = () => {
        return (
            <div className="flex flex-wrap gap-2 justify-content-between align-items-center">
                <h4 className="m-0">Customers</h4>
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };

    const countryBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const representativeBodyTemplate = (rowData: Customer) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${representative.image}\`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativeFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return (
            <React.Fragment>
                <div className="mb-3 font-bold">Agent Picker</div>
                <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e: MultiSelectChangeEvent) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />
            </React.Fragment>
        );
    };

    const representativesItemTemplate = (option: Representative) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${option.image}\`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData: Customer) => {
        return formatDate(rowData.date);
    };

    const dateFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const balanceBodyTemplate = (rowData: Customer) => {
        return formatCurrency(rowData.balance);
    };

    const balanceFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData: Customer) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e: DropdownChangeEvent) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const statusItemTemplate = (option: string) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const activityBodyTemplate = (rowData: Customer) => {
        return <ProgressBar value={rowData.activity} showValue={false} style={{ height: '6px' }}></ProgressBar>;
    };

    const activityFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return (
            <>
                <Slider value={options.value} onChange={(e: SliderChangeEvent) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-content-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </>
        );
    };

    const actionBodyTemplate = () => {
        return <Button type="button" icon="pi pi-cog" rounded></Button>;
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator header={header} rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rowsPerPageOptions={[10, 25, 50]} dataKey="id" selectionMode="checkbox" selection={selectedCustomers} 
                    onSelectionChange={(e) => {
                        const customers = e.value as Customer[];
                        setSelectedCustomers(customers);
                    }}
                    filters={filters} filterDisplay="menu" globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']}
                    emptyMessage="No customers found." currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" style={{ minWidth: '14rem' }} />
                <Column field="country.name" header="Country" sortable filterField="country.name" style={{ minWidth: '14rem' }} body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
                <Column header="Agent" sortable sortField="representative.name" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }}
                    style={{ minWidth: '14rem' }} body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
                <Column field="date" header="Date" sortable filterField="date" dataType="date" style={{ minWidth: '12rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column field="balance" header="Balance" sortable dataType="numeric" style={{ minWidth: '12rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                <Column field="status" header="Status" sortable filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                <Column field="activity" header="Activity" sortable showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                <Column headerStyle={{ width: '5rem', textAlign: 'center' }} bodyStyle={{ textAlign: 'center', overflow: 'visible' }} body={actionBodyTemplate} />
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"DataTable with selection, pagination, filtering, sorting and templating."})}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersLarge().then(e=>r([...e||[]].map(e=>(e.date=new Date(e.date),e))))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,paginator:!0,header:x,rows:10,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[10,25,50],dataKey:"id",selectionMode:"checkbox",selection:l,onSelectionChange:e=>i(e.value),filters:u,filterDisplay:"menu",globalFilterFields:["name","country.name","representative.name","balance","status"],emptyMessage:"No customers found.",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",children:[(0,t.jsx)(s.Column,{selectionMode:"multiple",headerStyle:{width:"3rem"}}),(0,t.jsx)(s.Column,{field:"name",header:"Name",sortable:!0,filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"14rem"}}),(0,t.jsx)(s.Column,{field:"country.name",header:"Country",sortable:!0,filterField:"country.name",style:{minWidth:"14rem"},body:e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:"flag",src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`flag flag-${e.country.code}`,style:{width:"24px"}}),(0,t.jsx)("span",{children:e.country.name})]}),filter:!0,filterPlaceholder:"Search by country"}),(0,t.jsx)(s.Column,{header:"Agent",sortable:!0,sortField:"representative.name",filterField:"representative",showFilterMatchModes:!1,filterMenuStyle:{width:"14rem"},style:{minWidth:"14rem"},body:e=>{let a=e.representative;return(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:a.name,src:`https://primefaces.org/cdn/primereact/images/avatar/${a.image}`,width:"32"}),(0,t.jsx)("span",{children:a.name})]})},filter:!0,filterElement:e=>(0,t.jsxs)(d.default.Fragment,{children:[(0,t.jsx)("div",{className:"mb-3 font-bold",children:"Agent Picker"}),(0,t.jsx)(D.MultiSelect,{value:e.value,options:y,itemTemplate:b,onChange:t=>e.filterCallback(t.value),optionLabel:"name",placeholder:"Any",className:"p-column-filter"})]})}),(0,t.jsx)(s.Column,{field:"date",header:"Date",sortable:!0,filterField:"date",dataType:"date",style:{minWidth:"12rem"},body:e=>e.date.toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),filter:!0,filterElement:e=>(0,t.jsx)(z.Calendar,{value:e.value,onChange:t=>e.filterCallback(t.value,e.index),dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy",mask:"99/99/9999"})}),(0,t.jsx)(s.Column,{field:"balance",header:"Balance",sortable:!0,dataType:"numeric",style:{minWidth:"12rem"},body:e=>e.balance.toLocaleString("en-US",{style:"currency",currency:"USD"}),filter:!0,filterElement:e=>(0,t.jsx)(R.InputNumber,{value:e.value,onChange:t=>e.filterCallback(t.value,e.index),mode:"currency",currency:"USD",locale:"en-US"})}),(0,t.jsx)(s.Column,{field:"status",header:"Status",sortable:!0,filterMenuStyle:{width:"14rem"},style:{minWidth:"12rem"},body:e=>(0,t.jsx)(W.Tag,{value:e.status,severity:C(e.status)}),filter:!0,filterElement:e=>(0,t.jsx)(I.Dropdown,{value:e.value,options:v,onChange:t=>e.filterCallback(t.value,e.index),itemTemplate:S,placeholder:"Select One",className:"p-column-filter",showClear:!0})}),(0,t.jsx)(s.Column,{field:"activity",header:"Activity",sortable:!0,showFilterMatchModes:!1,style:{minWidth:"12rem"},body:e=>(0,t.jsx)(G.ProgressBar,{value:e.activity,showValue:!1,style:{height:"6px"}}),filter:!0,filterElement:e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(V.Slider,{value:e.value,onChange:t=>e.filterCallback(t.value),range:!0,className:"m-3"}),(0,t.jsxs)("div",{className:"flex align-items-center justify-content-between px-2",children:[(0,t.jsx)("span",{children:e.value?e.value[0]:0}),(0,t.jsx)("span",{children:e.value?e.value[1]:100})]})]})}),(0,t.jsx)(s.Column,{headerStyle:{width:"5rem",textAlign:"center"},bodyStyle:{textAlign:"center",overflow:"visible"},body:()=>(0,t.jsx)(L.Button,{type:"button",icon:"pi pi-cog",rounded:!0})})]})})}),(0,t.jsx)(n.DocSectionCode,{code:w,title:"Datatable SamplesDoc",description:"Datatable samples demo content.",service:["CustomerService"]})]})};var eC=e.i(61149),eb=e.i(41978),eS=e.i(14374),ex=e.i(25859);function ew(e){let a={id:null,name:"",image:null,description:"",category:null,price:0,quantity:0,rating:0,inventoryStatus:"INSTOCK"},[r,l]=(0,d.useState)(null),[i,p]=(0,d.useState)(!1),[h,f]=(0,d.useState)(!1),[y,v]=(0,d.useState)(!1),[C,b]=(0,d.useState)(a),[S,x]=(0,d.useState)(null),[w,T]=(0,d.useState)(!1),[D,j]=(0,d.useState)(null),N=(0,d.useRef)(null),F=(0,d.useRef)(null),M=()=>{b(a),T(!1),p(!0)},E=()=>{T(!1),p(!1)},k=()=>{f(!1)},I=()=>{v(!1)},A=()=>{F.current.exportCSV()},O=()=>{v(!0)},_=e=>{let t={...C};t.category=e.value,b(t)},q=(e,t)=>{let a=e.target&&e.target.value||"",r={...C};r[`${t}`]=a,b(r)},K=(e,t)=>{let a=e.value||0,r={...C};r[`${t}`]=a,b(r)},z=(0,t.jsxs)("div",{className:"flex flex-wrap gap-2 align-items-center justify-content-between",children:[(0,t.jsx)("h4",{className:"m-0",children:"Manage Products"}),(0,t.jsxs)(Y.IconField,{iconPosition:"left",children:[(0,t.jsx)(U.InputIcon,{className:"pi pi-search"}),(0,t.jsx)(B.InputText,{type:"search",onInput:e=>j(e.target.value),placeholder:"Search..."})]})]}),G=(0,t.jsxs)(d.default.Fragment,{children:[(0,t.jsx)(L.Button,{label:"Cancel",icon:"pi pi-times",outlined:!0,onClick:E}),(0,t.jsx)(L.Button,{label:"Save",icon:"pi pi-check",onClick:()=>{if(T(!0),C.name.trim()){let e=[...r],t={...C};C.id?(e[(e=>{let t=-1;for(let a=0;a<r.length;a++)if(r[a].id===e){t=a;break}return t})(C.id)]=t,N.current.show({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(t.id=(()=>{let e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let a=0;a<5;a++)e+=t.charAt(Math.floor(Math.random()*t.length));return e})(),t.image="product-placeholder.svg",e.push(t),N.current.show({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),l(e),p(!1),b(a)}}})]}),V=(0,t.jsxs)(d.default.Fragment,{children:[(0,t.jsx)(L.Button,{label:"No",icon:"pi pi-times",outlined:!0,onClick:k}),(0,t.jsx)(L.Button,{label:"Yes",icon:"pi pi-check",severity:"danger",onClick:()=>{l(r.filter(e=>e.id!==C.id)),f(!1),b(a),N.current.show({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})}})]}),H=(0,t.jsxs)(d.default.Fragment,{children:[(0,t.jsx)(L.Button,{label:"No",icon:"pi pi-times",outlined:!0,onClick:I}),(0,t.jsx)(L.Button,{label:"Yes",icon:"pi pi-check",severity:"danger",onClick:()=>{l(r.filter(e=>!S.includes(e))),v(!1),x(null),N.current.show({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}})]}),Q={basic:`
<Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
<DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
        dataKey="id"  paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header}>
    <Column selectionMode="multiple" exportable={false}></Column>
    <Column field="code" header="Code" sortable style={{ minWidth: '12rem' }}></Column>
    <Column field="name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
    <Column field="image" header="Image" body={imageBodyTemplate}></Column>
    <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
    <Column field="category" header="Category" sortable style={{ minWidth: '10rem' }}></Column>
    <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';

export default function ProductsDemo() {
    let emptyProduct = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };

    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    const saveProduct = () => {
        setSubmitted(true);

        if (product.name.trim()) {
            let _products = [...products];
            let _product = { ...product };

            if (product.id) {
                const index = findIndexById(product.id);

                _products[index] = _product;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    };

    const editProduct = (product) => {
        setProduct({ ...product });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = products.filter((val) => val.id !== product.id);

        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    };

    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => !selectedProducts.includes(val));

        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    };

    const onCategoryChange = (e) => {
        let _product = { ...product };

        _product['category'] = e.value;
        setProduct(_product);
    };

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };

        _product[\`\${name}\`] = val;

        setProduct(_product);
    };

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        let _product = { ...product };

        _product[\`\${name}\`] = val;

        setProduct(_product);
    };

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} />
                <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
    };

    const imageBodyTemplate = (rowData) => {
        return <img src={\`https://primefaces.org/cdn/primereact/images/product/\${rowData.image}\`} alt={rowData.image} className="shadow-2 border-round" style={{ width: '64px' }} />;
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const ratingBodyTemplate = (rowData) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData)}></Tag>;
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };

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

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Manage Products</h4>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </IconField>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    return (
        <div>
            <Toast ref={toast} />
            <div className="card">
                <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                <DataTable ref={dt} value={products} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id"  paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header}>
                    <Column selectionMode="multiple" exportable={false}></Column>
                    <Column field="code" header="Code" sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
                    <Column field="image" header="Image" body={imageBodyTemplate}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                    <Column field="category" header="Category" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                {product.image && <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.image} className="product-image block m-auto pb-3" />}
                <div className="field">
                    <label htmlFor="name" className="font-bold">
                        Name
                    </label>
                    <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
                    {submitted && !product.name && <small className="p-error">Name is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="description" className="font-bold">
                        Description
                    </label>
                    <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                </div>

                <div className="field">
                    <label className="mb-3 font-bold">Category</label>
                    <div className="formgrid grid">
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={product.category === 'Accessories'} />
                            <label htmlFor="category1">Accessories</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={product.category === 'Clothing'} />
                            <label htmlFor="category2">Clothing</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={product.category === 'Electronics'} />
                            <label htmlFor="category3">Electronics</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={product.category === 'Fitness'} />
                            <label htmlFor="category4">Fitness</label>
                        </div>
                    </div>
                </div>

                <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="price" className="font-bold">
                            Price
                        </label>
                        <InputNumber id="price" value={product.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="field col">
                        <label htmlFor="quantity" className="font-bold">
                            Quantity
                        </label>
                        <InputNumber id="quantity" value={product.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} />
                    </div>
                </div>
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && (
                        <span>
                            Are you sure you want to delete <b>{product.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { InputNumber,InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';

interface Product {
  id: string | null;
  code: string;
  name: string;
  description: string;
  image: string | null;
  price: number;
  category: string | null;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export default function ProductsDemo() {
    let emptyProduct: Product = {
       id: null,
       code: '',
       name: '',
       image: null,
       description: '',
       category: null,
       price: 0,
       quantity: 0,
       rating: 0,
       inventoryStatus: 'INSTOCK',
    };

    const [products, setProducts] = useState<Product[]>([]);
    const [productDialog, setProductDialog] = useState<boolean>(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState<boolean>(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState<boolean>(false);
    const [product, setProduct] = useState<Product>(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<Product[]>>(null);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    const saveProduct = () => {
        setSubmitted(true);

        if (product.name.trim()) {
            let _products = [...products];
            let _product = { ...product };

            if (product.id) {
                const index = findIndexById(product.id);

                _products[index] = _product;
                toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    };

    const editProduct = (product: Product) => {
        setProduct({ ...product });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product: Product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = products.filter((val) => val.id !== product.id);

        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    };

    const findIndexById = (id: string) => {
        let index = -1;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = (): string => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    };

    const exportCSV = () => {
        dt.current?.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => !selectedProducts.includes(val));

        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts([]);
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    };

    const onCategoryChange = (e: RadioButtonChangeEvent) => {
        let _product = { ...product };

        _product['category'] = e.value;
        setProduct(_product);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };

        // @ts-ignore
        _product[name] = val;

        setProduct(_product);
    };

     const onInputTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _product = { ...product };

        // @ts-ignore
        _product[name] = val;

        setProduct(_product);
    };

    const onInputNumberChange = (e: InputNumberValueChangeEvent, name: string) => {
        const val = e.value ?? 0;
        let _product = { ...product };

        // @ts-ignore
        _product[name] = val;

        setProduct(_product);
    };

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="New" icon="pi pi-plus" severity="success" onClick={openNew} />
                <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;
    };

    const imageBodyTemplate = (rowData: Product) => {
        return <img src={\`https://primefaces.org/cdn/primereact/images/product/\${rowData.image}\`} alt={rowData.image!} className="shadow-2 border-round" style={{ width: '64px' }} />;
    };

    const priceBodyTemplate = (rowData: Product) => {
        return formatCurrency(rowData.price);
    };

    const ratingBodyTemplate = (rowData: Product) => {
        return <Rating value={rowData.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (rowData: Product) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData)}></Tag>;
    };

    const actionBodyTemplate = (rowData: Product) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };

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

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">Manage Products</h4>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                 <InputText type="search" placeholder="Search..." onInput={(e) => {const target = e.target as HTMLInputElement; setGlobalFilter(target.value);}}  />
            </IconField>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    return (
        <div>
            <Toast ref={toast} />
            <div className="card">
                <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                <DataTable ref={dt} value={products} selection={selectedProducts} 
                        onSelectionChange={(e) => {
                            if (Array.isArray(e.value)) {
                                setSelectedProducts(e.value);
                            }
                        }}
                        dataKey="id"  paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" globalFilter={globalFilter} header={header}
                        selectionMode="multiple"
                >
                    <Column selectionMode="multiple" exportable={false}></Column>
                    <Column field="code" header="Code" sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
                    <Column field="image" header="Image" body={imageBodyTemplate}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column>
                    <Column field="category" header="Category" sortable style={{ minWidth: '10rem' }}></Column>
                    <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '12rem' }}></Column>
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                {product.image && <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.image} className="product-image block m-auto pb-3" />}
                <div className="field">
                    <label htmlFor="name" className="font-bold">
                        Name
                    </label>
                    <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
                    {submitted && !product.name && <small className="p-error">Name is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="description" className="font-bold">
                        Description
                    </label>
                    <InputTextarea id="description" value={product.description} onChange={(e:ChangeEvent<HTMLTextAreaElement>) => onInputTextAreaChange(e, 'description')} required rows={3} cols={20} />
                </div>

                <div className="field">
                    <label className="mb-3 font-bold">Category</label>
                    <div className="formgrid grid">
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={product.category === 'Accessories'} />
                            <label htmlFor="category1">Accessories</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={product.category === 'Clothing'} />
                            <label htmlFor="category2">Clothing</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={product.category === 'Electronics'} />
                            <label htmlFor="category3">Electronics</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={product.category === 'Fitness'} />
                            <label htmlFor="category4">Fitness</label>
                        </div>
                    </div>
                </div>

                <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="price" className="font-bold">
                            Price
                        </label>
                        <InputNumber id="price" value={product.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="field col">
                        <label htmlFor="quantity" className="font-bold">
                            Quantity
                        </label>
                        <InputNumber id="quantity" value={product.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} />
                    </div>
                </div>
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && (
                        <span>
                            Are you sure you want to delete <b>{product.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"CRUD implementation example with a Dialog."})}),(0,t.jsx)(g.Toast,{ref:N}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProducts().then(e=>l(e))},children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(ex.Toolbar,{className:"mb-4",left:()=>(0,t.jsxs)("div",{className:"flex flex-wrap gap-2",children:[(0,t.jsx)(L.Button,{label:"New",icon:"pi pi-plus",severity:"success",onClick:M}),(0,t.jsx)(L.Button,{label:"Delete",icon:"pi pi-trash",severity:"danger",onClick:O,disabled:!S||!S.length})]}),right:()=>(0,t.jsx)(L.Button,{label:"Export",icon:"pi pi-upload",className:"p-button-help",onClick:A})}),(0,t.jsxs)(c.DataTable,{ref:F,value:r,selection:S,onSelectionChange:e=>x(e.value),dataKey:"id",paginator:!0,rows:10,rowsPerPageOptions:[5,10,25],paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",globalFilter:D,header:z,children:[(0,t.jsx)(s.Column,{selectionMode:"multiple",exportable:!1}),(0,t.jsx)(s.Column,{field:"code",header:"Code",sortable:!0,style:{minWidth:"12rem"}}),(0,t.jsx)(s.Column,{field:"name",header:"Name",sortable:!0,style:{minWidth:"16rem"}}),(0,t.jsx)(s.Column,{field:"image",header:"Image",body:e=>(0,t.jsx)("img",{src:`https://primefaces.org/cdn/primereact/images/product/${e.image}`,alt:e.image,className:"shadow-2 border-round",style:{width:"64px"}})}),(0,t.jsx)(s.Column,{field:"price",header:"Price",body:e=>e.price.toLocaleString("en-US",{style:"currency",currency:"USD"}),sortable:!0,style:{minWidth:"8rem"}}),(0,t.jsx)(s.Column,{field:"category",header:"Category",sortable:!0,style:{minWidth:"10rem"}}),(0,t.jsx)(s.Column,{field:"rating",header:"Reviews",body:e=>(0,t.jsx)(ei.Rating,{value:e.rating,readOnly:!0,cancel:!1}),sortable:!0,style:{minWidth:"12rem"}}),(0,t.jsx)(s.Column,{field:"inventoryStatus",header:"Status",body:e=>(0,t.jsx)(W.Tag,{value:e.inventoryStatus,severity:(e=>{switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}})(e)}),sortable:!0,style:{minWidth:"12rem"}}),(0,t.jsx)(s.Column,{body:e=>(0,t.jsxs)(d.default.Fragment,{children:[(0,t.jsx)(L.Button,{icon:"pi pi-pencil",rounded:!0,outlined:!0,className:"mr-2",onClick:()=>{b({...e}),p(!0)}}),(0,t.jsx)(L.Button,{icon:"pi pi-trash",rounded:!0,outlined:!0,severity:"danger",onClick:()=>{b(e),f(!0)}})]}),exportable:!1,style:{minWidth:"12rem"}})]})]})}),(0,t.jsxs)(eC.Dialog,{visible:i,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Product Details",modal:!0,className:"p-fluid",footer:G,onHide:E,children:[C.image&&(0,t.jsx)("img",{src:`https://primefaces.org/cdn/primereact/images/product/${C.image}`,alt:C.image,className:"product-image block m-auto pb-3"}),(0,t.jsxs)("div",{className:"field",children:[(0,t.jsx)("label",{htmlFor:"name",className:"font-bold",children:"Name"}),(0,t.jsx)(B.InputText,{id:"name",value:C.name,onChange:e=>q(e,"name"),required:!0,autoFocus:!0,className:(0,P.classNames)({"p-invalid":w&&!C.name})}),w&&!C.name&&(0,t.jsx)("small",{className:"p-error",children:"Name is required."})]}),(0,t.jsxs)("div",{className:"field",children:[(0,t.jsx)("label",{htmlFor:"description",className:"font-bold",children:"Description"}),(0,t.jsx)(eb.InputTextarea,{id:"description",value:C.description,onChange:e=>q(e,"description"),required:!0,rows:3,cols:20})]}),(0,t.jsxs)("div",{className:"field",children:[(0,t.jsx)("label",{className:"mb-3 font-bold",children:"Category"}),(0,t.jsxs)("div",{className:"formgrid grid",children:[(0,t.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,t.jsx)(eS.RadioButton,{inputId:"category1",name:"category",value:"Accessories",onChange:_,checked:"Accessories"===C.category}),(0,t.jsx)("label",{htmlFor:"category1",children:"Accessories"})]}),(0,t.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,t.jsx)(eS.RadioButton,{inputId:"category2",name:"category",value:"Clothing",onChange:_,checked:"Clothing"===C.category}),(0,t.jsx)("label",{htmlFor:"category2",children:"Clothing"})]}),(0,t.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,t.jsx)(eS.RadioButton,{inputId:"category3",name:"category",value:"Electronics",onChange:_,checked:"Electronics"===C.category}),(0,t.jsx)("label",{htmlFor:"category3",children:"Electronics"})]}),(0,t.jsxs)("div",{className:"field-radiobutton col-6",children:[(0,t.jsx)(eS.RadioButton,{inputId:"category4",name:"category",value:"Fitness",onChange:_,checked:"Fitness"===C.category}),(0,t.jsx)("label",{htmlFor:"category4",children:"Fitness"})]})]})]}),(0,t.jsxs)("div",{className:"formgrid grid",children:[(0,t.jsxs)("div",{className:"field col",children:[(0,t.jsx)("label",{htmlFor:"price",className:"font-bold",children:"Price"}),(0,t.jsx)(R.InputNumber,{id:"price",value:C.price,onValueChange:e=>K(e,"price"),mode:"currency",currency:"USD",locale:"en-US"})]}),(0,t.jsxs)("div",{className:"field col",children:[(0,t.jsx)("label",{htmlFor:"quantity",className:"font-bold",children:"Quantity"}),(0,t.jsx)(R.InputNumber,{id:"quantity",value:C.quantity,onValueChange:e=>K(e,"quantity")})]})]})]}),(0,t.jsx)(eC.Dialog,{visible:h,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:V,onHide:k,children:(0,t.jsxs)("div",{className:"confirmation-content",children:[(0,t.jsx)("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),C&&(0,t.jsxs)("span",{children:["Are you sure you want to delete ",(0,t.jsx)("b",{children:C.name}),"?"]})]})}),(0,t.jsx)(eC.Dialog,{visible:y,style:{width:"32rem"},breakpoints:{"960px":"75vw","641px":"90vw"},header:"Confirm",modal:!0,footer:H,onHide:I,children:(0,t.jsxs)("div",{className:"confirmation-content",children:[(0,t.jsx)("i",{className:"pi pi-exclamation-triangle mr-3",style:{fontSize:"2rem"}}),C&&(0,t.jsx)("span",{children:"Are you sure you want to delete the selected products?"})]})}),(0,t.jsx)(n.DocSectionCode,{code:Q,service:["ProductService"]})]})}function eT(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)(!1),u={basic:`
<Button label="Show" icon="pi pi-external-link" onClick={() => setDialogVisible(true)} />
<Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable
        modal contentStyle={{ height: '300px' }} onHide={() => setDialogVisible(false)} footer={dialogFooterTemplate}>
    <DataTable value={customers} scrollable scrollHeight="flex" tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Name"></Column>
        <Column field="country.name" header="Country"></Column>
        <Column field="representative.name" header="Representative"></Column>
        <Column field="company" header="Company"></Column>
    </DataTable>
</Dialog>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { CustomerService } from './service/CustomerService';

export default function FlexibleScrollDemo() {
    const [customers, setCustomers] = useState([]);
    const [dialogVisible, setDialogVisible] = useState(false);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={() => setDialogVisible(false)} />;
    };

    return (
        <div className="card">
        <Button label="Show" icon="pi pi-external-link" onClick={() => setDialogVisible(true)} />
        <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable
                modal contentStyle={{ height: '300px' }} onHide={() => setDialogVisible(false)} footer={dialogFooterTemplate}>
            <DataTable value={customers} scrollable scrollHeight="flex" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="company" header="Company"></Column>
            </DataTable>
        </Dialog>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { CustomerService } from './service/CustomerService';

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

export default function FlexibleScrollDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [dialogVisible, setDialogVisible] = useState<boolean>(false);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    const dialogFooterTemplate = () => {
        return <Button label="Ok" icon="pi pi-check" onClick={() => setDialogVisible(false)} />;
    };

    return (
        <div className="card">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setDialogVisible(true)} />
            <Dialog header="Flex Scroll" visible={dialogVisible} style={{ width: '75vw' }} maximizable
                    modal contentStyle={{ height: '300px' }} onHide={() => setDialogVisible(false)} footer={dialogFooterTemplate}>
                <DataTable value={customers} scrollable scrollHeight="flex" tableStyle={{ minWidth: '50rem' }}>
                    <Column field="name" header="Name"></Column>
                    <Column field="country.name" header="Country"></Column>
                    <Column field="representative.name" header="Representative"></Column>
                    <Column field="company" header="Company"></Column>
                </DataTable>
            </Dialog>
        </div>
    );
}
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table. Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes."})}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersMedium().then(e=>r(e))},children:(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(L.Button,{label:"Show",icon:"pi pi-external-link",onClick:()=>i(!0)}),(0,t.jsx)(eC.Dialog,{header:"Flex Scroll",visible:l,style:{width:"75vw"},maximizable:!0,modal:!0,contentStyle:{height:"300px"},onHide:()=>i(!1),footer:()=>(0,t.jsx)(L.Button,{label:"Ok",icon:"pi pi-check",onClick:()=>i(!1)}),children:(0,t.jsxs)(c.DataTable,{value:a,scrollable:!0,scrollHeight:"flex",tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"country.name",header:"Country"}),(0,t.jsx)(s.Column,{field:"representative.name",header:"Representative"}),(0,t.jsx)(s.Column,{field:"company",header:"Company"})]})})]})}),(0,t.jsx)(n.DocSectionCode,{code:u,service:["CustomerService"]})]})}var eD=e.i(47886);function ej(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)(!1),u={basic:`
<ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)}
    onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Balance" offLabel="Balance" />
<DataTable value={customers} scrollable scrollHeight="400px" className="mt-4">
    <Column field="name" header="Name" style={{ minWidth: '200px' }} frozen className="font-bold"></Column>
    <Column field="id" header="Id" style={{ minWidth: '100px' }}></Column>
    <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
    <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
    <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
    <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
    <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
    <Column field="activity" header="Activity" style={{ minWidth: '200px' }}></Column>
    <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
    <Column field="balance" header="Balance" body={balanceTemplate} style={{ minWidth: '200px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ToggleButton } from 'primereact/togglebutton';
import { CustomerService } from './service/CustomerService';

export default function FrozenColumnsDemo() {
    const [customers, setCustomers] = useState([]);
    const [balanceFrozen, setBalanceFrozen] = useState(false);

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => setCustomers(data));
    }, []);

    const balanceTemplate = (rowData) => {
        return <span className="font-bold">{formatCurrency(rowData.balance)}</span>;
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    return (
        <div className="card">
            <ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Balance" offLabel="Balance" />
            <DataTable value={customers} scrollable scrollHeight="400px" className="mt-4">
                <Column field="name" header="Name" style={{ minWidth: '200px' }} frozen className="font-bold"></Column>
                <Column field="id" header="Id" style={{ minWidth: '100px' }}></Column>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                <Column field="activity" header="Activity" style={{ minWidth: '200px' }}></Column>
                <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                <Column field="balance" header="Balance" body={balanceTemplate} style={{ minWidth: '200px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ToggleButton } from 'primereact/togglebutton';
import { CustomerService } from './service/CustomerService';

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

export default function FrozenColumnsDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [balanceFrozen, setBalanceFrozen] = useState<boolean>(false);

    useEffect(() => {
        CustomerService.getCustomersLarge().then((data) => setCustomers(data));
    }, []);

    const balanceTemplate = (rowData: Customer) => {
        return <span className="font-bold">{formatCurrency(rowData.balance)}</span>;
    };

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    return (
        <div className="card">
            <ToggleButton checked={balanceFrozen} onChange={(e) => setBalanceFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Balance" offLabel="Balance" />
            <DataTable value={customers} scrollable scrollHeight="400px" className="mt-4">
                <Column field="name" header="Name" style={{ minWidth: '200px' }} frozen className="font-bold"></Column>
                <Column field="id" header="Id" style={{ minWidth: '100px' }}></Column>
                <Column field="name" header="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country.name" header="Country" style={{ minWidth: '200px' }}></Column>
                <Column field="date" header="Date" style={{ minWidth: '200px' }}></Column>
                <Column field="company" header="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" style={{ minWidth: '200px' }}></Column>
                <Column field="activity" header="Activity" style={{ minWidth: '200px' }}></Column>
                <Column field="representative.name" header="Representative" style={{ minWidth: '200px' }}></Column>
                <Column field="balance" header="Balance" body={balanceTemplate} style={{ minWidth: '200px' }} alignFrozen="right" frozen={balanceFrozen}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A column can be fixed during horizontal scrolling by enabling the ",(0,t.jsx)("i",{children:"frozen"})," property. The location is defined with the ",(0,t.jsx)("i",{children:"alignFrozen"})," that can be ",(0,t.jsx)("i",{children:"left"})," or ",(0,t.jsx)("i",{children:"right"}),"."]})}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersLarge().then(e=>r(e))},children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(eD.ToggleButton,{checked:l,onChange:e=>i(e.value),onIcon:"pi pi-lock",offIcon:"pi pi-lock-open",onLabel:"Balance",offLabel:"Balance"}),(0,t.jsxs)(c.DataTable,{value:a,scrollable:!0,scrollHeight:"400px",className:"mt-4",children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",style:{minWidth:"200px"},frozen:!0,className:"font-bold"}),(0,t.jsx)(s.Column,{field:"id",header:"Id",style:{minWidth:"100px"}}),(0,t.jsx)(s.Column,{field:"name",header:"Name",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"country.name",header:"Country",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"date",header:"Date",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"company",header:"Company",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"status",header:"Status",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"activity",header:"Activity",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"representative.name",header:"Representative",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"balance",header:"Balance",body:e=>(0,t.jsx)("span",{className:"font-bold",children:e.balance.toLocaleString("en-US",{style:"currency",currency:"USD"})}),style:{minWidth:"200px"},alignFrozen:"right",frozen:l})]})]})}),(0,t.jsx)(n.DocSectionCode,{code:u,service:["CustomerService"]})]})}function eP(e){let[a,r]=(0,d.useState)([]),[l,i]=(0,d.useState)([]),u={basic:`
<DataTable value={customers} frozenValue={lockedCustomers} scrollable scrollHeight="400px" tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name"></Column>
    <Column field="country.name" header="Country"></Column>
    <Column field="representative.name" header="Representative"></Column>
    <Column field="status" header="Status"></Column>
    <Column style={{ flex: '0 0 4rem' }} body={lockTemplate}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { CustomerService } from './service/CustomerService';

export default function FrozenRowsDemo() {
    const [customers, setCustomers] = useState([]);
    const [lockedCustomers, setLockedCustomers] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));

        setLockedCustomers([
            {
                id: 5135,
                name: 'Geraldine Bisset',
                country: {
                    name: 'France',
                    code: 'fr'
                },
                company: 'Bisset Group',
                status: 'proposal',
                date: '2019-05-05',
                activity: 0,
                representative: {
                    name: 'Amy Elsner',
                    image: 'amyelsner.png'
                }
            }
        ]);
    }, []);

    const lockTemplate = (rowData, options) => {
        const icon = options.frozenRow ? 'pi pi-lock' : 'pi pi-lock-open';
        const disabled = options.frozenRow ? false : lockedCustomers.length >= 2;

        return <Button type="button" icon={icon} disabled={disabled} className="p-button-sm p-button-text" onClick={() => toggleLock(rowData, options.frozenRow, options.rowIndex)} />;
    };

    const toggleLock = (data, frozen, index) => {
        let _lockedCustomers, _unlockedCustomers;

        if (frozen) {
            _lockedCustomers = lockedCustomers.filter((c, i) => i !== index);
            _unlockedCustomers = [...customers, data];
        } else {
            _unlockedCustomers = customers.filter((c, i) => i !== index);
            _lockedCustomers = [...lockedCustomers, data];
        }

        _unlockedCustomers.sort((val1, val2) => {
            return val1.id < val2.id ? -1 : 1;
        });

        setLockedCustomers(_lockedCustomers);
        setCustomers(_unlockedCustomers);
    };

    return (
        <div className="card">
            <DataTable value={customers} frozenValue={lockedCustomers} scrollable scrollHeight="400px" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="status" header="Status"></Column>
                <Column style={{ flex: '0 0 4rem' }} body={lockTemplate}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column, ColumnBodyOptions } from 'primereact/column';
import { Button } from 'primereact/button';
import { CustomerService } from './service/CustomerService';

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

export default function FrozenRowsDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [lockedCustomers, setLockedCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));

        setLockedCustomers([
            {
                id: 5135,
                name: 'Geraldine Bisset',
                country: {
                    name: 'France',
                    code: 'fr'
                },
                company: 'Bisset Group',
                status: 'proposal',
                date: '2019-05-05',
                activity: 0,
                representative: {
                    name: 'Amy Elsner',
                    image: 'amyelsner.png'
                }
            }
        ]);
    }, []);

    const lockTemplate = (rowData: Customer, options: ColumnBodyOptions) => {
        const icon = options.frozenRow ? 'pi pi-lock' : 'pi pi-lock-open';
        const disabled = options.frozenRow ? false : lockedCustomers.length >= 2;

        return <Button type="button" icon={icon} disabled={disabled} className="p-button-sm p-button-text" onClick={() => toggleLock(rowData, options.frozenRow, options.rowIndex)} />;
    };

    const toggleLock = (data: Customer, frozen: boolean, index: number) => {
        let _lockedCustomers, _unlockedCustomers;

        if (frozen) {
            _lockedCustomers = lockedCustomers.filter((c, i) => i !== index);
            _unlockedCustomers = [...customers, data];
        } else {
            _unlockedCustomers = customers.filter((c, i) => i !== index);
            _lockedCustomers = [...lockedCustomers, data];
        }

        _unlockedCustomers.sort((val1, val2) => {
            return val1.id < val2.id ? -1 : 1;
        });

        setLockedCustomers(_lockedCustomers);
        setCustomers(_unlockedCustomers);
    };

    return (
        <div className="card">
            <DataTable value={customers} frozenValue={lockedCustomers} scrollable scrollHeight="400px" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="status" header="Status"></Column>
                <Column style={{ flex: '0 0 4rem' }} body={lockTemplate}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Rows can be fixed during scrolling by enabling the ",(0,t.jsx)("i",{children:"frozenValue"})," property."]})}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersMedium().then(e=>r(e)),i([{id:5135,name:"Geraldine Bisset",country:{name:"France",code:"fr"},company:"Bisset Group",status:"proposal",date:"2019-05-05",activity:0,representative:{name:"Amy Elsner",image:"amyelsner.png"}}])},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,frozenValue:l,scrollable:!0,scrollHeight:"400px",tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"country.name",header:"Country"}),(0,t.jsx)(s.Column,{field:"representative.name",header:"Representative"}),(0,t.jsx)(s.Column,{field:"status",header:"Status"}),(0,t.jsx)(s.Column,{style:{flex:"0 0 4rem"},body:(e,o)=>{let n=o.frozenRow?"pi pi-lock":"pi pi-lock-open",s=!o.frozenRow&&l.length>=2;return(0,t.jsx)(L.Button,{type:"button",icon:n,disabled:s,className:"p-button-sm p-button-text",onClick:()=>{var t,n,s;let c,d;return t=e,n=o.frozenRow,s=o.rowIndex,void(n?(c=l.filter((e,t)=>t!==s),d=[...a,t]):(d=a.filter((e,t)=>t!==s),c=[...l,t]),d.sort((e,t)=>e.id<t.id?-1:1),i(c),r(d))}})}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:u,service:["CustomerService"]})]})}function eN(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={customers} scrollable scrollHeight="400px">
    <Column field="id" header="Id" footer="Id" style={{ minWidth: '100px' }}></Column>
    <Column field="name" header="Name" footer="Name" style={{ minWidth: '200px' }}></Column>
    <Column field="country.name" header="Country" footer="Country" style={{ minWidth: '200px' }}></Column>
    <Column field="date" header="Date" footer="Date" style={{ minWidth: '200px' }}></Column>
    <Column field="balance" header="Balance" footer="Balance" body={balanceTemplate} style={{ minWidth: '200px' }}></Column>
    <Column field="company" header="Company" footer="Company" style={{ minWidth: '200px' }}></Column>
    <Column field="status" header="Status" footer="Status" style={{ minWidth: '200px' }}></Column>
    <Column field="activity" header="Activity" footer="Activity" style={{ minWidth: '200px' }}></Column>
    <Column field="representative.name" header="Representative" footer="Representative" style={{ minWidth: '200px' }}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

export default function HorizontalScrollDemo() {
    const [customers, setCustomers] = useState([]);

    const balanceTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} scrollable scrollHeight="400px">
                <Column field="id" header="Id" footer="Id" style={{ minWidth: '100px' }}></Column>
                <Column field="name" header="Name" footer="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country.name" header="Country" footer="Country" style={{ minWidth: '200px' }}></Column>
                <Column field="date" header="Date" footer="Date" style={{ minWidth: '200px' }}></Column>
                <Column field="balance" header="Balance" footer="Balance" body={balanceTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="company" header="Company" footer="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" footer="Status" style={{ minWidth: '200px' }}></Column>
                <Column field="activity" header="Activity" footer="Activity" style={{ minWidth: '200px' }}></Column>
                <Column field="representative.name" header="Representative" footer="Representative" style={{ minWidth: '200px' }}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

export default function HorizontalScrollDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    const balanceTemplate = (rowData: Customer) => {
        return formatCurrency(rowData.balance);
    };

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} scrollable scrollHeight="400px">
                <Column field="id" header="Id" footer="Id" style={{ minWidth: '100px' }}></Column>
                <Column field="name" header="Name" footer="Name" style={{ minWidth: '200px' }}></Column>
                <Column field="country.name" header="Country" footer="Country" style={{ minWidth: '200px' }}></Column>
                <Column field="date" header="Date" footer="Date" style={{ minWidth: '200px' }}></Column>
                <Column field="balance" header="Balance" footer="Balance" body={balanceTemplate} style={{ minWidth: '200px' }}></Column>
                <Column field="company" header="Company" footer="Company" style={{ minWidth: '200px' }}></Column>
                <Column field="status" header="Status" footer="Status" style={{ minWidth: '200px' }}></Column>
                <Column field="activity" header="Activity" footer="Activity" style={{ minWidth: '200px' }}></Column>
                <Column field="representative.name" header="Representative" footer="Representative" style={{ minWidth: '200px' }}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Horizontal scrollbar is displayed when table width exceeds the parent width."})}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersMedium().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,scrollable:!0,scrollHeight:"400px",children:[(0,t.jsx)(s.Column,{field:"id",header:"Id",footer:"Id",style:{minWidth:"100px"}}),(0,t.jsx)(s.Column,{field:"name",header:"Name",footer:"Name",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"country.name",header:"Country",footer:"Country",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"date",header:"Date",footer:"Date",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"balance",header:"Balance",footer:"Balance",body:e=>e.balance.toLocaleString("en-US",{style:"currency",currency:"USD"}),style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"company",header:"Company",footer:"Company",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"status",header:"Status",footer:"Status",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"activity",header:"Activity",footer:"Activity",style:{minWidth:"200px"}}),(0,t.jsx)(s.Column,{field:"representative.name",header:"Representative",footer:"Representative",style:{minWidth:"200px"}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["CustomerService"]})]})}function eF(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={customers} scrollable scrollHeight="400px" style={{ minWidth: '50rem' }}>
    <Column field="name" header="Name"></Column>
    <Column field="country.name" header="Country"></Column>
    <Column field="representative.name" header="Representative"></Column>
    <Column field="company" header="Company"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

export default function VerticalScrollDemo() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} scrollable scrollHeight="400px" style={{ minWidth: '50rem' }}>
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="company" header="Company"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from './service/CustomerService';

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

export default function VerticalScrollDemo() {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={customers} scrollable scrollHeight="400px" style={{ minWidth: '50rem' }}>
                <Column field="name" header="Name"></Column>
                <Column field="country.name" header="Country"></Column>
                <Column field="representative.name" header="Representative"></Column>
                <Column field="company" header="Company"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Adding ",(0,t.jsx)("i",{children:"scrollable"})," property along with a ",(0,t.jsx)("i",{children:"scrollHeight"})," for the data viewport enables vertical scrolling with fixed headers."]})}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersMedium().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,scrollable:!0,scrollHeight:"400px",tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"country.name",header:"Country"}),(0,t.jsx)(s.Column,{field:"representative.name",header:"Representative"}),(0,t.jsx)(s.Column,{field:"company",header:"Company"})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["CustomerService"]})]})}var eM=e.i(76848);function eE(e){let[a,r]=(0,d.useState)([]),[l]=(0,d.useState)([{label:"Small",value:"small"},{label:"Normal",value:"normal"},{label:"Large",value:"large"}]),[i,p]=(0,d.useState)(l[1].value),h={basic:`
<SelectButton value={size} onChange={(e) => setSize(e.value)} options={sizeOptions} />
<DataTable value={products} size={size} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SelectButton } from 'primereact/selectbutton';
import { ProductService } from './service/ProductService';

export default function SizeDemo() {
    const [products, setProducts] = useState([]);
    const [sizeOptions] = useState([
        { label: 'Small', value: 'small' },
        { label: 'Normal', value: 'normal' },
        { label: 'Large', value: 'large' }
    ]);
    const [size, setSize] = useState(sizeOptions[1].value);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center mb-4">
                <SelectButton value={size} onChange={(e) => setSize(e.value)} options={sizeOptions} />
            </div>
            <DataTable value={products} size={size} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
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

interface SizeOption {
    label: string;
    value: string;
}

export default function SizeDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [sizeOptions] = useState<SizeOption[]>([
        { label: 'Small', value: 'small' },
        { label: 'Normal', value: 'normal' },
        { label: 'Large', value: 'large' }
    ]);
    const [size, setSize] = useState<string>(sizeOptions[1].value);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center mb-4">
                <SelectButton value={size} onChange={(e: SelectButtonChangeEvent) => setSize(e.value)} options={sizeOptions} />
            </div>
            <DataTable value={products} size={size} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
            `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"In addition to a regular table, alternatives with alternative sizes are available."})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("div",{className:"flex justify-content-center mb-4",children:(0,t.jsx)(eM.SelectButton,{value:i,onChange:e=>p(e.value),options:l})}),(0,t.jsxs)(c.DataTable,{value:a,size:i,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})]})}),(0,t.jsx)(n.DocSectionCode,{code:h,service:["ProductService"]})]})}function eR(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={products} sortMode="multiple" tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
    <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
    <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
    <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function MultipleColumnsDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} sortMode="multiple" tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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

export default function MultipleColumnsDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} sortMode="multiple" tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Multiple columns can be sorted by defining ",(0,t.jsx)("i",{children:"sortMode"})," as ",(0,t.jsx)("i",{children:"multiple"}),". This mode requires metaKey (e.g. ",(0,t.jsx)("i",{children:"⌘"}),") to be pressed when clicking a header."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,sortMode:"multiple",tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code",sortable:!0,style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"name",header:"Name",sortable:!0,style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"category",header:"Category",sortable:!0,style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity",sortable:!0,style:{width:"25%"}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["ProductService"]})]})}function eB(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={products} sortField="price" sortOrder={-1} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code" sortable style={{ width: '20%' }}></Column>
    <Column field="name" header="Name" sortable style={{ width: '20%' }}></Column>
    <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ width: '20%' }}></Column>
    <Column field="category" header="Category" sortable style={{ width: '20%' }}></Column>
    <Column field="quantity" header="Quantity" sortable style={{ width: '20%' }}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function PresortDemo() {
    const [products, setProducts] = useState([]);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} sortField="price" sortOrder={-1} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" sortable style={{ width: '20%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '20%' }}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ width: '20%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '20%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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

export default function PresortDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (product: Product) => {
        return formatCurrency(product.price);
    };

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} sortField="price" sortOrder={-1} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" sortable style={{ width: '20%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '20%' }}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ width: '20%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '20%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Defining a default ",(0,t.jsx)("i",{children:"sortField"})," and ",(0,t.jsx)("i",{children:"sortOrder"})," displays data as sorted initially in single column sorting. In ",(0,t.jsx)("i",{children:"multiple"})," sort mode,",(0,t.jsx)("i",{children:"multiSortMeta"})," should be used instead by providing an array of ",(0,t.jsx)("i",{children:"DataTableSortMeta"})," objects."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,sortField:"price",sortOrder:-1,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code",sortable:!0,style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"name",header:"Name",sortable:!0,style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"price",header:"Price",body:e=>e.price.toLocaleString("en-US",{style:"currency",currency:"USD"}),sortable:!0,style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"category",header:"Category",sortable:!0,style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity",sortable:!0,style:{width:"20%"}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["ProductService"]})]})}function ek(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={products} removableSort tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
    <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
    <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
    <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function RemovableSortDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} removableSort tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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

export default function RemovableSortDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} removableSort tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"removableSort"})," is present, the third click removes the sorting from the column."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,removableSort:!0,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code",sortable:!0,style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"name",header:"Name",sortable:!0,style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"category",header:"Category",sortable:!0,style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity",sortable:!0,style:{width:"25%"}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["ProductService"]})]})}function eI(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
    <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
    <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
    <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function SingleColumnDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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

export default function SingleColumnDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Sorting on a column is enabled by adding the ",(0,t.jsx)("i",{children:"sortable"})," property."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code",sortable:!0,style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"name",header:"Name",sortable:!0,style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"category",header:"Category",sortable:!0,style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity",sortable:!0,style:{width:"25%"}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["ProductService"]})]})}function eW(e){let a,[r,l]=(0,d.useState)(null),[i,u]=(0,d.useState)({global:{value:null,matchMode:q.FilterMatchMode.CONTAINS},name:{operator:K.FilterOperator.AND,constraints:[{value:null,matchMode:q.FilterMatchMode.STARTS_WITH}]},"country.name":{operator:K.FilterOperator.AND,constraints:[{value:null,matchMode:q.FilterMatchMode.STARTS_WITH}]},representative:{value:null,matchMode:q.FilterMatchMode.IN},status:{operator:K.FilterOperator.OR,constraints:[{value:null,matchMode:q.FilterMatchMode.EQUALS}]}}),[p,h]=(0,d.useState)(null),f=[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"XuXue Feng",image:"xuxuefeng.png"}],g=["unqualified","qualified","new","negotiation","renewal"],y=e=>{switch(e){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}},v=e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:e.name,src:`https://primefaces.org/cdn/primereact/images/avatar/${e.image}`,width:"32"}),(0,t.jsx)("span",{children:e.name})]}),C=e=>(0,t.jsx)(W.Tag,{value:e,severity:y(e)}),b=(a=i.global?i.global.value:"",(0,t.jsxs)(Y.IconField,{iconPosition:"left",children:[(0,t.jsx)(U.InputIcon,{className:"pi pi-search"}),(0,t.jsx)(B.InputText,{type:"search",value:a||"",onChange:e=>{let t,a;return t=e.target.value,void((a={...i}).global.value=t,u(a))},placeholder:"Global Search"})]})),S={basic:`
<DataTable value={customers} paginator rows={5} header={header} filters={filters} onFilter={(e) => setFilters(e.filters)}
        selection={selectedCustomer} onSelectionChange={(e) => setSelectedCustomer(e.value)} selectionMode="single" dataKey="id"
        stateStorage="session" stateKey="dt-state-demo-local" emptyMessage="No customers found." tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" sortable filter filterPlaceholder="Search" style={{ width: '25%' }}></Column>
    <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search" style={{ width: '25%' }}></Column>
    <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative"
        showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }} style={{ width: '25%' }} ></Column>
    <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }} style={{ width: '25%' }}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { CustomerService } from './service/CustomerService';

export default function BasicDemo() {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });

    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const representatives = [
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ];
    const statuses = ['unqualified', 'qualified', 'new', 'negotiation', 'renewal'];

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersSmall().then((data) => setCustomers(data));
    }, []);

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.country.code} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${representative.image}\`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativeFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${option.image}\`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const onGlobalFilterChange = (event) => {
        const value = event.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
    };

    const renderHeader = () => {
        const value = filters['global'] ? filters['global'].value : '';

        return (
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText type="search" value={value || ''} onChange={(e) => onGlobalFilterChange(e)} placeholder="Global Search" />
            </IconField>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={5} header={header} filters={filters} onFilter={(e) => setFilters(e.filters)}
                    selection={selectedCustomer} onSelectionChange={(e) => setSelectedCustomer(e.value)} selectionMode="single" dataKey="id"
                    stateStorage="session" stateKey="dt-state-demo-local" emptyMessage="No customers found." tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" sortable filter filterPlaceholder="Search" style={{ width: '25%' }}></Column>
                <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search" style={{ width: '25%' }}></Column>
                <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative"
                    showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }} style={{ width: '25%' }} ></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }} style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Column, ColumnFilterElementTemplateOptions } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { CustomerService } from './service/CustomerService';

interface RepresentativeOption {
    name: string;
    image: string;
}

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

export default function BasicDemo() {
    const [customers, setCustomers] = useState<Customer[] | null>(null);
    const [filters, setFilters] = useState<DataTableFilterMeta>({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });

    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const representatives: RepresentativeOption[] = [
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ];
    const statuses: string[] = ['unqualified', 'qualified', 'new', 'negotiation', 'renewal'];

    const getSeverity = (status: string) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersSmall().then((data) => setCustomers(data));
    }, []);

    const countryBodyTemplate = (rowData: Customer) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.country.code} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const representativeBodyTemplate = (rowData: Customer) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${representative.image}\`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativeFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e: MultiSelectChangeEvent) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    };

    const representativesItemTemplate = (option: RepresentativeOption) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${option.image}\`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const statusBodyTemplate = (rowData: Customer) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e: DropdownChangeEvent) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const statusItemTemplate = (option: string) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const onGlobalFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
    };

    const renderHeader = () => {
        const value = filters['global'] ? filters['global'].value : '';

        return (
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search" />
                <InputText type="search" value={value || ''} onChange={(e) => onGlobalFilterChange(e)} placeholder="Global Search" />
            </IconField>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator rows={5} header={header} filters={filters} onFilter={(e) => setFilters(e.filters)}
                    selection={selectedCustomer} onSelectionChange={(e) => setSelectedCustomer(e.value)} selectionMode="single" dataKey="id"
                    stateStorage="session" stateKey="dt-state-demo-local" emptyMessage="No customers found." tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" sortable filter filterPlaceholder="Search" style={{ width: '25%' }}></Column>
                <Column header="Country" body={countryBodyTemplate} sortable sortField="country.name" filter filterField="country.name" filterPlaceholder="Search" style={{ width: '25%' }}></Column>
                <Column header="Agent" body={representativeBodyTemplate} sortable sortField="representative.name" filter filterField="representative"
                    showFilterMatchModes={false} filterElement={representativeFilterTemplate} filterMenuStyle={{ width: '14rem' }} style={{ width: '25%' }} ></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} sortable filter filterElement={statusFilterTemplate} filterMenuStyle={{ width: '14rem' }} style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
/* CustomerService */
{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsx)("p",{children:"Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again, table would render the data using the last settings."}),(0,t.jsxs)("p",{children:["Change the state of the table e.g paginate, navigate away and then return to this table again to test this feature, the setting is set as ",(0,t.jsx)("i",{children:"session"})," with the ",(0,t.jsx)("i",{children:"stateStorage"})," property so that Table retains the state until the browser is closed. Other alternative is ",(0,t.jsx)("i",{children:"local"})," referring to ",(0,t.jsx)("i",{children:"localStorage"})," for an extended lifetime."]})]}),(0,t.jsx)(m,{onLoad:()=>{Q.CustomerService.getCustomersSmall().then(e=>l(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:r,paginator:!0,rows:5,header:b,filters:i,onFilter:e=>u(e.filters),selection:p,onSelectionChange:e=>h(e.value),selectionMode:"single",dataKey:"id",stateStorage:"session",stateKey:"dt-state-demo-local",emptyMessage:"No customers found.",tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name",sortable:!0,filter:!0,filterPlaceholder:"Search",style:{width:"25%"}}),(0,t.jsx)(s.Column,{header:"Country",body:e=>(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:e.country.code,src:"https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png",className:`flag flag-${e.country.code}`,style:{width:"24px"}}),(0,t.jsx)("span",{children:e.country.name})]}),sortable:!0,sortField:"country.name",filter:!0,filterField:"country.name",filterPlaceholder:"Search",style:{width:"25%"}}),(0,t.jsx)(s.Column,{header:"Agent",body:e=>{let a=e.representative;return(0,t.jsxs)("div",{className:"flex align-items-center gap-2",children:[(0,t.jsx)("img",{alt:a.name,src:`https://primefaces.org/cdn/primereact/images/avatar/${a.image}`,width:"32"}),(0,t.jsx)("span",{children:a.name})]})},sortable:!0,sortField:"representative.name",filter:!0,filterField:"representative",showFilterMatchModes:!1,filterElement:e=>(0,t.jsx)(D.MultiSelect,{value:e.value,options:f,itemTemplate:v,onChange:t=>e.filterCallback(t.value),optionLabel:"name",placeholder:"Any",className:"p-column-filter"}),filterMenuStyle:{width:"14rem"},style:{width:"25%"}}),(0,t.jsx)(s.Column,{field:"status",header:"Status",body:e=>(0,t.jsx)(W.Tag,{value:e.status,severity:y(e.status)}),sortable:!0,filter:!0,filterElement:e=>(0,t.jsx)(I.Dropdown,{value:e.value,options:g,onChange:t=>e.filterCallback(t.value,e.index),itemTemplate:C,placeholder:"Select One",className:"p-column-filter",showClear:!0}),filterMenuStyle:{width:"14rem"},style:{width:"25%"}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:S,service:["CustomerService"]})]})}function eA(e){let[a,r]=(0,d.useState)([]),l={basic:`
<DataTable value={products} stripedRows tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function StripedRowsDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} stripedRows tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
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

export default function StripedRowsDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} stripedRows tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Alternating rows are displayed when ",(0,t.jsx)("i",{children:"stripedRows"})," property is present."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,stripedRows:!0,tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"code",header:"Code"}),(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"quantity",header:"Quantity"})]})})}),(0,t.jsx)(n.DocSectionCode,{code:l,service:["ProductService"]})]})}function eL(e){let[a,r]=(0,d.useState)([]),l=(0,t.jsxs)("div",{className:"flex flex-wrap align-items-center justify-content-between gap-2",children:[(0,t.jsx)("span",{className:"text-xl text-900 font-bold",children:"Products"}),(0,t.jsx)(L.Button,{icon:"pi pi-refresh",rounded:!0,raised:!0})]}),i=`In total there are ${a?a.length:0} products.`,p={basic:`
<DataTable value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
    <Column field="name" header="Name"></Column>
    <Column header="Image" body={imageBodyTemplate}></Column>
    <Column field="price" header="Price" body={priceBodyTemplate}></Column>
    <Column field="category" header="Category"></Column>
    <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
    <Column header="Status" body={statusBodyTemplate}></Column>
</DataTable>
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

export default function TemplateDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (product) => {
        return <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.image} className="w-6rem shadow-2 border-round" />;
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    const ratingBodyTemplate = (product) => {
        return <Rating value={product.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
    };

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

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Products</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    );
    const footer = \`In total there are \${products ? products.length : 0} products.\`;

    return (
        <div className="card">
            <DataTable value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                <Column field="name" header="Name"></Column>
                <Column header="Image" body={imageBodyTemplate}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                <Column field="category" header="Category"></Column>
                <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                <Column header="Status" body={statusBodyTemplate}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
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

export default function TemplateDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (product: Product) => {
        return <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.image} className="w-6rem shadow-2 border-round" />;
    };

    const priceBodyTemplate = (product: Product) => {
        return formatCurrency(product.price);
    };

    const ratingBodyTemplate = (product: Product) => {
        return <Rating value={product.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (product: Product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
    };

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

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Products</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    );
    const footer = \`In total there are \${products ? products.length : 0} products.\`;

    return (
        <div className="card">
            <DataTable value={products} header={header} footer={footer} tableStyle={{ minWidth: '60rem' }}>
                <Column field="name" header="Name"></Column>
                <Column header="Image" body={imageBodyTemplate}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                <Column field="category" header="Category"></Column>
                <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                <Column header="Status" body={statusBodyTemplate}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Custom content at ",(0,t.jsx)("i",{children:"header"}),", ",(0,t.jsx)("i",{children:"body"})," and ",(0,t.jsx)("i",{children:"footer"})," sections are supported via templating."]})}),(0,t.jsx)(m,{onLoad:()=>{u.ProductService.getProductsMini().then(e=>r(e))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,header:l,footer:i,tableStyle:{minWidth:"60rem"},children:[(0,t.jsx)(s.Column,{field:"name",header:"Name"}),(0,t.jsx)(s.Column,{header:"Image",body:e=>(0,t.jsx)("img",{src:`https://primefaces.org/cdn/primereact/images/product/${e.image}`,alt:e.image,className:"w-6rem shadow-2 border-round"})}),(0,t.jsx)(s.Column,{field:"price",header:"Price",body:e=>e.price.toLocaleString("en-US",{style:"currency",currency:"USD"})}),(0,t.jsx)(s.Column,{field:"category",header:"Category"}),(0,t.jsx)(s.Column,{field:"rating",header:"Reviews",body:e=>(0,t.jsx)(ei.Rating,{value:e.rating,readOnly:!0,cancel:!1})}),(0,t.jsx)(s.Column,{header:"Status",body:e=>(0,t.jsx)(W.Tag,{value:e.inventoryStatus,severity:(e=>{switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}})(e)})})]})})}),(0,t.jsx)(n.DocSectionCode,{code:p,service:["ProductService"]})]})}function eO(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datatable"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datatable-scrollable"}),(0,t.jsx)("td",{children:"Container element when table is scrollable."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datatable-header"}),(0,t.jsx)("td",{children:"Header section."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datatable-footer"}),(0,t.jsx)("td",{children:"Footer section."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datatable-wrapper"}),(0,t.jsx)("td",{children:"Wrapper of table element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datatable-table"}),(0,t.jsx)("td",{children:"Table element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datatable-thead"}),(0,t.jsx)("td",{children:"Table thead element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datatable-tbody"}),(0,t.jsx)("td",{children:"Table tbody element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datatable-tfoot"}),(0,t.jsx)("td",{children:"Table tfoot element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-column-title"}),(0,t.jsx)("td",{children:"Title of a column."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-sortable-column"}),(0,t.jsx)("td",{children:"Sortable column header."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-frozen-column"}),(0,t.jsx)("td",{children:"Frozen column header."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-rowgroup-header"}),(0,t.jsx)("td",{children:"Header of a rowgroup."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-rowgroup-footer"}),(0,t.jsx)("td",{children:"Footer of a rowgroup."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datatable-row-expansion"}),(0,t.jsx)("td",{children:"Expanded row content."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-row-toggler"}),(0,t.jsx)("td",{children:"Toggle element for row expansion."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-datatable-emptymessage"}),(0,t.jsx)("td",{children:"Cell containing the empty message."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-row-editor-init"}),(0,t.jsx)("td",{children:"Pencil button of row editor."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-row-editor-init"}),(0,t.jsx)("td",{children:"Save button of row editor."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-row-editor-init"}),(0,t.jsx)("td",{children:"Cancel button of row editor."})]})]})]})})]})}function e_(e){let a={basic:`
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
    datatable: {
        root: ({ props }) => ({
            className: classNames('relative', {
                'flex flex-col h-full': props.scrollable && props.scrollHeight === 'flex'
            })
        }),
        loadingoverlay: {
            className: classNames(
                'fixed w-full h-full t-0 l-0 bg-gray-100/40',
                'transition duration-200',
                'absolute flex items-center justify-center z-2',
                'dark:bg-gray-950/40' // Dark Mode
            )
        },
        loadingicon: 'w-8 h-8',
        wrapper: ({ props }) => ({
            className: classNames({
                relative: props.scrollable,
                'flex flex-col grow h-full': props.scrollable && props.scrollHeight === 'flex'
            })
        }),
        header: ({ props }) => ({
            className: classNames(
                'bg-slate-50 text-slate-700 border-gray-300 font-bold p-4',
                'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', // Dark Mode
                props.showGridlines ? 'border-x border-t border-b-0' : 'border-y border-x-0'
            )
        }),
        table: 'w-full border-spacing-0',
        thead: ({ context }) => ({
            className: classNames({
                'bg-slate-50 top-0 z-[1]': context.scrollable
            })
        }),
        tbody: ({ props, context }) => ({
            className: classNames({
                'sticky z-[1]': props.frozenRow && context.scrollable
            })
        }),
        tfoot: ({ context }) => ({
            className: classNames({
                'bg-slate-50 bottom-0 z-[1]': context.scrollable
            })
        }),
        footer: {
            className: classNames(
                'bg-slate-50 text-slate-700 border-t-0 border-b border-x-0 border-gray-300 font-bold p-4',
                'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900' // Dark Mode
            )
        },
        column: {
            headercell: ({ context, props }) => ({
                className: classNames(
                    'text-left border-0 border-b border-solid border-gray-300 dark:border-blue-900/40 font-bold',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    context.sorted ? 'bg-blue-50 text-blue-700' : 'bg-slate-50 text-slate-700', // Sort
                    context.sorted ? 'dark:text-white/80 dark:bg-blue-300' : 'dark:text-white/80 dark:bg-gray-900', // Dark Mode
                    {
                        'sticky z-[1]': props.frozen || props.frozen === '', // Frozen Columns
                        'border-x border-y': context?.showGridlines,
                        'overflow-hidden space-nowrap border-y relative bg-clip-padding': context.resizable // Resizable
                    }
                )
            }),
            headercontent: 'flex items-center',
            bodycell: ({ props, context }) => ({
                className: classNames(
                    'text-left border-0 border-b border-solid border-gray-300',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:text-white/80 dark:border-blue-900/40', // Dark Mode
                    {
                        'sticky bg-inherit': props && (props.frozen || props.frozen === ''), // Frozen Columns
                        'border-x border-y': context.showGridlines
                    }
                )
            }),
            footercell: ({ context }) => ({
                className: classNames(
                    'text-left border-0 border-b border-solid border-gray-300 font-bold',
                    'bg-slate-50 text-slate-700',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:text-white/80 dark:bg-gray-900 dark:border-blue-900/40', // Dark Mode
                    {
                        'border-x border-y': context.showGridlines
                    }
                )
            }),
            sorticon: ({ context }) => ({
                className: classNames('ml-2', context.sorted ? 'text-blue-700 dark:text-white/80' : 'text-slate-700 dark:text-white/70')
            }),
            sortbadge: {
                className: classNames(
                    'flex items-center justify-center align-middle',
                    'rounded-[50%] w-[1.143rem] leading-[1.143rem] ml-2',
                    'text-blue-700 bg-blue-50',
                    'dark:text-white/80 dark:bg-blue-400' // Dark Mode
                )
            },
            columnfilter: 'inline-flex items-center ml-auto',
            filteroverlay: {
                className: classNames(
                    'bg-white text-gray-600 border-0 rounded-md min-w-[12.5rem]',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' //Dark Mode
                )
            },
            filtermatchmodedropdown: {
                root: 'min-[0px]:flex mb-2'
            },
            filterrowitems: 'm-0 p-0 py-3 list-none ',
            filterrowitem: ({ context }) => ({
                className: classNames(
                    'm-0 py-3 px-5 bg-transparent',
                    'transition duration-200',
                    context?.highlighted ? 'text-blue-700 bg-blue-100 dark:text-white/80 dark:bg-blue-300' : 'text-gray-600 bg-transparent dark:text-white/80 dark:bg-transparent'
                )
            }),
            filteroperator: {
                className: classNames(
                    'px-5 py-3 border-b border-solid border-gray-300 text-slate-700 bg-slate-50 rounded-t-md',
                    'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900' // Dark Mode
                )
            },
            filteroperatordropdown: {
                root: 'min-[0px]:flex'
            },
            filterconstraint: 'p-5 border-b border-solid border-gray-300 dark:border-blue-900/40',
            filteraddrule: 'py-3 px-5',
            filteraddrulebutton: {
                root: 'justify-center w-full min-[0px]:text-sm',
                label: 'flex-auto grow-0',
                icon: 'mr-2'
            },
            filterremovebutton: {
                root: 'ml-2',
                label: 'grow-0'
            },
            filterbuttonbar: 'flex items-center justify-between p-5',
            filterclearbutton: {
                root: 'w-auto min-[0px]:text-sm border-blue-500 text-blue-500 px-4 py-3'
            },
            filterapplybutton: {
                root: 'w-auto min-[0px]:text-sm px-4 py-3'
            },
            filtermenubutton: ({ context }) => ({
                className: classNames(
                    'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative ml-2',
                    'w-8 h-8 rounded-[50%]',
                    'transition duration-200',
                    'hover:text-slate-700 hover:bg-gray-300/20', // Hover
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                    'dark:text-white/70 dark:hover:text-white/80 dark:bg-gray-900', // Dark Mode
                    {
                        'bg-blue-50 text-blue-700': context.active
                    }
                )
            }),
            headerfilterclearbutton: ({ context }) => ({
                className: classNames('inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative', 'text-left bg-transparent m-0 p-0 border-none select-none ml-2', {
                    invisible: !context.hidden
                })
            }),
            columnresizer: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',
            rowreordericon: 'cursor-move',
            roweditorinitbutton: {
                className: classNames(
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                )
            },
            roweditorsavebutton: {
                className: classNames(
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                )
            },
            roweditorcancelbutton: {
                className: classNames(
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                )
            },
            radioButton: {
                className: classNames('relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6')
            },
            radioButtonInput: {
                className: classNames(
                    'w-full h-full top-0 left-0 absolute appearance-none select-none',
                    'p-0 m-0 opacity-0 z-[1] rounded-[50%] outline-none',
                    'cursor-pointer peer'
                )
            },
            radioButtonBox: ({ context }) => ({
                className: classNames(
                    'flex items-center justify-center',
                    'h-6 w-6 rounded-full border-2 text-gray-700 transition duration-200 ease-in-out',
                    context.checked
                        ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400 peer-hover:bg-blue-700 peer-hover:border-blue-700'
                        : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900 peer-hover:border-blue-500',
                    {
                        'hover:border-blue-500 focus:shadow-input-focus focus:outline-none focus:outline-offset-0 dark:hover:border-blue-400 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled,
                    },
                ),
            }),
            radioButtonIcon: ({ context }) => ({
                className: classNames(
                    'transform rounded-full',
                    'block h-3 w-3 bg-white transition duration-200 dark:bg-gray-900',
                    {
                        'backface-hidden scale-10 invisible': context.checked === false,
                        'visible scale-100 transform': context.checked === true,
                    },
                ),
            }),
            headercheckboxwrapper: {
                className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6')
            },
            headercheckbox: ({ context }) => ({
                className: classNames(
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                )
            }),
            headercheckboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900',
            checkboxwrapper: {
                className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6')
            },
            checkbox: ({ context }) => ({
                className: classNames(
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                )
            }),
            checkboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900',
            transition: TRANSITIONS.overlay
        },
        bodyrow: ({ context }) => ({
            className: classNames(
                context.selected ? 'bg-blue-50 text-blue-700 dark:bg-blue-300' : 'bg-white text-gray-600 dark:bg-gray-900',
                context.stripedRows ? (context.index % 2 === 0 ? 'bg-white text-gray-600 dark:bg-gray-900' : 'bg-blue-50/50 text-gray-600 dark:bg-gray-950') : '',
                'transition duration-200',
                'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]', // Focus
                'dark:text-white/80 dark:focus:outline dark:focus:outline-[0.15rem] dark:focus:outline-blue-300 dark:focus:outline-offset-[-0.15rem]', // Dark Mode
                {
                    'cursor-pointer': context.selectable,
                    'hover:bg-gray-300/20 hover:text-gray-600': context.selectable && !context.selected // Hover
                }
            )
        }),
        rowexpansion: 'bg-white text-gray-600 dark:bg-gray-900 dark:text-white/80',
        rowgroupheader: {
            className: classNames('sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200')
        },
        rowgroupfooter: {
            className: classNames('sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200')
        },
        rowgrouptoggler: {
            className: classNames(
                'text-left m-0 p-0 cursor-pointer select-none',
                'inline-flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-[50%]',
                'transition duration-200',
                'dark:text-white/70' // Dark Mode
            )
        },
        rowgrouptogglericon: 'inline-block w-4 h-4',
        resizehelper: 'absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300'
    }
}
        `},r={javascript:`
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Slider } from 'primereact/slider';
import { Tag } from 'primereact/tag';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { CustomerService } from './service/CustomerService';

export default function UnstyledDemo() {
    const [customers, setCustomers] = useState(null);
    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [representatives] = useState([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'XuXue Feng', image: 'xuxuefeng.png' }
    ]);
    const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

    const getSeverity = (status) => {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    };

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => {
            setCustomers(getCustomers(data));
            setLoading(false);
        });
        initFilters();
    }, []);

    const getCustomers = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);

            return d;
        });
    };

    const formatDate = (value) => {
        return value.toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const clearFilter = () => {
        initFilters();
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            representative: { value: null, matchMode: FilterMatchMode.IN },
            date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
            balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
            verified: { value: null, matchMode: FilterMatchMode.EQUALS }
        });
        setGlobalFilterValue('');
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={\`flag flag-\${rowData.country.code}\`} style={{ width: '24px' }} />
                <span>{rowData.country.name}</span>
            </div>
        );
    };

    const filterClearTemplate = (options) => {
        return <Button type="button" icon="pi pi-times" onClick={options.filterClearCallback} severity="secondary"></Button>;
    };

    const filterApplyTemplate = (options) => {
        return <Button type="button" icon="pi pi-check" onClick={options.filterApplyCallback} severity="success"></Button>;
    };

    const filterFooterTemplate = () => {
        return <div className="px-3 pt-0 pb-3 text-center">Filter by Country</div>;
    };

    const representativeBodyTemplate = (rowData) => {
        const representative = rowData.representative;

        return (
            <div className="flex align-items-center gap-2">
                <img alt={representative.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${representative.image}\`} width="32" />
                <span>{representative.name}</span>
            </div>
        );
    };

    const representativeFilterTemplate = (options) => {
        return <MultiSelect value={options.value} options={representatives} itemTemplate={representativesItemTemplate} onChange={(e) => options.filterCallback(e.value)} optionLabel="name" placeholder="Any" className="p-column-filter" />;
    };

    const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={option.name} src={\`https://primefaces.org/cdn/primereact/images/avatar/\${option.image}\`} width="32" />
                <span>{option.name}</span>
            </div>
        );
    };

    const dateBodyTemplate = (rowData) => {
        return formatDate(rowData.date);
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />;
    };

    const balanceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.balance);
    };

    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
    };

    const statusFilterTemplate = (options) => {
        return <Dropdown value={options.value} options={statuses} onChange={(e) => options.filterCallback(e.value, options.index)} itemTemplate={statusItemTemplate} placeholder="Select One" className="p-column-filter" showClear />;
    };

    const statusItemTemplate = (option) => {
        return <Tag value={option} severity={getSeverity(option)} />;
    };

    const activityBodyTemplate = (rowData) => {
        return <ProgressBar value={rowData.activity} showValue={false} style={{ height: '6px' }}></ProgressBar>;
    };

    const activityFilterTemplate = (options) => {
        return (
            <React.Fragment>
                <Slider value={options.value} onChange={(e) => options.filterCallback(e.value)} range className="m-3"></Slider>
                <div className="flex align-items-center justify-between px-2">
                    <span>{options.value ? options.value[0] : 0}</span>
                    <span>{options.value ? options.value[1] : 100}</span>
                </div>
            </React.Fragment>
        );
    };

    const verifiedBodyTemplate = (rowData) => {
        return <i className={classNames('pi', { 'text-green-500 pi-check-circle': rowData.verified, 'text-red-500 pi-times-circle': !rowData.verified })}></i>;
    };

    const verifiedFilterTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2">
                <label htmlFor="verified-filter" className="font-bold">
                    Verified
                </label>
                <TriStateCheckbox inputId="verified-filter" value={options.value} onChange={(e) => options.filterCallback(e.value)} />
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="card">
            <DataTable value={customers} paginator showGridlines rows={10} loading={loading} dataKey="id" 
                    filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} header={header}
                    emptyMessage="No customers found.">
                <Column field="name" header="Name" filter filterPlaceholder="Search by name" style={{ minWidth: '12rem' }} />
                <Column header="Country" filterField="country.name" style={{ minWidth: '12rem' }} body={countryBodyTemplate}
                    filter filterPlaceholder="Search by country" filterClear={filterClearTemplate} 
                    filterApply={filterApplyTemplate} filterFooter={filterFooterTemplate} />
                <Column header="Agent" filterField="representative" showFilterMatchModes={false} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '14rem' }}
                    body={representativeBodyTemplate} filter filterElement={representativeFilterTemplate} />
                <Column header="Date" filterField="date" dataType="date" style={{ minWidth: '10rem' }} body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
                <Column header="Balance" filterField="balance" dataType="numeric" style={{ minWidth: '10rem' }} body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
                <Column field="status" header="Status" filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
                <Column field="activity" header="Activity" showFilterMatchModes={false} style={{ minWidth: '12rem' }} body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
                <Column field="verified" header="Verified" dataType="boolean" bodyClassName="text-center" style={{ minWidth: '8rem' }} body={verifiedBodyTemplate} filter filterElement={verifiedFilterTemplate} />
            </DataTable>
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(l.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(n.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(n.DocSectionCode,{code:r,embedded:!0,service:["CustomerService"]})]})})}var eq=e.i(50513);let eK={brands:["Vapid","Carson","Kitano","Dabver","Ibex","Morello","Akira","Titan","Dover","Norma"],colors:["Black","White","Red","Blue","Silver","Green","Yellow"],generateCar(e){return{id:e,vin:this.generateVin(),brand:this.generateBrand(),color:this.generateColor(),year:this.generateYear()}},generateVin(){let e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let a=0;a<5;a++)e+=t.charAt(Math.floor(Math.random()*t.length));return e},generateBrand(){return this.brands[Math.floor(Math.random()*Math.floor(10))]},generateColor(){return this.colors[Math.floor(Math.random()*Math.floor(7))]},generateYear:()=>2e3+Math.floor(Math.random()*Math.floor(19))};function ez(e){let[a,r]=(0,d.useState)(Array.from({length:1e5})),[l,i]=(0,d.useState)(!1),u=null,p=null,h={basic:`
<DataTable value={virtualCars} scrollable scrollHeight="400px"
    virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}
    tableStyle={{ minWidth: '50rem' }}>
    <Column field="id" header="Id" style={{ width: '20%' }}></Column>
    <Column field="vin" header="Vin" style={{ width: '20%' }}></Column>
    <Column field="year" header="Year" style={{ width: '20%' }}></Column>
    <Column field="brand" header="Brand" style={{ width: '20%' }}></Column>
    <Column field="color" header="Color" style={{ width: '20%' }}></Column>
</DataTable>
        `,javascript:`
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { CarService } from './service/CarService';

export default function LazyVirtualScrollDemo() {
    const cars = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
    const [virtualCars, setVirtualCars] = useState(Array.from({ length: 100000 }));
    const [lazyLoading, setLazyLoading] = useState(false);
    let loadLazyTimeout = null;

    const loadCarsLazy = (event) => {
        !lazyLoading && setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //simulate remote connection with a timeout
        loadLazyTimeout = setTimeout(() => {
            let _virtualCars = [...virtualCars];
            let { first, last } = event;

            //load data of required page
            const loadedCars = cars.slice(first, last);

            //populate page of virtual cars
            Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

            setVirtualCars(_virtualCars);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    };

    const loadingTemplate = (options) => {
        return (
            <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }}>
                <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
            </div>
        );
    };

    return (
        <div className="card">
            <DataTable value={virtualCars} scrollable scrollHeight="400px"
                virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}
                tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="Id" style={{ width: '20%' }}></Column>
                <Column field="vin" header="Vin" style={{ width: '20%' }}></Column>
                <Column field="year" header="Year" style={{ width: '20%' }}></Column>
                <Column field="brand" header="Brand" style={{ width: '20%' }}></Column>
                <Column field="color" header="Color" style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import { VirtualScrollerLazyEvent, VirtualScrollerLoadingTemplateOptions } from 'primereact/virtualscroller';
import { CarService } from './service/CarService';

interface Car {
    id: number;
    vin: string;
    brand: string;
    color: string;
    year: number;
}

export default function LazyVirtualScrollDemo() {
    const cars: Car[] = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));
    const [virtualCars, setVirtualCars] = useState<Car[]>(Array.from({ length: 100000 }));
    const [lazyLoading, setLazyLoading] = useState<boolean>(false);
    let loadLazyTimeout = null;

    const loadCarsLazy = (event: VirtualScrollerLazyEvent) => {
        !lazyLoading && setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //simulate remote connection with a timeout
        loadLazyTimeout = setTimeout(() => {
            let _virtualCars = [...virtualCars];
            let { first, last } = event;

            //load data of required page
            const loadedCars = cars.slice(first, last);

            //populate page of virtual cars
            Array.prototype.splice.apply(_virtualCars, [...[first, last - first], ...loadedCars]);

            setVirtualCars(_virtualCars);
            setLazyLoading(false);
        }, Math.random() * 1000 + 250);
    };

    const loadingTemplate = (options: VirtualScrollerLoadingTemplateOptions) => {
        return (
            <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }}>
                <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
            </div>
        );
    };

    return (
        <div className="card">
            <DataTable value={virtualCars} scrollable scrollHeight="400px"
                virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 46, delay: 200, showLoader: true, loading: lazyLoading, loadingTemplate }}
                tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="Id" style={{ width: '20%' }}></Column>
                <Column field="vin" header="Vin" style={{ width: '20%' }}></Column>
                <Column field="year" header="Year" style={{ width: '20%' }}></Column>
                <Column field="brand" header="Brand" style={{ width: '20%' }}></Column>
                <Column field="color" header="Color" style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1
    vin: tvACo,
    brand: Norma,
    color: Black,
    year: 2002
}
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["When lazy loading is enabled via the ",(0,t.jsx)("i",{children:"virtualScrollerOptions"}),", data is fetched on demand during scrolling instead of preload."]}),(0,t.jsxs)("p",{children:["In sample below, an in-memory list and timeout is used to mimic fetching from a remote datasource. The ",(0,t.jsx)("i",{children:"virtualCars"})," is an empty array that is populated on scroll."]})]}),(0,t.jsx)(m,{onLoad:()=>{p=Array.from({length:1e5}).map((e,t)=>eK.generateCar(t+1))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,scrollable:!0,scrollHeight:"400px",virtualScrollerOptions:{lazy:!0,onLazyLoad:e=>{l||i(!0),u&&clearTimeout(u),u=setTimeout(()=>{let t=[...a],{first:o,last:l}=e,n=p.slice(o,l);Array.prototype.splice.apply(t,[o,l-o,...n]),r(t),i(!1)},1e3*Math.random()+250)},itemSize:46,delay:200,showLoader:!0,loading:l,loadingTemplate:e=>(0,t.jsx)("div",{className:"flex align-items-center",style:{height:"17px",flexGrow:"1",overflow:"hidden"},children:(0,t.jsx)(eq.Skeleton,{width:e.cellEven?"year"===e.field?"30%":"40%":"60%",height:"1rem"})})},tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"id",header:"Id",style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"vin",header:"Vin",style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"year",header:"Year",style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"brand",header:"Brand",style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"color",header:"Color",style:{width:"20%"}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:h,service:["CarService"]})]})}function eY(e){let[a,r]=(0,d.useState)([]),i={basic:`
<DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }} tableStyle={{ minWidth: '50rem' }}>
    <Column field="id" header="Id" style={{ width: '20%' }}></Column>
    <Column field="vin" header="Vin" style={{ width: '20%' }}></Column>
    <Column field="year" header="Year" style={{ width: '20%' }}></Column>
    <Column field="brand" header="Brand" style={{ width: '20%' }}></Column>
    <Column field="color" header="Color" style={{ width: '20%' }}></Column>
</DataTable>
        `,javascript:`
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CarService } from './service/CarService';

export default function PreloadVirtualScrollDemo() {
    const cars = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));

    return (
        <div className="card">
            <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="Id" style={{ width: '20%' }}></Column>
                <Column field="vin" header="Vin" style={{ width: '20%' }}></Column>
                <Column field="year" header="Year" style={{ width: '20%' }}></Column>
                <Column field="brand" header="Brand" style={{ width: '20%' }}></Column>
                <Column field="color" header="Color" style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,typescript:`
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CarService } from './service/CarService';

interface Car {
    id: number;
    vin: string;
    brand: string;
    color: string;
    year: number;
}

export default function PreloadVirtualScrollDemo() {
    const cars: Car[] = Array.from({ length: 100000 }).map((_, i) => CarService.generateCar(i + 1));

    return (
        <div className="card">
            <DataTable value={cars} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="Id" style={{ width: '20%' }}></Column>
                <Column field="vin" header="Vin" style={{ width: '20%' }}></Column>
                <Column field="year" header="Year" style={{ width: '20%' }}></Column>
                <Column field="brand" header="Brand" style={{ width: '20%' }}></Column>
                <Column field="color" header="Color" style={{ width: '20%' }}></Column>
            </DataTable>
        </div>
    );
}
        `,data:`
{
    id: 1
    vin: tvACo,
    brand: Norma,
    color: Black,
    year: 2002
}
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Virtual Scrolling is an efficient way to render large amount data. Usage is similar to regular scrolling with the addition of ",(0,t.jsx)("i",{children:"virtualScrollerOptions"})," property to define a fixed ",(0,t.jsx)("i",{children:"itemSize"}),". Internally,"," ",(0,t.jsx)(l.default,{href:"/virtualscroller",children:"VirtualScroller"})," component is utilized so refer to the API of VirtualScroller for more information about the available options."]}),(0,t.jsxs)("p",{children:["In this example, ",(0,t.jsx)("strong",{children:"100000"})," preloaded records are rendered by the Table."]})]}),(0,t.jsx)(m,{onLoad:()=>{r(Array.from({length:1e5}).map((e,t)=>eK.generateCar(t+1)))},children:(0,t.jsx)("div",{className:"card",children:(0,t.jsxs)(c.DataTable,{value:a,scrollable:!0,scrollHeight:"400px",virtualScrollerOptions:{itemSize:46},tableStyle:{minWidth:"50rem"},children:[(0,t.jsx)(s.Column,{field:"id",header:"Id",style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"vin",header:"Vin",style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"year",header:"Year",style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"brand",header:"Brand",style:{width:"20%"}}),(0,t.jsx)(s.Column,{field:"color",header:"Color",style:{width:"20%"}})]})})}),(0,t.jsx)(n.DocSectionCode,{code:i,service:["CarService"]})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:eo},{id:"pt.datatable.options",label:"DataTable PT Options",component:a.default},{id:"pt.column.options",label:"Column PT Options",component:a.default},{id:"pt.columngroup.options",label:"ColumnGroup PT Options",component:a.default},{id:"pt.row.options",label:"Row PT Options",component:a.default}];return(0,t.jsx)(r.DocComponent,{title:"React Table Component",header:"DataTable",description:"DataTable displays data in tabular format.",componentDocs:[{id:"import",label:"Import",component:ee},{id:"basic",label:"Basic",component:p},{id:"dynamic_columns",label:"Dynamic Columns",component:E},{id:"template",label:"Template",component:eL},{id:"size",label:"Size",component:eE},{id:"gridlines",label:"Grid Lines",component:Z},{id:"striped",label:"Striped Rows",component:eA},{id:"paginator",label:"Paginator",children:[{id:"paginator_basic",label:"Basic",component:ea},{id:"paginator_template",label:"Template",component:er}]},{id:"sort",label:"Sort",children:[{id:"single_sort",label:"Single Column",component:eI},{id:"multiple_sort",label:"Multiple Columns",component:eR},{id:"pre_sort",label:"Presort",component:eB},{id:"removable_sort",label:"Removable",component:ek}]},{id:"filter",label:"Filter",children:[{id:"basic_filter",label:"Basic",component:J},{id:"advanced_filter",label:"Advanced",component:$},{id:"custom_filter",label:"Custom",component:X}]},{id:"row_selection",label:"Row Selection",children:[{id:"single_row_selection",label:"Single",component:eg},{id:"multiple_rows_selection",label:"Multiple",component:eh},{id:"radiobutton_row_selection",label:"RadioButton",component:ef},{id:"checkbox_row_selection",label:"Checkbox",component:eu},{id:"row_selection_events",label:"Events",component:ep},{id:"disabled_row_selection",label:"Disabled",component:em}]},{id:"cell_selection",label:"Cell Selection",children:[{id:"single_cell_selection",label:"Single",component:C},{id:"multiple_cells_selection",label:"Multiple",component:v},{id:"cell_selection_events",label:"Events",component:y},{id:"disabled_cells_selection",label:"Disabled",component:f}]},{id:"row_expansion",label:"Row Expansion",component:en},{id:"edit",label:"Edit",children:[{id:"cell_edit",label:"Cell",component:k},{id:"row_edit",label:"Row",component:A}]},{id:"lazy_load",label:"Lazy Load",component:et},{id:"scroll",label:"Scroll",children:[{id:"vertical_scroll",label:"Vertical",component:eF},{id:"flex_scroll",label:"Flexible",component:eT},{id:"horizontal_scroll",label:"Horizontal",component:eN},{id:"frozen_rows",label:"Frozen Rows",component:eP},{id:"frozen_columns",label:"Frozen Columns",component:ej}]},{id:"virtualscroll",label:"Virtual Scroll",children:[{id:"preload_virtualscroll",label:"Preload",component:eY},{id:"lazy_virtualscroll",label:"Lazy",component:ez}]},{id:"column_group",label:"Column Group",component:T},{id:"row_group",label:"Row Group",children:[{id:"rowgroup_subheader",label:"Subheader",component:ed},{id:"rowgroup_expandable",label:"Expandable",component:es},{id:"rowgroup_rowspan",label:"RowSpan",component:ec}]},{id:"conditional_style",label:"Conditional Style",component:N},{id:"column_resize",label:"Column Resize",children:[{id:"resize_fitmode",label:"Fit Mode",component:S},{id:"resize_expandmode",label:"Expand Mode",component:b}]},{id:"reorder",label:"Reorder",component:el},{id:"column_toggle",label:"Column Toggle",component:j},{id:"export",label:"Export",component:_},{id:"contextmenu",label:"Context Menu",component:M},{id:"stateful",label:"Stateful",component:eW},{id:"samples",label:"Samples",children:[{id:"customers",label:"Customers",component:ev},{id:"dtproducts",label:"Products",component:ew}]},{id:"accessibility",label:"Accessibility",component:i}],apiDocs:["DataTable","Column","Row","ColumnGroup"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:eO},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:e_}]}]})}],77559)},76363,(e,t,a)=>{let r="/datatable";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(77559)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})}]);