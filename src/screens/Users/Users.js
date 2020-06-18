
import React,{ Component } from 'react';
import {View,Text,Button,StyleSheet,SectionList,FlatList,Image } from 'react-native';

// Accepts the array and key
const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

export default class Users extends Component{

    constructor(props){
        super(props)

        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        this.getRanomUsers()
    }

    getArrayOfItems = (obj) => {
        return Object.entries(obj).map(([ title, data ]) => {
            return {
                title,
                data: Array.isArray(data) ? [data] : [[data]]
            };
        });
    }

    getRanomUsers = () => {
        fetch('https://randomuser.me/api/?results=20')
            .then((response) => response.json())
            .then((json) => {

            let peopleGroupByNat = groupBy(json.results, 'nat')
            const items = this.getArrayOfItems(peopleGroupByNat)

            // console.log(items)
                // console.log(json)
                this.setState({
                    users:items
                })
            })
            .catch((error) => console.log(error))
            .finally(()=>{
                //Do something
            })
    }

    // renderItem = (title) => {
    //     return(
    //         <View style={styles.item}>
    //             <Text style={styles.title}>{title}</Text>
    //         </View>
    //     )
    // }
    renderItem = (data) => {
        return(
            <FlatList
                horizontal={true}
                data={data}
                renderItem={({ item }) => this.renderItemFlatList(item) }
                keyExtractor={(item, index) => index.toString()+item.id.value}
            />
        )
    }

    renderItemFlatList = (item) => {
        return(
            <View style={{width:160,height:190,backgroundColor:'gray',margin:10,borderTopLeftRadius:20,borderTopRightRadius:20,overflow:'hidden'}}>
                <View style={{flex:7.5,backgroundColor:'orange'}}>
                    <Image style={{flex:1,resizeMode:'cover'}} source={{uri:item.picture.large}} />
                </View>
                <View style={{flex:2.5,backgroundColor:'white',padding:4,overflow:'hidden'}}>
                    <Text  style={{fontSize:18,fontWeight:'bold'}} ellipsizeMode='tail' numberOfLines={1} >{item.name.title} {item.name.first} {item.name.last}</Text>
                    <Text style={{fontSize:12,marginTop:2,flexWrap:'wrap'}} ellipsizeMode='clip' numberOfLines={1} >{item.cell}</Text>
                </View>
            </View>
        )
    }

    render(){
        return(
            
            <View style={styles.container}>
                <SectionList
                    style={{backgroundColor:'black'}}
                    sections={this.state.users}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => this.renderItem(item)}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   marginTop: 20,
    //   marginHorizontal: 16
    },
    item: {
      backgroundColor: "#f9c2ff",
      padding: 20,
      marginVertical: 8
    },
    header: {
      fontSize: 32,
    //   backgroundColor: "gray",
      color:'#fff',
      fontWeight:'bold',
      marginLeft:10
    },
    title: {
      fontSize: 24
    },
    item1: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    title1: {
        fontSize: 32,
    }
  });
