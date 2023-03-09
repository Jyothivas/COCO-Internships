import React, { useState } from 'react';
import FormList from './components/FormList';
import Form from './components/Form';
import { View } from 'react-native'

interface Appprops {  //this is for testcase active index change krke we can test

  index: number,

}
interface User {
  name: string,
  email: string
}

const App = (props: Appprops) => {
  const [activeIndex, setActivendex] = useState(props.index || 0) //when activeIndex=0 then form will show and when activeIndex=1 then formList will show

  const [Users, setUser] = useState<User[]>([]);

  const handleAddUser = (name: string, email: string) => {
    setUser([...Users, { name, email }]);
  };
  const changeIndex = (Index: number) => {
    setActivendex(Index)
  }

  return (
    <View testID='mainview' style={{flex:1}}>
      {
        activeIndex == 0 && <Form
          AddUser={handleAddUser}
          changeIndex={changeIndex}
        />


      }
      {
        activeIndex == 1 && <FormList
          UsersName={Users}
          changeIndex={changeIndex}
        />
      }
    </View>
  );
}

export default App;