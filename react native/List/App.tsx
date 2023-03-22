import React, { useEffect, useState } from "react"
import Housecard from "./Components/Housecard";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";

import Houseimages from "./Components/Houseimages";


const Stack = createNativeStackNavigator();

const App =()=> {

  const[Images,setImages]=useState([]);
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
  

  const navigationRef = useNavigationContainerRef();
  
    const gotoList = ()=>{
      navigationRef.navigate('House Images');
    }

    const handleHouseImages = (images:[]) => {
      setImages(images);
      gotoList();
    };
  return(
    
    

    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Property List">
          {() => <Housecard  HouseData={Data} HouseImages={handleHouseImages} />}
          
        </Stack.Screen>
        <Stack.Screen name="House Images">
          {() => <Houseimages houseImage={Images} />}
          
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
          
  )
}


export default App;