import {observable} from 'mobx'
import axios from 'axios';

const searchStore = observable({
    searchList : [],

    initSearchList(){
        this.searchList = [];
    },

    setSearchList(data) {
        this.searchList = data;
    },
    
    getSearchList(word){
        if(!word){
            this.initSearchList();
            return;
        }
        axios.get("http://localhost:8080/api/wikiList/name/" + word)
        .then((res) => {
            this.setSearchList(res.data);
        })
        .catch((err) => console.log(err));
    },
})

export default searchStore;