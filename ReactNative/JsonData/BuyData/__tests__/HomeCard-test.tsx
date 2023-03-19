import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeCard from '../src/HomeCard';
import { HouseData } from '../src/DummyHouseData';

let housedatacopy=HouseData.data.listings.data[0]

const props = {
    HeroImage: housedatacopy.heroImageUrl,
    Description: housedatacopy.bathrooms + ' bathrooms,' + housedatacopy.bedrooms + ' bedrooms for sale in:' + housedatacopy.streetAddress,
    AgentImage: housedatacopy.agents,
    onpressImage: jest.fn(),
  };
describe('HomeCard', () => {
  it('renders correctly', () => {
   
    const { getByTestId } = render(<HomeCard {...props}/>);
    expect(getByTestId('homeCard')).toBeDefined();
  });

  it('calls the onpressImage callback when the hero image is pressed', () => {

    const { getByTestId } = render(<HomeCard {...props} />);
    fireEvent.press(getByTestId('heroImagetouchable'));
    expect(props.onpressImage).toHaveBeenCalled();
  });

  it('displays the correct description', () => {
    const { getByText } = render(<HomeCard {...props} />);
    expect(getByText(props.Description)).toBeDefined();
  });
});
