import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';




const UserForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const addUser = () => {
        if (!name || !email) {
            return;
        }


    }


    return (
        <View testID='user-form' style={style.container}>
            <Text testID='name-test' style={style.text}>Name</Text>
            <TextInput
                placeholder='Enter your name'
                style={style.input}
                onChangeText={name => setName(name)}
                value={name}
            />
            <Text testID='email-test' style={style.text}>Email</Text>
            <TextInput
                placeholder='Enter your email'
                style={style.input}
                onChangeText={email => setEmail(email)}
                value={email}
            />
            <View style={style.btn}>
                <Button color={'grey'} title='Cancel' />
                <Button title='Add' onPress={addUser} />
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
    },
    text: {
        fontSize: 22,
        color: 'white'
    },
    input: {
        borderColor: 'white',
        borderBottomWidth: 2,
        marginVertical: 10,
        padding: 5,
        fontSize: 20,
    },
    btn: {
        top: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})
export default UserForm;