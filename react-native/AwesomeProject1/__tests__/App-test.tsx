import 'react-native';
import React from 'react';
import App from '../App';


import { cleanup, render,screen, fireEvent } from "@testing-library/react-native";
import { Login } from '../Component/Login';
import { Home } from '../Component/Home';


test('App renders correctly', () => {
  render(<App />);
});



