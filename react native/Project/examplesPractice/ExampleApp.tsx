import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, Image, ScrollView, TextInput} from 'react-native';
//import Example from './examplesPractice/Example';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import Example1 from "./Example1";

 
const Stack = createNativeStackNavigator();




const App= () => {
  const btnaction=()=>{
    console.warn('pressed');
  }
    return(
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          
          headerStyle:{
            backgroundColor: 'skyblue',
          },
          headerTintColor: 'white',
          headerTitleStyle:{
            fontSize: 25,
          }
        }}>
          
          <Stack.Screen name='Login' component={Login} 
          options={{
            headerTitle:()=> <Button title='hey'/>,
            headerRight:()=> <Button title='Right' onPress={btnaction}/>,
            title: 'User Login',
            headerStyle:{
              backgroundColor: 'skyblue',
            },
            headerTintColor: 'white',
            headerTitleStyle:{
              fontSize: 25,
            }
          }}
          />
          <Stack.Screen name='Home' component={Home} /> 
        </Stack.Navigator>
    </NavigationContainer>
    )
}


const Home=()=>{
  

  return(
    <View>
      <Text style={style.text}>Home Screen</Text>
      
    </View>
  )
}

const Login=(props: any)=>{

  return(
    <View>
      <Text style={style.text}>Login Screen</Text>
      <Button title='Go to Home Screen' onPress={()=>props.navigation.navigate('Home')}/>
    </View>

  )
}




const style = StyleSheet.create({

  text:{
    margin: 10,
    fontSize: 20,
    color: 'black'
  }
  


})



export default App;
