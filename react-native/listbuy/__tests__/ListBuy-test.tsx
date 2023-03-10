import ListBuy from '../Component/listBuy'
import {render} from '@testing-library/react-native'

describe("ListBuy Component",()=>{

    test('List-Buy Component Rendred Correctly',()=>{

      const  ListBuyPage =  render(<ListBuy />)

      expect (ListBuyPage).toBeDefined();
    })

    test('Screen View Rendred Correctly',()=>{

      const  {getByTestId}=  render(<ListBuy />)

      const screeView = getByTestId('mainContent')
      expect (screeView).toBeDefined();
    })

    test('Heading Text Rendred Correctly',()=>{

      const  {getByTestId}=  render(<ListBuy />)

      const headingText = getByTestId('textHeading')
      expect (headingText).toBeDefined();
    })

})