import React, { useState, FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import Jsondata from '../Assests/listings-buy-data.json';
import HomeCard from './HomeCard';

interface homepropstype {
    navigation: any
}

const Home: FC<homepropstype> = (props) => {


    const [HouseData] = useState(Jsondata.data.listings.data);


    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={HouseData}
                ListEmptyComponent={<Text>No data available</Text>}//no need

                renderItem={({ item, index }) => {

                    return (
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <HomeCard
                                HeroImage={item.heroImageUrl}
                                Description={item.bathrooms + " bathrooms," + item.bedrooms + " bedrooms for sale in:" + item.streetAddress}
                                AgentImage={item.agents}
                                onpressImage={() => {
                                    props.navigation.navigate("ImageView", {
                                        images: item.images
                                    })
                                }}
                            />
                        </View>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />

        </View>


    );
};

export default Home