import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { create } from "react-test-renderer";

type HouseDescProp={
    HouseDescData: any
}

const Housedesc = (props: HouseDescProp) => {
    return(
        <View style={{ flex: 1, padding: 8 }}>
           <Text style={style.address}>
                {props.HouseDescData.streetAddress},
                {props.HouseDescData.city},
                {props.HouseDescData.state}
            </Text> 
            <Text style={style.detail}>
                [{props.HouseDescData.propertyTypes}]
            </Text>

            <View  style={{ flex: 1 }}>
                <Text style={style.price}>
                  Price: ${props.HouseDescData.priceFrom}
                </Text>
                <Text style={style.detail}>
                  Car Parks: {props.HouseDescData.carparks}
                </Text>
                <Text style={style.detail}>
                  Bedrooms: {props.HouseDescData.bedrooms}
                </Text>
                <Text style={style.detail}>
                  Bathrooms: {props.HouseDescData.bathrooms}
                </Text>
            </View>
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

    detail: {
        color: 'black',
        fontSize: 12,
        padding: 1
      },
    price: {
        fontWeight: 'bold',
        fontSize: 14,
        padding: 2
    },
    address: {
        color: 'black',
        fontSize: 12,
    }
  })

export default Housedesc;