import React from "react";
import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import FormList from "../components/FormList";

describe('FormList Component', () => {
    it('FormList component is defined', () => {
        expect(FormList).toBeDefined();
    });
    it('renders correctly', () => {
        renderer.create(<FormList />)
    });
    it('FormList component render correctly',()=>{
        const { getByTestId,getByText}=render(<FormList/>);
        const formList = getByTestId('carddetails');
        expect(formList).toBeDefined();
    });

});