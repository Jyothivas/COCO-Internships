import React, { useEffect, useState } from "react"
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import Agentpics from "./Agentpics"
import Housedesc from "./Housedesc"
import Housepic from "./Housepic"

type houseCardProps = {
  HouseData: any
}

const Housecard = (props: houseCardProps) =>{

 
  
  return(
    <View style={style.card}>
      <View style={{ flexDirection: 'row', width: '100%' }}>
        <Housepic HousePicData={props.HouseData}/>
        <Housedesc HouseDescData={props.HouseData}/>
        
      </View>
      <Agentpics HouseAgentPics={props.HouseData}/>
    </View>  
  )

}

const style = StyleSheet.create({
  card: {
      width: '95%',
      elevation: 10,
      backgroundColor: 'grey',
      margin: 2,
      alignSelf: 'center',
      padding: 5
  }
})


export default Housecard;