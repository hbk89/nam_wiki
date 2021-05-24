const profileModel = {
  name: "",
  photo: "",
  birth: {
    date: "",
    place: "",
  },
  nationality: "",
  body: {
    height: "",
    weight: "",
    bloodType: "",
  },
  family: [
    {
      relation: "",
      name: "",
    },
  ],
  edu: [
    {
      name: "",
      level: "",
      status: "",
    },
  ],
  military: {
    kind: "",
    status: "",
  },
  contact: {
    mail: "",
    mobile: "",
    etc: [
      {
        name: "",
      },
    ],
  },
};

export default profileModel;