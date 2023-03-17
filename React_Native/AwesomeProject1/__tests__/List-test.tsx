import React from 'react-native';
import {fireEvent, render} from '@testing-library/react-native';
import { List } from '../Component/List';

// test('Testing the List render or not',()=>{
//     render(<List userdata={console.log("show")}/>);
// })
// test('testing button to the list',()=>{
//     const {getByTestId}=render(<List userdata={console.log('test')}/>)
//     const btn1=getByTestId('b1')
//     fireEvent.press(btn1);
//     expect(1).toBe(1);
// })
// test('Testing the flatlist ',()=>{
//     const {getByTestId}=render(<List userdata={console.log("Present")}/>)
//     const list=getByTestId('flat-list');
//     expect(list).toBeDefined();
// })


describe('List Component',()=>{
    test('List Component render correctly',()=>{
        const userdata2=jest.fn();
        const navigation={navigate:()=>{}}
        const click=render(<List navigation={undefined} userdata={userdata2}/>);
    
        expect(click).toBeDefined();

        
    })
    test('Component testing',()=>{
        const div=jest.fn();
        const navigation={navigate: () =>{}}
        const {getByTestId}=render(<List navigation={undefined}  userdata={div}/>);
        const flatlist1=getByTestId('flat-list');
        expect(flatlist1).toBeDefined();

    })
        
    test('View testing',()=>{
        const view2=jest.fn();
        const navigation={navigate: () =>{}}
        const {getByTestId}=render(<List navigation={undefined}  userdata={view2}/>);
        const toview=getByTestId('v1');
        expect(toview).toBeDefined();

    })
    
})