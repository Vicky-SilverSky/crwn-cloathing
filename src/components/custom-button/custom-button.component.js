import React from "react";

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignin, inverted, ...otherCustomButtonProps }) => {
    return (
        <button className={`${isGoogleSignin ? 'google-sign-in' : ''} ${inverted ? 'inverted' : 'custom-button'}`} {...otherCustomButtonProps}>
            {children}
        </button>
    )
}

export default CustomButton
