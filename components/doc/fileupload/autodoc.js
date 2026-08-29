import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { FileUpload } from '@/components/lib/fileupload/FileUpload';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';

export function AutoDoc(props) {
    const toast = useRef(null);

    const onUpload = ({ options }) => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
        options && options.clear && options.clear();
    };

    const code = {
        basic: `
<Toast ref={toast}></Toast>
<FileUpload mode="basic" name="demo[]" customUpload uploadHandler={onUpload} accept="image/*" maxFileSize={1000000} auto chooseLabel="Browse" />
        `,
        javascript: `
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
        `,
        typescript: `
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
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>auto</i> property is enabled, a file gets uploaded instantly after selection.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <FileUpload mode="basic" name="demo[]" customUpload uploadHandler={onUpload} accept="image/*" maxFileSize={1000000} auto chooseLabel="Browse" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
