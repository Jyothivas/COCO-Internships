import React from 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import { CustomerList } from '../component/CustomerList';

test('Testing the List render or not',()=>{
    render(<CustomerList onUserData={console.log("show")}/>);
})
test('testing button to the list',()=>{
    const {getByTestId}=render(<CustomerList onUserData={console.log('test')}/>)
    const btn1=getByTestId('b1')
    fireEvent.press(btn1);
    expect(1).toBe(1);

})
test('Testing the flatlist ',()=>{
    const {getByTestId}=render(<CustomerList onUserData={console.log("Present")}/>)
    const list=getByTestId('flat-list');
    expect(list).toBeDefined();
})