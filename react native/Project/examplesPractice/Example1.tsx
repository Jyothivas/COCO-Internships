import { Text, View } from "react-native";
import React from "react";

type msgProps = {
    msg: string;
  };

const Example1 = (props: msgProps) => {
    return(
        <View>
            <Text style = {{fontSize: 50}}> {props.msg} </Text>
        </View>
    )
}

export default Example1;