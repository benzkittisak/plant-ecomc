import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import withSpinner from "../with-spinner/with-spinner.component";
import OurProduct from "./our-product.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const OutProductContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(OurProduct);

export default OutProductContainer;
