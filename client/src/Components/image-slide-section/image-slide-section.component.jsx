import React, { useState } from "react";


import SLIDE_DATA from "./slide.data";

import "./image-slide-section.style.scss";

import ImageInSlide from "../image-in-slide/image-in-slide.component";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const length = SLIDE_DATA.length;

  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  if (!Array.isArray(SLIDE_DATA) || length <= 0) {
    return null;
  }

  return (
    <div className="image-slider-container">
      <ArrowLeft className="left-arrow" onClick={prevSlide} />
      <ArrowRight className="right-arrow" onClick={nextSlide} />
      {SLIDE_DATA.map((slide, index) => {
        return (
          <div
            className={index === currentImage ? "slide active" : "slide"}
            key={index}
          >
            {index === currentImage && (
                <ImageInSlide slide={slide}/>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
