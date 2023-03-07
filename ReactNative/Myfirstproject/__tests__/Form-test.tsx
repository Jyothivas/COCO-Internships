import React from "react";
import { fireEvent, render } from '@testing-library/react-native';
import { Form } from "../components/Form";
import renderer from 'react-test-renderer';

describe('Form Component', () => {
    it('Form component is defined', () => {
        expect(Form).toBeDefined();
    })
    it('renders correctly', () => {
        renderer.create(<Form />);
    });
    it('Form component renders correctly', () => {
        const { getByTestId, getByText, getByPlaceholderText } = render(<Form />)

        const component = getByTestId('name');
        expect(component).toBeDefined();

        const nameText = getByTestId('nametext');
        expect(nameText).toBeDefined();

        const nameInput = getByPlaceholderText('Enter your name');
        expect(nameInput).toBeDefined();

        const emailText = getByTestId('nametext');
        expect(emailText).toBeDefined();

        const emailInput = getByPlaceholderText('Enter your email');
        expect(emailInput).toBeDefined();

        const addButton = getByText('Add');
        expect(addButton).toBeDefined();

        const cancelButton = getByText('Cancel');
        expect(cancelButton).toBeDefined();
    });

    it('adds items in a list', () => {
        const { getByPlaceholderText, getByText, getByTestId } = render(<Form />);
        
        const nameInput = getByPlaceholderText('Enter your name');
        const emailInput = getByPlaceholderText('Enter your email');
        const addButton = getByText('Add');
        const flatList = getByTestId('flatlist');
    
        fireEvent.changeText(nameInput, 'amruta');
        fireEvent.changeText(emailInput, 'amruta@gmail.com');
        fireEvent.press(addButton);
    
        expect(getByText('amruta')).toBeDefined();
        expect(getByText('amruta@gmail.com')).toBeDefined();
        expect(flatList.props.data[0].name).toContain('amruta');
        expect(flatList.props.data[0].email).toContain('amruta@gmail.com');
      });
})