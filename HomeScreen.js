import React from "react";
import {AppRegistry, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import firebase from 'react-native-firebase'
import  Icon  from 'react-native-vector-icons/FontAwesome'
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
export default class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.ref=firebase.firestore().collection('samplechat');
        this.unsubscribe=null;
        this.state={
            messages:[]
        }
    }
    componentDidMount()
    {
        this.ref.onSnapshot(this.onCollectionUpdate)
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    _onPress = () => {
        this.props.navigation.navigate('CALLS')
    }
    onCollectionUpdate = (querySnapshot) => {
        const messages=[];
        console.log("messages"+querySnapshot.size);
        querySnapshot.forEach((doc) => {
            messages.push(doc.data());

        });
        for(var i=0;i<1;i++)
        {
            messages.pop();
        }
        this.setState({
            messages
        });
    }

    render() {
        return (
            <FlatList
                data={this.state.messages}
                keyExtractor={item => item._id}
                renderItem={({item}) =>
                    <TouchableOpacity
                        onPress={this._onPress}
                        style={styles.container} >
                        <Image
                            style={{width: 50, marginLeft: 13,marginRight:13,marginTop: 5,marginBottom: 5, height: 50,borderRadius: 50}}
                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                        />
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                        }} >
                            <Text style={styles.item} >{item.user.name}</Text>
                            <Icon name="check" size={15}  >
                                <Text style={{
                                    fontSize: 15,
                                    height: 5,
                                    flex:1,
                                    fontStyle:'normal',
                                    fontFamily:'Lucida Console',
                                    textAlignVertical:'center',
                                }} >{item.text}</Text>
                            </Icon>
                        </View>
                        <View style={{
                            flex: 0,
                            flexDirection: 'column',
                        }} >
                            <Text style={{
                                fontSize: 13,
                                height: 20,
                                flex:0,
                                marginTop: 10,
                                marginRight:13,
                                fontStyle:'normal',
                                fontFamily:'Lucida Console',
                            }} >YESTERDAY</Text>
                        </View>
                    </TouchableOpacity>
                }
            />
        );
    }


}