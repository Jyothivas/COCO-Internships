import { render } from '@testing-library/react-native';
import Jsondata from '../Assests/listings-buy-data.json';
import HouseCarousel from '../src/HouseCarousel';


let movidata = Jsondata.data.listings.data.slice(0, 10)
describe('App component', () => {
  it('renders the component without errors', () => {
    render(<HouseCarousel movidata={movidata} />);
  });

  it('renders when the data is empty', () => {
    const { queryByText } = render(<HouseCarousel movidata={[]} />);
    const emptyDataText = queryByText('No data available');
    expect(emptyDataText).not.toBeNull();
  });

});