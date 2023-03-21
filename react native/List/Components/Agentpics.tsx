import React from "react";
import { Image, Text, View } from "react-native";

type AgentPicsProps={
    HouseAgentPics: any
}


const Agentpics = (props: AgentPicsProps) =>{
    return(
        <View>
            
            <Image
                style={{height: 70, width: 70, marginTop:9 }}
                source={{
                    uri: `https://cdn.uatr.view.com.au/images/listing/1000-w/${props.HouseAgentPics.agents.agentPhotoFileName}`
                }}
            
            
            />

            
        </View>
    )
}

export default Agentpics;