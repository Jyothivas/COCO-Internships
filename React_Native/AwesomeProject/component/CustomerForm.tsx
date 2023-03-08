import React, { useState } from "react";
import { View, TextInput, ScrollView, Text, Button, StyleSheet } from 'react-native';

interface user {
  name: string,
  email: String
}
interface ChildProps {
  addUser:(name:string,email:string)=> void;
}

function CustomerForm(props:ChildProps) {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

 const SubmitData=()=>{
   if (!name || !email) {
     return
   }
    props.addUser(name,email);
    setName('');
    setEmail('');
 }
  return (
     <ScrollView style={styles.container}>
      <View>
        <TextInput placeholder="Enter Name"
          value={name}
          onChangeText={(text) => setName(text)}
          testID='user-name' 
          />
        <TextInput placeholder="Enter Email" value={email}
        onChangeText={(text)=>setEmail(text)}
        testID='user-mail'
        />
        <Button title="Add" testID="btn" onPress={SubmitData} />
      </View>
    </ScrollView>
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


export default CustomerForm
