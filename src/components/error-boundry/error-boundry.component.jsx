import React from "react";
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundry.styles'

class ErrorBoundry extends React.Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError : true }
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error : ', error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props
        return hasError ? <ErrorImageOverlay>
            <ErrorImageContainer imageUrl={"https://i.imgur.com/yW2W9SC.png"} />
            <ErrorImageText>This Page is Broken</ErrorImageText>
        </ErrorImageOverlay> : children
    }
}

export default ErrorBoundry
