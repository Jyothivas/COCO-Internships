import 'react-native';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../App';

// https://callstack.github.io/react-native-testing-library/docs/react-navigation



jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');


jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return jest.fn();
  },
}));

describe('App', () => {
  it('should render App component', async () => {
    const Users = [{ name: 'Manoranjan', email: 'mjena@mitaoe.ac.in' }]
    const { getByTestId } = render(<App />);

    await waitFor(() => getByTestId('table'));

  });

});
