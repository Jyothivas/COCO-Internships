import React, { useEffect, useState } from "react"
import { FlatList, Image, View } from "react-native"
import Housecard from "./Components/Housecard";



const App =()=> {

  const dummy = 
    {
      heroImageUrl: "pics/307/14441307-1-3536325.jpg",
      streetAddress: "Nilmar-avenue",
      state: "VIC",
      priceFrom: 875000,
      agents: 
        {
          agentPhotoFileName: "3535db4cf6c24847900d4e1c6539df77.jpg",
        }
      
    }

  // const[Data,setData] =useState([]);

  // const getAPIData =async() => {
  //   const url="http://192.168.29.96:3000/data";
  //   let result: any = await fetch(url);
  //   result=  await result.json();
  //   setData(result.listings.data);  
  // }
  
  // useEffect(()=>{
  //   getAPIData();
  // },[]);
  
  return(
    <View style={{flex: 1}}>
      <Housecard HouseData={dummy}/>
      
    </View>
            
  )
}


export default App;