import React from "react";
import { Route , Routes , useParams  } from "react-router-dom";

import CategoryPageContainer from "../category/category.container";

import PlantCategoryOverview from "../../Components/plant-category-overview/plant-category-overview.component";

import './shop.style.scss';

const ShopPage = () => {
    const url = useParams()
    const params = {categoryName : Object.values(url).toString()};
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
                <Route
                path=":categoryName"
                element={
                    <CategoryPageContainer  {...params}/>
                }
               
                />
            </Routes>
        </div>
    )
}

export default ShopPage