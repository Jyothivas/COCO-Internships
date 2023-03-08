import * as React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { CustomerList } from './component/CustomerList';

const stack=createNativeStackNavigator();

type Parentprops= {
  name:string,
  email:string
}

export default function App() {
  return (
    <View>
      <Text>
        
      </Text>
    </View>
  );
}