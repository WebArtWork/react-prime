(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,94032,e=>{"use strict";var t=e.i(91398),o=e.i(88850),n=e.i(82948),s=e.i(28137);function l(){return(0,t.jsxs)(s.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Value to describe the component can either be provided with ",(0,t.jsx)("i",{children:"aria-labelledby"})," or ",(0,t.jsx)("i",{children:"aria-label"})," props. The root list element has a ",(0,t.jsx)("i",{children:"tree"})," role whereas each list item has a ",(0,t.jsx)("i",{children:"treeitem"})," role along with ",(0,t.jsx)("i",{children:"aria-label"}),", ",(0,t.jsx)("i",{children:"aria-selected"})," and ",(0,t.jsx)("i",{children:"aria-expanded"})," attributes. In checkbox selection, ",(0,t.jsx)("i",{children:"aria-checked"})," is used instead of ",(0,t.jsx)("i",{children:"aria-selected"}),". The container element of a treenode has the ",(0,t.jsx)("i",{children:"group"})," role. Checkbox and toggle icons are hidden from screen readers as their parent element with ",(0,t.jsx)("i",{children:"treeitem"})," role and attributes are used instead for readers and keyboard support. The ",(0,t.jsx)("i",{children:"aria-setsize"}),", ",(0,t.jsx)("i",{children:"aria-posinset"})," and ",(0,t.jsx)("i",{children:"aria-level"})," attributes are calculated implicitly and added to each treeitem."]}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the first selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the next focusable element in the page tab sequence."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("i",{children:"shift"})," + ",(0,t.jsx)("i",{children:"tab"})]}),(0,t.jsx)("td",{children:"Moves focus to the last selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the previous focusable element in the page tab sequence."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Selects the focused treenode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Selects the focused treenode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next treenode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous treenode."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"right arrow"})}),(0,t.jsx)("td",{children:"If node is closed, opens the node otherwise moves focus to the first child node."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"If node is open, closes the node otherwise moves focus to the parent node."})]})]})]})})]})}var r=e.i(5180),a=e.i(82857),i=e.i(91788),d=e.i(57345);function c(e){let[o,n]=(0,i.useState)([]);(0,i.useEffect)(()=>{d.NodeService.getTreeNodes().then(e=>n(e))},[]);let l={basic:`
<Tree value={nodes} className="w-full md:w-30rem" />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

export default function BasicDemo() {
    const [nodes, setNodes] = useState([]);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} className="w-full md:w-30rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function BasicDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} className="w-full md:w-30rem" />
        </div>
    )
}
        `,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Tree requires a collection of ",(0,t.jsx)("i",{children:"TreeNode"})," instances as a ",(0,t.jsx)("i",{children:"value"}),"."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.Tree,{value:o,className:"w-full md:w-30rem"})}),(0,t.jsx)(r.DocSectionCode,{code:l,service:["NodeService"]})]})}var p=e.i(10492),m=e.i(29363),u=e.i(41158);function f(e){let[o,n]=(0,i.useState)([]),[l,c]=(0,i.useState)({}),[f,h]=(0,i.useState)(null),x=(0,i.useRef)(null),y=(0,i.useRef)(null),v=[{label:"View Key",icon:"pi pi-search",command:()=>{x.current.show({severity:"success",summary:"Node Key",detail:f})}},{label:"Toggle",icon:"pi pi-sort",command:()=>{let e={...l};e[f]?delete e[f]:e[f]=!0,c(e)}}];(0,i.useEffect)(()=>{d.NodeService.getTreeNodes().then(e=>n(e))},[]);let g={basic:`
<Toast ref={toast} />

<ContextMenu model={menu} ref={cm} />

<Tree value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} 
    contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={(e) => setSelectedNodeKey(e.value)} 
    onContextMenu={(e) => cm.current.show(e.originalEvent)} className="w-full md:w-30rem" />
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function ContextMenuDemo() {
    const [nodes, setNodes] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState({});
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menu = [
        {
            label: 'View Key',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Node Key', detail: selectedNodeKey });
            }
        },
        {
            label: 'Toggle',
            icon: 'pi pi-sort',
            command: () => {
                let _expandedKeys = { ...expandedKeys };

                if (_expandedKeys[selectedNodeKey]) delete _expandedKeys[selectedNodeKey];
                else _expandedKeys[selectedNodeKey] = true;

                setExpandedKeys(_expandedKeys);
            }
        }
    ];

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <>
            <Toast ref={toast} />
            
            <ContextMenu model={menu} ref={cm} />

            <div className="card flex justify-content-center">
                <Tree value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} 
                    contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={(e) => setSelectedNodeKey(e.value)} 
                    onContextMenu={(e) => cm.current.show(e.originalEvent)} className="w-full md:w-30rem" />
            </div>
        </>
    )
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { Tree, TreeExpandedKeysType } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function ContextMenuDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [expandedKeys, setExpandedKeys] = useState<TreeExpandedKeysType>({});
    const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>(null);
    const toast = useRef<Toast>(null);
    const cm = useRef<ContextMenu>(null);
    const menu = [
        {
            label: 'View Key',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Node Key', detail: selectedNodeKey });
            }
        },
        {
            label: 'Toggle',
            icon: 'pi pi-sort',
            command: () => {
                let _expandedKeys = { ...expandedKeys };

                if (_expandedKeys[selectedNodeKey]) delete _expandedKeys[selectedNodeKey];
                else _expandedKeys[selectedNodeKey] = true;

                setExpandedKeys(_expandedKeys);
            }
        }
    ];

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <>
            <Toast ref={toast} />

            <ContextMenu model={menu} ref={cm} />

            <div className="card flex justify-content-center">
                <Tree value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} 
                    contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={(e) => setSelectedNodeKey(e.value)} 
                    onContextMenu={(e) => cm.current.show(e.originalEvent)} className="w-full md:w-30rem" />
            </div>
        </>
    )
}
        `,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-sort',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Tree has exclusive integration with ",(0,t.jsx)(u.default,{href:"/contextMenu",children:"ContextMenu"})," using ",(0,t.jsx)("i",{children:"contextMenuSelectionKey"}),", ",(0,t.jsx)("i",{children:"onContextMenuSelectionChange"})," and ",(0,t.jsx)("i",{children:"onContextMenu"})," properties."]})}),(0,t.jsx)(m.Toast,{ref:x}),(0,t.jsx)(p.ContextMenu,{model:v,ref:y}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.Tree,{value:o,expandedKeys:l,onToggle:e=>c(e.value),contextMenuSelectionKey:f,onContextMenuSelectionChange:e=>h(e.value),onContextMenu:e=>y.current.show(e.originalEvent),className:"w-full md:w-30rem"})}),(0,t.jsx)(r.DocSectionCode,{code:g,service:["NodeService"]})]})}var h=e.i(57724);function x(e){let[o,n]=(0,i.useState)([]),[l,c]=(0,i.useState)({0:!0,"0-0":!0}),p=(e,t)=>{if(e.children&&e.children.length)for(let o of(t[e.key]=!0,e.children))p(o,t)};(0,i.useEffect)(()=>{d.NodeService.getTreeNodes().then(e=>n(e))},[]);let m={basic:`
