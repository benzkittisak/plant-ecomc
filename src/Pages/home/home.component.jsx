import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {selectPlantsForPreview} from '../../redux/plant/plants.selectors';

import ImageSlider from "../../Components/image-slide-section/image-slide-section.component";
import PlantOverview from "../../Components/plants-overview/plants-overview.component";
import OurProduct from "../../Components/our-product/our-product.component";

import './home.style.scss';

const HomePage = ({plants}) => {

    return(
        <div className="homepage-container">
            <ImageSlider/>
            <PlantOverview  plants={plants}/>
            <OurProduct  plants={plants}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    plants:selectPlantsForPreview
})

export default connect(mapStateToProps)(HomePage);