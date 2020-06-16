
import React,{ Component } from 'react';
import {View,Text,Button,StyleSheet } from 'react-native';

export default class Home extends React{

    render(){
        return(
            <View>
                <Text>Home Screen</Text>
                <Button
                    title="Click me"
                    onPress={()=> alert('dsbj')}
                />
            </View>
            
        )
    }
}

