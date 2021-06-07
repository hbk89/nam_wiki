import React from 'react';
import Editor from '@monaco-editor/react';
import Section from '../components/Section/Section'

import '../css/Editor.css';

const Edit = () => {
    return (
        <Editor className="wiki-editor"
            width="944px"
            height="480px"
            defaultLanguage="javascript"
            defaultValue="// ***의 편집입니다."
        />
    )
}

export default Edit;