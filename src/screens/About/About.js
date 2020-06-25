
import React,{ Component } from 'react';
import {View,Text,Button,StyleSheet } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { ABOUT_EVENT } from '../../constants/AppConstants';

export default class About extends Component{
    sayHelloToHome = (hello) => {
        EventRegister.emit(ABOUT_EVENT,hello)
    }

    render(){
        return(
            <View>
                <Text>{this.props.route.params.name}</Text>
                <Button title='hello' onPress={() => this.sayHelloToHome('Whats up')}/>
            </View>
        )
    }
}

