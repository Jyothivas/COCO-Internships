import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { View } from 'react-native';

interface Appprops {
  index: number,
}
interface User {
  name: string,
  email: string
}

const App = (props: Appprops) => {
  const [activeIndex, setActiveIndex] = useState(props.index || 0);

  const [Users, setUser] = useState<User[]>([]);

  const handleAddUser = (name: string, email: string) => {
    setUser([...Users, { name, email }]);
  };
  const changeIndex = (Index: number) => {
    setActiveIndex(Index);
  };

  return (
    <View testID="mainview" style={{ flex: 1 }}>
      {
        activeIndex == 0 && <UserForm
          AddUser={handleAddUser}
          changeIndex={changeIndex}
        />
      }
      {
        activeIndex == 1 && <UserList
          UsersName={Users}
          changeIndex={changeIndex}
        />
      }
    </View>
  );
};
export default App;
