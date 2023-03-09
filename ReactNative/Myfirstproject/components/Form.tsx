import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

interface ChildProps {
    AddUser: (name: string, email: string) => void;
    changeIndex: (Index: number) => void
}

const Form = (props: ChildProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const addingUser = () => {
        if (!name || !email) {
            return
        }
        props.AddUser(name, email);
        setName('');
        setEmail('');
        props.changeIndex(1)
    }
    return (
        <View testID='user-form' style={style.container}>
            <Text testID='name-test' style={style.text}>Name</Text>
            <TextInput
                style={style.input}
                placeholder='Enter your name'
                onChangeText={name_ => setName(name_)}
                value={name}
            />
            <Text testID='email-test' style={style.text}>Email</Text>
            <TextInput
                style={style.input}
                placeholder='Enter your email'
                onChangeText={email_ => setEmail(email_)}
                value={email}
            />
            <View style={style.btn}>
                <Button color={'grey'} title='Cancel' onPress={() => { props.changeIndex(1) }} />
                <Button title='Add' onPress={addingUser} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        borderWidth: 1,
        margin: 10,
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

export default Form;