import React, { useState } from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import JsonData from '../listings-buy-data.json';



const ListBuy = () => {

  const jData = JsonData.data.listings.data;
  const [JsonFetchData] = useState(jData)

  return (
    <View style={{ flex: 1 }} >
      <FlatList testID='flatList'
        data={JsonFetchData}

        renderItem={({ item }) => {

          return (
            <View>
              <Text style={{ fontSize: 15 }}>Agents Photo</Text>
              {
                item.agents.map((agentItem: any, index: number) => {
                  return (

                    <Image
                      testID='agentImage'
                      key={'agentPhotoImage' + index}
                      style={{ height: 100, width: 100, marginTop: 5 }}
                      alt='agentPhotoImage'
                      source={{

                        uri: `https://cdn.uatr.view.com.au/images/listing/1000-w/${agentItem.agentPhotoFileName}`

                      }}
                    />

                  )
                })
              }
              <Text style={{ fontSize: 15 }}>Hero Image</Text>
              <Image
                testID='heroImage'
                style={{ height: 300, width: 500, }}
                alt='heroImage'
                source={{
                  uri: `https://cdn.uatr.view.com.au/images/listing/slug/2000-min/${item.heroImageUrl.split('/')[2]}`

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

export default ListBuy;