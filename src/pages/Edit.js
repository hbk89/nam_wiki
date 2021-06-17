import React, {useRef} from 'react';
import axios from 'axios';
import {Editor} from '@toast-ui/react-editor'

import '@toast-ui/editor/dist/toastui-editor.css'
import '../css/Edit.css';

const Edit = ({ match }) => {
    const editorRef = useRef(null);

    const handleEditorChange= (value, event) => {
        console.log("editor change");
    }
    const saveWiki = () => {
        axios.post(`http://localhost:8080/api/wiki`, {
            name : match.params.name,
            wiki : editorRef.current.getInstance().getHtml(),
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err));
    }

    return (
        <div >
        <h1>편집: {match.params.name}</h1>
        <Editor
            //initialValue="안녕! TOAST 에디터야"
            previewStyle="vertical"
            height="480px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            ref={editorRef}
            onChange={handleEditorChange}
        />
        <button onClick={saveWiki}>저장</button>
        </div>
    )
}

export default Edit;