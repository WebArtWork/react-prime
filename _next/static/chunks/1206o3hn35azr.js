(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),s=e.i(91788);e.s(["CodeHighlight",0,function(e){let n=(0,s.useRef)(),r=`language-${e.lang||"jsx"}`;return(0,s.useEffect)(()=>{window.Prism.highlightElement(n.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:n,className:r,children:[e.children," "]})})}])},82948,88850,e=>{"use strict";var t=e.i(91398),s=e.i(3935),n=e.i(58678),r=e.i(3828),i=e.i(91788),a=e.i(51551),o=e.i(72124),c=e.i(41158),l=e.i(87914),d=e.i(28137);let p=e=>{let n=(0,i.useContext)(l.default),{id:o,data:p,name:u,description:m,allowLink:h=!0}=e,f=o.startsWith("pt."),b=(0,r.useRouter)();if(a.ObjectUtils.isNotEmpty(p)){let r=Object.keys(p[0]),l=(e,t)=>{let s=document.getElementById(e);s&&s.parentElement.scrollIntoView({block:"start",behavior:t})},x=(e,n,r)=>{if(h&&e)return e.split("|").map((e,a)=>{if(e.includes(u)){let s=e.indexOf(u),n=e.substring(s).replace(/(\[|\]|<|>).*$/gm,"").trim(),r=u===n?`api.${u}`:`api.${u}.${n===`${u}Props`?"props":n}`;return(0,t.jsxs)(i.default.Fragment,{children:[0!==a?"|":"",(0,t.jsx)(c.default,{href:b.basePath+b.pathname+`#${r}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>l(r,"smooth"),children:e})})]},a)}return(0,t.jsxs)(i.default.Fragment,{children:[0!==a?"|":"",n?(0,t.jsxs)("span",{id:o+"."+e,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!r}),title:r,children:[e,(0,t.jsx)(c.default,{href:b.basePath+b.pathname+`#${o+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>l(o+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},a)});let a=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return n?(0,t.jsxs)("span",{id:o+"."+a,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!r}),title:r,children:[a,(0,t.jsx)(c.default,{href:b.basePath+b.pathname+`#${o+"."+a}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>l(o+"."+a),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):a},j=(0,t.jsx)(i.default.Fragment,{children:f?(0,t.jsx)("tr",{children:r.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:r.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),v=(0,t.jsx)(i.default.Fragment,{children:p.map((e,r)=>{if(f){let{value:s,label:n,description:i}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:s}),(0,t.jsx)("td",{children:n}),(0,t.jsx)("td",{children:i})]},r)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([r,i],o)=>"readonly"!==r&&"optional"!==r&&"deprecated"!==r&&(0,t.jsx)("td",{children:"parameters"===r?i.map((e,s)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:x(e.type)}),(0,t.jsx)("br",{})]},s)):"default"===r?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-default",{"doc-option-dark":n.darkMode,"doc-option-light":!n.darkMode}),children:a.ObjectUtils.isEmpty(i)?"null":x(i,"name"===r,e.deprecated)}):"type"===r?(0,t.jsx)("span",{className:"doc-option-type",children:x(i,"name"===r,e.deprecated)}):"returnType"===r?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-returnType",{"doc-option-dark":n.darkMode,"doc-option-light":!n.darkMode}),children:x(i,"name"===r,e.deprecated)}):"description"===r||"values"===r?(0,t.jsx)("span",{className:"doc-option-description",children:i}):x(i,"name"===r,e.deprecated)},o))},r)})});return(0,t.jsxs)(i.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:m})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:j}),(0,t.jsx)("tbody",{children:v})]})})]},o)}return null};e.s(["default",0,p],88850);var u=e.i(71864),m=e.i(38076);function h(e){let{doc:s,header:n}=e,r=e.apiExclude,c=s.reduce((e,s)=>{let n,i=s.split("."),c=(n=i[0])&&n[0].toUpperCase()+n.slice(1)||"",l=o.default[c.toLowerCase()],d=(e,t)=>r&&r[e]&&r[e].includes(t),u=e=>r&&r[e]&&"excludeAll"===r[e];if(l){let n=(e,s)=>{if(a.ObjectUtils.isNotEmpty(l.events)&&a.ObjectUtils.isNotEmpty(l.events.values)&&!u("events")){let n={id:`api.${s}.events`,label:"Events",description:l.events.description,children:[]};Object.entries(l.events.values).forEach(([e,r])=>{let[i,a]=[`api.${s}.${e}`,e];d("event",e)||n.children.push({id:i,label:a,component:e=>(0,t.jsx)(p,{name:s,data:r.props,description:(0,t.jsxs)(t.Fragment,{children:[r.description," See ",(0,t.jsx)("i",{children:r.relatedProp}),"."]}),...e})})}),e.push(n)}if(a.ObjectUtils.isNotEmpty(l.interfaces)&&a.ObjectUtils.isNotEmpty(l.interfaces.values)&&!u("interfaces")){let n={id:`api.${s}.interfaces`,label:"Interfaces",description:l.interfaces.description,children:[]};Object.entries(l.interfaces.values).forEach(([e,r])=>{let[i,a]=[`api.${s}.${e}`,e];d("interfaces",e)||n.children.push({id:i,label:a,component:e=>(0,t.jsx)(p,{name:s,data:r.props,description:(0,t.jsxs)(t.Fragment,{children:[r.description," ",r.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:r.extendedTypes}),"."]})]}),...e})})}),e.push(n)}if(a.ObjectUtils.isNotEmpty(l.types)&&a.ObjectUtils.isNotEmpty(l.types.values)&&!u("types")){let n={id:`api.${s}.types`,label:"Types",description:l.types.description,children:[]};Object.entries(l.types.values).forEach(([e,r])=>{let[i,a]=[`api.${s}.${e}`,e];d("types",e)||n.children.push({id:i,label:a,component:e=>(0,t.jsx)(p,{name:s,data:[r],allowLink:!1,...e})})}),e.push(n)}};if(3===i.length){let s=i[1],n=i[2];if("functions"===s){let r=l[s].values[n],i={id:`api.${c}`,label:c,children:[]},[o,d]=[`api.${c}.function`,"Function"],u=Object.entries(r).reduce((e,[t,s])=>("description"!==t&&(e[t]=s),e),{});i.children.push({id:o,label:d,component:e=>(0,t.jsx)(p,{name:c,data:[u],description:r.description,...e})});let m=r.parameters&&r.parameters.map(e=>e.type);if(a.ObjectUtils.isNotEmpty(l.interfaces)&&a.ObjectUtils.isNotEmpty(l.interfaces.values)){let e={id:`api.${c}.interfaces`,label:"Interfaces",description:l.interfaces.description,children:[]};Object.entries(l.interfaces.values).forEach(([s,n])=>{if(m.includes(s)){let[r,i]=[`api.${c}.${s}`,s],o={id:r,label:i,description:(0,t.jsxs)(t.Fragment,{children:[n.description," ",n.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:n.extendedTypes}),"."]})]}),children:[]};a.ObjectUtils.isNotEmpty(n.props)&&o.children.push({id:`${r}.props`,label:"Props",component:e=>(0,t.jsx)(p,{data:n.props,...e})}),a.ObjectUtils.isNotEmpty(n.callbacks)&&o.children.push({id:`${r}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(p,{data:n.callbacks,...e})}),e.children.push(o)}}),a.ObjectUtils.isNotEmpty(e.children)&&i.children.push(e)}e.push(i)}}else l.components&&Object.entries(l.components).forEach(([r,i])=>{let o={id:`api.${r}`,label:r,description:i.description,children:[]};if(a.ObjectUtils.isNotEmpty(i.props)&&a.ObjectUtils.isNotEmpty(i.props.values)&&!u("props")){let[e,s]=[`api.${r}.props`,"Props"];if(d("props",r))return;o.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:i.props.values,description:i.props.description,...e})})}if(a.ObjectUtils.isNotEmpty(i.callbacks)&&a.ObjectUtils.isNotEmpty(i.callbacks.values)&&!u("callbacks")){let[e,s]=[`api.${r}.callbacks`,"Callbacks"];if(d("callbacks",r))return;o.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:i.callbacks.values,description:i.callbacks.description,...e})})}if(a.ObjectUtils.isNotEmpty(i.methods)&&a.ObjectUtils.isNotEmpty(i.methods.values)&&!u("methods")){let[e,s]=[`api.${r}.methods`,"Methods"];if(d("methods",r))return;o.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:i.methods.values,description:i.methods.description,...e})})}r.toLocaleLowerCase()===s.toLowerCase()&&n(o.children,r),e.push(o)}),l.model&&Object.entries(l.model).forEach(([r,i])=>{let o={id:`api.${r}`,label:r,description:i.description,children:[]};if(a.ObjectUtils.isNotEmpty(i.props)&&a.ObjectUtils.isNotEmpty(i.props.values)&&!u("props")){let[e,s]=[`api.${r}.props`,"Props"];if(d("props",r))return;o.children.push({id:e,label:s,component:e=>(0,t.jsx)(p,{name:r,data:i.props.values,description:i.props.description,...e})})}r.toLocaleLowerCase()===s.toLowerCase()&&n(o.children,r),e.push(o)}),l.components||l.model||n(e,c)}return e},[]);return(0,i.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[n," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",n," module."]})]}),(0,t.jsx)(m.DocSections,{docs:c})]}),(0,t.jsx)(u.DocSectionNav,{docs:c})]})}e.s(["DocComponent",0,function(e){let a,[o,c]=(0,i.useState)(0),l=(0,r.useRouter)();a=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{c(e),l.replace(l.pathname)};return(0,i.useEffect)(()=>{l.asPath.includes("#api")&&c(1),l.asPath.includes("#pt")&&c(3)},[l.asPath]),(0,t.jsxs)("div",{className:(0,s.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(n.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":0===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:a})}),e.apiDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":1===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":2===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":3===o}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===o?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(m.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.componentDocs})]}):null,1===o?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(h,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===o?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(m.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===o?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(m.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(u.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},3828,(e,t,s)=>{t.exports=e.r(26990)},71899,e=>{"use strict";var t=e.i(91398),s=e.i(82948),n=e.i(5180),r=e.i(28137),i=e.i(20728),a=e.i(3935),o=e.i(91788);function c(e){let[s,c]=(0,o.useState)(!1),[l,d]=(0,o.useState)(""),[p,u]=(0,i.useEventListener)({type:"keydown",listener:e=>{(e=>{if(c(!0),"Space"===e.code){e.preventDefault(),d("space");return}d(e.key)})(e)}}),[m,h]=(0,i.useEventListener)({type:"keyup",listener:e=>{c(!1)}});(0,o.useEffect)(()=>(p(),m(),()=>{u(),h()}),[p,m,u,h]);let f={basic:`
const [bindKeyDown, unbindKeyDown] = useEventListener({
    type: 'keydown',
    listener: (e) => {
        onKeyDown(e);
    }
});

const [bindKeyUp, unbindKeyUp] = useEventListener({
    type: 'keyup',
    listener: (e) => {
        setPressed(false);
    }
});
        `,javascript:`
import React, { useState, useEffect } from 'react'; 
import { classNames } from 'primereact/utils';
import { useEventListener } from 'primereact/hooks';

export default function DocumentDemo() {
    const [pressed, setPressed] = useState(false);
    const [value, setValue] = useState('');

    const onKeyDown = (e) => {
        setPressed(true);

        if (e.code === 'Space') {
            setValue('space');

            return;
        }

        setValue(e.key);
    };

    const [bindKeyDown, unbindKeyDown] = useEventListener({
        type: 'keydown',
        listener: (e) => {
            onKeyDown(e);
        }
    });

    const [bindKeyUp, unbindKeyUp] = useEventListener({
        type: 'keyup',
        listener: (e) => {
            setPressed(false);
        }
    });

    useEffect(() => {
        bindKeyDown();
        bindKeyUp();

        return () => {
            unbindKeyDown();
            unbindKeyUp();
        };
    }, [bindKeyDown, bindKeyUp, unbindKeyDown, unbindKeyUp]);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <button
                className={classNames('card border-1 surface-border border-round-md py-3 px-4 text-color font-semibold text-lg transition-all transition-duration-150', { 'shadow-1': pressed, 'shadow-5': !pressed })}
                style={{
                    background: '-webkit-linear-gradient(top, var(--surface-ground) 0%, var(--surface-card) 100%)',
                    transform: pressed ? 'translateY(5px)' : 'translateY(0)'
                }}>
                {value.toUpperCase() || 'Press a Key'}
            </button>
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react'; 
import { classNames } from 'primereact/utils';
import { useEventListener } from 'primereact/hooks';

export default function DocumentDemo() {
    const [pressed, setPressed] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    const onKeyDown = (e) => {
        setPressed(true);

        if (e.code === 'Space') {
            setValue('space');

            return;
        }

        setValue(e.key);
    };

    const [bindKeyDown, unbindKeyDown] = useEventListener({
        type: 'keydown',
        listener: (e) => {
            onKeyDown(e);
        }
    });

    const [bindKeyUp, unbindKeyUp] = useEventListener({
        type: 'keyup',
        listener: (e) => {
            setPressed(false);
        }
    });

    useEffect(() => {
        bindKeyDown();
        bindKeyUp();

        return () => {
            unbindKeyDown();
            unbindKeyUp();
        };
    }, [bindKeyDown, bindKeyUp, unbindKeyDown, unbindKeyUp]);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <button
                className={classNames('card border-1 surface-border border-round-md py-3 px-4 text-color font-semibold text-lg transition-all transition-duration-150', { 'shadow-1': pressed, 'shadow-5': !pressed })}
                style={{
                    background: '-webkit-linear-gradient(top, var(--surface-ground) 0%, var(--surface-card) 100%)',
                    transform: pressed ? 'translateY(5px)' : 'translateY(0)'
                }}>
                {value.toUpperCase() || 'Press a Key'}
            </button>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Events are attached to the document itself by default."})}),(0,t.jsx)("div",{className:"card flex flex-column align-items-center gap-3",children:(0,t.jsx)("button",{className:(0,a.classNames)("card border-1 surface-border border-round-md py-3 px-4 text-color font-semibold text-lg transition-all transition-duration-150",{"shadow-1":s,"shadow-5":!s}),style:{background:"-webkit-linear-gradient(top, var(--surface-ground) 0%, var(--surface-card) 100%)",transform:s?"translateY(5px)":"translateY(0)"},children:l.toUpperCase()||"Press a Key"})}),(0,t.jsx)(n.DocSectionCode,{code:f})]})}function l(e){let[s,a]=(0,o.useState)(!1),c=(0,o.useRef)(null),[l,d]=(0,i.useEventListener)({target:c,type:"mouseenter",listener:()=>{a(!0)}}),[p,u]=(0,i.useEventListener)({target:c,type:"mouseleave",listener:()=>{a(!1)}});(0,o.useEffect)(()=>(l(),p(),()=>{d(),u()}),[l,p,d,u]);let m={basic:`
const [hover, setHover] = useState(false);
const elementRef = useRef(null);

const [bindMouseEnterListener, unbindMouseEnterListener] = useEventListener({
    target: elementRef,
    type: 'mouseenter',
    listener: () => {
        setHover(true);
    }
});

const [bindMouseLeaveListener, unbindMouseLeaveListener] = useEventListener({
    target: elementRef,
    type: 'mouseleave',
    listener: () => {
        setHover(false);
    }
});
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { useEventListener } from 'primereact/hooks';

export default function ElementDemo() {
    const [hover, setHover] = useState(false);
    const elementRef = useRef(null);

    const [bindMouseEnterListener, unbindMouseEnterListener] = useEventListener({
        target: elementRef,
        type: 'mouseenter',
        listener: () => {
            setHover(true);
        }
    });

    const [bindMouseLeaveListener, unbindMouseLeaveListener] = useEventListener({
        target: elementRef,
        type: 'mouseleave',
        listener: () => {
            setHover(false);
        }
    });

    useEffect(() => {
        bindMouseEnterListener();
        bindMouseLeaveListener();

        return () => {
            unbindMouseEnterListener();
            unbindMouseLeaveListener();
        };
    }, [bindMouseEnterListener, bindMouseLeaveListener, unbindMouseEnterListener, unbindMouseLeaveListener]);

    return (
        <div className="card flex justify-content-center">
            <div ref={elementRef} className="border-round border-2 border-dashed surface-border text-xl p-5 w-15rem text-center">
                {hover ? 'Hovered' : 'Hover Me'}
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { useEventListener } from 'primereact/hooks';

export default function ElementDemo() {
    const [hover, setHover] = useState<boolean>(false);
    const elementRef = useRef<string>(null);

    const [bindMouseEnterListener, unbindMouseEnterListener] = useEventListener({
        target: elementRef,
        type: 'mouseenter',
        listener: () => {
            setHover(true);
        }
    });

    const [bindMouseLeaveListener, unbindMouseLeaveListener] = useEventListener({
        target: elementRef,
        type: 'mouseleave',
        listener: () => {
            setHover(false);
        }
    });

    useEffect(() => {
        bindMouseEnterListener();
        bindMouseLeaveListener();

        return () => {
            unbindMouseEnterListener();
            unbindMouseLeaveListener();
        };
    }, [bindMouseEnterListener, bindMouseLeaveListener, unbindMouseEnterListener, unbindMouseLeaveListener]);

    return (
        <div className="card flex justify-content-center">
            <div ref={elementRef} className="border-round border-2 border-dashed surface-border text-xl p-5 w-15rem text-center">
                {hover ? 'Hovered' : 'Hover Me'}
            </div>
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["The element to bind and unbind the events is defined with the ",(0,t.jsx)("i",{children:"target"})," option."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)("div",{ref:c,className:"border-round border-2 border-dashed surface-border text-xl p-5 w-15rem text-center",children:s?"Hovered":"Hover Me"})}),(0,t.jsx)(n.DocSectionCode,{code:m})]})}function d(e){let s={basic:`
import { useEventListener } from 'primereact/hooks';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)(n.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}e.s(["default",0,()=>(0,t.jsx)(s.DocComponent,{title:"React useEventListener Hook",header:"useEventListener",description:"Manages event bindings of an element programmatically.",componentDocs:[{id:"import",label:"Import",component:d},{id:"document",label:"Document",component:c},{id:"element",label:"Element",component:l}],apiDocs:["hooks.functions.useEventListener"]})],71899)},30469,(e,t,s)=>{let n="/hooks/useeventlistener";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(71899)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);