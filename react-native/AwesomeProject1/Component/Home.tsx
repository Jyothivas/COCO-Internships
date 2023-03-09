import React from 'react';
import { View, Text,FlatList, } from 'react-native';

type ParentProps = {
    navigation:any;
    UserData:any;
}

export const Home =(props:ParentProps)=> {

    return (

        <View testID='homeScreen'>
        <FlatList testID='flatList' 
                      data={props.UserData}
                      renderItem={({item, index}) =>
                          <View key={index+1} style={{flexDirection:'column' ,backgroundColor:'grey', margin:10, borderRadius:5, padding:15,}} >
                                  <Text  style={{color:'white', fontSize:20}} >Name : {item.name}</Text>
                           
                                  <Text  style={{color:'white', fontSize:20}} >Email : {item.email}</Text>
                          </View>
                      } /> 
      </View>
    );
   
  }


