import React from "react";
import { Link } from "react-router-dom";
import "./plant-preview.style.scss";

const PlantPreview = ({ plants }) => {
  const { title, routeName } = plants;
  const currencyFormatter = new Intl.NumberFormat('th-TH' , {
    style:'currency',
    currency:'THB'
  });

  return (
    // <div className="product" key={id}>
    //   <span className="product-name">{name}</span>
    //   <img src={imageUrl} className="product-image" />
    // </div>
    <div>
      <Link to={`/${routeName}`} className="collection-name">
        {title}
      </Link>
      <div className="plant-preview">
        {plants.items.slice(0, 4).map(({ id, name, imageUrl , price }) => (
          <div className="product" key={id}>
            <span className="product-name">{name}</span>
            <img src={imageUrl} className="product-image" />
            <span className="product-price">{currencyFormatter.format(price)}</span>
            <div className="hover">
              <div className="add-to-cart">
                เพิ่มลงตะกร้าสินค้า
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    // <div className="product" key={id}></div>
  );
};

export default PlantPreview;
