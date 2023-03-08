import React , {useState} from "react";
import {View, Text,FlatList,ScrollView,Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';


type Parentprops = {
    onUserData:any;
}

export const CustomerList=(props:Parentprops)=>{
    const navigation=useNavigation();
    const gotoFormScreen=()=>{
    console.log(1);
    }
    return(
    <View>
    <Button title="Add Customers" testID="b1" onPress={gotoFormScreen}/>
    <View>
        <Text>Sr.No</Text>
        <Text>Name</Text>
        <Text>Email</Text>
    </View>
    <FlatList testID="flat-list"
    data={props.onUserData}
    renderItem={({item,index})=>
    <View key={index+1}>
        <View>
        <Text>
            Name:{item.name}
        </Text>
        </View>
        <View>
        <Text>
            Email:{item.email}  
        </Text>
        </View>
    </View>
    } />

    </View>
    );
}