import React from "react";

import Spinner from "../spinner/spinner.component";

const withSpinner = (WrappedConponent) => ({isLoading  , ...otherProps}) => {
    return isLoading ? (
        <Spinner/>
    ) : (
        <WrappedConponent {...otherProps}/> 
    )
}

export default withSpinner;