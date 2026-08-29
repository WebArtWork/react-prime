(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,63139,e=>{"use strict";var i=e.i(91398),a=e.i(88850),t=e.i(82948),n=e.i(28137);function o(){return(0,i.jsxs)(n.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,i.jsx)("h3",{children:"Screen Reader"}),(0,i.jsxs)("p",{children:["TabView container is defined with the ",(0,i.jsx)("i",{children:"tablist"})," role, as any attribute is passed to the container element ",(0,i.jsx)("i",{children:"aria-labelledby"})," can be optionally used to specify an element to describe the TabView. Each tab header has a"," ",(0,i.jsx)("i",{children:"tab"})," role along with ",(0,i.jsx)("i",{children:"aria-selected"})," state attribute and ",(0,i.jsx)("i",{children:"aria-controls"})," to refer to the corresponding tab content element. The content element of each tab has ",(0,i.jsx)("i",{children:"tabpanel"})," role, an id to match the",(0,i.jsx)("i",{children:"aria-controls"})," of the header and ",(0,i.jsx)("i",{children:"aria-labelledby"})," reference to the header as the accessible name."]}),(0,i.jsx)("h3",{children:"Tab Header Keyboard Support"}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Key"}),(0,i.jsx)("th",{children:"Function"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"tab"})}),(0,i.jsx)("td",{children:"Moves focus through the header."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"enter"})}),(0,i.jsx)("td",{children:"Activates the focused tab header."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"space"})}),(0,i.jsx)("td",{children:"Activates the focused tab header."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"right arrow"})}),(0,i.jsx)("td",{children:"Moves focus to the next header."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"left arrow"})}),(0,i.jsx)("td",{children:"Moves focus to the previous header."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"home"})}),(0,i.jsx)("td",{children:"Moves focus to the last header."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("i",{children:"end"})}),(0,i.jsx)("td",{children:"Moves focus to the first header."})]})]})]})})]})}var s=e.i(5180),r=e.i(91788),l=e.i(10836),u=e.i(183),d=e.i(15498),c=e.i(60150),m=e.i(20484),p=e.i(71834),b=e.i(40379),h=e.i(75676),v=e.i(55590),q=e.i(50901),x=e.i(45543),f=e.i(75366),g=e.i(51551),T=e.i(28653),N=e.i(3935);let j=d.ComponentBase.extend({defaultProps:{__TYPE:"TabView",id:null,activeIndex:0,className:null,onBeforeTabChange:null,onBeforeTabClose:null,onTabChange:null,onTabClose:null,panelContainerClassName:null,panelContainerStyle:null,renderActiveOnly:!0,scrollable:!1,style:null,children:void 0},css:{classes:{navcontent:"p-tabview-nav-content",nav:"p-tabview-nav",inkbar:"p-tabview-ink-bar",panelcontainer:({props:e})=>(0,N.classNames)("p-tabview-panels",e.panelContainerClassName),prevbutton:"p-tabview-nav-prev p-tabview-nav-btn p-link",nextbutton:"p-tabview-nav-next p-tabview-nav-btn p-link",root:({props:e})=>(0,N.classNames)("p-tabview p-component",{"p-tabview-scrollable":e.scrollable}),navcontainer:"p-tabview-nav-container",tab:{header:({selected:e,disabled:i,headerClassName:a,_className:t})=>(0,N.classNames)("p-unselectable-text",{"p-tabview-selected p-highlight":e,"p-disabled":i},a,t),headertitle:"p-tabview-title",headeraction:"p-tabview-nav-link",closeIcon:"p-tabview-close",content:({props:e,selected:i,getTabProp:a,tab:t,isSelected:n,shouldUseTab:o,index:s})=>o(t,s)&&(!e.renderActiveOnly||n(s))?(0,N.classNames)(a(t,"contentClassName"),a(t,"className"),"p-tabview-panel",{"p-hidden":!i}):void 0}},inlineStyles:{tab:{header:({headerStyle:e,_style:i})=>({...e||{},...i||{}}),content:({props:e,getTabProp:i,tab:a,isSelected:t,shouldUseTab:n,index:o})=>n(a,o)&&(!e.renderActiveOnly||t(o))?{...i(a,"contentStyle")||{},...i(a,"style")||{}}:void 0}}}}),I=d.ComponentBase.extend({defaultProps:{__TYPE:"TabPanel",children:void 0,className:null,closable:!1,closeIcon:null,contentClassName:null,contentStyle:null,disabled:!1,header:null,headerClassName:null,headerStyle:null,headerTemplate:null,leftIcon:null,nextButton:null,prevButton:null,rightIcon:null,style:null,visible:!0},getCProp:(e,i)=>g.ObjectUtils.getComponentProp(e,i,I.defaultProps),getCProps:e=>g.ObjectUtils.getComponentProps(e,I.defaultProps),getCOtherProps:e=>g.ObjectUtils.getComponentDiffProps(e,I.defaultProps)}),w=()=>{},P=r.forwardRef((e,a)=>{let t,n,o,s,w,P,y,C,D,H,k=(0,c.useMergeProps)(),S=r.useContext(l.PrimeReactContext),E=j.getProps(e,S),[V,A]=r.useState(E.id),[U,L]=r.useState(!0),[B,R]=r.useState(!1),[_,O]=r.useState([]),[F,$]=r.useState(E.activeIndex),M=r.useRef(null),W=r.useRef(null),X=r.useRef(null),K=r.useRef(null),z=r.useRef(null),J=r.useRef(null),Y=r.useRef({}),G=E.onTabChange?E.activeIndex:F,Q=r.Children.count(E.children),Z={props:E,state:{id:V,isPrevButtonDisabled:U,isNextButtonDisabled:B,hiddenTabsState:_,activeIndex:F}},{ptm:ee,ptmo:ei,cx:ea,sx:et,isUnstyled:en}=j.setMetaData({...Z});(0,d.useHandleStyle)(j.css.styles,en,{name:"tabview"});let eo=(e,i,a)=>{let t={props:e.props,parent:Z,context:{index:a,count:Q,first:0===a,last:a===Q-1,active:a==F,disabled:er(e,"disabled")}};return k(ee(`tab.${i}`,{tab:t}),ee(`tabpanel.${i}`,{tabpanel:t}),ee(`tabpanel.${i}`,t),ei(er(e,"pt"),i,t))},es=e=>e===G,er=(e,i)=>I.getCProp(e,i),el=e=>e&&er(e,"visible")&&g.ObjectUtils.isValidChild(e,"TabPanel")&&_.every(i=>i!==e.key),eu=(e,i)=>{e.preventDefault();let{onBeforeTabClose:a,onTabClose:t,children:n}=E,{key:o}=n[i];(!a||!1!==a({originalEvent:e,index:i}))&&(O([..._,o]),t&&t({originalEvent:e,index:i}))},ed=(e,i,a)=>{ec(e,i,a)},ec=(e,i,a)=>{if(e&&e.preventDefault(),!er(i,"disabled")){if(E.onBeforeTabChange&&!1===E.onBeforeTabChange({originalEvent:e,index:a}))return;E.onTabChange?E.onTabChange({originalEvent:e,index:a}):$(a)}ew({index:a})},em=(e,i,a)=>{switch(e.code){case"ArrowLeft":eb(e);break;case"ArrowRight":ep(e);break;case"Home":eh(e);break;case"End":ev(e);break;case"PageDown":eq(e);break;case"PageUp":ex(e);break;case"Enter":case"NumpadEnter":case"Space":ef(e,i,a)}},ep=e=>{let i=eg(e.target.parentElement);i?eI(i):eh(e),e.preventDefault()},eb=e=>{let i=eT(e.target.parentElement);i?eI(i):ev(e),e.preventDefault()},eh=e=>{eI(eN()),e.preventDefault()},ev=e=>{eI(ej()),e.preventDefault()},eq=e=>{ew({index:r.Children.count(E.children)-1}),e.preventDefault()},ex=e=>{ew({index:0}),e.preventDefault()},ef=(e,i,a)=>{ec(e,i,a),e.preventDefault()},eg=(e,i=!1)=>{let a=i?e:e.nextElementSibling;return a?x.DomHandler.getAttribute(a,"data-p-disabled")||"inkbar"===x.DomHandler.getAttribute(a,"data-pc-section")?eg(a):x.DomHandler.findSingle(a,'[data-pc-section="headeraction"]'):null},eT=(e,i=!1)=>{let a=i?e:e.previousElementSibling;return a?x.DomHandler.getAttribute(a,"data-p-disabled")||"inkbar"===x.DomHandler.getAttribute(a,"data-pc-section")?eT(a):x.DomHandler.findSingle(a,'[data-pc-section="headeraction"]'):null},eN=()=>eg(X.current.firstElementChild,!0),ej=()=>eT(X.current.lastElementChild,!0),eI=e=>{e&&(x.DomHandler.focus(e),ew({element:e}))},ew=({index:e,element:i})=>{let a=i||Y.current[`tab_${e}`];a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest"})},eP=()=>{let{scrollLeft:e,scrollWidth:i}=W.current,a=x.DomHandler.getWidth(W.current);L(0===e),R(parseInt(e)===i-a)},ey=()=>[z.current,J.current].reduce((e,i)=>i?e+x.DomHandler.getWidth(i):e,0),eC=()=>{L(!0),R(!1),O([]),E.onTabChange?E.onTabChange({index:G}):$(E.activeIndex)};r.useEffect(()=>{let e;e=Y.current[`tab_${G}`],K.current.style.width=x.DomHandler.getWidth(e)+"px",K.current.style.left=x.DomHandler.getOffset(e).left-x.DomHandler.getOffset(X.current).left+"px",eP()}),(0,m.useMountEffect)(()=>{V||A((0,T.UniqueComponentId)()),W.current.style.scrollPaddingInline=Math.max(x.DomHandler.getWidth(z.current),x.DomHandler.getWidth(J.current),0)+"px",ew({index:E.activeIndex})}),(0,p.useUpdateEffect)(()=>{if(g.ObjectUtils.isNotEmpty(_)){var e;let i,a=(e=_[_.length-1],(i=r.Children.map(E.children,(e,i)=>{if(el(e))return{tab:e,index:i}})).find(({tab:i,index:a})=>!er(i,"disabled")&&a>=e)||i.reverse().find(({tab:i,index:a})=>!er(i,"disabled")&&e>a));a&&ed(null,a.tab,a.index)}},[_]),(0,p.useUpdateEffect)(()=>{E.activeIndex!==F&&ew({index:E.activeIndex})},[E.activeIndex]),r.useImperativeHandle(a,()=>({props:E,reset:eC,getElement:()=>M.current}));let eD=k({id:V,ref:M,style:E.style,className:(0,N.classNames)(E.className,ea("root"))},j.getOtherProps(E),ee("root")),eH=k({className:ea("navcontainer")},ee("navcontainer")),ek=(t=r.Children.map(E.children,(e,a)=>{if(el(e))return((e,a)=>{let t=es(a),{headerStyle:n,headerClassName:o,style:s,className:r,disabled:l,leftIcon:d,rightIcon:c,header:m,headerTemplate:p,closable:b,closeIcon:h}=I.getCProps(e),x=V+"_header_"+a,T=V+a+"_content",N=l||!t?-1:0,j=d&&f.IconUtils.getJSXIcon(d,void 0,{props:E}),w=k({className:ea("tab.headertitle")},eo(e,"headertitle",a)),P=(0,i.jsx)("span",{...w,children:m}),y=c&&f.IconUtils.getJSXIcon(c,void 0,{props:E}),C=k({className:ea("tab.closeIcon"),onClick:e=>eu(e,a),onKeyDown:e=>((e,i)=>{switch(e.preventDefault(),e.stopPropagation(),e.code){case"Space":case"NumpadEnter":case"Enter":eu(e,i)}})(e,a),tabIndex:0,"aria-label":(0,u.ariaLabel)("close")||"Close"},eo(e,"closeIcon",a)),D=h||(0,i.jsx)(v.TimesIcon,{...C}),H=b?f.IconUtils.getJSXIcon(D,{...C},{props:E}):null,S=k({id:x,role:"tab",className:ea("tab.headeraction"),tabIndex:N,"aria-controls":T,"aria-selected":t,"aria-disabled":l,onClick:i=>ed(i,e,a),onKeyDown:i=>em(i,e,a)},eo(e,"headeraction",a)),A=(0,i.jsxs)("a",{...S,children:[j,P,y,H,(0,i.jsx)(q.Ripple,{})]});if(p){let i={className:"p-tabview-nav-link",titleClassName:"p-tabview-title",onClick:i=>ed(i,e,a),onKeyDown:i=>em(i,e,a),leftIconElement:j,titleElement:P,rightIconElement:y,element:A,props:E,index:a,selected:t,ariaControls:T};A=g.ObjectUtils.getJSXElement(p,i)}let U=k({ref:e=>Y.current[`tab_${a}`]=e,className:ea("tab.header",{selected:t,disabled:l,headerClassName:o,_className:r}),style:et("tab.header",{headerStyle:n,_style:s}),role:"presentation"},eo(e,"root",a),eo(e,"header",a));return(0,i.jsx)("li",{...U,children:A})})(e,a)}),n=k({id:V+"_navcontent",ref:W,className:ea("navcontent"),style:E.style,onScroll:e=>{E.scrollable&&eP(),e.preventDefault()}},ee("navcontent")),o=k({ref:X,className:ea("nav"),role:"tablist"},ee("nav")),s=k({ref:K,"aria-hidden":"true",role:"presentation",className:ea("inkbar")},ee("inkbar")),(0,i.jsx)("div",{...n,children:(0,i.jsxs)("ul",{...o,children:[t,(0,i.jsx)("li",{...s})]})})),eS=(w=k({className:ea("panelcontainer"),style:E.panelContainerStyle},ee("panelcontainer")),P=r.Children.map(E.children,(e,a)=>{if(el(e)&&(!E.renderActiveOnly||es(a))){let t=es(a),n=V+a+"_content",o=V+"_header_"+a,s=k({id:n,className:ea("tab.content",{props:E,selected:t,getTabProp:er,tab:e,isSelected:es,shouldUseTab:el,index:a}),style:et("tab.content",{props:E,getTabProp:er,tab:e,isSelected:es,shouldUseTab:el,index:a}),role:"tabpanel","aria-labelledby":o},I.getCOtherProps(e),eo(e,"root",a),eo(e,"content",a));return(0,i.jsx)("div",{...s,children:E.renderActiveOnly?t&&er(e,"children"):er(e,"children")})}}),(0,i.jsx)("div",{...w,children:P})),eE=(y=k({"aria-hidden":"true"},ee("previcon")),C=E.prevButton||(0,i.jsx)(b.ChevronLeftIcon,{...y}),D=f.IconUtils.getJSXIcon(C,{...y},{props:E}),H=k({ref:z,type:"button",className:ea("prevbutton"),"aria-label":(0,u.ariaLabel)("prevPageLabel"),onClick:e=>{let i,a;return i=x.DomHandler.getWidth(W.current)-ey(),a=W.current.scrollLeft-i,void(W.current.scrollLeft=a<=0?0:a)}},ee("prevbutton")),E.scrollable&&!U?(0,i.jsxs)("button",{...H,children:[D,(0,i.jsx)(q.Ripple,{})]}):null),eV=(()=>{let e=k({"aria-hidden":"true"},ee("nexticon")),a=E.nextButton||(0,i.jsx)(h.ChevronRightIcon,{...e}),t=f.IconUtils.getJSXIcon(a,{...e},{props:E}),n=k({ref:J,type:"button",className:ea("nextbutton"),"aria-label":(0,u.ariaLabel)("nextPageLabel"),onClick:e=>{let i,a,t;return i=x.DomHandler.getWidth(W.current)-ey(),a=W.current.scrollLeft+i,t=W.current.scrollWidth-i,void(W.current.scrollLeft=a>=t?t:a)}},ee("nextbutton"));if(E.scrollable&&!B)return(0,i.jsxs)("button",{...n,children:[t,(0,i.jsx)(q.Ripple,{})]})})();return(0,i.jsxs)("div",{...eD,children:[(0,i.jsxs)("div",{...eH,children:[eE,ek,eV]}),eS]})});function y(e){let a={basic:`
<TabView>
    <TabPanel header="Header I">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </TabPanel>
    <TabPanel header="Header II">
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </TabPanel>
    <TabPanel header="Header III">
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </TabPanel>
</TabView>
        `,javascript:`
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';

export default function BasicDemo() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';
import './TabViewDemo.css';

export default function BasicDemo() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"TabView consists of one or more TabPanel elements."})}),(0,i.jsx)("div",{className:"card",children:(0,i.jsxs)(P,{children:[(0,i.jsx)(w,{header:"Header I",children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),(0,i.jsx)(w,{header:"Header II",children:(0,i.jsx)("p",{className:"m-0",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."})}),(0,i.jsx)(w,{header:"Header III",children:(0,i.jsx)("p",{className:"m-0",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})})]})}),(0,i.jsx)(s.DocSectionCode,{code:a})]})}function C(e){let a={basic:`
<TabView>
    <TabPanel header="Header I" key="tab1">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </TabPanel>
    <TabPanel header="Header II" key="tab2" closable>
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </TabPanel>
    <TabPanel header="Header III" key="tab3" closable>
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </TabPanel>
</TabView>
        `,javascript:`
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';

export default function ClosableDemo() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Header I" key="tab1">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="Header II" key="tab2" closable>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="Header III" key="tab3" closable>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';

export default function ClosableDemo() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Header I" key="tab1">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="Header II" key="tab2" closable>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="Header III" key="tab3" closable>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["When ",(0,i.jsx)("i",{children:"closable"})," is enabled, a close icon is displayed to hide the tab ."]})}),(0,i.jsx)("div",{className:"card",children:(0,i.jsxs)(P,{children:[(0,i.jsx)(w,{header:"Header I",children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})},"tab1"),(0,i.jsx)(w,{header:"Header II",closable:!0,children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})},"tab2"),(0,i.jsx)(w,{header:"Header III",closable:!0,children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})},"tab3")]})}),(0,i.jsx)(s.DocSectionCode,{code:a})]})}w.displayName="TabPanel",P.displayName="TabView";var D=e.i(57724);function H(e){let[a,t]=(0,r.useState)(0),o={basic:`
<div className="flex mb-2 gap-2 justify-content-end">
    <Button onClick={() => setActiveIndex(0)} className="w-2rem h-2rem p-0" rounded outlined={activeIndex !== 0} label="1" />
    <Button onClick={() => setActiveIndex(1)} className="w-2rem h-2rem p-0" rounded outlined={activeIndex !== 1} label="2" />
    <Button onClick={() => setActiveIndex(2)} className="w-2rem h-2rem p-0" rounded outlined={activeIndex !== 2} label="3" />
</div>
<TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
    <TabPanel header="Header I">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </TabPanel>
    <TabPanel header="Header II">
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </TabPanel>
    <TabPanel header="Header III">
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </TabPanel>
</TabView>
        `,javascript:`
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';

export default function ControlledDemo() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="card">
            <div className="flex mb-2 gap-2 justify-content-end">
                <Button onClick={() => setActiveIndex(0)} className="w-2rem h-2rem p-0" rounded outlined={activeIndex !== 0} label="1" />
                <Button onClick={() => setActiveIndex(1)} className="w-2rem h-2rem p-0" rounded outlined={activeIndex !== 1} label="2" />
                <Button onClick={() => setActiveIndex(2)} className="w-2rem h-2rem p-0" rounded outlined={activeIndex !== 2} label="3" />
            </div>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';

export default function ControlledDemo() {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <div className="card">
            <div className="flex mb-2 gap-2 justify-content-end">
                <Button onClick={() => setActiveIndex(0)} className="w-2rem h-2rem p-0" rounded outlined={activeIndex !== 0} label="1" />
                <Button onClick={() => setActiveIndex(1)} className="w-2rem h-2rem p-0" rounded outlined={activeIndex !== 1} label="2" />
                <Button onClick={() => setActiveIndex(2)} className="w-2rem h-2rem p-0" rounded outlined={activeIndex !== 2} label="3" />
            </div>
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["TabView can be controlled programmatically using a binding to ",(0,i.jsx)("i",{children:"activeIndex"})," along with ",(0,i.jsx)("i",{children:"onTabChange"})," event to update the active index."]})}),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsxs)("div",{className:"flex mb-2 gap-2 justify-content-end",children:[(0,i.jsx)(D.Button,{onClick:()=>t(0),className:"w-2rem h-2rem p-0",rounded:!0,outlined:0!==a,label:"1"}),(0,i.jsx)(D.Button,{onClick:()=>t(1),className:"w-2rem h-2rem p-0",rounded:!0,outlined:1!==a,label:"2"}),(0,i.jsx)(D.Button,{onClick:()=>t(2),className:"w-2rem h-2rem p-0",rounded:!0,outlined:2!==a,label:"3"})]}),(0,i.jsxs)(P,{activeIndex:a,onTabChange:e=>t(e.index),children:[(0,i.jsx)(w,{header:"Header I",children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),(0,i.jsx)(w,{header:"Header II",children:(0,i.jsx)("p",{className:"m-0",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."})}),(0,i.jsx)(w,{header:"Header III",children:(0,i.jsx)("p",{className:"m-0",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})})]})]}),(0,i.jsx)(s.DocSectionCode,{code:o})]})}function k(e){let a={basic:`
<TabView>
    <TabPanel header="Header I">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </TabPanel>
    <TabPanel header="Header II">
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </TabPanel>
    <TabPanel header="Header III">
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </TabPanel>
    <TabPanel header="Header IV" disabled></TabPanel>
</TabView>
        `,javascript:`
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';

export default function DisabledDemo() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
                <TabPanel header="Header IV" disabled></TabPanel>
            </TabView>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';

export default function DisabledDemo() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
                <TabPanel header="Header IV" disabled></TabPanel>
            </TabView>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Enabling ",(0,i.jsx)("i",{children:"disabled"})," property of a TabPanel prevents user interaction."]})}),(0,i.jsx)("div",{className:"card",children:(0,i.jsxs)(P,{children:[(0,i.jsx)(w,{header:"Header I",children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),(0,i.jsx)(w,{header:"Header II",children:(0,i.jsx)("p",{className:"m-0",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."})}),(0,i.jsx)(w,{header:"Header III",children:(0,i.jsx)("p",{className:"m-0",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})}),(0,i.jsx)(w,{header:"Header IV",disabled:!0})]})}),(0,i.jsx)(s.DocSectionCode,{code:a})]})}function S(e){let a={basic:`
<TabView>
    <TabPanel header="Header I" leftIcon="pi pi-calendar mr-2">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </TabPanel>
    <TabPanel header="Header II" rightIcon="pi pi-user ml-2">
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </TabPanel>
    <TabPanel header="Header III" leftIcon="pi pi-search mr-2" rightIcon="pi pi-cog ml-2">
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </TabPanel>
</TabView>
        `,javascript:`
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';

export default function HeaderIconDemo() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Header I" leftIcon="pi pi-calendar mr-2">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="Header II" rightIcon="pi pi-user ml-2">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="Header III" leftIcon="pi pi-search mr-2" rightIcon="pi pi-cog ml-2">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';

export default function HeaderIconDemo() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Header I" leftIcon="pi pi-calendar mr-2">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="Header II" rightIcon="pi pi-user ml-2">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="Header III" leftIcon="pi pi-search mr-2" rightIcon="pi pi-cog ml-2">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Icons next to the tab headers are specified with the ",(0,i.jsx)("i",{children:"leftIcon"})," and ",(0,i.jsx)("i",{children:"rightIcon"})," properties."]})}),(0,i.jsx)("div",{className:"card",children:(0,i.jsxs)(P,{children:[(0,i.jsx)(w,{header:"Header I",leftIcon:"pi pi-calendar mr-2",children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),(0,i.jsx)(w,{header:"Header II",rightIcon:"pi pi-user ml-2",children:(0,i.jsx)("p",{className:"m-0",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."})}),(0,i.jsx)(w,{header:"Header III",leftIcon:"pi pi-search mr-2",rightIcon:"pi pi-cog ml-2",children:(0,i.jsx)("p",{className:"m-0",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})})]})}),(0,i.jsx)(s.DocSectionCode,{code:a})]})}function E(e){let a={basic:`
import { TabView, TabPanel } from 'primereact/tabview';
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.DocSectionText,{...e}),(0,i.jsx)(s.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}let V=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.DocSectionText,{...e}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/tabview.jpg",alt:"panel"})})]});function A(e){let a=Array.from({length:50},(e,i)=>({title:`Tab ${i+1}`,content:`Tab ${i+1} Content`})),t={basic:`
<TabView scrollable>
    {scrollableTabs.map((tab) => {
        return (
            <TabPanel key={tab.title} header={tab.title}>
                <p className="m-0">{tab.content}</p>
            </TabPanel>
        );
    })}
</TabView>
        `,javascript:`
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

export default function ScrollableDemo() {
    const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` }))

    return (
        <div className="card">
            <TabView scrollable>
                {scrollableTabs.map((tab) => {
                    return (
                        <TabPanel key={tab.title} header={tab.title}>
                            <p className="m-0">{tab.content}</p>
                        </TabPanel>
                    );
                })}
            </TabView>
        </div>
    )
}
        `,typescript:`
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

export default function ScrollableDemo() {
    const scrollableTabs = Array.from({ length: 50 }, (_, i) => ({ title: \`Tab \${i + 1}\`, content: \`Tab \${i + 1} Content\` }))

    return (
        <div className="card">
            <TabView scrollable>
                {scrollableTabs.map((tab) => {
                    return (
                        <TabPanel key={tab.title} header={tab.title}>
                            <p className="m-0">{tab.content}</p>
                        </TabPanel>
                    );
                })}
            </TabView>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Adding ",(0,i.jsx)("i",{children:"scrollable"})," property displays navigational buttons at each side to scroll between tabs."]})}),(0,i.jsx)("div",{className:"card",children:(0,i.jsx)(P,{scrollable:!0,children:a.map(e=>(0,i.jsx)(w,{header:e.title,children:(0,i.jsx)("p",{className:"m-0",children:e.content})},e.title))})}),(0,i.jsx)(s.DocSectionCode,{code:t})]})}var U=e.i(10197),L=e.i(50989);function B(e){let a={basic:`
<TabView>
    <TabPanel header="Header I" headerTemplate={tab1HeaderTemplate}>
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </TabPanel>
    <TabPanel headerTemplate={tab2HeaderTemplate} headerClassName="flex align-items-center">
        <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
            ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
    </TabPanel>
    <TabPanel headerTemplate={tab3HeaderTemplate} headerClassName="flex align-items-center">
        <p className="m-0">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
    </TabPanel>
</TabView>
        `,javascript:`
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';
import { SplitButton } from 'primereact/splitbutton';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    const tab1HeaderTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Amy Elsner</span>
            </div>
        );
    };

    const tab2HeaderTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Onyama Limba</span>
            </div>
        )
    };

    const tab3HeaderTemplate = (options) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Ioni Bowcher</span>
                <Badge value="2" />
            </div>
        )
    };

    return (
        <div className="card">
            <TabView>
                <TabPanel header="Header I" headerTemplate={tab1HeaderTemplate}>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel headerTemplate={tab2HeaderTemplate} headerClassName="flex align-items-center">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel headerTemplate={tab3HeaderTemplate} headerClassName="flex align-items-center">
                <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { TabView, TabPanel, TabPanelHeaderTemplateOptions } from 'primereact/tabview';
import { SplitButton } from 'primereact/splitbutton';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export default function TemplateDemo() {
    const tab1HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Amy Elsner</span>
            </div>
        );
    };

    const tab2HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Onyama Limba</span>
            </div>
        )
    };

    const tab3HeaderTemplate = (options: TabPanelHeaderTemplateOptions) => {
        return (
            <div className="flex align-items-center gap-2 p-3" style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png" shape="circle" />
                <span className="font-bold white-space-nowrap">Ioni Bowcher</span>
                <Badge value="2" />
            </div>
        )
    };

    return (
        <div className="card">
            <TabView>
                <TabPanel header="Header I" headerTemplate={tab1HeaderTemplate}>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel headerTemplate={tab2HeaderTemplate} headerClassName="flex align-items-center">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel headerTemplate={tab3HeaderTemplate} headerClassName="flex align-items-center">
                <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}
        `};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.DocSectionText,{...e,children:(0,i.jsxs)("p",{children:["Title section of a tab is customized with the ",(0,i.jsx)("i",{children:"header"})," property that takes a ",(0,i.jsx)("i",{children:"TabPanelHeaderTemplateOptions"})," object as a parameter and returns content."]})}),(0,i.jsx)("div",{className:"card flex justify-content-center",children:(0,i.jsxs)(P,{children:[(0,i.jsx)(w,{header:"Header I",headerTemplate:e=>(0,i.jsxs)("div",{className:"flex align-items-center gap-2 p-3",style:{cursor:"pointer"},onClick:e.onClick,children:[(0,i.jsx)(U.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png",shape:"circle"}),(0,i.jsx)("span",{className:"font-bold white-space-nowrap",children:"Amy Elsner"})]}),children:(0,i.jsx)("p",{className:"m-0",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),(0,i.jsx)(w,{headerTemplate:e=>(0,i.jsxs)("div",{className:"flex align-items-center gap-2 p-3",style:{cursor:"pointer"},onClick:e.onClick,children:[(0,i.jsx)(U.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png",shape:"circle"}),(0,i.jsx)("span",{className:"font-bold white-space-nowrap",children:"Onyama Limba"})]}),headerClassName:"flex align-items-center",children:(0,i.jsx)("p",{className:"m-0",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."})}),(0,i.jsx)(w,{headerTemplate:e=>(0,i.jsxs)("div",{className:"flex align-items-center gap-2 p-3",style:{cursor:"pointer"},onClick:e.onClick,children:[(0,i.jsx)(U.Avatar,{image:"https://primefaces.org/cdn/primereact/images/avatar/ionibowcher.png",shape:"circle"}),(0,i.jsx)("span",{className:"font-bold white-space-nowrap",children:"Ioni Bowcher"}),(0,i.jsx)(L.Badge,{value:"2"})]}),headerClassName:"flex align-items-center",children:(0,i.jsx)("p",{className:"m-0",children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."})})]})}),(0,i.jsx)(s.DocSectionCode,{code:a})]})}function R(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.DocSectionText,{...e,children:(0,i.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,i.jsx)("div",{className:"doc-tablewrapper",children:(0,i.jsxs)("table",{className:"doc-table",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Element"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-tabview"}),(0,i.jsx)("td",{children:"Container element."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-tabview-nav"}),(0,i.jsx)("td",{children:"Container of headers."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-tabview-selected"}),(0,i.jsx)("td",{children:"Selected tab header."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-tabview-panels"}),(0,i.jsx)("td",{children:"Container panels."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"p-tabview-panel"}),(0,i.jsx)("td",{children:"Content of a tab."})]})]})]})})]})}var _=e.i(41158);function O(e){let a={basic:`
