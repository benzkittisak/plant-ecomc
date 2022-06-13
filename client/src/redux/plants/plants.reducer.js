const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: "House Plants",
      linkUrl: "shop/houseplants",
      previewImage:
        "https://sv1.picz.in.th/images/2022/06/13/VzICIn.jpg",
    },
    {
      id: 2,
      title: "Office Plants",
      linkUrl: "shop/officeplants",
      previewImage:
        "https://sv1.picz.in.th/images/2022/06/13/VzHqbt.md.jpg",
    },
    {
      id: 3,
      title: "Garden Plants",
      linkUrl: "shop/gardenplants",
      previewImage:
        "https://sv1.picz.in.th/images/2022/06/13/Vz6QVR.md.jpg",
    },
    {
      id: 4,
      title: "Bonsais",
      linkUrl: "shop/bonsais",
      previewImage:
        "https://sv1.picz.in.th/images/2022/06/13/V4WY4y.jpg",
    },
    {
      id: 5,
      title: "Orchids",
      linkUrl: "shop/orchids",
      previewImage:
        "https://sv1.picz.in.th/images/2022/06/13/VzFtpE.md.jpg",
    },
    {
      id: 6,
      title: "Accessories",
      linkUrl: "shop/accessories",
      previewImage:
        "https://sv1.picz.in.th/images/2022/06/13/Vz8Aha.md.jpg",
    },
  ],
};

const plantsReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        default: return state;
    }
}

export default plantsReducer;