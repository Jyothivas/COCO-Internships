import 'react-native';
import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import App from '../App';

// https://callstack.github.io/react-native-testing-library/docs/react-navigation


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const navigation = { navigate: () => { } }
jest.spyOn(navigation, 'navigate')


jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return jest.fn();
  },
}));

describe('App Component', () => {

  it('should render App component', async () => {

    const { getByTestId } = render(<App />);
    await waitFor(() => getByTestId('table'));

  });

  it('UserData component render correctly', () => {

    const { getByText } = render(<App />);

    const navigateFormButton = getByText('New User');
    expect(navigateFormButton).toBeDefined();

  });

  it('when press New User button then navigate to the UserForm Component', async () => {

    const { getByText, findByTestId } = render(<App />);

    const navigateToFormButton = await getByText('New User');
    const formComponent = findByTestId('user-form');

    fireEvent.press(navigateToFormButton);

    expect(formComponent).toBeDefined();

  });





});