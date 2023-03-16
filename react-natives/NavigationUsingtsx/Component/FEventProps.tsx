import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
//=()=> bass onclick hee jaataa
//remember these function is declared in app componenet and we are passing these event to the property
type propsType = {
    add: () => void
}


// very important
//remember these function is declared in app componenet and we are passing these event to the property and we are calling in the functional component

const FEventProps = (props: propsType) => {
    return (
        <View style={styles.container}>
            <Button title="Show add Events" color="green" onPress={props.add} />
        </View>

    )
}

//lecture 14

export default FEventProps

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    }
})