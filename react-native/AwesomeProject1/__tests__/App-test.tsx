/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.s
import renderer from 'react-test-renderer';
import { cleanup, render,screen, fireEvent } from "@testing-library/react-native";
import GroceryShoppingList from '../Component/GroceryShoppingList';
import App1 from '../Component/App1';


test('App renders correctly', () => {
  render(<App />);
});

test('App Element is Adding in list',()=>{
  const {getByPlaceholderText, getByText, getAllByText, getByTestId,queryByTestId} = render(
    <App />);


    fireEvent.changeText(
      getByPlaceholderText('Enter Name'),
      'banana'
    );
    fireEvent.press(getByText('add'));
  
    const bananaElements = getAllByText('banana');
    // const appleElements = getAllByText('apple');
    // console.log(bananaElements)
    expect(bananaElements).toHaveLength(1); 
})

// test('hello text checking',()=>{
//   render(<App/>)
//   screen.getByText('hello')
  
// })
// test('image checking',()=>{
//   const {getByTestId}=render(<App/>)
  
//   const image = getByTestId('img')
//   expect(image.type).toBe('Image')
// })
// test('App1 Componenet rendering and text is displaying',()=>{

//   const { getByText } = render(<App1/>);

//   const text = getByText("hi,akshays");

//   expect(text.type).toBe("Text")
// })










