import 'react-native';
import React from 'react';
import App from '../App';
import { cleanup, render,screen, fireEvent } from "@testing-library/react-native";
import { Login } from '../Component/Login';


describe('LOGIN SCREENS ',()=>{

    const addHandler = jest.fn()

    test('Input Field and add Button working correctly ', () => {

       
        const { getByPlaceholderText, getByText} = render(<Login AddUser={addHandler} />);

        const nameInput = getByPlaceholderText('Enter name');
        const emailInput = getByPlaceholderText('Enter Email');
        const button = getByText('login');

        fireEvent.changeText(nameInput, 'test');
        fireEvent.changeText(emailInput, 'test@gmail.com');
        fireEvent.press(button)

        expect(addHandler).toHaveBeenCalledWith('test','test@gmail.com')

    });

})