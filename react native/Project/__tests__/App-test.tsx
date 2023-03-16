import 'react-native';
import React from 'react';
import App from '../App';
import { fireEvent, render, waitFor } from '@testing-library/react-native';



jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const navigation = { navigate: () => { } }
jest.spyOn(navigation, 'navigate')


jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return jest.fn();
  },
}));

describe('Component-App', () => {

  it('should render App component', async () => {

    const { getByTestId } = render(<App />);
    await waitFor(() => getByTestId('table'));

  });

  it('UserData component renders', () => {

    const { getByText } = render(<App />);

    const navigateToForm = getByText('Add User');
    expect(navigateToForm).toBeDefined();

  });

  it('when user presses Add User button then navigate to the UserForm Component', async () => {

    const { getByText, findByTestId } = render(<App />);

    const NavigateToForm = await getByText('Add User');
    const form = findByTestId('user-form');

    fireEvent.press(NavigateToForm);

    expect(form).toBeDefined();

  });

  
});
