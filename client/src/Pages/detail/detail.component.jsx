import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import CustomButton from "../../Components/custom-button/custom-button.component";

import { addItem } from "../../redux/cart/cart.action";

import currencyFormatter from "../../assets/utils/currency.formatter";

import { selectPlantForDetailPage } from "../../redux/shop/shop.selectors";

import "./detail.style.scss";

const DetailPage = ({ product, addItem }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="detail-page">
      <div className="detail-page-container">
        <div className="detail-page-left">
          <img className="detail-image" src={product.imageUrl} alt="" />
        </div>
        <div className="detail-page-right">
          <div className="detail-page-right-container">
            <div className="product-header">{product.name}</div>
            <div className="product-description">{product.description}</div>

            <div className="product-price">
              {currencyFormatter.format(product.price)} บาท
            </div>

            <CustomButton onClick={() => addItem(product)}>
              เพิ่มลงตะกร้าสินค้า
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  product: selectPlantForDetailPage(props.categoryName)(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
