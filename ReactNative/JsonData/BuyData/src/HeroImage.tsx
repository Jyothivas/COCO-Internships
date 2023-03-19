import {Image,TouchableOpacity } from 'react-native'
import React from 'react'
interface heroimageprops{
    onpressImage:()=>void,
    HeroImage:string,
}
const HeroImage = ( props:heroimageprops) => {
  return (
    <TouchableOpacity
     testID='heroImagetouchable'
          style={{
            width: '50%',
          }}
          onPress={() => { props.onpressImage() }}>
          <Image
            style={{ height: 120, width: '100%', borderRadius: 10, marginTop: 5 }}
            source={{
              uri: 'https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + props.HeroImage.split("/")[2]
            }}
            testID='heroImage'
            
          />
        </TouchableOpacity>
  )
}

export default HeroImage

