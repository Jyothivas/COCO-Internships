/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

test('checking the App test',()=>{
  const { getByTestId }=render(<App/>);
  const var1=getByTestId('v1');
  expect(var1).toBeDefined();
})
