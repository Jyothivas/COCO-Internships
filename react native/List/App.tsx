import React, { useEffect, useState } from "react"
import { FlatList, Image, View } from "react-native"
import Housecard from "./Components/Housecard";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Houseimages from "./Components/Houseimages";

const Stack = createNativeStackNavigator();

const App =()=> {

  const[Data,setData] =useState([]);

  const getAPIData =async() => {
    const url="http://192.168.1.5:3000/data";
    let result: any = await fetch(url);
    result=  await result.json();
    setData(result.listings.data);  
  }
  
  useEffect(()=>{
    getAPIData();
  },[]);
  
  return(
    

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Property List">
          {(props) => <Housecard {...props} HouseData={Data} />}
        </Stack.Screen>
        <Stack.Screen name="House Images">
          {(props) => <Houseimages {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
            
  )
}


export default App;