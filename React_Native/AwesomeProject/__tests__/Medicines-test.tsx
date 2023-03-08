import React from 'react'
import {render,screen} from '@testing-library/react-native'
import Medicine from '../component/Medicine';


test('books image is showing',()=>{
    
    const {getByTestId}=render(<Medicine />);
    const bookImage=getByTestId('i1');
    expect(bookImage.type).toBe('Image');
    
})
test('books text is showing',()=>{
    
    const {getByText}=render(<Medicine />);
    const booktext=getByText('Capsules');
    expect(booktext.type).toBe('Text');
    
})

