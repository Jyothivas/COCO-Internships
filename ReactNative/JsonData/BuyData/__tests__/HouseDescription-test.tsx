import React from 'react';
import { render } from '@testing-library/react-native';
import HouseDescription from '../src/HouseDescription';
import { HouseData } from '../src/DummyHouseData';

let housedatacopy=HouseData.data.listings.data[0]


describe('HouseDescription', () => {
  it('renders the house description correctly', () => {
    const props = {
        Description: housedatacopy.bathrooms + ' bathrooms,' + housedatacopy.bedrooms + ' bedrooms for sale in:' + housedatacopy.streetAddress,
    };
    const { getByTestId, getByText } = render(<HouseDescription {...props} />);
    expect(getByTestId('housetext')).toBeDefined();
    expect(getByText(housedatacopy.bathrooms + ' bathrooms,' + housedatacopy.bedrooms + ' bedrooms for sale in:' + housedatacopy.streetAddress)).toBeDefined();
  });
});
