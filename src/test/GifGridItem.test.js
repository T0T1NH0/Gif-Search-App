import React from 'react';
import { shallow } from 'enzyme-to-json';

import '@testing-library/jest-dom';
import GifGridItem from '../components/GifGridItem';

describe('Test with the component GifGridItem', () => {
  //   beforeEach(() => {
  //     wrapper = shallow(<GifGridItem />);
  //   });

  test('debe de mostrar el <GifGridItem /> correctamente', () => {
    const wrapper = shallow(<GifGridItem />);

    // expect(wrapper).toMatchSnapshot();
  });
});
