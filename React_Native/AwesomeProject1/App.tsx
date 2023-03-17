import React,{useState} from 'react';
import { Button } from 'react-native';
import { NavigationContainer, NavigationContainerRef, useNavigation,useNavigationContainerRef} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { List } from './Component/List';
import Form from './Component/Form';


type User ={
  name: string,
  email: string,
}

const Stack = createNativeStackNavigator();


const App=()=>{
 
  const [Users, setUser] = useState<User[]>([]);
  const navigationRef=useNavigationContainerRef();

  
  const handleAddUser = (name: string, email: string) => {
    setUser([...Users, { name, email }]);
    //List1();
  };
  
  // const List1=()=>{
  //    navigationRef.navigate('List');
  //  }

  return (
    <NavigationContainer //ref={navigationRef}>
    >
      <Stack.Navigator 
      
      >
        <Stack.Screen name='List'
        options={({navigation}) => ({
          headerLeft: () => (
            
            <Button               // Form button move to Form side.!     
              onPress={() => 
              navigation.navigate('Form')}
              title="Form" testID='a1'
            />
           
          ),
        })}
       >
         {(navigation) => <List navigation={navigation} userdata={Users}/>
          
         }
        
         
       </Stack.Screen>
       

       <Stack.Screen name='Form'
       
       options={{
        title:'Form'
        ,
       }}>
      
          {(props) => <Form {...props}  addUser={handleAddUser} />}
         </Stack.Screen>
       
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;

// import { View, Text } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View testID='a1'>
//       <Text>Hey Im from app component</Text>
//     </View>
//   )
// }

// export default App