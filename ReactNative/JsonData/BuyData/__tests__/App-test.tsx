import { render } from '@testing-library/react-native';
import Jsondata from '../Assests/listings-buy-data.json';
import App from '../App';

let movidata = Jsondata.data.listings.data.slice(0, 10)
describe('App component', () => {
  it('renders the component without errors', () => {
    render(<App movidata={movidata} />);
  });

  it('renders when the data is empty', () => {
    const { queryByText } = render(<App movidata={[]} />);
    const emptyDataText = queryByText('No data available');
    expect(emptyDataText).not.toBeNull();
  });

  it('renders and scrolls through images', () => {
    const { getByTestId } = render(<App movidata={movidata} />);

    // Check that the hero image, agent photos, and house images are rendered
    movidata.map((item: any, index: number) => {
      const heroImage = getByTestId('heroImage' + index);
      expect(heroImage).toBeTruthy();

      item.agents.map((agentItem: any, agentindex: number) => {
        const agentPhotoimage = getByTestId('agentPhotoImage' + agentindex + index);
        expect(agentPhotoimage).toBeTruthy();
      });
      item.images.map((houseimg: any, houseindex: number) => {
        const housePhotoimage = getByTestId('houseImage' + houseindex + index);
        expect(housePhotoimage).toBeTruthy();
      });
    });
  });
});