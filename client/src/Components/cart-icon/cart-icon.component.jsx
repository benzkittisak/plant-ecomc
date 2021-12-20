import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {toggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import { ReactComponent as Icon } from "../../assets/icons/shopping-bag.svg";

import "./cart-icon.style.scss";

const CartIcon = ({toggleCartHidden , itemsCount}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <div className="cart-container">
        <span className="cart-text">ตะกร้าสินค้า</span>
        <Icon className="shopping-icon" />
        <div className="items-count">{itemsCount}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemsCount : selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
