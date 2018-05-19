import React from 'react';
import { createSwitchNavigator,createMaterialTopTabNavigator } from 'react-navigation';
import {AppRegistry, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import Loading from './Loading'
import SignUp from "./SignUp";
import ChatScreen from './ChatsScreen'
import firebase from "react-native-firebase";



 const nav1=createSwitchNavigator({
     HomeScreen,
     SettingsScreen,
     Loading,
     SignUp,
 },{
     initialRouteName:'Loading'
     // tabBarOptions: {
     //     activeTintColor: 'white',
     //     labelStyle: {
     //         fontSize: 13,
     //     },
     //     style: {
     //         backgroundColor: '#075e54',
     //     },
     // }
 });

const nav2=createMaterialTopTabNavigator({
    CHATS: HomeScreen,
    STATUS: SettingsScreen,
    CALLS: ChatScreen,
},{
    tabBarOptions: {
        activeTintColor: 'white',
        labelStyle: {
            fontSize: 13,
        },
        style: {
            backgroundColor: '#075e54',
        },
    }
});
Nav3:null;
console.log("user status : "+JSON.stringify(firebase.auth().user))
if(!firebase.auth().user){
    Nav3=nav1;
}
else {
    Nav3=nav2;
}

export default Nav3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        flexDirection:'row',
        borderTopColor:'black',
        borderColor:'white',
        borderStyle:'solid',
        borderWidth:0.2,
        marginBottom:12,
    },
    item: {
        fontSize: 17,
        height: 30,
        color:'black',
        fontStyle:'normal',
        fontWeight:'bold',
        textAlignVertical:'center',
        fontFamily:'Lucida Console'
    },
})