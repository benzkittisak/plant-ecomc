import React from "react";
import { connect } from "react-redux";

import currencyFormatter from '../../assets/utils/currency.formatter';

import { addItem , removeItem , clearItemFromCart} from '../../redux/cart/cart.action';

import "./checkout-item.style.scss";

const CheckoutItems = ({ cartItem , addItem , removeItem , clearItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{currencyFormatter.format(price)}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem:item => dispatch(addItem(item)),
  removeItem : item => dispatch(removeItem(item)),
  clearItem : item => dispatch(clearItemFromCart(item)),
})

export default connect(null,mapDispatchToProps)(CheckoutItems);