<div className="flex flex-wrap gap-2 mb-4">
    <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} />
    <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
</div>

<Tree value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} className="w-full md:w-30rem" />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { Button } from 'primereact/button';
import { NodeService } from './service/NodeService';

export default function ControlledDemo() {
    const [nodes, setNodes] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState({'0': true, '0-0': true});

    const expandAll = () => {
        let _expandedKeys = {};

        for (let node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    };

    const collapseAll = () => {
        setExpandedKeys({});
    };

    const expandNode = (node, _expandedKeys) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    };

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);
    
    return (
        <div className="card flex flex-column align-items-center">
            <div className="flex flex-wrap gap-2 mb-4">
                <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} />
                <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
            </div>

            <Tree value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Tree, TreeExpandedKeysType } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import { Button } from 'primereact/button';
import { NodeService } from './service/NodeService';

export default function ControlledDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [expandedKeys, setExpandedKeys] = useState<TreeExpandedKeysType>({'0': true, '0-0': true});

    const expandAll = () => {
        let _expandedKeys = {};

        for (let node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    };

    const collapseAll = () => {
        setExpandedKeys({});
    };

    const expandNode = (node: TreeNode, _expandedKeys: TreeExpandedKeysType) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    };

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);
    
    return (
        <div className="card flex flex-column align-items-center">
            <div className="flex flex-wrap gap-2 mb-4">
                <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} />
                <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
            </div>

            <Tree value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        `,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Expanded state of nodes is managed programmatically with ",(0,t.jsx)("i",{children:"expandedKeys"})," and ",(0,t.jsx)("i",{children:"onToggle"})," properties."]})}),(0,t.jsxs)("div",{className:"card flex flex-column align-items-center",children:[(0,t.jsxs)("div",{className:"flex flex-wrap gap-2 mb-4",children:[(0,t.jsx)(h.Button,{type:"button",icon:"pi pi-plus",label:"Expand All",onClick:()=>{let e={};for(let t of o)p(t,e);c(e)}}),(0,t.jsx)(h.Button,{type:"button",icon:"pi pi-minus",label:"Collapse All",onClick:()=>{c({})}})]}),(0,t.jsx)(a.Tree,{value:o,expandedKeys:l,onToggle:e=>c(e.value),className:"w-full md:w-30rem"})]}),(0,t.jsx)(r.DocSectionCode,{code:m,service:["NodeService"]})]})}function y(e){let[o,n]=(0,i.useState)([]);(0,i.useEffect)(()=>{d.NodeService.getTreeNodes().then(e=>n(e))},[]);let l={basic:`
