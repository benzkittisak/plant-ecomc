import React from "react";

import { useNavigate } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import "./plant-preview.style.scss";

const PlantPreview = ({ showDetail ,  plants:{title , header , items , routeName}}) => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={()=> navigate(routeName)} className="collection-name">
        {header}
      </div>
      <div className="plant-preview">
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} showDetail={showDetail} item={item} title={title}/>
        ))}
      </div>
    </div>

    // <div className="product" key={id}></div>
  );
};


export default PlantPreview;
