import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

interface ChildProps{
    onAddUser: (name: string, email: string) => void
}


const UserForm = (props: ChildProps) => {
    
    const[name, setName]=useState("");
    const[email,setEmail]=useState("");

    
    const addingUser = () => {
        if(!name || !email)
        {
            return;
        }
        props.onAddUser(name,email);
        setName('');
        setEmail('');
}
   

return (
    <View testID='user-form' style={style.container}>
        <Text testID='name-test' style={style.text}>Name</Text>
        <TextInput 
            placeholder='Enter your name' 
            placeholderTextColor= 'black'
            style={style.input}
            value={name}
            onChangeText={name=> setName(name)}
        />
        {/* <Text>{name}</Text> */}
        <Text testID='email-test' style={style.text}>Email</Text>  
        <TextInput 
            placeholder='Enter your email' 
            placeholderTextColor= 'black'
            style={style.input} 
            onChangeText={email=> setEmail(email)}
            value={email}
        />
        <View style={style.btn}>
            <Button color={'grey'} title='Cancel' />
            <Button title='Add' onPress={addingUser}/>
        </View>
    </View>
  );
};

const style = StyleSheet.create({
    container: {
        top: 20,
        padding: 25,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20
    },
    text: {
        fontSize: 22,
        color: 'black'
        
    },
    
        
        
    
    input: {
        borderColor: 'grey',
        borderBottomWidth: 2,
        marginVertical: 10,
        padding: 5,
        fontSize: 18,
        color: 'black',
        
    
    },
    btn: {
        top: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})
export default UserForm;

