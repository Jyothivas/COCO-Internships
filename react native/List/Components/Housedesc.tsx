import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { create } from "react-test-renderer";

type HouseDescProp={
    HouseDescData: any
}

const Housedesc = (props: HouseDescProp) => {
    return(
        <View style={style.whole}>
            <Text style={style.price}>Price: $ {props.HouseDescData.priceFrom}</Text>
            <Text style={style.state}>State: {props.HouseDescData.state}</Text>
            <Text style={style.address}>Street Address: {props.HouseDescData.streetAddress}</Text>
        </View> 
    )
}

const style = StyleSheet.create({
    whole:{
        flex:1,
        right: 1,
        marginLeft:4,
        marginTop:4
    },

    state: {
        fontSize: 12,
        padding: 1,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 14,
        padding: 2
    },
    address: {
        
        fontSize: 12,
    }
  })

export default Housedesc;