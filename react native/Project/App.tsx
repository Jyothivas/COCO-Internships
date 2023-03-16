import React, { useState } from 'react';
import {View, Text, Image, ScrollView, TextInput, Button} from 'react-native';
import UserData from './Component/UserData';
import UserForm from './Component/UserForm';
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import Example from './examplesPractice/Example';

type User={
  name: string,
  email: string,
}

const Stack = createNativeStackNavigator();

const App = (props: any) => {

  const [Users,setUser] = useState<User[]>([]);
  const navigationRef = useNavigationContainerRef();
  
  const gotoUserData = ()=>{
    navigationRef.navigate('User Data');
  }

  const handleAddUser = (name: string, email: string) => {
    setUser([...Users, { name, email }]);
    gotoUserData();
  };

  


  return (
    <NavigationContainer ref={navigationRef}> 
      <Stack.Navigator>
          <Stack.Screen
          name='User Data'
          options={({navigation}) => ({
            title: 'User List',
            headerRight: () => (
              <Button
                onPress={() =>
                  navigation.navigate('User Form')}
                title="Add User"
              />
            ),

          })}
          >{() => <UserData userData={Users}/>}
          </Stack.Screen>

          <Stack.Screen
          name='User Form'
          options={ {
            title: 'User Form'
          }}>
          {() => <UserForm onAddUser={handleAddUser} />}
        </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <UserForm onAddUser={handleAddUser}/>
    //   {/* <Example/> */}
    //   <UserData userData={Users} /> 
    // </View>
  )
};

export default App;

