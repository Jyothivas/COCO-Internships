import React from 'react';
import { render } from '@testing-library/react-native';

import App from '../App';

describe('App', () => {

  it('should render the HomeScreen by default', () => {
    const { getByText } = render(<App />);
    expect(getByText('Home')).not.toBeNull();
  });
});