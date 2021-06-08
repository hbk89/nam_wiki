import React, {useRef} from 'react';
import {Editor} from '@toast-ui/react-editor'

import '@toast-ui/editor/dist/toastui-editor.css'
import '../css/Edit.css';

const Edit = (props) => {
    const editorRef = useRef(null);

    const handleEditorChange= (value, event) => {
        console.log("editor change");
    }
    const saveWiki = () => {
        let a = editorRef;
    }

    return (
        <div >
        <h1>props.name</h1>
        <Editor
            initialValue="안녕! TOAST 에디터야"
            previewStyle="vertical"
            height="480px"
            initialEditType="markdown"
            useCommandShortcut={true}
            ref={editorRef}
            onChange={handleEditorChange}
        />
        <button onClick={saveWiki}>저장</button>
        </div>
    )
}

export default Edit;