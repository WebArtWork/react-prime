(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,63967,72859,e=>{"use strict";var t=e.i(91398),a=e.i(91788),i=e.i(4242),l=e.i(10836),n=e.i(183),r=e.i(15498),o=e.i(87350),s=e.i(32027),c=e.i(60150),m=e.i(4632),p=e.i(83955),d=e.i(55590),u=e.i(85971),g=e.i(50901),h=e.i(45543),I=e.i(75366),b=e.i(51551),f=e.i(28653),v=e.i(63957),x=e.i(3935);let w=`
@layer primereact {
    .p-galleria-content {
        display: flex;
        flex-direction: column;
    }
    
    .p-galleria-item-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
    }
    
    .p-galleria-item-container {
        position: relative;
        display: flex;
        height: 100%;
    }
    
    .p-galleria-item-nav {
        position: absolute;
        top: 50%;
        margin-top: -.5rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    
    .p-galleria-item-prev {
        left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    
    .p-galleria-item-next {
        right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    
    .p-galleria-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    
    .p-galleria-item-nav-onhover .p-galleria-item-nav {
        pointer-events: none;
        opacity: 0;
        transition: opacity .2s ease-in-out;
    }
    
    .p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {
        pointer-events: all;
        opacity: 1;
    }
    
    .p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {
        pointer-events: none;
    }
    
    .p-galleria-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    
    /* Thumbnails */
    .p-galleria-thumbnail-wrapper {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-shrink: 0;
    }
    
    .p-galleria-thumbnail-prev,
    .p-galleria-thumbnail-next {
        align-self: center;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-galleria-thumbnail-prev span,
    .p-galleria-thumbnail-next span {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .p-galleria-thumbnail-container {
        display: flex;
        flex-direction: row;
    }
    
    .p-galleria-thumbnail-items-container {
        overflow: hidden;
        width: 100%;
    }
    
    .p-galleria-thumbnail-items {
        display: flex;
    }
    
    .p-galleria-thumbnail-item {
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: .5;
    }
    
    .p-galleria-thumbnail-item:hover {
        opacity: 1;
        transition: opacity .3s;
    }
    
    .p-galleria-thumbnail-item-current {
        opacity: 1;
    }
    
    /* Positions */
    /* Thumbnails */
    .p-galleria-thumbnails-left .p-galleria-content,
    .p-galleria-thumbnails-right .p-galleria-content {
        flex-direction: row;
    }
    
    .p-galleria-thumbnails-left .p-galleria-item-wrapper,
    .p-galleria-thumbnails-right .p-galleria-item-wrapper {
        flex-direction: row;
    }
    
    .p-galleria-thumbnails-left .p-galleria-item-wrapper,
    .p-galleria-thumbnails-top .p-galleria-item-wrapper {
        order: 2;
    }
    
    .p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,
    .p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {
        order: 1;
    }
    
    .p-galleria-thumbnails-left .p-galleria-thumbnail-container,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-container {
        flex-direction: column;
        flex-grow: 1;
    }
    
    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {
        flex-direction: column;
        height: 100%;
    }
    
    /* Indicators */
    .p-galleria-indicators {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-galleria-indicator > button {
        display: inline-flex;
        align-items: center;
    }
    
    .p-galleria-indicators-left .p-galleria-item-wrapper,
    .p-galleria-indicators-right .p-galleria-item-wrapper {
        flex-direction: row;
        align-items: center;
    }
    
    .p-galleria-indicators-left .p-galleria-item-container,
    .p-galleria-indicators-top .p-galleria-item-container {
        order: 2;
    }
    
    .p-galleria-indicators-left .p-galleria-indicators,
    .p-galleria-indicators-top .p-galleria-indicators {
        order: 1;
    }
    
    .p-galleria-indicators-left .p-galleria-indicators,
    .p-galleria-indicators-right .p-galleria-indicators {
        flex-direction: column;
    }
    
    .p-galleria-indicator-onitem .p-galleria-indicators {
        position: absolute;
        display: flex;
        z-index: 1;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {
        top: 0;
        left: 0;
        width: 100%;
        align-items: flex-start;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {
        right: 0;
        top: 0;
        height: 100%;
        align-items: flex-end;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: flex-end;
    }
    
    .p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {
        left: 0;
        top: 0;
        height: 100%;
        align-items: flex-start;
    }
    
    /* FullScreen */
    .p-galleria-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
    }
    
    .p-galleria-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-galleria-close {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    
    .p-galleria-mask .p-galleria-item-nav {
        position: fixed;
        top: 50%;
        margin-top: -.5rem;
    }
    
    /* Animation */
    .p-galleria-enter {
        opacity: 0;
        transform: scale(0.7);
    }
    
    .p-galleria-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-galleria-enter-done {
        transform: none;
    }
    
    .p-galleria-exit {
        opacity: 1;
    }
    
    .p-galleria-exit-active {
        opacity: 0;
        transform: scale(0.7);
        transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
    }
    
    .p-galleria-enter-active .p-galleria-item-nav {
        opacity: 0;
    }
    
    /* Keyboard Support */
    .p-items-hidden .p-galleria-thumbnail-item {
        visibility: hidden;
    }
    
    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
        visibility: visible;
    }
}
`,y=r.ComponentBase.extend({defaultProps:{__TYPE:"Galleria",activeIndex:0,autoPlay:!1,baseZIndex:0,caption:null,changeItemOnIndicatorHover:!1,children:void 0,circular:!1,className:null,closeIcon:null,footer:null,fullScreen:!1,header:null,id:null,indicator:null,indicatorsPosition:"bottom",item:null,itemNextIcon:null,itemPrevIcon:null,nextThumbnailIcon:null,numVisible:3,onHide:null,onItemChange:null,onShow:null,prevThumbnailIcon:null,responsiveOptions:null,showIndicators:!1,showIndicatorsOnItem:!1,showItemNavigators:!1,showItemNavigatorsOnHover:!1,showThumbnailNavigators:!0,showThumbnails:!0,style:null,thumbnail:null,thumbnailsPosition:"bottom",transitionInterval:4e3,transitionOptions:null,value:null,verticalThumbnailViewPortHeight:"300px"},css:{classes:{header:"p-galleria-header",footer:"p-galleria-footer",closeIcon:"p-galleria-close-icon",closeButton:"p-galleria-close p-link",root:({props:e,context:t,thumbnailsPosClassName:a,indicatorPosClassName:l})=>(0,x.classNames)("p-galleria p-component",{"p-galleria-fullscreen":e.fullScreen,"p-galleria-indicator-onitem":e.showIndicatorsOnItem,"p-galleria-item-nav-onhover":e.showItemNavigatorsOnHover&&!e.fullScreen,"p-input-filled":t&&"filled"===t.inputStyle||"filled"===i.default.inputStyle,"p-ripple-disabled":t&&!1===t.ripple||!1===i.default.ripple},a,l),content:"p-galleria-content",mask:({visibleState:e})=>(0,x.classNames)("p-galleria-mask",{"p-galleria-visible":e}),thumbnailItem:({subProps:e})=>(0,x.classNames)("p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":e.current,"p-galleria-thumbnail-item-active":e.active,"p-galleria-thumbnail-item-start":e.start,"p-galleria-thumbnail-item-end":e.end}),thumbnailItemContent:"p-galleria-thumbnail-item-content",previousThumbnailIcon:"p-galleria-thumbnail-prev-icon",previousThumbnailButton:({isDisabled:e})=>(0,x.classNames)("p-galleria-thumbnail-prev p-link",{"p-disabled":e}),nextThumbnailIcon:"p-galleria-thumbnail-next-icon",nextThumbnailButton:({isDisabled:e})=>(0,x.classNames)("p-galleria-thumbnail-next p-link",{"p-disabled":e}),thumbnailContainer:"p-galleria-thumbnail-container",thumbnailItemsContainer:"p-galleria-thumbnail-items-container",thumbnailItems:"p-galleria-thumbnail-items",thumbnailWrapper:"p-galleria-thumbnail-wrapper",previousItemIcon:"p-galleria-item-prev-icon",previousItemButton:({isDisabled:e})=>(0,x.classNames)("p-galleria-item-prev p-galleria-item-nav p-link",{"p-disabled":e}),nextItemIcon:"p-galleria-item-next-icon",nextItemButton:({isDisabled:e})=>(0,x.classNames)("p-galleria-item-next p-galleria-item-nav p-link",{"p-disabled":e}),caption:"p-galleria-caption",indicator:({isActive:e})=>(0,x.classNames)("p-galleria-indicator",{"p-highlight":e}),indicators:"p-galleria-indicators p-reset",itemWrapper:"p-galleria-item-wrapper",itemContainer:"p-galleria-item-container",item:"p-galleria-item",transition:"p-galleria"},styles:w,inlineStyles:{thumbnailItemsContainer:({height:e})=>({height:e})}}});var S=e.i(20484),C=e.i(40379),j=e.i(75676);let N=a.memo(a.forwardRef((e,i)=>{let l,r=(0,c.useMergeProps)(),o=a.useRef(null),{ptm:s,cx:m}=e,p=(t,a)=>s(t,{hostName:e.hostName,...a}),d=()=>{e.slideShowActive&&e.stopSlideShow&&e.stopSlideShow()},u=t=>{let a;d(),a=0!==e.activeItemIndex?e.activeItemIndex-1:0,e.onActiveItemChange({index:e.circular&&0===e.activeItemIndex?e.value.length-1:a}),t&&t.cancelable&&t.preventDefault()},b=t=>{let a;d(),a=e.activeItemIndex+1,e.onActiveItemChange({index:e.circular&&e.value.length-1===e.activeItemIndex?0:a}),t&&t.cancelable&&t.preventDefault()},f=()=>{let e=[...h.DomHandler.find(o.current,'[data-pc-section="indicator"]')],t=h.DomHandler.findSingle(o.current,'[data-pc-section="indicator"] > button[tabindex="0"]');return e.findIndex(e=>e===t.parentElement)},v=(e,t)=>{let a=[...h.DomHandler.find(o.current,'[data-pc-section="indicator"]')];a[e].children[0].tabIndex="-1",a[t].children[0].tabIndex="0",a[t].children[0].focus()};(0,S.useMountEffect)(()=>{e.autoPlay&&e.startSlideShow()});let w=i=>{let l,s="p-galleria-indicator-"+i,c=e.activeItemIndex===i,u=e.indicator&&e.indicator(i),I=r({className:m("indicator",{isActive:c}),tabIndex:0,"aria-label":(l=i+1,(0,n.ariaLabel)("pageLabel",{page:l})),"aria-selected":e.activeIndex===i,"aria-controls":e.id+"_item_"+i,"data-p-highlight":c,onClick:()=>{d(),e.onActiveItemChange({index:i})},onMouseEnter:()=>{e.changeItemOnIndicatorHover&&(d(),e.onActiveItemChange({index:i}))},onKeyDown:t=>((t,a)=>{switch(t.code){case"Enter":case"NumpadEnter":case"Space":d(),e.onActiveItemChange({index:a}),t.preventDefault();break;case"ArrowRight":let i,l;i=[...h.DomHandler.find(o.current,'[data-pc-section="indicator"]')],v(l=f(),l+1===i.length?i.length-1:l+1);break;case"ArrowLeft":let n;v(n=f(),n-1<=0?0:n-1);break;case"Home":v(f(),0),t.preventDefault();break;case"End":let r;r=[...h.DomHandler.find(o.current,'[data-pc-section="indicator"]')],v(f(),r.length-1),t.preventDefault();break;case"Tab":let s,c,m,p;c=(s=[...h.DomHandler.find(o.current,'[data-pc-section="indicator"]')]).findIndex(e=>!0===h.DomHandler.getAttribute(e,"data-p-highlight")),m=h.DomHandler.findSingle(o.current,'[data-pc-section="indicator"] > button[tabindex="0"]'),p=s.findIndex(e=>e===m.parentElement),s[p].children[0].tabIndex="-1",s[c].children[0].tabIndex="0";break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":t.preventDefault()}})(t,i)},p("indicator"));return u||(u=(0,t.jsx)("button",{tabIndex:e.activeIndex===i?"0":"-1",type:"button",className:"p-link",children:(0,t.jsx)(g.Ripple,{})})),(0,a.createElement)("li",{...I,key:s},u)},y=e.itemTemplate&&e.itemTemplate(e.value[e.activeItemIndex]),N=(()=>{if(e.showItemNavigators){let a=!e.circular&&0===e.activeItemIndex,i=r({className:m("previousItemIcon")},p("previousItemIcon")),l=e.itemPrevIcon||(0,t.jsx)(C.ChevronLeftIcon,{...i}),n=I.IconUtils.getJSXIcon(l,{...i},{props:e}),o=r({type:"button",className:m("previousItemButton",{isDisabled:a}),onClick:u,disabled:a,"data-p-disabled":a,"data-pc-group-section":"itemnavigator"},p("previousItemButton"));return(0,t.jsxs)("button",{...o,children:[n,(0,t.jsx)(g.Ripple,{})]})}return null})(),T=(()=>{if(e.showItemNavigators){let a=!e.circular&&e.activeItemIndex===e.value.length-1,i=r({className:m("nextItemIcon")},p("nextItemIcon")),l=e.itemNextIcon||(0,t.jsx)(j.ChevronRightIcon,{...i}),n=I.IconUtils.getJSXIcon(l,{...i},{props:e}),o=r({type:"button",className:m("nextItemButton",{isDisabled:a}),onClick:b,disabled:a,"data-p-disabled":a,"data-pc-group-section":"itemnavigator"},p("nextItemButton"));return(0,t.jsxs)("button",{...o,children:[n,(0,t.jsx)(g.Ripple,{})]})}return null})(),D=(()=>{let a=r({className:m("caption")},p("caption"));if(e.caption){let i=e.caption(e.value[e.activeItemIndex]);return(0,t.jsx)("div",{...a,children:i})}return null})(),k=(()=>{if(e.showIndicators){let a=[],i=r({className:(0,x.classNames)(e.indicatorsContentClassName,m("indicators"))},p("indicators"));for(let t=0;t<e.value.length;t++)a.push(w(t));return(0,t.jsx)("ul",{ref:o,...i,children:a})}return null})(),P=r({ref:i,className:m("itemWrapper")},p("itemWrapper")),H=r({className:m("itemContainer")},p("itemContainer")),R=r({className:m("item"),id:e.id+"_item_"+e.activeItemIndex,role:"group","aria-label":(l=e.activeItemIndex+1,(0,n.ariaLabel)("slideNumber",{slideNumber:l})),"aria-roledescription":(0,n.localeOption)("aria")?(0,n.localeOption)("aria").slide:void 0},p("item"));return(0,t.jsxs)("div",{...P,children:[(0,t.jsxs)("div",{...H,children:[N,(0,t.jsx)("div",{...R,children:y}),T,D]}),k]})}));N.displayName="GalleriaItem";var T=e.i(58561),D=e.i(35048),k=e.i(71834),P=e.i(48214),H=e.i(17720);let R=a.memo(e=>{let i,l=(0,c.useMergeProps)(),{ptm:r,cx:o}=e,s=(t,a)=>r(t,{hostName:e.hostName,...a}),m=()=>{let t=[...h.DomHandler.find(e.itemsContainerRef.current,'[data-pc-section="thumbnailitem"]')],a=h.DomHandler.findSingle(e.itemsContainerRef.current,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return t.findIndex(e=>e===a.parentElement)},p=(t,a)=>{let i=h.DomHandler.find(e.itemsContainerRef.current,'[data-pc-section="thumbnailitem"]');i[t].children[0].tabIndex="-1",i[a].children[0].tabIndex="0",i[a].children[0].focus()},d=e.template&&e.template(e.item),u=l({className:(0,x.classNames)(e.className,o("thumbnailItem",{subProps:e})),role:"tab","data-p-active":e.current,"aria-selected":e.current,"aria-controls":e.containerId+"_item_"+e.index,onKeyDown:t=>{switch(("Enter"===t.code||"NumpadEnter"===t.code||"Space"===t.code)&&(e.onItemClick({originalEvent:t,index:e.index}),t.preventDefault()),t.code){case"ArrowRight":let a,i;a=h.DomHandler.find(e.itemsContainerRef.current,'[data-pc-section="thumbnailitem"]'),p(i=m(),i+1===a.length?a.length-1:i+1);break;case"ArrowLeft":let l;p(l=m(),l-1<=0?0:l-1);break;case"Home":p(m(),0),t.preventDefault();break;case"End":let n;n=h.DomHandler.find(e.itemsContainerRef.current,'[data-pc-section="thumbnailitem"]'),p(m(),n.length-1),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":let r,o,s,c;o=(r=[...h.DomHandler.find(e.itemsContainerRef.current,'[data-pc-section="thumbnailitem"]')]).findIndex(e=>!0===h.DomHandler.getAttribute(e,"data-p-active")),s=h.DomHandler.findSingle(e.itemsContainerRef.current,'[tabindex="0"]'),c=r.findIndex(e=>e===s.parentElement),r[c].children[0].tabIndex="-1",r[o].children[0].tabIndex="0"}},"data-p-galleria-thumbnail-item-current":e.current,"data-p-galleria-thumbnail-item-active":e.active,"data-p-galleria-thumbnail-item-start":e.start,"data-p-galleria-thumbnail-item-end":e.end},s("thumbnailItem")),g=l({className:o("thumbnailItemContent"),tabIndex:e.current?"0":"-1","aria-label":(i=e.index+1,(0,n.ariaLabel)("pageLabel",{page:i})),"aria-current":e.current?"page":void 0,onClick:t=>{e.onItemClick({originalEvent:t,index:e.index})}},s("thumbnailItemContent"));return(0,a.createElement)("div",{...u,key:e.index+"_galleriathumbnailitem"},(0,t.jsx)("div",{...g,children:d}))}),E=a.memo(a.forwardRef((e,r)=>{let o,s,m,p,d,u,v,x=(0,c.useMergeProps)(),[w,y]=a.useState(e.numVisible),[N,E]=a.useState(0),O=a.useRef(null),A=a.useRef(null),U=a.useRef(""),B=a.useRef(null),V=a.useRef(null),L=(0,T.usePrevious)(w),M=(0,T.usePrevious)(e.activeItemIndex),_=a.useContext(l.PrimeReactContext),{ptm:G,cx:$,sx:Z}=e,K=(t,a)=>G(t,{hostName:e.hostName,...a}),[W]=(0,D.useResizeListener)({listener:()=>{et()},when:e.responsiveOptions}),X=t=>{let a=N+t;t<0&&-1*a+w>e.value.length-1?a=w-e.value.length:t>0&&a>0&&(a=0),e.circular&&(t<0&&e.value.length-1===e.activeItemIndex?a=0:t>0&&0===e.activeItemIndex&&(a=w-e.value.length)),O.current&&(h.DomHandler.removeClass(O.current,"p-items-hidden"),O.current.style.transform=e.isVertical?`translate3d(0, ${100/w*a}%, 0)`:`translate3d(${100/w*a}%, 0, 0)`,O.current.style.transition="transform 500ms ease 0s"),E(a)},z=()=>{e.slideShowActive&&e.stopSlideShow&&e.stopSlideShow()},J=()=>{let e=Math.floor(w/2);return w%2?e:e-1},Y=t=>{z();let a=0!==e.activeItemIndex?e.activeItemIndex-1:0;w-(a+N)-1>J()&&(-1*N!=0||e.circular)&&X(1),e.onActiveItemChange({index:e.circular&&0===e.activeItemIndex?e.value.length-1:a}),t.cancelable&&t.preventDefault()},q=t=>{z();let a=e.activeItemIndex+1;a+N>J()&&(-1*N<ee()-1||e.circular)&&X(-1),e.onActiveItemChange({index:e.circular&&e.value.length-1===e.activeItemIndex?0:a}),t.cancelable&&t.preventDefault()},F=t=>{z();let a=t.index;if(a!==e.activeItemIndex){let t=a+N,i=0;a<e.activeItemIndex?(i=w-t-1-J())>0&&-1*N!=0&&X(i):(i=J()-t)<0&&-1*N<ee()-1&&X(i),e.onActiveItemChange({index:a})}},Q=(e,t)=>{t<0?q(e):Y(e)},ee=()=>e.value.length>w?e.value.length-w+1:0,et=()=>{if(O.current&&V.current){let t=window.innerWidth,a={numVisible:e.numVisible};for(let e=0;e<V.current.length;e++){let i=V.current[e];parseInt(i.breakpoint,10)>=t&&(a=i)}w!==a.numVisible&&y(a.numVisible)}};(0,S.useMountEffect)(()=>{O.current&&(U.current=(0,f.UniqueComponentId)(),O.current.setAttribute(U.current,"")),B.current||(B.current=h.DomHandler.createInlineStyle(_&&_.nonce||i.default.nonce,_&&_.styleContainer));let t=`
            [data-pc-section="thumbnailitems"][${U.current}] {
                [data-pc-section="thumbnailitem"] {
                    flex: 1 0 ${100/w}%
                }
            } 
        `;if(e.responsiveOptions){let a=b.ObjectUtils.localeComparator(_&&_.locale||i.default.locale);V.current=[...e.responsiveOptions],V.current.sort((e,t)=>{let l=e.breakpoint,n=t.breakpoint;return b.ObjectUtils.sort(l,n,-1,a,_&&_.nullSortOrder||i.default.nullSortOrder)});for(let e=0;e<V.current.length;e++){let a=V.current[e];t+=`
                    @media screen and (max-width: ${a.breakpoint}) {
                        [data-pc-section="thumbnailitems"][${U.current}] {
                            [data-pc-section="thumbnailitem"] {
                                flex: 1 0 ${100/a.numVisible}%
                            }
                        } 
                    }
                `}}B.current.innerHTML=t,et(),W()}),(0,k.useUpdateEffect)(()=>{let t=N;(L!==w||M!==e.activeItemIndex)&&((t=e.activeItemIndex<=J()?0:e.value.length-w+J()<e.activeItemIndex?w-e.value.length:e.value.length-w<e.activeItemIndex&&w%2==0?-1*e.activeItemIndex+J()+1:-1*e.activeItemIndex+J())!==N&&E(t),O.current.style.transform=e.isVertical?`translate3d(0, ${100/w*t}%, 0)`:`translate3d(${100/w*t}%, 0, 0)`,M!==e.activeItemIndex&&(document.body.setAttribute("data-p-items-hidden","false"),e.isUnstyled()||h.DomHandler.removeClass(O.current,"p-items-hidden"),O.current.style.transition="transform 500ms ease 0s"))});let ea=(o=e.value.map((a,i)=>{let l=-1*N,n=l+w-1,r=l<=i&&n>=i,o=l===i,s=n===i,c=e.activeItemIndex===i;return(0,t.jsx)(R,{index:i,containerId:e.containerId,itemsContainerRef:O,template:e.itemTemplate,item:a,active:r,start:o,end:s,onItemClick:F,current:c,ptm:G,cx:$,sx:Z},i)}),s=e.isVertical?e.contentHeight:"",m=(()=>{if(e.showThumbnailNavigators){let a=!e.circular&&0===e.activeItemIndex||e.value.length<=w,i=x({className:$("previousThumbnailIcon")},K("previousThumbnailIcon")),l=e.isVertical?e.prevThumbnailIcon||(0,t.jsx)(H.ChevronUpIcon,{...i}):e.prevThumbnailIcon||(0,t.jsx)(C.ChevronLeftIcon,{...i}),r=I.IconUtils.getJSXIcon(l,{...i},{props:e}),o=x({className:$("previousThumbnailButton",{isDisabled:a}),onClick:Y,type:"button",disabled:a,"data-p-disabled":a,"aria-label":(0,n.localeOption)("aria")?(0,n.localeOption)("aria").prevPageLabel:void 0,"data-pc-group-section":"thumbnailnavigator"},K("previousThumbnailButton"));return(0,t.jsxs)("button",{...o,children:[r,(0,t.jsx)(g.Ripple,{})]})}return null})(),p=(()=>{if(e.showThumbnailNavigators){let a=!e.circular&&e.activeItemIndex===e.value.length-1||e.value.length<=w,i=x({className:$("nextThumbnailIcon")},K("nextThumbnailIcon")),l=e.isVertical?e.nextThumbnailIcon||(0,t.jsx)(P.ChevronDownIcon,{...i}):e.nextThumbnailIcon||(0,t.jsx)(j.ChevronRightIcon,{...i}),r=I.IconUtils.getJSXIcon(l,{...i},{props:e}),o=x({className:$("nextThumbnailButton",{isDisabled:a}),disabled:a,type:"button","aria-label":(0,n.localeOption)("aria")?(0,n.localeOption)("aria").nextPageLabel:void 0,onClick:q,"data-p-disabled":a,"data-pc-group-section":"thumbnailnavigator"},K("nextThumbnailButton"));return(0,t.jsxs)("button",{...o,children:[r,(0,t.jsx)(g.Ripple,{})]})}return null})(),d=x({className:$("thumbnailContainer")},K("thumbnailContainer")),u=x({className:$("thumbnailItemsContainer"),style:Z("thumbnailItemsContainer",{height:s})},K("thumbnailItemsContainer")),v=x({ref:O,className:$("thumbnailItems"),role:"tablist",onTransitionEnd:t=>{O.current&&"transform"===t.propertyName&&(document.body.setAttribute("data-p-items-hidden","false"),e.isUnstyled()||h.DomHandler.addClass(O.current,"p-items-hidden"),O.current.style.transition="")},onTouchStart:e=>{let t=e.changedTouches[0];A.current={x:t.pageX,y:t.pageY}},onTouchMove:e=>{e.cancelable&&e.preventDefault()},onTouchEnd:t=>{let a=t.changedTouches[0];e.isVertical?Q(t,a.pageY-A.current.y):Q(t,a.pageX-A.current.x)}},K("thumbnailItems")),(0,t.jsxs)("div",{...d,children:[m,(0,t.jsx)("div",{...u,children:(0,t.jsx)("div",{...v,children:o})}),p]})),ei=x({className:$("thumbnailWrapper")},K("thumbnailWrapper"));return(0,t.jsx)("div",{...ei,children:ea})}));R.displayName="GalleriaThumbnailItem",E.displayName="GalleriaThumbnails";let O=a.memo(a.forwardRef((e,w)=>{let S=(0,c.useMergeProps)(),C=a.useContext(l.PrimeReactContext),j=y.getProps(e,C),[T,D]=a.useState(!1),[k,P]=a.useState(j.numVisible),[H,R]=a.useState(!1),[O,A]=a.useState(j.activeIndex),U=a.useRef(null),B=a.useRef(null),V=a.useRef(null),L=j.onItemChange?j.activeIndex:O,M="left"===j.thumbnailsPosition||"right"===j.thumbnailsPosition,_=j.id||(0,f.UniqueComponentId)(),{ptm:G,cx:$,sx:Z,isUnstyled:K}=y.setMetaData({props:j,state:{visible:T,numVisible:k,slideShowActive:H,activeIndex:O}});(0,r.useHandleStyle)(y.css.styles,K,{name:"galleria"}),(0,p.useGlobalOnEscapeKey)({callback:()=>{z()},when:j.closeOnEscape&&j.fullScreen,priority:[p.ESC_KEY_HANDLING_PRIORITIES.IMAGE,0]}),(0,s.useInterval)(()=>{W({index:j.circular&&j.value.length-1===L?0:L+1})},j.transitionInterval,H);let W=e=>{e.index>=j.value.length?ea():j.onItemChange?j.onItemChange(e):A(e.index)},X=()=>{D(!0)},z=()=>{D(!1)},J=()=>{h.DomHandler.blockBodyScroll()},Y=()=>{v.ZIndexUtils.set("modal",V.current,C&&C.autoZIndex||i.default.autoZIndex,j.baseZIndex||C&&C.zIndex.modal||i.default.zIndex.modal),K()||h.DomHandler.addMultipleClasses(V.current,"p-component-overlay p-component-overlay-enter")},q=()=>{j.onShow&&j.onShow()},F=()=>{h.DomHandler.unblockBodyScroll(),K()||h.DomHandler.addClass(V.current,"p-component-overlay-leave")},Q=()=>{v.ZIndexUtils.clear(V.current),j.onHide&&j.onHide()},ee=()=>H,et=()=>{R(!0)},ea=()=>{R(!1)},ei=(e,t)=>{let a=["top","left","bottom","right"].find(e=>e===t);return a?`${e}-${a}`:""};return a.useEffect(()=>{j.value&&j.value.length<k&&P(j.value.length)},[j.value,k]),a.useEffect(()=>{P(j.numVisible)},[j.numVisible]),(0,m.useUnmountEffect)(()=>{H&&ea(),v.ZIndexUtils.clear(V.current)}),a.useImperativeHandle(w,()=>({props:j,show:X,hide:z,isAutoPlayActive:ee,startSlideShow:et,stopSlideShow:ea,getElement:()=>U.current,getPreviewContent:()=>B.current})),b.ObjectUtils.isNotEmpty(j.value)&&(()=>{let e,a,i,l,r,s,c,m,p,h,b,f,v,w=(e=j.showThumbnails&&ei("p-galleria-thumbnails",j.thumbnailsPosition),a=j.showIndicators&&ei("p-galleria-indicators",j.indicatorsPosition),i=S({className:$("closeIcon"),"aria-hidden":!0},G("closeIcon")),l=j.closeIcon||(0,t.jsx)(d.TimesIcon,{...i}),r=I.IconUtils.getJSXIcon(l,{...i},{props:j}),s=S({type:"button",className:$("closeButton"),"aria-label":(0,n.localeOption)("aria")?(0,n.localeOption)("aria").close:void 0,onClick:z},G("closeButton")),c=j.fullScreen&&(0,t.jsxs)("button",{...s,children:[r,(0,t.jsx)(g.Ripple,{})]}),m=S({className:$("header")},G("header")),p=j.header?(0,t.jsx)("div",{...m,children:j.header}):null,h=S({className:$("footer")},G("footer")),b=j.footer?(0,t.jsx)("div",{...h,children:j.footer}):null,f=S({ref:U,id:_,className:(0,x.classNames)(j.className,$("root",{context:C,thumbnailsPosClassName:e,indicatorPosClassName:a})),style:j.style,role:"region"},y.getOtherProps(j),G("root")),v=S({className:$("content"),"aria-live":j.autoPlay?"polite":"off"},G("content")),(0,t.jsxs)("div",{...f,children:[c,p,(0,t.jsxs)("div",{...v,children:[(0,t.jsx)(N,{hostName:"Galleria",ref:B,id:_,value:j.value,activeItemIndex:L,onActiveItemChange:W,itemTemplate:j.item,circular:j.circular,caption:j.caption,showIndicators:j.showIndicators,itemPrevIcon:j.itemPrevIcon,itemNextIcon:j.itemNextIcon,changeItemOnIndicatorHover:j.changeItemOnIndicatorHover,indicator:j.indicator,showItemNavigators:j.showItemNavigators,autoPlay:j.autoPlay,slideShowActive:H,startSlideShow:et,stopSlideShow:ea,ptm:G,cx:$}),j.showThumbnails&&(0,t.jsx)(E,{hostName:"Galleria",value:j.value,containerId:_,activeItemIndex:L,onActiveItemChange:W,itemTemplate:j.thumbnail,numVisible:k,nextThumbnailIcon:j.nextThumbnailIcon,prevThumbnailIcon:j.prevThumbnailIcon,responsiveOptions:j.responsiveOptions,circular:j.circular,isVertical:M,contentHeight:j.verticalThumbnailViewPortHeight,showThumbnailNavigators:j.showThumbnailNavigators,autoPlay:j.autoPlay,slideShowActive:H,stopSlideShow:ea,isUnstyled:K,ptm:G,cx:$,sx:Z})]}),b]}));if(j.fullScreen){let e=S({className:$("mask",{visibleState:T}),role:"dialog","aria-modal":"true"},G("mask")),a=S({classNames:$("transition"),in:T,timeout:{enter:150,exit:150},options:j.transitionOptions,unmountOnExit:!0,appear:!0,onEnter:J,onEntering:Y,onEntered:q,onExit:F,onExited:Q},G("transition")),i=(0,t.jsx)("div",{ref:V,...e,children:(0,t.jsx)(o.CSSTransition,{nodeRef:U,...a,children:w})});return(0,t.jsx)(u.Portal,{element:i})}return w})()}));O.displayName="Galleria",e.s(["Galleria",0,O],63967),e.s(["PhotoService",0,{getData:()=>[{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg",alt:"Description for Image 1",title:"Title 1"},{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg",alt:"Description for Image 2",title:"Title 2"},{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg",alt:"Description for Image 3",title:"Title 3"},{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria4.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria4s.jpg",alt:"Description for Image 4",title:"Title 4"},{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria5.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria5s.jpg",alt:"Description for Image 5",title:"Title 5"},{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria6.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria6s.jpg",alt:"Description for Image 6",title:"Title 6"},{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria7s.jpg",alt:"Description for Image 7",title:"Title 7"},{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria8.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria8s.jpg",alt:"Description for Image 8",title:"Title 8"},{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria9.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria9s.jpg",alt:"Description for Image 9",title:"Title 9"},{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria10s.jpg",alt:"Description for Image 10",title:"Title 10"},{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria11.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria11s.jpg",alt:"Description for Image 11",title:"Title 11"},{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria12.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria12s.jpg",alt:"Description for Image 12",title:"Title 12"},{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria13.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria13s.jpg",alt:"Description for Image 13",title:"Title 13"},{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria14.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria14s.jpg",alt:"Description for Image 14",title:"Title 14"},{itemImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria15.jpg",thumbnailImageSrc:"https://primefaces.org/cdn/primereact/images/galleria/galleria15s.jpg",alt:"Description for Image 15",title:"Title 15"}],getImages(){return Promise.resolve(this.getData())}}],72859)},32027,e=>{"use strict";var t=e.i(91788),a=e.i(4632);e.s(["useInterval",0,(e,i=0,l=!0)=>{let n=t.useRef(null),r=t.useRef(null),o=t.useCallback(()=>clearInterval(n.current),[n.current]);return t.useEffect(()=>{r.current=e}),t.useEffect(()=>{if(l)return n.current=setInterval(function(){r.current()},i),o;o()},[i,l]),(0,a.useUnmountEffect)(()=>{o()}),[o]}])},40379,e=>{"use strict";var t=e.i(91398),a=e.i(91788),i=e.i(85850);let l=a.memo(a.forwardRef((e,a)=>{let l=i.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:a,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:(0,t.jsx)("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"})})}));l.displayName="ChevronLeftIcon",e.s(["ChevronLeftIcon",0,l])}]);