import React, { useState } from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import Jsondata from './Assests/listings-buy-data.json';


const App = () => {


  const [movidata] = useState(Jsondata.data.listings.data)

  return (
    <View style={{ flex: 1}}>
      <FlatList
        data={movidata.slice(0, 30)}

        renderItem={({ item }) => {

          return (
            <View style={{ width: '30%', alignSelf: 'center',}}>
              <Text style={{ fontSize: 15 }}>heroImage</Text>
              <Image
            
                style={{ height: 120, width: '50%' }}
                source={{
                  uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + item.heroImageUrl.split("/")[2]

                }}

              />
              <Text style={{ fontSize: 15 }}>agentPhotoImage</Text>
              {
                item.agents.map((agentItem: any, index: number) => {
                  return (

                    <Image
                      key={'agentPhotoImage' + index}
                      style={{ height: 120, width: '50%', marginTop: 5 }}
                      source={{
                        uri: 'https://cdn.uatr.view.com.au/images/listing/55-w/' + agentItem.agentPhotoFileName

                      }}
                    />

                  )
                })
              }

            </View>
          )

        
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      
    </View>


  )
}

export default App