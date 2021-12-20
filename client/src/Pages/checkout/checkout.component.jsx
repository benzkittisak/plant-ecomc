import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems , calTotalPrice } from "../../redux/cart/cart.selectors";

import {currencyFormatter} from '../../assets/utils/currency.formatter';


import CheckoutItems from "../../Components/checkout-item/checkout-item.component";
import StripeButton from "../../Components/stripe-button/stripe-button.component";


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
      {cartItems.length > 0 ? cartItems.map((item) => (
          <CheckoutItems cartItem={item} key={item.id} />
      )) : 
        <h4>ไม่มีสินค้าในตะกร้า</h4>
      }
      <div className="checkout-footer">
          <span>รวมราคาทั้งหมด</span>
          <span className="total">
              {currencyFormatter.format(total)}
          </span>
      </div>

        <StripeButton cartItems={cartItems}/>

      <div className="demo-container">
        <div className="demo-header">
          กรุณาใช้ข้อมูลบัตรต่อไปนี้เพื่อชำระเงิน
        </div>
        <span className="demo-number">
          หมายเลขบัตร <span className="demo-number-text">4242 4242 4242 4242</span>
        </span>
        <div className="demo-other">
          วันหมดอายุ : 05/24 CVV : 999
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total:calTotalPrice
});

export default connect(mapStateToProps)(CheckoutPage);
