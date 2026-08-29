(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41,e=>{"use strict";var t=e.i(91398),i=e.i(88850),a=e.i(82948),l=e.i(28137),s=e.i(41158);function r(){return(0,t.jsxs)(l.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["Galleria uses ",(0,t.jsx)("i",{children:"region"})," role and since any attribute is passed to the main container element, attributes such as ",(0,t.jsx)("i",{children:"aria-label"})," and ",(0,t.jsx)("i",{children:"aria-roledescription"})," can be used as well. The slides container has ",(0,t.jsx)("i",{children:"aria-live"})," ",'attribute set as "polite" if galleria is not in autoplay mode, otherwise "off" would be the value in autoplay.']}),(0,t.jsxs)("p",{children:["A slide has a ",(0,t.jsx)("i",{children:"group"})," role with an aria-label that refers to the ",(0,t.jsx)("i",{children:"aria.slideNumber"})," property of the ",(0,t.jsx)(s.default,{href:"/locale",children:"locale"})," API. Similarly ",(0,t.jsx)("i",{children:"aria.slide"})," is used as the ",(0,t.jsx)("i",{children:"aria-roledescription"})," of the item. Inactive slides are hidden from the readers with ",(0,t.jsx)("i",{children:"aria-hidden"}),"."]}),(0,t.jsxs)("p",{children:["Next and Previous navigators are button elements with ",(0,t.jsx)("i",{children:"aria-label"})," attributes referring to the ",(0,t.jsx)("i",{children:"aria.nextPageLabel"})," and ",(0,t.jsx)("i",{children:"aria.firstPageLabel"})," properties of the ",(0,t.jsx)(s.default,{href:"/locale",children:"locale"})," API by default respectively, you may still use your own aria roles and attributes as any valid attribute is passed to the button elements implicitly by using ",(0,t.jsx)("i",{children:"nextButtonProps"})," and ",(0,t.jsx)("i",{children:"prevButtonProps"}),"."]}),(0,t.jsxs)("p",{children:["Quick navigation elements and thumnbails follow the tab pattern. They are placed inside an element with a ",(0,t.jsx)("i",{children:"tablist"})," role whereas each item has a ",(0,t.jsx)("i",{children:"tab"})," role with ",(0,t.jsx)("i",{children:"aria-selected"})," and ",(0,t.jsx)("i",{children:"aria-controls"})," attributes. The"," ",(0,t.jsx)("i",{children:"aria-label"})," attribute of a quick navigation item refers to the ",(0,t.jsx)("i",{children:"aria.pageLabel"})," of the ",(0,t.jsx)(s.default,{href:"/locale",children:"locale"})," API. Current page is marked with ",(0,t.jsx)("i",{children:"aria-current"}),"."]}),(0,t.jsxs)("p",{children:["In full screen mode, modal element uses ",(0,t.jsx)("i",{children:"dialog"})," role with ",(0,t.jsx)("i",{children:"aria-modal"})," enabled. The close button retrieves ",(0,t.jsx)("i",{children:"aria-label"})," from the ",(0,t.jsx)("i",{children:"aria.close"})," property of the ",(0,t.jsx)(s.default,{href:"/locale",children:"locale"})," API."]}),(0,t.jsx)("h3",{children:"Next/Prev Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus through interactive elements in the carousel."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Activates navigation."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Activates navigation."})]})]})]})}),(0,t.jsx)("h3",{children:"Quick Navigation Keyboard Support"}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Key"}),(0,t.jsx)("th",{children:"Function"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"tab"})}),(0,t.jsx)("td",{children:"Moves focus through the active slide link."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"enter"})}),(0,t.jsx)("td",{children:"Activates the focused slide link."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"space"})}),(0,t.jsx)("td",{children:"Activates the focused slide link."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"right arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the next slide link."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"left arrow"})}),(0,t.jsx)("td",{children:"Moves focus to the previous slide link."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"home"})}),(0,t.jsx)("td",{children:"Moves focus to the first slide link."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("i",{children:"end"})}),(0,t.jsx)("td",{children:"Moves focus to the last slide link."})]})]})]})})]})}var n=e.i(5180),o=e.i(57724),m=e.i(63967),c=e.i(3935),u=e.i(91788),p=e.i(72859);function d(e){let i,a,[s,r]=(0,u.useState)(null),[d,h]=(0,u.useState)(0),[g,b]=(0,u.useState)(!1),[v,f]=(0,u.useState)(!0),[x,S]=(0,u.useState)(!1),I=(0,u.useRef)(null);(0,u.useEffect)(()=>(p.PhotoService.getImages().then(e=>r(e)),j(),()=>w()),[]),(0,u.useEffect)(()=>{f(I.current.isAutoPlayActive())},[v]);let y=()=>{S(e=>!e)},j=()=>{document.addEventListener("fullscreenchange",y),document.addEventListener("mozfullscreenchange",y),document.addEventListener("webkitfullscreenchange",y),document.addEventListener("msfullscreenchange",y)},w=()=>{document.removeEventListener("fullscreenchange",y),document.removeEventListener("mozfullscreenchange",y),document.removeEventListener("webkitfullscreenchange",y),document.removeEventListener("msfullscreenchange",y)},k=(i=(0,c.classNames)("pi",{"pi-play":!v,"pi-pause":v}),a=(0,c.classNames)("pi",{"pi-window-maximize":!x,"pi-window-minimize":x}),(0,t.jsxs)("div",{className:"custom-galleria-footer",children:[(0,t.jsx)(o.Button,{icon:"pi pi-list",onClick:()=>b(e=>!e)}),(0,t.jsx)(o.Button,{icon:i,onClick:()=>{v?(I.current.stopSlideShow(),f(!1)):(I.current.startSlideShow(),f(!0))}}),s&&(0,t.jsxs)("span",{className:"title-container",children:[(0,t.jsxs)("span",{children:[d+1,"/",s.length]}),(0,t.jsx)("span",{className:"title",children:s[d].title}),(0,t.jsx)("span",{children:s[d].alt})]}),(0,t.jsx)(o.Button,{icon:a,onClick:()=>{let e;x?document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():(e=document.querySelector(".custom-galleria")).requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},className:"fullscreen-button"})]})),T=(0,c.classNames)("custom-galleria",{fullscreen:x}),P={basic:`
<Galleria ref={galleria} value={images} activeIndex={activeIndex} onItemChange={onItemChange}
    showThumbnails={showThumbnails} showItemNavigators showItemNavigatorsOnHover
    numVisible={5} circular autoPlay transitionInterval={3000} responsiveOptions={responsiveOptions}
    item={itemTemplate} thumbnail={thumbnailTemplate} footer={footer}
    style={{ maxWidth: '640px' }} className={galleriaClassName} />
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { classNames } from 'primereact/utils';
import { PhotoService } from './service/PhotoService';
import './GalleriaAdvancedDemo.css';

export default function AdvancedDemo() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showThumbnails, setShowThumbnails] = useState(false);
    const [isAutoPlayActive, setAutoPlayActive] = useState(true);
    const [isFullScreen, setFullScreen] = useState(false);
    
    const galleria = useRef(null)

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
        bindDocumentListeners();

        return () => unbindDocumentListeners();
    },[]);

    useEffect(() => {
        setAutoPlayActive(galleria.current.isAutoPlayActive())
    },[isAutoPlayActive]);

    const onItemChange = (event) => {
        setActiveIndex(event.index)
    }

    const toggleFullScreen = () => {
        if (isFullScreen) {
            closeFullScreen();
        }
        else {
            openFullScreen();
        }
    }

    const onFullScreenChange = () => {
        setFullScreen(prevState => !prevState )
    }

    const openFullScreen = () => {
        let elem = document.querySelector('.custom-galleria');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    const closeFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    const bindDocumentListeners = () => {
        document.addEventListener("fullscreenchange", onFullScreenChange);
        document.addEventListener("mozfullscreenchange", onFullScreenChange);
        document.addEventListener("webkitfullscreenchange", onFullScreenChange);
        document.addEventListener("msfullscreenchange", onFullScreenChange);
    }

    const unbindDocumentListeners = () => {
        document.removeEventListener("fullscreenchange", onFullScreenChange);
        document.removeEventListener("mozfullscreenchange", onFullScreenChange);
        document.removeEventListener("webkitfullscreenchange", onFullScreenChange);
        document.removeEventListener("msfullscreenchange", onFullScreenChange);
    }

    const thumbnailTemplate = (item) => {
        return (
            <div className="grid grid-nogutter justify-content-center">
                <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    }

    const itemTemplate = (item) => {
        if (isFullScreen) {
            return <img src={item.itemImageSrc} alt={item.alt} />
        }

        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const renderFooter = () => {
        let autoPlayClassName = classNames('pi', {
            'pi-play': !isAutoPlayActive,
            'pi-pause': isAutoPlayActive
        });

        let fullScreenClassName = classNames('pi', {
            'pi-window-maximize': !isFullScreen,
            'pi-window-minimize': isFullScreen
        });

        return (
            <div className="custom-galleria-footer">
                <Button icon="pi pi-list" onClick={() => setShowThumbnails(prevState => !prevState)} />
                <Button icon={autoPlayClassName} onClick={() => {
                    if (!isAutoPlayActive) {
                        galleria.current.startSlideShow();
                        setAutoPlayActive(true)
                    }
                    else {
                        galleria.current.stopSlideShow();
                        setAutoPlayActive(false)
                    }
                }} />
                {
                    images && (
                        <span className="title-container">
                            <span>{activeIndex + 1}/{images.length}</span>
                            <span className="title">{images[activeIndex].title}</span>
                            <span>{images[activeIndex].alt}</span>
                        </span>
                    )
                }
                <Button icon={fullScreenClassName} onClick={() => toggleFullScreen()} className="fullscreen-button" />
            </div>
        );
    }

    const footer = renderFooter();
    const galleriaClassName = classNames('custom-galleria', {
        'fullscreen': isFullScreen
    });

    return (
        <div className="card galleria-demo">
            <Galleria ref={galleria} value={images} activeIndex={activeIndex} onItemChange={onItemChange}
                showThumbnails={showThumbnails} showItemNavigators showItemNavigatorsOnHover
                numVisible={5} circular autoPlay transitionInterval={3000} responsiveOptions={responsiveOptions}
                item={itemTemplate} thumbnail={thumbnailTemplate} footer={footer}
                style={{ maxWidth: '640px' }} className={galleriaClassName} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { classNames } from 'primereact/utils';
import { PhotoService } from './service/PhotoService';
import './GalleriaAdvancedDemo.css';

export default function AdvancedDemo() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
    const [isAutoPlayActive, setAutoPlayActive] = <boolean>useState(true);
    const [isFullScreen, setFullScreen] = useState<boolean>(false);
    
    const galleria = useRef(null)

    const responsiveOptions: GalleriaResponsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
        bindDocumentListeners();

        return () => unbindDocumentListeners();
    },[]);

    useEffect(() => {
        setAutoPlayActive(galleria.current.isAutoPlayActive())
    },[isAutoPlayActive]);

    const onItemChange = (event) => {
        setActiveIndex(event.index)
    }

    const toggleFullScreen = () => {
        if (isFullScreen) {
            closeFullScreen();
        }
        else {
            openFullScreen();
        }
    }

    const onFullScreenChange = () => {
        setFullScreen(prevState => !prevState )
    }

    const openFullScreen = () => {
        let elem = document.querySelector('.custom-galleria');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }

    const closeFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    const bindDocumentListeners = () => {
        document.addEventListener("fullscreenchange", onFullScreenChange);
        document.addEventListener("mozfullscreenchange", onFullScreenChange);
        document.addEventListener("webkitfullscreenchange", onFullScreenChange);
        document.addEventListener("msfullscreenchange", onFullScreenChange);
    }

    const unbindDocumentListeners = () => {
        document.removeEventListener("fullscreenchange", onFullScreenChange);
        document.removeEventListener("mozfullscreenchange", onFullScreenChange);
        document.removeEventListener("webkitfullscreenchange", onFullScreenChange);
        document.removeEventListener("msfullscreenchange", onFullScreenChange);
    }

    const thumbnailTemplate = (item) => {
        return (
            <div className="grid grid-nogutter justify-content-center">
                <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />
            </div>
        );
    }

    const itemTemplate = (item) => {
        if (isFullScreen) {
            return <img src={item.itemImageSrc} alt={item.alt} />
        }

        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const renderFooter = () => {
        let autoPlayClassName = classNames('pi', {
            'pi-play': !isAutoPlayActive,
            'pi-pause': isAutoPlayActive
        });

        let fullScreenClassName = classNames('pi', {
            'pi-window-maximize': !isFullScreen,
            'pi-window-minimize': isFullScreen
        });

        return (
            <div className="custom-galleria-footer">
                <Button icon="pi pi-list" onClick={() => setShowThumbnails(prevState => !prevState)} />
                <Button icon={autoPlayClassName} onClick={() => {
                    if (!isAutoPlayActive) {
                        galleria.current.startSlideShow();
                        setAutoPlayActive(true)
                    }
                    else {
                        galleria.current.stopSlideShow();
                        setAutoPlayActive(false)
                    }
                }} />
                {
                    images && (
                        <span className="title-container">
                            <span>{activeIndex + 1}/{images.length}</span>
                            <span className="title">{images[activeIndex].title}</span>
                            <span>{images[activeIndex].alt}</span>
                        </span>
                    )
                }
                <Button icon={fullScreenClassName} onClick={() => toggleFullScreen()} className="fullscreen-button" />
            </div>
        );
    }

    const footer = renderFooter();
    const galleriaClassName = classNames('custom-galleria', {
        'fullscreen': isFullScreen
    });
    
    return (
        <div className="card galleria-demo">
            <Galleria ref={galleria} value={images} activeIndex={activeIndex} onItemChange={onItemChange}
                showThumbnails={showThumbnails} showItemNavigators showItemNavigatorsOnHover
                numVisible={5} circular autoPlay transitionInterval={3000} responsiveOptions={responsiveOptions}
                item={itemTemplate} thumbnail={thumbnailTemplate} footer={footer}
                style={{ maxWidth: '640px' }} className={galleriaClassName} />
        </div>
    )
}
        `,extFiles:{"GalleriaAdvancedDemo.css":`
/* GalleriaAdvancedDemo.css */

.galleria-demo {
    .custom-indicator-galleria {
        .indicator-text {
            color: #e9ecef;
            cursor: pointer;
        }

        .p-highlight {
            .indicator-text {
                color: var(--primary-color);
            }
        }
    }

    .custom-galleria {
        &.fullscreen {
            display: flex;
            flex-direction: column;

            .p-galleria-content {
                flex-grow: 1;
                justify-content: center;
            }
        }

        .p-galleria-content {
            position: relative;
        }

        .p-galleria-thumbnail-wrapper {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
        }

        .p-galleria-thumbnail-items-container {
            width: 100%;
        }

        .custom-galleria-footer {
            display: flex;
            align-items: center;
            background-color: rgba(0, 0, 0, .9);
            color: #ffffff;

            > button {
                background-color: transparent;
                color: #ffffff;
                border: 0 none;
                border-radius: 0;
                margin: .2rem 0;

                &.fullscreen-button {
                    margin-left: auto;
                }

                &:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                }
            }
        }

        .title-container {
            > span {
                font-size: .9rem;
                padding-left: .829rem;

                &.title {
                    font-weight: bold;
                }
            }
        }
    }
}
    `},data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Advanced Galleria implementation with a custom UI."})}),(0,t.jsx)("div",{className:"card galleria-demo",children:(0,t.jsx)(m.Galleria,{ref:I,value:s,activeIndex:d,onItemChange:e=>{h(e.index)},showThumbnails:g,showItemNavigators:!0,showItemNavigatorsOnHover:!0,numVisible:5,circular:!0,autoPlay:!0,transitionInterval:3e3,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"960px",numVisible:4},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],item:e=>x?(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt}):(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}}),thumbnail:e=>(0,t.jsx)("div",{className:"grid grid-nogutter justify-content-center",children:(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{display:"block"}})}),footer:k,style:{maxWidth:"640px"},className:T})}),(0,t.jsx)(n.DocSectionCode,{code:P,service:["PhotoService"]})]})}function h(e){let[i,a]=(0,u.useState)(null);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let s={basic:`
<Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
    item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2000} />
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function AutoPlayDemo() {
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
                item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2000} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function AutoPlayDemo() {
    const [images, setImages] = useState(null)
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }
    
    return (
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
                item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2000} />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["A slideshow implementation is defined by adding ",(0,t.jsx)("i",{children:"circular"})," and ",(0,t.jsx)("i",{children:"autoPlay"})," properties."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(m.Galleria,{value:i,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],numVisible:5,style:{maxWidth:"640px"},item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}}),thumbnail:e=>(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{display:"block"}}),circular:!0,autoPlay:!0,transitionInterval:2e3})}),(0,t.jsx)(n.DocSectionCode,{code:s,service:["PhotoService"]})]})}function g(e){let[i,a]=(0,u.useState)(null);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let s={basic:`
<Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
    item={itemTemplate} thumbnail={thumbnailTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function BasicDemo() {
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, [])

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    return (
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
                item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function BasicDemo() {
    const [images, setImages] = useState(null);
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item: any) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item: any) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    return (
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
                item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Galleria requires a ",(0,t.jsx)("i",{children:"value"})," as a collection of images, ",(0,t.jsx)("i",{children:"item"})," template for the higher resolution image and ",(0,t.jsx)("i",{children:"thumbnail"})," template to display as a thumbnail."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(m.Galleria,{value:i,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],numVisible:5,style:{maxWidth:"640px"},item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%"}}),thumbnail:e=>(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt})})}),(0,t.jsx)(n.DocSectionCode,{code:s,service:["PhotoService"]})]})}function b(e){let[i,a]=(0,u.useState)(null);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let s={basic:`
<Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} 
    item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption} style={{ maxWidth: '640px' }} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function CaptionDemo() {
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    const caption = (item) => {
        return (
            <React.Fragment>
                <div className="text-xl mb-2 font-bold">{item.title}</div>
                <p className="text-white">{item.alt}</p>
            </React.Fragment>
        );
    }

    return (
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} 
                item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption} style={{ maxWidth: '640px' }} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function CaptionDoc() {
    const [images, setImages] = useState(null);
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    const caption = (item: any) => {
        return (
            <React.Fragment>
                <div className="text-xl mb-2 font-bold">{item.title}</div>
                <p className="text-white">{item.alt}</p>
            </React.Fragment>
        );
    }

    return (
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} 
                item={itemTemplate} thumbnail={thumbnailTemplate} caption={caption} style={{ maxWidth: '640px' }} />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Description of an image is specified with the ",(0,t.jsx)("i",{children:"caption"})," property that takes the displayed object and returns content."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(m.Galleria,{value:i,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],numVisible:5,item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}}),thumbnail:e=>(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{display:"block"}}),caption:e=>(0,t.jsxs)(u.default.Fragment,{children:[(0,t.jsx)("div",{className:"text-xl mb-2 font-bold",children:e.title}),(0,t.jsx)("p",{className:"text-white",children:e.alt})]}),style:{maxWidth:"640px"}})}),(0,t.jsx)(n.DocSectionCode,{code:s,service:["PhotoService"]})]})}function v(e){let[i,a]=(0,u.useState)(null),[s,r]=(0,u.useState)(0);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let c={basic:`
<div>
    <Button icon="pi pi-minus" onClick={prev} className="p-button-secondary" />
    <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
</div>

<Galleria value={images} activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)} responsiveOptions={responsiveOptions} numVisible={5}
    item={itemTemplate} thumbnail={thumbnailTemplate} style={{ maxWidth: '640px' }} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function ControlledDemo() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0)

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const next = () => {
        setActiveIndex(prevState => (prevState === images.length - 1) ? 0 : prevState + 1)
    }

    const prev = () => {
        setActiveIndex((prevState) => (prevState === 0 ? 0 : prevState - 1));
    };

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card">
            <div className="mb-3">
                <Button icon="pi pi-minus" onClick={prev} />
                <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
            </div>

            <Galleria
                value={images}
                activeIndex={activeIndex}
                onItemChange={(e) => setActiveIndex(e.index)}
                responsiveOptions={responsiveOptions}
                numVisible={5}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                style={{ maxWidth: '640px' }}
            />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function ControlledDemo() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0)
    
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const next = () => {
        setActiveIndex(prevState => (prevState === images.length - 1) ? 0 : prevState + 1)
    }

    const prev = () => {
        setActiveIndex((prevState) => (prevState === 0 ? 0 : prevState - 1));
    };

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card">
            <div className="mb-3">
                <Button icon="pi pi-minus" onClick={prev} />
                <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
            </div>

            <Galleria
                value={images}
                activeIndex={activeIndex}
                onItemChange={(e) => setActiveIndex(e.index)}
                responsiveOptions={responsiveOptions}
                numVisible={5}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                style={{ maxWidth: '640px' }}
            />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Galleria can be controlled programmatically using a binding to ",(0,t.jsx)("i",{children:"activeIndex"})," along with ",(0,t.jsx)("i",{children:"onItemChange"})," event to update the active index."]})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)(o.Button,{icon:"pi pi-minus",onClick:()=>{r(e=>0===e?0:e-1)}}),(0,t.jsx)(o.Button,{icon:"pi pi-plus",onClick:()=>{r(e=>e===i.length-1?0:e+1)},className:"p-button-secondary ml-2"})]}),(0,t.jsx)(m.Galleria,{value:i,activeIndex:s,onItemChange:e=>r(e.index),responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],numVisible:5,item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}}),thumbnail:e=>(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{display:"block"}}),style:{maxWidth:"640px"}})]}),(0,t.jsx)(n.DocSectionCode,{code:c,service:["PhotoService"]})]})}function f(e){let[i,a]=(0,u.useState)(null),[s,r]=(0,u.useState)(0),o=(0,u.useRef)(null);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let c={basic:`
