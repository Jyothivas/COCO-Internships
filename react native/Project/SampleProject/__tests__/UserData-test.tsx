import React from "react";
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import UserData from "../components/UserData";

describe('UserData Component', () => {

    const users = [
        { name: 'Alice', email: 'alice@example.com' },
    ];

    
    const props = { UserData: users };

    it('UserData component is defined', () => {
        expect(UserData).toBeDefined();
    });

    it('renders correctly', () => {
        renderer.create(<UserData {...props} />)
    });


    it('UserData component render correctly', () => {
        const { getByTestId } = render(<UserData {...props} />);
        
        const userData = getByTestId('table');
        expect(userData).toBeDefined();

    });

  

});