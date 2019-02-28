import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import withExtra from './extra'

class experiment extends PureComponent {
    render(){
        return (
            <View>
                <Text>
                    {
                        this.props.showVariant ? "Continue" : "SignUp"
                    }
                </Text>
            </View>
        )
    }
}

export default withExtra('signUpCopyChange', experiment)