<Galleria ref={galleria} value={images} numVisible={7} style={{ maxWidth: '850px' }}
    activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
    circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

<div className="grid" style={{ maxWidth: '400px' }}>
    {
        images && images.map((image, index) => {
            let imgEl = <img src={image.thumbnailImageSrc} onClick={
                () => {setActiveIndex(index); galleria.current.show()}
            } />
            return (
                <div className="col-3" key={index}>
                    {imgEl}
                </div>
            )
        })
    }
</div>
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function CustomContentDemo() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);    
    const galleria = useRef(null);

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card flex justify-content-center">
            <Galleria ref={galleria} value={images} numVisible={7} style={{ maxWidth: '850px' }}
            activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
            circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
            <div className="grid" style={{ maxWidth: '400px' }}>
                {
                    images && images.map((image, index) => {
                        let imgEl = <img src={image.thumbnailImageSrc} alt={image.alt} style={{ cursor: 'pointer' }} onClick={
                            () => {setActiveIndex(index); galleria.current.show()}
                        } />
                        return (
                            <div className="col-3" key={index}>
                                {imgEl}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function CustomContentDemo() {
    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);    
    const galleria = useRef<Galleria>(null);

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card flex justify-content-center">
            <Galleria ref={galleria} value={images} numVisible={7} style={{ maxWidth: '850px' }}
            activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
            circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
            <div className="grid" style={{ maxWidth: '400px' }}>
                {
                    images && images.map((image, index) => {
                        let imgEl = <img src={image.thumbnailImageSrc} alt={image.alt} style={{ cursor: 'pointer' }} onClick={
                            () => {setActiveIndex(index); galleria.current.show()}
                        } />
                        return (
                            <div className="col-4" key={index}>
                                {imgEl}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Using ",(0,t.jsx)("i",{children:"activeIndex"}),", Galleria is displayed with a specific initial image."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(m.Galleria,{ref:o,value:i,numVisible:7,style:{maxWidth:"850px"},activeIndex:s,onItemChange:e=>r(e.index),circular:!0,fullScreen:!0,showItemNavigators:!0,showThumbnails:!1,item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}}),thumbnail:e=>(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{display:"block"}})}),(0,t.jsx)("div",{className:"grid",style:{maxWidth:"400px"},children:i&&i.map((e,i)=>(0,t.jsx)("div",{className:"col-4",children:(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{cursor:"pointer"},onClick:()=>{r(i),o.current.show()}})},i))})]}),(0,t.jsx)(n.DocSectionCode,{code:c,service:["PhotoService"]})]})}function x(e){let[i,a]=(0,u.useState)(null),s=(0,u.useRef)(null);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let r={basic:`
<Galleria ref={galleria} value={images} numVisible={9} style={{ maxWidth: '50%' }} 
    circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

<Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function WithoutThumbnailsDemo() {
    const [images, setImages] = useState(null);
    const galleria = useRef(null);

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card flex justify-content-center">
            <Galleria ref={galleria} value={images} numVisible={9} style={{ maxWidth: '50%' }} 
                circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

            <Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function WithoutThumbnailsDemo() {
    const [images, setImages] = useState(null);
    const galleria = useRef(null);

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }
    
    return (
        <div className="card flex justify-content-center">
            <Galleria ref={galleria} value={images} numVisible={9} style={{ maxWidth: '50%' }} 
                circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />

            <Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Thumbnails can also be hidden in full screen mode."})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(m.Galleria,{ref:s,value:i,numVisible:9,style:{maxWidth:"50%"},circular:!0,fullScreen:!0,showItemNavigators:!0,showThumbnails:!1,item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}}),thumbnail:e=>(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{display:"block"}})}),(0,t.jsx)(o.Button,{label:"Show",icon:"pi pi-external-link",onClick:()=>s.current.show()})]}),(0,t.jsx)(n.DocSectionCode,{code:r,service:["PhotoService"]})]})}function S(e){let[i,a]=(0,u.useState)(null),s=(0,u.useRef)(null);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let r={basic:`
<Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }} 
    circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

<Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
        `,javascript:`
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function WithThumbnailsDemo() {
    const [images, setImages] = useState(null);
    const galleria = useRef(null);

    const responsiveOptions = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card flex justify-content-center">
            <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }} 
                circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

            <Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function WithThumbnailsDemo() {
    const [images, setImages] = useState(null);
    const galleria = useRef(null);

    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }
    
    return (
        <div className="card flex justify-content-center">
            <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }} 
                circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

            <Button label="Show" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Full screen mode is enabled by adding ",(0,t.jsx)("i",{children:"fullScreen"})," property and the ",(0,t.jsx)("i",{children:"ref"})," of the Galleria needs to be defined so that ",(0,t.jsx)("i",{children:"show"})," method can be called from a target like a button."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(m.Galleria,{ref:s,value:i,responsiveOptions:[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],numVisible:9,style:{maxWidth:"50%"},circular:!0,fullScreen:!0,showItemNavigators:!0,item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}}),thumbnail:e=>(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{display:"block"}})}),(0,t.jsx)(o.Button,{label:"Show",icon:"pi pi-external-link",onClick:()=>s.current.show()})]}),(0,t.jsx)(n.DocSectionCode,{code:r,service:["PhotoService"]})]})}function I(e){let i={basic:`
import { Galleria } from 'primereact/galleria';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)(n.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}function y(e){let[i,a]=(0,u.useState)(null);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let s={basic:`
<Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators item={itemTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function ClickEventDemo() {
    const [images, setImages] = useState(null);
    
    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <div className="card">
            <Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators item={itemTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function ClickEventDemo() {
    const [images, setImages] = useState(null);

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <div className="card">
            <Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators item={itemTemplate} />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Indicators are displayed at the bottom by enabling ",(0,t.jsx)("i",{children:"showIndicators"})," property and interacted with the click event by default."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(m.Galleria,{value:i,style:{maxWidth:"640px"},showThumbnails:!1,showIndicators:!0,item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}})})}),(0,t.jsx)(n.DocSectionCode,{code:s,service:["PhotoService"]})]})}function j(e){let[i,a]=(0,u.useState)(null);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let s={basic:`
<Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators item={itemTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function HoverEventDemo() {
    const [images, setImages] = useState(null);
    
    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <div className="card">
            <Galleria value={images} style={{ maxWidth: '640px' }} changeItemOnIndicatorHover showThumbnails={false} showIndicators item={itemTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function HoverEventDemo() {
    const [images, setImages] = useState(null);

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <div className="card">
            <Galleria value={images} style={{ maxWidth: '640px' }} changeItemOnIndicatorHover showThumbnails={false} showIndicators item={itemTemplate} />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Indicators can be activated on hover instead of click if ",(0,t.jsx)("i",{children:"changeItemOnIndicatorHover"})," is added."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(m.Galleria,{value:i,style:{maxWidth:"640px"},changeItemOnIndicatorHover:!0,showThumbnails:!1,showIndicators:!0,item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}})})}),(0,t.jsx)(n.DocSectionCode,{code:s,service:["PhotoService"]})]})}var w=e.i(6846),k=e.i(14374);function T(e){let[i,a]=(0,u.useState)(null),[s,r]=(0,u.useState)(!1),[o,c]=(0,u.useState)("bottom");(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let d={basic:`
<Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators 
    showIndicatorsOnItem={inside} indicatorsPosition={position} item={itemTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { PhotoService } from './service/PhotoService';

export default function PositionDemo() {
    const [images, setImages] = useState(null);
    const [inside, setInside] = useState(false);
    const [position, setPosition] = useState('bottom');
    const positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];
    
    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <div className="card">
            <div className="flex flex-wrap gap-3 mb-5">
                {positionOptions.map((option) => {
                    const { label, value } = option;

                    return (
                        <div className="flex align-items-center" key={label}>
                            <RadioButton value={value} onChange={(e) => setPosition(e.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">{label}</label>
                        </div>
                    );
                })}
            </div>
            <div className="flex align-items-center mb-5">
                <Checkbox inputId="inside_cbox" onChange={e => setInside(e.checked)} checked={inside}></Checkbox>
                <label htmlFor="inside_cbox" className="ml-2">Inside</label>
            </div>
            <Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators 
                    showIndicatorsOnItem={inside} indicatorsPosition={position} item={itemTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { Checkbox } from 'primereact/checkbox';
import { PhotoService } from './service/PhotoService';

export default function PositionDemo() {
    const [images, setImages] = useState(null);
    const [inside, setInside] = useState<boolean>(false);
    const [position, setPosition] = useState<string>('bottom');
    const positionOptions: Array<{label: string, value: string}> = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };
    
    return (
        <div className="card">
            <div className="flex flex-wrap gap-3 mb-5">
                {positionOptions.map((option) => {
                    const { label, value } = option;

                    return (
                        <div className="flex align-items-center" key={label}>
                            <RadioButton value={value} onChange={(e) => setPosition(e.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">{label}</label>
                        </div>
                    );
                })}
            </div>
            <div className="flex align-items-center mb-5">
                <Checkbox inputId="inside_cbox" onChange={e => setInside(e.checked)} checked={inside}></Checkbox>
                <label htmlFor="inside_cbox" className="ml-2">Inside</label>
            </div>
            <Galleria value={images} style={{ maxWidth: '640px' }} showThumbnails={false} showIndicators 
                    showIndicatorsOnItem={inside} indicatorsPosition={position} item={itemTemplate} />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Indicators can be placed at four different sides using the ",(0,t.jsx)("i",{children:"indicatorsPosition"})," property. In addition, enabling ",(0,t.jsx)("i",{children:"showIndicatorsOnItem"})," moves the indicators inside the image section."]})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("div",{className:"flex flex-wrap gap-3 mb-5",children:[{label:"Bottom",value:"bottom"},{label:"Top",value:"top"},{label:"Left",value:"left"},{label:"Right",value:"right"}].map(e=>{let{label:i,value:a}=e;return(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)(k.RadioButton,{value:a,onChange:e=>c(e.value),checked:o===a}),(0,t.jsx)("label",{htmlFor:i,className:"ml-2",children:i})]},i)})}),(0,t.jsxs)("div",{className:"flex align-items-center mb-5",children:[(0,t.jsx)(w.Checkbox,{inputId:"inside_cbox",onChange:e=>r(e.checked),checked:s}),(0,t.jsx)("label",{htmlFor:"inside_cbox",className:"ml-2",children:"Inside"})]}),(0,t.jsx)(m.Galleria,{value:i,style:{maxWidth:"640px"},showThumbnails:!1,showIndicators:!0,showIndicatorsOnItem:s,indicatorsPosition:o,item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}})})]}),(0,t.jsx)(n.DocSectionCode,{code:d,service:["PhotoService"]})]})}function P(e){let[i,a]=(0,u.useState)(null);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let s={basic:`
<Galleria value={images} style={{ maxWidth: '640px' }} className="custom-indicator-galleria" showThumbnails={false} showIndicators changeItemOnIndicatorHover
    showIndicatorsOnItem indicatorsPosition="left" item={itemTemplate} indicator={indicatorTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function IndicatorTemplateDemo() {
    const [images, setImages] = useState(null);

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const indicatorTemplate = (index) => {
        return <span style={{ color: '#ffffff', cursor: 'pointer'}}>{index + 1}</span>;
    };

    return (
        <div className="card">
            <Galleria
                value={images}
                style={{ maxWidth: '640px' }}
                className="custom-indicator-galleria"
                showThumbnails={false}
                showIndicators
                changeItemOnIndicatorHover
                showIndicatorsOnItem
                indicatorsPosition="left"
                item={itemTemplate}
                indicator={indicatorTemplate}
            />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function IndicatorTemplateDemo() {
    const [images, setImages] = useState(null);

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const indicatorTemplate = (index) => {
        return <span style={{ color: '#ffffff', cursor: 'pointer'}}>{index + 1}</span>;
    };
    
    return (
        <div className="card">
            <Galleria
                value={images}
                style={{ maxWidth: '640px' }}
                className="custom-indicator-galleria"
                showThumbnails={false}
                showIndicators
                changeItemOnIndicatorHover
                showIndicatorsOnItem
                indicatorsPosition="left"
                item={itemTemplate}
                indicator={indicatorTemplate}
            />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Indicator content can be customized with the ",(0,t.jsx)("i",{children:"indicator"})," property that takes an index as a parameter and expects content."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(m.Galleria,{value:i,style:{maxWidth:"640px"},className:"custom-indicator-gallerisa",showThumbnails:!1,showIndicators:!0,changeItemOnIndicatorHover:!0,showIndicatorsOnItem:!0,indicatorsPosition:"left",item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}}),indicator:e=>(0,t.jsx)("span",{style:{color:"#ffffff",cursor:"pointer"},children:e+1})})}),(0,t.jsx)(n.DocSectionCode,{code:s,service:["PhotoService"]})]})}function N(e){let[i,a]=(0,u.useState)(null);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let s={basic:`
<Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }} 
    showItemNavigators showItemNavigatorsOnHover item={itemTemplate} thumbnail={thumbnailTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function HoverDemo() {
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
            PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card"> 
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                showItemNavigators showItemNavigatorsOnHover item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function HoverDemo() {
    const [images, setImages] = useState(null)
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
            PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card"> 
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                showItemNavigators showItemNavigatorsOnHover item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Navigators are displayed on hover only if ",(0,t.jsx)("i",{children:"showItemNavigatorsOnHover"})," is enabled."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(m.Galleria,{value:i,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],numVisible:5,circular:!0,style:{maxWidth:"640px"},showItemNavigators:!0,showItemNavigatorsOnHover:!0,item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}}),thumbnail:e=>(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{display:"block"}})})}),(0,t.jsx)(n.DocSectionCode,{code:s,service:["PhotoService"]})]})}function V(e){let[i,a]=(0,u.useState)(null);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let s={basic:`
<Galleria value={images} numVisible={5} circular style={{ maxWidth: '640px' }} 
    showItemNavigators showItemNavigatorsOnHover showIndicators
    showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function IndicatorsDemo() {
    const [images, setImages] = useState(null);

    useEffect(() => {
            PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card"> 
            <Galleria value={images} numVisible={5} circular style={{ maxWidth: '640px' }} 
                showItemNavigators showItemNavigatorsOnHover showIndicators
                showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function IndicatorsDemo() {
    const [images, setImages] = useState(null)

    useEffect(() => {
            PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card"> 
            <Galleria value={images} numVisible={5} circular style={{ maxWidth: '640px' }} 
                showItemNavigators showItemNavigatorsOnHover showIndicators
                showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Navigators and Indicators can be combined as well."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(m.Galleria,{value:i,numVisible:5,circular:!0,style:{maxWidth:"640px"},showItemNavigators:!0,showItemNavigatorsOnHover:!0,showIndicators:!0,showThumbnails:!1,item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}}),thumbnail:e=>(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{display:"block"}})})}),(0,t.jsx)(n.DocSectionCode,{code:s,service:["PhotoService"]})]})}function C(e){let[i,a]=(0,u.useState)(null);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let s={basic:`
<Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }} showItemNavigators 
    item={itemTemplate} thumbnail={thumbnailTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function ItemThumbnailsDemo() {
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
            PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card"> 
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function ItemThumbnailsDoc() {
    const [images, setImages] = useState(null)
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
            PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card"> 
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} circular style={{ maxWidth: '640px' }}
                showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Add ",(0,t.jsx)("i",{children:"showItemNavigators"})," to display navigator elements and the left and right side."]})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(m.Galleria,{value:i,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],numVisible:5,circular:!0,style:{maxWidth:"640px"},showItemNavigators:!0,item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}}),thumbnail:e=>(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{display:"block"}})})}),(0,t.jsx)(n.DocSectionCode,{code:s,service:["PhotoService"]})]})}function O(e){let[i,a]=(0,u.useState)(null);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let s={basic:`
<Galleria value={images} numVisible={5} circular style={{ maxWidth: '640px' }} showItemNavigators 
    showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function ItemWithoutThumbnailsDemo() {
    const [images, setImages] = useState(null);

    useEffect(() => {
            PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card"> 
            <Galleria value={images} numVisible={5} circular style={{ maxWidth: '640px' }}
                showThumbnails={false} showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function ItemWithoutThumbnailsDemo() {
    const [images, setImages] = useState(null)

    useEffect(() => {
            PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <div className="card"> 
            <Galleria value={images} numVisible={5} circular style={{ maxWidth: '640px' }}
                showThumbnails={false} showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Simple example with indicators only."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(m.Galleria,{value:i,numVisible:5,circular:!0,style:{maxWidth:"640px"},showItemNavigators:!0,showThumbnails:!1,item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}}),thumbnail:e=>(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{display:"block"}})})}),(0,t.jsx)(n.DocSectionCode,{code:s,service:["PhotoService"]})]})}let E=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/wireframe-placeholder.jpg",alt:"galleria"})})]});function G(e){let[i,a]=(0,u.useState)(null);(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let s={basic:`
<Galleria value={images} responsiveOptions={responsiveOptions} numVisible={7} circular style={{ maxWidth: '800px' }}
    item={itemTemplate} thumbnail={thumbnailTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function ResponsiveDoc() {
    const [images, setImages] = useState(null);

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />
    }

    return (
        <div>
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={7} circular style={{ maxWidth: '800px' }}
                item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function ResponsiveDoc() {
    const [images, setImages] = useState(null);

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />
    }
    
    return (
        <div>
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={7} circular style={{ maxWidth: '800px' }}
                item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Galleria responsiveness is defined with the ",(0,t.jsx)("i",{children:"responsiveOptions"})," property."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)("div",{children:(0,t.jsx)(m.Galleria,{value:i,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"960px",numVisible:4},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],numVisible:7,circular:!0,style:{maxWidth:"800px"},item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}}),thumbnail:e=>(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{display:"block"}})})})}),(0,t.jsx)(n.DocSectionCode,{code:s,service:["PhotoService"]})]})}function F(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-galleria"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-galleria-header"}),(0,t.jsx)("td",{children:"Header section."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-galleria-footer"}),(0,t.jsx)("td",{children:"Footer section."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-galleria-item-wrapper"}),(0,t.jsx)("td",{children:"Item wrapper element. It contains item container and indicators."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-galleria-item-container"}),(0,t.jsx)("td",{children:"Container of the item wrapper. It contains navigation buttons, items and caption content."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-galleria-indicators"}),(0,t.jsx)("td",{children:"Container of the indicators. It contains indicator items."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-galleria-thumbnail-content"}),(0,t.jsx)("td",{children:"Thumbnail content element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-galleria-thumbnail-container"}),(0,t.jsx)("td",{children:"Container of the thumbnail content. It contains navigation buttons and thumbnail items."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-galleria-caption"}),(0,t.jsx)("td",{children:"Content of the item caption."})]})]})]})})]})}function R(e){let i={basic:`
const Tailwind = {    
    galleria: {
        root: 'flex flex-col',
        content: 'flex flex-col',
        itemwrapper: 'flex flex-col relative',
        itemcontainer: 'relative flex h-full',
        item: 'flex justify-center items-center h-full w-full',
        thumbnailwrapper: 'flex flex-col overflow-auto shrink-0',
        thumbnailcontainer: {
            className: classNames('flex flex-row', 'bg-black/90 p-4')
        },
        previousthumbnailbutton: {
            className: classNames(
                'self-center flex shrink-0 justify-center items-center overflow-hidden relative',
                'm-2 bg-transparent text-white w-8 h-8 transition duration-200 ease-in-out rounded-full',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        thumbnailitemscontainer: 'overflow-hidden w-full',
        thumbnailitems: 'flex',
        thumbnailitem: {
            className: classNames('overflow-auto flex items-center justify-center cursor-pointer opacity-50', 'flex-1 grow-0 shrink-0 w-20', 'hover:opacity-100 hover:transition-opacity hover:duration-300')
        },
        nextthumbnailbutton: {
            className: classNames(
                'self-center flex shrink-0 justify-center items-center overflow-hidden relative',
                'm-2 bg-transparent text-white w-8 h-8 transition duration-200 ease-in-out rounded-full',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        indicators: {
            className: classNames('flex items-center justify-center', 'p-4')
        },
        indicator: 'mr-2',
        indicatorbutton: ({ context }) => ({
            className: classNames('w-4 h-4 transition duration-200 rounded-full', 'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]', {
                'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600': !context.highlighted,
                'bg-blue-500 hover:bg-blue-600': context.highlighted
            })
        }),
        mask: {
            className: classNames('fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90')
        },
        closebutton: {
            className: classNames(
                'absolute top-0 right-0 flex justify-center items-center overflow-hidden m-2',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        closeicon: 'w-6 h-6',
        previousitembutton: {
            className: classNames(
                'inline-flex justify-center items-center overflow-hidden',
                'bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md mx-2',
                'fixed top-1/2 mt-[-0.5rem]',
                'left-0',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        nextitembutton: {
            className: classNames(
                'inline-flex justify-center items-center overflow-hidden',
                'bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md mx-2',
                'fixed top-1/2 mt-[-0.5rem]',
                'right-0',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        caption: {
            className: classNames('absolute bottom-0 left-0 w-full', 'bg-black/50 text-white p-4')
        },
        transition: {
            enterFromClass: 'opacity-0 scale-75',
            enterActiveClass: 'transition-all duration-150 ease-in-out',
            leaveActiveClass: 'transition-all duration-150 ease-in',
            leaveToClass: 'opacity-0 scale-75'
        }
    }
}
        `},a={javascript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './service/PhotoService';

export default function UnstyleDemo() {
    const [images, setImages] = useState(null);
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, [])

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    return (
        <div className="card">
            <Galleria value={images} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }} 
                item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(l.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(s.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(n.DocSectionCode,{code:i,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(n.DocSectionCode,{code:a,embedded:!0,service:["PhotoService"]})]})})}function D(e){let[i,a]=(0,u.useState)(null),[s,r]=(0,u.useState)("bottom");(0,u.useEffect)(()=>{p.PhotoService.getImages().then(e=>a(e))},[]);let o={basic:`
<Galleria style={{ maxWidth: '640px' }} value={images} responsiveOptions={responsiveOptions} numVisible={5} 
    item={itemTemplate} thumbnailsPosition={position} thumbnail={thumbnailTemplate} />
        `,javascript:`
import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { RadioButton } from 'primereact/radiobutton';
import { PhotoService } from './service/PhotoService';

export default function ThumbnailDemo() {
    const [images, setImages] = useState(null);
    const [position, setPosition] = useState('bottom');
    const positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    return (
        <div className="card">
            <div className="flex flex-wrap gap-3 mb-5">
                {positionOptions.map((option) => {
                    const { label, value } = option;

                    return (
                        <div className="flex align-items-center" key={label}>
                            <RadioButton value={value} onChange={(e) => setPosition(e.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">
                                {label}
                            </label>
                        </div>
                    );
                })}
            </div>
            <Galleria style={{ maxWidth: '640px' }} value={images} responsiveOptions={responsiveOptions} numVisible={5} item={itemTemplate} thumbnailsPosition={position} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,typescript:`
import React, { useState, useEffect } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
import { RadioButton } from 'primereact/radiobutton';
import { PhotoService } from './service/PhotoService';

export default function ThumbnailDemo() {
    const [images, setImages] = useState(null);
    const [position, setPosition] = useState<string>('bottom');
    const positionOptions: Array<{label: string, value: string}> = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];
    const responsiveOptions: GalleriaResponsiveOptions[] = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    return (
        <div className="card">
            <div className="flex flex-wrap gap-3 mb-5">
                {positionOptions.map((option) => {
                    const { label, value } = option;

                    return (
                        <div className="flex align-items-center" key={label}>
                            <RadioButton value={value} onChange={(e) => setPosition(e.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">
                                {label}
                            </label>
                        </div>
                    );
                })}
            </div>
            <Galleria style={{ maxWidth: '640px' }} value={images} responsiveOptions={responsiveOptions} numVisible={5} item={itemTemplate} thumbnailsPosition={position} thumbnail={thumbnailTemplate} />
        </div>
    )
}
        `,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Thumbnails represent a smaller version of the actual content."})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)("div",{className:"flex flex-wrap gap-3 mb-5",children:[{label:"Bottom",value:"bottom"},{label:"Top",value:"top"},{label:"Left",value:"left"},{label:"Right",value:"right"}].map(e=>{let{label:i,value:a}=e;return(0,t.jsxs)("div",{className:"flex align-items-center",children:[(0,t.jsx)(k.RadioButton,{value:a,onChange:e=>r(e.value),checked:s===a}),(0,t.jsx)("label",{htmlFor:i,className:"ml-2",children:i})]},i)})}),(0,t.jsx)(m.Galleria,{style:{maxWidth:"640px"},value:i,responsiveOptions:[{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}],numVisible:5,item:e=>(0,t.jsx)("img",{src:e.itemImageSrc,alt:e.alt,style:{width:"100%",display:"block"}}),thumbnailsPosition:s,thumbnail:e=>(0,t.jsx)("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{width:"100%",display:"block"}})})]}),(0,t.jsx)(n.DocSectionCode,{code:o,service:["PhotoService"]})]})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:E},{id:"pt.galleria.options",label:"Galleria PT Options",component:i.default}];return(0,t.jsx)(a.DocComponent,{title:"React Gallery Component",header:"Galleria",description:"Galleria is a content gallery component.",componentDocs:[{id:"import",label:"Import",component:I},{id:"basic",label:"Basic",component:g},{id:"controlled",label:"Controlled",component:v},{id:"indicator",label:"Indicator",description:"Indicators allow quick navigation between the items.",children:[{id:"indciatorbasic",label:"Click Event",component:y},{id:"indciatorhoverevent",label:"Hover Event",component:j},{id:"indicatorposition",label:"Position",component:T},{id:"indciatortemplate",label:"Template",component:P}]},{id:"thumbnail",label:"Thumbnail",component:D},{id:"responsive",label:"Responsive",component:G},{id:"fullscreen",label:"Full Screen",description:"In fullscreen mode content covers the whole page over a modal layer.",children:[{id:"fullscreenwiththumbnail",label:"With Thumbnails",component:S},{id:"fullscreenwithoutthumnails",label:"Without Thumbnails",component:x},{id:"fullscreencustom",label:"Custom Content",component:f}]},{id:"navigator",label:"Navigator",description:"Navigators are used to move back and forth between the images.",children:[{id:"itemthumbnails",label:"With Thumbnails",component:C},{id:"itemwithouthumbnails",label:"Without Thumbnails",component:O},{id:"itemhover",label:"Display on Hover",component:N},{id:"indicators",label:"With Indicators",component:V}]},{id:"autoplay",label:"AutoPlay",component:h},{id:"caption",label:"Caption",component:b},{id:"advanced",label:"Advanced",component:d},{id:"accessibility",label:"Accessibility",component:r}],apiDocs:["Galleria"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:F},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:R}]}]})}],41)},25060,(e,t,i)=>{let a="/galleria";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(41)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);