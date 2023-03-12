import React, { useState, FC } from 'react';
import { FlatList, Text, View, Image, ScrollView } from 'react-native';
import Jsondata from './Assests/listings-buy-data.json';
import { Dimensions } from 'react-native';

interface movidataprops {
  movidata: any
}
const width = Dimensions.get('window').width;

const App: FC<movidataprops> = (props) => {


  const [movidata] = useState(props.movidata || Jsondata.data.listings.data);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={movidata.slice(0, 30)}
        ListEmptyComponent={<Text>No data available</Text>}

        renderItem={({ item, index }) => {

          return (
            <View style={{ width: '90%', alignSelf: 'center' }}>
              <Text style={{ fontSize: 15 }} testID="hero-image-text" >heroImage</Text>
              <Image

                style={{ height: 120, width: '80%' }}
                source={{
                  uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + item.heroImageUrl.split("/")[2]

                }}
                testID={'heroImage' + index}

              />
              <Text style={{ fontSize: 15 }} testID="agent-image-text">agentPhotoImage</Text>
              {
                item.agents.map((agentItem: any, agentindex: number) => {
                  return (

                    <Image

                      key={'agentPhotoImage' + agentindex}
                      style={{ height: 120, width: '100%', marginTop: 5 }}
                      source={{
                        uri: 'https://cdn.uatr.view.com.au/images/listing/55-w/' + agentItem.agentPhotoFileName

                      }}
                      testID={'agentPhotoImage' + agentindex + index}
                    />

                  );
                })
              }
              <Text testID="house-image-text"> HouseImage</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}
                onScroll={e => {
                  const x = e.nativeEvent.contentOffset.x;
                  setActiveIndex(Number((x / width).toFixed(0)));

                }}

                testID={'houseImagesScrollView' + index}
              >
                <View style={{ flexDirection: 'row' }}>
                  {
                    item.images.map((houseimg: any, houseindex: number) => {

                      return (
                        <View style={{ width: width * 0.9, height: 150, marginLeft: 5 }}
                          key={'HouseImage' + houseindex}>
                          <Image
                            style={{ height: 150, width: '100%', marginTop: 5 }}
                            source={{
                              uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + houseimg.url.split("/")[2]

                            }}
                            testID={'houseImage' + houseindex + index}

                          />
                        </View>
                      )
                    })
                  }
                </View>

              </ScrollView>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}

              >
                {

                  item.images.map(() => {
                    return (
                      <View style={{
                        width: activeIndex == index ? 15 : 8,
                        height: activeIndex == index ? 10 : 8,
                        borderRadius: activeIndex == index ? 5 : 4,
                        backgroundColor: activeIndex == index ? 'green' : 'gray',
                        marginLeft: 5,
                        marginTop: 8,
                      }}
                      />
                    );
                  })
                }

              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />

    </View>


  );
};

export default App