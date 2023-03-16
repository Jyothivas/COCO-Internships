import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

const Scroll = () => {

    const [details, setDetails] = useState<any>([]);

    const getAPI = async () => {
        try {

            const url = `http://192.168.0.102:3000/data`
            const response = await fetch(url);
            const result = await response.json();
            const jObject = result.listings.data;
            setDetails(jObject)

        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getAPI();
    }, [])

    return (
        <ScrollView style={{ flex: 1 }}>
            {
                details.map((item: any, index: number) => {
                    return (
                        <View key={index + 1}>
                            <Text>Agent Photo</Text>
                            {
                                item.agents.map((agentItem: any, index: number) => {
                                    return (

                                        <Image
                                            testID='agentImage'
                                            key={'agentPhotoImage' + index + 1}
                                            style={{ height: 100, width: 100, marginTop: 5 }}
                                            alt='agentPhotoImage'
                                            source={{

                                                uri: `https://cdn.uatr.view.com.au/images/listing/1000-w/${agentItem.agentPhotoFileName}`

                                            }}
                                        />

                                    )
                                })
                            }

                        </View>

                    )
                })
            }
        </ScrollView>
    )
}

export default Scroll;