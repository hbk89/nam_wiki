const wikiModel = {
  profile: {
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
  },
  wikiContents: [
    {
      id: "",
      head: "",
      content: "",
    },
  ],
};

export default wikiModel;
