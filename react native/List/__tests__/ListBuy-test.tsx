import React from "react";
import ListBuy from "../Components/ListBuy";
import {render } from "@testing-library/react-native"

describe('ListBuy Components', () => {

    it('ListBuy component render correctly', () => {
        const { getByTestId } = render(<ListBuy />);

        const BuyFlatList = getByTestId('ListBuy-Flatlist');
        expect(BuyFlatList).toBeDefined();

    });

    const data = jest.fn(async () => {
        const url = 'http://192.168.29.96:3000/data';
        let response: any = await fetch(url);
        response = await response.json();
        return response;
    })

    it('works with async/await', async () => {
        expect.assertions(1);
        expect(data).not.toBeNull();
    });
})
