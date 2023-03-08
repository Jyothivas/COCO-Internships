import React from "react";
import CustomerForm from "../component/CustomerForm";
import {fireEvent, render} from '@testing-library/react-native';

test('The testing Name ',()=>{
    const {getByTestId}=render(<CustomerForm addUser={()=> console.log('hello')}/>);

    const name1=getByTestId('user-name');
    expect(name1).toBeDefined();
})
test('The testing email',()=>{
    const {getByTestId}=render(<CustomerForm addUser={()=> console.log('test@1')}/>);

    const email=getByTestId('user-mail');
    expect(email).toBeDefined();
})
test('Testing Button',()=>{
    const {getByTestId}=render(<CustomerForm addUser={()=>console.log('test')}/>);
    const btn=getByTestId('btn');
    fireEvent.press(btn);
    expect(1).toBe(1);
})