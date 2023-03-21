import React, { useEffect, useState } from "react"
import { FlatList, Image, View } from "react-native"
import Housecard from "./Components/Housecard";



const App =()=> {

  const[Data,setData] =useState([]);

  const getAPIData =async() => {
    const url="http://192.168.29.96:3000/data";
    let result: any = await fetch(url);
    result=  await result.json();
    setData(result.listings.data);  
  }
  
  useEffect(()=>{
    getAPIData();
  },[]);
  
  return(
    <View style={{flex: 1}}>
      <Housecard HouseData={Data}/>
      
    </View>
            
  )
}


export default App;