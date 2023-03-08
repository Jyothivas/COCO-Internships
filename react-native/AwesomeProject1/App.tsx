import React,{useState} from 'react';
import { View, Text,Button, ScrollView,StyleSheet } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Component/Home';
import { Login } from './Component/Login';


interface User {
  name: string,
  email: string
}
const Stack = createNativeStackNavigator();


const App=()=>{
 
  const [Users, setUser] = useState<User[]>([]);

  const handleAddUser = (name: string, email: string) => {
    setUser([...Users, { name, email }]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle:{
          backgroundColor:'blue',
         
        },
        headerTintColor:'white',
       headerTitleStyle:{
          fontSize:25,
        }
       }}>
        <Stack.Screen name='Home'
        options={({ navigation }) => ({
          title: `Names : ${Users.length}`,
          headerStyle: {
            backgroundColor: '#273469',
          },
          headerTintColor: '#EBF2FA',
          headerRight: () => (
            
            <Button                // a button in the header!     
              onPress={() => 
              navigation.navigate('Login')}
              title="+"
            />
          ),})}
       >
         {(navigation) => <Home navigation={navigation} UserData={Users} />}
       </Stack.Screen>

       <Stack.Screen name='Login'
       
       options={{
        title:'Login_Screen'
        ,
       }}>
      
          {(navigation) => <Login navigation={navigation}  AddUser={handleAddUser} />}
         </Stack.Screen>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
