import { render } from '@testing-library/react-native';
import React from 'react';
import UserData from '../Component/UserData';



describe('component-UserData',()=>{

    const users=[{name:"divyanshu", email:"divyanshu@gmail.com"}];

    it('UserData component is defined', ()=>{
        expect(UserData).toBeDefined();

    });

    it('UserData component renders',()=>{
        const {getByTestId} = render(<UserData/>);

        const tableData = getByTestId('table');
        expect(tableData).toBeDefined();

    });



})