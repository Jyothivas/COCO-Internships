import React, { useState } from 'react';
import UserData from './components/UserData';
import UserForm from './components/UserForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native'

interface User {
  name: string,
  email: string
}

const Stack = createNativeStackNavigator();

const App = () => {

  const [Users, setUser] = useState<User[]>([]);

  const handleAddUser = (name: string, email: string) => {
    setUser([...Users, { name, email }]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='User Data'
          options={({ navigation }) => ({
            title: 'User Data',
            headerRight: () => (
              <Button
                onPress={() =>
                  navigation.navigate('User Form')}
                title="New User"
              />
            ),
          })}
        >
          {() => <UserData UserData={Users} />}
        </Stack.Screen>

        <Stack.Screen
          name='User Form'
          options={{
            title: 'User Form',
          }}>
          {(props) => <UserForm {...props} onAddUser={handleAddUser} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
