import ListBuy from '../Component/ListBuy'
import { render } from '@testing-library/react-native'

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