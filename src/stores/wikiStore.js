import { observable } from 'mobx';
import axios from 'axios';
import wikiModel from '../models/wikiModel';

const wikiStore = observable ({
    curWiki : wikiModel,

    setWiki(data){
        this.curWiki = {...data};
    },
    getWiki(id){
        axios.get('http://localhost:8080/api/wikiList/' + id)
        .then((res) => {
          this.setWiki(res.data);
        })
        .catch((err) => console.log(err));
    },
})

export default wikiStore;