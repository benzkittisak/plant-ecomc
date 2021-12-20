import React from "react";

import './custom-button.style.scss'

const CustomButton = ({children , ...props }) => {
    return(
        <div className="button" {...props}>
            {children}
        </div>
    )
}

export default CustomButton;