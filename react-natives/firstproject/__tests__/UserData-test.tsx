import React from "react";
import { render } from "@testing-library/react-native";
import UserData from '../components/UserData';

describe('UserData Component', () => {
    it('UserData component is defined', () => {
        expect(UserData).toBeDefined();
    })
    it('UserData component renders correctly', () => {
        const { getByTestId, getByText, getByPlaceholderText } = render(<UserData />)

        const component = getByTestId('user-data');
        expect(component).toBeDefined();

        const nameText = getByText('Name');
        expect(nameText).toBeDefined();

        const nameInput = getByPlaceholderText('Enter your name');
        expect(nameInput).toBeDefined();
    })
})