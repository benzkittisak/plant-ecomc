import React from "react";

import "./plant-preview.style.scss";

const PlantPreview = ({id , name , imageUrl}) => {
  return (
    <div className="product" key={id}>
      <span className="product-name">{name}</span>
      <img src={imageUrl} className="product-image" />
    </div>
  );
};

export default PlantPreview;
