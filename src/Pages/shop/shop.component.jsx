import React from "react";
import { Route , Routes  } from "react-router-dom";

import PlantCategoryOverview from "../../Components/plant-category-overview/plant-category-overview.component";

import './shop.style.scss';

const ShopPage = () => {

    return(
        <div className="shop-page">
            <Routes>
                <Route
                exact
                path='/'
                element={
                    <PlantCategoryOverview/>
                }
                />
            </Routes>
        </div>
    )
}

export default ShopPage