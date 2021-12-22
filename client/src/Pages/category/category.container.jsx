import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

import CategoryPage from "./category.component";
import withSpinner from "../../Components/with-spinner/with-spinner.component";


const mapStateToProps = createStructuredSelector({
    isLoading : (state) => !selectIsCollectionsLoaded(state)
});

const CategoryPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CategoryPage)


export default (CategoryPageContainer);