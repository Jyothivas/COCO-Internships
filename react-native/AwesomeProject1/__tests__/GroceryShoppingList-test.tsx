
import 'react-native';
import React from 'react';


import { cleanup, render, fireEvent } from "@testing-library/react-native";
import GroceryShoppingList from '../Component/GroceryShoppingList';

test('given empty GroceryShoppingList, user can add an item to it', () => {
    const {getByPlaceholderText, getByText, getAllByText} = render(
      <GroceryShoppingList />,
    );
  
    fireEvent.changeText(
      getByPlaceholderText('Enter grocery item'),
      'banana','apple'
    );
    fireEvent.press(getByText('Add the item to list'));
  
    const bananaElements = getAllByText('banana');
    // const appleElements = getAllByText('apple');
    // console.log(bananaElements)
    expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list
    // expect(appleElements).toHaveLength(2); // expect 'banana' to be on the list
  });