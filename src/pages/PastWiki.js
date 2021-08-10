import React, {useState, useEffect} from 'react';
import { Viewer } from "@toast-ui/react-editor";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";

const PastWiki = (props) => {
    const [pastWiki, setPastWiki] = useState(props.location.state);

    // useEffect(() => {
    //     setPastWiki(props.location.state);
    // })

    return(
        <div>
            <h1>{pastWiki.name}</h1>
            <h2>한줄 요약: {pastWiki.brief}</h2>
            <Viewer
            initialValue={pastWiki.def}
            previewStyle="vertical"
            plugins={[tableMergedCell]}
            />
        </div>
    )
}

export default PastWiki;