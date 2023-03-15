import { render } from '@testing-library/react-native';
import Jsondata from '../Assests/listings-buy-data.json';
import HomeCard from '../src/HomeCard';


let movidata = Jsondata.data.listings.data.slice(0, 10)
describe('App component', () => {
  it('renders the component without errors', () => {
    render(<HomeCard movidata={movidata} />);
  });

  it('renders when the data is empty', () => {
    const { queryByText } = render(<HomeCard movidata={[]} />);
    const emptyDataText = queryByText('No data available');
    expect(emptyDataText).not.toBeNull();
  });

});