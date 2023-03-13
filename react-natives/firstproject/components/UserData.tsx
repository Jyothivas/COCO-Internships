import React from 'react'
import { Text, TextInput, View } from 'react-native';

function UserData() {
  return (
    <View testID='user-data'>
      <Text>Name</Text>
      <TextInput
        placeholder='Enter your name'
      />
    </View>
  )
}

export default UserData;