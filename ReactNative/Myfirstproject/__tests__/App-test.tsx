import React from "react";
import {render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import App from "../App";

describe('App Component', () => {
    it('Form component is defined', () => {
        expect(App).toBeDefined();
    })
    it('renders correctly', () => {
        renderer.create(<App index={0}/>);
        
    });
    it('should show form without formlist', () => { 
        const page= render(<App index={0} />)

       page.getByTestId("mainview") 
      expect (page.queryAllByTestId("user-form").length).toEqual(1); 
      expect(page.queryAllByTestId("formlist").length).toEqual(0);

  });
  it('show formlist without form', () => { 
    const page= render(<App index={1} />)

   page.getByTestId("mainview") 
  expect (page.queryAllByTestId("user-form").length).toEqual(0); 
  expect(page.queryAllByTestId("formlist").length).toEqual(1);

});


})
