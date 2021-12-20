import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems , calTotalPrice } from "../../redux/cart/cart.selectors";

import {currencyFormatter} from '../../assets/utils/currency.formatter';


import CheckoutItems from "../../Components/checkout-item/checkout-item.component";

import "./checkout.style.scss";

const CheckoutPage = ({ cartItems , total }) => {
  return (
    <div className="checkout-page">
        <div className="checkout-title">
            ตะกร้าสินค้า
        </div>
      <div className="checkout-header">
        <div className="header-block">รูปสินค้า</div>
        <div className="header-block">ชื่อสินค้า</div>
        <div className="header-block">จำนวน</div>
        <div className="header-block">ราคา</div>
        <div className="header-block">ลบสินค้า</div>
      </div>
      {cartItems.map((item) => (
          <CheckoutItems cartItem={item} key={item.id} />
      ))}
      <div className="checkout-footer">
          <span>รวมราคาทั้งหมด</span>
          <span className="total">
              {currencyFormatter.format(total)}
          </span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total:calTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
