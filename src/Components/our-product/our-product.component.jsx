import React, { useEffect , useState } from "react";

import "./our-product.style.scss";

import PlantPreview from '../plant-preview/plant-preview.component';

const OurProduct = ({ plants }) => {
  const [data , setData] = useState([]);

  const fetchData = () => {
    Object.entries(plants).map((plant) =>
      plant[1].items.map((value) => data.push(value))
    );
    return data
      .sort(() => Math.random(data.length) - Math.random(data.length))
      .slice(0, 4);
  };

  useEffect(() => {
     setData(fetchData())
  }, [])

  return (
    <div className="our-product">
      <div className="our-product-header">OUR PRODUCTS</div>
      <div className="our-product-content">
        {data.map((plant) => (
          <PlantPreview {...plant}/>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
