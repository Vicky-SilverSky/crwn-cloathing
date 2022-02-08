import React from 'react'
import { SpinnerContainer } from '../with-spinner/with-spinner.styles'
import { SpinnerOverlay } from './spinner.style'

const Spinner = () => (
    <SpinnerOverlay>
        <SpinnerContainer />
    </SpinnerOverlay>
)

export default Spinner
