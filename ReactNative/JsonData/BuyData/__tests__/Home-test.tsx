import fetchMock from 'jest-fetch-mock';
import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../src/Home';

const HouseData={
  "data": {
   "listings": {
     "total": 10000,
     "data": [
       {
         "propertyTypes": ["House"],
         "agentId": [81662],
         "carparks": 6,
         "rentPerWeek": null,
         "city": null,
         "unitNumber": null,
         "inspections": [],
         "agencyId": 27071,
         "isPriceHidden": true,
         "heroImageUrl": "pics/307/14441307-1-3536325.jpg",
         "createdAt": "2022-11-21 06:20:20",
         "suburbName": "WODONGA",
         "priceFrom": 875000,
         "auctionAt": null,
         "rank": "Premium",
         "id": 14441307,
         "state": "VIC",
         "onMarketAt": "2022-11-21 06:20:20",
         "priceText": "Contact Agent",
         "updatedAt": "2022-12-20 00:34:34",
         "streetNumber": "14",
         "postcode": "3690",
         "bathrooms": 1,
         "bedrooms": 3,
         "primaryPropertyType": "House",
         "streetAddress": "nilmar-avenue",
         "location": {
           "lon": 146.88605,
           "lat": -36.125101
         },
         "region": "North Eastern",
         "status": "On Market",
         "_id": "14441307",
         "listingDetailLink": "/real-estate/14-nilmar-avenue-wodonga-vic/property-details-buy-residential-14441307/",
         "images": [
           {
             "sequence": 1,
             "url": "pics/307/14441307-1-3536325.jpg"
           },
           {
             "sequence": 2,
             "url": "pics/307/14441307-2-F3D80BA.jpg"
           },
           {
             "sequence": 3,
             "url": "pics/307/14441307-3-45E247C.jpg"
           },
           {
             "sequence": 4,
             "url": "pics/307/14441307-4-25A4C1A.jpg"
           },
           {
             "sequence": 5,
             "url": "pics/307/14441307-5-6D20B9B.jpg"
           },
           {
             "sequence": 6,
             "url": "pics/307/14441307-6-881B1C6.jpg"
           },
           {
             "sequence": 7,
             "url": "pics/307/14441307-7-4054061.jpg"
           },
           {
             "sequence": 8,
             "url": "pics/307/14441307-8-CD72F80.jpg"
           },
           {
             "sequence": 9,
             "url": "pics/307/14441307-9-D5ECD6B.jpg"
           },
           {
             "sequence": 10,
             "url": "pics/307/14441307-10-A87ED40.jpg"
           },
           {
             "sequence": 11,
             "url": "pics/307/14441307-11-EC379F2.jpg"
           },
           {
             "sequence": 12,
             "url": "pics/307/14441307-12-C33E3F3.jpg"
           },
           {
             "sequence": 13,
             "url": "pics/307/14441307-13-177BD81.jpg"
           }
         ],
         "agency": {
           "officeName": "Rise RE Albury Wodonga",
           "brandColour": "7FCBAE",
           "address": "Shop 8/525 David Street, Albury, NSW 2640",
           "brandContrastColour": "000000",
           "logoFileName": "office/0027071-o-qhYsPCX.jpg",
           "id": 27071,
           "slug": "rise-re-albury-wodonga",
           "_id": "27071",
           "agencyProfileLink": "/real-estate-agency/rise-re-albury-wodonga-27071/"
         },
         "agents": [
           {
             "firstName": "Robert",
             "lastName": "Gibson",
             "mobile": "0413779933",
             "agentPhotoFileName": "3535db4cf6c24847900d4e1c6539df77.jpg",
             "id": "81662",
             "_id": "81662",
             "agentProfileLink": "/agent-profile/robert-gibson-81662/"
           }
         ]
       },
       {
         "propertyTypes": ["House"],
         "agentId": [44256, 110139],
         "carparks": 5,
         "rentPerWeek": null,
         "city": "Melbourne",
         "unitNumber": null,
         "inspections": null,
         "agencyId": 5833,
         "isPriceHidden": true,
         "heroImageUrl": "pics/672/14384672-1-D3D4936.jpg",
         "createdAt": "2022-10-18 07:08:18",
         "suburbName": "TEMPLESTOWE",
         "priceFrom": 5250000,
         "auctionAt": null,
         "rank": "Premium",
         "id": 14384672,
         "state": "VIC",
         "onMarketAt": "2022-10-18 07:08:18",
         "priceText": "Contact Agent",
         "updatedAt": "2022-10-27 07:14:12",
         "streetNumber": "20",
         "postcode": "3106",
         "bathrooms": 6,
         "bedrooms": 5,
         "primaryPropertyType": "House",
         "streetAddress": "Dellas Avenue",
         "location": {
           "lon": 145.123783,
           "lat": -37.751723
         },
         "region": "East",
         "status": "On Market",
         "_id": "14384672",
         "listingDetailLink": "/real-estate/20-dellas-avenue-templestowe-vic/property-details-buy-residential-14384672/",
         "images": [
           {
             "sequence": 7,
             "url": "pics/672/14384672-7-685BF6E.jpg"
           },
           {
             "sequence": 8,
             "url": "pics/672/14384672-8-2F0BDAB.jpg"
           },
           {
             "sequence": 9,
             "url": "pics/672/14384672-9-40B7C73.jpg"
           },
           {
             "sequence": 10,
             "url": "pics/672/14384672-10-E8EA9DB.jpg"
           },
           {
             "sequence": 11,
             "url": "pics/672/14384672-11-8758B21.jpg"
           },
           {
             "sequence": 12,
             "url": "pics/672/14384672-12-FA12151.jpg"
           },
           {
             "sequence": 13,
             "url": "pics/672/14384672-13-6CF625E.jpg"
           },
           {
             "sequence": 14,
             "url": "pics/672/14384672-14-E4EBABA.jpg"
           },
           {
             "sequence": 15,
             "url": "pics/672/14384672-15-70FC6BE.jpg"
           },
           {
             "sequence": 16,
             "url": "pics/672/14384672-16-A4E5E91.jpg"
           },
           {
             "sequence": 17,
             "url": "pics/672/14384672-17-12D9A19.jpg"
           },
           {
             "sequence": 18,
             "url": "pics/672/14384672-18-CDA54B7.jpg"
           },
           {
             "sequence": 19,
             "url": "pics/672/14384672-19-C3B9463.jpg"
           },
           {
             "sequence": 20,
             "url": "pics/672/14384672-20-CA1E1DE.jpg"
           },
           {
             "sequence": 21,
             "url": "pics/672/14384672-21-826E53D.jpg"
           },
           {
             "sequence": 22,
             "url": "pics/672/14384672-22-5086095.jpg"
           },
           {
             "sequence": 5,
             "url": "pics/672/14384672-5-18A46B9.jpg"
           },
           {
             "sequence": 6,
             "url": "pics/672/14384672-6-555E910.jpg"
           },
           {
             "sequence": 1,
             "url": "pics/672/14384672-1-70DFC17.jpg"
           },
           {
             "sequence": 2,
             "url": "pics/672/14384672-2-AE95982.jpg"
           },
           {
             "sequence": 3,
             "url": "pics/672/14384672-3-D735407.jpg"
           },
           {
             "sequence": 4,
             "url": "pics/672/14384672-4-5948B70.jpg"
           }
         ],
         "agency": {
           "officeName": "Jellis Craig Boroondara",
           "brandColour": "1D252D",
           "address": "248 Burwood Rd, Hawthorn, VIC 3122",
           "brandContrastColour": "ffffff",
           "logoFileName": "office/0005833-o-fjPfDTL.jpg",
           "id": 5833,
           "slug": "jellis-craig-hawthorn",
           "_id": "5833",
           "agencyProfileLink": "/real-estate-agency/jellis-craig-hawthorn-5833/"
         },
         "agents": [
           {
             "firstName": "Mike",
             "lastName": "Beardsley",
             "mobile": "0476 777 004",
             "agentPhotoFileName": "agents/0044256-a-1SEKdGp.jpg",
             "id": "44256",
             "_id": "44256",
             "agentProfileLink": "/agent-profile/mike-beardsley-44256/"
           },
           {
             "firstName": "Tony",
             "lastName": "Tuccitto",
             "mobile": "0407 144 390",
             "agentPhotoFileName": null,
             "id": "110139",
             "_id": "110139",
             "agentProfileLink": "/agent-profile/tony-tuccitto-110139/"
           }
         ]
       }
      ]
   }
  }
}
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
