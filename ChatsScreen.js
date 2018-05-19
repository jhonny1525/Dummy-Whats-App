import React from 'react';
import firebase from 'react-native-firebase'

export default class ChatScreen extends React.Component {

    constructor(props){
        super(props);
        this.ref=firebase.firestore().collection('samplechat');
        this.unsubscribe=null;
        this.state={
            messages:[],text:''
        }
    }
    componentDidMount()
    {
        this.ref.onSnapshot(this.onCollectionUpdate)
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    onSend(messages = []) {
        this.ref.add(messages[0])
    }
    onCollectionUpdate = (querySnapshot) => {
        const messages=[];
        console.log("messages "+querySnapshot.size);
        querySnapshot.forEach((doc) => {
            messages.push(doc.data());
        });
        this.setState({
            messages
        });
    }
    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                user={{
                    _id: 1,
                    name:'Firebase'
                }}
                onSend={messages => this.onSend(messages)}
            />
        );
    }
}