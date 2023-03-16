import { View, ScrollView, Dimensions, Image } from 'react-native';
import React, { FC, useState } from 'react';
interface imageviewprops {
    route: any,

}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const ImageView: FC<imageviewprops> = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}
                onScroll={e => {
                    const x = e.nativeEvent.contentOffset.x;
                    setActiveIndex(Number((x / width).toFixed(0)));

                }}


            >
                <View style={{ flexDirection: 'row' }}>
                    {
                        props.route.params.images.map((houseimg: any, houseindex: number) => {

                            return (
                                <View style={{ width: width * 1, height: height * 0.9 }}
                                    key={'HouseImage' + houseindex}>
                                    <Image
                                        style={{ height: height * 0.9, width: '100%', marginTop: 5 }}
                                        source={{
                                            uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + houseimg.url.split("/")[2]

                                        }}


                                    />
                                </View>
                            );
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

                    props.route.params.images.map((activeitem: any, imageindex: number) => {
                        return (
                            <View
                                key={'activeitem' + imageindex}
                                style={{
                                    width: activeIndex == imageindex ? 16 : 8,
                                    height: activeIndex == imageindex ? 10 : 8,
                                    borderRadius: activeIndex == imageindex ? 5 : 4,
                                    backgroundColor: activeIndex == imageindex ? 'red' : 'gray',
                                    marginLeft: 5,
                                    marginTop: 8,
                                }}
                            />
                        );
                    })
                }

            </View>
        </View>
    )
}

export default ImageView