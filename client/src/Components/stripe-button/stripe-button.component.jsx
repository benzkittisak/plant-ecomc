import React from "react";
import axios from "axios";
import "./stripe-button.style.scss";

const StripeButton = ({ cartItems }) => {
  const checkOut = () => {
    axios({
      url: "/create-checkout-session",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      data: cartItems,
    })
      .then((res) => {
        if (res.status === 200) return res.data;
        return res.data.then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.open(url , '_blank')
      })
      .catch((err) => console.log(err.error));
  };

  return (
    <div className="stripe-button">
      <button type="button" onClick={() => checkOut()}>ชำระเงิน </button>
    </div>
  );
};

export default StripeButton;
