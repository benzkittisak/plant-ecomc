import React from "react";

import ImageSlider from "../../Components/image-slide-section/image-slide-section.component";

import './home.style.scss';

const HomePage = () => {
    return(
        <div className="homepage-container">
            <ImageSlider/>
        </div>
    )
}

export default HomePage;