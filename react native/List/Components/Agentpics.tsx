import React from "react";
import { FlatList, Image, Text, View } from "react-native";

type AgentPicsProps={
    HouseAgentPics: any
}
// <Image
//                 style={{height: 70, width: 70, marginTop:9 }}
//                 source={{
//                     uri: `https://cdn.uatr.view.com.au/images/listing/1000-w/${props.HouseAgentPics.agents.agentPhotoFileName}`
//                 }}
            
            
//             />

const Agentpics = (props: AgentPicsProps) =>{
    return(
        <View style={{flex:1}}>
            <FlatList horizontal
                data={props.HouseAgentPics}
                renderItem={({ item,index }) => {
                    return (
                        <View style={{ flex: 1}}>
                            <Image
                                key={'agentPhotoImage' + index}
                                style={{height: 60, width: 60,margin:5, borderRadius: 40 }}
                                source={{
                                    uri: 'https://cdn.uatr.view.com.au/images/listing/1000-w/' + item.agentPhotoFileName
                                }}
                            />
                        </View>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default Agentpics;