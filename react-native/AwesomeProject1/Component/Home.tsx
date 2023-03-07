import React,{useState} from 'react';
import { View, Text,Button,TextInput, ScrollView,FlatList, StyleSheet } from 'react-native';

type ParentProps = {
    onUserData: any,
}

export const Home =(props:ParentProps)=> {

    
    return (
        <View>
       
        <FlatList testID='flatlist' 
                      data={props.onUserData}
                      renderItem={({ item, index }) =>
                          <View style={{flexDirection:'column' ,backgroundColor:'grey', margin:10, borderRadius:5, padding:15,}} >
                                  <Text style={{color:'white', fontSize:20}} >Name : {item.name}</Text>
                           
                                  <Text style={{color:'white', fontSize:20}} >Email : {item.email}</Text>
                          </View>
                      } /> 
      </View>
    );
   
  }
