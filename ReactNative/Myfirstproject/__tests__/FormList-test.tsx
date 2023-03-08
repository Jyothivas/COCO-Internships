import React from "react";
import { fireEvent, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import FormList from "../components/FormList";

describe('FormList Component', () => {

    const users = [
        { name: 'Alice', email: 'alice@example.com' },
    ];

    const gotoFormScreen = jest.fn();
    const props = { formlistdata: users, AddUser: gotoFormScreen };

    it('FormList component is defined', () => {
        expect(FormList).toBeDefined();
    });

    it('renders correctly', () => {
        renderer.create(<FormList {...props} />)
    });


    it('FormList component render correctly', () => {
        const { getByTestId, getByText } = render(<FormList {...props} />);
        
        const formList = getByTestId('table');
        expect(formList).toBeDefined();

        const navigateFormScreenButton = getByText('Create User');
        expect(navigateFormScreenButton).toBeDefined();

    });

    it('should navigate to the user form screen when the "Create User" button is pressed', () => {
        const { getByText } = render(<FormList {...props} />);
        const createNewUserButton = getByText('Create User');
    
        fireEvent.press(createNewUserButton);
    
          expect(gotoFormScreen).toHaveBeenCalled();
        });

});