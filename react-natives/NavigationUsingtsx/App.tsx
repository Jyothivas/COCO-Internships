import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, ToastAndroid } from 'react-native';
// import UserData from './Component/UserData';
import UserForm from './Component/UserForm';
import Views from './Component/Views';

import type { PropsWithChildren } from 'react';
import ButtonEx from './Component/ButtonEx';
import PropsFun from './Component/PropsFun';
import FEventProps from './Component/FEventProps';
// import Example from './examplesPractice/Example';

// interface user {
//   name: string,
//   email: string
// }

const App = () => {

  // const [name, setName]=useState("")
  // const[email,setEmail]=useState("")

  // const addUser =()=>{
  //   setName({user.name})
  //   setEmail(user.email)
  // }
  const add = () => {
    let num1 = 20;
    let num2 = 40;
    let sum = num1 + num2;
    ToastAndroid.show('Sum=' + sum, ToastAndroid.SHORT);
  
}




  return (
    <View>
      {/* <UserForm /> */}
      {/* <Example/> */}
      {/* <UserData /> */}
      {/* <Views /> */}
      {/* <ButtonEx /> */}
      {/* <PropsFun
        msg="this is props in react native with typescript"
        count={20}
      >
        <Text>I am children component in PropsFun</Text>
      </PropsFun> */}
      <FEventProps add={add} />


    </View>
  );
};

export default App;