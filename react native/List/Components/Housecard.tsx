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
    <View style={{ flex: 1 }}>
      <FlatList
        data={props.HouseData}
        renderItem={({ item }) => {
          return(
            <View style={style.card}>
              <View style={{ flexDirection: 'row', width: '100%', }}>
                <Housepic HousePicData={item}/>
                <Housedesc HouseDescData={item}/>
              </View>
              <View>
              <Agentpics HouseAgentPics={item.agents}/>
              </View>
            </View>
          )
        }

        }
      />
    </View>  
  )

}

const style = StyleSheet.create({
  card: {
      width: '95%',
      elevation: 10,
      backgroundColor: 'white',
      margin: 2,
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 10,
      alignSelf: 'center',
      padding: 5
  }
})


export default Housecard;