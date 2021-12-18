import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { currencyFormatter } from "../../assets/utils/currency.formatter";

import { addItem } from "../../redux/cart/cart.action";

import "./plant-preview.style.scss";

const PlantPreview = ({ plants:{title , items , routeName}, addItem }) => {
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
        {items.slice(0, 4).map((item) => (
          <div className="product" key={item.id}>
            <span className="product-name">{item.name}</span>
            <img src={item.imageUrl} className="product-image" />
            <span className="product-price">{currencyFormatter.format(item.price)}</span>
            <div className="hover">
              <div className="add-to-cart" onClick={() => addItem(item)}>
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

const mapDispatchToProps = dispatch => ({
  addItem : (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(PlantPreview);
