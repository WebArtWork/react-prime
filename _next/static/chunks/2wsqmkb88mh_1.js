(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,8907,e=>{"use strict";var t=e.i(91398),s=e.i(88850),n=e.i(82948),i=e.i(5180),r=e.i(28137);function a(){let e={basic:`
<label htmlFor="men1">Username</label>
<Mention inputId="men1" />

<span id="men2">Email</span>
<Mention aria-labelledby="men2" />

<Mention aria-label="City" />
    `};return(0,t.jsxs)(r.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Value to describe the component can either be provided via ",(0,t.jsx)("i",{children:"label"})," tag combined with ",(0,t.jsx)("i",{children:"inputId"})," prop or using ",(0,t.jsx)("i",{children:"aria-labelledby"}),", ",(0,t.jsx)("i",{children:"aria-label"})," props. The input element has ",(0,t.jsx)("i",{children:"combobox"})," role in addition to"," ",(0,t.jsx)("i",{children:"aria-autocomplete"}),", ",(0,t.jsx)("i",{children:"aria-haspopup"})," and ",(0,t.jsx)("i",{children:"aria-expanded"})," attributes. The relation between the input and the popup is created with ",(0,t.jsx)("i",{children:"aria-controls"})," and ",(0,t.jsx)("i",{children:"aria-activedescendant"})," attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list."]}),(0,t.jsxs)("p",{children:["The popup list has an id that refers to the ",(0,t.jsx)("i",{children:"aria-controls"})," attribute of the input element and uses ",(0,t.jsx)("i",{children:"listbox"})," as the role. Each list item has ",(0,t.jsx)("i",{children:"option"})," role and an id to match the ",(0,t.jsx)("i",{children:"aria-activedescendant"})," of the input element."]}),(0,t.jsx)(i.DocSectionCode,{code:e,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus to the input element when popup is not visible. If the popup is open and an item is highlighted then popup gets closed, item gets selected and focus moves to the next focusable element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"up arrow"})}),(0,t.jsx)("td",{children:"Highlights the previous item if popup is visible."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"down arrow"})}),(0,t.jsx)("td",{children:"Highlights the next item if popup is visible."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Selects the highlighted item and closes the popup if popup is visible."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Highlights the first item if popup is visible."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Highlights the last item if popup is visible."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"escape"})}),(0,t.jsx)("td",{children:"Hides the popup."})]})]})]})})]})}var o=e.i(91788),l=e.i(4242),c=e.i(10836),u=e.i(15498),m=e.i(87350),g=e.i(60150),d=e.i(36785),p=e.i(4632),h=e.i(71834),f=e.i(41978),v=e.i(81201),x=e.i(85971),S=e.i(50901),y=e.i(45543),C=e.i(51551),w=e.i(63957),j=e.i(3935);let b=`
@layer primereact {
    .p-mention {
        display: inline-flex;
        position: relative;
    }
    
    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
    }
    
    .p-mention .p-mention-panel {
        min-width: 100%;
    }
    
    .p-mention-panel {
        position: absolute;
        top: 0;
        left: 0;
        overflow: auto;
    }
    
    .p-mention-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    
    .p-mention-item {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }
    
    .p-fluid .p-mention {
        display: flex;
    }
}
`,T=u.ComponentBase.extend({defaultProps:{__TYPE:"Mention",autoHighlight:!0,autoResize:!1,className:null,delay:0,field:null,footerTemplate:null,headerTemplate:null,id:null,inputClassName:null,inputId:null,inputRef:null,inputStyle:null,itemTemplate:null,onBlur:null,onChange:null,onFocus:null,onHide:null,onInput:null,onSearch:null,onSelect:null,onShow:null,panelClassName:null,panelStyle:null,scrollHeight:"200px",style:null,suggestions:null,transitionOptions:null,trigger:"@",variant:null,children:void 0},css:{classes:{item:({isSelected:e})=>(0,j.classNames)("p-mention-item",{"p-highlight":e}),items:"p-mention-items",panel:({props:e})=>(0,j.classNames)("p-mention-panel p-component",e.panelClassName),input:({props:e})=>(0,j.classNames)("p-mention-input",e.inputClassName),root:({props:e,isFilled:t,focusedState:s})=>(0,j.classNames)("p-mention p-component p-inputwrapper",{"p-inputwrapper-filled":t,"p-inputwrapper-focus":s}),transition:"p-connected-overlay"},styles:b}}),k=o.memo(o.forwardRef((e,s)=>{let n,i,r,a,b,k,E=(0,g.useMergeProps)(),N=o.useContext(c.PrimeReactContext),q=T.getProps(e,N),[M,D]=o.useState(!1),[L,I]=o.useState(!1),[R,H]=o.useState(!1),[$,z]=o.useState(null),[B,V]=o.useState([]),A=o.useRef(null),O=o.useRef(null),_=o.useRef(q.inputRef),F=o.useRef(null),W=o.useRef(null),U={props:q,state:{overlayVisible:M,focused:L,searching:R,trigger:$}},{ptm:P,cx:J,sx:K,isUnstyled:X}=T.setMetaData(U);(0,u.useHandleStyle)(T.css.styles,X,{name:"mention"});let[Z,Y]=(0,d.useOverlayListener)({target:A,overlay:O,listener:(e,{valid:t,type:s})=>{t&&(N.hideOverlaysOnDocumentScrolling||"outside"===s?Q():y.DomHandler.isDocument(e.target)||ee())},when:M}),G=()=>{D(!0)},Q=()=>{D(!1),H(!1),z(null)},ee=()=>{if($){let{key:e,index:t}=$,s=_.current.value,n=y.DomHandler.getCursorOffset(_.current,s.substring(0,t-1),s.substring(t),e);O.current.style.transformOrigin="top",O.current.style.left=`calc(${n.left}px + 1rem)`,O.current.style.top=`calc(${n.top}px + 1.2rem)`}},et=e=>{W.current&&clearTimeout(W.current);let{value:t,selectionStart:s}=e.target,n=t.substring(s-1,s);if(" "===n)return void Q();let i=((e,t,s)=>{if(!$){let n=Array.isArray(q.trigger)?q.trigger.find(e=>e===t):q.trigger===t?q.trigger:null;if(n)return{key:n,index:s};let i=e.substring(0,s).lastIndexOf(" "),r=((e,t)=>{if(Array.isArray(q.trigger)){let s={};return q.trigger.forEach(n=>{let i=e.substring(0,t).lastIndexOf(n);-1!==i&&(i>s.index||!s.index)&&(s={key:n,index:-1!==i?i+1:-1})}),s}let s=e.substring(0,t).lastIndexOf(q.trigger);return{key:q.trigger,index:-1!==s?s+1:-1}})(e,s);if(r.index>i)return r}return $})(t,n,s);if(i&&i.index>-1){let n=t.substring(i.index,s);W.current=setTimeout(()=>{es(e,n,i)},q.delay)}},es=(e,t,s)=>{q.onSearch&&(H(!0),z(s),q.onSearch({originalEvent:e,trigger:s.key,query:t}))},en=(e,t)=>{let s=_.current,n=s.value,i=s.selectionStart,r=n.indexOf(" ",$.index),a=n.substring($.index,r>-1?r:i),o=ei(t).replace(/\s+/g,"");if(a.trim()!==o){let t=n.substring(0,$.index),s=n.substring(r>-1?i:$.index+a.length);_.current.value=" "===s[0]?`${t}${o}${s}`:`${t}${o} ${s}`,e.target=_.current,q.onChange&&q.onChange(e)}let l=$.index+o.length+1;_.current.setSelectionRange(l,l),Q(),q.onSelect&&q.onSelect({originalEvent:e,suggestion:t})},ei=e=>{if(e){let t=Array.isArray(q.field)?q.field[q.trigger.findIndex(e=>e===$.key)]:q.field;return t?C.ObjectUtils.resolveFieldData(e,t):e}return""},er=_.current&&_.current.value,ea=o.useMemo(()=>C.ObjectUtils.isNotEmpty(q.value)||C.ObjectUtils.isNotEmpty(q.defaultValue)||C.ObjectUtils.isNotEmpty(er),[q.value,q.defaultValue,er]);o.useImperativeHandle(s,()=>({props:q,show:G,hide:Q,focus:()=>y.DomHandler.focus(_.current),getElement:()=>A.current,getOverlay:()=>O.current,getInput:()=>_.current})),o.useEffect(()=>{C.ObjectUtils.combinedRefs(_,q.inputRef)},[_,q.inputRef]),(0,h.useUpdateEffect)(()=>{let e=q.suggestions&&q.suggestions.length;e&&V(q.suggestions.map(()=>!1)),R&&(e?G():Q(),M&&ee(),H(!1))},[q.suggestions]),(0,h.useUpdateEffect)(()=>{let e=X(),t=e?y.DomHandler.isAttributeEquals(A.current,"data-p-inputwrapper-filled",!0):y.DomHandler.hasClass(A.current,"p-inputwrapper-filled");!ea&&t&&(e?y.DomHandler.setAttributes(A.current,{"data-p-inputwrapper-filled":!1}):y.DomHandler.removeClass(A.current,"p-inputwrapper-filled"))},[ea]),(0,p.useUnmountEffect)(()=>{w.ZIndexUtils.clear(O.current)});let eo=(e,s)=>{let n,i=s+"_item",r=q.itemTemplate?C.ObjectUtils.getJSXElement(q.itemTemplate,e,{trigger:$?$.key:"",index:s}):ei(e),a=B[s],l=E({className:J("item",{isSelected:a}),onClick:t=>{y.DomHandler.focus(_.current),en(t,e)},"data-p-highlight":a},(n={selected:a},P("item",{context:{trigger:$?$.key:""},state:{...n}})));return(0,o.createElement)("li",{...l,key:i,children:[r,(0,t.jsx)(S.Ripple,{})]})},el=T.getOtherProps(q),ec=(n=C.ObjectUtils.getJSXElement(q.headerTemplate,q),i=C.ObjectUtils.getJSXElement(q.footerTemplate,q),r=(()=>{let e=E({ref:F,className:J("items")},P("items"));if(q.suggestions){let s=q.suggestions.map(eo);return(0,t.jsx)("ul",{...e,children:s})}return null})(),a=E({ref:O,className:J("panel"),style:{maxHeight:q.scrollHeight,...q.panelStyle},onClick:e=>{v.OverlayService.emit("overlay-click",{originalEvent:e,target:A.current})}},P("panel")),b=E({classNames:J("transition"),in:M,timeout:{enter:120,exit:100},options:q.transitionOptions,unmountOnExit:!0,onEnter:()=>{w.ZIndexUtils.set("overlay",O.current,N&&N.autoZIndex||l.default.autoZIndex,N&&N.zIndex.overlay||l.default.zIndex.overlay),y.DomHandler.addStyles(O.current,{position:"absolute",top:"0",left:"0"}),ee()},onEntering:()=>{q.autoHighlight&&q.suggestions&&q.suggestions.length&&V(e=>{let t=[...e];return t[0]=!0,t})},onEntered:()=>{Z(),q.onShow&&q.onShow()},onExit:()=>{Y()},onExited:()=>{w.ZIndexUtils.clear(O.current),q.onHide&&q.onHide()}},P("transition")),k=(0,t.jsx)(m.CSSTransition,{nodeRef:O,...b,children:(0,t.jsxs)("div",{...a,children:[n,r,i]})}),(0,t.jsx)(x.Portal,{element:k,appendTo:"self"})),eu=E({ref:_,id:q.inputId,className:J("input"),style:q.inputStyle,...el,unstyled:q.unstyled,variant:q.variant,autoResize:q.autoResize,onFocus:e=>{I(!0),q.onFocus&&q.onFocus(e)},onBlur:e=>{I(!1),q.onBlur&&q.onBlur(e)},onKeyDown:e=>{if(M){let t=y.DomHandler.findSingle(O.current,'li[data-p-highlight="true"]');switch(e.which){case 40:if(t){let e=t.nextElementSibling;if(e){let s=y.DomHandler.index(e),n=y.DomHandler.index(t);V(e=>{let t=[...e];return t[s]=!0,t[n]=!1,t}),y.DomHandler.scrollInView(O.current,e)}}else if(t=y.DomHandler.findSingle(O.current,"li")){let e=y.DomHandler.index(t);V(t=>{let s=[...t];return s[e]=!0,s})}e.preventDefault();break;case 38:if(t){let e=t.previousElementSibling;if(e){let s=y.DomHandler.index(e),n=y.DomHandler.index(t);V(e=>{let t=[...e];return t[s]=!0,t[n]=!1,t}),y.DomHandler.scrollInView(O.current,e)}}e.preventDefault();break;case 8:let{value:s,selectionStart:n}=e.target;s.substring(n-1,n)===$.key&&Q();break;case 13:t&&en(e,q.suggestions[y.DomHandler.index(t)]),e.preventDefault();break;case 27:Q(),e.preventDefault()}}},onInput:e=>{q.onInput&&q.onInput(e);let t=e.target.value.length>0;X()?y.DomHandler.setAttributes(A.current,{"data-p-inputwrapper-filled":t}):t?y.DomHandler.addClass(A.current,"p-inputwrapper-filled"):y.DomHandler.removeClass(A.current,"p-inputwrapper-filled")},onKeyUp:e=>{(37===e.which||39===e.which)&&et(e)},onChange:e=>{q.onChange&&q.onChange(e),et(e)},__parentMetadata:{parent:U}},P("input")),em=E({ref:A,id:q.id,className:(0,j.classNames)(q.className,J("root",{focusedState:L,isFilled:ea})),style:q.style},T.getOtherProps(q),P("root"));return(0,t.jsxs)("div",{...em,children:[(0,t.jsx)(f.InputTextarea,{...eu}),ec]})}));k.displayName="Mention";var E=e.i(10286);function N(e){let[s,n]=(0,o.useState)(""),[a,l]=(0,o.useState)([]),[c,u]=(0,o.useState)([]);(0,o.useEffect)(()=>{E.CustomerService.getCustomersSmall().then(e=>{e.forEach(e=>e.nickname=`${e.name.replace(/\s+/g,"").toLowerCase()}_${e.id}`),l(e)})},[]);let m={basic:`
<Mention value={value} onChange={(e) => setValue(e.target.value)} suggestions={suggestions} onSearch={onSearch} field="nickname" 
    placeholder="Enter @ to mention people" rows={5} cols={40} itemTemplate={itemTemplate} autoResize />
        `,javascript:`
import React, { useState, useEffect } from "react";
import { Mention } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function AutoResizeDemo() {
    const [value, setValue] = useState('');
    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    
    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onSearch = (event) => {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            }
            else {
                suggestions = customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    }

    const itemTemplate = (suggestion) => {
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center">
            <Mention value={value} onChange={(e) => setValue(e.target.value)} suggestions={suggestions} onSearch={onSearch} field="nickname" 
                placeholder="Enter @ to mention people" rows={5} cols={40} itemTemplate={itemTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from "react";
import { Mention, MentionSearchEvent } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function AutoResizeDemo() {
    const [value, setValue] = useState<string>('');
    const [customers, setCustomers] = useState<any>([]);
    const [suggestions, setSuggestions] = useState<any>([]);
    
    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onSearch = (event: MentionSearchEvent) => {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            }
            else {
                suggestions = customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    }

    const itemTemplate = (suggestion: any) => {
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center">
            <Mention value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} suggestions={suggestions} onSearch={onSearch} field="nickname" 
                placeholder="Enter @ to mention people" rows={5} cols={40} itemTemplate={itemTemplate} autoResize />
        </div>
    )
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
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"autoResize"})," is enabled, textarea grows instead of displaying a scrollbar."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(k,{value:s,onChange:e=>n(e.target.value),suggestions:c,onSearch:e=>{setTimeout(()=>{let t=e.query;u(t.trim().length?a.filter(e=>e.nickname.toLowerCase().startsWith(t.toLowerCase())):[...a])},250)},field:"nickname",placeholder:"Enter @ to mention people",rows:5,cols:40,itemTemplate:e=>{let s="https://primefaces.org/cdn/primereact/images/avatar/"+e.representative.image;return(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.name,src:s,width:"32"}),(0,t.jsxs)("span",{className:"flex flex-column ml-2",children:[e.name,(0,t.jsxs)("small",{style:{fontSize:".75rem",color:"var(--text-color-secondary)"},children:["@",e.nickname]})]})]})},autoResize:!0})}),(0,t.jsx)(i.DocSectionCode,{code:m,service:["CustomerService"]})]})}function q(e){let[s,n]=(0,o.useState)(""),[a,l]=(0,o.useState)([]),[c,u]=(0,o.useState)([]);(0,o.useEffect)(()=>{E.CustomerService.getCustomersSmall().then(e=>{e.forEach(e=>e.nickname=`${e.name.replace(/\s+/g,"").toLowerCase()}_${e.id}`),l(e)})},[]);let m={basic:`
<Mention value={value} onChange={(e) => setValue(e.target.value)} suggestions={suggestions} onSearch={onSearch} field="nickname" 
    placeholder="Enter @ to mention people" rows={5} cols={40} itemTemplate={itemTemplate} />
        `,javascript:`
import React, { useState, useEffect } from "react";
import { Mention } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function BasicDemo() {
    const [value, setValue] = useState('');
    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    
    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onSearch = (event) => {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            }
            else {
                suggestions = customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    }

    const itemTemplate = (suggestion) => {
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center">
            <Mention value={value} onChange={(e) => setValue(e.target.value)} suggestions={suggestions} onSearch={onSearch} field="nickname" 
                placeholder="Enter @ to mention people" rows={5} cols={40} itemTemplate={itemTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from "react";
import { Mention, MentionSearchEvent } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');
    const [customers, setCustomers] = useState<any>([]);
    const [suggestions, setSuggestions] = useState<any>([]);
    
    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onSearch = (event: MentionSearchEvent) => {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            }
            else {
                suggestions = customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    }

    const itemTemplate = (suggestion: any) => {
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center">
            <Mention value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} suggestions={suggestions} onSearch={onSearch} field="nickname" 
                placeholder="Enter @ to mention people" rows={5} cols={40} itemTemplate={itemTemplate} />
        </div>
    )
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
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Mention is used as a controlled component with ",(0,t.jsx)("i",{children:"value"})," and ",(0,t.jsx)("i",{children:"onChange"})," properties. In addition, ",(0,t.jsx)("i",{children:"suggestions"})," and a ",(0,t.jsx)("i",{children:"onSearch"})," are required to query the results."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(k,{value:s,onChange:e=>n(e.target.value),suggestions:c,onSearch:e=>{setTimeout(()=>{let t=e.query;u(t.trim().length?a.filter(e=>e.nickname.toLowerCase().startsWith(t.toLowerCase())):[...a])},250)},field:"nickname",placeholder:"Enter @ to mention people",rows:5,cols:40,itemTemplate:e=>{let s="https://primefaces.org/cdn/primereact/images/avatar/"+e.representative.image;return(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.name,src:s,width:"32"}),(0,t.jsxs)("span",{className:"flex flex-column ml-2",children:[e.name,(0,t.jsxs)("small",{style:{fontSize:".75rem",color:"var(--text-color-secondary)"},children:["@",e.nickname]})]})]})}})}),(0,t.jsx)(i.DocSectionCode,{code:m,service:["CustomerService"]})]})}function M(e){let s={basic:`
<Mention disabled />
        `,javascript:`
import React from "react";
import { Mention } from 'primereact/mention';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Mention disabled />
        </div>
    )
}
        `,typescript:`
import React from "react";
import { Mention } from 'primereact/mention';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Mention disabled />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"disabled"})," is present, the element cannot be edited and focused."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(k,{disabled:!0})}),(0,t.jsx)(i.DocSectionCode,{code:s})]})}function D(e){let[s,n]=(0,o.useState)(""),[a,l]=(0,o.useState)([]),[c,u]=(0,o.useState)([]);(0,o.useEffect)(()=>{E.CustomerService.getCustomersSmall().then(e=>{e.forEach(e=>e.nickname=`${e.name.replace(/\s+/g,"").toLowerCase()}_${e.id}`),l(e)})},[]);let m={basic:`
<span className="p-float-label">
    <Mention inputId="newpost" value={value} onChange={(e) => setValue(e.target.value)} suggestions={suggestions} onSearch={onSearch} 
        field="nickname" rows={5} cols={40} itemTemplate={itemTemplate} />
    <label htmlFor="newpost">New Post</label>
</span>
        `,javascript:`
import React, { useState, useEffect } from "react";
import { Mention } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function FloatLabelDemo() {
    const [value, setValue] = useState('');
    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    
    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onSearch = (event) => {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            }
            else {
                suggestions = customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    }

    const itemTemplate = (suggestion) => {
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <Mention inputId="newpost" value={value} onChange={(e) => setValue(e.target.value)} suggestions={suggestions} onSearch={onSearch} 
                    field="nickname" rows={5} cols={40} itemTemplate={itemTemplate} />
                <label htmlFor="newpost">New Post</label>
            </span>
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from "react";
import { Mention, MentionSearchEvent } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function FloatLabelDoc() {
    const [value, setValue] = useState<string>('');
    const [customers, setCustomers] = useState<any>([]);
    const [suggestions, setSuggestions] = useState<any>([]);
    
    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onSearch = (event: MentionSearchEvent) => {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            }
            else {
                suggestions = customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    }

    const itemTemplate = (suggestion: any) => {
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <Mention inputId="newpost" value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} suggestions={suggestions} onSearch={onSearch} 
                    field="nickname" rows={5} cols={40} itemTemplate={itemTemplate} />
                <label htmlFor="newpost">New Post</label>
            </span>
        </div>
    )
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
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"A floating label appears on top of the input field when focused."})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsxs)("span",{className:"p-float-label",children:[(0,t.jsx)(k,{inputId:"newpost",value:s,onChange:e=>n(e.target.value),suggestions:c,onSearch:e=>{setTimeout(()=>{let t=e.query;u(t.trim().length?a.filter(e=>e.nickname.toLowerCase().startsWith(t.toLowerCase())):[...a])},250)},field:"nickname",rows:5,cols:40,itemTemplate:e=>{let s="https://primefaces.org/cdn/primereact/images/avatar/"+e.representative.image;return(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.name,src:s,width:"32"}),(0,t.jsxs)("span",{className:"flex flex-column ml-2",children:[e.name,(0,t.jsxs)("small",{style:{fontSize:".75rem",color:"var(--text-color-secondary)"},children:["@",e.nickname]})]})]})}}),(0,t.jsx)("label",{htmlFor:"newpost",children:"New Post"})]})}),(0,t.jsx)(i.DocSectionCode,{code:m,service:["CustomerService"]})]})}function L(e){let s={basic:`
import { Mention } from 'primereact/mention';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function I(e){let[s,n]=(0,o.useState)(""),[a,l]=(0,o.useState)([]),[c,u]=(0,o.useState)([]);(0,o.useEffect)(()=>{E.CustomerService.getCustomersSmall().then(e=>{e.forEach(e=>e.nickname=`${e.name.replace(/\s+/g,"").toLowerCase()}_${e.id}`),l(e)})},[]);let m={basic:`
<Mention value={value} onChange={(e) => setValue(e.target.value)} suggestions={suggestions} onSearch={onSearch} field="nickname" 
    placeholder="Enter @ to mention people" rows={5} cols={40} itemTemplate={itemTemplate} inputClassName="p-invalid" />
        `,javascript:`
import React, { useState, useEffect } from "react";
import { Mention } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function InvalidDemo() {
    const [value, setValue] = useState('');
    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    
    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onSearch = (event) => {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            }
            else {
                suggestions = customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    }

    const itemTemplate = (suggestion) => {
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center">
            <Mention value={value} onChange={(e) => setValue(e.target.value)} suggestions={suggestions} onSearch={onSearch} field="nickname" 
                placeholder="Enter @ to mention people" rows={5} cols={40} itemTemplate={itemTemplate} inputClassName="p-invalid" />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from "react";
import { Mention, MentionSearchEvent } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function InvalidDemo() {
    const [value, setValue] = useState<string>('');
    const [customers, setCustomers] = useState<any>([]);
    const [suggestions, setSuggestions] = useState<any>([]);
    
    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onSearch = (event: MentionSearchEvent) => {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            }
            else {
                suggestions = customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    }

    const itemTemplate = (suggestion: any) => {
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src} width="32" />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    return (
        <div className="card flex justify-content-center">
            <Mention value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} suggestions={suggestions} onSearch={onSearch} field="nickname" 
                placeholder="Enter @ to mention people" rows={5} cols={40} itemTemplate={itemTemplate} inputClassName="p-invalid" />
        </div>
    )
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
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Invalid state style is added using the ",(0,t.jsx)("i",{children:"p-invalid"})," class to indicate a failed validation."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(k,{value:s,onChange:e=>n(e.target.value),suggestions:c,onSearch:e=>{setTimeout(()=>{let t=e.query;u(t.trim().length?a.filter(e=>e.nickname.toLowerCase().startsWith(t.toLowerCase())):[...a])},250)},field:"nickname",placeholder:"Enter @ to mention people",rows:5,cols:40,itemTemplate:e=>{let s="https://primefaces.org/cdn/primereact/images/avatar/"+e.representative.image;return(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.name,src:s,width:"32"}),(0,t.jsxs)("span",{className:"flex flex-column ml-2",children:[e.name,(0,t.jsxs)("small",{style:{fontSize:".75rem",color:"var(--text-color-secondary)"},children:["@",e.nickname]})]})]})},inputClassName:"p-invalid"})}),(0,t.jsx)(i.DocSectionCode,{code:m,service:["CustomerService"]})]})}let R=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/mention.jpg",alt:"mention"})})]});var H=e.i(41158);function $(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{id:"style",label:"Style",children:(0,t.jsxs)("p",{children:["Following is the list of structural style classes, for theming classes visit ",(0,t.jsx)(H.default,{href:"/theming",children:"theming"})," page."]})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-mention"}),(0,t.jsx)("td",{children:"Container element"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-mention-panel"}),(0,t.jsx)("td",{children:"Overlay panel of suggestions."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-mention-items"}),(0,t.jsx)("td",{children:"List container of suggestions."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-mention-item"}),(0,t.jsx)("td",{children:"List item of a suggestion."})]})]})]})})]})}function z(e){let s={basic:`
const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};        

const Tailwind = {
    mention: {
        root: 'relative',
        panel: 'max-h-[200px] overflow-auto bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg',
        items: 'py-3 list-none m-0',
        item: 'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap m-0 p-3 border-0 transition-shadow duration-200 rounded-none dark:text-white/80 dark:hover:bg-gray-800 hover:text-gray-700 hover:bg-gray-200',
        transition: TRANSITIONS.overlay
    }
}
    `},n={javascript:`
import React, { useState, useEffect } from "react";
import { Mention } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function UnstyledDemo() {
    const [value, setValue] = useState('');
    const [customers, setCustomers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    
    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onSearch = (event) => {
        //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
        setTimeout(() => {
            const query = event.query;
            let suggestions;

            if (!query.trim().length) {
                suggestions = [...customers];
            }
            else {
                suggestions = customers.filter((customer) => {
                    return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                });
            }

            setSuggestions(suggestions);
        }, 250);
    }

    const itemTemplate = (suggestion) => {
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;

        return (
            <div className="flex items-center">
                <img alt={suggestion.name} src={src} width="32" />
                <span className="flex flex-col ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    return (
        <div className="card flex justify-center">
            <Mention value={value} onChange={(e) => setValue(e.target.value)} suggestions={suggestions} onSearch={onSearch} field="nickname" 
                placeholder="Enter @ to mention people" rows={5} cols={40} itemTemplate={itemTemplate} />
        </div>
    )
}`};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(H.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(i.DocSectionCode,{code:n,embedded:!0,service:["CustomerService"]})]})})}function B(e){let[s,n]=(0,o.useState)(""),[a,l]=(0,o.useState)([]),[c,u]=(0,o.useState)([]),m=["primereact","primefaces","primeng","primevue"];(0,o.useEffect)(()=>{E.CustomerService.getCustomersSmall().then(e=>{e.forEach(e=>e.nickname=`${e.name.replace(/\s+/g,"").toLowerCase()}_${e.id}`),l(e)})},[]);let g={basic:`
<Mention value={value} onChange={(e) => setValue(e.target.value)} trigger={['@', '#']} suggestions={multipleSuggestions} onSearch={onMultipleSearch}
    field={['nickname']} placeholder="Enter @ to mention people, # to mention tag" itemTemplate={multipleItemTemplate} rows={5} cols={40} />
        `,javascript:`
import React, { useState, useEffect } from "react";
import { Mention } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function TriggersDemo() {
    const [value, setValue] = useState('');
    const [customers, setCustomers] = useState([]);
    const [multipleSuggestions, setMultipleSuggestions]= useState([]);
    const tagSuggestions = ['primereact', 'primefaces', 'primeng', 'primevue'];

    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onMultipleSearch = (event) => {
        const trigger = event.trigger;

        if (trigger === '@') {
            //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
            setTimeout(() => {
                const query = event.query;
                let suggestions;

                if (!query.trim().length) {
                    suggestions = [...customers];
                }
                else {
                    suggestions = customers.filter((customer) => {
                        return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                    });
                }

                setMultipleSuggestions(suggestions);
            }, 250);
        }
        else if (trigger === '#') {
            setTimeout(() => {
                const query = event.query;
                let suggestions;

                if (!query.trim().length) {
                    suggestions = [...tagSuggestions];
                }
                else {
                    suggestions = tagSuggestions.filter((tag) => {
                        return tag.toLowerCase().startsWith(query.toLowerCase());
                    });
                }

                setMultipleSuggestions(suggestions);
            }, 250);
        }
    }

    const itemTemplate = (suggestion) => {
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;
        
        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src}th="32" />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    const multipleItemTemplate = (suggestion, options) => {
        const trigger = options.trigger;

        if (trigger === '@' && suggestion.nickname) {
            return itemTemplate(suggestion);
        }
        else if (trigger === '#' && !suggestion.nickname) {
            return <span>{suggestion}</span>;
        }

        return null;
    }

    return (
        <div className="card flex justify-content-center">
            <Mention value={value} onChange={(e) => setValue(e.target.value)} trigger={['@', '#']} suggestions={multipleSuggestions} onSearch={onMultipleSearch}
                field={['nickname']} placeholder="Enter @ to mention people, # to mention tag" itemTemplate={multipleItemTemplate} rows={5} cols={40} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from "react";
import { Mention, MentionSearchEvent, MentionItemTemplateOptions } from 'primereact/mention';
import { CustomerService } from './service/CustomerService';

export default function TriggersDemo() {
    const [value, setValue] = useState<string>('');
    const [customers, setCustomers] = useState<any>([]);
    const [multipleSuggestions, setMultipleSuggestions]= useState<any>([]);
    const tagSuggestions = ['primereact', 'primefaces', 'primeng', 'primevue'];
    
    useEffect(() => {
        CustomerService.getCustomersSmall().then(data => {
            data.forEach(d => d['nickname'] = \`\${d.name.replace(/\\s+/g, '').toLowerCase()}_\${d.id}\`);
            setCustomers(data);
        });
    }, [])

    const onMultipleSearch = (event: MentionSearchEvent) => {
        const trigger = event.trigger;

        if (trigger === '@') {
            //in a real application, make a request to a remote url with the query and return suggestions, for demo we filter at client side
            setTimeout(() => {
                const query = event.query;
                let suggestions;

                if (!query.trim().length) {
                    suggestions = [...customers];
                }
                else {
                    suggestions = customers.filter((customer) => {
                        return customer.nickname.toLowerCase().startsWith(query.toLowerCase());
                    });
                }

                setMultipleSuggestions(suggestions);
            }, 250);
        }
        else if (trigger === '#') {
            setTimeout(() => {
                const query = event.query;
                let suggestions;

                if (!query.trim().length) {
                    suggestions = [...tagSuggestions];
                }
                else {
                    suggestions = tagSuggestions.filter((tag) => {
                        return tag.toLowerCase().startsWith(query.toLowerCase());
                    });
                }

                setMultipleSuggestions(suggestions);
            }, 250);
        }
    }

    const itemTemplate = (suggestion) => {
        const src = 'https://primefaces.org/cdn/primereact/images/avatar/' + suggestion.representative.image;
        
        return (
            <div className="flex align-items-center">
                <img alt={suggestion.name} src={src}th="32" />
                <span className="flex flex-column ml-2">
                    {suggestion.name}
                    <small style={{ fontSize: '.75rem', color: 'var(--text-color-secondary)' }}>@{suggestion.nickname}</small>
                </span>
            </div>
        );
    }

    const multipleItemTemplate = (suggestion: any, options: MentionItemTemplateOptions) => {
        const trigger = options.trigger;

        if (trigger === '@' && suggestion.nickname) {
            return itemTemplate(suggestion);
        }
        else if (trigger === '#' && !suggestion.nickname) {
            return <span>{suggestion}</span>;
        }

        return null;
    }

    return (
        <div className="card flex justify-content-center">
            <Mention value={value} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)} trigger={['@', '#']} suggestions={multipleSuggestions} onSearch={onMultipleSearch}
                field={['nickname']} placeholder="Enter @ to mention people, # to mention tag" itemTemplate={multipleItemTemplate} rows={5} cols={40} />
        </div>
    )
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
       `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"It is used to define the expected keyword/s in the input field to mention someone or something."})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(k,{value:s,onChange:e=>n(e.target.value),trigger:["@","#"],suggestions:c,onSearch:e=>{let t=e.trigger;"@"===t?setTimeout(()=>{let t=e.query;u(t.trim().length?a.filter(e=>e.nickname.toLowerCase().startsWith(t.toLowerCase())):[...a])},250):"#"===t&&setTimeout(()=>{let t=e.query;u(t.trim().length?m.filter(e=>e.toLowerCase().startsWith(t.toLowerCase())):[...m])},250)},field:["nickname"],placeholder:"Enter @ to mention people, # to mention tag",itemTemplate:(e,s)=>{let n=s.trigger;if("@"===n&&e.nickname){let s;return s="https://primefaces.org/cdn/primereact/images/avatar/"+e.representative.image,(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)("img",{alt:e.name,src:s,width:"32"}),(0,t.jsxs)("span",{className:"flex flex-column ml-2",children:[e.name,(0,t.jsxs)("small",{style:{fontSize:".75rem",color:"var(--text-color-secondary)"},children:["@",e.nickname]})]})]})}return"#"!==n||e.nickname?null:(0,t.jsx)("span",{children:e})},rows:5,cols:40})}),(0,t.jsx)(i.DocSectionCode,{code:g,service:["CustomerService"]})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:R},{id:"pt.mention.options",label:"Mention PT Options",component:s.default}];return(0,t.jsx)(n.DocComponent,{title:"React Mention Component",header:"Mention",description:"Mention component is used to tag objects in a text.",componentDocs:[{id:"import",label:"Import",component:L},{id:"basic",label:"Basic",component:q},{id:"triggers",label:"Triggers",component:B},{id:"autoresize",label:"Auto Resize",component:N},{id:"floatlabel",label:"Float Label",component:D},{id:"invalid",label:"Invalid",component:I},{id:"disabled",label:"Disabled",component:M},{id:"accessibility",label:"Accessibility",component:a}],apiDocs:["Mention"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:$},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:z}]}]})}],8907)},27536,(e,t,s)=>{let n="/mention";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(8907)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);