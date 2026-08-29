(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,56924,e=>{"use strict";var t=e.i(91398),r=e.i(28137),i=e.i(41158);function s(){return(0,t.jsxs)(r.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Carousel uses ",(0,t.jsx)("i",{children:"region"})," role and since any attribute is passed to the main container element, attributes such as ",(0,t.jsx)("i",{children:"aria-label"})," and ",(0,t.jsx)("i",{children:"aria-roledescription"})," can be used as well. The slides container has ",(0,t.jsx)("i",{children:"aria-live"})," ",'attribute set as "polite" if carousel is not in autoplay mode, otherwise "off" would be the value in autoplay.']}),(0,t.jsxs)("p",{children:["A slide has a ",(0,t.jsx)("i",{children:"group"})," role with an aria-label that refers to the ",(0,t.jsx)("i",{children:"aria.slideNumber"})," property of the ",(0,t.jsx)(i.default,{href:"/locale",children:"locale"})," API. Similarly ",(0,t.jsx)("i",{children:"aria.slide"})," is used as the ",(0,t.jsx)("i",{children:"aria-roledescription"})," of the item. Inactive slides are hidden from the readers with ",(0,t.jsx)("i",{children:"aria-hidden"}),"."]}),(0,t.jsxs)("p",{children:["Next and Previous navigators are button elements with ",(0,t.jsx)("i",{children:"aria-label"})," attributes referring to the ",(0,t.jsx)("i",{children:"aria.nextPageLabel"})," and ",(0,t.jsx)("i",{children:"aria.firstPageLabel"})," properties of the ",(0,t.jsx)(i.default,{href:"/locale",children:"locale"})," API by default respectively, you may still use your own aria roles and attributes as any valid attribute is passed to the button elements implicitly by using ",(0,t.jsx)("i",{children:"nextButtonProps"})," and ",(0,t.jsx)("i",{children:"prevButtonProps"}),"."]}),(0,t.jsxs)("p",{children:["Quick navigation elements are button elements with an ",(0,t.jsx)("i",{children:"aria-label"})," attribute referring to the ",(0,t.jsx)("i",{children:"aria.pageLabel"})," of the ",(0,t.jsx)(i.default,{href:"/locale",children:"locale"})," API. Current page is marked with ",(0,t.jsx)("i",{children:"aria-current"}),"."]}),(0,t.jsx)("h3",{children:"Next/Prev Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus through interactive elements in the carousel."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Activates navigation."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Activates navigation."})]})]})]})}),(0,t.jsx)("h3",{children:"Quick Navigation Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus through the active slide link."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Activates the focused slide link."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Activates the focused slide link."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"right arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next slide link."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous slide link."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Moves focus to the first slide link."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Moves focus to the last slide link."})]})]})]})})]})}var a=e.i(5180),n=e.i(57724),c=e.i(91788),o=e.i(4242),l=e.i(10836),u=e.i(183),d=e.i(15498),p=e.i(60150),m=e.i(20484),h=e.i(58561),v=e.i(35048),x=e.i(71834),f=e.i(48214),b=e.i(40379),g=e.i(75676),S=e.i(17720),j=e.i(50901),y=e.i(45543),N=e.i(75366),T=e.i(51551),w=e.i(28653),O=e.i(3935);let C=`
@layer primereact {
    .p-carousel {
        display: flex;
        flex-direction: column;
    }
    
    .p-carousel-content {
        display: flex;
        flex-direction: column;
        overflow: auto;
    }
    
    .p-carousel-prev,
    .p-carousel-next {
        align-self: center;
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-carousel-container {
        display: flex;
        flex-direction: row;
    }
    
    .p-carousel-items-content {
        overflow: hidden;
        width: 100%;
    }
    
    .p-carousel-items-container {
        display: flex;
        flex-direction: row;
    }
    
    .p-carousel-indicators {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .p-carousel-indicator > button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    /* Vertical */
    .p-carousel-vertical .p-carousel-container {
        flex-direction: column;
    }
    
    .p-carousel-vertical .p-carousel-items-container {
        flex-direction: column;
        height: 100%;
    }
    
    /* Keyboard Support */
    .p-items-hidden .p-carousel-item {
        visibility: hidden;
    }
    
    .p-items-hidden .p-carousel-item.p-carousel-item-active {
        visibility: visible;
    }
}
`,P=d.ComponentBase.extend({defaultProps:{__TYPE:"Carousel",id:null,value:null,page:0,header:null,footer:null,style:null,className:null,itemTemplate:null,circular:!1,showIndicators:!0,showNavigators:!0,autoplayInterval:0,numVisible:1,numScroll:1,prevIcon:null,nextIcon:null,responsiveOptions:null,orientation:"horizontal",verticalViewPortHeight:"300px",contentClassName:null,containerClassName:null,indicatorsContentClassName:null,onPageChange:null,children:void 0},css:{classes:{root:({isVertical:e})=>(0,O.classNames)("p-carousel p-component",{"p-carousel-vertical":e,"p-carousel-horizontal":!e}),container:"p-carousel-container",content:"p-carousel-content",indicators:"p-carousel-indicators p-reset",header:"p-carousel-header",footer:"p-carousel-footer",itemsContainer:"p-carousel-items-container",itemsContent:"p-carousel-items-content",previousButton:({isDisabled:e})=>(0,O.classNames)("p-carousel-prev p-link",{"p-disabled":e}),previousButtonIcon:"p-carousel-prev-icon",nextButton:({isDisabled:e})=>(0,O.classNames)("p-carousel-next p-link",{"p-disabled":e}),nextButtonIcon:"p-carousel-next-icon",indicator:({isActive:e})=>(0,O.classNames)("p-carousel-indicator",{"p-highlight":e}),indicatorButton:"p-link",itemCloned:({itemProps:e})=>(0,O.classNames)(e.className,"p-carousel-item",{"p-carousel-item-active":e.active,"p-carousel-item-start":e.start,"p-carousel-item-end":e.end}),item:({itemProps:e})=>(0,O.classNames)(e.className,"p-carousel-item",{"p-carousel-item-active":e.active,"p-carousel-item-start":e.start,"p-carousel-item-end":e.end})},styles:C,inlineStyles:{itemsContent:({height:e})=>({height:e})}}}),k=c.memo(e=>{let r=(0,p.useMergeProps)(),{ptm:i,cx:s}=e,a=e.className&&"p-carousel-item-cloned"===e.className?"itemCloned":"item",n=e.template(e.item),c=r({className:s(a,{itemProps:e}),role:e.role,"aria-roledescription":e.ariaRoledescription,"aria-label":e.ariaLabel,"aria-hidden":e.ariaHidden,"data-p-carousel-item-active":e.active,"data-p-carousel-item-start":e.start,"data-p-carousel-item-end":e.end},i(a));return(0,t.jsx)("div",{...c,children:n})}),V=c.memo(c.forwardRef((e,r)=>{let i,s,a,n,C,V,I,B=(0,p.useMergeProps)(),D=c.useContext(l.PrimeReactContext),K=P.getProps(e,D),[R,E]=c.useState(K.numVisible),[$,L]=c.useState(K.numScroll),[F,U]=c.useState(-(K.page*K.numScroll*1)),[H,W]=c.useState(K.page),{ptm:A,cx:_,sx:M,isUnstyled:q}=P.setMetaData({props:K,state:{numVisible:R,numScroll:$,totalShiftedItems:F,page:H}});(0,d.useHandleStyle)(P.css.styles,q,{name:"carousel"});let z=c.useRef(null),X=c.useRef(null),Y=c.useRef(0),J=c.useRef(!!K.autoplayInterval),Q=c.useRef(""),G=c.useRef(20),Z=c.useRef(null),ee=c.useRef(null),et=c.useRef(null),er=c.useRef(null),ei=c.useRef(!1),es=c.useRef(null),ea=(0,h.usePrevious)($),en=(0,h.usePrevious)(R),ec=(0,h.usePrevious)(K.value),eo=(0,h.usePrevious)(K.page),el="vertical"===K.orientation,eu=K.circular||!!K.autoplayInterval,ed=eu&&K.value&&K.value.length>=R,ep=K.value?Math.max(Math.ceil((K.value.length-R)/$)+1,0):0,em=ep&&K.autoplayInterval&&J.current,eh=K.onPageChange&&!em,ev=eh?K.page:H,[ex]=(0,v.useResizeListener)({listener:()=>{eb()},when:K.responsiveOptions}),ef=(e,t)=>{let r=F;null!=t?(r=-($*t*1),ed&&(r-=R),ei.current=!1):(r+=$*e,ei.current&&(r+=Y.current-$*e,ei.current=!1),t=Math.abs(Math.floor((ed?r+R:r)/$))),ed&&H===ep-1&&-1===e?(r=-1*(K.value.length+R),t=0):ed&&0===H&&1===e?(r=0,t=ep-1):t===ep-1&&Y.current>0&&(r+=-1*Y.current-$*e,ei.current=!0),X.current&&(q()||y.DomHandler.removeClass(X.current,"p-items-hidden"),eB(r),X.current.style.transition="transform 500ms ease 0s"),eD(t),U(r)},eb=()=>{if(X.current&&es.current){let e=window.innerWidth,t={numVisible:K.numVisible,numScroll:K.numScroll};for(let r=0;r<es.current.length;r++){let i=es.current[r];parseInt(i.breakpoint,10)>=e&&(t=i)}if($!==t.numScroll){let e=Math.floor(ev*$/t.numScroll),r=-(t.numScroll*e*1);ed&&(r-=t.numVisible),U(r),L(t.numScroll),eD(e)}R!==t.numVisible&&E(t.numVisible)}},eg=(e,t)=>{(eu||0!==ev)&&ef(1,t),J.current=!1,e.cancelable&&e.preventDefault()},eS=(e,t)=>{(eu||ev<ep-1)&&ef(-1,t),J.current=!1,e.cancelable&&e.preventDefault()},ej=(e,t)=>{Math.abs(t)>G.current&&(t<0?eS(e):eg(e))},ey=e=>{switch(e.code){case"ArrowRight":eN();break;case"ArrowLeft":eT();break;case"Home":ew(),e.preventDefault();break;case"End":eO(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":eC()}},eN=()=>{let e=[...y.DomHandler.find(er.current,'[data-pc-section="indicator"]')],t=eP();ek(t,t+1===e.length?e.length-1:t+1)},eT=()=>{let e=eP();ek(e,e-1<=0?0:e-1)},ew=()=>{ek(eP(),0)},eO=()=>{let e=[...y.DomHandler.find(er.current,'[data-pc-section="indicator"]r')];ek(eP(),e.length-1)},eC=()=>{let e=[...y.DomHandler.find(er.current,'[data-pc-section="indicator"]')],t=e.findIndex(e=>!0===y.DomHandler.getAttribute(e,"data-p-highlight")),r=y.DomHandler.findSingle(er.current,'[data-pc-section="indicator"] > button[tabindex="0"]'),i=e.findIndex(e=>e===r.parentElement);e[i].children[0].tabIndex="-1",e[t].children[0].tabIndex="0"},eP=()=>{let e=[...y.DomHandler.find(er.current,'[data-pc-section="indicator"]')],t=y.DomHandler.findSingle(er.current,'[data-pc-section="indicator"] > button[tabindex="0"]');return e.findIndex(e=>e===t.parentElement)},ek=(e,t)=>{let r=[...y.DomHandler.find(er.current,'[data-pc-section="indicator"]')];r[e].children[0].tabIndex="-1",r[t].children[0].tabIndex="0",r[t].children[0].focus()},eV=()=>{K.autoplayInterval>0&&(ee.current=setInterval(()=>{H===ep-1?ef(-1,0):ef(-1,H+1)},K.autoplayInterval))},eI=()=>{ee.current&&clearInterval(ee.current)},eB=e=>{X.current&&(X.current.style.transform=el?`translate3d(0, ${100/R*e}%, 0)`:`translate3d(${100/R*e}%, 0, 0)`)},eD=e=>{eh||W(e),K.onPageChange&&K.onPageChange({page:e})};c.useImperativeHandle(r,()=>({props:K,startAutoplay:eV,stopAutoplay:eI,getElement:()=>z.current})),(0,m.useMountEffect)(()=>{if(z.current&&(Q.current=(0,w.UniqueComponentId)(),z.current.setAttribute(Q.current,"")),!et.current){if(eb(),ed){let e=-1*R;U(e),eB(e)}else eB(F);ex()}}),(0,x.useUpdateEffect)(()=>{let e=!1,t=F;et.current||(et.current=y.DomHandler.createInlineStyle(D&&D.nonce||o.default.nonce,D&&D.styleContainer));let r=`
            .p-carousel[${Q.current}] .p-carousel-item {
                flex: 1 0 ${100/R}%
            }
        `;if(K.responsiveOptions){let e=T.ObjectUtils.localeComparator(D&&D.locale||o.default.locale);es.current=[...K.responsiveOptions],es.current.sort((t,r)=>{let i=t.breakpoint,s=r.breakpoint;return T.ObjectUtils.sort(i,s,-1,e,D&&D.nullSortOrder||o.default.nullSortOrder)});for(let e=0;e<es.current.length;e++){let t=es.current[e];r+=`
                    @media screen and (max-width: ${t.breakpoint}) {
                        .p-carousel[${Q.current}] .p-carousel-item {
                            flex: 1 0 ${100/t.numVisible}%
                        }
                    }
                `}eb()}if(et.current.innerHTML=r,K.autoplayInterval&&eI(),ea!==$||en!==R||K.value&&ec&&ec.length!==K.value.length){Y.current=(K.value.length-R)%$;let r=ev;0!==ep&&r>=ep&&(eD(r=ep-1),e=!0),t=-(r*$*1),ed&&(t-=R),r===ep-1&&Y.current>0?(t+=-1*Y.current+$,ei.current=!0):ei.current=!1,t!==F&&(U(t),e=!0),eB(t)}return ed&&(0===H?t=-1*R:0===t&&(t=-1*K.value.length,Y.current>0&&(ei.current=!0)),t!==F&&(U(t),e=!0)),eo!==K.page&&(K.page>eo&&K.page<=ep-1?ef(-1,K.page):K.page<eo&&ef(1,K.page)),!e&&em&&eV(),()=>{K.autoplayInterval&&eI(),et.current=y.DomHandler.removeInlineStyle(et.current)}});let eK=e=>{let r,i=ev===e,s=e=>A(e,{context:{active:i}}),a="carousel-indicator-"+e,n=B({className:_("indicator",{isActive:i}),"data-p-highlight":i},s("indicator")),o=B({type:"button",className:_("indicatorButton"),tabIndex:ev===e?"0":"-1",onClick:t=>{e>ev?eS(t,e):e<ev&&eg(t,e)},"aria-label":(r=e+1,(0,u.ariaLabel)("pageLabel",{page:r})),"aria-current":ev===e?"page":void 0},s("indicatorButton"));return(0,c.createElement)("li",{...n,key:a},(0,t.jsx)("button",{...o,children:(0,t.jsx)(j.Ripple,{})}))},eR=(i=(()=>{if(K.value&&K.value.length){let e=null,r=null;if(ed){let i=null;e=(i=K.value.slice(-1*R)).map((e,r)=>{let s=-1*F===K.value.length+R,a=r===i.length-1;return(0,t.jsx)(k,{className:"p-carousel-item-cloned",template:K.itemTemplate,item:e,active:s,start:0===r,end:a,ptm:A,cx:_},r+"_scloned")}),r=(i=K.value.slice(0,R)).map((e,r)=>{let s=r===i.length-1;return(0,t.jsx)(k,{className:"p-carousel-item-cloned",template:K.itemTemplate,item:e,active:0===F,start:0===r,end:s,ptm:A,cx:_},r+"_fcloned")})}let i=K.value.map((e,r)=>{let i=ed?-1*(F+R):-1*F,s=i+R-1,a=i<=r&&s>=r,n=i===r,c=s===r,o=i>r||s<r||void 0,l=(0,u.ariaLabel)("slideNumber",{slideNumber:r}),d=(0,u.localeOption)("aria")?(0,u.localeOption)("aria").slide:void 0;return(0,t.jsx)(k,{template:K.itemTemplate,item:e,active:a,start:n,ariaHidden:o,ariaLabel:l,ariaRoledescription:d,role:"group",end:c,ptm:A,cx:_},r)});return(0,t.jsxs)(t.Fragment,{children:[e,i,r]})}})(),s=el?K.verticalViewPortHeight:"auto",a=(()=>{if(K.showNavigators){let e=(!eu||K.value&&K.value.length<R)&&0===ev,r=B({className:_("previousButtonIcon")},A("previousButtonIcon")),i=el?K.prevIcon||(0,t.jsx)(S.ChevronUpIcon,{...r}):K.prevIcon||(0,t.jsx)(b.ChevronLeftIcon,{...r}),s=N.IconUtils.getJSXIcon(i,{...r},{props:K}),a=B({type:"button",className:_("previousButton",{isDisabled:e}),onClick:e=>eg(e),disabled:e,"aria-label":(0,u.localeOption)("aria")?(0,u.localeOption)("aria").prevPageLabel:void 0,"data-pc-group-section":"navigator"},A("previousButton"));return(0,t.jsxs)("button",{...a,children:[s,(0,t.jsx)(j.Ripple,{})]})}return null})(),n=(()=>{if(K.showNavigators){let e=(!eu||K.value&&K.value.length<R)&&(ev===ep-1||0===ep),r=B({className:_("nextButtonIcon")},A("nextButtonIcon")),i=el?K.nextIcon||(0,t.jsx)(f.ChevronDownIcon,{...r}):K.nextIcon||(0,t.jsx)(g.ChevronRightIcon,{...r}),s=N.IconUtils.getJSXIcon(i,{...r},{props:K}),a=B({type:"button",className:_("nextButton",{isDisabled:e}),onClick:e=>eS(e),disabled:e,"aria-label":(0,u.localeOption)("aria")?(0,u.localeOption)("aria").nextPageLabel:void 0,"data-pc-group-section":"navigator"},A("nextButton"));return(0,t.jsxs)("button",{...a,children:[s,(0,t.jsx)(j.Ripple,{})]})}return null})(),C=B({className:_("itemsContent"),style:M("itemsContent",{height:s}),onTouchStart:e=>{let t;Z.current={x:(t=e.changedTouches[0]).pageX,y:t.pageY}},onTouchMove:e=>{e.cancelable&&e.preventDefault()},onTouchEnd:e=>{let t;return t=e.changedTouches[0],void(el?ej(e,t.pageY-Z.current.y):ej(e,t.pageX-Z.current.x))}},A("itemsContent")),V=B({className:(0,O.classNames)(K.containerClassName,_("container")),"aria-live":J.current?"polite":"off"},A("container")),I=B({className:_("itemsContainer"),onTransitionEnd:e=>{X.current&&"transform"===e.propertyName&&(y.DomHandler.addClass(X.current,"p-items-hidden"),X.current.style.transition="",(0===H||H===ep-1)&&ed&&eB(F))}},A("itemsContainer")),(0,t.jsxs)("div",{...V,children:[a,(0,t.jsx)("div",{...C,children:(0,t.jsx)("div",{ref:X,...I,children:i})}),n]})),eE=(()=>{if(K.showIndicators){let e=[];for(let t=0;t<ep;t++)e.push(eK(t));let r=B({ref:er,className:(0,O.classNames)(K.indicatorsContentClassName,_("indicators")),onKeyDown:ey},A("indicators"));return(0,t.jsx)("ul",{...r,children:e})}return null})(),e$=(()=>{if(K.header){let e=B({className:_("header")},A("header"));return(0,t.jsx)("div",{...e,children:K.header})}return null})(),eL=(()=>{if(K.footer){let e=B({className:_("footer")},A("footer"));return(0,t.jsx)("div",{...e,children:K.footer})}return null})(),eF=B({id:K.id,ref:z,className:(0,O.classNames)(K.className,_("root",{isVertical:el})),style:K.style,role:"region"},P.getOtherProps(K),A("root")),eU=B({className:(0,O.classNames)(K.contentClassName,_("content"))},A("content"));return(0,t.jsxs)("div",{...eF,children:[e$,(0,t.jsxs)("div",{...eU,children:[eR,eE]}),eL]})}));k.displayName="CarouselItem",V.displayName="Carousel";var I=e.i(39682),B=e.i(66534);function D(e){let[i,s]=(0,c.useState)([]);(0,c.useEffect)(()=>{B.ProductService.getProductsSmall().then(e=>s(e.slice(0,9)))},[]);let o={basic:`
<Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

export default function BasicDemo() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

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

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">\${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" rounded />
                        <Button icon="pi pi-star-fill" rounded severity="success" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
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

export default function BasicDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

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
    
    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product: Product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">\${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" rounded />
                        <Button icon="pi pi-star-fill" rounded severity="success" />
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div className="card">
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Carousel requires a collection of items as its value along with a template to render each item."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(V,{value:i,numVisible:3,numScroll:3,responsiveOptions:[{breakpoint:"1400px",numVisible:2,numScroll:1},{breakpoint:"1199px",numVisible:3,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}],itemTemplate:e=>(0,t.jsxs)("div",{className:"border-1 surface-border border-round m-2 text-center py-5 px-3",children:[(0,t.jsx)("div",{className:"mb-3",children:(0,t.jsx)("img",{src:`https://primefaces.org/cdn/primereact/images/product/${e.image}`,alt:e.name,className:"w-6 shadow-2"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"mb-1",children:e.name}),(0,t.jsxs)("h6",{className:"mt-0 mb-3",children:["$",e.price]}),(0,t.jsx)(I.Tag,{value:e.inventoryStatus,severity:(e=>{switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}})(e)}),(0,t.jsxs)("div",{className:"mt-5 flex flex-wrap gap-2 justify-content-center",children:[(0,t.jsx)(n.Button,{icon:"pi pi-search",rounded:!0}),(0,t.jsx)(n.Button,{icon:"pi pi-star-fill",rounded:!0,severity:"success"})]})]})]})})}),(0,t.jsx)(a.DocSectionCode,{code:o,service:["ProductService"]})]})}function K(e){let[i,s]=(0,c.useState)([]);(0,c.useEffect)(()=>{B.ProductService.getProductsSmall().then(e=>s(e.slice(0,9)))},[]);let o={basic:`
<Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
autoplayInterval={3000} itemTemplate={productTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

export default function CircularDemo() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

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

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">\${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
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

export default function CircularDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

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

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product: Product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">\${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div className="card">
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
    )
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"autoplayInterval"})," is defined in milliseconds, items are scrolled automatically. In addition, for infinite scrolling ",(0,t.jsx)("i",{children:"circular"})," property needs to be added which is enabled automatically in auto play mode."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(V,{value:i,numVisible:3,numScroll:3,responsiveOptions:[{breakpoint:"1400px",numVisible:2,numScroll:1},{breakpoint:"1199px",numVisible:3,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}],className:"custom-carousel",circular:!0,autoplayInterval:3e3,itemTemplate:e=>(0,t.jsxs)("div",{className:"border-1 surface-border border-round m-2 text-center py-5 px-3",children:[(0,t.jsx)("div",{className:"mb-3",children:(0,t.jsx)("img",{src:`https://primefaces.org/cdn/primereact/images/product/${e.image}`,alt:e.name,className:"w-6 shadow-2"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"mb-1",children:e.name}),(0,t.jsxs)("h6",{className:"mt-0 mb-3",children:["$",e.price]}),(0,t.jsx)(I.Tag,{value:e.inventoryStatus,severity:(e=>{switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}})(e)}),(0,t.jsxs)("div",{className:"mt-5 flex flex-wrap gap-2 justify-content-center",children:[(0,t.jsx)(n.Button,{icon:"pi pi-search",className:"p-button p-button-rounded"}),(0,t.jsx)(n.Button,{icon:"pi pi-star-fill",className:"p-button-success p-button-rounded"})]})]})]})})}),(0,t.jsx)(a.DocSectionCode,{code:o,service:["ProductService"]})]})}function R(e){let i={basic:`
import { Carousel } from 'primereact/carousel';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)(a.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function E(e){let[i,s]=(0,c.useState)([]);(0,c.useEffect)(()=>{B.ProductService.getProductsSmall().then(e=>s(e.slice(0,9)))},[]);let o={basic:`
<Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

export default function NumScrollDemo() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

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

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">\${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
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

export default function NumScrollDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

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

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product: Product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">\${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div className="card">
            <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Number of items to scroll is specified with the ",(0,t.jsx)("i",{children:"numScroll"})," option."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(V,{value:i,numScroll:1,numVisible:3,responsiveOptions:[{breakpoint:"1400px",numVisible:2,numScroll:1},{breakpoint:"1199px",numVisible:3,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}],itemTemplate:e=>(0,t.jsxs)("div",{className:"border-1 surface-border border-round m-2 text-center py-5 px-3",children:[(0,t.jsx)("div",{className:"mb-3",children:(0,t.jsx)("img",{src:`https://primefaces.org/cdn/primereact/images/product/${e.image}`,alt:e.name,className:"w-6 shadow-2"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"mb-1",children:e.name}),(0,t.jsxs)("h6",{className:"mt-0 mb-3",children:["$",e.price]}),(0,t.jsx)(I.Tag,{value:e.inventoryStatus,severity:(e=>{switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}})(e)}),(0,t.jsxs)("div",{className:"mt-5 flex flex-wrap gap-2 justify-content-center",children:[(0,t.jsx)(n.Button,{icon:"pi pi-search",className:"p-button p-button-rounded"}),(0,t.jsx)(n.Button,{icon:"pi pi-star-fill",className:"p-button-success p-button-rounded"})]})]})]})})}),(0,t.jsx)(a.DocSectionCode,{code:o,service:["ProductService"]})]})}let $=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"carousel"})})]});function L(e){let[i,s]=(0,c.useState)([]);(0,c.useEffect)(()=>{B.ProductService.getProductsSmall().then(e=>s(e.slice(0,9)))},[]);let o={basic:`
<Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

export default function ResponsiveDemo() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

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
    
    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">\${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
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

export default function ResponsiveDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

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
    
    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product: Product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">\${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div className="card">
            <Carousel value={products} numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Carousel supports specific configuration per screen size with the ",(0,t.jsx)("i",{children:"responsiveOptions"})," property that takes an array of objects where each object defines the max-width ",(0,t.jsx)("i",{children:"breakpoint"}),", ",(0,t.jsx)("i",{children:"numVisible"})," for the number of items items per page and ",(0,t.jsx)("i",{children:"numScroll"})," for number of items to scroll. When ",(0,t.jsx)("i",{children:"responsiveOptions"})," is defined, the ",(0,t.jsx)("i",{children:"numScroll"})," and ",(0,t.jsx)("i",{children:"numVisible"})," properties of the Carousel are used as default when there is breakpoint that applies."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(V,{value:i,numScroll:1,numVisible:3,responsiveOptions:[{breakpoint:"1400px",numVisible:2,numScroll:1},{breakpoint:"1199px",numVisible:3,numScroll:1},{breakpoint:"767px",numVisible:2,numScroll:1},{breakpoint:"575px",numVisible:1,numScroll:1}],itemTemplate:e=>(0,t.jsxs)("div",{className:"border-1 surface-border border-round m-2 text-center py-5 px-3",children:[(0,t.jsx)("div",{className:"mb-3",children:(0,t.jsx)("img",{src:`https://primefaces.org/cdn/primereact/images/product/${e.image}`,alt:e.name,className:"w-6 shadow-2"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"mb-1",children:e.name}),(0,t.jsxs)("h6",{className:"mt-0 mb-3",children:["$",e.price]}),(0,t.jsx)(I.Tag,{value:e.inventoryStatus,severity:(e=>{switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}})(e)}),(0,t.jsxs)("div",{className:"mt-5 flex flex-wrap gap-2 justify-content-center",children:[(0,t.jsx)(n.Button,{icon:"pi pi-search",className:"p-button p-button-rounded"}),(0,t.jsx)(n.Button,{icon:"pi pi-star-fill",className:"p-button-success p-button-rounded"})]})]})]})})}),(0,t.jsx)(a.DocSectionCode,{code:o,service:["ProductService"]})]})}function F(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-carousel"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-carousel-header"}),(0,t.jsx)("td",{children:"Header section."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-carousel-footer"}),(0,t.jsx)("td",{children:"Footer section."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-carousel-content"}),(0,t.jsx)("td",{children:"Main content element. It contains the container of the viewport."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-carousel-container"}),(0,t.jsx)("td",{children:"Container of the viewport. It contains navigation buttons and viewport."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-carousel-items-content"}),(0,t.jsx)("td",{children:"Viewport."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-carousel-indicators"}),(0,t.jsx)("td",{children:"Container of the indicators."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-carousel-indicator"}),(0,t.jsx)("td",{children:"Indicator element."})]})]})]})})]})}function U(e){let s={basic:`
const Tailwind = {
    carousel: {
        root: 'flex flex-col',
        content: 'flex flex-col overflow-auto',
        container: ({ props }) => ({
            className: classNames('flex', {
                'flex-row': props.orientation !== 'vertical',
                'flex-col': props.orientation == 'vertical'
            })
        }),
        previousbutton: {
            className: classNames('flex justify-center items-center self-center overflow-hidden relative shrink-0 grow-0', 'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mx-2')
        },
        itemscontent: 'overflow-hidden w-full',
        itemscontainer: ({ props }) => ({
            className: classNames('flex ', {
                'flex-row': props.orientation !== 'vertical',
                'flex-col h-full': props.orientation == 'vertical'
            })
        }),
        item: ({ props }) => ({
            className: classNames('flex shrink-0 grow', {
                'w-1/3': props.orientation !== 'vertical',
                'w-full': props.orientation == 'vertical'
            })
        }),
        indicators: {
            className: classNames('flex flex-row justify-center flex-wrap')
        },
        indicator: 'mr-2 mb-2',
        indicatorbutton: ({ context }) => ({
            className: classNames('w-8 h-2 transition duration-200 rounded-0', 'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]', {
                'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600': !context.active,
                'bg-blue-500 hover:bg-blue-600': context.active
            })
        })
    }
}
        `},n={javascript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

export default function UnstyledDemo() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

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

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border bg-white dark:bg-gray-900 border-gray-300 dark:border-blue-900/40 rounded-lg m-2 text-center py-5 px-3">
                <div className="mb-3 flex justify-center">
                    <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.name} className="w-1/2 shadow-sm" />
                </div>
                <div>
                    <h4 className="mb-1 text-gray-700 font-medium dark:text-white/80">{product.name}</h4>
                    <h6 className="mt-0 mb-3 font-medium text-gray-700 dark:text-white/80">\${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-center align-center">
                        <Button icon="pi pi-search" rounded className="mr-2 text-gray-700 dark:text-white/80 inline-flex"/>
                        <Button icon="pi pi-star-fill" rounded severity="success" className="mr-2 text-gray-700 dark:text-white/80 inline-flex"/>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(r.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(i.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(a.DocSectionCode,{code:s,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(a.DocSectionCode,{code:n,embedded:!0,service:["ProductService"]})]})})}function H(e){let[i,s]=(0,c.useState)([]);(0,c.useEffect)(()=>{B.ProductService.getProductsSmall().then(e=>s(e.slice(0,9)))},[]);let o={basic:`
<Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px" itemTemplate={productTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

export default function VerticalDemo() {
    const [products, setProducts] = useState([]);

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
    
    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">\${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px"
            itemTemplate={productTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
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

export default function VerticalDemo() {
    const [products, setProducts] = useState<Product[]>([]);

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
    
    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product: Product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">\${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" />
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div className="card flex justify-content-center">
            <Carousel value={products} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="360px"
            itemTemplate={productTemplate} />
        </div>
    )
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
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["To create a vertical Carousel, ",(0,t.jsx)("i",{children:"orientation"})," needs to be set to ",(0,t.jsx)("i",{children:"vertical"})," along with a ",(0,t.jsx)("i",{children:"verticalViewPortHeight"}),"."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(V,{value:i,numVisible:1,numScroll:1,orientation:"vertical",verticalViewPortHeight:"360px",itemTemplate:e=>(0,t.jsxs)("div",{className:"border-1 surface-border border-round m-2 text-center py-5 px-3",children:[(0,t.jsx)("div",{className:"mb-3",children:(0,t.jsx)("img",{src:`https://primefaces.org/cdn/primereact/images/product/${e.image}`,alt:e.name,className:"w-6 shadow-2"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"mb-1",children:e.name}),(0,t.jsxs)("h6",{className:"mt-0 mb-3",children:["$",e.price]}),(0,t.jsx)(I.Tag,{value:e.inventoryStatus,severity:(e=>{switch(e.inventoryStatus){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger";default:return null}})(e)}),(0,t.jsxs)("div",{className:"mt-5 flex flex-wrap gap-2 justify-content-center",children:[(0,t.jsx)(n.Button,{icon:"pi pi-search",className:"p-button p-button-rounded"}),(0,t.jsx)(n.Button,{icon:"pi pi-star-fill",className:"p-button-success p-button-rounded"})]})]})]})})}),(0,t.jsx)(a.DocSectionCode,{code:o,service:["ProductService"]})]})}var W=e.i(88850),A=e.i(82948);e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:$},{id:"pt.carousel.options",label:"Carousel PT Options",component:W.default}];return(0,t.jsx)(A.DocComponent,{title:"React Carousel Component",header:"Carousel",description:"Carousel is a content slider featuring various customization options.",className:"carousel-demo",componentDocs:[{id:"import",label:"Import",component:R},{id:"basic",label:"Basic",component:D},{id:"circular",label:"Circular",component:K},{id:"numscroll",label:"Num Scroll",component:E},{id:"responsive",label:"Responsive",component:L},{id:"vertical",label:"Vertical",component:H},{id:"accessibility",label:"Accessibility",component:s}],apiDocs:["Carousel"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:F},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:U}]}]})}],56924)},41325,(e,t,r)=>{let i="/carousel";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(56924)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);