<Tree value={nodes} dragdropScope="demo" onDragDrop={(e) => setNodes(e.value)} className="w-full md:w-30rem" />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

export default function DragDropDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} dragdropScope="demo" onDragDrop={(e) => setNodes(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Tree, TreeDragDropEvent } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function DragDropDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} dragdropScope="demo" onDragDrop={(e: TreeDragDropEvent) => setNodes(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        `,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Nodes can be reordered with dragdrop using ",(0,t.jsx)("i",{children:"dragdropScope"})," and ",(0,t.jsx)("i",{children:"onDragDrop"})," properties. The ",(0,t.jsx)("i",{children:"dragdropScope"})," defines a unique scope of the component so that other drag events do not intervene with the component whereas ",(0,t.jsx)("i",{children:"onDragDrop"})," is a callback to update the new state after a drop."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.Tree,{value:o,dragdropScope:"demo",onDragDrop:e=>n(e.value),className:"w-full md:w-30rem"})}),(0,t.jsx)(r.DocSectionCode,{code:l,service:["NodeService"]})]})}function v(e){let[o,n]=(0,i.useState)([]),[l,c]=(0,i.useState)(""),p=(0,i.useRef)(null);(0,i.useEffect)(()=>{d.NodeService.getTreeNodes().then(e=>n(e))},[]);let u={basic:`
<Toast ref={toast} />
<Tree value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={(e) => setSelectedNodeKey(e.value)} 
    onExpand={onExpand} onCollapse={onCollapse} onSelect={onSelect} onUnselect={onUnselect} className="w-full md:w-30rem" />
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function EventsDemo() {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState('');
    const toast = useRef(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    const onExpand = (event) => {
        toast.current.show({ severity: 'success', summary: 'Node Expanded', detail: event.node.label });
    };

    const onCollapse = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Node Collapsed', detail: event.node.label });
    };

    const onSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    };

    const onUnselect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    };

    return (
        <>
            <Toast ref={toast} />
            <div className="card flex justify-content-center">
                <Tree value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={(e) => setSelectedNodeKey(e.value)} 
                    onExpand={onExpand} onCollapse={onCollapse} onSelect={onSelect} onUnselect={onUnselect} className="w-full md:w-30rem" />
            </div>
        </>
    )
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { Tree, TreeEventNodeEvent } from 'primereact/tree';
import { Toast } from 'primereact/toast';
import { TreeNode } from "primereact/treenode";
import { NodeService } from './service/NodeService';

export default function EventsDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string>('');
    const toast = useRef<Toast>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    const onExpand = (event: TreeEventNodeEvent) => {
        toast.current.show({ severity: 'success', summary: 'Node Expanded', detail: event.node.label });
    };

    const onCollapse = (event: TreeEventNodeEvent) => {
        toast.current.show({ severity: 'warn', summary: 'Node Collapsed', detail: event.node.label });
    };

    const onSelect = (event: TreeEventNodeEvent) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    };

    const onUnselect = (event: TreeEventNodeEvent) => {
        toast.current.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    };

    return (
        <>
            <Toast ref={toast} />
            <div className="card flex justify-content-center">
                <Tree value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={(e) => setSelectedNodeKey(e.value)} 
                    onExpand={onExpand} onCollapse={onCollapse} onSelect={onSelect} onUnselect={onUnselect} className="w-full md:w-30rem" />
            </div>
        </>
    )
}
        `,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"An event is provided for each type of user interaction such as expand, collapse and selection."})}),(0,t.jsx)(m.Toast,{ref:p}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.Tree,{value:o,selectionMode:"single",selectionKeys:l,onSelectionChange:e=>c(e.value),onExpand:e=>{p.current.show({severity:"success",summary:"Node Expanded",detail:e.node.label})},onCollapse:e=>{p.current.show({severity:"warn",summary:"Node Collapsed",detail:e.node.label})},onSelect:e=>{p.current.show({severity:"info",summary:"Node Selected",detail:e.node.label})},onUnselect:e=>{p.current.show({severity:"info",summary:"Node Unselected",detail:e.node.label})},className:"w-full md:w-30rem"})}),(0,t.jsx)(r.DocSectionCode,{code:u,service:["NodeService"]})]})}function g(e){let[o,n]=(0,i.useState)([]);(0,i.useEffect)(()=>{d.NodeService.getTreeNodes().then(e=>n(e))},[]);let l={basic:`
