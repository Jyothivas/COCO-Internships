import { url, ListBuy } from '../Component/ListBuy'
import { render } from '@testing-library/react-native'
import JsonData from '../listings-buy-data.json';

import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ListBuy Component", () => {


  test('List-Buy Component Rendred Correctly', () => {

    const ListBuyPage = render(<ListBuy />)

    expect(ListBuyPage).toBeDefined();
  })

  test('FlatList Rendred Correctly', () => {

    const { getByTestId } = render(<ListBuy />)

    const FlatList = getByTestId('flatList')
    expect(FlatList).toBeDefined();
  })




  test('mock testing url api of List-buy work correctly', () => {

    const mockedApi = { data: {} }


    mockedAxios.get.mockResolvedValue(mockedApi);

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith(`http://192.168.0.102:3000/data`);

  })

  // test('agent image', () => {

  //   const { queryByTestId } = render(<ListBuy />)

  //   const agentImage = queryByTestId('agentImag')

  //   expect(agentImage).toBeDefined();

  // })


})