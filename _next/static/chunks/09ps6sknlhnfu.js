(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,55156,e=>{"use strict";var t=e.i(91398),o=e.i(88850),a=e.i(82948),l=e.i(28137),i=e.i(41158);function n(){return(0,t.jsxs)(l.DocSectionText,{id:"accessibility",label:"Accessibility",children:[(0,t.jsx)("h3",{children:"Screen Reader"}),(0,t.jsxs)("p",{children:["FileUpload uses a hidden native ",(0,t.jsx)("i",{children:"input"})," element with ",(0,t.jsx)("i",{children:'type="file"'})," for screen readers."]}),(0,t.jsx)("h3",{children:"Keyboard Support"}),(0,t.jsxs)("p",{children:["Interactive elements of the uploader are buttons, visit the ",(0,t.jsx)(i.default,{href:"/button#accessibility",children:"Button"})," accessibility section for more information."]})]})}var s=e.i(5180),r=e.i(91788),c=e.i(183),p=e.i(10836),d=e.i(50989),m=e.i(57724),u=e.i(15498),f=e.i(60150),h=e.i(46532),b=e.i(55590),g=e.i(85850);let x=r.memo(r.forwardRef((e,o)=>{let a=g.IconBase.getPTI(e);return(0,t.jsx)("svg",{ref:o,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"})})}));x.displayName="UploadIcon";var y=e.i(53451),v=e.i(50770),T=e.i(50901),j=e.i(3935),U=e.i(45543),S=e.i(75366),N=e.i(51551);let w=`
@layer primereact {
    .p-fileupload-content {
        position: relative;
    }
    
    .p-fileupload-row {
        display: flex;
        align-items: center;
    }
    
    .p-fileupload-row > div {
        flex: 1 1 auto;
        width: 25%;
    }
    
    .p-fileupload-row > div:last-child {
        text-align: right;
    }
    
    .p-fileupload-content > .p-progressbar {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .p-button.p-fileupload-choose {
        position: relative;
        overflow: hidden;
    }
    
    .p-fileupload-buttonbar {
        display: flex;
        flex-wrap: wrap;
    }
    
    .p-button.p-fileupload-choose input[type='file'] {
        display: none;
    }
    
    .p-fileupload-choose.p-fileupload-choose-selected input[type='file'] {
        display: none;
    }
    
    .p-fileupload-filename {
        word-break: break-all;
    }
    
    .p-fileupload-file-thumbnail {
        flex-shrink: 0;
    }
    
    .p-fileupload-file-badge {
        margin: 0.5rem;
    }
    
    .p-fluid .p-fileupload .p-button {
        width: auto;
    }
}
`,C=u.ComponentBase.extend({defaultProps:{__TYPE:"FileUpload",id:null,name:null,url:null,mode:"advanced",multiple:!1,accept:null,removeIcon:null,disabled:!1,auto:!1,maxFileSize:null,invalidFileSizeMessageSummary:"{0}: Invalid file size, ",invalidFileSizeMessageDetail:"maximum upload size is {0}.",style:null,className:null,withCredentials:!1,previewWidth:50,chooseLabel:null,selectedFileLabel:null,uploadLabel:null,cancelLabel:null,chooseOptions:{label:null,icon:null,iconOnly:!1,className:null,style:null},uploadOptions:{label:null,icon:null,iconOnly:!1,className:null,style:null},cancelOptions:{label:null,icon:null,iconOnly:!1,className:null,style:null},customUpload:!1,headerClassName:null,headerStyle:null,contentClassName:null,contentStyle:null,headerTemplate:null,itemTemplate:null,emptyTemplate:null,progressBarTemplate:null,onBeforeUpload:null,onBeforeSend:null,onBeforeDrop:null,onBeforeSelect:null,onUpload:null,onError:null,onClear:null,onSelect:null,onProgress:null,onValidationFail:null,uploadHandler:null,onRemove:null,children:void 0},css:{classes:{root:({props:e})=>(0,j.classNames)(`p-fileupload p-fileupload-${e.mode} p-component`),buttonbar:"p-fileupload-buttonbar",content:"p-fileupload-content",chooseButton:({iconOnly:e,disabled:t,focusedState:o})=>(0,j.classNames)("p-button p-fileupload-choose p-component",{"p-disabled":t,"p-focus":o,"p-button-icon-only":e}),label:"p-button-label p-clickable",file:"p-fileupload-row",fileName:"p-fileupload-filename",thumbnail:"p-fileupload-file-thumbnail",chooseButtonLabel:"p-button-label p-clickable",basicButton:({disabled:e,focusedState:t,hasFiles:o})=>(0,j.classNames)("p-button p-component p-fileupload-choose",{"p-fileupload-choose-selected":o,"p-disabled":e,"p-focus":t}),chooseIcon:({props:e,iconOnly:t})=>"basic"===e.mode?(0,j.classNames)("p-button-icon",{"p-button-icon-left":!t}):(0,j.classNames)("p-button-icon p-clickable",{"p-button-icon-left":!t}),uploadIcon:({iconOnly:e})=>(0,j.classNames)("p-button-icon p-c",{"p-button-icon-left":!e}),cancelIcon:({iconOnly:e})=>(0,j.classNames)("p-button-icon p-c",{"p-button-icon-left":!e})},styles:w}}),F=r.memo(r.forwardRef((e,o)=>{let a=(0,f.useMergeProps)(),l=r.useContext(p.PrimeReactContext),i=C.getProps(e,l),[n,s]=r.useState([]),[g,w]=r.useState([]),[F,z]=r.useState(0),[R,B]=r.useState(!1),[O,D]=r.useState(!1),I={props:i,state:{progress:F,uploading:O,uploadedFiles:n,files:g,focused:R}},{ptm:E,cx:L,isUnstyled:k}=C.setMetaData(I);(0,u.useHandleStyle)(C.css.styles,k,{name:"fileupload"});let H=r.useRef(null),_=r.useRef(null),P=r.useRef(null),M=r.useRef(0),A=N.ObjectUtils.isNotEmpty(g),V=N.ObjectUtils.isNotEmpty(n),X=i.disabled||O,J=i.chooseLabel||i.chooseOptions.label||(0,c.localeOption)("choose"),K=i.uploadLabel||i.uploadOptions.label||(0,c.localeOption)("upload"),W=i.cancelLabel||i.cancelOptions.label||(0,c.localeOption)("cancel"),$=X||i.fileLimit&&i.fileLimit<=g.length+M.current,q=X||!A,Z=X||!A,Y=(e,t)=>{G();let o=[...g],a=g[t];o.splice(t,1),w(o),i.onRemove&&i.onRemove({originalEvent:e,file:a})},G=()=>{H.current&&(H.current.value="")},Q=e=>{let t=(0,c.localeOption)("fileSizeTypes");if(e<=0)return`0 ${t[0]}`;let o=Math.floor(Math.log(e)/Math.log(1024)),a=parseFloat((e/Math.pow(1024,o)).toFixed(3));return`${a} ${t[o]}`},ee=e=>{if(i.onBeforeSelect&&!1===i.onBeforeSelect({originalEvent:e,files:g}))return;let t=[];i.multiple&&(t=g?[...g]:[]);let o=e.dataTransfer?e.dataTransfer.files:e.target.files;for(let e=0;e<o.length;e++){let a=o[e];(i.multiple?!et(a)&&eo(a):eo(a))&&(a.objectURL=window.URL.createObjectURL(a),t.push(a))}w(t),N.ObjectUtils.isNotEmpty(t)&&i.auto&&ea(t),i.onSelect&&i.onSelect({originalEvent:e,files:t}),G(),B(!1),"basic"===i.mode&&t.length>0&&(H.current.style.display="none")},et=e=>g.some(t=>t.name+t.type+t.size===e.name+e.type+e.size),eo=e=>{if(i.maxFileSize&&e.size>i.maxFileSize){let t={severity:"error",summary:i.invalidFileSizeMessageSummary.replace("{0}",e.name),detail:i.invalidFileSizeMessageDetail.replace("{0}",Q(i.maxFileSize)),sticky:!0};return"advanced"===i.mode&&_.current.show(t),i.onValidationFail&&i.onValidationFail(e),!1}return!0},ea=e=>{if((e=e||g)&&e.nativeEvent&&(e=g),i.customUpload)i.fileLimit&&(M.current+=e.length),i.uploadHandler&&i.uploadHandler({files:e,options:{clear:el,props:i}});else{D(!0);let t=new XMLHttpRequest,o=new FormData;for(let a of(i.onBeforeUpload&&i.onBeforeUpload({xhr:t,formData:o}),e))o.append(i.name,a,a.name);t.upload.addEventListener("progress",e=>{if(e.lengthComputable){let t=Math.round(100*e.loaded/e.total);z(t),i.onProgress&&i.onProgress({originalEvent:e,progress:t})}}),t.onreadystatechange=()=>{4===t.readyState&&(z(0),D(!1),t.status>=200&&t.status<300?(i.fileLimit&&(M.current+=e.length),i.onUpload&&i.onUpload({xhr:t,files:e})):i.onError&&i.onError({xhr:t,files:e}),el(),s(t=>[...t,...e]))},t.open("POST",i.url,!0),i.onBeforeSend&&i.onBeforeSend({xhr:t,formData:o}),t.withCredentials=i.withCredentials,t.send(o)}},el=()=>{w([]),s([]),D(!1),i.onClear&&i.onClear(),G()},ei=()=>{H.current.click()},en=()=>{B(!0)},es=()=>{B(!1)},er=e=>{("Enter"===e.code||"NumpadEnter"===e.code)&&ei()};r.useImperativeHandle(o,()=>({props:i,upload:ea,clear:el,formatSize:Q,onFileSelect:ee,getInput:()=>H.current,getContent:()=>P.current,getFiles:()=>g,setFiles:e=>w(e||[]),getUploadedFiles:()=>n,setUploadedFiles:e=>s(e||[])}));let ec=(e,o,l)=>{let r=e.name+e.type+e.size,c=a({role:"presentation",className:L("thumbnail"),src:e.objectURL,width:i.previewWidth},E("thumbnail")),p=/^image\//.test(e.type)?(0,t.jsx)("img",{...c,alt:e.name}):null,u=a(E("details")),f=a(E("fileSize")),h=a({className:L("fileName")},E("fileName")),x=a(E("actions")),y=(0,t.jsx)("div",{...h,children:e.name}),v=(0,t.jsx)("div",{...f,children:Q(e.size)}),T=(0,t.jsxs)("div",{...u,children:[(0,t.jsxs)("div",{...h,children:[" ",e.name]}),(0,t.jsx)("span",{...f,children:Q(e.size)}),(0,t.jsx)(d.Badge,{className:"p-fileupload-file-badge",value:l.value,severity:l.severity,pt:E("badge"),__parentMetadata:{parent:I}})]}),j=(0,t.jsx)("div",{...x,children:(0,t.jsx)(m.Button,{type:"button",icon:i.removeIcon||(0,t.jsx)(b.TimesIcon,{}),text:!0,rounded:!0,severity:"danger",onClick:e=>((e,t,o)=>{if("warning"===t.severity)Y(e,o);else{let t,a;G(),t=[...n],a=g[o],t.splice(o,1),s(t),i.onRemove&&i.onRemove({originalEvent:e,file:a})}})(e,l,o),disabled:X,pt:E("removeButton"),__parentMetadata:{parent:I},unstyled:k()})}),U=(0,t.jsxs)(t.Fragment,{children:[p,T,j]});if(i.itemTemplate){let t={onRemove:e=>Y(e,o),previewElement:p,fileNameElement:y,sizeElement:v,removeElement:j,formatSize:Q(e.size),element:U,index:o,props:i};U=N.ObjectUtils.getJSXElement(i.itemTemplate,e,t)}let S=a({key:r,className:L("file")},E("file"));return(0,t.jsx)("div",{...S,children:U})};if("advanced"===i.mode)return(()=>{let e,o,l,s,r,p,d,u=(()=>{let{className:e,style:o,icon:l,iconOnly:n}=i.chooseOptions,s=a({className:L("chooseButtonLabel")},E("chooseButtonLabel")),r=n?(0,t.jsx)("span",{...s,dangerouslySetInnerHTML:{__html:"&nbsp;"}}):(0,t.jsx)("span",{...s,children:J}),c=a({ref:H,type:"file",onChange:e=>ee(e),multiple:i.multiple,accept:i.accept,disabled:$},E("input")),p=(0,t.jsx)("input",{...c}),d=a({className:L("chooseIcon",{iconOnly:n}),"aria-hidden":"true"},E("chooseIcon")),m=l||(0,t.jsx)(h.PlusIcon,{...d}),u=S.IconUtils.getJSXIcon(m,{...d},{props:i}),f=a({className:(0,j.classNames)(e,L("chooseButton",{iconOnly:n,disabled:X,className:e,focusedState:R})),style:o,onClick:ei,onKeyDown:e=>er(e),onFocus:en,onBlur:es,tabIndex:0,"data-p-disabled":X,"data-p-focus":R},E("chooseButton"));return(0,t.jsxs)("span",{...f,children:[p,u,r,(0,t.jsx)(T.Ripple,{})]})})(),f=!i.emptyTemplate||A||V?null:N.ObjectUtils.getJSXElement(i.emptyTemplate,i);if(!i.auto){let l=i.uploadOptions,n=i.cancelOptions,s=l.iconOnly?"":K,r=n.iconOnly?"":W,c=a({className:L("uploadIcon",{iconOnly:l.iconOnly}),"aria-hidden":"true"},E("uploadIcon")),p=S.IconUtils.getJSXIcon(l.icon||(0,t.jsx)(x,{...c}),{...c},{props:i}),d=a({className:L("cancelIcon",{iconOnly:n.iconOnly}),"aria-hidden":"true"},E("cancelIcon")),u=S.IconUtils.getJSXIcon(n.icon||(0,t.jsx)(b.TimesIcon,{...d}),{...d},{props:i});e=(0,t.jsx)(m.Button,{type:"button",label:s,"aria-hidden":"true",icon:p,onClick:ea,disabled:q,style:l.style,className:l.className,pt:E("uploadButton"),__parentMetadata:{parent:I},unstyled:k()}),o=(0,t.jsx)(m.Button,{type:"button",label:r,"aria-hidden":"true",icon:u,onClick:el,disabled:Z,style:n.style,className:n.className,pt:E("cancelButton"),__parentMetadata:{parent:I},unstyled:k()})}if(A){let e,o;e={severity:"warning",value:(0,c.localeOption)("pending")||"Pending"},o=g.map((t,o)=>ec(t,o,e)),l=(0,t.jsx)("div",{children:o}),r=i.progressBarTemplate?N.ObjectUtils.getJSXElement(i.progressBarTemplate,{progress:F,props:i}):(0,t.jsx)(v.ProgressBar,{value:F,showValue:!1,pt:E("progressbar"),__parentMetadata:{parent:I}})}V&&(p={severity:"success",value:(0,c.localeOption)("completed")||"Completed"},d=n&&n.map((e,t)=>ec(e,t,p)),s=(0,t.jsx)("div",{children:d}));let w=a({className:(0,j.classNames)(i.headerClassName,L("buttonbar")),style:i.headerStyle},E("buttonbar")),z=(0,t.jsxs)("div",{...w,children:[u,e,o]});if(i.headerTemplate){let t={className:(0,j.classNames)("p-fileupload-buttonbar",i.headerClassName),chooseButton:u,uploadButton:e,cancelButton:o,element:z,props:i};z=N.ObjectUtils.getJSXElement(i.headerTemplate,t)}let B=a({id:i.id,className:(0,j.classNames)(i.className,L("root")),style:i.style},C.getOtherProps(i),E("root")),O=a({ref:P,className:(0,j.classNames)(i.contentClassName,L("content")),style:i.contentStyle,onDragEnter:e=>{!X&&(e.dataTransfer.dropEffect="copy",e.stopPropagation(),e.preventDefault())},onDragOver:e=>{!X&&(e.dataTransfer.dropEffect="copy",k()||U.DomHandler.addClass(P.current,"p-fileupload-highlight"),P.current.setAttribute("data-p-highlight",!0),e.stopPropagation(),e.preventDefault())},onDragLeave:e=>{!X&&(e.dataTransfer.dropEffect="copy",k()||U.DomHandler.removeClass(P.current,"p-fileupload-highlight"),P.current.setAttribute("data-p-highlight",!1))},onDrop:e=>(e=>{if(i.disabled||(k()||U.DomHandler.removeClass(P.current,"p-fileupload-highlight"),P.current.setAttribute("data-p-highlight",!1),e.stopPropagation(),e.preventDefault(),i.onBeforeDrop&&!1===i.onBeforeDrop(e)))return;let t=e.dataTransfer?e.dataTransfer.files:e.target.files;(i.multiple||N.ObjectUtils.isEmpty(g)&&t&&1===t.length)&&ee(e)})(e),"data-p-highlight":!1},E("content"));return(0,t.jsxs)("div",{...B,children:[z,(0,t.jsxs)("div",{...O,children:[r,(0,t.jsx)(y.Messages,{ref:_,__parentMetadata:{parent:I}}),A?l:null,V?s:null,f]})]})})();if("basic"===i.mode){let e,o,l,n,s,r,c,p,d,m,u;return e=i.chooseOptions,o=a({className:L("label")},E("label")),l=e.iconOnly?(0,t.jsx)("span",{...o,dangerouslySetInnerHTML:{__html:"&nbsp;"}}):(0,t.jsx)("span",{...o,children:J}),n=i.auto?l:(0,t.jsx)("span",{...o,children:A?i.selectedFileLabel||g[0].name:l}),s=a({className:L("chooseIcon",{iconOnly:e.iconOnly})},E("chooseIcon")),r=e.icon?e.icon:e.icon||A&&!i.auto?!e.icon&&A&&!i.auto&&(0,t.jsx)(x,{...s}):(0,t.jsx)(h.PlusIcon,{...s}),c=S.IconUtils.getJSXIcon(r,{...s},{props:i,hasFiles:A}),p=a({ref:H,type:"file",onChange:e=>ee(e),multiple:i.multiple,accept:i.accept,disabled:X},E("input")),d=!A&&(0,t.jsx)("input",{...p}),m=a({className:(0,j.classNames)(i.className,L("root")),style:i.style},C.getOtherProps(i),E("root")),u=a({className:(0,j.classNames)(e.className,L("basicButton",{hasFiles:A,disabled:X,focusedState:R})),style:e.style,tabIndex:0,onClick:()=>{!X&&A?ea():H.current.click()},onKeyDown:e=>er(e),onFocus:en,onBlur:es},C.getOtherProps(i),E("basicButton")),(0,t.jsxs)("div",{...m,children:[(0,t.jsx)(y.Messages,{ref:_,pt:E("message"),__parentMetadata:{parent:I}}),(0,t.jsxs)("span",{...u,children:[c,n,d,(0,t.jsx)(T.Ripple,{})]})]})}}));function z(e){let o={basic:`
<FileUpload name="demo[]" customUpload uploadHandler={(e) => e.options.clear()} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        `,javascript:`
import React from 'react';
import { FileUpload } from 'primereact/fileupload';

export default function AdvanceDemo() {
        
    return (
        <div className="card">
            <FileUpload name="demo[]" customUpload uploadHandler={(e) => e.options.clear()} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        </div>
    )
}
        `,typescript:`
import React from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function AdvanceDemo() {
        
    return (
        <div className="card">
            <FileUpload name="demo[]" customUpload uploadHandler={(e) => e.options.clear()} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations."})}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(F,{name:"demo[]",customUpload:!0,uploadHandler:e=>e.options.clear(),multiple:!0,accept:"image/*",maxFileSize:1e6,emptyTemplate:(0,t.jsx)("p",{className:"m-0",children:"Drag and drop files to here to upload."})})}),(0,t.jsx)(s.DocSectionCode,{code:o})]})}F.displayName="FileUpload";var R=e.i(29363);function B(e){let o=(0,r.useRef)(null),a={basic:`
<Toast ref={toast}></Toast>
<FileUpload mode="basic" name="demo[]" customUpload uploadHandler={onUpload} accept="image/*" maxFileSize={1000000} auto chooseLabel="Browse" />
        `,javascript:`
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function AutoDemo() {
    const toast = useRef(null);

    const onUpload = ({ options }) => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
        options && options.clear && options.clear();
    };
        
    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <FileUpload mode="basic" name="demo[]" customUpload uploadHandler={onUpload} accept="image/*" maxFileSize={1000000} auto chooseLabel="Browse" />
        </div>  
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function AutoDemo() {
    const toast = useRef<Toast>(null);

    const onUpload = ({ options }) => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
        options && options.clear && options.clear();
    };
        
    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <FileUpload mode="basic" name="demo[]" customUpload uploadHandler={onUpload} accept="image/*" maxFileSize={1000000} auto chooseLabel="Browse" />
        </div>  
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["When ",(0,t.jsx)("i",{children:"auto"})," property is enabled, a file gets uploaded instantly after selection."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(R.Toast,{ref:o}),(0,t.jsx)(F,{mode:"basic",name:"demo[]",customUpload:!0,uploadHandler:({options:e})=>{o.current.show({severity:"info",summary:"Success",detail:"File Uploaded"}),e&&e.clear&&e.clear()},accept:"image/*",maxFileSize:1e6,auto:!0,chooseLabel:"Browse"})]}),(0,t.jsx)(s.DocSectionCode,{code:a})]})}function O(e){let o=(0,r.useRef)(null),a={basic:`
<Toast ref={toast}></Toast>
<FileUpload mode="basic" name="demo[]" customUpload uploadHandler={onUpload} accept="image/*" maxFileSize={1000000} />
        `,javascript:`
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function BasicDemo() {
    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
        
    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <FileUpload mode="basic" name="demo[]" customUpload uploadHandler={onUpload} accept="image/*" maxFileSize={1000000} />
        </div>  
    )
}
        `,typescript:`
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function BasicDemo() {
    const toast = useRef<Toast>(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
        
    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <FileUpload mode="basic" name="demo[]" customUpload uploadHandler={onUpload} accept="image/*" maxFileSize={1000000} />
        </div>  
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["FileUpload basic ",(0,t.jsx)("i",{children:"mode"})," provides a simpler UI as an alternative to default advanced mode."]})}),(0,t.jsxs)("div",{className:"card flex justify-content-center",children:[(0,t.jsx)(R.Toast,{ref:o}),(0,t.jsx)(F,{mode:"basic",name:"demo[]",customUpload:!0,uploadHandler:({options:e})=>{o.current.show({severity:"info",summary:"Success",detail:"File Uploaded"}),e.clear()},accept:"image/*",maxFileSize:1e6})]}),(0,t.jsx)(s.DocSectionCode,{code:a})]})}function D(e){let o=async e=>{let t=e.files[0],o=new FileReader,a=await fetch(t.objectURL).then(e=>e.blob());o.readAsDataURL(a),o.onloadend=function(){console.log(o.result)}},a={basic:`
<FileUpload mode="basic" name="demo[]" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
        `,javascript:`
import React from 'react'; 
import { FileUpload } from 'primereact/fileupload';

export default function CustomUploadDemo() {
    const customBase64Uploader = async (event) => {
        // convert file to base64 encoded
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

        reader.readAsDataURL(blob);

        reader.onloadend = function () {
            const base64data = reader.result;
        };
    };

    return (
        <div className="card flex justify-content-center">
            <FileUpload mode="basic" name="demo[]" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
        </div>
    )
}
        `,typescript:`
import React from 'react'; 
import { FileUpload, FileUploadHandlerEvent } from 'primereact/fileupload';

export default function CustomUploadDemo() {
    const customBase64Uploader = async (event: FileUploadHandlerEvent) => {
        // convert file to base64 encoded
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

        reader.readAsDataURL(blob);

        reader.onloadend = function () {
            const base64data = reader.result;
        };
    };

    return (
        <div className="card flex justify-content-center">
            <FileUpload mode="basic" name="demo[]" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
        </div>
    )
}
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsxs)("p",{children:["Uploading implementation can be overriden with ",(0,t.jsx)("i",{children:"customUpload"})," property and defining a custom ",(0,t.jsx)("i",{children:"uploadHandler"})," function."]})}),(0,t.jsx)("div",{className:"card flex justify-content-center",children:(0,t.jsx)(F,{mode:"basic",name:"demo[]",accept:"image/*",customUpload:!0,uploadHandler:o})}),(0,t.jsx)(s.DocSectionCode,{code:a})]})}function I(e){let o={basic:`
import { FileUpload } from 'primereact/fileupload';
        `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)(s.DocSectionCode,{code:o,hideToggleCode:!0,import:!0,hideStackBlitz:!0})]})}let E=e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e}),(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"w-full",src:"https://primefaces.org/cdn/primereact/images/pt/fileupload.jpg",alt:"fileupload"})})]});var L=e.i(39682),k=e.i(64691);function H(e){let[o,a]=(0,r.useState)(0),i=(0,r.useRef)(null),n=(0,r.useRef)(null),c=()=>{a(0)},p={basic:`
<Toast ref={toast}></Toast>

<Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
<Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
<Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

<FileUpload ref={fileUploadRef} name="demo[]" customUpload multiple accept="image/*" maxFileSize={1000000}
    uploadHandler={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
    headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
    chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />
        `,javascript:`
import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

export default function TemplateDemo() {
    const toast = useRef(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef(null);
    
    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        let files = e.files;

        Object.keys(files).forEach((key) => {
            _totalSize += files[key].size || 0;
        });

        setTotalSize(_totalSize);
    };

    const onTemplateUpload = (e) => {
        let _totalSize = 0;

        e.files.forEach((file) => {
            _totalSize += file.size || 0;
        });

        setTotalSize(_totalSize);
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize / 10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <div className="flex align-items-center gap-3 ml-auto">
                    <span>{formatedValue} / 1 MB</span>
                    <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div>
            </div>
        );
    };

    const itemTemplate = (file, props) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                    Drag and Drop Image Here
                </span>
            </div>
        );
    };

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

    return (
        <div>
            <Toast ref={toast}></Toast>

            <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
            <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
            <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

            <FileUpload ref={fileUploadRef} name="demo[]" customUpload multiple accept="image/*" maxFileSize={1000000}
                uploadHandler={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
                headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />
        </div>
    )
}
        `,typescript:`
import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload, FileUploadHeaderTemplateOptions, FileUploadSelectEvent, FileUploadUploadEvent, ItemTemplateOptions,} from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

export default function TemplateDemo() {
    const toast = useRef<Toast>(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef<FileUpload>(null);

    const onTemplateSelect = (e: FileUploadSelectEvent) => {
        let _totalSize = totalSize;
        let files = e.files;

        for (let i = 0; i < files.length; i++) {
            _totalSize += files[i].size || 0;
        }

        setTotalSize(_totalSize);
    };

    const onTemplateUpload = (e: FileUploadUploadEvent) => {
        let _totalSize = 0;

        e.files.forEach((file) => {
            _totalSize += file.size || 0;
        });

        setTotalSize(_totalSize);
        toast.current?.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const onTemplateRemove = (file: File, callback: Function) => {
        setTotalSize(totalSize - file.size);
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize / 10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <div className="flex align-items-center gap-3 ml-auto">
                    <span>{formatedValue} / 1 MB</span>
                    <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div>
            </div>
        );
    };

    const itemTemplate = (inFile: object, props: ItemTemplateOptions) => {
        const file = inFile as File;
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    // @ts-ignore
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                    Drag and Drop Image Here
                </span>
            </div>
        );
    };

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

    return (
        <div>
            <Toast ref={toast}></Toast>

            <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
            <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
            <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

            <FileUpload ref={fileUploadRef} name="demo[]" customUpload multiple accept="image/*" maxFileSize={1000000}
                uploadHandler={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
                headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />
        </div>
    )
}
        `,php:`
/* public/upload.php */

<?php
header ("Access-Control-Allow-Origin: *");
echo '<p>Fake Upload Process</p>'; ?>
    `};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"Uploader UI can be customized with templating."})}),(0,t.jsxs)("div",{className:"card",children:[(0,t.jsx)(R.Toast,{ref:i}),(0,t.jsx)(k.Tooltip,{target:".custom-choose-btn",content:"Choose",position:"bottom"}),(0,t.jsx)(k.Tooltip,{target:".custom-upload-btn",content:"Upload",position:"bottom"}),(0,t.jsx)(k.Tooltip,{target:".custom-cancel-btn",content:"Clear",position:"bottom"}),(0,t.jsx)(F,{ref:n,name:"demo[]",customUpload:!0,uploadHandler:e=>{let t=0;e.files.forEach(e=>{t+=e.size||0}),a(t),i.current.show({severity:"info",summary:"Success",detail:"File Uploaded"}),e.options.clear()},multiple:!0,accept:"image/*",maxFileSize:1e6,onSelect:e=>{let t=o,l=e.files;for(let o=0;o<e.files.length;o++)t+=l[o].size||0;a(t)},onError:c,onClear:c,headerTemplate:e=>{let{className:a,chooseButton:l,uploadButton:i,cancelButton:s}=e,r=o/1e4,c=n&&n.current?n.current.formatSize(o):"0 B";return(0,t.jsxs)("div",{className:a,style:{backgroundColor:"transparent",display:"flex",alignItems:"center"},children:[l,i,s,(0,t.jsxs)("div",{className:"flex align-items-center gap-3 ml-auto",children:[(0,t.jsxs)("span",{children:[c," / 1 MB"]}),(0,t.jsx)(v.ProgressBar,{value:r,showValue:!1,style:{width:"10rem",height:"12px"}})]})]})},itemTemplate:(e,l)=>(0,t.jsxs)("div",{className:"flex align-items-center flex-wrap",children:[(0,t.jsxs)("div",{className:"flex align-items-center",style:{width:"40%"},children:[(0,t.jsx)("img",{alt:e.name,role:"presentation",src:e.objectURL,width:100}),(0,t.jsxs)("span",{className:"flex flex-column text-left ml-3",children:[e.name,(0,t.jsx)("small",{children:new Date().toLocaleDateString()})]})]}),(0,t.jsx)(L.Tag,{value:l.formatSize,severity:"warning",className:"px-3 py-2"}),(0,t.jsx)(m.Button,{type:"button",icon:"pi pi-times",className:"p-button-outlined p-button-rounded p-button-danger ml-auto",onClick:()=>{var t;return t=l.onRemove,void(a(o-e.size),t())}})]}),emptyTemplate:()=>(0,t.jsxs)("div",{className:"flex align-items-center flex-column",children:[(0,t.jsx)("i",{className:"pi pi-image mt-3 p-5",style:{fontSize:"5em",borderRadius:"50%",backgroundColor:"var(--surface-b)",color:"var(--surface-d)"}}),(0,t.jsx)("span",{style:{fontSize:"1.2em",color:"var(--text-color-secondary)"},className:"my-5",children:"Drag and Drop Image Here"})]}),chooseOptions:{icon:"pi pi-fw pi-images",iconOnly:!0,className:"custom-choose-btn p-button-rounded p-button-outlined"},uploadOptions:{icon:"pi pi-fw pi-cloud-upload",iconOnly:!0,className:"custom-upload-btn p-button-success p-button-rounded p-button-outlined"},cancelOptions:{icon:"pi pi-fw pi-times",iconOnly:!0,className:"custom-cancel-btn p-button-danger p-button-rounded p-button-outlined"}})]}),(0,t.jsx)(s.DocSectionCode,{code:p})]})}function _(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.DocSectionText,{...e,children:(0,t.jsx)("p",{children:"List of class names used in the styled mode."})}),(0,t.jsx)("div",{className:"doc-tablewrapper",children:(0,t.jsxs)("table",{className:"doc-table",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Name"}),(0,t.jsx)("th",{children:"Element"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-fileupload"}),(0,t.jsx)("td",{children:"Container element."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-fileupload-buttonbar"}),(0,t.jsx)("td",{children:"Header containing the buttons."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"p-fileupload-content"}),(0,t.jsx)("td",{children:"Content section."})]})]})]})})]})}function P(e){let o={basic:`
const Tailwind = {
    fileupload: {
        input: 'hidden',
        buttonbar: {
            className: classNames('flex flex-wrap', 'bg-gray-50 dark:bg-gray-800 p-5 border border-solid border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 rounded-tr-lg rounded-tl-lg gap-2 border-b-0')
        },
        basicButton: {
            className: classNames('text-white bg-blue-500 border border-blue-500 p-3 px-5 rounded-md text-base', 'overflow-hidden relative')
        },
        chooseButton: {
            className: classNames('text-white bg-blue-500 border border-blue-500 p-3 px-5 rounded-md text-base', 'overflow-hidden relative')
        },
        chooseIcon: 'mr-2 inline-block',
        chooseButtonLabel: 'flex-1 font-bold',
        uploadButton: {
            icon: 'mr-2'
        },
        cancelButton: {
            icon: 'mr-2'
        },
        content: {
            className: classNames('relative', 'bg-white dark:bg-gray-900 p-8 border border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 rounded-b-lg')
        },
        file: {
            className: classNames('flex items-center flex-wrap', 'p-4 border border-gray-300 dark:border-blue-900/40 rounded gap-2 mb-2', 'last:mb-0')
        },
        thumbnail: 'shrink-0',
        fileName: 'mb-2',
        fileSize: 'mr-2',
        uploadIcon: 'mr-2'
    }
}
        `},a={javascript:`
import React from 'react';
import { FileUpload } from 'primereact/fileupload';

export default function UnstyledDemo() {
        
    return (
        <div className="card">
            <FileUpload name="demo[]" customUpload uploadHandler={(e) => e.options.clear()} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        </div>
    )
}
    `};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(l.DocSectionText,{...e,children:[(0,t.jsxs)("p",{children:["PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the"," ",(0,t.jsx)(i.default,{href:"/tailwind",children:"Tailwind Customization"})," section for an example."]}),(0,t.jsx)(s.DocSectionCode,{code:o,hideToggleCode:!0,import:!0,hideStackBlitz:!0}),(0,t.jsx)("p",{children:"A playground sample with the pre-built Tailwind theme."}),(0,t.jsx)(s.DocSectionCode,{code:a,embedded:!0})]})})}e.s(["default",0,()=>{let e=[{id:"pt.wireframe",label:"Wireframe",component:E},{id:"pt.fileupload.options",label:"FileUpload PT Options",component:o.default}];return(0,t.jsx)(a.DocComponent,{title:"React Upload Component",header:"FileUpload",description:"FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.",componentDocs:[{id:"import",label:"Import",component:I},{id:"basic",label:"Basic",component:O},{id:"auto",label:"Auto",component:B},{id:"advanced",label:"Advanced",component:z},{id:"template",label:"Template",component:H},{id:"custom",label:"Custom Upload",component:D},{id:"accessibility",label:"Accessibility",component:n}],apiDocs:["FileUpload"],ptDocs:e,themingDocs:[{id:"styled",label:"Styled",component:_},{id:"unstyled",label:"Unstyled",description:"Theming is implemented with the pass through properties in unstyled mode.",children:[{id:"tailwind",label:"Tailwind",component:P}]}]})}],55156)},1491,(e,t,o)=>{let a="/fileupload";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(55156)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);