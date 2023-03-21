import React from "react";
import {render} from "@testing-library/react-native"
import Housepic from "../Components/Housepic";
import jsonDB from "../API data/db.json"
import ListBuy from "../Components/ListBuy";


describe('Housepic Component',() => {
   it('Housepic component is defined',()=>{
      expect(Housepic).toBeDefined(); 
   })

   it('json file contains data',()=>{
      expect(jsonDB).not.toBeNull();
   })

   it('ListBuy component render correctly', () => {
      const { getByTestId } = render(<ListBuy />);

      const HosuepicFlatList = getByTestId('Housepic-FlatList');
      expect(HosuepicFlatList).toBeDefined();

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




