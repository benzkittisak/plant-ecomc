const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: "House Plants",
      linkUrl: "shop/houseplants",
      previewImage:
        "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-scott-webb-1931143.jpg",
    },
    {
      id: 2,
      title: "Office Plants",
      linkUrl: "shop/officeplants",
      previewImage:
        "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-daria-shevtsova-970089.jpg",
    },
    {
      id: 3,
      title: "Graden Plants",
      linkUrl: "shop/gardenplants",
      previewImage:
        "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-scott-webb-1048035.jpg",
    },
    {
      id: 4,
      title: "Bonsais",
      linkUrl: "shop/bonsais",
      previewImage:
        "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-elina-araja-4050790.jpg",
    },
    {
      id: 5,
      title: "Orchids",
      linkUrl: "shop/orchids",
      previewImage:
        "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-mariola-3699859.jpg",
    },
    {
      id: 6,
      title: "Accessories",
      linkUrl: "shop/accessories",
      previewImage:
        "https://i2.fpic.cc/file/img-b1/2021/12/17/pexels-rocketmann-team-9507266.jpg",
    },
  ],
};

const plantsReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        default: return state;
    }
}

export default plantsReducer;