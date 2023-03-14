import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable } from 'react-native';

interface ChildProps {
    AddUser: (name: string, email: string) => void
    changeIndex: (Index: number) => void
}

const UserForm = (props: ChildProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const addingUser = () => {
        if (!name || !email) {
            return;
        }
        props.AddUser(name, email);
        setName('');
        setEmail('');
        props.changeIndex(1);
    };
    return (
        <View testID="user-form" style={style.container}>
            <View style={style.border}>
                <Text testID="name-test" style={style.text}>Name</Text>
                <TextInput
                    style={style.input}
                    placeholder="Enter your name"
                    onChangeText={name_ => setName(name_)}
                    value={name}
                />
                <Text testID="email-test" style={style.text}>Email</Text>
                <TextInput
                    style={style.input}
                    placeholder="Enter your email"
                    onChangeText={email_ => setEmail(email_)}
                    value={email}
                />
                <View style={style.fixToText}>
                    <TouchableOpacity style={style.button}
                        onPress={() => { props.changeIndex(1) }}
                    >
                        <Text>Cancel</Text>
                    </TouchableOpacity>

                    <Pressable onPress={addingUser} style={style.button1}>
                        <Text>Add</Text>
                    </Pressable>
                </View>


            </View>
        </View>
    );
};
export default UserForm;

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        borderWidth: 1,
        margin: 10,
    },
    border: {
        borderWidth: 1,
        padding: '10%',
        borderRadius: 7,
    },
    text: {

        color: 'black',
        fontSize: 23,
        fontWeight: 'bold',
    },
    input: {
        borderColor: 'gray',
        marginVertical: 10,
        padding: 5,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: '35%',
        borderRadius: 7,
        marginTop: 10,
    },
    button1: {
        alignItems: 'center',
        backgroundColor: 'skyblue',
        padding: 10,
        width: '35%',
        borderRadius: 7,
        marginTop: 10,

    },
});

