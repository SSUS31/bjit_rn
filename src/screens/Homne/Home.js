
import React,{ Component } from 'react';
import {View,Text,Button,StyleSheet } from 'react-native';
import Card from '../../components/MyComponent';


export default class Home extends Component{

    constructor(props){
        super(props)

        this.state = {
            show: false
        }
    }

    circularView(){
        return(
            <View style={{
                backgroundColor:'red',
                width:30,
                aspectRatio:1,
                borderRadius:15
            }}>

            </View>
        )
    }

    showHide = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'#00000050',justifyContent:'center',alignItems:'center'}}>
                {/* <Text>Home Screen</Text> */}
                <Card 
                    title='From Home'
                    cornerRadius={40}
                    centerContent={this.circularView()}
                    action={this.showHide}
                />
                
                { this.state.show &&
                    <Text style={{marginTop:50}}>Copyright ......</Text>
                }

                {/* <Button
                    title="Go to about"
                    onPress={()=> this.props.navigation.navigate('about',{name:'Sahad'})}
                />
                <Button
                    title="Go to users"
                    onPress={()=> this.props.navigation.navigate('users')}
                /> */}
            </View>
            
        )
    }
}

