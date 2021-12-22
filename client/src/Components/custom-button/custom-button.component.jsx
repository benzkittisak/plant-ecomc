import React from "react";

import { CustomButtonContainer } from "./custom-button.style";

const CustomButton = ({children , ...props }) => {
    return(
        <CustomButtonContainer className="button" {...props}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton;