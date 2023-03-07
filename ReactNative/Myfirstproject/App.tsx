import React from 'react'
import FormList from './components/FormList'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Form } from './components/Form';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
   
   
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName='Form'
      >
        <Stack.Screen name="FormList" component={FormList} />
        <Stack.Screen name="Form" component={Form} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App