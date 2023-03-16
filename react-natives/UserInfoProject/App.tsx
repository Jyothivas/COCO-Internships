import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native'

interface User {
  name: string,
  email: string
}

const Stack = createNativeStackNavigator();

const App = () => {

  const [Users, setUser] = useState<User[]>([]);

  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

  const handleAddUser = (name: string, email: string) => {
    setUser([...Users, { name, email }]);
    goToListView();
  };

  const goToListView = () => {
    navigationRef.navigate('User List');
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name='User List'
          options={({ navigation }) => ({
            title: 'User List',
            headerRight: () => (
              <Button
                onPress={() =>
                  navigation.navigate('User Form')}
                title="New User"
              />
            ),
          })}
        >
          {() => <UserList UserList={Users} />}
        </Stack.Screen>

        <Stack.Screen
          name='User Form'
          options={{
            title: 'User Form',
          }}>
          {() => <UserForm onAddUser={handleAddUser} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;