import {observable} from 'mobx'
import axios from 'axios';

const searchStore = observable({
    searchList : [],

    setSearchList(data) {
        this.searchList = {...data};
    },
    
    search(word){
        axios.get("http://localhost:8080/api/wikiList/name/" + word)
        .then((res) => {
            this.setSearchList(res.data);
        })
        .catch((err) => console.log(err));
    },
})

export default searchStore;