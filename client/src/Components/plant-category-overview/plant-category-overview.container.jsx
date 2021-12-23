import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import withSpinner from "../with-spinner/with-spinner.component";

import PlantCategoryOverview from "./plant-category-overview.component";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const PlantCategoryOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(PlantCategoryOverview)

export default PlantCategoryOverviewContainer;