import React from 'react'
import axios from 'axios';

function getProfileById(id){
    axios.get('http://localhost:8080/api/profiles'+id)
    .then((Response)=>{return Response.data;})
    .catch((Error)=>{console.log(Error)})
}

export {
    getProfileById,
}