
import React,{ Component } from 'react';
import {View,Text,Button,StyleSheet } from 'react-native';

export default class Home extends Component{

    render(){
        return(
            <View>
                <Text>Home Screen</Text>
                <Button
                    title="Go to about"
                    onPress={()=> this.props.navigation.navigate('about',{name:'Sahad'})}
                />
                <Button
                    title="Go to users"
                    onPress={()=> this.props.navigation.navigate('users')}
                />
            </View>
            
        )
    }
}

