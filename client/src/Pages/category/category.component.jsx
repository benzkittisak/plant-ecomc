import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../Components/collection-item/collection-item.component";

import "./category.style.scss";



const CategoryPage = ({ plants: { header, items } }) => {
  return (
   <div className="category-page">
     <h1 className="category-title">{header}</h1>
      <div className="category-collections">
      {items.map((plant) => (
        <CollectionItem item={plant} key={plant.id} />
      ))}
    </div>
   </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  plants: selectCollection(ownProps.categoryName)(state),
});
export default connect(mapStateToProps)(CategoryPage);
