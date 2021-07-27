import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core'

const UpdateModal = (props) => {
    const [IsOpen, setIsOpen] = useState(false);
    const history = useHistory();

    const handleClose = () => {
        setIsOpen(false);
    }
    
    const updateWiki = () =>{
        axios
        .put(`http://localhost:8080/api/wiki/${props.id}`, {
          brief: props.brief,
          def: props.editorRef.current.getInstance().getMarkdown(),
          editLog:{
            date:new Date(),
            editType:"Update", // type이라고 쓰면 안됨, Object도 마찬가지
            brief:props.brief,
            def: props.editorRef.current.getInstance().getMarkdown(),
            user:{
              ...props.info
            }
          }
        })
        .then((res) => {
          console.log(res);
          history.push(`/wiki/${props.id}`);
        })
        .catch((err) => {
          console.log(err)
        })
    }

    return(
        <div>
        <button onClick={()=>setIsOpen(true)}>수정</button>
        <Dialog open={IsOpen} onClose={handleClose}>
            <DialogTitle>위키 수정 경고</DialogTitle>
            <DialogContent>현재 위키가 수정됩니다.</DialogContent>
            <span>
            <button onClick= {updateWiki}>수정</button>
            <button onClick = {handleClose}>취소</button>
            </span>
        </Dialog>
        </div>
    )
}

export default UpdateModal;