import React from "react";
import {fireEvent,render, waitFor} from '@testing-library/react-native';
import App from "../App";

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const navigation = { navigate: () => { } }
jest.spyOn(navigation, 'navigate')


jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return jest.fn();
  },
}));

describe("App component",()=>{
  test("testing component",()=>{
    const render1 = render(<App/>);
    expect(render1).toBeDefined();
  })

  test("Button Test",()=>{
    const{ getByTestId }=render(<App/>);
    const byID=getByTestId('a1');
    expect(byID).toBeDefined();
  })
  test("Button press",()=>{
    const {getByTestId}=render(<App/>);
    const btn1=getByTestId('a1')
    fireEvent.press(btn1);
  })
})