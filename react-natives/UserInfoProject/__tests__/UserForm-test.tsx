import React from "react";
import { fireEvent, render } from '@testing-library/react-native';
import UserForm from "../components/UserForm";
import renderer from 'react-test-renderer';


describe('UserForm Component', () => {
    const handleAddUser = jest.fn();

    it('UserForm component is defined', () => {
        expect(UserForm).toBeDefined();
    })
    it('renders correctly', () => {
        renderer.create(<UserForm onAddUser={handleAddUser} navigation={null} />);
    });
    it('UserForm component renders correctly', () => {
        const { getByTestId, getByText, getByPlaceholderText } = render(<UserForm onAddUser={handleAddUser} navigation={null} />)

        const component = getByTestId('user-form');
        expect(component).toBeDefined();

        const nameText = getByTestId('name-test');
        expect(nameText).toBeDefined();

        const nameInput = getByPlaceholderText('Enter your name');
        expect(nameInput).toBeDefined();

        const emailText = getByTestId('email-test');
        expect(emailText).toBeDefined();

        const emailInput = getByPlaceholderText('Enter your email');
        expect(emailInput).toBeDefined();

        const addButton = getByText('Add');
        expect(addButton).toBeDefined();

        const cancelButton = getByText('Cancel');
        expect(cancelButton).toBeDefined();

    });

    it('should add a user when the Add button is pressed', () => {

        const navigation ={navigate:()=>{}}
        jest.spyOn(navigation,'navigate')

        const { getByPlaceholderText, getByText } = render(<UserForm navigation={navigation} onAddUser={handleAddUser}  />);

        const nameInput = getByPlaceholderText('Enter your name');
        const emailInput = getByPlaceholderText('Enter your email');
        const addButton = getByText('Add');

        fireEvent.changeText(nameInput, 'John');
        fireEvent.changeText(emailInput, 'john@example.com');
        fireEvent.press(addButton);

        expect(handleAddUser).toHaveBeenCalledWith('John', 'john@example.com')
        expect(navigation.navigate).toBeCalledWith('User Data')

    });

    it('should navigate to User Data screen a user when the Add button is pressed', () => {
        
        const navigation ={navigate:()=>{}}
        jest.spyOn(navigation,'navigate')

        const { getByPlaceholderText, getByText } = render(<UserForm navigation={navigation} onAddUser={handleAddUser}  />);

        const nameInput = getByPlaceholderText('Enter your name');
        const emailInput = getByPlaceholderText('Enter your email');
        const addButton = getByText('Add');

        fireEvent.changeText(nameInput, 'John');
        fireEvent.changeText(emailInput, 'john@example.com');
        fireEvent.press(addButton);

        expect(navigation.navigate).toBeCalledWith('User Data')

    });

    

})

it('should pass empty field and press button', () => {

    const navigation ={navigate:()=>{}}
    jest.spyOn(navigation,'navigate')
    const handleAddUser = jest.fn();

    const { getByPlaceholderText, getByText } = render(<UserForm navigation={navigation} onAddUser={handleAddUser}  />);

    const nameInput = getByPlaceholderText('Enter your name');
    const emailInput = getByPlaceholderText('Enter your email');
    const addButton = getByText('Add');

    fireEvent.changeText(nameInput,'');
    fireEvent.changeText(emailInput,'');
    fireEvent.press(addButton);

    expect(handleAddUser).not.toBeCalled()

});