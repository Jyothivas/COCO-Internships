import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Image } from 'react-native';
import Data from '../listings-buy-data.json';
const List = () => {

    const result = Data.data.listings.data;  //storing the value in result variable
    const [getData] = useState(result);
    console.log(`https://cdn.uatr.view.com.au/images/listing/5000-w/${result.heroImageUrl}`)

    // const getApiData = async () => {

    //     let url = Data;
    //     const result=await url.data.listings.data;
    //     const result1=await url.data.listings.data[0].agents[0].agentPhotoFileName;

    //     console.log(`https://cdn.uatr.view.com.au/images/listing/5000-w/${result.heroImageUrl}`)
    //     //console.log(`${result.agentPhotoFileName}`)
    //     console.log(`https://cdn.uatr.view.com.au/images/listing/5000-w/${result1}`)
    // }
    // useEffect(() => {
    //     getApiData()
    // }, [])
    return (

        <View  style={{ flex: 1 }}>

            <Image style={{ height: 50, width: 100 }} testID='i3' source={{
                uri: `https://cdn.uatr.view.com.au/images/listing/5000-w/pics/307/14441307-1-3536325.jpg`
            }} />

            <FlatList testID='f1'
                data={
                    getData
                }
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text>HeroImageURL</Text>
                            <Image testID='i1' style={{ height: 100, width: 100 }} source={{
                                uri: `https://cdn.uatr.view.com.au/images/listing/slug/1000-min/${item.heroImageUrl.split('/')[2]}`
                            }}
                            />

                            <Text style={{ fontSize: 15 }}>AgentPhotoImage</Text>
                            {
                                item.agents.map((agentItem: any, index: number) => {  //traverse inside index
                                    return (
                                        <Image key={'agentPhotoImage' + index}
                                            testID="i4"
                                            style={{ height: 100, width: 150 }}
                                            source={{
                                                uri: `https://cdn.uatr.view.com.au/images/listing/55-w/${agentItem.agentPhotoFileName}`
                                            }}

                                        />
                                    )
                                })
                            }
                        </View>
                    )
                }}



            />

        </View>
    )
}

export default List
