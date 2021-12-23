import React , {useEffect} from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { connect } from "react-redux";

import CategoryPageContainer from "../category/category.container";

import PlantCategoryOverviewContainer from "../../Components/plant-category-overview/plant-category-overview.container";

import { fetchCollectionStart } from "../../redux/shop/shop.action";
// import {
//   firestore,
//   convertCollectionsFromFirebaseToMap,
// } from "../../firebase/firebase.util";

import "./shop.style.scss";

const ShopPage = ({fetchCollectionStart}) => {

    useEffect(()=> {
        fetchCollectionStart()
    } , [fetchCollectionStart])

  const url = useParams();
  const params = { categoryName: Object.values(url).toString() };

//   const collectionsRef = firestore.collection("collections");
//    collectionsRef.onSnapshot(
//     async (snapshot) => await convertCollectionsFromFirebaseToMap(snapshot)
//   );

  return (
    <div className="shop-page">
      <Routes>
        <Route exact path="/" element={<PlantCategoryOverviewContainer />} />
        <Route
          path=":categoryName"
          element={<CategoryPageContainer {...params} />}
        />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart : () => dispatch(fetchCollectionStart())
})

export default connect(null , mapDispatchToProps)(ShopPage);
