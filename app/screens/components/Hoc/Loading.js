import React, { PureComponent } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

function WithLoading(Component) {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if(!isLoading) return (
            <Component {...props} />
        )
        
        return (
            <ActivityIndicator />
        )
    }
}

export default WithLoading