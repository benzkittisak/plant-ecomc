import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

import DetailPage from "./detail.component";
import withSpinner from "../../Components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const DetailPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(DetailPage);

export default DetailPageContainer
