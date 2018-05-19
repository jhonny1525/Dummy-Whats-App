import React from 'react';
import {AppRegistry, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class SettingsScreen extends React.Component {
    render() {
        return (
            <FlatList
                data={[{key: 'Kamlesh Bachani1',lastMsg:'hey kamlesh how are you !!'}, {key: 'Kamlesh Bachani2',lastMsg:'hey kamlesh how are you !!'},{key: 'Kamlesh Bachani3',lastMsg:'hey kamlesh how are you !!'},{key: 'Kamlesh Bachani4',lastMsg:'hey kamlesh how are you !!'}]}
                renderItem={({item}) =>
                    <TouchableOpacity style={styles.container} >
                        <Image
                            style={{width: 50, marginLeft: 13,marginRight:13,marginTop: 5,marginBottom: 5, height: 50,borderRadius: 50}}
                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                        />
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                        }} >
                            <Text style={styles.item} >{item.key}</Text>
                            <Text style={{
                                fontSize: 15,
                                height: 5,
                                flex:1,
                                fontStyle:'normal',
                                fontFamily:'Lucida Console',
                                textAlignVertical:'center',
                            }} >Yesterday 11:02 am</Text>
                        </View>
                    </TouchableOpacity>
                }
            />
        );
    }
}