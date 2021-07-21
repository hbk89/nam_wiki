import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {Dialog, DialogTitle, DialogContent,} from '@material-ui/core'

const DeleteModal = (props) =>{
    const [IsOpen, setIsOpen] = useState(false);
    const history = useHistory();

    const handleClose = () => {
        setIsOpen(false);
    }
    
    const deleteWiki = () => {
        axios
          .delete(`http://localhost:8080/api/wiki/${props.id}`)
          .then((res) => {
            console.log(res);
            history.push('/');
          })
          .catch((err) => {
              console.log(err)
          });
      };

    return(
        <div>
        <button onClick={()=>setIsOpen(true)}>삭제</button>
        <Dialog open={IsOpen} onClose={handleClose}>
            <DialogTitle>위키 삭제 경고</DialogTitle>
            <DialogContent>현재 위키가 삭제됩니다.</DialogContent>
            <span>
            <button onClick= {deleteWiki}>삭제</button>
            <button onClick = {handleClose}>취소</button>
            </span>
        </Dialog>
        </div>
    )
}

export default DeleteModal;