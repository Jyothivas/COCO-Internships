import UserForm from "../Component/UserForm";
import { fireEvent, render } from '@testing-library/react-native';
import React from "react";

describe('Component-UserForm', ()=>{
    const handleAddUserData = jest.fn();

    it('UserForm component is defined', () => {
        expect(UserForm).toBeDefined();
    });

    it('UserForm component renders', () => {
        const { getByTestId, getByText, getByPlaceholderText } = render(<UserForm onAddUser={handleAddUserData}/>)

        const component = getByTestId('user-form');
        expect(component).toBeDefined();

        const nameText = getByTestId('name-test');
        expect(nameText).toBeDefined();

        const nameInputData = getByPlaceholderText('Enter your name');
        expect(nameInputData).toBeDefined();

        const emailText = getByTestId('email-test');
        expect(emailText).toBeDefined();

        const emailInputData = getByPlaceholderText('Enter your email');
        expect(emailInputData).toBeDefined();

        const addButton = getByText('Add');
        expect(addButton).toBeDefined();

        const cancelButton = getByText('Cancel');
        expect(cancelButton).toBeDefined();

    });

    it('when add button is pressed with name and email',()=>{

    const {getByPlaceholderText, getByText} = render(<UserForm onAddUser={handleAddUserData}/>);

    const nameInputData = getByPlaceholderText("Enter your name");
    const emailInputData = getByPlaceholderText("Enter your email");
    const addButton = getByText('Add');

    fireEvent.changeText(nameInputData,'divyanshu');
    fireEvent.changeText(emailInputData,'divyanshu@gmail.com');
    fireEvent.press(addButton);

    expect(handleAddUserData).toHaveBeenCalledWith('divyanshu','divyanshu@gmail.com')

    });

    it('when add button is pressed without entering name and email',()=>{

        const handleAddUserData = jest.fn();
        const {getByPlaceholderText, getByText} = render(<UserForm onAddUser={handleAddUserData}/>);

        const nameInputData = getByPlaceholderText("Enter your name");
        const emailInputData = getByPlaceholderText("Enter your email");
        const addButton = getByText('Add');

        fireEvent.changeText(nameInputData,'');
        fireEvent.changeText(emailInputData,'');
        fireEvent.press(addButton);

        expect(handleAddUserData).not.toBeCalled()

    });

    it('when add button is pressed with email but not name',()=>{

        const handleAddUserData = jest.fn();
        const {getByPlaceholderText, getByText} = render(<UserForm onAddUser={handleAddUserData}/>);

        const nameInputData = getByPlaceholderText("Enter your name");
        const emailInputData = getByPlaceholderText("Enter your email");
        const addButton = getByText('Add');

        fireEvent.changeText(nameInputData,'');
        fireEvent.changeText(emailInputData,'divyanshu@gmail.com');
        fireEvent.press(addButton);

        expect(handleAddUserData).not.toBeCalled()

    });

    it('when add button is pressed with name but not email',()=>{

        const handleAddUserData = jest.fn();
        const {getByPlaceholderText, getByText} = render(<UserForm onAddUser={handleAddUserData}/>);

        const nameInputData = getByPlaceholderText("Enter your name");
        const emailInputData = getByPlaceholderText("Enter your email");
        const addButton = getByText('Add');

        fireEvent.changeText(nameInputData,'divyanshu');
        fireEvent.changeText(emailInputData,'');
        fireEvent.press(addButton);

        expect(handleAddUserData).not.toBeCalled()

    });






})
