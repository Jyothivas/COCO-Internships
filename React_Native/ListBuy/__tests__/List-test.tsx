import React from "react";
import {render} from '@testing-library/react-native';
import List from "../component/List";
describe('List Component',()=>{

    

    
    test('Testing Flatlist',()=>{
        const {getByTestId}=render(<List/>);
        const l1=getByTestId('f1');
        expect(l1).toBeDefined();
    })
    
    test('Testing image url',async ()=>{
        const {getByTestId,getAllByTestId}=render(<List/>);       
        const l1=await getAllByTestId('i1');
        expect(l1).toBeDefined();
    })
    test('Testing image url',async()=>{
        const {getByTestId,getAllByTestId}=render(<List/>);       
        const l1=await getAllByTestId('i4');
        expect(l1).toBeDefined();
    })
   
    // test('Testing the image',()=>{
    //     const {queryByRole} =render(<List/>);
    //     const image=queryByRole('i1');
    //     expect(image).not.toBeNull();
    // })

    // test('renders an image', () => {
    //     const { queryByTestId } = render(<List />);
    //     const image = queryByTestId('i1');
    
    //     expect(image).not.toBeNull();
    //   });

})