import fetchMock from 'jest-fetch-mock';
import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../src/Home';
import { HouseData } from '../src/DummyHouseData';
 


describe('Home', () => {

  const mockNavigation = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should mock API call', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(HouseData.data));
    const response = await fetch('http://192.168.0.105:3000/data');
    const data = await response.json();
    expect(data).toEqual(HouseData.data);
    expect(fetchMock).toHaveBeenCalledWith('http://192.168.0.105:3000/data');
  });

  
  it('renders a list of home properties', () => {
    const { getByTestId, queryAllByTestId } = render(<Home 
      housedata={HouseData.data.listings.data}
      navigation={mockNavigation} />);
    const flatList = getByTestId('flatList');
    expect(flatList).toBeTruthy();

    // Check for the presence of at least one HomeCard component, but don't wait for them to finish rendering
    const homeCards = queryAllByTestId('homeCard');
    expect(homeCards).toBeTruthy();
    expect(homeCards?.length).toBeGreaterThan(0);
  });
  
  it('displays a message if no data is available', () => {
    const { getByText } = render(<Home 
      housedata={[]}
      navigation={mockNavigation} />);
    const emptyMessage = getByText('No data available');
    expect(emptyMessage).toBeTruthy();
  });
});
