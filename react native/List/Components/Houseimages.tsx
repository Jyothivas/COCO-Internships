import React from 'react';
import { ScrollView, StyleSheet, View, Dimensions, Image } from 'react-native';

type houseImagesProp = {
    route: any
}

const Houseimages = (props: houseImagesProp) => {
    const { height, width } = Dimensions.get('window');
    return(
        <View style={style.images}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                props.route.params?.images.map((houseimg: any, index: number) => {
                    return (
                        <View
                            style={{ width: width, height: height / 2, justifyContent: 'center', alignItems: 'center' }}
                            key={'HouseImage' + index} >
                            <Image
                                style={{ width: "95%", height: '100%' }}
                                source={{
                                    uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + houseimg.url.split("/")[2]
                                }}
                            />
                        </View>
                    );
                })
            }
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    images: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }
})
export default Houseimages;
