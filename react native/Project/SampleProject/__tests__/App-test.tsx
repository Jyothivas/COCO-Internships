import 'react-native';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../App';

// https://callstack.github.io/react-native-testing-library/docs/react-navigation



jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const navigation ={navigate:()=>{}}
        jest.spyOn(navigation,'navigate')


jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return jest.fn();
  },
}));

describe('App', () => {
  it('should render App component', async () => {
    const Users =[{name:'karan',email:'karan@gmail.com'}]
    const { getByTestId} = render(<App />);

    await waitFor(() => getByTestId('table'));

  }); 

  it('UserData component render correctly', () => {
    const { getByText } = render(<App />);

    const navigateFormScreenButton = getByText('New User');
    expect(navigateFormScreenButton).toBeDefined();

});

  it('should navigate to the user form screen when the "Create New User" button is pressed', () => {
        
    const { getByText } = render(<App />);
    const createNewUserButton = getByText('Create New User');

    fireEvent.press(createNewUserButton);

    expect(navigation.navigate).toHaveBeenCalledWith('User Form');
    });

});
