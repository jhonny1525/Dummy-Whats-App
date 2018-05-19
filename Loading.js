import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase';
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import SignUp from "./SignUp";


export default class Loading extends React.Component {
    componentDidMount () {
        if(firebase.auth().user == null)
        this.props.navigation.navigate('SignUp')
        else {
            this.props.navigation.navigate('HomeScreen')
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="small" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
