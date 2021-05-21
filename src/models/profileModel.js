import {observable} from 'mobx'

const profileModel = observable({
    // variable
    name : '',
    photo : '',
    birth: {
        date: '',
        place: '',
      },
    nationality: '',
    body: {
        height: '',
        weight: '',
        bloodType: '',
      },
    family: [
        {
          relation: '',
          name: '',
        },
      ],
    education: {
        elementary: {
          name: '',
          status: '',
        },
        middle: {
          name: '',
          status: '',
        },
        high: {
          name: '',
          status: '',
        },
        university: {
          name: '',
          major: '',
          minor: '',
          status: '',
        },
      },
    military: {
        kind: '',
        status: '',
      },
    contact: {
        mail: '',
        mobile: '',
        etc: [
          {
            name: '',
          },
        ],
      },
    // method
    map(data) {
        this.name = data.name;
    }
});
  
  export default profileModel;
  