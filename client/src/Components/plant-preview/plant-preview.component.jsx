import React from "react";
import { Link } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import "./plant-preview.style.scss";

const PlantPreview = ({ plants:{title , items , routeName}, addItem }) => {
  return (
    <div>
      <Link to={`/${routeName}`} className="collection-name">
        {title}
      </Link>
      <div className="plant-preview">
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} item={item}/>
        ))}
      </div>
    </div>

    // <div className="product" key={id}></div>
  );
};


export default PlantPreview;
