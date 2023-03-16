import React, { FC } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface HomeCardprops {
  HeroImage: string,
  Description: string,
  AgentImage: []
  onpressImage: () => void
}
const HomeCard: FC<HomeCardprops> = (props) => {


  return (
    <View testID='homeCard' style={{ width: '95%', elevation: 10, backgroundColor: 'white', borderRadius: 10, alignSelf: 'center', marginTop: 5 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
        <TouchableOpacity
          style={{
            width: '50%'
          }}
          onPress={() => { props.onpressImage() }}>
          <Image
            style={{ height: 120, width: '100%', borderRadius: 10, marginTop: 5 }}
            source={{
              uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + props.HeroImage.split("/")[2]
            }}
          />
        </TouchableOpacity>

        <Text style={{ width: '45%', color: 'black', textAlign: 'right', fontWeight: '600' }}>
          {props.Description}
        </Text>
      </View>
      <View
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
              />

            );
          })
        }
      </View>

    </View>

  )
}

export default HomeCard
