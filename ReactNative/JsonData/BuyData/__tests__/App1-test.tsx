import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { render, act } from '@testing-library/react-native';
import App, { HomeScreenNavigationProp } from '../App';

describe('App', () => {
  it('navigates to ImageView screen', () => {
    const navigationRef = React.createRef<NavigationContainer>();

    const { getByText } = render(
      <NavigationContainer ref={navigationRef}>
        <App />
      </NavigationContainer>
    );

    // Navigate to the ImageView screen
    act(() => {
      const homeScreenNavigation = navigationRef.current?.navigate('Home') as HomeScreenNavigationProp;
      homeScreenNavigation.navigate('ImageView', { imageUri: 'https://example.com/image.jpg' });
    });

    // Check that the ImageView screen is shown with the correct image URI
    expect(getByText('https://example.com/image.jpg')).toBeDefined();
  });
});
