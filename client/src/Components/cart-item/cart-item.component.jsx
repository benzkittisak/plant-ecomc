import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.action";

import { currencyFormatter } from "../../assets/utils/currency.formatter";

import './cart-item.style.scss';

const CartItem = ({item , removeItem}) => {
  const { name, imageUrl, price, quantity } = item
    return(
        <div className="item-container">
          <div className="item-image">
            <img src={imageUrl} alt="" />
          </div>
          <div className="item-name">
            {name}

            <div className="item-price">
              {currencyFormatter.format(price)}

              <span className="item-qty">(x{quantity})</span>
            </div>
          </div>
          <div className="remove" onClick={() => removeItem(item)}>
            x
          </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
  removeItem : item => dispatch(clearItemFromCart(item))
})

export default connect(null,mapDispatchToProps)(CartItem);