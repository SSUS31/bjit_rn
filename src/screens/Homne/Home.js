
import React,{ Component } from 'react';
import {View,Text,Button,StyleSheet,TouchableOpacity } from 'react-native';
import Card from '../../components/MyComponent';
import Video from 'react-native-video';
import { EventRegister } from 'react-native-event-listeners';
import { ABOUT_EVENT } from '../../constants/AppConstants';


export default class Home extends Component{

    constructor(props){
        super(props)

        this.state = {
            show: false
        }
    }

    componentDidMount(){
        this.trackingEventFromAbout = EventRegister.addEventListener(ABOUT_EVENT,this.helloFromAbout)
    }

    componentWillUnmount(){
        EventRegister.removeEventListener(this.trackingEventFromAbout)
    }

    helloFromAbout = (data) => {
        alert(data)
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

    normalFunc(p){
        alert(p)
    }

    arraowFunc = (x) => {
        alert(x)
    }

    // render(){
    //     return(
    //         <View style={{flex:1,backgroundColor:'yellow'}}>
    //             <View style={{width:'80%',height:200,
    //                 backgroundColor:'red',alignSelf:'center',marginTop:20}}>

    //                     <Video 
    //                         source={{uri:'https://www.w3schools.com/html/mov_bbb.mp4'}}
    //                         style={{flex:1}}
    //                         controls
    //                         resizeMode='cover'
    //                     />
    //             </View>

    //         </View>
    //     )
    // }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#00000050',justifyContent:'center',alignItems:'center'}}>
                {/* <Text>Home Screen</Text> */}
                {/* <Card 
                    title='From Home'
                    cornerRadius={40}
                    centerContent={this.circularView()}
                    action={this.showHide}
                />
                
                { this.state.show &&
                    <Text style={{marginTop:50}}>Copyright ......</Text>
                } */}

                <Button
                    title="Go to about"
                    onPress={()=> this.props.navigation.navigate('about',{name:'Sahad'})}
                />
                <Button
                    title="Go to users"
                    onPress={()=> this.props.navigation.navigate('users')}
                />
                {/* <TouchableOpacity onPress={this.normalFunc.bind(this,'par')}>
                    <Text>Button</Text>
                </TouchableOpacity> */}
            </View>
            
        )
    }
}

