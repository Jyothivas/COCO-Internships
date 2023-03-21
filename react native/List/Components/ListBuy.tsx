import React, { useEffect, useState } from "react"
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native"

const ListBuy = () =>{
const[Data,setData] =useState([]);

  const getAPIData =async() => {
    const url="http://192.168.1.17:3000/data";
    let result: any = await fetch(url);
    result=  await result.json();
    setData(result.listings.data);  
  }
  
  useEffect(()=>{
    getAPIData();
  },[]);
 
  
  return(
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <FlatList
        testID="ListBuy-Flatlist"
        data={Data}
        renderItem={({item}) => {
          return(
            <View style={style.houseView}>
              <Image
                testID='HouseImage'
                style={style.houseImage}
                source={{
                  uri: `https://cdn.uatr.view.com.au/images/listing/slug/1000-min/${item.heroImageUrl.split('/')[2]}`
              }}
              />
              {
                item.agents.map((agentItem: any, index: number) => {
                  return (
                    <Image
                      testID='agentProfileImage'
                      key={'agentPhotoImage' + index}
                      style={{ height: 150, width: '100%', margin: 3 }}
                      source={{
                        uri: `https://cdn.uatr.view.com.au/images/listing/1000-w/${agentItem.agentPhotoFileName}`
                      }}
                    />
                  )
                })
              }
            </View>

          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />  
      
  </View>  
  )

}

const style = StyleSheet.create({
  houseView: { flex: 1, width: '50%', flexDirection: 'row', margin: 3 },
  heading: { fontSize: 18, color: 'black' },
  houseImage: { height: 150, width: '100%', margin: 3 }

})

export default ListBuy;