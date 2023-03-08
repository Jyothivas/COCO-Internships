import React from "react";
import { fireEvent, render } from '@testing-library/react-native';
import Form from "../components/Form";
import renderer from 'react-test-renderer';


describe('Form Component', () => {
    const handleAddUser = jest.fn();

    it('Form component is defined', () => {
        expect(Form).toBeDefined();
    })
    it('renders correctly', () => {
        renderer.create(<Form AddUser={handleAddUser} />);
    });
    it('Form component renders correctly', () => {
        const { getByTestId, getByText, getByPlaceholderText } = render(<Form AddUser={handleAddUser} />)

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

    it('add user when the Add button is pressed', () => {

        const { getByPlaceholderText, getByText } = render(<Form AddUser={handleAddUser} />);

        const nameInput = getByPlaceholderText('Enter your name');
        const emailInput = getByPlaceholderText('Enter your email');
        const addButton = getByText('Add');

        fireEvent.changeText(nameInput, 'Amruta');
        fireEvent.changeText(emailInput, 'amruta@example.com');
        fireEvent.press(addButton);

        expect(handleAddUser).toHaveBeenCalledWith('Amruta', 'amruta@example.com')

    });

})