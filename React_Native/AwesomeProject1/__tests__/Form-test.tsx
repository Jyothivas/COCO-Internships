import React from "react";
import Form from "../Component/Form";
import { fireEvent, render } from '@testing-library/react-native';

test('The testing Name ', () => {
    const { getByTestId } = render(<Form  addUser={() => console.log('hello')} />);

    const name1 = getByTestId('user-name');
    expect(name1).toBeDefined();
})
test('The testing email', () => {
    const { getByTestId } = render(<Form  addUser={() => console.log('test@1')} />);

    const email = getByTestId('user-mail');
    expect(email).toBeDefined();
})
test('Testing Button', () => {
    const { getByTestId } = render(<Form  addUser={() => console.log('test')} />);
    const btn = getByTestId('btn');
    fireEvent.press(btn);
    expect(1).toBe(1);
})


test('testing both input and  button', () => {
    const addHandler = jest.fn()
    const navigation = { navigate: () => { } }
    jest.spyOn(navigation, 'navigate')

    const { getByTestId , getByPlaceholderText } = render(<Form  addUser={addHandler} />)
    
    const name1 = getByTestId('user-name');
    const email = getByTestId('user-mail');
    const btn = getByTestId('btn');

    fireEvent.changeText(name1,'test');
    fireEvent.changeText(email,'test@123');
    fireEvent.press(btn);

    expect(addHandler).toHaveBeenCalledWith('test','test@123');

    

})