<Tree value={nodes} filter filterMode="lenient" filterPlaceholder="Lenient Filter" className="w-full md:w-30rem" />
<Tree value={nodes} filter filterMode="strict" filterPlaceholder="Strict Filter" className="w-full md:w-30rem" />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

export default function FilterDemo() {
    const [nodes, setNodes] = useState([]);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex flex-wrap justify-content-center gap-5">
            <Tree value={nodes} filter filterMode="lenient" filterPlaceholder="Lenient Filter" className="w-full md:w-30rem" />
            <Tree value={nodes} filter filterMode="strict" filterPlaceholder="Strict Filter" className="w-full md:w-30rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function FilterDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex flex-wrap justify-content-center gap-5">
            <Tree value={nodes} filter filterMode="lenient" filterPlaceholder="Lenient Filter" className="w-full md:w-30rem" />
            <Tree value={nodes} filter filterMode="strict" filterPlaceholder="Strict Filter" className="w-full md:w-30rem" />
        </div>
    )
}
        `,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Filtering is enabled by adding the ",(0,t.jsx)("i",{children:"filter"})," property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define"," ",(0,t.jsx)("i",{children:"filterBy"})," property. In addition ",(0,t.jsx)("i",{children:"filterMode"})," specifies the filtering strategy. In ",(0,t.jsx)("i",{children:"lenient"})," mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in ",(0,t.jsx)("i",{children:"strict"})," mode when the query matches a node, filtering continues on all descendants."]})}),(0,t.jsxs)("div",{className:"card flex flex-wrap justify-content-center gap-5",children:[(0,t.jsx)(a.Tree,{value:o,filter:!0,filterMode:"lenient",filterPlaceholder:"Lenient Filter",className:"w-full md:w-30rem"}),(0,t.jsx)(a.Tree,{value:o,filter:!0,filterMode:"strict",filterPlaceholder:"Strict Filter",className:"w-full md:w-30rem"})]}),(0,t.jsx)(r.DocSectionCode,{code:l,service:["NodeService"]})]})}function N(e){let o={basic:`
