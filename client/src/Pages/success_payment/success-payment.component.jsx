import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { clearCart } from "../../redux/cart/cart.action";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./success-payment.style.scss";

const SucessPaymentPage = ({ clearCart }) => {
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <div className="success-payment">
      <div className="success-payment-icon-container">
        <FontAwesomeIcon icon={faCheck} className="success-payment-icon" />
      </div>
      <div className="success-payment-content">
        <h1>ชำระเงินสำเร็จ</h1>
        <span>
          คลิก
          <Link to={"/"}>ที่นี่</Link>
          เพื่อกลับสู่หน้าแรก
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(SucessPaymentPage);
