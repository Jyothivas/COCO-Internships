import 'react-native';
import React from 'react';
import App from '../App';
import { render} from "@testing-library/react-native";


describe('App Screen',()=>{
  
  test('App renders correctly', () => {
    
   const appPage= render(<App />)
   expect(appPage).toBeDefined();

  })


})