import { Tree } from 'primereact/tree';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)(r.DocSectionCode,{code:o,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function b(e){let[o,n]=(0,i.useState)([]),[l,d]=(0,i.useState)(!0);(0,i.useEffect)(()=>{setTimeout(()=>{n([{key:"0",label:"Node 0",leaf:!1},{key:"1",label:"Node 1",leaf:!1},{key:"2",label:"Node 2",leaf:!1}]),d(!1)},2e3)},[]);let c={basic:`
<Tree value={nodes} onExpand={loadOnExpand} loading={loading} className="w-full md:w-30rem" />
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';

export default function LazyDemo() {
    const [nodes, setNodes] = useState([]);
    const [loading, setLoading] = useState(true);

    const createLazyNodes = () => {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    const loadOnExpand = (event) => {
        if (!event.node.children) {
            setLoading(true);

            setTimeout(() => {
                let node = { ...event.node };

                node.children = [];

                for (let i = 0; i < 3; i++) {
                    node.children.push({
                        key: node.key + '-' + i,
                        label: 'Lazy ' + node.label + '-' + i
                    });
                }

                let value = [...nodes];
                
                value[parseInt(event.node.key, 10)] = node;
                setNodes(value);
                setLoading(false);
            }, 200);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setNodes(createLazyNodes());
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} onExpand={loadOnExpand} loading={loading} className="w-full md:w-30rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';

export default function LazyDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const createLazyNodes = () => {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    const loadOnExpand = (event) => {
        if (!event.node.children) {
            setLoading(true);

            setTimeout(() => {
                let node = { ...event.node };

                node.children = [];

                for (let i = 0; i < 3; i++) {
                    node.children.push({
                        key: node.key + '-' + i,
                        label: 'Lazy ' + node.label + '-' + i
                    });
                }

                let value = [...nodes];
                
                value[parseInt(event.node.key, 10)] = node;
                setNodes(value);
                setLoading(false);
            }, 200);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setNodes(createLazyNodes());
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} onExpand={loadOnExpand} loading={loading} className="w-full md:w-30rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using ",(0,t.jsx)("i",{children:"onExpand"})," event."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.Tree,{value:o,onExpand:e=>{e.node.children||(d(!0),setTimeout(()=>{let t={...e.node};t.children=[];for(let e=0;e<3;e++)t.children.push({key:t.key+"-"+e,label:"Lazy "+t.label+"-"+e});let s=[...o];s[parseInt(e.node.key,10)]=t,n(s),d(!1)},200))},loading:l,className:"w-full md:w-30rem"})}),(0,t.jsx)(r.DocSectionCode,{code:c})]})}let j=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/tree.jpg",alt:"tree"})})]});function S(e){let[o,n]=(0,i.useState)([]),[l,c]=(0,i.useState)(null);(0,i.useEffect)(()=>{d.NodeService.getTreeNodes().then(e=>n(e))},[]);let p={basic:`
{
    '0-0': {
        partialChecked: false,
        checked: true
    }
}
        `},m={basic:`
<Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys} 
    onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

export default function CheckboxSelectionDemo() {
    const [nodes, setNodes] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Tree, TreeCheckboxSelectionKeys } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function CheckboxSelectionDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<TreeCheckboxSelectionKeys | null>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        `,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["Selection of multiple nodes via checkboxes is enabled by configuring ",(0,t.jsx)("i",{children:"selectionMode"})," as ",(0,t.jsx)("i",{children:"checkbox"}),"."]}),(0,t.jsxs)("p",{children:["In checkbox selection mode, value binding should be a key-value pair where key is the node key and value is an object that has ",(0,t.jsx)("i",{children:"checked"})," and ",(0,t.jsx)("i",{children:"partialChecked"})," properties to represent the checked state of a node."]})]}),(0,t.jsx)(r.DocSectionCode,{code:p,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.Tree,{value:o,selectionMode:"checkbox",selectionKeys:l,onSelectionChange:e=>c(e.value),className:"w-full md:w-30rem"})}),(0,t.jsx)(r.DocSectionCode,{code:m,service:["NodeService"]})]})}var w=e.i(30164);function T(e){let[o,n]=(0,i.useState)([]),[l,c]=(0,i.useState)(null),[p,m]=(0,i.useState)(!1);(0,i.useEffect)(()=>{d.NodeService.getTreeNodes().then(e=>n(e))},[]);let u={basic:`
{
    '0-0': true,
    '0-1-0': true
}
        `},f={basic:`
<div className="flex align-items-center mb-4 gap-2">
    <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
    <label htmlFor="input-metakey">MetaKey</label>
</div>
<Tree value={nodes} metaKeySelection={metaKey} selectionMode="multiple" selectionKeys={selectedKeys} 
    onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

export default function MultipleSelectionDemo() {
    const [nodes, setNodes] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState(null);
    const [metaKey, setMetaKey] = useState(false);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex flex-column align-items-center justify-content-center">
            <div className="flex align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <Tree value={nodes} metaKeySelection={metaKey} selectionMode="multiple" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { Tree, TreeMultipleSelectionKeys } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function MultipleSelectionDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<TreeMultipleSelectionKeys | null>(null);
    const [metaKey, setMetaKey] = useState<boolean>(false);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex flex-column align-items-center justify-content-center">
            <div className="flex align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e: InputSwitchChangeEvent) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <Tree value={nodes} metaKeySelection={metaKey} selectionMode="multiple" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        `,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["More than one node is selectable by setting ",(0,t.jsx)("i",{children:"selectionMode"})," to ",(0,t.jsx)("i",{children:"multiple"}),". By default in multiple selection mode, metaKey press (e.g. ",(0,t.jsx)("i",{children:"⌘"}),") is necessary to add to existing selections however this can be configured with disabling the ",(0,t.jsx)("i",{children:"metaKeySelection"})," property. Note that in touch enabled devices, Tree always ignores metaKey."]}),(0,t.jsx)("p",{children:"In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection."})]}),(0,t.jsx)(r.DocSectionCode,{code:u,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsxs)("div",{className:"card flex flex-column align-items-center justify-content-center",children:[(0,t.jsxs)("div",{className:"flex align-items-center mb-4 gap-2",children:[(0,t.jsx)(w.InputSwitch,{inputId:"input-metakey",checked:p,onChange:e=>m(e.value)}),(0,t.jsx)("label",{htmlFor:"input-metakey",children:"MetaKey"})]}),(0,t.jsx)(a.Tree,{value:o,metaKeySelection:p,selectionMode:"multiple",selectionKeys:l,onSelectionChange:e=>c(e.value),className:"w-full md:w-30rem"})]}),(0,t.jsx)(r.DocSectionCode,{code:f,service:["NodeService"]})]})}function k(e){let[o,n]=(0,i.useState)([]),[l,c]=(0,i.useState)("");(0,i.useEffect)(()=>{d.NodeService.getTreeNodes().then(e=>n(e))},[]);let p={basic:`
<Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} 
    onSelectionChange={(e) => setSelectedKey(e.value)} className="w-full md:w-30rem" />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

export default function SingleSelectionDemo() {
    const [nodes, setNodes] = useState([]);
    const [selectedKey, setSelectedKey] = useState('');
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function SingleSelectionDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedKey, setSelectedKey] = useState<string>('');
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        `,data:`
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Single node selection is configured by setting ",(0,t.jsx)("i",{children:"selectionMode"})," as ",(0,t.jsx)("i",{children:"single"})," along with ",(0,t.jsx)("i",{children:"selectionKeys"})," and ",(0,t.jsx)("i",{children:"onSelectionChange"})," properties to manage the selection value binding."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.Tree,{value:o,selectionMode:"single",selectionKeys:l,onSelectionChange:e=>c(e.value),className:"w-full md:w-30rem"})}),(0,t.jsx)(r.DocSectionCode,{code:p,service:["NodeService"]})]})}var K=e.i(3935);function E(e){let o={basic:`
<Tree value={nodes} nodeTemplate={nodeTemplate} togglerTemplate={togglerTemplate} className="w-full md:w-30rem" />
        `,javascript:`
import React from 'react'; 
import { classNames } from 'primereact/utils';
import { Tree } from 'primereact/tree';

export default function TemplateDemo() {
    const nodes = [
        {
            key: "0",
            label: 'Installation',
            children: [
                { key: "0-0", label: 'Getting Started', url: 'https://reactjs.org/docs/getting-started.html' },
                { key: "0-1", label: 'Add React', url: 'https://reactjs.org/docs/add-react-to-a-website.html' },
                { key: "0-2", label: 'Create an App', url: 'https://reactjs.org/docs/create-a-new-react-app.html' },
                { key: "0-3", label: 'CDN Links', url: 'https://reactjs.org/docs/cdn-links.html' }
            ]
        },
        {
            key: "1",
            label: 'Main Concepts',
            children: [
                { key: "1-0", label: 'Hello World', url: 'https://reactjs.org/docs/hello-world.html' },
                { key: "1-1", label: 'Introducing JSX', url: 'https://reactjs.org/docs/introducing-jsx.html' },
                { key: "1-2", label: 'Rendering Elements', url: 'https://reactjs.org/docs/rendering-elements.html' },
                { key: "1-3", label: 'Components and Props', url: 'https://reactjs.org/docs/components-and-props.html' },
                { key: "1-4", label: 'State and LifeCycle', url: 'https://reactjs.org/docs/state-and-lifecycle.html' },
                { key: "1-5", label: 'Handling Events', url: 'https://reactjs.org/docs/handling-events.html' }
            ]
        }
    ];

    const nodeTemplate = (node, options) => {
        let label = <b>{node.label}</b>;

        if (node.url) {
            label = <a href={node.url} className="text-700 hover:text-primary" target="_blank" rel="noopener noreferrer">{node.label}</a>;
        }

        return <span className={options.className}>{label}</span>;
    }

    const togglerTemplate = (node, options) => {
        if (!node) {
            return;
        }

        const expanded = options.expanded;
        const iconClassName = classNames('p-tree-toggler-icon pi pi-fw', {
            'pi-caret-right': !expanded,
            'pi-caret-down': expanded
        });

        return (
            <button type="button" className="p-tree-toggler p-link" tabIndex={-1} onClick={options.onClick}>
                <span className={iconClassName} aria-hidden="true"></span>
            </button>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} nodeTemplate={nodeTemplate} togglerTemplate={togglerTemplate} className="w-full md:w-30rem" />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { classNames } from 'primereact/utils';
import { Tree, TreeNodeTemplateOptions, TreeTogglerTemplateOptions } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';

export default function TemplateDemo() {
    const nodes: TreeNode[] = [
        {
            key: "0",
            label: 'Installation',
            children: [
                { key: "0-0", label: 'Getting Started', url: 'https://reactjs.org/docs/getting-started.html' },
                { key: "0-1", label: 'Add React', url: 'https://reactjs.org/docs/add-react-to-a-website.html' },
                { key: "0-2", label: 'Create an App', url: 'https://reactjs.org/docs/create-a-new-react-app.html' },
                { key: "0-3", label: 'CDN Links', url: 'https://reactjs.org/docs/cdn-links.html' }
            ]
        },
        {
            key: "1",
            label: 'Main Concepts',
            children: [
                { key: "1-0", label: 'Hello World', url: 'https://reactjs.org/docs/hello-world.html' },
                { key: "1-1", label: 'Introducing JSX', url: 'https://reactjs.org/docs/introducing-jsx.html' },
                { key: "1-2", label: 'Rendering Elements', url: 'https://reactjs.org/docs/rendering-elements.html' },
                { key: "1-3", label: 'Components and Props', url: 'https://reactjs.org/docs/components-and-props.html' },
                { key: "1-4", label: 'State and LifeCycle', url: 'https://reactjs.org/docs/state-and-lifecycle.html' },
                { key: "1-5", label: 'Handling Events', url: 'https://reactjs.org/docs/handling-events.html' }
            ]
        }
    ];

    const nodeTemplate = (node: TreeNode, options: TreeNodeTemplateOptions) => {
        let label = <b>{node.label}</b>;

        if (node.url) {
            label = <a href={node.url} className="text-700 hover:text-primary" target="_blank" rel="noopener noreferrer">{node.label}</a>;
        }

        return <span className={options.className}>{label}</span>;
    }

    const togglerTemplate = (node: TreeNode, options: TreeTogglerTemplateOptions) => {
        if (!node) {
            return;
        }

        const expanded = options.expanded;
        const iconClassName = classNames('p-tree-toggler-icon pi pi-fw', {
            'pi-caret-right': !expanded,
            'pi-caret-down': expanded
        });

        return (
            <button type="button" className="p-tree-toggler p-link" tabIndex={-1} onClick={options.onClick}>
                <span className={iconClassName} aria-hidden="true"></span>
            </button>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} nodeTemplate={nodeTemplate} togglerTemplate={togglerTemplate} className="w-full md:w-30rem" />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Custom node content instead of a node label is defined with the ",(0,t.jsx)("i",{children:"nodeTemplate"})," property. The toggler can be customized with the ",(0,t.jsx)("i",{children:"togglerTemplate"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(a.Tree,{value:[{key:"0",label:"Installation",children:[{key:"0-0",label:"Getting Started",url:"https://reactjs.org/docs/getting-started.html"},{key:"0-1",label:"Add React",url:"https://reactjs.org/docs/add-react-to-a-website.html"},{key:"0-2",label:"Create an App",url:"https://reactjs.org/docs/create-a-new-react-app.html"},{key:"0-3",label:"CDN Links",url:"https://reactjs.org/docs/cdn-links.html"}]},{key:"1",label:"Main Concepts",children:[{key:"1-0",label:"Hello World",url:"https://reactjs.org/docs/hello-world.html"},{key:"1-1",label:"Introducing JSX",url:"https://reactjs.org/docs/introducing-jsx.html"},{key:"1-2",label:"Rendering Elements",url:"https://reactjs.org/docs/rendering-elements.html"},{key:"1-3",label:"Components and Props",url:"https://reactjs.org/docs/components-and-props.html"},{key:"1-4",label:"State and LifeCycle",url:"https://reactjs.org/docs/state-and-lifecycle.html"},{key:"1-5",label:"Handling Events",url:"https://reactjs.org/docs/handling-events.html"}]}],nodeTemplate:(e,o)=>{let n=(0,t.jsx)("b",{children:e.label});return e.url&&(n=(0,t.jsx)("a",{href:e.url,className:"text-700 hover:text-primary",target:"_blank",rel:"noopener noreferrer",children:e.label})),(0,t.jsx)("span",{className:o.className,children:n})},togglerTemplate:(e,o)=>{if(!e)return;let n=o.expanded,s=(0,K.classNames)("p-tree-toggler-icon pi pi-fw",{"pi-caret-right":!n,"pi-caret-down":n});return(0,t.jsx)("button",{type:"button","data-pc-section":"toggler",className:"p-tree-toggler p-link",tabIndex:-1,onClick:o.onClick,children:(0,t.jsx)("span",{className:s,"aria-hidden":"true"})})},className:"w-full md:w-30rem"})}),(0,t.jsx)(r.DocSectionCode,{code:o})]})}function C(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-tree"}),(0,t.jsx)("td",{children:"Main container element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-tree-horizontal"}),(0,t.jsx)("td",{children:"Main container element in horizontal mode"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-tree-container"}),(0,t.jsx)("td",{children:"Container of nodes"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treenode"}),(0,t.jsx)("td",{children:"A treenode element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treenode-content"}),(0,t.jsx)("td",{children:"Content of a treenode"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treenode-toggler"}),(0,t.jsx)("td",{children:"Toggle element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treenode-toggler-icon"}),(0,t.jsx)("td",{children:"Toggle icon"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treenode-icon"}),(0,t.jsx)("td",{children:"Icon of a treenode"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treenode-label"}),(0,t.jsx)("td",{children:"Label of a treenode"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-treenode-children"}),(0,t.jsx)("td",{children:"Container element for node children"})]})]})]})})]})}function D(e){let o={basic:`
const Tailwind = {
    tree: {
        root: {
            className: classNames('max-w-[30rem] md:w-full', 'border border-solid border-gray-300 dark:border-blue-900/40 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 p-5 rounded-md')
        },
        wrapper: 'overflow-auto',
        container: 'm-0 p-0 list-none overflow-auto',
        node: 'p-1 outline-none',
        content: ({ context, props }) => ({
            className: classNames(
                'flex items-center',
                'rounded-lg transition-shadow duration-200 p-2',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'bg-blue-50 text-blue-600': context.selected },
                { 'cursor-pointer select-none': props.selectionMode == 'single' || props.selectionMode == 'multiple' }
            )
        }),
        toggler: ({ context }) => ({
            className: classNames(
                'cursor-pointer select-none inline-flex items-center justify-center overflow-hidden relative shrink-0',
                'mr-2 w-8 h-8 border-0 bg-transparent rounded-full transition duration-200',
                'hover:border-transparent focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'text-gray-500 dark:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80  hover:text-gray-800 dark:hover:text-white/80': !context.selected,
                    'text-blue-600 hover:bg-white/30': context.selected
                },
                {
                    hidden: context.leaf
                }
            )
        }),
        checkboxcontainer: 'mr-2',
        checkbox: ({ context, props }) => ({
            className: classNames(
                'cursor-pointer inline-flex relative select-none align-bottom',
                'w-6 h-6',
                'flex items-center justify-center',
                'border-2 w-6 h-6 rounded-lg transition-colors duration-200 text-white text-base dark:text-gray-900',
                {
                    'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900': !context.checked,
                    'border-blue-500 text-white bg-blue-500 dark:border-blue-400 dark:bg-blue-400': context.checked
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            )
        }),
        nodeicon: 'mr-2 text-gray-600 dark:text-white/70',
        subgroup: {
            className: classNames('m-0 list-none', 'p-0 pl-4')
        },
        filtercontainer: {
            className: classNames('mb-2', 'relative block w-full')
        },
        input: {
            className: classNames(
                'm-0 p-3 text-base w-full pr-7',
                'font-sans text-gray-600 dark:text-white/70 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        searchicon: 'absolute top-1/2 -mt-2 right-3 text-gray-600 dark:hover:text-white/70'
    }
}
        `},n={javascript:`
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

export default function UnstyledDemo() {
    const [nodes, setNodes] = useState([]);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} className="w-full md:w-30rem" />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(s.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(u.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(r.DocSectionCode,{code:o,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(r.DocSectionCode,{code:n,embedded:!0,service:["NodeService"]})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:j},{id:"pt.tree.options",label:"Tree PT Options",component:o.default}];return(0,t.jsx)(n.DocComponent,{title:"React Tree Component",header:"Tree",description:"Tree is used to display hierarchical data.",componentDocs:[{id:"import",label:"Import",component:N},{id:"basic",label:"Basic",component:c},{id:"controlled",label:"Controlled",component:x},{id:"selection",label:"Selection",children:[{id:"singleselection",label:"Single",component:k},{id:"multipleselection",label:"Multiple",component:T},{id:"checkboxselection",label:"Checkbox",component:S}]},{id:"events",label:"Events",component:v},{id:"lazy",label:"Lazy",component:b},{id:"template",label:"Template",component:E},{id:"dragdrop",label:"DragDrop",component:y},{id:"contextmenu",label:"ContextMenu",component:f},{id:"filter",label:"Filter",component:g},{id:"accessibility",label:"Accessibility",component:l}],apiDocs:["Tree","TreeNode"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:C},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:D}]}]})}],94032)},35859,(e,t,o)=>{let n="/tree";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(94032)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);