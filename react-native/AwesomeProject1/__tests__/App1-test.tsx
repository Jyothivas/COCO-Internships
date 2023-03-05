
import 'react-native';
import React from 'react';
import App1 from '../Component/App1';

// Note: test renderer must be required after react-native.s
import renderer from 'react-test-renderer';
import { cleanup, render,screen, fireEvent } from "@testing-library/react-native";
import GroceryShoppingList from '../Component/GroceryShoppingList';


test('App1 renders correctly', () => {
  renderer.create(<App1 />);
});

test('hello text checking',()=>{
    render(<App1 />);
 const test= screen.getByText('hi,akshay')
})