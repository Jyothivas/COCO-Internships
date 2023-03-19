import React, { useEffect,useState, FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import HomeCard from './HomeCard';


interface homepropstype {
    navigation: any,
    housedata ?:any
}

const Home: FC<homepropstype> = (props) => {
const [HouseData, sethousedata] = useState(props.housedata || []);

const getApidata=async()=>{
    try{
        const url="http://192.168.0.101:3000/data"
        let result=await fetch(url, {method:"GET"})
        let apiresult =await result.json();
       
        sethousedata(apiresult.listings.data)
    }
    catch(error){
        
    }
}
useEffect(()=>{
    getApidata();
},[])





    return (
        <View style={{ flex: 1 }}>
            <FlatList
            testID='flatList'
                data={HouseData}
                ListEmptyComponent={<Text>No data available</Text>}

                renderItem={({ item}) => {

                    return (
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <HomeCard

                                HeroImage={item.heroImageUrl}
                                Description={item.bathrooms + ' bathrooms,' + item.bedrooms + ' bedrooms for sale in:' + item.streetAddress}
                                AgentImage={item.agents}
                                onpressImage={() => {
                                    props.navigation.navigate('ImageView', {
                                        images: item.images,
                                    });
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