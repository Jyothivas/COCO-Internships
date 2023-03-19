import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HeroImage from '../src/HeroImage';
import { HouseData } from '../src/DummyHouseData';

let housedatacopy=HouseData.data.listings.data[0]
const props = {
    onpressImage: jest.fn(),
    HeroImage: housedatacopy.heroImageUrl,
  };
describe('HeroImage', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<HeroImage {...props} />);
    expect(getByTestId('heroImagetouchable')).toBeDefined();
    expect(getByTestId('heroImage')).toBeDefined();
  });

  it('calls the onpressImage callback when pressed', () => {
    const { getByTestId } = render(<HeroImage {...props} />);
    fireEvent.press(getByTestId('heroImagetouchable'));
    expect(props.onpressImage).toHaveBeenCalled();
  });
});
