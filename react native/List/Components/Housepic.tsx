import React, { useEffect, useState } from "react"
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native"
import { create } from "react-test-renderer";

type HousePicProps = {
  HousePicData: any;
  
}

const Housepic = (props: HousePicProps) => {

  
  
  return(
    <View style={{flex: 1}}>
      <Image
        style={{ height: 150, width: '90%' }}
        source={{
          uri: `https://cdn.uatr.view.com.au/images/listing/1000-w/${props.HousePicData.heroImageUrl}`
        }}
       /> 
    </View>  
  )

}


export default Housepic;