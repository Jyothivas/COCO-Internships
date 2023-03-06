import React, {useState, useCallback} from 'react';
import {Alert, Modal,Button,ScrollView, StyleSheet,TextInput, Text, Pressable, View} from 'react-native';
import App1 from './Component/App1';
import TextInputExample from './Component/TextInputExample';
import modal from './Component/modal';


const App = () => {


  return (
    <ScrollView>
      <View style={styles.navbar}>
        
      <View>
      <Text testID='nameText' style={styles.NameTitle}>Names : {items.length}</Text>
      </View>
      <View style={styles.addButton}>
      <Pressable
      testID='addButtonofModal'
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>+</Text>
      </Pressable>
      </View>
      </View>
      
     
      <Text style={styles.Names}>
      {items.map((item,index) => (
       <View>
         <Text key={index} >{'\n'}Name  : {item.name}</Text>
         <Text key={index} >{'\n'}Email : {item.email}</Text>
       </View>
       
        
      ))}
      </Text>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color:'black'
  },
  inputBorder:{
    borderColor: "gray",
    margin:15,
    borderWidth: 1,
    backgroundColor:'grey',
    color: 'black',
    borderRadius: 20,
    padding: 10,
  },
  NameTitle:{
    color: 'white',
    fontWeight: 'bold',
    
    fontSize:50,
  },
  Names:{
    color: 'white',
    fontWeight: 'bold',
   textAlign:'center',
    fontSize:50,
    
  },
  navbar:{
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems:'center' ,
    padding:10,

  },
  addButton:{
      padding:15,
      
  },
});

export default App;
// import React from 'react';
// import {Text, View, Image} from 'react-native';
// import App1 from './Component/App1';
// import GroceryShoppingList from './Component/GroceryShoppingList';

// type CatProps = {
//   name: string;
// };


// const Demo = (props:CatProps)=>{

//   return (
//     <View>
//       <Text>
//         Hi my name is {props.name}
//       </Text>
//     </View>
//   )

// }


// let name='Akshay'
// const App = () => {
//   return (
//     <View>
//       <Text>App Working</Text>
//       {/* <Text>hello abcd</Text>
//       <Demo name='akshay'/>
//       <Demo name='abc'/>
//       <Demo name='hghg'/>

//       <Image testID='img' source={{
//         uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
//       }}   style={{width: 200, height: 200}}/>
//     <GroceryShoppingList/>
//     <App1/> */}
   
//     </View >
//   );
// };

// export default App;

// // import React from 'react'
// // import { View } from 'react-native/types'
// // import App1 from './Component/App1'

// // const App = () => {
// //   return (
// //     <View>
// //       <App1/>
// //     </View>
// //   )
// // }

// // export default App
