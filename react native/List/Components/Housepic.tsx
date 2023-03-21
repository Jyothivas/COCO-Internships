import React, { useEffect, useState } from "react"
import { Button, FlatList, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"


type HousePicProps = {
  HousePicData: any;
  navigation: any
}

const Housepic = (props: HousePicProps) => {

  return(
    <View
      
      style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
            onPress={
                ()=> props.navigation.navigate('House Images',props.HousePicData)
                
          }>
          <Image

            style={{ height: 150, width: '100%', borderRadius: 10}}
            source={{
                uri: 'https://cdn.uatr.view.com.au/images/listing/slug/1000-min/' + props.HousePicData?.heroImageUrl.split("/")[2]
            }}
          />
        </TouchableOpacity>
      </View>
      
    </View>
  )

}


export default Housepic;