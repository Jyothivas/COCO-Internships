import React, { FC } from 'react';
import { View,} from 'react-native';
import AgentImage from './AgentImage';
import HeroImage from './HeroImage';
import HouseDescription from './HouseDescription';

interface HomeCardprops {
  HeroImage: string,
  Description: string,
  AgentImage:object,
  onpressImage: () => void

}
const HomeCard: FC<HomeCardprops> = (props) => {


  return (
    <View testID='homeCard' style={{ width: '95%', elevation: 10, backgroundColor: 'white', borderRadius: 10, alignSelf: 'center', marginTop: 5 }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
        <HeroImage 
        onpressImage={props.onpressImage}
        HeroImage={props.HeroImage}
        />
        <HouseDescription 
        Description={props.Description}
        />
      </View>
     <AgentImage
     AgentImage={props.AgentImage}
     />

    </View>

  )
}

export default HomeCard
