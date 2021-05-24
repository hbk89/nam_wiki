import { observable } from 'mobx';
import axios from 'axios';
import profileModel from '../models/profileModel';

const profileStore = observable ({
    curProfile : profileModel,

    setProfile(profileData){
        this.curProfile = {...profileData};
    },
    getProfile(id){
        axios.get('http://localhost:8080/api/profiles/' + id)
        .then((Response) => {
          this.setProfile(Response.data);
        })
        .catch((err) => console.log(err));
    }
})

export default profileStore;