import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { Form } from '../components/Form';
import FormList from '../components/FormList';

it('renders correctly', () => {
  renderer.create(<App />);
});

describe('App Component', () => {
  it('renders Form component', () => {
    const { getByTestId } = render(<Form/>);
    const form = getByTestId('userdetails');
    expect(form).toBeDefined();
  });
  it('renders FormList component', () => {
    const { getByTestId } = render(<FormList />);
    const formlist = getByTestId('card-details');
    expect(formlist).toBeDefined();
  });


});
  
