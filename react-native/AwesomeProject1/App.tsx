
import React, {useState, useCallback} from 'react';
import {Alert, Modal,Button, StyleSheet,TextInput, Text, Pressable, View} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [groceryItem, setGroceryItem] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const addHandler = useCallback(() => {
    setItems([groceryItem, ...items]);
    setGroceryItem('');
    setModalVisible(!modalVisible)
  }, [groceryItem, items]);

  return (
    <View>
      <Text>Names {items.length}</Text>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Login</Text>
            {/* input field */}
            <TextInput
            style={[styles.inputBorder]}
        value={groceryItem}
        placeholder="Enter Name"
        onChangeText={text => setGroceryItem(text)}
      />
      <Button title='add' onPress={addHandler} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Add</Text>
      </Pressable>
      <Text style={styles.Names}>
      {items.map((item,index) => (
        <Text key={index}>{'\n'}{item}</Text>
      ))}
      </Text>
    </View>
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
