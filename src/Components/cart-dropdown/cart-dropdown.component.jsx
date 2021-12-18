import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from '../custom-button/custom-button.component';

import "./cart-dropdown.style.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      {cartItems.length ? cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem}/>
      )) : 
        <span className="cart-empty">ไม่มีสินค้าในตะกร้า</span>
      }

      <CustomButton>ชำระเงิน</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
