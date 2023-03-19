import React from 'react';
import {Dimensions} from 'react-native'
import { render, fireEvent } from '@testing-library/react-native';
import ImageView from '../src/ImageView';
import { HouseData } from '../src/DummyHouseData';

const width = Dimensions.get('window').width;

let housedatacopy=HouseData.data.listings.data[0]

describe('ImageView component', () => {
  const images = housedatacopy.images
   
  it('renders ScrollView and Image components', () => {
    const { getByTestId, getAllByTestId } = render(<ImageView route={{ params: { images } }} />);

    expect(getByTestId('imagecontainer')).toBeDefined();
    expect(getByTestId('imagecontainer').props.children).toHaveLength(2);

    expect(getAllByTestId(/HouseImage/)).toHaveLength(images.length);
    expect(getAllByTestId(/HouseImage/)[0].props.source.uri).toBe('https://cdn.uatr.view.com.au/images/listing/slug/800-min/' + images[0].url.split("/")[2]);
  });

  it('renders active and inactive indicators correctly', () => {
    const { getByTestId, getAllByTestId } = render(<ImageView route={{ params: { images } }} />);

    const indicatorsContainer = getByTestId('imageindicators');
    expect(indicatorsContainer.props.children).toHaveLength(images.length);

    expect(getAllByTestId(/activeitem/)).toHaveLength(images.length);
    expect(getAllByTestId(/activeitem/)[0].props.style.backgroundColor).toBe('red');
    expect(getAllByTestId(/activeitem/)[1].props.style.backgroundColor).toBe('gray');
  });

  it('updates activeIndex on scroll', () => {
    const { getByTestId } = render(<ImageView route={{ params: { images } }} />);

    const scrollView = getByTestId('imagescrollview');
    fireEvent.scroll(scrollView, { nativeEvent: { contentOffset: { x:width * 1} } });

    expect(getByTestId('imageindicators').props.children[1].props.style.backgroundColor).toBe('red');
  });
});
