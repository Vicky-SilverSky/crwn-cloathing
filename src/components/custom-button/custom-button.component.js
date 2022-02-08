import React from "react";

import './custom-button.styles.scss'
import { CustomButton as CustomButtonComp } from '../custom-button/custom-button.styles'

const CustomButton = ({ children, ...otherCustomButtonProps }) => {
    return (
        <CustomButtonComp
            {...otherCustomButtonProps}
        >
            {children}
        </CustomButtonComp>
    )
}

export default CustomButton
