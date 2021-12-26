import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import currencyFormatter from "../../assets/utils/currency.formatter";

import { addItem } from "../../redux/cart/cart.action";

import { ReactComponent as Icon } from "../../assets/icons/shopping-bag.svg";
import { ReactComponent as EyeIcon} from '../../assets/icons/eye.svg'

import "./collection-item.style.scss";

const CollectionItem = ({ title, item, addItem, showDetail }) => {
  const navigate = useNavigate();
  console.log(showDetail);
  return (
    <div className="product">
      <span className="product-name">{item.name}</span>
      <img src={item.imageUrl} className="product-image" />
      <span className="product-price">
        {currencyFormatter.format(item.price)}
      </span>
      <div className="hover">
        <div className="hover-container">
          <div className="add-to-cart" onClick={() => addItem(item)}>
            <Icon width={24} height={24} />
          </div>
          {showDetail ? (
            <div
              className="detail"
              onClick={() => navigate(`${title}/${item.name}`)}
            >
              <EyeIcon/>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
