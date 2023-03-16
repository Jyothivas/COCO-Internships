import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
type propsType = PropsWithChildren<{
    msg: string;
    count: number;
    // children: JSX.Element;

}>;
//whatever u are providing as a property u should write its type
//
const PropsFun = (props: propsType) => {
    return (
        <View>
            <Text>{props.msg}</Text>
            <Text>{props.count}</Text>
            {props.children}
        </View>
    )
}

export default PropsFun

const styles = StyleSheet.create({})