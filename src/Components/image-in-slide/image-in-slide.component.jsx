import React from "react";
import { Link } from "react-router-dom";


import "./image-in-slide.style.scss";

const ImageInSlide = ({ slide }) => {
  return (
    <div>
      <div className="bg-black"> </div>
      <div className="content">
        <span className="title">{slide.title}</span>
        <h1 className="header">{slide.type}</h1>
        <Link className="shop_button" to={slide.routeName}>
          SHOP NOW
        </Link>
      </div>
      <img className="slide-image" src={slide.imageUrl} />
    </div>
  );
};

export default ImageInSlide;
