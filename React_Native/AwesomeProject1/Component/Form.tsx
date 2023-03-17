import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from 'react-native';


type ChildProps={
  addUser : (name:string,email:string) => void;
  //navigation:any;
}


function Form(props:ChildProps) {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

 const addingUser=()=>{
   if (!name || !email) {
     return
   }
    props.addUser(name,email);
    setName('');
    setEmail('');
    //props.navigation.navigate('List');
  //console.warn("Data is sent");
 }
  return (
      <View style={styles.container}>
        <TextInput placeholder="Enter Name"
          value={name}
          onChangeText={(text) => setName(text)}
          testID='user-name' 
          />
        <TextInput placeholder="Enter Email" value={email}
        onChangeText={(text)=>setEmail(text)}
        testID='user-mail'
        />
         <Button title="Add" testID="btn" onPress={addingUser} />     
      </View>
  );
};
const styles = StyleSheet.create({

  container: {
  
    
    height:200,
    margin:12,
    borderWidth:1,
    padding:10,
    
  },

})


export default Form
