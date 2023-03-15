import 'react-native';
import React from 'react';
import App from '../App';
import { render } from '@testing-library/react-native';


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const navigation = { navigate: () => { } }
jest.spyOn(navigation, 'navigate')


jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return jest.fn();
  },
}));


describe('App component', () => {

  test('App renders correctly', () => {

    const component = render(<App />);
    expect(component).toBeDefined()

  })

})





