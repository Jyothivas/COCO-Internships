import React from 'react';
import { render } from '@testing-library/react-native';
import AgentImage from '../src/AgentImage';
import { HouseData } from '../src/DummyHouseData';

let housedatacopy=HouseData.data.listings.data[0]
const props = {
    AgentImage:housedatacopy.agents,
  };
describe('AgentImage', () => {
  it('renders agent images correctly', () => {
    
    const { getByTestId } = render(<AgentImage {...props} />);
    expect(getByTestId('agentImagecontainer')).toBeDefined();
    props.AgentImage.map((agentItem: any, agentindex: number) => {
      expect(getByTestId("agentimage"+agentindex)).toBeDefined();
    })
  })
  
});
