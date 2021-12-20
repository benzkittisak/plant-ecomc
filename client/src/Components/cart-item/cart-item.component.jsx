import React from "react";
import { currencyFormatter } from "../../assets/utils/currency.formatter";

import './cart-item.style.scss';

const CartItem = ({ name, imageUrl, price, quantity }) => {
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
        </div>
    )
}

export default CartItem;