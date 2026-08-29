(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,57294,e=>{"use strict";var t=e.i(91398),s=e.i(91788);e.s(["CodeHighlight",0,function(e){let r=(0,s.useRef)(),n=`language-${e.lang||"jsx"}`;return(0,s.useEffect)(()=>{window.Prism.highlightElement(r.current)},[]),(0,t.jsx)("pre",{style:e.style,tabIndex:"-1",children:(0,t.jsxs)("code",{ref:r,className:n,children:[e.children," "]})})}])},74967,e=>{"use strict";e.i(91398),e.i(91788),e.s([])},82948,88850,e=>{"use strict";var t=e.i(91398),s=e.i(3935),r=e.i(58678),n=e.i(3828),a=e.i(91788),i=e.i(51551),c=e.i(72124),l=e.i(41158),o=e.i(87914),d=e.i(28137);let m=e=>{let r=(0,a.useContext)(o.default),{id:c,data:m,name:p,description:h,allowLink:u=!0}=e,x=c.startsWith("pt."),j=(0,n.useRouter)();if(i.ObjectUtils.isNotEmpty(m)){let n=Object.keys(m[0]),o=(e,t)=>{let s=document.getElementById(e);s&&s.parentElement.scrollIntoView({block:"start",behavior:t})},f=(e,r,n)=>{if(u&&e)return e.split("|").map((e,i)=>{if(e.includes(p)){let s=e.indexOf(p),r=e.substring(s).replace(/(\[|\]|<|>).*$/gm,"").trim(),n=p===r?`api.${p}`:`api.${p}.${r===`${p}Props`?"props":r}`;return(0,t.jsxs)(a.default.Fragment,{children:[0!==i?"|":"",(0,t.jsx)(l.default,{href:j.basePath+j.pathname+`#${n}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(n,"smooth"),children:e})})]},i)}return(0,t.jsxs)(a.default.Fragment,{children:[0!==i?"|":"",r?(0,t.jsxs)("span",{id:c+"."+e,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!n}),title:n,children:[e,(0,t.jsx)(l.default,{href:j.basePath+j.pathname+`#${c+"."+e}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(c+"."+e),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):e]},i)});let i=e&&e.includes('": "')?e.replace(/['"]+/g,"").replace(/\.,/gm,"."):e;return r?(0,t.jsxs)("span",{id:c+"."+i,className:(0,s.classNames)("doc-option-name",{"line-through cursor-pointer":!!n}),title:n,children:[i,(0,t.jsx)(l.default,{href:j.basePath+j.pathname+`#${c+"."+i}`,target:"_self",children:(0,t.jsx)("a",{onClick:()=>o(c+"."+i),className:"doc-option-link",children:(0,t.jsx)("i",{className:"pi pi-link"})})})]}):i},g=(0,t.jsx)(a.default.Fragment,{children:x?(0,t.jsx)("tr",{children:n.map(e=>(0,t.jsx)("th",{children:e},e))}):(0,t.jsx)("tr",{children:n.map(e=>"readonly"!==e&&"optional"!==e&&"deprecated"!==e&&(0,t.jsx)("th",{children:e},e))})}),b=(0,t.jsx)(a.default.Fragment,{children:m.map((e,n)=>{if(x){let{value:s,label:r,description:a}=e;return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:s}),(0,t.jsx)("td",{children:r}),(0,t.jsx)("td",{children:a})]},n)}return(0,t.jsx)("tr",{children:Object.entries(e).map(([n,a],c)=>"readonly"!==n&&"optional"!==n&&"deprecated"!==n&&(0,t.jsx)("td",{children:"parameters"===n?a.map((e,s)=>(0,t.jsxs)("div",{className:"doc-option-params",children:[(0,t.jsxs)("span",{className:"doc-option-parameter-name",children:[e.name,": "]}),(0,t.jsx)("span",{className:"doc-option-parameter-type",children:f(e.type)}),(0,t.jsx)("br",{})]},s)):"default"===n?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-default",{"doc-option-dark":r.darkMode,"doc-option-light":!r.darkMode}),children:i.ObjectUtils.isEmpty(a)?"null":f(a,"name"===n,e.deprecated)}):"type"===n?(0,t.jsx)("span",{className:"doc-option-type",children:f(a,"name"===n,e.deprecated)}):"returnType"===n?(0,t.jsx)("div",{className:(0,s.classNames)("doc-option-returnType",{"doc-option-dark":r.darkMode,"doc-option-light":!r.darkMode}),children:f(a,"name"===n,e.deprecated)}):"description"===n||"values"===n?(0,t.jsx)("span",{className:"doc-option-description",children:a}):f(a,"name"===n,e.deprecated)},c))},n)})});return(0,t.jsxs)(a.default.Fragment,{children:[(0,t.jsx)(d.DocSectionText,{...e,children:(0,t.jsx)("p",{children:h})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:g}),(0,t.jsx)("tbody",{children:b})]})})]},c)}return null};e.s(["default",0,m],88850);var p=e.i(71864),h=e.i(38076);function u(e){let{doc:s,header:r}=e,n=e.apiExclude,l=s.reduce((e,s)=>{let r,a=s.split("."),l=(r=a[0])&&r[0].toUpperCase()+r.slice(1)||"",o=c.default[l.toLowerCase()],d=(e,t)=>n&&n[e]&&n[e].includes(t),p=e=>n&&n[e]&&"excludeAll"===n[e];if(o){let r=(e,s)=>{if(i.ObjectUtils.isNotEmpty(o.events)&&i.ObjectUtils.isNotEmpty(o.events.values)&&!p("events")){let r={id:`api.${s}.events`,label:"Events",description:o.events.description,children:[]};Object.entries(o.events.values).forEach(([e,n])=>{let[a,i]=[`api.${s}.${e}`,e];d("event",e)||r.children.push({id:a,label:i,component:e=>(0,t.jsx)(m,{name:s,data:n.props,description:(0,t.jsxs)(t.Fragment,{children:[n.description," See ",(0,t.jsx)("i",{children:n.relatedProp}),"."]}),...e})})}),e.push(r)}if(i.ObjectUtils.isNotEmpty(o.interfaces)&&i.ObjectUtils.isNotEmpty(o.interfaces.values)&&!p("interfaces")){let r={id:`api.${s}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([e,n])=>{let[a,i]=[`api.${s}.${e}`,e];d("interfaces",e)||r.children.push({id:a,label:i,component:e=>(0,t.jsx)(m,{name:s,data:n.props,description:(0,t.jsxs)(t.Fragment,{children:[n.description," ",n.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:n.extendedTypes}),"."]})]}),...e})})}),e.push(r)}if(i.ObjectUtils.isNotEmpty(o.types)&&i.ObjectUtils.isNotEmpty(o.types.values)&&!p("types")){let r={id:`api.${s}.types`,label:"Types",description:o.types.description,children:[]};Object.entries(o.types.values).forEach(([e,n])=>{let[a,i]=[`api.${s}.${e}`,e];d("types",e)||r.children.push({id:a,label:i,component:e=>(0,t.jsx)(m,{name:s,data:[n],allowLink:!1,...e})})}),e.push(r)}};if(3===a.length){let s=a[1],r=a[2];if("functions"===s){let n=o[s].values[r],a={id:`api.${l}`,label:l,children:[]},[c,d]=[`api.${l}.function`,"Function"],p=Object.entries(n).reduce((e,[t,s])=>("description"!==t&&(e[t]=s),e),{});a.children.push({id:c,label:d,component:e=>(0,t.jsx)(m,{name:l,data:[p],description:n.description,...e})});let h=n.parameters&&n.parameters.map(e=>e.type);if(i.ObjectUtils.isNotEmpty(o.interfaces)&&i.ObjectUtils.isNotEmpty(o.interfaces.values)){let e={id:`api.${l}.interfaces`,label:"Interfaces",description:o.interfaces.description,children:[]};Object.entries(o.interfaces.values).forEach(([s,r])=>{if(h.includes(s)){let[n,a]=[`api.${l}.${s}`,s],c={id:n,label:a,description:(0,t.jsxs)(t.Fragment,{children:[r.description," ",r.extendedTypes&&(0,t.jsxs)(t.Fragment,{children:["Extends ",(0,t.jsx)("i",{children:r.extendedTypes}),"."]})]}),children:[]};i.ObjectUtils.isNotEmpty(r.props)&&c.children.push({id:`${n}.props`,label:"Props",component:e=>(0,t.jsx)(m,{data:r.props,...e})}),i.ObjectUtils.isNotEmpty(r.callbacks)&&c.children.push({id:`${n}.callbacks`,label:"Callbacks",component:e=>(0,t.jsx)(m,{data:r.callbacks,...e})}),e.children.push(c)}}),i.ObjectUtils.isNotEmpty(e.children)&&a.children.push(e)}e.push(a)}}else o.components&&Object.entries(o.components).forEach(([n,a])=>{let c={id:`api.${n}`,label:n,description:a.description,children:[]};if(i.ObjectUtils.isNotEmpty(a.props)&&i.ObjectUtils.isNotEmpty(a.props.values)&&!p("props")){let[e,s]=[`api.${n}.props`,"Props"];if(d("props",n))return;c.children.push({id:e,label:s,component:e=>(0,t.jsx)(m,{name:n,data:a.props.values,description:a.props.description,...e})})}if(i.ObjectUtils.isNotEmpty(a.callbacks)&&i.ObjectUtils.isNotEmpty(a.callbacks.values)&&!p("callbacks")){let[e,s]=[`api.${n}.callbacks`,"Callbacks"];if(d("callbacks",n))return;c.children.push({id:e,label:s,component:e=>(0,t.jsx)(m,{name:n,data:a.callbacks.values,description:a.callbacks.description,...e})})}if(i.ObjectUtils.isNotEmpty(a.methods)&&i.ObjectUtils.isNotEmpty(a.methods.values)&&!p("methods")){let[e,s]=[`api.${n}.methods`,"Methods"];if(d("methods",n))return;c.children.push({id:e,label:s,component:e=>(0,t.jsx)(m,{name:n,data:a.methods.values,description:a.methods.description,...e})})}n.toLocaleLowerCase()===s.toLowerCase()&&r(c.children,n),e.push(c)}),o.model&&Object.entries(o.model).forEach(([n,a])=>{let c={id:`api.${n}`,label:n,description:a.description,children:[]};if(i.ObjectUtils.isNotEmpty(a.props)&&i.ObjectUtils.isNotEmpty(a.props.values)&&!p("props")){let[e,s]=[`api.${n}.props`,"Props"];if(d("props",n))return;c.children.push({id:e,label:s,component:e=>(0,t.jsx)(m,{name:n,data:a.props.values,description:a.props.description,...e})})}n.toLocaleLowerCase()===s.toLowerCase()&&r(c.children,n),e.push(c)}),o.components||o.model||r(e,l)}return e},[]);return(0,a.useEffect)(()=>{let e=window.location.hash.substring(1),t=document.getElementById(e);setTimeout(()=>{t&&t.scrollIntoView({block:"start"})},1)},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[r," API"]}),(0,t.jsxs)("p",{children:["API defines helper props, events and others for the PrimeReact ",r," module."]})]}),(0,t.jsx)(h.DocSections,{docs:l})]}),(0,t.jsx)(p.DocSectionNav,{docs:l})]})}e.s(["DocComponent",0,function(e){let i,[c,l]=(0,a.useState)(0),o=(0,n.useRouter)();i=e.header.startsWith("use")?"HOOK":"PassThrough"===e.header||"Configuration"===e.header?"OVERVIEW":"FEATURES";let d=e=>{l(e),o.replace(o.pathname)};return(0,a.useEffect)(()=>{o.asPath.includes("#api")&&l(1),o.asPath.includes("#pt")&&l(3)},[o.asPath]),(0,t.jsxs)("div",{className:(0,s.classNames)(e.className,"doc-component"),children:[(0,t.jsxs)(r.default,{children:[(0,t.jsx)("title",{children:e.title}),(0,t.jsx)("meta",{name:"description",content:e.description})]}),e.hideTabMenu?null:(0,t.jsxs)("ul",{className:"doc-tabmenu",children:[(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":0===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(0),children:i})}),e.apiDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":1===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(1),children:"API"})}):null,e.themingDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":2===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(2),children:"THEMING"})}):null,e.ptDocs?(0,t.jsx)("li",{className:(0,s.classNames)({"doc-tabmenu-active":3===c}),children:(0,t.jsx)("button",{type:"button",onClick:()=>d(3),children:"PASS THROUGH"})}):null]}),(0,t.jsxs)("div",{className:"doc-tabpanels",children:[0===c?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsx)("h1",{children:e.header}),(0,t.jsx)("p",{dangerouslySetInnerHTML:{__html:e.description}})]}),(0,t.jsx)(h.DocSections,{docs:e.componentDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.componentDocs})]}):null,1===c?(0,t.jsx)("div",{className:"doc-tabpanel",children:e.apiDocs?(0,t.jsx)(u,{header:e.header,doc:e.apiDocs,apiExclude:e.apiExclude}):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"doc-main",children:(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," API"]}),(0,t.jsxs)("p",{children:[e.header," is a CSS feature so does not provide a Javascript API"]})]})})})}):null,2===c?(0,t.jsx)(t.Fragment,{children:e.themingDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsx)("div",{className:"doc-intro",children:(0,t.jsxs)("h1",{children:[e.header," Theming"]})}),(0,t.jsx)(h.DocSections,{docs:e.themingDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.themingDocs})]}):null}):null,3===c?(0,t.jsx)(t.Fragment,{children:e.ptDocs?(0,t.jsxs)("div",{className:"doc-tabpanel",children:[(0,t.jsxs)("div",{className:"doc-main",children:[(0,t.jsxs)("div",{className:"doc-intro",children:[(0,t.jsxs)("h1",{children:[e.header," Pass Through"]}),(0,t.jsx)("p",{children:e.ptDescription})]}),(0,t.jsx)(h.DocSections,{docs:e.ptDocs})]}),(0,t.jsx)(p.DocSectionNav,{docs:e.ptDocs})]}):null}):null]})]})}],82948)},2723,60336,e=>{"use strict";var t=e.i(91398),s=e.i(91788),r=e.i(10836),n=e.i(15498),a=e.i(60150);let i=(0,e.i(44129).EventBus)();e.s(["TerminalService",0,i],60336);var c=e.i(45543),l=e.i(3935);let o=`
@layer primereact {
    .p-terminal {
        height: 18rem;
        overflow: auto;
    }
    
    .p-terminal-prompt-container {
        display: flex;
        align-items: center;
    }
    
    .p-terminal-input {
        flex: 1 1 auto;
        border: 0 none;
        background-color: transparent;
        color: inherit;
        padding: 0;
        outline: 0 none;
    }
    
    .p-terminal-input::-ms-clear {
        display: none;
    }        
}
`,d=n.ComponentBase.extend({defaultProps:{__TYPE:"Terminal",id:null,style:null,className:null,welcomeMessage:null,prompt:null,children:void 0},css:{classes:{root:"p-terminal p-component",content:"p-terminal-content",container:"p-terminal-prompt-container",command:"p-terminal-command",commandText:"p-terminal-input",prompt:"p-terminal-prompt",response:"p-terminal-response"},styles:o}}),m=s.memo(s.forwardRef((e,o)=>{let m,p,h,u,x=(0,a.useMergeProps)(),j=s.useContext(r.PrimeReactContext),f=d.getProps(e,j),[g,b]=s.useState(""),[v,y]=s.useState([]),[N,T]=s.useState(0),[w,k]=s.useState(""),E=s.useRef(null),S=s.useRef(null),D=s.useRef(!1),{ptm:O,cx:P,isUnstyled:C}=d.setMetaData({props:f,state:{commandText:g,commands:v}});(0,n.useHandleStyle)(d.css.styles,C,{name:"terminal"});let $=x({className:P("prompt")},O("prompt"));s.useImperativeHandle(o,()=>({props:f,focus:()=>c.DomHandler.focus(S.current),getElement:()=>E.current})),s.useEffect(()=>{let e=e=>{if(v&&v.length>0){let t=[...v];t[t.length-1].response=e,y(t)}},t=()=>{y([]),T(0)};return i.on("response",e),i.on("clear",t),()=>{i.off("response",e),i.off("clear",t)}},[v]),s.useEffect(()=>{D.current&&(i.emit("command",w),D.current=!1),E.current.scrollTop=E.current.scrollHeight});let U=(()=>{if(f.welcomeMessage){let e=x(O("welcomeMessage"));return(0,t.jsx)("div",{...e,children:f.welcomeMessage})}return null})(),I=(m=v.map((e,s)=>{let{text:r,response:n}=e,a=x({key:r+"_"+s},O("commands")),i=x({className:P("command")},O("command")),c=x({className:P("response"),"aria-live":"polite"},O("response"));return(0,t.jsxs)("div",{...a,children:[(0,t.jsxs)("span",{...$,children:[f.prompt," "]}),(0,t.jsx)("span",{...i,children:r}),(0,t.jsx)("div",{...c,children:n})]})}),p=x({className:P("content")},O("content")),(0,t.jsx)("div",{...p,children:m})),M=(h=x({className:P("container")},O("container")),u=x({ref:S,value:g,type:"text",className:P("commandText"),autoComplete:"off",onChange:e=>{b(e.target.value)},onKeyDown:e=>{switch(e.code){case"ArrowUp":if(v&&v.length){let e=N-1<0?v.length-1:N-1,t=v[e];T(e),b(t.text)}break;case"Enter":case"NumpadEnter":if(g){let e=[...v];e.push({text:g}),T(e=>e+1),b(""),y(e),k(g),D.current=!0}}}},O("commandText")),(0,t.jsxs)("div",{...h,children:[(0,t.jsxs)("span",{...$,children:[f.prompt," "]}),(0,t.jsx)("input",{...u})]})),R=x({id:f.id,ref:E,className:(0,l.classNames)(f.className,P("root")),style:f.style,onClick:()=>{c.DomHandler.focus(S.current)}},d.getOtherProps(f),O("root"));return(0,t.jsxs)("div",{...R,children:[U,I,M]})}));m.displayName="Terminal",e.s(["Terminal",0,m],2723)},44129,e=>{"use strict";e.s(["EventBus",0,function(){let e=new Map;return{on(t,s){let r=e.get(t);r?r.push(s):r=[s],e.set(t,r)},off(t,s){let r=e.get(t);r&&r.splice(r.indexOf(s)>>>0,1)},emit(t,s){let r=e.get(t);r&&r.slice().forEach(e=>e(s))}}}],44129)},28805,e=>{e.v(t=>Promise.all(["static/chunks/1xhhna5oxo_nf.js"].map(t=>e.l(t))).then(()=>t(48545)))},48761,e=>{e.v(t=>Promise.all(["static/chunks/3vtdk29ftku6v.js"].map(t=>e.l(t))).then(()=>t(25050)))},3828,(e,t,s)=>{t.exports=e.r(26990)},83116,e=>{"use strict";var t=e.i(91398),s=e.i(88850),r=e.i(82948);e.i(74967);var n=e.i(28137);function a(){return(0,t.jsxs)(n.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Terminal component has an input element that can be described with ",(0,t.jsx)("i",{children:"aria-label"})," or ",(0,t.jsx)("i",{children:"aria-labelledby"})," props. The element that lists the previous commands has ",(0,t.jsx)("i",{children:"aria-live"})," so that changes are received by the screen reader."]}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus through the input element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Executes the command when focus in on the input element."})]})]})]})})]})}var i=e.i(5180),c=e.i(2723),l=e.i(60336),o=e.i(91788);function d(e){let s=e=>{let t,s=e.indexOf(" "),r=-1!==s?e.substring(0,s):e;switch(r){case"date":t="Today is "+new Date().toDateString();break;case"greet":t="Hola "+e.substring(s+1)+"!";break;case"random":t=Math.floor(100*Math.random());break;case"clear":t=null;break;default:t="Unknown command: "+r}t?l.TerminalService.emit("response",t):l.TerminalService.emit("clear")};(0,o.useEffect)(()=>(l.TerminalService.on("command",s),()=>{l.TerminalService.off("command",s)}),[]);let r={basic:`
<Terminal 
    welcomeMessage="Welcome to PrimeReact" 
    prompt="primereact $" 
    pt={{
        root: 'bg-gray-900 text-white border-round',
        prompt: 'text-gray-400 mr-2',
        command: 'text-primary-300',
        response: 'text-primary-300'
    }} 
/>
        `,javascript:`
import React, { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';

export default function TerminalDemo() {
    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            case 'clear':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response)
            TerminalService.emit('response', response);
        else
            TerminalService.emit('clear');
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, []);

    return (
        <div className="card terminal-demo">
            <p>
                Enter "<strong>date</strong>" to display the current date, "<strong>greet {'{0}'}</strong>" for a message, "<strong>random</strong>" to get a random number and "<strong>clear</strong>" to clear all commands.
            </p>
            <Terminal 
                welcomeMessage="Welcome to PrimeReact" 
                prompt="primereact $" 
                pt={{
                    root: 'bg-gray-900 text-white border-round',
                    prompt: 'text-gray-400 mr-2',
                    command: 'text-primary-300',
                    response: 'text-primary-300'
                }} 
            />
        </div>
    );
}
        `,typescript:`
import React, { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';

export default function TerminalDemo() {
    const commandHandler = (text: string) => {
        let response: string;
        let argsIndex: number = text.indexOf(' ');
        let command: string = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            case 'clear':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response)
            TerminalService.emit('response', response);
        else
            TerminalService.emit('clear');
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, []);

    return (
        <div className="card terminal-demo">
            <p>
                Enter "<strong>date</strong>" to display the current date, "<strong>greet {'{0}'}</strong>" for a message, "<strong>random</strong>" to get a random number and "<strong>clear</strong>" to clear all commands.
            </p>
            <Terminal 
                welcomeMessage="Welcome to PrimeReact" 
                prompt="primereact $" 
                pt={{
                    root: 'bg-gray-900 text-white border-round',
                    prompt: 'text-gray-400 mr-2',
                    command: 'text-primary-300',
                    response: 'text-primary-300'
                }} 
            />
        </div>
    );
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Terminal is interacted with ",(0,t.jsx)("i",{children:"TerminalService"})," api using ",(0,t.jsx)("i",{children:"command"}),", ",(0,t.jsx)("i",{children:"response"})," and ",(0,t.jsx)("i",{children:"clear"})," events. The ",(0,t.jsx)("i",{children:"command"})," event requires a callback to handle the commands, the ",(0,t.jsx)("i",{children:"response"}),"emits the response of the command and emitting ",(0,t.jsx)("i",{children:"clear"})," reset the terminal."]})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("p",{children:['Enter "',(0,t.jsx)("strong",{children:"date"}),'" to display the current date, "',(0,t.jsxs)("strong",{children:["greet ","{0}"]}),'" for a message, "',(0,t.jsx)("strong",{children:"random"}),'" to get a random number and "',(0,t.jsx)("strong",{children:"clear"}),'" to clear all commands.']}),(0,t.jsx)(c.Terminal,{welcomeMessage:"Welcome to PrimeReact",prompt:"primereact $",pt:{root:"bg-gray-900 text-white border-round",prompt:"text-gray-400 mr-2",command:"text-primary-300",response:"text-primary-300"}})]}),(0,t.jsx)(i.DocSectionCode,{code:r})]})}function m(e){let s={basic:`
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}let p=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/terminal.jpg",alt:"terminal"})})]});function h(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-terminal"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-terminal-content"}),(0,t.jsx)("td",{children:"Content of terminal."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-terminal-prompt"}),(0,t.jsx)("td",{children:"Prompt text."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-terminal-response"}),(0,t.jsx)("td",{children:"Command response."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-terminal-input"}),(0,t.jsx)("td",{children:"Input element to enter commands."})]})]})]})})]})}var u=e.i(41158);function x(e){let s={basic:`
const Tailwind = {
    terminal: {
        root: {
            className: classNames('border border-gray-300 p-5', 'bg-gray-900 text-white dark:border-blue-900/40 ', 'h-72 overflow-auto')
        },
        container: 'flex items-center',
        prompt: 'text-yellow-400',
        commandtext: 'flex-1 shrink grow-0 border-0 bg-transparent text-inherit p-0 outline-none'
    }
}
    `},r={javascript:`
import React, { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';

export default function UnstyledDemo() {
    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            case 'clear':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response)
            TerminalService.emit('response', response);
        else
            TerminalService.emit('clear');
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, []);

    return (
        <div className="card text-gray-700 dark:text-white/80">
            <p>
                Enter "<strong>date</strong>" to display the current date, "<strong>greet {'{0}'}</strong>" for a message, "<strong>random</strong>" to get a random number and "<strong>clear</strong>" to clear all commands.
            </p>
            <Terminal welcomeMessage="Welcome to PrimeReact" prompt="primereact $" />
        </div>
    );
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(n.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(u.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(i.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(i.DocSectionCode,{code:r,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:p},{id:"pt.terminal.options",label:"Terminal PT Options",component:s.default}];return(0,t.jsx)(r.DocComponent,{title:"React Terminal Component",header:"Terminal",description:"Terminal is a text based user interface.",componentDocs:[{id:"import",label:"Import",component:m},{id:"basic",label:"Basic",component:d},{id:"accessibility",label:"Accessibility",component:a}],apiDocs:["Terminal","TerminalService"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:h},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:x}]}]})}],83116)},72582,(e,t,s)=>{let r="/terminal";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(83116)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})}]);