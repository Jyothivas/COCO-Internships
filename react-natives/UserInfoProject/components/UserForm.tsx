import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

interface ChildProps {
    onAddUser: (name: string, email: string) => void;
}

const UserForm = (props: ChildProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const addingUser = () => {
        if (!name || !email) {
            return
        }
        props.onAddUser(name, email);
        setName('');
        setEmail('');
    }
    return (
        <View testID='user-form' style={style.container}>
            <Text testID='name-test' style={style.text}>Name</Text>
            <TextInput
                style={style.input}
                placeholder='Enter your name'
                onChangeText={name => setName(name)}
                value={name}
            />
            <Text testID='email-test' style={style.text}>Email</Text>
            <TextInput
                style={style.input}
                placeholder='Enter your email'
                onChangeText={email => setEmail(email)}
                value={email}
            />
            <View style={style.btn}>
                <Button color={'grey'} title='Cancel' />
                <Button title='Add' onPress={addingUser} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        top: 20,
        padding: 25,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
    },
    text: {
        fontSize: 22,
        color: 'black'
    },
    input: {
        borderColor: 'gray',
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