const Tailwind = {
    tabview: {
        navContainer: ({ props }) => ({
            className: classNames(
                'relative', // Relative positioning.
                { 'overflow-hidden': props.scrollable } // Overflow condition.
            )
        }),
        navContent: 'overflow-y-hidden overscroll-contain overscroll-auto scroll-smooth [&::-webkit-scrollbar]:hidden', // Overflow and scrollbar styles.
        previousButton: {
            className: classNames('h-full flex items-center justify-center !absolute top-0 z-20', 'left-0', 'bg-white text-blue-500 w-12 shadow-md rounded-none', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 )') // Flex and absolute positioning styles.
        },
        nextButton: {
            className: classNames('h-full flex items-center justify-center !absolute top-0 z-20', 'right-0', 'bg-white text-blue-500 w-12 shadow-md rounded-none', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 ') // Flex and absolute positioning styles.
        },
        nav: {
            className: classNames('flex flex-1 list-none m-0 p-0', 'bg-transparent border border-gray-300 border-0 border-b-2', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 ') // Flex, list, margin, padding, and border styles.
        },
    },
    tabpanel: {
        header: ({ props }) => ({
            className: classNames('mr-0', { 'cursor-default pointer-events-none select-none user-select-none opacity-60': props?.disabled }) // Margin and condition-based styles.
        }),
        headerAction: ({ parent, context }) => ({
            className: classNames(
                'items-center cursor-pointer flex overflow-hidden relative select-none text-decoration-none user-select-none', // Flex and overflow styles.
                'border-b-2 p-5 font-bold rounded-t-md transition-shadow duration-200 m-0', // Border, padding, font, and transition styles.
                'transition-colors duration-200', // Transition duration style.
                'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // Focus styles.
                {
                    'border-gray-300 bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80':
                        parent != null ? parent.state.activeIndex !== context.index : true, // Condition-based hover styles.
                    'bg-white border-blue-500 text-blue-500 dark:bg-gray-900 dark:border-blue-300 dark:text-blue-300': parent != null ? parent.state.activeIndex === context.index : false // Condition-based active styles.
                }
            ),
            style: { marginBottom: '-2px' } // Negative margin style.
        }),
        headerTitle: {
            className: classNames('leading-none whitespace-nowrap') // Leading and whitespace styles.
        },
        content: {
            className: classNames('bg-white p-5 border-0 text-gray-700 rounded-bl-md rounded-br-md', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80') // Background, padding, border, and text styles.
        }
    }
}
    `},t={javascript:`
import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

export default function UnstyledDemo() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
                <TabPanel header="Header IV" disabled></TabPanel>
            </TabView>
        </div>
    )
}
    `};return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(n.DocSectionText,{...e,children:[(0,i.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,i.jsx)(_.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,i.jsx)(s.DocSectionCode,{code:a,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,i.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,i.jsx)(s.DocSectionCode,{code:t,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:V},{id:"pt.tabview.options",label:"TabView PT Options",component:a.default},{id:"pt.tabpanel.options",label:"TabPanel PT Options",component:a.default}];return(0,i.jsx)(t.DocComponent,{title:"React Tabs Component",header:"TabView",description:"TabView is a container component to group content with tabs.",componentDocs:[{id:"import",label:"Import",component:E},{id:"basic",label:"Basic",component:y},{id:"controlled",label:"Controlled",component:H},{id:"scrollable",label:"Scrollable",component:A},{id:"disabled",label:"Disabled",component:k},{id:"headericon",label:"Header Icon",component:S},{id:"template",label:"Template",component:B},{id:"closable",label:"Closable",component:C},{id:"accessibility",label:"Accessibility",component:o}],apiDocs:["TabView","TabPanel"],ptDocs:e,ptDescription:"",themingDocs:[{id:"styled",label:"Styled",component:R},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:O}]}]})}],63139)},59569,(e,i,a)=>{let t="/tabview";(window.__NEXT_P=window.__NEXT_P||[]).push([t,()=>e.r(63139)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([t])})}]);