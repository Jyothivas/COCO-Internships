import React, { useState } from 'react';
import UserData from './components/UserData';
import UserForm from './components/UserForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        <Stack.Screen name="User Data">
          {(props) => <UserData {...props} UserData={Users} />}
        </Stack.Screen>
        <Stack.Screen name="User Form">
          {(props) => <UserForm {...props} onAddUser={handleAddUser} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
