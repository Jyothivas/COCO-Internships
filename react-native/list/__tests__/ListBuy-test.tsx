import ListBuy from '../Component/ListBuy'
import { render } from '@testing-library/react-native'
import JsonData from '../listings-buy-data.json';

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

  test('Checking JsonData not to bt NULL', () => {

    const JSONdata = JsonData;

    expect(JSONdata).not.toBeNull()


  })

  test('Agent image Rendred Correctly', async () => {

    const { getAllByTestId } = render(<ListBuy />)

    const image = await getAllByTestId('agentImage')
    expect(image).toBeDefined()
  })

  test('Hero image Rendred Correctly', async () => {

    const { getAllByTestId } = render(<ListBuy />)

    const image = await getAllByTestId('heroImage')
    expect(image).toBeDefined()
  })




})