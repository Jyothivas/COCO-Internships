import React from "react";
import { fireEvent, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import FormList from "../components/FormList";

describe('FormList Component', () => {

    const users = [
        { name: 'Alice', email: 'alice@example.com' },
    ];

    const changeIndex = jest.fn();
    
    const props = { UsersName: users, changeIndex: changeIndex};

    it('FormList component is defined', () => {
        expect(FormList).toBeDefined();
    });

    it('renders correctly', () => {
        renderer.create(<FormList {...props} />)
    });


    it('FormList component render correctly', () => {
        const { getByTestId, } = render(<FormList {...props} />);
        
        const formList = getByTestId('card');
        expect(formList).toBeDefined();

        const navigateFormScreenButton = getByTestId('Create User');
        expect(navigateFormScreenButton).toBeDefined();

    });

    it('should navigate to the user form screen when the "Create User" button is pressed', () => {
        const { getByTestId } = render(<FormList {...props} />);
        const createNewUserButton = getByTestId('Create User');
    
        fireEvent.press(createNewUserButton);
    
          expect(changeIndex).toHaveBeenCalled();
        });

});