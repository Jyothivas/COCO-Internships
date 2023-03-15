import 'react-native';
import React from 'react';
import { render } from "@testing-library/react-native";
import { Home } from '../Component/Home';


describe('Home SCREENS ', () => {

    const navigation = { navigate: () => { } }
    jest.spyOn(navigation, 'navigate')


    const addHandler = jest.fn()

    test('Home Screen is rendered correctly', () => {

        const { getByTestId } = render(<Home UserData={addHandler} />);

        const HomeScreen = getByTestId('homeScreen');

        expect(HomeScreen).toBeDefined();

    });
    test('Checking FlatList is Present.', () => {

        const navigation = { navigate: () => { } }
        jest.spyOn(navigation, 'navigate')


        const { getByTestId } = render(<Home UserData={addHandler} />);

        const FlatList = getByTestId('flatList');

        expect(FlatList).toBeDefined();
    });



})