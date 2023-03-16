import React from 'react'
import { Text, View } from 'react-native'
import { ListBuy } from './Component/ListBuy'
import Scroll from '../list/Component/ScrollView'

const App = () => {
  return (
    <View style={{ flex: 1 }}>

      <ListBuy />
    </View>
  )
}

export default App;