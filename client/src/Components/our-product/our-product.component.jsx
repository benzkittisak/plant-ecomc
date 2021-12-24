import React from "react";
import { connect } from "react-redux";
import { selectPlantsForOurProductPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";

import "./our-product.style.scss";

import PlantPreview from "../plant-preview/plant-preview.component";

const OurProduct = ({ plants }) => {
  return (
    <div className="our-product">
      <div className="our-product-header">OUR PRODUCTS</div>

      <PlantPreview showDetail={false} plants={plants} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  plants: selectPlantsForOurProductPreview,
});

export default connect(mapStateToProps)(OurProduct);
