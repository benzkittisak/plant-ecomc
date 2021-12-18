import React, { useEffect, useState } from "react";

import "./our-product.style.scss";

import PlantPreview from "../plant-preview/plant-preview.component";

const OurProduct = ({ plants }) => {
  const [data, setData] = useState({items:[]});

  const fetchData = () => {
    Object.entries(plants).map((plant) =>
      plant[1].items.map((value) => data.items.push(value))
    );
    return data.items
      .sort(() => Math.random(data.length) - Math.random(data.length))
      .slice(0, 4);
  };

  useEffect(() => {
    setData({items:fetchData()});
  }, []);

  return (
    <div className="our-product">
      <div className="our-product-header">OUR PRODUCTS</div>

      <PlantPreview plants={data} />
    </div>
  );
};

export default OurProduct;
