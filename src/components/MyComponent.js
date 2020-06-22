
import React,{ Component } from 'react';
import {View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class MyComponent extends Component{

    render(){
        return(
            <View style={[styles.container,{borderRadius:this.props.cornerRadius}]}>
                <TouchableOpacity
                    style={styles.touchableContent}
                    onPress={this.props.action}
                    style={{justifyContent:'center',alignItems:'center'}}
                >
                    <Text>{this.props.title}</Text>
                    {this.props.centerContent}
                </TouchableOpacity>
            </View>
        )
    }
}

MyComponent.defaultProps = {
    title: 'Card title',
    cornerRadius:20,
    centerContent:null,
    action: () => {
        alert('you can set function')
    }
}

MyComponent.propTypes = {
    title: PropTypes.string.isRequired,
    cornerRadius:PropTypes.number,
    centerContent:PropTypes.object,
    action:PropTypes.func
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        width:'80%',height:200,justifyContent:'center',
        alignItems:'center'
    },
    touchableContent:{
        flex:1
    }

})

export default MyComponent;