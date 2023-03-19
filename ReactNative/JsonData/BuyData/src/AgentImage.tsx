import { Image,View } from 'react-native'
import React from 'react'
interface agentprops{
    AgentImage:[],

}
const AgentImage = (props:agentprops) => {
  return (
    <View
        testID='agentImagecontainer'
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 10,
          marginTop: 5,

        }}
      >
        {
          props.AgentImage.map((agentItem: any, agentindex: number) => {
            return (

              <Image

                key={'agentPhotoImage' + agentindex}
                style={{ height: 60, width: 60, marginTop: 5, marginLeft: '3%', borderRadius: 10 }}
                source={{
                  uri: 'https://cdn.uatr.view.com.au/images/listing/55-w/' + agentItem.agentPhotoFileName,

                }}
                testID={"agentimage"+agentindex}
              />

            );
          })
        }
      </View> 
  )
}

export default AgentImage

