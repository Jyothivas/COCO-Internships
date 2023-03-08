import React from "react";
import CustomerSupport from "../component/CustomerSupport";
import {render} from '@testing-library/react-native';
import { Text } from "react-native";

test("These is the text",()=>{
    const {getByText}=render(<CustomerSupport/>);
    const cssupport=getByText('Hello');
    expect(cssupport.type).toBe('Text');
})