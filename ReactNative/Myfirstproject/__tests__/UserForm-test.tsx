import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import UserForm from '../components/UserForm';


describe('UserForm Component', () => {

    const handleAddUser = jest.fn();
    const changeIndex = jest.fn();

    it('UserForm component is defined', () => {
        expect(UserForm).toBeDefined();
    });

    it('UserForm component renders correctly', () => {
        const { getByTestId, getByText, getByPlaceholderText } = render(<UserForm changeIndex={changeIndex} AddUser={handleAddUser} />)

        const component = getByTestId('user-form');
        expect(component).toBeDefined();

        const nameText = getByTestId('name-test');
        expect(nameText).toBeDefined();

        const nameInput = getByPlaceholderText('Enter your name');
        expect(nameInput).toBeDefined();

        const emailText = getByTestId('name-test');
        expect(emailText).toBeDefined();

        const emailInput = getByPlaceholderText('Enter your email');
        expect(emailInput).toBeDefined();

        const addButton = getByText('Add');
        expect(addButton).toBeDefined();

        const cancelButton = getByText('Cancel');
        expect(cancelButton).toBeDefined();

    });

    it('given data is not filled, when Add button is pressed, then it doesnt add data in the list', () => {

        const { getByPlaceholderText, getByText } = render(<UserForm changeIndex={changeIndex} AddUser={handleAddUser} />);

        const nameInput = getByPlaceholderText('Enter your name');
        const emailInput = getByPlaceholderText('Enter your email');
        const addButton = getByText('Add');

        fireEvent.changeText(nameInput, '');
        fireEvent.changeText(emailInput, '');
        fireEvent.press(addButton);

        expect(handleAddUser).not.toBeCalled();

    });

    it('add users when the Add button is pressed', () => {

        const { getByPlaceholderText, getByText } = render(<UserForm changeIndex={changeIndex} AddUser={handleAddUser} />);

        const nameInput = getByPlaceholderText('Enter your name');
        const emailInput = getByPlaceholderText('Enter your email');
        const addButton = getByText('Add');

        fireEvent.changeText(nameInput, 'Amruta');
        fireEvent.changeText(emailInput, 'amruta@example.com');
        fireEvent.press(addButton);

        expect(handleAddUser).toHaveBeenCalledWith('Amruta', 'amruta@example.com');

    });
});