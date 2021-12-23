import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { fetchCollectionStart } from "../../redux/shop/shop.action";

import ImageSlider from "../../Components/image-slide-section/image-slide-section.component";
import PlantOverview from "../../Components/plants-overview/plants-overview.component";
import OutProductContainer from "../../Components/our-product/out-product.container";
import "./home.style.scss";

const HomePage = ({ fetchCollectionStart }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="homepage-container">
      <ImageSlider />
      <PlantOverview />
      <OutProductContainer />
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(HomePage);
