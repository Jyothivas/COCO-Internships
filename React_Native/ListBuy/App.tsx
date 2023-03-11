import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import List from './component/List';

const App = () => {
  

  return (
    <View testID='v1' style={{flex:1}}>
      <Text>
        we are rendering data through api
      </Text>
      <List />
    </View>
  )
}

export default App
