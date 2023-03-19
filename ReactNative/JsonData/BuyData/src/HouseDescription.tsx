import { Text } from 'react-native'
import React from 'react'

interface descriptionprops{
  Description:string,
}
const HouseDescription = (props:descriptionprops) => {
  return (
    <Text 
    testID='housetext'
    style={{ width: '45%', color: 'black', textAlign: 'right', fontWeight: '600' }}>
          {props.Description}
        </Text>
  )
}

export default HouseDescription