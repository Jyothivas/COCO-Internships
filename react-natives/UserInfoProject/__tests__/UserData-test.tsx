// import React from "react";
// import { fireEvent, render } from '@testing-library/react-native';
// import renderer from 'react-test-renderer';
// import UserData from "../components/UserData";


// describe('UserData Component', () => {

//     const users = [
//         { name: 'Manoranjan', email: 'mjena@mitaoe' },
//     ];

//     const navigation ={navigate:()=>{}}
//         jest.spyOn(navigation,'navigate')


//     const props = { UserData: users, navigation:navigation };

//     it('UserData component is defined', () => {
//         expect(UserData).toBeDefined();
//     });

//     it('renders correctly', () => {
//         renderer.create(<UserData {...props} />)
//     });


//     it('UserData component render correctly', () => {
//         const { getByTestId, getByText } = render(<UserData {...props} />);

//         const userData = getByTestId('table');
//         expect(userData).toBeDefined();

//         const navigateFormScreenButton = getByText('Create New User');
//         expect(navigateFormScreenButton).toBeDefined();

//     });

//     it('should navigate to the user form screen when the "Create New User" button is pressed', () => {

//         const { getByText } = render(<UserData  {...props} />);
//         const createNewUserButton = getByText('Create New User');

//         fireEvent.press(createNewUserButton);

//         expect(navigation.navigate).toHaveBeenCalledWith('User Form');
//         });

// });




import React from "react";
import { render } from '@testing-library/react-native';
import UserData from "../components/UserList";

describe('UserData Component', () => {

    const users = [
        { name: 'john', email: 'john@example.com' },
    ];

    it('UserData component is defined', () => {
        expect(UserData).toBeDefined();
    });


    it('UserData component render correctly', () => {
        const { getByTestId } = render(<UserData />);

        const userData = getByTestId('table');
        expect(userData).toBeDefined();

    });

});