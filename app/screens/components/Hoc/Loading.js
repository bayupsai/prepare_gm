import React, { PureComponent } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const WithLoading = (Component)=> {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if(!isLoading) return (
            <Component {...props} />
        )
        return ( <ActivityIndicator /> )
    }

    // return class LoadingComponent extends PureComponent {
    //     render() {
    //         if(this.props.isLoading) return <ActivityIndicator />
    //         return <Component {...this.props} />
    //     }
    // }
}

export default WithLoading