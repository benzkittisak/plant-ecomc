import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {selectPlantsForPreview} from '../../redux/shop/shop.selectors';

import PlantPreview from "../plant-preview/plant-preview.component";

import './plant-category-overview.style.scss';

const PlantCategoryOverview = ({plants}) => {
    return(
        <div className="category-overview">
            {
                plants.map(({id , ...otherProps}) => 
                    <PlantPreview showDetail key={id} plants={{...otherProps}} />
                )
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    plants:selectPlantsForPreview
})

export default connect(mapStateToProps)(PlantCategoryOverview)