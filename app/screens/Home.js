import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default class Home extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Button onPress={()=> this.props.navigation.navigate('Placeholder')} title="PlaceHolder" />
                <View style={styles.br} />
                <Button onPress={()=> this.props.navigation.navigate('Example')} title="Experiment PlaceHolder" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    br: {
        height: 10
    }
})