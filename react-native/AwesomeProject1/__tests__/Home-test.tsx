import 'react-native';
import React from 'react';
import { cleanup, render,screen, fireEvent } from "@testing-library/react-native";
import { Home } from '../Component/Home';


describe('Home SCREENS ',()=>{

    const addHandler = jest.fn()

    test('Home Screen is Present.', () => {

        const {  getByTestId } = render(<Home UserData={addHandler} />);

            const HomeScreen  =getByTestId('homeScreen');

            expect(HomeScreen).toBeDefined();

    });
    test('Checking FlatList is Present.', () => {

        const {  getByTestId } = render(<Home UserData={addHandler} />);

            const FlatList  =getByTestId('flatList');

            expect(FlatList).toBeDefined();
    });
    

})