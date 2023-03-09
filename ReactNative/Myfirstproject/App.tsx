import React, { useState } from 'react';
import FormList from './components/FormList';
import Form from './components/Form';
import { View } from 'react-native';

interface Appprops {  //this is for testcase active index changes then we can test it easily
  index: number,
}
interface User {
  name: string,
  email: string
}

const App = (props: Appprops) => {
  const [activeIndex, setActiveIndex] = useState(props.index || 0);//when activeindex 0 form wil show andwhen activeindex 1 then formlist will show

  const [Users, setUser] = useState<User[]>([]);

  const handleAddUser = (name: string, email: string) => {
    setUser([...Users, { name, email }]);
  };
  const changeIndex = (Index: number) => {
    setActiveIndex(Index);
  };

  return (
    <View testID='mainview' style={{ flex: 1 }}>
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
};
export default App;