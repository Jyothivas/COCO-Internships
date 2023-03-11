import React, { useState } from 'react';
import { FlatList, Text, View, Image, ScrollView } from 'react-native';
import Jsondata from './Assests/listings-buy-data.json';
import { Dimensions } from 'react-native';

const width = Dimensions.get("window").width

const App = () => {


  const [movidata] = useState(Jsondata.data.listings.data)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={movidata.slice(0, 30)}

        renderItem={({ item }) => {

          return (
            <View style={{ width: '90%', alignSelf: 'center', }}>
              <Text style={{ fontSize: 15 }}>heroImage</Text>
              <Image

                style={{ height: 120, width: '80%' }}
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
                      style={{ height: 120, width: '100%', marginTop: 5 }}
                      source={{
                        uri: 'https://cdn.uatr.view.com.au/images/listing/55-w/' + agentItem.agentPhotoFileName

                      }}
                    />

                  )
                })
              }
              <Text> HouseImage</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}
                onScroll={e => {
                  const x = e.nativeEvent.contentOffset.x;
                  setActiveIndex(Number((x / width).toFixed(0)));

                }}
              >
                <View style={{ flexDirection: 'row', }}>
                  {
                    item.images.map((houseimg: any, index: number) => {

                      return (
                        <View style={{ width: width * 0.9, height: 150, marginLeft: 5 }}
                          key={'HouseImage' + index}
                        >
                          <Image

                            style={{ height: 150, width: '100%', marginTop: 5 }}
                            source={{
                              uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + houseimg.url.split("/")[2]

                            }}
                          />
                        </View>
                      )
                    })
                  }
                </View>

              </ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                {
                  item.images.map((houseimg: any, index: number) => {
                    return (
                      <View style={{
                        width: activeIndex == index ? 15 : 8,
                        height: activeIndex == index ? 10 : 8,
                        borderRadius: activeIndex == index ? 5 : 4,
                        backgroundColor: activeIndex == index ? 'green' : 'gray',
                        marginLeft: 5,
                        marginTop: 8
                      }}>

                      </View>
                    )
                  })
                }

              </View>
            </View>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />

    </View>


  )
}

export default App