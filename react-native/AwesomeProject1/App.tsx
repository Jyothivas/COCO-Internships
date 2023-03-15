import React, { useState } from 'react';
import { Button } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Component/Home';
import { Login } from './Component/Login';


type User = {
  name: string,
  email: string,
}

const { Screen, Navigator } = createNativeStackNavigator();

const App = () => {

  const navigationRef: any = useNavigationContainerRef();


  const [users, setUser] = useState<User[]>([]);

  const handleAddUser = (name: string, email: string) => {

    setUser([...users, { name, email }]);
    navigationRef.navigate('List')

  };

  const HomeList = () => ({
    title: `Users : ${users.length}`,
    headerStyle: {
      backgroundColor: '#273469',
    },
    headerTintColor: '#EBF2FA',
    headerRight: () => (

      <Button
        onPress={() =>
          navigationRef.navigate('Form')}
        title="+"
      />
    ),
  })
  const LoginTitle = {
    title: 'Form'
    ,
  }
  const ScreenOption = {
    headerStyle: {
      backgroundColor: '#273469',

    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontSize: 25,
    }
  }
  return (
    <NavigationContainer ref={navigationRef}>

      <Navigator screenOptions={ScreenOption}>

        <Screen name='List' options={HomeList}>
          {() => <Home UserData={users} />}
        </Screen>

        <Screen name='Form' options={LoginTitle}>
          {() => <Login AddUser={handleAddUser} />}
        </Screen>

      </Navigator>

    </NavigationContainer>
  );
}

export default App;
