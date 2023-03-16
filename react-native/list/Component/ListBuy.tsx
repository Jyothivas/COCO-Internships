import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import axios from 'axios'

const url = `http://192.168.0.102:3000/data`

const ListBuy = () => {


  const [details, setDetails] = useState<any>([]);

  useEffect(() => {
    const getAPI = async () => {
      try {

        const { data: { listings: { data } } } = await axios.get(url);

        return setDetails(data);

      } catch (error) {
        console.error(error);
      }
    };
    getAPI();
  }, [])
  return (
    <View style={{ flex: 1 }} >
      <FlatList testID='flatList'
        data={details}

        renderItem={({ item }) => {

          return (
            <View>
              <Text style={{ fontSize: 15 }}>agent photo</Text>
              <FlatList
                testID='secondFlatlist'
                data={item.agents}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <Image
                        accessibilityHint='agent'
                        testID='agentImage'

                        style={{ height: 100, width: 100, marginTop: 5 }}
                        alt='agentPhotoImage'
                        source={{

                          uri: `https://cdn.uatr.view.com.au/images/listing/1000-w/${item.agentPhotoFileName}`

                        }}
                      />
                    </View>
                  )
                }}
              />


              <Text style={{ fontSize: 15 }}>House photo</Text>
              <Image
                testID='houseImage'
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
export { ListBuy, url };


