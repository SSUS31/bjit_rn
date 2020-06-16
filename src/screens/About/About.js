
import React,{ Component } from 'react';
import {View,Text,Button,StyleSheet } from 'react-native';

export default class About extends Component{

    render(){
        return(
            <View>
                <Text>{this.props.route.params.name}</Text>
            </View>
        )
    }
}

