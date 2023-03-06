import React, {useState, useCallback} from 'react';
import {Alert, Modal,Button,ScrollView, StyleSheet,TextInput, Text, Pressable, View} from 'react-native';

interface User{
  name:string,
  email:string,
}

const modal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [items, setItems] = useState<User[]>([]);

  
  const addHandler = useCallback(() => {
    setItems([...items,{name,email}]);
    setName('');
    setEmail('');
    setModalVisible(!modalVisible)
  }, [name,email, items]);


  return (
    <>
      <Modal testID='modalForm'
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
        value={name}
        data-testID='AddName'
        placeholder="Enter Name"
        onChangeText={name => setName(name)}
      />
            <TextInput
            style={[styles.inputBorder]}
        value={email}
        data-testID='AddEmail'
        placeholder="Enter Email"
        onChangeText={e => setEmail(e)}
      />
      <Pressable testID='addElement' onPress={addHandler}>
        <Text>Add</Text>
      </Pressable>
      <Button  title='add' onPress={addHandler} />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            
          </View>
        </View>
      </Modal>
    </>
  )
}

export default modal;




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
