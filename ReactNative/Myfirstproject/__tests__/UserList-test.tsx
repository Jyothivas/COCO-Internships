import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import UserList from '../components/UserList';

describe('UserList Component', () => {

    const users = [
        { name: 'Alice', email: 'alice@example.com' },
    ];

    const changeIndex = jest.fn();

    const props = { UsersName: users, changeIndex: changeIndex };

    it('UserList component is defined', () => {
        expect(UserList).toBeDefined();
    });

    it('UserList component render correctly', () => {
        const { getByTestId } = render(<UserList {...props} />);

        const formList = getByTestId('card');
        expect(formList).toBeDefined();

        const nameText = getByTestId('flatlistname');
        expect(nameText).toBeDefined();

        const emailText = getByTestId('flatlistemail');
        expect(emailText).toBeDefined();

        const navigateFormScreenButton = getByTestId('Create User');
        expect(navigateFormScreenButton).toBeDefined();


    });

    it('should navigate to the user form screen when the "Create User" button is pressed', () => {
        const { getByTestId } = render(<UserList {...props} />);

        const createNewUserButton = getByTestId('Create User');
        fireEvent.press(createNewUserButton);

        expect(changeIndex).toHaveBeenCalled();
    });


});