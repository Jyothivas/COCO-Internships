import React , {useState} from "react";
import {View, Text,FlatList,ScrollView,Button,StyleSheet} from 'react-native';
import Form from "./Form";

type Parentprops={
    userdata:any,
    navigation:any;
}
export const List =(props:Parentprops)=>{
    return(
    <View testID="view1">
    
    <FlatList testID="flat-list"
    data={props.userdata}
    renderItem={({item,index})=>
    <View key={index+1} style={styles.container}>
        <View>
            
        <Text style={styles.textsize}>
           Name : {item.name}
        </Text>
        </View>
        <View >
        <Text  style={styles.textsize}>
           Email : {item.email}  
        </Text>
        </View>
    </View>
    } />

    </View>
    );
}
const styles=StyleSheet.create({
    container:{
        padding:24,
        backgroundColor:'#eaeaea',
        borderWidth:2,
        marginBottom:5,
        borderRadius:10,
    },
    textsize:{
        fontSize:18,
        color:'black'
    }
   
})