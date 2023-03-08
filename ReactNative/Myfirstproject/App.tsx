import React, { useState } from 'react';
import FormList from './components/FormList';
import Form from './components/Form';
import {View} from 'react-native'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface Appprops{
  index:number,

}
interface User {
  name: string,
  email: string
}
// const Stack = createNativeStackNavigator();

const App = (props:Appprops) => {
  const [activeIndex,setActivendex]=useState(props.index || 0) //when activeIndex=0 then form will show and when activeIndex=1 then formList will show

  const [Users, setUser] = useState<User[]>([]);

  const handleAddUser = (name: string, email: string) => {
    setUser([...Users, { name, email }]);
  };
 const changeIndex=(Index:number)=>{
  setActivendex(Index)
 }
 
  return (
    <View testID='mainview'>
        {
          activeIndex==0 && <Form
          AddUser={handleAddUser}
          changeIndex={changeIndex}
          />


        }
        {
          activeIndex==1 && <FormList
          UsersName={Users}
          changeIndex={changeIndex}
          />
        }
    </View>
  );
}

export default App;