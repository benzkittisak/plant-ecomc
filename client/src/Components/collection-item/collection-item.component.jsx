import React from "react";
import { connect } from "react-redux";
import { currencyFormatter } from "../../assets/utils/currency.formatter";

import { addItem } from "../../redux/cart/cart.action";

import "./collection-item.style.scss";

const CollectionItem = ({ item, addItem  }) => {
  return (
    <div className="product">
      <span className="product-name">{item.name}</span>
      <img src={item.imageUrl} className="product-image" />
      <span className="product-price">
        {currencyFormatter.format(item.price)}
      </span>
      <div className="hover">
        <div className="add-to-cart" onClick={() => addItem(item)}>
          เพิ่มลงตะกร้าสินค้า
        </div>
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
