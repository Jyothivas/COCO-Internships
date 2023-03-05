import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";

export default function TabOneScreen() {

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleModal = () => setIsModalVisible(() => !isModalVisible);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      <Button title="button" onPress={handleModal} />
      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          <Text>abcde</Text>
          <Button title="Hide modal" onPress={handleModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
// import React,{useState , useCallback} from 'react';
// import {Button , Text , View , TextInput} from 'react-native'

// const Users = () => {

//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');
    
//     const [arr, setArr] = useState<string[]>([]);

//     const submitHandler=useCallback(()=>{
//         setArr([...arr , name, age]);

//         setAge('');
//         setName('')
//     },[arr , name , age])

//   return (
//     <>
      
//       <TextInput value={name} placeholder='Name'onChangeText={n=>setName(n)} />
//       <TextInput value={age} placeholder='Age'onChangeText={a=>setAge(a)} />
      
//       <Button title='Submit' onPress={submitHandler} />

//         {
//             arr.map((item, index)=>(

//                 <Text key={index}> Name:{item}</Text>
//                 // <Text key={index}>{item.age}</Text>
//             ))
//         }
//     </>
//   )
// }

// export default Users
