import React from "react";

import './custom-button.style.scss'

const CustomButton = ({children}) => {
    return(
        <div className="button">
            {children}
        </div>
    )
}

export default CustomButton;